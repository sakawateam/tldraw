import { TDDocument, TDShape, TDBinding, TDUser } from './types';
import { TldrawApp, TDCallbacks } from './state';
export interface TldrawProps extends TDCallbacks {
    /**
     * (optional) If provided, the component will load / persist state under this key.
     */
    id?: string;
    /**
     * (optional) The document to load or update from.
     */
    document?: TDDocument;
    /**
     * (optional) The current page id.
     */
    currentPageId?: string;
    /**
     * (optional) Whether the editor should immediately receive focus. Defaults to true.
     */
    autofocus?: boolean;
    /**
     * (optional) Whether to show the menu UI.
     */
    showMenu?: boolean;
    /**
     * (optional) Whether to show the pages UI.
     */
    showPages?: boolean;
    /**
     * (optional) Whether to show the styles UI.
     */
    showStyles?: boolean;
    /**
     * (optional) Whether to show the zoom UI.
     */
    showZoom?: boolean;
    /**
     * (optional) Whether to show the tools UI.
     */
    showTools?: boolean;
    /**
     * (optional) Whether to show a sponsor link for Tldraw.
     */
    showSponsorLink?: boolean;
    /**
     * (optional) Whether to show the UI.
     */
    showUI?: boolean;
    /**
     * (optional) Whether to the document should be read only.
     */
    readOnly?: boolean;
    /**
     * (optional) Whether to to show the app's dark mode UI.
     */
    darkMode?: boolean;
    /**
     * (optional) A callback to run when the component mounts.
     */
    onMount?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the user creates a new project through the menu or through a keyboard shortcut.
     */
    onNewProject?: (state: TldrawApp, e?: KeyboardEvent) => void;
    /**
     * (optional) A callback to run when the user saves a project through the menu or through a keyboard shortcut.
     */
    onSaveProject?: (state: TldrawApp, e?: KeyboardEvent) => void;
    /**
     * (optional) A callback to run when the user saves a project as a new project through the menu or through a keyboard shortcut.
     */
    onSaveProjectAs?: (state: TldrawApp, e?: KeyboardEvent) => void;
    /**
     * (optional) A callback to run when the user opens new project through the menu or through a keyboard shortcut.
     */
    onOpenProject?: (state: TldrawApp, e?: KeyboardEvent) => void;
    /**
     * (optional) A callback to run when the user signs in via the menu.
     */
    onSignIn?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the user signs out via the menu.
     */
    onSignOut?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the user creates a new project.
     */
    onChangePresence?: (state: TldrawApp, user: TDUser) => void;
    /**
     * (optional) A callback to run when the component's state changes.
     */
    onChange?: (state: TldrawApp, reason?: string) => void;
    /**
     * (optional) A callback to run when the state is patched.
     */
    onPatch?: (state: TldrawApp, reason?: string) => void;
    /**
     * (optional) A callback to run when the state is changed with a command.
     */
    onCommand?: (state: TldrawApp, reason?: string) => void;
    /**
     * (optional) A callback to run when the state is persisted.
     */
    onPersist?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the user undos.
     */
    onUndo?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the user redos.
     */
    onRedo?: (state: TldrawApp) => void;
    onChangePage?: (app: TldrawApp, shapes: Record<string, TDShape | undefined>, bindings: Record<string, TDBinding | undefined>) => void;
}
export declare function Tldraw({ id, document, currentPageId, darkMode, autofocus, showMenu, showPages, showTools, showZoom, showStyles, showUI, readOnly, showSponsorLink, onMount, onChange, onChangePresence, onNewProject, onSaveProject, onSaveProjectAs, onOpenProject, onSignOut, onSignIn, onUndo, onRedo, onPersist, onPatch, onCommand, onChangePage, }: TldrawProps): JSX.Element;
//# sourceMappingURL=Tldraw.d.ts.map