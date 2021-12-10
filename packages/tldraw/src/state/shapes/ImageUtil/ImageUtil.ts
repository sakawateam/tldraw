import { Utils, TLBounds } from '@tldraw/core'
import { intersectLineSegmentBounds } from '@tldraw/intersect'
import { nanoid } from 'nanoid'
import { CustomShapeUtil } from './CustomShapeUtil'
import { ImageComponent } from './ImageComponent'
import { ImageIndicator } from './ImageIndicator'
import { ImageShape, TDShapeType } from '~types'
import { defaultStyle } from '../shared/shape-styles'

type T = ImageShape
type E = SVGSVGElement

export class ImageUtil extends CustomShapeUtil<T, E> {
  Component = ImageComponent

  Indicator = ImageIndicator

  getBounds = (shape: T) => {
    const bounds = Utils.getFromCache(this.boundsCache, shape, () => {
      const [width, height] = shape.size

      return {
        minX: 0,
        maxX: width,
        minY: 0,
        maxY: height,
        width,
        height,
      } as TLBounds
    })

    return Utils.translateBounds(bounds, shape.point)
  }

  /* ----------------- Custom Methods ----------------- */

  canBind = true

  getShape = (props: Partial<T>): T => {
    return {
      id: nanoid(),
      type: TDShapeType.Image,
      name: 'Image',
      parentId: 'page1',
      point: [0, 0],
      size: [100, 100],
      childIndex: 1,
      style: defaultStyle,
      ...props,
    }
  }

  getCenter = (shape: T) => {
    return Utils.getBoundsCenter(this.getBounds(shape))
  }

  hitTestPoint = (shape: T, point: number[]) => {
    return Utils.pointInBounds(point, this.getBounds(shape))
  }

  hitTestLineSegment = (shape: T, A: number[], B: number[]) => {
    return intersectLineSegmentBounds(A, B, this.getBounds(shape)).length > 0
  }

  transform = (shape: T, bounds: TLBounds, initialShape: T, scale: number[]) => {
    shape.point = [bounds.minX, bounds.minY]
    shape.size = [bounds.width, bounds.height]
  }
}
