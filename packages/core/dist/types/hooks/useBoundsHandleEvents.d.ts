import * as React from 'react';
import type { TLBoundsEdge, TLBoundsCorner } from '../types';
export declare function useBoundsHandleEvents(id: TLBoundsCorner | TLBoundsEdge | 'rotate' | 'center' | 'left' | 'right'): {
    onPointerDown: (e: React.PointerEvent) => void;
    onPointerUp: (e: React.PointerEvent) => void;
    onPointerEnter: (e: React.PointerEvent) => void;
    onPointerMove: (e: React.PointerEvent) => void;
    onPointerLeave: (e: React.PointerEvent) => void;
};
//# sourceMappingURL=useBoundsHandleEvents.d.ts.map