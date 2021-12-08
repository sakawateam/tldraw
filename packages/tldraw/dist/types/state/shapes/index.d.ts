import type { TDShapeUtil } from './TDShapeUtil';
import { RectangleUtil } from './RectangleUtil';
import { EllipseUtil } from './EllipseUtil';
import { ArrowUtil } from './ArrowUtil';
import { GroupUtil } from './GroupUtil';
import { StickyUtil } from './StickyUtil';
import { TextUtil } from './TextUtil';
import { DrawUtil } from './DrawUtil';
import { TDShape } from '../../types';
export declare const Rectangle: RectangleUtil;
export declare const Ellipse: EllipseUtil;
export declare const Draw: DrawUtil;
export declare const Arrow: ArrowUtil;
export declare const Text: TextUtil;
export declare const Group: GroupUtil;
export declare const Sticky: StickyUtil;
export declare const shapeUtils: {
    rectangle: RectangleUtil;
    ellipse: EllipseUtil;
    draw: DrawUtil;
    arrow: ArrowUtil;
    text: TextUtil;
    group: GroupUtil;
    sticky: StickyUtil;
};
export declare const getShapeUtil: <T extends TDShape>(shape: T | T["type"]) => TDShapeUtil<T, any>;
//# sourceMappingURL=index.d.ts.map