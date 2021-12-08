var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/components/Renderer/Renderer.tsx
import { observer as observer20 } from "mobx-react-lite";
import {
  createElement as createElement28,
  useCallback as useCallback7,
  useEffect as useEffect7,
  useRef as useRef9,
  useState
} from "react";

// src/components/Canvas/Canvas.tsx
import { observer as observer19 } from "mobx-react-lite";
import {
  createElement as createElement27,
  useRef as useRef8
} from "react";

// src/hooks/useTLContext.tsx
import {
  createContext,
  useContext
} from "react";
var TLContext = createContext({});
function useTLContext() {
  const context = useContext(TLContext);
  return context;
}

// src/hooks/useZoomEvents.ts
import {
  useEffect,
  useRef
} from "react";
import { useGesture } from "@use-gesture/react";
import { Vec } from "@tldraw/vec";
function useZoomEvents(zoom, ref) {
  const rOriginPoint = useRef(void 0);
  const rPinchPoint = useRef(void 0);
  const rDelta = useRef([0, 0]);
  const { inputs: inputs2, bounds, callbacks } = useTLContext();
  useEffect(() => {
    const preventGesture = (event) => {
      event.preventDefault();
    };
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);
    return () => {
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
    };
  }, []);
  useGesture({
    onWheel: ({ delta, event: e }) => {
      var _a, _b, _c, _d;
      e.preventDefault();
      if (e.altKey && e.buttons === 0) {
        const point = (_b = (_a = inputs2.pointer) == null ? void 0 : _a.point) != null ? _b : [bounds.width / 2, bounds.height / 2];
        const info2 = inputs2.pinch(point, point);
        (_c = callbacks.onZoom) == null ? void 0 : _c.call(callbacks, __spreadProps(__spreadValues({}, info2), { delta: [...point, -e.deltaY] }), e);
        return;
      }
      if (inputs2.isPinching)
        return;
      if (Vec.isEqual(delta, [0, 0]))
        return;
      const info = inputs2.pan(delta, e);
      (_d = callbacks.onPan) == null ? void 0 : _d.call(callbacks, info, e);
    },
    onPinchStart: ({ origin, event }) => {
      var _a;
      const elm = ref.current;
      if (!elm || !(event.target === elm || elm.contains(event.target)))
        return;
      const info = inputs2.pinch(origin, origin);
      inputs2.isPinching = true;
      (_a = callbacks.onPinchStart) == null ? void 0 : _a.call(callbacks, info, event);
      rPinchPoint.current = info.point;
      rOriginPoint.current = info.origin;
      rDelta.current = [0, 0];
    },
    onPinchEnd: ({ origin, event }) => {
      var _a;
      const elm = ref.current;
      if (!(event.target === elm || (elm == null ? void 0 : elm.contains(event.target))))
        return;
      const info = inputs2.pinch(origin, origin);
      inputs2.isPinching = false;
      (_a = callbacks.onPinchEnd) == null ? void 0 : _a.call(callbacks, info, event);
      rPinchPoint.current = void 0;
      rOriginPoint.current = void 0;
      rDelta.current = [0, 0];
    },
    onPinch: ({ origin, offset, event }) => {
      var _a;
      const elm = ref.current;
      if (!(event.target === elm || (elm == null ? void 0 : elm.contains(event.target))))
        return;
      if (!rOriginPoint.current)
        return;
      const info = inputs2.pinch(origin, rOriginPoint.current);
      const trueDelta = Vec.sub(info.delta, rDelta.current);
      rDelta.current = info.delta;
      (_a = callbacks.onPinch) == null ? void 0 : _a.call(callbacks, __spreadProps(__spreadValues({}, info), {
        point: info.point,
        origin: rOriginPoint.current,
        delta: [...trueDelta, offset[0]]
      }), event);
      rPinchPoint.current = origin;
    }
  }, {
    target: ref,
    eventOptions: { passive: false },
    pinch: {
      from: zoom,
      scaleBounds: () => ({ from: inputs2.zoom, max: 5, min: 0.1 })
    }
  });
}

// src/hooks/useSafariFocusOutFix.tsx
import { useEffect as useEffect2 } from "react";

// src/types.ts
var TLBoundsEdge;
(function(TLBoundsEdge2) {
  TLBoundsEdge2["Top"] = "top_edge";
  TLBoundsEdge2["Right"] = "right_edge";
  TLBoundsEdge2["Bottom"] = "bottom_edge";
  TLBoundsEdge2["Left"] = "left_edge";
})(TLBoundsEdge || (TLBoundsEdge = {}));
var TLBoundsCorner;
(function(TLBoundsCorner2) {
  TLBoundsCorner2["TopLeft"] = "top_left_corner";
  TLBoundsCorner2["TopRight"] = "top_right_corner";
  TLBoundsCorner2["BottomRight"] = "bottom_right_corner";
  TLBoundsCorner2["BottomLeft"] = "bottom_left_corner";
})(TLBoundsCorner || (TLBoundsCorner = {}));
var SnapPoints;
(function(SnapPoints2) {
  SnapPoints2["minX"] = "minX";
  SnapPoints2["midX"] = "midX";
  SnapPoints2["maxX"] = "maxX";
  SnapPoints2["minY"] = "minY";
  SnapPoints2["midY"] = "midY";
  SnapPoints2["maxY"] = "maxY";
})(SnapPoints || (SnapPoints = {}));

// src/utils/utils.ts
import { Vec as Vec2 } from "@tldraw/vec";

// src/utils/polyfills.ts
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(str, newStr) {
    if (Object.prototype.toString.call(str).toLowerCase() === "[object regexp]") {
      return this.replace(str, newStr);
    }
    return this.replace(new RegExp(str, "g"), newStr);
  };
}

// src/utils/utils.ts
var TAU = Math.PI * 2;
var _Utils = class {
  static lerp(y1, y2, mu) {
    mu = _Utils.clamp(mu, 0, 1);
    return y1 * (1 - mu) + y2 * mu;
  }
  static lerpColor(color1, color2, factor = 0.5) {
    function h2r(hex) {
      const result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return [parseInt(result2[1], 16), parseInt(result2[2], 16), parseInt(result2[3], 16)];
    }
    function r2h(rgb) {
      return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    }
    const c1 = h2r(color1) || [0, 0, 0];
    const c2 = h2r(color2) || [0, 0, 0];
    const result = c1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (c2[i] - c1[i]));
    }
    return r2h(result);
  }
  static modulate(value, rangeA, rangeB, clamp = false) {
    const [fromLow, fromHigh] = rangeA;
    const [v0, v1] = rangeB;
    const result = v0 + (value - fromLow) / (fromHigh - fromLow) * (v1 - v0);
    return clamp ? v0 < v1 ? Math.max(Math.min(result, v1), v0) : Math.max(Math.min(result, v0), v1) : result;
  }
  static clamp(n, min, max) {
    return Math.max(min, typeof max !== "undefined" ? Math.min(n, max) : n);
  }
  static deepClone(obj) {
    if (obj === null)
      return obj;
    if (Array.isArray(obj)) {
      return [...obj];
    }
    if (typeof obj === "object") {
      const clone = __spreadValues({}, obj);
      Object.keys(clone).forEach((key) => clone[key] = typeof obj[key] === "object" ? _Utils.deepClone(obj[key]) : obj[key]);
      return clone;
    }
    return obj;
  }
  static rng(seed = "") {
    let x = 0;
    let y = 0;
    let z = 0;
    let w = 0;
    function next() {
      const t = x ^ x << 11;
      x = y;
      y = z;
      z = w;
      w ^= (w >>> 19 ^ t ^ t >>> 8) >>> 0;
      return w / 4294967296;
    }
    for (let k = 0; k < seed.length + 64; k++) {
      x ^= seed.charCodeAt(k) | 0;
      next();
    }
    return next;
  }
  static getRectangleSides(point, size, rotation = 0) {
    const center = [point[0] + size[0] / 2, point[1] + size[1] / 2];
    const tl = Vec2.rotWith(point, center, rotation);
    const tr = Vec2.rotWith(Vec2.add(point, [size[0], 0]), center, rotation);
    const br = Vec2.rotWith(Vec2.add(point, size), center, rotation);
    const bl = Vec2.rotWith(Vec2.add(point, [0, size[1]]), center, rotation);
    return [
      ["top", [tl, tr]],
      ["right", [tr, br]],
      ["bottom", [br, bl]],
      ["left", [bl, tl]]
    ];
  }
  static circleFromThreePoints(A, B, C) {
    const [x1, y1] = A;
    const [x2, y2] = B;
    const [x3, y3] = C;
    const a = x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2;
    const b = (x1 * x1 + y1 * y1) * (y3 - y2) + (x2 * x2 + y2 * y2) * (y1 - y3) + (x3 * x3 + y3 * y3) * (y2 - y1);
    const c = (x1 * x1 + y1 * y1) * (x2 - x3) + (x2 * x2 + y2 * y2) * (x3 - x1) + (x3 * x3 + y3 * y3) * (x1 - x2);
    const x = -b / (2 * a);
    const y = -c / (2 * a);
    return [x, y, Math.hypot(x - x1, y - y1)];
  }
  static perimeterOfEllipse(rx, ry) {
    const h = Math.pow(rx - ry, 2) / Math.pow(rx + ry, 2);
    const p = Math.PI * (rx + ry) * (1 + 3 * h / (10 + Math.sqrt(4 - 3 * h)));
    return p;
  }
  static shortAngleDist(a0, a1) {
    const max = Math.PI * 2;
    const da = (a1 - a0) % max;
    return 2 * da % max - da;
  }
  static longAngleDist(a0, a1) {
    return Math.PI * 2 - _Utils.shortAngleDist(a0, a1);
  }
  static lerpAngles(a0, a1, t) {
    return a0 + _Utils.shortAngleDist(a0, a1) * t;
  }
  static angleDelta(a0, a1) {
    return _Utils.shortAngleDist(a0, a1);
  }
  static getSweep(C, A, B) {
    return _Utils.angleDelta(Vec2.angle(C, A), Vec2.angle(C, B));
  }
  static clampRadians(r) {
    return (Math.PI * 2 + r) % (Math.PI * 2);
  }
  static snapAngleToSegments(r, segments) {
    const seg = Math.PI * 2 / segments;
    return Math.floor((_Utils.clampRadians(r) + seg / 2) / seg) * seg;
  }
  static isAngleBetween(a, b, c) {
    if (c === a || c === b)
      return true;
    const AB = (b - a + TAU) % TAU;
    const AC = (c - a + TAU) % TAU;
    return AB <= Math.PI !== AC > AB;
  }
  static degreesToRadians(d) {
    return d * Math.PI / 180;
  }
  static radiansToDegrees(r) {
    return r * 180 / Math.PI;
  }
  static getArcLength(C, r, A, B) {
    const sweep = _Utils.getSweep(C, A, B);
    return r * (2 * Math.PI) * (sweep / (2 * Math.PI));
  }
  static getSweepFlag(A, B, C) {
    const angleAC = Vec2.angle(A, C);
    const angleAB = Vec2.angle(A, B);
    const angleCAB = (angleAB - angleAC + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return angleCAB > 0 ? 0 : 1;
  }
  static getLargeArcFlag(A, C, P) {
    const anglePA = Vec2.angle(P, A);
    const anglePC = Vec2.angle(P, C);
    const angleAPC = (anglePC - anglePA + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return Math.abs(angleAPC) > Math.PI / 2 ? 0 : 1;
  }
  static getArcDashOffset(C, r, A, B, step) {
    const del0 = _Utils.getSweepFlag(C, A, B);
    const len0 = _Utils.getArcLength(C, r, A, B);
    const off0 = del0 < 0 ? len0 : 2 * Math.PI * C[2] - len0;
    return -off0 / 2 + step;
  }
  static getEllipseDashOffset(A, step) {
    const c = 2 * Math.PI * A[2];
    return -c / 2 + -step;
  }
  static pointInCircle(A, C, r) {
    return Vec2.dist(A, C) <= r;
  }
  static pointInEllipse(A, C, rx, ry, rotation = 0) {
    rotation = rotation || 0;
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);
    const delta = Vec2.sub(A, C);
    const tdx = cos * delta[0] + sin * delta[1];
    const tdy = sin * delta[0] - cos * delta[1];
    return tdx * tdx / (rx * rx) + tdy * tdy / (ry * ry) <= 1;
  }
  static pointInRect(point, size) {
    return !(point[0] < size[0] || point[0] > point[0] + size[0] || point[1] < size[1] || point[1] > point[1] + size[1]);
  }
  static pointInPolygon(p, points) {
    let wn = 0;
    points.forEach((a, i) => {
      const b = points[(i + 1) % points.length];
      if (a[1] <= p[1]) {
        if (b[1] > p[1] && Vec2.cross(a, b, p) > 0) {
          wn += 1;
        }
      } else if (b[1] <= p[1] && Vec2.cross(a, b, p) < 0) {
        wn -= 1;
      }
    });
    return wn !== 0;
  }
  static pointInBounds(A, b) {
    return !(A[0] < b.minX || A[0] > b.maxX || A[1] < b.minY || A[1] > b.maxY);
  }
  static pointInPolyline(A, points, distance = 3) {
    for (let i = 1; i < points.length; i++) {
      if (Vec2.distanceToLineSegment(points[i - 1], points[i], A) < distance) {
        return true;
      }
    }
    return false;
  }
  static getBoundsSides(bounds) {
    return this.getRectangleSides([bounds.minX, bounds.minY], [bounds.width, bounds.height]);
  }
  static expandBounds(bounds, delta) {
    return {
      minX: bounds.minX - delta,
      minY: bounds.minY - delta,
      maxX: bounds.maxX + delta,
      maxY: bounds.maxY + delta,
      width: bounds.width + delta * 2,
      height: bounds.height + delta * 2
    };
  }
  static boundsCollide(a, b) {
    return !(a.maxX < b.minX || a.minX > b.maxX || a.maxY < b.minY || a.minY > b.maxY);
  }
  static boundsContain(a, b) {
    return a.minX < b.minX && a.minY < b.minY && a.maxY > b.maxY && a.maxX > b.maxX;
  }
  static boundsContained(a, b) {
    return _Utils.boundsContain(b, a);
  }
  static boundsAreEqual(a, b) {
    return !(b.maxX !== a.maxX || b.minX !== a.minX || b.maxY !== a.maxY || b.minY !== a.minY);
  }
  static getBoundsFromPoints(points, rotation = 0) {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    if (points.length < 2) {
      minX = 0;
      minY = 0;
      maxX = 1;
      maxY = 1;
    } else {
      for (const [x, y] of points) {
        minX = Math.min(x, minX);
        minY = Math.min(y, minY);
        maxX = Math.max(x, maxX);
        maxY = Math.max(y, maxY);
      }
    }
    if (rotation !== 0) {
      return _Utils.getBoundsFromPoints(points.map((pt) => Vec2.rotWith(pt, [(minX + maxX) / 2, (minY + maxY) / 2], rotation)));
    }
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: Math.max(1, maxX - minX),
      height: Math.max(1, maxY - minY)
    };
  }
  static centerBounds(bounds, point) {
    const boundsCenter = this.getBoundsCenter(bounds);
    const dx = point[0] - boundsCenter[0];
    const dy = point[1] - boundsCenter[1];
    return this.translateBounds(bounds, [dx, dy]);
  }
  static snapBoundsToGrid(bounds, gridSize) {
    const minX = Math.round(bounds.minX / gridSize) * gridSize;
    const minY = Math.round(bounds.minY / gridSize) * gridSize;
    const maxX = Math.round(bounds.maxX / gridSize) * gridSize;
    const maxY = Math.round(bounds.maxY / gridSize) * gridSize;
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: Math.max(1, maxX - minX),
      height: Math.max(1, maxY - minY)
    };
  }
  static translateBounds(bounds, delta) {
    return {
      minX: bounds.minX + delta[0],
      minY: bounds.minY + delta[1],
      maxX: bounds.maxX + delta[0],
      maxY: bounds.maxY + delta[1],
      width: bounds.width,
      height: bounds.height
    };
  }
  static rotateBounds(bounds, center, rotation) {
    const [minX, minY] = Vec2.rotWith([bounds.minX, bounds.minY], center, rotation);
    const [maxX, maxY] = Vec2.rotWith([bounds.maxX, bounds.maxY], center, rotation);
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: bounds.width,
      height: bounds.height
    };
  }
  static getRotatedEllipseBounds(x, y, rx, ry, rotation = 0) {
    const c = Math.cos(rotation);
    const s = Math.sin(rotation);
    const w = Math.hypot(rx * c, ry * s);
    const h = Math.hypot(rx * s, ry * c);
    return {
      minX: x + rx - w,
      minY: y + ry - h,
      maxX: x + rx + w,
      maxY: y + ry + h,
      width: w * 2,
      height: h * 2
    };
  }
  static getExpandedBounds(a, b) {
    const minX = Math.min(a.minX, b.minX);
    const minY = Math.min(a.minY, b.minY);
    const maxX = Math.max(a.maxX, b.maxX);
    const maxY = Math.max(a.maxY, b.maxY);
    const width = Math.abs(maxX - minX);
    const height = Math.abs(maxY - minY);
    return { minX, minY, maxX, maxY, width, height };
  }
  static getCommonBounds(bounds) {
    if (bounds.length < 2)
      return bounds[0];
    let result = bounds[0];
    for (let i = 1; i < bounds.length; i++) {
      result = _Utils.getExpandedBounds(result, bounds[i]);
    }
    return result;
  }
  static getRotatedCorners(b, rotation = 0) {
    const center = [b.minX + b.width / 2, b.minY + b.height / 2];
    return [
      [b.minX, b.minY],
      [b.maxX, b.minY],
      [b.maxX, b.maxY],
      [b.minX, b.maxY]
    ].map((point) => Vec2.rotWith(point, center, rotation));
  }
  static getTransformedBoundingBox(bounds, handle, delta, rotation = 0, isAspectRatioLocked = false) {
    const [ax0, ay0] = [bounds.minX, bounds.minY];
    const [ax1, ay1] = [bounds.maxX, bounds.maxY];
    let [bx0, by0] = [bounds.minX, bounds.minY];
    let [bx1, by1] = [bounds.maxX, bounds.maxY];
    if (handle === "center") {
      return {
        minX: bx0 + delta[0],
        minY: by0 + delta[1],
        maxX: bx1 + delta[0],
        maxY: by1 + delta[1],
        width: bx1 - bx0,
        height: by1 - by0,
        scaleX: 1,
        scaleY: 1
      };
    }
    const [dx, dy] = Vec2.rot(delta, -rotation);
    switch (handle) {
      case TLBoundsEdge.Top:
      case TLBoundsCorner.TopLeft:
      case TLBoundsCorner.TopRight: {
        by0 += dy;
        break;
      }
      case TLBoundsEdge.Bottom:
      case TLBoundsCorner.BottomLeft:
      case TLBoundsCorner.BottomRight: {
        by1 += dy;
        break;
      }
    }
    switch (handle) {
      case TLBoundsEdge.Left:
      case TLBoundsCorner.TopLeft:
      case TLBoundsCorner.BottomLeft: {
        bx0 += dx;
        break;
      }
      case TLBoundsEdge.Right:
      case TLBoundsCorner.TopRight:
      case TLBoundsCorner.BottomRight: {
        bx1 += dx;
        break;
      }
    }
    const aw = ax1 - ax0;
    const ah = ay1 - ay0;
    const scaleX = (bx1 - bx0) / aw;
    const scaleY = (by1 - by0) / ah;
    const flipX = scaleX < 0;
    const flipY = scaleY < 0;
    const bw = Math.abs(bx1 - bx0);
    const bh = Math.abs(by1 - by0);
    if (isAspectRatioLocked) {
      const ar = aw / ah;
      const isTall = ar < bw / bh;
      const tw = bw * (scaleY < 0 ? 1 : -1) * (1 / ar);
      const th = bh * (scaleX < 0 ? 1 : -1) * ar;
      switch (handle) {
        case TLBoundsCorner.TopLeft: {
          if (isTall)
            by0 = by1 + tw;
          else
            bx0 = bx1 + th;
          break;
        }
        case TLBoundsCorner.TopRight: {
          if (isTall)
            by0 = by1 + tw;
          else
            bx1 = bx0 - th;
          break;
        }
        case TLBoundsCorner.BottomRight: {
          if (isTall)
            by1 = by0 - tw;
          else
            bx1 = bx0 - th;
          break;
        }
        case TLBoundsCorner.BottomLeft: {
          if (isTall)
            by1 = by0 - tw;
          else
            bx0 = bx1 + th;
          break;
        }
        case TLBoundsEdge.Bottom:
        case TLBoundsEdge.Top: {
          const m = (bx0 + bx1) / 2;
          const w = bh * ar;
          bx0 = m - w / 2;
          bx1 = m + w / 2;
          break;
        }
        case TLBoundsEdge.Left:
        case TLBoundsEdge.Right: {
          const m = (by0 + by1) / 2;
          const h = bw / ar;
          by0 = m - h / 2;
          by1 = m + h / 2;
          break;
        }
      }
    }
    if (rotation % (Math.PI * 2) !== 0) {
      let cv = [0, 0];
      const c0 = Vec2.med([ax0, ay0], [ax1, ay1]);
      const c1 = Vec2.med([bx0, by0], [bx1, by1]);
      switch (handle) {
        case TLBoundsCorner.TopLeft: {
          cv = Vec2.sub(Vec2.rotWith([bx1, by1], c1, rotation), Vec2.rotWith([ax1, ay1], c0, rotation));
          break;
        }
        case TLBoundsCorner.TopRight: {
          cv = Vec2.sub(Vec2.rotWith([bx0, by1], c1, rotation), Vec2.rotWith([ax0, ay1], c0, rotation));
          break;
        }
        case TLBoundsCorner.BottomRight: {
          cv = Vec2.sub(Vec2.rotWith([bx0, by0], c1, rotation), Vec2.rotWith([ax0, ay0], c0, rotation));
          break;
        }
        case TLBoundsCorner.BottomLeft: {
          cv = Vec2.sub(Vec2.rotWith([bx1, by0], c1, rotation), Vec2.rotWith([ax1, ay0], c0, rotation));
          break;
        }
        case TLBoundsEdge.Top: {
          cv = Vec2.sub(Vec2.rotWith(Vec2.med([bx0, by1], [bx1, by1]), c1, rotation), Vec2.rotWith(Vec2.med([ax0, ay1], [ax1, ay1]), c0, rotation));
          break;
        }
        case TLBoundsEdge.Left: {
          cv = Vec2.sub(Vec2.rotWith(Vec2.med([bx1, by0], [bx1, by1]), c1, rotation), Vec2.rotWith(Vec2.med([ax1, ay0], [ax1, ay1]), c0, rotation));
          break;
        }
        case TLBoundsEdge.Bottom: {
          cv = Vec2.sub(Vec2.rotWith(Vec2.med([bx0, by0], [bx1, by0]), c1, rotation), Vec2.rotWith(Vec2.med([ax0, ay0], [ax1, ay0]), c0, rotation));
          break;
        }
        case TLBoundsEdge.Right: {
          cv = Vec2.sub(Vec2.rotWith(Vec2.med([bx0, by0], [bx0, by1]), c1, rotation), Vec2.rotWith(Vec2.med([ax0, ay0], [ax0, ay1]), c0, rotation));
          break;
        }
      }
      ;
      [bx0, by0] = Vec2.sub([bx0, by0], cv);
      [bx1, by1] = Vec2.sub([bx1, by1], cv);
    }
    if (bx1 < bx0) {
      ;
      [bx1, bx0] = [bx0, bx1];
    }
    if (by1 < by0) {
      ;
      [by1, by0] = [by0, by1];
    }
    return {
      minX: bx0,
      minY: by0,
      maxX: bx1,
      maxY: by1,
      width: bx1 - bx0,
      height: by1 - by0,
      scaleX: (bx1 - bx0) / (ax1 - ax0 || 1) * (flipX ? -1 : 1),
      scaleY: (by1 - by0) / (ay1 - ay0 || 1) * (flipY ? -1 : 1)
    };
  }
  static getTransformAnchor(type, isFlippedX, isFlippedY) {
    let anchor = type;
    switch (type) {
      case TLBoundsCorner.TopLeft: {
        if (isFlippedX && isFlippedY) {
          anchor = TLBoundsCorner.BottomRight;
        } else if (isFlippedX) {
          anchor = TLBoundsCorner.TopRight;
        } else if (isFlippedY) {
          anchor = TLBoundsCorner.BottomLeft;
        } else {
          anchor = TLBoundsCorner.BottomRight;
        }
        break;
      }
      case TLBoundsCorner.TopRight: {
        if (isFlippedX && isFlippedY) {
          anchor = TLBoundsCorner.BottomLeft;
        } else if (isFlippedX) {
          anchor = TLBoundsCorner.TopLeft;
        } else if (isFlippedY) {
          anchor = TLBoundsCorner.BottomRight;
        } else {
          anchor = TLBoundsCorner.BottomLeft;
        }
        break;
      }
      case TLBoundsCorner.BottomRight: {
        if (isFlippedX && isFlippedY) {
          anchor = TLBoundsCorner.TopLeft;
        } else if (isFlippedX) {
          anchor = TLBoundsCorner.BottomLeft;
        } else if (isFlippedY) {
          anchor = TLBoundsCorner.TopRight;
        } else {
          anchor = TLBoundsCorner.TopLeft;
        }
        break;
      }
      case TLBoundsCorner.BottomLeft: {
        if (isFlippedX && isFlippedY) {
          anchor = TLBoundsCorner.TopRight;
        } else if (isFlippedX) {
          anchor = TLBoundsCorner.BottomRight;
        } else if (isFlippedY) {
          anchor = TLBoundsCorner.TopLeft;
        } else {
          anchor = TLBoundsCorner.TopRight;
        }
        break;
      }
    }
    return anchor;
  }
  static getRelativeTransformedBoundingBox(bounds, initialBounds, initialShapeBounds, isFlippedX, isFlippedY) {
    const nx = (isFlippedX ? initialBounds.maxX - initialShapeBounds.maxX : initialShapeBounds.minX - initialBounds.minX) / initialBounds.width;
    const ny = (isFlippedY ? initialBounds.maxY - initialShapeBounds.maxY : initialShapeBounds.minY - initialBounds.minY) / initialBounds.height;
    const nw = initialShapeBounds.width / initialBounds.width;
    const nh = initialShapeBounds.height / initialBounds.height;
    const minX = bounds.minX + bounds.width * nx;
    const minY = bounds.minY + bounds.height * ny;
    const width = bounds.width * nw;
    const height = bounds.height * nh;
    return {
      minX,
      minY,
      maxX: minX + width,
      maxY: minY + height,
      width,
      height
    };
  }
  static getRotatedSize(size, rotation) {
    const center = Vec2.div(size, 2);
    const points = [[0, 0], [size[0], 0], size, [0, size[1]]].map((point) => Vec2.rotWith(point, center, rotation));
    const bounds = _Utils.getBoundsFromPoints(points);
    return [bounds.width, bounds.height];
  }
  static getBoundsCenter(bounds) {
    return [bounds.minX + bounds.width / 2, bounds.minY + bounds.height / 2];
  }
  static getBoundsWithCenter(bounds) {
    const center = _Utils.getBoundsCenter(bounds);
    return __spreadProps(__spreadValues({}, bounds), {
      midX: center[0],
      midY: center[1]
    });
  }
  static getCommonTopLeft(points) {
    const min = [Infinity, Infinity];
    points.forEach((point) => {
      min[0] = Math.min(min[0], point[0]);
      min[1] = Math.min(min[1], point[1]);
    });
    return min;
  }
  static getFromCache(cache, item, getNext) {
    let value = cache.get(item);
    if (value === void 0) {
      cache.set(item, getNext());
      value = cache.get(item);
      if (value === void 0) {
        throw Error("Cache did not include item!");
      }
    }
    return value;
  }
  static uniqueId(a = "") {
    return a ? ((Number(a) ^ Math.random() * 16) >> Number(a) / 4).toString(16) : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, _Utils.uniqueId);
  }
  static rotateArray(arr, offset) {
    return arr.map((_14, i) => arr[(i + offset) % arr.length]);
  }
  static debounce(fn, ms = 0) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(args), ms);
    };
  }
  static getSvgPathFromStroke(points, closed = true) {
    if (!points.length) {
      return "";
    }
    const max = points.length - 1;
    return points.reduce((acc, point, i, arr) => {
      if (i === max) {
        if (closed) {
          acc.push("Z");
        }
      } else {
        acc.push(point, Vec2.med(point, arr[i + 1]));
      }
      return acc;
    }, ["M", points[0], "Q"]).join(" ").replaceAll(this.TRIM_NUMBERS, "$1");
  }
  static getPerfectDashProps(length, strokeWidth, style, snap = 1, outset = true) {
    let dashLength;
    let strokeDashoffset;
    let ratio;
    if (style.toLowerCase() === "dashed") {
      dashLength = strokeWidth * 2;
      ratio = 1;
      strokeDashoffset = outset ? (dashLength / 2).toString() : "0";
    } else if (style.toLowerCase() === "dotted") {
      dashLength = strokeWidth / 100;
      ratio = 100;
      strokeDashoffset = "0";
    } else {
      return {
        strokeDasharray: "none",
        strokeDashoffset: "none"
      };
    }
    let dashes = Math.floor(length / dashLength / (2 * ratio));
    dashes -= dashes % snap;
    dashes = Math.max(dashes, 4);
    const gapLength = Math.max(dashLength, (length - dashes * dashLength) / (outset ? dashes : dashes - 1));
    return {
      strokeDasharray: [dashLength, gapLength].join(" "),
      strokeDashoffset
    };
  }
  static isMobileSize() {
    if (typeof window === "undefined")
      return false;
    return window.innerWidth < 768;
  }
  static isMobileSafari() {
    if (typeof window === "undefined")
      return false;
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    return iOS && webkit && !ua.match(/CriOS/i);
  }
  static throttle(func, limit) {
    let inThrottle;
    let lastResult;
    return function(...args) {
      if (!inThrottle) {
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
        lastResult = func(...args);
      }
      return lastResult;
    };
  }
  static isDarwin() {
    return /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
  }
  static metaKey(e) {
    return _Utils.isDarwin() ? e.metaKey : e.ctrlKey;
  }
};
var Utils = _Utils;
__publicField(Utils, "getSnapPoints", (bounds, others, snapDistance) => {
  const A = __spreadValues({}, bounds);
  const offset = [0, 0];
  const snapLines = [];
  const snaps = {
    [SnapPoints.minX]: { id: SnapPoints.minX, isSnapped: false },
    [SnapPoints.midX]: { id: SnapPoints.midX, isSnapped: false },
    [SnapPoints.maxX]: { id: SnapPoints.maxX, isSnapped: false },
    [SnapPoints.minY]: { id: SnapPoints.minY, isSnapped: false },
    [SnapPoints.midY]: { id: SnapPoints.midY, isSnapped: false },
    [SnapPoints.maxY]: { id: SnapPoints.maxY, isSnapped: false }
  };
  const xs = [SnapPoints.midX, SnapPoints.minX, SnapPoints.maxX];
  const ys = [SnapPoints.midY, SnapPoints.minY, SnapPoints.maxY];
  const snapResults = others.map((B) => {
    const rx = xs.flatMap((f, i) => xs.map((t, k) => {
      const gap = A[f] - B[t];
      const distance = Math.abs(gap);
      return {
        f,
        t,
        gap,
        distance,
        isCareful: i === 0 || i + k === 3
      };
    }));
    const ry = ys.flatMap((f, i) => ys.map((t, k) => {
      const gap = A[f] - B[t];
      const distance = Math.abs(gap);
      return {
        f,
        t,
        gap,
        distance,
        isCareful: i === 0 || i + k === 3
      };
    }));
    return [B, rx, ry];
  });
  let gapX = Infinity;
  let gapY = Infinity;
  let minX = Infinity;
  let minY = Infinity;
  snapResults.forEach(([_14, rx, ry]) => {
    rx.forEach((r) => {
      if (r.distance < snapDistance && r.distance < minX) {
        minX = r.distance;
        gapX = r.gap;
      }
    });
    ry.forEach((r) => {
      if (r.distance < snapDistance && r.distance < minY) {
        minY = r.distance;
        gapY = r.gap;
      }
    });
  });
  snapResults.forEach(([B, rx, ry]) => {
    if (gapX !== Infinity) {
      rx.forEach((r) => {
        if (Math.abs(r.gap - gapX) < 2) {
          snaps[r.f] = __spreadProps(__spreadValues({}, snaps[r.f]), {
            isSnapped: true,
            to: B[r.t],
            B,
            distance: r.distance
          });
        }
      });
    }
    if (gapY !== Infinity) {
      ry.forEach((r) => {
        if (Math.abs(r.gap - gapY) < 2) {
          snaps[r.f] = __spreadProps(__spreadValues({}, snaps[r.f]), {
            isSnapped: true,
            to: B[r.t],
            B,
            distance: r.distance
          });
        }
      });
    }
  });
  offset[0] = gapX === Infinity ? 0 : gapX;
  offset[1] = gapY === Infinity ? 0 : gapY;
  A.minX -= offset[0];
  A.midX -= offset[0];
  A.maxX -= offset[0];
  A.minY -= offset[1];
  A.midY -= offset[1];
  A.maxY -= offset[1];
  xs.forEach((from) => {
    const snap = snaps[from];
    if (!snap.isSnapped)
      return;
    const { id, B } = snap;
    const x = A[id];
    snapLines.push(id === SnapPoints.minX ? [
      [x, A.midY],
      [x, B.minY],
      [x, B.maxY]
    ] : [
      [x, A.minY],
      [x, A.maxY],
      [x, B.minY],
      [x, B.maxY]
    ]);
  });
  ys.forEach((from) => {
    const snap = snaps[from];
    if (!snap.isSnapped)
      return;
    const { id, B } = snap;
    const y = A[id];
    snapLines.push(id === SnapPoints.midY ? [
      [A.midX, y],
      [B.minX, y],
      [B.maxX, y]
    ] : [
      [A.minX, y],
      [A.maxX, y],
      [B.minX, y],
      [B.maxX, y]
    ]);
  });
  return { offset, snapLines };
});
__publicField(Utils, "deepMerge", (target, patch) => {
  const result = __spreadValues({}, target);
  const entries = Object.entries(patch);
  for (const [key, value] of entries)
    result[key] = value === Object(value) && !Array.isArray(value) ? _Utils.deepMerge(result[key], value) : value;
  return result;
});
__publicField(Utils, "TRIM_NUMBERS", /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g);

