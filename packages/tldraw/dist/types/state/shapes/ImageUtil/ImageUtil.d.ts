import { TLBounds } from '@tldraw/core';
import { ImageShape, TDShapeType } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = ImageShape;
declare type E = SVGSVGElement;
export declare class ImageUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Image;
    Component: import("react").ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<ImageShape, SVGSVGElement, any>, "isGhost" | "shape" | "isBinding" | "isSelected" | "meta" | "events" | "isEditing" | "isHovered" | "isChildOfSelected" | "onShapeChange" | "onShapeBlur"> & import("react").RefAttributes<SVGSVGElement>>;
    Indicator: (props: {
        shape: ImageShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
    }) => JSX.Element;
    getBounds: (shape: T) => TLBounds;
    canBind: boolean;
    getShape: (props: Partial<T>) => T;
    getCenter: (shape: T) => number[];
    hitTestPoint: (shape: T, point: number[]) => boolean;
    hitTestLineSegment: (shape: T, A: number[], B: number[]) => boolean;
}
export {};
//# sourceMappingURL=ImageUtil.d.ts.map