import * as React from 'react';
import { TDShapeType, TDMeta, ImageShape } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
import { transformRectangle, transformSingleRectangle } from '../shared';
declare type T = ImageShape;
declare type E = SVGSVGElement;
export declare class ImageUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Image;
    canBind: boolean;
    canClone: boolean;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<ImageShape, SVGSVGElement, TDMeta>, "isGhost" | "shape" | "isBinding" | "isSelected" | "meta" | "events" | "isEditing" | "isHovered" | "isChildOfSelected" | "onShapeChange" | "onShapeBlur"> & React.RefAttributes<SVGSVGElement>>;
    Indicator: (props: {
        shape: ImageShape;
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
//# sourceMappingURL=ImageUtil.d.ts.map