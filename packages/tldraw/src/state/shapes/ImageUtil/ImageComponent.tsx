import * as React from 'react'
import { TLShapeUtil, SVGContainer } from '@tldraw/core'
import type { ImageShape } from '~types'

export const ImageComponent = TLShapeUtil.Component<ImageShape, SVGSVGElement>(
  ({ shape, events, isGhost, meta }, ref) => {
    const color = meta.isDarkMode ? 'white' : 'black'

    return (
      <SVGContainer fr={undefined} ref={ref} {...events}>
        <image
          href={shape.url}
          width={shape.size[0]}
          height={shape.size[1]}
          stroke={color}
          strokeWidth={3}
          strokeLinejoin="round"
          fill="none"
          rx={4}
          opacity={isGhost ? 0.3 : 1}
          pointerEvents="all"
        />
      </SVGContainer>
    )
  }
)
