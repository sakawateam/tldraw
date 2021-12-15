import * as React from 'react'
import { Utils, SVGContainer } from '@tldraw/core'
import { Vec } from '@tldraw/vec'
import { getStroke, getStrokePoints } from 'perfect-freehand'
import { RectangleShape, DashStyle, TDShapeType, TDMeta, ImageShape } from '~types'
import { BINDING_DISTANCE, GHOSTED_OPACITY } from '~constants'
import { TDShapeUtil } from '../TDShapeUtil'
import {
  defaultStyle,
  getShapeStyle,
  getBoundsRectangle,
  transformRectangle,
  transformSingleRectangle,
} from '~state/shapes/shared'

type T = ImageShape
type E = SVGSVGElement

export class ImageUtil extends TDShapeUtil<T, E> {
  type = TDShapeType.Image as const

  canBind = true

  canClone = true

  getShape = (props: Partial<T>): T => {
    return Utils.deepMerge<T>(
      {
        id: 'id',
        type: TDShapeType.Image,
        name: 'Rectangle',
        parentId: 'page',
        childIndex: 1,
        point: [0, 0],
        size: [1, 1],
        rotation: 0,
        style: defaultStyle,
      },
      props
    )
  }

  Component = TDShapeUtil.Component<T, E, TDMeta>(
    ({ shape, isBinding, isSelected, isGhost, meta, events }, ref) => {
      const { id, size, style } = shape

      const styles = getShapeStyle(style, meta.isDarkMode)

      const { strokeWidth } = styles

      const pathTDSnapshot = getRectanglePath(shape)
      const indicatorPath = getRectangleIndicatorPathTDSnapshot(shape)

      return (
        <SVGContainer ref={ref} id={shape.id + '_svg'} {...events}>
          
          <image
            href={shape.url}
            className="tl-binding-indicator"
            x={strokeWidth / 2 - BINDING_DISTANCE}
            y={strokeWidth / 2 - BINDING_DISTANCE}
            width={Math.max(0, size[0] - strokeWidth / 2) + BINDING_DISTANCE * 2}
            height={Math.max(0, size[1] - strokeWidth / 2) + BINDING_DISTANCE * 2}
          />
        </SVGContainer>
      )
    }
  )

  Indicator = TDShapeUtil.Indicator<T>(({ shape }) => {
    const {
      style,
      size: [width, height],
    } = shape

    const styles = getShapeStyle(style, false)
    const sw = styles.strokeWidth

    if (style.dash === DashStyle.Draw) {
      return <path d={getRectangleIndicatorPathTDSnapshot(shape)} />
    }

    return (
      <rect
        x={sw}
        y={sw}
        rx={1}
        ry={1}
        width={Math.max(1, width - sw * 2)}
        height={Math.max(1, height - sw * 2)}
      />
    )
  })

  getBounds = (shape: T) => {
    return getBoundsRectangle(shape, this.boundsCache)
  }

  shouldRender = (prev: T, next: T) => {
    return next.size !== prev.size || next.style !== prev.style
  }

  transform = transformRectangle

  transformSingle = transformSingleRectangle
}

/* -------------------------------------------------- */
/*                       Helpers                      */
/* -------------------------------------------------- */

function getRectangleDrawPoints(shape: ImageShape) {
  const styles = getShapeStyle(shape.style)

  const getRandom = Utils.rng(shape.id)

  const sw = styles.strokeWidth

  // Dimensions
  const w = Math.max(0, shape.size[0])
  const h = Math.max(0, shape.size[1])

  // Random corner offsets
  const offsets = Array.from(Array(4)).map(() => {
    return [getRandom() * sw * 0.75, getRandom() * sw * 0.75]
  })

  // Corners
  const tl = Vec.add([sw / 2, sw / 2], offsets[0])
  const tr = Vec.add([w - sw / 2, sw / 2], offsets[1])
  const br = Vec.add([w - sw / 2, h - sw / 2], offsets[2])
  const bl = Vec.add([sw / 2, h - sw / 2], offsets[3])

  // Which side to start drawing first
  const rm = Math.round(Math.abs(getRandom() * 2 * 4))

  // Corner radii
  const rx = Math.min(w / 2, sw * 2)
  const ry = Math.min(h / 2, sw * 2)

  // Number of points per side
  const px = Math.max(8, Math.floor(w / 16))
  const py = Math.max(8, Math.floor(h / 16))

  // Inset each line by the corner radii and let the freehand algo
  // interpolate points for the corners.
  const lines = Utils.rotateArray(
    [
      Vec.pointsBetween(Vec.add(tl, [rx, 0]), Vec.sub(tr, [rx, 0]), px),
      Vec.pointsBetween(Vec.add(tr, [0, ry]), Vec.sub(br, [0, ry]), py),
      Vec.pointsBetween(Vec.sub(br, [rx, 0]), Vec.add(bl, [rx, 0]), px),
      Vec.pointsBetween(Vec.sub(bl, [0, ry]), Vec.add(tl, [0, ry]), py),
    ],
    rm
  )

  // For the final points, include the first half of the first line again,
  // so that the line wraps around and avoids ending on a sharp corner.
  // This has a bit of finesse and magic—if you change the points between
  // function, then you'll likely need to change this one too.

  const points = [...lines.flat(), ...lines[0]].slice(
    5,
    Math.floor((rm % 2 === 0 ? px : py) / -2) + 3
  )

  return {
    points,
  }
}

function getDrawStrokeInfo(shape: ImageShape) {
  const { points } = getRectangleDrawPoints(shape)

  const { strokeWidth } = getShapeStyle(shape.style)

  const options = {
    size: strokeWidth,
    thinning: 0.65,
    streamline: 0.3,
    smoothing: 1,
    simulatePressure: false,
    last: true,
  }

  return { points, options }
}

function getRectanglePath(shape: ImageShape) {
  const { points, options } = getDrawStrokeInfo(shape)

  const stroke = getStroke(points, options)

  return Utils.getSvgPathFromStroke(stroke)
}

function getRectangleIndicatorPathTDSnapshot(shape: ImageShape) {
  const { points, options } = getDrawStrokeInfo(shape)

  const strokePoints = getStrokePoints(points, options)

  return Utils.getSvgPathFromStroke(
    strokePoints.map((pt) => pt.point.slice(0, 2)),
    false
  )
}
