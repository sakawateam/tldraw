var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/state/data/browser-fs-access/index.js
var require_browser_fs_access = __commonJS({
  "src/state/data/browser-fs-access/index.js"(exports) {
    var w = Object.defineProperty;
    var q = (e) => w(e, "__esModule", { value: true });
    var u = (e, t2) => () => e && (t2 = e(e = 0));
    var p = (e, t2) => {
      q(e);
      for (var i in t2)
        w(e, i, { get: t2[i], enumerable: true });
    };
    var r = (e, t2, i) => new Promise((d, a) => {
      var l = (s) => {
        try {
          n(i.next(s));
        } catch (o) {
          a(o);
        }
      }, c = (s) => {
        try {
          n(i.throw(s));
        } catch (o) {
          a(o);
        }
      }, n = (s) => s.done ? d(s.value) : Promise.resolve(s.value).then(l, c);
      n((i = i.apply(e, t2)).next());
    });
    var y = {};
    p(y, { default: () => z });
    var z;
    var v = u(() => {
      z = (...t2) => r(void 0, [...t2], function* (e = {}) {
        return new Promise((i, d) => {
          let a = document.createElement("input");
          a.type = "file";
          let l = [...e.mimeTypes ? e.mimeTypes : [], e.extensions ? e.extensions : []].join();
          a.multiple = e.multiple || false, a.accept = l || "";
          let c, n = () => c(d);
          e.setupLegacyCleanupAndRejection ? c = e.setupLegacyCleanupAndRejection(n) : (c = (s) => {
            window.removeEventListener("pointermove", n), window.removeEventListener("pointerdown", n), window.removeEventListener("keydown", n), s && s(new DOMException("The user aborted a request.", "AbortError"));
          }, window.addEventListener("pointermove", n), window.addEventListener("pointerdown", n), window.addEventListener("keydown", n)), a.addEventListener("change", () => {
            c(), i(a.multiple ? Array.from(a.files) : a.files[0]);
          }), a.click();
        });
      });
    });
    var E = {};
    p(E, { default: () => B });
    var h;
    var B;
    var j = u(() => {
      ;
      h = (e) => r(void 0, null, function* () {
        let t2 = yield e.getFile();
        return t2.handle = e, t2;
      }), B = (...t2) => r(void 0, [...t2], function* (e = {}) {
        let i = yield window.chooseFileSystemEntries({
          accepts: [
            {
              description: e.description || "",
              mimeTypes: e.mimeTypes || ["*/*"],
              extensions: e.extensions || [""]
            }
          ],
          multiple: e.multiple || false
        });
        return e.multiple ? Promise.all(i.map(h)) : h(i);
      });
    });
    var g = {};
    p(g, { default: () => I });
    var G;
    var I;
    var x = u(() => {
      ;
      G = (e) => r(void 0, null, function* () {
        let t2 = yield e.getFile();
        return t2.handle = e, t2;
      }), I = (...t2) => r(void 0, [...t2], function* (e = {}) {
        let i = {};
        e.mimeTypes ? e.mimeTypes.map((l) => {
          i[l] = e.extensions || [];
        }) : i["*/*"] = e.extensions || [];
        let d = yield window.showOpenFilePicker({
          types: [{ description: e.description || "", accept: i }],
          multiple: e.multiple || false
        }), a = yield Promise.all(d.map(G));
        return e.multiple ? a : a[0];
      });
    });
    var F = {};
    p(F, { default: () => K });
    var K;
    var k = u(() => {
      K = (...t2) => r(void 0, [...t2], function* (e = {}) {
        return e.recursive = e.recursive || false, new Promise((i, d) => {
          let a = document.createElement("input");
          a.type = "file", a.webkitdirectory = true;
          let l, c = () => l(d);
          e.setupLegacyCleanupAndRejection ? l = e.setupLegacyCleanupAndRejection(c) : (l = (n) => {
            window.removeEventListener("pointermove", c), window.removeEventListener("pointerdown", c), window.removeEventListener("keydown", c), n && n(new DOMException("The user aborted a request.", "AbortError"));
          }, window.addEventListener("pointermove", c), window.addEventListener("pointerdown", c), window.addEventListener("keydown", c)), a.addEventListener("change", () => {
            l();
            let n = Array.from(a.files);
            e.recursive || (n = n.filter((s) => s.webkitRelativePath.split("/").length === 2)), i(n);
          }), a.click();
        });
      });
    });
    var b = {};
    p(b, { default: () => Q });
    var P;
    var Q;
    var O = u(() => {
      ;
      P = (d, a, ...l) => r(void 0, [d, a, ...l], function* (e, t2, i = e.name) {
        let c = [], n = [];
        for (let s of e.getEntries()) {
          let o = `${i}/${s.name}`;
          s.isFile ? n.push(yield s.getFile().then((f) => (f.directoryHandle = e, Object.defineProperty(f, "webkitRelativePath", {
            configurable: true,
            enumerable: true,
            get: () => o
          })))) : s.isDirectory && t2 && c.push(yield P(s, t2, o));
        }
        return [...(yield Promise.all(c)).flat(), ...yield Promise.all(n)];
      }), Q = (...t2) => r(void 0, [...t2], function* (e = {}) {
        e.recursive = e.recursive || false;
        let i = yield window.chooseFileSystemEntries({ type: "open-directory" });
        return P(i, e.recursive);
      });
    });
    var T = {};
    p(T, { default: () => V });
    var R;
    var V;
    var S = u(() => {
      ;
      R = (d, a, ...l) => r(void 0, [d, a, ...l], function* (e, t2, i = e.name) {
        let c = [], n = [];
        for (let s of e.values()) {
          let o = `${i}/${s.name}`;
          s.kind === "file" ? n.push(yield s.getFile().then((f) => (f.directoryHandle = e, Object.defineProperty(f, "webkitRelativePath", {
            configurable: true,
            enumerable: true,
            get: () => o
          })))) : s.kind === "directory" && t2 && c.push(yield R(s, t2, o));
        }
        return [...(yield Promise.all(c)).flat(), ...yield Promise.all(n)];
      }), V = (...t2) => r(void 0, [...t2], function* (e = {}) {
        e.recursive = e.recursive || false;
        let i = yield window.showDirectoryPicker();
        return R(i, e.recursive);
      });
    });
    var N = {};
    p(N, { default: () => Y });
    var Y;
    var U = u(() => {
      Y = (i, ...d) => r(void 0, [i, ...d], function* (e, t2 = {}) {
        let a = document.createElement("a");
        a.download = t2.fileName || "Untitled", a.href = URL.createObjectURL(e), a.addEventListener("click", () => {
          setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1e3);
        }), a.click();
      });
    });
    var C = {};
    p(C, { default: () => Z });
    var Z;
    var D = u(() => {
      Z = (d, ...a) => r(void 0, [d, ...a], function* (e, t2 = {}, i = null) {
        ;
        t2.fileName = t2.fileName || "Untitled", i = i || (yield window.chooseFileSystemEntries({
          type: "save-file",
          accepts: [
            {
              description: t2.description || "",
              mimeTypes: [e.type],
              extensions: t2.extensions || [""]
            }
          ]
        }));
        let l = yield i.createWritable();
        return yield l.write(e), yield l.close(), i;
      });
    });
    var M = {};
    p(M, { default: () => _ });
    var _;
    var W = u(() => {
      _ = (a, ...l) => r(void 0, [a, ...l], function* (e, t2 = {}, i = null, d = false) {
        t2.fileName = t2.fileName || "Untitled";
        let c = {};
        if (t2.mimeTypes ? (t2.mimeTypes.push(e.type), t2.mimeTypes.map((o) => {
          c[o] = t2.extensions || [];
        })) : c[e.type] = t2.extensions || [], i)
          try {
            yield i.getFile();
          } catch (o) {
            if (i = null, d)
              throw o;
          }
        let n = i || (yield window.showSaveFilePicker({
          suggestedName: t2.fileName,
          types: [{ description: t2.description || "", accept: c }]
        })), s = yield n.createWritable();
        return yield s.write(e), yield s.close(), n;
      });
    });
    p(exports, { directoryOpen: () => A, fileOpen: () => L, fileSave: () => $, supported: () => m });
    var H = (() => {
      if ("top" in self && self !== top)
        try {
          top.location + "";
        } catch (e) {
          return false;
        }
      else {
        if ("chooseFileSystemEntries" in self)
          return "chooseFileSystemEntries";
        if ("showOpenFilePicker" in self)
          return "showOpenFilePicker";
      }
      return false;
    })();
    var m = H;
    var J = m ? m === "chooseFileSystemEntries" ? Promise.resolve().then(() => (j(), E)) : Promise.resolve().then(() => (x(), g)) : Promise.resolve().then(() => (v(), y));
    function L(...e) {
      return r(this, null, function* () {
        return (yield J).default(...e);
      });
    }
    var X = m ? m === "chooseFileSystemEntries" ? Promise.resolve().then(() => (O(), b)) : Promise.resolve().then(() => (S(), T)) : Promise.resolve().then(() => (k(), F));
    function A(...e) {
      return r(this, null, function* () {
        return (yield X).default(...e);
      });
    }
    var ee = m ? m === "chooseFileSystemEntries" ? Promise.resolve().then(() => (D(), C)) : Promise.resolve().then(() => (W(), M)) : Promise.resolve().then(() => (U(), N));
    function $(...e) {
      return r(this, null, function* () {
        return (yield ee).default(...e);
      });
    }
  }
});

// src/index.ts
__export(exports, {
  AlignStyle: () => AlignStyle,
  AlignType: () => AlignType,
  Arrow: () => Arrow,
  BINDING_DISTANCE: () => BINDING_DISTANCE,
  ColorStyle: () => ColorStyle,
  ContextMenu: () => ContextMenu,
  DashStyle: () => DashStyle,
  Decoration: () => Decoration,
  DistributeType: () => DistributeType,
  Draw: () => Draw,
  Ellipse: () => Ellipse,
  FlipType: () => FlipType,
  FocusButton: () => FocusButton,
  FontSize: () => FontSize,
  FontStyle: () => FontStyle,
  GHOSTED_OPACITY: () => GHOSTED_OPACITY,
  GRID_SIZE: () => GRID_SIZE,
  Group: () => Group,
  MoveType: () => MoveType,
  Rectangle: () => Rectangle,
  SessionType: () => SessionType,
  SizeStyle: () => SizeStyle,
  Sticky: () => Sticky,
  StretchType: () => StretchType,
  TDEventHandler: () => TDEventHandler,
  TDShapeType: () => TDShapeType,
  TDStatus: () => TDStatus,
  TDUserStatus: () => TDUserStatus,
  TLDR: () => TLDR,
  Text: () => Text,
  TextAreaUtils: () => TextAreaUtils,
  Tldraw: () => Tldraw,
  TldrawApp: () => TldrawApp,
  TldrawContext: () => TldrawContext,
  ToolsPanel: () => ToolsPanel,
  TopPanel: () => TopPanel,
  dark: () => dark,
  defaultStyle: () => defaultStyle,
  defaultTextStyle: () => defaultTextStyle,
  fills: () => fills,
  getBoundsRectangle: () => getBoundsRectangle,
  getFontFace: () => getFontFace,
  getFontSize: () => getFontSize,
  getFontStyle: () => getFontStyle,
  getShapeStyle: () => getShapeStyle,
  getShapeUtil: () => getShapeUtil,
  getStickyFontSize: () => getStickyFontSize,
  getStickyFontStyle: () => getStickyFontStyle,
  getStickyShapeStyle: () => getStickyShapeStyle,
  getStrokeWidth: () => getStrokeWidth,
  shapeUtils: () => shapeUtils,
  stickyFills: () => stickyFills,
  strokes: () => strokes,
  styled: () => styled,
  transformRectangle: () => transformRectangle,
  transformSingleRectangle: () => transformSingleRectangle,
  useFileSystem: () => useFileSystem,
  useKeyboardShortcuts: () => useKeyboardShortcuts,
  useStylesheet: () => useStylesheet,
  useTldrawApp: () => useTldrawApp
});

// src/Tldraw.tsx
var React58 = __toModule(require("react"));
var import_react_id = __toModule(require("@radix-ui/react-id"));
var import_core44 = __toModule(require("@tldraw/core"));

// src/styles/stitches.config.ts
var import_react = __toModule(require("@stitches/react"));
var { styled, createTheme } = (0, import_react.createStitches)({
  themeMap: __spreadValues({}, import_react.defaultThemeMap),
  theme: {
    colors: {
      bounds: "rgba(65, 132, 244, 1.000)",
      boundsBg: "rgba(65, 132, 244, 0.05)",
      hover: "#ececec",
      overlay: "rgba(0, 0, 0, 0.15)",
      overlayContrast: "rgba(255, 255, 255, 0.15)",
      panel: "#fefefe",
      panelContrast: "#ffffff",
      selected: "rgba(66, 133, 244, 1.000)",
      selectedContrast: "#fefefe",
      sponsor: "#ec6cb9",
      sponsorContrast: "#ec6cb944",
      text: "#333333",
      tooltip: "#1d1d1d",
      tooltipContrast: "#ffffff",
      warn: "rgba(255, 100, 100, 1)"
    },
    shadows: {
      2: "0px 1px 1px rgba(0, 0, 0, 0.14)",
      3: "0px 2px 3px rgba(0, 0, 0, 0.14)",
      4: "0px 4px 5px -1px rgba(0, 0, 0, 0.14)",
      8: "0px 12px 17px rgba(0, 0, 0, 0.14)",
      12: "0px 12px 17px rgba(0, 0, 0, 0.14)",
      24: "0px 24px 38px rgba(0, 0, 0, 0.14)",
      key: "1px 1px rgba(0,0,0,1)",
      panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05), 
        0px 0px 16px -8px rgba(0, 0, 0, 0.05), 
        0px 0px 16px -12px rgba(0, 0, 0, 0.12),
        0px 0px 2px 0px rgba(0, 0, 0, 0.08)`
    },
    space: {
      0: "2px",
      1: "3px",
      2: "4px",
      3: "8px",
      4: "12px",
      5: "16px"
    },
    fontSizes: {
      0: "10px",
      1: "12px",
      2: "13px",
      3: "16px",
      4: "18px"
    },
    fonts: {
      ui: '"Recursive", system-ui, sans-serif',
      body: '"Recursive", system-ui, sans-serif',
      mono: '"Recursive Mono", monospace'
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {
      0: "$1"
    },
    borderStyles: {},
    radii: {
      0: "2px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px"
    },
    zIndices: {},
    transitions: {}
  },
  media: {
    micro: "(max-width: 370px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)"
  },
  utils: {
    zStrokeWidth: () => (value) => {
      if (Array.isArray(value)) {
        return {
          strokeWidth: `calc(${value[0]}px / var(--camera-zoom))`
        };
      }
      return {
        strokeWidth: `calc(${value}px / var(--camera-zoom))`
      };
    }
  }
});
var dark = createTheme({
  colors: {
    bounds: "rgba(38, 150, 255, 1.000)",
    boundsBg: "rgba(38, 150, 255, 0.05)",
    hover: "#444A50",
    overlay: "rgba(0, 0, 0, 0.15)",
    overlayContrast: "rgba(255, 255, 255, 0.15)",
    panel: "#363D44",
    panelContrast: "#49555f",
    selected: "rgba(38, 150, 255, 1.000)",
    selectedContrast: "#fefefe",
    text: "#f8f9fa",
    tooltip: "#1d1d1d",
    tooltipContrast: "#ffffff"
  },
  shadows: {
    2: "0px 1px 1px rgba(0, 0, 0, 0.24)",
    3: "0px 2px 3px rgba(0, 0, 0, 0.24)",
    4: "0px 4px 5px -1px rgba(0, 0, 0, 0.24)",
    8: "0px 12px 17px rgba(0, 0, 0, 0.24)",
    12: "0px 12px 17px rgba(0, 0, 0, 0.24)",
    24: "0px 24px 38px rgba(0, 0, 0, 0.24)",
    panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05), 
      0px 0px 16px -8px rgba(0, 0, 0, 0.09), 
      0px 0px 16px -12px rgba(0, 0, 0, 0.2)`
  }
});

// src/types.ts
var TDEventHandler = class {
};
var TDUserStatus;
(function(TDUserStatus2) {
  TDUserStatus2["Idle"] = "idle";
  TDUserStatus2["Connecting"] = "connecting";
  TDUserStatus2["Connected"] = "connected";
  TDUserStatus2["Disconnected"] = "disconnected";
})(TDUserStatus || (TDUserStatus = {}));
var SessionType;
(function(SessionType2) {
  SessionType2["Transform"] = "transform";
  SessionType2["Translate"] = "translate";
  SessionType2["TransformSingle"] = "transformSingle";
  SessionType2["Brush"] = "brush";
  SessionType2["Arrow"] = "arrow";
  SessionType2["Draw"] = "draw";
  SessionType2["Erase"] = "erase";
  SessionType2["Rotate"] = "rotate";
  SessionType2["Handle"] = "handle";
  SessionType2["Grid"] = "grid";
})(SessionType || (SessionType = {}));
var TDStatus;
(function(TDStatus2) {
  TDStatus2["Idle"] = "idle";
  TDStatus2["PointingHandle"] = "pointingHandle";
  TDStatus2["PointingBounds"] = "pointingBounds";
  TDStatus2["PointingBoundsHandle"] = "pointingBoundsHandle";
  TDStatus2["TranslatingHandle"] = "translatingHandle";
  TDStatus2["Translating"] = "translating";
  TDStatus2["Transforming"] = "transforming";
  TDStatus2["Rotating"] = "rotating";
  TDStatus2["Pinching"] = "pinching";
  TDStatus2["Brushing"] = "brushing";
  TDStatus2["Creating"] = "creating";
  TDStatus2["EditingText"] = "editing-text";
})(TDStatus || (TDStatus = {}));
var MoveType;
(function(MoveType2) {
  MoveType2["Backward"] = "backward";
  MoveType2["Forward"] = "forward";
  MoveType2["ToFront"] = "toFront";
  MoveType2["ToBack"] = "toBack";
})(MoveType || (MoveType = {}));
var AlignType;
(function(AlignType3) {
  AlignType3["Top"] = "top";
  AlignType3["CenterVertical"] = "centerVertical";
  AlignType3["Bottom"] = "bottom";
  AlignType3["Left"] = "left";
  AlignType3["CenterHorizontal"] = "centerHorizontal";
  AlignType3["Right"] = "right";
})(AlignType || (AlignType = {}));
var StretchType;
(function(StretchType3) {
  StretchType3["Horizontal"] = "horizontal";
  StretchType3["Vertical"] = "vertical";
})(StretchType || (StretchType = {}));
var DistributeType;
(function(DistributeType3) {
  DistributeType3["Horizontal"] = "horizontal";
  DistributeType3["Vertical"] = "vertical";
})(DistributeType || (DistributeType = {}));
var FlipType;
(function(FlipType2) {
  FlipType2["Horizontal"] = "horizontal";
  FlipType2["Vertical"] = "vertical";
})(FlipType || (FlipType = {}));
var TDShapeType;
(function(TDShapeType2) {
  TDShapeType2["Sticky"] = "sticky";
  TDShapeType2["Ellipse"] = "ellipse";
  TDShapeType2["Rectangle"] = "rectangle";
  TDShapeType2["Draw"] = "draw";
  TDShapeType2["Arrow"] = "arrow";
  TDShapeType2["Line"] = "line";
  TDShapeType2["Text"] = "text";
  TDShapeType2["Group"] = "group";
})(TDShapeType || (TDShapeType = {}));
var Decoration;
(function(Decoration2) {
  Decoration2["Arrow"] = "arrow";
})(Decoration || (Decoration = {}));
var ColorStyle;
(function(ColorStyle3) {
  ColorStyle3["White"] = "white";
  ColorStyle3["LightGray"] = "lightGray";
  ColorStyle3["Gray"] = "gray";
  ColorStyle3["Black"] = "black";
  ColorStyle3["Green"] = "green";
  ColorStyle3["Cyan"] = "cyan";
  ColorStyle3["Blue"] = "blue";
  ColorStyle3["Indigo"] = "indigo";
  ColorStyle3["Violet"] = "violet";
  ColorStyle3["Red"] = "red";
  ColorStyle3["Orange"] = "orange";
  ColorStyle3["Yellow"] = "yellow";
})(ColorStyle || (ColorStyle = {}));
var SizeStyle;
(function(SizeStyle2) {
  SizeStyle2["Small"] = "small";
  SizeStyle2["Medium"] = "medium";
  SizeStyle2["Large"] = "large";
})(SizeStyle || (SizeStyle = {}));
var DashStyle;
(function(DashStyle2) {
  DashStyle2["Draw"] = "draw";
  DashStyle2["Solid"] = "solid";
  DashStyle2["Dashed"] = "dashed";
  DashStyle2["Dotted"] = "dotted";
})(DashStyle || (DashStyle = {}));
var FontSize;
(function(FontSize2) {
  FontSize2["Small"] = "small";
  FontSize2["Medium"] = "medium";
  FontSize2["Large"] = "large";
  FontSize2["ExtraLarge"] = "extraLarge";
})(FontSize || (FontSize = {}));
var AlignStyle;
(function(AlignStyle2) {
  AlignStyle2["Start"] = "start";
  AlignStyle2["Middle"] = "middle";
  AlignStyle2["End"] = "end";
  AlignStyle2["Justify"] = "justify";
})(AlignStyle || (AlignStyle = {}));
var FontStyle;
(function(FontStyle2) {
  FontStyle2["Script"] = "script";
  FontStyle2["Sans"] = "sans";
  FontStyle2["Serif"] = "erif";
  FontStyle2["Mono"] = "mono";
})(FontStyle || (FontStyle = {}));

// src/state/TldrawApp.ts
var import_vec36 = __toModule(require("@tldraw/vec"));
var import_core42 = __toModule(require("@tldraw/core"));

// src/state/data/index.ts
var data_exports = {};
__export(data_exports, {
  loadFileHandle: () => loadFileHandle,
  migrate: () => migrate,
  openFromFileSystem: () => openFromFileSystem,
  saveFileHandle: () => saveFileHandle,
  saveToFileSystem: () => saveToFileSystem
});

// src/state/data/migrate.ts
function migrate(document2, newVersion) {
  const { version = 0 } = document2;
  if (version === newVersion)
    return document2;
  if (version < 14) {
    Object.values(document2.pages).forEach((page) => {
      Object.values(page.shapes).filter((shape) => shape.type === TDShapeType.Text).forEach((shape) => shape.style.font === FontStyle.Script);
    });
  }
  if (version <= 13) {
    Object.values(document2.pages).forEach((page) => {
      Object.values(page.bindings).forEach((binding) => {
        Object.assign(binding, binding.meta);
      });
      Object.values(page.shapes).forEach((shape) => {
        Object.entries(shape.style).forEach(([id, style]) => {
          if (typeof style === "string") {
            shape.style[id] = style.toLowerCase();
          }
        });
        if (shape.type === TDShapeType.Arrow) {
          if (shape.decorations) {
            Object.entries(shape.decorations).forEach(([id, decoration]) => {
              if (decoration === "Arrow") {
                shape.decorations = __spreadProps(__spreadValues({}, shape.decorations), {
                  [id]: Decoration.Arrow
                });
              }
            });
          }
        }
      });
    });
  }
  if (version <= 13.1) {
    document2.name = "New Document";
  }
  Object.values(document2.pageStates).forEach((pageState) => {
    pageState.selectedIds = pageState.selectedIds.filter((id) => {
      return document2.pages[pageState.id].shapes[id] !== void 0;
    });
    pageState.bindingId = void 0;
    pageState.editingId = void 0;
    pageState.hoveredId = void 0;
    pageState.pointedId = void 0;
  });
  document2.version = newVersion;
  return document2;
}

// src/state/data/filesystem.ts
var import_browser_fs_access = __toModule(require_browser_fs_access());
var import_idb_keyval = __toModule(require("idb-keyval"));
var options = { mode: "readwrite" };
var checkPermissions = (handle) => __async(void 0, null, function* () {
  return (yield handle.queryPermission(options)) === "granted" || (yield handle.requestPermission(options)) === "granted";
});
function loadFileHandle() {
  return __async(this, null, function* () {
    const fileHandle = yield (0, import_idb_keyval.get)(`Tldraw_file_handle_${window.location.origin}`);
    if (!fileHandle)
      return null;
    return fileHandle;
  });
}
function saveFileHandle(fileHandle) {
  return __async(this, null, function* () {
    return (0, import_idb_keyval.set)(`Tldraw_file_handle_${window.location.origin}`, fileHandle);
  });
}
function saveToFileSystem(document2, fileHandle) {
  return __async(this, null, function* () {
    const file = {
      name: document2.name || "New Document",
      fileHandle: fileHandle != null ? fileHandle : null,
      document: document2,
      assets: {}
    };
    const json = JSON.stringify(file, null, 2);
    const blob = new Blob([json], {
      type: "application/vnd.Tldraw+json"
    });
    if (fileHandle) {
      const hasPermissions = yield checkPermissions(fileHandle);
      if (!hasPermissions)
        return null;
    }
    const newFileHandle = yield (0, import_browser_fs_access.fileSave)(blob, {
      fileName: `${file.name}.tldr`,
      description: "Tldraw File",
      extensions: [`.tldr`]
    }, fileHandle);
    yield saveFileHandle(newFileHandle);
    return newFileHandle;
  });
}
function openFromFileSystem() {
  return __async(this, null, function* () {
    var _a;
    const blob = yield (0, import_browser_fs_access.fileOpen)({
      description: "Tldraw File",
      extensions: [`.tldr`],
      multiple: false
    });
    if (!blob)
      return null;
    const json = yield new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState === FileReader.DONE) {
          resolve(reader.result);
        }
      };
      reader.readAsText(blob, "utf8");
    });
    const file = JSON.parse(json);
    const fileHandle = (_a = blob.handle) != null ? _a : null;
    yield saveFileHandle(fileHandle);
    return {
      fileHandle,
      document: file.document
    };
  });
}

// src/state/data/index.ts
__reExport(data_exports, __toModule(require_browser_fs_access()));

// src/state/TLDR.ts
var import_core14 = __toModule(require("@tldraw/core"));
var import_vec12 = __toModule(require("@tldraw/vec"));

// src/state/shapes/RectangleUtil/RectangleUtil.tsx
var React2 = __toModule(require("react"));
var import_core4 = __toModule(require("@tldraw/core"));
var import_vec4 = __toModule(require("@tldraw/vec"));
var import_perfect_freehand = __toModule(require("perfect-freehand"));

// src/constants.ts
var GRID_SIZE = 8;
var BINDING_DISTANCE = 24;
var CLONING_DISTANCE = 32;
var FIT_TO_SCREEN_PADDING = 128;
var SNAP_DISTANCE = 5;
var SLOW_SPEED = 10;
var GHOSTED_OPACITY = 0.3;
var DEAD_ZONE = 3;
var PI2 = Math.PI * 2;
var EASINGS = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => --t * t * t + 1,
  easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => 1 - --t * t * t * t,
  easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  easeInQuint: (t) => t * t * t * t * t,
  easeOutQuint: (t) => 1 + --t * t * t * t * t,
  easeInOutQuint: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
  easeInSine: (t) => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: (t) => Math.sin(t * Math.PI / 2),
  easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  easeInExpo: (t) => t <= 0 ? 0 : Math.pow(2, 10 * t - 10),
  easeOutExpo: (t) => t >= 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: (t) => t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2
};
var USER_COLORS = [
  "#EC5E41",
  "#F2555A",
  "#F04F88",
  "#E34BA9",
  "#BD54C6",
  "#9D5BD2",
  "#7B66DC",
  "#02B1CC",
  "#11B3A3",
  "#39B178",
  "#55B467",
  "#FF802B"
];

// src/state/shapes/TDShapeUtil.tsx
var import_core = __toModule(require("@tldraw/core"));
var import_intersect = __toModule(require("@tldraw/intersect"));
var import_vec = __toModule(require("@tldraw/vec"));
var React = __toModule(require("react"));
var TDShapeUtil = class extends import_core.TLShapeUtil {
  constructor() {
    super(...arguments);
    this.canBind = false;
    this.canEdit = false;
    this.canClone = false;
    this.isAspectRatioLocked = false;
    this.hideResizeHandles = false;
    this.hitTestPoint = (shape, point) => {
      return import_core.Utils.pointInBounds(point, this.getRotatedBounds(shape));
    };
    this.hitTestLineSegment = (shape, A, B) => {
      const box = import_core.Utils.getBoundsFromPoints([A, B]);
      const bounds = this.getBounds(shape);
      return import_core.Utils.boundsContain(bounds, box) || shape.rotation ? (0, import_intersect.intersectLineSegmentPolyline)(A, B, import_core.Utils.getRotatedCorners(this.getBounds(shape))).didIntersect : (0, import_intersect.intersectLineSegmentBounds)(A, B, this.getBounds(shape)).length > 0;
    };
    this.create = (props) => {
      this.refMap.set(props.id, React.createRef());
      return this.getShape(props);
    };
    this.getCenter = (shape) => {
      return import_core.Utils.getBoundsCenter(this.getBounds(shape));
    };
    this.getBindingPoint = (shape, fromShape, point, origin, direction, padding, bindAnywhere) => {
      let bindingPoint;
      let distance;
      const bounds = this.getBounds(shape);
      const expandedBounds = import_core.Utils.expandBounds(bounds, padding);
      if (!import_core.Utils.pointInBounds(point, expandedBounds))
        return;
      if (bindAnywhere) {
        if (import_vec.Vec.dist(point, this.getCenter(shape)) < 12) {
          bindingPoint = [0.5, 0.5];
        } else {
          bindingPoint = import_vec.Vec.divV(import_vec.Vec.sub(point, [expandedBounds.minX, expandedBounds.minY]), [
            expandedBounds.width,
            expandedBounds.height
          ]);
        }
        distance = 0;
      } else {
        const intersection = (0, import_intersect.intersectRayBounds)(origin, direction, expandedBounds).filter((int) => int.didIntersect).map((int) => int.points[0]).sort((a, b) => import_vec.Vec.dist(b, origin) - import_vec.Vec.dist(a, origin))[0];
        const anchor = import_vec.Vec.med(point, intersection);
        if (import_vec.Vec.distanceToLineSegment(point, anchor, this.getCenter(shape)) < 12) {
          bindingPoint = [0.5, 0.5];
        } else {
          bindingPoint = import_vec.Vec.divV(import_vec.Vec.sub(anchor, [expandedBounds.minX, expandedBounds.minY]), [
            expandedBounds.width,
            expandedBounds.height
          ]);
        }
        if (import_core.Utils.pointInBounds(point, bounds)) {
          distance = 16;
        } else {
          distance = Math.max(16, import_core.Utils.getBoundsSides(bounds).map((side) => import_vec.Vec.distanceToLineSegment(side[1][0], side[1][1], point)).sort((a, b) => a - b)[0]);
        }
      }
      return {
        point: import_vec.Vec.clampV(bindingPoint, 0, 1),
        distance
      };
    };
    this.mutate = (shape, props) => {
      return props;
    };
    this.transform = (shape, bounds, info) => {
      return __spreadProps(__spreadValues({}, shape), { point: [bounds.minX, bounds.minY] });
    };
    this.transformSingle = (shape, bounds, info) => {
      return this.transform(shape, bounds, info);
    };
    this.getSvgElement = (shape) => {
      var _a;
      return (_a = document.getElementById(shape.id + "_svg")) == null ? void 0 : _a.cloneNode(true);
    };
  }
};

// src/state/shapes/shared/getBoundsRectangle.ts
var import_core2 = __toModule(require("@tldraw/core"));
function getBoundsRectangle(shape, boundsCache) {
  const bounds = import_core2.Utils.getFromCache(boundsCache, shape, () => {
    const [width, height] = shape.size;
    return {
      minX: 0,
      maxX: width,
      minY: 0,
      maxY: height,
      width,
      height
    };
  });
  return import_core2.Utils.translateBounds(bounds, shape.point);
}

// src/state/shapes/shared/transformRectangle.ts
var import_vec2 = __toModule(require("@tldraw/vec"));
function transformRectangle(shape, bounds, { initialShape, transformOrigin, scaleX, scaleY }) {
  if (shape.rotation || initialShape.isAspectRatioLocked) {
    const size = import_vec2.default.toFixed(import_vec2.default.mul(initialShape.size, Math.min(Math.abs(scaleX), Math.abs(scaleY))));
    const point = import_vec2.default.toFixed([
      bounds.minX + (bounds.width - shape.size[0]) * (scaleX < 0 ? 1 - transformOrigin[0] : transformOrigin[0]),
      bounds.minY + (bounds.height - shape.size[1]) * (scaleY < 0 ? 1 - transformOrigin[1] : transformOrigin[1])
    ]);
    const rotation = scaleX < 0 && scaleY >= 0 || scaleY < 0 && scaleX >= 0 ? initialShape.rotation ? -initialShape.rotation : 0 : initialShape.rotation;
    return {
      size,
      point,
      rotation
    };
  } else {
    return {
      point: import_vec2.default.toFixed([bounds.minX, bounds.minY]),
      size: import_vec2.default.toFixed([bounds.width, bounds.height])
    };
  }
}

// src/state/shapes/shared/transformSingleRectangle.ts
var import_vec3 = __toModule(require("@tldraw/vec"));
function transformSingleRectangle(shape, bounds) {
  return {
    size: import_vec3.default.toFixed([bounds.width, bounds.height]),
    point: import_vec3.default.toFixed([bounds.minX, bounds.minY])
  };
}

// src/state/shapes/shared/TextAreaUtils.ts
var INDENT = "  ";
var TextAreaUtils = class {
  static insertTextFirefox(field, text) {
    field.setRangeText(text, field.selectionStart || 0, field.selectionEnd || 0, "end");
    field.dispatchEvent(new InputEvent("input", {
      data: text,
      inputType: "insertText",
      isComposing: false
    }));
  }
  static insert(field, text) {
    const document2 = field.ownerDocument;
    const initialFocus = document2.activeElement;
    if (initialFocus !== field) {
      field.focus();
    }
    if (!document2.execCommand("insertText", false, text)) {
      TextAreaUtils.insertTextFirefox(field, text);
    }
    if (initialFocus === document2.body) {
      field.blur();
    } else if (initialFocus instanceof HTMLElement && initialFocus !== field) {
      initialFocus.focus();
    }
  }
  static set(field, text) {
    field.select();
    TextAreaUtils.insert(field, text);
  }
  static getSelection(field) {
    const { selectionStart, selectionEnd } = field;
    return field.value.slice(selectionStart ? selectionStart : void 0, selectionEnd ? selectionEnd : void 0);
  }
  static wrapSelection(field, wrap, wrapEnd) {
    const { selectionStart, selectionEnd } = field;
    const selection = TextAreaUtils.getSelection(field);
    TextAreaUtils.insert(field, wrap + selection + (wrapEnd != null ? wrapEnd : wrap));
    field.selectionStart = (selectionStart || 0) + wrap.length;
    field.selectionEnd = (selectionEnd || 0) + wrap.length;
  }
  static replace(field, searchValue, replacer) {
    let drift = 0;
    field.value.replace(searchValue, (...args) => {
      const matchStart = drift + args[args.length - 2];
      const matchLength = args[0].length;
      field.selectionStart = matchStart;
      field.selectionEnd = matchStart + matchLength;
      const replacement = typeof replacer === "string" ? replacer : replacer(...args);
      TextAreaUtils.insert(field, replacement);
      field.selectionStart = matchStart;
      drift += replacement.length - matchLength;
      return replacement;
    });
  }
  static findLineEnd(value, currentEnd) {
    const lastLineStart = value.lastIndexOf("\n", currentEnd - 1) + 1;
    if (value.charAt(lastLineStart) !== "	") {
      return currentEnd;
    }
    return lastLineStart + 1;
  }
  static indent(element) {
    var _a;
    const { selectionStart, selectionEnd, value } = element;
    const selectedContrast = value.slice(selectionStart, selectionEnd);
    const lineBreakCount = (_a = /\n/g.exec(selectedContrast)) == null ? void 0 : _a.length;
    if (lineBreakCount && lineBreakCount > 0) {
      const firstLineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
      const newSelection = element.value.slice(firstLineStart, selectionEnd - 1);
      const indentedText = newSelection.replace(/^|\n/g, `$&${INDENT}`);
      const replacementsCount = indentedText.length - newSelection.length;
      element.setSelectionRange(firstLineStart, selectionEnd - 1);
      TextAreaUtils.insert(element, indentedText);
      element.setSelectionRange(selectionStart + 1, selectionEnd + replacementsCount);
    } else {
      TextAreaUtils.insert(element, INDENT);
    }
  }
  static unindent(element) {
    const { selectionStart, selectionEnd, value } = element;
    const firstLineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
    const minimumSelectionEnd = TextAreaUtils.findLineEnd(value, selectionEnd);
    const newSelection = element.value.slice(firstLineStart, minimumSelectionEnd);
    const indentedText = newSelection.replace(/(^|\n)(\t| {1,2})/g, "$1");
    const replacementsCount = newSelection.length - indentedText.length;
    element.setSelectionRange(firstLineStart, minimumSelectionEnd);
    TextAreaUtils.insert(element, indentedText);
    const firstLineIndentation = /\t| {1,2}/.exec(value.slice(firstLineStart, selectionStart));
    const difference = firstLineIndentation ? firstLineIndentation[0].length : 0;
    const newSelectionStart = selectionStart - difference;
    element.setSelectionRange(selectionStart - difference, Math.max(newSelectionStart, selectionEnd - replacementsCount));
  }
};

// src/state/shapes/shared/shape-styles.ts
var import_core3 = __toModule(require("@tldraw/core"));
var canvasLight = "#fafafa";
var canvasDark = "#343d45";
var colors = {
  [ColorStyle.White]: "#f0f1f3",
  [ColorStyle.LightGray]: "#c6cbd1",
  [ColorStyle.Gray]: "#788492",
  [ColorStyle.Black]: "#1d1d1d",
  [ColorStyle.Green]: "#36b24d",
  [ColorStyle.Cyan]: "#0e98ad",
  [ColorStyle.Blue]: "#1c7ed6",
  [ColorStyle.Indigo]: "#4263eb",
  [ColorStyle.Violet]: "#7746f1",
  [ColorStyle.Red]: "#ff2133",
  [ColorStyle.Orange]: "#ff9433",
  [ColorStyle.Yellow]: "#ffc936"
};
var stickyFills = {
  light: __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, import_core3.Utils.lerpColor(v, canvasLight, 0.45)]))), {
    [ColorStyle.White]: "#ffffff",
    [ColorStyle.Black]: "#3d3d3d"
  }),
  dark: __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(colors).map(([k, v]) => [
    k,
    import_core3.Utils.lerpColor(import_core3.Utils.lerpColor(v, "#999999", 0.3), canvasDark, 0.4)
  ]))), {
    [ColorStyle.White]: "#1d1d1d",
    [ColorStyle.Black]: "#bbbbbb"
  })
};
var strokes = {
  light: __spreadProps(__spreadValues({}, colors), {
    [ColorStyle.White]: "#1d1d1d"
  }),
  dark: __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, import_core3.Utils.lerpColor(v, canvasDark, 0.1)]))), {
    [ColorStyle.White]: "#cecece",
    [ColorStyle.Black]: "#cecece"
  })
};
var fills = {
  light: __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, import_core3.Utils.lerpColor(v, canvasLight, 0.82)]))), {
    [ColorStyle.White]: "#fefefe",
    [ColorStyle.Black]: "#4d4d4d"
  }),
  dark: __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, import_core3.Utils.lerpColor(v, canvasDark, 0.618)]))), {
    [ColorStyle.White]: "rgb(30,33,37)",
    [ColorStyle.Black]: "#1e1e1f"
  })
};
var strokeWidths = {
  [SizeStyle.Small]: 2,
  [SizeStyle.Medium]: 3.5,
  [SizeStyle.Large]: 5
};
var fontSizes = {
  [SizeStyle.Small]: 28,
  [SizeStyle.Medium]: 48,
  [SizeStyle.Large]: 96,
  auto: "auto"
};
var fontFaces = {
  [FontStyle.Script]: '"Caveat Brush"',
  [FontStyle.Sans]: '"Source Sans Pro", sans-serif',
  [FontStyle.Serif]: '"Source Serif Pro", serif',
  [FontStyle.Mono]: '"Source Code Pro", monospace'
};
var fontSizeModifiers = {
  [FontStyle.Script]: 1,
  [FontStyle.Sans]: 1,
  [FontStyle.Serif]: 1,
  [FontStyle.Mono]: 1
};
var stickyFontSizes = {
  [SizeStyle.Small]: 24,
  [SizeStyle.Medium]: 36,
  [SizeStyle.Large]: 48,
  auto: "auto"
};
function getStrokeWidth(size) {
  return strokeWidths[size];
}
function getFontSize(size, fontStyle = FontStyle.Script) {
  return fontSizes[size] * fontSizeModifiers[fontStyle];
}
function getFontFace(font = FontStyle.Script) {
  return fontFaces[font];
}
function getStickyFontSize(size) {
  return stickyFontSizes[size];
}
function getFontStyle(style) {
  const fontSize = getFontSize(style.size, style.font);
  const fontFace = getFontFace(style.font);
  const { scale = 1 } = style;
  return `${fontSize * scale}px/1.3 ${fontFace}`;
}
function getStickyFontStyle(style) {
  const fontSize = getStickyFontSize(style.size);
  const fontFace = getFontFace(style.font);
  const { scale = 1 } = style;
  return `${fontSize * scale}px/1.3 ${fontFace}`;
}
function getStickyShapeStyle(style, isDarkMode = false) {
  const { color } = style;
  const theme = isDarkMode ? "dark" : "light";
  const adjustedColor = color === ColorStyle.White || color === ColorStyle.Black ? ColorStyle.Yellow : color;
  return {
    fill: stickyFills[theme][adjustedColor],
    stroke: strokes[theme][adjustedColor],
    color: isDarkMode ? "#1d1d1d" : "#0d0d0d"
  };
}
function getShapeStyle(style, isDarkMode) {
  const { color, size, isFilled } = style;
  const strokeWidth = getStrokeWidth(size);
  const theme = isDarkMode ? "dark" : "light";
  return {
    stroke: strokes[theme][color],
    fill: isFilled ? fills[theme][color] : "none",
    strokeWidth
  };
}
var defaultStyle = {
  color: ColorStyle.Black,
  size: SizeStyle.Small,
  isFilled: false,
  dash: DashStyle.Draw,
  scale: 1
};
var defaultTextStyle = __spreadProps(__spreadValues({}, defaultStyle), {
  font: FontStyle.Script,
  textAlign: AlignStyle.Start
});

// src/state/shapes/RectangleUtil/RectangleUtil.tsx
var RectangleUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Rectangle;
    this.canBind = true;
    this.canClone = true;
    this.getShape = (props) => {
      return import_core4.Utils.deepMerge({
        id: "id",
        type: TDShapeType.Rectangle,
        name: "Rectangle",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        size: [1, 1],
        rotation: 0,
        style: defaultStyle
      }, props);
    };
    this.Component = TDShapeUtil.Component(({ shape, isBinding, isSelected, isGhost, meta, events }, ref) => {
      const { id, size, style } = shape;
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const { strokeWidth } = styles2;
      if (style.dash === DashStyle.Draw) {
        const pathTDSnapshot = getRectanglePath(shape);
        const indicatorPath = getRectangleIndicatorPathTDSnapshot(shape);
        return /* @__PURE__ */ React2.createElement(import_core4.SVGContainer, __spreadValues({
          ref,
          id: shape.id + "_svg"
        }, events), isBinding && /* @__PURE__ */ React2.createElement("rect", {
          className: "tl-binding-indicator",
          x: strokeWidth / 2 - BINDING_DISTANCE,
          y: strokeWidth / 2 - BINDING_DISTANCE,
          width: Math.max(0, size[0] - strokeWidth / 2) + BINDING_DISTANCE * 2,
          height: Math.max(0, size[1] - strokeWidth / 2) + BINDING_DISTANCE * 2
        }), /* @__PURE__ */ React2.createElement("path", {
          className: isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
          d: indicatorPath
        }), /* @__PURE__ */ React2.createElement("path", {
          d: indicatorPath,
          fill: style.isFilled ? styles2.fill : "none",
          pointerEvents: "none"
        }), /* @__PURE__ */ React2.createElement("path", {
          d: pathTDSnapshot,
          fill: styles2.stroke,
          stroke: styles2.stroke,
          strokeWidth: styles2.strokeWidth,
          pointerEvents: "none",
          opacity: isGhost ? GHOSTED_OPACITY : 1
        }));
      }
      const sw = 1 + strokeWidth * 1.618;
      const w = Math.max(0, size[0] - sw / 2);
      const h = Math.max(0, size[1] - sw / 2);
      const strokes2 = [
        [[sw / 2, sw / 2], [w, sw / 2], w - sw / 2],
        [[w, sw / 2], [w, h], h - sw / 2],
        [[w, h], [sw / 2, h], w - sw / 2],
        [[sw / 2, h], [sw / 2, sw / 2], h - sw / 2]
      ];
      const paths = strokes2.map(([start, end, length], i) => {
        const { strokeDasharray, strokeDashoffset } = import_core4.Utils.getPerfectDashProps(length, strokeWidth * 1.618, shape.style.dash);
        return /* @__PURE__ */ React2.createElement("line", {
          key: id + "_" + i,
          x1: start[0],
          y1: start[1],
          x2: end[0],
          y2: end[1],
          strokeDasharray,
          strokeDashoffset
        });
      });
      return /* @__PURE__ */ React2.createElement(import_core4.SVGContainer, __spreadValues({
        ref,
        id: shape.id + "_svg"
      }, events), /* @__PURE__ */ React2.createElement("g", {
        opacity: isGhost ? GHOSTED_OPACITY : 1
      }, isBinding && /* @__PURE__ */ React2.createElement("rect", {
        className: "tl-binding-indicator",
        x: sw / 2 - 32,
        y: sw / 2 - 32,
        width: w + 64,
        height: h + 64
      }), /* @__PURE__ */ React2.createElement("rect", {
        className: isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
        x: sw / 2,
        y: sw / 2,
        width: w,
        height: h
      }), style.isFilled && /* @__PURE__ */ React2.createElement("rect", {
        x: sw / 2,
        y: sw / 2,
        width: w,
        height: h,
        fill: styles2.fill,
        pointerEvents: "none"
      }), /* @__PURE__ */ React2.createElement("g", {
        pointerEvents: "none",
        stroke: styles2.stroke,
        strokeWidth: sw,
        strokeLinecap: "round"
      }, paths)));
    });
    this.Indicator = TDShapeUtil.Indicator(({ shape }) => {
      const {
        style,
        size: [width, height]
      } = shape;
      const styles2 = getShapeStyle(style, false);
      const sw = styles2.strokeWidth;
      if (style.dash === DashStyle.Draw) {
        return /* @__PURE__ */ React2.createElement("path", {
          d: getRectangleIndicatorPathTDSnapshot(shape)
        });
      }
      return /* @__PURE__ */ React2.createElement("rect", {
        x: sw,
        y: sw,
        rx: 1,
        ry: 1,
        width: Math.max(1, width - sw * 2),
        height: Math.max(1, height - sw * 2)
      });
    });
    this.getBounds = (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    };
    this.shouldRender = (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style;
    };
    this.transform = transformRectangle;
    this.transformSingle = transformSingleRectangle;
  }
};
function getRectangleDrawPoints(shape) {
  const styles2 = getShapeStyle(shape.style);
  const getRandom = import_core4.Utils.rng(shape.id);
  const sw = styles2.strokeWidth;
  const w = Math.max(0, shape.size[0]);
  const h = Math.max(0, shape.size[1]);
  const offsets = Array.from(Array(4)).map(() => {
    return [getRandom() * sw * 0.75, getRandom() * sw * 0.75];
  });
  const tl = import_vec4.Vec.add([sw / 2, sw / 2], offsets[0]);
  const tr = import_vec4.Vec.add([w - sw / 2, sw / 2], offsets[1]);
  const br = import_vec4.Vec.add([w - sw / 2, h - sw / 2], offsets[2]);
  const bl = import_vec4.Vec.add([sw / 2, h - sw / 2], offsets[3]);
  const rm = Math.round(Math.abs(getRandom() * 2 * 4));
  const rx = Math.min(w / 2, sw * 2);
  const ry = Math.min(h / 2, sw * 2);
  const px = Math.max(8, Math.floor(w / 16));
  const py = Math.max(8, Math.floor(h / 16));
  const lines = import_core4.Utils.rotateArray([
    import_vec4.Vec.pointsBetween(import_vec4.Vec.add(tl, [rx, 0]), import_vec4.Vec.sub(tr, [rx, 0]), px),
    import_vec4.Vec.pointsBetween(import_vec4.Vec.add(tr, [0, ry]), import_vec4.Vec.sub(br, [0, ry]), py),
    import_vec4.Vec.pointsBetween(import_vec4.Vec.sub(br, [rx, 0]), import_vec4.Vec.add(bl, [rx, 0]), px),
    import_vec4.Vec.pointsBetween(import_vec4.Vec.sub(bl, [0, ry]), import_vec4.Vec.add(tl, [0, ry]), py)
  ], rm);
  const points = [...lines.flat(), ...lines[0]].slice(5, Math.floor((rm % 2 === 0 ? px : py) / -2) + 3);
  return {
    points
  };
}
function getDrawStrokeInfo(shape) {
  const { points } = getRectangleDrawPoints(shape);
  const { strokeWidth } = getShapeStyle(shape.style);
  const options2 = {
    size: strokeWidth,
    thinning: 0.65,
    streamline: 0.3,
    smoothing: 1,
    simulatePressure: false,
    last: true
  };
  return { points, options: options2 };
}
function getRectanglePath(shape) {
  const { points, options: options2 } = getDrawStrokeInfo(shape);
  const stroke = (0, import_perfect_freehand.getStroke)(points, options2);
  return import_core4.Utils.getSvgPathFromStroke(stroke);
}
function getRectangleIndicatorPathTDSnapshot(shape) {
  const { points, options: options2 } = getDrawStrokeInfo(shape);
  const strokePoints = (0, import_perfect_freehand.getStrokePoints)(points, options2);
  return import_core4.Utils.getSvgPathFromStroke(strokePoints.map((pt) => pt.point.slice(0, 2)), false);
}

// src/state/shapes/EllipseUtil/EllipseUtil.tsx
var React3 = __toModule(require("react"));
var import_core6 = __toModule(require("@tldraw/core"));
var import_vec6 = __toModule(require("@tldraw/vec"));
var import_intersect2 = __toModule(require("@tldraw/intersect"));

// src/state/shapes/EllipseUtil/ellipseHelpers.ts
var import_core5 = __toModule(require("@tldraw/core"));
var import_vec5 = __toModule(require("@tldraw/vec"));
var import_perfect_freehand2 = __toModule(require("perfect-freehand"));
function getEllipseStrokePoints(shape, boundsCenter) {
  const {
    id,
    radius: [radiusX, radiusY],
    point,
    style
  } = shape;
  const { strokeWidth } = getShapeStyle(style);
  const getRandom = import_core5.Utils.rng(id);
  const center = import_vec5.default.sub(boundsCenter, point);
  const rx = radiusX + getRandom() * strokeWidth * 2;
  const ry = radiusY + getRandom() * strokeWidth * 2;
  const perimeter = import_core5.Utils.perimeterOfEllipse(rx, ry);
  const points = [];
  const start = Math.PI + Math.PI * getRandom();
  const extra = Math.abs(getRandom());
  const count = Math.max(16, perimeter / 10);
  for (let i = 0; i < count; i++) {
    const t = EASINGS.easeInOutSine(i / (count + 1));
    const rads = start * 2 + Math.PI * (2 + extra) * t;
    const c = Math.cos(rads);
    const s = Math.sin(rads);
    points.push([rx * c + center[0], ry * s + center[1], t + 0.5 + getRandom() / 2]);
  }
  return (0, import_perfect_freehand2.getStrokePoints)(points, {
    size: 1 + strokeWidth * 2,
    thinning: 0.618,
    end: { taper: perimeter / 8 },
    start: { taper: perimeter / 12 },
    streamline: 0,
    simulatePressure: true
  });
}
function getEllipsePath(shape, boundsCenter) {
  const {
    id,
    radius: [radiusX, radiusY],
    style
  } = shape;
  const { strokeWidth } = getShapeStyle(style);
  const getRandom = import_core5.Utils.rng(id);
  const rx = radiusX + getRandom() * strokeWidth * 2;
  const ry = radiusY + getRandom() * strokeWidth * 2;
  const perimeter = import_core5.Utils.perimeterOfEllipse(rx, ry);
  return import_core5.Utils.getSvgPathFromStroke((0, import_perfect_freehand2.getStrokeOutlinePoints)(getEllipseStrokePoints(shape, boundsCenter), {
    size: 1 + strokeWidth * 2,
    thinning: 0.618,
    end: { taper: perimeter / 8 },
    start: { taper: perimeter / 12 },
    streamline: 0,
    simulatePressure: true
  }));
}
function getEllipseIndicatorPathTDSnapshot(shape, boundsCenter) {
  return import_core5.Utils.getSvgPathFromStroke(getEllipseStrokePoints(shape, boundsCenter).map((pt) => pt.point.slice(0, 2)), false);
}

// src/state/shapes/EllipseUtil/EllipseUtil.tsx
var EllipseUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Ellipse;
    this.canBind = true;
    this.getShape = (props) => {
      return import_core6.Utils.deepMerge({
        id: "id",
        type: TDShapeType.Ellipse,
        name: "Ellipse",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        radius: [1, 1],
        rotation: 0,
        style: defaultStyle
      }, props);
    };
    this.Component = TDShapeUtil.Component(({ shape, isGhost, isSelected, isBinding, meta, events }, ref) => {
      const {
        radius: [radiusX, radiusY],
        style
      } = shape;
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const strokeWidth = styles2.strokeWidth;
      const sw = 1 + strokeWidth * 1.618;
      const rx = Math.max(0, radiusX - sw / 2);
      const ry = Math.max(0, radiusY - sw / 2);
      if (style.dash === DashStyle.Draw) {
        const path = getEllipsePath(shape, this.getCenter(shape));
        return /* @__PURE__ */ React3.createElement(import_core6.SVGContainer, __spreadValues({
          ref,
          id: shape.id + "_svg"
        }, events), isBinding && /* @__PURE__ */ React3.createElement("ellipse", {
          className: "tl-binding-indicator",
          cx: radiusX,
          cy: radiusY,
          rx: rx + 2,
          ry: ry + 2
        }), /* @__PURE__ */ React3.createElement("ellipse", {
          className: isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
          cx: radiusX,
          cy: radiusY,
          rx: radiusX,
          ry: radiusY
        }), /* @__PURE__ */ React3.createElement("path", {
          d: getEllipseIndicatorPathTDSnapshot(shape, this.getCenter(shape)),
          stroke: "none",
          fill: style.isFilled ? styles2.fill : "none",
          pointerEvents: "none"
        }), /* @__PURE__ */ React3.createElement("path", {
          d: path,
          fill: styles2.stroke,
          stroke: styles2.stroke,
          strokeWidth: styles2.strokeWidth,
          pointerEvents: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          opacity: isGhost ? GHOSTED_OPACITY : 1
        }));
      }
      const h = Math.pow(rx - ry, 2) / Math.pow(rx + ry, 2);
      const perimeter = Math.PI * (rx + ry) * (1 + 3 * h / (10 + Math.sqrt(4 - 3 * h)));
      const { strokeDasharray, strokeDashoffset } = import_core6.Utils.getPerfectDashProps(perimeter < 64 ? perimeter * 2 : perimeter, strokeWidth * 1.618, shape.style.dash, 4);
      return /* @__PURE__ */ React3.createElement(import_core6.SVGContainer, __spreadValues({
        ref,
        id: shape.id + "_svg"
      }, events), isBinding && /* @__PURE__ */ React3.createElement("ellipse", {
        className: "tl-binding-indicator",
        cx: radiusX,
        cy: radiusY,
        rx: rx + 32,
        ry: ry + 32
      }), /* @__PURE__ */ React3.createElement("ellipse", {
        className: isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
        cx: radiusX,
        cy: radiusY,
        rx: radiusX,
        ry: radiusY
      }), /* @__PURE__ */ React3.createElement("ellipse", {
        cx: radiusX,
        cy: radiusY,
        rx: radiusX,
        ry: radiusY,
        fill: styles2.fill,
        stroke: styles2.stroke,
        strokeWidth: sw,
        strokeDasharray,
        strokeDashoffset,
        pointerEvents: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    });
    this.Indicator = TDShapeUtil.Indicator(({ shape }) => {
      const {
        radius: [radiusX, radiusY],
        style: { dash }
      } = shape;
      return dash === DashStyle.Draw ? /* @__PURE__ */ React3.createElement("path", {
        d: getEllipseIndicatorPathTDSnapshot(shape, this.getCenter(shape))
      }) : /* @__PURE__ */ React3.createElement("ellipse", {
        cx: radiusX,
        cy: radiusY,
        rx: radiusX,
        ry: radiusY
      });
    });
    this.hitTestPoint = (shape, point) => {
      return import_core6.Utils.pointInBounds(point, this.getRotatedBounds(shape)) && import_core6.Utils.pointInEllipse(point, this.getCenter(shape), shape.radius[0], shape.radius[1], shape.rotation || 0);
    };
    this.hitTestLineSegment = (shape, A, B) => {
      return (0, import_intersect2.intersectLineSegmentEllipse)(A, B, this.getCenter(shape), shape.radius[0], shape.radius[1], shape.rotation || 0).didIntersect;
    };
    this.getBounds = (shape) => {
      return import_core6.Utils.getFromCache(this.boundsCache, shape, () => {
        return import_core6.Utils.getRotatedEllipseBounds(shape.point[0], shape.point[1], shape.radius[0], shape.radius[1], 0);
      });
    };
    this.getRotatedBounds = (shape) => {
      return import_core6.Utils.getRotatedEllipseBounds(shape.point[0], shape.point[1], shape.radius[0], shape.radius[1], shape.rotation);
    };
    this.hitTestBounds = (shape, bounds) => {
      const shapeBounds = this.getBounds(shape);
      return import_core6.Utils.boundsContained(shapeBounds, bounds) || (0, import_intersect2.intersectEllipseBounds)(this.getCenter(shape), shape.radius[0], shape.radius[1], shape.rotation || 0, bounds).length > 0;
    };
    this.shouldRender = (prev, next) => {
      return next.radius !== prev.radius || next.style !== prev.style;
    };
    this.getCenter = (shape) => {
      return import_vec6.Vec.add(shape.point, shape.radius);
    };
    this.getBindingPoint = (shape, fromShape, point, origin, direction, padding, bindAnywhere) => {
      {
        const bounds = this.getBounds(shape);
        const expandedBounds = import_core6.Utils.expandBounds(bounds, padding);
        const center = this.getCenter(shape);
        let bindingPoint;
        let distance;
        if (!import_core6.Utils.pointInEllipse(point, center, shape.radius[0] + BINDING_DISTANCE, shape.radius[1] + BINDING_DISTANCE))
          return;
        if (bindAnywhere) {
          if (import_vec6.Vec.dist(point, this.getCenter(shape)) < 12) {
            bindingPoint = [0.5, 0.5];
          } else {
            bindingPoint = import_vec6.Vec.divV(import_vec6.Vec.sub(point, [expandedBounds.minX, expandedBounds.minY]), [
              expandedBounds.width,
              expandedBounds.height
            ]);
          }
          distance = 0;
        } else {
          let intersection = (0, import_intersect2.intersectRayEllipse)(origin, direction, center, shape.radius[0], shape.radius[1], shape.rotation || 0).points.sort((a, b) => import_vec6.Vec.dist(a, origin) - import_vec6.Vec.dist(b, origin))[0];
          if (!intersection) {
            intersection = (0, import_intersect2.intersectLineSegmentEllipse)(point, center, center, shape.radius[0], shape.radius[1], shape.rotation || 0).points.sort((a, b) => import_vec6.Vec.dist(a, point) - import_vec6.Vec.dist(b, point))[0];
          }
          if (!intersection) {
            return void 0;
          }
          const anchor = import_vec6.Vec.med(point, intersection);
          if (import_vec6.Vec.distanceToLineSegment(point, anchor, this.getCenter(shape)) < 12) {
            bindingPoint = [0.5, 0.5];
          } else {
            bindingPoint = import_vec6.Vec.divV(import_vec6.Vec.sub(anchor, [expandedBounds.minX, expandedBounds.minY]), [
              expandedBounds.width,
              expandedBounds.height
            ]);
          }
          if (import_core6.Utils.pointInEllipse(point, center, shape.radius[0], shape.radius[1], shape.rotation || 0)) {
            distance = BINDING_DISTANCE / 2;
          } else {
            const innerIntersection = (0, import_intersect2.intersectLineSegmentEllipse)(point, center, center, shape.radius[0], shape.radius[1], shape.rotation || 0).points[0];
            if (!innerIntersection) {
              return void 0;
            }
            distance = Math.max(BINDING_DISTANCE / 2, import_vec6.Vec.dist(point, innerIntersection));
          }
        }
        return {
          point: bindingPoint,
          distance
        };
      }
    };
    this.transform = (shape, bounds, { scaleX, scaleY, initialShape }) => {
      const { rotation = 0 } = initialShape;
      return {
        point: [bounds.minX, bounds.minY],
        radius: [bounds.width / 2, bounds.height / 2],
        rotation: scaleX < 0 && scaleY >= 0 || scaleY < 0 && scaleX >= 0 ? -(rotation || 0) : rotation || 0
      };
    };
    this.transformSingle = (shape, bounds) => {
      return {
        point: import_vec6.Vec.toFixed([bounds.minX, bounds.minY]),
        radius: import_vec6.Vec.div([bounds.width, bounds.height], 2)
      };
    };
  }
};

// src/state/shapes/ArrowUtil/ArrowUtil.tsx
var React4 = __toModule(require("react"));
var import_core8 = __toModule(require("@tldraw/core"));
var import_vec8 = __toModule(require("@tldraw/vec"));
var import_intersect4 = __toModule(require("@tldraw/intersect"));

// src/state/shapes/ArrowUtil/arrowHelpers.ts
var import_core7 = __toModule(require("@tldraw/core"));
var import_intersect3 = __toModule(require("@tldraw/intersect"));
var import_vec7 = __toModule(require("@tldraw/vec"));
var import_perfect_freehand3 = __toModule(require("perfect-freehand"));
function getArrowArcPath(start, end, circle, bend) {
  return [
    "M",
    start.point[0],
    start.point[1],
    "A",
    circle[2],
    circle[2],
    0,
    0,
    bend < 0 ? 0 : 1,
    end.point[0],
    end.point[1]
  ].join(" ");
}
function getBendPoint(handles, bend) {
  const { start, end } = handles;
  const dist = import_vec7.default.dist(start.point, end.point);
  const midPoint = import_vec7.default.med(start.point, end.point);
  const bendDist = dist / 2 * bend;
  const u = import_vec7.default.uni(import_vec7.default.vec(start.point, end.point));
  const point = import_vec7.default.toFixed(Math.abs(bendDist) < 10 ? midPoint : import_vec7.default.add(midPoint, import_vec7.default.mul(import_vec7.default.per(u), bendDist)));
  return point;
}
function renderFreehandArrowShaft(shape) {
  var _a, _b;
  const { style, id } = shape;
  const { start, end } = shape.handles;
  const getRandom = import_core7.Utils.rng(id);
  const strokeWidth = getShapeStyle(style).strokeWidth;
  const startPoint = ((_a = shape.decorations) == null ? void 0 : _a.start) ? import_vec7.default.nudge(start.point, end.point, strokeWidth) : start.point;
  const endPoint = ((_b = shape.decorations) == null ? void 0 : _b.end) ? import_vec7.default.nudge(end.point, start.point, strokeWidth) : end.point;
  const stroke = (0, import_perfect_freehand3.default)([startPoint, endPoint], {
    size: strokeWidth,
    thinning: 0.618 + getRandom() * 0.2,
    easing: EASINGS.easeOutQuad,
    simulatePressure: true,
    streamline: 0,
    last: true
  });
  const path = import_core7.Utils.getSvgPathFromStroke(stroke);
  return path;
}
function renderCurvedFreehandArrowShaft(shape, circle, length, easing) {
  var _a, _b;
  const { style, id } = shape;
  const { start, end } = shape.handles;
  const getRandom = import_core7.Utils.rng(id);
  const strokeWidth = getShapeStyle(style).strokeWidth;
  const center = [circle[0], circle[1]];
  const radius = circle[2];
  const startPoint = ((_a = shape.decorations) == null ? void 0 : _a.start) ? import_vec7.default.rotWith(start.point, center, strokeWidth / length) : start.point;
  const endPoint = ((_b = shape.decorations) == null ? void 0 : _b.end) ? import_vec7.default.rotWith(end.point, center, -(strokeWidth / length)) : end.point;
  const startAngle = import_vec7.default.angle(center, startPoint);
  const endAngle = import_vec7.default.angle(center, endPoint);
  const points = [];
  const count = 8 + Math.floor(Math.abs(length) / 20 * 1 + getRandom() / 2);
  for (let i = 0; i < count; i++) {
    const t = easing(i / count);
    const angle = import_core7.Utils.lerpAngles(startAngle, endAngle, t);
    points.push(import_vec7.default.toFixed(import_vec7.default.nudgeAtAngle(center, angle, radius)));
  }
  const stroke = (0, import_perfect_freehand3.default)([startPoint, ...points, endPoint], {
    size: 1 + strokeWidth,
    thinning: 0.618 + getRandom() * 0.2,
    easing: EASINGS.easeOutQuad,
    simulatePressure: false,
    streamline: 0,
    last: true
  });
  const path = import_core7.Utils.getSvgPathFromStroke(stroke);
  return path;
}
function getCtp(shape) {
  const { start, end, bend } = shape.handles;
  return import_core7.Utils.circleFromThreePoints(start.point, end.point, bend.point);
}
function getArrowArc(shape) {
  const { start, end, bend } = shape.handles;
  const [cx, cy, radius] = import_core7.Utils.circleFromThreePoints(start.point, end.point, bend.point);
  const center = [cx, cy];
  const length = getArcLength(center, radius, start.point, end.point);
  return { center, radius, length };
}
function getCurvedArrowHeadPoints(A, r1, C, r2, sweep) {
  const ints = (0, import_intersect3.intersectCircleCircle)(A, r1 * 0.618, C, r2).points;
  if (!ints) {
    TLDR.warn("Could not find an intersection for the arrow head.");
    return { left: A, right: A };
  }
  const int = sweep ? ints[0] : ints[1];
  const left = int ? import_vec7.default.nudge(import_vec7.default.rotWith(int, A, Math.PI / 6), A, r1 * -0.382) : A;
  const right = int ? import_vec7.default.nudge(import_vec7.default.rotWith(int, A, -Math.PI / 6), A, r1 * -0.382) : A;
  return { left, right };
}
function getStraightArrowHeadPoints(A, B, r) {
  const ints = (0, import_intersect3.intersectCircleLineSegment)(A, r, A, B).points;
  if (!ints) {
    TLDR.warn("Could not find an intersection for the arrow head.");
    return { left: A, right: A };
  }
  const int = ints[0];
  const left = int ? import_vec7.default.rotWith(int, A, Math.PI / 6) : A;
  const right = int ? import_vec7.default.rotWith(int, A, -Math.PI / 6) : A;
  return { left, right };
}
function getCurvedArrowHeadPath(A, r1, C, r2, sweep) {
  const { left, right } = getCurvedArrowHeadPoints(A, r1, C, r2, sweep);
  return `M ${left} L ${A} ${right}`;
}
function getStraightArrowHeadPath(A, B, r) {
  const { left, right } = getStraightArrowHeadPoints(A, B, r);
  return `M ${left} L ${A} ${right}`;
}
function getArrowPath(shape) {
  const {
    decorations,
    handles: { start, end, bend: _bend },
    style
  } = shape;
  const { strokeWidth } = getShapeStyle(style, false);
  const arrowDist = import_vec7.default.dist(start.point, end.point);
  const arrowHeadLength = Math.min(arrowDist / 3, strokeWidth * 8);
  const path = [];
  const isStraightLine = import_vec7.default.dist(_bend.point, import_vec7.default.toFixed(import_vec7.default.med(start.point, end.point))) < 1;
  if (isStraightLine) {
    path.push(`M ${start.point} L ${end.point}`);
    if (decorations == null ? void 0 : decorations.start) {
      path.push(getStraightArrowHeadPath(start.point, end.point, arrowHeadLength));
    }
    if (decorations == null ? void 0 : decorations.end) {
      path.push(getStraightArrowHeadPath(end.point, start.point, arrowHeadLength));
    }
  } else {
    const { center, radius, length } = getArrowArc(shape);
    path.push(`M ${start.point} A ${radius} ${radius} 0 0 ${length > 0 ? "1" : "0"} ${end.point}`);
    if (decorations == null ? void 0 : decorations.start) {
      path.push(getCurvedArrowHeadPath(start.point, arrowHeadLength, center, radius, length < 0));
    }
    if (decorations == null ? void 0 : decorations.end) {
      path.push(getCurvedArrowHeadPath(end.point, arrowHeadLength, center, radius, length >= 0));
    }
  }
  return path.join(" ");
}
function getArcPoints(shape) {
  const { start, bend, end } = shape.handles;
  if (import_vec7.default.dist2(bend.point, import_vec7.default.med(start.point, end.point)) > 4) {
    const points = [];
    const { center, radius } = getArrowArc(shape);
    const startAngle = import_vec7.default.angle(center, start.point);
    const endAngle = import_vec7.default.angle(center, end.point);
    for (let i = 1 / 20; i < 1; i += 1 / 20) {
      const angle = import_core7.Utils.lerpAngles(startAngle, endAngle, i);
      points.push(import_vec7.default.nudgeAtAngle(center, angle, radius));
    }
    return points;
  } else {
    return [start.point, end.point];
  }
}
function isAngleBetween(a, b, c) {
  if (c === a || c === b)
    return true;
  const PI23 = Math.PI * 2;
  const AB = (b - a + PI23) % PI23;
  const AC = (c - a + PI23) % PI23;
  return AB <= Math.PI !== AC > AB;
}
function getArcLength(C, r, A, B) {
  const sweep = import_core7.Utils.getSweep(C, A, B);
  return r * (2 * Math.PI) * (sweep / (2 * Math.PI));
}

// src/state/shapes/ArrowUtil/ArrowUtil.tsx
var ArrowUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Arrow;
    this.hideBounds = true;
    this.pathCache = new WeakMap();
    this.getShape = (props) => {
      var _a, _b, _c, _d;
      return __spreadValues({
        id: "id",
        type: TDShapeType.Arrow,
        name: "Arrow",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        rotation: 0,
        bend: 0,
        handles: {
          start: __spreadValues({
            id: "start",
            index: 0,
            point: [0, 0],
            canBind: true
          }, (_a = props.handles) == null ? void 0 : _a.start),
          end: __spreadValues({
            id: "end",
            index: 1,
            point: [1, 1],
            canBind: true
          }, (_b = props.handles) == null ? void 0 : _b.end),
          bend: __spreadValues({
            id: "bend",
            index: 2,
            point: [0.5, 0.5]
          }, (_c = props.handles) == null ? void 0 : _c.bend)
        },
        decorations: (_d = props.decorations) != null ? _d : {
          end: Decoration.Arrow
        },
        style: __spreadValues(__spreadProps(__spreadValues({}, defaultStyle), {
          isFilled: false
        }), props.style)
      }, props);
    };
    this.Component = TDShapeUtil.Component(({ shape, isGhost, meta, events }, ref) => {
      const {
        handles: { start, bend, end },
        decorations = {},
        style
      } = shape;
      const isDraw = style.dash === DashStyle.Draw;
      const isStraightLine = import_vec8.Vec.dist(bend.point, import_vec8.Vec.toFixed(import_vec8.Vec.med(start.point, end.point))) < 1;
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const { strokeWidth } = styles2;
      const arrowDist = import_vec8.Vec.dist(start.point, end.point);
      const arrowHeadLength = Math.min(arrowDist / 3, strokeWidth * 8);
      const sw = 1 + strokeWidth * 1.618;
      let shaftPath;
      let startArrowHead;
      let endArrowHead;
      const getRandom = import_core8.Utils.rng(shape.id);
      const easing = EASINGS[getRandom() > 0 ? "easeInOutSine" : "easeInOutCubic"];
      if (isStraightLine) {
        const path = isDraw ? renderFreehandArrowShaft(shape) : "M" + import_vec8.Vec.toFixed(start.point) + "L" + import_vec8.Vec.toFixed(end.point);
        const { strokeDasharray, strokeDashoffset } = import_core8.Utils.getPerfectDashProps(arrowDist, strokeWidth * 1.618, shape.style.dash, 2, false);
        if (decorations.start) {
          startArrowHead = getStraightArrowHeadPoints(start.point, end.point, arrowHeadLength);
        }
        if (decorations.end) {
          endArrowHead = getStraightArrowHeadPoints(end.point, start.point, arrowHeadLength);
        }
        shaftPath = arrowDist > 2 ? /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("path", {
          className: "tl-stroke-hitarea",
          d: path
        }), /* @__PURE__ */ React4.createElement("path", {
          d: path,
          fill: styles2.stroke,
          stroke: styles2.stroke,
          strokeWidth: isDraw ? sw / 2 : sw,
          strokeDasharray,
          strokeDashoffset,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          pointerEvents: "stroke"
        })) : null;
      } else {
        const circle = getCtp(shape);
        const { center, radius, length } = getArrowArc(shape);
        const path = isDraw ? renderCurvedFreehandArrowShaft(shape, circle, length, easing) : getArrowArcPath(start, end, circle, shape.bend);
        const { strokeDasharray, strokeDashoffset } = import_core8.Utils.getPerfectDashProps(Math.abs(length), sw, shape.style.dash, 2, false);
        if (decorations.start) {
          startArrowHead = getCurvedArrowHeadPoints(start.point, arrowHeadLength, center, radius, length < 0);
        }
        if (decorations.end) {
          endArrowHead = getCurvedArrowHeadPoints(end.point, arrowHeadLength, center, radius, length >= 0);
        }
        shaftPath = /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("path", {
          className: "tl-stroke-hitarea",
          d: path
        }), /* @__PURE__ */ React4.createElement("path", {
          d: path,
          fill: isDraw ? styles2.stroke : "none",
          stroke: styles2.stroke,
          strokeWidth: isDraw ? 0 : sw,
          strokeDasharray,
          strokeDashoffset,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          pointerEvents: "none"
        }));
      }
      return /* @__PURE__ */ React4.createElement(import_core8.SVGContainer, __spreadValues({
        ref,
        id: shape.id + "_svg"
      }, events), /* @__PURE__ */ React4.createElement("g", {
        pointerEvents: "none",
        opacity: isGhost ? GHOSTED_OPACITY : 1
      }, shaftPath, startArrowHead && /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("path", {
        className: "tl-stroke-hitarea",
        d: `M ${startArrowHead.left} L ${start.point} ${startArrowHead.right}`
      }), /* @__PURE__ */ React4.createElement("path", {
        d: `M ${startArrowHead.left} L ${start.point} ${startArrowHead.right}`,
        fill: "none",
        stroke: styles2.stroke,
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        pointerEvents: "none"
      })), endArrowHead && /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("path", {
        className: "tl-stroke-hitarea",
        d: `M ${endArrowHead.left} L ${end.point} ${endArrowHead.right}`
      }), /* @__PURE__ */ React4.createElement("path", {
        d: `M ${endArrowHead.left} L ${end.point} ${endArrowHead.right}`,
        fill: "none",
        stroke: styles2.stroke,
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        pointerEvents: "none"
      }))));
    });
    this.Indicator = TDShapeUtil.Indicator(({ shape }) => {
      return /* @__PURE__ */ React4.createElement("path", {
        d: getArrowPath(shape)
      });
    });
    this.getBounds = (shape) => {
      const bounds = import_core8.Utils.getFromCache(this.boundsCache, shape, () => {
        return import_core8.Utils.getBoundsFromPoints(getArcPoints(shape));
      });
      return import_core8.Utils.translateBounds(bounds, shape.point);
    };
    this.getRotatedBounds = (shape) => {
      let points = getArcPoints(shape);
      const { minX, minY, maxX, maxY } = import_core8.Utils.getBoundsFromPoints(points);
      if (shape.rotation !== 0) {
        points = points.map((pt) => import_vec8.Vec.rotWith(pt, [(minX + maxX) / 2, (minY + maxY) / 2], shape.rotation || 0));
      }
      return import_core8.Utils.translateBounds(import_core8.Utils.getBoundsFromPoints(points), shape.point);
    };
    this.getCenter = (shape) => {
      const { start, end } = shape.handles;
      return import_vec8.Vec.add(shape.point, import_vec8.Vec.med(start.point, end.point));
    };
    this.shouldRender = (prev, next) => {
      return next.decorations !== prev.decorations || next.handles !== prev.handles || next.style !== prev.style;
    };
    this.hitTestPoint = (shape, point) => {
      const pt = import_vec8.Vec.sub(point, shape.point);
      const points = getArcPoints(shape);
      for (let i = 1; i < points.length; i++) {
        if (import_vec8.Vec.distanceToLineSegment(points[i - 1], points[i], pt) < 1) {
          return true;
        }
      }
      return false;
    };
    this.hitTestLineSegment = (shape, A, B) => {
      const ptA = import_vec8.Vec.sub(A, shape.point);
      const ptB = import_vec8.Vec.sub(B, shape.point);
      const points = getArcPoints(shape);
      for (let i = 1; i < points.length; i++) {
        if ((0, import_intersect4.intersectLineSegmentLineSegment)(points[i - 1], points[i], ptA, ptB).didIntersect) {
          return true;
        }
      }
      return false;
    };
    this.hitTestBounds = (shape, bounds) => {
      const { start, end, bend } = shape.handles;
      const sp = import_vec8.Vec.add(shape.point, start.point);
      const ep = import_vec8.Vec.add(shape.point, end.point);
      if (import_core8.Utils.pointInBounds(sp, bounds) || import_core8.Utils.pointInBounds(ep, bounds)) {
        return true;
      }
      if (import_vec8.Vec.isEqual(import_vec8.Vec.med(start.point, end.point), bend.point)) {
        return (0, import_intersect4.intersectLineSegmentBounds)(sp, ep, bounds).length > 0;
      } else {
        const [cx, cy, r] = getCtp(shape);
        const cp = import_vec8.Vec.add(shape.point, [cx, cy]);
        return (0, import_intersect4.intersectArcBounds)(cp, r, sp, ep, bounds).length > 0;
      }
    };
    this.transform = (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const initialShapeBounds = this.getBounds(initialShape);
      const handles = ["start", "end"];
      const nextHandles = __spreadValues({}, initialShape.handles);
      handles.forEach((handle) => {
        const [x, y] = nextHandles[handle].point;
        const nw = x / initialShapeBounds.width;
        const nh = y / initialShapeBounds.height;
        nextHandles[handle] = __spreadProps(__spreadValues({}, nextHandles[handle]), {
          point: [
            bounds.width * (scaleX < 0 ? 1 - nw : nw),
            bounds.height * (scaleY < 0 ? 1 - nh : nh)
          ]
        });
      });
      const { start, bend, end } = nextHandles;
      const dist = import_vec8.Vec.dist(start.point, end.point);
      const midPoint = import_vec8.Vec.med(start.point, end.point);
      const bendDist = dist / 2 * initialShape.bend;
      const u = import_vec8.Vec.uni(import_vec8.Vec.vec(start.point, end.point));
      const point = import_vec8.Vec.add(midPoint, import_vec8.Vec.mul(import_vec8.Vec.per(u), bendDist));
      nextHandles["bend"] = __spreadProps(__spreadValues({}, bend), {
        point: import_vec8.Vec.toFixed(Math.abs(bendDist) < 10 ? midPoint : point)
      });
      return {
        point: import_vec8.Vec.toFixed([bounds.minX, bounds.minY]),
        handles: nextHandles
      };
    };
    this.onDoubleClickHandle = (shape, handle) => {
      var _a, _b;
      switch (handle) {
        case "bend": {
          return {
            bend: 0,
            handles: __spreadProps(__spreadValues({}, shape.handles), {
              bend: __spreadProps(__spreadValues({}, shape.handles.bend), {
                point: getBendPoint(shape.handles, shape.bend)
              })
            })
          };
        }
        case "start": {
          return {
            decorations: __spreadProps(__spreadValues({}, shape.decorations), {
              start: ((_a = shape.decorations) == null ? void 0 : _a.start) ? void 0 : Decoration.Arrow
            })
          };
        }
        case "end": {
          return {
            decorations: __spreadProps(__spreadValues({}, shape.decorations), {
              end: ((_b = shape.decorations) == null ? void 0 : _b.end) ? void 0 : Decoration.Arrow
            })
          };
        }
      }
      return this;
    };
    this.onBindingChange = (shape, binding, target, targetBounds, center) => {
      const handle = shape.handles[binding.handleId];
      const expandedBounds = import_core8.Utils.expandBounds(targetBounds, BINDING_DISTANCE);
      const anchor = import_vec8.Vec.sub(import_vec8.Vec.add([expandedBounds.minX, expandedBounds.minY], import_vec8.Vec.mulV([expandedBounds.width, expandedBounds.height], import_vec8.Vec.rotWith(binding.point, [0.5, 0.5], target.rotation || 0))), shape.point);
      let handlePoint = anchor;
      if (binding.distance) {
        const intersectBounds = import_core8.Utils.expandBounds(targetBounds, binding.distance);
        const origin = import_vec8.Vec.add(shape.point, shape.handles[handle.id === "start" ? "end" : "start"].point);
        const direction = import_vec8.Vec.uni(import_vec8.Vec.sub(import_vec8.Vec.add(anchor, shape.point), origin));
        if (target.type === TDShapeType.Ellipse) {
          const hits = (0, import_intersect4.intersectRayEllipse)(origin, direction, center, target.radius[0] + binding.distance, target.radius[1] + binding.distance, target.rotation || 0).points.sort((a, b) => import_vec8.Vec.dist(a, origin) - import_vec8.Vec.dist(b, origin));
          if (hits[0]) {
            handlePoint = import_vec8.Vec.sub(hits[0], shape.point);
          }
        } else {
          let hits = (0, import_intersect4.intersectRayBounds)(origin, direction, intersectBounds, target.rotation).filter((int) => int.didIntersect).map((int) => int.points[0]).sort((a, b) => import_vec8.Vec.dist(a, origin) - import_vec8.Vec.dist(b, origin));
          if (hits.length < 2) {
            hits = (0, import_intersect4.intersectRayBounds)(origin, import_vec8.Vec.neg(direction), intersectBounds).filter((int) => int.didIntersect).map((int) => int.points[0]).sort((a, b) => import_vec8.Vec.dist(a, origin) - import_vec8.Vec.dist(b, origin));
          }
          if (hits[0]) {
            handlePoint = import_vec8.Vec.sub(hits[0], shape.point);
          }
        }
      }
      return this.onHandleChange(shape, {
        [handle.id]: __spreadProps(__spreadValues({}, handle), {
          point: import_vec8.Vec.toFixed(handlePoint)
        })
      });
    };
    this.onHandleChange = (shape, handles) => {
      let nextHandles = import_core8.Utils.deepMerge(shape.handles, handles);
      let nextBend = shape.bend;
      nextHandles = __spreadProps(__spreadValues({}, nextHandles), {
        start: __spreadProps(__spreadValues({}, nextHandles.start), {
          point: import_vec8.Vec.toFixed(nextHandles.start.point)
        }),
        end: __spreadProps(__spreadValues({}, nextHandles.end), {
          point: import_vec8.Vec.toFixed(nextHandles.end.point)
        })
      });
      if ("bend" in handles) {
        const { start, end, bend } = nextHandles;
        const distance = import_vec8.Vec.dist(start.point, end.point);
        const midPoint = import_vec8.Vec.med(start.point, end.point);
        const angle = import_vec8.Vec.angle(start.point, end.point);
        const u = import_vec8.Vec.uni(import_vec8.Vec.vec(start.point, end.point));
        const ap = import_vec8.Vec.add(midPoint, import_vec8.Vec.mul(import_vec8.Vec.per(u), distance / 2));
        const bp = import_vec8.Vec.sub(midPoint, import_vec8.Vec.mul(import_vec8.Vec.per(u), distance / 2));
        const bendPoint = import_vec8.Vec.nearestPointOnLineSegment(ap, bp, bend.point, true);
        const bendDist = import_vec8.Vec.dist(midPoint, bendPoint);
        nextBend = import_core8.Utils.clamp(bendDist / (distance / 2), -0.99, 0.99);
        const angleToBend = import_vec8.Vec.angle(start.point, bendPoint);
        if (import_vec8.Vec.isEqual(midPoint, getBendPoint(nextHandles, nextBend))) {
          nextBend = 0;
        } else if (isAngleBetween(angle, angle + Math.PI, angleToBend)) {
          nextBend *= -1;
        }
      }
      const nextShape = {
        point: shape.point,
        bend: nextBend,
        handles: __spreadProps(__spreadValues({}, nextHandles), {
          bend: __spreadProps(__spreadValues({}, nextHandles.bend), {
            point: getBendPoint(nextHandles, nextBend)
          })
        })
      };
      const topLeft = shape.point;
      const nextBounds = this.getBounds(__spreadValues({}, nextShape));
      const offset = import_vec8.Vec.sub([nextBounds.minX, nextBounds.minY], topLeft);
      if (!import_vec8.Vec.isEqual(offset, [0, 0])) {
        Object.values(nextShape.handles).forEach((handle) => {
          handle.point = import_vec8.Vec.toFixed(import_vec8.Vec.sub(handle.point, offset));
        });
        nextShape.point = import_vec8.Vec.toFixed(import_vec8.Vec.add(nextShape.point, offset));
      }
      return nextShape;
    };
  }
};

// src/state/shapes/GroupUtil/GroupUtil.tsx
var React5 = __toModule(require("react"));
var import_core9 = __toModule(require("@tldraw/core"));
var GroupUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Group;
    this.canBind = true;
    this.getShape = (props) => {
      return import_core9.Utils.deepMerge({
        id: "id",
        type: TDShapeType.Group,
        name: "Group",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        size: [100, 100],
        rotation: 0,
        children: [],
        style: defaultStyle
      }, props);
    };
    this.Component = TDShapeUtil.Component(({ shape, isBinding, isGhost, isHovered, isSelected, events }, ref) => {
      const { id, size } = shape;
      const sw = 2;
      const w = Math.max(0, size[0] - sw / 2);
      const h = Math.max(0, size[1] - sw / 2);
      const strokes2 = [
        [[sw / 2, sw / 2], [w, sw / 2], w - sw / 2],
        [[w, sw / 2], [w, h], h - sw / 2],
        [[w, h], [sw / 2, h], w - sw / 2],
        [[sw / 2, h], [sw / 2, sw / 2], h - sw / 2]
      ];
      const paths = strokes2.map(([start, end], i) => {
        return /* @__PURE__ */ React5.createElement("line", {
          key: id + "_" + i,
          x1: start[0],
          y1: start[1],
          x2: end[0],
          y2: end[1]
        });
      });
      return /* @__PURE__ */ React5.createElement(import_core9.SVGContainer, __spreadValues({
        ref
      }, events), isBinding && /* @__PURE__ */ React5.createElement("rect", {
        className: "tl-binding-indicator",
        x: -BINDING_DISTANCE,
        y: -BINDING_DISTANCE,
        width: size[0] + BINDING_DISTANCE * 2,
        height: size[1] + BINDING_DISTANCE * 2
      }), /* @__PURE__ */ React5.createElement("g", {
        opacity: isGhost ? GHOSTED_OPACITY : 1
      }, /* @__PURE__ */ React5.createElement("rect", {
        x: 0,
        y: 0,
        width: size[0],
        height: size[1],
        fill: "transparent",
        pointerEvents: "all"
      }), /* @__PURE__ */ React5.createElement(ScaledLines, {
        stroke: ColorStyle.Black,
        opacity: isHovered || isSelected ? 1 : 0,
        strokeLinecap: "round",
        pointerEvents: "stroke"
      }, paths)));
    });
    this.Indicator = TDShapeUtil.Indicator(({ shape }) => {
      const { id, size } = shape;
      const sw = 2;
      const w = Math.max(0, size[0] - sw / 2);
      const h = Math.max(0, size[1] - sw / 2);
      const strokes2 = [
        [[sw / 2, sw / 2], [w, sw / 2], w - sw / 2],
        [[w, sw / 2], [w, h], h - sw / 2],
        [[w, h], [sw / 2, h], w - sw / 2],
        [[sw / 2, h], [sw / 2, sw / 2], h - sw / 2]
      ];
      const paths = strokes2.map(([start, end], i) => {
        return /* @__PURE__ */ React5.createElement("line", {
          key: id + "_" + i,
          x1: start[0],
          y1: start[1],
          x2: end[0],
          y2: end[1]
        });
      });
      return /* @__PURE__ */ React5.createElement(ScaledLines, {
        strokeLinecap: "round",
        pointerEvents: "stroke"
      }, paths);
    });
    this.getBounds = (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    };
    this.shouldRender = (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style;
    };
  }
};
var ScaledLines = styled("g", {
  strokeWidth: "calc(1.5px * var(--tl-scale))",
  strokeDasharray: `calc(1px * var(--tl-scale)), calc(3px * var(--tl-scale))`
});

// src/state/shapes/StickyUtil/StickyUtil.tsx
var React6 = __toModule(require("react"));
var import_core10 = __toModule(require("@tldraw/core"));
var import_vec9 = __toModule(require("@tldraw/vec"));

// src/state/shapes/shared/getTextAlign.ts
var ALIGN_VALUES = {
  [AlignStyle.Start]: "left",
  [AlignStyle.Middle]: "center",
  [AlignStyle.End]: "right",
  [AlignStyle.Justify]: "justify"
};
function getTextAlign(alignStyle = AlignStyle.Start) {
  return ALIGN_VALUES[alignStyle];
}

// src/state/shapes/shared/getTextSvgElement.ts
function getTextSvgElement(shape, bounds) {
  const { text, style } = shape;
  const fontSize = getFontSize(shape.style.size, shape.style.font);
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const LINE_HEIGHT = fontSize * 1.3;
  const textLines = text.split("\n").map((line, i) => {
    const textElm = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElm.textContent = line;
    textElm.setAttribute("font-family", getFontFace(style.font));
    textElm.setAttribute("font-size", fontSize + "px");
    textElm.setAttribute("text-anchor", "start");
    textElm.setAttribute("alignment-baseline", "central");
    textElm.setAttribute("text-align", getTextAlign(style.textAlign));
    textElm.setAttribute("y", LINE_HEIGHT * (0.5 + i) + "");
    g.appendChild(textElm);
    return textElm;
  });
  if (style.textAlign === AlignStyle.Middle) {
    textLines.forEach((textElm) => {
      textElm.setAttribute("x", bounds.width / 2 + "");
      textElm.setAttribute("text-align", "center");
      textElm.setAttribute("text-anchor", "middle");
    });
  } else if (style.textAlign === AlignStyle.End) {
    textLines.forEach((textElm) => {
      textElm.setAttribute("x", bounds.width + "");
      textElm.setAttribute("text-align", "right");
      textElm.setAttribute("text-anchor", "end");
    });
  }
  return g;
}

// src/components/stopPropagation.ts
var stopPropagation = (e) => e.stopPropagation();

// src/state/shapes/StickyUtil/StickyUtil.tsx
var StickyUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Sticky;
    this.canBind = true;
    this.canEdit = true;
    this.canClone = true;
    this.hideResizeHandles = true;
    this.showCloneHandles = true;
    this.getShape = (props) => {
      return import_core10.Utils.deepMerge({
        id: "id",
        type: TDShapeType.Sticky,
        name: "Sticky",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        size: [200, 200],
        text: "",
        rotation: 0,
        style: defaultTextStyle
      }, props);
    };
    this.Component = TDShapeUtil.Component(({ shape, meta, events, isGhost, isEditing, onShapeBlur, onShapeChange }, ref) => {
      const font = getStickyFontStyle(shape.style);
      const { color, fill } = getStickyShapeStyle(shape.style, meta.isDarkMode);
      const rContainer = React6.useRef(null);
      const rTextArea = React6.useRef(null);
      const rText = React6.useRef(null);
      const rIsMounted = React6.useRef(false);
      const handlePointerDown = React6.useCallback((e) => {
        e.stopPropagation();
      }, []);
      const handleTextChange = React6.useCallback((e) => {
        onShapeChange == null ? void 0 : onShapeChange({
          id: shape.id,
          type: shape.type,
          text: TLDR.normalizeText(e.currentTarget.value)
        });
      }, [onShapeChange]);
      const handleKeyDown = React6.useCallback((e) => {
        if (e.key === "Escape")
          return;
        if (e.key === "Tab" && shape.text.length === 0) {
          e.preventDefault();
          return;
        }
        if (!(e.key === "Meta" || e.metaKey)) {
          e.stopPropagation();
        } else if (e.key === "z" && e.metaKey) {
          if (e.shiftKey) {
            document.execCommand("redo", false);
          } else {
            document.execCommand("undo", false);
          }
          e.stopPropagation();
          e.preventDefault();
          return;
        }
        if (e.key === "Tab") {
          e.preventDefault();
          if (e.shiftKey) {
            TextAreaUtils.unindent(e.currentTarget);
          } else {
            TextAreaUtils.indent(e.currentTarget);
          }
          onShapeChange == null ? void 0 : onShapeChange(__spreadProps(__spreadValues({}, shape), { text: TLDR.normalizeText(e.currentTarget.value) }));
        }
      }, [shape, onShapeChange]);
      const handleBlur = React6.useCallback((e) => {
        e.currentTarget.setSelectionRange(0, 0);
        onShapeBlur == null ? void 0 : onShapeBlur();
      }, []);
      const handleFocus = React6.useCallback((e) => {
        if (!isEditing)
          return;
        if (!rIsMounted.current)
          return;
        e.currentTarget.select();
      }, [isEditing]);
      React6.useEffect(() => {
        if (isEditing) {
          rIsMounted.current = true;
          const elm = rTextArea.current;
          elm.focus();
          elm.select();
        }
      }, [isEditing]);
      React6.useEffect(() => {
        const text = rText.current;
        const { size } = shape;
        const { offsetHeight: currTextHeight } = text;
        const minTextHeight = MIN_CONTAINER_HEIGHT - PADDING * 2;
        const prevTextHeight = size[1] - PADDING * 2;
        if (currTextHeight === prevTextHeight)
          return;
        if (currTextHeight > minTextHeight) {
          onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, size: [size[0], currTextHeight + PADDING * 2] });
          return;
        }
        if (currTextHeight < minTextHeight && size[1] > MIN_CONTAINER_HEIGHT) {
          onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, size: [size[0], MIN_CONTAINER_HEIGHT] });
          return;
        }
        const textarea = rTextArea.current;
        textarea == null ? void 0 : textarea.focus();
      }, [shape.text, shape.size[1], shape.style]);
      const style = {
        font,
        color,
        textShadow: meta.isDarkMode ? `0.5px 0.5px 2px rgba(255, 255, 255,.25)` : `0.5px 0.5px 2px rgba(255, 255, 255,.5)`
      };
      return /* @__PURE__ */ React6.createElement(import_core10.HTMLContainer, __spreadValues({
        ref
      }, events), /* @__PURE__ */ React6.createElement(StyledStickyContainer, {
        ref: rContainer,
        isDarkMode: meta.isDarkMode,
        isGhost,
        style: __spreadValues({ backgroundColor: fill }, style)
      }, /* @__PURE__ */ React6.createElement(StyledText, {
        ref: rText,
        isEditing,
        alignment: shape.style.textAlign
      }, shape.text, "\u200B"), isEditing && /* @__PURE__ */ React6.createElement(StyledTextArea, {
        ref: rTextArea,
        onPointerDown: handlePointerDown,
        value: shape.text,
        onChange: handleTextChange,
        onKeyDown: handleKeyDown,
        onFocus: handleFocus,
        onBlur: handleBlur,
        tabIndex: -1,
        autoComplete: "false",
        autoCapitalize: "false",
        autoCorrect: "false",
        autoSave: "false",
        autoFocus: true,
        spellCheck: true,
        alignment: shape.style.textAlign,
        onContextMenu: stopPropagation
      })));
    });
    this.Indicator = TDShapeUtil.Indicator(({ shape }) => {
      const {
        size: [width, height]
      } = shape;
      return /* @__PURE__ */ React6.createElement("rect", {
        x: 0,
        y: 0,
        rx: 3,
        ry: 3,
        width: Math.max(1, width),
        height: Math.max(1, height)
      });
    });
    this.getBounds = (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    };
    this.shouldRender = (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style || next.text !== prev.text;
    };
    this.transform = (shape, bounds, { scaleX, scaleY, transformOrigin }) => {
      const point = import_vec9.Vec.toFixed([
        bounds.minX + (bounds.width - shape.size[0]) * (scaleX < 0 ? 1 - transformOrigin[0] : transformOrigin[0]),
        bounds.minY + (bounds.height - shape.size[1]) * (scaleY < 0 ? 1 - transformOrigin[1] : transformOrigin[1])
      ]);
      return {
        point
      };
    };
    this.transformSingle = (shape) => {
      return shape;
    };
    this.getSvgElement = (shape) => {
      const bounds = this.getBounds(shape);
      const textElm = getTextSvgElement(shape, bounds);
      const style = getStickyShapeStyle(shape.style);
      textElm.setAttribute("fill", style.color);
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("width", bounds.width + "");
      rect.setAttribute("height", bounds.height + "");
      rect.setAttribute("fill", style.fill);
      g.appendChild(rect);
      g.appendChild(textElm);
      return g;
    };
  }
};
var PADDING = 16;
var MIN_CONTAINER_HEIGHT = 200;
var StyledStickyContainer = styled("div", {
  pointerEvents: "all",
  position: "relative",
  backgroundColor: "rgba(255, 220, 100)",
  fontFamily: "sans-serif",
  height: "100%",
  width: "100%",
  padding: PADDING + "px",
  borderRadius: "3px",
  perspective: "800px",
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    },
    isDarkMode: {
      true: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)"
      },
      false: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)"
      }
    }
  }
});
var commonTextWrapping = {
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word"
};
var StyledText = styled("div", __spreadValues({
  position: "absolute",
  top: PADDING,
  left: PADDING,
  width: `calc(100% - ${PADDING * 2}px)`,
  height: "fit-content",
  font: "inherit",
  pointerEvents: "none",
  userSelect: "none",
  variants: {
    isEditing: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 1
      }
    },
    alignment: {
      [AlignStyle.Start]: {
        textAlign: "left"
      },
      [AlignStyle.Middle]: {
        textAlign: "center"
      },
      [AlignStyle.End]: {
        textAlign: "right"
      },
      [AlignStyle.Justify]: {
        textAlign: "justify"
      }
    }
  }
}, commonTextWrapping));
var StyledTextArea = styled("textarea", __spreadProps(__spreadValues({
  width: "100%",
  height: "100%",
  border: "none",
  overflow: "hidden",
  background: "none",
  outline: "none",
  textAlign: "left",
  font: "inherit",
  padding: 0,
  color: "transparent",
  verticalAlign: "top",
  resize: "none",
  caretColor: "black"
}, commonTextWrapping), {
  variants: {
    alignment: {
      [AlignStyle.Start]: {
        textAlign: "left"
      },
      [AlignStyle.Middle]: {
        textAlign: "center"
      },
      [AlignStyle.End]: {
        textAlign: "right"
      },
      [AlignStyle.Justify]: {
        textAlign: "justify"
      }
    }
  }
}));

// src/state/shapes/TextUtil/TextUtil.tsx
var React7 = __toModule(require("react"));
var import_core11 = __toModule(require("@tldraw/core"));
var import_vec10 = __toModule(require("@tldraw/vec"));
var TextUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Text;
    this.isAspectRatioLocked = true;
    this.canEdit = true;
    this.canBind = true;
    this.canClone = true;
    this.getShape = (props) => {
      return import_core11.Utils.deepMerge({
        id: "id",
        type: TDShapeType.Text,
        name: "Text",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        rotation: 0,
        text: " ",
        style: defaultTextStyle
      }, props);
    };
    this.Component = TDShapeUtil.Component(({ shape, isBinding, isGhost, isEditing, onShapeBlur, onShapeChange, meta, events }, ref) => {
      const rInput = React7.useRef(null);
      const { text, style } = shape;
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const font = getFontStyle(shape.style);
      const rIsMounted = React7.useRef(false);
      const handleChange = React7.useCallback((e) => {
        let delta = [0, 0];
        const currentBounds = this.getBounds(shape);
        switch (shape.style.textAlign) {
          case AlignStyle.Start: {
            break;
          }
          case AlignStyle.Middle: {
            const nextBounds = this.getBounds(__spreadProps(__spreadValues({}, shape), {
              text: TLDR.normalizeText(e.currentTarget.value)
            }));
            delta = import_vec10.Vec.div([nextBounds.width - currentBounds.width, 0], 2);
            break;
          }
          case AlignStyle.End: {
            const nextBounds = this.getBounds(__spreadProps(__spreadValues({}, shape), {
              text: TLDR.normalizeText(e.currentTarget.value)
            }));
            delta = [nextBounds.width - currentBounds.width, 0];
            break;
          }
        }
        onShapeChange == null ? void 0 : onShapeChange(__spreadProps(__spreadValues({}, shape), {
          point: import_vec10.Vec.sub(shape.point, delta),
          text: TLDR.normalizeText(e.currentTarget.value)
        }));
      }, [shape]);
      const handleKeyDown = React7.useCallback((e) => {
        if (!(e.key === "Meta" || e.metaKey)) {
          e.stopPropagation();
        } else if (e.key === "z" && e.metaKey) {
          if (e.shiftKey) {
            document.execCommand("redo", false);
          } else {
            document.execCommand("undo", false);
          }
          e.stopPropagation();
          e.preventDefault();
          return;
        }
        if (e.key === "Escape" || e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
          e.currentTarget.blur();
          return;
        }
        if (e.key === "Tab") {
          e.preventDefault();
          if (e.shiftKey) {
            TextAreaUtils.unindent(e.currentTarget);
          } else {
            TextAreaUtils.indent(e.currentTarget);
          }
          onShapeChange == null ? void 0 : onShapeChange(__spreadProps(__spreadValues({}, shape), { text: TLDR.normalizeText(e.currentTarget.value) }));
        }
      }, [shape, onShapeChange]);
      const handleBlur = React7.useCallback((e) => {
        e.currentTarget.setSelectionRange(0, 0);
        onShapeBlur == null ? void 0 : onShapeBlur();
      }, []);
      const handleFocus = React7.useCallback((e) => {
        if (!isEditing)
          return;
        if (!rIsMounted.current)
          return;
        if (document.activeElement === e.currentTarget) {
          e.currentTarget.select();
        }
      }, [isEditing]);
      const handlePointerDown = React7.useCallback((e) => {
        if (isEditing) {
          e.stopPropagation();
        }
      }, [isEditing]);
      React7.useEffect(() => {
        if (isEditing) {
          requestAnimationFrame(() => {
            rIsMounted.current = true;
            const elm = rInput.current;
            if (elm) {
              elm.focus();
              elm.select();
            }
          });
        } else {
          onShapeBlur == null ? void 0 : onShapeBlur();
        }
      }, [isEditing]);
      return /* @__PURE__ */ React7.createElement(import_core11.HTMLContainer, __spreadValues({
        ref
      }, events), /* @__PURE__ */ React7.createElement(Wrapper, {
        isGhost,
        isEditing,
        onPointerDown: handlePointerDown
      }, /* @__PURE__ */ React7.createElement(InnerWrapper, {
        style: {
          font,
          color: styles2.stroke,
          textAlign: getTextAlign(style.textAlign)
        }
      }, isBinding && /* @__PURE__ */ React7.createElement("div", {
        className: "tl-binding-indicator",
        style: {
          position: "absolute",
          top: -BINDING_DISTANCE,
          left: -BINDING_DISTANCE,
          width: `calc(100% + ${BINDING_DISTANCE * 2}px)`,
          height: `calc(100% + ${BINDING_DISTANCE * 2}px)`,
          backgroundColor: "var(--tl-selectFill)"
        }
      }), isEditing ? /* @__PURE__ */ React7.createElement(TextArea, {
        ref: rInput,
        style: {
          font,
          color: styles2.stroke,
          textAlign: "inherit"
        },
        name: "text",
        defaultValue: text,
        tabIndex: -1,
        autoComplete: "false",
        autoCapitalize: "false",
        autoCorrect: "false",
        autoSave: "false",
        autoFocus: true,
        placeholder: "",
        color: styles2.stroke,
        onFocus: handleFocus,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        onPointerDown: handlePointerDown,
        spellCheck: "true",
        wrap: "off",
        dir: "auto",
        datatype: "wysiwyg",
        onContextMenu: stopPropagation
      }) : text, "\u200B")));
    });
    this.Indicator = TDShapeUtil.Indicator(({ shape }) => {
      const { width, height } = this.getBounds(shape);
      return /* @__PURE__ */ React7.createElement("rect", {
        x: 0,
        y: 0,
        width,
        height
      });
    });
    this.getBounds = (shape) => {
      const bounds = import_core11.Utils.getFromCache(this.boundsCache, shape, () => {
        if (!melm) {
          return { minX: 0, minY: 0, maxX: 10, maxY: 10, width: 10, height: 10 };
        }
        melm.innerHTML = `${shape.text}&zwj;`;
        melm.style.font = getFontStyle(shape.style);
        const width = melm.offsetWidth || 1;
        const height = melm.offsetHeight || 1;
        return {
          minX: 0,
          maxX: width,
          minY: 0,
          maxY: height,
          width,
          height
        };
      });
      return import_core11.Utils.translateBounds(bounds, shape.point);
    };
    this.shouldRender = (prev, next) => {
      return next.text !== prev.text || next.style.scale !== prev.style.scale || next.style !== prev.style;
    };
    this.transform = (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const {
        rotation = 0,
        style: { scale = 1 }
      } = initialShape;
      const nextScale = scale * Math.abs(Math.min(scaleX, scaleY));
      return {
        point: [bounds.minX, bounds.minY],
        rotation: scaleX < 0 && scaleY >= 0 || scaleY < 0 && scaleX >= 0 ? -(rotation || 0) : rotation,
        style: __spreadProps(__spreadValues({}, initialShape.style), {
          scale: nextScale
        })
      };
    };
    this.transformSingle = (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const {
        style: { scale = 1 }
      } = initialShape;
      return {
        point: import_vec10.Vec.toFixed([bounds.minX, bounds.minY]),
        style: __spreadProps(__spreadValues({}, initialShape.style), {
          scale: scale * Math.max(Math.abs(scaleY), Math.abs(scaleX))
        })
      };
    };
    this.onDoubleClickBoundsHandle = (shape) => {
      const center = this.getCenter(shape);
      const newCenter = this.getCenter(__spreadProps(__spreadValues({}, shape), {
        style: __spreadProps(__spreadValues({}, shape.style), {
          scale: 1
        })
      }));
      return {
        style: __spreadProps(__spreadValues({}, shape.style), {
          scale: 1
        }),
        point: import_vec10.Vec.toFixed(import_vec10.Vec.add(shape.point, import_vec10.Vec.sub(center, newCenter)))
      };
    };
    this.getSvgElement = (shape) => {
      const bounds = this.getBounds(shape);
      const elm = getTextSvgElement(shape, bounds);
      elm.setAttribute("fill", getShapeStyle(shape.style).stroke);
      return elm;
    };
  }
};
var LETTER_SPACING = -1.5;
var melm;
function getMeasurementDiv() {
  var _a;
  (_a = document.getElementById("__textMeasure")) == null ? void 0 : _a.remove();
  const pre = document.createElement("pre");
  pre.id = "__textMeasure";
  Object.assign(pre.style, {
    whiteSpace: "pre",
    width: "auto",
    border: "1px solid transparent",
    padding: "4px",
    margin: "0px",
    letterSpacing: `${LETTER_SPACING}px`,
    opacity: "0",
    position: "absolute",
    top: "-500px",
    left: "0px",
    zIndex: "9999",
    pointerEvents: "none",
    userSelect: "none",
    alignmentBaseline: "mathematical",
    dominantBaseline: "mathematical"
  });
  pre.tabIndex = -1;
  document.body.appendChild(pre);
  return pre;
}
if (typeof window !== "undefined") {
  melm = getMeasurementDiv();
}
var Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    },
    isEditing: {
      false: {
        pointerEvents: "all",
        userSelect: "all"
      },
      true: {
        pointerEvents: "none",
        userSelect: "none"
      }
    }
  }
});
var commonTextWrapping2 = {
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word"
};
var InnerWrapper = styled("div", __spreadValues({
  position: "absolute",
  top: "var(--tl-padding)",
  left: "var(--tl-padding)",
  width: "calc(100% - (var(--tl-padding) * 2))",
  height: "calc(100% - (var(--tl-padding) * 2))",
  padding: "4px",
  zIndex: 1,
  minHeight: 1,
  minWidth: 1,
  lineHeight: 1.4,
  letterSpacing: LETTER_SPACING,
  outline: 0,
  fontWeight: "500",
  backfaceVisibility: "hidden",
  userSelect: "none",
  pointerEvents: "none",
  WebkitUserSelect: "none",
  WebkitTouchCallout: "none",
  isEditing: {
    false: {},
    true: {
      pointerEvents: "all",
      background: "$boundsBg",
      userSelect: "text",
      WebkitUserSelect: "text"
    }
  }
}, commonTextWrapping2));
var TextArea = styled("textarea", __spreadValues({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  border: "none",
  padding: "4px",
  resize: "none",
  minHeight: "inherit",
  minWidth: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  outline: 0,
  fontWeight: "inherit",
  overflow: "hidden",
  backfaceVisibility: "hidden",
  display: "inline-block",
  pointerEvents: "all",
  background: "$boundsBg",
  userSelect: "text",
  WebkitUserSelect: "text"
}, commonTextWrapping2));

// src/state/shapes/DrawUtil/DrawUtil.tsx
var React8 = __toModule(require("react"));
var import_core13 = __toModule(require("@tldraw/core"));
var import_vec11 = __toModule(require("@tldraw/vec"));
var import_intersect5 = __toModule(require("@tldraw/intersect"));

// src/state/shapes/DrawUtil/drawHelpers.ts
var import_core12 = __toModule(require("@tldraw/core"));
var import_perfect_freehand4 = __toModule(require("perfect-freehand"));
var simulatePressureSettings = {
  easing: (t) => Math.sin(t * Math.PI / 2),
  simulatePressure: true
};
var realPressureSettings = {
  easing: (t) => t * t,
  simulatePressure: false
};
function getFreehandOptions(shape) {
  const styles2 = getShapeStyle(shape.style);
  const options2 = __spreadProps(__spreadValues({
    size: 1 + styles2.strokeWidth * 1.5,
    thinning: 0.65,
    streamline: 0.65,
    smoothing: 0.65
  }, shape.points[1][2] === 0.5 ? simulatePressureSettings : realPressureSettings), {
    last: shape.isComplete
  });
  return options2;
}
function getFillPath(shape) {
  if (shape.points.length < 2)
    return "";
  return import_core12.Utils.getSvgPathFromStroke((0, import_perfect_freehand4.getStrokePoints)(shape.points, getFreehandOptions(shape)).map((pt) => pt.point));
}
function getDrawStrokePoints(shape, options2) {
  return (0, import_perfect_freehand4.getStrokePoints)(shape.points, options2);
}
function getDrawStrokePathTDSnapshot(shape) {
  if (shape.points.length < 2)
    return "";
  const options2 = getFreehandOptions(shape);
  const strokePoints = getDrawStrokePoints(shape, options2);
  const stroke = (0, import_perfect_freehand4.getStrokeOutlinePoints)(strokePoints, options2);
  const path = import_core12.Utils.getSvgPathFromStroke(stroke);
  return path;
}
function getSolidStrokePathTDSnapshot(shape) {
  const { points } = shape;
  if (points.length < 2)
    return "M 0 0 L 0 0";
  const options2 = getFreehandOptions(shape);
  const strokePoints = getDrawStrokePoints(shape, options2).map((pt) => pt.point.slice(0, 2));
  const path = import_core12.Utils.getSvgPathFromStroke(strokePoints, false);
  return path;
}

// src/state/shapes/DrawUtil/DrawUtil.tsx
var DrawUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Draw;
    this.pointsBoundsCache = new WeakMap([]);
    this.shapeBoundsCache = new Map();
    this.rotatedCache = new WeakMap([]);
    this.pointCache = {};
    this.canClone = true;
    this.getShape = (props) => {
      return import_core13.Utils.deepMerge({
        id: "id",
        type: TDShapeType.Draw,
        name: "Draw",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        rotation: 0,
        style: defaultStyle,
        points: [],
        isComplete: false
      }, props);
    };
    this.Component = TDShapeUtil.Component(({ shape, meta, isSelected, isGhost, events }, ref) => {
      const { points, style, isComplete } = shape;
      const polygonPathTDSnapshot = React8.useMemo(() => {
        return getFillPath(shape);
      }, [points, style.size]);
      const pathTDSnapshot = React8.useMemo(() => {
        return style.dash === DashStyle.Draw ? getDrawStrokePathTDSnapshot(shape) : getSolidStrokePathTDSnapshot(shape);
      }, [points, style.size, style.dash, isComplete]);
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const { stroke, fill, strokeWidth } = styles2;
      const bounds = this.getBounds(shape);
      const verySmall = bounds.width <= strokeWidth / 2 && bounds.height <= strokeWidth / 2;
      if (verySmall) {
        const sw2 = 1 + strokeWidth;
        return /* @__PURE__ */ React8.createElement(import_core13.SVGContainer, __spreadValues({
          ref,
          id: shape.id + "_svg"
        }, events), /* @__PURE__ */ React8.createElement("circle", {
          r: sw2,
          fill: stroke,
          stroke,
          pointerEvents: "all",
          opacity: isGhost ? GHOSTED_OPACITY : 1
        }));
      }
      const shouldFill = style.isFilled && points.length > 3 && import_vec11.Vec.dist(points[0], points[points.length - 1]) < strokeWidth * 2;
      if (shape.style.dash === DashStyle.Draw) {
        return /* @__PURE__ */ React8.createElement(import_core13.SVGContainer, __spreadValues({
          ref,
          id: shape.id + "_svg"
        }, events), /* @__PURE__ */ React8.createElement("g", {
          opacity: isGhost ? GHOSTED_OPACITY : 1
        }, /* @__PURE__ */ React8.createElement("path", {
          className: shouldFill && isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
          d: pathTDSnapshot
        }), shouldFill && /* @__PURE__ */ React8.createElement("path", {
          d: polygonPathTDSnapshot,
          stroke: "none",
          fill,
          strokeLinejoin: "round",
          strokeLinecap: "round",
          pointerEvents: "none"
        }), /* @__PURE__ */ React8.createElement("path", {
          d: pathTDSnapshot,
          fill: stroke,
          stroke,
          strokeWidth: strokeWidth / 2,
          strokeLinejoin: "round",
          strokeLinecap: "round",
          pointerEvents: "none"
        })));
      }
      const strokeDasharray = {
        [DashStyle.Draw]: "none",
        [DashStyle.Solid]: `none`,
        [DashStyle.Dotted]: `0.1 ${strokeWidth * 4}`,
        [DashStyle.Dashed]: `${strokeWidth * 4} ${strokeWidth * 4}`
      }[style.dash];
      const strokeDashoffset = {
        [DashStyle.Draw]: "none",
        [DashStyle.Solid]: `none`,
        [DashStyle.Dotted]: `0`,
        [DashStyle.Dashed]: `0`
      }[style.dash];
      const sw = 1 + strokeWidth * 1.5;
      return /* @__PURE__ */ React8.createElement(import_core13.SVGContainer, __spreadValues({
        ref,
        id: shape.id + "_svg"
      }, events), /* @__PURE__ */ React8.createElement("g", {
        opacity: isGhost ? GHOSTED_OPACITY : 1
      }, /* @__PURE__ */ React8.createElement("path", {
        className: shouldFill && isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
        d: pathTDSnapshot
      }), /* @__PURE__ */ React8.createElement("path", {
        d: pathTDSnapshot,
        fill: shouldFill ? fill : "none",
        stroke: "none",
        strokeWidth: Math.min(4, strokeWidth * 2),
        strokeLinejoin: "round",
        strokeLinecap: "round",
        pointerEvents: "none"
      }), /* @__PURE__ */ React8.createElement("path", {
        d: pathTDSnapshot,
        fill: "none",
        stroke,
        strokeWidth: sw,
        strokeDasharray,
        strokeDashoffset,
        strokeLinejoin: "round",
        strokeLinecap: "round",
        pointerEvents: "none"
      })));
    });
    this.Indicator = TDShapeUtil.Indicator(({ shape }) => {
      const { points } = shape;
      const pathTDSnapshot = React8.useMemo(() => {
        return getSolidStrokePathTDSnapshot(shape);
      }, [points]);
      const bounds = this.getBounds(shape);
      const verySmall = bounds.width < 4 && bounds.height < 4;
      if (verySmall) {
        return /* @__PURE__ */ React8.createElement("circle", {
          x: bounds.width / 2,
          y: bounds.height / 2,
          r: 1
        });
      }
      return /* @__PURE__ */ React8.createElement("path", {
        d: pathTDSnapshot
      });
    });
    this.transform = (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const initialShapeBounds = import_core13.Utils.getFromCache(this.boundsCache, initialShape, () => import_core13.Utils.getBoundsFromPoints(initialShape.points));
      const points = initialShape.points.map(([x, y, r]) => {
        return [
          bounds.width * (scaleX < 0 ? 1 - x / initialShapeBounds.width : x / initialShapeBounds.width),
          bounds.height * (scaleY < 0 ? 1 - y / initialShapeBounds.height : y / initialShapeBounds.height),
          r
        ];
      });
      const newBounds = import_core13.Utils.getBoundsFromPoints(shape.points);
      const point = import_vec11.Vec.sub([bounds.minX, bounds.minY], [newBounds.minX, newBounds.minY]);
      return {
        points,
        point
      };
    };
    this.getBounds = (shape) => {
      const pointsHaveChanged = !this.pointsBoundsCache.has(shape.points);
      const pointHasChanged = !(this.pointCache[shape.id] === shape.point);
      if (pointsHaveChanged) {
        const bounds = import_core13.Utils.getBoundsFromPoints(shape.points);
        this.pointsBoundsCache.set(shape.points, bounds);
        this.shapeBoundsCache.set(shape.id, import_core13.Utils.translateBounds(bounds, shape.point));
        this.pointCache[shape.id] = shape.point;
      } else if (pointHasChanged && !pointsHaveChanged) {
        this.pointCache[shape.id] = shape.point;
        this.shapeBoundsCache.set(shape.id, import_core13.Utils.translateBounds(this.pointsBoundsCache.get(shape.points), shape.point));
      }
      return this.shapeBoundsCache.get(shape.id);
    };
    this.shouldRender = (prev, next) => {
      return next.points !== prev.points || next.style !== prev.style || next.isComplete !== prev.isComplete;
    };
    this.hitTestPoint = (shape, point) => {
      const ptA = import_vec11.Vec.sub(point, shape.point);
      return import_core13.Utils.pointInPolyline(ptA, shape.points);
    };
    this.hitTestLineSegment = (shape, A, B) => {
      const { points, point } = shape;
      const ptA = import_vec11.Vec.sub(A, point);
      const ptB = import_vec11.Vec.sub(B, point);
      const bounds = this.getBounds(shape);
      if (points.length <= 2) {
        return import_vec11.Vec.distanceToLineSegment(A, B, shape.point) < 4;
      }
      if ((0, import_intersect5.intersectLineSegmentBounds)(ptA, ptB, bounds)) {
        for (let i = 1; i < points.length; i++) {
          if ((0, import_intersect5.intersectLineSegmentLineSegment)(points[i - 1], points[i], ptA, ptB).didIntersect) {
            return true;
          }
        }
      }
      return false;
    };
    this.hitTestBounds = (shape, bounds) => {
      if (!shape.rotation) {
        const shapeBounds = this.getBounds(shape);
        return import_core13.Utils.boundsContain(bounds, shapeBounds) || (import_core13.Utils.boundsContain(shapeBounds, bounds) || (0, import_intersect5.intersectBoundsBounds)(shapeBounds, bounds).length > 0) && (0, import_intersect5.intersectBoundsPolyline)(import_core13.Utils.translateBounds(bounds, import_vec11.Vec.neg(shape.point)), shape.points).length > 0;
      }
      const rBounds = this.getRotatedBounds(shape);
      const rotatedBounds = import_core13.Utils.getFromCache(this.rotatedCache, shape, () => {
        const c = import_core13.Utils.getBoundsCenter(import_core13.Utils.getBoundsFromPoints(shape.points));
        return shape.points.map((pt) => import_vec11.Vec.rotWith(pt, c, shape.rotation || 0));
      });
      return import_core13.Utils.boundsContain(bounds, rBounds) || (0, import_intersect5.intersectBoundsPolyline)(import_core13.Utils.translateBounds(bounds, import_vec11.Vec.neg(shape.point)), rotatedBounds).length > 0;
    };
  }
};

// src/state/shapes/index.ts
var Rectangle = new RectangleUtil();
var Ellipse = new EllipseUtil();
var Draw = new DrawUtil();
var Arrow = new ArrowUtil();
var Text = new TextUtil();
var Group = new GroupUtil();
var Sticky = new StickyUtil();
var shapeUtils = {
  [TDShapeType.Rectangle]: Rectangle,
  [TDShapeType.Ellipse]: Ellipse,
  [TDShapeType.Draw]: Draw,
  [TDShapeType.Arrow]: Arrow,
  [TDShapeType.Text]: Text,
  [TDShapeType.Group]: Group,
  [TDShapeType.Sticky]: Sticky
};
var getShapeUtil = (shape) => {
  if (typeof shape === "string")
    return shapeUtils[shape];
  return shapeUtils[shape.type];
};

// src/state/TLDR.ts
var isDev = true;
var _TLDR = class {
  static getShapeUtil(shape) {
    return getShapeUtil(shape);
  }
  static getSelectedShapes(data, pageId) {
    const page = _TLDR.getPage(data, pageId);
    const selectedIds = _TLDR.getSelectedIds(data, pageId);
    return selectedIds.map((id) => page.shapes[id]);
  }
  static screenToWorld(data, point) {
    const camera = _TLDR.getPageState(data, data.appState.currentPageId).camera;
    return import_vec12.Vec.sub(import_vec12.Vec.div(point, camera.zoom), camera.point);
  }
  static getCameraZoom(zoom) {
    return import_core14.Utils.clamp(zoom, 0.1, 5);
  }
  static getPage(data, pageId) {
    return data.document.pages[pageId];
  }
  static getPageState(data, pageId) {
    return data.document.pageStates[pageId];
  }
  static getSelectedIds(data, pageId) {
    return _TLDR.getPageState(data, pageId).selectedIds;
  }
  static getShapes(data, pageId) {
    return Object.values(_TLDR.getPage(data, pageId).shapes);
  }
  static getCamera(data, pageId) {
    return _TLDR.getPageState(data, pageId).camera;
  }
  static getShape(data, shapeId, pageId) {
    return _TLDR.getPage(data, pageId).shapes[shapeId];
  }
  static getCenter(shape) {
    return _TLDR.getShapeUtil(shape).getCenter(shape);
  }
  static getBounds(shape) {
    return _TLDR.getShapeUtil(shape).getBounds(shape);
  }
  static getRotatedBounds(shape) {
    return _TLDR.getShapeUtil(shape).getRotatedBounds(shape);
  }
  static getSelectedBounds(data) {
    return import_core14.Utils.getCommonBounds(_TLDR.getSelectedShapes(data, data.appState.currentPageId).map((shape) => _TLDR.getShapeUtil(shape).getBounds(shape)));
  }
  static getParentId(data, id, pageId) {
    return _TLDR.getShape(data, id, pageId).parentId;
  }
  static getDocumentBranch(data, id, pageId) {
    const shape = _TLDR.getShape(data, id, pageId);
    if (shape.children === void 0)
      return [id];
    return [
      id,
      ...shape.children.flatMap((childId) => _TLDR.getDocumentBranch(data, childId, pageId))
    ];
  }
  static getSelectedBranchSnapshot(data, pageId, fn) {
    const page = _TLDR.getPage(data, pageId);
    const copies = _TLDR.getSelectedIds(data, pageId).flatMap((id) => _TLDR.getDocumentBranch(data, id, pageId).map((id2) => page.shapes[id2])).filter((shape) => !shape.isLocked).map(import_core14.Utils.deepClone);
    if (fn !== void 0) {
      return copies.map((shape) => __spreadValues({ id: shape.id }, fn(shape)));
    }
    return copies;
  }
  static getSelectedShapeSnapshot(data, pageId, fn) {
    const copies = _TLDR.getSelectedShapes(data, pageId).filter((shape) => !shape.isLocked).map(import_core14.Utils.deepClone);
    if (fn !== void 0) {
      return copies.map((shape) => __spreadValues({ id: shape.id }, fn(shape)));
    }
    return copies;
  }
  static getAllEffectedShapeIds(data, ids, pageId) {
    const page = _TLDR.getPage(data, pageId);
    const visited = new Set(ids);
    ids.forEach((id) => {
      const shape = page.shapes[id];
      function collectDescendants(shape2) {
        if (shape2.children === void 0)
          return;
        shape2.children.filter((childId) => !visited.has(childId)).forEach((childId) => {
          visited.add(childId);
          collectDescendants(page.shapes[childId]);
        });
      }
      collectDescendants(shape);
      function collectAscendants(shape2) {
        const parentId = shape2.parentId;
        if (parentId === page.id)
          return;
        if (visited.has(parentId))
          return;
        visited.add(parentId);
        collectAscendants(page.shapes[parentId]);
      }
      collectAscendants(shape);
      visited.forEach((id2) => {
        Object.values(page.bindings).filter((binding) => binding.fromId === id2 || binding.toId === id2).forEach((binding) => visited.add(binding.fromId === id2 ? binding.toId : binding.fromId));
      });
    });
    return Array.from(visited.values());
  }
  static updateBindings(data, id, beforeShapes = {}, afterShapes = {}, pageId) {
    const page = __spreadValues({}, _TLDR.getPage(data, pageId));
    return Object.values(page.bindings).filter((binding) => binding.fromId === id || binding.toId === id).reduce((cTDSnapshot, binding) => {
      if (!beforeShapes[binding.fromId]) {
        beforeShapes[binding.fromId] = import_core14.Utils.deepClone(_TLDR.getShape(cTDSnapshot, binding.fromId, pageId));
      }
      if (!beforeShapes[binding.toId]) {
        beforeShapes[binding.toId] = import_core14.Utils.deepClone(_TLDR.getShape(cTDSnapshot, binding.toId, pageId));
      }
      _TLDR.onBindingChange(_TLDR.getShape(cTDSnapshot, binding.fromId, pageId), binding, _TLDR.getShape(cTDSnapshot, binding.toId, pageId));
      afterShapes[binding.fromId] = import_core14.Utils.deepClone(_TLDR.getShape(cTDSnapshot, binding.fromId, pageId));
      afterShapes[binding.toId] = import_core14.Utils.deepClone(_TLDR.getShape(cTDSnapshot, binding.toId, pageId));
      return cTDSnapshot;
    }, data);
  }
  static getLinkedShapeIds(data, pageId, direction, includeArrows = true) {
    const selectedIds = _TLDR.getSelectedIds(data, pageId);
    const page = _TLDR.getPage(data, pageId);
    const linkedIds = new Set(selectedIds);
    const checkedIds = new Set();
    const idsToCheck = [...selectedIds];
    const arrows = new Set(Object.values(page.shapes).filter((shape) => {
      var _a;
      return shape.type === TDShapeType.Arrow && (shape.handles.start.bindingId || ((_a = shape.handles) == null ? void 0 : _a.end.bindingId));
    }));
    while (idsToCheck.length) {
      const id = idsToCheck.pop();
      if (!(id && arrows.size))
        break;
      if (checkedIds.has(id))
        continue;
      checkedIds.add(id);
      arrows.forEach((arrow) => {
        var _a, _b;
        const {
          handles: {
            start: { bindingId: startBindingId },
            end: { bindingId: endBindingId }
          }
        } = arrow;
        const startBinding = startBindingId ? page.bindings[startBindingId] : null;
        const endBinding = endBindingId ? page.bindings[endBindingId] : null;
        let hit = false;
        if (startBinding && startBinding.toId === id) {
          if (direction === "center") {
            hit = true;
          } else if (((_a = arrow.decorations) == null ? void 0 : _a.start) && endBinding) {
            hit = direction === "left";
          } else {
            hit = direction === "right";
          }
          if (hit) {
            if (includeArrows)
              linkedIds.add(arrow.id);
            linkedIds.add(id);
            if (endBinding) {
              linkedIds.add(endBinding.toId);
              idsToCheck.push(endBinding.toId);
            }
          }
        } else if (endBinding && endBinding.toId === id) {
          if (direction === "center") {
            hit = true;
          } else if (((_b = arrow.decorations) == null ? void 0 : _b.end) && startBinding) {
            hit = direction === "left";
          } else {
            hit = direction === "right";
          }
          if (hit) {
            if (includeArrows)
              linkedIds.add(arrow.id);
            linkedIds.add(id);
            if (startBinding) {
              linkedIds.add(startBinding.toId);
              idsToCheck.push(startBinding.toId);
            }
          }
        }
        if ((!startBinding || linkedIds.has(startBinding.toId)) && (!endBinding || linkedIds.has(endBinding.toId))) {
          arrows.delete(arrow);
        }
      });
    }
    return Array.from(linkedIds.values());
  }
  static getChildIndexAbove(data, id, pageId) {
    const page = data.document.pages[pageId];
    const shape = page.shapes[id];
    let siblings;
    if (shape.parentId === page.id) {
      siblings = Object.values(page.shapes).filter((shape2) => shape2.parentId === page.id).sort((a, b) => a.childIndex - b.childIndex);
    } else {
      const parent = page.shapes[shape.parentId];
      if (!parent.children)
        throw Error("No children in parent!");
      siblings = parent.children.map((childId) => page.shapes[childId]).sort((a, b) => a.childIndex - b.childIndex);
    }
    const index = siblings.indexOf(shape);
    const nextSibling = siblings[index + 1];
    if (!nextSibling)
      return shape.childIndex + 1;
    return nextSibling.childIndex;
  }
  static getBeforeShape(shape, change) {
    return Object.fromEntries(Object.keys(change).map((k) => [k, shape[k]]));
  }
  static mutateShapes(data, ids, fn, pageId) {
    const beforeShapes = {};
    const afterShapes = {};
    ids.forEach((id, i) => {
      const shape = _TLDR.getShape(data, id, pageId);
      if (shape.isLocked)
        return;
      const change = fn(shape, i);
      if (change) {
        beforeShapes[id] = _TLDR.getBeforeShape(shape, change);
        afterShapes[id] = change;
      }
    });
    const dataWithMutations = import_core14.Utils.deepMerge(data, {
      document: {
        pages: {
          [data.appState.currentPageId]: {
            shapes: afterShapes
          }
        }
      }
    });
    const dataWithBindingChanges = ids.reduce((cTDSnapshot, id) => {
      return _TLDR.updateBindings(cTDSnapshot, id, beforeShapes, afterShapes, pageId);
    }, dataWithMutations);
    return {
      before: beforeShapes,
      after: afterShapes,
      data: dataWithBindingChanges
    };
  }
  static createShapes(data, shapes, pageId) {
    const before = {
      document: {
        pages: {
          [pageId]: {
            shapes: __spreadValues({}, Object.fromEntries(shapes.flatMap((shape) => {
              const results = [[shape.id, void 0]];
              if (shape.parentId !== pageId) {
                const parent = _TLDR.getShape(data, shape.parentId, pageId);
                if (!parent.children)
                  throw Error("No children in parent!");
                results.push([parent.id, { children: parent.children }]);
              }
              return results;
            })))
          }
        }
      }
    };
    const after = {
      document: {
        pages: {
          [pageId]: {
            shapes: {
              shapes: __spreadValues({}, Object.fromEntries(shapes.flatMap((shape) => {
                const results = [[shape.id, shape]];
                if (shape.parentId !== pageId) {
                  const parent = _TLDR.getShape(data, shape.parentId, pageId);
                  if (!parent.children)
                    throw Error("No children in parent!");
                  results.push([parent.id, { children: [...parent.children, shape.id] }]);
                }
                return results;
              })))
            }
          }
        }
      }
    };
    return {
      before,
      after
    };
  }
  static deleteShapes(data, shapes, pageId) {
    pageId = pageId ? pageId : data.appState.currentPageId;
    const page = _TLDR.getPage(data, pageId);
    const shapeIds = typeof shapes[0] === "string" ? shapes : shapes.map((shape) => shape.id);
    const before = {
      document: {
        pages: {
          [pageId]: {
            shapes: __spreadValues({}, Object.fromEntries(shapeIds.flatMap((id) => {
              const shape = page.shapes[id];
              const results = [[shape.id, shape]];
              if (shape.parentId !== pageId) {
                const parent = page.shapes[shape.parentId];
                if (!parent.children)
                  throw Error("No children in parent!");
                results.push([parent.id, { children: parent.children }]);
              }
              return results;
            }))),
            bindings: __spreadValues({}, Object.fromEntries(Object.values(page.bindings).filter((binding) => {
              return shapeIds.includes(binding.fromId) || shapeIds.includes(binding.toId);
            }).map((binding) => {
              return [binding.id, binding];
            })))
          }
        }
      }
    };
    const after = {
      document: {
        pages: {
          [pageId]: {
            shapes: __spreadValues({}, Object.fromEntries(shapeIds.flatMap((id) => {
              const shape = page.shapes[id];
              const results = [[shape.id, void 0]];
              if (shape.parentId !== page.id) {
                const parent = page.shapes[shape.parentId];
                if (!parent.children)
                  throw Error("No children in parent!");
                results.push([
                  parent.id,
                  { children: parent.children.filter((id2) => id2 !== shape.id) }
                ]);
              }
              return results;
            })))
          }
        }
      }
    };
    return {
      before,
      after
    };
  }
  static onSessionComplete(shape) {
    var _a, _b;
    const delta = (_b = (_a = _TLDR.getShapeUtil(shape)).onSessionComplete) == null ? void 0 : _b.call(_a, shape);
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static onChildrenChange(data, shape, pageId) {
    var _a, _b;
    if (!shape.children)
      return;
    const delta = (_b = (_a = _TLDR.getShapeUtil(shape)).onChildrenChange) == null ? void 0 : _b.call(_a, shape, shape.children.map((id) => _TLDR.getShape(data, id, pageId)));
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static onBindingChange(shape, binding, otherShape) {
    var _a, _b;
    const delta = (_b = (_a = _TLDR.getShapeUtil(shape)).onBindingChange) == null ? void 0 : _b.call(_a, shape, binding, otherShape, _TLDR.getShapeUtil(otherShape).getBounds(otherShape), _TLDR.getShapeUtil(otherShape).getCenter(otherShape));
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static transform(shape, bounds, info) {
    const delta = _TLDR.getShapeUtil(shape).transform(shape, bounds, info);
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static transformSingle(shape, bounds, info) {
    const delta = _TLDR.getShapeUtil(shape).transformSingle(shape, bounds, info);
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static getRotatedShapeMutation(shape, center, origin, delta) {
    var _a, _b;
    const relativeCenter = import_vec12.Vec.sub(center, shape.point);
    const rotatedCenter = import_vec12.Vec.rotWith(center, origin, delta);
    const nextPoint = import_vec12.Vec.toFixed(import_vec12.Vec.sub(rotatedCenter, relativeCenter));
    if (shape.handles !== void 0) {
      const change = (_b = (_a = this.getShapeUtil(shape)).onHandleChange) == null ? void 0 : _b.call(_a, __spreadProps(__spreadValues({}, shape), { point: nextPoint }), Object.fromEntries(Object.entries(shape.handles).map(([handleId, handle]) => {
        const point = import_vec12.Vec.toFixed(import_vec12.Vec.rotWith(handle.point, relativeCenter, delta));
        return [handleId, __spreadProps(__spreadValues({}, handle), { point })];
      })), { shiftKey: false });
      return change;
    }
    const nextRotation = import_core14.Utils.clampRadians((shape.rotation || 0) + delta);
    return {
      point: nextPoint,
      rotation: nextRotation
    };
  }
  static updateParents(data, pageId, changedShapeIds) {
    const page = _TLDR.getPage(data, pageId);
    if (changedShapeIds.length === 0)
      return;
    const { shapes } = _TLDR.getPage(data, pageId);
    const parentToUpdateIds = Array.from(new Set(changedShapeIds.map((id) => shapes[id].parentId).values())).filter((id) => id !== page.id);
    for (const parentId of parentToUpdateIds) {
      const parent = shapes[parentId];
      if (!parent.children) {
        throw Error("A shape is parented to a shape without a children array.");
      }
      _TLDR.onChildrenChange(data, parent, pageId);
    }
    _TLDR.updateParents(data, pageId, parentToUpdateIds);
  }
  static getBinding(data, id, pageId) {
    return _TLDR.getPage(data, pageId).bindings[id];
  }
  static getBindings(data, pageId) {
    const page = _TLDR.getPage(data, pageId);
    return Object.values(page.bindings);
  }
  static getBindableShapeIds(data) {
    return _TLDR.getShapes(data, data.appState.currentPageId).filter((shape) => _TLDR.getShapeUtil(shape).canBind).sort((a, b) => b.childIndex - a.childIndex).map((shape) => shape.id);
  }
  static getBindingsWithShapeIds(data, ids, pageId) {
    return Array.from(new Set(_TLDR.getBindings(data, pageId).filter((binding) => {
      return ids.includes(binding.toId) || ids.includes(binding.fromId);
    })).values());
  }
  static getRelatedBindings(data, ids, pageId) {
    const changedShapeIds = new Set(ids);
    const page = _TLDR.getPage(data, pageId);
    const bindingsArr = Object.values(page.bindings);
    const bindingsToUpdate = new Set(bindingsArr.filter((binding) => changedShapeIds.has(binding.toId) || changedShapeIds.has(binding.fromId)));
    let prevSize = bindingsToUpdate.size;
    let delta = -1;
    while (delta !== 0) {
      bindingsToUpdate.forEach((binding) => {
        const fromId = binding.fromId;
        for (const otherBinding of bindingsArr) {
          if (otherBinding.fromId === fromId) {
            bindingsToUpdate.add(otherBinding);
          }
          if (otherBinding.toId === fromId) {
            bindingsToUpdate.add(otherBinding);
          }
        }
      });
      delta = bindingsToUpdate.size - prevSize;
      prevSize = bindingsToUpdate.size;
    }
    return Array.from(bindingsToUpdate.values());
  }
  static normalizeText(text) {
    return text.replace(_TLDR.fixNewLines, "\n");
  }
  static assertShapeHasProperty(shape, prop) {
    if (shape[prop] === void 0) {
      throw new Error();
    }
  }
  static warn(e) {
    if (isDev) {
      console.warn(e);
    }
  }
  static error(e) {
    if (isDev) {
      console.error(e);
    }
  }
};
var TLDR = _TLDR;
TLDR.copyStringToClipboard = (string) => {
  try {
    navigator.clipboard.writeText(string);
  } catch (e) {
    const textarea = document.createElement("textarea");
    textarea.setAttribute("position", "fixed");
    textarea.setAttribute("top", "0");
    textarea.setAttribute("readonly", "true");
    textarea.setAttribute("contenteditable", "true");
    textarea.style.position = "fixed";
    textarea.value = string;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      const range = document.createRange();
      range.selectNodeContents(textarea);
      const sel = window.getSelection();
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
        textarea.setSelectionRange(0, textarea.value.length);
      }
    } catch (err) {
      null;
    } finally {
      document.body.removeChild(textarea);
    }
  }
};
TLDR.flattenShape = (data, shape) => {
  var _a;
  return [
    shape,
    ...((_a = shape.children) != null ? _a : []).map((childId) => _TLDR.getShape(data, childId, data.appState.currentPageId)).sort((a, b) => a.childIndex - b.childIndex).flatMap((shape2) => _TLDR.flattenShape(data, shape2))
  ];
};
TLDR.flattenPage = (data, pageId) => {
  return Object.values(data.document.pages[pageId].shapes).sort((a, b) => a.childIndex - b.childIndex).reduce((acc, shape) => [...acc, ..._TLDR.flattenShape(data, shape)], []);
};
TLDR.getTopChildIndex = (data, pageId) => {
  const shapes = _TLDR.getShapes(data, pageId);
  return shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === pageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
};
TLDR.fixNewLines = /\r?\n|\r/g;

// src/state/commands/alignShapes/alignShapes.ts
var import_vec13 = __toModule(require("@tldraw/vec"));
var import_core15 = __toModule(require("@tldraw/core"));
function alignShapes(app, ids, type) {
  const { currentPageId } = app;
  const initialShapes = ids.map((id) => app.getShape(id));
  const boundsForShapes = initialShapes.map((shape) => {
    return {
      id: shape.id,
      point: [...shape.point],
      bounds: TLDR.getBounds(shape)
    };
  });
  const commonBounds = import_core15.Utils.getCommonBounds(boundsForShapes.map(({ bounds }) => bounds));
  const midX = commonBounds.minX + commonBounds.width / 2;
  const midY = commonBounds.minY + commonBounds.height / 2;
  const deltaMap = Object.fromEntries(boundsForShapes.map(({ id, point, bounds }) => {
    return [
      id,
      {
        prev: point,
        next: {
          [AlignType.CenterVertical]: [point[0], midY - bounds.height / 2],
          [AlignType.CenterHorizontal]: [midX - bounds.width / 2, point[1]],
          [AlignType.Top]: [point[0], commonBounds.minY],
          [AlignType.Bottom]: [point[0], commonBounds.maxY - bounds.height],
          [AlignType.Left]: [commonBounds.minX, point[1]],
          [AlignType.Right]: [commonBounds.maxX - bounds.width, point[1]]
        }[type]
      }
    ];
  }));
  const { before, after } = TLDR.mutateShapes(app.state, ids, (shape) => {
    if (!deltaMap[shape.id])
      return shape;
    return { point: deltaMap[shape.id].next };
  }, currentPageId);
  initialShapes.forEach((shape) => {
    if (shape.type === TDShapeType.Group) {
      const delta = import_vec13.Vec.sub(after[shape.id].point, before[shape.id].point);
      shape.children.forEach((id) => {
        const child = app.getShape(id);
        before[child.id] = { point: child.point };
        after[child.id] = { point: import_vec13.Vec.add(child.point, delta) };
      });
      delete before[shape.id];
      delete after[shape.id];
    }
  });
  return {
    id: "align",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: before
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: after
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/changePage/changePage.ts
function changePage(app, pageId) {
  return {
    id: "change_page",
    before: {
      appState: {
        currentPageId: app.currentPageId
      }
    },
    after: {
      appState: {
        currentPageId: pageId
      }
    }
  };
}

// src/state/commands/createPage/createPage.ts
var import_core16 = __toModule(require("@tldraw/core"));
function createPage(app, center, pageId = import_core16.Utils.uniqueId()) {
  const { currentPageId } = app;
  const topPage = Object.values(app.state.document.pages).sort((a, b) => (b.childIndex || 0) - (a.childIndex || 0))[0];
  const nextChildIndex = (topPage == null ? void 0 : topPage.childIndex) ? (topPage == null ? void 0 : topPage.childIndex) + 1 : 1;
  const nextName = `New Page`;
  const page = {
    id: pageId,
    name: nextName,
    childIndex: nextChildIndex,
    shapes: {},
    bindings: {}
  };
  const pageState = {
    id: pageId,
    selectedIds: [],
    camera: { point: center, zoom: 1 },
    editingId: void 0,
    bindingId: void 0,
    hoveredId: void 0,
    pointedId: void 0
  };
  return {
    id: "create_page",
    before: {
      appState: {
        currentPageId
      },
      document: {
        pages: {
          [pageId]: void 0
        },
        pageStates: {
          [pageId]: void 0
        }
      }
    },
    after: {
      appState: {
        currentPageId: page.id
      },
      document: {
        pages: {
          [pageId]: page
        },
        pageStates: {
          [pageId]: pageState
        }
      }
    }
  };
}

// src/state/commands/createShapes/createShapes.ts
function createShapes(app, shapes, bindings = []) {
  const { currentPageId } = app;
  const beforeShapes = {};
  const afterShapes = {};
  shapes.forEach((shape) => {
    beforeShapes[shape.id] = void 0;
    afterShapes[shape.id] = shape;
  });
  const beforeBindings = {};
  const afterBindings = {};
  bindings.forEach((binding) => {
    beforeBindings[binding.id] = void 0;
    afterBindings[binding.id] = binding;
  });
  return {
    id: "create",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: beforeShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: [...app.selectedIds]
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: afterShapes,
            bindings: afterBindings
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: shapes.map((shape) => shape.id)
          }
        }
      }
    }
  };
}

// src/state/commands/deletePage/deletePage.ts
function deletePage(app, pageId) {
  const {
    currentPageId,
    document: { pages, pageStates }
  } = app;
  const pagesArr = Object.values(pages).sort((a, b) => (a.childIndex || 0) - (b.childIndex || 0));
  const currentIndex = pagesArr.findIndex((page) => page.id === pageId);
  let nextCurrentPageId;
  if (pageId === currentPageId) {
    if (currentIndex === pagesArr.length - 1) {
      nextCurrentPageId = pagesArr[pagesArr.length - 2].id;
    } else {
      nextCurrentPageId = pagesArr[currentIndex + 1].id;
    }
  } else {
    nextCurrentPageId = currentPageId;
  }
  return {
    id: "delete_page",
    before: {
      appState: {
        currentPageId: pageId
      },
      document: {
        pages: {
          [pageId]: __spreadValues({}, pages[pageId])
        },
        pageStates: {
          [pageId]: __spreadValues({}, pageStates[pageId])
        }
      }
    },
    after: {
      appState: {
        currentPageId: nextCurrentPageId
      },
      document: {
        pages: {
          [pageId]: void 0
        },
        pageStates: {
          [pageId]: void 0
        }
      }
    }
  };
}

// src/state/commands/shared/removeShapesFromPage.ts
function removeShapesFromPage(data, ids, pageId) {
  const before = {
    shapes: {},
    bindings: {}
  };
  const after = {
    shapes: {},
    bindings: {}
  };
  const parentsToUpdate = [];
  const deletedIds = new Set();
  ids.filter((id) => !TLDR.getShape(data, id, pageId).isLocked).forEach((id) => {
    deletedIds.add(id);
    const shape = TLDR.getShape(data, id, pageId);
    before.shapes[id] = shape;
    after.shapes[id] = void 0;
    if (shape.children !== void 0) {
      shape.children.forEach((childId) => {
        deletedIds.add(childId);
        const child = TLDR.getShape(data, childId, pageId);
        before.shapes[childId] = child;
        after.shapes[childId] = void 0;
      });
    }
    if (shape.parentId !== pageId) {
      parentsToUpdate.push(TLDR.getShape(data, shape.parentId, pageId));
    }
  });
  parentsToUpdate.forEach((parent) => {
    var _a;
    if (ids.includes(parent.id))
      return;
    deletedIds.add(parent.id);
    before.shapes[parent.id] = { children: parent.children };
    after.shapes[parent.id] = { children: parent.children.filter((id) => !ids.includes(id)) };
    if (((_a = after.shapes[parent.id]) == null ? void 0 : _a.children.length) === 0) {
      after.shapes[parent.id] = void 0;
      before.shapes[parent.id] = TLDR.getShape(data, parent.id, pageId);
    }
  });
  const page = TLDR.getPage(data, pageId);
  Object.values(page.bindings).filter((binding) => deletedIds.has(binding.fromId) || deletedIds.has(binding.toId)).forEach((binding) => {
    for (const id of [binding.toId, binding.fromId]) {
      if (after.shapes[id] === void 0) {
        before.bindings[binding.id] = binding;
        after.bindings[binding.id] = void 0;
        const shape = page.shapes[id];
        if (shape && shape.handles) {
          Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
            var _a, _b, _c, _d, _e, _f;
            before.shapes[id] = __spreadProps(__spreadValues({}, before.shapes[id]), {
              handles: __spreadProps(__spreadValues({}, (_a = before.shapes[id]) == null ? void 0 : _a.handles), {
                [handle.id]: __spreadProps(__spreadValues({}, (_c = (_b = before.shapes[id]) == null ? void 0 : _b.handles) == null ? void 0 : _c[handle.id]), {
                  bindingId: binding.id
                })
              })
            });
            if (!deletedIds.has(id)) {
              after.shapes[id] = __spreadProps(__spreadValues({}, after.shapes[id]), {
                handles: __spreadProps(__spreadValues({}, (_d = after.shapes[id]) == null ? void 0 : _d.handles), {
                  [handle.id]: __spreadProps(__spreadValues({}, (_f = (_e = after.shapes[id]) == null ? void 0 : _e.handles) == null ? void 0 : _f[handle.id]), {
                    bindingId: void 0
                  })
                })
              });
            }
          });
        }
      }
    }
  });
  return { before, after };
}

// src/state/commands/deleteShapes/deleteShapes.ts
function deleteShapes(app, ids, pageId = app.currentPageId) {
  const { pageState, selectedIds } = app;
  const { before, after } = removeShapesFromPage(app.state, ids, pageId);
  return {
    id: "delete",
    before: {
      document: {
        pages: {
          [pageId]: before
        },
        pageStates: {
          [pageId]: { selectedIds: [...app.selectedIds] }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: after
        },
        pageStates: {
          [pageId]: {
            selectedIds: selectedIds.filter((id) => !ids.includes(id)),
            hoveredId: pageState.hoveredId && ids.includes(pageState.hoveredId) ? void 0 : pageState.hoveredId
          }
        }
      }
    }
  };
}

// src/state/commands/distributeShapes/distributeShapes.ts
var import_core17 = __toModule(require("@tldraw/core"));
var import_vec14 = __toModule(require("@tldraw/vec"));
function distributeShapes(app, ids, type) {
  const { currentPageId } = app;
  const initialShapes = ids.map((id) => app.getShape(id));
  const deltaMap = Object.fromEntries(getDistributions(initialShapes, type).map((d) => [d.id, d]));
  const { before, after } = TLDR.mutateShapes(app.state, ids.filter((id) => deltaMap[id] !== void 0), (shape) => ({ point: deltaMap[shape.id].next }), currentPageId);
  initialShapes.forEach((shape) => {
    if (shape.type === TDShapeType.Group) {
      const delta = import_vec14.default.sub(after[shape.id].point, before[shape.id].point);
      shape.children.forEach((id) => {
        const child = app.getShape(id);
        before[child.id] = { point: child.point };
        after[child.id] = { point: import_vec14.default.add(child.point, delta) };
      });
      delete before[shape.id];
      delete after[shape.id];
    }
  });
  return {
    id: "distribute",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}
function getDistributions(initialShapes, type) {
  const entries = initialShapes.map((shape) => {
    const utils = TLDR.getShapeUtil(shape);
    return {
      id: shape.id,
      point: [...shape.point],
      bounds: utils.getBounds(shape),
      center: utils.getCenter(shape)
    };
  });
  const len = entries.length;
  const commonBounds = import_core17.Utils.getCommonBounds(entries.map(({ bounds }) => bounds));
  const results = [];
  switch (type) {
    case DistributeType.Horizontal: {
      const span = entries.reduce((a, c) => a + c.bounds.width, 0);
      if (span > commonBounds.width) {
        const left = entries.sort((a, b) => a.bounds.minX - b.bounds.minX)[0];
        const right = entries.sort((a, b) => b.bounds.maxX - a.bounds.maxX)[0];
        const entriesToMove = entries.filter((a) => a !== left && a !== right).sort((a, b) => a.center[0] - b.center[0]);
        const step = (right.center[0] - left.center[0]) / (len - 1);
        const x = left.center[0] + step;
        entriesToMove.forEach(({ id, point, bounds }, i) => {
          results.push({
            id,
            prev: point,
            next: [x + step * i - bounds.width / 2, bounds.minY]
          });
        });
      } else {
        const entriesToMove = entries.sort((a, b) => a.center[0] - b.center[0]);
        let x = commonBounds.minX;
        const step = (commonBounds.width - span) / (len - 1);
        entriesToMove.forEach(({ id, point, bounds }) => {
          results.push({ id, prev: point, next: [x, bounds.minY] });
          x += bounds.width + step;
        });
      }
      break;
    }
    case DistributeType.Vertical: {
      const span = entries.reduce((a, c) => a + c.bounds.height, 0);
      if (span > commonBounds.height) {
        const top2 = entries.sort((a, b) => a.bounds.minY - b.bounds.minY)[0];
        const bottom = entries.sort((a, b) => b.bounds.maxY - a.bounds.maxY)[0];
        const entriesToMove = entries.filter((a) => a !== top2 && a !== bottom).sort((a, b) => a.center[1] - b.center[1]);
        const step = (bottom.center[1] - top2.center[1]) / (len - 1);
        const y = top2.center[1] + step;
        entriesToMove.forEach(({ id, point, bounds }, i) => {
          results.push({
            id,
            prev: point,
            next: [bounds.minX, y + step * i - bounds.height / 2]
          });
        });
      } else {
        const entriesToMove = entries.sort((a, b) => a.center[1] - b.center[1]);
        let y = commonBounds.minY;
        const step = (commonBounds.height - span) / (len - 1);
        entriesToMove.forEach(({ id, point, bounds }) => {
          results.push({ id, prev: point, next: [bounds.minX, y] });
          y += bounds.height + step;
        });
      }
      break;
    }
  }
  return results;
}

// src/state/commands/duplicatePage/duplicatePage.ts
var import_core18 = __toModule(require("@tldraw/core"));
function duplicatePage(app, pageId) {
  const newId = import_core18.Utils.uniqueId();
  const {
    currentPageId,
    page,
    pageState: { camera }
  } = app;
  const nextPage = __spreadProps(__spreadValues({}, page), {
    id: newId,
    name: page.name + " Copy",
    shapes: Object.fromEntries(Object.entries(page.shapes).map(([id, shape]) => {
      return [
        id,
        __spreadProps(__spreadValues({}, shape), {
          parentId: shape.parentId === pageId ? newId : shape.parentId
        })
      ];
    }))
  });
  return {
    id: "duplicate_page",
    before: {
      appState: {
        currentPageId
      },
      document: {
        pages: {
          [newId]: void 0
        },
        pageStates: {
          [newId]: void 0
        }
      }
    },
    after: {
      appState: {
        currentPageId: newId
      },
      document: {
        pages: {
          [newId]: nextPage
        },
        pageStates: {
          [newId]: __spreadProps(__spreadValues({}, page), {
            id: newId,
            selectedIds: [],
            camera: __spreadValues({}, camera),
            editingId: void 0,
            bindingId: void 0,
            hoveredId: void 0,
            pointedId: void 0
          })
        }
      }
    }
  };
}

// src/state/commands/duplicateShapes/duplicateShapes.ts
var import_core19 = __toModule(require("@tldraw/core"));
var import_vec15 = __toModule(require("@tldraw/vec"));
function duplicateShapes(app, ids, point) {
  const { selectedIds, currentPageId, page, shapes } = app;
  const before = {
    shapes: {},
    bindings: {}
  };
  const after = {
    shapes: {},
    bindings: {}
  };
  const duplicateMap = {};
  const shapesToDuplicate = ids.map((id) => app.getShape(id)).filter((shape) => !ids.includes(shape.parentId));
  shapesToDuplicate.forEach((shape) => {
    const duplicatedId = import_core19.Utils.uniqueId();
    before.shapes[duplicatedId] = void 0;
    after.shapes[duplicatedId] = __spreadProps(__spreadValues({}, import_core19.Utils.deepClone(shape)), {
      id: duplicatedId,
      childIndex: TLDR.getChildIndexAbove(app.state, shape.id, currentPageId)
    });
    if (shape.children) {
      after.shapes[duplicatedId].children = [];
    }
    if (shape.parentId !== currentPageId) {
      const parent = app.getShape(shape.parentId);
      before.shapes[parent.id] = __spreadProps(__spreadValues({}, before.shapes[parent.id]), {
        children: parent.children
      });
      after.shapes[parent.id] = __spreadProps(__spreadValues({}, after.shapes[parent.id]), {
        children: [...(after.shapes[parent.id] || parent).children, duplicatedId]
      });
    }
    duplicateMap[shape.id] = duplicatedId;
  });
  shapesToDuplicate.forEach((shape) => {
    if (shape.children) {
      shape.children.forEach((childId) => {
        var _a, _b;
        const child = app.getShape(childId);
        const duplicatedId = import_core19.Utils.uniqueId();
        const duplicatedParentId = duplicateMap[shape.id];
        before.shapes[duplicatedId] = void 0;
        after.shapes[duplicatedId] = __spreadProps(__spreadValues({}, import_core19.Utils.deepClone(child)), {
          id: duplicatedId,
          parentId: duplicatedParentId,
          childIndex: TLDR.getChildIndexAbove(app.state, child.id, currentPageId)
        });
        duplicateMap[childId] = duplicatedId;
        (_b = (_a = after.shapes[duplicateMap[shape.id]]) == null ? void 0 : _a.children) == null ? void 0 : _b.push(duplicatedId);
      });
    }
  });
  const dupedShapeIds = new Set(Object.keys(duplicateMap));
  Object.values(page.bindings).filter((binding) => dupedShapeIds.has(binding.fromId) || dupedShapeIds.has(binding.toId)).forEach((binding) => {
    if (dupedShapeIds.has(binding.fromId)) {
      if (dupedShapeIds.has(binding.toId)) {
        const duplicatedBindingId = import_core19.Utils.uniqueId();
        const duplicatedBinding = __spreadProps(__spreadValues({}, import_core19.Utils.deepClone(binding)), {
          id: duplicatedBindingId,
          fromId: duplicateMap[binding.fromId],
          toId: duplicateMap[binding.toId]
        });
        before.bindings[duplicatedBindingId] = void 0;
        after.bindings[duplicatedBindingId] = duplicatedBinding;
        const boundShape = after.shapes[duplicatedBinding.fromId];
        Object.values(boundShape.handles).forEach((handle) => {
          if (handle.bindingId === binding.id) {
            handle.bindingId = duplicatedBindingId;
          }
        });
      } else {
        const boundShape = after.shapes[duplicateMap[binding.fromId]];
        Object.values(boundShape.handles).forEach((handle) => {
          if (handle.bindingId === binding.id) {
            handle.bindingId = void 0;
          }
        });
      }
    }
  });
  const shapesToMove = Object.values(after.shapes);
  if (point) {
    const commonBounds = import_core19.Utils.getCommonBounds(shapesToMove.map((shape) => TLDR.getBounds(shape)));
    const center = import_core19.Utils.getBoundsCenter(commonBounds);
    shapesToMove.forEach((shape) => {
      if (!shape.point)
        return;
      shape.point = import_vec15.Vec.sub(point, import_vec15.Vec.sub(center, shape.point));
    });
  } else {
    const offset = [16, 16];
    shapesToMove.forEach((shape) => {
      if (!shape.point)
        return;
      shape.point = import_vec15.Vec.add(shape.point, offset);
    });
  }
  shapesToMove.forEach((shape) => {
    if (shape.isLocked) {
      shape.isLocked = false;
    }
  });
  return {
    id: "duplicate",
    before: {
      document: {
        pages: {
          [currentPageId]: before
        },
        pageStates: {
          [currentPageId]: { selectedIds }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: after
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: Array.from(dupedShapeIds.values()).map((id) => duplicateMap[id])
          }
        }
      }
    }
  };
}

// src/state/commands/flipShapes/flipShapes.ts
var import_core20 = __toModule(require("@tldraw/core"));
function flipShapes(app, ids, type) {
  const { selectedIds, currentPageId, shapes } = app;
  const boundsForShapes = shapes.map((shape) => TLDR.getBounds(shape));
  const commonBounds = import_core20.Utils.getCommonBounds(boundsForShapes);
  const { before, after } = TLDR.mutateShapes(app.state, ids, (shape) => {
    const shapeBounds = TLDR.getBounds(shape);
    switch (type) {
      case FlipType.Horizontal: {
        const newShapeBounds = import_core20.Utils.getRelativeTransformedBoundingBox(commonBounds, commonBounds, shapeBounds, true, false);
        return TLDR.getShapeUtil(shape).transform(shape, newShapeBounds, {
          type: import_core20.TLBoundsCorner.TopLeft,
          scaleX: -1,
          scaleY: 1,
          initialShape: shape,
          transformOrigin: [0.5, 0.5]
        });
      }
      case FlipType.Vertical: {
        const newShapeBounds = import_core20.Utils.getRelativeTransformedBoundingBox(commonBounds, commonBounds, shapeBounds, false, true);
        return TLDR.getShapeUtil(shape).transform(shape, newShapeBounds, {
          type: import_core20.TLBoundsCorner.TopLeft,
          scaleX: 1,
          scaleY: -1,
          initialShape: shape,
          transformOrigin: [0.5, 0.5]
        });
      }
    }
  }, currentPageId);
  return {
    id: "flip",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/groupShapes/groupShapes.ts
var import_core21 = __toModule(require("@tldraw/core"));
function groupShapes(app, ids, groupId, pageId) {
  var _a, _b;
  const beforeShapes = {};
  const afterShapes = {};
  const beforeBindings = {};
  const afterBindings = {};
  const idsToGroup = [...ids];
  const shapesToGroup = [];
  const deletedGroupIds = [];
  const otherEffectedGroups = [];
  for (const id of ids) {
    const shape = app.getShape(id);
    if (shape.isLocked)
      continue;
    if (shape.children === void 0) {
      shapesToGroup.push(shape);
    } else {
      const childIds = shape.children.filter((id2) => !app.getShape(id2).isLocked);
      otherEffectedGroups.push(shape);
      idsToGroup.push(...childIds);
      shapesToGroup.push(...childIds.map((id2) => app.getShape(id2)));
    }
  }
  if (shapesToGroup.every((shape) => shape.parentId === shapesToGroup[0].parentId)) {
    if (shapesToGroup[0].parentId !== pageId) {
      const commonParent = app.getShape(shapesToGroup[0].parentId);
      if (((_a = commonParent.children) == null ? void 0 : _a.length) === idsToGroup.length) {
        return;
      }
    }
  }
  const flattenedShapes = TLDR.flattenPage(app.state, pageId);
  const shapeIndexMap = Object.fromEntries(shapesToGroup.map((shape) => [shape.id, flattenedShapes.indexOf(shape)]));
  const sortedShapes = shapesToGroup.sort((a, b) => shapeIndexMap[a.id] - shapeIndexMap[b.id]);
  const groupParentId = pageId;
  const groupChildIndex = (sortedShapes.filter((shape) => shape.parentId === pageId)[0] || sortedShapes[0]).childIndex;
  const groupBounds = import_core21.Utils.getCommonBounds(shapesToGroup.map((shape) => TLDR.getBounds(shape)));
  beforeShapes[groupId] = void 0;
  afterShapes[groupId] = TLDR.getShapeUtil(TDShapeType.Group).create({
    id: groupId,
    childIndex: groupChildIndex,
    parentId: groupParentId,
    point: [groupBounds.minX, groupBounds.minY],
    size: [groupBounds.width, groupBounds.height],
    children: sortedShapes.map((shape) => shape.id)
  });
  sortedShapes.forEach((shape, index) => {
    if (shape.parentId !== pageId) {
      const parentShape = app.getShape(shape.parentId);
      otherEffectedGroups.push(parentShape);
    }
    beforeShapes[shape.id] = __spreadProps(__spreadValues({}, beforeShapes[shape.id]), {
      parentId: shape.parentId,
      childIndex: shape.childIndex
    });
    afterShapes[shape.id] = __spreadProps(__spreadValues({}, afterShapes[shape.id]), {
      parentId: groupId,
      childIndex: index + 1
    });
  });
  while (otherEffectedGroups.length > 0) {
    const shape = otherEffectedGroups.pop();
    if (!shape)
      break;
    const nextChildren = (((_b = beforeShapes[shape.id]) == null ? void 0 : _b.children) || shape.children).filter((childId) => childId && !(idsToGroup.includes(childId) || deletedGroupIds.includes(childId)));
    if (nextChildren.length === 0) {
      beforeShapes[shape.id] = shape;
      afterShapes[shape.id] = void 0;
      if (shape.parentId !== pageId) {
        deletedGroupIds.push(shape.id);
        otherEffectedGroups.push(app.getShape(shape.parentId));
      }
    } else {
      beforeShapes[shape.id] = __spreadProps(__spreadValues({}, beforeShapes[shape.id]), {
        children: shape.children
      });
      afterShapes[shape.id] = __spreadProps(__spreadValues({}, afterShapes[shape.id]), {
        children: nextChildren
      });
    }
  }
  const { bindings } = app;
  bindings.forEach((binding) => {
    for (const id of [binding.toId, binding.fromId]) {
      if (afterShapes[id] === void 0) {
        beforeBindings[binding.id] = binding;
        afterBindings[binding.id] = void 0;
        const shape = app.getShape(id);
        if (shape.handles) {
          Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
            var _a2, _b2;
            beforeShapes[id] = __spreadProps(__spreadValues({}, beforeShapes[id]), {
              handles: __spreadProps(__spreadValues({}, (_a2 = beforeShapes[id]) == null ? void 0 : _a2.handles), {
                [handle.id]: { bindingId: binding.id }
              })
            });
            if (!deletedGroupIds.includes(id)) {
              afterShapes[id] = __spreadProps(__spreadValues({}, afterShapes[id]), {
                handles: __spreadProps(__spreadValues({}, (_b2 = afterShapes[id]) == null ? void 0 : _b2.handles), {
                  [handle.id]: { bindingId: void 0 }
                })
              });
            }
          });
        }
      }
    }
  });
  return {
    id: "group",
    before: {
      document: {
        pages: {
          [pageId]: {
            shapes: beforeShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: {
            shapes: afterShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: [groupId]
          }
        }
      }
    }
  };
}

// src/state/commands/moveShapesToPage/moveShapesToPage.ts
var import_core22 = __toModule(require("@tldraw/core"));
var import_vec16 = __toModule(require("@tldraw/vec"));
function moveShapesToPage(app, ids, viewportBounds, fromPageId, toPageId) {
  const { page } = app;
  const fromPage = {
    before: {
      shapes: {},
      bindings: {}
    },
    after: {
      shapes: {},
      bindings: {}
    }
  };
  const toPage = {
    before: {
      shapes: {},
      bindings: {}
    },
    after: {
      shapes: {},
      bindings: {}
    }
  };
  const movingShapeIds = new Set();
  const shapesToMove = new Set();
  ids.map((id) => app.getShape(id, fromPageId)).filter((shape) => !shape.isLocked).forEach((shape) => {
    movingShapeIds.add(shape.id);
    shapesToMove.add(shape);
    if (shape.children !== void 0) {
      shape.children.forEach((childId) => {
        movingShapeIds.add(childId);
        shapesToMove.add(app.getShape(childId, fromPageId));
      });
    }
  });
  const startingChildIndex = TLDR.getTopChildIndex(app.state, toPageId);
  const movingShapes = Array.from(shapesToMove.values());
  movingShapes.forEach((shape, i) => {
    fromPage.before.shapes[shape.id] = shape;
    fromPage.after.shapes[shape.id] = void 0;
    toPage.before.shapes[shape.id] = void 0;
    toPage.after.shapes[shape.id] = shape;
    if (!movingShapeIds.has(shape.parentId)) {
      toPage.after.shapes[shape.id] = __spreadProps(__spreadValues({}, shape), {
        parentId: toPageId,
        childIndex: startingChildIndex + i
      });
      if (shape.parentId !== fromPageId) {
        const parent = app.getShape(shape.parentId, fromPageId);
        fromPage.before.shapes[parent.id] = {
          children: parent.children
        };
        fromPage.after.shapes[parent.id] = {
          children: parent.children.filter((childId) => childId !== shape.id)
        };
      }
    }
  });
  Object.values(page.bindings).filter((binding) => movingShapeIds.has(binding.fromId) || movingShapeIds.has(binding.toId)).forEach((binding) => {
    fromPage.before.bindings[binding.id] = binding;
    fromPage.after.bindings[binding.id] = void 0;
    const fromBoundShape = app.getShape(binding.fromId, fromPageId);
    const shouldCopy = movingShapeIds.has(binding.fromId) && movingShapeIds.has(binding.toId);
    if (shouldCopy) {
      toPage.before.bindings[binding.id] = void 0;
      toPage.after.bindings[binding.id] = binding;
    } else {
      if (movingShapeIds.has(binding.fromId)) {
        const fromShape = app.getShape(binding.fromId, fromPageId);
        const handle = Object.values(fromBoundShape.handles).find((handle2) => handle2.bindingId === binding.id);
        const handleId = handle.id;
        const toPageShape = toPage.after.shapes[fromShape.id];
        toPageShape.handles = __spreadProps(__spreadValues({}, toPageShape.handles), {
          [handleId]: __spreadProps(__spreadValues({}, toPageShape.handles[handleId]), {
            bindingId: void 0
          })
        });
      } else {
        const fromShape = app.getShape(binding.fromId, fromPageId);
        const handle = Object.values(fromBoundShape.handles).find((handle2) => handle2.bindingId === binding.id);
        fromPage.before.shapes[fromShape.id] = {
          handles: { [handle.id]: { bindingId: binding.id } }
        };
        fromPage.after.shapes[fromShape.id] = {
          handles: { [handle.id]: { bindingId: void 0 } }
        };
      }
    }
  });
  const toPageState = app.state.document.pageStates[toPageId];
  const bounds = import_core22.Utils.getCommonBounds(movingShapes.map((shape) => TLDR.getBounds(shape)));
  const zoom = TLDR.getCameraZoom(viewportBounds.width < viewportBounds.height ? (viewportBounds.width - 128) / bounds.width : (viewportBounds.height - 128) / bounds.height);
  const mx = (viewportBounds.width - bounds.width * zoom) / 2 / zoom;
  const my = (viewportBounds.height - bounds.height * zoom) / 2 / zoom;
  const point = import_vec16.Vec.toFixed(import_vec16.Vec.add([-bounds.minX, -bounds.minY], [mx, my]));
  return {
    id: "move_to_page",
    before: {
      appState: {
        currentPageId: fromPageId
      },
      document: {
        pages: {
          [fromPageId]: fromPage.before,
          [toPageId]: toPage.before
        },
        pageStates: {
          [fromPageId]: { selectedIds: ids },
          [toPageId]: {
            selectedIds: toPageState.selectedIds,
            camera: toPageState.camera
          }
        }
      }
    },
    after: {
      appState: {
        currentPageId: toPageId
      },
      document: {
        pages: {
          [fromPageId]: fromPage.after,
          [toPageId]: toPage.after
        },
        pageStates: {
          [fromPageId]: { selectedIds: [] },
          [toPageId]: {
            selectedIds: ids,
            camera: {
              zoom,
              point
            }
          }
        }
      }
    }
  };
}

// src/state/commands/reorderShapes/reorderShapes.ts
function reorderShapes(app, ids, type) {
  const { currentPageId, page } = app;
  const parentIds = new Set(ids.map((id) => app.getShape(id).parentId));
  let result = { before: {}, after: {} };
  let startIndex;
  let startChildIndex;
  let step;
  Array.from(parentIds.values()).forEach((parentId) => {
    let sortedChildren = [];
    if (parentId === page.id) {
      sortedChildren = Object.values(page.shapes).sort((a, b) => a.childIndex - b.childIndex);
    } else {
      const parent = app.getShape(parentId);
      if (!parent.children)
        throw Error("No children in parent!");
      sortedChildren = parent.children.map((childId) => app.getShape(childId)).sort((a, b) => a.childIndex - b.childIndex);
    }
    const sortedChildIds = sortedChildren.map((shape) => shape.id);
    const sortedIndicesToMove = ids.filter((id) => sortedChildIds.includes(id)).map((id) => sortedChildIds.indexOf(id)).sort((a, b) => a - b);
    if (sortedIndicesToMove.length === sortedChildIds.length)
      return;
    switch (type) {
      case MoveType.ToBack: {
        for (let i = 0; i < sortedChildIds.length; i++) {
          if (sortedIndicesToMove.includes(i))
            continue;
          startIndex = i;
          break;
        }
        startChildIndex = sortedChildren[startIndex].childIndex;
        step = startChildIndex / (sortedIndicesToMove.length + 1);
        result = TLDR.mutateShapes(app.state, sortedIndicesToMove.map((i) => sortedChildren[i].id).reverse(), (_shape, i) => ({
          childIndex: startChildIndex - (i + 1) * step
        }), currentPageId);
        break;
      }
      case MoveType.ToFront: {
        for (let i = sortedChildIds.length - 1; i >= 0; i--) {
          if (sortedIndicesToMove.includes(i))
            continue;
          startIndex = i;
          break;
        }
        startChildIndex = sortedChildren[startIndex].childIndex;
        step = 1;
        result = TLDR.mutateShapes(app.state, sortedIndicesToMove.map((i) => sortedChildren[i].id), (_shape, i) => ({
          childIndex: startChildIndex + (i + 1)
        }), currentPageId);
        break;
      }
      case MoveType.Backward: {
        const indexMap = {};
        for (let i = sortedChildIds.length - 1; i >= 0; i--) {
          if (sortedIndicesToMove.includes(i)) {
            for (let j = i; j >= 0; j--) {
              if (!sortedIndicesToMove.includes(j)) {
                const endChildIndex = sortedChildren[j].childIndex;
                let startChildIndex2;
                let step2;
                if (j === 0) {
                  startChildIndex2 = endChildIndex / 2;
                  step2 = endChildIndex / 2 / (i - j + 1);
                } else {
                  startChildIndex2 = sortedChildren[j - 1].childIndex;
                  step2 = (endChildIndex - startChildIndex2) / (i - j + 1);
                  startChildIndex2 += step2;
                }
                for (let k = 0; k < i - j; k++) {
                  indexMap[sortedChildren[j + k + 1].id] = startChildIndex2 + step2 * k;
                }
                break;
              }
            }
          }
        }
        if (Object.values(indexMap).length > 0) {
          result = TLDR.mutateShapes(app.state, sortedIndicesToMove.map((i) => sortedChildren[i].id), (shape) => ({
            childIndex: indexMap[shape.id]
          }), currentPageId);
        }
        break;
      }
      case MoveType.Forward: {
        const indexMap = {};
        for (let i = 0; i < sortedChildIds.length; i++) {
          if (sortedIndicesToMove.includes(i)) {
            for (let j = i; j < sortedChildIds.length; j++) {
              if (!sortedIndicesToMove.includes(j)) {
                startChildIndex = sortedChildren[j].childIndex;
                const step2 = j === sortedChildIds.length - 1 ? 1 : (sortedChildren[j + 1].childIndex - startChildIndex) / (j - i + 1);
                for (let k = 0; k < j - i; k++) {
                  indexMap[sortedChildren[i + k].id] = startChildIndex + step2 * (k + 1);
                }
                break;
              }
            }
          }
        }
        if (Object.values(indexMap).length > 0) {
          result = TLDR.mutateShapes(app.state, sortedIndicesToMove.map((i) => sortedChildren[i].id), (shape) => ({
            childIndex: indexMap[shape.id]
          }), currentPageId);
        }
        break;
      }
    }
  });
  return {
    id: "move",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: result.before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: result.after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/renamePage/renamePage.ts
function renamePage(app, pageId, name) {
  const { page } = app;
  return {
    id: "rename_page",
    before: {
      document: {
        pages: {
          [pageId]: { name: page.name }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: { name }
        }
      }
    }
  };
}

// src/state/commands/resetBounds/resetBounds.ts
function resetBounds(app, ids, pageId) {
  const { currentPageId } = app;
  const { before, after } = TLDR.mutateShapes(app.state, ids, (shape) => {
    var _a, _b;
    return (_b = (_a = app.getShapeUtil(shape)).onDoubleClickBoundsHandle) == null ? void 0 : _b.call(_a, shape);
  }, pageId);
  return {
    id: "reset_bounds",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/rotateShapes/rotateShapes.ts
var import_core23 = __toModule(require("@tldraw/core"));
var PI22 = Math.PI * 2;
function rotateShapes(app, ids, delta = -PI22 / 4) {
  const { currentPageId } = app;
  const before = {};
  const after = {};
  const shapesToRotate = ids.flatMap((id) => {
    const shape = app.getShape(id);
    return shape.children ? shape.children.map((childId) => app.getShape(childId)) : shape;
  }).filter((shape) => !shape.isLocked);
  const origin = import_core23.Utils.getBoundsCenter(import_core23.Utils.getCommonBounds(shapesToRotate.map((shape) => TLDR.getBounds(shape))));
  shapesToRotate.forEach((shape) => {
    const change = TLDR.getRotatedShapeMutation(shape, TLDR.getCenter(shape), origin, delta);
    if (!change)
      return;
    before[shape.id] = TLDR.getBeforeShape(shape, change);
    after[shape.id] = change;
  });
  return {
    id: "rotate",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/stretchShapes/stretchShapes.ts
var import_core24 = __toModule(require("@tldraw/core"));
function stretchShapes(app, ids, type) {
  const { currentPageId, selectedIds } = app;
  const initialShapes = ids.map((id) => app.getShape(id));
  const boundsForShapes = initialShapes.map((shape) => TLDR.getBounds(shape));
  const commonBounds = import_core24.Utils.getCommonBounds(boundsForShapes);
  const idsToMutate = ids.flatMap((id) => {
    const shape = app.getShape(id);
    return shape.children ? shape.children : shape.id;
  }).filter((id) => !app.getShape(id).isLocked);
  const { before, after } = TLDR.mutateShapes(app.state, idsToMutate, (shape) => {
    const bounds = TLDR.getBounds(shape);
    switch (type) {
      case StretchType.Horizontal: {
        const newBounds = __spreadProps(__spreadValues({}, bounds), {
          minX: commonBounds.minX,
          maxX: commonBounds.maxX,
          width: commonBounds.width
        });
        return TLDR.getShapeUtil(shape).transformSingle(shape, newBounds, {
          type: import_core24.TLBoundsCorner.TopLeft,
          scaleX: newBounds.width / bounds.width,
          scaleY: 1,
          initialShape: shape,
          transformOrigin: [0.5, 0.5]
        });
      }
      case StretchType.Vertical: {
        const newBounds = __spreadProps(__spreadValues({}, bounds), {
          minY: commonBounds.minY,
          maxY: commonBounds.maxY,
          height: commonBounds.height
        });
        return TLDR.getShapeUtil(shape).transformSingle(shape, newBounds, {
          type: import_core24.TLBoundsCorner.TopLeft,
          scaleX: 1,
          scaleY: newBounds.height / bounds.height,
          initialShape: shape,
          transformOrigin: [0.5, 0.5]
        });
      }
    }
  }, currentPageId);
  initialShapes.forEach((shape) => {
    if (shape.type === TDShapeType.Group) {
      delete before[shape.id];
      delete after[shape.id];
    }
  });
  return {
    id: "stretch",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/styleShapes/styleShapes.ts
var import_vec17 = __toModule(require("@tldraw/vec"));
function styleShapes(app, ids, changes) {
  const { currentPageId, selectedIds } = app;
  const shapeIdsToMutate = ids.flatMap((id) => TLDR.getDocumentBranch(app.state, id, currentPageId)).filter((id) => !app.getShape(id).isLocked);
  const beforeShapes = {};
  const afterShapes = {};
  shapeIdsToMutate.map((id) => app.getShape(id)).filter((shape) => !shape.isLocked).forEach((shape) => {
    beforeShapes[shape.id] = {
      style: __spreadValues({}, Object.fromEntries(Object.keys(changes).map((key) => [key, shape.style[key]])))
    };
    afterShapes[shape.id] = {
      style: changes
    };
    if (shape.type === TDShapeType.Text) {
      beforeShapes[shape.id].point = shape.point;
      afterShapes[shape.id].point = import_vec17.Vec.toFixed(import_vec17.Vec.add(shape.point, import_vec17.Vec.sub(app.getShapeUtil(shape).getCenter(shape), app.getShapeUtil(shape).getCenter(__spreadProps(__spreadValues({}, shape), {
        style: __spreadValues(__spreadValues({}, shape.style), changes)
      })))));
    }
  });
  return {
    id: "style",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: beforeShapes
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      },
      appState: {
        currentStyle: __spreadValues({}, app.appState.currentStyle)
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: afterShapes
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      },
      appState: {
        currentStyle: changes
      }
    }
  };
}

// src/state/commands/toggleShapesDecoration/toggleShapesDecoration.ts
function toggleShapesDecoration(app, ids, decorationId) {
  const { currentPageId, selectedIds } = app;
  const beforeShapes = Object.fromEntries(ids.map((id) => {
    var _a;
    return [
      id,
      {
        decorations: {
          [decorationId]: (_a = app.getShape(id).decorations) == null ? void 0 : _a[decorationId]
        }
      }
    ];
  }));
  const afterShapes = Object.fromEntries(ids.filter((id) => !app.getShape(id).isLocked).map((id) => {
    var _a;
    return [
      id,
      {
        decorations: {
          [decorationId]: ((_a = app.getShape(id).decorations) == null ? void 0 : _a[decorationId]) ? void 0 : Decoration.Arrow
        }
      }
    ];
  }));
  return {
    id: "toggle_decorations",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: beforeShapes }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: afterShapes }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/toggleShapesProp/toggleShapesProp.ts
function toggleShapeProp(app, ids, prop) {
  const { currentPageId } = app;
  const initialShapes = ids.map((id) => app.getShape(id)).filter((shape) => prop === "isLocked" ? true : !shape.isLocked);
  const isAllToggled = initialShapes.every((shape) => shape[prop]);
  const before = {};
  const after = {};
  initialShapes.forEach((shape) => {
    before[shape.id] = { [prop]: shape[prop] };
    after[shape.id] = { [prop]: !isAllToggled };
  });
  return {
    id: "toggle",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: before
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: after
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/translateShapes/translateShapes.ts
var import_vec18 = __toModule(require("@tldraw/vec"));
function translateShapes(app, ids, delta) {
  const { currentPageId, selectedIds } = app;
  app.rotationInfo.selectedIds = [...selectedIds];
  const before = {
    shapes: {},
    bindings: {}
  };
  const after = {
    shapes: {},
    bindings: {}
  };
  const idsToMutate = ids.flatMap((id) => {
    const shape = app.getShape(id);
    return shape.children ? shape.children : shape.id;
  }).filter((id) => !app.getShape(id).isLocked);
  const change = TLDR.mutateShapes(app.state, idsToMutate, (shape) => ({
    point: import_vec18.Vec.toFixed(import_vec18.Vec.add(shape.point, delta))
  }), currentPageId);
  before.shapes = change.before;
  after.shapes = change.after;
  const bindingsToDelete = TLDR.getBindings(app.state, currentPageId).filter((binding) => ids.includes(binding.fromId) && !ids.includes(binding.toId));
  bindingsToDelete.forEach((binding) => {
    before.bindings[binding.id] = binding;
    after.bindings[binding.id] = void 0;
    for (const id of [binding.toId, binding.fromId]) {
      const shape = app.getShape(id);
      if (!shape.handles)
        continue;
      Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
        var _a, _b;
        before.shapes[id] = __spreadProps(__spreadValues({}, before.shapes[id]), {
          handles: __spreadProps(__spreadValues({}, (_a = before.shapes[id]) == null ? void 0 : _a.handles), {
            [handle.id]: { bindingId: binding.id }
          })
        });
        after.shapes[id] = __spreadProps(__spreadValues({}, after.shapes[id]), {
          handles: __spreadProps(__spreadValues({}, (_b = after.shapes[id]) == null ? void 0 : _b.handles), { [handle.id]: { bindingId: void 0 } })
        });
      });
    }
  });
  return {
    id: "translate",
    before: {
      document: {
        pages: {
          [currentPageId]: before
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: after
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/ungroupShapes/ungroupShapes.ts
function ungroupShapes(app, selectedIds, groupShapes2, pageId) {
  const { bindings } = app;
  const beforeShapes = {};
  const afterShapes = {};
  const beforeBindings = {};
  const afterBindings = {};
  const beforeSelectedIds = selectedIds;
  const afterSelectedIds = selectedIds.filter((id) => !groupShapes2.find((shape) => shape.id === id));
  groupShapes2.filter((shape) => !shape.isLocked).forEach((groupShape) => {
    const shapesToReparent = [];
    const deletedGroupIds = [];
    beforeShapes[groupShape.id] = groupShape;
    afterShapes[groupShape.id] = void 0;
    groupShape.children.forEach((id) => {
      afterSelectedIds.push(id);
      const shape = app.getShape(id, pageId);
      shapesToReparent.push(shape);
    });
    const startingChildIndex = groupShape.childIndex;
    const endingChildIndex = TLDR.getChildIndexAbove(app.state, groupShape.id, pageId);
    const step = (endingChildIndex - startingChildIndex) / shapesToReparent.length;
    const sortedShapes = shapesToReparent.sort((a, b) => a.childIndex - b.childIndex);
    sortedShapes.forEach((shape, index) => {
      beforeShapes[shape.id] = {
        parentId: shape.parentId,
        childIndex: shape.childIndex
      };
      afterShapes[shape.id] = {
        parentId: pageId,
        childIndex: startingChildIndex + step * index
      };
    });
    bindings.filter((binding) => binding.toId === groupShape.id || binding.fromId === groupShape.id).forEach((binding) => {
      for (const id of [binding.toId, binding.fromId]) {
        if (afterShapes[id] === void 0) {
          beforeBindings[binding.id] = binding;
          afterBindings[binding.id] = void 0;
          const shape = app.getShape(id, pageId);
          if (shape.handles) {
            Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
              var _a, _b;
              beforeShapes[id] = __spreadProps(__spreadValues({}, beforeShapes[id]), {
                handles: __spreadProps(__spreadValues({}, (_a = beforeShapes[id]) == null ? void 0 : _a.handles), {
                  [handle.id]: { bindingId: binding.id }
                })
              });
              if (!deletedGroupIds.includes(id)) {
                afterShapes[id] = __spreadProps(__spreadValues({}, afterShapes[id]), {
                  handles: __spreadProps(__spreadValues({}, (_b = afterShapes[id]) == null ? void 0 : _b.handles), {
                    [handle.id]: { bindingId: void 0 }
                  })
                });
              }
            });
          }
        }
      }
    });
  });
  return {
    id: "ungroup",
    before: {
      document: {
        pages: {
          [pageId]: {
            shapes: beforeShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: beforeSelectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: {
            shapes: afterShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: afterSelectedIds
          }
        }
      }
    }
  };
}

// src/state/commands/updateShapes/updateShapes.ts
function updateShapes(app, updates, pageId) {
  const ids = updates.map((update) => update.id);
  const change = TLDR.mutateShapes(app.state, ids.filter((id) => !app.getShape(id, pageId).isLocked), (_shape, i) => updates[i], pageId);
  return {
    id: "update",
    before: {
      document: {
        pages: {
          [pageId]: {
            shapes: change.before
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: {
            shapes: change.after
          }
        }
      }
    }
  };
}

// src/state/commands/setShapesProps/setShapesProps.ts
function setShapesProps(app, ids, partial) {
  const { currentPageId, selectedIds } = app;
  const initialShapes = ids.map((id) => app.getShape(id)).filter((shape) => partial["isLocked"] ? true : !shape.isLocked);
  const before = {};
  const after = {};
  const keys = Object.keys(partial);
  initialShapes.forEach((shape) => {
    before[shape.id] = Object.fromEntries(keys.map((key) => [key, shape[key]]));
    after[shape.id] = partial;
  });
  return {
    id: "set_props",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: before
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: after
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    }
  };
}

// src/state/sessions/ArrowSession/ArrowSession.ts
var import_vec19 = __toModule(require("@tldraw/vec"));

// src/state/sessions/BaseSession.ts
var BaseSession = class {
  constructor(app) {
    this.app = app;
  }
};

// src/state/sessions/ArrowSession/ArrowSession.ts
var import_core25 = __toModule(require("@tldraw/core"));
var ArrowSession = class extends BaseSession {
  constructor(app, shapeId, handleId, isCreate = false) {
    super(app);
    this.type = SessionType.Arrow;
    this.status = TDStatus.TranslatingHandle;
    this.newStartBindingId = import_core25.Utils.uniqueId();
    this.draggedBindingId = import_core25.Utils.uniqueId();
    this.didBind = false;
    this.start = () => void 0;
    this.update = () => {
      var _a, _b, _c;
      const { initialShape } = this;
      const {
        currentPoint,
        shiftKey,
        altKey,
        metaKey,
        currentGrid,
        settings: { showGrid }
      } = this.app;
      const shape = this.app.getShape(initialShape.id);
      if (shape.isLocked)
        return;
      const handles = shape.handles;
      const handleId = this.handleId;
      if (!handles[handleId].canBind)
        return;
      let delta = import_vec19.Vec.sub(currentPoint, handles[handleId].point);
      if (shiftKey) {
        const A = handles[handleId === "start" ? "end" : "start"].point;
        const B = handles[handleId].point;
        const C = import_vec19.Vec.toFixed(import_vec19.Vec.sub(import_vec19.Vec.add(B, delta), shape.point));
        const angle = import_vec19.Vec.angle(A, C);
        const adjusted = import_vec19.Vec.rotWith(C, A, import_core25.Utils.snapAngleToSegments(angle, 24) - angle);
        delta = import_vec19.Vec.add(delta, import_vec19.Vec.sub(adjusted, C));
      }
      const nextPoint = import_vec19.Vec.sub(import_vec19.Vec.add(handles[handleId].point, delta), shape.point);
      const handle = __spreadProps(__spreadValues({}, handles[handleId]), {
        point: showGrid ? import_vec19.Vec.snap(nextPoint, currentGrid) : import_vec19.Vec.toFixed(nextPoint),
        bindingId: void 0
      });
      const utils = shapeUtils[TDShapeType.Arrow];
      const change = (_a = utils.onHandleChange) == null ? void 0 : _a.call(utils, shape, {
        [handleId]: handle
      });
      if (!change)
        return;
      const next = {
        shape: import_core25.Utils.deepMerge(shape, change),
        bindings: {}
      };
      if (this.initialBinding) {
        next.bindings[this.initialBinding.id] = void 0;
      }
      if (this.startBindingShapeId) {
        let startBinding;
        const target = this.app.page.shapes[this.startBindingShapeId];
        const targetUtils = TLDR.getShapeUtil(target);
        if (!metaKey) {
          const center = targetUtils.getCenter(target);
          const handle2 = next.shape.handles.start;
          const rayPoint = import_vec19.Vec.add(handle2.point, next.shape.point);
          const rayOrigin = center;
          const rayDirection = import_vec19.Vec.uni(import_vec19.Vec.sub(rayPoint, rayOrigin));
          startBinding = this.findBindingPoint(shape, target, "start", this.newStartBindingId, center, rayOrigin, rayDirection, false);
        }
        if (startBinding) {
          this.didBind = true;
          next.bindings[this.newStartBindingId] = startBinding;
          next.shape.handles = __spreadProps(__spreadValues({}, next.shape.handles), {
            start: __spreadProps(__spreadValues({}, next.shape.handles.start), {
              bindingId: startBinding.id
            })
          });
          const target2 = this.app.page.shapes[this.startBindingShapeId];
          const targetUtils2 = TLDR.getShapeUtil(target2);
          const arrowChange = (_c = (_b = TLDR.getShapeUtil(next.shape.type)).onBindingChange) == null ? void 0 : _c.call(_b, next.shape, startBinding, target2, targetUtils2.getBounds(target2), targetUtils2.getCenter(target2));
          if (arrowChange) {
            Object.assign(next.shape, arrowChange);
          }
        } else {
          this.didBind = this.didBind || false;
          if (this.app.page.bindings[this.newStartBindingId]) {
            next.bindings[this.newStartBindingId] = void 0;
          }
          if (shape.handles.start.bindingId === this.newStartBindingId) {
            next.shape.handles = __spreadProps(__spreadValues({}, next.shape.handles), {
              start: __spreadProps(__spreadValues({}, next.shape.handles.start), {
                bindingId: void 0
              })
            });
          }
        }
      }
      let draggedBinding;
      if (!metaKey) {
        const handle2 = next.shape.handles[this.handleId];
        const oppositeHandle = next.shape.handles[this.handleId === "start" ? "end" : "start"];
        const rayOrigin = import_vec19.Vec.add(oppositeHandle.point, next.shape.point);
        const rayPoint = import_vec19.Vec.add(handle2.point, next.shape.point);
        const rayDirection = import_vec19.Vec.uni(import_vec19.Vec.sub(rayPoint, rayOrigin));
        const targets = this.bindableShapeIds.map((id) => this.app.page.shapes[id]);
        for (const target of targets) {
          draggedBinding = this.findBindingPoint(shape, target, this.handleId, this.draggedBindingId, rayPoint, rayOrigin, rayDirection, altKey);
          if (draggedBinding)
            break;
        }
      }
      if (draggedBinding) {
        this.didBind = true;
        next.bindings[this.draggedBindingId] = draggedBinding;
        next.shape.handles = __spreadProps(__spreadValues({}, next.shape.handles), {
          [this.handleId]: __spreadProps(__spreadValues({}, next.shape.handles[this.handleId]), {
            bindingId: this.draggedBindingId
          })
        });
        const target = this.app.page.shapes[draggedBinding.toId];
        const targetUtils = TLDR.getShapeUtil(target);
        const utils2 = shapeUtils[TDShapeType.Arrow];
        const arrowChange = utils2.onBindingChange(next.shape, draggedBinding, target, targetUtils.getBounds(target), targetUtils.getCenter(target));
        if (arrowChange) {
          Object.assign(next.shape, arrowChange);
        }
      } else {
        this.didBind = this.didBind || false;
        const currentBindingId = shape.handles[this.handleId].bindingId;
        if (currentBindingId) {
          next.bindings = __spreadProps(__spreadValues({}, next.bindings), {
            [currentBindingId]: void 0
          });
          next.shape.handles = __spreadProps(__spreadValues({}, next.shape.handles), {
            [this.handleId]: __spreadProps(__spreadValues({}, next.shape.handles[this.handleId]), {
              bindingId: void 0
            })
          });
        }
      }
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [shape.id]: next.shape
              },
              bindings: next.bindings
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              bindingId: next.shape.handles[handleId].bindingId
            }
          }
        }
      };
    };
    this.cancel = () => {
      const { initialShape, initialBinding, newStartBindingId, draggedBindingId } = this;
      const afterBindings = {};
      afterBindings[draggedBindingId] = void 0;
      if (initialBinding) {
        afterBindings[initialBinding.id] = initialBinding;
      }
      if (newStartBindingId) {
        afterBindings[newStartBindingId] = void 0;
      }
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [initialShape.id]: this.isCreate ? void 0 : initialShape
              },
              bindings: afterBindings
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              selectedIds: this.isCreate ? [] : [initialShape.id],
              bindingId: void 0,
              hoveredId: void 0,
              editingId: void 0
            }
          }
        }
      };
    };
    this.complete = () => {
      const { initialShape, initialBinding, newStartBindingId, startBindingShapeId, handleId } = this;
      const currentShape = TLDR.onSessionComplete(this.app.page.shapes[initialShape.id]);
      const currentBindingId = currentShape.handles[handleId].bindingId;
      if (!(currentBindingId || initialBinding) && import_vec19.Vec.dist(currentShape.handles.start.point, currentShape.handles.end.point) < 4) {
        return this.cancel();
      }
      const beforeBindings = {};
      const afterBindings = {};
      if (initialBinding) {
        beforeBindings[initialBinding.id] = this.isCreate ? void 0 : initialBinding;
        afterBindings[initialBinding.id] = void 0;
      }
      if (currentBindingId) {
        beforeBindings[currentBindingId] = void 0;
        afterBindings[currentBindingId] = this.app.page.bindings[currentBindingId];
      }
      if (startBindingShapeId) {
        beforeBindings[newStartBindingId] = void 0;
        afterBindings[newStartBindingId] = this.app.page.bindings[newStartBindingId];
      }
      return {
        id: "arrow",
        before: {
          document: {
            pages: {
              [this.app.currentPageId]: {
                shapes: {
                  [initialShape.id]: this.isCreate ? void 0 : initialShape
                },
                bindings: beforeBindings
              }
            },
            pageStates: {
              [this.app.currentPageId]: {
                selectedIds: this.isCreate ? [] : [initialShape.id],
                bindingId: void 0,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [this.app.currentPageId]: {
                shapes: {
                  [initialShape.id]: currentShape
                },
                bindings: afterBindings
              }
            },
            pageStates: {
              [this.app.currentPageId]: {
                selectedIds: [initialShape.id],
                bindingId: void 0,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        }
      };
    };
    this.findBindingPoint = (shape, target, handleId, bindingId, point, origin, direction, bindAnywhere) => {
      const util = TLDR.getShapeUtil(target.type);
      const bindingPoint = util.getBindingPoint(target, shape, point, origin, direction, BINDING_DISTANCE, bindAnywhere);
      if (!bindingPoint)
        return;
      return {
        id: bindingId,
        type: "arrow",
        fromId: shape.id,
        toId: target.id,
        handleId,
        point: import_vec19.Vec.toFixed(bindingPoint.point),
        distance: bindingPoint.distance
      };
    };
    var _a;
    this.isCreate = isCreate;
    const { currentPageId } = app.state.appState;
    const page = app.state.document.pages[currentPageId];
    this.handleId = handleId;
    this.initialShape = page.shapes[shapeId];
    this.bindableShapeIds = TLDR.getBindableShapeIds(app.state).filter((id) => !(id === this.initialShape.id || id === this.initialShape.parentId));
    const { originPoint } = this.app;
    if (this.isCreate) {
      this.startBindingShapeId = (_a = this.bindableShapeIds.map((id) => page.shapes[id]).find((shape) => import_core25.Utils.pointInBounds(originPoint, TLDR.getShapeUtil(shape).getBounds(shape)))) == null ? void 0 : _a.id;
    } else {
      const initialBindingId = this.initialShape.handles[this.handleId].bindingId;
      if (initialBindingId) {
        this.initialBinding = page.bindings[initialBindingId];
      } else {
        this.initialShape.handles[this.handleId].bindingId = void 0;
      }
    }
  }
};

// src/state/sessions/BrushSession/BrushSession.ts
var import_core26 = __toModule(require("@tldraw/core"));
var BrushSession = class extends BaseSession {
  constructor(app) {
    super(app);
    this.type = SessionType.Brush;
    this.status = TDStatus.Brushing;
    this.start = () => void 0;
    this.update = () => {
      const {
        initialSelectedIds,
        shapesToTest,
        app: { originPoint, currentPoint }
      } = this;
      const brush = import_core26.Utils.getBoundsFromPoints([originPoint, currentPoint]);
      const hits = new Set();
      const selectedIds = new Set(initialSelectedIds);
      shapesToTest.forEach(({ id, selectId }) => {
        const { metaKey } = this.app;
        const shape = this.app.getShape(id);
        if (!hits.has(selectId)) {
          const util = this.app.getShapeUtil(shape);
          if (metaKey ? import_core26.Utils.boundsContain(brush, util.getBounds(shape)) : util.hitTestBounds(shape, brush)) {
            hits.add(selectId);
            if (!selectedIds.has(selectId)) {
              selectedIds.add(selectId);
            }
          } else if (selectedIds.has(selectId)) {
            selectedIds.delete(selectId);
          }
        }
      });
      const currentSelectedIds = this.app.selectedIds;
      const didChange = selectedIds.size !== currentSelectedIds.length || currentSelectedIds.some((id) => !selectedIds.has(id));
      const afterSelectedIds = didChange ? Array.from(selectedIds.values()) : currentSelectedIds;
      return {
        document: {
          pageStates: {
            [this.app.currentPageId]: {
              brush,
              selectedIds: afterSelectedIds
            }
          }
        }
      };
    };
    this.cancel = () => {
      return {
        document: {
          pageStates: {
            [this.app.currentPageId]: {
              brush: null,
              selectedIds: Array.from(this.initialSelectedIds.values())
            }
          }
        }
      };
    };
    this.complete = () => {
      return {
        document: {
          pageStates: {
            [this.app.currentPageId]: {
              brush: null,
              selectedIds: [...this.app.selectedIds]
            }
          }
        }
      };
    };
    const { currentPageId } = app;
    this.initialSelectedIds = new Set(this.app.selectedIds);
    this.shapesToTest = this.app.shapes.filter((shape) => !(shape.isLocked || shape.isHidden || shape.parentId !== currentPageId || this.initialSelectedIds.has(shape.id) || this.initialSelectedIds.has(shape.parentId))).map((shape) => ({
      id: shape.id,
      bounds: this.app.getShapeUtil(shape).getBounds(shape),
      selectId: shape.id
    }));
  }
};

// src/state/sessions/DrawSession/DrawSession.ts
var import_core27 = __toModule(require("@tldraw/core"));
var import_vec20 = __toModule(require("@tldraw/vec"));
var DrawSession = class extends BaseSession {
  constructor(app, id) {
    super(app);
    this.type = SessionType.Draw;
    this.status = TDStatus.Creating;
    this.shiftedPoints = [];
    this.start = () => void 0;
    this.update = () => {
      const { shapeId } = this;
      const { currentPoint, originPoint, shiftKey } = this.app;
      if (!this.lockedDirection && this.points.length > 1) {
        const bounds = import_core27.Utils.getBoundsFromPoints(this.points);
        if (bounds.width > 8 || bounds.height > 8) {
          this.lockedDirection = bounds.width > bounds.height ? "horizontal" : "vertical";
        }
      }
      if (shiftKey) {
        if (!this.isLocked && this.points.length > 2) {
          if (!this.lockedDirection) {
            const bounds = import_core27.Utils.getBoundsFromPoints(this.points);
            this.lockedDirection = bounds.width > bounds.height ? "horizontal" : "vertical";
          }
          this.isLocked = true;
          const returning = [...this.lastAdjustedPoint];
          if (this.lockedDirection === "vertical") {
            returning[0] = 0;
          } else {
            returning[1] = 0;
          }
          this.points.push(returning.concat(currentPoint[2]));
        }
      } else if (this.isLocked) {
        this.isLocked = false;
      }
      if (this.isLocked) {
        if (this.lockedDirection === "vertical") {
          currentPoint[0] = originPoint[0];
        } else {
          currentPoint[1] = originPoint[1];
        }
      }
      const newAdjustedPoint = import_vec20.Vec.toFixed(import_vec20.Vec.sub(currentPoint, originPoint)).concat(currentPoint[2]);
      if (import_vec20.Vec.isEqual(this.lastAdjustedPoint, newAdjustedPoint))
        return;
      this.points.push(newAdjustedPoint);
      this.lastAdjustedPoint = newAdjustedPoint;
      const prevTopLeft = [...this.topLeft];
      const topLeft = [
        Math.min(this.topLeft[0], currentPoint[0]),
        Math.min(this.topLeft[1], currentPoint[1])
      ];
      const delta = import_vec20.Vec.sub(topLeft, originPoint);
      let points;
      if (prevTopLeft[0] !== topLeft[0] || prevTopLeft[1] !== topLeft[1]) {
        this.topLeft = topLeft;
        points = this.points.map((pt) => {
          return import_vec20.Vec.toFixed(import_vec20.Vec.sub(pt, delta)).concat(pt[2]);
        });
      } else {
        points = [...this.shiftedPoints, import_vec20.Vec.sub(newAdjustedPoint, delta).concat(newAdjustedPoint[2])];
      }
      this.shiftedPoints = points;
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [shapeId]: {
                  point: this.topLeft,
                  points
                }
              }
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              selectedIds: [shapeId]
            }
          }
        }
      };
    };
    this.cancel = () => {
      const { shapeId } = this;
      const pageId = this.app.currentPageId;
      return {
        document: {
          pages: {
            [pageId]: {
              shapes: {
                [shapeId]: void 0
              }
            }
          },
          pageStates: {
            [pageId]: {
              selectedIds: []
            }
          }
        }
      };
    };
    this.complete = () => {
      const { shapeId } = this;
      const pageId = this.app.currentPageId;
      const shape = this.app.getShape(shapeId);
      return {
        id: "create_draw",
        before: {
          document: {
            pages: {
              [pageId]: {
                shapes: {
                  [shapeId]: void 0
                }
              }
            },
            pageStates: {
              [pageId]: {
                selectedIds: []
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [pageId]: {
                shapes: {
                  [shapeId]: __spreadProps(__spreadValues({}, shape), {
                    point: import_vec20.Vec.toFixed(shape.point),
                    points: shape.points.map((pt) => import_vec20.Vec.toFixed(pt)),
                    isComplete: true
                  })
                }
              }
            },
            pageStates: {
              [this.app.currentPageId]: {
                selectedIds: []
              }
            }
          }
        }
      };
    };
    const { originPoint } = this.app;
    this.topLeft = [...originPoint];
    this.shapeId = id;
    this.points = [[0, 0, originPoint[2] || 0.5]];
    this.shiftedPoints = [...this.points];
    this.lastAdjustedPoint = [0, 0];
  }
};

// src/state/sessions/HandleSession/HandleSession.ts
var import_vec21 = __toModule(require("@tldraw/vec"));
var HandleSession = class extends BaseSession {
  constructor(app, shapeId, handleId, commandId = "move_handle") {
    super(app);
    this.type = SessionType.Handle;
    this.status = TDStatus.TranslatingHandle;
    this.shiftKey = false;
    this.start = () => void 0;
    this.update = () => {
      var _a, _b;
      const {
        initialShape,
        app: { currentPageId, currentPoint, shiftKey, altKey, metaKey }
      } = this;
      const shape = this.app.getShape(initialShape.id);
      if (shape.isLocked)
        return void 0;
      const handles = shape.handles;
      const handleId = this.handleId;
      const delta = import_vec21.Vec.sub(currentPoint, handles[handleId].point);
      const handle = __spreadProps(__spreadValues({}, handles[handleId]), {
        point: import_vec21.Vec.sub(import_vec21.Vec.add(handles[handleId].point, delta), shape.point)
      });
      const change = (_b = (_a = TLDR.getShapeUtil(shape)).onHandleChange) == null ? void 0 : _b.call(_a, shape, {
        [handleId]: handle
      }, { delta, shiftKey, altKey, metaKey });
      if (!change)
        return;
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: {
                [shape.id]: change
              }
            }
          }
        }
      };
    };
    this.cancel = () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: {
                [initialShape.id]: initialShape
              }
            }
          }
        }
      };
    };
    this.complete = () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      return {
        id: this.commandId,
        before: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: {
                  [initialShape.id]: initialShape
                }
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: {
                  [initialShape.id]: TLDR.onSessionComplete(this.app.getShape(this.initialShape.id))
                }
              }
            }
          }
        }
      };
    };
    const { originPoint } = app;
    this.topLeft = [...originPoint];
    this.handleId = handleId;
    this.initialShape = this.app.getShape(shapeId);
    this.commandId = commandId;
  }
};

// src/state/sessions/RotateSession/RotateSession.ts
var import_core28 = __toModule(require("@tldraw/core"));
var import_vec22 = __toModule(require("@tldraw/vec"));
var RotateSession = class extends BaseSession {
  constructor(app) {
    super(app);
    this.type = SessionType.Rotate;
    this.status = TDStatus.Transforming;
    this.delta = [0, 0];
    this.changes = {};
    this.start = () => void 0;
    this.update = () => {
      const {
        commonBoundsCenter,
        initialShapes,
        app: { currentPageId, currentPoint, shiftKey }
      } = this;
      const shapes = {};
      let directionDelta = import_vec22.Vec.angle(commonBoundsCenter, currentPoint) - this.initialAngle;
      if (shiftKey) {
        directionDelta = import_core28.Utils.snapAngleToSegments(directionDelta, 24);
      }
      initialShapes.forEach(({ center, shape }) => {
        const { rotation = 0 } = shape;
        let shapeDelta = 0;
        if (shiftKey) {
          const snappedRotation = import_core28.Utils.snapAngleToSegments(rotation, 24);
          shapeDelta = snappedRotation - rotation;
        }
        const change = TLDR.getRotatedShapeMutation(shape, center, commonBoundsCenter, shiftKey ? directionDelta + shapeDelta : directionDelta);
        if (change) {
          shapes[shape.id] = change;
        }
      });
      this.changes = shapes;
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    };
    this.cancel = () => {
      const {
        initialShapes,
        app: { currentPageId }
      } = this;
      const shapes = {};
      initialShapes.forEach(({ shape }) => shapes[shape.id] = shape);
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    };
    this.complete = () => {
      const {
        initialShapes,
        app: { currentPageId }
      } = this;
      const beforeShapes = {};
      const afterShapes = this.changes;
      initialShapes.forEach(({ shape: { id, point, rotation, handles } }) => {
        beforeShapes[id] = { point, rotation, handles };
      });
      return {
        id: "rotate",
        before: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            }
          }
        }
      };
    };
    const {
      app: { currentPageId, pageState, originPoint }
    } = this;
    const initialShapes = TLDR.getSelectedBranchSnapshot(app.state, currentPageId).filter((shape) => !shape.isLocked);
    if (initialShapes.length === 0) {
      throw Error("No selected shapes!");
    }
    if (app.rotationInfo.selectedIds === pageState.selectedIds) {
      if (app.rotationInfo.center === void 0) {
        throw Error("We should have a center for rotation!");
      }
      this.commonBoundsCenter = app.rotationInfo.center;
    } else {
      this.commonBoundsCenter = import_core28.Utils.getBoundsCenter(import_core28.Utils.getCommonBounds(initialShapes.map(TLDR.getBounds)));
      app.rotationInfo.selectedIds = pageState.selectedIds;
      app.rotationInfo.center = this.commonBoundsCenter;
    }
    this.initialShapes = initialShapes.filter((shape) => shape.children === void 0).map((shape) => {
      return {
        shape,
        center: this.app.getShapeUtil(shape).getCenter(shape)
      };
    });
    this.initialAngle = import_vec22.Vec.angle(this.commonBoundsCenter, originPoint);
  }
};

// src/state/sessions/TransformSession/TransformSession.ts
var import_core29 = __toModule(require("@tldraw/core"));
var import_vec23 = __toModule(require("@tldraw/vec"));
var TransformSession = class extends BaseSession {
  constructor(app, transformType = import_core29.TLBoundsCorner.BottomRight, isCreate = false) {
    super(app);
    this.transformType = transformType;
    this.isCreate = isCreate;
    this.type = SessionType.Transform;
    this.status = TDStatus.Transforming;
    this.scaleX = 1;
    this.scaleY = 1;
    this.snapInfo = { state: "empty" };
    this.prevPoint = [0, 0];
    this.speed = 1;
    this.start = () => {
      this.snapInfo = {
        state: "ready",
        bounds: this.app.shapes.filter((shape) => !this.initialShapeIds.includes(shape.id)).map((shape) => import_core29.Utils.getBoundsWithCenter(TLDR.getRotatedBounds(shape)))
      };
      return void 0;
    };
    this.update = () => {
      const {
        transformType,
        shapeBounds,
        initialCommonBounds,
        isAllAspectRatioLocked,
        app: {
          currentPageId,
          pageState: { camera },
          viewport,
          currentPoint,
          previousPoint,
          originPoint,
          shiftKey,
          altKey,
          metaKey,
          currentGrid,
          settings: { isSnapping, showGrid }
        }
      } = this;
      const shapes = {};
      const delta = altKey ? import_vec23.Vec.mul(import_vec23.Vec.sub(currentPoint, originPoint), 2) : import_vec23.Vec.sub(currentPoint, originPoint);
      let newBounds = import_core29.Utils.getTransformedBoundingBox(initialCommonBounds, transformType, delta, 0, shiftKey || isAllAspectRatioLocked);
      if (altKey) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), import_core29.Utils.centerBounds(newBounds, import_core29.Utils.getBoundsCenter(initialCommonBounds)));
      }
      if (showGrid) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), import_core29.Utils.snapBoundsToGrid(newBounds, currentGrid));
      }
      const speed = import_vec23.Vec.dist(currentPoint, previousPoint);
      const speedChange = speed - this.speed;
      this.speed = this.speed + speedChange * (speedChange > 1 ? 0.5 : 0.15);
      let snapLines = [];
      if ((isSnapping && !metaKey || !isSnapping && metaKey) && this.speed * camera.zoom < SLOW_SPEED && this.snapInfo.state === "ready") {
        const snapResult = import_core29.Utils.getSnapPoints(import_core29.Utils.getBoundsWithCenter(newBounds), this.snapInfo.bounds.filter((bounds) => import_core29.Utils.boundsContain(viewport, bounds) || import_core29.Utils.boundsCollide(viewport, bounds)), SNAP_DISTANCE / camera.zoom);
        if (snapResult) {
          snapLines = snapResult.snapLines;
          newBounds = import_core29.Utils.getTransformedBoundingBox(initialCommonBounds, transformType, import_vec23.Vec.sub(delta, snapResult.offset), 0, shiftKey || isAllAspectRatioLocked);
        }
      }
      this.scaleX = newBounds.scaleX;
      this.scaleY = newBounds.scaleY;
      shapeBounds.forEach(({ initialShape, initialShapeBounds, transformOrigin }) => {
        let newShapeBounds = import_core29.Utils.getRelativeTransformedBoundingBox(newBounds, initialCommonBounds, initialShapeBounds, this.scaleX < 0, this.scaleY < 0);
        if (showGrid) {
          newShapeBounds = import_core29.Utils.snapBoundsToGrid(newShapeBounds, currentGrid);
        }
        const afterShape = TLDR.transform(this.app.getShape(initialShape.id), newShapeBounds, {
          type: this.transformType,
          initialShape,
          scaleX: this.scaleX,
          scaleY: this.scaleY,
          transformOrigin
        });
        shapes[initialShape.id] = afterShape;
      });
      return {
        appState: {
          snapLines
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    };
    this.cancel = () => {
      const {
        shapeBounds,
        app: { currentPageId }
      } = this;
      const shapes = {};
      if (this.isCreate) {
        shapeBounds.forEach((shape) => shapes[shape.initialShape.id] = void 0);
      } else {
        shapeBounds.forEach((shape) => shapes[shape.initialShape.id] = shape.initialShape);
      }
      return {
        appState: {
          snapLines: []
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          },
          pageStates: {
            [currentPageId]: {
              selectedIds: this.isCreate ? [] : shapeBounds.map((shape) => shape.initialShape.id)
            }
          }
        }
      };
    };
    this.complete = () => {
      const {
        isCreate,
        shapeBounds,
        hasUnlockedShapes,
        app: { currentPageId }
      } = this;
      if (!hasUnlockedShapes)
        return;
      const beforeShapes = {};
      const afterShapes = {};
      let beforeSelectedIds;
      let afterSelectedIds;
      if (isCreate) {
        beforeSelectedIds = [];
        afterSelectedIds = [];
        shapeBounds.forEach(({ initialShape }) => {
          beforeShapes[initialShape.id] = void 0;
          afterShapes[initialShape.id] = this.app.getShape(initialShape.id);
        });
      } else {
        beforeSelectedIds = this.initialSelectedIds;
        afterSelectedIds = this.initialSelectedIds;
        shapeBounds.forEach(({ initialShape }) => {
          beforeShapes[initialShape.id] = initialShape;
          afterShapes[initialShape.id] = this.app.getShape(initialShape.id);
        });
      }
      return {
        id: "transform",
        before: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: beforeSelectedIds,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        },
        after: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: afterSelectedIds,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        }
      };
    };
    this.initialSelectedIds = [...this.app.selectedIds];
    this.app.rotationInfo.selectedIds = [...this.initialSelectedIds];
    this.initialShapes = TLDR.getSelectedBranchSnapshot(this.app.state, this.app.currentPageId).filter((shape) => !shape.isLocked);
    this.initialShapeIds = this.initialShapes.map((shape) => shape.id);
    this.hasUnlockedShapes = this.initialShapes.length > 0;
    this.isAllAspectRatioLocked = this.initialShapes.every((shape) => shape.isAspectRatioLocked || TLDR.getShapeUtil(shape).isAspectRatioLocked);
    const shapesBounds = Object.fromEntries(this.initialShapes.map((shape) => [shape.id, TLDR.getBounds(shape)]));
    const boundsArr = Object.values(shapesBounds);
    this.initialCommonBounds = import_core29.Utils.getCommonBounds(boundsArr);
    const initialInnerBounds = import_core29.Utils.getBoundsFromPoints(boundsArr.map(import_core29.Utils.getBoundsCenter));
    this.shapeBounds = this.initialShapes.map((shape) => {
      const initialShapeBounds = shapesBounds[shape.id];
      const ic = import_core29.Utils.getBoundsCenter(initialShapeBounds);
      const ix = (ic[0] - initialInnerBounds.minX) / initialInnerBounds.width;
      const iy = (ic[1] - initialInnerBounds.minY) / initialInnerBounds.height;
      return {
        initialShape: shape,
        initialShapeBounds,
        transformOrigin: [ix, iy]
      };
    });
  }
};

// src/state/sessions/TransformSingleSession/TransformSingleSession.ts
var import_core30 = __toModule(require("@tldraw/core"));
var import_vec24 = __toModule(require("@tldraw/vec"));
var TransformSingleSession = class extends BaseSession {
  constructor(app, id, transformType, isCreate = false) {
    super(app);
    this.type = SessionType.TransformSingle;
    this.status = TDStatus.Transforming;
    this.scaleX = 1;
    this.scaleY = 1;
    this.snapInfo = { state: "empty" };
    this.prevPoint = [0, 0];
    this.speed = 1;
    this.start = () => {
      this.snapInfo = {
        state: "ready",
        bounds: this.app.shapes.filter((shape) => shape.id !== this.initialShape.id).map((shape) => import_core30.Utils.getBoundsWithCenter(TLDR.getRotatedBounds(shape)))
      };
      return void 0;
    };
    this.update = () => {
      const {
        transformType,
        initialShape,
        initialShapeBounds,
        app: {
          settings: { isSnapping, showGrid },
          currentPageId,
          pageState: { camera },
          viewport,
          currentPoint,
          previousPoint,
          originPoint,
          currentGrid,
          shiftKey,
          altKey,
          metaKey
        }
      } = this;
      if (initialShape.isLocked)
        return void 0;
      const shapes = {};
      const delta = altKey ? import_vec24.Vec.mul(import_vec24.Vec.sub(currentPoint, originPoint), 2) : import_vec24.Vec.sub(currentPoint, originPoint);
      const shape = this.app.getShape(initialShape.id);
      const utils = TLDR.getShapeUtil(shape);
      let newBounds = import_core30.Utils.getTransformedBoundingBox(initialShapeBounds, transformType, delta, shape.rotation, shiftKey || shape.isAspectRatioLocked || utils.isAspectRatioLocked);
      if (altKey) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), import_core30.Utils.centerBounds(newBounds, import_core30.Utils.getBoundsCenter(initialShapeBounds)));
      }
      if (showGrid) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), import_core30.Utils.snapBoundsToGrid(newBounds, currentGrid));
      }
      const speed = import_vec24.Vec.dist(currentPoint, previousPoint);
      const speedChange = speed - this.speed;
      this.speed = this.speed + speedChange * (speedChange > 1 ? 0.5 : 0.15);
      let snapLines = [];
      if ((isSnapping && !metaKey || !isSnapping && metaKey) && !initialShape.rotation && this.speed * camera.zoom < SLOW_SPEED && this.snapInfo.state === "ready") {
        const snapResult = import_core30.Utils.getSnapPoints(import_core30.Utils.getBoundsWithCenter(newBounds), this.snapInfo.bounds.filter((bounds) => import_core30.Utils.boundsContain(viewport, bounds) || import_core30.Utils.boundsCollide(viewport, bounds)), SNAP_DISTANCE / camera.zoom);
        if (snapResult) {
          snapLines = snapResult.snapLines;
          newBounds = import_core30.Utils.getTransformedBoundingBox(initialShapeBounds, transformType, import_vec24.Vec.sub(delta, snapResult.offset), shape.rotation, shiftKey || shape.isAspectRatioLocked || utils.isAspectRatioLocked);
        }
      }
      const afterShape = TLDR.getShapeUtil(shape).transformSingle(shape, newBounds, {
        initialShape,
        type: this.transformType,
        scaleX: newBounds.scaleX,
        scaleY: newBounds.scaleY,
        transformOrigin: [0.5, 0.5]
      });
      if (afterShape) {
        shapes[shape.id] = afterShape;
      }
      if (showGrid && afterShape && afterShape.point) {
        afterShape.point = import_vec24.Vec.snap(afterShape.point, currentGrid);
      }
      return {
        appState: {
          snapLines
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    };
    this.cancel = () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      const shapes = {};
      if (this.isCreate) {
        shapes[initialShape.id] = void 0;
      } else {
        shapes[initialShape.id] = initialShape;
      }
      return {
        appState: {
          snapLines: []
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          },
          pageStates: {
            [currentPageId]: {
              selectedIds: this.isCreate ? [] : [initialShape.id]
            }
          }
        }
      };
    };
    this.complete = () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      if (initialShape.isLocked)
        return;
      const beforeShapes = {};
      const afterShapes = {};
      beforeShapes[initialShape.id] = this.isCreate ? void 0 : initialShape;
      afterShapes[initialShape.id] = TLDR.onSessionComplete(this.app.getShape(initialShape.id));
      return {
        id: "transform_single",
        before: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: this.isCreate ? [] : [initialShape.id],
                editingId: void 0,
                hoveredId: void 0
              }
            }
          }
        },
        after: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: [initialShape.id],
                editingId: void 0,
                hoveredId: void 0
              }
            }
          }
        }
      };
    };
    this.isCreate = isCreate;
    this.transformType = transformType;
    const shape = this.app.getShape(id);
    this.initialShape = shape;
    this.initialShapeBounds = TLDR.getBounds(shape);
    this.initialCommonBounds = TLDR.getRotatedBounds(shape);
    this.app.rotationInfo.selectedIds = [shape.id];
  }
};

// src/state/sessions/TranslateSession/TranslateSession.ts
var import_core31 = __toModule(require("@tldraw/core"));
var import_vec25 = __toModule(require("@tldraw/vec"));
var TranslateSession = class extends BaseSession {
  constructor(app, isCreate = false, link = false) {
    super(app);
    this.type = SessionType.Translate;
    this.status = TDStatus.Translating;
    this.delta = [0, 0];
    this.prev = [0, 0];
    this.prevPoint = [0, 0];
    this.speed = 1;
    this.cloneInfo = {
      state: "empty"
    };
    this.snapInfo = {
      state: "empty"
    };
    this.snapLines = [];
    this.isCloning = false;
    this.start = () => {
      const {
        bindingsToDelete,
        initialIds,
        app: { currentPageId, page }
      } = this;
      const allBounds = [];
      const otherBounds = [];
      Object.values(page.shapes).forEach((shape) => {
        const bounds = import_core31.Utils.getBoundsWithCenter(TLDR.getRotatedBounds(shape));
        allBounds.push(bounds);
        if (!initialIds.has(shape.id)) {
          otherBounds.push(bounds);
        }
      });
      this.snapInfo = {
        state: "ready",
        bounds: allBounds,
        others: otherBounds
      };
      if (bindingsToDelete.length === 0)
        return;
      const nextBindings = {};
      bindingsToDelete.forEach((binding) => nextBindings[binding.id] = void 0);
      return {
        document: {
          pages: {
            [currentPageId]: {
              bindings: nextBindings
            }
          }
        }
      };
    };
    this.update = () => {
      const {
        initialParentChildren,
        initialShapes,
        initialCommonBounds,
        bindingsToDelete,
        app: {
          pageState: { camera },
          settings: { isSnapping, showGrid },
          currentPageId,
          viewport,
          selectedIds,
          currentPoint,
          previousPoint,
          originPoint,
          altKey,
          shiftKey,
          metaKey,
          currentGrid
        }
      } = this;
      const nextBindings = {};
      const nextShapes = {};
      const nextPageState = {};
      let delta = import_vec25.Vec.sub(currentPoint, originPoint);
      let didChangeCloning = false;
      if (!this.isCreate) {
        if (altKey && !this.isCloning) {
          this.isCloning = true;
          didChangeCloning = true;
        } else if (!altKey && this.isCloning) {
          this.isCloning = false;
          didChangeCloning = true;
        }
      }
      if (shiftKey) {
        if (Math.abs(delta[0]) < Math.abs(delta[1])) {
          delta[0] = 0;
        } else {
          delta[1] = 0;
        }
      }
      const speed = import_vec25.Vec.dist(currentPoint, previousPoint);
      const change = speed - this.speed;
      this.speed = this.speed + change * (change > 1 ? 0.5 : 0.15);
      this.snapLines = [];
      if ((isSnapping && !metaKey || !isSnapping && metaKey) && this.speed * camera.zoom < SLOW_SPEED && this.snapInfo.state === "ready") {
        const snapResult = import_core31.Utils.getSnapPoints(import_core31.Utils.getBoundsWithCenter(showGrid ? import_core31.Utils.snapBoundsToGrid(import_core31.Utils.translateBounds(initialCommonBounds, delta), currentGrid) : import_core31.Utils.translateBounds(initialCommonBounds, delta)), (this.isCloning ? this.snapInfo.bounds : this.snapInfo.others).filter((bounds) => import_core31.Utils.boundsContain(viewport, bounds) || import_core31.Utils.boundsCollide(viewport, bounds)), SNAP_DISTANCE / camera.zoom);
        if (snapResult) {
          this.snapLines = snapResult.snapLines;
          delta = import_vec25.Vec.sub(delta, snapResult.offset);
        }
      }
      this.prev = delta;
      if (this.isCloning) {
        if (didChangeCloning) {
          if (this.cloneInfo.state === "empty") {
            this.createCloneInfo();
          }
          if (this.cloneInfo.state === "empty") {
            throw Error;
          }
          const { clones, clonedBindings } = this.cloneInfo;
          this.isCloning = true;
          bindingsToDelete.forEach((binding) => nextBindings[binding.id] = binding);
          initialShapes.forEach((shape) => nextShapes[shape.id] = { point: shape.point });
          clones.forEach((clone) => {
            var _a;
            nextShapes[clone.id] = __spreadValues({}, clone);
            if (clone.parentId !== currentPageId && !selectedIds.includes(clone.parentId)) {
              const children = ((_a = nextShapes[clone.parentId]) == null ? void 0 : _a.children) || initialParentChildren[clone.parentId];
              if (!children.includes(clone.id)) {
                nextShapes[clone.parentId] = __spreadProps(__spreadValues({}, nextShapes[clone.parentId]), {
                  children: [...children, clone.id]
                });
              }
            }
          });
          for (const binding of clonedBindings) {
            nextBindings[binding.id] = binding;
          }
          nextPageState.selectedIds = clones.map((clone) => clone.id);
          clones.forEach((clone) => {
            nextShapes[clone.id] = __spreadProps(__spreadValues({}, clone), {
              point: showGrid ? import_vec25.Vec.snap(import_vec25.Vec.toFixed(import_vec25.Vec.add(clone.point, delta)), currentGrid) : import_vec25.Vec.toFixed(import_vec25.Vec.add(clone.point, delta))
            });
          });
        } else {
          if (this.cloneInfo.state === "empty")
            throw Error;
          const { clones } = this.cloneInfo;
          clones.forEach((clone) => {
            nextShapes[clone.id] = {
              point: showGrid ? import_vec25.Vec.snap(import_vec25.Vec.toFixed(import_vec25.Vec.add(clone.point, delta)), currentGrid) : import_vec25.Vec.toFixed(import_vec25.Vec.add(clone.point, delta))
            };
          });
        }
      } else {
        if (didChangeCloning) {
          if (this.cloneInfo.state === "empty")
            throw Error;
          const { clones, clonedBindings } = this.cloneInfo;
          this.isCloning = false;
          bindingsToDelete.forEach((binding) => nextBindings[binding.id] = void 0);
          clones.forEach((clone) => {
            if (clone.parentId !== currentPageId) {
              nextShapes[clone.parentId] = __spreadProps(__spreadValues({}, nextShapes[clone.parentId]), {
                children: initialParentChildren[clone.parentId]
              });
            }
          });
          clones.forEach((clone) => nextShapes[clone.id] = void 0);
          initialShapes.forEach((shape) => {
            nextShapes[shape.id] = {
              point: showGrid ? import_vec25.Vec.snap(import_vec25.Vec.toFixed(import_vec25.Vec.add(shape.point, delta)), currentGrid) : import_vec25.Vec.toFixed(import_vec25.Vec.add(shape.point, delta))
            };
          });
          for (const binding of clonedBindings) {
            nextBindings[binding.id] = void 0;
          }
          nextPageState.selectedIds = initialShapes.map((shape) => shape.id);
        } else {
          initialShapes.forEach((shape) => {
            nextShapes[shape.id] = {
              point: showGrid ? import_vec25.Vec.snap(import_vec25.Vec.toFixed(import_vec25.Vec.add(shape.point, delta)), currentGrid) : import_vec25.Vec.toFixed(import_vec25.Vec.add(shape.point, delta))
            };
          });
        }
      }
      return {
        appState: {
          snapLines: this.snapLines
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes,
              bindings: nextBindings
            }
          },
          pageStates: {
            [currentPageId]: nextPageState
          }
        }
      };
    };
    this.cancel = () => {
      const {
        initialShapes,
        initialSelectedIds,
        bindingsToDelete,
        app: { currentPageId }
      } = this;
      const nextBindings = {};
      const nextShapes = {};
      const nextPageState = {
        editingId: void 0,
        hoveredId: void 0
      };
      bindingsToDelete.forEach((binding) => nextBindings[binding.id] = binding);
      if (this.isCreate) {
        initialShapes.forEach(({ id }) => nextShapes[id] = void 0);
        nextPageState.selectedIds = [];
      } else {
        initialShapes.forEach(({ id, point }) => nextShapes[id] = __spreadProps(__spreadValues({}, nextShapes[id]), { point }));
        nextPageState.selectedIds = initialSelectedIds;
      }
      if (this.cloneInfo.state === "ready") {
        const { clones, clonedBindings } = this.cloneInfo;
        clones.forEach((clone) => nextShapes[clone.id] = void 0);
        clonedBindings.forEach((binding) => nextBindings[binding.id] = void 0);
      }
      return {
        appState: {
          snapLines: []
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes,
              bindings: nextBindings
            }
          },
          pageStates: {
            [currentPageId]: nextPageState
          }
        }
      };
    };
    this.complete = () => {
      const {
        initialShapes,
        initialParentChildren,
        bindingsToDelete,
        app: { currentPageId }
      } = this;
      const beforeBindings = {};
      const beforeShapes = {};
      const afterBindings = {};
      const afterShapes = {};
      if (this.isCloning) {
        if (this.cloneInfo.state === "empty") {
          this.createCloneInfo();
        }
        if (this.cloneInfo.state !== "ready")
          throw Error;
        const { clones, clonedBindings } = this.cloneInfo;
        clones.forEach((clone) => {
          beforeShapes[clone.id] = void 0;
          afterShapes[clone.id] = this.app.getShape(clone.id);
          if (clone.parentId !== currentPageId) {
            beforeShapes[clone.parentId] = __spreadProps(__spreadValues({}, beforeShapes[clone.parentId]), {
              children: initialParentChildren[clone.parentId]
            });
            afterShapes[clone.parentId] = __spreadProps(__spreadValues({}, afterShapes[clone.parentId]), {
              children: this.app.getShape(clone.parentId).children
            });
          }
        });
        clonedBindings.forEach((binding) => {
          beforeBindings[binding.id] = void 0;
          afterBindings[binding.id] = this.app.getBinding(binding.id);
        });
      } else {
        initialShapes.forEach((shape) => {
          beforeShapes[shape.id] = this.isCreate ? void 0 : __spreadProps(__spreadValues({}, beforeShapes[shape.id]), {
            point: shape.point
          });
          afterShapes[shape.id] = __spreadValues(__spreadValues({}, afterShapes[shape.id]), this.isCreate ? this.app.getShape(shape.id) : { point: this.app.getShape(shape.id).point });
        });
      }
      bindingsToDelete.forEach((binding) => {
        beforeBindings[binding.id] = binding;
        for (const id of [binding.toId, binding.fromId]) {
          const shape = this.app.getShape(id);
          if (!shape.handles)
            continue;
          Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
            beforeShapes[id] = __spreadProps(__spreadValues({}, beforeShapes[id]), { handles: {} });
            afterShapes[id] = __spreadProps(__spreadValues({}, afterShapes[id]), { handles: {} });
            beforeShapes[id].handles[handle.id] = {
              bindingId: binding.id
            };
            afterShapes[id].handles[handle.id] = {
              bindingId: void 0
            };
          });
        }
      });
      return {
        id: "translate",
        before: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes,
                bindings: beforeBindings
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: this.isCreate ? [] : [...this.initialSelectedIds]
              }
            }
          }
        },
        after: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes,
                bindings: afterBindings
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: [...this.app.selectedIds]
              }
            }
          }
        }
      };
    };
    this.createCloneInfo = () => {
      const {
        initialShapes,
        initialParentChildren,
        app: { selectedIds, currentPageId, page }
      } = this;
      const cloneMap = {};
      const clonedBindingsMap = {};
      const clonedBindings = [];
      const clones = [];
      initialShapes.forEach((shape) => {
        const newId = import_core31.Utils.uniqueId();
        initialParentChildren[newId] = initialParentChildren[shape.id];
        cloneMap[shape.id] = newId;
        const clone = __spreadProps(__spreadValues({}, import_core31.Utils.deepClone(shape)), {
          id: newId,
          parentId: shape.parentId,
          childIndex: TLDR.getChildIndexAbove(this.app.state, shape.id, currentPageId)
        });
        clones.push(clone);
      });
      clones.forEach((clone) => {
        if (clone.children !== void 0) {
          clone.children = clone.children.map((childId) => cloneMap[childId]);
        }
      });
      clones.forEach((clone) => {
        if (selectedIds.includes(clone.parentId)) {
          clone.parentId = cloneMap[clone.parentId];
        }
      });
      const clonedShapeIds = new Set(Object.keys(cloneMap));
      Object.values(page.bindings).filter((binding) => clonedShapeIds.has(binding.fromId) || clonedShapeIds.has(binding.toId)).forEach((binding) => {
        if (clonedShapeIds.has(binding.fromId)) {
          if (clonedShapeIds.has(binding.toId)) {
            const cloneId = import_core31.Utils.uniqueId();
            const cloneBinding = __spreadProps(__spreadValues({}, import_core31.Utils.deepClone(binding)), {
              id: cloneId,
              fromId: cloneMap[binding.fromId] || binding.fromId,
              toId: cloneMap[binding.toId] || binding.toId
            });
            clonedBindingsMap[binding.id] = cloneId;
            clonedBindings.push(cloneBinding);
          }
        }
      });
      clones.forEach((clone) => {
        if (clone.handles) {
          if (clone.handles) {
            for (const id in clone.handles) {
              const handle = clone.handles[id];
              handle.bindingId = handle.bindingId ? clonedBindingsMap[handle.bindingId] : void 0;
            }
          }
        }
      });
      clones.forEach((clone) => {
        if (page.shapes[clone.id]) {
          throw Error("uh oh, we didn't clone correctly");
        }
      });
      this.cloneInfo = {
        state: "ready",
        clones,
        cloneMap,
        clonedBindings
      };
    };
    this.isCreate = isCreate;
    this.link = link;
    const { currentPageId, selectedIds, page } = this.app;
    this.initialSelectedIds = [...selectedIds];
    const selectedShapes = (link ? TLDR.getLinkedShapeIds(this.app.state, currentPageId, link, false) : selectedIds).map((id) => this.app.getShape(id)).filter((shape) => !shape.isLocked);
    const selectedShapeIds = new Set(selectedShapes.map((shape) => shape.id));
    this.hasUnlockedShapes = selectedShapes.length > 0;
    this.initialShapes = Array.from(new Set(selectedShapes.filter((shape) => !selectedShapeIds.has(shape.parentId)).flatMap((shape) => {
      return shape.children ? [shape, ...shape.children.map((childId) => this.app.getShape(childId))] : [shape];
    })).values());
    this.initialIds = new Set(this.initialShapes.map((shape) => shape.id));
    this.bindingsToDelete = [];
    Object.values(page.bindings).filter((binding) => this.initialIds.has(binding.fromId) || this.initialIds.has(binding.toId)).forEach((binding) => {
      if (this.initialIds.has(binding.fromId)) {
        if (!this.initialIds.has(binding.toId)) {
          this.bindingsToDelete.push(binding);
        }
      }
    });
    this.initialParentChildren = {};
    this.initialShapes.map((s) => s.parentId).filter((id) => id !== page.id).forEach((id) => {
      this.initialParentChildren[id] = this.app.getShape(id).children;
    });
    this.initialCommonBounds = import_core31.Utils.getCommonBounds(this.initialShapes.map(TLDR.getRotatedBounds));
    this.app.rotationInfo.selectedIds = [...this.app.selectedIds];
  }
};

// src/state/sessions/EraseSession/EraseSession.ts
var import_vec26 = __toModule(require("@tldraw/vec"));
var EraseSession = class extends BaseSession {
  constructor(app) {
    super(app);
    this.type = SessionType.Draw;
    this.status = TDStatus.Creating;
    this.erasedShapes = new Set();
    this.erasedBindings = new Set();
    this.start = () => void 0;
    this.update = () => {
      const { page, shiftKey, originPoint, currentPoint } = this.app;
      if (shiftKey) {
        if (!this.isLocked && import_vec26.Vec.dist(originPoint, currentPoint) > 4) {
          if (!this.lockedDirection) {
            const delta = import_vec26.Vec.sub(currentPoint, originPoint);
            this.lockedDirection = delta[0] > delta[1] ? "horizontal" : "vertical";
          }
          this.isLocked = true;
        }
      } else if (this.isLocked) {
        this.isLocked = false;
      }
      if (this.isLocked) {
        if (this.lockedDirection === "vertical") {
          currentPoint[0] = originPoint[0];
        } else {
          currentPoint[1] = originPoint[1];
        }
      }
      const newPoint = import_vec26.Vec.toFixed(import_vec26.Vec.add(originPoint, import_vec26.Vec.sub(currentPoint, originPoint)));
      const deletedShapeIds = new Set([]);
      for (const shape of this.erasableShapes) {
        if (this.erasedShapes.has(shape))
          continue;
        if (this.app.getShapeUtil(shape).hitTestLineSegment(shape, this.prevPoint, newPoint)) {
          this.erasedShapes.add(shape);
          deletedShapeIds.add(shape.id);
          if (shape.children !== void 0) {
            for (const childId of shape.children) {
              this.erasedShapes.add(this.app.getShape(childId));
              deletedShapeIds.add(childId);
            }
          }
        }
      }
      Object.values(page.bindings).forEach((binding) => {
        for (const id of [binding.toId, binding.fromId]) {
          if (deletedShapeIds.has(id)) {
            this.erasedBindings.add(binding);
          }
        }
      });
      const erasedShapes = Array.from(this.erasedShapes.values());
      this.prevPoint = newPoint;
      return {
        document: {
          pages: {
            [page.id]: {
              shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, { isGhost: true }]))
            }
          }
        }
      };
    };
    this.cancel = () => {
      const { page } = this.app;
      const erasedShapes = Array.from(this.erasedShapes.values());
      return {
        document: {
          pages: {
            [page.id]: {
              shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, { isGhost: false }]))
            }
          },
          pageStates: {
            [page.id]: {
              selectedIds: this.initialSelectedShapes.map((shape) => shape.id)
            }
          }
        }
      };
    };
    this.complete = () => {
      const { page } = this.app;
      const erasedShapes = Array.from(this.erasedShapes.values());
      const erasedBindings = Array.from(this.erasedBindings.values());
      const erasedShapeIds = erasedShapes.map((shape) => shape.id);
      const erasedBindingIds = erasedBindings.map((binding) => binding.id);
      const before = {
        shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, shape])),
        bindings: Object.fromEntries(erasedBindings.map((binding) => [binding.id, binding]))
      };
      const after = {
        shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, void 0])),
        bindings: Object.fromEntries(erasedBindings.map((binding) => [binding.id, void 0]))
      };
      this.app.shapes.forEach((shape) => {
        if (shape.handles && !after.shapes[shape.id]) {
          Object.values(shape.handles).forEach((handle) => {
            var _a, _b;
            if (handle.bindingId && erasedBindingIds.includes(handle.bindingId)) {
              before.shapes[shape.id] = __spreadProps(__spreadValues({}, before.shapes[shape.id]), {
                handles: __spreadProps(__spreadValues({}, (_a = before.shapes[shape.id]) == null ? void 0 : _a.handles), {
                  [handle.id]: handle
                })
              });
              if (!erasedShapeIds.includes(shape.id)) {
                after.shapes[shape.id] = __spreadProps(__spreadValues({}, after.shapes[shape.id]), {
                  handles: __spreadProps(__spreadValues({}, (_b = after.shapes[shape.id]) == null ? void 0 : _b.handles), {
                    [handle.id]: __spreadProps(__spreadValues({}, handle), {
                      bindingId: void 0
                    })
                  })
                });
              }
            }
          });
        }
      });
      return {
        id: "erase",
        before: {
          document: {
            pages: {
              [page.id]: before
            },
            pageStates: {
              [page.id]: {
                selectedIds: this.initialSelectedShapes.map((shape) => shape.id)
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [page.id]: after
            },
            pageStates: {
              [page.id]: {
                selectedIds: this.initialSelectedShapes.filter((shape) => !erasedShapeIds.includes(shape.id)).map((shape) => shape.id)
              }
            }
          }
        }
      };
    };
    this.prevPoint = [...app.originPoint];
    this.initialSelectedShapes = this.app.selectedIds.map((id) => this.app.getShape(id));
    this.erasableShapes = this.app.shapes.filter((shape) => !shape.isLocked);
  }
};

// src/state/sessions/GridSession/GridSession.ts
var import_core32 = __toModule(require("@tldraw/core"));
var import_vec27 = __toModule(require("@tldraw/vec"));
var GridSession = class extends BaseSession {
  constructor(app, id) {
    super(app);
    this.type = SessionType.Grid;
    this.status = TDStatus.Translating;
    this.grid = {};
    this.columns = 1;
    this.rows = 1;
    this.isCopying = false;
    this.start = () => void 0;
    this.update = () => {
      const { currentPageId, altKey, shiftKey, currentPoint } = this.app;
      const nextShapes = {};
      const nextPageState = {};
      const center = import_core32.Utils.getBoundsCenter(this.bounds);
      const offset = import_vec27.Vec.sub(currentPoint, center);
      if (shiftKey) {
        if (Math.abs(offset[0]) < Math.abs(offset[1])) {
          offset[0] = 0;
        } else {
          offset[1] = 0;
        }
      }
      const gapX = this.bounds.width + 32;
      const gapY = this.bounds.height + 32;
      const columns = Math.ceil(offset[0] / gapX);
      const rows = Math.ceil(offset[1] / gapY);
      const minX = Math.min(columns, 0);
      const minY = Math.min(rows, 0);
      const maxX = Math.max(columns, 1);
      const maxY = Math.max(rows, 1);
      const inGrid = new Set();
      const isCopying = altKey;
      if (isCopying !== this.isCopying) {
        Object.values(this.grid).filter((id) => id !== this.shape.id).forEach((id) => nextShapes[id] = void 0);
        this.grid = { "0_0": this.shape.id };
        this.isCopying = isCopying;
      }
      for (let x = minX; x < maxX; x++) {
        for (let y = minY; y < maxY; y++) {
          const position = `${x}_${y}`;
          inGrid.add(position);
          if (this.grid[position])
            continue;
          if (x === 0 && y === 0)
            continue;
          const clone = this.getClone(import_vec27.Vec.add(this.shape.point, [x * gapX, y * gapY]), isCopying);
          nextShapes[clone.id] = clone;
          this.grid[position] = clone.id;
        }
      }
      Object.entries(this.grid).forEach(([position, id]) => {
        if (!inGrid.has(position)) {
          nextShapes[id] = void 0;
          delete this.grid[position];
        }
      });
      if (Object.values(nextShapes).length === 0)
        return;
      if (this.initialSiblings) {
        nextShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, ...Object.values(this.grid)]
        };
      }
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes
            }
          },
          pageStates: {
            [currentPageId]: nextPageState
          }
        }
      };
    };
    this.cancel = () => {
      const { currentPageId } = this.app;
      const nextShapes = {};
      Object.values(this.grid).forEach((id) => {
        nextShapes[id] = void 0;
      });
      nextShapes[this.shape.id] = __spreadProps(__spreadValues({}, nextShapes[this.shape.id]), { point: this.shape.point });
      if (this.initialSiblings) {
        nextShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, this.shape.id]
        };
      }
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes
            }
          },
          pageStates: {
            [currentPageId]: {
              selectedIds: [this.shape.id]
            }
          }
        }
      };
    };
    this.complete = () => {
      const { currentPageId } = this.app;
      const beforeShapes = {};
      const afterShapes = {};
      const afterSelectedIds = [];
      Object.values(this.grid).forEach((id) => {
        beforeShapes[id] = void 0;
        afterShapes[id] = this.app.getShape(id);
        afterSelectedIds.push(id);
      });
      beforeShapes[this.shape.id] = this.shape;
      if (this.initialSiblings) {
        beforeShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, this.shape.id]
        };
        afterShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, ...Object.values(this.grid)]
        };
      }
      if (afterSelectedIds.length === 1)
        return;
      return {
        id: "grid",
        before: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: [],
                hoveredId: void 0
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: afterSelectedIds,
                hoveredId: void 0
              }
            }
          }
        }
      };
    };
    this.getClone = (point, copy) => {
      const clone = __spreadProps(__spreadValues({}, this.shape), {
        id: import_core32.Utils.uniqueId(),
        point
      });
      if (!copy) {
        if (clone.type === TDShapeType.Sticky) {
          clone.text = "";
        }
      }
      return clone;
    };
    var _a;
    this.shape = this.app.getShape(id);
    this.grid["0_0"] = this.shape.id;
    this.bounds = this.app.getShapeBounds(id);
    this.initialSelectedIds = [...this.app.selectedIds];
    if (this.shape.parentId !== this.app.currentPageId) {
      this.initialSiblings = (_a = this.app.getShape(this.shape.parentId).children) == null ? void 0 : _a.filter((id2) => id2 !== this.shape.id);
    }
  }
};

// src/state/sessions/index.ts
var sessions = {
  [SessionType.Arrow]: ArrowSession,
  [SessionType.Brush]: BrushSession,
  [SessionType.Draw]: DrawSession,
  [SessionType.Erase]: EraseSession,
  [SessionType.Handle]: HandleSession,
  [SessionType.Rotate]: RotateSession,
  [SessionType.Transform]: TransformSession,
  [SessionType.TransformSingle]: TransformSingleSession,
  [SessionType.Translate]: TranslateSession,
  [SessionType.Grid]: GridSession
};
var getSession = (type) => {
  return sessions[type];
};

// src/state/tools/SelectTool/SelectTool.ts
var import_core34 = __toModule(require("@tldraw/core"));

// src/state/tools/BaseTool.ts
var import_core33 = __toModule(require("@tldraw/core"));
var Status;
(function(Status4) {
  Status4["Idle"] = "idle";
  Status4["Creating"] = "creating";
  Status4["Pinching"] = "pinching";
})(Status || (Status = {}));
var BaseTool = class extends TDEventHandler {
  constructor(app) {
    super();
    this.app = app;
    this.type = "select";
    this.status = Status.Idle;
    this.setStatus = (status) => {
      this.status = status;
      this.app.setStatus(this.status);
    };
    this.onEnter = () => {
      this.setStatus(Status.Idle);
    };
    this.onExit = () => {
      this.setStatus(Status.Idle);
    };
    this.onCancel = () => {
      if (this.status === Status.Idle) {
        this.app.selectTool("select");
      } else {
        this.setStatus(Status.Idle);
      }
      this.app.cancelSession();
    };
    this.getNextChildIndex = () => {
      const {
        shapes,
        appState: { currentPageId }
      } = this.app;
      return shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === currentPageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
    };
    this.onPinchStart = () => {
      this.app.cancelSession();
      this.setStatus(Status.Pinching);
    };
    this.onPinchEnd = () => {
      if (import_core33.Utils.isMobileSafari()) {
        this.app.undoSelect();
      }
      this.setStatus(Status.Idle);
    };
    this.onPinch = (info, e) => {
      var _a;
      if (this.status !== "pinching")
        return;
      this.app.pinchZoom(info.point, info.delta, info.delta[2]);
      (_a = this.onPointerMove) == null ? void 0 : _a.call(this, info, e);
    };
    this.onKeyDown = (key) => {
      if (key === "Escape") {
        this.onCancel();
        return;
      }
      if (key === "Meta" || key === "Control" || key === "Alt") {
        this.app.updateSession();
        return;
      }
    };
    this.onKeyUp = (key) => {
      if (key === "Meta" || key === "Control" || key === "Alt") {
        this.app.updateSession();
        return;
      }
    };
    this.onPointerMove = () => {
      if (this.status === Status.Creating) {
        this.app.updateSession();
      }
    };
    this.onPointerUp = () => {
      if (this.status === Status.Creating) {
        this.app.completeSession();
        const { isToolLocked } = this.app.appState;
        if (!isToolLocked) {
          this.app.selectTool("select");
        }
      }
      this.setStatus(Status.Idle);
    };
  }
};

// src/state/tools/SelectTool/SelectTool.ts
var import_vec28 = __toModule(require("@tldraw/vec"));
var Status2;
(function(Status4) {
  Status4["Idle"] = "idle";
  Status4["Creating"] = "creating";
  Status4["Pinching"] = "pinching";
  Status4["PointingCanvas"] = "pointingCanvas";
  Status4["PointingHandle"] = "pointingHandle";
  Status4["PointingBounds"] = "pointingBounds";
  Status4["PointingClone"] = "pointingClone";
  Status4["TranslatingClone"] = "translatingClone";
  Status4["PointingBoundsHandle"] = "pointingBoundsHandle";
  Status4["TranslatingHandle"] = "translatingHandle";
  Status4["Translating"] = "translating";
  Status4["Transforming"] = "transforming";
  Status4["Rotating"] = "rotating";
  Status4["Brushing"] = "brushing";
  Status4["GridCloning"] = "gridCloning";
  Status4["ClonePainting"] = "clonePainting";
  Status4["SpacePanning"] = "spacePanning";
  Status4["MiddleWheelPanning"] = "middleWheelPanning";
})(Status2 || (Status2 = {}));
var SelectTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    this.type = "select";
    this.onEnter = () => {
      this.setStatus(Status2.Idle);
    };
    this.onExit = () => {
      this.setStatus(Status2.Idle);
    };
    this.clonePaint = (point) => {
      if (this.app.selectedIds.length === 0)
        return;
      const shapes = this.app.selectedIds.map((id) => this.app.getShape(id));
      const bounds = import_core34.Utils.expandBounds(import_core34.Utils.getCommonBounds(shapes.map(TLDR.getBounds)), 16);
      const center = import_core34.Utils.getBoundsCenter(bounds);
      const size = [bounds.width, bounds.height];
      const gridPoint = [
        center[0] + size[0] * Math.floor((point[0] + size[0] / 2 - center[0]) / size[0]),
        center[1] + size[1] * Math.floor((point[1] + size[1] / 2 - center[1]) / size[1])
      ];
      const centeredBounds = import_core34.Utils.centerBounds(bounds, gridPoint);
      const hit = this.app.shapes.some((shape) => TLDR.getShapeUtil(shape).hitTestBounds(shape, centeredBounds));
      if (!hit) {
        this.app.duplicate(this.app.selectedIds, gridPoint);
      }
    };
    this.getShapeClone = (id, side) => {
      const shape = this.app.getShape(id);
      const utils = TLDR.getShapeUtil(shape);
      if (utils.canClone) {
        const bounds = utils.getBounds(shape);
        const center = utils.getCenter(shape);
        let point = {
          top: [bounds.minX, bounds.minY - (bounds.height + CLONING_DISTANCE)],
          right: [bounds.maxX + CLONING_DISTANCE, bounds.minY],
          bottom: [bounds.minX, bounds.maxY + CLONING_DISTANCE],
          left: [bounds.minX - (bounds.width + CLONING_DISTANCE), bounds.minY],
          topLeft: [
            bounds.minX - (bounds.width + CLONING_DISTANCE),
            bounds.minY - (bounds.height + CLONING_DISTANCE)
          ],
          topRight: [
            bounds.maxX + CLONING_DISTANCE,
            bounds.minY - (bounds.height + CLONING_DISTANCE)
          ],
          bottomLeft: [
            bounds.minX - (bounds.width + CLONING_DISTANCE),
            bounds.maxY + CLONING_DISTANCE
          ],
          bottomRight: [bounds.maxX + CLONING_DISTANCE, bounds.maxY + CLONING_DISTANCE]
        }[side];
        if (shape.rotation !== 0) {
          const newCenter = import_vec28.default.add(point, [bounds.width / 2, bounds.height / 2]);
          const rotatedCenter = import_vec28.default.rotWith(newCenter, center, shape.rotation || 0);
          point = import_vec28.default.sub(rotatedCenter, [bounds.width / 2, bounds.height / 2]);
        }
        const id2 = import_core34.Utils.uniqueId();
        const clone = __spreadProps(__spreadValues({}, shape), {
          id: id2,
          point
        });
        if (clone.type === TDShapeType.Sticky) {
          clone.text = "";
        }
        return clone;
      }
      return;
    };
    this.onCancel = () => {
      this.selectNone();
      this.app.cancelSession();
      this.setStatus(Status2.Idle);
    };
    this.onKeyDown = (key) => {
      if (key === "Escape") {
        this.onCancel();
        return;
      }
      if (key === " " && this.status === Status2.Idle) {
        this.setStatus(Status2.SpacePanning);
      }
      if (key === "Tab") {
        if (this.status === Status2.Idle && this.app.selectedIds.length === 1) {
          const [selectedId] = this.app.selectedIds;
          const clonedShape = this.getShapeClone(selectedId, "right");
          if (clonedShape) {
            this.app.createShapes(clonedShape);
            this.setStatus(Status2.Idle);
            if (clonedShape.type === TDShapeType.Sticky) {
              this.app.select(clonedShape.id);
              this.app.setEditingId(clonedShape.id);
            }
          }
        }
        return;
      }
      if (key === "Meta" || key === "Control" || key === "Alt") {
        this.app.updateSession();
        return;
      }
    };
    this.onKeyUp = (key, info) => {
      if (this.status === Status2.ClonePainting && !(info.altKey && info.shiftKey)) {
        this.setStatus(Status2.Idle);
        return;
      }
      if (this.status === Status2.SpacePanning && key === " ") {
        this.setStatus(Status2.Idle);
        return;
      }
      if (key === "Meta" || key === "Control" || key === "Alt") {
        this.app.updateSession();
        return;
      }
    };
    this.onPointerMove = (info, e) => {
      var _a, _b;
      const { originPoint, currentPoint } = this.app;
      if (this.status === Status2.SpacePanning && e.buttons === 1 || this.status === Status2.MiddleWheelPanning && e.buttons === 4) {
        (_b = (_a = this.app).onPan) == null ? void 0 : _b.call(_a, __spreadProps(__spreadValues({}, info), { delta: import_vec28.default.neg(info.delta) }), e);
        return;
      }
      if (this.status === Status2.PointingBoundsHandle) {
        if (!this.pointedBoundsHandle)
          throw Error("No pointed bounds handle");
        if (import_vec28.default.dist(originPoint, currentPoint) > DEAD_ZONE) {
          if (this.pointedBoundsHandle === "rotate") {
            this.setStatus(Status2.Rotating);
            this.app.startSession(SessionType.Rotate);
          } else if (this.pointedBoundsHandle === "center" || this.pointedBoundsHandle === "left" || this.pointedBoundsHandle === "right") {
            this.setStatus(Status2.Translating);
            this.app.startSession(SessionType.Translate, false, this.pointedBoundsHandle);
          } else {
            this.setStatus(Status2.Transforming);
            const idsToTransform = this.app.selectedIds.flatMap((id) => TLDR.getDocumentBranch(this.app.state, id, this.app.currentPageId));
            if (idsToTransform.length === 1) {
              this.app.startSession(SessionType.TransformSingle, idsToTransform[0], this.pointedBoundsHandle);
            } else {
              this.app.startSession(SessionType.Transform, this.pointedBoundsHandle);
            }
          }
          this.app.updateSession();
        }
        return;
      }
      if (this.status === Status2.PointingCanvas) {
        if (import_vec28.default.dist(originPoint, currentPoint) > DEAD_ZONE) {
          this.app.startSession(SessionType.Brush);
          this.setStatus(Status2.Brushing);
        }
        return;
      }
      if (this.status === Status2.PointingClone) {
        if (import_vec28.default.dist(originPoint, currentPoint) > DEAD_ZONE) {
          this.setStatus(Status2.TranslatingClone);
          this.app.startSession(SessionType.Translate);
          this.app.updateSession();
        }
        return;
      }
      if (this.status === Status2.PointingBounds) {
        if (import_vec28.default.dist(originPoint, currentPoint) > DEAD_ZONE) {
          this.setStatus(Status2.Translating);
          this.app.startSession(SessionType.Translate);
          this.app.updateSession();
        }
        return;
      }
      if (this.status === Status2.PointingHandle) {
        if (!this.pointedHandleId)
          throw Error("No pointed handle");
        if (import_vec28.default.dist(originPoint, currentPoint) > DEAD_ZONE) {
          this.setStatus(Status2.TranslatingHandle);
          const selectedShape = this.app.getShape(this.app.selectedIds[0]);
          if (!selectedShape)
            return;
          if (this.pointedHandleId === "bend") {
            this.app.startSession(SessionType.Handle, selectedShape.id, this.pointedHandleId);
            this.app.updateSession();
          } else {
            this.app.startSession(SessionType.Arrow, selectedShape.id, this.pointedHandleId, false);
            this.app.updateSession();
          }
        }
        return;
      }
      if (this.app.session) {
        return this.app.updateSession();
      }
      if (this.status === Status2.ClonePainting) {
        this.clonePaint(currentPoint);
      }
      return;
    };
    this.onPointerDown = (info, e) => {
      if (e.buttons === 4) {
        this.setStatus(Status2.MiddleWheelPanning);
      }
      if (info.target === "canvas" && this.status === Status2.Idle) {
        const { currentPoint } = this.app;
        if (info.spaceKey && e.buttons === 1)
          return;
        if (this.status === Status2.Idle && info.altKey && info.shiftKey) {
          this.setStatus(Status2.ClonePainting);
          this.clonePaint(currentPoint);
          return;
        }
        if (!info.shiftKey) {
          this.app.onShapeBlur();
          if (info.altKey && this.app.selectedIds.length > 0) {
            this.app.duplicate(this.app.selectedIds, currentPoint);
            return;
          }
          this.selectNone();
        }
        this.setStatus(Status2.PointingCanvas);
      }
    };
    this.onPointerUp = (info, e) => {
      if (this.status === Status2.MiddleWheelPanning) {
        this.setStatus(Status2.Idle);
        return;
      }
      if (this.status === Status2.TranslatingClone || this.status === Status2.PointingClone) {
        if (this.pointedId) {
          this.app.completeSession();
          this.app.setEditingId(this.pointedId);
        }
        this.setStatus(Status2.Idle);
        this.pointedId = void 0;
        return;
      }
      if (this.status === Status2.PointingBounds) {
        if (info.target === "bounds") {
          this.selectNone();
        } else if (this.app.isSelected(info.target)) {
          if (info.shiftKey) {
            if (this.pointedId !== info.target) {
              this.deselect(info.target);
            }
          } else {
            if (this.pointedId !== info.target && this.app.selectedIds.length > 1) {
              this.select(info.target);
            }
          }
        } else if (this.pointedId === info.target) {
          if (this.app.getShape(info.target).isLocked)
            return;
          if (info.shiftKey) {
            this.pushSelect(info.target);
          } else {
            this.select(info.target);
          }
        }
      }
      this.app.completeSession();
      this.setStatus(Status2.Idle);
      this.pointedBoundsHandle = void 0;
      this.pointedHandleId = void 0;
      this.pointedId = void 0;
    };
    this.onDoubleClickCanvas = () => {
    };
    this.onPointShape = (info, e) => {
      if (info.spaceKey && e.buttons === 1)
        return;
      if (this.app.getShape(info.target).isLocked)
        return;
      const { editingId, hoveredId } = this.app.pageState;
      if (editingId && info.target !== editingId) {
        this.app.onShapeBlur();
      }
      if ((this.status === Status2.Idle || this.status === Status2.PointingBounds) && info.metaKey && info.shiftKey && hoveredId) {
        this.pointedId = hoveredId;
        if (this.app.isSelected(hoveredId)) {
          this.deselect(hoveredId);
        } else {
          this.pushSelect(hoveredId);
          this.setStatus(Status2.PointingBounds);
        }
        return;
      }
      if (this.status === Status2.PointingBounds) {
        const { parentId } = this.app.getShape(info.target);
        this.pointedId = parentId === this.app.currentPageId ? info.target : parentId;
        return;
      }
      if (this.status === Status2.Idle) {
        this.setStatus(Status2.PointingBounds);
        if (info.metaKey) {
          if (!info.shiftKey) {
            this.selectNone();
          }
          this.app.startSession(SessionType.Brush);
          this.setStatus(Status2.Brushing);
          return;
        }
        let shapeIdToSelect;
        const { parentId } = this.app.getShape(info.target);
        if (parentId === this.app.currentPageId) {
          shapeIdToSelect = info.target;
          this.selectedGroupId = void 0;
        } else {
          if (parentId === this.selectedGroupId) {
            shapeIdToSelect = info.target;
          } else {
            shapeIdToSelect = parentId;
            this.selectedGroupId = void 0;
          }
        }
        if (!this.app.isSelected(shapeIdToSelect)) {
          this.pointedId = shapeIdToSelect;
          if (info.shiftKey) {
            this.pushSelect(shapeIdToSelect);
          } else {
            this.select(shapeIdToSelect);
          }
        }
      }
    };
    this.onDoubleClickShape = (info) => {
      const shape = this.app.getShape(info.target);
      if (shape.isLocked) {
        this.app.select(info.target);
        return;
      }
      if (TLDR.getShapeUtil(shape.type).canEdit && (shape.parentId === this.app.currentPageId || shape.parentId === this.selectedGroupId)) {
        this.app.setEditingId(info.target);
      }
      if (shape.parentId !== this.app.currentPageId) {
        this.selectedGroupId = shape.parentId;
      }
      this.app.select(info.target);
    };
    this.onRightPointShape = (info) => {
      if (!this.app.isSelected(info.target)) {
        this.app.select(info.target);
      }
    };
    this.onHoverShape = (info) => {
      this.app.setHoveredId(info.target);
    };
    this.onUnhoverShape = (info) => {
      const { currentPageId: oldCurrentPageId } = this.app;
      requestAnimationFrame(() => {
        if (oldCurrentPageId === this.app.currentPageId && this.app.pageState.hoveredId === info.target) {
          this.app.setHoveredId(void 0);
        }
      });
    };
    this.onPointBounds = (info) => {
      if (info.metaKey) {
        if (!info.shiftKey) {
          this.selectNone();
        }
        this.app.startSession(SessionType.Brush);
        this.setStatus(Status2.Brushing);
        return;
      }
      this.setStatus(Status2.PointingBounds);
    };
    this.onRightPointBounds = (info, e) => {
      e.stopPropagation();
    };
    this.onReleaseBounds = () => {
      if (this.status === Status2.Translating || this.status === Status2.Brushing) {
        this.app.completeSession();
      }
      this.setStatus(Status2.Idle);
    };
    this.onPointBoundsHandle = (info) => {
      this.pointedBoundsHandle = info.target;
      this.setStatus(Status2.PointingBoundsHandle);
    };
    this.onDoubleClickBoundsHandle = (info) => {
      if (info.target === "center" || info.target === "left" || info.target === "right") {
        this.app.select(...TLDR.getLinkedShapeIds(this.app.state, this.app.currentPageId, info.target, info.shiftKey));
      }
      if (this.app.selectedIds.length === 1) {
        this.app.resetBounds(this.app.selectedIds);
      }
    };
    this.onReleaseBoundsHandle = () => {
      this.setStatus(Status2.Idle);
    };
    this.onPointHandle = (info) => {
      this.pointedHandleId = info.target;
      this.setStatus(Status2.PointingHandle);
    };
    this.onDoubleClickHandle = (info) => {
      this.app.toggleDecoration(info.target);
    };
    this.onReleaseHandle = () => {
      this.setStatus(Status2.Idle);
    };
    this.onShapeClone = (info) => {
      const selectedShapeId = this.app.selectedIds[0];
      const clonedShape = this.getShapeClone(selectedShapeId, info.target);
      if (info.target === "left" || info.target === "right" || info.target === "top" || info.target === "bottom") {
        if (clonedShape) {
          this.app.createShapes(clonedShape);
          this.pointedId = clonedShape.id;
          this.setStatus(Status2.PointingClone);
        }
      } else {
        this.setStatus(Status2.GridCloning);
        this.app.startSession(SessionType.Grid, selectedShapeId);
      }
    };
  }
  deselect(id) {
    this.app.select(...this.app.selectedIds.filter((oid) => oid !== id));
  }
  select(id) {
    this.app.select(id);
  }
  pushSelect(id) {
    const shape = this.app.getShape(id);
    this.app.select(...this.app.selectedIds.filter((oid) => oid !== shape.parentId), id);
  }
  selectNone() {
    this.app.selectNone();
  }
};

// src/state/tools/EraseTool/EraseTool.ts
var import_vec29 = __toModule(require("@tldraw/vec"));
var Status3;
(function(Status4) {
  Status4["Idle"] = "idle";
  Status4["Pointing"] = "pointing";
  Status4["Erasing"] = "erasing";
})(Status3 || (Status3 = {}));
var EraseTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    this.type = "erase";
    this.status = Status3.Idle;
    this.onPointerDown = () => {
      if (this.status !== Status3.Idle)
        return;
      this.setStatus(Status3.Pointing);
    };
    this.onPointerMove = (info) => {
      switch (this.status) {
        case Status3.Pointing: {
          if (import_vec29.default.dist(info.origin, info.point) > DEAD_ZONE) {
            this.app.startSession(SessionType.Erase);
            this.app.updateSession();
            this.setStatus(Status3.Erasing);
          }
          break;
        }
        case Status3.Erasing: {
          this.app.updateSession();
        }
      }
    };
    this.onPointerUp = () => {
      switch (this.status) {
        case Status3.Pointing: {
          const shapeIdsAtPoint = this.app.shapes.filter((shape) => !shape.isLocked).filter((shape) => this.app.getShapeUtil(shape).hitTestPoint(shape, this.app.currentPoint)).flatMap((shape) => shape.children ? [shape.id, ...shape.children] : shape.id);
          this.app.delete(shapeIdsAtPoint);
          break;
        }
        case Status3.Erasing: {
          this.app.completeSession();
        }
      }
      this.setStatus(Status3.Idle);
    };
    this.onCancel = () => {
      if (this.status === Status3.Idle) {
        if (this.previous) {
          this.app.selectTool(this.previous);
        } else {
          this.app.selectTool("select");
        }
      } else {
        this.setStatus(Status3.Idle);
      }
      this.app.cancelSession();
    };
  }
};

// src/state/tools/TextTool/TextTool.ts
var import_vec30 = __toModule(require("@tldraw/vec"));
var TextTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Text;
    this.stopEditingShape = () => {
      this.setStatus(Status.Idle);
      if (!this.app.appState.isToolLocked) {
        this.app.selectTool("select");
      }
    };
    this.onKeyUp = () => {
    };
    this.onKeyDown = () => {
    };
    this.onPointerDown = () => {
      if (this.status === Status.Creating) {
        this.stopEditingShape();
        return;
      }
      if (this.status === Status.Idle) {
        const {
          currentPoint,
          currentGrid,
          settings: { showGrid }
        } = this.app;
        this.app.createTextShapeAtPoint(showGrid ? import_vec30.default.snap(currentPoint, currentGrid) : currentPoint);
        this.setStatus(Status.Creating);
        return;
      }
    };
    this.onPointerUp = () => {
    };
    this.onPointShape = (info) => {
      const shape = this.app.getShape(info.target);
      if (shape.type === TDShapeType.Text) {
        this.setStatus(Status.Idle);
        this.app.setEditingId(shape.id);
      }
    };
    this.onShapeBlur = () => {
      this.stopEditingShape();
    };
  }
};

// src/state/tools/DrawTool/DrawTool.ts
var import_core35 = __toModule(require("@tldraw/core"));
var DrawTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Draw;
    this.onPointerDown = (info) => {
      if (this.status !== Status.Idle)
        return;
      const {
        currentPoint,
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = import_core35.Utils.uniqueId();
      const newShape = Draw.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: [...currentPoint, info.pressure || 0.5],
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession(SessionType.Draw, id);
      this.setStatus(Status.Creating);
    };
    this.onPointerMove = () => {
      if (this.status === Status.Creating) {
        this.app.updateSession();
      }
    };
    this.onPointerUp = () => {
      if (this.status === Status.Creating) {
        this.app.completeSession();
      }
      this.setStatus(Status.Idle);
    };
  }
};

// src/state/tools/EllipseTool/EllipseTool.ts
var import_core36 = __toModule(require("@tldraw/core"));
var import_vec31 = __toModule(require("@tldraw/vec"));
var EllipseTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Ellipse;
    this.onPointerDown = () => {
      if (this.status !== Status.Idle)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = import_core36.Utils.uniqueId();
      const newShape = Ellipse.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? import_vec31.default.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession(SessionType.TransformSingle, newShape.id, import_core36.TLBoundsCorner.BottomRight, true);
      this.setStatus(Status.Creating);
    };
  }
};

// src/state/tools/RectangleTool/RectangleTool.ts
var import_core37 = __toModule(require("@tldraw/core"));
var import_vec32 = __toModule(require("@tldraw/vec"));
var RectangleTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Rectangle;
    this.onPointerDown = () => {
      if (this.status !== Status.Idle)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = import_core37.Utils.uniqueId();
      const newShape = Rectangle.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? import_vec32.default.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession(SessionType.TransformSingle, newShape.id, import_core37.TLBoundsCorner.BottomRight, true);
      this.setStatus(Status.Creating);
    };
  }
};

// src/state/tools/LineTool/LineTool.ts
var import_core38 = __toModule(require("@tldraw/core"));
var import_vec33 = __toModule(require("@tldraw/vec"));
var LineTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Line;
    this.onPointerDown = () => {
      if (this.status !== Status.Idle)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = import_core38.Utils.uniqueId();
      const newShape = Arrow.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? import_vec33.default.snap(currentPoint, currentGrid) : currentPoint,
        decorations: {
          start: void 0,
          end: void 0
        },
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession(SessionType.Arrow, newShape.id, "end", true);
      this.setStatus(Status.Creating);
    };
  }
};

// src/state/tools/ArrowTool/ArrowTool.ts
var import_core39 = __toModule(require("@tldraw/core"));
var import_vec34 = __toModule(require("@tldraw/vec"));
var ArrowTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Arrow;
    this.onPointerDown = () => {
      if (this.status !== Status.Idle)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = import_core39.Utils.uniqueId();
      const newShape = Arrow.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? import_vec34.default.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession(SessionType.Arrow, newShape.id, "end", true);
      this.setStatus(Status.Creating);
    };
  }
};

// src/state/tools/StickyTool/StickyTool.ts
var import_vec35 = __toModule(require("@tldraw/vec"));
var import_core40 = __toModule(require("@tldraw/core"));
var StickyTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    this.type = TDShapeType.Sticky;
    this.onPointerDown = () => {
      if (this.status === Status.Creating) {
        this.setStatus(Status.Idle);
        if (!this.app.appState.isToolLocked) {
          this.app.selectTool("select");
        }
        return;
      }
      if (this.status === Status.Idle) {
        const {
          currentPoint,
          currentGrid,
          settings: { showGrid },
          appState: { currentPageId, currentStyle }
        } = this.app;
        const childIndex = this.getNextChildIndex();
        const id = import_core40.Utils.uniqueId();
        this.shapeId = id;
        const newShape = Sticky.create({
          id,
          parentId: currentPageId,
          childIndex,
          point: showGrid ? import_vec35.default.snap(currentPoint, currentGrid) : currentPoint,
          style: __spreadValues({}, currentStyle)
        });
        const bounds = Sticky.getBounds(newShape);
        newShape.point = import_vec35.default.sub(newShape.point, [bounds.width / 2, bounds.height / 2]);
        this.app.createShapes(newShape);
        this.app.startSession(SessionType.Translate);
        this.setStatus(Status.Creating);
      }
    };
    this.onPointerUp = () => {
      if (this.status === Status.Creating) {
        this.setStatus(Status.Idle);
        this.app.completeSession();
        this.app.selectTool("select");
        this.app.setEditingId(this.shapeId);
      }
    };
  }
};

// src/state/StateManager/StateManager.ts
var import_vanilla = __toModule(require("zustand/vanilla"));
var import_zustand = __toModule(require("zustand"));
var idb = __toModule(require("idb-keyval"));

// src/state/StateManager/copy.ts
function deepCopy(target) {
  if (target === null) {
    return target;
  }
  if (target instanceof Date) {
    return new Date(target.getTime());
  }
  if (typeof target === "object") {
    if (typeof target[Symbol.iterator] === "function") {
      const cp = [];
      if (target.length > 0) {
        for (const arrayMember of target) {
          cp.push(deepCopy(arrayMember));
        }
      }
      return cp;
    } else {
      const targetKeys = Object.keys(target);
      const cp = {};
      if (targetKeys.length > 0) {
        for (const key of targetKeys) {
          cp[key] = deepCopy(target[key]);
        }
      }
      return cp;
    }
  }
  return target;
}

// src/state/StateManager/StateManager.ts
var import_core41 = __toModule(require("@tldraw/core"));
var StateManager = class {
  constructor(initialState, id, version, update) {
    this.pointer = -1;
    this._status = "loading";
    this.stack = [];
    this.isPaused = false;
    this.persist = (id) => {
      if (this.onPersist) {
        this.onPersist(this._state, id);
      }
      if (this._idbId) {
        return idb.set(this._idbId, this._state).catch((e) => console.error(e));
      }
    };
    this.applyPatch = (patch, id) => {
      const prev = this._state;
      const next = import_core41.Utils.deepMerge(this._state, patch);
      const final = this.cleanup(next, prev, patch, id);
      if (this.onStateWillChange) {
        this.onStateWillChange(final, id);
      }
      this._state = final;
      this.store.setState(this._state, true);
      if (this.onStateDidChange) {
        this.onStateDidChange(this._state, id);
      }
      return this;
    };
    this.cleanup = (nextState, prevState, patch, id) => nextState;
    this.patchState = (patch, id) => {
      this.applyPatch(patch, id);
      if (this.onPatch) {
        this.onPatch(this._state, id);
      }
      return this;
    };
    this.replaceState = (state, id) => {
      const final = this.cleanup(state, this._state, state, id);
      if (this.onStateWillChange) {
        this.onStateWillChange(final, "replace");
      }
      this._state = final;
      this.store.setState(this._state, true);
      if (this.onStateDidChange) {
        this.onStateDidChange(this._state, "replace");
      }
      return this;
    };
    this.setState = (command, id = command.id) => {
      if (this.pointer < this.stack.length - 1) {
        this.stack = this.stack.slice(0, this.pointer + 1);
      }
      this.stack.push(__spreadProps(__spreadValues({}, command), { id }));
      this.pointer = this.stack.length - 1;
      this.applyPatch(command.after, id);
      if (this.onCommand)
        this.onCommand(this._state, id);
      this.persist(id);
      return this;
    };
    this.reset = () => {
      if (this.onStateWillChange) {
        this.onStateWillChange(this.initialState, "reset");
      }
      this._state = this.initialState;
      this.store.setState(this._state, true);
      this.resetHistory();
      this.persist("reset");
      if (this.onStateDidChange) {
        this.onStateDidChange(this._state, "reset");
      }
      if (this.onReset) {
        this.onReset(this._state);
      }
      return this;
    };
    this.replaceHistory = (history, pointer = history.length - 1) => {
      this.stack = history;
      this.pointer = pointer;
      if (this.onReplace) {
        this.onReplace(this._state);
      }
      return this;
    };
    this.resetHistory = () => {
      this.stack = [];
      this.pointer = -1;
      if (this.onResetHistory) {
        this.onResetHistory(this._state);
      }
      return this;
    };
    this.undo = () => {
      if (!this.isPaused) {
        if (!this.canUndo)
          return this;
        const command = this.stack[this.pointer];
        this.pointer--;
        this.applyPatch(command.before, `undo`);
        this.persist("undo");
      }
      if (this.onUndo)
        this.onUndo(this._state);
      return this;
    };
    this.redo = () => {
      if (!this.isPaused) {
        if (!this.canRedo)
          return this;
        this.pointer++;
        const command = this.stack[this.pointer];
        this.applyPatch(command.after, "redo");
        this.persist("undo");
      }
      if (this.onRedo)
        this.onRedo(this._state);
      return this;
    };
    this.setSnapshot = () => {
      this._snapshot = __spreadValues({}, this._state);
      return this;
    };
    this.forceUpdate = () => {
      this.store.setState(this._state, true);
    };
    this._idbId = id;
    this._state = deepCopy(initialState);
    this._snapshot = deepCopy(initialState);
    this.initialState = deepCopy(initialState);
    this.store = (0, import_vanilla.default)(() => this._state);
    this.useStore = (0, import_zustand.default)(this.store);
    this.ready = new Promise((resolve) => {
      let message = "none";
      if (this._idbId) {
        message = "restored";
        idb.get(this._idbId).then((saved) => __async(this, null, function* () {
          if (saved) {
            let next = saved;
            if (version) {
              const savedVersion = yield idb.get(id + "_version");
              if (savedVersion && savedVersion < version) {
                next = update ? update(saved, initialState, savedVersion) : initialState;
                message = "migrated";
              }
            }
            yield idb.set(id + "_version", version || -1);
            this._state = deepCopy(next);
            this._snapshot = deepCopy(next);
            this.store.setState(this._state, true);
          } else {
            yield idb.set(id + "_version", version || -1);
          }
          this._status = "ready";
          resolve(message);
        })).catch((e) => console.error(e));
      } else {
        this._status = "ready";
        resolve(message);
      }
      resolve(message);
    }).then((message) => {
      if (this.onReady)
        this.onReady(message);
      return message;
    });
  }
  pause() {
    this.isPaused = true;
  }
  resume() {
    this.isPaused = false;
  }
  get canUndo() {
    return this.pointer > -1;
  }
  get canRedo() {
    return this.pointer < this.stack.length - 1;
  }
  get state() {
    return this._state;
  }
  get status() {
    return this._status;
  }
  get snapshot() {
    return this._snapshot;
  }
};

// src/state/TldrawApp.ts
var uuid = import_core42.Utils.uniqueId();
var _TldrawApp = class extends StateManager {
  constructor(id, callbacks = {}) {
    super(_TldrawApp.defaultState, id, _TldrawApp.version, (prev, next, prevVersion) => {
      return __spreadProps(__spreadValues({}, next), {
        document: migrate(__spreadProps(__spreadValues(__spreadValues({}, next.document), prev.document), { version: prevVersion }), _TldrawApp.version)
      });
    });
    this.callbacks = {};
    this.tools = {
      select: new SelectTool(this),
      erase: new EraseTool(this),
      [TDShapeType.Text]: new TextTool(this),
      [TDShapeType.Draw]: new DrawTool(this),
      [TDShapeType.Ellipse]: new EllipseTool(this),
      [TDShapeType.Rectangle]: new RectangleTool(this),
      [TDShapeType.Line]: new LineTool(this),
      [TDShapeType.Arrow]: new ArrowTool(this),
      [TDShapeType.Sticky]: new StickyTool(this)
    };
    this.currentTool = this.tools.select;
    this.readOnly = false;
    this.isDirty = false;
    this.isCreating = false;
    this.originPoint = [0, 0];
    this.currentPoint = [0, 0];
    this.previousPoint = [0, 0];
    this.shiftKey = false;
    this.altKey = false;
    this.metaKey = false;
    this.ctrlKey = false;
    this.spaceKey = false;
    this.editingStartTime = -1;
    this.fileSystemHandle = null;
    this.viewport = import_core42.Utils.getBoundsFromPoints([
      [0, 0],
      [100, 100]
    ]);
    this.rendererBounds = import_core42.Utils.getBoundsFromPoints([
      [0, 0],
      [100, 100]
    ]);
    this.selectHistory = {
      stack: [[]],
      pointer: 0
    };
    this.rotationInfo = {
      selectedIds: [],
      center: [0, 0]
    };
    this.pasteInfo = {
      center: [0, 0],
      offset: [0, 0]
    };
    this.onReady = () => {
      var _a, _b;
      this.loadDocument(this.document);
      loadFileHandle().then((fileHandle) => {
        this.fileSystemHandle = fileHandle;
      });
      try {
        this.patchState({
          appState: {
            status: TDStatus.Idle
          },
          document: migrate(this.document, _TldrawApp.version)
        });
      } catch (e) {
        console.error("The data appears to be corrupted. Resetting!", e);
        localStorage.setItem(this.document.id + "_corrupted", JSON.stringify(this.document));
        this.patchState(__spreadProps(__spreadValues({}, _TldrawApp.defaultState), {
          appState: __spreadProps(__spreadValues({}, _TldrawApp.defaultState.appState), {
            status: TDStatus.Idle
          })
        }));
      }
      (_b = (_a = this.callbacks).onMount) == null ? void 0 : _b.call(_a, this);
    };
    this.cleanup = (state, prev) => {
      const next = __spreadValues({}, state);
      if (next.document !== prev.document) {
        Object.entries(next.document.pages).forEach(([pageId, page]) => {
          if (page === void 0) {
            delete next.document.pages[pageId];
            delete next.document.pageStates[pageId];
            return;
          }
          const prevPage = prev.document.pages[pageId];
          const changedShapes = {};
          if (!prevPage || page.shapes !== prevPage.shapes || page.bindings !== prevPage.bindings) {
            page.shapes = __spreadValues({}, page.shapes);
            page.bindings = __spreadValues({}, page.bindings);
            const groupsToUpdate = new Set();
            Object.entries(page.shapes).forEach(([id, shape]) => {
              var _a;
              let parentId;
              if (!shape) {
                parentId = (_a = prevPage == null ? void 0 : prevPage.shapes[id]) == null ? void 0 : _a.parentId;
                delete page.shapes[id];
              } else {
                parentId = shape.parentId;
              }
              if (page.id === next.appState.currentPageId) {
                if ((prevPage == null ? void 0 : prevPage.shapes[id]) !== shape) {
                  changedShapes[id] = shape;
                }
              }
              if (parentId && parentId !== pageId) {
                const group = page.shapes[parentId];
                if (group !== void 0) {
                  groupsToUpdate.add(page.shapes[parentId]);
                }
              }
            });
            Object.keys(page.bindings).forEach((id) => {
              if (!page.bindings[id]) {
                delete page.bindings[id];
              }
            });
            next.document.pages[pageId] = page;
            const bindingsToUpdate = TLDR.getRelatedBindings(next, Object.keys(changedShapes), pageId);
            bindingsToUpdate.forEach((binding) => {
              var _a;
              if (!page.bindings[binding.id]) {
                return;
              }
              const toShape = page.shapes[binding.toId];
              const fromShape = page.shapes[binding.fromId];
              const toUtils = TLDR.getShapeUtil(toShape);
              const fromUtils = TLDR.getShapeUtil(fromShape);
              const fromDelta = (_a = fromUtils.onBindingChange) == null ? void 0 : _a.call(fromUtils, fromShape, binding, toShape, toUtils.getBounds(toShape), toUtils.getCenter(toShape));
              if (fromDelta) {
                const nextShape = __spreadValues(__spreadValues({}, fromShape), fromDelta);
                page.shapes[fromShape.id] = nextShape;
              }
            });
            groupsToUpdate.forEach((group) => {
              if (!group)
                throw Error("no group!");
              const children = group.children.filter((id) => page.shapes[id] !== void 0);
              const commonBounds = import_core42.Utils.getCommonBounds(children.map((id) => page.shapes[id]).filter(Boolean).map((shape) => TLDR.getRotatedBounds(shape)));
              page.shapes[group.id] = __spreadProps(__spreadValues({}, group), {
                point: [commonBounds.minX, commonBounds.minY],
                size: [commonBounds.width, commonBounds.height],
                children
              });
            });
          }
          const nextPageState = __spreadValues({}, next.document.pageStates[pageId]);
          if (!nextPageState.brush) {
            delete nextPageState.brush;
          }
          if (nextPageState.hoveredId && !page.shapes[nextPageState.hoveredId]) {
            delete nextPageState.hoveredId;
          }
          if (nextPageState.bindingId && !page.bindings[nextPageState.bindingId]) {
            TLDR.warn(`Could not find the binding of ${pageId}`);
            delete nextPageState.bindingId;
          }
          if (nextPageState.editingId && !page.shapes[nextPageState.editingId]) {
            TLDR.warn("Could not find the editing shape!");
            delete nextPageState.editingId;
          }
          next.document.pageStates[pageId] = nextPageState;
        });
      }
      const currentPageId = next.appState.currentPageId;
      const currentPageState = next.document.pageStates[currentPageId];
      if (next.room && next.room !== prev.room) {
        const room = __spreadProps(__spreadValues({}, next.room), { users: __spreadValues({}, next.room.users) });
        if (prev.room) {
          Object.values(prev.room.users).filter(Boolean).forEach((user) => {
            if (room.users[user.id] === void 0) {
              delete room.users[user.id];
            }
          });
        }
        next.room = room;
      }
      if (next.room) {
        next.room.users[next.room.userId] = __spreadProps(__spreadValues({}, next.room.users[next.room.userId]), {
          point: this.currentPoint,
          selectedIds: currentPageState.selectedIds
        });
      }
      if (this.readOnly) {
        next.document.pages = prev.document.pages;
      }
      return next;
    };
    this.onPatch = (state, id) => {
      var _a, _b;
      (_b = (_a = this.callbacks).onPatch) == null ? void 0 : _b.call(_a, this, id);
    };
    this.onCommand = (state, id) => {
      var _a, _b;
      this.clearSelectHistory();
      this.isDirty = true;
      (_b = (_a = this.callbacks).onCommand) == null ? void 0 : _b.call(_a, this, id);
    };
    this.onReplace = () => {
      this.clearSelectHistory();
      this.isDirty = false;
    };
    this.onUndo = () => {
      var _a, _b;
      this.rotationInfo.selectedIds = [...this.selectedIds];
      (_b = (_a = this.callbacks).onUndo) == null ? void 0 : _b.call(_a, this);
    };
    this.onRedo = () => {
      var _a, _b;
      this.rotationInfo.selectedIds = [...this.selectedIds];
      (_b = (_a = this.callbacks).onRedo) == null ? void 0 : _b.call(_a, this);
    };
    this.onPersist = () => {
      var _a, _b;
      if (this.callbacks.onChangePage) {
        this.broadcastPageChanges();
      }
      (_b = (_a = this.callbacks).onPersist) == null ? void 0 : _b.call(_a, this);
    };
    this.prevSelectedIds = this.selectedIds;
    this.onStateDidChange = (_state, id) => {
      var _a, _b, _c, _d;
      (_b = (_a = this.callbacks).onChange) == null ? void 0 : _b.call(_a, this, id);
      if (this.room && this.selectedIds !== this.prevSelectedIds) {
        (_d = (_c = this.callbacks).onChangePresence) == null ? void 0 : _d.call(_c, this, __spreadProps(__spreadValues({}, this.room.users[this.room.userId]), {
          selectedIds: this.selectedIds
        }));
        this.prevSelectedIds = this.selectedIds;
      }
    };
    this.justSent = false;
    this.prevShapes = this.page.shapes;
    this.prevBindings = this.page.bindings;
    this.broadcastPageChanges = () => {
      var _a, _b;
      const visited = new Set();
      const changedShapes = {};
      const changedBindings = {};
      this.shapes.forEach((shape) => {
        visited.add(shape.id);
        if (this.prevShapes[shape.id] !== shape) {
          changedShapes[shape.id] = shape;
        }
      });
      Object.keys(this.prevShapes).filter((id) => !visited.has(id)).forEach((id) => {
        changedShapes[id] = void 0;
      });
      this.bindings.forEach((binding) => {
        visited.add(binding.id);
        if (this.prevBindings[binding.id] !== binding) {
          changedBindings[binding.id] = binding;
        }
      });
      Object.keys(this.prevBindings).filter((id) => !visited.has(id)).forEach((id) => {
        changedBindings[id] = void 0;
      });
      this.justSent = true;
      (_b = (_a = this.callbacks).onChangePage) == null ? void 0 : _b.call(_a, this, changedShapes, changedBindings);
      this.prevShapes = this.page.shapes;
      this.prevBindings = this.page.bindings;
    };
    this.getReservedContent = (ids, pageId = this.currentPageId) => {
      const { bindings } = this.document.pages[pageId];
      const reservedShapes = {};
      const reservedBindings = {};
      const bindingsArr = Object.values(bindings);
      const boundTos = new Map(bindingsArr.map((binding) => [binding.toId, binding]));
      const boundFroms = new Map(bindingsArr.map((binding) => [binding.fromId, binding]));
      const bindingMaps = [boundTos, boundFroms];
      const reservedShapeIds = [];
      if (this.session)
        ids.forEach((id) => reservedShapeIds.push(id));
      const strongReservedShapeIds = new Set(reservedShapeIds);
      const visited = new Set();
      while (reservedShapeIds.length > 0) {
        const id = reservedShapeIds.pop();
        if (!id)
          break;
        if (visited.has(id))
          continue;
        visited.add(id);
        const shape = this.getShape(id);
        reservedShapes[id] = shape;
        if (shape.parentId !== pageId)
          reservedShapeIds.push(shape.parentId);
        if (shape.children)
          reservedShapeIds.push(...shape.children);
        bindingMaps.map((map) => map.get(shape.id)).filter(Boolean).forEach((binding) => {
          reservedBindings[binding.id] = binding;
          reservedShapeIds.push(binding.toId, binding.fromId);
        });
      }
      return { reservedShapes, reservedBindings, strongReservedShapeIds };
    };
    this.replacePageContent = (shapes, bindings, pageId = this.currentPageId) => {
      if (this.justSent) {
        this.justSent = false;
        return this;
      }
      this.useStore.setState((current) => {
        const { hoveredId, editingId, bindingId, selectedIds } = current.document.pageStates[pageId];
        const coreReservedIds = [...selectedIds];
        if (editingId)
          coreReservedIds.push(editingId);
        const { reservedShapes, reservedBindings, strongReservedShapeIds } = this.getReservedContent(coreReservedIds, this.currentPageId);
        Object.values(reservedShapes).filter((reservedShape) => !("text" in reservedShape)).forEach((reservedShape) => {
          const incomingShape = shapes[reservedShape.id];
          if (!incomingShape)
            return;
          if (!(reservedShape.type === TDShapeType.Arrow || strongReservedShapeIds.has(reservedShape.id))) {
            reservedShapes[reservedShape.id] = incomingShape;
            return;
          }
          if ("decorations" in incomingShape && "decorations" in reservedShape) {
            reservedShape.decorations = incomingShape.decorations;
          }
          reservedShape.style = incomingShape.style;
        });
        this.prevShapes = shapes;
        this.prevBindings = bindings;
        const nextShapes = __spreadValues(__spreadValues({}, shapes), reservedShapes);
        const nextBindings = __spreadValues(__spreadValues({}, bindings), reservedBindings);
        const next = __spreadProps(__spreadValues({}, current), {
          document: __spreadProps(__spreadValues({}, current.document), {
            pages: {
              [pageId]: __spreadProps(__spreadValues({}, current.document.pages[pageId]), {
                shapes: nextShapes,
                bindings: nextBindings
              })
            },
            pageStates: __spreadProps(__spreadValues({}, current.document.pageStates), {
              [pageId]: __spreadProps(__spreadValues({}, current.document.pageStates[pageId]), {
                selectedIds: selectedIds.filter((id) => nextShapes[id] !== void 0),
                hoveredId: hoveredId ? nextShapes[hoveredId] === void 0 ? void 0 : hoveredId : void 0,
                editingId,
                bindingId: bindingId ? nextBindings[bindingId] === void 0 ? void 0 : bindingId : void 0
              })
            })
          })
        });
        const bindingsToUpdate = TLDR.getRelatedBindings(next, Object.keys(nextShapes), pageId);
        const page = next.document.pages[pageId];
        bindingsToUpdate.forEach((binding) => {
          var _a;
          if (!page.bindings[binding.id]) {
            return;
          }
          const toShape = page.shapes[binding.toId];
          const fromShape = page.shapes[binding.fromId];
          const toUtils = TLDR.getShapeUtil(toShape);
          const fromUtils = TLDR.getShapeUtil(fromShape);
          const fromDelta = (_a = fromUtils.onBindingChange) == null ? void 0 : _a.call(fromUtils, fromShape, binding, toShape, toUtils.getBounds(toShape), toUtils.getCenter(toShape));
          if (fromDelta) {
            const nextShape = __spreadValues(__spreadValues({}, fromShape), fromDelta);
            page.shapes[fromShape.id] = nextShape;
          }
        });
        Object.values(nextShapes).forEach((shape) => {
          if (shape.type !== TDShapeType.Group)
            return;
          const children = shape.children.filter((id) => page.shapes[id] !== void 0);
          const commonBounds = import_core42.Utils.getCommonBounds(children.map((id) => page.shapes[id]).filter(Boolean).map((shape2) => TLDR.getRotatedBounds(shape2)));
          page.shapes[shape.id] = __spreadProps(__spreadValues({}, shape), {
            point: [commonBounds.minX, commonBounds.minY],
            size: [commonBounds.width, commonBounds.height],
            children
          });
        });
        this.state.document = next.document;
        return next;
      }, true);
      return this;
    };
    this.updateBounds = (bounds) => {
      this.rendererBounds = bounds;
      const { point, zoom } = this.pageState.camera;
      this.updateViewport(point, zoom);
      if (!this.readOnly && this.session) {
        this.session.update();
      }
    };
    this.updateViewport = (point, zoom) => {
      const { width, height } = this.rendererBounds;
      const [minX, minY] = import_vec36.Vec.sub(import_vec36.Vec.div([0, 0], zoom), point);
      const [maxX, maxY] = import_vec36.Vec.sub(import_vec36.Vec.div([width, height], zoom), point);
      this.viewport = {
        minX,
        minY,
        maxX,
        maxY,
        height: maxX - minX,
        width: maxY - minY
      };
    };
    this.setEditingId = (id) => {
      if (this.readOnly)
        return;
      this.editingStartTime = Date.now();
      this.patchState({
        document: {
          pageStates: {
            [this.currentPageId]: {
              editingId: id
            }
          }
        }
      }, `set_editing_id`);
    };
    this.setHoveredId = (id) => {
      this.patchState({
        document: {
          pageStates: {
            [this.currentPageId]: {
              hoveredId: id
            }
          }
        }
      }, `set_hovered_id`);
    };
    this.setSetting = (name, value) => {
      if (this.session)
        return this;
      this.patchState({
        settings: {
          [name]: typeof value === "function" ? value(this.settings[name]) : value
        }
      }, `settings:${name}`);
      this.persist();
      return this;
    };
    this.toggleFocusMode = () => {
      if (this.session)
        return this;
      this.patchState({
        settings: {
          isFocusMode: !this.settings.isFocusMode
        }
      }, `settings:toggled_focus_mode`);
      this.persist();
      return this;
    };
    this.togglePenMode = () => {
      if (this.session)
        return this;
      this.patchState({
        settings: {
          isPenMode: !this.settings.isPenMode
        }
      }, `settings:toggled_pen_mode`);
      this.persist();
      return this;
    };
    this.toggleDarkMode = () => {
      if (this.session)
        return this;
      this.patchState({ settings: { isDarkMode: !this.settings.isDarkMode } }, `settings:toggled_dark_mode`);
      this.persist();
      return this;
    };
    this.toggleZoomSnap = () => {
      if (this.session)
        return this;
      this.patchState({ settings: { isZoomSnap: !this.settings.isZoomSnap } }, `settings:toggled_zoom_snap`);
      this.persist();
      return this;
    };
    this.toggleDebugMode = () => {
      if (this.session)
        return this;
      this.patchState({ settings: { isDebugMode: !this.settings.isDebugMode } }, `settings:toggled_debug`);
      this.persist();
      return this;
    };
    this.setMenuOpen = (isOpen) => {
      this.patchState({ appState: { isMenuOpen: isOpen } }, "ui:toggled_menu_opened");
      this.persist();
      return this;
    };
    this.isMenuOpen = () => this.appState.isMenuOpen;
    this.toggleGrid = () => {
      if (this.session)
        return this;
      this.patchState({ settings: { showGrid: !this.settings.showGrid } }, "settings:toggled_grid");
      this.persist();
      return this;
    };
    this.selectTool = (type) => {
      if (this.readOnly || this.session)
        return this;
      const tool = this.tools[type];
      if (tool === this.currentTool) {
        this.patchState({
          appState: {
            isToolLocked: false
          }
        });
        return this;
      }
      this.currentTool.onExit();
      tool.previous = this.currentTool.type;
      this.currentTool = tool;
      this.currentTool.onEnter();
      return this.patchState({
        appState: {
          activeTool: type,
          isToolLocked: false
        }
      }, `selected_tool:${type}`);
    };
    this.toggleToolLock = () => {
      if (this.session)
        return this;
      return this.patchState({
        appState: {
          isToolLocked: !this.appState.isToolLocked
        }
      }, `toggled_tool_lock`);
    };
    this.resetDocument = () => {
      if (this.session)
        return this;
      this.session = void 0;
      this.pasteInfo.offset = [0, 0];
      this.currentTool = this.tools.select;
      this.resetHistory().clearSelectHistory().loadDocument(migrate(_TldrawApp.defaultDocument, _TldrawApp.version)).persist();
      return this;
    };
    this.updateUsers = (users, isOwnUpdate = false) => {
      this.patchState({
        room: {
          users: Object.fromEntries(users.map((user) => [user.id, user]))
        }
      }, isOwnUpdate ? "room:self:update" : "room:user:update");
    };
    this.removeUser = (userId) => {
      this.patchState({
        room: {
          users: {
            [userId]: void 0
          }
        }
      });
    };
    this.mergeDocument = (document2) => {
      if (this.document.id !== document2.id) {
        this.replaceState(__spreadProps(__spreadValues({}, this.state), {
          appState: __spreadProps(__spreadValues({}, this.appState), {
            currentPageId: Object.keys(document2.pages)[0]
          }),
          document: migrate(document2, _TldrawApp.version)
        }));
        return this;
      }
      const currentPageStates = __spreadValues({}, this.document.pageStates);
      const nextAppState = __spreadProps(__spreadValues({}, this.appState), {
        currentPageId: document2.pages[this.currentPageId] ? this.currentPageId : Object.keys(document2.pages)[0],
        pages: Object.values(document2.pages).map((page, i) => ({
          id: page.id,
          name: page.name,
          childIndex: page.childIndex || i
        }))
      });
      this.resetHistory();
      Object.keys(this.document.pages).forEach((pageId) => {
        if (!document2.pages[pageId]) {
          if (pageId === this.appState.currentPageId) {
            this.cancelSession();
            this.selectNone();
          }
          currentPageStates[pageId] = void 0;
        }
      });
      if (this.session) {
        this.selectedIds.filter((id) => !document2.pages[this.currentPageId].shapes[id]).forEach((id) => document2.pages[this.currentPageId].shapes[id] = this.page.shapes[id]);
      }
      Object.entries(currentPageStates).forEach(([pageId, pageState]) => {
        pageState.selectedIds = pageState.selectedIds.filter((id) => !!document2.pages[pageId].shapes[id]);
      });
      const { editingId } = this.pageState;
      if (editingId) {
        document2.pages[this.currentPageId].shapes[editingId] = this.page.shapes[editingId];
        currentPageStates[this.currentPageId].selectedIds = [editingId];
      }
      return this.replaceState(__spreadProps(__spreadValues({}, this.state), {
        appState: nextAppState,
        document: __spreadProps(__spreadValues({}, migrate(document2, _TldrawApp.version)), {
          pageStates: currentPageStates
        })
      }), "merge");
    };
    this.updateDocument = (document2, reason = "updated_document") => {
      const prevState = this.state;
      const nextState = __spreadProps(__spreadValues({}, prevState), { document: __spreadValues({}, prevState.document) });
      if (!document2.pages[this.currentPageId]) {
        nextState.appState = __spreadProps(__spreadValues({}, prevState.appState), {
          currentPageId: Object.keys(document2.pages)[0]
        });
      }
      let i = 1;
      for (const nextPage of Object.values(document2.pages)) {
        if (nextPage !== prevState.document.pages[nextPage.id]) {
          nextState.document.pages[nextPage.id] = nextPage;
          if (!nextPage.name) {
            nextState.document.pages[nextPage.id].name = `Page ${i + 1}`;
            i++;
          }
        }
      }
      for (const nextPageState of Object.values(document2.pageStates)) {
        if (nextPageState !== prevState.document.pageStates[nextPageState.id]) {
          nextState.document.pageStates[nextPageState.id] = nextPageState;
          const nextPage = document2.pages[nextPageState.id];
          const keysToCheck = ["bindingId", "editingId", "hoveredId", "pointedId"];
          for (const key of keysToCheck) {
            if (!nextPage.shapes[key]) {
              nextPageState[key] = void 0;
            }
          }
          nextPageState.selectedIds = nextPageState.selectedIds.filter((id) => !!document2.pages[nextPage.id].shapes[id]);
        }
      }
      nextState.document = migrate(nextState.document, nextState.document.version || 0);
      return this.replaceState(nextState, `${reason}:${document2.id}`);
    };
    this.loadRoom = (roomId) => {
      this.patchState({
        room: {
          id: roomId,
          userId: uuid,
          users: {
            [uuid]: {
              id: uuid,
              color: USER_COLORS[Math.floor(Math.random() * USER_COLORS.length)],
              point: [100, 100],
              selectedIds: [],
              activeShapes: []
            }
          }
        }
      });
      return this;
    };
    this.loadDocument = (document2) => {
      this.selectNone();
      this.resetHistory();
      this.clearSelectHistory();
      this.session = void 0;
      this.replaceState(__spreadProps(__spreadValues({}, _TldrawApp.defaultState), {
        document: migrate(document2, _TldrawApp.version),
        appState: __spreadProps(__spreadValues({}, _TldrawApp.defaultState.appState), {
          currentPageId: Object.keys(document2.pages)[0]
        })
      }), "loaded_document");
      return this;
    };
    this.newProject = () => {
      if (!this.isLocal)
        return;
      this.fileSystemHandle = null;
      this.resetDocument();
    };
    this.saveProject = () => __async(this, null, function* () {
      if (this.readOnly)
        return;
      try {
        const fileHandle = yield saveToFileSystem(this.document, this.fileSystemHandle);
        this.fileSystemHandle = fileHandle;
        this.persist();
        this.isDirty = false;
      } catch (e) {
        console.error(e.message);
      }
      return this;
    });
    this.saveProjectAs = () => __async(this, null, function* () {
      try {
        const fileHandle = yield saveToFileSystem(this.document, null);
        this.fileSystemHandle = fileHandle;
        this.persist();
        this.isDirty = false;
      } catch (e) {
        console.error(e.message);
      }
      return this;
    });
    this.openProject = () => __async(this, null, function* () {
      if (!this.isLocal)
        return;
      try {
        const result = yield openFromFileSystem();
        if (!result) {
          throw Error();
        }
        const { fileHandle, document: document2 } = result;
        this.loadDocument(document2);
        this.fileSystemHandle = fileHandle;
        this.zoomToFit();
        this.persist();
      } catch (e) {
        console.error(e);
      } finally {
        this.persist();
      }
    });
    this.signOut = () => {
    };
    this.getAppState = () => {
      return this.appState;
    };
    this.getPage = (pageId = this.currentPageId) => {
      return TLDR.getPage(this.state, pageId || this.currentPageId);
    };
    this.getShapes = (pageId = this.currentPageId) => {
      return TLDR.getShapes(this.state, pageId || this.currentPageId);
    };
    this.getBindings = (pageId = this.currentPageId) => {
      return TLDR.getBindings(this.state, pageId || this.currentPageId);
    };
    this.getShape = (id, pageId = this.currentPageId) => {
      return TLDR.getShape(this.state, id, pageId);
    };
    this.getShapeBounds = (id, pageId = this.currentPageId) => {
      return TLDR.getBounds(this.getShape(id, pageId));
    };
    this.getBinding = (id, pageId = this.currentPageId) => {
      return TLDR.getBinding(this.state, id, pageId);
    };
    this.getPageState = (pageId = this.currentPageId) => {
      return TLDR.getPageState(this.state, pageId || this.currentPageId);
    };
    this.getPagePoint = (point, pageId = this.currentPageId) => {
      const { camera } = this.getPageState(pageId);
      return import_vec36.Vec.sub(import_vec36.Vec.div(point, camera.zoom), camera.point);
    };
    this.createPage = (id) => {
      if (this.readOnly)
        return this;
      const { width, height } = this.rendererBounds;
      return this.setState(createPage(this, [-width / 2, -height / 2], id));
    };
    this.changePage = (pageId) => {
      return this.setState(changePage(this, pageId));
    };
    this.renamePage = (pageId, name) => {
      if (this.readOnly)
        return this;
      return this.setState(renamePage(this, pageId, name));
    };
    this.duplicatePage = (pageId) => {
      if (this.readOnly)
        return this;
      return this.setState(duplicatePage(this, pageId));
    };
    this.deletePage = (pageId) => {
      if (this.readOnly)
        return this;
      if (Object.values(this.document.pages).length <= 1)
        return this;
      return this.setState(deletePage(this, pageId ? pageId : this.currentPageId));
    };
    this.copy = (ids = this.selectedIds) => {
      const copyingShapeIds = ids.flatMap((id) => TLDR.getDocumentBranch(this.state, id, this.currentPageId));
      const copyingShapes = copyingShapeIds.map((id) => import_core42.Utils.deepClone(this.getShape(id, this.currentPageId)));
      if (copyingShapes.length === 0)
        return this;
      const copyingBindings = Object.values(this.page.bindings).filter((binding) => copyingShapeIds.includes(binding.fromId) && copyingShapeIds.includes(binding.toId));
      this.clipboard = {
        shapes: copyingShapes,
        bindings: copyingBindings
      };
      try {
        const text = JSON.stringify({
          type: "tldr/clipboard",
          shapes: copyingShapes,
          bindings: copyingBindings
        });
        navigator.clipboard.writeText(text).then(() => {
        }, () => {
        });
      } catch (e) {
      }
      this.pasteInfo.offset = [0, 0];
      this.pasteInfo.center = [0, 0];
      return this;
    };
    this.cut = (ids = this.selectedIds) => {
      this.copy(ids);
      this.delete(ids);
      return this;
    };
    this.paste = (point) => {
      if (this.readOnly)
        return;
      const pasteInCurrentPage = (shapes, bindings) => {
        const idsMap = {};
        shapes.forEach((shape) => idsMap[shape.id] = import_core42.Utils.uniqueId());
        bindings.forEach((binding) => idsMap[binding.id] = import_core42.Utils.uniqueId());
        let startIndex = TLDR.getTopChildIndex(this.state, this.currentPageId);
        const shapesToPaste = shapes.sort((a, b) => a.childIndex - b.childIndex).map((shape) => {
          const parentShapeId = idsMap[shape.parentId];
          const copy = __spreadProps(__spreadValues({}, shape), {
            id: idsMap[shape.id],
            parentId: parentShapeId || this.currentPageId
          });
          if (shape.children) {
            copy.children = shape.children.map((id) => idsMap[id]);
          }
          if (!parentShapeId) {
            copy.childIndex = startIndex;
            startIndex++;
          }
          if (copy.handles) {
            Object.values(copy.handles).forEach((handle) => {
              if (handle.bindingId) {
                handle.bindingId = idsMap[handle.bindingId];
              }
            });
          }
          return copy;
        });
        const bindingsToPaste = bindings.map((binding) => __spreadProps(__spreadValues({}, binding), {
          id: idsMap[binding.id],
          toId: idsMap[binding.toId],
          fromId: idsMap[binding.fromId]
        }));
        const commonBounds = import_core42.Utils.getCommonBounds(shapesToPaste.map(TLDR.getBounds));
        let center = import_vec36.Vec.toFixed(this.getPagePoint(point || this.centerPoint));
        if (import_vec36.Vec.dist(center, this.pasteInfo.center) < 2 || import_vec36.Vec.dist(center, import_vec36.Vec.toFixed(import_core42.Utils.getBoundsCenter(commonBounds))) < 2) {
          center = import_vec36.Vec.add(center, this.pasteInfo.offset);
          this.pasteInfo.offset = import_vec36.Vec.add(this.pasteInfo.offset, [GRID_SIZE, GRID_SIZE]);
        } else {
          this.pasteInfo.center = center;
          this.pasteInfo.offset = [0, 0];
        }
        const centeredBounds = import_core42.Utils.centerBounds(commonBounds, center);
        const delta = import_vec36.Vec.sub(import_core42.Utils.getBoundsCenter(centeredBounds), import_core42.Utils.getBoundsCenter(commonBounds));
        this.create(shapesToPaste.map((shape) => TLDR.getShapeUtil(shape.type).create(__spreadProps(__spreadValues({}, shape), {
          point: import_vec36.Vec.toFixed(import_vec36.Vec.add(shape.point, delta)),
          parentId: shape.parentId || this.currentPageId
        }))), bindingsToPaste);
      };
      try {
        if (!("clipboard" in navigator && navigator.clipboard.readText)) {
          throw Error("This browser does not support the clipboard API.");
        }
        navigator.clipboard.readText().then((result) => {
          try {
            const data = JSON.parse(result);
            if (data.type !== "tldr/clipboard") {
              throw Error("The pasted string was not from the Tldraw clipboard.");
            }
            pasteInCurrentPage(data.shapes, data.bindings);
          } catch (e) {
            TLDR.warn(e);
            const shapeId = import_core42.Utils.uniqueId();
            this.createShapes({
              id: shapeId,
              type: TDShapeType.Text,
              parentId: this.appState.currentPageId,
              text: TLDR.normalizeText(result),
              point: this.getPagePoint(this.centerPoint, this.currentPageId),
              style: __spreadValues({}, this.appState.currentStyle)
            });
            this.select(shapeId);
          }
        });
      } catch (e) {
        if (this.clipboard) {
          pasteInCurrentPage(this.clipboard.shapes, this.clipboard.bindings);
        }
      }
      return this;
    };
    this.copySvg = (ids = this.selectedIds, pageId = this.currentPageId) => {
      if (ids.length === 0)
        ids = Object.keys(this.page.shapes);
      if (ids.length === 0)
        return;
      const shapes = ids.map((id) => this.getShape(id, pageId));
      const commonBounds = import_core42.Utils.getCommonBounds(shapes.map(TLDR.getRotatedBounds));
      const padding = 16;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
      style.textContent = `@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Source+Serif+Pro&display=swap');`;
      defs.appendChild(style);
      svg.appendChild(defs);
      function getSvgElementForShape(shape) {
        const util = TLDR.getShapeUtil(shape);
        const element = util.getSvgElement(shape);
        const bounds = util.getBounds(shape);
        if (!element)
          return;
        element.setAttribute("transform", `translate(${padding + shape.point[0] - commonBounds.minX}, ${padding + shape.point[1] - commonBounds.minY}) rotate(${(shape.rotation || 0) * 180 / Math.PI}, ${bounds.width / 2}, ${bounds.height / 2})`);
        return element;
      }
      shapes.forEach((shape) => {
        var _a;
        if ((_a = shape.children) == null ? void 0 : _a.length) {
          const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
          shape.children.map((childId) => this.getShape(childId, pageId)).map(getSvgElementForShape).filter(Boolean).forEach((element2) => g.appendChild(element2));
          svg.appendChild(g);
          return;
        }
        const element = getSvgElementForShape(shape);
        if (element) {
          svg.appendChild(element);
        }
      });
      svg.setAttribute("viewBox", [0, 0, commonBounds.width + padding * 2, commonBounds.height + padding * 2].join(" "));
      svg.setAttribute("width", String(commonBounds.width));
      svg.setAttribute("height", String(commonBounds.height));
      const s = new XMLSerializer();
      const svgString = s.serializeToString(svg).replaceAll("&#10;      ", "").replaceAll(/((\s|")[0-9]*\.[0-9]{2})([0-9]*)(\b|"|\))/g, "$1");
      TLDR.copyStringToClipboard(svgString);
      return svgString;
    };
    this.copyJson = (ids = this.selectedIds, pageId = this.currentPageId) => {
      if (ids.length === 0)
        ids = Object.keys(this.page.shapes);
      if (ids.length === 0)
        return;
      const shapes = ids.map((id) => this.getShape(id, pageId));
      const json = JSON.stringify(shapes, null, 2);
      TLDR.copyStringToClipboard(json);
      return json;
    };
    this.setCamera = (point, zoom, reason) => {
      this.updateViewport(point, zoom);
      this.patchState({
        document: {
          pageStates: {
            [this.currentPageId]: { camera: { point, zoom } }
          }
        }
      }, reason);
      return this;
    };
    this.resetCamera = () => {
      return this.setCamera(this.centerPoint, 1, `reset_camera`);
    };
    this.pan = (delta) => {
      const { camera } = this.pageState;
      return this.setCamera(import_vec36.Vec.toFixed(import_vec36.Vec.sub(camera.point, delta)), camera.zoom, `panned`);
    };
    this.pinchZoom = (point, delta, zoom) => {
      const { camera } = this.pageState;
      const nextPoint = import_vec36.Vec.sub(camera.point, import_vec36.Vec.div(delta, camera.zoom));
      const nextZoom = zoom;
      const p0 = import_vec36.Vec.sub(import_vec36.Vec.div(point, camera.zoom), nextPoint);
      const p1 = import_vec36.Vec.sub(import_vec36.Vec.div(point, nextZoom), nextPoint);
      return this.setCamera(import_vec36.Vec.toFixed(import_vec36.Vec.add(nextPoint, import_vec36.Vec.sub(p1, p0))), nextZoom, `pinch_zoomed`);
    };
    this.zoomTo = (next, center = this.centerPoint) => {
      const { zoom, point } = this.pageState.camera;
      const p0 = import_vec36.Vec.sub(import_vec36.Vec.div(center, zoom), point);
      const p1 = import_vec36.Vec.sub(import_vec36.Vec.div(center, next), point);
      return this.setCamera(import_vec36.Vec.toFixed(import_vec36.Vec.add(point, import_vec36.Vec.sub(p1, p0))), next, `zoomed_camera`);
    };
    this.zoomIn = () => {
      const i = Math.round(this.pageState.camera.zoom * 100 / 25);
      const nextZoom = TLDR.getCameraZoom((i + 1) * 0.25);
      return this.zoomTo(nextZoom);
    };
    this.zoomOut = () => {
      const i = Math.round(this.pageState.camera.zoom * 100 / 25);
      const nextZoom = TLDR.getCameraZoom((i - 1) * 0.25);
      return this.zoomTo(nextZoom);
    };
    this.zoomToFit = () => {
      const shapes = this.shapes;
      if (shapes.length === 0)
        return this;
      const { rendererBounds } = this;
      const commonBounds = import_core42.Utils.getCommonBounds(shapes.map(TLDR.getBounds));
      let zoom = TLDR.getCameraZoom(Math.min((rendererBounds.width - FIT_TO_SCREEN_PADDING) / commonBounds.width, (rendererBounds.height - FIT_TO_SCREEN_PADDING) / commonBounds.height));
      zoom = this.pageState.camera.zoom === zoom || this.pageState.camera.zoom < 1 ? Math.min(1, zoom) : zoom;
      const mx = (rendererBounds.width - commonBounds.width * zoom) / 2 / zoom;
      const my = (rendererBounds.height - commonBounds.height * zoom) / 2 / zoom;
      return this.setCamera(import_vec36.Vec.toFixed(import_vec36.Vec.sub([mx, my], [commonBounds.minX, commonBounds.minY])), zoom, `zoomed_to_fit`);
    };
    this.zoomToSelection = () => {
      if (this.selectedIds.length === 0)
        return this;
      const { rendererBounds } = this;
      const selectedBounds = TLDR.getSelectedBounds(this.state);
      let zoom = TLDR.getCameraZoom(Math.min((rendererBounds.width - FIT_TO_SCREEN_PADDING) / selectedBounds.width, (rendererBounds.height - FIT_TO_SCREEN_PADDING) / selectedBounds.height));
      zoom = this.pageState.camera.zoom === zoom || this.pageState.camera.zoom < 1 ? Math.min(1, zoom) : zoom;
      const mx = (rendererBounds.width - selectedBounds.width * zoom) / 2 / zoom;
      const my = (rendererBounds.height - selectedBounds.height * zoom) / 2 / zoom;
      return this.setCamera(import_vec36.Vec.toFixed(import_vec36.Vec.sub([mx, my], [selectedBounds.minX, selectedBounds.minY])), zoom, `zoomed_to_selection`);
    };
    this.zoomToContent = () => {
      const shapes = this.shapes;
      const pageState = this.pageState;
      if (shapes.length === 0)
        return this;
      const { rendererBounds } = this;
      const { zoom } = pageState.camera;
      const commonBounds = import_core42.Utils.getCommonBounds(shapes.map(TLDR.getBounds));
      const mx = (rendererBounds.width - commonBounds.width * zoom) / 2 / zoom;
      const my = (rendererBounds.height - commonBounds.height * zoom) / 2 / zoom;
      return this.setCamera(import_vec36.Vec.toFixed(import_vec36.Vec.sub([mx, my], [commonBounds.minX, commonBounds.minY])), this.pageState.camera.zoom, `zoomed_to_content`);
    };
    this.resetZoom = () => {
      return this.zoomTo(1);
    };
    this.zoomBy = import_core42.Utils.throttle((delta, center) => {
      const { zoom } = this.pageState.camera;
      const nextZoom = TLDR.getCameraZoom(zoom - delta * zoom);
      return this.zoomTo(nextZoom, center);
    }, 16);
    this.clearSelectHistory = () => {
      this.selectHistory.pointer = 0;
      this.selectHistory.stack = [this.selectedIds];
      return this;
    };
    this.addToSelectHistory = (ids) => {
      if (this.selectHistory.pointer < this.selectHistory.stack.length) {
        this.selectHistory.stack = this.selectHistory.stack.slice(0, this.selectHistory.pointer + 1);
      }
      this.selectHistory.pointer++;
      this.selectHistory.stack.push(ids);
      return this;
    };
    this.setSelectedIds = (ids, push = false) => {
      const nextIds = push ? [...this.pageState.selectedIds, ...ids] : [...ids];
      return this.patchState({
        appState: {
          activeTool: "select"
        },
        document: {
          pageStates: {
            [this.currentPageId]: {
              selectedIds: nextIds
            }
          }
        }
      }, `selected`);
    };
    this.undoSelect = () => {
      if (this.selectHistory.pointer > 0) {
        this.selectHistory.pointer--;
        this.setSelectedIds(this.selectHistory.stack[this.selectHistory.pointer]);
      }
      return this;
    };
    this.redoSelect = () => {
      if (this.selectHistory.pointer < this.selectHistory.stack.length - 1) {
        this.selectHistory.pointer++;
        this.setSelectedIds(this.selectHistory.stack[this.selectHistory.pointer]);
      }
      return this;
    };
    this.select = (...ids) => {
      ids.forEach((id) => {
        if (!this.page.shapes[id]) {
          throw Error(`That shape does not exist on page ${this.currentPageId}`);
        }
      });
      this.setSelectedIds(ids);
      this.addToSelectHistory(ids);
      return this;
    };
    this.selectAll = (pageId = this.currentPageId) => {
      if (this.session)
        return this;
      this.setSelectedIds(Object.values(this.document.pages[pageId].shapes).filter((shape) => shape.parentId === pageId).map((shape) => shape.id));
      this.addToSelectHistory(this.selectedIds);
      this.selectTool("select");
      return this;
    };
    this.selectNone = () => {
      this.setSelectedIds([]);
      this.addToSelectHistory(this.selectedIds);
      return this;
    };
    this.startSession = (type, ...args) => {
      if (this.readOnly && type !== SessionType.Brush)
        return this;
      if (this.session) {
        TLDR.warn(`Already in a session! (${this.session.constructor.name})`);
        this.cancelSession();
      }
      const Session = getSession(type);
      this.session = new Session(this, ...args);
      const result = this.session.start();
      if (result) {
        this.patchState(result, `session:start_${this.session.constructor.name}`);
      }
      return this;
    };
    this.updateSession = () => {
      const { session } = this;
      if (!session)
        return this;
      const patch = session.update();
      if (!patch)
        return this;
      return this.patchState(patch, `session:${session == null ? void 0 : session.constructor.name}`);
    };
    this.cancelSession = () => {
      const { session } = this;
      if (!session)
        return this;
      this.session = void 0;
      const result = session.cancel();
      if (result) {
        this.patchState(result, `session:cancel:${session.constructor.name}`);
      }
      return this;
    };
    this.completeSession = () => {
      var _a, _b, _c, _d, _e, _f, _g;
      const { session } = this;
      if (!session)
        return this;
      this.session = void 0;
      const result = session.complete();
      if (result === void 0) {
        this.isCreating = false;
        return this.patchState({
          appState: {
            status: TDStatus.Idle
          },
          document: {
            pageStates: {
              [this.currentPageId]: {
                editingId: void 0,
                bindingId: void 0,
                hoveredId: void 0
              }
            }
          }
        }, `session:complete:${session.constructor.name}`);
      } else if ("after" in result) {
        if (this.isCreating) {
          result.before = {
            appState: __spreadProps(__spreadValues({}, result.before.appState), {
              status: TDStatus.Idle
            }),
            document: {
              pages: {
                [this.currentPageId]: {
                  shapes: Object.fromEntries(this.selectedIds.map((id) => [id, void 0]))
                }
              },
              pageStates: {
                [this.currentPageId]: {
                  selectedIds: [],
                  editingId: null,
                  bindingId: null,
                  hoveredId: null
                }
              }
            }
          };
          if (this.appState.isToolLocked) {
            const pageState = ((_c = (_b = (_a = result.after) == null ? void 0 : _a.document) == null ? void 0 : _b.pageStates) == null ? void 0 : _c[this.currentPageId]) || {};
            pageState.selectedIds = [];
          }
          this.isCreating = false;
        }
        result.after.appState = __spreadProps(__spreadValues({}, result.after.appState), {
          status: TDStatus.Idle
        });
        result.after.document = __spreadProps(__spreadValues({}, result.after.document), {
          pageStates: __spreadProps(__spreadValues({}, (_d = result.after.document) == null ? void 0 : _d.pageStates), {
            [this.currentPageId]: __spreadProps(__spreadValues({}, (((_e = result.after.document) == null ? void 0 : _e.pageStates) || {})[this.currentPageId]), {
              editingId: null
            })
          })
        });
        this.setState(result, `session:complete:${session.constructor.name}`);
      } else {
        this.patchState(__spreadProps(__spreadValues({}, result), {
          appState: __spreadProps(__spreadValues({}, result.appState), {
            status: TDStatus.Idle
          }),
          document: __spreadProps(__spreadValues({}, result.document), {
            pageStates: {
              [this.currentPageId]: __spreadProps(__spreadValues({}, (_g = (_f = result.document) == null ? void 0 : _f.pageStates) == null ? void 0 : _g[this.currentPageId]), {
                editingId: null
              })
            }
          })
        }), `session:complete:${session.constructor.name}`);
      }
      return this;
    };
    this.createShapes = (...shapes) => {
      if (shapes.length === 0)
        return this;
      return this.create(shapes.map((shape) => {
        return TLDR.getShapeUtil(shape.type).create(__spreadValues({
          parentId: this.currentPageId
        }, shape));
      }));
    };
    this.updateShapes = (...shapes) => {
      const pageShapes = this.document.pages[this.currentPageId].shapes;
      const shapesToUpdate = shapes.filter((shape) => pageShapes[shape.id]);
      if (shapesToUpdate.length === 0)
        return this;
      return this.setState(updateShapes(this, shapesToUpdate, this.currentPageId), "updated_shapes");
    };
    this.create = (shapes = [], bindings = []) => {
      if (shapes.length === 0)
        return this;
      return this.setState(createShapes(this, shapes, bindings));
    };
    this.patchCreate = (shapes = [], bindings = []) => {
      if (shapes.length === 0)
        return this;
      return this.patchState(createShapes(this, shapes, bindings).after);
    };
    this.delete = (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(deleteShapes(this, ids));
    };
    this.deleteAll = () => {
      this.selectAll();
      this.delete();
      return this;
    };
    this.style = (style, ids = this.selectedIds) => {
      return this.setState(styleShapes(this, ids, style));
    };
    this.align = (type, ids = this.selectedIds) => {
      if (ids.length < 2)
        return this;
      return this.setState(alignShapes(this, ids, type));
    };
    this.distribute = (direction, ids = this.selectedIds) => {
      if (ids.length < 3)
        return this;
      return this.setState(distributeShapes(this, ids, direction));
    };
    this.stretch = (direction, ids = this.selectedIds) => {
      if (ids.length < 2)
        return this;
      return this.setState(stretchShapes(this, ids, direction));
    };
    this.flipHorizontal = (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(flipShapes(this, ids, FlipType.Horizontal));
    };
    this.flipVertical = (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(flipShapes(this, ids, FlipType.Vertical));
    };
    this.moveToPage = (toPageId, fromPageId = this.currentPageId, ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      const { rendererBounds } = this;
      this.setState(moveShapesToPage(this, ids, rendererBounds, fromPageId, toPageId));
      return this;
    };
    this.moveToBack = (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, MoveType.ToBack));
    };
    this.moveBackward = (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, MoveType.Backward));
    };
    this.moveForward = (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, MoveType.Forward));
    };
    this.moveToFront = (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, MoveType.ToFront));
    };
    this.nudge = (delta, isMajor = false, ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      const size = isMajor ? this.settings.showGrid ? this.currentGrid * 4 : 10 : this.settings.showGrid ? this.currentGrid : 1;
      return this.setState(translateShapes(this, ids, import_vec36.Vec.mul(delta, size)));
    };
    this.duplicate = (ids = this.selectedIds, point) => {
      if (this.readOnly)
        return this;
      if (ids.length === 0)
        return this;
      return this.setState(duplicateShapes(this, ids, point));
    };
    this.resetBounds = (ids = this.selectedIds) => {
      const command = resetBounds(this, ids, this.currentPageId);
      return this.setState(resetBounds(this, ids, this.currentPageId), command.id);
    };
    this.toggleHidden = (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(toggleShapeProp(this, ids, "isHidden"));
    };
    this.toggleLocked = (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(toggleShapeProp(this, ids, "isLocked"));
    };
    this.toggleAspectRatioLocked = (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(toggleShapeProp(this, ids, "isAspectRatioLocked"));
    };
    this.toggleDecoration = (handleId, ids = this.selectedIds) => {
      if (ids.length === 0 || !(handleId === "start" || handleId === "end"))
        return this;
      return this.setState(toggleShapesDecoration(this, ids, handleId));
    };
    this.setShapeProps = (props, ids = this.selectedIds) => {
      return this.setState(setShapesProps(this, ids, props));
    };
    this.rotate = (delta = Math.PI * -0.5, ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      const change = rotateShapes(this, ids, delta);
      if (!change)
        return this;
      return this.setState(change);
    };
    this.group = (ids = this.selectedIds, groupId = import_core42.Utils.uniqueId(), pageId = this.currentPageId) => {
      if (this.readOnly)
        return this;
      if (ids.length === 1 && this.getShape(ids[0], pageId).type === TDShapeType.Group) {
        return this.ungroup(ids, pageId);
      }
      if (ids.length < 2)
        return this;
      const command = groupShapes(this, ids, groupId, pageId);
      if (!command)
        return this;
      return this.setState(command);
    };
    this.ungroup = (ids = this.selectedIds, pageId = this.currentPageId) => {
      if (this.readOnly)
        return this;
      const groups = ids.map((id) => this.getShape(id, pageId)).filter((shape) => shape.type === TDShapeType.Group);
      if (groups.length === 0)
        return this;
      const command = ungroupShapes(this, ids, groups, pageId);
      if (!command)
        return this;
      return this.setState(command);
    };
    this.cancel = () => {
      var _a, _b;
      (_b = (_a = this.currentTool).onCancel) == null ? void 0 : _b.call(_a);
      return this;
    };
    this.onKeyDown = (key, info, e) => {
      var _a, _b;
      switch (e.key) {
        case "/": {
          if (this.status === "idle") {
            const { shiftKey, metaKey, altKey, ctrlKey, spaceKey } = this;
            this.onPointerDown({
              target: "canvas",
              pointerId: 0,
              origin: info.point,
              point: info.point,
              delta: [0, 0],
              pressure: 0.5,
              shiftKey,
              ctrlKey,
              metaKey,
              altKey,
              spaceKey
            }, {
              shiftKey,
              altKey,
              ctrlKey,
              pointerId: 0,
              clientX: info.point[0],
              clientY: info.point[1]
            });
          }
          break;
        }
        case "Escape": {
          this.cancel();
          break;
        }
        case "Meta": {
          this.metaKey = true;
          break;
        }
        case "Alt": {
          this.altKey = true;
          break;
        }
        case "Control": {
          this.ctrlKey = true;
          break;
        }
        case " ": {
          this.spaceKey = true;
          break;
        }
      }
      (_b = (_a = this.currentTool).onKeyDown) == null ? void 0 : _b.call(_a, key, info, e);
      return this;
    };
    this.onKeyUp = (key, info, e) => {
      var _a, _b;
      if (!info)
        return;
      switch (e.key) {
        case "/": {
          const { currentPoint, shiftKey, metaKey, altKey, ctrlKey, spaceKey } = this;
          this.onPointerUp({
            target: "canvas",
            pointerId: 0,
            origin: currentPoint,
            point: currentPoint,
            delta: [0, 0],
            pressure: 0.5,
            shiftKey,
            ctrlKey,
            metaKey,
            altKey,
            spaceKey
          }, {
            shiftKey,
            altKey,
            ctrlKey,
            pointerId: 0,
            clientX: currentPoint[0],
            clientY: currentPoint[1]
          });
          break;
        }
        case "Meta": {
          this.metaKey = false;
          break;
        }
        case "Alt": {
          this.altKey = false;
          break;
        }
        case "Control": {
          this.ctrlKey = false;
          break;
        }
        case " ": {
          this.spaceKey = false;
          break;
        }
      }
      (_b = (_a = this.currentTool).onKeyUp) == null ? void 0 : _b.call(_a, key, info, e);
    };
    this.onPinchStart = (info, e) => {
      var _a, _b;
      return (_b = (_a = this.currentTool).onPinchStart) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onPinchEnd = (info, e) => {
      var _a, _b;
      return (_b = (_a = this.currentTool).onPinchEnd) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onPinch = (info, e) => {
      var _a, _b;
      return (_b = (_a = this.currentTool).onPinch) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onPan = (info, e) => {
      if (this.appState.status === "pinching")
        return;
      const delta = import_vec36.Vec.div(info.delta, this.pageState.camera.zoom);
      const prev = this.pageState.camera.point;
      const next = import_vec36.Vec.sub(prev, delta);
      if (import_vec36.Vec.isEqual(next, prev))
        return;
      this.pan(delta);
      if (!info.spaceKey && !(e.buttons === 4)) {
        this.onPointerMove(info, e);
      }
    };
    this.onZoom = (info, e) => {
      if (this.state.appState.status !== TDStatus.Idle)
        return;
      const delta = e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? info.delta[2] / 500 : e.deltaMode === WheelEvent.DOM_DELTA_LINE ? info.delta[2] / 100 : info.delta[2] / 2;
      this.zoomBy(delta, this.centerPoint);
      this.onPointerMove(info, e);
    };
    this.updateInputs = (info) => {
      this.currentPoint = [...this.getPagePoint(info.point), info.pressure];
      this.shiftKey = info.shiftKey;
      this.altKey = info.altKey;
      this.ctrlKey = info.ctrlKey;
      this.metaKey = info.metaKey;
    };
    this.onPointerMove = (info, e) => {
      var _a, _b, _c, _d;
      this.previousPoint = this.currentPoint;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointerMove) == null ? void 0 : _b.call(_a, info, e);
      if (this.state.room) {
        const { users, userId } = this.state.room;
        (_d = (_c = this.callbacks).onChangePresence) == null ? void 0 : _d.call(_c, this, __spreadProps(__spreadValues({}, users[userId]), {
          point: this.getPagePoint(info.point)
        }));
      }
    };
    this.onPointerDown = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointerDown) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onPointerUp = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointerUp) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onPointCanvas = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointCanvas) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onDoubleClickCanvas = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickCanvas) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onRightPointCanvas = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointCanvas) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onDragCanvas = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragCanvas) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onReleaseCanvas = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseCanvas) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onPointShape = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointShape) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onReleaseShape = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseShape) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onDoubleClickShape = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickShape) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onRightPointShape = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointShape) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onDragShape = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragShape) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onHoverShape = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverShape) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onUnhoverShape = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverShape) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onPointBounds = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointBounds) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onDoubleClickBounds = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickBounds) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onRightPointBounds = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointBounds) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onDragBounds = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragBounds) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onHoverBounds = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverBounds) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onUnhoverBounds = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverBounds) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onReleaseBounds = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseBounds) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onPointBoundsHandle = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onDoubleClickBoundsHandle = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onRightPointBoundsHandle = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onDragBoundsHandle = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onHoverBoundsHandle = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onUnhoverBoundsHandle = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onReleaseBoundsHandle = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onPointHandle = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onDoubleClickHandle = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onRightPointHandle = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onDragHandle = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onHoverHandle = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onUnhoverHandle = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onReleaseHandle = (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseHandle) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onShapeChange = (shape) => {
      this.updateShapes(shape);
    };
    this.onShapeBlur = () => {
      var _a, _b;
      if (Date.now() - this.editingStartTime < 50)
        return;
      const { editingId } = this.pageState;
      const { isToolLocked } = this.getAppState();
      if (editingId) {
        const shape = this.getShape(editingId);
        this.setEditingId();
        if (shape.type === TDShapeType.Text) {
          if (shape.text.trim().length <= 0) {
            this.patchState(deleteShapes(this, [editingId]).after, "delete_empty_text");
          } else if (!isToolLocked) {
            this.select(editingId);
          }
        }
      }
      (_b = (_a = this.currentTool).onShapeBlur) == null ? void 0 : _b.call(_a);
    };
    this.onShapeClone = (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onShapeClone) == null ? void 0 : _b.call(_a, info, e);
    };
    this.onRenderCountChange = (ids) => {
      const appState = this.getAppState();
      if (appState.isEmptyCanvas && ids.length > 0) {
        this.patchState({
          appState: {
            isEmptyCanvas: false
          }
        }, "empty_canvas:false");
      } else if (!appState.isEmptyCanvas && ids.length <= 0) {
        this.patchState({
          appState: {
            isEmptyCanvas: true
          }
        }, "empty_canvas:true");
      }
    };
    this.onError = () => {
    };
    this.getShapeUtil = TLDR.getShapeUtil;
    this.callbacks = callbacks;
  }
  setStatus(status) {
    return this.patchState({
      appState: { status }
    }, `set_status:${status}`);
  }
  get history() {
    return this.stack.slice(0, this.pointer + 1);
  }
  set history(commands) {
    this.replaceHistory(commands);
  }
  get document() {
    return this.state.document;
  }
  get settings() {
    return this.state.settings;
  }
  get appState() {
    return this.state.appState;
  }
  get currentPageId() {
    return this.state.appState.currentPageId;
  }
  get page() {
    return this.state.document.pages[this.currentPageId];
  }
  get shapes() {
    return Object.values(this.page.shapes);
  }
  get bindings() {
    return Object.values(this.page.bindings);
  }
  get pageState() {
    return this.state.document.pageStates[this.currentPageId];
  }
  get selectedIds() {
    return this.pageState.selectedIds;
  }
  createTextShapeAtPoint(point, id) {
    const {
      shapes,
      appState: { currentPageId, currentStyle }
    } = this;
    const childIndex = shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === currentPageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
    const Text2 = shapeUtils[TDShapeType.Text];
    const newShape = Text2.create({
      id: id || import_core42.Utils.uniqueId(),
      parentId: currentPageId,
      childIndex,
      point,
      style: __spreadValues({}, currentStyle)
    });
    const bounds = Text2.getBounds(newShape);
    newShape.point = import_vec36.Vec.sub(newShape.point, [bounds.width / 2, bounds.height / 2]);
    this.createShapes(newShape);
    this.setEditingId(newShape.id);
    return this;
  }
  isSelected(id) {
    return this.selectedIds.includes(id);
  }
  get room() {
    return this.state.room;
  }
  get isLocal() {
    return this.state.room === void 0 || this.state.room.id === "local";
  }
  get status() {
    return this.appState.status;
  }
  get currentUser() {
    if (!this.state.room)
      return;
    return this.state.room.users[this.state.room.userId];
  }
  get centerPoint() {
    const { width, height } = this.rendererBounds;
    return import_vec36.Vec.toFixed([width / 2, height / 2]);
  }
  get currentGrid() {
    const { zoom } = this.pageState.camera;
    if (zoom < 0.15) {
      return GRID_SIZE * 16;
    } else if (zoom < 1) {
      return GRID_SIZE * 4;
    } else {
      return GRID_SIZE * 1;
    }
  }
};
var TldrawApp = _TldrawApp;
TldrawApp.version = 14;
TldrawApp.defaultDocument = {
  id: "doc",
  name: "New Document",
  version: 14,
  pages: {
    page: {
      id: "page",
      name: "Page 1",
      childIndex: 1,
      shapes: {},
      bindings: {}
    }
  },
  pageStates: {
    page: {
      id: "page",
      selectedIds: [],
      camera: {
        point: [0, 0],
        zoom: 1
      }
    }
  }
};
TldrawApp.defaultState = {
  settings: {
    isPenMode: false,
    isDarkMode: false,
    isZoomSnap: false,
    isFocusMode: false,
    isSnapping: false,
    isDebugMode: true,
    isReadonlyMode: false,
    nudgeDistanceLarge: 16,
    nudgeDistanceSmall: 1,
    showRotateHandles: true,
    showBindingHandles: true,
    showCloneHandles: false,
    showGrid: false
  },
  appState: {
    status: TDStatus.Idle,
    activeTool: "select",
    hoveredId: void 0,
    currentPageId: "page",
    currentStyle: defaultStyle,
    isToolLocked: false,
    isMenuOpen: false,
    isEmptyCanvas: false,
    snapLines: []
  },
  document: _TldrawApp.defaultDocument
};

// src/state/tools/index.ts
var tools = {
  select: SelectTool,
  erase: EraseTool,
  [TDShapeType.Text]: TextTool,
  [TDShapeType.Draw]: DrawTool,
  [TDShapeType.Ellipse]: EllipseTool,
  [TDShapeType.Rectangle]: RectangleTool,
  [TDShapeType.Line]: LineTool,
  [TDShapeType.Arrow]: ArrowTool,
  [TDShapeType.Sticky]: StickyTool
};

// src/hooks/useKeyboardShortcuts.tsx
var React9 = __toModule(require("react"));
var import_react_hotkeys_hook = __toModule(require("react-hotkeys-hook"));
function useKeyboardShortcuts(ref) {
  const app = useTldrawApp();
  const canHandleEvent = React9.useCallback((ignoreMenus = false) => {
    const elm = ref.current;
    if (ignoreMenus && app.isMenuOpen())
      return true;
    return elm && (document.activeElement === elm || elm.contains(document.activeElement));
  }, [ref]);
  (0, import_react_hotkeys_hook.useHotkeys)("v,1", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("select");
  }, [app, ref.current]);
  (0, import_react_hotkeys_hook.useHotkeys)("d,p,2", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool(TDShapeType.Draw);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("e,3", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("erase");
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("r,4", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool(TDShapeType.Rectangle);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("o,5", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool(TDShapeType.Ellipse);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("l,6", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool(TDShapeType.Line);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("a,7", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool(TDShapeType.Arrow);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("t,8", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool(TDShapeType.Text);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("s,9", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool(TDShapeType.Sticky);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift+d,\u2318+shift+d", (e) => {
    if (!canHandleEvent(true))
      return;
    app.toggleDarkMode();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+.,\u2318+.", () => {
    if (!canHandleEvent(true))
      return;
    app.toggleFocusMode();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift+g,\u2318+shift+g", () => {
    if (!canHandleEvent(true))
      return;
    app.toggleGrid();
  }, void 0, [app]);
  const { onNewProject, onOpenProject, onSaveProject, onSaveProjectAs } = useFileSystemHandlers();
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+n,\u2318+n", (e) => {
    if (!canHandleEvent())
      return;
    onNewProject(e);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+s,\u2318+s", (e) => {
    if (!canHandleEvent())
      return;
    onSaveProject(e);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift+s,\u2318+shift+s", (e) => {
    if (!canHandleEvent())
      return;
    onSaveProjectAs(e);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+o,\u2318+o", (e) => {
    if (!canHandleEvent())
      return;
    onOpenProject(e);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+z,ctrl+z", () => {
    if (!canHandleEvent(true))
      return;
    if (app.session) {
      app.cancelSession();
    } else {
      app.undo();
    }
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift-z,\u2318+shift+z", () => {
    if (!canHandleEvent(true))
      return;
    if (app.session) {
      app.cancelSession();
    } else {
      app.redo();
    }
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+u,ctrl+u", () => {
    if (!canHandleEvent())
      return;
    app.undoSelect();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift-u,\u2318+shift+u", () => {
    if (!canHandleEvent())
      return;
    app.redoSelect();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+=,\u2318+=,ctrl+num_subtract,\u2318+num_subtract", (e) => {
    if (!canHandleEvent(true))
      return;
    app.zoomIn();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+-,\u2318+-,ctrl+num_add,\u2318+num_add", (e) => {
    if (!canHandleEvent(true))
      return;
    app.zoomOut();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+0,ctrl+numpad_0,\u2318+numpad_0", () => {
    if (!canHandleEvent(true))
      return;
    app.resetZoom();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+1", () => {
    if (!canHandleEvent(true))
      return;
    app.zoomToFit();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+2", () => {
    if (!canHandleEvent(true))
      return;
    app.zoomToSelection();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+d,\u2318+d", (e) => {
    if (!canHandleEvent())
      return;
    app.duplicate();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+h", () => {
    if (!canHandleEvent(true))
      return;
    app.flipHorizontal();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+v", () => {
    if (!canHandleEvent(true))
      return;
    app.flipVertical();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("escape", () => {
    if (!canHandleEvent(true))
      return;
    app.cancel();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("backspace,del", () => {
    if (!canHandleEvent())
      return;
    app.delete();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+a,ctrl+a", () => {
    if (!canHandleEvent(true))
      return;
    app.selectAll();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("up", () => {
    if (!canHandleEvent())
      return;
    app.nudge([0, -1], false);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("right", () => {
    if (!canHandleEvent())
      return;
    app.nudge([1, 0], false);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("down", () => {
    if (!canHandleEvent())
      return;
    app.nudge([0, 1], false);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("left", () => {
    if (!canHandleEvent())
      return;
    app.nudge([-1, 0], false);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+up", () => {
    if (!canHandleEvent())
      return;
    app.nudge([0, -1], true);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+right", () => {
    if (!canHandleEvent())
      return;
    app.nudge([1, 0], true);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+down", () => {
    if (!canHandleEvent())
      return;
    app.nudge([0, 1], true);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+left", () => {
    if (!canHandleEvent())
      return;
    app.nudge([-1, 0], true);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+shift+l,ctrl+shift+l", () => {
    if (!canHandleEvent())
      return;
    app.toggleLocked();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+c,ctrl+c", () => {
    if (!canHandleEvent())
      return;
    app.copy();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+x,ctrl+x", () => {
    if (!canHandleEvent())
      return;
    app.cut();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+v,ctrl+v", () => {
    if (!canHandleEvent())
      return;
    app.paste();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+g,ctrl+g", (e) => {
    if (!canHandleEvent())
      return;
    app.group();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+shift+g,ctrl+shift+g", (e) => {
    if (!canHandleEvent())
      return;
    app.ungroup();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("[", () => {
    if (!canHandleEvent(true))
      return;
    app.moveBackward();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("]", () => {
    if (!canHandleEvent(true))
      return;
    app.moveForward();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+[", () => {
    if (!canHandleEvent(true))
      return;
    app.moveToBack();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+]", () => {
    if (!canHandleEvent(true))
      return;
    app.moveToFront();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift+backspace,\u2318+shift+backspace", (e) => {
    if (!canHandleEvent())
      return;
    if (app.settings.isDebugMode) {
      app.resetDocument();
    }
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("alt+command+l,alt+ctrl+l", (e) => {
    if (!canHandleEvent(true))
      return;
    app.style({ textAlign: AlignStyle.Start });
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("alt+command+t,alt+ctrl+t", (e) => {
    if (!canHandleEvent(true))
      return;
    app.style({ textAlign: AlignStyle.Middle });
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("alt+command+r,alt+ctrl+r", (e) => {
    if (!canHandleEvent(true))
      return;
    app.style({ textAlign: AlignStyle.End });
    e.preventDefault();
  }, void 0, [app]);
}

// src/hooks/useTldrawApp.tsx
var React10 = __toModule(require("react"));
var TldrawContext = React10.createContext({});
function useTldrawApp() {
  const context = React10.useContext(TldrawContext);
  return context;
}

// src/hooks/useStylesheet.ts
var React11 = __toModule(require("react"));
var styles = new Map();
var UID = `Tldraw-fonts`;
var CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Source+Serif+Pro&display=swap');
`;
function useStylesheet() {
  React11.useLayoutEffect(() => {
    if (styles.get(UID))
      return;
    const style = document.createElement("style");
    style.innerHTML = CSS;
    style.setAttribute("id", UID);
    document.head.appendChild(style);
    styles.set(UID, style);
    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
        styles.delete(UID);
      }
    };
  }, [UID, CSS]);
}

// src/hooks/useFileSystemHandlers.ts
var React12 = __toModule(require("react"));
function useFileSystemHandlers() {
  const app = useTldrawApp();
  const onNewProject = React12.useCallback((e) => __async(this, null, function* () {
    var _a, _b;
    if (e && app.callbacks.onOpenProject)
      e.preventDefault();
    (_b = (_a = app.callbacks).onNewProject) == null ? void 0 : _b.call(_a, app);
  }), [app]);
  const onSaveProject = React12.useCallback((e) => {
    var _a, _b;
    if (e && app.callbacks.onOpenProject)
      e.preventDefault();
    (_b = (_a = app.callbacks).onSaveProject) == null ? void 0 : _b.call(_a, app);
  }, [app]);
  const onSaveProjectAs = React12.useCallback((e) => {
    var _a, _b;
    if (e && app.callbacks.onOpenProject)
      e.preventDefault();
    (_b = (_a = app.callbacks).onSaveProjectAs) == null ? void 0 : _b.call(_a, app);
  }, [app]);
  const onOpenProject = React12.useCallback((e) => __async(this, null, function* () {
    var _a, _b;
    if (e && app.callbacks.onOpenProject)
      e.preventDefault();
    (_b = (_a = app.callbacks).onOpenProject) == null ? void 0 : _b.call(_a, app);
  }), [app]);
  return {
    onNewProject,
    onSaveProject,
    onSaveProjectAs,
    onOpenProject
  };
}

// src/hooks/useFileSystem.ts
var React13 = __toModule(require("react"));
function useFileSystem() {
  const promptSaveBeforeChange = React13.useCallback((app) => __async(this, null, function* () {
    if (app.isDirty) {
      if (app.fileSystemHandle) {
        if (window.confirm("Do you want to save changes to your current project?")) {
          yield app.saveProject();
        }
      } else {
        if (window.confirm("Do you want to save your current project?")) {
          yield app.saveProject();
        }
      }
    }
  }), []);
  const onNewProject = React13.useCallback((app) => __async(this, null, function* () {
    if (window.confirm("Do you want to create a new project?")) {
      yield promptSaveBeforeChange(app);
      app.newProject();
    }
  }), [promptSaveBeforeChange]);
  const onSaveProject = React13.useCallback((app) => {
    app.saveProject();
  }, []);
  const onSaveProjectAs = React13.useCallback((app) => {
    app.saveProjectAs();
  }, []);
  const onOpenProject = React13.useCallback((app) => __async(this, null, function* () {
    yield promptSaveBeforeChange(app);
    app.openProject();
  }), [promptSaveBeforeChange]);
  return {
    onNewProject,
    onSaveProject,
    onSaveProjectAs,
    onOpenProject
  };
}

// src/components/ToolsPanel/ToolsPanel.tsx
var React47 = __toModule(require("react"));

// src/components/ToolsPanel/StatusBar.tsx
var React14 = __toModule(require("react"));

// src/components/breakpoints.tsx
var breakpoints = {
  "@initial": "mobile",
  "@micro": "micro",
  "@sm": "small",
  "@md": "medium",
  "@lg": "large"
};

// src/components/ToolsPanel/StatusBar.tsx
var statusSelector = (s) => s.appState.status;
var activeToolSelector = (s) => s.appState.activeTool;
function StatusBar() {
  const app = useTldrawApp();
  const status = app.useStore(statusSelector);
  const activeTool = app.useStore(activeToolSelector);
  return /* @__PURE__ */ React14.createElement(StyledStatusBar, {
    bp: breakpoints
  }, /* @__PURE__ */ React14.createElement(StyledSection, null, activeTool, " | ", status));
}
var StyledStatusBar = styled("div", {
  height: 40,
  userSelect: "none",
  borderTop: "1px solid $panelContrast",
  gridArea: "status",
  display: "flex",
  color: "$text",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "$panel",
  gap: 8,
  fontFamily: "$ui",
  fontSize: "$0",
  padding: "0 16px",
  variants: {
    bp: {
      small: {
        fontSize: "$1"
      }
    }
  }
});
var StyledSection = styled("div", {
  whiteSpace: "nowrap",
  overflow: "hidden"
});

// src/components/ToolsPanel/BackToContent.tsx
var React17 = __toModule(require("react"));

// src/components/Primitives/RowButton/RowButton.tsx
var import_react_dropdown_menu = __toModule(require("@radix-ui/react-dropdown-menu"));
var import_react_icons = __toModule(require("@radix-ui/react-icons"));
var React16 = __toModule(require("react"));

// src/components/Primitives/Kbd/Kbd.tsx
var React15 = __toModule(require("react"));
var import_core43 = __toModule(require("@tldraw/core"));
var commandKey = () => import_core43.Utils.isDarwin() ? "\u2318" : "Ctrl";
function Kbd({
  variant,
  children
}) {
  return /* @__PURE__ */ React15.createElement(StyledKbd, {
    variant
  }, children.split("").map((k, i) => {
    return /* @__PURE__ */ React15.createElement("span", {
      key: i
    }, k.replace("#", commandKey()));
  }));
}
var StyledKbd = styled("kbd", {
  marginLeft: "$3",
  textShadow: "$2",
  textAlign: "center",
  fontSize: "$0",
  fontFamily: "$ui",
  color: "$text",
  background: "none",
  fontWeight: 400,
  gap: "$1",
  display: "flex",
  alignItems: "center",
  "& > span": {
    padding: "$0",
    borderRadius: "$0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  variants: {
    variant: {
      tooltip: {
        "& > span": {
          color: "$tooltipContrast",
          background: "$overlayContrast",
          boxShadow: "$key",
          width: "20px",
          height: "20px"
        }
      },
      menu: {}
    }
  }
});

// src/components/Primitives/SmallIcon/SmallIcon.tsx
var SmallIcon = styled("div", {
  height: "100%",
  borderRadius: "4px",
  marginRight: "1px",
  width: "fit-content",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  cursor: "pointer",
  color: "currentColor",
  "& svg": {
    height: 16,
    width: 16,
    strokeWidth: 1
  },
  "& > *": {
    gridRow: 1,
    gridColumn: 1
  }
});

// src/components/Primitives/RowButton/RowButton.tsx
var RowButton = React16.forwardRef((_a, ref) => {
  var _b = _a, {
    onClick,
    isActive = false,
    isWarning = false,
    hasIndicator = false,
    hasArrow = false,
    disabled = false,
    isSponsor = false,
    variant,
    kbd,
    children
  } = _b, rest = __objRest(_b, [
    "onClick",
    "isActive",
    "isWarning",
    "hasIndicator",
    "hasArrow",
    "disabled",
    "isSponsor",
    "variant",
    "kbd",
    "children"
  ]);
  return /* @__PURE__ */ React16.createElement(StyledRowButton, __spreadValues({
    ref,
    bp: breakpoints,
    isWarning,
    isActive,
    isSponsor,
    disabled,
    onClick,
    variant
  }, rest), /* @__PURE__ */ React16.createElement(StyledRowButtonInner, null, children, kbd ? /* @__PURE__ */ React16.createElement(Kbd, {
    variant: "menu"
  }, kbd) : void 0, hasIndicator && /* @__PURE__ */ React16.createElement(import_react_dropdown_menu.ItemIndicator, {
    dir: "ltr"
  }, /* @__PURE__ */ React16.createElement(SmallIcon, null, /* @__PURE__ */ React16.createElement(import_react_icons.CheckIcon, null))), hasArrow && /* @__PURE__ */ React16.createElement(SmallIcon, null, /* @__PURE__ */ React16.createElement(import_react_icons.ChevronRightIcon, null))));
});
var StyledRowButtonInner = styled("div", {
  height: "100%",
  width: "100%",
  backgroundColor: "$panel",
  borderRadius: "$2",
  display: "flex",
  gap: "$1",
  flexDirection: "row",
  alignItems: "center",
  padding: "0 $3",
  justifyContent: "space-between",
  border: "1px solid transparent",
  "& svg": {
    position: "relative",
    stroke: "$overlay",
    strokeWidth: 1,
    zIndex: 1
  }
});
var StyledRowButton = styled("button", {
  position: "relative",
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  height: "32px",
  outline: "none",
  color: "$text",
  fontFamily: "$ui",
  fontWeight: 400,
  fontSize: "$1",
  borderRadius: 4,
  userSelect: "none",
  margin: 0,
  padding: "0 0",
  "&[data-disabled]": {
    opacity: 0.3
  },
  "&:disabled": {
    opacity: 0.3
  },
  [`&:focus:not(:disabled) ${StyledRowButtonInner}`]: {
    backgroundColor: "$hover"
  },
  "& a": {
    textDecoration: "none",
    color: "$text"
  },
  variants: {
    bp: {
      mobile: {},
      small: {}
    },
    variant: {
      styleMenu: {
        margin: "$1 0 $1 0"
      },
      wide: {
        gridColumn: "1 / span 4"
      }
    },
    size: {
      icon: {
        padding: "4px ",
        width: "auto"
      }
    },
    isSponsor: {
      true: {
        color: "#eb30a2"
      },
      false: {}
    },
    isWarning: {
      true: {
        color: "$warn"
      }
    },
    isActive: {
      true: {
        backgroundColor: "$hover"
      },
      false: {}
    }
  },
  compoundVariants: [
    {
      isActive: false,
      isSponsor: true,
      bp: "small",
      css: {
        [`&:hover:not(:disabled) ${StyledRowButtonInner}`]: {
          backgroundColor: "$sponsorContrast",
          border: "1px solid $panel",
          '& *[data-shy="true"]': {
            opacity: 1
          }
        }
      }
    },
    {
      isActive: false,
      isSponsor: false,
      bp: "small",
      css: {
        [`&:hover:not(:disabled) ${StyledRowButtonInner}`]: {
          backgroundColor: "$hover",
          border: "1px solid $panel",
          '& *[data-shy="true"]': {
            opacity: 1
          }
        }
      }
    }
  ]
});

// src/components/Primitives/MenuContent/MenuContent.ts
var MenuContent = styled("div", {
  position: "relative",
  overflow: "hidden",
  userSelect: "none",
  display: "flex",
  flexDirection: "column",
  zIndex: 180,
  minWidth: 180,
  pointerEvents: "all",
  backgroundColor: "$panel",
  boxShadow: "$panel",
  padding: "$2 $2",
  borderRadius: "$3",
  font: "$ui"
});

// src/components/ToolsPanel/BackToContent.tsx
var isEmptyCanvasSelector = (s) => Object.keys(s.document.pages[s.appState.currentPageId].shapes).length > 0 && s.appState.isEmptyCanvas;
var BackToContent = React17.memo(function BackToContent2() {
  const app = useTldrawApp();
  const isEmptyCanvas = app.useStore(isEmptyCanvasSelector);
  if (!isEmptyCanvas)
    return null;
  return /* @__PURE__ */ React17.createElement(BackToContentContainer, null, /* @__PURE__ */ React17.createElement(RowButton, {
    onClick: app.zoomToContent
  }, "Back to content"));
});
var BackToContentContainer = styled(MenuContent, {
  pointerEvents: "all",
  width: "fit-content",
  minWidth: 0,
  gridRow: 1,
  flexGrow: 2,
  display: "block"
});

// src/components/ToolsPanel/PrimaryTools.tsx
var React38 = __toModule(require("react"));
var import_react_icons3 = __toModule(require("@radix-ui/react-icons"));

// src/components/Primitives/ToolButton/ToolButton.tsx
var React19 = __toModule(require("react"));

// src/components/Primitives/Tooltip/Tooltip.tsx
var RadixTooltip = __toModule(require("@radix-ui/react-tooltip"));
var React18 = __toModule(require("react"));
function Tooltip({
  children,
  label,
  kbd: kbdProp,
  side = "top"
}) {
  return /* @__PURE__ */ React18.createElement(RadixTooltip.Root, null, /* @__PURE__ */ React18.createElement(RadixTooltip.Trigger, {
    dir: "ltr",
    asChild: true
  }, /* @__PURE__ */ React18.createElement("span", null, children)), /* @__PURE__ */ React18.createElement(StyledContent, {
    dir: "ltr",
    side,
    sideOffset: 8
  }, label, kbdProp ? /* @__PURE__ */ React18.createElement(Kbd, {
    variant: "tooltip"
  }, kbdProp) : null, /* @__PURE__ */ React18.createElement(StyledArrow, null)));
}
var StyledContent = styled(RadixTooltip.Content, {
  borderRadius: 3,
  padding: "$3 $3 $3 $3",
  fontSize: "$1",
  backgroundColor: "$tooltip",
  color: "$tooltipContrast",
  boxShadow: "$3",
  display: "flex",
  alignItems: "center",
  fontFamily: "$ui",
  userSelect: "none"
});
var StyledArrow = styled(RadixTooltip.Arrow, {
  fill: "$tooltip",
  margin: "0 8px"
});

// src/components/Primitives/ToolButton/ToolButton.tsx
var ToolButton = React19.forwardRef((_a, ref) => {
  var _b = _a, {
    onSelect,
    onClick,
    onDoubleClick,
    variant,
    children,
    isToolLocked = false,
    disabled = false,
    isActive = false,
    isSponsor = false
  } = _b, rest = __objRest(_b, [
    "onSelect",
    "onClick",
    "onDoubleClick",
    "variant",
    "children",
    "isToolLocked",
    "disabled",
    "isActive",
    "isSponsor"
  ]);
  return /* @__PURE__ */ React19.createElement(StyledToolButton, __spreadValues({
    ref,
    isActive,
    isSponsor,
    variant,
    onClick,
    disabled,
    onPointerDown: onSelect,
    onDoubleClick,
    bp: breakpoints
  }, rest), /* @__PURE__ */ React19.createElement(StyledToolButtonInner, null, children), isToolLocked && /* @__PURE__ */ React19.createElement(ToolLockIndicator, null));
});
function ToolButtonWithTooltip(_a) {
  var _b = _a, {
    label,
    kbd,
    isLocked
  } = _b, rest = __objRest(_b, [
    "label",
    "kbd",
    "isLocked"
  ]);
  const app = useTldrawApp();
  const handleDoubleClick = React19.useCallback(() => {
    app.toggleToolLock();
  }, []);
  return /* @__PURE__ */ React19.createElement(Tooltip, {
    label: label[0].toUpperCase() + label.slice(1),
    kbd
  }, /* @__PURE__ */ React19.createElement(ToolButton, __spreadProps(__spreadValues({}, rest), {
    variant: "primary",
    isToolLocked: isLocked && rest.isActive,
    onDoubleClick: handleDoubleClick
  })));
}
var StyledToolButtonInner = styled("div", {
  position: "relative",
  height: "100%",
  width: "100%",
  backgroundColor: "$panel",
  borderRadius: "$2",
  margin: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$ui",
  color: "inherit",
  userSelect: "none",
  boxSizing: "border-box",
  border: "1px solid transparent"
});
var StyledToolButton = styled("button", {
  position: "relative",
  color: "$text",
  fontSize: "$0",
  background: "none",
  margin: "0",
  padding: "$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  cursor: "pointer",
  pointerEvents: "all",
  border: "none",
  height: "40px",
  width: "40px",
  [`&:disabled ${StyledToolButtonInner}`]: {
    opacity: 0.618
  },
  variants: {
    variant: {
      primary: {
        marginTop: "0"
      },
      icon: {
        [`& ${StyledToolButtonInner}`]: {
          display: "grid",
          "& > *": {
            gridRow: 1,
            gridColumn: 1
          }
        }
      },
      text: {
        width: "auto",
        [`& ${StyledToolButtonInner}`]: {
          fontSize: "$1",
          padding: "0 $3",
          gap: "$3"
        }
      },
      circle: {
        padding: "$2",
        [`& ${StyledToolButtonInner}`]: {
          border: "1px solid $panelContrast",
          borderRadius: "100%",
          boxShadow: "$panel"
        },
        [`& ${StyledToolButtonInner} > svg`]: {
          width: 14,
          height: 14
        }
      }
    },
    isSponsor: {
      true: {
        [`${StyledToolButtonInner}`]: {
          backgroundColor: "$sponsorContrast"
        }
      }
    },
    isActive: {
      true: {},
      false: {}
    },
    bp: {
      mobile: {},
      small: {}
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      bp: "mobile",
      css: {
        height: "40px",
        width: "40px",
        [`& ${StyledToolButtonInner} > svg`]: {
          width: 16,
          height: 16
        }
      }
    },
    {
      variant: "primary",
      bp: "small",
      css: {
        height: "44px",
        width: "44px",
        [`& ${StyledToolButtonInner} > svg`]: {
          width: 20,
          height: 20
        }
      }
    },
    {
      isActive: true,
      isSponsor: false,
      css: {
        [`${StyledToolButtonInner}`]: {
          backgroundColor: "$selected",
          color: "$selectedContrast"
        }
      }
    },
    {
      isActive: false,
      isSponsor: false,
      bp: "small",
      css: {
        [`&:hover:not(:disabled) ${StyledToolButtonInner}`]: {
          backgroundColor: "$hover",
          border: "1px solid $panel"
        },
        [`&:focus:not(:disabled) ${StyledToolButtonInner}`]: {
          backgroundColor: "$hover"
        }
      }
    }
  ]
});
var ToolLockIndicator = styled("div", {
  position: "absolute",
  width: 10,
  height: 10,
  backgroundColor: "$selected",
  borderRadius: "100%",
  bottom: -2,
  border: "2px solid $panel",
  zIndex: 100
});

// src/components/Primitives/Panel/Panel.tsx
var Panel = styled("div", {
  backgroundColor: "$panel",
  display: "flex",
  flexDirection: "row",
  boxShadow: "$panel",
  padding: "$2",
  border: "1px solid $panelContrast",
  gap: 0,
  variants: {
    side: {
      center: {
        borderRadius: "$4"
      },
      left: {
        padding: 0,
        borderTop: 0,
        borderLeft: 0,
        borderTopRightRadius: "$1",
        borderBottomRightRadius: "$3",
        borderBottomLeftRadius: "$1"
      },
      right: {
        padding: 0,
        borderTop: 0,
        borderRight: 0,
        borderTopLeftRadius: "$1",
        borderBottomLeftRadius: "$3",
        borderBottomRightRadius: "$1"
      }
    }
  }
});

// src/components/ToolsPanel/ShapesMenu.tsx
var React37 = __toModule(require("react"));
var DropdownMenu = __toModule(require("@radix-ui/react-dropdown-menu"));
var import_react_icons2 = __toModule(require("@radix-ui/react-icons"));

// src/components/Primitives/icons/BoxIcon.tsx
var React20 = __toModule(require("react"));

// src/components/Primitives/icons/CircleIcon.tsx
var React21 = __toModule(require("react"));
function CircleIcon(props) {
  const _a = props, { size = 16 } = _a, rest = __objRest(_a, ["size"]);
  return /* @__PURE__ */ React21.createElement("svg", __spreadValues({
    width: 24,
    height: 24
  }, rest), /* @__PURE__ */ React21.createElement("circle", {
    cx: 12,
    cy: 12,
    r: size / 2
  }));
}

// src/components/Primitives/icons/DashDashedIcon.tsx
var React22 = __toModule(require("react"));
function DashDashedIcon() {
  return /* @__PURE__ */ React22.createElement("svg", {
    width: "24",
    height: "24",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React22.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 8,
    fill: "none",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeDasharray: 50.26548 * 0.1
  }));
}

// src/components/Primitives/icons/DashDottedIcon.tsx
var React23 = __toModule(require("react"));
var dottedDasharray = `${50.26548 * 0.025} ${50.26548 * 0.1}`;
function DashDottedIcon() {
  return /* @__PURE__ */ React23.createElement("svg", {
    width: "24",
    height: "24",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React23.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 8,
    fill: "none",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeDasharray: dottedDasharray
  }));
}

// src/components/Primitives/icons/DashDrawIcon.tsx
var React24 = __toModule(require("react"));
function DashDrawIcon() {
  return /* @__PURE__ */ React24.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "1 1.5 21 22",
    fill: "currentColor",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React24.createElement("path", {
    d: "M10.0162 19.2768C10.0162 19.2768 9.90679 19.2517 9.6879 19.2017C9.46275 19.1454 9.12816 19.0422 8.68413 18.8921C8.23384 18.7358 7.81482 18.545 7.42707 18.3199C7.03307 18.101 6.62343 17.7883 6.19816 17.3818C5.77289 16.9753 5.33511 16.3718 4.88482 15.5713C4.43453 14.7645 4.1531 13.8545 4.04053 12.8414C3.92795 11.822 4.04991 10.8464 4.40639 9.91451C4.76286 8.98266 5.39452 8.10084 6.30135 7.26906C7.21444 6.44353 8.29325 5.83377 9.5378 5.43976C10.7823 5.05202 11.833 4.92068 12.6898 5.04576C13.5466 5.16459 14.3878 5.43664 15.2133 5.86191C16.0388 6.28718 16.7768 6.8688 17.4272 7.60678C18.0714 8.34475 18.5404 9.21406 18.8344 10.2147C19.1283 11.2153 19.1721 12.2598 18.9657 13.348C18.7593 14.4299 18.2872 15.4337 17.5492 16.3593C16.8112 17.2849 15.9263 18.0072 14.8944 18.5263C13.8624 19.0391 12.9056 19.3174 12.0238 19.3612C11.142 19.405 10.2101 19.2705 9.22823 18.9578C8.24635 18.6451 7.35828 18.151 6.56402 17.4756C5.77601 16.8002 6.08871 16.8658 7.50212 17.6726C8.90927 18.4731 10.1444 18.8484 11.2076 18.7983C12.2645 18.7545 13.2965 18.4825 14.3034 17.9822C15.3102 17.4819 16.1264 16.8221 16.7518 16.0028C17.3772 15.1835 17.7681 14.3111 17.9244 13.3855C18.0808 12.4599 18.0401 11.5781 17.8025 10.74C17.5586 9.902 17.1739 9.15464 16.6486 8.49797C16.1233 7.8413 15.2289 7.27844 13.9656 6.80939C12.7086 6.34034 11.4203 6.20901 10.1007 6.41539C8.78732 6.61552 7.69599 7.06893 6.82669 7.77564C5.96363 8.48859 5.34761 9.26409 4.97863 10.1021C4.60964 10.9402 4.45329 11.8376 4.50958 12.7945C4.56586 13.7513 4.79101 14.6238 5.18501 15.4118C5.57276 16.1998 5.96363 16.8002 6.35764 17.2129C6.75164 17.6257 7.13313 17.9509 7.50212 18.1886C7.87736 18.4325 8.28074 18.642 8.71227 18.8171C9.15005 18.9922 9.47839 19.111 9.69728 19.1736C9.91617 19.2361 10.0256 19.2705 10.0256 19.2768H10.0162Z",
    strokeWidth: "2"
  }));
}

// src/components/Primitives/icons/DashSolidIcon.tsx
var React25 = __toModule(require("react"));
function DashSolidIcon() {
  return /* @__PURE__ */ React25.createElement("svg", {
    width: "24",
    height: "24",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React25.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 8,
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round"
  }));
}

// src/components/Primitives/icons/IsFilledIcon.tsx
var React26 = __toModule(require("react"));

// src/components/Primitives/icons/RedoIcon.tsx
var React27 = __toModule(require("react"));
function RedoIcon(props) {
  return /* @__PURE__ */ React27.createElement("svg", __spreadValues({
    width: 32,
    height: 32,
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React27.createElement("path", {
    d: "M4.32978 8.5081C4.32978 10.1923 5.70009 11.5625 7.38418 11.5625H8.46539C8.64456 11.5625 8.78975 11.4173 8.78975 11.2382V11.13C8.78975 10.9508 8.64457 10.8057 8.46539 10.8057H7.38418C6.11736 10.8057 5.08662 9.77492 5.08662 8.5081C5.08662 7.24128 6.11736 6.21054 7.38418 6.21054H9.37894L8.00515 7.58433C7.8576 7.73183 7.8576 7.97195 8.00515 8.11944C8.14833 8.26251 8.39751 8.2623 8.54036 8.11944L10.56 6.09971C10.6315 6.02824 10.6709 5.93321 10.6709 5.8321C10.6709 5.73106 10.6315 5.63598 10.56 5.56454L8.54025 3.54472C8.3974 3.40176 8.14801 3.40176 8.00513 3.54472C7.85758 3.69218 7.85758 3.93234 8.00513 4.07979L9.37892 5.45368H7.38418C5.70009 5.45368 4.32978 6.82393 4.32978 8.5081Z"
  }));
}

// src/components/Primitives/icons/TrashIcon.tsx
var React28 = __toModule(require("react"));
function TrashIcon(props) {
  return /* @__PURE__ */ React28.createElement("svg", __spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React28.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 4.656a.5.5 0 01.5-.5h9.7a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5z"
  }), /* @__PURE__ */ React28.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.272 3a.578.578 0 00-.578.578v.578h3.311v-.578A.578.578 0 008.428 3H6.272zm3.733 1.156v-.578A1.578 1.578 0 008.428 2H6.272a1.578 1.578 0 00-1.578 1.578v.578H3.578a.5.5 0 00-.5.5V12.2a1.578 1.578 0 001.577 1.578h5.39a1.578 1.578 0 001.577-1.578V4.656a.5.5 0 00-.5-.5h-1.117zm-5.927 1V12.2a.578.578 0 00.577.578h5.39a.578.578 0 00.577-.578V5.156H4.078z"
  }), /* @__PURE__ */ React28.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.272 6.85a.5.5 0 01.5.5v3.233a.5.5 0 11-1 0V7.35a.5.5 0 01.5-.5zM8.428 6.85a.5.5 0 01.5.5v3.233a.5.5 0 11-1 0V7.35a.5.5 0 01.5-.5z"
  }));
}

// src/components/Primitives/icons/UndoIcon.tsx
var React29 = __toModule(require("react"));
function UndoIcon(props) {
  return /* @__PURE__ */ React29.createElement("svg", __spreadValues({
    width: 32,
    height: 32,
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React29.createElement("path", {
    d: "M10.6707 8.5081C10.6707 10.1923 9.3004 11.5625 7.61631 11.5625H6.5351C6.35593 11.5625 6.21074 11.4173 6.21074 11.2382V11.13C6.21074 10.9508 6.35591 10.8057 6.5351 10.8057H7.61631C8.88313 10.8057 9.91387 9.77492 9.91387 8.5081C9.91387 7.24128 8.88313 6.21054 7.61631 6.21054H5.62155L6.99534 7.58433C7.14289 7.73183 7.14289 7.97195 6.99534 8.11944C6.85216 8.26251 6.60298 8.2623 6.46013 8.11944L4.44045 6.09971C4.36898 6.02824 4.32959 5.93321 4.32959 5.8321C4.32959 5.73106 4.36898 5.63598 4.44045 5.56454L6.46024 3.54472C6.60309 3.40176 6.85248 3.40176 6.99535 3.54472C7.14291 3.69218 7.14291 3.93234 6.99535 4.07979L5.62156 5.45368H7.61631C9.3004 5.45368 10.6707 6.82393 10.6707 8.5081Z"
  }));
}

// src/components/Primitives/icons/SizeSmallIcon.tsx
var React30 = __toModule(require("react"));
function SizeSmallIcon(props) {
  return /* @__PURE__ */ React30.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    viewBox: "-2 -2 28 28",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React30.createElement("path", {
    d: "M12.4239 4.62C13.3572 4.62 14.1572 4.73333 14.8239 4.96C15.4906 5.17333 15.9772 5.43333 16.2839 5.74C16.3639 5.82 16.4039 5.94 16.4039 6.1V8.86H14.0639C13.9172 8.86 13.8439 8.78666 13.8439 8.64V7.26C13.4306 7.12666 12.9572 7.06 12.4239 7.06C11.6506 7.06 11.0639 7.18 10.6639 7.42C10.2639 7.66 10.0639 8.04666 10.0639 8.58V9C10.0639 9.38666 10.1639 9.69333 10.3639 9.92C10.5772 10.1333 11.0306 10.3467 11.7239 10.56L13.6439 11.14C14.4706 11.38 15.1172 11.66 15.5839 11.98C16.0506 12.3 16.3772 12.68 16.5639 13.12C16.7639 13.5467 16.8639 14.0733 16.8639 14.7V15.62C16.8639 16.7933 16.4039 17.7133 15.4839 18.38C14.5639 19.0467 13.2839 19.38 11.6439 19.38C10.6706 19.38 9.79723 19.2867 9.0239 19.1C8.2639 18.9133 7.71056 18.6533 7.3639 18.32C7.3239 18.28 7.29056 18.24 7.2639 18.2C7.25056 18.1467 7.2439 18.06 7.2439 17.94V15.74H7.6239C8.2239 16.1533 8.85056 16.4533 9.5039 16.64C10.1572 16.8267 10.9306 16.92 11.8239 16.92C12.6506 16.92 13.2506 16.7867 13.6239 16.52C14.0106 16.2533 14.2039 15.9333 14.2039 15.56V14.88C14.2039 14.6667 14.1639 14.48 14.0839 14.32C14.0172 14.16 13.8706 14.0133 13.6439 13.88C13.4172 13.7467 13.0572 13.6067 12.5639 13.46L10.6639 12.88C9.7839 12.6133 9.11056 12.3 8.6439 11.94C8.17723 11.58 7.85056 11.18 7.6639 10.74C7.49056 10.3 7.4039 9.83333 7.4039 9.34V8.38C7.4039 7.64666 7.61056 7 8.0239 6.44C8.43723 5.88 9.01723 5.44 9.7639 5.12C10.5239 4.78666 11.4106 4.62 12.4239 4.62Z"
  }));
}

// src/components/Primitives/icons/SizeMediumIcon.tsx
var React31 = __toModule(require("react"));
function SizeMediumIcon(props) {
  return /* @__PURE__ */ React31.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    viewBox: "-2 -2 28 28",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React31.createElement("path", {
    d: "M8.16191 19H5.68191C5.53525 19 5.46191 18.9267 5.46191 18.78V5H8.76191C8.88191 5 8.97525 5.03333 9.04191 5.1C9.10858 5.15333 9.17525 5.27333 9.24191 5.46C9.72191 6.59333 10.1686 7.7 10.5819 8.78C11.0086 9.84667 11.4352 10.98 11.8619 12.18H12.1619C12.6019 10.9667 13.0352 9.79333 13.4619 8.66C13.8886 7.52667 14.3552 6.30667 14.8619 5H18.3219C18.4686 5 18.5419 5.07333 18.5419 5.22V19H16.0619C15.9152 19 15.8419 18.9267 15.8419 18.78V16.26C15.8419 15.5267 15.8486 14.8133 15.8619 14.12C15.8886 13.4267 15.9286 12.6867 15.9819 11.9C16.0486 11.1 16.1419 10.1933 16.2619 9.18H15.9019C15.4352 10.3533 14.9486 11.5667 14.4419 12.82C13.9486 14.06 13.4819 15.2333 13.0419 16.34H11.1019C11.0619 16.34 11.0152 16.3333 10.9619 16.32C10.9219 16.2933 10.8886 16.2467 10.8619 16.18C10.4619 15.18 10.0086 14.06 9.50191 12.82C9.00858 11.58 8.53525 10.3667 8.08191 9.18H7.70191C7.83525 10.18 7.93525 11.0733 8.00191 11.86C8.06858 12.6467 8.10858 13.3933 8.12191 14.1C8.14858 14.8067 8.16191 15.5267 8.16191 16.26V19Z"
  }));
}

// src/components/Primitives/icons/SizeLargeIcon.tsx
var React32 = __toModule(require("react"));
function SizeLargeIcon(props) {
  return /* @__PURE__ */ React32.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    viewBox: "-2 -2 28 28",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React32.createElement("path", {
    d: "M7.68191 19C7.53525 19 7.46191 18.9267 7.46191 18.78V5H10.1219C10.2686 5 10.3419 5.07333 10.3419 5.22V16.56H13.4419V15.02H15.7619C15.9086 15.02 15.9819 15.0933 15.9819 15.24V19H7.68191Z"
  }));
}

// src/components/Primitives/icons/EraserIcon.tsx
var React33 = __toModule(require("react"));
function EraserIcon() {
  return /* @__PURE__ */ React33.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M1.72838 9.33987L8.84935 2.34732C9.23874 1.96494 9.86279 1.96539 10.2516 2.34831L13.5636 5.60975C13.9655 6.00555 13.9607 6.65526 13.553 7.04507L8.13212 12.2278C7.94604 12.4057 7.69851 12.505 7.44107 12.505L6.06722 12.505L3.83772 12.505C3.5673 12.505 3.30842 12.3954 3.12009 12.2014L1.7114 10.7498C1.32837 10.3551 1.33596 9.72521 1.72838 9.33987Z",
    stroke: "currentColor"
  }), /* @__PURE__ */ React33.createElement("line", {
    x1: "6.01807",
    y1: "12.5",
    x2: "10.7959",
    y2: "12.5",
    stroke: "currentColor",
    strokeLinecap: "round"
  }), /* @__PURE__ */ React33.createElement("line", {
    x1: "5.50834",
    y1: "5.74606",
    x2: "10.1984",
    y2: "10.4361",
    stroke: "currentColor"
  }));
}

// src/components/Primitives/icons/MultiplayerIcon.tsx
var React34 = __toModule(require("react"));

// src/components/Primitives/icons/DiscordIcon.tsx
var React35 = __toModule(require("react"));
function DiscordIcon() {
  return /* @__PURE__ */ React35.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
  }));
}

// src/components/Primitives/icons/LineIcon.tsx
var React36 = __toModule(require("react"));
function LineIcon() {
  return /* @__PURE__ */ React36.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React36.createElement("path", {
    d: "M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645C12.0488 3.34171 12.0488 3.65829 11.8536 3.85355L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
  }));
}

// src/components/ToolsPanel/ShapesMenu.tsx
var shapeShapes = [TDShapeType.Rectangle, TDShapeType.Ellipse, TDShapeType.Line];
var shapeShapeIcons = {
  [TDShapeType.Rectangle]: /* @__PURE__ */ React37.createElement(import_react_icons2.SquareIcon, null),
  [TDShapeType.Ellipse]: /* @__PURE__ */ React37.createElement(import_react_icons2.CircleIcon, null),
  [TDShapeType.Line]: /* @__PURE__ */ React37.createElement(LineIcon, null)
};
var ShapesMenu = React37.memo(function ShapesMenu2({
  activeTool,
  isToolLocked
}) {
  const app = useTldrawApp();
  const [lastActiveTool, setLastActiveTool] = React37.useState(TDShapeType.Rectangle);
  React37.useEffect(() => {
    if (shapeShapes.includes(activeTool) && lastActiveTool !== activeTool) {
      setLastActiveTool(activeTool);
    }
  }, [activeTool]);
  const selectShapeTool = React37.useCallback(() => {
    app.selectTool(lastActiveTool);
  }, [activeTool, app]);
  const handleDoubleClick = React37.useCallback(() => {
    app.toggleToolLock();
  }, [app]);
  const isActive = shapeShapes.includes(activeTool);
  return /* @__PURE__ */ React37.createElement(DropdownMenu.Root, {
    dir: "ltr",
    onOpenChange: selectShapeTool
  }, /* @__PURE__ */ React37.createElement(DropdownMenu.Trigger, {
    dir: "ltr",
    asChild: true
  }, /* @__PURE__ */ React37.createElement(ToolButton, {
    variant: "primary",
    onDoubleClick: handleDoubleClick,
    isToolLocked: isActive && isToolLocked,
    isActive
  }, shapeShapeIcons[lastActiveTool])), /* @__PURE__ */ React37.createElement(DropdownMenu.Content, {
    asChild: true,
    dir: "ltr",
    side: "top",
    sideOffset: 12
  }, /* @__PURE__ */ React37.createElement(Panel, {
    side: "center"
  }, shapeShapes.map((shape, i) => /* @__PURE__ */ React37.createElement(Tooltip, {
    key: shape,
    label: shape[0].toUpperCase() + shape.slice(1),
    kbd: (4 + i).toString()
  }, /* @__PURE__ */ React37.createElement(DropdownMenu.Item, {
    asChild: true
  }, /* @__PURE__ */ React37.createElement(ToolButton, {
    variant: "primary",
    onClick: () => {
      app.selectTool(shape);
      setLastActiveTool(shape);
    }
  }, shapeShapeIcons[shape])))))));
});

// src/components/ToolsPanel/PrimaryTools.tsx
var activeToolSelector2 = (s) => s.appState.activeTool;
var toolLockedSelector = (s) => s.appState.isToolLocked;
var PrimaryTools = React38.memo(function PrimaryTools2() {
  const app = useTldrawApp();
  const activeTool = app.useStore(activeToolSelector2);
  const isToolLocked = app.useStore(toolLockedSelector);
  const selectSelectTool = React38.useCallback(() => {
    app.selectTool("select");
  }, [app]);
  const selectEraseTool = React38.useCallback(() => {
    app.selectTool("erase");
  }, [app]);
  const selectDrawTool = React38.useCallback(() => {
    app.selectTool(TDShapeType.Draw);
  }, [app]);
  const selectArrowTool = React38.useCallback(() => {
    app.selectTool(TDShapeType.Arrow);
  }, [app]);
  const selectTextTool = React38.useCallback(() => {
    app.selectTool(TDShapeType.Text);
  }, [app]);
  const selectStickyTool = React38.useCallback(() => {
    app.selectTool(TDShapeType.Sticky);
  }, [app]);
  return /* @__PURE__ */ React38.createElement(Panel, {
    side: "center"
  }, /* @__PURE__ */ React38.createElement(ToolButtonWithTooltip, {
    kbd: "1",
    label: "select",
    onClick: selectSelectTool,
    isActive: activeTool === "select"
  }, /* @__PURE__ */ React38.createElement(import_react_icons3.CursorArrowIcon, null)), /* @__PURE__ */ React38.createElement(ToolButtonWithTooltip, {
    kbd: "2",
    label: TDShapeType.Draw,
    onClick: selectDrawTool,
    isActive: activeTool === TDShapeType.Draw
  }, /* @__PURE__ */ React38.createElement(import_react_icons3.Pencil1Icon, null)), /* @__PURE__ */ React38.createElement(ToolButtonWithTooltip, {
    kbd: "3",
    label: "eraser",
    onClick: selectEraseTool,
    isActive: activeTool === "erase"
  }, /* @__PURE__ */ React38.createElement(EraserIcon, null)), /* @__PURE__ */ React38.createElement(ShapesMenu, {
    activeTool,
    isToolLocked
  }), /* @__PURE__ */ React38.createElement(ToolButtonWithTooltip, {
    kbd: "7",
    label: TDShapeType.Arrow,
    onClick: selectArrowTool,
    isLocked: isToolLocked,
    isActive: activeTool === TDShapeType.Arrow
  }, /* @__PURE__ */ React38.createElement(import_react_icons3.ArrowTopRightIcon, null)), /* @__PURE__ */ React38.createElement(ToolButtonWithTooltip, {
    kbd: "8",
    label: TDShapeType.Text,
    onClick: selectTextTool,
    isLocked: isToolLocked,
    isActive: activeTool === TDShapeType.Text
  }, /* @__PURE__ */ React38.createElement(import_react_icons3.TextIcon, null)), /* @__PURE__ */ React38.createElement(ToolButtonWithTooltip, {
    kbd: "9",
    label: TDShapeType.Sticky,
    onClick: selectStickyTool,
    isActive: activeTool === TDShapeType.Sticky
  }, /* @__PURE__ */ React38.createElement(import_react_icons3.Pencil2Icon, null)));
});

// src/components/ToolsPanel/ActionButton.tsx
var React45 = __toModule(require("react"));
var DropdownMenu2 = __toModule(require("@radix-ui/react-dropdown-menu"));
var import_react_icons4 = __toModule(require("@radix-ui/react-icons"));

// src/components/Primitives/DropdownMenu/DMArrow.tsx
var import_react_dropdown_menu2 = __toModule(require("@radix-ui/react-dropdown-menu"));
var DMArrow = styled(import_react_dropdown_menu2.Arrow, { fill: "$panel", bp: breakpoints });

// src/components/Primitives/DropdownMenu/DMItem.tsx
var React39 = __toModule(require("react"));
var import_react_dropdown_menu3 = __toModule(require("@radix-ui/react-dropdown-menu"));
function DMItem(_a) {
  var _b = _a, {
    onSelect
  } = _b, rest = __objRest(_b, [
    "onSelect"
  ]);
  return /* @__PURE__ */ React39.createElement(import_react_dropdown_menu3.Item, {
    dir: "ltr",
    asChild: true,
    onSelect
  }, /* @__PURE__ */ React39.createElement(RowButton, __spreadValues({}, rest)));
}

// src/components/Primitives/DropdownMenu/DMCheckboxItem.tsx
var React40 = __toModule(require("react"));
var import_react_dropdown_menu4 = __toModule(require("@radix-ui/react-dropdown-menu"));

// src/components/preventEvent.ts
var preventEvent = (e) => e.preventDefault();

// src/components/Primitives/DropdownMenu/DMCheckboxItem.tsx
function DMCheckboxItem({
  checked,
  disabled = false,
  variant,
  onCheckedChange,
  kbd,
  children
}) {
  return /* @__PURE__ */ React40.createElement(import_react_dropdown_menu4.CheckboxItem, {
    dir: "ltr",
    onSelect: preventEvent,
    onCheckedChange,
    checked,
    disabled,
    asChild: true
  }, /* @__PURE__ */ React40.createElement(RowButton, {
    kbd,
    variant,
    hasIndicator: true
  }, children));
}

// src/components/Primitives/DropdownMenu/DMContent.tsx
var React41 = __toModule(require("react"));
var import_react_dropdown_menu5 = __toModule(require("@radix-ui/react-dropdown-menu"));
function DMContent({
  sideOffset = 8,
  children,
  align,
  variant
}) {
  return /* @__PURE__ */ React41.createElement(import_react_dropdown_menu5.Content, {
    dir: "ltr",
    align,
    sideOffset,
    onEscapeKeyDown: stopPropagation,
    asChild: true
  }, /* @__PURE__ */ React41.createElement(StyledContent2, {
    variant
  }, children));
}
var StyledContent2 = styled(MenuContent, {
  width: "fit-content",
  height: "fit-content",
  minWidth: 0,
  variants: {
    variant: {
      horizontal: {
        flexDirection: "row"
      },
      menu: {
        minWidth: 128
      }
    }
  }
});

// src/components/Primitives/DropdownMenu/DMDivider.tsx
var import_react_dropdown_menu6 = __toModule(require("@radix-ui/react-dropdown-menu"));
var DMDivider = styled(import_react_dropdown_menu6.Separator, {
  backgroundColor: "$hover",
  height: 1,
  marginTop: "$2",
  marginRight: "-$2",
  marginBottom: "$2",
  marginLeft: "-$2"
});

// src/components/Primitives/DropdownMenu/DMRadioItem.tsx
var import_react_dropdown_menu7 = __toModule(require("@radix-ui/react-dropdown-menu"));
var DMRadioItem = styled(import_react_dropdown_menu7.RadioItem, {
  height: "32px",
  width: "32px",
  backgroundColor: "$panel",
  borderRadius: "4px",
  padding: "0",
  margin: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  cursor: "pointer",
  variants: {
    isActive: {
      true: {
        backgroundColor: "$selected",
        color: "$panel"
      },
      false: {}
    },
    bp: {
      mobile: {},
      small: {}
    }
  },
  compoundVariants: [
    {
      isActive: false,
      bp: "small",
      css: {
        "&:focus": {
          backgroundColor: "$hover"
        },
        "&:hover:not(:disabled)": {
          backgroundColor: "$hover"
        }
      }
    }
  ]
});

// src/components/Primitives/DropdownMenu/DMSubMenu.tsx
var React42 = __toModule(require("react"));
var import_react_dropdown_menu8 = __toModule(require("@radix-ui/react-dropdown-menu"));
function DMSubMenu({ children, disabled = false, label }) {
  return /* @__PURE__ */ React42.createElement(import_react_dropdown_menu8.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React42.createElement(import_react_dropdown_menu8.TriggerItem, {
    dir: "ltr",
    asChild: true
  }, /* @__PURE__ */ React42.createElement(RowButton, {
    disabled,
    hasArrow: true
  }, label)), /* @__PURE__ */ React42.createElement(import_react_dropdown_menu8.Content, {
    dir: "ltr",
    asChild: true,
    sideOffset: 2,
    alignOffset: -2
  }, /* @__PURE__ */ React42.createElement(MenuContent, null, children, /* @__PURE__ */ React42.createElement(import_react_dropdown_menu8.Arrow, {
    offset: 13
  }))));
}

// src/components/Primitives/DropdownMenu/DMTriggerIcon.tsx
var React43 = __toModule(require("react"));
var import_react_dropdown_menu9 = __toModule(require("@radix-ui/react-dropdown-menu"));
function DMTriggerIcon(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React43.createElement(import_react_dropdown_menu9.Trigger, {
    asChild: true
  }, /* @__PURE__ */ React43.createElement(ToolButton, __spreadValues({}, rest), children));
}

// src/components/Primitives/Divider/Divider.tsx
var React44 = __toModule(require("react"));
var Divider = styled("hr", {
  height: 1,
  marginTop: "$1",
  marginRight: "-$2",
  marginBottom: "$1",
  marginLeft: "-$2",
  border: "none",
  borderBottom: "1px solid $hover"
});

// src/components/ToolsPanel/ActionButton.tsx
var selectedShapesCountSelector = (s) => s.document.pageStates[s.appState.currentPageId].selectedIds.length;
var isAllLockedSelector = (s) => {
  const page = s.document.pages[s.appState.currentPageId];
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.every((id) => page.shapes[id].isLocked);
};
var isAllAspectLockedSelector = (s) => {
  const page = s.document.pages[s.appState.currentPageId];
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.every((id) => page.shapes[id].isAspectRatioLocked);
};
var isAllGroupedSelector = (s) => {
  const page = s.document.pages[s.appState.currentPageId];
  const selectedShapes = s.document.pageStates[s.appState.currentPageId].selectedIds.map((id) => page.shapes[id]);
  return selectedShapes.every((shape) => shape.children !== void 0 || shape.parentId === selectedShapes[0].parentId && selectedShapes[0].parentId !== s.appState.currentPageId);
};
var hasSelectionSelector = (s) => {
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.length > 0;
};
var hasMultipleSelectionSelector = (s) => {
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.length > 1;
};
function ActionButton() {
  const app = useTldrawApp();
  const isAllLocked = app.useStore(isAllLockedSelector);
  const isAllAspectLocked = app.useStore(isAllAspectLockedSelector);
  const isAllGrouped = app.useStore(isAllGroupedSelector);
  const hasSelection = app.useStore(hasSelectionSelector);
  const hasMultipleSelection = app.useStore(hasMultipleSelectionSelector);
  const selectedShapesCount = app.useStore(selectedShapesCountSelector);
  const hasTwoOrMore = selectedShapesCount > 1;
  const hasThreeOrMore = selectedShapesCount > 2;
  const handleRotate = React45.useCallback(() => {
    app.rotate();
  }, [app]);
  const handleDuplicate = React45.useCallback(() => {
    app.duplicate();
  }, [app]);
  const handleToggleLocked = React45.useCallback(() => {
    app.toggleLocked();
  }, [app]);
  const handleToggleAspectRatio = React45.useCallback(() => {
    app.toggleAspectRatioLocked();
  }, [app]);
  const handleGroup = React45.useCallback(() => {
    app.group();
  }, [app]);
  const handleMoveToBack = React45.useCallback(() => {
    app.moveToBack();
  }, [app]);
  const handleMoveBackward = React45.useCallback(() => {
    app.moveBackward();
  }, [app]);
  const handleMoveForward = React45.useCallback(() => {
    app.moveForward();
  }, [app]);
  const handleMoveToFront = React45.useCallback(() => {
    app.moveToFront();
  }, [app]);
  const handleResetAngle = React45.useCallback(() => {
    app.setShapeProps({ rotation: 0 });
  }, [app]);
  const alignTop = React45.useCallback(() => {
    app.align(AlignType.Top);
  }, [app]);
  const alignCenterVertical = React45.useCallback(() => {
    app.align(AlignType.CenterVertical);
  }, [app]);
  const alignBottom = React45.useCallback(() => {
    app.align(AlignType.Bottom);
  }, [app]);
  const stretchVertically = React45.useCallback(() => {
    app.stretch(StretchType.Vertical);
  }, [app]);
  const distributeVertically = React45.useCallback(() => {
    app.distribute(DistributeType.Vertical);
  }, [app]);
  const alignLeft = React45.useCallback(() => {
    app.align(AlignType.Left);
  }, [app]);
  const alignCenterHorizontal = React45.useCallback(() => {
    app.align(AlignType.CenterHorizontal);
  }, [app]);
  const alignRight = React45.useCallback(() => {
    app.align(AlignType.Right);
  }, [app]);
  const stretchHorizontally = React45.useCallback(() => {
    app.stretch(StretchType.Horizontal);
  }, [app]);
  const distributeHorizontally = React45.useCallback(() => {
    app.distribute(DistributeType.Horizontal);
  }, [app]);
  const handleMenuOpenChange = React45.useCallback((open) => {
    app.setMenuOpen(open);
  }, [app]);
  return /* @__PURE__ */ React45.createElement(DropdownMenu2.Root, {
    dir: "ltr",
    onOpenChange: handleMenuOpenChange
  }, /* @__PURE__ */ React45.createElement(DropdownMenu2.Trigger, {
    dir: "ltr",
    asChild: true
  }, /* @__PURE__ */ React45.createElement(ToolButton, {
    variant: "circle"
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.DotsHorizontalIcon, null))), /* @__PURE__ */ React45.createElement(DMContent, {
    sideOffset: 16
  }, /* @__PURE__ */ React45.createElement(React45.Fragment, null, /* @__PURE__ */ React45.createElement(ButtonsRow, null, /* @__PURE__ */ React45.createElement(ToolButton, {
    variant: "icon",
    disabled: !hasSelection,
    onClick: handleDuplicate
  }, /* @__PURE__ */ React45.createElement(Tooltip, {
    label: "Duplicate",
    kbd: `#D`
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.CopyIcon, null))), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleRotate
  }, /* @__PURE__ */ React45.createElement(Tooltip, {
    label: "Rotate"
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.RotateCounterClockwiseIcon, null))), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleToggleLocked
  }, /* @__PURE__ */ React45.createElement(Tooltip, {
    label: "Toggle Locked",
    kbd: `#L`
  }, isAllLocked ? /* @__PURE__ */ React45.createElement(import_react_icons4.LockClosedIcon, null) : /* @__PURE__ */ React45.createElement(import_react_icons4.LockOpen1Icon, null))), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleToggleAspectRatio
  }, /* @__PURE__ */ React45.createElement(Tooltip, {
    label: "Toggle Aspect Ratio Lock"
  }, isAllAspectLocked ? /* @__PURE__ */ React45.createElement(import_react_icons4.AspectRatioIcon, null) : /* @__PURE__ */ React45.createElement(import_react_icons4.BoxIcon, null))), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasSelection || !isAllGrouped && !hasMultipleSelection,
    onClick: handleGroup
  }, /* @__PURE__ */ React45.createElement(Tooltip, {
    label: "Group",
    kbd: `#G`
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.GroupIcon, null)))), /* @__PURE__ */ React45.createElement(ButtonsRow, null, /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleMoveToBack
  }, /* @__PURE__ */ React45.createElement(Tooltip, {
    label: "Move to Back",
    kbd: `#\u21E7[`
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.PinBottomIcon, null))), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleMoveBackward
  }, /* @__PURE__ */ React45.createElement(Tooltip, {
    label: "Move Backward",
    kbd: `#[`
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.ArrowDownIcon, null))), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleMoveForward
  }, /* @__PURE__ */ React45.createElement(Tooltip, {
    label: "Move Forward",
    kbd: `#]`
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.ArrowUpIcon, null))), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleMoveToFront
  }, /* @__PURE__ */ React45.createElement(Tooltip, {
    label: "Move to Front",
    kbd: `#\u21E7]`
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.PinTopIcon, null))), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleResetAngle
  }, /* @__PURE__ */ React45.createElement(Tooltip, {
    label: "Reset Angle"
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.AngleIcon, null)))), /* @__PURE__ */ React45.createElement(Divider, null), /* @__PURE__ */ React45.createElement(ButtonsRow, null, /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignLeft
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.AlignLeftIcon, null)), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignCenterHorizontal
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.AlignCenterHorizontallyIcon, null)), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignRight
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.AlignRightIcon, null)), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: stretchHorizontally
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.StretchHorizontallyIcon, null)), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasThreeOrMore,
    onClick: distributeHorizontally
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.SpaceEvenlyHorizontallyIcon, null))), /* @__PURE__ */ React45.createElement(ButtonsRow, null, /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignTop
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.AlignTopIcon, null)), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignCenterVertical
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.AlignCenterVerticallyIcon, null)), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignBottom
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.AlignBottomIcon, null)), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: stretchVertically
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.StretchVerticallyIcon, null)), /* @__PURE__ */ React45.createElement(ToolButton, {
    disabled: !hasThreeOrMore,
    onClick: distributeVertically
  }, /* @__PURE__ */ React45.createElement(import_react_icons4.SpaceEvenlyVerticallyIcon, null))))));
}
var ButtonsRow = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  outline: "none",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0
});

// src/components/ToolsPanel/DeleteButton.tsx
var React46 = __toModule(require("react"));
function DeleteButton() {
  const app = useTldrawApp();
  const handleDelete = React46.useCallback(() => {
    app.delete();
  }, [app]);
  const hasSelection = app.useStore((s) => s.appState.status === "idle" && s.document.pageStates[s.appState.currentPageId].selectedIds.length > 0);
  return /* @__PURE__ */ React46.createElement(Tooltip, {
    label: "Delete",
    kbd: "\u232B"
  }, /* @__PURE__ */ React46.createElement(ToolButton, {
    variant: "circle",
    disabled: !hasSelection,
    onSelect: handleDelete
  }, /* @__PURE__ */ React46.createElement(TrashIcon, null)));
}

// src/components/ToolsPanel/ToolsPanel.tsx
var isDebugModeSelector = (s) => s.settings.isDebugMode;
var ToolsPanel = React47.memo(function ToolsPanel2({ onBlur }) {
  const app = useTldrawApp();
  const isDebugMode = app.useStore(isDebugModeSelector);
  return /* @__PURE__ */ React47.createElement(StyledToolsPanelContainer, {
    onBlur
  }, /* @__PURE__ */ React47.createElement(StyledCenterWrap, null, /* @__PURE__ */ React47.createElement(BackToContent, null), /* @__PURE__ */ React47.createElement(StyledPrimaryTools, null, /* @__PURE__ */ React47.createElement(ActionButton, null), /* @__PURE__ */ React47.createElement(PrimaryTools, null), /* @__PURE__ */ React47.createElement(DeleteButton, null))), isDebugMode && /* @__PURE__ */ React47.createElement(StyledStatusWrap, null, /* @__PURE__ */ React47.createElement(StatusBar, null)));
});
var StyledToolsPanelContainer = styled("div", {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gridTemplateRows: "auto auto",
  justifyContent: "space-between",
  padding: "0",
  gap: "$4",
  zIndex: 200,
  pointerEvents: "none",
  "& > div > *": {
    pointerEvents: "all"
  }
});
var StyledCenterWrap = styled("div", {
  gridRow: 1,
  gridColumn: 2,
  display: "flex",
  width: "fit-content",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "$4"
});
var StyledStatusWrap = styled("div", {
  gridRow: 2,
  gridColumn: "1 / span 3"
});
var StyledPrimaryTools = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "$2"
});

// src/components/TopPanel/TopPanel.tsx
var React55 = __toModule(require("react"));

// src/components/TopPanel/Menu/Menu.tsx
var React50 = __toModule(require("react"));
var import_react_icons5 = __toModule(require("@radix-ui/react-icons"));
var DropdownMenu3 = __toModule(require("@radix-ui/react-dropdown-menu"));

// src/components/TopPanel/PreferencesMenu/PreferencesMenu.tsx
var React48 = __toModule(require("react"));
var settingsSelector = (s) => s.settings;
function PreferencesMenu() {
  const app = useTldrawApp();
  const settings = app.useStore(settingsSelector);
  const toggleDebugMode = React48.useCallback(() => {
    app.setSetting("isDebugMode", (v) => !v);
  }, [app]);
  const toggleDarkMode = React48.useCallback(() => {
    app.setSetting("isDarkMode", (v) => !v);
  }, [app]);
  const toggleFocusMode = React48.useCallback(() => {
    app.setSetting("isFocusMode", (v) => !v);
  }, [app]);
  const toggleRotateHandle = React48.useCallback(() => {
    app.setSetting("showRotateHandles", (v) => !v);
  }, [app]);
  const toggleGrid = React48.useCallback(() => {
    app.setSetting("showGrid", (v) => !v);
  }, [app]);
  const toggleBoundShapesHandle = React48.useCallback(() => {
    app.setSetting("showBindingHandles", (v) => !v);
  }, [app]);
  const toggleisSnapping = React48.useCallback(() => {
    app.setSetting("isSnapping", (v) => !v);
  }, [app]);
  const toggleCloneControls = React48.useCallback(() => {
    app.setSetting("showCloneHandles", (v) => !v);
  }, [app]);
  return /* @__PURE__ */ React48.createElement(DMSubMenu, {
    label: "Preferences"
  }, /* @__PURE__ */ React48.createElement(DMCheckboxItem, {
    checked: settings.isDarkMode,
    onCheckedChange: toggleDarkMode,
    kbd: "#\u21E7D"
  }, "Dark Mode"), /* @__PURE__ */ React48.createElement(DMCheckboxItem, {
    checked: settings.isFocusMode,
    onCheckedChange: toggleFocusMode,
    kbd: "#."
  }, "Focus Mode"), /* @__PURE__ */ React48.createElement(DMCheckboxItem, {
    checked: settings.isDebugMode,
    onCheckedChange: toggleDebugMode
  }, "Debug Mode"), /* @__PURE__ */ React48.createElement(DMDivider, null), /* @__PURE__ */ React48.createElement(DMCheckboxItem, {
    checked: settings.showRotateHandles,
    onCheckedChange: toggleRotateHandle
  }, "Rotate Handles"), /* @__PURE__ */ React48.createElement(DMCheckboxItem, {
    checked: settings.showBindingHandles,
    onCheckedChange: toggleBoundShapesHandle
  }, "Binding Handles"), /* @__PURE__ */ React48.createElement(DMCheckboxItem, {
    checked: settings.showCloneHandles,
    onCheckedChange: toggleCloneControls
  }, "Clone Handles"), /* @__PURE__ */ React48.createElement(DMCheckboxItem, {
    checked: settings.showGrid,
    onCheckedChange: toggleGrid,
    kbd: "#\u21E7G"
  }, "Grid"), /* @__PURE__ */ React48.createElement(DMCheckboxItem, {
    checked: settings.isSnapping,
    onCheckedChange: toggleisSnapping
  }, "Always Show Snaps"));
}

// src/components/Primitives/icons/HeartIcon.tsx
var React49 = __toModule(require("react"));
function HeartIcon() {
  return /* @__PURE__ */ React49.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React49.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
}

// src/components/TopPanel/Menu/Menu.tsx
var numberOfSelectedIdsSelector = (s) => {
  return s.document.pageStates[s.appState.currentPageId].selectedIds.length;
};
var Menu = React50.memo(function Menu2({ showSponsorLink, readOnly }) {
  const app = useTldrawApp();
  const numberOfSelectedIds = app.useStore(numberOfSelectedIdsSelector);
  const { onNewProject, onOpenProject, onSaveProject, onSaveProjectAs } = useFileSystemHandlers();
  const handleSignIn = React50.useCallback(() => {
    var _a, _b;
    (_b = (_a = app.callbacks).onSignIn) == null ? void 0 : _b.call(_a, app);
  }, [app]);
  const handleSignOut = React50.useCallback(() => {
    var _a, _b;
    (_b = (_a = app.callbacks).onSignOut) == null ? void 0 : _b.call(_a, app);
  }, [app]);
  const handleCut = React50.useCallback(() => {
    app.cut();
  }, [app]);
  const handleCopy = React50.useCallback(() => {
    app.copy();
  }, [app]);
  const handlePaste = React50.useCallback(() => {
    app.paste();
  }, [app]);
  const handleCopySvg = React50.useCallback(() => {
    app.copySvg();
  }, [app]);
  const handleCopyJson = React50.useCallback(() => {
    app.copyJson();
  }, [app]);
  const handleSelectAll = React50.useCallback(() => {
    app.selectAll();
  }, [app]);
  const handleselectNone = React50.useCallback(() => {
    app.selectNone();
  }, [app]);
  const showFileMenu = app.callbacks.onNewProject || app.callbacks.onOpenProject || app.callbacks.onSaveProject || app.callbacks.onSaveProjectAs;
  const showSignInOutMenu = app.callbacks.onSignIn || app.callbacks.onSignOut || showSponsorLink;
  const hasSelection = numberOfSelectedIds > 0;
  return /* @__PURE__ */ React50.createElement(DropdownMenu3.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React50.createElement(DMTriggerIcon, {
    isSponsor: showSponsorLink
  }, /* @__PURE__ */ React50.createElement(import_react_icons5.HamburgerMenuIcon, null)), /* @__PURE__ */ React50.createElement(DMContent, {
    variant: "menu"
  }, showFileMenu && /* @__PURE__ */ React50.createElement(DMSubMenu, {
    label: "File..."
  }, app.callbacks.onNewProject && /* @__PURE__ */ React50.createElement(DMItem, {
    onClick: onNewProject,
    kbd: "#N"
  }, "New Project"), app.callbacks.onOpenProject && /* @__PURE__ */ React50.createElement(DMItem, {
    onClick: onOpenProject,
    kbd: "#O"
  }, "Open..."), app.callbacks.onSaveProject && /* @__PURE__ */ React50.createElement(DMItem, {
    onClick: onSaveProject,
    kbd: "#S"
  }, "Save"), app.callbacks.onSaveProjectAs && /* @__PURE__ */ React50.createElement(DMItem, {
    onClick: onSaveProjectAs,
    kbd: "#\u21E7S"
  }, "Save As...")), !readOnly && /* @__PURE__ */ React50.createElement(React50.Fragment, null, /* @__PURE__ */ React50.createElement(DMSubMenu, {
    label: "Edit..."
  }, /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.undo,
    kbd: "#Z"
  }, "Undo"), /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.redo,
    kbd: "#\u21E7Z"
  }, "Redo"), /* @__PURE__ */ React50.createElement(DMDivider, {
    dir: "ltr"
  }), /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: preventEvent,
    disabled: !hasSelection,
    onClick: handleCut,
    kbd: "#X"
  }, "Cut"), /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: preventEvent,
    disabled: !hasSelection,
    onClick: handleCopy,
    kbd: "#C"
  }, "Copy"), /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: handlePaste,
    kbd: "#V"
  }, "Paste"), /* @__PURE__ */ React50.createElement(DMDivider, {
    dir: "ltr"
  }), /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: preventEvent,
    disabled: !hasSelection,
    onClick: handleCopySvg,
    kbd: "#\u21E7C"
  }, "Copy as SVG"), /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: preventEvent,
    disabled: !hasSelection,
    onClick: handleCopyJson
  }, "Copy as JSON"), /* @__PURE__ */ React50.createElement(DMDivider, {
    dir: "ltr"
  }), /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: handleSelectAll,
    kbd: "#A"
  }, "Select All"), /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: handleselectNone
  }, "Select None"))), /* @__PURE__ */ React50.createElement("a", {
    href: "https://tldraw.com/r"
  }, /* @__PURE__ */ React50.createElement(DMItem, null, "Create a Multiplayer Room")), /* @__PURE__ */ React50.createElement(DMDivider, {
    dir: "ltr"
  }), /* @__PURE__ */ React50.createElement(PreferencesMenu, null), /* @__PURE__ */ React50.createElement(DMDivider, {
    dir: "ltr"
  }), /* @__PURE__ */ React50.createElement("a", {
    href: "https://github.com/Tldraw/Tldraw",
    target: "_blank",
    rel: "nofollow"
  }, /* @__PURE__ */ React50.createElement(DMItem, null, "GitHub", /* @__PURE__ */ React50.createElement(SmallIcon, null, /* @__PURE__ */ React50.createElement(import_react_icons5.GitHubLogoIcon, null)))), /* @__PURE__ */ React50.createElement("a", {
    href: "https://twitter.com/Tldraw",
    target: "_blank",
    rel: "nofollow"
  }, /* @__PURE__ */ React50.createElement(DMItem, null, "Twitter", /* @__PURE__ */ React50.createElement(SmallIcon, null, /* @__PURE__ */ React50.createElement(import_react_icons5.TwitterLogoIcon, null)))), /* @__PURE__ */ React50.createElement("a", {
    href: "https://discord.gg/SBBEVCA4PG",
    target: "_blank",
    rel: "nofollow"
  }, /* @__PURE__ */ React50.createElement(DMItem, null, "Discord", /* @__PURE__ */ React50.createElement(SmallIcon, null, /* @__PURE__ */ React50.createElement(DiscordIcon, null)))), showSponsorLink && /* @__PURE__ */ React50.createElement("a", {
    href: "https://github.com/sponsors/steveruizok",
    target: "_blank",
    rel: "nofollow"
  }, /* @__PURE__ */ React50.createElement(DMItem, {
    isSponsor: true
  }, "Become a Sponsor", " ", /* @__PURE__ */ React50.createElement(SmallIcon, null, /* @__PURE__ */ React50.createElement(HeartIcon, null)))), showSignInOutMenu && /* @__PURE__ */ React50.createElement(React50.Fragment, null, /* @__PURE__ */ React50.createElement(DMDivider, {
    dir: "ltr"
  }), " ", app.callbacks.onSignIn && /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: handleSignIn
  }, "Sign In"), app.callbacks.onSignOut && /* @__PURE__ */ React50.createElement(DMItem, {
    onSelect: handleSignOut
  }, "Sign Out", /* @__PURE__ */ React50.createElement(SmallIcon, null, /* @__PURE__ */ React50.createElement(import_react_icons5.ExitIcon, null))))));
});

// src/components/TopPanel/PageMenu/PageMenu.tsx
var React52 = __toModule(require("react"));
var DropdownMenu4 = __toModule(require("@radix-ui/react-dropdown-menu"));
var import_react_icons7 = __toModule(require("@radix-ui/react-icons"));

// src/components/TopPanel/PageOptionsDialog/PageOptionsDialog.tsx
var React51 = __toModule(require("react"));
var Dialog = __toModule(require("@radix-ui/react-alert-dialog"));
var import_react_icons6 = __toModule(require("@radix-ui/react-icons"));

// src/components/Primitives/IconButton/IconButton.tsx
var IconButton = styled("button", {
  position: "relative",
  height: "32px",
  width: "32px",
  backgroundColor: "$panel",
  borderRadius: "4px",
  padding: "0",
  margin: "0",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  fontSize: "$0",
  color: "$text",
  cursor: "pointer",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  "& > *": {
    gridRow: 1,
    gridColumn: 1
  },
  "&:disabled": {
    opacity: "0.5"
  },
  "& > span": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  variants: {
    bp: {
      mobile: {
        backgroundColor: "transparent"
      },
      small: {
        "&:hover:not(:disabled)": {
          backgroundColor: "$hover"
        }
      }
    },
    size: {
      small: {
        height: 32,
        width: 32,
        "& svg:nth-of-type(1)": {
          height: "16px",
          width: "16px"
        }
      },
      medium: {
        height: 44,
        width: 44,
        "& svg:nth-of-type(1)": {
          height: "18px",
          width: "18px"
        }
      },
      large: {
        height: 44,
        width: 44,
        "& svg:nth-of-type(1)": {
          height: "20px",
          width: "20px"
        }
      }
    },
    isActive: {
      true: {
        color: "$selected"
      }
    }
  }
});

// src/components/TopPanel/PageOptionsDialog/PageOptionsDialog.tsx
var canDeleteSelector = (s) => {
  return Object.keys(s.document.pages).length > 1;
};
function PageOptionsDialog({ page, onOpen, onClose }) {
  const app = useTldrawApp();
  const [isOpen, setIsOpen] = React51.useState(false);
  const canDelete = app.useStore(canDeleteSelector);
  const rInput = React51.useRef(null);
  const handleDuplicate = React51.useCallback(() => {
    app.duplicatePage(page.id);
    onClose == null ? void 0 : onClose();
  }, [app]);
  const handleDelete = React51.useCallback(() => {
    if (window.confirm(`Are you sure you want to delete this page?`)) {
      app.deletePage(page.id);
      onClose == null ? void 0 : onClose();
    }
  }, [app]);
  const handleOpenChange = React51.useCallback((isOpen2) => {
    setIsOpen(isOpen2);
    if (isOpen2) {
      onOpen == null ? void 0 : onOpen();
      return;
    }
  }, [app]);
  function stopPropagation2(e) {
    e.stopPropagation();
  }
  function handleRename() {
    const nextName = window.prompt("New name:", page.name);
    app.renamePage(page.id, nextName || page.name || "Page");
  }
  React51.useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        const elm = rInput.current;
        if (elm) {
          elm.focus();
          elm.select();
        }
      });
    }
  }, [isOpen]);
  return /* @__PURE__ */ React51.createElement(Dialog.Root, {
    open: isOpen,
    onOpenChange: handleOpenChange
  }, /* @__PURE__ */ React51.createElement(Dialog.Trigger, {
    asChild: true,
    "data-shy": "true"
  }, /* @__PURE__ */ React51.createElement(IconButton, {
    bp: breakpoints
  }, /* @__PURE__ */ React51.createElement(SmallIcon, null, /* @__PURE__ */ React51.createElement(import_react_icons6.MixerVerticalIcon, null)))), /* @__PURE__ */ React51.createElement(StyledDialogOverlay, null), /* @__PURE__ */ React51.createElement(StyledDialogContent, {
    dir: "ltr",
    onKeyDown: stopPropagation2,
    onKeyUp: stopPropagation2
  }, /* @__PURE__ */ React51.createElement(DialogAction, {
    onSelect: handleRename
  }, "Rename"), /* @__PURE__ */ React51.createElement(DialogAction, {
    onSelect: handleDuplicate
  }, "Duplicate"), /* @__PURE__ */ React51.createElement(DialogAction, {
    disabled: !canDelete,
    onSelect: handleDelete
  }, "Delete"), /* @__PURE__ */ React51.createElement(Divider, null), /* @__PURE__ */ React51.createElement(Dialog.Cancel, {
    asChild: true
  }, /* @__PURE__ */ React51.createElement(RowButton, null, "Cancel"))));
}
var StyledDialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 240,
  maxWidth: "fit-content",
  maxHeight: "85vh",
  marginTop: "-5vh",
  pointerEvents: "all",
  backgroundColor: "$panel",
  padding: "$0",
  borderRadius: "$2",
  font: "$ui",
  "&:focus": {
    outline: "none"
  }
});
var StyledDialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, .15)",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%"
});
function DialogAction(_a) {
  var _b = _a, {
    onSelect
  } = _b, rest = __objRest(_b, [
    "onSelect"
  ]);
  return /* @__PURE__ */ React51.createElement(Dialog.Action, {
    asChild: true,
    onClick: onSelect,
    onSelect
  }, /* @__PURE__ */ React51.createElement(RowButton, __spreadValues({}, rest)));
}

// src/components/TopPanel/PageMenu/PageMenu.tsx
var sortedSelector = (s) => Object.values(s.document.pages).sort((a, b) => (a.childIndex || 0) - (b.childIndex || 0));
var currentPageNameSelector = (s) => s.document.pages[s.appState.currentPageId].name;
var currentPageIdSelector = (s) => s.document.pages[s.appState.currentPageId].id;
function PageMenu() {
  const app = useTldrawApp();
  const rIsOpen = React52.useRef(false);
  const [isOpen, setIsOpen] = React52.useState(false);
  React52.useEffect(() => {
    if (rIsOpen.current !== isOpen) {
      rIsOpen.current = isOpen;
    }
  }, [isOpen]);
  const handleClose = React52.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const handleOpenChange = React52.useCallback((isOpen2) => {
    if (rIsOpen.current !== isOpen2) {
      setIsOpen(isOpen2);
    }
  }, [setIsOpen]);
  const currentPageName = app.useStore(currentPageNameSelector);
  return /* @__PURE__ */ React52.createElement(DropdownMenu4.Root, {
    dir: "ltr",
    open: isOpen,
    onOpenChange: handleOpenChange
  }, /* @__PURE__ */ React52.createElement(DropdownMenu4.Trigger, {
    dir: "ltr",
    asChild: true
  }, /* @__PURE__ */ React52.createElement(ToolButton, {
    variant: "text"
  }, currentPageName || "Page")), /* @__PURE__ */ React52.createElement(DMContent, {
    variant: "menu",
    align: "start"
  }, isOpen && /* @__PURE__ */ React52.createElement(PageMenuContent, {
    onClose: handleClose
  })));
}
function PageMenuContent({ onClose }) {
  const app = useTldrawApp();
  const sortedPages = app.useStore(sortedSelector);
  const currentPageId = app.useStore(currentPageIdSelector);
  const handleCreatePage = React52.useCallback(() => {
    app.createPage();
  }, [app]);
  const handleChangePage = React52.useCallback((id) => {
    onClose();
    app.changePage(id);
  }, [app]);
  return /* @__PURE__ */ React52.createElement(React52.Fragment, null, /* @__PURE__ */ React52.createElement(DropdownMenu4.RadioGroup, {
    dir: "ltr",
    value: currentPageId,
    onValueChange: handleChangePage
  }, sortedPages.map((page) => /* @__PURE__ */ React52.createElement(ButtonWithOptions, {
    key: page.id
  }, /* @__PURE__ */ React52.createElement(DropdownMenu4.RadioItem, {
    title: page.name || "Page",
    value: page.id,
    key: page.id,
    asChild: true
  }, /* @__PURE__ */ React52.createElement(PageButton, null, /* @__PURE__ */ React52.createElement("span", null, page.name || "Page"), /* @__PURE__ */ React52.createElement(DropdownMenu4.ItemIndicator, null, /* @__PURE__ */ React52.createElement(SmallIcon, null, /* @__PURE__ */ React52.createElement(import_react_icons7.CheckIcon, null))))), /* @__PURE__ */ React52.createElement(PageOptionsDialog, {
    page,
    onClose
  })))), /* @__PURE__ */ React52.createElement(DMDivider, null), /* @__PURE__ */ React52.createElement(DropdownMenu4.Item, {
    onSelect: handleCreatePage,
    asChild: true
  }, /* @__PURE__ */ React52.createElement(RowButton, null, /* @__PURE__ */ React52.createElement("span", null, "Create Page"), /* @__PURE__ */ React52.createElement(SmallIcon, null, /* @__PURE__ */ React52.createElement(import_react_icons7.PlusIcon, null)))));
}
var ButtonWithOptions = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gridAutoFlow: "column",
  '& > *[data-shy="true"]': {
    opacity: 0
  },
  '&:hover > *[data-shy="true"]': {
    opacity: 1
  }
});
var PageButton = styled(RowButton, {
  minWidth: 128
});

// src/components/TopPanel/ZoomMenu/ZoomMenu.tsx
var React53 = __toModule(require("react"));
var DropdownMenu5 = __toModule(require("@radix-ui/react-dropdown-menu"));
var zoomSelector = (s) => s.document.pageStates[s.appState.currentPageId].camera.zoom;
var ZoomMenu = React53.memo(function ZoomMenu2() {
  const app = useTldrawApp();
  const zoom = app.useStore(zoomSelector);
  return /* @__PURE__ */ React53.createElement(DropdownMenu5.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React53.createElement(DropdownMenu5.Trigger, {
    dir: "ltr",
    asChild: true
  }, /* @__PURE__ */ React53.createElement(FixedWidthToolButton, {
    onDoubleClick: app.resetZoom,
    variant: "text"
  }, Math.round(zoom * 100), "%")), /* @__PURE__ */ React53.createElement(DMContent, {
    align: "end"
  }, /* @__PURE__ */ React53.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomIn,
    kbd: "#+"
  }, "Zoom In"), /* @__PURE__ */ React53.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomOut,
    kbd: "#\u2212"
  }, "Zoom Out"), /* @__PURE__ */ React53.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.resetZoom,
    kbd: "\u21E70"
  }, "To 100%"), /* @__PURE__ */ React53.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomToFit,
    kbd: "\u21E71"
  }, "To Fit"), /* @__PURE__ */ React53.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomToSelection,
    kbd: "\u21E72"
  }, "To Selection")));
});
var FixedWidthToolButton = styled(ToolButton, {
  minWidth: 56
});

// src/components/TopPanel/StyleMenu/StyleMenu.tsx
var React54 = __toModule(require("react"));
var DropdownMenu6 = __toModule(require("@radix-ui/react-dropdown-menu"));
var import_react_icons8 = __toModule(require("@radix-ui/react-icons"));
var currentStyleSelector = (s) => s.appState.currentStyle;
var selectedIdsSelector = (s) => s.document.pageStates[s.appState.currentPageId].selectedIds;
var STYLE_KEYS = Object.keys(defaultTextStyle);
var DASH_ICONS = {
  [DashStyle.Draw]: /* @__PURE__ */ React54.createElement(DashDrawIcon, null),
  [DashStyle.Solid]: /* @__PURE__ */ React54.createElement(DashSolidIcon, null),
  [DashStyle.Dashed]: /* @__PURE__ */ React54.createElement(DashDashedIcon, null),
  [DashStyle.Dotted]: /* @__PURE__ */ React54.createElement(DashDottedIcon, null)
};
var SIZE_ICONS = {
  [SizeStyle.Small]: /* @__PURE__ */ React54.createElement(SizeSmallIcon, null),
  [SizeStyle.Medium]: /* @__PURE__ */ React54.createElement(SizeMediumIcon, null),
  [SizeStyle.Large]: /* @__PURE__ */ React54.createElement(SizeLargeIcon, null)
};
var ALIGN_ICONS = {
  [AlignStyle.Start]: /* @__PURE__ */ React54.createElement(import_react_icons8.TextAlignLeftIcon, null),
  [AlignStyle.Middle]: /* @__PURE__ */ React54.createElement(import_react_icons8.TextAlignCenterIcon, null),
  [AlignStyle.End]: /* @__PURE__ */ React54.createElement(import_react_icons8.TextAlignRightIcon, null),
  [AlignStyle.Justify]: /* @__PURE__ */ React54.createElement(import_react_icons8.TextAlignJustifyIcon, null)
};
var themeSelector = (s) => s.settings.isDarkMode ? "dark" : "light";
var showTextStylesSelector = (s) => {
  const { activeTool, currentPageId: pageId } = s.appState;
  const page = s.document.pages[pageId];
  return activeTool === "text" || s.document.pageStates[pageId].selectedIds.some((id) => "text" in page.shapes[id]);
};
var StyleMenu = React54.memo(function ColorMenu() {
  const app = useTldrawApp();
  const theme = app.useStore(themeSelector);
  const showTextStyles = app.useStore(showTextStylesSelector);
  const currentStyle = app.useStore(currentStyleSelector);
  const selectedIds = app.useStore(selectedIdsSelector);
  const [displayedStyle, setDisplayedStyle] = React54.useState(currentStyle);
  const rDisplayedStyle = React54.useRef(currentStyle);
  React54.useEffect(() => {
    const {
      appState: { currentStyle: currentStyle2 },
      page,
      selectedIds: selectedIds2
    } = app;
    let commonStyle = {};
    if (selectedIds2.length <= 0) {
      commonStyle = currentStyle2;
    } else {
      const overrides = new Set([]);
      app.selectedIds.map((id) => page.shapes[id]).forEach((shape) => {
        STYLE_KEYS.forEach((key) => {
          if (overrides.has(key))
            return;
          if (commonStyle[key] === void 0) {
            commonStyle[key] = shape.style[key];
          } else {
            if (commonStyle[key] === shape.style[key])
              return;
            commonStyle[key] = shape.style[key];
            overrides.add(key);
          }
        });
      });
    }
    if (JSON.stringify(commonStyle) !== JSON.stringify(rDisplayedStyle.current)) {
      rDisplayedStyle.current = commonStyle;
      setDisplayedStyle(commonStyle);
    }
  }, [currentStyle, selectedIds]);
  const handleToggleFilled = React54.useCallback((checked) => {
    app.style({ isFilled: checked });
  }, []);
  const handleDashChange = React54.useCallback((value) => {
    app.style({ dash: value });
  }, []);
  const handleSizeChange = React54.useCallback((value) => {
    app.style({ size: value });
  }, []);
  const handleFontChange = React54.useCallback((value) => {
    app.style({ font: value });
  }, []);
  const handleTextAlignChange = React54.useCallback((value) => {
    app.style({ textAlign: value });
  }, []);
  const handleMenuOpenChange = React54.useCallback((open) => {
    app.setMenuOpen(open);
  }, [app]);
  return /* @__PURE__ */ React54.createElement(DropdownMenu6.Root, {
    dir: "ltr",
    onOpenChange: handleMenuOpenChange
  }, /* @__PURE__ */ React54.createElement(DropdownMenu6.Trigger, {
    asChild: true
  }, /* @__PURE__ */ React54.createElement(ToolButton, {
    variant: "text"
  }, "Styles", /* @__PURE__ */ React54.createElement(OverlapIcons, {
    style: {
      color: strokes[theme][displayedStyle.color]
    }
  }, displayedStyle.isFilled && /* @__PURE__ */ React54.createElement(CircleIcon, {
    size: 16,
    stroke: "none",
    fill: fills[theme][displayedStyle.color]
  }), DASH_ICONS[displayedStyle.dash]))), /* @__PURE__ */ React54.createElement(DMContent, null, /* @__PURE__ */ React54.createElement(StyledRow, {
    variant: "tall"
  }, /* @__PURE__ */ React54.createElement("span", null, "Color"), /* @__PURE__ */ React54.createElement(ColorGrid, null, Object.keys(strokes.light).map((style) => /* @__PURE__ */ React54.createElement(DropdownMenu6.Item, {
    key: style,
    onSelect: preventEvent,
    asChild: true
  }, /* @__PURE__ */ React54.createElement(ToolButton, {
    variant: "icon",
    isActive: displayedStyle.color === style,
    onClick: () => app.style({ color: style })
  }, /* @__PURE__ */ React54.createElement(CircleIcon, {
    size: 18,
    strokeWidth: 2.5,
    fill: displayedStyle.isFilled ? fills.light[style] : "transparent",
    stroke: strokes.light[style]
  })))))), /* @__PURE__ */ React54.createElement(DMCheckboxItem, {
    variant: "styleMenu",
    checked: !!displayedStyle.isFilled,
    onCheckedChange: handleToggleFilled
  }, "Fill"), /* @__PURE__ */ React54.createElement(StyledRow, null, "Dash", /* @__PURE__ */ React54.createElement(StyledGroup, {
    dir: "ltr",
    value: displayedStyle.dash,
    onValueChange: handleDashChange
  }, Object.values(DashStyle).map((style) => /* @__PURE__ */ React54.createElement(DMRadioItem, {
    key: style,
    isActive: style === displayedStyle.dash,
    value: style,
    onSelect: preventEvent,
    bp: breakpoints
  }, DASH_ICONS[style])))), /* @__PURE__ */ React54.createElement(StyledRow, null, "Size", /* @__PURE__ */ React54.createElement(StyledGroup, {
    dir: "ltr",
    value: displayedStyle.size,
    onValueChange: handleSizeChange
  }, Object.values(SizeStyle).map((sizeStyle) => /* @__PURE__ */ React54.createElement(DMRadioItem, {
    key: sizeStyle,
    isActive: sizeStyle === displayedStyle.size,
    value: sizeStyle,
    onSelect: preventEvent,
    bp: breakpoints
  }, SIZE_ICONS[sizeStyle])))), showTextStyles && /* @__PURE__ */ React54.createElement(React54.Fragment, null, /* @__PURE__ */ React54.createElement(Divider, null), /* @__PURE__ */ React54.createElement(StyledRow, null, "Font", /* @__PURE__ */ React54.createElement(StyledGroup, {
    dir: "ltr",
    value: displayedStyle.font,
    onValueChange: handleFontChange
  }, Object.values(FontStyle).map((fontStyle) => /* @__PURE__ */ React54.createElement(DMRadioItem, {
    key: fontStyle,
    isActive: fontStyle === displayedStyle.font,
    value: fontStyle,
    onSelect: preventEvent,
    bp: breakpoints
  }, /* @__PURE__ */ React54.createElement(FontIcon, {
    fontStyle
  }, "Aa"))))), /* @__PURE__ */ React54.createElement(StyledRow, null, "Align", /* @__PURE__ */ React54.createElement(StyledGroup, {
    dir: "ltr",
    value: displayedStyle.textAlign,
    onValueChange: handleTextAlignChange
  }, Object.values(AlignStyle).map((style) => /* @__PURE__ */ React54.createElement(DMRadioItem, {
    key: style,
    isActive: style === displayedStyle.textAlign,
    value: style,
    onSelect: preventEvent,
    bp: breakpoints
  }, ALIGN_ICONS[style])))))));
});
var ColorGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, auto)",
  gap: 0
});
var StyledRow = styled("div", {
  position: "relative",
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  minHeight: "32px",
  outline: "none",
  color: "$text",
  fontFamily: "$ui",
  fontWeight: 400,
  fontSize: "$1",
  padding: "$2 0 $2 $3",
  borderRadius: 4,
  userSelect: "none",
  margin: 0,
  display: "flex",
  gap: "$3",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  variants: {
    variant: {
      tall: {
        alignItems: "flex-start",
        padding: "0 0 0 $3",
        "& > span": {
          paddingTop: "$4"
        }
      }
    }
  }
});
var StyledGroup = styled(DropdownMenu6.DropdownMenuRadioGroup, {
  display: "flex",
  flexDirection: "row",
  gap: "$1"
});
var OverlapIcons = styled("div", {
  display: "grid",
  "& > *": {
    gridColumn: 1,
    gridRow: 1
  }
});
var FontIcon = styled("div", {
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "$3",
  variants: {
    fontStyle: {
      [FontStyle.Script]: {
        fontFamily: "Caveat Brush"
      },
      [FontStyle.Sans]: {
        fontFamily: "Recursive"
      },
      [FontStyle.Serif]: {
        fontFamily: "Georgia"
      },
      [FontStyle.Mono]: {
        fontFamily: "Recursive Mono"
      }
    }
  }
});

// src/components/TopPanel/TopPanel.tsx
function TopPanel({
  readOnly,
  showPages,
  showMenu,
  showStyles,
  showZoom,
  showSponsorLink
}) {
  const app = useTldrawApp();
  return /* @__PURE__ */ React55.createElement(StyledTopPanel, null, (showMenu || showPages) && /* @__PURE__ */ React55.createElement(Panel, {
    side: "left"
  }, showMenu && /* @__PURE__ */ React55.createElement(Menu, {
    showSponsorLink,
    readOnly
  }), showPages && /* @__PURE__ */ React55.createElement(PageMenu, null)), /* @__PURE__ */ React55.createElement(StyledSpacer, null), (showStyles || showZoom) && /* @__PURE__ */ React55.createElement(Panel, {
    side: "right"
  }, showStyles && !readOnly && /* @__PURE__ */ React55.createElement(StyleMenu, null), /* @__PURE__ */ React55.createElement(MobileOnly, {
    bp: breakpoints
  }, /* @__PURE__ */ React55.createElement(ToolButton, null, /* @__PURE__ */ React55.createElement(UndoIcon, {
    onClick: app.undo
  })), /* @__PURE__ */ React55.createElement(ToolButton, null, /* @__PURE__ */ React55.createElement(RedoIcon, {
    onClick: app.redo
  }))), showZoom && /* @__PURE__ */ React55.createElement(ZoomMenu, null)));
}
var StyledTopPanel = styled("div", {
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "row",
  pointerEvents: "none",
  "& > *": {
    pointerEvents: "all"
  }
});
var StyledSpacer = styled("div", {
  flexGrow: 2,
  pointerEvents: "none"
});
var MobileOnly = styled("div", {
  display: "flex",
  flexDirection: "row",
  variants: {
    bp: {
      small: {
        display: "inherit"
      },
      large: {
        display: "none"
      }
    }
  }
});

// src/components/ContextMenu/ContextMenu.tsx
var React56 = __toModule(require("react"));
var RadixContextMenu = __toModule(require("@radix-ui/react-context-menu"));
var import_react_icons9 = __toModule(require("@radix-ui/react-icons"));
var numberOfSelectedIdsSelector2 = (s) => {
  return s.document.pageStates[s.appState.currentPageId].selectedIds.length;
};
var isDebugModeSelector2 = (s) => {
  return s.settings.isDebugMode;
};
var hasGroupSelectedSelector = (s) => {
  return s.document.pageStates[s.appState.currentPageId].selectedIds.some((id) => s.document.pages[s.appState.currentPageId].shapes[id].children !== void 0);
};
var preventDefault = (e) => e.stopPropagation();
var ContextMenu = ({ onBlur, children }) => {
  const app = useTldrawApp();
  const numberOfSelectedIds = app.useStore(numberOfSelectedIdsSelector2);
  const isDebugMode = app.useStore(isDebugModeSelector2);
  const hasGroupSelected = app.useStore(hasGroupSelectedSelector);
  const rContent = React56.useRef(null);
  const handleFlipHorizontal = React56.useCallback(() => {
    app.flipHorizontal();
  }, [app]);
  const handleFlipVertical = React56.useCallback(() => {
    app.flipVertical();
  }, [app]);
  const handleDuplicate = React56.useCallback(() => {
    app.duplicate();
  }, [app]);
  const handleLock = React56.useCallback(() => {
    app.toggleLocked();
  }, [app]);
  const handleGroup = React56.useCallback(() => {
    app.group();
  }, [app]);
  const handleMoveToBack = React56.useCallback(() => {
    app.moveToBack();
  }, [app]);
  const handleMoveBackward = React56.useCallback(() => {
    app.moveBackward();
  }, [app]);
  const handleMoveForward = React56.useCallback(() => {
    app.moveForward();
  }, [app]);
  const handleMoveToFront = React56.useCallback(() => {
    app.moveToFront();
  }, [app]);
  const handleDelete = React56.useCallback(() => {
    app.delete();
  }, [app]);
  const handleCopyJson = React56.useCallback(() => {
    app.copyJson();
  }, [app]);
  const handleCut = React56.useCallback(() => {
    app.cut();
  }, [app]);
  const handleCopy = React56.useCallback(() => {
    app.copy();
  }, [app]);
  const handlePaste = React56.useCallback(() => {
    app.paste();
  }, [app]);
  const handleCopySvg = React56.useCallback(() => {
    app.copySvg();
  }, [app]);
  const handleUndo = React56.useCallback(() => {
    app.undo();
  }, [app]);
  const handleRedo = React56.useCallback(() => {
    app.redo();
  }, [app]);
  const hasSelection = numberOfSelectedIds > 0;
  const hasTwoOrMore = numberOfSelectedIds > 1;
  const hasThreeOrMore = numberOfSelectedIds > 2;
  return /* @__PURE__ */ React56.createElement(RadixContextMenu.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React56.createElement(RadixContextMenu.Trigger, {
    dir: "ltr"
  }, children), /* @__PURE__ */ React56.createElement(RadixContextMenu.Content, {
    dir: "ltr",
    ref: rContent,
    onEscapeKeyDown: preventDefault,
    asChild: true,
    tabIndex: -1,
    onBlur
  }, /* @__PURE__ */ React56.createElement(MenuContent, null, hasSelection ? /* @__PURE__ */ React56.createElement(React56.Fragment, null, /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleDuplicate,
    kbd: "#D"
  }, "Duplicate"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleFlipHorizontal,
    kbd: "\u21E7H"
  }, "Flip Horizontal"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleFlipVertical,
    kbd: "\u21E7V"
  }, "Flip Vertical"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleLock,
    kbd: "#\u21E7L"
  }, "Lock / Unlock"), (hasTwoOrMore || hasGroupSelected) && /* @__PURE__ */ React56.createElement(Divider, null), hasTwoOrMore && /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleGroup,
    kbd: "#G"
  }, "Group"), hasGroupSelected && /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleGroup,
    kbd: "#G"
  }, "Ungroup"), /* @__PURE__ */ React56.createElement(Divider, null), /* @__PURE__ */ React56.createElement(ContextMenuSubMenu, {
    label: "Move"
  }, /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleMoveToFront,
    kbd: "\u21E7]"
  }, "To Front"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleMoveForward,
    kbd: "]"
  }, "Forward"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleMoveBackward,
    kbd: "["
  }, "Backward"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleMoveToBack,
    kbd: "\u21E7["
  }, "To Back")), /* @__PURE__ */ React56.createElement(MoveToPageMenu, null), hasTwoOrMore && /* @__PURE__ */ React56.createElement(AlignDistributeSubMenu, {
    hasTwoOrMore,
    hasThreeOrMore
  }), /* @__PURE__ */ React56.createElement(Divider, null), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleCut,
    kbd: "#X"
  }, "Cut"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleCopy,
    kbd: "#C"
  }, "Copy"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleCopySvg,
    kbd: "#\u21E7C"
  }, "Copy as SVG"), isDebugMode && /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleCopyJson
  }, "Copy as JSON"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handlePaste,
    kbd: "#V"
  }, "Paste"), /* @__PURE__ */ React56.createElement(Divider, null), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleDelete,
    kbd: "\u232B"
  }, "Delete")) : /* @__PURE__ */ React56.createElement(React56.Fragment, null, /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handlePaste,
    kbd: "#V"
  }, "Paste"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleUndo,
    kbd: "#Z"
  }, "Undo"), /* @__PURE__ */ React56.createElement(CMRowButton, {
    onClick: handleRedo,
    kbd: "#\u21E7Z"
  }, "Redo")))));
};
function AlignDistributeSubMenu({
  hasThreeOrMore
}) {
  const app = useTldrawApp();
  const alignTop = React56.useCallback(() => {
    app.align(AlignType.Top);
  }, [app]);
  const alignCenterVertical = React56.useCallback(() => {
    app.align(AlignType.CenterVertical);
  }, [app]);
  const alignBottom = React56.useCallback(() => {
    app.align(AlignType.Bottom);
  }, [app]);
  const stretchVertically = React56.useCallback(() => {
    app.stretch(StretchType.Vertical);
  }, [app]);
  const distributeVertically = React56.useCallback(() => {
    app.distribute(DistributeType.Vertical);
  }, [app]);
  const alignLeft = React56.useCallback(() => {
    app.align(AlignType.Left);
  }, [app]);
  const alignCenterHorizontal = React56.useCallback(() => {
    app.align(AlignType.CenterHorizontal);
  }, [app]);
  const alignRight = React56.useCallback(() => {
    app.align(AlignType.Right);
  }, [app]);
  const stretchHorizontally = React56.useCallback(() => {
    app.stretch(StretchType.Horizontal);
  }, [app]);
  const distributeHorizontally = React56.useCallback(() => {
    app.distribute(DistributeType.Horizontal);
  }, [app]);
  return /* @__PURE__ */ React56.createElement(RadixContextMenu.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React56.createElement(CMTriggerButton, {
    isSubmenu: true
  }, "Align / Distribute"), /* @__PURE__ */ React56.createElement(RadixContextMenu.Content, {
    asChild: true,
    sideOffset: 2,
    alignOffset: -2
  }, /* @__PURE__ */ React56.createElement(StyledGridContent, {
    numberOfSelected: hasThreeOrMore ? "threeOrMore" : "twoOrMore"
  }, /* @__PURE__ */ React56.createElement(CMIconButton, {
    onClick: alignLeft
  }, /* @__PURE__ */ React56.createElement(import_react_icons9.AlignLeftIcon, null)), /* @__PURE__ */ React56.createElement(CMIconButton, {
    onClick: alignCenterHorizontal
  }, /* @__PURE__ */ React56.createElement(import_react_icons9.AlignCenterHorizontallyIcon, null)), /* @__PURE__ */ React56.createElement(CMIconButton, {
    onClick: alignRight
  }, /* @__PURE__ */ React56.createElement(import_react_icons9.AlignRightIcon, null)), /* @__PURE__ */ React56.createElement(CMIconButton, {
    onClick: stretchHorizontally
  }, /* @__PURE__ */ React56.createElement(import_react_icons9.StretchHorizontallyIcon, null)), hasThreeOrMore && /* @__PURE__ */ React56.createElement(CMIconButton, {
    onClick: distributeHorizontally
  }, /* @__PURE__ */ React56.createElement(import_react_icons9.SpaceEvenlyHorizontallyIcon, null)), /* @__PURE__ */ React56.createElement(CMIconButton, {
    onClick: alignTop
  }, /* @__PURE__ */ React56.createElement(import_react_icons9.AlignTopIcon, null)), /* @__PURE__ */ React56.createElement(CMIconButton, {
    onClick: alignCenterVertical
  }, /* @__PURE__ */ React56.createElement(import_react_icons9.AlignCenterVerticallyIcon, null)), /* @__PURE__ */ React56.createElement(CMIconButton, {
    onClick: alignBottom
  }, /* @__PURE__ */ React56.createElement(import_react_icons9.AlignBottomIcon, null)), /* @__PURE__ */ React56.createElement(CMIconButton, {
    onClick: stretchVertically
  }, /* @__PURE__ */ React56.createElement(import_react_icons9.StretchVerticallyIcon, null)), hasThreeOrMore && /* @__PURE__ */ React56.createElement(CMIconButton, {
    onClick: distributeVertically
  }, /* @__PURE__ */ React56.createElement(import_react_icons9.SpaceEvenlyVerticallyIcon, null)), /* @__PURE__ */ React56.createElement(CMArrow, {
    offset: 13
  }))));
}
var StyledGridContent = styled(MenuContent, {
  display: "grid",
  variants: {
    numberOfSelected: {
      threeOrMore: {
        gridTemplateColumns: "repeat(5, auto)"
      },
      twoOrMore: {
        gridTemplateColumns: "repeat(4, auto)"
      }
    }
  }
});
var currentPageIdSelector2 = (s) => s.appState.currentPageId;
var documentPagesSelector = (s) => s.document.pages;
function MoveToPageMenu() {
  const app = useTldrawApp();
  const currentPageId = app.useStore(currentPageIdSelector2);
  const documentPages = app.useStore(documentPagesSelector);
  const sorted = Object.values(documentPages).sort((a, b) => (a.childIndex || 0) - (b.childIndex || 0)).filter((a) => a.id !== currentPageId);
  if (sorted.length === 0)
    return null;
  return /* @__PURE__ */ React56.createElement(RadixContextMenu.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React56.createElement(CMTriggerButton, {
    isSubmenu: true
  }, "Move To Page"), /* @__PURE__ */ React56.createElement(RadixContextMenu.Content, {
    dir: "ltr",
    sideOffset: 2,
    alignOffset: -2,
    asChild: true
  }, /* @__PURE__ */ React56.createElement(MenuContent, null, sorted.map(({ id, name }, i) => /* @__PURE__ */ React56.createElement(CMRowButton, {
    key: id,
    disabled: id === currentPageId,
    onClick: () => app.moveToPage(id)
  }, name || `Page ${i}`)), /* @__PURE__ */ React56.createElement(CMArrow, {
    offset: 13
  }))));
}
function ContextMenuSubMenu({ children, label }) {
  return /* @__PURE__ */ React56.createElement(RadixContextMenu.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React56.createElement(CMTriggerButton, {
    isSubmenu: true
  }, label), /* @__PURE__ */ React56.createElement(RadixContextMenu.Content, {
    dir: "ltr",
    sideOffset: 2,
    alignOffset: -2,
    asChild: true
  }, /* @__PURE__ */ React56.createElement(MenuContent, null, children, /* @__PURE__ */ React56.createElement(CMArrow, {
    offset: 13
  }))));
}
var CMArrow = styled(RadixContextMenu.ContextMenuArrow, {
  fill: "$panel"
});
function CMIconButton(_a) {
  var _b = _a, { onSelect } = _b, rest = __objRest(_b, ["onSelect"]);
  return /* @__PURE__ */ React56.createElement(RadixContextMenu.ContextMenuItem, {
    dir: "ltr",
    onSelect,
    asChild: true
  }, /* @__PURE__ */ React56.createElement(ToolButton, __spreadValues({}, rest)));
}
var CMRowButton = (_a) => {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ React56.createElement(RadixContextMenu.ContextMenuItem, {
    asChild: true
  }, /* @__PURE__ */ React56.createElement(RowButton, __spreadValues({}, rest)));
};
var CMTriggerButton = (_a) => {
  var _b = _a, { isSubmenu } = _b, rest = __objRest(_b, ["isSubmenu"]);
  return /* @__PURE__ */ React56.createElement(RadixContextMenu.ContextMenuTriggerItem, {
    asChild: true
  }, /* @__PURE__ */ React56.createElement(RowButton, __spreadValues({
    hasArrow: isSubmenu
  }, rest)));
};

// src/components/FocusButton/FocusButton.tsx
var import_react_icons10 = __toModule(require("@radix-ui/react-icons"));
var React57 = __toModule(require("react"));
function FocusButton({ onSelect }) {
  return /* @__PURE__ */ React57.createElement(StyledButtonContainer, null, /* @__PURE__ */ React57.createElement(IconButton, {
    onClick: onSelect
  }, /* @__PURE__ */ React57.createElement(import_react_icons10.DotFilledIcon, null)));
}
var StyledButtonContainer = styled("div", {
  opacity: 1,
  zIndex: 100,
  backgroundColor: "transparent",
  "& svg": {
    color: "$text"
  },
  "&:hover svg": {
    color: "$text"
  }
});

// src/Tldraw.tsx
function Tldraw({
  id,
  document: document2,
  currentPageId,
  darkMode = false,
  autofocus = true,
  showMenu = true,
  showPages = true,
  showTools = true,
  showZoom = true,
  showStyles = true,
  showUI = true,
  readOnly = false,
  showSponsorLink = false,
  onMount,
  onChange,
  onChangePresence,
  onNewProject,
  onSaveProject,
  onSaveProjectAs,
  onOpenProject,
  onSignOut,
  onSignIn,
  onUndo,
  onRedo,
  onPersist,
  onPatch,
  onCommand,
  onChangePage
}) {
  const [sId, setSId] = React58.useState(id);
  const [app, setApp] = React58.useState(() => new TldrawApp(id, {
    onMount,
    onChange,
    onChangePresence,
    onNewProject,
    onSaveProject,
    onSaveProjectAs,
    onOpenProject,
    onSignOut,
    onSignIn,
    onUndo,
    onRedo,
    onPersist,
    onPatch,
    onCommand,
    onChangePage
  }));
  React58.useEffect(() => {
    if (id === sId)
      return;
    const newApp = new TldrawApp(id, {
      onMount,
      onChange,
      onChangePresence,
      onNewProject,
      onSaveProject,
      onSaveProjectAs,
      onOpenProject,
      onSignOut,
      onSignIn,
      onUndo,
      onRedo,
      onPersist,
      onPatch,
      onCommand,
      onChangePage
    });
    setSId(id);
    setApp(newApp);
  }, [sId, id]);
  React58.useEffect(() => {
    if (!document2)
      return;
    if (document2.id === app.document.id) {
      app.updateDocument(document2);
    } else {
      app.loadDocument(document2);
    }
  }, [document2, app]);
  React58.useEffect(() => {
    if (!currentPageId)
      return;
    app.changePage(currentPageId);
  }, [currentPageId, app]);
  React58.useEffect(() => {
    app.readOnly = readOnly;
  }, [app, readOnly]);
  React58.useEffect(() => {
    if (darkMode && !app.settings.isDarkMode) {
    }
  }, [app, darkMode]);
  React58.useEffect(() => {
    app.callbacks = {
      onMount,
      onChange,
      onChangePresence,
      onNewProject,
      onSaveProject,
      onSaveProjectAs,
      onOpenProject,
      onSignOut,
      onSignIn,
      onUndo,
      onRedo,
      onPersist,
      onPatch,
      onCommand,
      onChangePage
    };
  }, [
    onMount,
    onChange,
    onChangePresence,
    onNewProject,
    onSaveProject,
    onSaveProjectAs,
    onOpenProject,
    onSignOut,
    onSignIn,
    onUndo,
    onRedo,
    onPersist,
    onPatch,
    onCommand,
    onChangePage
  ]);
  return /* @__PURE__ */ React58.createElement(TldrawContext.Provider, {
    value: app
  }, /* @__PURE__ */ React58.createElement(import_react_id.IdProvider, null, /* @__PURE__ */ React58.createElement(InnerTldraw, {
    key: sId || "Tldraw",
    id: sId,
    autofocus,
    showPages,
    showMenu,
    showStyles,
    showZoom,
    showTools,
    showUI,
    showSponsorLink,
    readOnly
  })));
}
var InnerTldraw = React58.memo(function InnerTldraw2({
  id,
  autofocus,
  showPages,
  showMenu,
  showZoom,
  showStyles,
  showTools,
  showSponsorLink,
  readOnly,
  showUI
}) {
  var _a;
  const app = useTldrawApp();
  const rWrapper = React58.useRef(null);
  const state = app.useStore();
  const { document: document2, settings, appState, room } = state;
  const isSelecting = state.appState.activeTool === "select";
  const page = document2.pages[appState.currentPageId];
  const pageState = document2.pageStates[page.id];
  const { selectedIds } = pageState;
  const isHideBoundsShape = selectedIds.length === 1 && page.shapes[selectedIds[0]] && TLDR.getShapeUtil(page.shapes[selectedIds[0]].type).hideBounds;
  const isHideResizeHandlesShape = selectedIds.length === 1 && page.shapes[selectedIds[0]] && TLDR.getShapeUtil(page.shapes[selectedIds[0]].type).hideResizeHandles;
  const isInSession = app.session !== void 0;
  const hideBounds = isInSession && ((_a = app.session) == null ? void 0 : _a.constructor.name) !== "BrushSession" || !isSelecting || isHideBoundsShape || !!pageState.editingId;
  const hideHandles = isInSession || !isSelecting;
  const hideIndicators = isInSession && state.appState.status !== TDStatus.Brushing || !isSelecting;
  const meta = React58.useMemo(() => {
    return { isDarkMode: settings.isDarkMode };
  }, [settings.isDarkMode]);
  const theme = React58.useMemo(() => {
    if (settings.isDarkMode) {
      return {
        brushFill: "rgba(180, 180, 180, .05)",
        brushStroke: "rgba(180, 180, 180, .25)",
        selected: "rgba(38, 150, 255, 1.000)",
        selectFill: "rgba(38, 150, 255, 0.05)",
        background: "#212529",
        foreground: "#49555f"
      };
    }
    return {};
  }, [settings.isDarkMode]);
  const handleMenuBlur = React58.useCallback((e) => {
    const elm = rWrapper.current;
    if (!elm)
      return;
    if (!elm.contains(e.relatedTarget))
      return;
    elm.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    elm.dispatchEvent(new Event("pointerup", { bubbles: true }));
  }, []);
  return /* @__PURE__ */ React58.createElement(StyledLayout, {
    ref: rWrapper,
    tabIndex: -0,
    className: settings.isDarkMode ? dark : ""
  }, /* @__PURE__ */ React58.createElement(OneOff, {
    focusableRef: rWrapper,
    autofocus
  }), /* @__PURE__ */ React58.createElement(ContextMenu, {
    onBlur: handleMenuBlur
  }, /* @__PURE__ */ React58.createElement(import_core44.Renderer, {
    id,
    containerRef: rWrapper,
    shapeUtils,
    page,
    pageState,
    snapLines: appState.snapLines,
    grid: GRID_SIZE,
    users: room == null ? void 0 : room.users,
    userId: room == null ? void 0 : room.userId,
    theme,
    meta,
    hideBounds,
    hideHandles,
    hideResizeHandles: isHideResizeHandlesShape,
    hideIndicators,
    hideBindingHandles: !settings.showBindingHandles,
    hideCloneHandles: !settings.showCloneHandles,
    hideRotateHandles: !settings.showRotateHandles,
    hideGrid: !settings.showGrid,
    onPinchStart: app.onPinchStart,
    onPinchEnd: app.onPinchEnd,
    onPinch: app.onPinch,
    onPan: app.onPan,
    onZoom: app.onZoom,
    onPointerDown: app.onPointerDown,
    onPointerMove: app.onPointerMove,
    onPointerUp: app.onPointerUp,
    onPointCanvas: app.onPointCanvas,
    onDoubleClickCanvas: app.onDoubleClickCanvas,
    onRightPointCanvas: app.onRightPointCanvas,
    onDragCanvas: app.onDragCanvas,
    onReleaseCanvas: app.onReleaseCanvas,
    onPointShape: app.onPointShape,
    onDoubleClickShape: app.onDoubleClickShape,
    onRightPointShape: app.onRightPointShape,
    onDragShape: app.onDragShape,
    onHoverShape: app.onHoverShape,
    onUnhoverShape: app.onUnhoverShape,
    onReleaseShape: app.onReleaseShape,
    onPointBounds: app.onPointBounds,
    onDoubleClickBounds: app.onDoubleClickBounds,
    onRightPointBounds: app.onRightPointBounds,
    onDragBounds: app.onDragBounds,
    onHoverBounds: app.onHoverBounds,
    onUnhoverBounds: app.onUnhoverBounds,
    onReleaseBounds: app.onReleaseBounds,
    onPointBoundsHandle: app.onPointBoundsHandle,
    onDoubleClickBoundsHandle: app.onDoubleClickBoundsHandle,
    onRightPointBoundsHandle: app.onRightPointBoundsHandle,
    onDragBoundsHandle: app.onDragBoundsHandle,
    onHoverBoundsHandle: app.onHoverBoundsHandle,
    onUnhoverBoundsHandle: app.onUnhoverBoundsHandle,
    onReleaseBoundsHandle: app.onReleaseBoundsHandle,
    onPointHandle: app.onPointHandle,
    onDoubleClickHandle: app.onDoubleClickHandle,
    onRightPointHandle: app.onRightPointHandle,
    onDragHandle: app.onDragHandle,
    onHoverHandle: app.onHoverHandle,
    onUnhoverHandle: app.onUnhoverHandle,
    onReleaseHandle: app.onReleaseHandle,
    onError: app.onError,
    onRenderCountChange: app.onRenderCountChange,
    onShapeChange: app.onShapeChange,
    onShapeBlur: app.onShapeBlur,
    onShapeClone: app.onShapeClone,
    onBoundsChange: app.updateBounds,
    onKeyDown: app.onKeyDown,
    onKeyUp: app.onKeyUp
  })), showUI && /* @__PURE__ */ React58.createElement(StyledUI, null, settings.isFocusMode ? /* @__PURE__ */ React58.createElement(FocusButton, {
    onSelect: app.toggleFocusMode
  }) : /* @__PURE__ */ React58.createElement(React58.Fragment, null, /* @__PURE__ */ React58.createElement(TopPanel, {
    readOnly,
    showPages,
    showMenu,
    showStyles,
    showZoom,
    showSponsorLink
  }), /* @__PURE__ */ React58.createElement(StyledSpacer2, null), showTools && !readOnly && /* @__PURE__ */ React58.createElement(ToolsPanel, {
    onBlur: handleMenuBlur
  }))));
});
var OneOff = React58.memo(function OneOff2({
  focusableRef,
  autofocus
}) {
  useKeyboardShortcuts(focusableRef);
  useStylesheet();
  React58.useEffect(() => {
    var _a;
    if (autofocus) {
      (_a = focusableRef.current) == null ? void 0 : _a.focus();
    }
  }, [autofocus]);
  return null;
});
var StyledLayout = styled("div", {
  position: "absolute",
  height: "100%",
  width: "100%",
  minHeight: 0,
  minWidth: 0,
  maxHeight: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  outline: "none",
  "& .tl-container": {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 1
  },
  "& input, textarea, button, select, label, button": {
    webkitTouchCallout: "none",
    webkitUserSelect: "none",
    "-webkit-tap-highlight-color": "transparent",
    "tap-highlight-color": "transparent"
  }
});
var StyledUI = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  padding: "8px 8px 0 8px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  pointerEvents: "none",
  zIndex: 2,
  "& > *": {
    pointerEvents: "all"
  }
});
var StyledSpacer2 = styled("div", {
  flexGrow: 2
});
// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
