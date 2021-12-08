import * as React from 'react';
import { RectangleShape, TDShapeType, TDMeta } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
import { transformRectangle, transformSingleRectangle } from '../shared';
declare type T = RectangleShape;
declare type E = SVGSVGElement;
export declare class RectangleUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Rectangle;
    canBind: boolean;
    canClone: boolean;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<RectangleShape, SVGSVGElement, TDMeta>, "isGhost" | "shape" | "isBinding" | "isSelected" | "meta" | "events" | "isEditing" | "isHovered" | "isChildOfSelected" | "onShapeChange" | "onShapeBlur"> & React.RefAttributes<SVGSVGElement>>;
    Indicator: (props: {
        shape: RectangleShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
    }) => JSX.Element;
    getBounds: (shape: T) => import("@tldraw/core").TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
}
export {};
//# sourceMappingURL=RectangleUtil.d.ts.map