// src/utils/index.ts
var utils_default = Utils;

// src/hooks/useSafariFocusOutFix.tsx
function useSafariFocusOutFix() {
  const { callbacks } = useTLContext();
  useEffect2(() => {
    function handleFocusOut() {
      var _a;
      (_a = callbacks.onShapeBlur) == null ? void 0 : _a.call(callbacks);
    }
    if (utils_default.isMobileSafari()) {
      document.addEventListener("focusout", handleFocusOut);
      return () => document.removeEventListener("focusout", handleFocusOut);
    }
    return () => null;
  }, [callbacks]);
}

// src/hooks/useCanvasEvents.tsx
import {
  useCallback
} from "react";
function useCanvasEvents() {
  const { callbacks, inputs: inputs2 } = useTLContext();
  const onPointerDown = useCallback((e) => {
    var _a, _b;
    if (e.button !== 0 && e.button !== 1)
      return;
    if (!inputs2.pointerIsValid(e))
      return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const info = inputs2.pointerDown(e, "canvas");
    if (e.button === 0 || e.button === 1) {
      (_a = callbacks.onPointCanvas) == null ? void 0 : _a.call(callbacks, info, e);
      (_b = callbacks.onPointerDown) == null ? void 0 : _b.call(callbacks, info, e);
    }
  }, [callbacks, inputs2]);
  const onPointerMove = useCallback((e) => {
    var _a, _b;
    if (!inputs2.pointerIsValid(e))
      return;
    const info = inputs2.pointerMove(e, "canvas");
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a = callbacks.onDragCanvas) == null ? void 0 : _a.call(callbacks, info, e);
    }
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
  }, [callbacks, inputs2]);
  const onPointerUp = useCallback((e) => {
    var _a, _b, _c, _d;
    if (e.button !== 0 && e.button !== 1)
      return;
    inputs2.activePointer = void 0;
    if (!inputs2.pointerIsValid(e))
      return;
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e, "canvas");
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a = e.currentTarget) == null ? void 0 : _a.releasePointerCapture(e.pointerId);
    }
    if (isDoubleClick && !(info.altKey || info.metaKey)) {
      (_b = callbacks.onDoubleClickCanvas) == null ? void 0 : _b.call(callbacks, info, e);
    }
    (_c = callbacks.onReleaseCanvas) == null ? void 0 : _c.call(callbacks, info, e);
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
  }, [callbacks, inputs2]);
  return {
    onPointerDown,
    onPointerMove,
    onPointerUp
  };
}

// src/hooks/useShapeEvents.tsx
import {
  useContext as useContext2,
  useMemo
} from "react";
function useShapeEvents(id) {
  const { rPageState, rSelectionBounds, callbacks, inputs: inputs2 } = useContext2(TLContext);
  return useMemo(() => ({
    onPointerDown: (e) => {
      var _a, _b, _c, _d, _e, _f;
      if (!inputs2.pointerIsValid(e))
        return;
      if (e.button === 2) {
        (_a = callbacks.onRightPointShape) == null ? void 0 : _a.call(callbacks, inputs2.pointerDown(e, id), e);
        return;
      }
      if (e.button !== 0)
        return;
      const info = inputs2.pointerDown(e, id);
      e.stopPropagation();
      (_b = e.currentTarget) == null ? void 0 : _b.setPointerCapture(e.pointerId);
      if (rSelectionBounds.current && Utils.pointInBounds(info.point, rSelectionBounds.current) && !rPageState.current.selectedIds.includes(id)) {
        (_c = callbacks.onPointBounds) == null ? void 0 : _c.call(callbacks, inputs2.pointerDown(e, "bounds"), e);
        (_d = callbacks.onPointShape) == null ? void 0 : _d.call(callbacks, info, e);
        return;
      }
      (_e = callbacks.onPointShape) == null ? void 0 : _e.call(callbacks, info, e);
      (_f = callbacks.onPointerDown) == null ? void 0 : _f.call(callbacks, info, e);
    },
    onPointerUp: (e) => {
      var _a, _b, _c, _d;
      if (e.button !== 0)
        return;
      inputs2.activePointer = void 0;
      if (!inputs2.pointerIsValid(e))
        return;
      e.stopPropagation();
      const isDoubleClick = inputs2.isDoubleClick();
      const info = inputs2.pointerUp(e, id);
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        (_a = e.currentTarget) == null ? void 0 : _a.releasePointerCapture(e.pointerId);
      }
      if (isDoubleClick && !(info.altKey || info.metaKey)) {
        (_b = callbacks.onDoubleClickShape) == null ? void 0 : _b.call(callbacks, info, e);
      }
      (_c = callbacks.onReleaseShape) == null ? void 0 : _c.call(callbacks, info, e);
      (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
    },
    onPointerEnter: (e) => {
      var _a, _b;
      if (!inputs2.pointerIsValid(e))
        return;
      e.stopPropagation();
      if (inputs2.pointer && e.pointerId !== inputs2.pointer.pointerId)
        return;
      const info = inputs2.pointerMove(e, id);
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        (_a = callbacks.onDragShape) == null ? void 0 : _a.call(callbacks, info, e);
      }
      (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
    },
    onPointerMove: (e) => {
      var _a;
      if (!inputs2.pointerIsValid(e))
        return;
      const info = inputs2.pointerEnter(e, id);
      (_a = callbacks.onHoverShape) == null ? void 0 : _a.call(callbacks, info, e);
    },
    onPointerLeave: (e) => {
      var _a;
      if (!inputs2.pointerIsValid(e))
        return;
      const info = inputs2.pointerEnter(e, id);
      (_a = callbacks.onUnhoverShape) == null ? void 0 : _a.call(callbacks, info, e);
    }
  }), [inputs2, callbacks, id]);
}

