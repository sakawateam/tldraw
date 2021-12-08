/// <reference types="react" />
import type { TLBinding, TLPage, TLPageState, TLShape } from '../../types';
interface PageProps<T extends TLShape, M extends Record<string, unknown>> {
    page: TLPage<T, TLBinding>;
    pageState: TLPageState;
    hideBounds: boolean;
    hideHandles: boolean;
    hideIndicators: boolean;
    hideBindingHandles: boolean;
    hideCloneHandles: boolean;
    hideRotateHandle: boolean;
    hideResizeHandles: boolean;
    meta?: M;
}
/**
 * The Page component renders the current page.
 */
export declare const Page: (<T extends TLShape, M extends Record<string, unknown>>({ page, pageState, hideBounds, hideHandles, hideIndicators, hideBindingHandles, hideCloneHandles, hideRotateHandle, hideResizeHandles, meta, }: PageProps<T, M>) => JSX.Element) & {
    displayName: string;
};
export {};
//# sourceMappingURL=Page.d.ts.map