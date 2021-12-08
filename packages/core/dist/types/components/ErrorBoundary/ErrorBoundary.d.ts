import * as React from 'react';
interface FallbackProps {
    error: Error;
    resetErrorBoundary: (...args: Array<unknown>) => void;
}
interface ErrorBoundaryPropsWithComponent {
    onResetKeysChange?: (prevResetKeys: Array<unknown> | undefined, resetKeys: Array<unknown> | undefined) => void;
    onReset?: (...args: Array<unknown>) => void;
    onError?: (error: Error, info: {
        componentStack: string;
    }) => void;
    resetKeys?: Array<unknown>;
    fallback?: never;
    FallbackComponent: React.ComponentType<FallbackProps>;
    fallbackRender?: never;
}
declare function FallbackRender(props: FallbackProps): React.ReactElement<unknown, string | React.FunctionComponent | typeof React.Component> | null;
interface ErrorBoundaryPropsWithRender {
    onResetKeysChange?: (prevResetKeys: Array<unknown> | undefined, resetKeys: Array<unknown> | undefined) => void;
    onReset?: (...args: Array<unknown>) => void;
    onError?: (error: Error, info: {
        componentStack: string;
    }) => void;
    resetKeys?: Array<unknown>;
    fallback?: never;
    FallbackComponent?: never;
    fallbackRender: typeof FallbackRender;
}
interface ErrorBoundaryPropsWithFallback {
    onResetKeysChange?: (prevResetKeys: Array<unknown> | undefined, resetKeys: Array<unknown> | undefined) => void;
    onReset?: (...args: Array<unknown>) => void;
    onError?: (error: Error, info: {
        componentStack: string;
    }) => void;
    resetKeys?: Array<unknown>;
    fallback: React.ReactElement<unknown, string | React.FunctionComponent | typeof React.Component> | null;
    FallbackComponent?: never;
    fallbackRender?: never;
}
declare type ErrorBoundaryProps = ErrorBoundaryPropsWithFallback | ErrorBoundaryPropsWithComponent | ErrorBoundaryPropsWithRender;
declare type ErrorBoundaryState = {
    error: Error | null;
};
declare class ErrorBoundary extends React.Component<React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>, ErrorBoundaryState> {
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    state: ErrorBoundaryState;
    updatedWithError: boolean;
    resetErrorBoundary: (...args: Array<unknown>) => void;
    reset(): void;
    componentDidCatch(error: Error, info: React.ErrorInfo): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ErrorBoundaryProps): void;
    render(): React.ReactNode;
}
export { ErrorBoundary };
export type { FallbackProps, ErrorBoundaryPropsWithComponent, ErrorBoundaryPropsWithRender, ErrorBoundaryPropsWithFallback, ErrorBoundaryProps, };
//# sourceMappingURL=ErrorBoundary.d.ts.map