// src/hooks/useShapeTree.tsx
import {
  useRef as useRef2
} from "react";
import { Vec as Vec3 } from "@tldraw/vec";
function addToShapeTree(shape, branch, shapes, pageState, isChildOfGhost = false, isChildOfSelected = false, meta) {
  const node = {
    shape,
    meta,
    isChildOfSelected,
    isGhost: shape.isGhost || isChildOfGhost,
    isEditing: pageState.editingId === shape.id,
    isBinding: pageState.bindingTargetId === shape.id,
    isSelected: pageState.selectedIds.includes(shape.id),
    isHovered: pageState.hoveredId === shape.id || shape.children !== void 0 && (pageState.hoveredId && shape.children.includes(pageState.hoveredId) || shape.children.some((childId) => pageState.selectedIds.includes(childId)))
  };
  branch.push(node);
  if (shape.children) {
    node.children = [];
    shape.children.map((id) => shapes[id]).sort((a, b) => a.childIndex - b.childIndex).forEach((childShape) => addToShapeTree(childShape, node.children, shapes, pageState, node.isGhost, node.isSelected || node.isChildOfSelected, meta));
  }
}
function shapeIsInViewport(bounds, viewport) {
  return Utils.boundsContain(viewport, bounds) || Utils.boundsCollide(viewport, bounds);
}
function useShapeTree(page, pageState, meta) {
  const { callbacks, shapeUtils, bounds } = useTLContext();
  const rTimeout = useRef2();
  const rPreviousCount = useRef2(0);
  const rShapesIdsToRender = useRef2(new Set());
  const rShapesToRender = useRef2(new Set());
  const { selectedIds, camera } = pageState;
  const [minX, minY] = Vec3.sub(Vec3.div([0, 0], camera.zoom), camera.point);
  const [maxX, maxY] = Vec3.sub(Vec3.div([bounds.width, bounds.height], camera.zoom), camera.point);
  const viewport = {
    minX,
    minY,
    maxX,
    maxY,
    height: maxX - minX,
    width: maxY - minY
  };
  const shapesToRender = rShapesToRender.current;
  const shapesIdsToRender = rShapesIdsToRender.current;
  shapesToRender.clear();
  shapesIdsToRender.clear();
  Object.values(page.shapes).filter((shape) => shapeUtils[shape.type].isStateful || selectedIds.includes(shape.id) || shapeIsInViewport(shapeUtils[shape.type].getBounds(shape), viewport)).forEach((shape) => {
    if (shape.parentId === page.id) {
      shapesIdsToRender.add(shape.id);
      shapesToRender.add(shape);
      return;
    }
    shapesIdsToRender.add(shape.parentId);
    shapesToRender.add(page.shapes[shape.parentId]);
  });
  if (shapesToRender.size !== rPreviousCount.current) {
    if (rTimeout.current) {
      clearTimeout(rTimeout.current);
    }
    rTimeout.current = requestAnimationFrame(() => {
      var _a;
      (_a = callbacks.onRenderCountChange) == null ? void 0 : _a.call(callbacks, Array.from(shapesIdsToRender.values()));
    });
    rPreviousCount.current = shapesToRender.size;
  }
  const bindingTargetId = pageState.bindingId ? page.bindings[pageState.bindingId].toId : void 0;
  const tree = [];
  shapesToRender.forEach((shape) => addToShapeTree(shape, tree, page.shapes, __spreadProps(__spreadValues({}, pageState), { bindingTargetId }), shape.isGhost, false, meta));
  tree.sort((a, b) => a.shape.childIndex - b.shape.childIndex);
  return tree;
}

// src/hooks/useStyle.tsx
import {
  useLayoutEffect,
  useMemo as useMemo2
} from "react";
var styles = new Map();
function makeCssTheme(prefix, theme) {
  return Object.keys(theme).reduce((acc, key) => {
    const value = theme[key];
    if (value) {
      return acc + `${`--${prefix}-${key}`}: ${value};
`;
    }
    return acc;
  }, "");
}
function useTheme(prefix, theme, selector = ":root") {
  useLayoutEffect(() => {
    const style = document.createElement("style");
    const cssTheme = makeCssTheme(prefix, theme);
    style.setAttribute("id", `${prefix}-theme`);
    style.setAttribute("data-selector", selector);
    style.innerHTML = `
        ${selector} {
          ${cssTheme}
        }
      `;
    document.head.appendChild(style);
    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [prefix, theme, selector]);
}
function useStyle(uid, rules) {
  useLayoutEffect(() => {
    if (styles.get(uid)) {
      return () => void 0;
    }
    const style = document.createElement("style");
    style.innerHTML = rules;
    style.setAttribute("id", uid);
    document.head.appendChild(style);
    styles.set(uid, style);
    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
        styles.delete(uid);
      }
    };
  }, [uid, rules]);
}
var css = (strings, ...args) => strings.reduce((acc, string, index) => acc + string + (index < args.length ? args[index] : ""), "");
var defaultTheme = {
  accent: "rgb(255, 0, 0)",
  brushFill: "rgba(0,0,0,.05)",
  brushStroke: "rgba(0,0,0,.25)",
  selectStroke: "rgb(66, 133, 244)",
  selectFill: "rgba(65, 132, 244, 0.05)",
  background: "rgb(248, 249, 250)",
  foreground: "rgb(51, 51, 51)",
  grid: "rgba(144, 144, 144, 1)"
};
var tlcss = css`
  @font-face {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Recursive Mono';
    font-style: normal;
    font-weight: 420;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImqvTxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  .tl-container {
    --tl-zoom: 1;
    --tl-scale: calc(1 / var(--tl-zoom));
    --tl-padding: calc(64px * max(1, var(--tl-scale)));
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    z-index: 100;
    overflow: hidden;
    touch-action: none;
    overscroll-behavior: none;
    background-color: var(--tl-background);
  }

  .tl-container * {
    box-sizing: border-box;
  }

  .tl-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: none;
  }

  .tl-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: none;
    user-select: none;
  }

  .tl-snap-line {
    stroke: var(--tl-accent);
    stroke-width: calc(1px * var(--tl-scale));
  }

  .tl-snap-point {
    stroke: var(--tl-accent);
    stroke-width: calc(1px * var(--tl-scale));
  }

  .tl-canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: all;
    overflow: clip;
  }

  .tl-layer {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 0px;
    width: 0px;
    contain: layout style size;
  }

  .tl-absolute {
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: center center;
    contain: layout style size;
  }

  .tl-positioned {
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: center center;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    contain: layout style size;
  }

  .tl-positioned-svg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    contain: layout style size;
  }

  .tl-positioned-div {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: var(--tl-padding);
    overflow: hidden;
    contain: layout style size;
  }

  .tl-stroke-hitarea {
    cursor: pointer;
    fill: none;
    stroke: transparent;
    stroke-width: calc(24px * var(--tl-scale));
    pointer-events: stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .tl-fill-hitarea {
    cursor: pointer;
    fill: transparent;
    stroke: transparent;
    stroke-width: calc(24px * var(--tl-scale));
    pointer-events: all;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .tl-counter-scaled {
    transform: scale(var(--tl-scale));
  }

  .tl-dashed {
    stroke-dasharray: calc(2px * var(--tl-scale)), calc(2px * var(--tl-scale));
  }

  .tl-transparent {
    fill: transparent;
    stroke: transparent;
  }

  .tl-cursor-ns {
    cursor: ns-resize;
  }

  .tl-cursor-ew {
    cursor: ew-resize;
  }

  .tl-cursor-nesw {
    cursor: nesw-resize;
  }

  .tl-cursor-nwse {
    cursor: nwse-resize;
  }

  .tl-corner-handle {
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
    stroke-width: calc(1.5px * var(--tl-scale));
  }

  .tl-rotate-handle {
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
    stroke-width: calc(1.5px * var(--tl-scale));
    cursor: grab;
  }

  .tl-binding {
    fill: var(--tl-selectFill);
    stroke: var(--tl-selectStroke);
    stroke-width: calc(1px * var(--tl-scale));
    pointer-events: none;
  }

  .tl-user {
    left: -4px;
    top: -4px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    pointer-events: none;
  }

  .tl-indicator {
    fill: transparent;
    stroke-width: calc(1.5px * var(--tl-scale));
    pointer-events: none;
  }

  .tl-user-indicator-bounds {
    border-style: solid;
    border-width: calc(1px * var(--tl-scale));
  }

  .tl-selected {
    stroke: var(--tl-selectStroke);
  }

  .tl-hovered {
    stroke: var(--tl-selectStroke);
  }

  .tl-clone-target {
    pointer-events: all;
  }

  .tl-clone-target:hover .tl-clone-button {
    opacity: 1;
  }

  .tl-clone-button-target {
    cursor: pointer;
    pointer-events: all;
  }

  .tl-clone-button-target:hover .tl-clone-button {
    fill: var(--tl-selectStroke);
  }

  .tl-clone-button {
    opacity: 0;
    r: calc(8px * var(--tl-scale));
    stroke-width: calc(1.5px * var(--tl-scale));
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
  }

  .tl-bounds {
    pointer-events: none;
    contain: layout style size;
  }

  .tl-bounds-bg {
    stroke: none;
    fill: var(--tl-selectFill);
    pointer-events: all;
    contain: layout style size;
  }

  .tl-bounds-center {
    fill: transparent;
    stroke: var(--tl-selectStroke);
    stroke-width: calc(1.5px * var(--tl-scale));
  }

  .tl-brush {
    fill: var(--tl-brushFill);
    stroke: var(--tl-brushStroke);
    stroke-width: calc(1px * var(--tl-scale));
    pointer-events: none;
    contain: layout style size;
  }

  .tl-dot {
    fill: var(--tl-background);
    stroke: var(--tl-foreground);
    stroke-width: 2px;
  }

  .tl-handle {
    pointer-events: all;
    cursor: grab;
  }

  .tl-handle:hover .tl-handle-bg {
    fill: var(--tl-selectFill);
  }

  .tl-handle:hover .tl-handle-bg > * {
    stroke: var(--tl-selectFill);
  }

  .tl-handle:active .tl-handle-bg {
    cursor: grabbing;
    fill: var(--tl-selectFill);
  }

  .tl-handle:active .tl-handle-bg > * {
    stroke: var(--tl-selectFill);
  }

  .tl-handle {
    fill: var(--tl-background);
    stroke: var(--tl-selectStroke);
    stroke-width: 1.5px;
  }

  .tl-handle-bg {
    fill: transparent;
    stroke: none;
    pointer-events: all;
    r: calc(16px / max(1, var(--tl-zoom)));
  }

  .tl-binding-indicator {
    stroke-width: calc(3px * var(--tl-scale));
    fill: var(--tl-selectFill);
    stroke: var(--tl-selected);
    pointer-events: none;
  }

  .tl-centered-g {
    transform: translate(var(--tl-padding), var(--tl-padding));
  }

  .tl-current-parent > *[data-shy='true'] {
    opacity: 1;
  }

  .tl-binding {
    fill: none;
    stroke: var(--tl-selectStroke);
    stroke-width: calc(2px * var(--tl-scale));
  }

  .tl-grid-dot {
    fill: var(--tl-grid);
  }
`;
function useTLTheme(theme, selector) {
  const tltheme = useMemo2(() => __spreadValues(__spreadValues({}, defaultTheme), theme), [theme]);
  useTheme("tl", tltheme, selector);
  useStyle("tl-canvas", tlcss);
}

// src/hooks/useBoundsHandleEvents.tsx
import {
  useCallback as useCallback2
} from "react";
function useBoundsHandleEvents(id) {
  const { callbacks, inputs: inputs2 } = useTLContext();
  const onPointerDown = useCallback2((e) => {
    var _a, _b, _c;
    if (e.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    (_a = e.currentTarget) == null ? void 0 : _a.setPointerCapture(e.pointerId);
    const info = inputs2.pointerDown(e, id);
    (_b = callbacks.onPointBoundsHandle) == null ? void 0 : _b.call(callbacks, info, e);
    (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerUp = useCallback2((e) => {
    var _a, _b, _c, _d;
    if (e.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e, id);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a = e.currentTarget) == null ? void 0 : _a.releasePointerCapture(e.pointerId);
    }
    if (isDoubleClick && !(info.altKey || info.metaKey)) {
      (_b = callbacks.onDoubleClickBoundsHandle) == null ? void 0 : _b.call(callbacks, info, e);
    }
    (_c = callbacks.onReleaseBoundsHandle) == null ? void 0 : _c.call(callbacks, info, e);
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerMove = useCallback2((e) => {
    var _a, _b;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a = callbacks.onDragBoundsHandle) == null ? void 0 : _a.call(callbacks, inputs2.pointerMove(e, id), e);
    }
    const info = inputs2.pointerMove(e, id);
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerEnter = useCallback2((e) => {
    var _a;
    if (!inputs2.pointerIsValid(e))
      return;
    (_a = callbacks.onHoverBoundsHandle) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e, id), e);
  }, [inputs2, callbacks, id]);
  const onPointerLeave = useCallback2((e) => {
    var _a;
    if (!inputs2.pointerIsValid(e))
      return;
    (_a = callbacks.onUnhoverBoundsHandle) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e, id), e);
  }, [inputs2, callbacks, id]);
  return {
    onPointerDown,
    onPointerUp,
    onPointerEnter,
    onPointerMove,
    onPointerLeave
  };
}

// ../../node_modules/mobx/dist/mobx.esm.js
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(annotationType, key) {
    return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
  },
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _2(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _3(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _4(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _5(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _6(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _7(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _8(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _9(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _10(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _11(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _12(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _13(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
};
var errors = true ? niceErrors : {};
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (true) {
    var e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function")
      e = e.apply(null, args);
    throw new Error("[MobX] " + e);
  }
  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}
var mockGlobal = {};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return mockGlobal;
}
var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /* @__PURE__ */ Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die(true ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
  }
}
function warnAboutProxyRequirement(msg) {
  if (globalState.verifyProxies) {
    die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
  }
}
function getNextId() {
  return ++globalState.mobxGuid;
}
function once(func) {
  var invoked = false;
  return function() {
    if (invoked)
      return;
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop2() {
};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  var _proto$constructor;
  if (!isObject(value))
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto == null)
    return true;
  return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
}
function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor)
    return false;
  if (constructor.name === "GeneratorFunction" || constructor.displayName === "GeneratorFunction")
    return true;
  return false;
}
function addHiddenProp(object2, propName, value) {
  defineProperty(object2, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value
  });
}
function addHiddenFinalProp(object2, propName, value) {
  defineProperty(object2, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value
  });
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function(x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing instanceof Map;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
function getPlainObjectKeys(object2) {
  var keys = Object.keys(object2);
  if (!hasGetOwnPropertySymbols)
    return keys;
  var symbols = Object.getOwnPropertySymbols(object2);
  if (!symbols.length)
    return keys;
  return [].concat(keys, symbols.filter(function(s) {
    return objectPrototype.propertyIsEnumerable.call(object2, s);
  }));
}
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function(obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : Object.getOwnPropertyNames;
function stringifyKey(key) {
  if (typeof key === "string")
    return key;
  if (typeof key === "symbol")
    return key.toString();
  return new String(key).toString();
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
}
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(target) {
  var res = {};
  ownKeys(target).forEach(function(key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
var storedAnnotationsSymbol = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function createDecoratorAnnotation(annotation) {
  function decorator(target, property) {
    storeAnnotation(target, property, annotation);
  }
  return Object.assign(decorator, annotation);
}
function storeAnnotation(prototype, key, annotation) {
  if (!hasProp(prototype, storedAnnotationsSymbol)) {
    addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
  }
  if (isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    die("'" + fieldName + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  assertNotDecorated(prototype, annotation, key);
  if (!isOverride(annotation)) {
    prototype[storedAnnotationsSymbol][key] = annotation;
  }
}
function assertNotDecorated(prototype, annotation, key) {
  if (!isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed.\nUse '@override' decorator for methods overriden by subclass.");
  }
}
var $mobx = /* @__PURE__ */ Symbol("mobx administration");
var Atom = /* @__PURE__ */ function() {
  function Atom2(name_) {
    if (name_ === void 0) {
      name_ = true ? "Atom@" + getNextId() : "Atom";
    }
    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  }
  var _proto = Atom2.prototype;
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  };
  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };
  _proto.toString = function toString2() {
    return this.name_;
  };
  return Atom2;
}();
var isAtom = /* @__PURE__ */ createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }
  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }
  var atom = new Atom(name);
  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }
  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }
  return atom;
}
function identityComparer(a, b) {
  return a === b;
}
function structuralComparer(a, b) {
  return deepEqual(a, b);
}
function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
  if (Object.is)
    return Object.is(a, b);
  return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
}
var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};
function deepEnhancer(v, _14, name) {
  if (isObservable(v))
    return v;
  if (Array.isArray(v))
    return observable.array(v, {
      name
    });
  if (isPlainObject(v))
    return observable.object(v, void 0, {
      name
    });
  if (isES6Map(v))
    return observable.map(v, {
      name
    });
  if (isES6Set(v))
    return observable.set(v, {
      name
    });
  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }
  return v;
}
function shallowEnhancer(v, _14, name) {
  if (v === void 0 || v === null)
    return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
    return v;
  if (Array.isArray(v))
    return observable.array(v, {
      name,
      deep: false
    });
  if (isPlainObject(v))
    return observable.object(v, void 0, {
      name,
      deep: false
    });
  if (isES6Map(v))
    return observable.map(v, {
      name,
      deep: false
    });
  if (isES6Set(v))
    return observable.set(v, {
      name,
      deep: false
    });
  if (true)
    die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if (isObservable(v))
    die("observable.struct should not be used with observable values");
  if (deepEqual(v, oldValue))
    return oldValue;
  return v;
}
var OVERRIDE = "override";
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}
function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1
  };
}
function make_$1(adm, key, descriptor, source) {
  var _this$options_;
  if ((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
  }
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if (isAction(descriptor.value)) {
    return 1;
  }
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2;
}
function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function assertActionDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;
  if (!isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
  }
}
function createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if ((_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return {
    value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false, ((_annotation$options_4 = annotation.options_) == null ? void 0 : _annotation$options_4.bound) ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : void 0),
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    enumerable: false,
    writable: safeDescriptors ? false : true
  };
}
function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2
  };
}
function make_$2(adm, key, descriptor, source) {
  var _this$options_;
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if (((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) && !isFlow(adm.target_[key])) {
    if (this.extend_(adm, key, descriptor, false) === null)
      return 0;
  }
  if (isFlow(descriptor.value)) {
    return 1;
  }
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2;
}
function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function assertFlowDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;
  if (!isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
  }
}
function createFlowDescriptor(adm, annotation, key, descriptor, bound, safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if (bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return {
    value: flow(value),
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    enumerable: false,
    writable: safeDescriptors ? false : true
  };
}
function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3
  };
}
function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}
function assertComputedDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var get3 = _ref2.get;
  if (!get3) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
  }
}
function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4
  };
}
function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;
  assertObservableDescriptor(adm, this, key, descriptor);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}
