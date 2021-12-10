import type { TLPage, TLUser, TLPageState, TLBinding, TLBoundsCorner, TLBoundsEdge, TLShape, TLHandle, TLSnapLine, TLPinchEventHandler, TLKeyboardEventHandler, TLPointerEventHandler, TLWheelEventHandler, TLCanvasEventHandler, TLBoundsEventHandler, TLBoundsHandleEventHandler, TLShapeBlurHandler, TLShapeCloneHandler } from '@tldraw/core';
export declare class TDEventHandler {
    onPinchStart?: TLPinchEventHandler;
    onPinchEnd?: TLPinchEventHandler;
    onPinch?: TLPinchEventHandler;
    onKeyDown?: TLKeyboardEventHandler;
    onKeyUp?: TLKeyboardEventHandler;
    onPointerMove?: TLPointerEventHandler;
    onPointerUp?: TLPointerEventHandler;
    onPan?: TLWheelEventHandler;
    onZoom?: TLWheelEventHandler;
    onPointerDown?: TLPointerEventHandler;
    onPointCanvas?: TLCanvasEventHandler;
    onDoubleClickCanvas?: TLCanvasEventHandler;
    onRightPointCanvas?: TLCanvasEventHandler;
    onDragCanvas?: TLCanvasEventHandler;
    onReleaseCanvas?: TLCanvasEventHandler;
    onPointShape?: TLPointerEventHandler;
    onDoubleClickShape?: TLPointerEventHandler;
    onRightPointShape?: TLPointerEventHandler;
    onDragShape?: TLPointerEventHandler;
    onHoverShape?: TLPointerEventHandler;
    onUnhoverShape?: TLPointerEventHandler;
    onReleaseShape?: TLPointerEventHandler;
    onPointBounds?: TLBoundsEventHandler;
    onDoubleClickBounds?: TLBoundsEventHandler;
    onRightPointBounds?: TLBoundsEventHandler;
    onDragBounds?: TLBoundsEventHandler;
    onHoverBounds?: TLBoundsEventHandler;
    onUnhoverBounds?: TLBoundsEventHandler;
    onReleaseBounds?: TLBoundsEventHandler;
    onPointBoundsHandle?: TLBoundsHandleEventHandler;
    onDoubleClickBoundsHandle?: TLBoundsHandleEventHandler;
    onRightPointBoundsHandle?: TLBoundsHandleEventHandler;
    onDragBoundsHandle?: TLBoundsHandleEventHandler;
    onHoverBoundsHandle?: TLBoundsHandleEventHandler;
    onUnhoverBoundsHandle?: TLBoundsHandleEventHandler;
    onReleaseBoundsHandle?: TLBoundsHandleEventHandler;
    onPointHandle?: TLPointerEventHandler;
    onDoubleClickHandle?: TLPointerEventHandler;
    onRightPointHandle?: TLPointerEventHandler;
    onDragHandle?: TLPointerEventHandler;
    onHoverHandle?: TLPointerEventHandler;
    onUnhoverHandle?: TLPointerEventHandler;
    onReleaseHandle?: TLPointerEventHandler;
    onShapeBlur?: TLShapeBlurHandler;
    onShapeClone?: TLShapeCloneHandler;
}
export interface TDSnapshot {
    settings: {
        isDarkMode: boolean;
        isDebugMode: boolean;
        isPenMode: boolean;
        isReadonlyMode: boolean;
        isZoomSnap: boolean;
        nudgeDistanceSmall: number;
        nudgeDistanceLarge: number;
        isFocusMode: boolean;
        isSnapping: boolean;
        showRotateHandles: boolean;
        showBindingHandles: boolean;
        showCloneHandles: boolean;
        showGrid: boolean;
    };
    appState: {
        currentStyle: ShapeStyles;
        currentPageId: string;
        hoveredId?: string;
        activeTool: TDToolType;
        isToolLocked: boolean;
        isEmptyCanvas: boolean;
        isMenuOpen: boolean;
        status: string;
        snapLines: TLSnapLine[];
    };
    document: TDDocument;
    room?: {
        id: string;
        userId: string;
        users: Record<string, TDUser>;
    };
}
export declare type TldrawPatch = Patch<TDSnapshot>;
export declare type TldrawCommand = Command<TDSnapshot>;
export interface TDFile {
    name: string;
    fileHandle: FileSystemHandle | null;
    document: TDDocument;
    assets: Record<string, unknown>;
}
export interface TDDocument {
    id: string;
    name: string;
    version: number;
    pages: Record<string, TDPage>;
    pageStates: Record<string, TLPageState>;
}
export declare type TDPage = TLPage<TDShape, TDBinding>;
export declare type PagePartial = {
    shapes: Patch<TDPage['shapes']>;
    bindings: Patch<TDPage['bindings']>;
};
export interface TDMeta {
    isDarkMode: boolean;
}
export interface TransformInfo<T extends TLShape> {
    type: TLBoundsEdge | TLBoundsCorner;
    initialShape: T;
    scaleX: number;
    scaleY: number;
    transformOrigin: number[];
}
export declare enum TDUserStatus {
    Idle = "idle",
    Connecting = "connecting",
    Connected = "connected",
    Disconnected = "disconnected"
}
export interface TDUser extends TLUser<TDShape> {
    activeShapes: TDShape[];
    status: TDUserStatus;
}
export declare type Theme = 'dark' | 'light';
export declare enum SessionType {
    Transform = "transform",
    Translate = "translate",
    TransformSingle = "transformSingle",
    Brush = "brush",
    Arrow = "arrow",
    Draw = "draw",
    Erase = "erase",
    Rotate = "rotate",
    Handle = "handle",
    Grid = "grid"
}
export declare enum TDStatus {
    Idle = "idle",
    PointingHandle = "pointingHandle",
    PointingBounds = "pointingBounds",
    PointingBoundsHandle = "pointingBoundsHandle",
    TranslatingHandle = "translatingHandle",
    Translating = "translating",
    Transforming = "transforming",
    Rotating = "rotating",
    Pinching = "pinching",
    Brushing = "brushing",
    Creating = "creating",
    EditingText = "editing-text"
}
export declare type TDToolType = 'select' | 'erase' | TDShapeType.Text | TDShapeType.Draw | TDShapeType.Ellipse | TDShapeType.Rectangle | TDShapeType.Line | TDShapeType.Arrow | TDShapeType.Sticky;
export declare type Easing = 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' | 'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInSine' | 'easeOutSine' | 'easeInOutSine' | 'easeInExpo' | 'easeOutExpo' | 'easeInOutExpo';
export declare enum MoveType {
    Backward = "backward",
    Forward = "forward",
    ToFront = "toFront",
    ToBack = "toBack"
}
export declare enum AlignType {
    Top = "top",
    CenterVertical = "centerVertical",
    Bottom = "bottom",
    Left = "left",
    CenterHorizontal = "centerHorizontal",
    Right = "right"
}
export declare enum StretchType {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare enum DistributeType {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare enum FlipType {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare enum TDShapeType {
    Sticky = "sticky",
    Ellipse = "ellipse",
    Rectangle = "rectangle",
    Draw = "draw",
    Arrow = "arrow",
    Line = "line",
    Text = "text",
    Group = "group",
    Image = "image"
}
export declare enum Decoration {
    Arrow = "arrow"
}
export interface TDBaseShape extends TLShape {
    style: ShapeStyles;
    type: TDShapeType;
    handles?: Record<string, TldrawHandle>;
}
export interface DrawShape extends TDBaseShape {
    type: TDShapeType.Draw;
    points: number[][];
    isComplete: boolean;
}
export interface TldrawHandle extends TLHandle {
    canBind?: boolean;
    bindingId?: string;
}
export interface ArrowShape extends TDBaseShape {
    type: TDShapeType.Arrow;
    bend: number;
    handles: {
        start: TldrawHandle;
        bend: TldrawHandle;
        end: TldrawHandle;
    };
    decorations?: {
        start?: Decoration;
        end?: Decoration;
        middle?: Decoration;
    };
}
export interface ArrowBinding extends TLBinding {
    handleId: keyof ArrowShape['handles'];
    distance: number;
    point: number[];
}
export declare type TDBinding = ArrowBinding;
export interface EllipseShape extends TDBaseShape {
    type: TDShapeType.Ellipse;
    radius: number[];
}
export interface RectangleShape extends TDBaseShape {
    type: TDShapeType.Rectangle;
    size: number[];
}
export interface TextShape extends TDBaseShape {
    type: TDShapeType.Text;
    text: string;
}
export interface StickyShape extends TDBaseShape {
    type: TDShapeType.Sticky;
    size: number[];
    text: string;
}
export interface GroupShape extends TDBaseShape {
    type: TDShapeType.Group;
    size: number[];
    children: string[];
}
export interface ImageShape extends TDBaseShape {
    type: TDShapeType.Image;
    size: number[];
    url?: string;
}
export declare type TDShape = RectangleShape | EllipseShape | DrawShape | ArrowShape | TextShape | GroupShape | StickyShape | ImageShape;
export declare enum ColorStyle {
    White = "white",
    LightGray = "lightGray",
    Gray = "gray",
    Black = "black",
    Green = "green",
    Cyan = "cyan",
    Blue = "blue",
    Indigo = "indigo",
    Violet = "violet",
    Red = "red",
    Orange = "orange",
    Yellow = "yellow"
}
export declare enum SizeStyle {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare enum DashStyle {
    Draw = "draw",
    Solid = "solid",
    Dashed = "dashed",
    Dotted = "dotted"
}
export declare enum FontSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
    ExtraLarge = "extraLarge"
}
export declare enum AlignStyle {
    Start = "start",
    Middle = "middle",
    End = "end",
    Justify = "justify"
}
export declare enum FontStyle {
    Script = "script",
    Sans = "sans",
    Serif = "erif",
    Mono = "mono"
}
export declare type ShapeStyles = {
    color: ColorStyle;
    size: SizeStyle;
    dash: DashStyle;
    font?: FontStyle;
    textAlign?: AlignStyle;
    isFilled?: boolean;
    scale?: number;
};
export declare type ParametersExceptFirst<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never;
export declare type ExceptFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never;
export declare type ExceptFirstTwo<T extends unknown[]> = T extends [any, any, ...infer U] ? U : never;
export declare type PropsOfType<U> = {
    [K in keyof TDShape]: TDShape[K] extends any ? (TDShape[K] extends U ? K : never) : never;
}[keyof TDShape];
export declare type Difference<A, B, C = A> = A extends B ? never : C;
export declare type Intersection<A, B, C = A> = A extends B ? C : never;
export declare type FilteredKeys<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
export declare type RequiredKeys<T> = {
    [K in keyof T]-?: Difference<Record<string, unknown>, Pick<T, K>, K>;
}[keyof T];
export declare type MembersWithRequiredKey<T, U> = {
    [P in keyof T]: Intersection<U, RequiredKeys<T[P]>, T[P]>;
}[keyof T];
export declare type MappedByType<U extends string, T extends {
    type: U;
}> = {
    [P in T['type']]: T extends any ? (P extends T['type'] ? T : never) : never;
};
export declare type ShapesWithProp<U> = MembersWithRequiredKey<MappedByType<TDShapeType, TDShape>, U>;
export declare type Patch<T> = Partial<{
    [P in keyof T]: Patch<T[P]>;
}>;
export interface Command<T extends {
    [key: string]: any;
}> {
    id?: string;
    before: Patch<T>;
    after: Patch<T>;
}
export interface FileWithHandle extends File {
    handle?: FileSystemHandle;
}
export interface FileWithDirectoryHandle extends File {
    directoryHandle?: FileSystemHandle;
}
export interface FileSystemHandlePermissionDescriptor {
    mode?: 'read' | 'readwrite';
}
export interface FileSystemHandle {
    readonly kind: 'file' | 'directory';
    readonly name: string;
    isSameEntry: (other: FileSystemHandle) => Promise<boolean>;
    queryPermission: (descriptor?: FileSystemHandlePermissionDescriptor) => Promise<PermissionState>;
    requestPermission: (descriptor?: FileSystemHandlePermissionDescriptor) => Promise<PermissionState>;
}
//# sourceMappingURL=types.d.ts.map