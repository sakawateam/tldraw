import * as React from 'react'
import { TLShapeUtil } from '@tldraw/core'
import type { ImageShape } from '~types'

export const ImageIndicator = TLShapeUtil.Indicator<ImageShape>(({ shape }) => {
  return (
    <rect
      pointerEvents="none"
      width={shape.size[0]}
      height={shape.size[1]}
      fill="none"
      stroke="tl-selectedStroke"
      strokeWidth={1}
      rx={4}
    />
  )
})
