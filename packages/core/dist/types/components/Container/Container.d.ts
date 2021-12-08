import type { HTMLProps } from 'react';
import * as React from 'react';
import type { TLBounds } from '../../types';
interface ContainerProps extends HTMLProps<HTMLDivElement> {
    id?: string;
    bounds: TLBounds;
    isGhost?: boolean;
    rotation?: number;
    children: React.ReactNode;
}
export declare const Container: React.FunctionComponent<ContainerProps>;
export {};
//# sourceMappingURL=Container.d.ts.map