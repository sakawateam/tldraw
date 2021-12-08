import * as React from 'react';
import type { TLBounds } from '../../types';
export interface CloneButtonProps {
    bounds: TLBounds;
    targetSize: number;
    size: number;
    side: 'top' | 'right' | 'bottom' | 'left' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}
export declare const CloneButton: React.FunctionComponent<CloneButtonProps>;
//# sourceMappingURL=CloneButton.d.ts.map