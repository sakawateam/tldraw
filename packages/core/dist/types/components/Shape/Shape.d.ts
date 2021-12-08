/// <reference types="react" />
import type { IShapeTreeNode, TLShape } from '../../types';
import type { TLShapeUtil } from '../../TLShapeUtil';
interface ShapeProps<T extends TLShape, E extends Element, M> extends IShapeTreeNode<T, M> {
    utils: TLShapeUtil<T, E, M>;
}
export declare const Shape: (<T extends TLShape, E extends Element, M>({ shape, utils, meta, ...rest }: ShapeProps<T, E, M>) => JSX.Element) & {
    displayName: string;
};
export {};
//# sourceMappingURL=Shape.d.ts.map