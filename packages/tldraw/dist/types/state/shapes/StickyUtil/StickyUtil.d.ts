import * as React from 'react';
import { TLBounds } from '@tldraw/core';
import { StickyShape, TDMeta, TDShapeType, TransformInfo } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = StickyShape;
declare type E = HTMLDivElement;
export declare class StickyUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Sticky;
    canBind: boolean;
    canEdit: boolean;
    canClone: boolean;
    hideResizeHandles: boolean;
    showCloneHandles: boolean;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<StickyShape, HTMLDivElement, TDMeta>, "isGhost" | "shape" | "isBinding" | "isSelected" | "meta" | "events" | "isEditing" | "isHovered" | "isChildOfSelected" | "onShapeChange" | "onShapeBlur"> & React.RefAttributes<HTMLDivElement>>;
    Indicator: (props: {
        shape: StickyShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
    }) => JSX.Element;
    getBounds: (shape: T) => TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
    transform: (shape: T, bounds: TLBounds, { scaleX, scaleY, transformOrigin }: TransformInfo<T>) => Partial<T>;
    transformSingle: (shape: T) => Partial<T>;
    getSvgElement: (shape: T) => SVGElement | void;
}
export {};
//# sourceMappingURL=StickyUtil.d.ts.map