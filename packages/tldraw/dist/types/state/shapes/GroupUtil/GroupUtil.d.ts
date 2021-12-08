import * as React from 'react';
import { TDShapeType, GroupShape, TDMeta } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = GroupShape;
declare type E = SVGSVGElement;
export declare class GroupUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Group;
    canBind: boolean;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<import("@tldraw/core").TLComponentProps<GroupShape, SVGSVGElement, TDMeta>, "isGhost" | "shape" | "isBinding" | "isSelected" | "meta" | "events" | "isEditing" | "isHovered" | "isChildOfSelected" | "onShapeChange" | "onShapeBlur"> & React.RefAttributes<SVGSVGElement>>;
    Indicator: (props: {
        shape: GroupShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
    }) => JSX.Element;
    getBounds: (shape: T) => import("@tldraw/core").TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
}
export {};
//# sourceMappingURL=GroupUtil.d.ts.map