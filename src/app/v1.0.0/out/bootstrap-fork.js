/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
var b = function(e, r) {
  return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, t) {
    o.__proto__ = t;
  } || function(o, t) {
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i]);
  }, b(e, r);
};

export function __extends(e, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  b(e, r);

  function o() {
    this.constructor = e;
  }

  e.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o);
}

export var __assign = function() {
  return __assign = Object.assign || function(r) {
    for (var o, t = 1, i = arguments.length; t < i; t++) {
      o = arguments[t];
      for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (r[n] = o[n]);
    }
    return r;
  }, __assign.apply(this, arguments);
};

export function __rest(e, r) {
  var o = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) r.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (o[t[i]] = e[t[i]]);
  return o;
}

export function __decorate(e, r, o, t) {
  var i = arguments.length, n = i < 3 ? r : t === null ? t = Object.getOwnPropertyDescriptor(r, o) : t, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, r, o, t); else for (var l = e.length - 1; l >= 0; l--) (a = e[l]) && (n = (i < 3 ? a(n) : i > 3 ? a(r, o, n) : a(r, o)) || n);
  return i > 3 && n && Object.defineProperty(r, o, n), n;
}

export function __param(e, r) {
  return function(o, t) {
    r(o, t, e);
  };
}

export function __esDecorate(e, r, o, t, i, n) {
  function a(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }

  for (var l = t.kind, c = l === "getter" ? "get" : l === "setter" ? "set" : "value", s = !r && e ? t.static ? e : e.prototype : null, u = r || (s ? Object.getOwnPropertyDescriptor(s, t.name) : {}), p, _ = !1, f = o.length - 1; f >= 0; f--) {
    var d = {};
    for (var h in t) d[h] = h === "access" ? {} : t[h];
    for (var h in t.access) d.access[h] = t.access[h];
    d.addInitializer = function(g) {
      if (_) throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(a(g || null));
    };
    var y = (0, o[f])(l === "accessor" ? { get: u.get, set: u.set } : u[c], d);
    if (l === "accessor") {
      if (y === void 0) continue;
      if (y === null || typeof y != "object") throw new TypeError("Object expected");
      (p = a(y.get)) && (u.get = p), (p = a(y.set)) && (u.set = p), (p = a(y.init)) && i.unshift(p);
    } else (p = a(y)) && (l === "field" ? i.unshift(p) : u[c] = p);
  }
  s && Object.defineProperty(s, t.name, u), _ = !0;
}

export function __runInitializers(e, r, o) {
  for (var t = arguments.length > 2, i = 0; i < r.length; i++) o = t ? r[i].call(e, o) : r[i].call(e);
  return t ? o : void 0;
}

export function __propKey(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}

export function __setFunctionName(e, r, o) {
  return typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""), Object.defineProperty(e, "name", {
    configurable: !0,
    value: o ? "".concat(o, " ", r) : r,
  });
}

export function __metadata(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, r);
}

export function __awaiter(e, r, o, t) {
  function i(n) {
    return n instanceof o ? n : new o(function(a) {
      a(n);
    });
  }

  return new (o || (o = Promise))(function(n, a) {
    function l(u) {
      try {
        s(t.next(u));
      } catch (p) {
        a(p);
      }
    }

    function c(u) {
      try {
        s(t.throw(u));
      } catch (p) {
        a(p);
      }
    }

    function s(u) {
      u.done ? n(u.value) : i(u.value).then(l, c);
    }

    s((t = t.apply(e, r || [])).next());
  });
}

export function __generator(e, r) {
  var o = {
    label: 0, sent: function() {
      if (n[0] & 1) throw n[1];
      return n[1];
    }, trys: [], ops: [],
  }, t, i, n, a;
  return a = {
    next: l(0),
    throw: l(1),
    return: l(2),
  }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;

  function l(s) {
    return function(u) {
      return c([s, u]);
    };
  }

  function c(s) {
    if (t) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (o = 0)), o;) try {
      if (t = 1, i && (n = s[0] & 2 ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
      switch (i = 0, n && (s = [s[0] & 2, n.value]), s[0]) {
        case 0:
        case 1:
          n = s;
          break;
        case 4:
          return o.label++, { value: s[1], done: !1 };
        case 5:
          o.label++, i = s[1], s = [0];
          continue;
        case 7:
          s = o.ops.pop(), o.trys.pop();
          continue;
        default:
          if (n = o.trys, !(n = n.length > 0 && n[n.length - 1]) && (s[0] === 6 || s[0] === 2)) {
            o = 0;
            continue;
          }
          if (s[0] === 3 && (!n || s[1] > n[0] && s[1] < n[3])) {
            o.label = s[1];
            break;
          }
          if (s[0] === 6 && o.label < n[1]) {
            o.label = n[1], n = s;
            break;
          }
          if (n && o.label < n[2]) {
            o.label = n[2], o.ops.push(s);
            break;
          }
          n[2] && o.ops.pop(), o.trys.pop();
          continue;
      }
      s = r.call(e, o);
    } catch (u) {
      s = [6, u], i = 0;
    } finally {
      t = n = 0;
    }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}

export var __createBinding = Object.create ? function(e, r, o, t) {
  t === void 0 && (t = o);
  var i = Object.getOwnPropertyDescriptor(r, o);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = {
    enumerable: !0, get: function() {
      return r[o];
    },
  }), Object.defineProperty(e, t, i);
} : function(e, r, o, t) {
  t === void 0 && (t = o), e[t] = r[o];
};

