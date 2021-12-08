import { TLBounds, TLBoundsCorner, TLBoundsEdge } from '@tldraw/core';
import type { TLBoundsWithCenter } from '@tldraw/core';
import { SessionType, TldrawCommand, TldrawPatch, TDShape, TDStatus } from '../../../types';
import { BaseSession } from '../BaseSession';
import type { TldrawApp } from '../../internal';
declare type SnapInfo = {
    state: 'empty';
} | {
    state: 'ready';
    bounds: TLBoundsWithCenter[];
};
export declare class TransformSession extends BaseSession {
    transformType: TLBoundsEdge | TLBoundsCorner;
    isCreate: boolean;
    type: SessionType;
    status: TDStatus;
    scaleX: number;
    scaleY: number;
    initialShapes: TDShape[];
    initialShapeIds: string[];
    initialSelectedIds: string[];
    shapeBounds: {
        initialShape: TDShape;
        initialShapeBounds: TLBounds;
        transformOrigin: number[];
    }[];
    hasUnlockedShapes: boolean;
    isAllAspectRatioLocked: boolean;
    initialCommonBounds: TLBounds;
    snapInfo: SnapInfo;
    prevPoint: number[];
    speed: number;
    constructor(app: TldrawApp, transformType?: TLBoundsEdge | TLBoundsCorner, isCreate?: boolean);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
}
export {};
//# sourceMappingURL=TransformSession.d.ts.map