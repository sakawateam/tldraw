import * as React from 'react';
import { TLBounds } from '@tldraw/core';
import { TextShape, TDMeta, TDShapeType, TransformInfo, AlignStyle } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = TextShape;
declare type E = HTMLDivElement;
export declare class TextUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Text;
    isAspectRatioLocked: boolean;
    canEdit: boolean;
    canBind: boolean;
    canClone: boolean;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<TextShape, HTMLDivElement, TDMeta>, "isGhost" | "shape" | "isBinding" | "isSelected" | "meta" | "events" | "isEditing" | "isHovered" | "isChildOfSelected" | "onShapeChange" | "onShapeBlur"> & React.RefAttributes<HTMLDivElement>>;
    Indicator: (props: {
        shape: TextShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
    }) => JSX.Element;
    getBounds: (shape: T) => TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
    transform: (shape: T, bounds: TLBounds, { initialShape, scaleX, scaleY }: TransformInfo<T>) => Partial<T>;
    transformSingle: (shape: T, bounds: TLBounds, { initialShape, scaleX, scaleY }: TransformInfo<T>) => Partial<T> | void;
    onDoubleClickBoundsHandle: (shape: T) => {
        style: {
            scale: number;
            color: import("../../../types").ColorStyle;
            size: import("../../../types").SizeStyle;
            dash: import("../../../types").DashStyle;
            font?: import("../../../types").FontStyle | undefined;
            textAlign?: AlignStyle | undefined;
            isFilled?: boolean | undefined;
        };
        point: number[];
    };
    getSvgElement: (shape: T) => SVGElement | void;
}
export {};
//# sourceMappingURL=TextUtil.d.ts.map