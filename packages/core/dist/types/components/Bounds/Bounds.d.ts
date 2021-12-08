import * as React from 'react';
import { TLBounds } from '../../types';
interface BoundsProps {
    zoom: number;
    bounds: TLBounds;
    rotation: number;
    isLocked: boolean;
    isHidden: boolean;
    hideCloneHandles: boolean;
    hideRotateHandle: boolean;
    hideBindingHandles: boolean;
    hideResizeHandles: boolean;
    viewportWidth: number;
    children?: React.ReactNode;
}
export declare const Bounds: React.FunctionComponent<BoundsProps>;
export {};
//# sourceMappingURL=Bounds.d.ts.map