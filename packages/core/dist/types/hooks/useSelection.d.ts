import type { TLPage, TLPageState, TLShape, TLBounds, TLBinding } from '../types';
import type { TLShapeUtilsMap } from '../TLShapeUtil';
export declare function useSelection<T extends TLShape>(page: TLPage<T, TLBinding>, pageState: TLPageState, shapeUtils: TLShapeUtilsMap<T>): {
    bounds: TLBounds | undefined;
    rotation: number;
    isLocked: boolean;
    isLinked: boolean;
};
//# sourceMappingURL=useSelection.d.ts.map