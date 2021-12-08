import * as React from 'react';
import type { TLComponentProps, TLShape } from '../../types';
import type { TLShapeUtil } from '../../TLShapeUtil';
interface RenderedShapeProps<T extends TLShape, E extends Element, M> extends TLComponentProps<T, E, M> {
    shape: T;
    utils: TLShapeUtil<T, E, M>;
}
export declare const RenderedShape: React.MemoExoticComponent<(<T extends TLShape, E extends Element, M>(props: RenderedShapeProps<T, E, M>) => JSX.Element) & {
    displayName: string;
}>;
export {};
//# sourceMappingURL=RenderedShape.d.ts.map