export function __exportStar(e, r) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(r, o) && __createBinding(r, e, o);
}

export function __values(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, o = r && e[r], t = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && t >= e.length && (e = void 0), { value: e && e[t++], done: !e };
    },
  };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

export function __read(e, r) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var t = o.call(e), i, n = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = t.next()).done;) n.push(i.value);
  } catch (l) {
    a = { error: l };
  } finally {
    try {
      i && !i.done && (o = t.return) && o.call(t);
    } finally {
      if (a) throw a.error;
    }
  }
  return n;
}

export function __spread() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
  return e;
}

export function __spreadArrays() {
  for (var e = 0, r = 0, o = arguments.length; r < o; r++) e += arguments[r].length;
  for (var t = Array(e), i = 0, r = 0; r < o; r++) for (var n = arguments[r], a = 0, l = n.length; a < l; a++, i++) t[i] = n[a];
  return t;
}

export function __spreadArray(e, r, o) {
  if (o || arguments.length === 2) for (var t = 0, i = r.length, n; t < i; t++) (n || !(t in r)) && (n || (n = Array.prototype.slice.call(r, 0, t)), n[t] = r[t]);
  return e.concat(n || Array.prototype.slice.call(r));
}

export function __await(e) {
  return this instanceof __await ? (this.v = e, this) : new __await(e);
}

export function __asyncGenerator(e, r, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = o.apply(e, r || []), i, n = [];
  return i = {}, l("next"), l("throw"), l("return", a), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;

  function a(f) {
    return function(d) {
      return Promise.resolve(d).then(f, p);
    };
  }

  function l(f, d) {
    t[f] && (i[f] = function(h) {
      return new Promise(function(y, g) {
        n.push([f, h, y, g]) > 1 || c(f, h);
      });
    }, d && (i[f] = d(i[f])));
  }

  function c(f, d) {
    try {
      s(t[f](d));
    } catch (h) {
      _(n[0][3], h);
    }
  }

  function s(f) {
    f.value instanceof __await ? Promise.resolve(f.value.v).then(u, p) : _(n[0][2], f);
  }

  function u(f) {
    c("next", f);
  }

  function p(f) {
    c("throw", f);
  }

  function _(f, d) {
    f(d), n.shift(), n.length && c(n[0][0], n[0][1]);
  }
}

export function __asyncDelegator(e) {
  var r, o;
  return r = {}, t("next"), t("throw", function(i) {
    throw i;
  }), t("return"), r[Symbol.iterator] = function() {
    return this;
  }, r;

  function t(i, n) {
    r[i] = e[i] ? function(a) {
      return (o = !o) ? { value: __await(e[i](a)), done: !1 } : n ? n(a) : a;
    } : n;
  }
}

export function __asyncValues(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator], o;
  return r ? r.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), o = {}, t("next"), t("throw"), t("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o);

  function t(n) {
    o[n] = e[n] && function(a) {
      return new Promise(function(l, c) {
        a = e[n](a), i(l, c, a.done, a.value);
      });
    };
  }

  function i(n, a, l, c) {
    Promise.resolve(c).then(function(s) {
      n({ value: s, done: l });
    }, a);
  }
}

export function __makeTemplateObject(e, r) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : e.raw = r, e;
}

var V = Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
};

export function __importStar(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var o in e) o !== "default" && Object.prototype.hasOwnProperty.call(e, o) && __createBinding(r, e, o);
  return V(r, e), r;
}

export function __importDefault(e) {
  return e && e.__esModule ? e : { default: e };
}

export function __classPrivateFieldGet(e, r, o, t) {
  if (o === "a" && !t) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !t : !r.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? t : o === "a" ? t.call(e) : t ? t.value : r.get(e);
}

export function __classPrivateFieldSet(e, r, o, t, i) {
  if (t === "m") throw new TypeError("Private method is not writable");
  if (t === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !i : !r.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t === "a" ? i.call(e, o) : i ? i.value = o : r.set(e, o), o;
}

export function __classPrivateFieldIn(e, r) {
  if (r === null || typeof r != "object" && typeof r != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}

export function __addDisposableResource(e, r, o) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var t, i;
    if (o) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      t = r[Symbol.asyncDispose];
    }
    if (t === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      t = r[Symbol.dispose], o && (i = t);
    }
    if (typeof t != "function") throw new TypeError("Object not disposable.");
    i && (t = function() {
      try {
        i.call(this);
      } catch (n) {
        return Promise.reject(n);
      }
    }), e.stack.push({ value: r, dispose: t, async: o });
  } else o && e.stack.push({ async: !0 });
  return r;
}

