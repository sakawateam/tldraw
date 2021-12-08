import * as React from 'react';
import type { Inputs } from '../inputs';
import type { TLCallbacks, TLShape, TLBounds, TLPageState } from '../types';
import type { TLShapeUtilsMap } from '../TLShapeUtil';
export interface TLContextType<T extends TLShape> {
    id?: string;
    callbacks: Partial<TLCallbacks<T>>;
    shapeUtils: TLShapeUtilsMap<T>;
    rPageState: React.MutableRefObject<TLPageState>;
    rSelectionBounds: React.MutableRefObject<TLBounds | null>;
    inputs: Inputs;
    bounds: TLBounds;
}
export declare const TLContext: React.Context<TLContextType<TLShape>>;
export declare function useTLContext(): TLContextType<TLShape>;
//# sourceMappingURL=useTLContext.d.ts.map