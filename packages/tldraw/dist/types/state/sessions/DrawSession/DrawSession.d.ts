import { SessionType, TDStatus, TldrawPatch, TldrawCommand } from '../../../types';
import type { TldrawApp } from '../../internal';
import { BaseSession } from '../BaseSession';
export declare class DrawSession extends BaseSession {
    type: SessionType;
    status: TDStatus;
    topLeft: number[];
    points: number[][];
    lastAdjustedPoint: number[];
    shiftedPoints: number[][];
    shapeId: string;
    isLocked?: boolean;
    lockedDirection?: 'horizontal' | 'vertical';
    constructor(app: TldrawApp, id: string);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
}
//# sourceMappingURL=DrawSession.d.ts.map