var U = typeof SuppressedError == "function" ? SuppressedError : function(e, r, o) {
  var t = new Error(o);
  return t.name = "SuppressedError", t.error = e, t.suppressed = r, t;
};

export function __disposeResources(e) {
  function r(t) {
    e.error = e.hasError ? new U(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
  }

  function o() {
    for (; e.stack.length;) {
      var t = e.stack.pop();
      try {
        var i = t.dispose && t.dispose.call(t.value);
        if (t.async) return Promise.resolve(i).then(o, function(n) {
          return r(n), o();
        });
      } catch (n) {
        r(n);
      }
    }
    if (e.hasError) throw e.error;
  }

  return o();
}

export default {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
};

function w(e) {
  const r = [];
  typeof e == "number" && r.push("code/timeOrigin", e);

  function o(i, n) {
    r.push(i, n?.startTime ?? Date.now());
  }

  function t() {
    const i = [];
    for (let n = 0; n < r.length; n += 2) i.push({ name: r[n], startTime: r[n + 1] });
    return i;
  }

  return { mark: o, getMarks: t };
}

function F() {
  if (typeof performance == "object" && typeof performance.mark == "function" && !performance.nodeTiming) return typeof performance.timeOrigin != "number" && !performance.timing ? w() : {
    mark(e, r) {
      performance.mark(e, r);
    }, getMarks() {
      let e = performance.timeOrigin;
      typeof e != "number" && (e = performance.timing.navigationStart || performance.timing.redirectStart || performance.timing.fetchStart);
      const r = [{ name: "code/timeOrigin", startTime: Math.round(e) }];
      for (const o of performance.getEntriesByType("mark")) r.push({
        name: o.name,
        startTime: Math.round(e + o.startTime),
      });
      return r;
    },
  };
  if (typeof process == "object") {
    const e = performance?.timeOrigin;
    return w(e);
  } else return console.trace("perf-util loaded in UNKNOWN environment"), w();
}

function M(e) {
  return e.MonacoPerformanceMarks || (e.MonacoPerformanceMarks = F()), e.MonacoPerformanceMarks;
}

var R = M(globalThis), P = R.mark, fe = R.getMarks;
import *as N from "path";
import *as v from "path";
import *as m from "path";
import "fs";
import { fileURLToPath as k, fileURLToPath as H } from "url";
import { createRequire as G, createRequire as q, createRequire as W, register as K } from "node:module";
import *as O from "fs";
import *as j from "crypto";
import *as I from "os";
import S from "lodash.merge";

var x = G(import.meta.url), _e = N.dirname(k(import.meta.url));
if (Error.stackTraceLimit = 100, !process.env.VSCODE_HANDLES_SIGPIPE) {
  let e = !1;
  process.on("SIGPIPE", () => {
    e || (e = !0, console.error(new Error("Unexpected SIGPIPE")));
  });
}

function J() {
  try {
    typeof process.env.VSCODE_CWD != "string" && (process.env.VSCODE_CWD = process.cwd()), process.platform === "win32" && process.chdir(N.dirname(process.execPath));
  } catch (e) {
    console.error(e);
  }
}

J();

function $(e) {
  if (!process.env.VSCODE_DEV) return;
  if (!e) throw new Error("Missing injectPath");
  x("node:module").register("./bootstrap-import.js", { parentURL: import.meta.url, data: e });
}

function B() {
  if (typeof process?.versions?.electron == "string") return;
  const e = x("module"), r = e.globalPaths, o = e._resolveLookupPaths;
  e._resolveLookupPaths = function(t, i) {
    const n = o(t, i);
    if (Array.isArray(n)) {
      let a = 0;
      for (; a < n.length && n[n.length - 1 - a] === r[r.length - 1 - a];) a++;
      return n.slice(0, n.length - a);
    }
    return n;
  };
}

var A = W(import.meta.url), D = { BUILD_INSERT_PRODUCT_CONFIGURATION: "BUILD_INSERT_PRODUCT_CONFIGURATION" };
D.BUILD_INSERT_PRODUCT_CONFIGURATION && (D = A("../product.json"));
var T = {
  "name": "Trae",
  "version": "1.95.3",
  "distro": "2ac4fd6b98c3720a7f66b21121c105f2e9db964d",
  "author": { "name": "Microsoft Corporation" },
  "license": "MIT",
  "main": "./out/main.js",
  "type": "module",
  "private": true,
  "scripts": {
    "test": "echo Please run any of the test scripts from the scripts folder.",
    "test-browser": "npx playwright install && node test/unit/browser/index.js",
    "test-browser-no-install": "node test/unit/browser/index.js",
    "test-node": "mocha test/unit/node/index.js --delay --ui=tdd --timeout=5000 --exit",
    "test-extension": "vscode-test",
    "preinstall": "sh preinstall.sh && node build/npm/preinstall.js",
    "postinstall": "node build/npm/postinstall.js && sh update-stable-webcomponents-pkg.sh",
    "watch-stable-webcomponents": "cd stable-webcomponents && npm run watch",
    "tron-memorize": "tron-client memorize",
    "watch:debug": "npm-run-all -lp watch-client:inline-sourcemap watch-extensions:inline-sourcemap",
    "watch-client:inline-sourcemap": "INLINE_SOURCEMAP=1 node --max_old_space_size=4095 ./node_modules/gulp/bin/gulp.js watch-client",
    "compile": "node ./node_modules/gulp/bin/gulp.js compile",
    "watch": "npm-run-all -lp watch-client watch-extensions",
    "watchd": "deemon npm run watch",
    "watch-webd": "deemon npm run watch-web",
    "kill-watchd": "deemon --kill npm run watch",
    "kill-watch-webd": "deemon --kill npm run watch-web",
    "restart-watchd": "deemon --restart npm run watch",
    "restart-watch-webd": "deemon --restart npm run watch-web",
    "watch-client": "node --max-old-space-size=8192 ./node_modules/gulp/bin/gulp.js watch-client",
    "watch-clientd": "deemon npm run watch-client",
    "kill-watch-clientd": "deemon --kill npm run watch-client",
    "watch-extensions": "node --max-old-space-size=8192 ./node_modules/gulp/bin/gulp.js watch-extensions watch-extension-media",
    "watch-extensionsd": "deemon npm run watch-extensions",
    "kill-watch-extensionsd": "deemon --kill npm run watch-extensions",
    "precommit": "node build/hygiene.js",
    "gulp": "node --max-old-space-size=8192 ./node_modules/gulp/bin/gulp.js",
    "electron": "node build/lib/electron",
    "7z": "7z",
    "update-grammars": "node build/npm/update-all-grammars.mjs",
    "update-localization-extension": "node build/npm/update-localization-extension.js",
    "smoketest": "node build/lib/preLaunch.js && cd test/smoke && npm run compile && node test/index.js",
    "smoketest-no-compile": "cd test/smoke && node test/index.js",
    "download-builtin-extensions": "node build/lib/builtInExtensions.js",
    "download-builtin-extensions-cg": "node build/lib/builtInExtensionsCG.js",
    "monaco-compile-check": "tsc -p src/tsconfig.monaco.json --noEmit",
    "tsec-compile-check": "node node_modules/tsec/bin/tsec -p src/tsconfig.tsec.json",
    "vscode-dts-compile-check": "tsc -p src/tsconfig.vscode-dts.json && tsc -p src/tsconfig.vscode-proposed-dts.json",
    "valid-layers-check": "node build/lib/layersChecker.js",
    "update-distro": "node build/npm/update-distro.mjs",
    "web": "echo 'npm run web' is replaced by './scripts/code-server' or './scripts/code-web'",
    "compile-cli": "gulp compile-cli",
    "compile-web": "node ./node_modules/gulp/bin/gulp.js compile-web",
    "watch-web": "node ./node_modules/gulp/bin/gulp.js watch-web",
    "watch-cli": "node ./node_modules/gulp/bin/gulp.js watch-cli",
    "eslint": "node build/eslint",
    "stylelint": "node build/stylelint",
    "playwright-install": "npm exec playwright install",
    "compile-build": "node ./node_modules/gulp/bin/gulp.js compile-build",
    "compile-extensions-build": "node ./node_modules/gulp/bin/gulp.js compile-extensions-build",
    "minify-vscode": "node ./node_modules/gulp/bin/gulp.js minify-vscode",
    "minify-vscode-reh": "node ./node_modules/gulp/bin/gulp.js minify-vscode-reh",
    "minify-vscode-reh-web": "node ./node_modules/gulp/bin/gulp.js minify-vscode-reh-web",
    "hygiene": "node ./node_modules/gulp/bin/gulp.js hygiene",
    "core-ci": "node ./node_modules/gulp/bin/gulp.js core-ci",
    "core-ci-pr": "node ./node_modules/gulp/bin/gulp.js core-ci-pr",
    "extensions-ci": "node ./node_modules/gulp/bin/gulp.js extensions-ci",
    "extensions-ci-pr": "node ./node_modules/gulp/bin/gulp.js extensions-ci-pr",
    "perf": "node scripts/code-perf.js",
    "dev:ai": "bash ./scripts/code-server.sh --default-folder=../../extensions/icube-ai --without-connection-token --host=0.0.0.0",
    "dev:ai-cn": "export VSCODE_NLS_LOCALE=zh-cn VSCODE_NLS_META_URL=https://lf-cdn.marscode.com/obj/marscode-bucket-sg/mars/ide/91550acc7996260fa4564da33595bd1f/out/nls.metadata.json && bash ./scripts/code-server.sh --default-folder=../../extensions/icube-ai --without-connection-token --host=0.0.0.0",
    "start:ai": "rush update && cd ../../modules/ai && rush build -t @byted-icube/ai-modules && rush build -t @byted-icube/ai-modules-ng && rush build -t @byted-icube/desktop-modules && pnpm link --global && pnpm watch",
    "start:icube": "cd ../../extensions/icube-ai && pnpm install && pnpm compile && pnpm build:icube-ai && cd icube-ai && pnpm watch",
    "start:vscode": "cd ../../ && cd lib/vscode && npm i && npm run watch && pnpm link --global @byted-icube/ai-modules && pnpm link --global @byted-icube/ai-modules",
    "start:code": "./scripts/code.sh",
    "update-build-ts-version": "npm install typescript@next && tsc -p ./build/tsconfig.build.json",
  },
  "dependencies": {
    "@ai-local-server/agent": "2.0.0-alpha.7",
    "@ai-local-server/common": "0.2.11",
    "@aws-sdk/client-s3": "^3.723.0",
    "@byted-icube/ai-modules": "file:../../modules/ai/cdn",
    "@byted-icube/ai-modules-agent": "file:../../modules/ai-agent/cdn",
    "@byted-icube/ai-modules-ng": "file:../../modules/ai-ng/cdn",
    "@byted-icube/desktop-modules": "file:../../modules/desktop/cdn",
    "@byted-icube/env": "file:../../packages/env/cdn",
    "@byted-icube/fd": "^1.0.0",
    "@byted-icube/lite-modules": "file:../../modules/lite/cdn",
    "@byted-icube/manager-sdk": "^0.0.6-beta.20",
    "@byted-icube/oj-modules": "file:../../modules/oj/cdn",
    "@byted-icube/slardar": "file:../../packages/slardar/cdn",
    "@byted-icube/tea": "file:../../packages/tea/cdn",
    "@byted-icube/webcomponents": "file:./stable-webcomponents/cdn",
    "@byted/device-register": "^0.0.2",
    "@ies/tron-client": "^1.2.0",
    "@microsoft/1ds-core-js": "^3.2.13",
    "@microsoft/1ds-post-js": "^3.2.13",
    "@parcel/watcher": "2.1.0",
    "@types/semver": "^7.5.8",
    "@volcengine/tos-sdk": "^2.7.3",
    "@vscode/deviceid": "^0.1.1",
    "@vscode/iconv-lite-umd": "0.7.0",
    "@vscode/policy-watcher": "^1.1.8",
    "@vscode/proxy-agent": "^0.22.0",
    "@vscode/ripgrep": "^1.15.9",
    "@vscode/spdlog": "^0.15.0",
    "@vscode/sqlite3": "5.1.8-vscode",
    "@vscode/sudo-prompt": "9.3.1",
    "@vscode/tree-sitter-wasm": "^0.0.4",
    "@vscode/vscode-languagedetection": "1.0.21",
    "@vscode/windows-mutex": "^0.5.0",
    "@vscode/windows-process-tree": "^0.6.0",
    "@vscode/windows-registry": "^1.1.0",
    "@xterm/addon-clipboard": "^0.2.0-beta.48",
    "@xterm/addon-image": "^0.9.0-beta.65",
    "@xterm/addon-search": "^0.16.0-beta.65",
    "@xterm/addon-serialize": "^0.14.0-beta.65",
    "@xterm/addon-unicode11": "^0.9.0-beta.65",
    "@xterm/addon-webgl": "^0.19.0-beta.65",
    "@xterm/headless": "^5.6.0-beta.65",
    "@xterm/xterm": "^5.6.0-beta.65",
    "archiver": "^7.0.1",
    "axios": "^1.7.9",
    "electron-updater": "^6.3.9",
    "http-proxy-agent": "^7.0.0",
    "https-proxy-agent": "^7.0.2",
    "jschardet": "3.1.4",
    "jsonrepair": "3.8.1",
    "kerberos": "2.1.1",
    "lodash.merge": "^4.6.2",
    "minimist": "^1.2.6",
    "native-is-elevated": "0.7.0",
    "native-keymap": "^3.3.5",
    "native-watchdog": "^1.4.1",
    "node-ipc": "^9.2.1",
    "node-pty": "^1.1.0-beta22",
    "open": "^8.4.2",
    "portfinder": "^1.0.32",
    "qs": "^6.13.0",
    "tar": "^7.4.3",
    "tas-client-umd": "0.2.0",
    "util": "^0.12.4",
    "v8-inspect-profiler": "^0.1.1",
    "vscode-oniguruma": "1.7.0",
    "vscode-regexpp": "^3.1.0",
    "vscode-textmate": "9.1.0",
    "ws": "^8.18.0",
    "yauzl": "^3.0.0",
    "yazl": "^2.4.3",
  },
  "devDependencies": {
    "@playwright/test": "^1.46.1",
    "@stylistic/eslint-plugin-ts": "^2.8.0",
    "@types/archiver": "^6.0.3",
    "@types/cookie": "^0.3.3",
    "@types/debug": "^4.1.5",
    "@types/eslint": "^9.6.1",
    "@types/gulp-svgmin": "^1.2.1",
    "@types/http-proxy-agent": "^2.0.1",
    "@types/kerberos": "^1.1.2",
    "@types/lodash.merge": "^4.6.9",
    "@types/minimist": "^1.2.1",
    "@types/mocha": "^9.1.1",
    "@types/node": "20.x",
    "@types/node-ipc": "^9.2.3",
    "@types/qs": "^6.9.16",
    "@types/sinon": "^10.0.2",
    "@types/sinon-test": "^2.4.2",
    "@types/trusted-types": "^1.0.6",
    "@types/vscode-notebook-renderer": "^1.72.0",
    "@types/webpack": "^5.28.5",
    "@types/wicg-file-system-access": "^2020.9.6",
    "@types/windows-foreground-love": "^0.3.0",
    "@types/winreg": "^1.2.30",
    "@types/ws": "^8.5.13",
    "@types/yauzl": "^2.10.0",
    "@types/yazl": "^2.4.2",
    "@typescript-eslint/utils": "^8.8.0",
    "@vscode/gulp-electron": "^1.36.0",
    "@vscode/l10n-dev": "0.0.35",
    "@vscode/telemetry-extractor": "^1.10.2",
    "@vscode/test-cli": "^0.0.6",
    "@vscode/test-electron": "^2.4.0",
    "@vscode/test-web": "^0.0.62",
    "@vscode/v8-heap-parser": "^0.1.0",
    "@vscode/vscode-perf": "^0.0.19",
    "@webgpu/types": "^0.1.44",
    "ansi-colors": "^3.2.3",
    "asar": "^3.0.3",
    "chromium-pickle-js": "^0.2.0",
    "clang-format": "^1.8.0",
    "cookie": "^0.7.2",
    "copy-webpack-plugin": "^11.0.0",
    "css-loader": "^6.9.1",
    "cssnano": "^6.0.3",
    "debounce": "^1.0.0",
    "deemon": "^1.8.0",
    "electron": "32.2.1",
    "eslint": "^9.11.1",
    "eslint-formatter-compact": "^8.40.0",
    "eslint-plugin-header": "3.1.1",
    "eslint-plugin-jsdoc": "^50.3.1",
    "eslint-plugin-local": "^6.0.0",
    "event-stream": "3.3.4",
    "fancy-log": "^1.3.3",
    "file-loader": "^6.2.0",
    "glob": "^5.0.13",
    "gulp": "^4.0.0",
    "gulp-azure-storage": "^0.12.1",
    "gulp-bom": "^3.0.0",
    "gulp-buffer": "0.0.2",
    "gulp-filter": "^5.1.0",
    "gulp-flatmap": "^1.0.2",
    "gulp-gunzip": "^1.0.0",
    "gulp-gzip": "^1.4.2",
    "gulp-json-editor": "^2.5.0",
    "gulp-plumber": "^1.2.0",
    "gulp-rename": "^1.2.0",
    "gulp-replace": "^0.5.4",
    "gulp-sourcemaps": "^3.0.0",
    "gulp-svgmin": "^4.1.0",
    "gulp-untar": "^0.0.7",
    "husky": "^0.13.1",
    "innosetup": "6.0.5",
    "istanbul-lib-coverage": "^3.2.0",
    "istanbul-lib-instrument": "^6.0.1",
    "istanbul-lib-report": "^3.0.0",
    "istanbul-lib-source-maps": "^4.0.1",
    "istanbul-reports": "^3.1.5",
    "lazy.js": "^0.4.2",
    "merge-options": "^1.0.1",
    "mime": "^1.4.1",
    "minimatch": "^3.0.4",
    "minimist": "^1.2.6",
    "mocha": "^10.2.0",
    "mocha-junit-reporter": "^2.2.1",
    "mocha-multi-reporters": "^1.5.1",
    "npm-run-all": "^4.1.5",
    "os-browserify": "^0.3.0",
    "p-all": "^1.0.0",
    "path-browserify": "^1.0.1",
    "postcss": "^8.4.33",
    "postcss-nesting": "^12.0.2",
    "pump": "^1.0.1",
    "rcedit": "^1.1.0",
    "rimraf": "^2.2.8",
    "sinon": "^12.0.1",
    "sinon-test": "^3.1.3",
    "source-map": "0.6.1",
    "source-map-support": "^0.3.2",
    "style-loader": "^3.3.2",
    "ts-loader": "^9.5.1",
    "ts-node": "^10.9.1",
    "tsec": "0.2.7",
    "tslib": "^2.6.3",
    "typescript": "^5.7.0-dev.20241021",
    "typescript-eslint": "^8.8.0",
    "util": "^0.12.4",
    "webpack": "^5.94.0",
    "webpack-cli": "^5.1.4",
    "webpack-stream": "^7.0.0",
    "xml2js": "^0.5.0",
    "yaserver": "^0.4.0",
  },
  "overrides": {
    "node-gyp-build": "4.8.1",
    "kerberos@2.1.1": { "node-addon-api": "7.1.0" },
    "@parcel/watcher@2.1.0": { "node-addon-api": "7.1.0" },
  },
  "repository": { "type": "git", "url": "https://github.com/microsoft/vscode.git" },
  "bugs": { "url": "https://github.com/microsoft/vscode/issues" },
  "optionalDependencies": { "windows-foreground-love": "0.5.0" },
  "buildId": "12280514",
  "branch": "release_desktop_i18n",
};
T.BUILD_INSERT_PACKAGE_CONFIGURATION && (T = A("../package.json"));
var X = D, Y = T;

var z = process.env.VSCODE_CWD || process.cwd();

function Q(e, r) {
  const o = Z(e, r), t = [o];
  return m.isAbsolute(o) || t.unshift(z), m.resolve(...t);
}

function Z(e, r) {
  const o = process.env.VSCODE_PORTABLE;
  if (o) return m.join(o, "user-data");
  let t = process.env.VSCODE_APPDATA;
  if (t) return m.join(t, r);
  const i = e["user-data-dir"];
  if (i) return i;
  switch (process.platform) {
    case"win32":
      if (t = process.env.APPDATA, !t) {
        const n = process.env.USERPROFILE;
        if (typeof n != "string") throw new Error("Windows: Unexpected undefined %USERPROFILE% environment variable");
        t = m.join(n, "AppData", "Roaming");
      }
      break;
    case"darwin":
      t = m.join(I.homedir(), "Library", "Application Support");
      break;
    case"linux":
      t = process.env.XDG_CONFIG_HOME || m.join(I.homedir(), ".config");
      break;
    default:
      throw new Error("Platform not supported");
  }
  return m.join(t, r);
}

var E = q(import.meta.url), L = v.dirname(H(import.meta.url));
if ((process.env.ELECTRON_RUN_AS_NODE || process.versions.electron) && K(`data:text/javascript;base64,${Buffer.from(`
	export async function resolve(specifier, context, nextResolve) {
		if (specifier === 'fs') {
			return {
				format: 'builtin',
				shortCircuit: true,
				url: 'node:original-fs'
			};
		}

		// Defer to the next hook in the chain, which would be the
		// Node.js default resolve if this is the last user-specified loader.
		return nextResolve(specifier, context);
	}`).toString("base64")}`, import.meta.url), globalThis._VSCODE_PRODUCT_JSON = { ...X }, process.env.VSCODE_DEV) {
  try {
    const e = E("../product.overrides.json");
    globalThis._VSCODE_PRODUCT_JSON = Object.assign(globalThis._VSCODE_PRODUCT_JSON, e);
  } catch {
  }
  try {
    if (process.env.ICUBE_DEV_PROVIDER === "Spring") {
      const e = E("../product.desktop.spring.json");
      globalThis._VSCODE_PRODUCT_JSON = S(globalThis._VSCODE_PRODUCT_JSON, e);
    } else {
      const e = E("../product.desktop.json");
      globalThis._VSCODE_PRODUCT_JSON = S(globalThis._VSCODE_PRODUCT_JSON, e);
    }
    if (O.existsSync(v.join(L, "product.desktop.local.json"))) {
      const e = E("../product.desktop.local.json");
      globalThis._VSCODE_PRODUCT_JSON = S(globalThis._VSCODE_PRODUCT_JSON, e);
    }
    globalThis._VSCODE_PRODUCT_JSON = S(globalThis._VSCODE_PRODUCT_JSON, { quality: "local" });
  } catch {
  }
}
try {
  ee();
} catch (e) {
  console.error(`Error when merging config: ${e}`);
}

function ee() {
  let e = globalThis._VSCODE_PRODUCT_JSON.nameShort;
  process.env.VSCODE_DEV && (e = `${e} - Local`);
  const r = Q({}, e), o = v.join(r, "Local Storage", "config.db");
  if (!O.existsSync(o)) {
    console.log("No config file found");
    return;
  }
  const t = O.readFileSync(o), i = t.slice(0, 16), n = t.slice(16), a = j.createHash("md5").update(e).digest("hex"),
    l = j.createDecipheriv("aes-256-cbc", Buffer.from(a), i);
  let c = l.update(n);
  c = Buffer.concat([c, l.final()]);
  const s = JSON.parse(c.toString());
  s.iCubeApp && (globalThis._VSCODE_PRODUCT_JSON = S(globalThis._VSCODE_PRODUCT_JSON, { iCubeApp: s.iCubeApp }));
}

globalThis._VSCODE_PACKAGE_JSON = { ...Y }, globalThis._VSCODE_FILE_ROOT = L;
var C = void 0;

function re() {
  return C || (C = te()), C;
}

async function te() {
  P("code/willLoadNls");
  let e, r;
  if (process.env.VSCODE_NLS_CONFIG) try {
    e = JSON.parse(process.env.VSCODE_NLS_CONFIG), e?.languagePack?.messagesFile ? r = e.languagePack.messagesFile : e?.defaultMessagesFile && (r = e.defaultMessagesFile), globalThis._VSCODE_NLS_LANGUAGE = e?.resolvedLanguage;
  } catch (o) {
    console.error(`Error reading VSCODE_NLS_CONFIG from environment: ${o}`);
  }
  if (!(process.env.VSCODE_DEV || !r)) {
    try {
      globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await O.promises.readFile(r)).toString());
    } catch (o) {
      if (console.error(`Error reading NLS messages file ${r}: ${o}`), e?.languagePack?.corruptMarkerFile) try {
        await O.promises.writeFile(e.languagePack.corruptMarkerFile, "corrupted");
      } catch (t) {
        console.error(`Error writing corrupted NLS marker file: ${t}`);
      }
      if (e?.defaultMessagesFile && e.defaultMessagesFile !== r) try {
        globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await O.promises.readFile(e.defaultMessagesFile)).toString());
      } catch (t) {
        console.error(`Error reading default NLS messages file ${e.defaultMessagesFile}: ${t}`);
      }
    }
    return P("code/didLoadNls"), e;
  }
}

