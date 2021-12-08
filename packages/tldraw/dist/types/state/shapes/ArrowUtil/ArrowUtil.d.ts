import * as React from 'react';
import { TLBounds } from '@tldraw/core';
import { ArrowShape, TransformInfo, TDShapeType, TDShape, TDBinding, TDMeta } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = ArrowShape;
declare type E = SVGSVGElement;
export declare class ArrowUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Arrow;
    hideBounds: boolean;
    pathCache: WeakMap<ArrowShape, string>;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<ArrowShape, SVGSVGElement, TDMeta>, "isGhost" | "shape" | "isBinding" | "isSelected" | "meta" | "events" | "isEditing" | "isHovered" | "isChildOfSelected" | "onShapeChange" | "onShapeBlur"> & React.RefAttributes<SVGSVGElement>>;
    Indicator: (props: {
        shape: ArrowShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
    }) => JSX.Element;
    getBounds: (shape: T) => TLBounds;
    getRotatedBounds: (shape: T) => TLBounds;
    getCenter: (shape: T) => number[];
    shouldRender: (prev: T, next: T) => boolean;
    hitTestPoint: (shape: T, point: number[]) => boolean;
    hitTestLineSegment: (shape: T, A: number[], B: number[]) => boolean;
    hitTestBounds: (shape: T, bounds: TLBounds) => boolean;
    transform: (shape: T, bounds: TLBounds, { initialShape, scaleX, scaleY }: TransformInfo<T>) => Partial<T>;
    onDoubleClickHandle: (shape: T, handle: Partial<T['handles']>) => Partial<T> | void;
    onBindingChange: (shape: T, binding: TDBinding, target: TDShape, targetBounds: TLBounds, center: number[]) => Partial<T> | void;
    onHandleChange: (shape: T, handles: Partial<T['handles']>) => Partial<T> | void;
}
export {};
//# sourceMappingURL=ArrowUtil.d.ts.map