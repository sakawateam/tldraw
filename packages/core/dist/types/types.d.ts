import type React from 'react';
export declare type Patch<T> = Partial<{
    [P in keyof T]: T | Partial<T> | Patch<T[P]>;
}>;
export declare type TLForwardedRef<T> = ((instance: T | null) => void) | React.MutableRefObject<T | null> | null;
export interface TLPage<T extends TLShape = TLShape, B extends TLBinding = TLBinding> {
    id: string;
    name?: string;
    childIndex?: number;
    shapes: Record<string, T>;
    bindings: Record<string, B>;
}
export interface TLPageState {
    id: string;
    selectedIds: string[];
    camera: {
        point: number[];
        zoom: number;
    };
    brush?: TLBounds | null;
    pointedId?: string | null;
    hoveredId?: string | null;
    editingId?: string | null;
    bindingId?: string | null;
}
export interface TLUser<T extends TLShape> {
    id: string;
    color: string;
    point: number[];
    selectedIds: string[];
}
export declare type TLUsers<T extends TLShape, U extends TLUser<T> = TLUser<T>> = Record<string, U>;
export declare type TLSnapLine = number[][];
export interface TLHandle {
    id: string;
    index: number;
    point: number[];
}
export interface TLShape {
    id: string;
    type: string;
    parentId: string;
    childIndex: number;
    name: string;
    point: number[];
    rotation?: number;
    children?: string[];
    handles?: Record<string, TLHandle>;
    isGhost?: boolean;
    isHidden?: boolean;
    isLocked?: boolean;
    isGenerated?: boolean;
    isAspectRatioLocked?: boolean;
}
export interface TLComponentProps<T extends TLShape, E = any, M = any> {
    shape: T;
    isEditing: boolean;
    isBinding: boolean;
    isHovered: boolean;
    isSelected: boolean;
    isGhost?: boolean;
    isChildOfSelected?: boolean;
    meta: M;
    onShapeChange?: TLShapeChangeHandler<T, any>;
    onShapeBlur?: TLShapeBlurHandler<any>;
    events: {
        onPointerDown: (e: React.PointerEvent<E>) => void;
        onPointerUp: (e: React.PointerEvent<E>) => void;
        onPointerEnter: (e: React.PointerEvent<E>) => void;
        onPointerMove: (e: React.PointerEvent<E>) => void;
        onPointerLeave: (e: React.PointerEvent<E>) => void;
    };
    ref?: React.Ref<E> | undefined;
}
export interface TLShapeProps<T extends TLShape, E = any, M = any> extends TLComponentProps<T, E, M> {
    ref: TLForwardedRef<E>;
    shape: T;
}
export interface TLBinding {
    id: string;
    toId: string;
    fromId: string;
}
export interface TLTheme {
    accent?: string;
    brushFill?: string;
    brushStroke?: string;
    selectFill?: string;
    selectStroke?: string;
    background?: string;
    foreground?: string;
    grid?: string;
}
export declare type TLWheelEventHandler = (info: TLPointerInfo<string>, e: React.WheelEvent<Element> | WheelEvent) => void;
export declare type TLPinchEventHandler = (info: TLPointerInfo<string>, e: React.WheelEvent<Element> | WheelEvent | React.TouchEvent<Element> | TouchEvent | React.PointerEvent<Element> | PointerEventInit) => void;
export declare type TLShapeChangeHandler<T, K = any> = (shape: {
    id: string;
} & Partial<T>, info?: K) => void;
export declare type TLShapeBlurHandler<K = any> = (info?: K) => void;
export declare type TLKeyboardEventHandler = (key: string, info: TLKeyboardInfo, e: KeyboardEvent) => void;
export declare type TLPointerEventHandler = (info: TLPointerInfo<string>, e: React.PointerEvent) => void;
export declare type TLShapeCloneHandler = (info: TLPointerInfo<'top' | 'right' | 'bottom' | 'left' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'>, e: React.PointerEvent) => void;
export declare type TLShapeLinkHandler = (info: TLPointerInfo<'link'>, e: React.PointerEvent) => void;
export declare type TLCanvasEventHandler = (info: TLPointerInfo<'canvas'>, e: React.PointerEvent) => void;
export declare type TLBoundsEventHandler = (info: TLPointerInfo<'bounds'>, e: React.PointerEvent) => void;
export declare type TLBoundsHandleEventHandler = (info: TLPointerInfo<TLBoundsHandle>, e: React.PointerEvent) => void;
export interface TLCallbacks<T extends TLShape> {
    onPan: TLWheelEventHandler;
    onZoom: TLWheelEventHandler;
    onPinchStart: TLPinchEventHandler;
    onPinch: TLPinchEventHandler;
    onPinchEnd: TLPinchEventHandler;
    onPointerMove: TLPointerEventHandler;
    onPointerUp: TLPointerEventHandler;
    onPointerDown: TLPointerEventHandler;
    onPointCanvas: TLCanvasEventHandler;
    onDoubleClickCanvas: TLCanvasEventHandler;
    onRightPointCanvas: TLCanvasEventHandler;
    onDragCanvas: TLCanvasEventHandler;
    onReleaseCanvas: TLCanvasEventHandler;
    onPointShape: TLPointerEventHandler;
    onDoubleClickShape: TLPointerEventHandler;
    onRightPointShape: TLPointerEventHandler;
    onDragShape: TLPointerEventHandler;
    onHoverShape: TLPointerEventHandler;
    onUnhoverShape: TLPointerEventHandler;
    onReleaseShape: TLPointerEventHandler;
    onPointBounds: TLBoundsEventHandler;
    onDoubleClickBounds: TLBoundsEventHandler;
    onRightPointBounds: TLBoundsEventHandler;
    onDragBounds: TLBoundsEventHandler;
    onHoverBounds: TLBoundsEventHandler;
    onUnhoverBounds: TLBoundsEventHandler;
    onReleaseBounds: TLBoundsEventHandler;
    onPointBoundsHandle: TLBoundsHandleEventHandler;
    onDoubleClickBoundsHandle: TLBoundsHandleEventHandler;
    onRightPointBoundsHandle: TLBoundsHandleEventHandler;
    onDragBoundsHandle: TLBoundsHandleEventHandler;
    onHoverBoundsHandle: TLBoundsHandleEventHandler;
    onUnhoverBoundsHandle: TLBoundsHandleEventHandler;
    onReleaseBoundsHandle: TLBoundsHandleEventHandler;
    onPointHandle: TLPointerEventHandler;
    onDoubleClickHandle: TLPointerEventHandler;
    onRightPointHandle: TLPointerEventHandler;
    onDragHandle: TLPointerEventHandler;
    onHoverHandle: TLPointerEventHandler;
    onUnhoverHandle: TLPointerEventHandler;
    onReleaseHandle: TLPointerEventHandler;
    onShapeChange: TLShapeChangeHandler<T, any>;
    onShapeBlur: TLShapeBlurHandler<any>;
    onShapeClone: TLShapeCloneHandler;
    onRenderCountChange: (ids: string[]) => void;
    onError: (error: Error) => void;
    onBoundsChange: (bounds: TLBounds) => void;
    onKeyDown: TLKeyboardEventHandler;
    onKeyUp: TLKeyboardEventHandler;
}
export interface TLBounds {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    width: number;
    height: number;
    rotation?: number;
}
export interface TLBoundsWithCenter extends TLBounds {
    midX: number;
    midY: number;
}
export declare enum TLBoundsEdge {
    Top = "top_edge",
    Right = "right_edge",
    Bottom = "bottom_edge",
    Left = "left_edge"
}
export declare enum TLBoundsCorner {
    TopLeft = "top_left_corner",
    TopRight = "top_right_corner",
    BottomRight = "bottom_right_corner",
    BottomLeft = "bottom_left_corner"
}
export declare type TLBoundsHandle = TLBoundsCorner | TLBoundsEdge | 'rotate' | 'center' | 'left' | 'right';
export interface TLPointerInfo<T extends string = string> {
    target: T;
    pointerId: number;
    origin: number[];
    point: number[];
    delta: number[];
    pressure: number;
    shiftKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    altKey: boolean;
    spaceKey: boolean;
}
export interface TLKeyboardInfo {
    origin: number[];
    point: number[];
    key: string;
    keys: string[];
    shiftKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    altKey: boolean;
}
export interface TLTransformInfo<T extends TLShape> {
    type: TLBoundsEdge | TLBoundsCorner;
    initialShape: T;
    scaleX: number;
    scaleY: number;
    transformOrigin: number[];
}
export declare enum SnapPoints {
    minX = "minX",
    midX = "midX",
    maxX = "maxX",
    minY = "minY",
    midY = "midY",
    maxY = "maxY"
}
export declare type Snap = {
    id: SnapPoints;
    isSnapped: false;
} | {
    id: SnapPoints;
    isSnapped: true;
    to: number;
    B: TLBoundsWithCenter;
    distance: number;
};
export interface IShapeTreeNode<T extends TLShape, M = any> {
    shape: T;
    children?: IShapeTreeNode<TLShape, M>[];
    isGhost: boolean;
    isChildOfSelected: boolean;
    isEditing: boolean;
    isBinding: boolean;
    isHovered: boolean;
    isSelected: boolean;
    meta?: M extends any ? M : never;
}
export declare type MappedByType<K extends string, T extends {
    type: K;
}> = {
    [P in T['type']]: T extends any ? (P extends T['type'] ? T : never) : never;
};
export declare type RequiredKeys<T> = {
    [K in keyof T]-?: Record<string, unknown> extends Pick<T, K> ? never : K;
}[keyof T];
//# sourceMappingURL=types.d.ts.map