/// <reference types="react" />
import type { TLShape, TLUser } from '../../types';
interface IndicatorProps<T extends TLShape, M = unknown> {
    shape: T;
    meta: M extends unknown ? M : undefined;
    isSelected?: boolean;
    isHovered?: boolean;
    user?: TLUser<T>;
}
export declare const ShapeIndicator: (<T extends TLShape, M>({ isHovered, isSelected, shape, user, meta, }: IndicatorProps<T, M>) => JSX.Element) & {
    displayName: string;
};
export {};
//# sourceMappingURL=ShapeIndicator.d.ts.map