function assertObservableDescriptor(adm, _ref, key, descriptor) {
  var annotationType_ = _ref.annotationType_;
  if (!("value" in descriptor)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
  }
}
var AUTO = "true";
var autoAnnotation = /* @__PURE__ */ createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5
  };
}
function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  }
  if (descriptor.set) {
    var set4 = createAction(key.toString(), descriptor.set);
    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set4
      }) === null ? 0 : 2;
    }
    defineProperty(source, key, {
      configurable: true,
      set: set4
    });
    return 2;
  }
  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;
    if (isGenerator(descriptor.value)) {
      var _this$options_;
      var flowAnnotation2 = ((_this$options_ = this.options_) == null ? void 0 : _this$options_.autoBind) ? flow.bound : flow;
      return flowAnnotation2.make_(adm, key, descriptor, source);
    }
    var actionAnnotation2 = ((_this$options_2 = this.options_) == null ? void 0 : _this$options_2.autoBind) ? autoAction.bound : autoAction;
    return actionAnnotation2.make_(adm, key, descriptor, source);
  }
  var observableAnnotation2 = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
  if (typeof descriptor.value === "function" && ((_this$options_4 = this.options_) == null ? void 0 : _this$options_4.autoBind)) {
    var _adm$proxy_;
    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return observableAnnotation2.make_(adm, key, descriptor, source);
}
function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  }
  if (descriptor.set) {
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  }
  if (typeof descriptor.value === "function" && ((_this$options_5 = this.options_) == null ? void 0 : _this$options_5.autoBind)) {
    var _adm$proxy_2;
    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }
  var observableAnnotation2 = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation2.extend_(adm, key, descriptor, proxyTrap);
}
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct";
var defaultCreateObservableOptions = {
  deep: true,
  name: void 0,
  defaultDecorator: void 0,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_REF, {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /* @__PURE__ */ createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  var _options$defaultDecor;
  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : void 0;
}
function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;
  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
function createObservable(v, arg2, arg3) {
  if (isStringish(arg2)) {
    storeAnnotation(v, arg2, observableAnnotation);
    return;
  }
  if (isObservable(v))
    return v;
  if (isPlainObject(v))
    return observable.object(v, arg2, arg3);
  if (Array.isArray(v))
    return observable.array(v, arg2);
  if (isES6Map(v))
    return observable.map(v, arg2);
  if (isES6Set(v))
    return observable.set(v, arg2);
  if (typeof v === "object" && v !== null)
    return v;
  return observable.box(v, arg2);
}
Object.assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
  },
  ref: /* @__PURE__ */ createDecoratorAnnotation(observableRefAnnotation),
  shallow: /* @__PURE__ */ createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /* @__PURE__ */ createDecoratorAnnotation(observableStructAnnotation)
};
var observable = /* @__PURE__ */ assign(createObservable, observableFactories);
var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
var computed = function computed2(arg1, arg2) {
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }
  if (isPlainObject(arg1)) {
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  }
  if (true) {
    if (!isFunction(arg1))
      die("First argument to `computed` should be an expression.");
    if (isFunction(arg2))
      die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
  }
  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /* @__PURE__ */ createDecoratorAnnotation(computedStructAnnotation);
var _getDescriptor$config;
var _getDescriptor;
var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /* @__PURE__ */ getDescriptor(function() {
}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction2, ref) {
  if (autoAction2 === void 0) {
    autoAction2 = false;
  }
  if (true) {
    if (!isFunction(fn))
      die("`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName)
      die("actions should have valid names, got: '" + actionName + "'");
  }
  function res() {
    return executeAction(actionName, autoAction2, fn, ref || this, arguments);
  }
  res.isMobxAction = true;
  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }
  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, scope, args) {
  var notifySpy_ = isSpyEnabled() && !!actionName;
  var startTime_ = 0;
  if (notifySpy_) {
    startTime_ = Date.now();
    var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
    spyReportStart({
      type: ACTION,
      name: actionName,
      object: scope,
      arguments: flattenedArgs
    });
  }
  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges;
  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }
  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_,
    prevAllowStateChanges_,
    prevAllowStateReads_,
    notifySpy_,
    startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }
  currentActionId = runInfo.parentActionId_;
  if (runInfo.error_ !== void 0) {
    globalState.suppressReactionErrors = true;
  }
  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_)
    untrackedEnd(runInfo.prevDerivation_);
  if (runInfo.notifySpy_) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime_
    });
  }
  globalState.suppressReactionErrors = false;
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}
var _Symbol$toPrimitive;
var CREATE = "create";
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /* @__PURE__ */ function(_Atom) {
  _inheritsLoose(ObservableValue2, _Atom);
  function ObservableValue2(value, enhancer, name_, notifySpy, equals) {
    var _this;
    if (name_ === void 0) {
      name_ = true ? "ObservableValue@" + getNextId() : "ObservableValue";
    }
    if (notifySpy === void 0) {
      notifySpy = true;
    }
    if (equals === void 0) {
      equals = comparer["default"];
    }
    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, void 0, name_);
    if (notifySpy && isSpyEnabled()) {
      spyReport({
        type: CREATE,
        object: _assertThisInitialized(_this),
        observableKind: "value",
        debugObjectName: _this.name_,
        newValue: "" + _this.value_
      });
    }
    return _this;
  }
  var _proto = ObservableValue2.prototype;
  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== void 0)
      return this.dehancer(value);
    return value;
  };
  _proto.set = function set4(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      if (notifySpy) {
        spyReportStart({
          type: UPDATE,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue,
          oldValue
        });
      }
      this.setNewValue_(newValue);
      if (notifySpy)
        spyReportEnd();
    }
  };
  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue
      });
      if (!change)
        return globalState.UNCHANGED;
      newValue = change.newValue;
    }
    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };
  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();
    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue,
        oldValue
      });
    }
  };
  _proto.get = function get3() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately)
      listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: void 0
      });
    return registerListener(this, listener);
  };
  _proto.raw = function raw() {
    return this.value_;
  };
  _proto.toJSON = function toJSON2() {
    return this.get();
  };
  _proto.toString = function toString2() {
    return this.name_ + "[" + this.value_ + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };
  _proto[_Symbol$toPrimitive] = function() {
    return this.valueOf();
  };
  return ObservableValue2;
}(Atom);
var _Symbol$toPrimitive$1;
_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /* @__PURE__ */ function() {
  function ComputedValue2(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get)
      die(31);
    this.derivation = options.get;
    this.name_ = options.name || (true ? "ComputedValue@" + getNextId() : "ComputedValue");
    if (options.set) {
      this.setter_ = createAction(true ? this.name_ + "-setter" : "ComputedValue-setter", options.set);
    }
    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = !!options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }
  var _proto = ComputedValue2.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.get = function get3() {
    if (this.isComputing_)
      die(32, this.name_, this.derivation);
    if (globalState.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch();
        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext)
          globalState.trackingContext = this;
        if (this.trackAndCompute())
          propagateChangeConfirmed(this);
        globalState.trackingContext = prevTrackingContext;
      }
    }
    var result = this.value_;
    if (isCaughtException(result))
      throw result.cause;
    return result;
  };
  _proto.set = function set4(value) {
    if (this.setter_) {
      if (this.isRunningSetter_)
        die(33, this.name_);
      this.isRunningSetter_ = true;
      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else
      die(34, this.name_);
  };
  _proto.trackAndCompute = function trackAndCompute() {
    var oldValue = this.value_;
    var wasSuspended = this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
    if (changed) {
      this.value_ = newValue;
      if (isSpyEnabled()) {
        spyReport({
          observableKind: "computed",
          debugObjectName: this.name_,
          object: this.scope_,
          type: "update",
          oldValue,
          newValue
        });
      }
    }
    return changed;
  };
  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true;
    var prev = allowStateChangesStart(false);
    var res;
    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }
    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };
  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = void 0;
      if (this.isTracing_ !== TraceMode.NONE) {
        console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access.");
      }
    }
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;
    var firstTime = true;
    var prevValue = void 0;
    return autorun(function() {
      var newValue = _this.get();
      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }
      firstTime = false;
      prevValue = newValue;
    });
  };
  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (false)
      return;
    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
    if (globalState.computedRequiresReaction || this.requiresReaction_) {
      console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
  };
  _proto.toString = function toString2() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };
  _proto[_Symbol$toPrimitive$1] = function() {
    return this.valueOf();
  };
  return ComputedValue2;
}();
var isComputedValue = /* @__PURE__ */ createInstanceofPredicate("ComputedValue", ComputedValue);
var IDerivationState_;
(function(IDerivationState_2) {
  IDerivationState_2[IDerivationState_2["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
  IDerivationState_2[IDerivationState_2["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
  IDerivationState_2[IDerivationState_2["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
  IDerivationState_2[IDerivationState_2["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));
var TraceMode;
(function(TraceMode2) {
  TraceMode2[TraceMode2["NONE"] = 0] = "NONE";
  TraceMode2[TraceMode2["LOG"] = 1] = "LOG";
  TraceMode2[TraceMode2["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = function CaughtException2(cause) {
  this.cause = void 0;
  this.cause = cause;
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;
    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;
    case IDerivationState_.POSSIBLY_STALE_: {
      var prevAllowStateReads = allowStateReadsStart(true);
      var prevUntracked = untrackedStart();
      var obs = derivation.observing_, l = obs.length;
      for (var i = 0; i < l; i++) {
        var obj = obs[i];
        if (isComputedValue(obj)) {
          if (globalState.disableErrorBoundaries) {
            obj.get();
          } else {
            try {
              obj.get();
            } catch (e) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
          if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return true;
          }
        }
      }
      changeDependenciesStateTo0(derivation);
      untrackedEnd(prevUntracked);
      allowStateReadsEnd(prevAllowStateReads);
      return false;
    }
  }
}
function checkIfStateModificationsAreAllowed(atom) {
  if (false) {
    return;
  }
  var hasObservers = atom.observers_.size > 0;
  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always"))
    console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
}
function checkIfStateReadsAreAllowed(observable2) {
  if (!globalState.allowStateReads && globalState.observableRequiresReaction) {
    console.warn("[mobx] Observable '" + observable2.name_ + "' being read outside a reactive context.");
  }
}
function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true);
  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;
  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }
  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
  if (false)
    return;
  if (derivation.observing_.length !== 0)
    return;
  if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
    console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
  }
}
function bindDependencies(derivation) {
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
  var i0 = 0, l = derivation.unboundDepsCount_;
  for (var i = 0; i < l; i++) {
    var dep = observing[i];
    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i)
        observing[i0] = dep;
      i0++;
    }
    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }
  observing.length = i0;
  derivation.newObserving_ = null;
  l = prevObserving.length;
  while (l--) {
    var _dep = prevObserving[l];
    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }
    _dep.diffValue_ = 0;
  }
  while (i0--) {
    var _dep2 = observing[i0];
    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  }
  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}
function clearObserving(derivation) {
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;
  while (i--) {
    removeObserver(obs[i], derivation);
  }
  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action2) {
  var prev = untrackedStart();
  try {
    return action2();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_)
    return;
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;
  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}
var MobXGlobals = function MobXGlobals2() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /* @__PURE__ */ function() {
  var global2 = /* @__PURE__ */ getGlobal();
  if (global2.__mobxInstanceCount > 0 && !global2.__mobxGlobals)
    canMergeGlobalState = false;
  if (global2.__mobxGlobals && global2.__mobxGlobals.version !== new MobXGlobals().version)
    canMergeGlobalState = false;
  if (!canMergeGlobalState) {
    setTimeout(function() {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global2.__mobxGlobals) {
    global2.__mobxInstanceCount += 1;
    if (!global2.__mobxGlobals.UNCHANGED)
      global2.__mobxGlobals.UNCHANGED = {};
    return global2.__mobxGlobals;
  } else {
    global2.__mobxInstanceCount = 1;
    return global2.__mobxGlobals = /* @__PURE__ */ new MobXGlobals();
  }
}();
function addObserver(observable2, node) {
  observable2.observers_.add(node);
  if (observable2.lowestObserverState_ > node.dependenciesState_)
    observable2.lowestObserverState_ = node.dependenciesState_;
}
function removeObserver(observable2, node) {
  observable2.observers_["delete"](node);
  if (observable2.observers_.size === 0) {
    queueForUnobservation(observable2);
  }
}
function queueForUnobservation(observable2) {
  if (observable2.isPendingUnobservation_ === false) {
    observable2.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable2);
  }
}
function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions();
    var list = globalState.pendingUnobservations;
    for (var i = 0; i < list.length; i++) {
      var observable2 = list[i];
      observable2.isPendingUnobservation_ = false;
      if (observable2.observers_.size === 0) {
        if (observable2.isBeingObserved_) {
          observable2.isBeingObserved_ = false;
          observable2.onBUO();
        }
        if (observable2 instanceof ComputedValue) {
          observable2.suspend_();
        }
      }
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable2) {
  checkIfStateReadsAreAllowed(observable2);
  var derivation = globalState.trackingDerivation;
  if (derivation !== null) {
    if (derivation.runId_ !== observable2.lastAccessedBy_) {
      observable2.lastAccessedBy_ = derivation.runId_;
      derivation.newObserving_[derivation.unboundDepsCount_++] = observable2;
      if (!observable2.isBeingObserved_ && globalState.trackingContext) {
        observable2.isBeingObserved_ = true;
        observable2.onBO();
      }
    }
    return true;
  } else if (observable2.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable2);
  }
  return false;
}
function propagateChanged(observable2) {
  if (observable2.lowestObserverState_ === IDerivationState_.STALE_)
    return;
  observable2.lowestObserverState_ = IDerivationState_.STALE_;
  observable2.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if (d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable2);
      }
      d.onBecomeStale_();
    }
    d.dependenciesState_ = IDerivationState_.STALE_;
  });
}
function propagateChangeConfirmed(observable2) {
  if (observable2.lowestObserverState_ === IDerivationState_.STALE_)
    return;
  observable2.lowestObserverState_ = IDerivationState_.STALE_;
  observable2.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_.STALE_;
      if (d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable2);
      }
    } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      observable2.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  });
}
function propagateMaybeChanged(observable2) {
  if (observable2.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_)
    return;
  observable2.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable2.observers_.forEach(function(d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  });
}
function logTraceInfo(derivation, observable2) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable2.name_ + "'");
  if (derivation.isTracing_ === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1);
    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable2.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}
function printDepTree(tree, lines, depth) {
  if (lines.length >= 1e3) {
    lines.push("(and many more)");
    return;
  }
  lines.push("" + "	".repeat(depth - 1) + tree.name);
  if (tree.dependencies)
    tree.dependencies.forEach(function(child) {
      return printDepTree(child, lines, depth + 1);
    });
}
var Reaction = /* @__PURE__ */ function() {
  function Reaction2(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ = true ? "Reaction@" + getNextId() : "Reaction";
    }
    if (requiresObservable_ === void 0) {
      requiresObservable_ = false;
    }
    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }
  var _proto = Reaction2.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };
  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };
  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  };
  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;
      if (shouldCompute(this)) {
        this.isTrackPending_ = true;
        try {
          this.onInvalidate_();
          if (this.isTrackPending_ && isSpyEnabled()) {
            spyReport({
              name: this.name_,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }
      globalState.trackingContext = prev;
      endBatch();
    }
  };
  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return;
    }
    startBatch();
    var notify = isSpyEnabled();
    var startTime;
    if (notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name_,
        type: "reaction"
      });
    }
    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext;
    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, void 0);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;
    if (this.isDisposed_) {
      clearObserving(this);
    }
    if (isCaughtException(result))
      this.reportExceptionInDerivation_(result.cause);
    if (notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }
    endBatch();
  };
  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;
    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }
    if (globalState.disableErrorBoundaries)
      throw error;
    var message = true ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
    } else if (true)
      console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)");
    if (isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name_,
        message,
        error: "" + error
      });
    }
    globalState.globalReactionErrorHandlers.forEach(function(f) {
      return f(error, _this);
    });
  };
  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;
      if (!this.isRunning_) {
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };
  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };
  _proto.toString = function toString2() {
    return "Reaction[" + this.name_ + "]";
  };
  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }
    trace(this, enterBreakPoint);
  };
  return Reaction2;
}();
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function reactionScheduler2(f) {
  return f();
};
function runReactions() {
  if (globalState.inBatch > 0 || globalState.isRunningReactions)
    return;
  reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0;
  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error(true ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : "[mobx] cycle in reaction: " + allReactions[0]);
      allReactions.splice(0);
    }
    var remainingReactions = allReactions.splice(0);
    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }
  globalState.isRunningReactions = false;
}
var isReaction = /* @__PURE__ */ createInstanceofPredicate("Reaction", Reaction);
function isSpyEnabled() {
  return !!globalState.spyListeners.length;
}
function spyReport(event) {
  if (false)
    return;
  if (!globalState.spyListeners.length)
    return;
  var listeners = globalState.spyListeners;
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (false)
    return;
  var change = _extends({}, event, {
    spyReportStart: true
  });
  spyReport(change);
}
var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (false)
    return;
  if (change)
    spyReport(_extends({}, change, {
      type: "report-end",
      spyReportEnd: true
    }));
  else
    spyReport(END_EVENT);
}
function spy(listener) {
  if (false) {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
  } else {
    globalState.spyListeners.push(listener);
    return once(function() {
      globalState.spyListeners = globalState.spyListeners.filter(function(l) {
        return l !== listener;
      });
    });
  }
}
var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION);
var actionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});
function createActionFactory(autoAction2) {
  var res = function action2(arg1, arg2) {
    if (isFunction(arg1))
      return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction2);
    if (isFunction(arg2))
      return createAction(arg1, arg2, autoAction2);
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction2 ? autoActionAnnotation : actionAnnotation);
    }
    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction2 ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction2
      }));
    }
    if (true)
      die("Invalid arguments for `action`");
  };
  return res;
}
var action = /* @__PURE__ */ createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /* @__PURE__ */ createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /* @__PURE__ */ createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /* @__PURE__ */ createDecoratorAnnotation(autoActionBoundAnnotation);
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}
function autorun(view, opts) {
  var _opts$name, _opts;
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }
  if (true) {
    if (!isFunction(view))
      die("Autorun expects a function as first argument");
    if (isAction(view))
      die("Autorun does not accept actions since actions are untrackable");
  }
  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : true ? view.name || "Autorun@" + getNextId() : "Autorun";
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;
  if (runSync) {
    reaction = new Reaction(name, function() {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts);
    var isScheduled = false;
    reaction = new Reaction(name, function() {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function() {
          isScheduled = false;
          if (!reaction.isDisposed_)
            reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }
  function reactionRunner() {
    view(reaction);
  }
  reaction.schedule_();
  return reaction.getDisposer_();
}
var run = function run2(f) {
  return f();
};
function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function(f) {
    return setTimeout(f, opts.delay);
  } : run;
}
var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";
  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }
  return function() {
    var hookListeners = atom[listenersKey];
    if (hookListeners) {
      hookListeners["delete"](cb);
      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}
function extendObservable(target, properties, annotations, options) {
  if (true) {
    if (arguments.length > 4)
      die("'extendObservable' expected 2-4 arguments");
    if (typeof target !== "object")
      die("'extendObservable' expects an object as first argument");
    if (isObservableMap(target))
      die("'extendObservable' should not be used on maps, use map.merge instead");
    if (!isPlainObject(properties))
      die("'extendObservable' only accepts plain objects as second argument");
    if (isObservable(properties) || isObservable(annotations))
      die("Extending an object with another observable (object) is not supported");
  }
  var descriptors = getOwnPropertyDescriptors(properties);
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();
  try {
    ownKeys(descriptors).forEach(function(key) {
      adm.extend_(key, descriptors[key], !annotations ? true : key in annotations ? annotations[key] : true);
    });
  } finally {
    endBatch();
  }
  return target;
}
function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0)
    result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  return result;
}
function unique(list) {
  return Array.from(new Set(list));
}
var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var flowAnnotation = /* @__PURE__ */ createFlowAnnotation("flow");
var flowBoundAnnotation = /* @__PURE__ */ createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /* @__PURE__ */ Object.assign(function flow2(arg1, arg2) {
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  }
  if (arguments.length !== 1)
    die("Flow expects single argument with generator function");
  var generator = arg1;
  var name = generator.name || "<unnamed flow>";
  var res = function res2() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = void 0;
    var promise = new Promise(function(resolve, reject) {
      var stepId = 0;
      rejector = reject;
      function onFulfilled(res3) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res3);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          ret.then(next, reject);
          return;
        }
        if (ret.done)
          return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }
      onFulfilled(void 0);
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function() {
      try {
        if (pendingPromise)
          cancelPromise(pendingPromise);
        var _res = gen["return"](void 0);
        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise);
        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e);
      }
    });
    return promise;
  };
  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
flow.bound = /* @__PURE__ */ createDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(promise) {
  if (isFunction(promise.cancel))
    promise.cancel();
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}
function _isObservable(value, property) {
  if (!value)
    return false;
  if (property !== void 0) {
    if (isObservableMap(value) || isObservableArray(value))
      return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }
    return false;
  }
  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
  if (arguments.length !== 1)
    die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}
