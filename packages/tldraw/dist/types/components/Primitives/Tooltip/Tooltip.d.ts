import * as React from 'react';
interface TooltipProps {
    children: React.ReactNode;
    label: string;
    kbd?: string;
    side?: 'bottom' | 'left' | 'right' | 'top';
}
export declare function Tooltip({ children, label, kbd: kbdProp, side, }: TooltipProps): JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map