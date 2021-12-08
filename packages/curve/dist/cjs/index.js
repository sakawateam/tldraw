var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  computePointOnCurve: () => computePointOnCurve,
  cubicBezier: () => cubicBezier,
  getCurvePoints: () => getCurvePoints,
  getSpline: () => getSpline,
  getTLBezierCurveSegments: () => getTLBezierCurveSegments,
  simplify: () => simplify
});
function getTLBezierCurveSegments(points, tension = 0.4) {
  const len = points.length;
  const cpoints = [...points];
  if (len < 2) {
    throw Error("Curve must have at least two points.");
  }
  for (let i = 1; i < len - 1; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const pdx = p2[0] - p0[0];
    const pdy = p2[1] - p0[1];
    const pd = Math.hypot(pdx, pdy);
    const nx = pdx / pd;
    const ny = pdy / pd;
    const dp = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
    const dn = Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
    cpoints[i] = [
      p1[0] - nx * dp * tension,
      p1[1] - ny * dp * tension,
      p1[0] + nx * dn * tension,
      p1[1] + ny * dn * tension,
      nx,
      ny
    ];
  }
  const d0 = Math.hypot(points[0][0] + cpoints[1][0]);
  cpoints[0][2] = (points[0][0] + cpoints[1][0]) / 2;
  cpoints[0][3] = (points[0][1] + cpoints[1][1]) / 2;
  cpoints[0][4] = (cpoints[1][0] - points[0][0]) / d0;
  cpoints[0][5] = (cpoints[1][1] - points[0][1]) / d0;
  const d1 = Math.hypot(points[len - 1][1] + cpoints[len - 1][1]);
  cpoints[len - 1][0] = (points[len - 1][0] + cpoints[len - 2][2]) / 2;
  cpoints[len - 1][1] = (points[len - 1][1] + cpoints[len - 2][3]) / 2;
  cpoints[len - 1][4] = (cpoints[len - 2][2] - points[len - 1][0]) / -d1;
  cpoints[len - 1][5] = (cpoints[len - 2][3] - points[len - 1][1]) / -d1;
  const results = [];
  for (let i = 1; i < cpoints.length; i++) {
    results.push({
      start: points[i - 1].slice(0, 2),
      tangentStart: cpoints[i - 1].slice(2, 4),
      normalStart: cpoints[i - 1].slice(4, 6),
      pressureStart: 2 + ((i - 1) % 2 === 0 ? 1.5 : 0),
      end: points[i].slice(0, 2),
      tangentEnd: cpoints[i].slice(0, 2),
      normalEnd: cpoints[i].slice(4, 6),
      pressureEnd: 2 + (i % 2 === 0 ? 1.5 : 0)
    });
  }
  return results;
}
function computePointOnCurve(t, points) {
  if (t === 0) {
    return points[0];
  }
  const order = points.length - 1;
  if (t === 1) {
    return points[order];
  }
  const mt = 1 - t;
  let p = points;
  if (order === 0) {
    return points[0];
  }
  if (order === 1) {
    return [mt * p[0][0] + t * p[1][0], mt * p[0][1] + t * p[1][1]];
  }
  const mt2 = mt * mt;
  const t2 = t * t;
  let a;
  let b;
  let c;
  let d = 0;
  if (order === 2) {
    p = [p[0], p[1], p[2], [0, 0]];
    a = mt2;
    b = mt * t * 2;
    c = t2;
  } else {
    a = mt2 * mt;
    b = mt2 * t * 3;
    c = mt * t2 * 3;
    d = t * t2;
  }
  return [
    a * p[0][0] + b * p[1][0] + c * p[2][0] + d * p[3][0],
    a * p[0][1] + b * p[1][1] + c * p[2][1] + d * p[3][1]
  ];
}
function cubicBezier(tx, x1, y1, x2, y2) {
  const x0 = 0;
  const y0 = 0;
  const x3 = 1;
  const y3 = 1;
  const A = x3 - 3 * x2 + 3 * x1 - x0;
  const B = 3 * x2 - 6 * x1 + 3 * x0;
  const C = 3 * x1 - 3 * x0;
  const D = x0;
  const E = y3 - 3 * y2 + 3 * y1 - y0;
  const F = 3 * y2 - 6 * y1 + 3 * y0;
  const G = 3 * y1 - 3 * y0;
  const H = y0;
  const iterations = 5;
  let i;
  let slope;
  let x;
  let t = tx;
  for (i = 0; i < iterations; i++) {
    x = A * t * t * t + B * t * t + C * t + D;
    slope = 1 / (3 * A * t * t + 2 * B * t + C);
    t -= (x - tx) * slope;
    t = t > 1 ? 1 : t < 0 ? 0 : t;
  }
  return Math.abs(E * t * t * t + F * t * t + G * t * H);
}
function getSpline(pts, k = 0.5) {
  let p0;
  let [p1, p2, p3] = pts;
  const results = [];
  for (let i = 1, len = pts.length; i < len; i++) {
    p0 = p1;
    p1 = p2;
    p2 = p3;
    p3 = pts[i + 2] ? pts[i + 2] : p2;
    results.push({
      cp1x: p1[0] + (p2[0] - p0[0]) / 6 * k,
      cp1y: p1[1] + (p2[1] - p0[1]) / 6 * k,
      cp2x: p2[0] - (p3[0] - p1[0]) / 6 * k,
      cp2y: p2[1] - (p3[1] - p1[1]) / 6 * k,
      px: pts[i][0],
      py: pts[i][1]
    });
  }
  return results;
}
function getCurvePoints(pts, tension = 0.5, isClosed = false, numOfSegments = 3) {
  const _pts = [...pts];
  const len = pts.length;
  const res = [];
  let t1x, t2x, t1y, t2y, c1, c2, c3, c4, st, st2, st3;
  if (isClosed) {
    _pts.unshift(_pts[len - 1]);
    _pts.push(_pts[0]);
  } else {
    _pts.unshift(_pts[0]);
    _pts.push(_pts[len - 1]);
  }
  for (let i = 1; i < _pts.length - 2; i++) {
    for (let t = 0; t <= numOfSegments; t++) {
      st = t / numOfSegments;
      st2 = Math.pow(st, 2);
      st3 = Math.pow(st, 3);
      c1 = 2 * st3 - 3 * st2 + 1;
      c2 = -(2 * st3) + 3 * st2;
      c3 = st3 - 2 * st2 + st;
      c4 = st3 - st2;
      t1x = (_pts[i + 1][0] - _pts[i - 1][0]) * tension;
      t2x = (_pts[i + 2][0] - _pts[i][0]) * tension;
      t1y = (_pts[i + 1][1] - _pts[i - 1][1]) * tension;
      t2y = (_pts[i + 2][1] - _pts[i][1]) * tension;
      res.push([
        c1 * _pts[i][0] + c2 * _pts[i + 1][0] + c3 * t1x + c4 * t2x,
        c1 * _pts[i][1] + c2 * _pts[i + 1][1] + c3 * t1y + c4 * t2y
      ]);
    }
  }
  res.push(pts[pts.length - 1]);
  return res;
}
function simplify(points, tolerance = 1) {
  const len = points.length;
  const a = points[0];
  const b = points[len - 1];
  const [x1, y1] = a;
  const [x2, y2] = b;
  if (len > 2) {
    let distance = 0;
    let index = 0;
    const max = Math.hypot(y2 - y1, x2 - x1);
    for (let i = 1; i < len - 1; i++) {
      const [x0, y0] = points[i];
      const d = Math.abs((y2 - y1) * x0 - (x2 - x1) * y0 + x2 * y1 - y2 * x1) / max;
      if (distance > d)
        continue;
      distance = d;
      index = i;
    }
    if (distance > tolerance) {
      const l0 = simplify(points.slice(0, index + 1), tolerance);
      const l1 = simplify(points.slice(index + 1), tolerance);
      return l0.concat(l1.slice(1));
    }
  }
  return [a, b];
}
//# sourceMappingURL=index.js.map