function trace() {
  if (false)
    die("trace() is not available in production builds");
  var enterBreakPoint = false;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (typeof args[args.length - 1] === "boolean")
    enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);
  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }
  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }
  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;
    case 1:
      return getAtom(args[0]);
    case 2:
      return getAtom(args[0], args[1]);
  }
}
function transaction(action2, thisArg) {
  if (thisArg === void 0) {
    thisArg = void 0;
  }
  startBatch();
  try {
    return action2.apply(thisArg);
  } finally {
    endBatch();
  }
}
function getAdm(target) {
  return target[$mobx];
}
var objectProxyTraps = {
  has: function has(target, name) {
    if (globalState.trackingDerivation)
      warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
    return getAdm(target).has_(name);
  },
  get: function get(target, name) {
    return getAdm(target).get_(name);
  },
  set: function set2(target, name, value) {
    var _getAdm$set_;
    if (!isStringish(name))
      return false;
    if (!getAdm(target).values_.has(name)) {
      warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
    }
    return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target, name) {
    var _getAdm$delete_;
    if (true) {
      warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
    }
    if (!isStringish(name))
      return false;
    return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty2(target, name, descriptor) {
    var _getAdm$definePropert;
    if (true) {
      warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
    }
    return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys2(target) {
    if (globalState.trackingDerivation)
      warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
    return getAdm(target).ownKeys_();
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function asDynamicObservableObject(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;
  assertProxies();
  target = asObservableObject(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}
function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== void 0 && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function() {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1)
      interceptors.splice(idx, 1);
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();
  try {
    var interceptors = [].concat(interceptable.interceptors_ || []);
    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type)
        die(14);
      if (!change)
        break;
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}
function hasListeners(listenable) {
  return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function() {
    var idx = listeners.indexOf(handler);
    if (idx !== -1)
      listeners.splice(idx, 1);
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners)
    return;
  listeners = listeners.slice();
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }
  untrackedEnd(prevU);
}
var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 1e4;
var arrayTraps = {
  get: function get2(target, name) {
    var adm = target[$mobx];
    if (name === $mobx)
      return adm;
    if (name === "length")
      return adm.getArrayLength_();
    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }
    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }
    return target[name];
  },
  set: function set3(target, name, value) {
    var adm = target[$mobx];
    if (name === "length") {
      adm.setArrayLength_(value);
    }
    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      adm.set_(parseInt(name), value);
    }
    return true;
  },
  preventExtensions: function preventExtensions2() {
    die(15);
  }
};
var ObservableArrayAdministration = /* @__PURE__ */ function() {
  function ObservableArrayAdministration2(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
    }
    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, true ? name + "[..]" : "ObservableArray[..]");
    };
  }
  var _proto = ObservableArrayAdministration2.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0)
      return this.dehancer(value);
    return value;
  };
  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== void 0 && values.length > 0)
      return values.map(this.dehancer);
    return values;
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }
    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }
    return registerListener(this, listener);
  };
  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };
  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0)
      die("Out of range: " + newLength);
    var currentLength = this.values_.length;
    if (newLength === currentLength)
      return;
    else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);
      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = void 0;
      }
      this.spliceWithArray_(currentLength, 0, newItems);
    } else
      this.spliceWithArray_(newLength, currentLength - newLength);
  };
  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_)
      die(16);
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0)
      reserveArrayBuffer(oldLength + delta + 1);
  };
  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === void 0)
      index = 0;
    else if (index > length)
      index = length;
    else if (index < 0)
      index = Math.max(0, length + index);
    if (arguments.length === 1)
      deleteCount = length - index;
    else if (deleteCount === void 0 || deleteCount === null)
      deleteCount = 0;
    else
      deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === void 0)
      newItems = EMPTY_ARRAY;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change)
        return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }
    newItems = newItems.length === 0 ? newItems : newItems.map(function(v) {
      return _this.enhancer_(v, void 0);
    });
    if (this.legacyMode_ || true) {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta);
    }
    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0)
      this.notifyArraySplice_(index, newItems, res);
    return this.dehanceValues_(res);
  };
  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;
      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length += newItems.length - deleteCount;
      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }
      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }
      return res;
    }
  };
  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index,
      newValue,
      oldValue
    } : null;
    if (notifySpy)
      spyReportStart(change);
    this.atom_.reportChanged();
    if (notify)
      notifyListeners(this, change);
    if (notifySpy)
      spyReportEnd();
  };
  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index,
      removed,
      added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (notifySpy)
      spyReportStart(change);
    this.atom_.reportChanged();
    if (notify)
      notifyListeners(this, change);
    if (notifySpy)
      spyReportEnd();
  };
  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }
    console.warn(true ? "[mobx] Out of bounds read: " + index : "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
  };
  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;
    if (index < values.length) {
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index,
          newValue
        });
        if (!change)
          return;
        newValue = change.newValue;
      }
      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;
      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      die(17, index, values.length);
    }
  };
  return ObservableArrayAdministration2;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
  }
  if (owned === void 0) {
    owned = false;
  }
  assertProxies();
  var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
  addHiddenFinalProp(adm.values_, $mobx, adm);
  var proxy = new Proxy(adm.values_, arrayTraps);
  adm.proxy_ = proxy;
  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }
  return proxy;
}
var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  toJSON: function toJSON() {
    return this.slice();
  },
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }
    var adm = this[$mobx];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return adm.spliceWithArray_(index);
      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }
    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];
    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }
    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }
    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }
    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);
    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }
    return false;
  }
};
addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc);
addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc);
addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);
function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
}
function simpleFunc(funcName) {
  return function() {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
function mapLikeFunc(funcName) {
  return function(callback, thisArg) {
    var _this2 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function(element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
}
function reduceLikeFunc(funcName) {
  return function() {
    var _this3 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    var callback = arguments[0];
    arguments[0] = function(accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
var isObservableArrayAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}
var _Symbol$iterator;
var _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete";
_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /* @__PURE__ */ function() {
  function ObservableMap2(initialData, enhancer_, name_) {
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ = true ? "ObservableMap@" + getNextId() : "ObservableMap";
    }
    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;
    if (!isFunction(Map)) {
      die(18);
    }
    this.keysAtom_ = createAtom(true ? this.name_ + ".keys()" : "ObservableMap.keys()");
    this.data_ = new Map();
    this.hasMap_ = new Map();
    this.merge(initialData);
  }
  var _proto = ObservableMap2.prototype;
  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };
  _proto.has = function has2(key) {
    var _this = this;
    if (!globalState.trackingDerivation)
      return this.has_(key);
    var entry = this.hasMap_.get(key);
    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, true ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableMap.key?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function() {
        return _this.hasMap_["delete"](key);
      });
    }
    return entry.get();
  };
  _proto.set = function set4(key, value) {
    var hasKey = this.has_(key);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change)
        return this;
      value = change.newValue;
    }
    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }
    return this;
  };
  _proto["delete"] = function _delete(key) {
    var _this2 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change)
        return false;
    }
    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;
      if (notifySpy)
        spyReportStart(_change);
      transaction(function() {
        var _this2$hasMap_$get;
        _this2.keysAtom_.reportChanged();
        (_this2$hasMap_$get = _this2.hasMap_.get(key)) == null ? void 0 : _this2$hasMap_$get.setNewValue_(false);
        var observable2 = _this2.data_.get(key);
        observable2.setNewValue_(void 0);
        _this2.data_["delete"](key);
      });
      if (notify)
        notifyListeners(this, _change);
      if (notifySpy)
        spyReportEnd();
      return true;
    }
    return false;
  };
  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable2 = this.data_.get(key);
    newValue = observable2.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable2.value_,
        name: key,
        newValue
      } : null;
      if (notifySpy)
        spyReportStart(change);
      observable2.setNewValue_(newValue);
      if (notify)
        notifyListeners(this, change);
      if (notifySpy)
        spyReportEnd();
    }
  };
  _proto.addValue_ = function addValue_(key, newValue) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function() {
      var _this3$hasMap_$get;
      var observable2 = new ObservableValue(newValue, _this3.enhancer_, true ? _this3.name_ + "." + stringifyKey(key) : "ObservableMap.key", false);
      _this3.data_.set(key, observable2);
      newValue = observable2.value_;
      (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null ? void 0 : _this3$hasMap_$get.setNewValue_(true);
      _this3.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue
    } : null;
    if (notifySpy)
      spyReportStart(change);
    if (notify)
      notifyListeners(this, change);
    if (notifySpy)
      spyReportEnd();
  };
  _proto.get = function get3(key) {
    if (this.has(key))
      return this.dehanceValue_(this.data_.get(key).get());
    return this.dehanceValue_(void 0);
  };
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };
  _proto.values = function values() {
    var self2 = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(), done = _keys$next.done, value = _keys$next.value;
        return {
          done,
          value: done ? void 0 : self2.get(value)
        };
      }
    });
  };
  _proto.entries = function entries() {
    var self2 = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(), done = _keys$next2.done, value = _keys$next2.value;
        return {
          done,
          value: done ? void 0 : [value, self2.get(value)]
        };
      }
    });
  };
  _proto[_Symbol$iterator] = function() {
    return this.entries();
  };
  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done; ) {
      var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  };
  _proto.merge = function merge(other) {
    var _this4 = this;
    if (isObservableMap(other)) {
      other = new Map(other);
    }
    transaction(function() {
      if (isPlainObject(other))
        getPlainObjectKeys(other).forEach(function(key) {
          return _this4.set(key, other[key]);
        });
      else if (Array.isArray(other))
        other.forEach(function(_ref) {
          var key = _ref[0], value = _ref[1];
          return _this4.set(key, value);
        });
      else if (isES6Map(other)) {
        if (other.constructor !== Map)
          die(19, other);
        other.forEach(function(value, key) {
          return _this4.set(key, value);
        });
      } else if (other !== null && other !== void 0)
        die(20, other);
    });
    return this;
  };
  _proto.clear = function clear2() {
    var _this5 = this;
    transaction(function() {
      untracked(function() {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done; ) {
          var key = _step2.value;
          _this5["delete"](key);
        }
      });
    });
  };
  _proto.replace = function replace2(values) {
    var _this6 = this;
    transaction(function() {
      var replacementMap = convertToMap(values);
      var orderedData = new Map();
      var keysReportChangedCalled = false;
      for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done; ) {
        var key = _step3.value;
        if (!replacementMap.has(key)) {
          var deleted = _this6["delete"](key);
          if (deleted) {
            keysReportChangedCalled = true;
          } else {
            var value = _this6.data_.get(key);
            orderedData.set(key, value);
          }
        }
      }
      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done; ) {
        var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
        var keyExisted = _this6.data_.has(_key);
        _this6.set(_key, _value);
        if (_this6.data_.has(_key)) {
          var _value2 = _this6.data_.get(_key);
          orderedData.set(_key, _value2);
          if (!keyExisted) {
            keysReportChangedCalled = true;
          }
        }
      }
      if (!keysReportChangedCalled) {
        if (_this6.data_.size !== orderedData.size) {
          _this6.keysAtom_.reportChanged();
        } else {
          var iter1 = _this6.data_.keys();
          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();
          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this6.keysAtom_.reportChanged();
              break;
            }
            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      }
      _this6.data_ = orderedData;
    });
    return this;
  };
  _proto.toString = function toString2() {
    return "[object ObservableMap]";
  };
  _proto.toJSON = function toJSON2() {
    return Array.from(this);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === true)
      die("`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _createClass(ObservableMap2, [{
    key: "size",
    get: function get3() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get3() {
      return "Map";
    }
  }]);
  return ObservableMap2;
}();
var isObservableMap = /* @__PURE__ */ createInstanceofPredicate("ObservableMap", ObservableMap);
function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map2 = new Map();
    for (var key in dataStructure) {
      map2.set(key, dataStructure[key]);
    }
    return map2;
  } else {
    return die(21, dataStructure);
  }
}
var _Symbol$iterator$1;
var _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /* @__PURE__ */ function() {
  function ObservableSet2(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ = true ? "ObservableSet@" + getNextId() : "ObservableSet";
    }
    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;
    if (!isFunction(Set)) {
      die(22);
    }
    this.atom_ = createAtom(this.name_);
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, name_);
    };
    if (initialData) {
      this.replace(initialData);
    }
  }
  var _proto = ObservableSet2.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.clear = function clear2() {
    var _this = this;
    transaction(function() {
      untracked(function() {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done; ) {
          var value = _step.value;
          _this["delete"](value);
        }
      });
    });
  };
  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done; ) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };
  _proto.add = function add(value) {
    var _this2 = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change)
        return this;
    }
    if (!this.has(value)) {
      transaction(function() {
        _this2.data_.add(_this2.enhancer_(value, void 0));
        _this2.atom_.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;
      if (notifySpy && true)
        spyReportStart(_change);
      if (notify)
        notifyListeners(this, _change);
      if (notifySpy && true)
        spyReportEnd();
    }
    return this;
  };
  _proto["delete"] = function _delete(value) {
    var _this3 = this;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change)
        return false;
    }
    if (this.has(value)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;
      if (notifySpy && true)
        spyReportStart(_change2);
      transaction(function() {
        _this3.atom_.reportChanged();
        _this3.data_["delete"](value);
      });
      if (notify)
        notifyListeners(this, _change2);
      if (notifySpy && true)
        spyReportEnd();
      return true;
    }
    return false;
  };
  _proto.has = function has2(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };
  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };
  _proto.keys = function keys() {
    return this.values();
  };
  _proto.values = function values() {
    this.atom_.reportObserved();
    var self2 = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self2.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };
  _proto.replace = function replace2(other) {
    var _this4 = this;
    if (isObservableSet(other)) {
      other = new Set(other);
    }
    transaction(function() {
      if (Array.isArray(other)) {
        _this4.clear();
        other.forEach(function(value) {
          return _this4.add(value);
        });
      } else if (isES6Set(other)) {
        _this4.clear();
        other.forEach(function(value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== void 0) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === true)
      die("`observe` doesn't support fireImmediately=true in combination with sets.");
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.toJSON = function toJSON2() {
    return Array.from(this);
  };
  _proto.toString = function toString2() {
    return "[object ObservableSet]";
  };
  _proto[_Symbol$iterator$1] = function() {
    return this.values();
  };
  _createClass(ObservableSet2, [{
    key: "size",
    get: function get3() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$1,
    get: function get3() {
      return "Set";
    }
  }]);
  return ObservableSet2;
}();
var isObservableSet = /* @__PURE__ */ createInstanceofPredicate("ObservableSet", ObservableSet);
var descriptorCache = /* @__PURE__ */ Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /* @__PURE__ */ function() {
  function ObservableObjectAdministration2(target_, values_, name_, defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = new Map();
    }
    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }
    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom(true ? this.name_ + ".keys" : "ObservableObject.keys");
    this.isPlainObject_ = isPlainObject(this.target_);
    if (!isAnnotation(this.defaultAnnotation_)) {
      die("defaultAnnotation must be valid annotation");
    }
    if (true) {
      this.appliedAnnotations_ = {};
    }
  }
  var _proto = ObservableObjectAdministration2.prototype;
  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };
  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable2 = this.values_.get(key);
    if (observable2 instanceof ComputedValue) {
      observable2.set(newValue);
      return true;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue
      });
      if (!change)
        return null;
      newValue = change.newValue;
    }
    newValue = observable2.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable2.value_,
        name: key,
        newValue
      } : null;
      if (notifySpy)
        spyReportStart(_change);
      observable2.setNewValue_(newValue);
      if (notify)
        notifyListeners(this, _change);
      if (notifySpy)
        spyReportEnd();
    }
    return true;
  };
  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      this.has_(key);
    }
    return this.target_[key];
  };
  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (hasProp(this.target_, key)) {
      if (this.values_.has(key)) {
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        return Reflect.set(this.target_, key, value);
      } else {
        this.target_[key] = value;
        return true;
      }
    } else {
      return this.extend_(key, {
        value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  };
  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      return key in this.target_;
    }
    this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = this.pendingKeys_.get(key);
    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer, true ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableObject.key?", false);
      this.pendingKeys_.set(key, entry);
    }
    return entry.get();
  };
  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return;
    }
    assertAnnotable(this, annotation, key);
    if (!(key in this.target_)) {
      var _this$target_$storedA;
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) == null ? void 0 : _this$target_$storedA[key]) {
        return;
      } else {
        die(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }
    var source = this.target_;
    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);
      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);
        if (outcome === 0)
          return;
        if (outcome === 1)
          break;
      }
      source = Object.getPrototypeOf(source);
    }
    recordAnnotationApplied(this, annotation, key);
  };
  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }
    assertAnnotable(this, annotation, key);
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }
    return outcome;
  };
  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change)
          return null;
        var newValue = change.newValue;
        if (descriptor.value !== newValue) {
          descriptor = _extends({}, descriptor, {
            value: newValue
          });
        }
      }
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change)
          return null;
        value = change.newValue;
      }
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      var observable2 = new ObservableValue(value, enhancer, true ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
      this.values_.set(key, observable2);
      this.notifyPropertyAddition_(key, observable2.value_);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: void 0
        });
        if (!change)
          return null;
      }
      options.name || (options.name = true ? this.name_ + "." + key.toString() : "ObservableObject.key");
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.values_.set(key, new ComputedValue(options));
      this.notifyPropertyAddition_(key, void 0);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (!hasProp(this.target_, key)) {
      return true;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      });
      if (!change)
        return null;
    }
    try {
      var _this$pendingKeys_, _this$pendingKeys_$ge;
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var observable2 = this.values_.get(key);
      var value = void 0;
      if (!observable2 && (notify || notifySpy)) {
        var _getDescriptor2;
        value = (_getDescriptor2 = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor2.value;
      }
      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      }
      if (true) {
        delete this.appliedAnnotations_[key];
      }
      if (observable2) {
        this.values_["delete"](key);
        if (observable2 instanceof ObservableValue) {
          value = observable2.value_;
        }
        propagateChanged(observable2);
      }
      this.keysAtom_.reportChanged();
      (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_);
      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if (notifySpy)
          spyReportStart(_change2);
        if (notify)
          notifyListeners(this, _change2);
        if (notifySpy)
          spyReportEnd();
      }
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.observe_ = function observe_(callback, fireImmediately) {
    if (fireImmediately === true)
      die("`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2, _this$pendingKeys_2$g;
    var notify = hasListeners(this);
    var notifySpy = isSpyEnabled();
    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if (notifySpy)
        spyReportStart(change);
      if (notify)
        notifyListeners(this, change);
      if (notifySpy)
        spyReportEnd();
    }
    (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true);
    this.keysAtom_.reportChanged();
  };
  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };
  _proto.keys_ = function keys_() {
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };
  return ObservableObjectAdministration2;
}();
function asObservableObject(target, options) {
  var _options$name;
  if (options && isObservableObject(target)) {
    die("Options can't be provided for already observable objects.");
  }
  if (hasProp(target, $mobx)) {
    if (!(getAdministration(target) instanceof ObservableObjectAdministration)) {
      die("Cannot convert '" + getDebugName(target) + "' into observable object:\nThe target is already observable of different type.\nExtending builtins is not supported.");
    }
    return target;
  }
  if (!Object.isExtensible(target))
    die("Cannot make the designated object observable; it is not extensible");
  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : true ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : "ObservableObject";
  var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target, $mobx, adm);
  return target;
}
var isObservableObjectAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get3() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set4(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}
function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }
  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;
  if (true) {
    adm.appliedAnnotations_[key] = annotation;
  }
  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
}
function assertAnnotable(adm, annotation, key) {
  if (!isAnnotation(annotation)) {
    die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
  }
  if (!isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
    var fieldName = adm.name_ + "." + key.toString();
    var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed.\nUse 'override' annotation for methods overriden by subclass.");
  }
}
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
var StubArray = function StubArray2() {
};
function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== void 0) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}
inherit(StubArray, Array.prototype);
var LegacyObservableArray = /* @__PURE__ */ function(_StubArray) {
  _inheritsLoose(LegacyObservableArray2, _StubArray);
  function LegacyObservableArray2(initialValues, enhancer, name, owned) {
    var _this;
    if (name === void 0) {
      name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
    }
    if (owned === void 0) {
      owned = false;
    }
    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized(_this);
    addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);
    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);
      _this.spliceWithArray(0, 0, initialValues);
      allowStateChangesEnd(prev);
    }
    return _this;
  }
  var _proto = LegacyObservableArray2.prototype;
  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();
    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }
    return Array.prototype.concat.apply(this.slice(), arrays.map(function(a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };
  _proto[Symbol.iterator] = function() {
    var self2 = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        return nextIndex < self2.length ? {
          value: self2[nextIndex++],
          done: false
        } : {
          done: true,
          value: void 0
        };
      }
    });
  };
  _createClass(LegacyObservableArray2, [{
    key: "length",
    get: function get3() {
      return this[$mobx].getArrayLength_();
    },
    set: function set4(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get3() {
      return "Array";
    }
  }]);
  return LegacyObservableArray2;
}(StubArray);
Object.entries(arrayExtensions).forEach(function(_ref) {
  var prop = _ref[0], fn = _ref[1];
  if (prop !== "concat")
    addHiddenProp(LegacyObservableArray.prototype, prop, fn);
});
function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get3() {
      return this[$mobx].get_(index);
    },
    set: function set4(value) {
      this[$mobx].set_(index, value);
    }
  };
}
function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1e3);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}
function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== void 0)
        die(23);
      return thing[$mobx].atom_;
    }
    if (isObservableSet(thing)) {
      return thing[$mobx];
    }
    if (isObservableMap(thing)) {
      if (property === void 0)
        return thing.keysAtom_;
      var observable2 = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable2)
        die(25, property, getDebugName(thing));
      return observable2;
    }
    if (isObservableObject(thing)) {
      if (!property)
        return die(26);
      var _observable = thing[$mobx].values_.get(property);
      if (!_observable)
        die(27, property, getDebugName(thing));
      return _observable;
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      return thing[$mobx];
    }
  }
  die(28);
}
function getAdministration(thing, property) {
  if (!thing)
    die(29);
  if (property !== void 0)
    return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
    return thing;
  if (isObservableMap(thing) || isObservableSet(thing))
    return thing;
  if (thing[$mobx])
    return thing[$mobx];
  die(24, thing);
}
function getDebugName(thing, property) {
  var named;
  if (property !== void 0) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    named = getAtom(thing);
  }
  return named.name_;
}
var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }
  return eq(a, b, depth);
}
function eq(a, b, depth, aStack, bStack) {
  if (a === b)
    return a !== 0 || 1 / a === 1 / b;
  if (a == null || b == null)
    return false;
  if (a !== a)
    return b !== b;
  var type = typeof a;
  if (!isFunction(type) && type !== "object" && typeof b != "object")
    return false;
  var className = toString.call(a);
  if (className !== toString.call(b))
    return false;
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a)
        return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
    case "[object Map]":
    case "[object Set]":
      if (depth >= 0) {
        depth++;
      }
      break;
  }
  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object")
      return false;
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }
  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b;
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length = a.length;
    if (length !== b.length)
      return false;
    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack))
        return false;
    }
  } else {
    var keys = Object.keys(a);
    var key;
    length = keys.length;
    if (Object.keys(b).length !== length)
      return false;
    while (length--) {
      key = keys[length];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
        return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap(a) {
  if (isObservableArray(a))
    return a.slice();
  if (isES6Map(a) || isObservableMap(a))
    return Array.from(a.entries());
  if (isES6Set(a) || isObservableSet(a))
    return Array.from(a.entries());
  return a;
}
function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}
function getSelf() {
  return this;
}
function isAnnotation(thing) {
  return thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_);
}
["Symbol", "Map", "Set"].forEach(function(m) {
  var g = getGlobal();
  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy,
    extras: {
      getDebugName
    },
    $mobx
  });
}

