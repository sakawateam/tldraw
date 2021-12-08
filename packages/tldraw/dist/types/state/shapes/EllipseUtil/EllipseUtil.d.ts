import * as React from 'react';
import { TLBounds } from '@tldraw/core';
import { EllipseShape, TDShapeType, TDShape, TransformInfo, TDMeta } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = EllipseShape;
declare type E = SVGSVGElement;
export declare class EllipseUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Ellipse;
    canBind: boolean;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<EllipseShape, SVGSVGElement, TDMeta>, "isGhost" | "shape" | "isBinding" | "isSelected" | "meta" | "events" | "isEditing" | "isHovered" | "isChildOfSelected" | "onShapeChange" | "onShapeBlur"> & React.RefAttributes<SVGSVGElement>>;
    Indicator: (props: {
        shape: EllipseShape;
        meta: TDMeta;
        isHovered: boolean;
        isSelected: boolean;
    }) => JSX.Element;
    hitTestPoint: (shape: T, point: number[]) => boolean;
    hitTestLineSegment: (shape: T, A: number[], B: number[]) => boolean;
    getBounds: (shape: T) => TLBounds;
    getRotatedBounds: (shape: T) => TLBounds;
    hitTestBounds: (shape: T, bounds: TLBounds) => boolean;
    shouldRender: (prev: T, next: T) => boolean;
    getCenter: (shape: T) => number[];
    getBindingPoint: <K extends TDShape>(shape: T, fromShape: K, point: number[], origin: number[], direction: number[], padding: number, bindAnywhere: boolean) => {
        point: number[];
        distance: number;
    } | undefined;
    transform: (shape: T, bounds: TLBounds, { scaleX, scaleY, initialShape }: TransformInfo<T>) => Partial<T>;
    transformSingle: (shape: T, bounds: TLBounds) => Partial<T>;
}
export {};
//# sourceMappingURL=EllipseUtil.d.ts.map