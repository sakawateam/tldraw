import * as React from 'react';
import type { TLBounds, TLComponentProps, TLForwardedRef, TLShape, TLUser } from '../types';
export declare abstract class TLShapeUtil<T extends TLShape, E extends Element = any, M = any> {
    refMap: Map<string, React.RefObject<E>>;
    boundsCache: WeakMap<TLShape, TLBounds>;
    showCloneHandles: boolean;
    hideBounds: boolean;
    isStateful: boolean;
    abstract Component: React.ForwardRefExoticComponent<TLComponentProps<T, E, M>>;
    abstract Indicator: (props: {
        shape: T;
        meta: M;
        user?: TLUser<T>;
        isHovered: boolean;
        isSelected: boolean;
    }) => React.ReactElement | null;
    abstract getBounds: (shape: T) => TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
    getRef: (shape: T) => React.RefObject<E>;
    hitTestBounds: (shape: T, bounds: TLBounds) => boolean;
    getRotatedBounds: (shape: T) => TLBounds;
    static Component: <T_1 extends TLShape, E_1 extends Element = any, M_1 = any>(component: (props: TLComponentProps<T_1, E_1, M_1>, ref: TLForwardedRef<E_1>) => JSX.Element) => React.ForwardRefExoticComponent<Pick<TLComponentProps<T_1, E_1, M_1>, "shape" | "isEditing" | "isBinding" | "isHovered" | "isSelected" | "isGhost" | "isChildOfSelected" | "meta" | "onShapeChange" | "onShapeBlur" | "events"> & React.RefAttributes<E_1>>;
    static Indicator: <T_1 extends TLShape, M_1 = any>(component: (props: {
        shape: T_1;
        meta: M_1;
        isHovered: boolean;
        isSelected: boolean;
    }) => JSX.Element) => (props: {
        shape: T_1;
        meta: M_1;
        isHovered: boolean;
        isSelected: boolean;
    }) => JSX.Element;
}
//# sourceMappingURL=TLShapeUtil.d.ts.map