async function oe() {
  await re();
}

P("code/fork/start");

function ne() {
  function o(c) {
    const s = [], u = [];
    if (c.length) for (let p = 0; p < c.length; p++) {
      let _ = c[p];
      if (typeof _ > "u") _ = "undefined"; else if (_ instanceof Error) {
        const f = _;
        f.stack ? _ = f.stack : _ = f.toString();
      }
      u.push(_);
    }
    try {
      const p = JSON.stringify(u, function(_, f) {
        if (i(f) || Array.isArray(f)) {
          if (s.indexOf(f) !== -1) return "[Circular]";
          s.push(f);
        }
        return f;
      });
      return p.length > 1e5 ? "Output omitted for a large object that exceeds the limits" : p;
    } catch (p) {
      return `Output omitted for an object that cannot be inspected ('${p.toString()}')`;
    }
  }

  function t(c) {
    try {
      process.send && process.send(c);
    } catch {
    }
  }

  function i(c) {
    return typeof c == "object" && c !== null && !Array.isArray(c) && !(c instanceof RegExp) && !(c instanceof Date);
  }

  function n(c, s) {
    t({ type: "__$console", severity: c, arguments: s });
  }

  function a(c, s) {
    Object.defineProperty(console, c, {
      set: () => {
      }, get: () => function() {
        n(s, o(arguments));
      },
    });
  }

  function l(c, s) {
    const u = process[c], p = u.write;
    let _ = "";
    Object.defineProperty(u, "write", {
      set: () => {
      }, get: () => (f, d, h) => {
        _ += f.toString(d);
        const y = _.length > 1048576 ? _.length : _.lastIndexOf(`
`);
        y !== -1 && (console[s](_.slice(0, y)), _ = _.slice(y + 1)), p.call(u, f, d, h);
      },
    });
  }

  process.env.VSCODE_VERBOSE_LOGGING === "true" ? (a("info", "log"), a("log", "log"), a("warn", "warn"), a("error", "error")) : (console.log = function() {
  }, console.warn = function() {
  }, console.info = function() {
  }, a("error", "error")), l("stderr", "error"), l("stdout", "log");
}