// src/hooks/useCameraCss.tsx
import {
  useLayoutEffect as useLayoutEffect2,
  useRef as useRef3
} from "react";
function useCameraCss(layerRef, containerRef, pageState) {
  const rZoom = useRef3();
  const rPoint = useRef3();
  useLayoutEffect2(() => {
    return autorun(() => {
      const { zoom, point } = pageState.camera;
      const didZoom = zoom !== rZoom.current;
      const didPan = point !== rPoint.current;
      rZoom.current = zoom;
      rPoint.current = point;
      if (didZoom || didPan) {
        const layer = layerRef.current;
        if (containerRef && "current" in containerRef) {
          const container = containerRef.current;
          if (didZoom) {
            if (container) {
              container.style.setProperty("--tl-zoom", zoom.toString());
            }
          }
          if (layer) {
            layer.style.setProperty("transform", `scale(${zoom}) translateX(${point[0]}px) translateY(${point[1]}px)`);
          }
        }
      }
    });
  }, [pageState]);
}

// src/hooks/useSelection.tsx
import {
  useRef as useRef4
} from "react";
function canvasToScreen(point, camera) {
  return [(point[0] + camera.point[0]) * camera.zoom, (point[1] + camera.point[1]) * camera.zoom];
}
function getShapeUtils(shapeUtils, shape) {
  return shapeUtils[shape.type];
}
function useSelection(page, pageState, shapeUtils) {
  const { rSelectionBounds } = useTLContext();
  const { selectedIds } = pageState;
  const rPrevBounds = useRef4();
  let bounds = void 0;
  let rotation = 0;
  let isLocked = false;
  let isLinked = false;
  if (selectedIds.length === 1) {
    const id = selectedIds[0];
    const shape = page.shapes[id];
    rotation = shape.rotation || 0;
    isLocked = shape.isLocked || false;
    const utils = getShapeUtils(shapeUtils, shape);
    bounds = utils.hideBounds ? void 0 : utils.getBounds(shape);
  } else if (selectedIds.length > 1) {
    const selectedShapes = selectedIds.map((id) => page.shapes[id]);
    rotation = 0;
    isLocked = selectedShapes.every((shape) => shape.isLocked);
    bounds = selectedShapes.reduce((acc, shape, i) => {
      if (i === 0) {
        return getShapeUtils(shapeUtils, shape).getRotatedBounds(shape);
      }
      return utils_default.getExpandedBounds(acc, getShapeUtils(shapeUtils, shape).getRotatedBounds(shape));
    }, {});
  }
  if (bounds) {
    const [minX, minY] = canvasToScreen([bounds.minX, bounds.minY], pageState.camera);
    const [maxX, maxY] = canvasToScreen([bounds.maxX, bounds.maxY], pageState.camera);
    isLinked = !!Object.values(page.bindings).find((binding) => selectedIds.includes(binding.toId) || selectedIds.includes(binding.fromId));
    rSelectionBounds.current = {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY
    };
  } else {
    rSelectionBounds.current = null;
  }
  const prevBounds = rPrevBounds.current;
  if (!prevBounds || !bounds) {
    rPrevBounds.current = bounds;
  } else if (bounds) {
    if (prevBounds.minX === bounds.minX && prevBounds.minY === bounds.minY && prevBounds.maxX === bounds.maxX && prevBounds.maxY === bounds.maxY) {
      bounds = rPrevBounds.current;
    }
  }
  return { bounds, rotation, isLocked, isLinked };
}

// src/hooks/useHandleEvents.tsx
import {
  useCallback as useCallback3
} from "react";
function useHandleEvents(id) {
  const { inputs: inputs2, callbacks } = useTLContext();
  const onPointerDown = useCallback3((e) => {
    var _a, _b, _c;
    if (e.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    (_a = e.currentTarget) == null ? void 0 : _a.setPointerCapture(e.pointerId);
    const info = inputs2.pointerDown(e, id);
    (_b = callbacks.onPointHandle) == null ? void 0 : _b.call(callbacks, info, e);
    (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerUp = useCallback3((e) => {
    var _a, _b, _c, _d;
    if (e.button !== 0)
      return;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e, id);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a = e.currentTarget) == null ? void 0 : _a.releasePointerCapture(e.pointerId);
      if (isDoubleClick && !(info.altKey || info.metaKey)) {
        (_b = callbacks.onDoubleClickHandle) == null ? void 0 : _b.call(callbacks, info, e);
      }
      (_c = callbacks.onReleaseHandle) == null ? void 0 : _c.call(callbacks, info, e);
    }
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
  }, [inputs2, callbacks]);
  const onPointerMove = useCallback3((e) => {
    var _a, _b;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    const info = inputs2.pointerMove(e, id);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a = callbacks.onDragHandle) == null ? void 0 : _a.call(callbacks, info, e);
    }
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerEnter = useCallback3((e) => {
    var _a;
    if (!inputs2.pointerIsValid(e))
      return;
    const info = inputs2.pointerEnter(e, id);
    (_a = callbacks.onHoverHandle) == null ? void 0 : _a.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  const onPointerLeave = useCallback3((e) => {
    var _a;
    if (!inputs2.pointerIsValid(e))
      return;
    const info = inputs2.pointerEnter(e, id);
    (_a = callbacks.onUnhoverHandle) == null ? void 0 : _a.call(callbacks, info, e);
  }, [inputs2, callbacks, id]);
  return {
    onPointerDown,
    onPointerUp,
    onPointerEnter,
    onPointerMove,
    onPointerLeave
  };
}

// src/hooks/usePreventNavigation.tsx
import {
  useEffect as useEffect3
} from "react";
function usePreventNavigation(rCanvas) {
  const { bounds } = useTLContext();
  useEffect3(() => {
    const preventGestureNavigation = (event) => {
      event.preventDefault();
    };
    const preventNavigation = (event) => {
      const touchXPosition = event.touches[0].pageX;
      const touchXRadius = event.touches[0].radiusX || 0;
      if (touchXPosition - touchXRadius < 10 || touchXPosition + touchXRadius > bounds.width - 10) {
        event.preventDefault();
      }
    };
    const elm = rCanvas.current;
    if (!elm)
      return () => void 0;
    elm.addEventListener("touchstart", preventGestureNavigation);
    elm.addEventListener("gestureend", preventGestureNavigation);
    elm.addEventListener("gesturechange", preventGestureNavigation);
    elm.addEventListener("gesturestart", preventGestureNavigation);
    elm.addEventListener("touchstart", preventNavigation);
    return () => {
      if (elm) {
        elm.removeEventListener("touchstart", preventGestureNavigation);
        elm.removeEventListener("gestureend", preventGestureNavigation);
        elm.removeEventListener("gesturechange", preventGestureNavigation);
        elm.removeEventListener("gesturestart", preventGestureNavigation);
        elm.removeEventListener("touchstart", preventNavigation);
      }
    };
  }, [rCanvas, bounds.width]);
}

// src/hooks/useBoundsEvents.tsx
import {
  useCallback as useCallback4
} from "react";
function useBoundsEvents() {
  const { callbacks, inputs: inputs2 } = useTLContext();
  const onPointerDown = useCallback4((e) => {
    var _a, _b, _c, _d;
    if (!inputs2.pointerIsValid(e))
      return;
    if (e.button === 2) {
      (_a = callbacks.onRightPointBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerDown(e, "bounds"), e);
      return;
    }
    if (e.button !== 0)
      return;
    e.stopPropagation();
    (_b = e.currentTarget) == null ? void 0 : _b.setPointerCapture(e.pointerId);
    const info = inputs2.pointerDown(e, "bounds");
    (_c = callbacks.onPointBounds) == null ? void 0 : _c.call(callbacks, info, e);
    (_d = callbacks.onPointerDown) == null ? void 0 : _d.call(callbacks, info, e);
  }, [callbacks, inputs2]);
  const onPointerUp = useCallback4((e) => {
    var _a, _b, _c, _d;
    if (e.button !== 0)
      return;
    inputs2.activePointer = void 0;
    if (!inputs2.pointerIsValid(e))
      return;
    e.stopPropagation();
    const isDoubleClick = inputs2.isDoubleClick();
    const info = inputs2.pointerUp(e, "bounds");
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a = e.currentTarget) == null ? void 0 : _a.releasePointerCapture(e.pointerId);
    }
    if (isDoubleClick && !(info.altKey || info.metaKey)) {
      (_b = callbacks.onDoubleClickBounds) == null ? void 0 : _b.call(callbacks, info, e);
    }
    (_c = callbacks.onReleaseBounds) == null ? void 0 : _c.call(callbacks, info, e);
    (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
  }, [callbacks, inputs2]);
  const onPointerMove = useCallback4((e) => {
    var _a, _b;
    if (!inputs2.pointerIsValid(e))
      return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      (_a = callbacks.onDragBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerMove(e, "bounds"), e);
    }
    const info = inputs2.pointerMove(e, "bounds");
    (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
  }, [callbacks, inputs2]);
  const onPointerEnter = useCallback4((e) => {
    var _a;
    if (!inputs2.pointerIsValid(e))
      return;
    (_a = callbacks.onHoverBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e, "bounds"), e);
  }, [callbacks, inputs2]);
  const onPointerLeave = useCallback4((e) => {
    var _a;
    if (!inputs2.pointerIsValid(e))
      return;
    (_a = callbacks.onUnhoverBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e, "bounds"), e);
  }, [callbacks, inputs2]);
  return {
    onPointerDown,
    onPointerUp,
    onPointerEnter,
    onPointerMove,
    onPointerLeave
  };
}

// src/hooks/usePosition.ts
import {
  useLayoutEffect as useLayoutEffect3,
  useRef as useRef5
} from "react";
function usePosition(bounds, rotation = 0) {
  const rBounds = useRef5(null);
  useLayoutEffect3(() => {
    return autorun(() => {
      const elm = rBounds.current;
      const transform = `
    translate(
      calc(${bounds.minX}px - var(--tl-padding)),
      calc(${bounds.minY}px - var(--tl-padding))
    )
    rotate(${rotation + (bounds.rotation || 0)}rad)`;
      elm.style.setProperty("transform", transform);
      elm.style.setProperty("width", `calc(${Math.floor(bounds.width)}px + (var(--tl-padding) * 2))`);
      elm.style.setProperty("height", `calc(${Math.floor(bounds.height)}px + (var(--tl-padding) * 2))`);
    });
  }, [bounds, rotation]);
  return rBounds;
}

// src/hooks/useKeyEvents.ts
import {
  useEffect as useEffect4
} from "react";
function useKeyEvents() {
  const { inputs: inputs2, callbacks } = useTLContext();
  useEffect4(() => {
    const handleKeyDown = (e) => {
      var _a;
      (_a = callbacks.onKeyDown) == null ? void 0 : _a.call(callbacks, e.key, inputs2.keydown(e), e);
    };
    const handleKeyUp = (e) => {
      var _a;
      inputs2.keyup(e);
      (_a = callbacks.onKeyUp) == null ? void 0 : _a.call(callbacks, e.key, inputs2.keyup(e), e);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [inputs2, callbacks]);
}

// src/components/ErrorFallback/ErrorFallback.tsx
import {
  memo,
  useEffect as useEffect5
} from "react";
var ErrorFallback = memo(function ErrorFallback2({
  error,
  resetErrorBoundary
}) {
  const { callbacks } = useTLContext();
  useEffect5(() => {
    var _a;
    (_a = callbacks.onError) == null ? void 0 : _a.call(callbacks, error);
  }, [error, resetErrorBoundary, callbacks]);
  return null;
});

// src/components/ErrorBoundary/ErrorBoundary.tsx
import {
  Component,
  createElement,
  isValidElement
} from "react";
var changedArray = (a = [], b = []) => a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));
var initialState = { error: null };
var ErrorBoundary = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", initialState);
    __publicField(this, "updatedWithError", false);
    __publicField(this, "resetErrorBoundary", (...args) => {
      var _a, _b;
      (_b = (_a = this.props).onReset) == null ? void 0 : _b.call(_a, ...args);
      this.reset();
    });
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  reset() {
    this.updatedWithError = false;
    this.setState(initialState);
  }
  componentDidCatch(error, info) {
    var _a, _b;
    (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, error, info);
  }
  componentDidMount() {
    const { error } = this.state;
    if (error !== null) {
      this.updatedWithError = true;
    }
  }
  componentDidUpdate(prevProps) {
    var _a, _b;
    const { error } = this.state;
    const { resetKeys } = this.props;
    if (error !== null && !this.updatedWithError) {
      this.updatedWithError = true;
      return;
    }
    if (error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
      (_b = (_a = this.props).onResetKeysChange) == null ? void 0 : _b.call(_a, prevProps.resetKeys, resetKeys);
      this.reset();
    }
  }
  render() {
    const { error } = this.state;
    const { fallbackRender, FallbackComponent, fallback } = this.props;
    if (error !== null) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (isValidElement(fallback)) {
        return fallback;
      } else if (typeof fallbackRender === "function") {
        return fallbackRender(props);
      } else if (FallbackComponent) {
        return /* @__PURE__ */ createElement(FallbackComponent, __spreadValues({}, props));
      } else {
        throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
      }
    }
    return this.props.children;
  }
};

// src/components/Brush/Brush.tsx
import { observer as observer2 } from "mobx-react-lite";

// src/components/Container/Container.tsx
import { observer } from "mobx-react-lite";
import {
  createElement as createElement2
} from "react";
var Container = observer(function Container2(_a) {
  var _b = _a, {
    id,
    bounds,
    rotation = 0,
    isGhost = false,
    children
  } = _b, props = __objRest(_b, [
    "id",
    "bounds",
    "rotation",
    "isGhost",
    "children"
  ]);
  const rPositioned = usePosition(bounds, rotation);
  return /* @__PURE__ */ createElement2("div", __spreadValues({
    id,
    ref: rPositioned,
    className: isGhost ? "tl-positioned tl-ghost" : "tl-positioned",
    "aria-label": "container",
    "data-testid": "container"
  }, props), children);
});

// src/components/Brush/Brush.tsx
import {
  createElement as createElement3
} from "react";
var Brush = observer2(function Brush2({ brush }) {
  return /* @__PURE__ */ createElement3(Container, {
    bounds: brush,
    rotation: 0
  }, /* @__PURE__ */ createElement3(SVGContainer, null, /* @__PURE__ */ createElement3("rect", {
    className: "tl-brush",
    opacity: 1,
    x: 0,
    y: 0,
    width: brush.width,
    height: brush.height,
    "aria-label": "brush"
  })));
});

// src/components/Page/Page.tsx
import { observer as observer16 } from "mobx-react-lite";
import {
  Fragment as Fragment5,
  createElement as createElement20
} from "react";

// src/components/Bounds/Bounds.tsx
import {
  Fragment as Fragment2,
  createElement as createElement12
} from "react";

// src/components/Bounds/CenterHandle.tsx
import { observer as observer3 } from "mobx-react-lite";
import {
  createElement as createElement4
} from "react";
var CenterHandle = observer3(function CenterHandle2({
  bounds,
  isLocked,
  isHidden
}) {
  return /* @__PURE__ */ createElement4("rect", {
    className: isLocked ? "tl-bounds-center tl-dashed" : "tl-bounds-center",
    x: -1,
    y: -1,
    width: bounds.width + 2,
    height: bounds.height + 2,
    opacity: isHidden ? 0 : 1,
    pointerEvents: "none",
    "aria-label": "center handle"
  });
});

// src/components/Bounds/RotateHandle.tsx
import { observer as observer4 } from "mobx-react-lite";
import {
  createElement as createElement5
} from "react";
var RotateHandle = observer4(function RotateHandle2({
  bounds,
  targetSize,
  size,
  isHidden
}) {
  const events = useBoundsHandleEvents("rotate");
  return /* @__PURE__ */ createElement5("g", {
    cursor: "grab",
    opacity: isHidden ? 0 : 1
  }, /* @__PURE__ */ createElement5("circle", __spreadValues({
    className: "tl-transparent",
    "aria-label": "rotate handle transparent",
    cx: bounds.width / 2,
    cy: size * -2,
    r: targetSize,
    pointerEvents: isHidden ? "none" : "all"
  }, events)), /* @__PURE__ */ createElement5("circle", {
    className: "tl-rotate-handle",
    "aria-label": "rotate handle",
    cx: bounds.width / 2,
    cy: size * -2,
    r: size / 2,
    pointerEvents: "none"
  }));
});

// src/components/Bounds/CornerHandle.tsx
import { observer as observer5 } from "mobx-react-lite";
import {
  createElement as createElement6
} from "react";
var cornerBgClassnames = {
  [TLBoundsCorner.TopLeft]: "tl-cursor-nwse",
  [TLBoundsCorner.TopRight]: "tl-cursor-nesw",
  [TLBoundsCorner.BottomRight]: "tl-cursor-nwse",
  [TLBoundsCorner.BottomLeft]: "tl-cursor-nesw"
};
var CornerHandle = observer5(function CornerHandle2({
  size,
  targetSize,
  isHidden,
  corner,
  bounds
}) {
  const events = useBoundsHandleEvents(corner);
  const isTop = corner === TLBoundsCorner.TopLeft || corner === TLBoundsCorner.TopRight;
  const isLeft = corner === TLBoundsCorner.TopLeft || corner === TLBoundsCorner.BottomLeft;
  return /* @__PURE__ */ createElement6("g", {
    opacity: isHidden ? 0 : 1
  }, /* @__PURE__ */ createElement6("rect", __spreadValues({
    className: "tl-transparent " + (isHidden ? "" : cornerBgClassnames[corner]),
    "aria-label": "corner transparent",
    x: (isLeft ? -1 : bounds.width + 1) - targetSize,
    y: (isTop ? -1 : bounds.height + 1) - targetSize,
    width: targetSize * 2,
    height: targetSize * 2,
    pointerEvents: isHidden ? "none" : "all"
  }, events)), /* @__PURE__ */ createElement6("rect", {
    className: "tl-corner-handle",
    "aria-label": "corner handle",
    x: (isLeft ? -1 : bounds.width + 1) - size / 2,
    y: (isTop ? -1 : bounds.height + 1) - size / 2,
    width: size,
    height: size,
    pointerEvents: "none"
  }));
});

