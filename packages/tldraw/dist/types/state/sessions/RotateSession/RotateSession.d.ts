import { SessionType, TldrawCommand, TldrawPatch, TDShape, TDStatus } from '../../../types';
import { BaseSession } from '../BaseSession';
import type { TldrawApp } from '../../internal';
export declare class RotateSession extends BaseSession {
    type: SessionType;
    status: TDStatus;
    delta: number[];
    commonBoundsCenter: number[];
    initialAngle: number;
    initialShapes: {
        shape: TDShape;
        center: number[];
    }[];
    changes: Record<string, Partial<TDShape>>;
    constructor(app: TldrawApp);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
}
//# sourceMappingURL=RotateSession.d.ts.map