function ie() {
  process.on("uncaughtException", function(e) {
    console.error("Uncaught Exception: ", e);
  }), process.on("unhandledRejection", function(e) {
    console.error("Unhandled Promise Rejection: ", e);
  });
}

function ae() {
  const e = Number(process.env.VSCODE_PARENT_PID);
  typeof e == "number" && !isNaN(e) && setInterval(function() {
    try {
      process.kill(e, 0);
    } catch {
      process.exit();
    }
  }, 5e3);
}

function se() {
  const e = process.env.VSCODE_CRASH_REPORTER_PROCESS_TYPE;
  if (e) try {
    process.crashReporter && typeof process.crashReporter.addExtraParameter == "function" && process.crashReporter.addExtraParameter("processType", e);
  } catch (r) {
    console.error(r);
  }
}

se(), B(), process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH && $(process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH), process.send && process.env.VSCODE_PIPE_LOGGING === "true" && ne(), process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS || ie(), process.env.VSCODE_PARENT_PID && ae(), await oe(), await import([`./${process.env.VSCODE_ESM_ENTRYPOINT}.js`].join("/"));

//# sourceMappingURL=https://trae.private/sourcemaps/424b4bd987c6c6a4cadf1a08da420593cc6bf75a/bootstrap-fork.js.map
