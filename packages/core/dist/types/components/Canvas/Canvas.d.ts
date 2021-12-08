import * as React from 'react';
import type { TLBinding, TLBounds, TLPage, TLPageState, TLShape, TLSnapLine, TLUsers } from '../../types';
interface CanvasProps<T extends TLShape, M extends Record<string, unknown>> {
    page: TLPage<T, TLBinding>;
    pageState: TLPageState;
    snapLines?: TLSnapLine[];
    grid?: number;
    users?: TLUsers<T>;
    userId?: string;
    hideBounds: boolean;
    hideHandles: boolean;
    hideIndicators: boolean;
    hideBindingHandles: boolean;
    hideCloneHandles: boolean;
    hideResizeHandles: boolean;
    hideRotateHandle: boolean;
    hideGrid: boolean;
    externalContainerRef?: React.RefObject<HTMLElement>;
    meta?: M;
    id?: string;
    onBoundsChange: (bounds: TLBounds) => void;
}
export declare const Canvas: (<T extends TLShape, M extends Record<string, unknown>>({ id, page, pageState, snapLines, grid, users, userId, meta, externalContainerRef, hideHandles, hideBounds, hideIndicators, hideBindingHandles, hideCloneHandles, hideResizeHandles, hideRotateHandle, hideGrid, onBoundsChange, }: CanvasProps<T, M>) => JSX.Element) & {
    displayName: string;
};
export {};
//# sourceMappingURL=Canvas.d.ts.map