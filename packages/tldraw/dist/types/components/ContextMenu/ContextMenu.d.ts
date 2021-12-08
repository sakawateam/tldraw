import * as React from 'react';
import { RowButtonProps } from '../Primitives/RowButton';
interface ContextMenuProps {
    onBlur: React.FocusEventHandler;
    children: React.ReactNode;
}
export declare const ContextMenu: ({ onBlur, children }: ContextMenuProps) => JSX.Element;
export interface ContextMenuSubMenuProps {
    label: string;
    children: React.ReactNode;
}
export declare function ContextMenuSubMenu({ children, label }: ContextMenuSubMenuProps): JSX.Element;
interface CMTriggerButtonProps extends RowButtonProps {
    isSubmenu?: boolean;
}
export declare const CMTriggerButton: ({ isSubmenu, ...rest }: CMTriggerButtonProps) => JSX.Element;
export {};
//# sourceMappingURL=ContextMenu.d.ts.map