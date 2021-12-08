import type { ArrowShape, TldrawHandle } from '../../../types';
export declare function getArrowArcPath(start: TldrawHandle, end: TldrawHandle, circle: number[], bend: number): string;
export declare function getBendPoint(handles: ArrowShape['handles'], bend: number): number[];
export declare function renderFreehandArrowShaft(shape: ArrowShape): string;
export declare function renderCurvedFreehandArrowShaft(shape: ArrowShape, circle: number[], length: number, easing: (t: number) => number): string;
export declare function getCtp(shape: ArrowShape): number[];
export declare function getArrowArc(shape: ArrowShape): {
    center: number[];
    radius: number;
    length: number;
};
export declare function getCurvedArrowHeadPoints(A: number[], r1: number, C: number[], r2: number, sweep: boolean): {
    left: number[];
    right: number[];
};
export declare function getStraightArrowHeadPoints(A: number[], B: number[], r: number): {
    left: number[];
    right: number[];
};
export declare function getCurvedArrowHeadPath(A: number[], r1: number, C: number[], r2: number, sweep: boolean): string;
export declare function getStraightArrowHeadPath(A: number[], B: number[], r: number): string;
export declare function getArrowPath(shape: ArrowShape): string;
export declare function getArcPoints(shape: ArrowShape): number[][];
export declare function isAngleBetween(a: number, b: number, c: number): boolean;
export declare function getArcLength(C: number[], r: number, A: number[], B: number[]): number;
//# sourceMappingURL=arrowHelpers.d.ts.map