// src/components/Bounds/LinkHandle.tsx
import {
  createElement as createElement7
} from "react";
function LinkHandle({ size, bounds, isHidden }) {
  const leftEvents = useBoundsHandleEvents("left");
  const centerEvents = useBoundsHandleEvents("center");
  const rightEvents = useBoundsHandleEvents("right");
  return /* @__PURE__ */ createElement7("g", {
    cursor: "grab",
    transform: `translate(${bounds.width / 2 - size * 4}, ${bounds.height + size * 2})`,
    "aria-label": "link handle"
  }, /* @__PURE__ */ createElement7("g", {
    className: "tl-transparent",
    pointerEvents: isHidden ? "none" : "all"
  }, /* @__PURE__ */ createElement7("rect", __spreadValues({
    x: 0,
    y: 0,
    width: size * 2,
    height: size * 2
  }, leftEvents)), /* @__PURE__ */ createElement7("rect", __spreadValues({
    x: size * 3,
    y: 0,
    width: size * 2,
    height: size * 2
  }, centerEvents)), /* @__PURE__ */ createElement7("rect", __spreadValues({
    x: size * 6,
    y: 0,
    width: size * 2,
    height: size * 2
  }, rightEvents))), /* @__PURE__ */ createElement7("g", {
    className: "tl-rotate-handle",
    transform: `translate(${size / 2}, ${size / 2})`,
    "aria-label": "link rotate handle"
  }, /* @__PURE__ */ createElement7("path", {
    d: `M 0,${size / 2} L ${size},${size} ${size},0 Z`,
    pointerEvents: "none",
    opacity: isHidden ? 0 : 1
  }), /* @__PURE__ */ createElement7("path", {
    transform: `translate(${size * 3}, 0)`,
    d: `M 0,0 L ${size},0 ${size / 2},${size} Z`,
    pointerEvents: "none",
    opacity: isHidden ? 0 : 1
  }), /* @__PURE__ */ createElement7("path", {
    transform: `translate(${size * 6}, 0)`,
    d: `M ${size},${size / 2} L 0,0 0,${size} Z`,
    pointerEvents: "none",
    opacity: isHidden ? 0 : 1
  })));
}

// src/components/Bounds/EdgeHandle.tsx
import { observer as observer6 } from "mobx-react-lite";
import {
  createElement as createElement8
} from "react";
var edgeClassnames = {
  [TLBoundsEdge.Top]: "tl-cursor-ns",
  [TLBoundsEdge.Right]: "tl-cursor-ew",
  [TLBoundsEdge.Bottom]: "tl-cursor-ns",
  [TLBoundsEdge.Left]: "tl-cursor-ew"
};
var EdgeHandle = observer6(function EdgeHandle2({
  size,
  isHidden,
  bounds,
  edge
}) {
  const events = useBoundsHandleEvents(edge);
  const isHorizontal = edge === TLBoundsEdge.Top || edge === TLBoundsEdge.Bottom;
  const isFarEdge = edge === TLBoundsEdge.Right || edge === TLBoundsEdge.Bottom;
  const { height, width } = bounds;
  return /* @__PURE__ */ createElement8("rect", __spreadValues({
    pointerEvents: isHidden ? "none" : "all",
    className: "tl-transparent tl-edge-handle " + (isHidden ? "" : edgeClassnames[edge]),
    "aria-label": `${edge} handle`,
    opacity: isHidden ? 0 : 1,
    x: isHorizontal ? size / 2 : (isFarEdge ? width + 1 : -1) - size / 2,
    y: isHorizontal ? (isFarEdge ? height + 1 : -1) - size / 2 : size / 2,
    width: isHorizontal ? Math.max(0, width + 1 - size) : size,
    height: isHorizontal ? size : Math.max(0, height + 1 - size)
  }, events));
});

// src/components/Bounds/CloneButtons.tsx
import {
  Fragment,
  createElement as createElement10
} from "react";

// src/components/Bounds/CloneButton.tsx
import { observer as observer7 } from "mobx-react-lite";
import {
  createElement as createElement9,
  useCallback as useCallback5
} from "react";
var ROTATIONS = {
  right: 0,
  bottomRight: 45,
  bottom: 90,
  bottomLeft: 135,
  left: 180,
  topLeft: 225,
  top: 270,
  topRight: 315
};
var CloneButton = observer7(function CloneButton2({
  bounds,
  side,
  targetSize,
  size
}) {
  const x = {
    left: -44,
    topLeft: -44,
    bottomLeft: -44,
    right: bounds.width + 44,
    topRight: bounds.width + 44,
    bottomRight: bounds.width + 44,
    top: bounds.width / 2,
    bottom: bounds.width / 2
  }[side];
  const y = {
    left: bounds.height / 2,
    right: bounds.height / 2,
    top: -44,
    topLeft: -44,
    topRight: -44,
    bottom: bounds.height + 44,
    bottomLeft: bounds.height + 44,
    bottomRight: bounds.height + 44
  }[side];
  const { callbacks, inputs: inputs2 } = useTLContext();
  const handleClick = useCallback5((e) => {
    var _a;
    e.stopPropagation();
    const info = inputs2.pointerDown(e, side);
    (_a = callbacks.onShapeClone) == null ? void 0 : _a.call(callbacks, info, e);
  }, [callbacks.onShapeClone]);
  return /* @__PURE__ */ createElement9("g", {
    className: "tl-clone-target",
    transform: `translate(${x}, ${y})`,
    "aria-label": "clone button"
  }, /* @__PURE__ */ createElement9("rect", {
    className: "tl-transparent",
    width: targetSize * 4,
    height: targetSize * 4,
    x: -targetSize * 2,
    y: -targetSize * 2
  }), /* @__PURE__ */ createElement9("g", {
    className: "tl-clone-button-target",
    onPointerDown: handleClick,
    transform: `rotate(${ROTATIONS[side]})`
  }, /* @__PURE__ */ createElement9("circle", {
    className: "tl-transparent ",
    r: targetSize
  }), /* @__PURE__ */ createElement9("path", {
    className: "tl-clone-button",
    d: `M -${size / 2},-${size / 2} L ${size / 2},0 -${size / 2},${size / 2} Z`,
    strokeLinejoin: "round"
  })));
});

// src/components/Bounds/CloneButtons.tsx
function CloneButtons({ targetSize, size, bounds }) {
  return /* @__PURE__ */ createElement10(Fragment, null, /* @__PURE__ */ createElement10(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "top"
  }), /* @__PURE__ */ createElement10(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "right"
  }), /* @__PURE__ */ createElement10(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "bottom"
  }), /* @__PURE__ */ createElement10(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "left"
  }), /* @__PURE__ */ createElement10(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "topLeft"
  }), /* @__PURE__ */ createElement10(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "topRight"
  }), /* @__PURE__ */ createElement10(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "bottomLeft"
  }), /* @__PURE__ */ createElement10(CloneButton, {
    targetSize,
    size,
    bounds,
    side: "bottomRight"
  }));
}

// src/components/SVGContainer/SVGContainer.tsx
import { Observer } from "mobx-react-lite";
import {
  createElement as createElement11,
  forwardRef
} from "react";
var SVGContainer = forwardRef(function SVGContainer2(_a, ref) {
  var _b = _a, { id, className = "", children } = _b, rest = __objRest(_b, ["id", "className", "children"]);
  return /* @__PURE__ */ createElement11(Observer, null, () => /* @__PURE__ */ createElement11("svg", __spreadValues({
    ref,
    className: `tl-positioned-svg ${className}`
  }, rest), /* @__PURE__ */ createElement11("g", {
    id,
    className: "tl-centered-g"
  }, children)));
});

// src/components/Bounds/Bounds.tsx
import { observer as observer8 } from "mobx-react-lite";
var Bounds = observer8(function Bounds2({
  zoom,
  bounds,
  viewportWidth,
  rotation,
  isHidden,
  isLocked,
  hideCloneHandles,
  hideResizeHandles,
  hideRotateHandle,
  hideBindingHandles
}) {
  const targetSize = (viewportWidth < 768 ? 16 : 8) / zoom;
  const size = 8 / zoom;
  const smallDimension = Math.min(bounds.width, bounds.height) * zoom;
  const showRotateHandle = !hideRotateHandle && !isHidden && !isLocked && smallDimension > 32;
  const showEdgeHandles = !isHidden && !isLocked && smallDimension > 24;
  const showCornerHandles = !isHidden && !isLocked && smallDimension > 20;
  const showCloneHandles = !hideCloneHandles && smallDimension > 24;
  const showResizeHandles = !hideResizeHandles && !isLocked;
  return /* @__PURE__ */ createElement12(Container, {
    bounds,
    rotation
  }, /* @__PURE__ */ createElement12(SVGContainer, null, /* @__PURE__ */ createElement12(CenterHandle, {
    bounds,
    isLocked,
    isHidden
  }), showResizeHandles && /* @__PURE__ */ createElement12(Fragment2, null, /* @__PURE__ */ createElement12(EdgeHandle, {
    targetSize,
    size,
    bounds,
    edge: TLBoundsEdge.Top,
    isHidden: !showEdgeHandles
  }), /* @__PURE__ */ createElement12(EdgeHandle, {
    targetSize,
    size,
    bounds,
    edge: TLBoundsEdge.Right,
    isHidden: !showEdgeHandles
  }), /* @__PURE__ */ createElement12(EdgeHandle, {
    targetSize,
    size,
    bounds,
    edge: TLBoundsEdge.Bottom,
    isHidden: !showEdgeHandles
  }), /* @__PURE__ */ createElement12(EdgeHandle, {
    targetSize,
    size,
    bounds,
    edge: TLBoundsEdge.Left,
    isHidden: !showEdgeHandles
  }), /* @__PURE__ */ createElement12(CornerHandle, {
    targetSize,
    size,
    bounds,
    isHidden: isHidden || !showCornerHandles,
    corner: TLBoundsCorner.TopLeft
  }), /* @__PURE__ */ createElement12(CornerHandle, {
    targetSize,
    size,
    bounds,
    isHidden: isHidden || !showCornerHandles,
    corner: TLBoundsCorner.TopRight
  }), /* @__PURE__ */ createElement12(CornerHandle, {
    targetSize,
    size,
    bounds,
    isHidden: isHidden || !showCornerHandles,
    corner: TLBoundsCorner.BottomRight
  }), /* @__PURE__ */ createElement12(CornerHandle, {
    targetSize,
    size,
    bounds,
    isHidden: isHidden || !showCornerHandles,
    corner: TLBoundsCorner.BottomLeft
  })), showRotateHandle && /* @__PURE__ */ createElement12(RotateHandle, {
    targetSize,
    size,
    bounds,
    isHidden: !showEdgeHandles
  }), showCloneHandles && /* @__PURE__ */ createElement12(CloneButtons, {
    bounds,
    targetSize,
    size
  }), !hideBindingHandles && /* @__PURE__ */ createElement12(LinkHandle, {
    targetSize,
    size,
    bounds,
    isHidden: !showEdgeHandles
  })));
});

// src/components/Bounds/BoundsBg.tsx
import { observer as observer9 } from "mobx-react-lite";
import {
  createElement as createElement13
} from "react";
var BoundsBg = observer9(function BoundsBg2({
  bounds,
  rotation,
  isHidden
}) {
  const events = useBoundsEvents();
  return /* @__PURE__ */ createElement13(Container, {
    bounds,
    rotation
  }, /* @__PURE__ */ createElement13(SVGContainer, null, /* @__PURE__ */ createElement13("rect", __spreadValues({
    className: "tl-bounds-bg",
    "aria-label": "bounds bg",
    width: bounds.width,
    height: bounds.height,
    opacity: isHidden ? 0 : 1
  }, events))));
});

// src/components/Handles/Handles.tsx
import { observer as observer11 } from "mobx-react-lite";
import {
  Fragment as Fragment3,
  createElement as createElement15
} from "react";
import { Vec as Vec4 } from "@tldraw/vec";

// src/components/Handles/Handle.tsx
import {
  createElement as createElement14
} from "react";
import { observer as observer10 } from "mobx-react-lite";
var Handle = observer10(function Handle2({ id, point }) {
  const events = useHandleEvents(id);
  return /* @__PURE__ */ createElement14(Container, {
    bounds: utils_default.translateBounds({
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: 0,
      height: 0
    }, point)
  }, /* @__PURE__ */ createElement14(SVGContainer, null, /* @__PURE__ */ createElement14("g", __spreadValues({
    className: "tl-handle",
    "aria-label": "handle"
  }, events), /* @__PURE__ */ createElement14("circle", {
    className: "tl-handle-bg",
    pointerEvents: "all"
  }), /* @__PURE__ */ createElement14("circle", {
    className: "tl-counter-scaled tl-handle",
    pointerEvents: "none",
    r: 4
  }))));
});

// src/components/Handles/Handles.tsx
var Handles = observer11(function Handles2({
  shape,
  zoom
}) {
  if (shape.handles === void 0) {
    return null;
  }
  let prev = null;
  const handlesToShow = Object.values(shape.handles).reduce((acc, cur) => {
    const point = Vec4.add(cur.point, shape.point);
    if (!prev || Vec4.dist(point, prev) * zoom >= 32) {
      acc.push(cur);
      prev = point;
    }
    return acc;
  }, []);
  if (handlesToShow.length === 1)
    return null;
  return /* @__PURE__ */ createElement15(Fragment3, null, handlesToShow.map((handle) => /* @__PURE__ */ createElement15(Handle, {
    key: shape.id + "_" + handle.id,
    id: handle.id,
    point: Vec4.add(handle.point, shape.point)
  })));
});

// src/components/Shape/ShapeNode.tsx
import { observer as observer14 } from "mobx-react-lite";
import {
  Fragment as Fragment4,
  createElement as createElement18
} from "react";

// src/components/Shape/Shape.tsx
import { observer as observer13 } from "mobx-react-lite";
import {
  createElement as createElement17
} from "react";

// src/components/Shape/RenderedShape.tsx
import { observer as observer12 } from "mobx-react-lite";
import {
  createElement as createElement16,
  memo as memo2
} from "react";
var _RenderedShape = observer12(function RenderedShape(props) {
  const ref = props.utils.getRef(props.shape);
  return /* @__PURE__ */ createElement16(props.utils.Component, __spreadValues({
    ref
  }, props));
});
var RenderedShape2 = memo2(_RenderedShape, (prev, next) => {
  if (prev.isHovered !== next.isHovered || prev.isSelected !== next.isSelected || prev.isEditing !== next.isEditing || prev.isBinding !== next.isBinding || prev.isGhost !== next.isGhost || prev.meta !== next.meta) {
    return false;
  }
  if (next.shape !== prev.shape) {
    return !next.utils.shouldRender(next.shape, prev.shape);
  }
  return true;
});

// src/components/Shape/Shape.tsx
var Shape = observer13(function Shape2(_a) {
  var _b = _a, {
    shape,
    utils,
    meta
  } = _b, rest = __objRest(_b, [
    "shape",
    "utils",
    "meta"
  ]);
  const { callbacks } = useTLContext();
  const bounds = utils.getBounds(shape);
  const events = useShapeEvents(shape.id);
  return /* @__PURE__ */ createElement17(Container, {
    id: shape.id,
    bounds,
    rotation: shape.rotation,
    "data-shape": shape.type
  }, /* @__PURE__ */ createElement17(RenderedShape2, __spreadValues({
    shape,
    utils,
    meta,
    events,
    onShapeChange: callbacks.onShapeChange,
    onShapeBlur: callbacks.onShapeBlur
  }, rest)));
});

// src/components/Shape/ShapeNode.tsx
var ShapeNode = observer14(function ShapeNode2(_a) {
  var _b = _a, {
    shape,
    utils,
    meta,
    children
  } = _b, rest = __objRest(_b, [
    "shape",
    "utils",
    "meta",
    "children"
  ]);
  return /* @__PURE__ */ createElement18(Fragment4, null, /* @__PURE__ */ createElement18(Shape, __spreadValues({
    shape,
    utils: utils[shape.type],
    meta
  }, rest)), children && children.map((childNode) => /* @__PURE__ */ createElement18(ShapeNode2, __spreadValues({
    key: childNode.shape.id,
    utils
  }, childNode))));
});

// src/components/ShapeIndicator/ShapeIndicator.tsx
import { observer as observer15 } from "mobx-react-lite";
import {
  createElement as createElement19
} from "react";
var ShapeIndicator = observer15(function ShapeIndicator2({
  isHovered = false,
  isSelected = false,
  shape,
  user,
  meta
}) {
  const { shapeUtils } = useTLContext();
  const utils = shapeUtils[shape.type];
  const bounds = utils.getBounds(shape);
  const rPositioned = usePosition(bounds, shape.rotation);
  return /* @__PURE__ */ createElement19("div", {
    ref: rPositioned,
    className: "tl-indicator tl-absolute " + (user ? "" : isSelected ? "tl-selected" : "tl-hovered")
  }, /* @__PURE__ */ createElement19("svg", {
    width: "100%",
    height: "100%"
  }, /* @__PURE__ */ createElement19("g", {
    className: "tl-centered-g",
    stroke: user == null ? void 0 : user.color
  }, /* @__PURE__ */ createElement19(utils.Indicator, {
    shape,
    meta,
    user,
    isSelected,
    isHovered
  }))));
});

// src/components/Page/Page.tsx
var Page = observer16(function _Page({
  page,
  pageState,
  hideBounds,
  hideHandles,
  hideIndicators,
  hideBindingHandles,
  hideCloneHandles,
  hideRotateHandle,
  hideResizeHandles,
  meta
}) {
  const { bounds: rendererBounds, shapeUtils } = useTLContext();
  const shapeTree = useShapeTree(page, pageState, meta);
  const { bounds, isLinked, isLocked, rotation } = useSelection(page, pageState, shapeUtils);
  const {
    selectedIds,
    hoveredId,
    camera: { zoom }
  } = pageState;
  let _hideCloneHandles = true;
  let shapeWithHandles = void 0;
  const selectedShapes = selectedIds.map((id) => page.shapes[id]);
  if (selectedShapes.length === 1) {
    const shape = selectedShapes[0];
    const utils = shapeUtils[shape.type];
    _hideCloneHandles = hideCloneHandles || !utils.showCloneHandles;
    if (shape.handles !== void 0) {
      shapeWithHandles = shape;
    }
  }
  return /* @__PURE__ */ createElement20(Fragment5, null, bounds && /* @__PURE__ */ createElement20(BoundsBg, {
    bounds,
    rotation,
    isHidden: hideBounds
  }), shapeTree.map((node) => /* @__PURE__ */ createElement20(ShapeNode, __spreadValues({
    key: node.shape.id,
    utils: shapeUtils
  }, node))), !hideIndicators && selectedShapes.map((shape) => /* @__PURE__ */ createElement20(ShapeIndicator, {
    key: "selected_" + shape.id,
    shape,
    meta,
    isSelected: true
  })), !hideIndicators && hoveredId && /* @__PURE__ */ createElement20(ShapeIndicator, {
    key: "hovered_" + hoveredId,
    shape: page.shapes[hoveredId],
    meta,
    isHovered: true
  }), bounds && /* @__PURE__ */ createElement20(Bounds, {
    zoom,
    bounds,
    viewportWidth: rendererBounds.width,
    isLocked,
    rotation,
    isHidden: hideBounds,
    hideRotateHandle,
    hideResizeHandles,
    hideBindingHandles: hideBindingHandles || !isLinked,
    hideCloneHandles: _hideCloneHandles
  }), !hideHandles && shapeWithHandles && /* @__PURE__ */ createElement20(Handles, {
    shape: shapeWithHandles,
    zoom
  }));
});

