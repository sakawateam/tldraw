import * as React from 'react';
import type { TLShape, TLPage, TLPageState, TLCallbacks, TLTheme, TLBounds, TLBinding, TLSnapLine, TLUsers } from '../../types';
import { Inputs } from '../../inputs';
import type { TLShapeUtilsMap } from '../../TLShapeUtil';
export interface RendererProps<T extends TLShape, M = any> extends Partial<TLCallbacks<T>> {
    /**
     * An object containing instances of your shape classes.
     */
    shapeUtils: TLShapeUtilsMap<T>;
    /**
     * The current page, containing shapes and bindings.
     */
    page: TLPage<T, TLBinding>;
    /**
     * The current page state.
     */
    pageState: TLPageState;
    /**
     * (optional) A unique id to be applied to the renderer element, used to scope styles.
     */
    id?: string;
    /**
     * (optional) A ref for the renderer's container element, used for scoping event handlers.
     */
    containerRef?: React.RefObject<HTMLElement>;
    /**
     * (optional) An object of custom options that should be passed to rendered shapes.
     */
    meta?: M;
    /**
     * (optional) The current users to render.
     */
    users?: TLUsers<T>;
    /**
     * (optional) The current snap lines to render.
     */
    snapLines?: TLSnapLine[];
    /**
     * (optional) The current user's id, used to identify the user.
     */
    userId?: string;
    /**
     * (optional) An object of custom theme colors.
     */
    theme?: Partial<TLTheme>;
    /**
     * (optional) When true, the renderer will not show the bounds for selected objects.
     */
    hideBounds?: boolean;
    /**
     * (optional) When true, the renderer will not show the handles of shapes with handles.
     */
    hideHandles?: boolean;
    /**
     * (optional) When true, the renderer will not show resize handles for selected objects.
     */
    hideResizeHandles?: boolean;
    /**
     * (optional) When true, the renderer will not show rotate handles for selected objects.
     */
    hideRotateHandles?: boolean;
    /**
     * (optional) When true, the renderer will not show buttons for cloning shapes.
     */
    hideCloneHandles?: boolean;
    /**
     * (optional) When true, the renderer will not show binding controls.
     */
    hideBindingHandles?: boolean;
    /**
     * (optional) When true, the renderer will not show indicators for selected or
     * hovered objects,
     */
    hideIndicators?: boolean;
    /**
     * (optional) When true, the renderer will not show the grid.
     */
    hideGrid?: boolean;
    /**
     * (optional) The size of the grid step.
     */
    grid?: number;
    /**
     * (optional) A callback that receives the renderer's inputs manager.
     */
    onMount?: (inputs: Inputs) => void;
    /**
     * (optional) A callback that is fired when the editor's client bounding box changes.
     */
    onBoundsChange?: (bounds: TLBounds) => void;
}
/**
 * The Renderer component is the main component of the library. It
 * accepts the current `page`, the `shapeUtils` needed to interpret
 * and render the shapes and bindings on the `page`, and the current
 * `pageState`.
 * @param props
 * @returns
 */
export declare const Renderer: (<T extends TLShape, M extends Record<string, unknown>>({ id, shapeUtils, page, pageState, users, userId, theme, meta, snapLines, grid, containerRef, hideHandles, hideIndicators, hideCloneHandles, hideBindingHandles, hideResizeHandles, hideRotateHandles, hideBounds, hideGrid, ...rest }: RendererProps<T, M>) => JSX.Element) & {
    displayName: string;
};
//# sourceMappingURL=Renderer.d.ts.map