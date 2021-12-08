/// <reference types="react" />
import type { IShapeTreeNode, TLShape } from '../../types';
import type { TLShapeUtilsMap } from '../../TLShapeUtil';
interface ShapeNodeProps<T extends TLShape> extends IShapeTreeNode<T> {
    utils: TLShapeUtilsMap<TLShape>;
}
export declare const ShapeNode: (<T extends TLShape>({ shape, utils, meta, children, ...rest }: ShapeNodeProps<T>) => JSX.Element) & {
    displayName: string;
};
export {};
//# sourceMappingURL=ShapeNode.d.ts.map