// src/components/Users/Users.tsx
import {
  Fragment as Fragment6,
  createElement as createElement22
} from "react";

// src/components/User/User.tsx
import {
  createElement as createElement21,
  useRef as useRef6
} from "react";
function User({ user }) {
  const rUser = useRef6(null);
  return /* @__PURE__ */ createElement21("div", {
    ref: rUser,
    className: "tl-absolute tl-user",
    style: {
      backgroundColor: user.color,
      transform: `translate(${user.point[0]}px, ${user.point[1]}px)`
    }
  });
}

// src/components/Users/Users.tsx
function Users({ userId, users }) {
  return /* @__PURE__ */ createElement22(Fragment6, null, Object.values(users).filter((user) => user && user.id !== userId).map((user) => /* @__PURE__ */ createElement22(User, {
    key: user.id,
    user
  })));
}

// src/hooks/useResizeObserver.ts
import {
  useCallback as useCallback6,
  useEffect as useEffect6,
  useRef as useRef7
} from "react";
function useResizeObserver(ref, onBoundsChange) {
  const { inputs: inputs2, callbacks } = useTLContext();
  const rIsMounted = useRef7(false);
  const updateBounds = useCallback6(() => {
    var _a, _b;
    if (rIsMounted.current) {
      const rect = (_a = ref.current) == null ? void 0 : _a.getBoundingClientRect();
      if (rect) {
        const bounds = {
          minX: rect.left,
          maxX: rect.left + rect.width,
          minY: rect.top,
          maxY: rect.top + rect.height,
          width: rect.width,
          height: rect.height
        };
        inputs2.bounds = bounds;
        onBoundsChange(bounds);
        (_b = callbacks.onBoundsChange) == null ? void 0 : _b.call(callbacks, bounds);
      }
    } else {
      rIsMounted.current = true;
    }
  }, [ref, inputs2, callbacks.onBoundsChange]);
  useEffect6(() => {
    const debouncedupdateBounds = Utils.debounce(updateBounds, 100);
    window.addEventListener("scroll", debouncedupdateBounds);
    window.addEventListener("resize", debouncedupdateBounds);
    return () => {
      window.removeEventListener("scroll", debouncedupdateBounds);
      window.removeEventListener("resize", debouncedupdateBounds);
    };
  }, []);
  useEffect6(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (inputs2.isPinching) {
        return;
      }
      if (entries[0].contentRect) {
        updateBounds();
      }
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, inputs2]);
  useEffect6(() => {
    updateBounds();
  }, [ref]);
}

// src/inputs.ts
import { Vec as Vec5 } from "@tldraw/vec";
var DOUBLE_CLICK_DURATION = 250;
var Inputs = class {
  constructor() {
    __publicField(this, "pointer");
    __publicField(this, "keyboard");
    __publicField(this, "keys", {});
    __publicField(this, "isPinching", false);
    __publicField(this, "bounds", {
      minX: 0,
      maxX: 640,
      minY: 0,
      maxY: 480,
      width: 640,
      height: 480
    });
    __publicField(this, "zoom", 1);
    __publicField(this, "pointerUpTime", 0);
    __publicField(this, "activePointer");
    __publicField(this, "panStart", (e) => {
      var _a, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      const info = {
        target: "wheel",
        pointerId: ((_a = this.pointer) == null ? void 0 : _a.pointerId) || 0,
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        delta: [0, 0],
        pressure: 0.5,
        point: Inputs.getPoint(e, this.bounds),
        shiftKey,
        ctrlKey,
        metaKey,
        altKey,
        spaceKey: this.keys[" "]
      };
      this.pointer = info;
      return info;
    });
    __publicField(this, "pan", (delta, e) => {
      if (!this.pointer || this.pointer.target !== "wheel") {
        return this.panStart(e);
      }
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      const prev = this.pointer;
      const point = Inputs.getPoint(e, this.bounds);
      const info = __spreadProps(__spreadValues({}, prev), {
        target: "wheel",
        delta,
        point,
        shiftKey,
        ctrlKey,
        metaKey,
        altKey,
        spaceKey: this.keys[" "]
      });
      this.pointer = info;
      return info;
    });
    __publicField(this, "keydown", (e) => {
      var _a, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      this.keys[e.key] = true;
      return {
        point: ((_a = this.pointer) == null ? void 0 : _a.point) || [0, 0],
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        key: e.key,
        keys: Object.keys(this.keys),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey
      };
    });
    __publicField(this, "keyup", (e) => {
      var _a, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      delete this.keys[e.key];
      return {
        point: ((_a = this.pointer) == null ? void 0 : _a.point) || [0, 0],
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        key: e.key,
        keys: Object.keys(this.keys),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey
      };
    });
  }
  pointerIsValid(e) {
    if ("pointerId" in e) {
      if (this.activePointer && this.activePointer !== e.pointerId) {
        return false;
      }
    }
    if ("touches" in e) {
      const touch = e.changedTouches[0];
      if (this.activePointer && this.activePointer !== touch.identifier) {
        return false;
      }
    }
    return true;
  }
  touchStart(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const touch = e.changedTouches[0];
    this.activePointer = touch.identifier;
    const info = {
      target,
      pointerId: touch.identifier,
      origin: Inputs.getPoint(touch, this.bounds),
      delta: [0, 0],
      point: Inputs.getPoint(touch, this.bounds),
      pressure: Inputs.getPressure(touch),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  touchEnd(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const touch = e.changedTouches[0];
    const info = {
      target,
      pointerId: touch.identifier,
      origin: Inputs.getPoint(touch, this.bounds),
      delta: [0, 0],
      point: Inputs.getPoint(touch, this.bounds),
      pressure: Inputs.getPressure(touch),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    this.activePointer = void 0;
    return info;
  }
  touchMove(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const touch = e.changedTouches[0];
    const prev = this.pointer;
    const point = Inputs.getPoint(touch, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec5.sub(point, prev.point) : [0, 0];
    const info = __spreadProps(__spreadValues({
      origin: point
    }, prev), {
      target,
      pointerId: touch.identifier,
      point,
      delta,
      pressure: Inputs.getPressure(touch),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    });
    this.pointer = info;
    return info;
  }
  pointerDown(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const point = Inputs.getPoint(e, this.bounds);
    this.activePointer = e.pointerId;
    const info = {
      target,
      pointerId: e.pointerId,
      origin: point,
      point,
      delta: [0, 0],
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  pointerEnter(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const point = Inputs.getPoint(e, this.bounds);
    const info = {
      target,
      pointerId: e.pointerId,
      origin: point,
      delta: [0, 0],
      point,
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  pointerMove(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const prev = this.pointer;
    const point = Inputs.getPoint(e, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec5.sub(point, prev.point) : [0, 0];
    const info = __spreadProps(__spreadValues({
      origin: point
    }, prev), {
      target,
      pointerId: e.pointerId,
      point,
      delta,
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    });
    this.pointer = info;
    return info;
  }
  pointerUp(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const prev = this.pointer;
    const point = Inputs.getPoint(e, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec5.sub(point, prev.point) : [0, 0];
    this.activePointer = void 0;
    const info = __spreadProps(__spreadValues({
      origin: point
    }, prev), {
      target,
      pointerId: e.pointerId,
      point,
      delta,
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    });
    this.pointer = info;
    this.pointerUpTime = Date.now();
    return info;
  }
  isDoubleClick() {
    if (!this.pointer)
      return false;
    const { origin, point } = this.pointer;
    const isDoubleClick = Date.now() - this.pointerUpTime < DOUBLE_CLICK_DURATION && Vec5.dist(origin, point) < 4;
    if (isDoubleClick)
      this.activePointer = void 0;
    return isDoubleClick;
  }
  clear() {
    this.pointer = void 0;
  }
  resetDoubleClick() {
    this.pointerUpTime = 0;
  }
  pinch(point, origin) {
    const { shiftKey, ctrlKey, metaKey, altKey } = this.keys;
    const delta = Vec5.sub(origin, point);
    const info = {
      pointerId: 0,
      target: "pinch",
      origin,
      delta,
      point: Vec5.sub(Vec5.toFixed(point), [this.bounds.minX, this.bounds.minY]),
      pressure: 0.5,
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  reset() {
    this.pointerUpTime = 0;
    this.pointer = void 0;
    this.keyboard = void 0;
    this.activePointer = void 0;
    this.keys = {};
  }
  static getPoint(e, bounds) {
    return [+e.clientX.toFixed(2) - bounds.minX, +e.clientY.toFixed(2) - bounds.minY];
  }
  static getPressure(e) {
    return "pressure" in e ? +e.pressure.toFixed(2) || 0.5 : 0.5;
  }
  static commandKey() {
    return Utils.isDarwin() ? "\u2318" : "Ctrl";
  }
};
var inputs = new Inputs();

// src/components/UsersIndicators/UsersIndicators.tsx
import {
  Fragment as Fragment7,
  createElement as createElement23
} from "react";
function UsersIndicators({
  userId,
  users,
  meta,
  page
}) {
  const { shapeUtils } = useTLContext();
  return /* @__PURE__ */ createElement23(Fragment7, null, Object.values(users).filter(Boolean).filter((user) => user.id !== userId && user.selectedIds.length > 0).map((user) => {
    const shapes = user.selectedIds.map((id) => page.shapes[id]).filter(Boolean);
    if (shapes.length === 0)
      return null;
    const bounds = utils_default.getCommonBounds(shapes.map((shape) => shapeUtils[shape.type].getBounds(shape)));
    return /* @__PURE__ */ createElement23(Fragment7, {
      key: user.id + "_shapes"
    }, /* @__PURE__ */ createElement23("div", {
      className: "tl-absolute tl-user-indicator-bounds",
      style: {
        backgroundColor: user.color + "0d",
        borderColor: user.color + "78",
        transform: `translate(${bounds.minX}px, ${bounds.minY}px)`,
        width: bounds.width,
        height: bounds.height,
        pointerEvents: "none"
      }
    }), shapes.map((shape) => /* @__PURE__ */ createElement23(ShapeIndicator, {
      key: `${user.id}_${shape.id}_indicator`,
      shape,
      user,
      meta,
      isHovered: true
    })));
  }));
}

// src/components/SnapLines/SnapLines.tsx
import { observer as observer17 } from "mobx-react-lite";
import {
  Fragment as Fragment8,
  createElement as createElement24
} from "react";
var SnapLines = observer17(function SnapLines2({ snapLines }) {
  return /* @__PURE__ */ createElement24(Fragment8, null, snapLines.map((snapLine, i) => /* @__PURE__ */ createElement24(SnapLine, {
    key: i,
    snapLine
  })));
});
var SnapLine = observer17(function SnapLine2({ snapLine }) {
  const bounds = utils_default.getBoundsFromPoints(snapLine);
  return /* @__PURE__ */ createElement24(Fragment8, null, /* @__PURE__ */ createElement24("line", {
    className: "tl-snap-line",
    x1: bounds.minX,
    y1: bounds.minY,
    x2: bounds.maxX,
    y2: bounds.maxY
  }), snapLine.map(([x, y], i) => /* @__PURE__ */ createElement24("use", {
    key: i,
    href: "#tl-snap-point",
    x,
    y
  })));
});

// src/components/Grid/Grid.tsx
import {
  createElement as createElement25
} from "react";
var STEPS = [
  [-1, 0.15, 64],
  [0.05, 0.375, 16],
  [0.15, 1, 4],
  [0.7, 2.5, 1]
];
function Grid({ grid, camera }) {
  return /* @__PURE__ */ createElement25("svg", {
    className: "tl-grid",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ createElement25("defs", null, STEPS.map(([min, mid, size], i) => {
    const s = size * grid * camera.zoom;
    const xo = camera.point[0] * camera.zoom;
    const yo = camera.point[1] * camera.zoom;
    const gxo = xo > 0 ? xo % s : s + xo % s;
    const gyo = yo > 0 ? yo % s : s + yo % s;
    const opacity = camera.zoom < mid ? utils_default.modulate(camera.zoom, [min, mid], [0, 1]) : 1;
    return /* @__PURE__ */ createElement25("pattern", {
      key: `grid-pattern-${i}`,
      id: `grid-${i}`,
      width: s,
      height: s,
      patternUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ createElement25("circle", {
      className: `tl-grid-dot`,
      cx: gxo,
      cy: gyo,
      r: 1,
      opacity
    }));
  })), STEPS.map((_14, i) => /* @__PURE__ */ createElement25("rect", {
    key: `grid-rect-${i}`,
    width: "100%",
    height: "100%",
    fill: `url(#grid-${i})`
  })));
}

// src/components/Overlay/Overlay.tsx
import { observer as observer18 } from "mobx-react-lite";
import {
  createElement as createElement26
} from "react";
var Overlay = observer18(function Overlay2({ camera: { zoom, point }, children }) {
  const l = 2.5 / zoom;
  return /* @__PURE__ */ createElement26("svg", {
    className: "tl-overlay"
  }, /* @__PURE__ */ createElement26("defs", null, /* @__PURE__ */ createElement26("g", {
    id: "tl-snap-point"
  }, /* @__PURE__ */ createElement26("path", {
    className: "tl-snap-point",
    d: `M ${-l},${-l} L ${l},${l} M ${-l},${l} L ${l},${-l}`
  }))), /* @__PURE__ */ createElement26("g", {
    transform: `scale(${zoom}) translate(${point})`
  }, children));
});

// src/components/Canvas/Canvas.tsx
function resetError() {
  void 0;
}
var Canvas = observer19(function _Canvas({
  id,
  page,
  pageState,
  snapLines,
  grid,
  users,
  userId,
  meta,
  externalContainerRef,
  hideHandles,
  hideBounds,
  hideIndicators,
  hideBindingHandles,
  hideCloneHandles,
  hideResizeHandles,
  hideRotateHandle,
  hideGrid,
  onBoundsChange
}) {
  const rCanvas = useRef8(null);
  const rContainer = useRef8(null);
  const rLayer = useRef8(null);
  inputs.zoom = pageState.camera.zoom;
  useResizeObserver(rCanvas, onBoundsChange);
  useZoomEvents(pageState.camera.zoom, externalContainerRef || rCanvas);
  useSafariFocusOutFix();
  usePreventNavigation(rCanvas);
  useCameraCss(rLayer, rContainer, pageState);
  useKeyEvents();
  const events = useCanvasEvents();
  return /* @__PURE__ */ createElement27("div", {
    id,
    className: "tl-container",
    ref: rContainer
  }, /* @__PURE__ */ createElement27("div", __spreadValues({
    id: "canvas",
    className: "tl-absolute tl-canvas",
    ref: rCanvas
  }, events), /* @__PURE__ */ createElement27(ErrorBoundary, {
    FallbackComponent: ErrorFallback,
    onReset: resetError
  }, !hideGrid && grid && /* @__PURE__ */ createElement27(Grid, {
    grid,
    camera: pageState.camera
  }), /* @__PURE__ */ createElement27("div", {
    ref: rLayer,
    className: "tl-absolute tl-layer",
    "data-testid": "layer"
  }, /* @__PURE__ */ createElement27(Page, {
    page,
    pageState,
    hideBounds,
    hideIndicators,
    hideHandles,
    hideBindingHandles,
    hideCloneHandles,
    hideResizeHandles,
    hideRotateHandle,
    meta
  }), users && userId && /* @__PURE__ */ createElement27(UsersIndicators, {
    userId,
    users,
    page,
    meta
  }), pageState.brush && /* @__PURE__ */ createElement27(Brush, {
    brush: pageState.brush
  }), users && /* @__PURE__ */ createElement27(Users, {
    userId,
    users
  }))), /* @__PURE__ */ createElement27(Overlay, {
    camera: pageState.camera
  }, snapLines && /* @__PURE__ */ createElement27(SnapLines, {
    snapLines
  }))));
});

// src/components/Renderer/Renderer.tsx
var Renderer = observer20(function _Renderer(_a) {
  var _b = _a, {
    id = "tl",
    shapeUtils,
    page,
    pageState,
    users,
    userId,
    theme,
    meta,
    snapLines,
    grid,
    containerRef,
    hideHandles = false,
    hideIndicators = false,
    hideCloneHandles = false,
    hideBindingHandles = false,
    hideResizeHandles = false,
    hideRotateHandles = false,
    hideBounds = false,
    hideGrid = true
  } = _b, rest = __objRest(_b, [
    "id",
    "shapeUtils",
    "page",
    "pageState",
    "users",
    "userId",
    "theme",
    "meta",
    "snapLines",
    "grid",
    "containerRef",
    "hideHandles",
    "hideIndicators",
    "hideCloneHandles",
    "hideBindingHandles",
    "hideResizeHandles",
    "hideRotateHandles",
    "hideBounds",
    "hideGrid"
  ]);
  useTLTheme(theme, "#" + id);
  const rSelectionBounds = useRef9(null);
  const rPageState = useRef9(pageState);
  useEffect7(() => {
    rPageState.current = pageState;
  }, [pageState]);
  const [context, setContext] = useState(() => ({
    callbacks: rest,
    shapeUtils,
    rSelectionBounds,
    rPageState,
    bounds: {
      minX: 0,
      minY: 0,
      maxX: Infinity,
      maxY: Infinity,
      width: Infinity,
      height: Infinity
    },
    inputs: new Inputs()
  }));
  const onBoundsChange = useCallback7((bounds) => {
    setContext((context2) => __spreadProps(__spreadValues({}, context2), {
      bounds
    }));
  }, []);
  return /* @__PURE__ */ createElement28(TLContext.Provider, {
    value: context
  }, /* @__PURE__ */ createElement28(Canvas, {
    id,
    page,
    pageState,
    snapLines,
    grid,
    users,
    userId,
    externalContainerRef: containerRef,
    hideBounds,
    hideIndicators,
    hideHandles,
    hideCloneHandles,
    hideBindingHandles,
    hideRotateHandle: hideRotateHandles,
    hideResizeHandles,
    hideGrid,
    onBoundsChange,
    meta
  }));
});

// src/components/HTMLContainer/HTMLContainer.tsx
import { Observer as Observer2 } from "mobx-react-lite";
import {
  createElement as createElement29,
  forwardRef as forwardRef2
} from "react";
var HTMLContainer = forwardRef2(function HTMLContainer2(_a, ref) {
  var _b = _a, { children, className = "" } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ createElement29(Observer2, null, () => /* @__PURE__ */ createElement29("div", __spreadValues({
    ref,
    className: `tl-positioned-div ${className}`
  }, rest), children));
});

// src/TLShapeUtil/TLShapeUtil.tsx
import {
  createRef,
  forwardRef as forwardRef3
} from "react";
import { intersectPolylineBounds } from "@tldraw/intersect";
var TLShapeUtil = class {
  constructor() {
    __publicField(this, "refMap", new Map());
    __publicField(this, "boundsCache", new WeakMap());
    __publicField(this, "showCloneHandles", false);
    __publicField(this, "hideBounds", false);
    __publicField(this, "isStateful", false);
    __publicField(this, "shouldRender", (prev, next) => true);
    __publicField(this, "getRef", (shape) => {
      if (!this.refMap.has(shape.id)) {
        this.refMap.set(shape.id, createRef());
      }
      return this.refMap.get(shape.id);
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      const shapeBounds = this.getBounds(shape);
      const corners = utils_default.getRotatedCorners(shapeBounds, shape.rotation);
      return corners.every((point) => utils_default.pointInBounds(point, bounds)) || intersectPolylineBounds(corners, bounds).length > 0;
    });
    __publicField(this, "getRotatedBounds", (shape) => {
      return utils_default.getBoundsFromPoints(utils_default.getRotatedCorners(this.getBounds(shape), shape.rotation));
    });
  }
};
__publicField(TLShapeUtil, "Component", (component) => {
  return forwardRef3(component);
});
__publicField(TLShapeUtil, "Indicator", (component) => component);
export {
  HTMLContainer,
  Inputs,
  Renderer,
  SVGContainer,
  SnapPoints,
  TLBoundsCorner,
  TLBoundsEdge,
  TLShapeUtil,
  Utils,
  inputs
};
/**
 * String.prototype.replaceAll() polyfill
 * https://gomakethings.com/how-to-replace-a-section-of-a-string-with-another-one-with-vanilla-js/
 * @author Chris Ferdinandi
 * @license MIT
 */
//# sourceMappingURL=index.js.map
