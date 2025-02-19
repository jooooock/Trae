var qn = function (e, t) {
  return (
    (qn =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, s) {
          i.__proto__ = s;
        }) ||
      function (i, s) {
        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (i[r] = s[r]);
      }),
    qn(e, t)
  );
};
export function __extends(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  qn(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((i.prototype = t.prototype), new i());
}
export var __assign = function () {
  return (
    (__assign =
      Object.assign ||
      function (t) {
        for (var i, s = 1, r = arguments.length; s < r; s++) {
          i = arguments[s];
          for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
        }
        return t;
      }),
    __assign.apply(this, arguments)
  );
};
export function __rest(e, t) {
  var i = {};
  for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (i[s[r]] = e[s[r]]);
  return i;
}
export function __decorate(e, t, i, s) {
  var r = arguments.length,
    n = r < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, i)) : s,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(e, t, i, s);
  else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (n = (r < 3 ? o(n) : r > 3 ? o(t, i, n) : o(t, i)) || n);
  return r > 3 && n && Object.defineProperty(t, i, n), n;
}
export function __param(e, t) {
  return function (i, s) {
    t(i, s, e);
  };
}
export function __esDecorate(e, t, i, s, r, n) {
  function o(v) {
    if (v !== void 0 && typeof v != "function") throw new TypeError("Function expected");
    return v;
  }
  for (
    var a = s.kind, c = a === "getter" ? "get" : a === "setter" ? "set" : "value", l = !t && e ? (s.static ? e : e.prototype) : null, h = t || (l ? Object.getOwnPropertyDescriptor(l, s.name) : {}), u, f = !1, p = i.length - 1;
    p >= 0;
    p--
  ) {
    var w = {};
    for (var m in s) w[m] = m === "access" ? {} : s[m];
    for (var m in s.access) w.access[m] = s.access[m];
    w.addInitializer = function (v) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(o(v || null));
    };
    var y = (0, i[p])(a === "accessor" ? { get: h.get, set: h.set } : h[c], w);
    if (a === "accessor") {
      if (y === void 0) continue;
      if (y === null || typeof y != "object") throw new TypeError("Object expected");
      (u = o(y.get)) && (h.get = u), (u = o(y.set)) && (h.set = u), (u = o(y.init)) && r.unshift(u);
    } else (u = o(y)) && (a === "field" ? r.unshift(u) : (h[c] = u));
  }
  l && Object.defineProperty(l, s.name, h), (f = !0);
}
export function __runInitializers(e, t, i) {
  for (var s = arguments.length > 2, r = 0; r < t.length; r++) i = s ? t[r].call(e, i) : t[r].call(e);
  return s ? i : void 0;
}
export function __propKey(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
export function __setFunctionName(e, t, i) {
  return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", { configurable: !0, value: i ? "".concat(i, " ", t) : t });
}
export function __metadata(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
export function __awaiter(e, t, i, s) {
  function r(n) {
    return n instanceof i
      ? n
      : new i(function (o) {
          o(n);
        });
  }
  return new (i || (i = Promise))(function (n, o) {
    function a(h) {
      try {
        l(s.next(h));
      } catch (u) {
        o(u);
      }
    }
    function c(h) {
      try {
        l(s.throw(h));
      } catch (u) {
        o(u);
      }
    }
    function l(h) {
      h.done ? n(h.value) : r(h.value).then(a, c);
    }
    l((s = s.apply(e, t || [])).next());
  });
}
export function __generator(e, t) {
  var i = {
      label: 0,
      sent: function () {
        if (n[0] & 1) throw n[1];
        return n[1];
      },
      trys: [],
      ops: [],
    },
    s,
    r,
    n,
    o;
  return (
    (o = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(l) {
    return function (h) {
      return c([l, h]);
    };
  }
  function c(l) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), l[0] && (i = 0)), i; )
      try {
        if (((s = 1), r && (n = l[0] & 2 ? r.return : l[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, l[1])).done)) return n;
        switch (((r = 0), n && (l = [l[0] & 2, n.value]), l[0])) {
          case 0:
          case 1:
            n = l;
            break;
          case 4:
            return i.label++, { value: l[1], done: !1 };
          case 5:
            i.label++, (r = l[1]), (l = [0]);
            continue;
          case 7:
            (l = i.ops.pop()), i.trys.pop();
            continue;
          default:
            if (((n = i.trys), !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2))) {
              i = 0;
              continue;
            }
            if (l[0] === 3 && (!n || (l[1] > n[0] && l[1] < n[3]))) {
              i.label = l[1];
              break;
            }
            if (l[0] === 6 && i.label < n[1]) {
              (i.label = n[1]), (n = l);
              break;
            }
            if (n && i.label < n[2]) {
              (i.label = n[2]), i.ops.push(l);
              break;
            }
            n[2] && i.ops.pop(), i.trys.pop();
            continue;
        }
        l = t.call(e, i);
      } catch (h) {
        (l = [6, h]), (r = 0);
      } finally {
        s = n = 0;
      }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
export var __createBinding = Object.create
  ? function (e, t, i, s) {
      s === void 0 && (s = i);
      var r = Object.getOwnPropertyDescriptor(t, i);
      (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) &&
        (r = {
          enumerable: !0,
          get: function () {
            return t[i];
          },
        }),
        Object.defineProperty(e, s, r);
    }
  : function (e, t, i, s) {
      s === void 0 && (s = i), (e[s] = t[i]);
    };
export function __exportStar(e, t) {
  for (var i in e) i !== "default" && !Object.prototype.hasOwnProperty.call(t, i) && __createBinding(t, e, i);
}
export function __values(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    i = t && e[t],
    s = 0;
  if (i) return i.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e };
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
export function __read(e, t) {
  var i = typeof Symbol == "function" && e[Symbol.iterator];
  if (!i) return e;
  var s = i.call(e),
    r,
    n = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = s.next()).done; ) n.push(r.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      r && !r.done && (i = s.return) && i.call(s);
    } finally {
      if (o) throw o.error;
    }
  }
  return n;
}
export function __spread() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
  return e;
}
export function __spreadArrays() {
  for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
  for (var s = Array(e), r = 0, t = 0; t < i; t++) for (var n = arguments[t], o = 0, a = n.length; o < a; o++, r++) s[r] = n[o];
  return s;
}
export function __spreadArray(e, t, i) {
  if (i || arguments.length === 2) for (var s = 0, r = t.length, n; s < r; s++) (n || !(s in t)) && (n || (n = Array.prototype.slice.call(t, 0, s)), (n[s] = t[s]));
  return e.concat(n || Array.prototype.slice.call(t));
}
export function __await(e) {
  return this instanceof __await ? ((this.v = e), this) : new __await(e);
}
export function __asyncGenerator(e, t, i) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = i.apply(e, t || []),
    r,
    n = [];
  return (
    (r = {}),
    a("next"),
    a("throw"),
    a("return", o),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function o(p) {
    return function (w) {
      return Promise.resolve(w).then(p, u);
    };
  }
  function a(p, w) {
    s[p] &&
      ((r[p] = function (m) {
        return new Promise(function (y, v) {
          n.push([p, m, y, v]) > 1 || c(p, m);
        });
      }),
      w && (r[p] = w(r[p])));
  }
  function c(p, w) {
    try {
      l(s[p](w));
    } catch (m) {
      f(n[0][3], m);
    }
  }
  function l(p) {
    p.value instanceof __await ? Promise.resolve(p.value.v).then(h, u) : f(n[0][2], p);
  }
  function h(p) {
    c("next", p);
  }
  function u(p) {
    c("throw", p);
  }
  function f(p, w) {
    p(w), n.shift(), n.length && c(n[0][0], n[0][1]);
  }
}
export function __asyncDelegator(e) {
  var t, i;
  return (
    (t = {}),
    s("next"),
    s("throw", function (r) {
      throw r;
    }),
    s("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function s(r, n) {
    t[r] = e[r]
      ? function (o) {
          return (i = !i) ? { value: __await(e[r](o)), done: !1 } : n ? n(o) : o;
        }
      : n;
  }
}
export function __asyncValues(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    i;
  return t
    ? t.call(e)
    : ((e = typeof __values == "function" ? __values(e) : e[Symbol.iterator]()),
      (i = {}),
      s("next"),
      s("throw"),
      s("return"),
      (i[Symbol.asyncIterator] = function () {
        return this;
      }),
      i);
  function s(n) {
    i[n] =
      e[n] &&
      function (o) {
        return new Promise(function (a, c) {
          (o = e[n](o)), r(a, c, o.done, o.value);
        });
      };
  }
  function r(n, o, a, c) {
    Promise.resolve(c).then(function (l) {
      n({ value: l, done: a });
    }, o);
  }
}
export function __makeTemplateObject(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
}
var f1 = Object.create
  ? function (e, t) {
      Object.defineProperty(e, "default", { enumerable: !0, value: t });
    }
  : function (e, t) {
      e.default = t;
    };
export function __importStar(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && __createBinding(t, e, i);
  return f1(t, e), t;
}
export function __importDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
export function __classPrivateFieldGet(e, t, i, s) {
  if (i === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return i === "m" ? s : i === "a" ? s.call(e) : s ? s.value : t.get(e);
}
export function __classPrivateFieldSet(e, t, i, s, r) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? r.call(e, i) : r ? (r.value = i) : t.set(e, i), i;
}
export function __classPrivateFieldIn(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
export function __addDisposableResource(e, t, i) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var s, r;
    if (i) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      s = t[Symbol.asyncDispose];
    }
    if (s === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      (s = t[Symbol.dispose]), i && (r = s);
    }
    if (typeof s != "function") throw new TypeError("Object not disposable.");
    r &&
      (s = function () {
        try {
          r.call(this);
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      e.stack.push({ value: t, dispose: s, async: i });
  } else i && e.stack.push({ async: !0 });
  return t;
}
var d1 =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, i) {
        var s = new Error(i);
        return (s.name = "SuppressedError"), (s.error = e), (s.suppressed = t), s;
      };
export function __disposeResources(e) {
  function t(s) {
    (e.error = e.hasError ? new d1(s, e.error, "An error was suppressed during disposal.") : s), (e.hasError = !0);
  }
  function i() {
    for (; e.stack.length; ) {
      var s = e.stack.pop();
      try {
        var r = s.dispose && s.dispose.call(s.value);
        if (s.async)
          return Promise.resolve(r).then(i, function (n) {
            return t(n), i();
          });
      } catch (n) {
        t(n);
      }
    }
    if (e.hasError) throw e.error;
  }
  return i();
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
var p1 = Object.create,
  mc = Object.defineProperty,
  g1 = Object.getOwnPropertyDescriptor,
  wc = Object.getOwnPropertyNames,
  m1 = Object.getPrototypeOf,
  w1 = Object.prototype.hasOwnProperty,
  v1 = (e, t) =>
    function () {
      return t || (0, e[wc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  y1 = (e, t, i, s) => {
    if ((t && typeof t == "object") || typeof t == "function") for (let r of wc(t)) !w1.call(e, r) && r !== i && mc(e, r, { get: () => t[r], enumerable: !(s = g1(t, r)) || s.enumerable });
    return e;
  },
  b1 = (e, t, i) => ((i = e != null ? p1(m1(e)) : {}), y1(t || !e || !e.__esModule ? mc(i, "default", { value: e, enumerable: !0 }) : i, e)),
  E1 = v1({
    "node_modules/minimist/index.js"(e, t) {
      "use strict";
      function i(n, o) {
        var a = n;
        o.slice(0, -1).forEach(function (l) {
          a = a[l] || {};
        });
        var c = o[o.length - 1];
        return c in a;
      }
      function s(n) {
        return typeof n == "number" || /^0x[0-9a-f]+$/i.test(n) ? !0 : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n);
      }
      function r(n, o) {
        return (o === "constructor" && typeof n[o] == "function") || o === "__proto__";
      }
      t.exports = function (n, o) {
        o || (o = {});
        var a = { bools: {}, strings: {}, unknownFn: null };
        typeof o.unknown == "function" && (a.unknownFn = o.unknown),
          typeof o.boolean == "boolean" && o.boolean
            ? (a.allBools = !0)
            : []
                .concat(o.boolean)
                .filter(Boolean)
                .forEach(function (k) {
                  a.bools[k] = !0;
                });
        var c = {};
        function l(k) {
          return c[k].some(function (Z) {
            return a.bools[Z];
          });
        }
        Object.keys(o.alias || {}).forEach(function (k) {
          (c[k] = [].concat(o.alias[k])),
            c[k].forEach(function (Z) {
              c[Z] = [k].concat(
                c[k].filter(function (Ft) {
                  return Z !== Ft;
                }),
              );
            });
        }),
          []
            .concat(o.string)
            .filter(Boolean)
            .forEach(function (k) {
              (a.strings[k] = !0),
                c[k] &&
                  [].concat(c[k]).forEach(function (Z) {
                    a.strings[Z] = !0;
                  });
            });
        var h = o.default || {},
          u = { _: [] };
        function f(k, Z) {
          return (a.allBools && /^--[^=]+$/.test(Z)) || a.strings[k] || a.bools[k] || c[k];
        }
        function p(k, Z, Ft) {
          for (var z = k, ce = 0; ce < Z.length - 1; ce++) {
            var P = Z[ce];
            if (r(z, P)) return;
            z[P] === void 0 && (z[P] = {}), (z[P] === Object.prototype || z[P] === Number.prototype || z[P] === String.prototype) && (z[P] = {}), z[P] === Array.prototype && (z[P] = []), (z = z[P]);
          }
          var $ = Z[Z.length - 1];
          r(z, $) ||
            ((z === Object.prototype || z === Number.prototype || z === String.prototype) && (z = {}),
            z === Array.prototype && (z = []),
            z[$] === void 0 || a.bools[$] || typeof z[$] == "boolean" ? (z[$] = Ft) : Array.isArray(z[$]) ? z[$].push(Ft) : (z[$] = [z[$], Ft]));
        }
        function w(k, Z, Ft) {
          if (!(Ft && a.unknownFn && !f(k, Ft) && a.unknownFn(Ft) === !1)) {
            var z = !a.strings[k] && s(Z) ? Number(Z) : Z;
            p(u, k.split("."), z),
              (c[k] || []).forEach(function (ce) {
                p(u, ce.split("."), z);
              });
          }
        }
        Object.keys(a.bools).forEach(function (k) {
          w(k, h[k] === void 0 ? !1 : h[k]);
        });
        var m = [];
        n.indexOf("--") !== -1 && ((m = n.slice(n.indexOf("--") + 1)), (n = n.slice(0, n.indexOf("--"))));
        for (var y = 0; y < n.length; y++) {
          var v = n[y],
            S,
            D;
          if (/^--.+=/.test(v)) {
            var x = v.match(/^--([^=]+)=([\s\S]*)$/);
            S = x[1];
            var L = x[2];
            a.bools[S] && (L = L !== "false"), w(S, L, v);
          } else if (/^--no-.+/.test(v)) (S = v.match(/^--no-(.+)/)[1]), w(S, !1, v);
          else if (/^--.+/.test(v))
            (S = v.match(/^--(.+)/)[1]),
              (D = n[y + 1]),
              D !== void 0 && !/^(-|--)[^-]/.test(D) && !a.bools[S] && !a.allBools && (!c[S] || !l(S)) ? (w(S, D, v), (y += 1)) : /^(true|false)$/.test(D) ? (w(S, D === "true", v), (y += 1)) : w(S, a.strings[S] ? "" : !0, v);
          else if (/^-[^-]+/.test(v)) {
            for (var T = v.slice(1, -1).split(""), H = !1, ut = 0; ut < T.length; ut++) {
              if (((D = v.slice(ut + 2)), D === "-")) {
                w(T[ut], D, v);
                continue;
              }
              if (/[A-Za-z]/.test(T[ut]) && D[0] === "=") {
                w(T[ut], D.slice(1), v), (H = !0);
                break;
              }
              if (/[A-Za-z]/.test(T[ut]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(D)) {
                w(T[ut], D, v), (H = !0);
                break;
              }
              if (T[ut + 1] && T[ut + 1].match(/\W/)) {
                w(T[ut], v.slice(ut + 2), v), (H = !0);
                break;
              } else w(T[ut], a.strings[T[ut]] ? "" : !0, v);
            }
            (S = v.slice(-1)[0]),
              !H &&
                S !== "-" &&
                (n[y + 1] && !/^(-|--)[^-]/.test(n[y + 1]) && !a.bools[S] && (!c[S] || !l(S))
                  ? (w(S, n[y + 1], v), (y += 1))
                  : n[y + 1] && /^(true|false)$/.test(n[y + 1])
                    ? (w(S, n[y + 1] === "true", v), (y += 1))
                    : w(S, a.strings[S] ? "" : !0, v));
          } else if (((!a.unknownFn || a.unknownFn(v) !== !1) && u._.push(a.strings._ || !s(v) ? v : Number(v)), o.stopEarly)) {
            u._.push.apply(u._, n.slice(y + 1));
            break;
          }
        }
        return (
          Object.keys(h).forEach(function (k) {
            i(u, k.split(".")) ||
              (p(u, k.split("."), h[k]),
              (c[k] || []).forEach(function (Z) {
                p(u, Z.split("."), h[k]);
              }));
          }),
          o["--"]
            ? (u["--"] = m.slice())
            : m.forEach(function (k) {
                u._.push(k);
              }),
          u
        );
      };
    },
  });
import * as x1 from "fs";
import { hostname as S1, release as $1 } from "os";
var vc;
function I1(e, t) {
  const i = Object.create(null);
  for (const s of e) {
    const r = t(s);
    let n = i[r];
    n || (n = i[r] = []), n.push(s);
  }
  return i;
}
var $7 = class {
    static {
      vc = Symbol.toStringTag;
    }
    constructor(e, t) {
      (this.b = t), (this.a = new Map()), (this[vc] = "SetWithKey");
      for (const i of e) this.add(i);
    }
    get size() {
      return this.a.size;
    }
    add(e) {
      const t = this.b(e);
      return this.a.set(t, e), this;
    }
    delete(e) {
      return this.a.delete(this.b(e));
    }
    has(e) {
      return this.a.has(this.b(e));
    }
    *entries() {
      for (const e of this.a.values()) yield [e, e];
    }
    keys() {
      return this.values();
    }
    *values() {
      for (const e of this.a.values()) yield e;
    }
    clear() {
      this.a.clear();
    }
    forEach(e, t) {
      this.a.forEach((i) => e.call(t, i, i, this));
    }
    [Symbol.iterator]() {
      return this.values();
    }
  },
  P1 = class {
    constructor() {
      (this.b = []),
        (this.a = function (e) {
          setTimeout(() => {
            throw e.stack
              ? Xi.isErrorNoTelemetry(e)
                ? new Xi(
                    e.message +
                      `

` +
                      e.stack,
                  )
                : new Error(
                    e.message +
                      `

` +
                      e.stack,
                  )
              : e;
          }, 0);
        });
    }
    addListener(e) {
      return (
        this.b.push(e),
        () => {
          this.d(e);
        }
      );
    }
    c(e) {
      this.b.forEach((t) => {
        t(e);
      });
    }
    d(e) {
      this.b.splice(this.b.indexOf(e), 1);
    }
    setUnexpectedErrorHandler(e) {
      this.a = e;
    }
    getUnexpectedErrorHandler() {
      return this.a;
    }
    onUnexpectedError(e) {
      this.a(e), this.c(e);
    }
    onUnexpectedExternalError(e) {
      this.a(e);
    }
  },
  yc = new P1();
function k1(e) {
  yc.setUnexpectedErrorHandler(e);
}
function A1(e) {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return t.code === "EPIPE" && t.syscall?.toUpperCase() === "WRITE";
}
function Le(e) {
  Qi(e) || yc.onUnexpectedError(e);
}
var Pr = "Canceled";
function Qi(e) {
  return e instanceof Tt ? !0 : e instanceof Error && e.name === Pr && e.message === Pr;
}
var Tt = class extends Error {
  constructor() {
    super(Pr), (this.name = this.message);
  }
};
function bc() {
  const e = new Error(Pr);
  return (e.name = e.message), e;
}
function Ec(e) {
  return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
}
function st(e) {
  return e
    ? e.message
      ? e.message
      : e.stack
        ? e.stack.split(`
`)[0]
        : String(e)
    : "Error";
}
var Xi = class oc extends Error {
  constructor(t) {
    super(t), (this.name = "CodeExpectedError");
  }
  static fromError(t) {
    if (t instanceof oc) return t;
    const i = new oc();
    return (i.message = t.message), (i.stack = t.stack), i;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
};
function xc(e, t) {
  const i = this;
  let s = !1,
    r;
  return function () {
    if (s) return r;
    if (((s = !0), t))
      try {
        r = e.apply(i, arguments);
      } finally {
        t();
      }
    else r = e.apply(i, arguments);
    return r;
  };
}
function D1(e, t, i = 0, s = e.length) {
  let r = i,
    n = s;
  for (; r < n; ) {
    const o = Math.floor((r + n) / 2);
    t(e[o]) ? (r = o + 1) : (n = o);
  }
  return r - 1;
}
var I7 = class _f {
  static {
    this.assertInvariants = !1;
  }
  constructor(t) {
    (this.e = t), (this.c = 0);
  }
  findLastMonotonous(t) {
    if (_f.assertInvariants) {
      if (this.d) {
        for (const s of this.e) if (this.d(s) && !t(s)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this.d = t;
    }
    const i = D1(this.e, t, this.c);
    return (this.c = i + 1), i === -1 ? void 0 : this.e[i];
  }
};
function Zi(e, t, i = (s, r) => s === r) {
  if (e === t) return !0;
  if (!e || !t || e.length !== t.length) return !1;
  for (let s = 0, r = e.length; s < r; s++) if (!i(e[s], t[s])) return !1;
  return !0;
}
function Yi(e) {
  return e.filter((t) => !!t);
}
function Sc(e) {
  return Array.isArray(e) && e.length > 0;
}
function li(e, t = (i) => i) {
  const i = new Set();
  return e.filter((s) => {
    const r = t(s);
    return i.has(r) ? !1 : (i.add(r), !0);
  });
}
function $c(e, t) {
  return e.push(t), () => R1(e, t);
}
function R1(e, t) {
  const i = e.indexOf(t);
  if (i > -1) return e.splice(i, 1), t;
}
function Ic(e, t) {
  let i;
  if (typeof t == "number") {
    let s = t;
    i = () => {
      const r = Math.sin(s++) * 179426549;
      return r - Math.floor(r);
    };
  } else i = Math.random;
  for (let s = e.length - 1; s > 0; s -= 1) {
    const r = Math.floor(i() * (s + 1)),
      n = e[s];
    (e[s] = e[r]), (e[r] = n);
  }
}
var Wn;
(function (e) {
  function t(n) {
    return n < 0;
  }
  e.isLessThan = t;
  function i(n) {
    return n <= 0;
  }
  e.isLessThanOrEqual = i;
  function s(n) {
    return n > 0;
  }
  e.isGreaterThan = s;
  function r(n) {
    return n === 0;
  }
  (e.isNeitherLessOrGreaterThan = r), (e.greaterThan = 1), (e.lessThan = -1), (e.neitherLessOrGreaterThan = 0);
})(Wn || (Wn = {}));
function L1(e, t) {
  return (i, s) => t(e(i), e(s));
}
var O1 = (e, t) => e - t,
  P7 = class On {
    static {
      this.empty = new On((t) => {});
    }
    constructor(t) {
      this.iterate = t;
    }
    forEach(t) {
      this.iterate((i) => (t(i), !0));
    }
    toArray() {
      const t = [];
      return this.iterate((i) => (t.push(i), !0)), t;
    }
    filter(t) {
      return new On((i) => this.iterate((s) => (t(s) ? i(s) : !0)));
    }
    map(t) {
      return new On((i) => this.iterate((s) => i(t(s))));
    }
    some(t) {
      let i = !1;
      return this.iterate((s) => ((i = t(s)), !i)), i;
    }
    findFirst(t) {
      let i;
      return this.iterate((s) => (t(s) ? ((i = s), !1) : !0)), i;
    }
    findLast(t) {
      let i;
      return this.iterate((s) => (t(s) && (i = s), !0)), i;
    }
    findLastMaxBy(t) {
      let i,
        s = !0;
      return this.iterate((r) => ((s || Wn.isGreaterThan(t(r, i))) && ((s = !1), (i = r)), !0)), i;
    }
  },
  Pc,
  kc,
  Ac,
  N1 = class {
    constructor(e, t) {
      (this.uri = e), (this.value = t);
    }
  };
function C1(e) {
  return Array.isArray(e);
}
var Qt = class dr {
    static {
      this.c = (t) => t.toString();
    }
    constructor(t, i) {
      if (((this[Pc] = "ResourceMap"), t instanceof dr)) (this.d = new Map(t.d)), (this.e = i ?? dr.c);
      else if (C1(t)) {
        (this.d = new Map()), (this.e = i ?? dr.c);
        for (const [s, r] of t) this.set(s, r);
      } else (this.d = new Map()), (this.e = t ?? dr.c);
    }
    set(t, i) {
      return this.d.set(this.e(t), new N1(t, i)), this;
    }
    get(t) {
      return this.d.get(this.e(t))?.value;
    }
    has(t) {
      return this.d.has(this.e(t));
    }
    get size() {
      return this.d.size;
    }
    clear() {
      this.d.clear();
    }
    delete(t) {
      return this.d.delete(this.e(t));
    }
    forEach(t, i) {
      typeof i < "u" && (t = t.bind(i));
      for (const [s, r] of this.d) t(r.value, r.uri, this);
    }
    *values() {
      for (const t of this.d.values()) yield t.value;
    }
    *keys() {
      for (const t of this.d.values()) yield t.uri;
    }
    *entries() {
      for (const t of this.d.values()) yield [t.uri, t.value];
    }
    *[((Pc = Symbol.toStringTag), Symbol.iterator)]() {
      for (const [, t] of this.d) yield [t.uri, t.value];
    }
  },
  Hn = class {
    constructor(e, t) {
      (this[kc] = "ResourceSet"), !e || typeof e == "function" ? (this.c = new Qt(e)) : ((this.c = new Qt(t)), e.forEach(this.add, this));
    }
    get size() {
      return this.c.size;
    }
    add(e) {
      return this.c.set(e, e), this;
    }
    clear() {
      this.c.clear();
    }
    delete(e) {
      return this.c.delete(e);
    }
    forEach(e, t) {
      this.c.forEach((i, s) => e.call(t, s, s, this));
    }
    has(e) {
      return this.c.has(e);
    }
    entries() {
      return this.c.entries();
    }
    keys() {
      return this.c.keys();
    }
    values() {
      return this.c.keys();
    }
    [((kc = Symbol.toStringTag), Symbol.iterator)]() {
      return this.keys();
    }
  },
  Dc;
(function (e) {
  (e[(e.None = 0)] = "None"), (e[(e.AsOld = 1)] = "AsOld"), (e[(e.AsNew = 2)] = "AsNew");
})(Dc || (Dc = {}));
var F1 = class {
    constructor() {
      (this[Ac] = "LinkedMap"), (this.c = new Map()), (this.d = void 0), (this.e = void 0), (this.f = 0), (this.g = 0);
    }
    clear() {
      this.c.clear(), (this.d = void 0), (this.e = void 0), (this.f = 0), this.g++;
    }
    isEmpty() {
      return !this.d && !this.e;
    }
    get size() {
      return this.f;
    }
    get first() {
      return this.d?.value;
    }
    get last() {
      return this.e?.value;
    }
    has(e) {
      return this.c.has(e);
    }
    get(e, t = 0) {
      const i = this.c.get(e);
      if (i) return t !== 0 && this.m(i, t), i.value;
    }
    set(e, t, i = 0) {
      let s = this.c.get(e);
      if (s) (s.value = t), i !== 0 && this.m(s, i);
      else {
        switch (((s = { key: e, value: t, next: void 0, previous: void 0 }), i)) {
          case 0:
            this.k(s);
            break;
          case 1:
            this.j(s);
            break;
          case 2:
            this.k(s);
            break;
          default:
            this.k(s);
            break;
        }
        this.c.set(e, s), this.f++;
      }
      return this;
    }
    delete(e) {
      return !!this.remove(e);
    }
    remove(e) {
      const t = this.c.get(e);
      if (t) return this.c.delete(e), this.l(t), this.f--, t.value;
    }
    shift() {
      if (!this.d && !this.e) return;
      if (!this.d || !this.e) throw new Error("Invalid list");
      const e = this.d;
      return this.c.delete(e.key), this.l(e), this.f--, e.value;
    }
    forEach(e, t) {
      const i = this.g;
      let s = this.d;
      for (; s; ) {
        if ((t ? e.bind(t)(s.value, s.key, this) : e(s.value, s.key, this), this.g !== i)) throw new Error("LinkedMap got modified during iteration.");
        s = s.next;
      }
    }
    keys() {
      const e = this,
        t = this.g;
      let i = this.d;
      const s = {
        [Symbol.iterator]() {
          return s;
        },
        next() {
          if (e.g !== t) throw new Error("LinkedMap got modified during iteration.");
          if (i) {
            const r = { value: i.key, done: !1 };
            return (i = i.next), r;
          } else return { value: void 0, done: !0 };
        },
      };
      return s;
    }
    values() {
      const e = this,
        t = this.g;
      let i = this.d;
      const s = {
        [Symbol.iterator]() {
          return s;
        },
        next() {
          if (e.g !== t) throw new Error("LinkedMap got modified during iteration.");
          if (i) {
            const r = { value: i.value, done: !1 };
            return (i = i.next), r;
          } else return { value: void 0, done: !0 };
        },
      };
      return s;
    }
    entries() {
      const e = this,
        t = this.g;
      let i = this.d;
      const s = {
        [Symbol.iterator]() {
          return s;
        },
        next() {
          if (e.g !== t) throw new Error("LinkedMap got modified during iteration.");
          if (i) {
            const r = { value: [i.key, i.value], done: !1 };
            return (i = i.next), r;
          } else return { value: void 0, done: !0 };
        },
      };
      return s;
    }
    [((Ac = Symbol.toStringTag), Symbol.iterator)]() {
      return this.entries();
    }
    h(e) {
      if (e >= this.size) return;
      if (e === 0) {
        this.clear();
        return;
      }
      let t = this.d,
        i = this.size;
      for (; t && i > e; ) this.c.delete(t.key), (t = t.next), i--;
      (this.d = t), (this.f = i), t && (t.previous = void 0), this.g++;
    }
    i(e) {
      if (e >= this.size) return;
      if (e === 0) {
        this.clear();
        return;
      }
      let t = this.e,
        i = this.size;
      for (; t && i > e; ) this.c.delete(t.key), (t = t.previous), i--;
      (this.e = t), (this.f = i), t && (t.next = void 0), this.g++;
    }
    j(e) {
      if (!this.d && !this.e) this.e = e;
      else if (this.d) (e.next = this.d), (this.d.previous = e);
      else throw new Error("Invalid list");
      (this.d = e), this.g++;
    }
    k(e) {
      if (!this.d && !this.e) this.d = e;
      else if (this.e) (e.previous = this.e), (this.e.next = e);
      else throw new Error("Invalid list");
      (this.e = e), this.g++;
    }
    l(e) {
      if (e === this.d && e === this.e) (this.d = void 0), (this.e = void 0);
      else if (e === this.d) {
        if (!e.next) throw new Error("Invalid list");
        (e.next.previous = void 0), (this.d = e.next);
      } else if (e === this.e) {
        if (!e.previous) throw new Error("Invalid list");
        (e.previous.next = void 0), (this.e = e.previous);
      } else {
        const t = e.next,
          i = e.previous;
        if (!t || !i) throw new Error("Invalid list");
        (t.previous = i), (i.next = t);
      }
      (e.next = void 0), (e.previous = void 0), this.g++;
    }
    m(e, t) {
      if (!this.d || !this.e) throw new Error("Invalid list");
      if (!(t !== 1 && t !== 2)) {
        if (t === 1) {
          if (e === this.d) return;
          const i = e.next,
            s = e.previous;
          e === this.e ? ((s.next = void 0), (this.e = s)) : ((i.previous = s), (s.next = i)), (e.previous = void 0), (e.next = this.d), (this.d.previous = e), (this.d = e), this.g++;
        } else if (t === 2) {
          if (e === this.e) return;
          const i = e.next,
            s = e.previous;
          e === this.d ? ((i.previous = void 0), (this.d = i)) : ((i.previous = s), (s.next = i)), (e.next = void 0), (e.previous = this.e), (this.e.next = e), (this.e = e), this.g++;
        }
      }
    }
    toJSON() {
      const e = [];
      return (
        this.forEach((t, i) => {
          e.push([i, t]);
        }),
        e
      );
    }
    fromJSON(e) {
      this.clear();
      for (const [t, i] of e) this.set(t, i);
    }
  },
  T1 = class extends F1 {
    constructor(e, t = 1) {
      super(), (this.n = e), (this.o = Math.min(Math.max(0, t), 1));
    }
    get limit() {
      return this.n;
    }
    set limit(e) {
      (this.n = e), this.p();
    }
    get ratio() {
      return this.o;
    }
    set ratio(e) {
      (this.o = Math.min(Math.max(0, e), 1)), this.p();
    }
    get(e, t = 2) {
      return super.get(e, t);
    }
    peek(e) {
      return super.get(e, 0);
    }
    set(e, t) {
      return super.set(e, t, 2), this;
    }
    p() {
      this.size > this.n && this.q(Math.round(this.n * this.o));
    }
  },
  Gn = class extends T1 {
    constructor(e, t = 1) {
      super(e, t);
    }
    q(e) {
      this.h(e);
    }
    set(e, t) {
      return super.set(e, t), this.p(), this;
    }
  },
  M1 = class {
    constructor() {
      this.c = new Map();
    }
    add(e, t) {
      let i = this.c.get(e);
      i || ((i = new Set()), this.c.set(e, i)), i.add(t);
    }
    delete(e, t) {
      const i = this.c.get(e);
      i && (i.delete(t), i.size === 0 && this.c.delete(e));
    }
    forEach(e, t) {
      const i = this.c.get(e);
      i && i.forEach(t);
    }
    get(e) {
      const t = this.c.get(e);
      return t || new Set();
    }
  },
  Di;
(function (e) {
  function t(x) {
    return x && typeof x == "object" && typeof x[Symbol.iterator] == "function";
  }
  e.is = t;
  const i = Object.freeze([]);
  function s() {
    return i;
  }
  e.empty = s;
  function* r(x) {
    yield x;
  }
  e.single = r;
  function n(x) {
    return t(x) ? x : r(x);
  }
  e.wrap = n;
  function o(x) {
    return x || i;
  }
  e.from = o;
  function* a(x) {
    for (let L = x.length - 1; L >= 0; L--) yield x[L];
  }
  e.reverse = a;
  function c(x) {
    return !x || x[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = c;
  function l(x) {
    return x[Symbol.iterator]().next().value;
  }
  e.first = l;
  function h(x, L) {
    let T = 0;
    for (const H of x) if (L(H, T++)) return !0;
    return !1;
  }
  e.some = h;
  function u(x, L) {
    for (const T of x) if (L(T)) return T;
  }
  e.find = u;
  function* f(x, L) {
    for (const T of x) L(T) && (yield T);
  }
  e.filter = f;
  function* p(x, L) {
    let T = 0;
    for (const H of x) yield L(H, T++);
  }
  e.map = p;
  function* w(x, L) {
    let T = 0;
    for (const H of x) yield* L(H, T++);
  }
  e.flatMap = w;
  function* m(...x) {
    for (const L of x) yield* L;
  }
  e.concat = m;
  function y(x, L, T) {
    let H = T;
    for (const ut of x) H = L(H, ut);
    return H;
  }
  e.reduce = y;
  function* v(x, L, T = x.length) {
    for (L < -x.length && (L = 0), L < 0 && (L += x.length), T < 0 ? (T += x.length) : T > x.length && (T = x.length); L < T; L++) yield x[L];
  }
  e.slice = v;
  function S(x, L = Number.POSITIVE_INFINITY) {
    const T = [];
    if (L === 0) return [T, x];
    const H = x[Symbol.iterator]();
    for (let ut = 0; ut < L; ut++) {
      const k = H.next();
      if (k.done) return [T, e.empty()];
      T.push(k.value);
    }
    return [
      T,
      {
        [Symbol.iterator]() {
          return H;
        },
      },
    ];
  }
  e.consume = S;
  async function D(x) {
    const L = [];
    for await (const T of x) L.push(T);
    return Promise.resolve(L);
  }
  e.asyncToArray = D;
})(Di || (Di = {}));
var _1 = !1,
  Ki = null,
  k7 = class Uf {
    constructor() {
      this.b = new Map();
    }
    static {
      this.a = 0;
    }
    c(t) {
      let i = this.b.get(t);
      return i || ((i = { parent: null, source: null, isSingleton: !1, value: t, idx: Uf.a++ }), this.b.set(t, i)), i;
    }
    trackDisposable(t) {
      const i = this.c(t);
      i.source || (i.source = new Error().stack);
    }
    setParent(t, i) {
      const s = this.c(t);
      s.parent = i;
    }
    markAsDisposed(t) {
      this.b.delete(t);
    }
    markAsSingleton(t) {
      this.c(t).isSingleton = !0;
    }
    f(t, i) {
      const s = i.get(t);
      if (s) return s;
      const r = t.parent ? this.f(this.c(t.parent), i) : t;
      return i.set(t, r), r;
    }
    getTrackedDisposables() {
      const t = new Map();
      return [...this.b.entries()].filter(([, s]) => s.source !== null && !this.f(s, t).isSingleton).flatMap(([s]) => s);
    }
    computeLeakingDisposables(t = 10, i) {
      let s;
      if (i) s = i;
      else {
        const c = new Map(),
          l = [...this.b.values()].filter((u) => u.source !== null && !this.f(u, c).isSingleton);
        if (l.length === 0) return;
        const h = new Set(l.map((u) => u.value));
        if (((s = l.filter((u) => !(u.parent && h.has(u.parent)))), s.length === 0)) throw new Error("There are cyclic diposable chains!");
      }
      if (!s) return;
      function r(c) {
        function l(u, f) {
          for (; u.length > 0 && f.some((p) => (typeof p == "string" ? p === u[0] : u[0].match(p))); ) u.shift();
        }
        const h = c.source
          .split(
            `
`,
          )
          .map((u) => u.trim().replace("at ", ""))
          .filter((u) => u !== "");
        return l(h, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), h.reverse();
      }
      const n = new M1();
      for (const c of s) {
        const l = r(c);
        for (let h = 0; h <= l.length; h++)
          n.add(
            l.slice(0, h).join(`
`),
            c,
          );
      }
      s.sort(L1((c) => c.idx, O1));
      let o = "",
        a = 0;
      for (const c of s.slice(0, t)) {
        a++;
        const l = r(c),
          h = [];
        for (let u = 0; u < l.length; u++) {
          let f = l[u];
          f = `(shared with ${
            n.get(
              l.slice(0, u + 1).join(`
`),
            ).size
          }/${s.length} leaks) at ${f}`;
          const w = n.get(
              l.slice(0, u).join(`
`),
            ),
            m = I1(
              [...w].map((y) => r(y)[u]),
              (y) => y,
            );
          delete m[l[u]];
          for (const [y, v] of Object.entries(m)) h.unshift(`    - stacktraces of ${v.length} other leaks continue with ${y}`);
          h.unshift(f);
        }
        o += `


==================== Leaking disposable ${a}/${s.length}: ${c.value.constructor.name} ====================
${h.join(`
`)}
============================================================

`;
      }
      return (
        s.length > t &&
          (o += `


... and ${s.length - t} more leaking disposables

`),
        { leaks: s, details: o }
      );
    }
  };
function U1(e) {
  Ki = e;
}
if (_1) {
  const e = "__is_disposable_tracked__";
  U1(
    new (class {
      trackDisposable(t) {
        const i = new Error("Potentially leaked disposable").stack;
        setTimeout(() => {
          t[e] || console.log(i);
        }, 3e3);
      }
      setParent(t, i) {
        if (t && t !== G.None)
          try {
            t[e] = !0;
          } catch {}
      }
      markAsDisposed(t) {
        if (t && t !== G.None)
          try {
            t[e] = !0;
          } catch {}
      }
      markAsSingleton(t) {}
    })(),
  );
}
function Rs(e) {
  return Ki?.trackDisposable(e), e;
}
function Ls(e) {
  Ki?.markAsDisposed(e);
}
function Os(e, t) {
  Ki?.setParent(e, t);
}
function j1(e, t) {
  if (Ki) for (const i of e) Ki.setParent(i, t);
}
function V1(e) {
  return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function $e(e) {
  if (Di.is(e)) {
    const t = [];
    for (const i of e)
      if (i)
        try {
          i.dispose();
        } catch (s) {
          t.push(s);
        }
    if (t.length === 1) throw t[0];
    if (t.length > 1) throw new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function Rc(...e) {
  const t = Dt(() => $e(e));
  return j1(e, t), t;
}
function Dt(e) {
  const t = Rs({
    dispose: xc(() => {
      Ls(t), e();
    }),
  });
  return t;
}
var ue = class jf {
    static {
      this.DISABLE_DISPOSED_WARNING = !1;
    }
    constructor() {
      (this.f = new Set()), (this.g = !1), Rs(this);
    }
    dispose() {
      this.g || (Ls(this), (this.g = !0), this.clear());
    }
    get isDisposed() {
      return this.g;
    }
    clear() {
      if (this.f.size !== 0)
        try {
          $e(this.f);
        } finally {
          this.f.clear();
        }
    }
    add(t) {
      if (!t) return t;
      if (t === this) throw new Error("Cannot register a disposable on itself!");
      return Os(t, this), this.g ? jf.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this.f.add(t), t;
    }
    delete(t) {
      if (t) {
        if (t === this) throw new Error("Cannot dispose a disposable on itself!");
        this.f.delete(t), t.dispose();
      }
    }
    deleteAndLeak(t) {
      t && this.f.has(t) && (this.f.delete(t), Os(t, null));
    }
  },
  G = class {
    static {
      this.None = Object.freeze({ dispose() {} });
    }
    constructor() {
      (this.q = new ue()), Rs(this), Os(this.q, this);
    }
    dispose() {
      Ls(this), this.q.dispose();
    }
    B(e) {
      if (e === this) throw new Error("Cannot register a disposable on itself!");
      return this.q.add(e);
    }
  },
  kr = class {
    constructor() {
      (this.b = !1), Rs(this);
    }
    get value() {
      return this.b ? void 0 : this.a;
    }
    set value(e) {
      this.b || e === this.a || (this.a?.dispose(), e && Os(e, this), (this.a = e));
    }
    clear() {
      this.value = void 0;
    }
    dispose() {
      (this.b = !0), Ls(this), this.a?.dispose(), (this.a = void 0);
    }
    clearAndLeak() {
      const e = this.a;
      return (this.a = void 0), e && Os(e, null), e;
    }
  },
  Jn = class {
    constructor() {
      (this.a = new Map()), (this.b = !1), Rs(this);
    }
    dispose() {
      Ls(this), (this.b = !0), this.clearAndDisposeAll();
    }
    clearAndDisposeAll() {
      if (this.a.size)
        try {
          $e(this.a.values());
        } finally {
          this.a.clear();
        }
    }
    has(e) {
      return this.a.has(e);
    }
    get size() {
      return this.a.size;
    }
    get(e) {
      return this.a.get(e);
    }
    set(e, t, i = !1) {
      this.b && console.warn(new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!").stack), i || this.a.get(e)?.dispose(), this.a.set(e, t);
    }
    deleteAndDispose(e) {
      this.a.get(e)?.dispose(), this.a.delete(e);
    }
    deleteAndLeak(e) {
      const t = this.a.get(e);
      return this.a.delete(e), t;
    }
    keys() {
      return this.a.keys();
    }
    values() {
      return this.a.values();
    }
    [Symbol.iterator]() {
      return this.a[Symbol.iterator]();
    }
  },
  Et = class Nn {
    static {
      this.Undefined = new Nn(void 0);
    }
    constructor(t) {
      (this.element = t), (this.next = Nn.Undefined), (this.prev = Nn.Undefined);
    }
  },
  Lc = class {
    constructor() {
      (this.a = Et.Undefined), (this.b = Et.Undefined), (this.c = 0);
    }
    get size() {
      return this.c;
    }
    isEmpty() {
      return this.a === Et.Undefined;
    }
    clear() {
      let e = this.a;
      for (; e !== Et.Undefined; ) {
        const t = e.next;
        (e.prev = Et.Undefined), (e.next = Et.Undefined), (e = t);
      }
      (this.a = Et.Undefined), (this.b = Et.Undefined), (this.c = 0);
    }
    unshift(e) {
      return this.d(e, !1);
    }
    push(e) {
      return this.d(e, !0);
    }
    d(e, t) {
      const i = new Et(e);
      if (this.a === Et.Undefined) (this.a = i), (this.b = i);
      else if (t) {
        const r = this.b;
        (this.b = i), (i.prev = r), (r.next = i);
      } else {
        const r = this.a;
        (this.a = i), (i.next = r), (r.prev = i);
      }
      this.c += 1;
      let s = !1;
      return () => {
        s || ((s = !0), this.e(i));
      };
    }
    shift() {
      if (this.a !== Et.Undefined) {
        const e = this.a.element;
        return this.e(this.a), e;
      }
    }
    pop() {
      if (this.b !== Et.Undefined) {
        const e = this.b.element;
        return this.e(this.b), e;
      }
    }
    e(e) {
      if (e.prev !== Et.Undefined && e.next !== Et.Undefined) {
        const t = e.prev;
        (t.next = e.next), (e.next.prev = t);
      } else
        e.prev === Et.Undefined && e.next === Et.Undefined
          ? ((this.a = Et.Undefined), (this.b = Et.Undefined))
          : e.next === Et.Undefined
            ? ((this.b = this.b.prev), (this.b.next = Et.Undefined))
            : e.prev === Et.Undefined && ((this.a = this.a.next), (this.a.prev = Et.Undefined));
      this.c -= 1;
    }
    *[Symbol.iterator]() {
      let e = this.a;
      for (; e !== Et.Undefined; ) yield e.element, (e = e.next);
    }
  },
  B1 = globalThis.performance && typeof globalThis.performance.now == "function",
  Ar = class Vf {
    static create(t) {
      return new Vf(t);
    }
    constructor(t) {
      (this.c = B1 && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance)), (this.a = this.c()), (this.b = -1);
    }
    stop() {
      this.b = this.c();
    }
    reset() {
      (this.a = this.c()), (this.b = -1);
    }
    elapsed() {
      return this.b !== -1 ? this.b - this.a : this.c() - this.a;
    }
  },
  z1 = !1,
  Oc = !1,
  q1 = !1,
  at;
(function (e) {
  e.None = () => G.None;
  function t(P) {
    if (q1) {
      const { onDidAddListener: $ } = P,
        R = Qn.create();
      let A = 0;
      P.onDidAddListener = () => {
        ++A === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), R.print()), $?.();
      };
    }
  }
  function i(P, $) {
    return p(P, () => {}, 0, void 0, !0, void 0, $);
  }
  e.defer = i;
  function s(P) {
    return ($, R = null, A) => {
      let F = !1,
        q;
      return (
        (q = P(
          (it) => {
            if (!F) return q ? q.dispose() : (F = !0), $.call(R, it);
          },
          null,
          A,
        )),
        F && q.dispose(),
        q
      );
    };
  }
  e.once = s;
  function r(P, $) {
    return e.once(e.filter(P, $));
  }
  e.onceIf = r;
  function n(P, $, R) {
    return u((A, F = null, q) => P((it) => A.call(F, $(it)), null, q), R);
  }
  e.map = n;
  function o(P, $, R) {
    return u(
      (A, F = null, q) =>
        P(
          (it) => {
            $(it), A.call(F, it);
          },
          null,
          q,
        ),
      R,
    );
  }
  e.forEach = o;
  function a(P, $, R) {
    return u((A, F = null, q) => P((it) => $(it) && A.call(F, it), null, q), R);
  }
  e.filter = a;
  function c(P) {
    return P;
  }
  e.signal = c;
  function l(...P) {
    return ($, R = null, A) => {
      const F = Rc(...P.map((q) => q((it) => $.call(R, it))));
      return f(F, A);
    };
  }
  e.any = l;
  function h(P, $, R, A) {
    let F = R;
    return n(P, (q) => ((F = $(F, q)), F), A);
  }
  e.reduce = h;
  function u(P, $) {
    let R;
    const A = {
      onWillAddFirstListener() {
        R = P(F.fire, F);
      },
      onDidRemoveLastListener() {
        R?.dispose();
      },
    };
    $ || t(A);
    const F = new O(A);
    return $?.add(F), F.event;
  }
  function f(P, $) {
    return $ instanceof Array ? $.push(P) : $ && $.add(P), P;
  }
  function p(P, $, R = 100, A = !1, F = !1, q, it) {
    let bt,
      Pt,
      He,
      Pi = 0,
      Ge;
    const Gi = {
      leakWarningThreshold: q,
      onWillAddFirstListener() {
        bt = P((br) => {
          Pi++,
            (Pt = $(Pt, br)),
            A && !He && (Ue.fire(Pt), (Pt = void 0)),
            (Ge = () => {
              const Er = Pt;
              (Pt = void 0), (He = void 0), (!A || Pi > 1) && Ue.fire(Er), (Pi = 0);
            }),
            typeof R == "number" ? (clearTimeout(He), (He = setTimeout(Ge, R))) : He === void 0 && ((He = 0), queueMicrotask(Ge));
        });
      },
      onWillRemoveListener() {
        F && Pi > 0 && Ge?.();
      },
      onDidRemoveLastListener() {
        (Ge = void 0), bt.dispose();
      },
    };
    it || t(Gi);
    const Ue = new O(Gi);
    return it?.add(Ue), Ue.event;
  }
  e.debounce = p;
  function w(P, $ = 0, R) {
    return e.debounce(P, (A, F) => (A ? (A.push(F), A) : [F]), $, void 0, !0, void 0, R);
  }
  e.accumulate = w;
  function m(P, $ = (A, F) => A === F, R) {
    let A = !0,
      F;
    return a(
      P,
      (q) => {
        const it = A || !$(q, F);
        return (A = !1), (F = q), it;
      },
      R,
    );
  }
  e.latch = m;
  function y(P, $, R) {
    return [e.filter(P, $, R), e.filter(P, (A) => !$(A), R)];
  }
  e.split = y;
  function v(P, $ = !1, R = [], A) {
    let F = R.slice(),
      q = P((Pt) => {
        F ? F.push(Pt) : bt.fire(Pt);
      });
    A && A.add(q);
    const it = () => {
        F?.forEach((Pt) => bt.fire(Pt)), (F = null);
      },
      bt = new O({
        onWillAddFirstListener() {
          q || ((q = P((Pt) => bt.fire(Pt))), A && A.add(q));
        },
        onDidAddFirstListener() {
          F && ($ ? setTimeout(it) : it());
        },
        onDidRemoveLastListener() {
          q && q.dispose(), (q = null);
        },
      });
    return A && A.add(bt), bt.event;
  }
  e.buffer = v;
  function S(P, $) {
    return (A, F, q) => {
      const it = $(new x());
      return P(
        function (bt) {
          const Pt = it.evaluate(bt);
          Pt !== D && A.call(F, Pt);
        },
        void 0,
        q,
      );
    };
  }
  e.chain = S;
  const D = Symbol("HaltChainable");
  class x {
    constructor() {
      this.f = [];
    }
    map($) {
      return this.f.push($), this;
    }
    forEach($) {
      return this.f.push((R) => ($(R), R)), this;
    }
    filter($) {
      return this.f.push((R) => ($(R) ? R : D)), this;
    }
    reduce($, R) {
      let A = R;
      return this.f.push((F) => ((A = $(A, F)), A)), this;
    }
    latch($ = (R, A) => R === A) {
      let R = !0,
        A;
      return (
        this.f.push((F) => {
          const q = R || !$(F, A);
          return (R = !1), (A = F), q ? F : D;
        }),
        this
      );
    }
    evaluate($) {
      for (const R of this.f) if ((($ = R($)), $ === D)) break;
      return $;
    }
  }
  function L(P, $, R = (A) => A) {
    const A = (...bt) => it.fire(R(...bt)),
      F = () => P.on($, A),
      q = () => P.removeListener($, A),
      it = new O({ onWillAddFirstListener: F, onDidRemoveLastListener: q });
    return it.event;
  }
  e.fromNodeEventEmitter = L;
  function T(P, $, R = (A) => A) {
    const A = (...bt) => it.fire(R(...bt)),
      F = () => P.addEventListener($, A),
      q = () => P.removeEventListener($, A),
      it = new O({ onWillAddFirstListener: F, onDidRemoveLastListener: q });
    return it.event;
  }
  e.fromDOMEventEmitter = T;
  function H(P) {
    return new Promise(($) => s(P)($));
  }
  e.toPromise = H;
  function ut(P) {
    const $ = new O();
    return (
      P.then(
        (R) => {
          $.fire(R);
        },
        () => {
          $.fire(void 0);
        },
      ).finally(() => {
        $.dispose();
      }),
      $.event
    );
  }
  e.fromPromise = ut;
  function k(P, $) {
    return P((R) => $.fire(R));
  }
  e.forward = k;
  function Z(P, $, R) {
    return $(R), P((A) => $(A));
  }
  e.runAndSubscribe = Z;
  class Ft {
    constructor($, R) {
      (this._observable = $), (this.f = 0), (this.g = !1);
      const A = {
        onWillAddFirstListener: () => {
          $.addObserver(this), this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          $.removeObserver(this);
        },
      };
      R || t(A), (this.emitter = new O(A)), R && R.add(this.emitter);
    }
    beginUpdate($) {
      this.f++;
    }
    handlePossibleChange($) {}
    handleChange($, R) {
      this.g = !0;
    }
    endUpdate($) {
      this.f--, this.f === 0 && (this._observable.reportChanges(), this.g && ((this.g = !1), this.emitter.fire(this._observable.get())));
    }
  }
  function z(P, $) {
    return new Ft(P, $).emitter.event;
  }
  e.fromObservable = z;
  function ce(P) {
    return ($, R, A) => {
      let F = 0,
        q = !1;
      const it = {
        beginUpdate() {
          F++;
        },
        endUpdate() {
          F--, F === 0 && (P.reportChanges(), q && ((q = !1), $.call(R)));
        },
        handlePossibleChange() {},
        handleChange() {
          q = !0;
        },
      };
      P.addObserver(it), P.reportChanges();
      const bt = {
        dispose() {
          P.removeObserver(it);
        },
      };
      return A instanceof ue ? A.add(bt) : Array.isArray(A) && A.push(bt), bt;
    };
  }
  e.fromObservableLight = ce;
})(at || (at = {}));
var W1 = class ac {
    static {
      this.all = new Set();
    }
    static {
      this.f = 0;
    }
    constructor(t) {
      (this.listenerCount = 0), (this.invocationCount = 0), (this.elapsedOverall = 0), (this.durations = []), (this.name = `${t}_${ac.f++}`), ac.all.add(this);
    }
    start(t) {
      (this.g = new Ar()), (this.listenerCount = t);
    }
    stop() {
      if (this.g) {
        const t = this.g.elapsed();
        this.durations.push(t), (this.elapsedOverall += t), (this.invocationCount += 1), (this.g = void 0);
      }
    }
  },
  Nc = -1,
  H1 = class Bf {
    static {
      this.f = 1;
    }
    constructor(t, i, s = (Bf.f++).toString(16).padStart(3, "0")) {
      (this.j = t), (this.threshold = i), (this.name = s), (this.h = 0);
    }
    dispose() {
      this.g?.clear();
    }
    check(t, i) {
      const s = this.threshold;
      if (s <= 0 || i < s) return;
      this.g || (this.g = new Map());
      const r = this.g.get(t.value) || 0;
      if ((this.g.set(t.value, r + 1), (this.h -= 1), this.h <= 0)) {
        this.h = s * 0.5;
        const [n, o] = this.getMostFrequentStack(),
          a = `[${this.name}] potential listener LEAK detected, having ${i} listeners already. MOST frequent listener (${o}):`;
        console.warn(a), console.warn(n);
        const c = new G1(a, n);
        this.j(c);
      }
      return () => {
        const n = this.g.get(t.value) || 0;
        this.g.set(t.value, n - 1);
      };
    }
    getMostFrequentStack() {
      if (!this.g) return;
      let t,
        i = 0;
      for (const [s, r] of this.g) (!t || i < r) && ((t = [s, r]), (i = r));
      return t;
    }
  },
  Qn = class zf {
    static create() {
      const t = new Error();
      return new zf(t.stack ?? "");
    }
    constructor(t) {
      this.value = t;
    }
    print() {
      console.warn(
        this.value
          .split(
            `
`,
          )
          .slice(2).join(`
`),
      );
    }
  },
  G1 = class extends Error {
    constructor(e, t) {
      super(e), (this.name = "ListenerLeakError"), (this.stack = t);
    }
  },
  J1 = class extends Error {
    constructor(e, t) {
      super(e), (this.name = "ListenerRefusalError"), (this.stack = t);
    }
  },
  Q1 = 0,
  Dr = class {
    constructor(e) {
      (this.value = e), (this.id = Q1++);
    }
  },
  X1 = 2,
  Z1 = (e, t) => {
    if (e instanceof Dr) t(e);
    else
      for (let i = 0; i < e.length; i++) {
        const s = e[i];
        s && t(s);
      }
  },
  Rr;
if (z1) {
  const e = [];
  setInterval(() => {
    e.length !== 0 &&
      (console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"),
      console.warn(
        e.join(`
`),
      ),
      (e.length = 0));
  }, 3e3),
    (Rr = new FinalizationRegistry((t) => {
      typeof t == "string" && e.push(t);
    }));
}
var O = class {
    constructor(e) {
      (this.z = 0),
        (this.f = e),
        (this.g = Nc > 0 || this.f?.leakWarningThreshold ? new H1(e?.onListenerError ?? Le, this.f?.leakWarningThreshold ?? Nc) : void 0),
        (this.j = this.f?._profName ? new W1(this.f._profName) : void 0),
        (this.w = this.f?.deliveryQueue);
    }
    dispose() {
      if (!this.m) {
        if (((this.m = !0), this.w?.current === this && this.w.reset(), this.u)) {
          if (Oc) {
            const e = this.u;
            queueMicrotask(() => {
              Z1(e, (t) => t.stack?.print());
            });
          }
          (this.u = void 0), (this.z = 0);
        }
        this.f?.onDidRemoveLastListener?.(), this.g?.dispose();
      }
    }
    get event() {
      return (
        (this.q ??= (e, t, i) => {
          if (this.g && this.z > this.g.threshold ** 2) {
            const a = `[${this.g.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this.z} vs ${this.g.threshold})`;
            console.warn(a);
            const c = this.g.getMostFrequentStack() ?? ["UNKNOWN stack", -1],
              l = new J1(`${a}. HINT: Stack shows most frequent listener (${c[1]}-times)`, c[0]);
            return (this.f?.onListenerError || Le)(l), G.None;
          }
          if (this.m) return G.None;
          t && (e = e.bind(t));
          const s = new Dr(e);
          let r, n;
          this.g && this.z >= Math.ceil(this.g.threshold * 0.2) && ((s.stack = Qn.create()), (r = this.g.check(s.stack, this.z + 1))),
            Oc && (s.stack = n ?? Qn.create()),
            this.u ? (this.u instanceof Dr ? ((this.w ??= new Y1()), (this.u = [this.u, s])) : this.u.push(s)) : (this.f?.onWillAddFirstListener?.(this), (this.u = s), this.f?.onDidAddFirstListener?.(this)),
            this.f?.onDidAddListener?.(this),
            this.z++;
          const o = Dt(() => {
            Rr?.unregister(o), r?.(), this.A(s);
          });
          if ((i instanceof ue ? i.add(o) : Array.isArray(i) && i.push(o), Rr)) {
            const a = new Error().stack
                .split(
                  `
`,
                )
                .slice(2, 3)
                .join(
                  `
`,
                )
                .trim(),
              c = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(a);
            Rr.register(o, c?.[2] ?? a, o);
          }
          return o;
        }),
        this.q
      );
    }
    A(e) {
      if ((this.f?.onWillRemoveListener?.(this), !this.u)) return;
      if (this.z === 1) {
        (this.u = void 0), this.f?.onDidRemoveLastListener?.(this), (this.z = 0);
        return;
      }
      const t = this.u,
        i = t.indexOf(e);
      if (i === -1) throw (console.log("disposed?", this.m), console.log("size?", this.z), console.log("arr?", JSON.stringify(this.u)), new Error("Attempted to dispose unknown listener"));
      this.z--, (t[i] = void 0);
      const s = this.w.current === this;
      if (this.z * X1 <= t.length) {
        let r = 0;
        for (let n = 0; n < t.length; n++) t[n] ? (t[r++] = t[n]) : s && r < this.w.end && (this.w.end--, r < this.w.i && this.w.i--);
        t.length = r;
      }
    }
    B(e, t) {
      if (!e) return;
      const i = this.f?.onListenerError || Le;
      if (!i) {
        e.value(t);
        return;
      }
      try {
        e.value(t);
      } catch (s) {
        i(s);
      }
    }
    C(e) {
      const t = e.current.u;
      for (; e.i < e.end; ) this.B(t[e.i++], e.value);
      e.reset();
    }
    fire(e) {
      if ((this.w?.current && (this.C(this.w), this.j?.stop()), this.j?.start(this.z), this.u))
        if (this.u instanceof Dr) this.B(this.u, e);
        else {
          const t = this.w;
          t.enqueue(this, e, this.u.length), this.C(t);
        }
      this.j?.stop();
    }
    hasListeners() {
      return this.z > 0;
    }
  },
  Y1 = class {
    constructor() {
      (this.i = -1), (this.end = 0);
    }
    enqueue(e, t, i) {
      (this.i = 0), (this.end = i), (this.current = e), (this.value = t);
    }
    reset() {
      (this.i = this.end), (this.current = void 0), (this.value = void 0);
    }
  },
  Xn = class extends O {
    get isPaused() {
      return this.h !== 0;
    }
    constructor(e) {
      super(e), (this.h = 0), (this.s = new Lc()), (this.t = e?.merge);
    }
    pause() {
      this.h++;
    }
    resume() {
      if (this.h !== 0 && --this.h === 0)
        if (this.t) {
          if (this.s.size > 0) {
            const e = Array.from(this.s);
            this.s.clear(), super.fire(this.t(e));
          }
        } else for (; !this.h && this.s.size !== 0; ) super.fire(this.s.shift());
    }
    fire(e) {
      this.z && (this.h !== 0 ? this.s.push(e) : super.fire(e));
    }
  },
  K1 = class {
    constructor() {
      (this.f = !1),
        (this.g = at.None),
        (this.h = G.None),
        (this.j = new O({
          onDidAddFirstListener: () => {
            (this.f = !0), (this.h = this.g(this.j.fire, this.j));
          },
          onDidRemoveLastListener: () => {
            (this.f = !1), this.h.dispose();
          },
        })),
        (this.event = this.j.event);
    }
    set input(e) {
      (this.g = e), this.f && (this.h.dispose(), (this.h = e(this.j.fire, this.j)));
    }
    dispose() {
      this.h.dispose(), this.j.dispose();
    }
  },
  Cc = Object.freeze(function (e, t) {
    const i = setTimeout(e.bind(t), 0);
    return {
      dispose() {
        clearTimeout(i);
      },
    };
  }),
  lt;
(function (e) {
  function t(i) {
    return i === e.None || i === e.Cancelled || i instanceof Lr ? !0 : !i || typeof i != "object" ? !1 : typeof i.isCancellationRequested == "boolean" && typeof i.onCancellationRequested == "function";
  }
  (e.isCancellationToken = t), (e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: at.None })), (e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: Cc }));
})(lt || (lt = {}));
var Lr = class {
    constructor() {
      (this.a = !1), (this.b = null);
    }
    cancel() {
      this.a || ((this.a = !0), this.b && (this.b.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this.a;
    }
    get onCancellationRequested() {
      return this.a ? Cc : (this.b || (this.b = new O()), this.b.event);
    }
    dispose() {
      this.b && (this.b.dispose(), (this.b = null));
    }
  },
  ts = class {
    constructor(e) {
      (this.f = void 0), (this.g = void 0), (this.g = e && e.onCancellationRequested(this.cancel, this));
    }
    get token() {
      return this.f || (this.f = new Lr()), this.f;
    }
    cancel() {
      this.f ? this.f instanceof Lr && this.f.cancel() : (this.f = lt.Cancelled);
    }
    dispose(e = !1) {
      e && this.cancel(), this.g?.dispose(), this.f ? this.f instanceof Lr && this.f.dispose() : (this.f = lt.None);
    }
  },
  Fc;
(function (e) {
  (e[(e.PRO = 0)] = "PRO"), (e[(e.LITE = 1)] = "LITE"), (e[(e.UX_SIMPLE = 2)] = "UX_SIMPLE");
})(Fc || (Fc = {}));
var Tc;
(function (e) {
  (e.YINLI = "Yinli"), (e.SPRING = "Spring");
})(Tc || (Tc = {}));
var Mc;
(function (e) {
  (e.CN = "cn"), (e.I18N = "i18n");
})(Mc || (Mc = {}));
var _c;
(function (e) {
  (e.Yinli = "Yinli"), (e.Spring = "Spring");
})(_c || (_c = {}));
var td = "ByteIDEClientFlag";
function ed() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function Uc() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var id = Uc() === "pseudo" || (typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0);
function Or(e, t) {
  let i;
  return (
    t.length === 0
      ? (i = e)
      : (i = e.replace(/\{(\d+)\}/g, (s, r) => {
          const n = r[0],
            o = t[n];
          let a = s;
          return typeof o == "string" ? (a = o) : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
        })),
    id && (i = "\uFF3B" + i.replace(/[aouei]/g, "$&$&") + "\uFF3D"),
    i
  );
}
function d(e, t, ...i) {
  return Or(typeof e == "number" ? jc(e, t) : t, i);
}
function jc(e, t) {
  const i = ed()?.[e];
  if (typeof i != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return i;
}
function Vc(e, t, ...i) {
  let s;
  typeof e == "number" ? (s = jc(e, t)) : (s = t);
  const r = Or(s, i);
  return { value: r, original: t === s ? r : Or(t, i) };
}
var es = "en",
  Ns = !1,
  Cs = !1,
  Fs = !1,
  Bc = !1,
  zc = !1,
  Zn = !1,
  sd = !1,
  qc = !1,
  rd = !1,
  nd = !1,
  Nr = void 0,
  Cr = es,
  Wc = es,
  Hc = void 0,
  Qe = void 0,
  od = !1,
  Xe = globalThis,
  be = void 0;
typeof Xe.vscode < "u" && typeof Xe.vscode.process < "u" ? (be = Xe.vscode.process) : typeof process < "u" && typeof process?.versions?.node == "string" && (be = process);
var Gc = typeof be?.versions?.electron == "string",
  ad = Gc && be?.type === "renderer";
if (typeof be == "object") {
  (Ns = be.platform === "win32"),
    (Cs = be.platform === "darwin"),
    (Fs = be.platform === "linux"),
    (Bc = Fs && !!be.env.SNAP && !!be.env.SNAP_REVISION),
    (sd = Gc),
    (rd = !!be.env.CI || !!be.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
    (Nr = es),
    (Cr = es);
  const e = be.env.VSCODE_NLS_CONFIG;
  if (e)
    try {
      const t = JSON.parse(e);
      (Nr = t.userLocale), (Wc = t.osLocale), (Cr = t.resolvedLanguage || es), (Hc = t.languagePack?.translationsConfigFile);
    } catch {}
  zc = !0;
} else
  typeof navigator == "object" && !ad
    ? ((Qe = navigator.userAgent),
      (Ns = Qe.indexOf("Windows") >= 0),
      (Cs = Qe.indexOf("Macintosh") >= 0),
      (qc = (Qe.indexOf("Macintosh") >= 0 || Qe.indexOf("iPad") >= 0 || Qe.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0),
      (Fs = Qe.indexOf("Linux") >= 0),
      (nd = Qe?.indexOf("Mobi") >= 0),
      (Zn = !0),
      (od = td in globalThis),
      (Cr = Uc() || es),
      (Nr = navigator.language.toLowerCase()),
      (Wc = Nr))
    : console.error("Unable to resolve platform.");
var Jc;
(function (e) {
  (e[(e.Web = 0)] = "Web"), (e[(e.Mac = 1)] = "Mac"), (e[(e.Linux = 2)] = "Linux"), (e[(e.Windows = 3)] = "Windows");
})(Jc || (Jc = {}));
function Qc(e) {
  switch (e) {
    case 1:
      return "Mac";
    case 2:
      return "Linux";
    case 3:
      return "Windows";
    case 0:
    default:
      return "Web";
  }
}
var Fr = 0;
Cs ? (Fr = 1) : Ns ? (Fr = 3) : Fs && (Fr = 2);
var Rt = Ns,
  Ze = Cs,
  se = Fs,
  cd = Bc,
  ld = zc,
  fe = Zn,
  hd = Zn && typeof Xe.importScripts == "function",
  ud = hd ? Xe.origin : void 0,
  Ts = Fr,
  Ve = Qe,
  Oe = Cr,
  Xc;
(function (e) {
  function t() {
    return Oe;
  }
  e.value = t;
  function i() {
    return Oe.length === 2 ? Oe === "en" : Oe.length >= 3 ? Oe[0] === "e" && Oe[1] === "n" && Oe[2] === "-" : !1;
  }
  e.isDefaultVariant = i;
  function s() {
    return Oe === "en";
  }
  e.isDefault = s;
})(Xc || (Xc = {}));
var Zc = Hc,
  fd = typeof Xe.postMessage == "function" && !Xe.importScripts,
  dd = (() => {
    if (fd) {
      const e = [];
      Xe.addEventListener("message", (i) => {
        if (i.data && i.data.vscodeScheduleAsyncWork)
          for (let s = 0, r = e.length; s < r; s++) {
            const n = e[s];
            if (n.id === i.data.vscodeScheduleAsyncWork) {
              e.splice(s, 1), n.callback();
              return;
            }
          }
      });
      let t = 0;
      return (i) => {
        const s = ++t;
        e.push({ id: s, callback: i }), Xe.postMessage({ vscodeScheduleAsyncWork: s }, "*");
      };
    }
    return (e) => setTimeout(e);
  })(),
  Yc;
(function (e) {
  (e[(e.Windows = 1)] = "Windows"), (e[(e.Macintosh = 2)] = "Macintosh"), (e[(e.Linux = 3)] = "Linux");
})(Yc || (Yc = {}));
var Kc;
(function (e) {
  (e.Windows = "Win"), (e.Macintosh = "Mac"), (e.Linux = "Linux");
})(Kc || (Kc = {}));
var Yn = Cs || qc ? 2 : Ns ? 1 : 3,
  tl = !!(Ve && Ve.indexOf("Chrome") >= 0),
  pd = !!(Ve && Ve.indexOf("Firefox") >= 0),
  gd = !!(!tl && Ve && Ve.indexOf("Safari") >= 0),
  md = !!(Ve && Ve.indexOf("Edg/") >= 0),
  A7 = !!(Ve && Ve.indexOf("Android") >= 0),
  Ri,
  Kn = globalThis.vscode;
if (typeof Kn < "u" && typeof Kn.process < "u") {
  const e = Kn.process;
  Ri = {
    get platform() {
      return e.platform;
    },
    get arch() {
      return e.arch;
    },
    get env() {
      return e.env;
    },
    cwd() {
      return e.cwd();
    },
  };
} else
  typeof process < "u" && typeof process?.versions?.node == "string"
    ? (Ri = {
        get platform() {
          return process.platform;
        },
        get arch() {
          return process.arch;
        },
        get env() {
          return process.env;
        },
        cwd() {
          return process.env.VSCODE_CWD || process.cwd();
        },
      })
    : (Ri = {
        get platform() {
          return Rt ? "win32" : Ze ? "darwin" : "linux";
        },
        get arch() {},
        get env() {
          return {};
        },
        cwd() {
          return "/";
        },
      });
var is = Ri.cwd,
  wt = Ri.env,
  to = Ri.platform,
  el = Ri.arch,
  wd = 65,
  vd = 97,
  yd = 90,
  bd = 122,
  hi = 46,
  Ut = 47,
  de = 92,
  ui = 58,
  Ed = 63,
  il = class extends Error {
    constructor(e, t, i) {
      let s;
      typeof t == "string" && t.indexOf("not ") === 0 ? ((s = "must not be"), (t = t.replace(/^not /, ""))) : (s = "must be");
      const r = e.indexOf(".") !== -1 ? "property" : "argument";
      let n = `The "${e}" ${r} ${s} of type ${t}`;
      (n += `. Received type ${typeof i}`), super(n), (this.code = "ERR_INVALID_ARG_TYPE");
    }
  };
function xd(e, t) {
  if (e === null || typeof e != "object") throw new il(t, "Object", e);
}
function St(e, t) {
  if (typeof e != "string") throw new il(t, "string", e);
}
var pe = to === "win32";
function W(e) {
  return e === Ut || e === de;
}
function eo(e) {
  return e === Ut;
}
function fi(e) {
  return (e >= wd && e <= yd) || (e >= vd && e <= bd);
}
function Tr(e, t, i, s) {
  let r = "",
    n = 0,
    o = -1,
    a = 0,
    c = 0;
  for (let l = 0; l <= e.length; ++l) {
    if (l < e.length) c = e.charCodeAt(l);
    else {
      if (s(c)) break;
      c = Ut;
    }
    if (s(c)) {
      if (!(o === l - 1 || a === 1))
        if (a === 2) {
          if (r.length < 2 || n !== 2 || r.charCodeAt(r.length - 1) !== hi || r.charCodeAt(r.length - 2) !== hi) {
            if (r.length > 2) {
              const h = r.lastIndexOf(i);
              h === -1 ? ((r = ""), (n = 0)) : ((r = r.slice(0, h)), (n = r.length - 1 - r.lastIndexOf(i))), (o = l), (a = 0);
              continue;
            } else if (r.length !== 0) {
              (r = ""), (n = 0), (o = l), (a = 0);
              continue;
            }
          }
          t && ((r += r.length > 0 ? `${i}..` : ".."), (n = 2));
        } else r.length > 0 ? (r += `${i}${e.slice(o + 1, l)}`) : (r = e.slice(o + 1, l)), (n = l - o - 1);
      (o = l), (a = 0);
    } else c === hi && a !== -1 ? ++a : (a = -1);
  }
  return r;
}
function Sd(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function sl(e, t) {
  xd(t, "pathObject");
  const i = t.dir || t.root,
    s = t.base || `${t.name || ""}${Sd(t.ext)}`;
  return i ? (i === t.root ? `${i}${s}` : `${i}${e}${s}`) : s;
}
var Lt = {
    resolve(...e) {
      let t = "",
        i = "",
        s = !1;
      for (let r = e.length - 1; r >= -1; r--) {
        let n;
        if (r >= 0) {
          if (((n = e[r]), St(n, `paths[${r}]`), n.length === 0)) continue;
        } else t.length === 0 ? (n = is()) : ((n = wt[`=${t}`] || is()), (n === void 0 || (n.slice(0, 2).toLowerCase() !== t.toLowerCase() && n.charCodeAt(2) === de)) && (n = `${t}\\`));
        const o = n.length;
        let a = 0,
          c = "",
          l = !1;
        const h = n.charCodeAt(0);
        if (o === 1) W(h) && ((a = 1), (l = !0));
        else if (W(h))
          if (((l = !0), W(n.charCodeAt(1)))) {
            let u = 2,
              f = u;
            for (; u < o && !W(n.charCodeAt(u)); ) u++;
            if (u < o && u !== f) {
              const p = n.slice(f, u);
              for (f = u; u < o && W(n.charCodeAt(u)); ) u++;
              if (u < o && u !== f) {
                for (f = u; u < o && !W(n.charCodeAt(u)); ) u++;
                (u === o || u !== f) && ((c = `\\\\${p}\\${n.slice(f, u)}`), (a = u));
              }
            }
          } else a = 1;
        else fi(h) && n.charCodeAt(1) === ui && ((c = n.slice(0, 2)), (a = 2), o > 2 && W(n.charCodeAt(2)) && ((l = !0), (a = 3)));
        if (c.length > 0)
          if (t.length > 0) {
            if (c.toLowerCase() !== t.toLowerCase()) continue;
          } else t = c;
        if (s) {
          if (t.length > 0) break;
        } else if (((i = `${n.slice(a)}\\${i}`), (s = l), l && t.length > 0)) break;
      }
      return (i = Tr(i, !s, "\\", W)), s ? `${t}\\${i}` : `${t}${i}` || ".";
    },
    normalize(e) {
      St(e, "path");
      const t = e.length;
      if (t === 0) return ".";
      let i = 0,
        s,
        r = !1;
      const n = e.charCodeAt(0);
      if (t === 1) return eo(n) ? "\\" : e;
      if (W(n))
        if (((r = !0), W(e.charCodeAt(1)))) {
          let a = 2,
            c = a;
          for (; a < t && !W(e.charCodeAt(a)); ) a++;
          if (a < t && a !== c) {
            const l = e.slice(c, a);
            for (c = a; a < t && W(e.charCodeAt(a)); ) a++;
            if (a < t && a !== c) {
              for (c = a; a < t && !W(e.charCodeAt(a)); ) a++;
              if (a === t) return `\\\\${l}\\${e.slice(c)}\\`;
              a !== c && ((s = `\\\\${l}\\${e.slice(c, a)}`), (i = a));
            }
          }
        } else i = 1;
      else fi(n) && e.charCodeAt(1) === ui && ((s = e.slice(0, 2)), (i = 2), t > 2 && W(e.charCodeAt(2)) && ((r = !0), (i = 3)));
      let o = i < t ? Tr(e.slice(i), !r, "\\", W) : "";
      return o.length === 0 && !r && (o = "."), o.length > 0 && W(e.charCodeAt(t - 1)) && (o += "\\"), s === void 0 ? (r ? `\\${o}` : o) : r ? `${s}\\${o}` : `${s}${o}`;
    },
    isAbsolute(e) {
      St(e, "path");
      const t = e.length;
      if (t === 0) return !1;
      const i = e.charCodeAt(0);
      return W(i) || (t > 2 && fi(i) && e.charCodeAt(1) === ui && W(e.charCodeAt(2)));
    },
    join(...e) {
      if (e.length === 0) return ".";
      let t, i;
      for (let n = 0; n < e.length; ++n) {
        const o = e[n];
        St(o, "path"), o.length > 0 && (t === void 0 ? (t = i = o) : (t += `\\${o}`));
      }
      if (t === void 0) return ".";
      let s = !0,
        r = 0;
      if (typeof i == "string" && W(i.charCodeAt(0))) {
        ++r;
        const n = i.length;
        n > 1 && W(i.charCodeAt(1)) && (++r, n > 2 && (W(i.charCodeAt(2)) ? ++r : (s = !1)));
      }
      if (s) {
        for (; r < t.length && W(t.charCodeAt(r)); ) r++;
        r >= 2 && (t = `\\${t.slice(r)}`);
      }
      return Lt.normalize(t);
    },
    relative(e, t) {
      if ((St(e, "from"), St(t, "to"), e === t)) return "";
      const i = Lt.resolve(e),
        s = Lt.resolve(t);
      if (i === s || ((e = i.toLowerCase()), (t = s.toLowerCase()), e === t)) return "";
      let r = 0;
      for (; r < e.length && e.charCodeAt(r) === de; ) r++;
      let n = e.length;
      for (; n - 1 > r && e.charCodeAt(n - 1) === de; ) n--;
      const o = n - r;
      let a = 0;
      for (; a < t.length && t.charCodeAt(a) === de; ) a++;
      let c = t.length;
      for (; c - 1 > a && t.charCodeAt(c - 1) === de; ) c--;
      const l = c - a,
        h = o < l ? o : l;
      let u = -1,
        f = 0;
      for (; f < h; f++) {
        const w = e.charCodeAt(r + f);
        if (w !== t.charCodeAt(a + f)) break;
        w === de && (u = f);
      }
      if (f !== h) {
        if (u === -1) return s;
      } else {
        if (l > h) {
          if (t.charCodeAt(a + f) === de) return s.slice(a + f + 1);
          if (f === 2) return s.slice(a + f);
        }
        o > h && (e.charCodeAt(r + f) === de ? (u = f) : f === 2 && (u = 3)), u === -1 && (u = 0);
      }
      let p = "";
      for (f = r + u + 1; f <= n; ++f) (f === n || e.charCodeAt(f) === de) && (p += p.length === 0 ? ".." : "\\..");
      return (a += u), p.length > 0 ? `${p}${s.slice(a, c)}` : (s.charCodeAt(a) === de && ++a, s.slice(a, c));
    },
    toNamespacedPath(e) {
      if (typeof e != "string" || e.length === 0) return e;
      const t = Lt.resolve(e);
      if (t.length <= 2) return e;
      if (t.charCodeAt(0) === de) {
        if (t.charCodeAt(1) === de) {
          const i = t.charCodeAt(2);
          if (i !== Ed && i !== hi) return `\\\\?\\UNC\\${t.slice(2)}`;
        }
      } else if (fi(t.charCodeAt(0)) && t.charCodeAt(1) === ui && t.charCodeAt(2) === de) return `\\\\?\\${t}`;
      return e;
    },
    dirname(e) {
      St(e, "path");
      const t = e.length;
      if (t === 0) return ".";
      let i = -1,
        s = 0;
      const r = e.charCodeAt(0);
      if (t === 1) return W(r) ? e : ".";
      if (W(r)) {
        if (((i = s = 1), W(e.charCodeAt(1)))) {
          let a = 2,
            c = a;
          for (; a < t && !W(e.charCodeAt(a)); ) a++;
          if (a < t && a !== c) {
            for (c = a; a < t && W(e.charCodeAt(a)); ) a++;
            if (a < t && a !== c) {
              for (c = a; a < t && !W(e.charCodeAt(a)); ) a++;
              if (a === t) return e;
              a !== c && (i = s = a + 1);
            }
          }
        }
      } else fi(r) && e.charCodeAt(1) === ui && ((i = t > 2 && W(e.charCodeAt(2)) ? 3 : 2), (s = i));
      let n = -1,
        o = !0;
      for (let a = t - 1; a >= s; --a)
        if (W(e.charCodeAt(a))) {
          if (!o) {
            n = a;
            break;
          }
        } else o = !1;
      if (n === -1) {
        if (i === -1) return ".";
        n = i;
      }
      return e.slice(0, n);
    },
    basename(e, t) {
      t !== void 0 && St(t, "suffix"), St(e, "path");
      let i = 0,
        s = -1,
        r = !0,
        n;
      if ((e.length >= 2 && fi(e.charCodeAt(0)) && e.charCodeAt(1) === ui && (i = 2), t !== void 0 && t.length > 0 && t.length <= e.length)) {
        if (t === e) return "";
        let o = t.length - 1,
          a = -1;
        for (n = e.length - 1; n >= i; --n) {
          const c = e.charCodeAt(n);
          if (W(c)) {
            if (!r) {
              i = n + 1;
              break;
            }
          } else a === -1 && ((r = !1), (a = n + 1)), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (s = n) : ((o = -1), (s = a)));
        }
        return i === s ? (s = a) : s === -1 && (s = e.length), e.slice(i, s);
      }
      for (n = e.length - 1; n >= i; --n)
        if (W(e.charCodeAt(n))) {
          if (!r) {
            i = n + 1;
            break;
          }
        } else s === -1 && ((r = !1), (s = n + 1));
      return s === -1 ? "" : e.slice(i, s);
    },
    extname(e) {
      St(e, "path");
      let t = 0,
        i = -1,
        s = 0,
        r = -1,
        n = !0,
        o = 0;
      e.length >= 2 && e.charCodeAt(1) === ui && fi(e.charCodeAt(0)) && (t = s = 2);
      for (let a = e.length - 1; a >= t; --a) {
        const c = e.charCodeAt(a);
        if (W(c)) {
          if (!n) {
            s = a + 1;
            break;
          }
          continue;
        }
        r === -1 && ((n = !1), (r = a + 1)), c === hi ? (i === -1 ? (i = a) : o !== 1 && (o = 1)) : i !== -1 && (o = -1);
      }
      return i === -1 || r === -1 || o === 0 || (o === 1 && i === r - 1 && i === s + 1) ? "" : e.slice(i, r);
    },
    format: sl.bind(null, "\\"),
    parse(e) {
      St(e, "path");
      const t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      const i = e.length;
      let s = 0,
        r = e.charCodeAt(0);
      if (i === 1) return W(r) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
      if (W(r)) {
        if (((s = 1), W(e.charCodeAt(1)))) {
          let u = 2,
            f = u;
          for (; u < i && !W(e.charCodeAt(u)); ) u++;
          if (u < i && u !== f) {
            for (f = u; u < i && W(e.charCodeAt(u)); ) u++;
            if (u < i && u !== f) {
              for (f = u; u < i && !W(e.charCodeAt(u)); ) u++;
              u === i ? (s = u) : u !== f && (s = u + 1);
            }
          }
        }
      } else if (fi(r) && e.charCodeAt(1) === ui) {
        if (i <= 2) return (t.root = t.dir = e), t;
        if (((s = 2), W(e.charCodeAt(2)))) {
          if (i === 3) return (t.root = t.dir = e), t;
          s = 3;
        }
      }
      s > 0 && (t.root = e.slice(0, s));
      let n = -1,
        o = s,
        a = -1,
        c = !0,
        l = e.length - 1,
        h = 0;
      for (; l >= s; --l) {
        if (((r = e.charCodeAt(l)), W(r))) {
          if (!c) {
            o = l + 1;
            break;
          }
          continue;
        }
        a === -1 && ((c = !1), (a = l + 1)), r === hi ? (n === -1 ? (n = l) : h !== 1 && (h = 1)) : n !== -1 && (h = -1);
      }
      return (
        a !== -1 && (n === -1 || h === 0 || (h === 1 && n === a - 1 && n === o + 1) ? (t.base = t.name = e.slice(o, a)) : ((t.name = e.slice(o, n)), (t.base = e.slice(o, a)), (t.ext = e.slice(n, a)))),
        o > 0 && o !== s ? (t.dir = e.slice(0, o - 1)) : (t.dir = t.root),
        t
      );
    },
    sep: "\\",
    delimiter: ";",
    win32: null,
    posix: null,
  },
  $d = (() => {
    if (pe) {
      const e = /\\/g;
      return () => {
        const t = is().replace(e, "/");
        return t.slice(t.indexOf("/"));
      };
    }
    return () => is();
  })(),
  rt = {
    resolve(...e) {
      let t = "",
        i = !1;
      for (let s = e.length - 1; s >= -1 && !i; s--) {
        const r = s >= 0 ? e[s] : $d();
        St(r, `paths[${s}]`), r.length !== 0 && ((t = `${r}/${t}`), (i = r.charCodeAt(0) === Ut));
      }
      return (t = Tr(t, !i, "/", eo)), i ? `/${t}` : t.length > 0 ? t : ".";
    },
    normalize(e) {
      if ((St(e, "path"), e.length === 0)) return ".";
      const t = e.charCodeAt(0) === Ut,
        i = e.charCodeAt(e.length - 1) === Ut;
      return (e = Tr(e, !t, "/", eo)), e.length === 0 ? (t ? "/" : i ? "./" : ".") : (i && (e += "/"), t ? `/${e}` : e);
    },
    isAbsolute(e) {
      return St(e, "path"), e.length > 0 && e.charCodeAt(0) === Ut;
    },
    join(...e) {
      if (e.length === 0) return ".";
      let t;
      for (let i = 0; i < e.length; ++i) {
        const s = e[i];
        St(s, "path"), s.length > 0 && (t === void 0 ? (t = s) : (t += `/${s}`));
      }
      return t === void 0 ? "." : rt.normalize(t);
    },
    relative(e, t) {
      if ((St(e, "from"), St(t, "to"), e === t || ((e = rt.resolve(e)), (t = rt.resolve(t)), e === t))) return "";
      const i = 1,
        s = e.length,
        r = s - i,
        n = 1,
        o = t.length - n,
        a = r < o ? r : o;
      let c = -1,
        l = 0;
      for (; l < a; l++) {
        const u = e.charCodeAt(i + l);
        if (u !== t.charCodeAt(n + l)) break;
        u === Ut && (c = l);
      }
      if (l === a)
        if (o > a) {
          if (t.charCodeAt(n + l) === Ut) return t.slice(n + l + 1);
          if (l === 0) return t.slice(n + l);
        } else r > a && (e.charCodeAt(i + l) === Ut ? (c = l) : l === 0 && (c = 0));
      let h = "";
      for (l = i + c + 1; l <= s; ++l) (l === s || e.charCodeAt(l) === Ut) && (h += h.length === 0 ? ".." : "/..");
      return `${h}${t.slice(n + c)}`;
    },
    toNamespacedPath(e) {
      return e;
    },
    dirname(e) {
      if ((St(e, "path"), e.length === 0)) return ".";
      const t = e.charCodeAt(0) === Ut;
      let i = -1,
        s = !0;
      for (let r = e.length - 1; r >= 1; --r)
        if (e.charCodeAt(r) === Ut) {
          if (!s) {
            i = r;
            break;
          }
        } else s = !1;
      return i === -1 ? (t ? "/" : ".") : t && i === 1 ? "//" : e.slice(0, i);
    },
    basename(e, t) {
      t !== void 0 && St(t, "ext"), St(e, "path");
      let i = 0,
        s = -1,
        r = !0,
        n;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return "";
        let o = t.length - 1,
          a = -1;
        for (n = e.length - 1; n >= 0; --n) {
          const c = e.charCodeAt(n);
          if (c === Ut) {
            if (!r) {
              i = n + 1;
              break;
            }
          } else a === -1 && ((r = !1), (a = n + 1)), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (s = n) : ((o = -1), (s = a)));
        }
        return i === s ? (s = a) : s === -1 && (s = e.length), e.slice(i, s);
      }
      for (n = e.length - 1; n >= 0; --n)
        if (e.charCodeAt(n) === Ut) {
          if (!r) {
            i = n + 1;
            break;
          }
        } else s === -1 && ((r = !1), (s = n + 1));
      return s === -1 ? "" : e.slice(i, s);
    },
    extname(e) {
      St(e, "path");
      let t = -1,
        i = 0,
        s = -1,
        r = !0,
        n = 0;
      for (let o = e.length - 1; o >= 0; --o) {
        const a = e.charCodeAt(o);
        if (a === Ut) {
          if (!r) {
            i = o + 1;
            break;
          }
          continue;
        }
        s === -1 && ((r = !1), (s = o + 1)), a === hi ? (t === -1 ? (t = o) : n !== 1 && (n = 1)) : t !== -1 && (n = -1);
      }
      return t === -1 || s === -1 || n === 0 || (n === 1 && t === s - 1 && t === i + 1) ? "" : e.slice(t, s);
    },
    format: sl.bind(null, "/"),
    parse(e) {
      St(e, "path");
      const t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      const i = e.charCodeAt(0) === Ut;
      let s;
      i ? ((t.root = "/"), (s = 1)) : (s = 0);
      let r = -1,
        n = 0,
        o = -1,
        a = !0,
        c = e.length - 1,
        l = 0;
      for (; c >= s; --c) {
        const h = e.charCodeAt(c);
        if (h === Ut) {
          if (!a) {
            n = c + 1;
            break;
          }
          continue;
        }
        o === -1 && ((a = !1), (o = c + 1)), h === hi ? (r === -1 ? (r = c) : l !== 1 && (l = 1)) : r !== -1 && (l = -1);
      }
      if (o !== -1) {
        const h = n === 0 && i ? 1 : n;
        r === -1 || l === 0 || (l === 1 && r === o - 1 && r === n + 1) ? (t.base = t.name = e.slice(h, o)) : ((t.name = e.slice(h, r)), (t.base = e.slice(h, o)), (t.ext = e.slice(r, o)));
      }
      return n > 0 ? (t.dir = e.slice(0, n - 1)) : i && (t.dir = "/"), t;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null,
  };
(rt.win32 = Lt.win32 = Lt), (rt.posix = Lt.posix = rt);
var Li = pe ? Lt.normalize : rt.normalize,
  Mr = pe ? Lt.isAbsolute : rt.isAbsolute,
  _ = pe ? Lt.join : rt.join,
  Oi = pe ? Lt.resolve : rt.resolve,
  rl = pe ? Lt.relative : rt.relative,
  Be = pe ? Lt.dirname : rt.dirname,
  Ie = pe ? Lt.basename : rt.basename,
  Id = pe ? Lt.extname : rt.extname,
  D7 = pe ? Lt.format : rt.format,
  R7 = pe ? Lt.parse : rt.parse,
  L7 = pe ? Lt.toNamespacedPath : rt.toNamespacedPath,
  ge = pe ? Lt.sep : rt.sep,
  Pd = pe ? Lt.delimiter : rt.delimiter;
function kd(e) {
  return e;
}
var Ad = class {
    constructor(e, t) {
      (this.a = void 0), (this.b = void 0), typeof e == "function" ? ((this.c = e), (this.d = kd)) : ((this.c = t), (this.d = e.getCacheKey));
    }
    get(e) {
      const t = this.d(e);
      return this.b !== t && ((this.b = t), (this.a = this.c(e))), this.a;
    }
  },
  ss = class {
    constructor(e) {
      (this.d = e), (this.a = !1);
    }
    get hasValue() {
      return this.a;
    }
    get value() {
      if (!this.a)
        try {
          this.b = this.d();
        } catch (e) {
          this.c = e;
        } finally {
          this.a = !0;
        }
      if (this.c) throw this.c;
      return this.b;
    }
    get rawValue() {
      return this.b;
    }
  };
function Dd(e) {
  return !e || typeof e != "string" ? !0 : e.trim().length === 0;
}
function Ms(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function Rd(e, t) {
  if (!e || !t) return e;
  const i = t.length;
  if (i === 0 || e.length === 0) return e;
  let s = 0;
  for (; e.indexOf(t, s) === s; ) s = s + i;
  return e.substring(s);
}
function nl(e, t) {
  if (!e || !t) return e;
  const i = t.length,
    s = e.length;
  if (i === 0 || s === 0) return e;
  let r = s,
    n = -1;
  for (; (n = e.lastIndexOf(t, r - 1)), !(n === -1 || n + i !== r); ) {
    if (n === 0) return "";
    r = n;
  }
  return e.substring(0, r);
}
function io(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function so(e, t, i = 0, s = e.length, r = 0, n = t.length) {
  for (; i < s && r < n; i++, r++) {
    const c = e.charCodeAt(i),
      l = t.charCodeAt(r);
    if (c < l) return -1;
    if (c > l) return 1;
  }
  const o = s - i,
    a = n - r;
  return o < a ? -1 : o > a ? 1 : 0;
}
function ro(e, t) {
  return _s(e, t, 0, e.length, 0, t.length);
}
function _s(e, t, i = 0, s = e.length, r = 0, n = t.length) {
  for (; i < s && r < n; i++, r++) {
    let c = e.charCodeAt(i),
      l = t.charCodeAt(r);
    if (c === l) continue;
    if (c >= 128 || l >= 128) return so(e.toLowerCase(), t.toLowerCase(), i, s, r, n);
    ol(c) && (c -= 32), ol(l) && (l -= 32);
    const h = c - l;
    if (h !== 0) return h;
  }
  const o = s - i,
    a = n - r;
  return o < a ? -1 : o > a ? 1 : 0;
}
function ol(e) {
  return e >= 97 && e <= 122;
}
function al(e) {
  return e >= 65 && e <= 90;
}
function Ni(e, t) {
  return e.length === t.length && _s(e, t) === 0;
}
function cl(e, t) {
  const i = t.length;
  return t.length > e.length ? !1 : _s(e, t, 0, i) === 0;
}
function Ld(e) {
  return 55296 <= e && e <= 56319;
}
function ll(e) {
  return 56320 <= e && e <= 57343;
}
function Od(e, t) {
  return ((e - 55296) << 10) + (t - 56320) + 65536;
}
var O7 = "\uFEFF",
  hl;
(function (e) {
  (e[(e.Other = 0)] = "Other"),
    (e[(e.Prepend = 1)] = "Prepend"),
    (e[(e.CR = 2)] = "CR"),
    (e[(e.LF = 3)] = "LF"),
    (e[(e.Control = 4)] = "Control"),
    (e[(e.Extend = 5)] = "Extend"),
    (e[(e.Regional_Indicator = 6)] = "Regional_Indicator"),
    (e[(e.SpacingMark = 7)] = "SpacingMark"),
    (e[(e.L = 8)] = "L"),
    (e[(e.V = 9)] = "V"),
    (e[(e.T = 10)] = "T"),
    (e[(e.LV = 11)] = "LV"),
    (e[(e.LVT = 12)] = "LVT"),
    (e[(e.ZWJ = 13)] = "ZWJ"),
    (e[(e.Extended_Pictographic = 14)] = "Extended_Pictographic");
})(hl || (hl = {}));
var N7 = class pr {
  static {
    this.c = null;
  }
  static getInstance() {
    return pr.c || (pr.c = new pr()), pr.c;
  }
  constructor() {
    this.d = Nd();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const i = this.d,
      s = i.length / 3;
    let r = 1;
    for (; r <= s; )
      if (t < i[3 * r]) r = 2 * r;
      else if (t > i[3 * r + 1]) r = 2 * r + 1;
      else return i[3 * r + 2];
    return 0;
  }
};
function Nd() {
  return JSON.parse(
    "[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]",
  );
}
var ul;
(function (e) {
  (e[(e.zwj = 8205)] = "zwj"), (e[(e.emojiVariantSelector = 65039)] = "emojiVariantSelector"), (e[(e.enclosingKeyCap = 8419)] = "enclosingKeyCap");
})(ul || (ul = {}));
var C7 = class gr {
    static {
      this.c = new ss(() =>
        JSON.parse(
          '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
        ),
      );
    }
    static {
      this.d = new Ad({ getCacheKey: JSON.stringify }, (t) => {
        function i(h) {
          const u = new Map();
          for (let f = 0; f < h.length; f += 2) u.set(h[f], h[f + 1]);
          return u;
        }
        function s(h, u) {
          const f = new Map(h);
          for (const [p, w] of u) f.set(p, w);
          return f;
        }
        function r(h, u) {
          if (!h) return u;
          const f = new Map();
          for (const [p, w] of h) u.has(p) && f.set(p, w);
          return f;
        }
        const n = this.c.value;
        let o = t.filter((h) => !h.startsWith("_") && h in n);
        o.length === 0 && (o = ["_default"]);
        let a;
        for (const h of o) {
          const u = i(n[h]);
          a = r(a, u);
        }
        const c = i(n._common),
          l = s(c, a);
        return new gr(l);
      });
    }
    static getInstance(t) {
      return gr.d.get(Array.from(t));
    }
    static {
      this.e = new ss(() => Object.keys(gr.c.value).filter((t) => !t.startsWith("_")));
    }
    static getLocales() {
      return gr.e.value;
    }
    constructor(t) {
      this.f = t;
    }
    isAmbiguous(t) {
      return this.f.has(t);
    }
    containsAmbiguousCharacter(t) {
      for (let i = 0; i < t.length; i++) {
        const s = t.codePointAt(i);
        if (typeof s == "number" && this.isAmbiguous(s)) return !0;
      }
      return !1;
    }
    getPrimaryConfusable(t) {
      return this.f.get(t);
    }
    getConfusableCodePoints() {
      return new Set(this.f.keys());
    }
  },
  F7 = class mr {
    static c() {
      return JSON.parse(
        "[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]",
      );
    }
    static {
      this.d = void 0;
    }
    static e() {
      return this.d || (this.d = new Set(mr.c())), this.d;
    }
    static isInvisibleCharacter(t) {
      return mr.e().has(t);
    }
    static containsInvisibleCharacter(t) {
      for (let i = 0; i < t.length; i++) {
        const s = t.codePointAt(i);
        if (typeof s == "number" && mr.isInvisibleCharacter(s)) return !0;
      }
      return !1;
    }
    static get codePoints() {
      return mr.e();
    }
  };
function zt(e) {
  return typeof e == "string";
}
function Ct(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
function Cd(e) {
  const t = Object.getPrototypeOf(Uint8Array);
  return typeof e == "object" && e instanceof t;
}
function fl(e) {
  return typeof e == "number" && !isNaN(e);
}
function di(e) {
  return e === !0 || e === !1;
}
function Ye(e) {
  return typeof e > "u";
}
function Xt(e) {
  return Ye(e) || e === null;
}
function dl(e) {
  if (Xt(e)) throw new Error("Assertion Failed: argument is undefined or null");
  return e;
}
var Fd = Object.prototype.hasOwnProperty;
function no(e) {
  if (!Ct(e)) return !1;
  for (const t in e) if (Fd.call(e, t)) return !1;
  return !0;
}
function pi(e) {
  return e === 47 || e === 92;
}
function pl(e) {
  return e.replace(/[\\/]/g, rt.sep);
}
function Td(e) {
  return e.indexOf("/") === -1 && (e = pl(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function gl(e, t = rt.sep) {
  if (!e) return "";
  const i = e.length,
    s = e.charCodeAt(0);
  if (pi(s)) {
    if (pi(e.charCodeAt(1)) && !pi(e.charCodeAt(2))) {
      let n = 3;
      const o = n;
      for (; n < i && !pi(e.charCodeAt(n)); n++);
      if (o !== n && !pi(e.charCodeAt(n + 1))) {
        for (n += 1; n < i; n++) if (pi(e.charCodeAt(n))) return e.slice(0, n + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (ml(s) && e.charCodeAt(1) === 58) return pi(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let r = e.indexOf("://");
  if (r !== -1) {
    for (r += 3; r < i; r++) if (pi(e.charCodeAt(r))) return e.slice(0, r + 1);
  }
  return "";
}
function oo(e, t, i) {
  const s = e === t;
  return !i || s ? s : !e || !t ? !1 : Ni(e, t);
}
function Us(e, t, i, s = ge) {
  if (e === t) return !0;
  if (!e || !t || t.length > e.length) return !1;
  if (i) {
    if (!cl(e, t)) return !1;
    if (t.length === e.length) return !0;
    let n = t.length;
    return t.charAt(t.length - 1) === s && n--, e.charAt(n) === s;
  }
  return t.charAt(t.length - 1) !== s && (t += s), e.indexOf(t) === 0;
}
function ml(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
function Md(e) {
  return Rt ? ((e = nl(e, ge)), e.endsWith(":") && (e += ge)) : ((e = nl(e, ge)), e || (e = ge)), e;
}
function _d(e) {
  const t = Li(e);
  return Rt ? (e.length > 3 ? !1 : Ud(t) && (e.length === 2 || t.charCodeAt(2) === 92)) : t === rt.sep;
}
function Ud(e, t = Rt) {
  return t ? ml(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : !1;
}
var jd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  Vd = "BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";
function Bd(e, t, i = 8) {
  let s = "";
  for (let n = 0; n < i; n++) {
    let o;
    n === 0 && Rt && !t && (i === 3 || i === 4) ? (o = Vd) : (o = jd), (s += o.charAt(Math.floor(Math.random() * o.length)));
  }
  let r;
  return t ? (r = `${t}-${s}`) : (r = s), e ? _(e, r) : r;
}
var zd = /^\w[\w\d+.-]*$/,
  qd = /^\//,
  Wd = /^\/\//;
function Hd(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !zd.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!qd.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (Wd.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function Gd(e, t) {
  return !e && !t ? "file" : e;
}
function Jd(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== Ne && (t = Ne + t) : (t = Ne);
      break;
  }
  return t;
}
var mt = "",
  Ne = "/",
  Qd = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
  I = class Cn {
    static isUri(t) {
      return t instanceof Cn
        ? !0
        : t
          ? typeof t.authority == "string" &&
            typeof t.fragment == "string" &&
            typeof t.path == "string" &&
            typeof t.query == "string" &&
            typeof t.scheme == "string" &&
            typeof t.fsPath == "string" &&
            typeof t.with == "function" &&
            typeof t.toString == "function"
          : !1;
    }
    constructor(t, i, s, r, n, o = !1) {
      typeof t == "object"
        ? ((this.scheme = t.scheme || mt), (this.authority = t.authority || mt), (this.path = t.path || mt), (this.query = t.query || mt), (this.fragment = t.fragment || mt))
        : ((this.scheme = Gd(t, o)), (this.authority = i || mt), (this.path = Jd(this.scheme, s || mt)), (this.query = r || mt), (this.fragment = n || mt), Hd(this, o));
    }
    get fsPath() {
      return _r(this, !1);
    }
    with(t) {
      if (!t) return this;
      let { scheme: i, authority: s, path: r, query: n, fragment: o } = t;
      return (
        i === void 0 ? (i = this.scheme) : i === null && (i = mt),
        s === void 0 ? (s = this.authority) : s === null && (s = mt),
        r === void 0 ? (r = this.path) : r === null && (r = mt),
        n === void 0 ? (n = this.query) : n === null && (n = mt),
        o === void 0 ? (o = this.fragment) : o === null && (o = mt),
        i === this.scheme && s === this.authority && r === this.path && n === this.query && o === this.fragment ? this : new rs(i, s, r, n, o)
      );
    }
    static parse(t, i = !1) {
      const s = Qd.exec(t);
      return s ? new rs(s[2] || mt, Ur(s[4] || mt), Ur(s[5] || mt), Ur(s[7] || mt), Ur(s[9] || mt), i) : new rs(mt, mt, mt, mt, mt);
    }
    static file(t) {
      let i = mt;
      if ((Rt && (t = t.replace(/\\/g, Ne)), t[0] === Ne && t[1] === Ne)) {
        const s = t.indexOf(Ne, 2);
        s === -1 ? ((i = t.substring(2)), (t = Ne)) : ((i = t.substring(2, s)), (t = t.substring(s) || Ne));
      }
      return new rs("file", i, t, mt, mt);
    }
    static from(t, i) {
      return new rs(t.scheme, t.authority, t.path, t.query, t.fragment, i);
    }
    static joinPath(t, ...i) {
      if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
      let s;
      return Rt && t.scheme === "file" ? (s = Cn.file(Lt.join(_r(t, !0), ...i)).path) : (s = rt.join(t.path, ...i)), t.with({ path: s });
    }
    toString(t = !1) {
      return ao(this, t);
    }
    toJSON() {
      return this;
    }
    static revive(t) {
      if (t) {
        if (t instanceof Cn) return t;
        {
          const i = new rs(t);
          return (i._formatted = t.external ?? null), (i._fsPath = t._sep === wl ? (t.fsPath ?? null) : null), i;
        }
      } else return t;
    }
    [Symbol.for("debug.description")]() {
      return `URI(${this.toString()})`;
    }
  },
  wl = Rt ? 1 : void 0,
  rs = class extends I {
    constructor() {
      super(...arguments), (this._formatted = null), (this._fsPath = null);
    }
    get fsPath() {
      return this._fsPath || (this._fsPath = _r(this, !1)), this._fsPath;
    }
    toString(e = !1) {
      return e ? ao(this, !0) : (this._formatted || (this._formatted = ao(this, !1)), this._formatted);
    }
    toJSON() {
      const e = { $mid: 1 };
      return (
        this._fsPath && ((e.fsPath = this._fsPath), (e._sep = wl)),
        this._formatted && (e.external = this._formatted),
        this.path && (e.path = this.path),
        this.scheme && (e.scheme = this.scheme),
        this.authority && (e.authority = this.authority),
        this.query && (e.query = this.query),
        this.fragment && (e.fragment = this.fragment),
        e
      );
    }
  },
  vl = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function yl(e, t, i) {
  let s,
    r = -1;
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    if ((o >= 97 && o <= 122) || (o >= 65 && o <= 90) || (o >= 48 && o <= 57) || o === 45 || o === 46 || o === 95 || o === 126 || (t && o === 47) || (i && o === 91) || (i && o === 93) || (i && o === 58))
      r !== -1 && ((s += encodeURIComponent(e.substring(r, n))), (r = -1)), s !== void 0 && (s += e.charAt(n));
    else {
      s === void 0 && (s = e.substr(0, n));
      const a = vl[o];
      a !== void 0 ? (r !== -1 && ((s += encodeURIComponent(e.substring(r, n))), (r = -1)), (s += a)) : r === -1 && (r = n);
    }
  }
  return r !== -1 && (s += encodeURIComponent(e.substring(r))), s !== void 0 ? s : e;
}
function Xd(e) {
  let t;
  for (let i = 0; i < e.length; i++) {
    const s = e.charCodeAt(i);
    s === 35 || s === 63 ? (t === void 0 && (t = e.substr(0, i)), (t += vl[s])) : t !== void 0 && (t += e[i]);
  }
  return t !== void 0 ? t : e;
}
function _r(e, t) {
  let i;
  return (
    e.authority && e.path.length > 1 && e.scheme === "file"
      ? (i = `//${e.authority}${e.path}`)
      : e.path.charCodeAt(0) === 47 && ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) || (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) && e.path.charCodeAt(2) === 58
        ? t
          ? (i = e.path.substr(1))
          : (i = e.path[1].toLowerCase() + e.path.substr(2))
        : (i = e.path),
    Rt && (i = i.replace(/\//g, "\\")),
    i
  );
}
function ao(e, t) {
  const i = t ? Xd : yl;
  let s = "",
    { scheme: r, authority: n, path: o, query: a, fragment: c } = e;
  if ((r && ((s += r), (s += ":")), (n || r === "file") && ((s += Ne), (s += Ne)), n)) {
    let l = n.indexOf("@");
    if (l !== -1) {
      const h = n.substr(0, l);
      (n = n.substr(l + 1)), (l = h.lastIndexOf(":")), l === -1 ? (s += i(h, !1, !1)) : ((s += i(h.substr(0, l), !1, !1)), (s += ":"), (s += i(h.substr(l + 1), !1, !0))), (s += "@");
    }
    (n = n.toLowerCase()), (l = n.lastIndexOf(":")), l === -1 ? (s += i(n, !1, !0)) : ((s += i(n.substr(0, l), !1, !0)), (s += n.substr(l)));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const l = o.charCodeAt(1);
      l >= 65 && l <= 90 && (o = `/${String.fromCharCode(l + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const l = o.charCodeAt(0);
      l >= 65 && l <= 90 && (o = `${String.fromCharCode(l + 32)}:${o.substr(2)}`);
    }
    s += i(o, !0, !1);
  }
  return a && ((s += "?"), (s += i(a, !1, !1))), c && ((s += "#"), (s += t ? c : yl(c, !1, !1))), s;
}
function bl(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + bl(e.substr(3)) : e;
  }
}
var El = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function Ur(e) {
  return e.match(El) ? e.replace(El, (t) => bl(t)) : e;
}
var K;
(function (e) {
  (e.inMemory = "inmemory"),
    (e.vscode = "vscode"),
    (e.internal = "private"),
    (e.walkThrough = "walkThrough"),
    (e.walkThroughSnippet = "walkThroughSnippet"),
    (e.http = "http"),
    (e.https = "https"),
    (e.file = "file"),
    (e.mailto = "mailto"),
    (e.untitled = "untitled"),
    (e.data = "data"),
    (e.command = "command"),
    (e.vscodeRemote = "vscode-remote"),
    (e.vscodeRemoteDownload = "vscode-remote-download"),
    (e.vscodeRemoteResource = "vscode-remote-resource"),
    (e.vscodeManagedRemoteResource = "vscode-managed-remote-resource"),
    (e.vscodeUserData = "vscode-userdata"),
    (e.vscodeCustomEditor = "vscode-custom-editor"),
    (e.vscodeNotebookCell = "vscode-notebook-cell"),
    (e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata"),
    (e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff"),
    (e.vscodeNotebookCellOutput = "vscode-notebook-cell-output"),
    (e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff"),
    (e.vscodeNotebookMetadata = "vscode-notebook-metadata"),
    (e.vscodeInteractiveInput = "vscode-interactive-input"),
    (e.vscodeSettings = "vscode-settings"),
    (e.vscodeWorkspaceTrust = "vscode-workspace-trust"),
    (e.vscodeTerminal = "vscode-terminal"),
    (e.vscodeChatCodeBlock = "vscode-chat-code-block"),
    (e.icubeChatCodeBlock = "icube-chat-code-block"),
    (e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block"),
    (e.vscodeChatSesssion = "vscode-chat-editor"),
    (e.vscodeComponent = "vscode-component-editor"),
    (e.vscodeIcubeChatSession = "vscode-icube-chat-editor"),
    (e.webviewPanel = "webview-panel"),
    (e.vscodeWebview = "vscode-webview"),
    (e.extension = "extension"),
    (e.vscodeFileResource = "vscode-file"),
    (e.tmp = "tmp"),
    (e.vsls = "vsls"),
    (e.vscodeSourceControl = "vscode-scm"),
    (e.commentsInput = "comment"),
    (e.codeSetting = "code-setting"),
    (e.outputChannel = "output"),
    (e.accessibleView = "accessible-view");
})(K || (K = {}));
var Zd = "tkn",
  Yd = class {
    constructor() {
      (this.a = Object.create(null)), (this.b = Object.create(null)), (this.c = Object.create(null)), (this.d = "http"), (this.e = null), (this.f = "/");
    }
    setPreferredWebSchema(e) {
      this.d = e;
    }
    setDelegate(e) {
      this.e = e;
    }
    setServerRootPath(e, t) {
      this.f = tp(e, t);
    }
    getServerRootPath() {
      return this.f;
    }
    get g() {
      return rt.join(this.f, K.vscodeRemoteResource);
    }
    set(e, t, i) {
      (this.a[e] = t), (this.b[e] = i);
    }
    setConnectionToken(e, t) {
      this.c[e] = t;
    }
    getPreferredWebSchema() {
      return this.d;
    }
    rewrite(e) {
      if (this.e)
        try {
          return this.e(e);
        } catch (o) {
          return Le(o), e;
        }
      const t = e.authority;
      let i = this.a[t];
      i && i.indexOf(":") !== -1 && i.indexOf("[") === -1 && (i = `[${i}]`);
      const s = this.b[t],
        r = this.c[t];
      let n = `path=${encodeURIComponent(e.path)}`;
      return typeof r == "string" && (n += `&${Zd}=${encodeURIComponent(r)}`), I.from({ scheme: fe ? this.d : K.vscodeRemoteResource, authority: `${i}:${s}`, path: this.g, query: n });
    }
  },
  Kd = new Yd();
function tp(e, t) {
  return rt.join(t ?? "/", `${e.quality ?? "oss"}-${e.commit ?? "dev"}`);
}
var ep = "vs/../../node_modules",
  ip = "vs/../../node_modules.asar",
  xl = "vscode-app",
  sp = class Fn {
    static {
      this.a = xl;
    }
    asBrowserUri(t) {
      const i = this.b(t);
      return this.uriToBrowserUri(i);
    }
    uriToBrowserUri(t) {
      return t.scheme === K.vscodeRemote
        ? Kd.rewrite(t)
        : t.scheme === K.file && (ld || ud === `${K.vscodeFileResource}://${Fn.a}`)
          ? t.with({ scheme: K.vscodeFileResource, authority: t.authority || Fn.a, query: null, fragment: null })
          : t;
    }
    asFileUri(t) {
      const i = this.b(t);
      return this.uriToFileUri(i);
    }
    uriToFileUri(t) {
      return t.scheme === K.vscodeFileResource ? t.with({ scheme: K.file, authority: t.authority !== Fn.a ? t.authority : null, query: null, fragment: null }) : t;
    }
    b(t, i) {
      if (I.isUri(t)) return t;
      if (globalThis._VSCODE_FILE_ROOT) {
        const s = globalThis._VSCODE_FILE_ROOT;
        if (/^\w[\w\d+.-]*:\/\//.test(s)) return I.joinPath(I.parse(s, !0), t);
        const r = _(s, t);
        return I.file(r);
      }
      return I.parse(i.toUrl(t));
    }
  },
  js = new sp(),
  Sl;
(function (e) {
  const t = new Map([
    ["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
    ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
    ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }],
  ]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const i = "vscode-coi";
  function s(n) {
    let o;
    typeof n == "string" ? (o = new URL(n).searchParams) : n instanceof URL ? (o = n.searchParams) : I.isUri(n) && (o = new URL(n.toString(!0)).searchParams);
    const a = o?.get(i);
    if (a) return t.get(a);
  }
  e.getHeadersFromQuery = s;
  function r(n, o, a) {
    if (!globalThis.crossOriginIsolated) return;
    const c = o && a ? "3" : a ? "2" : "1";
    n instanceof URLSearchParams ? n.set(i, c) : (n[i] = c);
  }
  e.addSearchParam = r;
})(Sl || (Sl = {}));
function Ke(e) {
  return _r(e, !0);
}
var jr = class {
    constructor(e) {
      this.a = e;
    }
    compare(e, t, i = !1) {
      return e === t ? 0 : io(this.getComparisonKey(e, i), this.getComparisonKey(t, i));
    }
    isEqual(e, t, i = !1) {
      return e === t ? !0 : !e || !t ? !1 : this.getComparisonKey(e, i) === this.getComparisonKey(t, i);
    }
    getComparisonKey(e, t = !1) {
      return e.with({ path: this.a(e) ? e.path.toLowerCase() : void 0, fragment: t ? null : void 0 }).toString();
    }
    ignorePathCasing(e) {
      return this.a(e);
    }
    isEqualOrParent(e, t, i = !1) {
      if (e.scheme === t.scheme) {
        if (e.scheme === K.file) return Us(Ke(e), Ke(t), this.a(e)) && e.query === t.query && (i || e.fragment === t.fragment);
        if (Pl(e.authority, t.authority)) return Us(e.path, t.path, this.a(e), "/") && e.query === t.query && (i || e.fragment === t.fragment);
      }
      return !1;
    }
    joinPath(e, ...t) {
      return I.joinPath(e, ...t);
    }
    basenameOrAuthority(e) {
      return ns(e) || e.authority;
    }
    basename(e) {
      return rt.basename(e.path);
    }
    extname(e) {
      return rt.extname(e.path);
    }
    dirname(e) {
      if (e.path.length === 0) return e;
      let t;
      return (
        e.scheme === K.file ? (t = I.file(Be(Ke(e))).path) : ((t = rt.dirname(e.path)), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), (t = "/"))),
        e.with({ path: t })
      );
    }
    normalizePath(e) {
      if (!e.path.length) return e;
      let t;
      return e.scheme === K.file ? (t = I.file(Li(Ke(e))).path) : (t = rt.normalize(e.path)), e.with({ path: t });
    }
    relativePath(e, t) {
      if (e.scheme !== t.scheme || !Pl(e.authority, t.authority)) return;
      if (e.scheme === K.file) {
        const r = rl(Ke(e), Ke(t));
        return Rt ? pl(r) : r;
      }
      let i = e.path || "/";
      const s = t.path || "/";
      if (this.a(e)) {
        let r = 0;
        for (const n = Math.min(i.length, s.length); r < n && !(i.charCodeAt(r) !== s.charCodeAt(r) && i.charAt(r).toLowerCase() !== s.charAt(r).toLowerCase()); r++);
        i = s.substr(0, r) + i.substr(r);
      }
      return rt.relative(i, s);
    }
    resolvePath(e, t) {
      if (e.scheme === K.file) {
        const i = I.file(Oi(Ke(e), t));
        return e.with({ authority: i.authority, path: i.path });
      }
      return (t = Td(t)), e.with({ path: rt.resolve(e.path, t) });
    }
    isAbsolutePath(e) {
      return !!e.path && e.path[0] === "/";
    }
    isEqualAuthority(e, t) {
      return e === t || (e !== void 0 && t !== void 0 && Ni(e, t));
    }
    hasTrailingPathSeparator(e, t = ge) {
      if (e.scheme === K.file) {
        const i = Ke(e);
        return i.length > gl(i).length && i[i.length - 1] === t;
      } else {
        const i = e.path;
        return i.length > 1 && i.charCodeAt(i.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
      }
    }
    removeTrailingPathSeparator(e, t = ge) {
      return kl(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
    }
    addTrailingPathSeparator(e, t = ge) {
      let i = !1;
      if (e.scheme === K.file) {
        const s = Ke(e);
        i = s !== void 0 && s.length === gl(s).length && s[s.length - 1] === t;
      } else {
        t = "/";
        const s = e.path;
        i = s.length === 1 && s.charCodeAt(s.length - 1) === 47;
      }
      return !i && !kl(e, t) ? e.with({ path: e.path + "/" }) : e;
    }
  },
  Y = new jr(() => !1),
  co = new jr((e) => (e.scheme === K.file ? !se : !0)),
  rp = new jr((e) => !0),
  $l = Y.isEqual.bind(Y),
  Il = Y.isEqualOrParent.bind(Y),
  T7 = Y.getComparisonKey.bind(Y),
  M7 = Y.basenameOrAuthority.bind(Y),
  ns = Y.basename.bind(Y),
  _7 = Y.extname.bind(Y),
  np = Y.dirname.bind(Y),
  V = Y.joinPath.bind(Y),
  op = Y.normalizePath.bind(Y),
  U7 = Y.relativePath.bind(Y),
  j7 = Y.resolvePath.bind(Y),
  ap = Y.isAbsolutePath.bind(Y),
  Pl = Y.isEqualAuthority.bind(Y),
  kl = Y.hasTrailingPathSeparator.bind(Y),
  V7 = Y.removeTrailingPathSeparator.bind(Y),
  B7 = Y.addTrailingPathSeparator.bind(Y),
  Al;
(function (e) {
  (e.META_DATA_LABEL = "label"), (e.META_DATA_DESCRIPTION = "description"), (e.META_DATA_SIZE = "size"), (e.META_DATA_MIME = "mime");
  function t(i) {
    const s = new Map();
    i.path
      .substring(i.path.indexOf(";") + 1, i.path.lastIndexOf(";"))
      .split(";")
      .forEach((o) => {
        const [a, c] = o.split(":");
        a && c && s.set(a, c);
      });
    const n = i.path.substring(0, i.path.indexOf(";"));
    return n && s.set(e.META_DATA_MIME, n), s;
  }
  e.parseMetaData = t;
})(Al || (Al = {}));
var cp = Symbol("MicrotaskDelay");
function lo(e) {
  return !!e && typeof e.then == "function";
}
function ti(e) {
  const t = new ts(),
    i = e(t.token),
    s = new Promise((r, n) => {
      const o = t.token.onCancellationRequested(() => {
        o.dispose(), n(new Tt());
      });
      Promise.resolve(i).then(
        (a) => {
          o.dispose(), t.dispose(), r(a);
        },
        (a) => {
          o.dispose(), t.dispose(), n(a);
        },
      );
    });
  return new (class {
    cancel() {
      t.cancel(), t.dispose();
    }
    then(r, n) {
      return s.then(r, n);
    }
    catch(r) {
      return this.then(void 0, r);
    }
    finally(r) {
      return s.finally(r);
    }
  })();
}
function lp(e, t, i) {
  let s;
  const r = setTimeout(() => {
    s?.(void 0), i?.();
  }, t);
  return Promise.race([e.finally(() => clearTimeout(r)), new Promise((n) => (s = n))]);
}
var Dl = class {
    constructor() {
      (this.f = !1), (this.a = null), (this.b = null), (this.d = null);
    }
    queue(e) {
      if (this.f) return Promise.reject(new Error("Throttler is disposed"));
      if (this.a) {
        if (((this.d = e), !this.b)) {
          const t = () => {
            if (((this.b = null), this.f)) return;
            const i = this.queue(this.d);
            return (this.d = null), i;
          };
          this.b = new Promise((i) => {
            this.a.then(t, t).then(i);
          });
        }
        return new Promise((t, i) => {
          this.b.then(t, i);
        });
      }
      return (
        (this.a = e()),
        new Promise((t, i) => {
          this.a.then(
            (s) => {
              (this.a = null), t(s);
            },
            (s) => {
              (this.a = null), i(s);
            },
          );
        })
      );
    }
    dispose() {
      this.f = !0;
    }
  },
  hp = class {
    constructor() {
      this.a = Promise.resolve(null);
    }
    queue(e) {
      return (this.a = this.a.then(
        () => e(),
        () => e(),
      ));
    }
  },
  up = (e, t) => {
    let i = !0;
    const s = setTimeout(() => {
      (i = !1), t();
    }, e);
    return {
      isTriggered: () => i,
      dispose: () => {
        clearTimeout(s), (i = !1);
      },
    };
  },
  fp = (e) => {
    let t = !0;
    return (
      queueMicrotask(() => {
        t && ((t = !1), e());
      }),
      {
        isTriggered: () => t,
        dispose: () => {
          t = !1;
        },
      }
    );
  },
  Rl = class {
    constructor(e) {
      (this.defaultDelay = e), (this.a = null), (this.b = null), (this.d = null), (this.f = null), (this.g = null);
    }
    trigger(e, t = this.defaultDelay) {
      (this.g = e),
        this.h(),
        this.b ||
          (this.b = new Promise((s, r) => {
            (this.d = s), (this.f = r);
          }).then(() => {
            if (((this.b = null), (this.d = null), this.g)) {
              const s = this.g;
              return (this.g = null), s();
            }
          }));
      const i = () => {
        (this.a = null), this.d?.(null);
      };
      return (this.a = t === cp ? fp(i) : up(t, i)), this.b;
    }
    isTriggered() {
      return !!this.a?.isTriggered();
    }
    cancel() {
      this.h(), this.b && (this.f?.(new Tt()), (this.b = null));
    }
    h() {
      this.a?.dispose(), (this.a = null);
    }
    dispose() {
      this.cancel();
    }
  },
  Ci = class {
    constructor(e) {
      (this.a = new Rl(e)), (this.b = new Dl());
    }
    trigger(e, t) {
      return this.a.trigger(() => this.b.queue(e), t);
    }
    isTriggered() {
      return this.a.isTriggered();
    }
    cancel() {
      this.a.cancel();
    }
    dispose() {
      this.a.dispose(), this.b.dispose();
    }
  },
  Ll = class {
    constructor() {
      (this.a = !1),
        (this.b = new Promise((e, t) => {
          this.d = e;
        }));
    }
    isOpen() {
      return this.a;
    }
    open() {
      (this.a = !0), this.d(!0);
    }
    wait() {
      return this.b;
    }
  };
function Vs(e, t) {
  return t
    ? new Promise((i, s) => {
        const r = setTimeout(() => {
            n.dispose(), i();
          }, e),
          n = t.onCancellationRequested(() => {
            clearTimeout(r), n.dispose(), s(new Tt());
          });
      })
    : ti((i) => Vs(e, i));
}
var Ol = class {
    constructor(e) {
      (this.a = 0), (this.b = !1), (this.f = e), (this.g = []), (this.d = 0), (this.h = new O());
    }
    whenIdle() {
      return this.size > 0 ? at.toPromise(this.onDrained) : Promise.resolve();
    }
    get onDrained() {
      return this.h.event;
    }
    get size() {
      return this.a;
    }
    queue(e) {
      if (this.b) throw new Error("Object has been disposed");
      return (
        this.a++,
        new Promise((t, i) => {
          this.g.push({ factory: e, c: t, e: i }), this.j();
        })
      );
    }
    j() {
      for (; this.g.length && this.d < this.f; ) {
        const e = this.g.shift();
        this.d++;
        const t = e.factory();
        t.then(e.c, e.e),
          t.then(
            () => this.k(),
            () => this.k(),
          );
      }
    }
    k() {
      this.b || (this.d--, --this.a === 0 && this.h.fire(), this.g.length > 0 && this.j());
    }
    clear() {
      if (this.b) throw new Error("Object has been disposed");
      (this.g.length = 0), (this.a = this.d);
    }
    dispose() {
      (this.b = !0), (this.g.length = 0), (this.a = 0), this.h.dispose();
    }
  },
  Bs = class extends Ol {
    constructor() {
      super(1);
    }
  },
  Nl = class {
    constructor() {
      (this.a = new Map()), (this.b = new Set()), (this.d = void 0), (this.f = 0);
    }
    async whenDrained() {
      if (this.g()) return;
      const e = new ho();
      return this.b.add(e), e.p;
    }
    g() {
      for (const [, e] of this.a) if (e.size > 0) return !1;
      return !0;
    }
    queueSize(e, t = Y) {
      const i = t.getComparisonKey(e);
      return this.a.get(i)?.size ?? 0;
    }
    queueFor(e, t, i = Y) {
      const s = i.getComparisonKey(e);
      let r = this.a.get(s);
      if (!r) {
        r = new Bs();
        const n = this.f++,
          o = at.once(r.onDrained)(() => {
            r?.dispose(), this.a.delete(s), this.h(), this.d?.deleteAndDispose(n), this.d?.size === 0 && (this.d.dispose(), (this.d = void 0));
          });
        this.d || (this.d = new Jn()), this.d.set(n, o), this.a.set(s, r);
      }
      return r.queue(t);
    }
    h() {
      this.g() && this.j();
    }
    j() {
      for (const e of this.b) e.complete();
      this.b.clear();
    }
    dispose() {
      for (const [, e] of this.a) e.dispose();
      this.a.clear(), this.j(), this.d?.dispose();
    }
  },
  Vr = class {
    constructor(e, t) {
      (this.b = -1), (this.a = e), (this.d = t), (this.f = this.g.bind(this));
    }
    dispose() {
      this.cancel(), (this.a = null);
    }
    cancel() {
      this.isScheduled() && (clearTimeout(this.b), (this.b = -1));
    }
    schedule(e = this.d) {
      this.cancel(), (this.b = setTimeout(this.f, e));
    }
    get delay() {
      return this.d;
    }
    set delay(e) {
      this.d = e;
    }
    isScheduled() {
      return this.b !== -1;
    }
    flush() {
      this.isScheduled() && (this.cancel(), this.h());
    }
    g() {
      (this.b = -1), this.a && this.h();
    }
    h() {
      this.a?.();
    }
  },
  dp = class extends Vr {
    constructor(e, t) {
      super(e, t), (this.j = []);
    }
    work(e) {
      this.j.push(e), this.isScheduled() || this.schedule();
    }
    h() {
      const e = this.j;
      (this.j = []), this.a?.(e);
    }
    dispose() {
      (this.j = []), super.dispose();
    }
  },
  pp = class extends G {
    constructor(e, t) {
      super(), (this.h = e), (this.j = t), (this.a = []), (this.b = this.B(new kr())), (this.f = !1), (this.g = 0);
    }
    get pending() {
      return this.a.length;
    }
    work(e) {
      if (this.f) return !1;
      if (typeof this.h.maxBufferedWork == "number") {
        if (this.b.value) {
          if (this.pending + e.length > this.h.maxBufferedWork) return !1;
        } else if (this.pending + e.length - this.h.maxWorkChunkSize > this.h.maxBufferedWork) return !1;
      }
      for (const i of e) this.a.push(i);
      const t = Date.now() - this.g;
      return !this.b.value && (!this.h.waitThrottleDelayBetweenWorkUnits || t >= this.h.throttleDelay) ? this.m() : !this.b.value && this.h.waitThrottleDelayBetweenWorkUnits && this.r(Math.max(this.h.throttleDelay - t, 0)), !0;
    }
    m() {
      (this.g = Date.now()), this.j(this.a.splice(0, this.h.maxWorkChunkSize)), this.a.length > 0 && this.r();
    }
    r(e = this.h.throttleDelay) {
      (this.b.value = new Vr(() => {
        this.b.clear(), this.m();
      }, e)),
        this.b.value.schedule();
    }
    dispose() {
      super.dispose(), (this.f = !0);
    }
  },
  Cl,
  Br;
(function () {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function"
    ? (Br = (e, t, i) => {
        dd(() => {
          if (s) return;
          const r = Date.now() + 15;
          t(
            Object.freeze({
              didTimeout: !0,
              timeRemaining() {
                return Math.max(0, r - Date.now());
              },
            }),
          );
        });
        let s = !1;
        return {
          dispose() {
            s || (s = !0);
          },
        };
      })
    : (Br = (e, t, i) => {
        const s = e.requestIdleCallback(t, typeof i == "number" ? { timeout: i } : void 0);
        let r = !1;
        return {
          dispose() {
            r || ((r = !0), e.cancelIdleCallback(s));
          },
        };
      }),
    (Cl = (e, t) => Br(globalThis, e, t));
})();
var gp = class {
    constructor(e, t) {
      (this.g = !1),
        (this.d = () => {
          try {
            this.j = t();
          } catch (i) {
            this.l = i;
          } finally {
            this.g = !0;
          }
        }),
        (this.f = Br(e, () => this.d()));
    }
    dispose() {
      this.f.dispose();
    }
    get value() {
      if ((this.g || (this.f.dispose(), this.d()), this.l)) throw this.l;
      return this.j;
    }
    get isInitialized() {
      return this.g;
    }
  },
  mp = class extends gp {
    constructor(e) {
      super(globalThis, e);
    }
  };
async function wp(e, t, i) {
  let s;
  for (let r = 0; r < i; r++)
    try {
      return await e();
    } catch (n) {
      (s = n), await Vs(t);
    }
  throw s;
}
var Fl;
(function (e) {
  (e[(e.Resolved = 0)] = "Resolved"), (e[(e.Rejected = 1)] = "Rejected");
})(Fl || (Fl = {}));
var ho = class {
    get isRejected() {
      return this.d?.outcome === 1;
    }
    get isResolved() {
      return this.d?.outcome === 0;
    }
    get isSettled() {
      return !!this.d;
    }
    get value() {
      return this.d?.outcome === 0 ? this.d?.value : void 0;
    }
    constructor() {
      this.p = new Promise((e, t) => {
        (this.a = e), (this.b = t);
      });
    }
    complete(e) {
      return new Promise((t) => {
        this.a(e), (this.d = { outcome: 0, value: e }), t();
      });
    }
    error(e) {
      return new Promise((t) => {
        this.b(e), (this.d = { outcome: 1, value: e }), t();
      });
    }
    cancel() {
      return this.error(new Tt());
    }
  },
  me;
(function (e) {
  async function t(s) {
    let r;
    const n = await Promise.all(
      s.map((o) =>
        o.then(
          (a) => a,
          (a) => {
            r || (r = a);
          },
        ),
      ),
    );
    if (typeof r < "u") throw r;
    return n;
  }
  e.settled = t;
  function i(s) {
    return new Promise(async (r, n) => {
      try {
        await s(r, n);
      } catch (o) {
        n(o);
      }
    });
  }
  e.withAsyncBody = i;
})(me || (me = {}));
var Tl;
(function (e) {
  (e[(e.Initial = 0)] = "Initial"), (e[(e.DoneOK = 1)] = "DoneOK"), (e[(e.DoneError = 2)] = "DoneError");
})(Tl || (Tl = {}));
var z7 = class xe {
  static fromArray(t) {
    return new xe((i) => {
      i.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new xe(async (i) => {
      i.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new xe(async (i) => {
      await Promise.all(t.map(async (s) => i.emitOne(await s)));
    });
  }
  static merge(t) {
    return new xe(async (i) => {
      await Promise.all(
        t.map(async (s) => {
          for await (const r of s) i.emitOne(r);
        }),
      );
    });
  }
  static {
    this.EMPTY = xe.fromArray([]);
  }
  constructor(t, i) {
    (this.a = 0),
      (this.b = []),
      (this.d = null),
      (this.f = i),
      (this.g = new O()),
      queueMicrotask(async () => {
        const s = { emitOne: (r) => this.h(r), emitMany: (r) => this.j(r), reject: (r) => this.l(r) };
        try {
          await Promise.resolve(t(s)), this.k();
        } catch (r) {
          this.l(r);
        } finally {
          (s.emitOne = void 0), (s.emitMany = void 0), (s.reject = void 0);
        }
      });
  }
  [Symbol.asyncIterator]() {
    let t = 0;
    return {
      next: async () => {
        do {
          if (this.a === 2) throw this.d;
          if (t < this.b.length) return { done: !1, value: this.b[t++] };
          if (this.a === 1) return { done: !0, value: void 0 };
          await at.toPromise(this.g.event);
        } while (!0);
      },
      return: async () => (this.f?.(), { done: !0, value: void 0 }),
    };
  }
  static map(t, i) {
    return new xe(async (s) => {
      for await (const r of t) s.emitOne(i(r));
    });
  }
  map(t) {
    return xe.map(this, t);
  }
  static filter(t, i) {
    return new xe(async (s) => {
      for await (const r of t) i(r) && s.emitOne(r);
    });
  }
  filter(t) {
    return xe.filter(this, t);
  }
  static coalesce(t) {
    return xe.filter(t, (i) => !!i);
  }
  coalesce() {
    return xe.coalesce(this);
  }
  static async toPromise(t) {
    const i = [];
    for await (const s of t) i.push(s);
    return i;
  }
  toPromise() {
    return xe.toPromise(this);
  }
  h(t) {
    this.a === 0 && (this.b.push(t), this.g.fire());
  }
  j(t) {
    this.a === 0 && ((this.b = this.b.concat(t)), this.g.fire());
  }
  k() {
    this.a === 0 && ((this.a = 1), this.g.fire());
  }
  l(t) {
    this.a === 0 && ((this.a = 2), (this.d = t), this.g.fire());
  }
};
function uo(e, t) {
  return t && (e.stack || e.stacktrace) ? d(112, null, _l(e), Ml(e.stack) || Ml(e.stacktrace)) : _l(e);
}
function Ml(e) {
  return Array.isArray(e)
    ? e.join(`
`)
    : e;
}
function _l(e) {
  return e.code === "ERR_UNC_HOST_NOT_ALLOWED"
    ? `${e.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.`
    : typeof e.code == "string" && typeof e.errno == "number" && typeof e.syscall == "string"
      ? d(113, null, e.message)
      : e.message || d(114, null);
}
function gi(e = null, t = !1) {
  if (!e) return d(115, null);
  if (Array.isArray(e)) {
    const i = Yi(e),
      s = gi(i[0], t);
    return i.length > 1 ? d(116, null, s, i.length) : s;
  }
  if (zt(e)) return e;
  if (e.detail) {
    const i = e.detail;
    if (i.error) return uo(i.error, t);
    if (i.exception) return uo(i.exception, t);
  }
  return e.stack ? uo(e, t) : e.message ? e.message : d(117, null);
}
var Ce;
(function (e) {
  (e.serviceIds = new Map()), (e.DI_TARGET = "$di$target"), (e.DI_DEPENDENCIES = "$di$dependencies");
  function t(i) {
    return i[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(Ce || (Ce = {}));
var zr = ct("instantiationService");
function vp(e, t, i) {
  t[Ce.DI_TARGET] === t ? t[Ce.DI_DEPENDENCIES].push({ id: e, index: i }) : ((t[Ce.DI_DEPENDENCIES] = [{ id: e, index: i }]), (t[Ce.DI_TARGET] = t));
}
function ct(e) {
  if (Ce.serviceIds.has(e)) return Ce.serviceIds.get(e);
  const t = function (i, s, r) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    vp(t, i, r);
  };
  return (t.toString = () => e), Ce.serviceIds.set(e, t), t;
}
function q7(e) {
  return e;
}
var Fi = ct("configurationService");
function fo(e) {
  return e && typeof e == "object" && (!e.overrideIdentifier || typeof e.overrideIdentifier == "string") && (!e.resource || e.resource instanceof I);
}
function yp(e) {
  return e && typeof e == "object" && (!e.overrideIdentifiers || Array.isArray(e.overrideIdentifiers)) && !e.overrideIdentifier && (!e.resource || e.resource instanceof I);
}
var Ul;
(function (e) {
  (e[(e.APPLICATION = 1)] = "APPLICATION"),
    (e[(e.USER = 2)] = "USER"),
    (e[(e.USER_LOCAL = 3)] = "USER_LOCAL"),
    (e[(e.USER_REMOTE = 4)] = "USER_REMOTE"),
    (e[(e.WORKSPACE = 5)] = "WORKSPACE"),
    (e[(e.WORKSPACE_FOLDER = 6)] = "WORKSPACE_FOLDER"),
    (e[(e.DEFAULT = 7)] = "DEFAULT"),
    (e[(e.MEMORY = 8)] = "MEMORY");
})(Ul || (Ul = {}));
function po(e, t) {
  const i = Object.create(null);
  for (const s in e) jl(i, s, e[s], t);
  return i;
}
function jl(e, t, i, s) {
  const r = t.split("."),
    n = r.pop();
  let o = e;
  for (let a = 0; a < r.length; a++) {
    const c = r[a];
    let l = o[c];
    switch (typeof l) {
      case "undefined":
        l = o[c] = Object.create(null);
        break;
      case "object":
        if (l === null) {
          s(`Ignoring ${t} as ${r.slice(0, a + 1).join(".")} is null`);
          return;
        }
        break;
      default:
        s(`Ignoring ${t} as ${r.slice(0, a + 1).join(".")} is ${JSON.stringify(l)}`);
        return;
    }
    o = l;
  }
  if (typeof o == "object" && o !== null)
    try {
      o[n] = i;
    } catch {
      s(`Ignoring ${t} as ${r.join(".")} is ${JSON.stringify(o)}`);
    }
  else s(`Ignoring ${t} as ${r.join(".")} is ${JSON.stringify(o)}`);
}
function bp(e, t) {
  const i = t.split(".");
  Vl(e, i);
}
function Vl(e, t) {
  const i = t.shift();
  if (t.length === 0) {
    delete e[i];
    return;
  }
  if (Object.keys(e).indexOf(i) !== -1) {
    const s = e[i];
    typeof s == "object" && !Array.isArray(s) && (Vl(s, t), Object.keys(s).length === 0 && delete e[i]);
  }
}
function qr(e, t, i) {
  function s(o, a) {
    let c = o;
    for (const l of a) {
      if (typeof c != "object" || c === null) return;
      c = c[l];
    }
    return c;
  }
  const r = t.split("."),
    n = s(e, r);
  return typeof n > "u" ? i : n;
}
function Ep(e) {
  return e.replace(/[\[\]]/g, "");
}
function Wr(e) {
  const t = e;
  return t ? [t.on, t.pause, t.resume, t.destroy].every((i) => typeof i == "function") : !1;
}
function go(e) {
  const t = e;
  return t ? Wr(t.stream) && Array.isArray(t.buffer) && typeof t.ended == "boolean" : !1;
}
function Hr(e, t) {
  return new xp(e, t);
}
var xp = class {
  constructor(e, t) {
    (this.e = e), (this.f = t), (this.a = { flowing: !1, ended: !1, destroyed: !1 }), (this.b = { data: [], error: [] }), (this.c = { data: [], error: [], end: [] }), (this.d = []);
  }
  pause() {
    this.a.destroyed || (this.a.flowing = !1);
  }
  resume() {
    this.a.destroyed || this.a.flowing || ((this.a.flowing = !0), this.j(), this.k(), this.l());
  }
  write(e) {
    if (!this.a.destroyed) {
      if (this.a.flowing) this.g(e);
      else if ((this.b.data.push(e), typeof this.f?.highWaterMark == "number" && this.b.data.length > this.f.highWaterMark)) return new Promise((t) => this.d.push(t));
    }
  }
  error(e) {
    this.a.destroyed || (this.a.flowing ? this.h(e) : this.b.error.push(e));
  }
  end(e) {
    this.a.destroyed || (typeof e < "u" && this.write(e), this.a.flowing ? (this.i(), this.destroy()) : (this.a.ended = !0));
  }
  g(e) {
    this.c.data.slice(0).forEach((t) => t(e));
  }
  h(e) {
    this.c.error.length === 0 ? Le(e) : this.c.error.slice(0).forEach((t) => t(e));
  }
  i() {
    this.c.end.slice(0).forEach((e) => e());
  }
  on(e, t) {
    if (!this.a.destroyed)
      switch (e) {
        case "data":
          this.c.data.push(t), this.resume();
          break;
        case "end":
          this.c.end.push(t), this.a.flowing && this.l() && this.destroy();
          break;
        case "error":
          this.c.error.push(t), this.a.flowing && this.k();
          break;
      }
  }
  removeListener(e, t) {
    if (this.a.destroyed) return;
    let i;
    switch (e) {
      case "data":
        i = this.c.data;
        break;
      case "end":
        i = this.c.end;
        break;
      case "error":
        i = this.c.error;
        break;
    }
    if (i) {
      const s = i.indexOf(t);
      s >= 0 && i.splice(s, 1);
    }
  }
  j() {
    if (this.b.data.length > 0) {
      const e = this.e(this.b.data);
      this.g(e), (this.b.data.length = 0);
      const t = [...this.d];
      (this.d.length = 0), t.forEach((i) => i());
    }
  }
  k() {
    if (this.c.error.length > 0) {
      for (const e of this.b.error) this.h(e);
      this.b.error.length = 0;
    }
  }
  l() {
    return this.a.ended ? (this.i(), this.c.end.length > 0) : !1;
  }
  destroy() {
    this.a.destroyed || ((this.a.destroyed = !0), (this.a.ended = !0), (this.b.data.length = 0), (this.b.error.length = 0), (this.c.data.length = 0), (this.c.error.length = 0), (this.c.end.length = 0), (this.d.length = 0));
  }
};
function Sp(e, t) {
  const i = [];
  let s;
  for (; (s = e.read()) !== null; ) i.push(s);
  return t(i);
}
function $p(e, t, i) {
  const s = [];
  let r;
  for (; (r = e.read()) !== null && s.length < i; ) s.push(r);
  return r === null && s.length > 0
    ? t(s)
    : {
        read: () => {
          if (s.length > 0) return s.shift();
          if (typeof r < "u") {
            const n = r;
            return (r = void 0), n;
          }
          return e.read();
        },
      };
}
function Bl(e, t) {
  return new Promise((i, s) => {
    const r = [];
    mo(e, {
      onData: (n) => {
        t && r.push(n);
      },
      onError: (n) => {
        t ? s(n) : i(void 0);
      },
      onEnd: () => {
        i(t ? t(r) : void 0);
      },
    });
  });
}
function mo(e, t, i) {
  e.on("error", (s) => {
    i?.isCancellationRequested || t.onError(s);
  }),
    e.on("end", () => {
      i?.isCancellationRequested || t.onEnd();
    }),
    e.on("data", (s) => {
      i?.isCancellationRequested || t.onData(s);
    });
}
function Ip(e, t) {
  return new Promise((i, s) => {
    const r = new ue(),
      n = [],
      o = (l) => {
        if ((n.push(l), n.length > t)) return r.dispose(), e.pause(), i({ stream: e, buffer: n, ended: !1 });
      },
      a = (l) => (r.dispose(), s(l)),
      c = () => (r.dispose(), i({ stream: e, buffer: n, ended: !0 }));
    r.add(Dt(() => e.removeListener("error", a))), e.on("error", a), r.add(Dt(() => e.removeListener("end", c))), e.on("end", c), r.add(Dt(() => e.removeListener("data", o))), e.on("data", o);
  });
}
function Pp(e) {
  let t = !1;
  return { read: () => (t ? null : ((t = !0), e)) };
}
function zl(e, t, i) {
  const s = Hr(i);
  return mo(e, { onData: (r) => s.write(t.data(r)), onError: (r) => s.error(t.error ? t.error(r) : r), onEnd: () => s.end() }), s;
}
var Gr = typeof Buffer < "u",
  kp = new ss(() => new Uint8Array(256)),
  wo,
  vo,
  B = class De {
    static alloc(t) {
      return Gr ? new De(Buffer.allocUnsafe(t)) : new De(new Uint8Array(t));
    }
    static wrap(t) {
      return Gr && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength)), new De(t);
    }
    static fromString(t, i) {
      return !(i?.dontUseNodeBuffer || !1) && Gr ? new De(Buffer.from(t)) : (wo || (wo = new TextEncoder()), new De(wo.encode(t)));
    }
    static fromByteArray(t) {
      const i = De.alloc(t.length);
      for (let s = 0, r = t.length; s < r; s++) i.buffer[s] = t[s];
      return i;
    }
    static concat(t, i) {
      if (typeof i > "u") {
        i = 0;
        for (let n = 0, o = t.length; n < o; n++) i += t[n].byteLength;
      }
      const s = De.alloc(i);
      let r = 0;
      for (let n = 0, o = t.length; n < o; n++) {
        const a = t[n];
        s.set(a, r), (r += a.byteLength);
      }
      return s;
    }
    constructor(t) {
      (this.buffer = t), (this.byteLength = this.buffer.byteLength);
    }
    clone() {
      const t = De.alloc(this.byteLength);
      return t.set(this), t;
    }
    toString() {
      return Gr ? this.buffer.toString() : (vo || (vo = new TextDecoder()), vo.decode(this.buffer));
    }
    slice(t, i) {
      return new De(this.buffer.subarray(t, i));
    }
    set(t, i) {
      if (t instanceof De) this.buffer.set(t.buffer, i);
      else if (t instanceof Uint8Array) this.buffer.set(t, i);
      else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), i);
      else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), i);
      else throw new Error("Unknown argument 'array'");
    }
    readUInt32BE(t) {
      return Dp(this.buffer, t);
    }
    writeUInt32BE(t, i) {
      Rp(this.buffer, t, i);
    }
    readUInt32LE(t) {
      return Lp(this.buffer, t);
    }
    writeUInt32LE(t, i) {
      Op(this.buffer, t, i);
    }
    readUInt8(t) {
      return Np(this.buffer, t);
    }
    writeUInt8(t, i) {
      Cp(this.buffer, t, i);
    }
    indexOf(t, i = 0) {
      return Ap(this.buffer, t instanceof De ? t.buffer : t, i);
    }
  };
function Ap(e, t, i = 0) {
  const s = t.byteLength,
    r = e.byteLength;
  if (s === 0) return 0;
  if (s === 1) return e.indexOf(t[0]);
  if (s > r - i) return -1;
  const n = kp.value;
  n.fill(t.length);
  for (let l = 0; l < t.length; l++) n[t[l]] = t.length - l - 1;
  let o = i + t.length - 1,
    a = o,
    c = -1;
  for (; o < r; )
    if (e[o] === t[a]) {
      if (a === 0) {
        c = o;
        break;
      }
      o--, a--;
    } else (o += Math.max(t.length - a, n[e[o]])), (a = t.length - 1);
  return c;
}
function Dp(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function Rp(e, t, i) {
  (e[i + 3] = t), (t = t >>> 8), (e[i + 2] = t), (t = t >>> 8), (e[i + 1] = t), (t = t >>> 8), (e[i] = t);
}
function Lp(e, t) {
  return ((e[t + 0] << 0) >>> 0) | ((e[t + 1] << 8) >>> 0) | ((e[t + 2] << 16) >>> 0) | ((e[t + 3] << 24) >>> 0);
}
function Op(e, t, i) {
  (e[i + 0] = t & 255), (t = t >>> 8), (e[i + 1] = t & 255), (t = t >>> 8), (e[i + 2] = t & 255), (t = t >>> 8), (e[i + 3] = t & 255);
}
function Np(e, t) {
  return e[t];
}
function Cp(e, t, i) {
  e[i] = t;
}
function Fp(e) {
  return Sp(e, (t) => B.concat(t));
}
function Tp(e) {
  return Pp(e);
}
function Ti(e) {
  return Bl(e, (t) => B.concat(t));
}
async function Mp(e) {
  return e.ended ? B.concat(e.buffer) : B.concat([...e.buffer, await Ti(e.stream)]);
}
function _p(e) {
  return zl(e, { data: (t) => (typeof t == "string" ? B.fromString(t) : B.wrap(t)) }, (t) => B.concat(t));
}
function Up(e) {
  return Hr((t) => B.concat(t), e);
}
var ql;
(function (e) {
  (e[(e.None = 0)] = "None"),
    (e[(e.UnexpectedEndOfComment = 1)] = "UnexpectedEndOfComment"),
    (e[(e.UnexpectedEndOfString = 2)] = "UnexpectedEndOfString"),
    (e[(e.UnexpectedEndOfNumber = 3)] = "UnexpectedEndOfNumber"),
    (e[(e.InvalidUnicode = 4)] = "InvalidUnicode"),
    (e[(e.InvalidEscapeCharacter = 5)] = "InvalidEscapeCharacter"),
    (e[(e.InvalidCharacter = 6)] = "InvalidCharacter");
})(ql || (ql = {}));
var Wl;
(function (e) {
  (e[(e.OpenBraceToken = 1)] = "OpenBraceToken"),
    (e[(e.CloseBraceToken = 2)] = "CloseBraceToken"),
    (e[(e.OpenBracketToken = 3)] = "OpenBracketToken"),
    (e[(e.CloseBracketToken = 4)] = "CloseBracketToken"),
    (e[(e.CommaToken = 5)] = "CommaToken"),
    (e[(e.ColonToken = 6)] = "ColonToken"),
    (e[(e.NullKeyword = 7)] = "NullKeyword"),
    (e[(e.TrueKeyword = 8)] = "TrueKeyword"),
    (e[(e.FalseKeyword = 9)] = "FalseKeyword"),
    (e[(e.StringLiteral = 10)] = "StringLiteral"),
    (e[(e.NumericLiteral = 11)] = "NumericLiteral"),
    (e[(e.LineCommentTrivia = 12)] = "LineCommentTrivia"),
    (e[(e.BlockCommentTrivia = 13)] = "BlockCommentTrivia"),
    (e[(e.LineBreakTrivia = 14)] = "LineBreakTrivia"),
    (e[(e.Trivia = 15)] = "Trivia"),
    (e[(e.Unknown = 16)] = "Unknown"),
    (e[(e.EOF = 17)] = "EOF");
})(Wl || (Wl = {}));
var Hl;
(function (e) {
  (e[(e.InvalidSymbol = 1)] = "InvalidSymbol"),
    (e[(e.InvalidNumberFormat = 2)] = "InvalidNumberFormat"),
    (e[(e.PropertyNameExpected = 3)] = "PropertyNameExpected"),
    (e[(e.ValueExpected = 4)] = "ValueExpected"),
    (e[(e.ColonExpected = 5)] = "ColonExpected"),
    (e[(e.CommaExpected = 6)] = "CommaExpected"),
    (e[(e.CloseBraceExpected = 7)] = "CloseBraceExpected"),
    (e[(e.CloseBracketExpected = 8)] = "CloseBracketExpected"),
    (e[(e.EndOfFileExpected = 9)] = "EndOfFileExpected"),
    (e[(e.InvalidCommentToken = 10)] = "InvalidCommentToken"),
    (e[(e.UnexpectedEndOfComment = 11)] = "UnexpectedEndOfComment"),
    (e[(e.UnexpectedEndOfString = 12)] = "UnexpectedEndOfString"),
    (e[(e.UnexpectedEndOfNumber = 13)] = "UnexpectedEndOfNumber"),
    (e[(e.InvalidUnicode = 14)] = "InvalidUnicode"),
    (e[(e.InvalidEscapeCharacter = 15)] = "InvalidEscapeCharacter"),
    (e[(e.InvalidCharacter = 16)] = "InvalidCharacter");
})(Hl || (Hl = {}));
var zs;
(function (e) {
  e.DEFAULT = { allowTrailingComma: !0 };
})(zs || (zs = {}));
function Gl(e, t = !1) {
  let i = 0;
  const s = e.length;
  let r = "",
    n = 0,
    o = 16,
    a = 0;
  function c(m) {
    let y = 0,
      v = 0;
    for (; y < m; ) {
      const S = e.charCodeAt(i);
      if (S >= 48 && S <= 57) v = v * 16 + S - 48;
      else if (S >= 65 && S <= 70) v = v * 16 + S - 65 + 10;
      else if (S >= 97 && S <= 102) v = v * 16 + S - 97 + 10;
      else break;
      i++, y++;
    }
    return y < m && (v = -1), v;
  }
  function l(m) {
    (i = m), (r = ""), (n = 0), (o = 16), (a = 0);
  }
  function h() {
    const m = i;
    if (e.charCodeAt(i) === 48) i++;
    else for (i++; i < e.length && os(e.charCodeAt(i)); ) i++;
    if (i < e.length && e.charCodeAt(i) === 46)
      if ((i++, i < e.length && os(e.charCodeAt(i)))) for (i++; i < e.length && os(e.charCodeAt(i)); ) i++;
      else return (a = 3), e.substring(m, i);
    let y = i;
    if (i < e.length && (e.charCodeAt(i) === 69 || e.charCodeAt(i) === 101))
      if ((i++, ((i < e.length && e.charCodeAt(i) === 43) || e.charCodeAt(i) === 45) && i++, i < e.length && os(e.charCodeAt(i)))) {
        for (i++; i < e.length && os(e.charCodeAt(i)); ) i++;
        y = i;
      } else a = 3;
    return e.substring(m, y);
  }
  function u() {
    let m = "",
      y = i;
    for (;;) {
      if (i >= s) {
        (m += e.substring(y, i)), (a = 2);
        break;
      }
      const v = e.charCodeAt(i);
      if (v === 34) {
        (m += e.substring(y, i)), i++;
        break;
      }
      if (v === 92) {
        if (((m += e.substring(y, i)), i++, i >= s)) {
          a = 2;
          break;
        }
        switch (e.charCodeAt(i++)) {
          case 34:
            m += '"';
            break;
          case 92:
            m += "\\";
            break;
          case 47:
            m += "/";
            break;
          case 98:
            m += "\b";
            break;
          case 102:
            m += "\f";
            break;
          case 110:
            m += `
`;
            break;
          case 114:
            m += "\r";
            break;
          case 116:
            m += "	";
            break;
          case 117: {
            const D = c(4);
            D >= 0 ? (m += String.fromCharCode(D)) : (a = 4);
            break;
          }
          default:
            a = 5;
        }
        y = i;
        continue;
      }
      if (v >= 0 && v <= 31)
        if (Jr(v)) {
          (m += e.substring(y, i)), (a = 2);
          break;
        } else a = 6;
      i++;
    }
    return m;
  }
  function f() {
    if (((r = ""), (a = 0), (n = i), i >= s)) return (n = s), (o = 17);
    let m = e.charCodeAt(i);
    if (yo(m)) {
      do i++, (r += String.fromCharCode(m)), (m = e.charCodeAt(i));
      while (yo(m));
      return (o = 15);
    }
    if (Jr(m))
      return (
        i++,
        (r += String.fromCharCode(m)),
        m === 13 &&
          e.charCodeAt(i) === 10 &&
          (i++,
          (r += `
`)),
        (o = 14)
      );
    switch (m) {
      case 123:
        return i++, (o = 1);
      case 125:
        return i++, (o = 2);
      case 91:
        return i++, (o = 3);
      case 93:
        return i++, (o = 4);
      case 58:
        return i++, (o = 6);
      case 44:
        return i++, (o = 5);
      case 34:
        return i++, (r = u()), (o = 10);
      case 47: {
        const y = i - 1;
        if (e.charCodeAt(i + 1) === 47) {
          for (i += 2; i < s && !Jr(e.charCodeAt(i)); ) i++;
          return (r = e.substring(y, i)), (o = 12);
        }
        if (e.charCodeAt(i + 1) === 42) {
          i += 2;
          const v = s - 1;
          let S = !1;
          for (; i < v; ) {
            if (e.charCodeAt(i) === 42 && e.charCodeAt(i + 1) === 47) {
              (i += 2), (S = !0);
              break;
            }
            i++;
          }
          return S || (i++, (a = 1)), (r = e.substring(y, i)), (o = 13);
        }
        return (r += String.fromCharCode(m)), i++, (o = 16);
      }
      case 45:
        if (((r += String.fromCharCode(m)), i++, i === s || !os(e.charCodeAt(i)))) return (o = 16);
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return (r += h()), (o = 11);
      default:
        for (; i < s && p(m); ) i++, (m = e.charCodeAt(i));
        if (n !== i) {
          switch (((r = e.substring(n, i)), r)) {
            case "true":
              return (o = 8);
            case "false":
              return (o = 9);
            case "null":
              return (o = 7);
          }
          return (o = 16);
        }
        return (r += String.fromCharCode(m)), i++, (o = 16);
    }
  }
  function p(m) {
    if (yo(m) || Jr(m)) return !1;
    switch (m) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function w() {
    let m;
    do m = f();
    while (m >= 12 && m <= 15);
    return m;
  }
  return { setPosition: l, getPosition: () => i, scan: t ? w : f, getToken: () => o, getTokenValue: () => r, getTokenOffset: () => n, getTokenLength: () => i - n, getTokenError: () => a };
}
function yo(e) {
  return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e === 5760 || (e >= 8192 && e <= 8203) || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function Jr(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function os(e) {
  return e >= 48 && e <= 57;
}
var Jl;
(function (e) {
  (e[(e.nullCharacter = 0)] = "nullCharacter"),
    (e[(e.maxAsciiCharacter = 127)] = "maxAsciiCharacter"),
    (e[(e.lineFeed = 10)] = "lineFeed"),
    (e[(e.carriageReturn = 13)] = "carriageReturn"),
    (e[(e.lineSeparator = 8232)] = "lineSeparator"),
    (e[(e.paragraphSeparator = 8233)] = "paragraphSeparator"),
    (e[(e.nextLine = 133)] = "nextLine"),
    (e[(e.space = 32)] = "space"),
    (e[(e.nonBreakingSpace = 160)] = "nonBreakingSpace"),
    (e[(e.enQuad = 8192)] = "enQuad"),
    (e[(e.emQuad = 8193)] = "emQuad"),
    (e[(e.enSpace = 8194)] = "enSpace"),
    (e[(e.emSpace = 8195)] = "emSpace"),
    (e[(e.threePerEmSpace = 8196)] = "threePerEmSpace"),
    (e[(e.fourPerEmSpace = 8197)] = "fourPerEmSpace"),
    (e[(e.sixPerEmSpace = 8198)] = "sixPerEmSpace"),
    (e[(e.figureSpace = 8199)] = "figureSpace"),
    (e[(e.punctuationSpace = 8200)] = "punctuationSpace"),
    (e[(e.thinSpace = 8201)] = "thinSpace"),
    (e[(e.hairSpace = 8202)] = "hairSpace"),
    (e[(e.zeroWidthSpace = 8203)] = "zeroWidthSpace"),
    (e[(e.narrowNoBreakSpace = 8239)] = "narrowNoBreakSpace"),
    (e[(e.ideographicSpace = 12288)] = "ideographicSpace"),
    (e[(e.mathematicalSpace = 8287)] = "mathematicalSpace"),
    (e[(e.ogham = 5760)] = "ogham"),
    (e[(e._ = 95)] = "_"),
    (e[(e.$ = 36)] = "$"),
    (e[(e._0 = 48)] = "_0"),
    (e[(e._1 = 49)] = "_1"),
    (e[(e._2 = 50)] = "_2"),
    (e[(e._3 = 51)] = "_3"),
    (e[(e._4 = 52)] = "_4"),
    (e[(e._5 = 53)] = "_5"),
    (e[(e._6 = 54)] = "_6"),
    (e[(e._7 = 55)] = "_7"),
    (e[(e._8 = 56)] = "_8"),
    (e[(e._9 = 57)] = "_9"),
    (e[(e.a = 97)] = "a"),
    (e[(e.b = 98)] = "b"),
    (e[(e.c = 99)] = "c"),
    (e[(e.d = 100)] = "d"),
    (e[(e.e = 101)] = "e"),
    (e[(e.f = 102)] = "f"),
    (e[(e.g = 103)] = "g"),
    (e[(e.h = 104)] = "h"),
    (e[(e.i = 105)] = "i"),
    (e[(e.j = 106)] = "j"),
    (e[(e.k = 107)] = "k"),
    (e[(e.l = 108)] = "l"),
    (e[(e.m = 109)] = "m"),
    (e[(e.n = 110)] = "n"),
    (e[(e.o = 111)] = "o"),
    (e[(e.p = 112)] = "p"),
    (e[(e.q = 113)] = "q"),
    (e[(e.r = 114)] = "r"),
    (e[(e.s = 115)] = "s"),
    (e[(e.t = 116)] = "t"),
    (e[(e.u = 117)] = "u"),
    (e[(e.v = 118)] = "v"),
    (e[(e.w = 119)] = "w"),
    (e[(e.x = 120)] = "x"),
    (e[(e.y = 121)] = "y"),
    (e[(e.z = 122)] = "z"),
    (e[(e.A = 65)] = "A"),
    (e[(e.B = 66)] = "B"),
    (e[(e.C = 67)] = "C"),
    (e[(e.D = 68)] = "D"),
    (e[(e.E = 69)] = "E"),
    (e[(e.F = 70)] = "F"),
    (e[(e.G = 71)] = "G"),
    (e[(e.H = 72)] = "H"),
    (e[(e.I = 73)] = "I"),
    (e[(e.J = 74)] = "J"),
    (e[(e.K = 75)] = "K"),
    (e[(e.L = 76)] = "L"),
    (e[(e.M = 77)] = "M"),
    (e[(e.N = 78)] = "N"),
    (e[(e.O = 79)] = "O"),
    (e[(e.P = 80)] = "P"),
    (e[(e.Q = 81)] = "Q"),
    (e[(e.R = 82)] = "R"),
    (e[(e.S = 83)] = "S"),
    (e[(e.T = 84)] = "T"),
    (e[(e.U = 85)] = "U"),
    (e[(e.V = 86)] = "V"),
    (e[(e.W = 87)] = "W"),
    (e[(e.X = 88)] = "X"),
    (e[(e.Y = 89)] = "Y"),
    (e[(e.Z = 90)] = "Z"),
    (e[(e.ampersand = 38)] = "ampersand"),
    (e[(e.asterisk = 42)] = "asterisk"),
    (e[(e.at = 64)] = "at"),
    (e[(e.backslash = 92)] = "backslash"),
    (e[(e.bar = 124)] = "bar"),
    (e[(e.caret = 94)] = "caret"),
    (e[(e.closeBrace = 125)] = "closeBrace"),
    (e[(e.closeBracket = 93)] = "closeBracket"),
    (e[(e.closeParen = 41)] = "closeParen"),
    (e[(e.colon = 58)] = "colon"),
    (e[(e.comma = 44)] = "comma"),
    (e[(e.dot = 46)] = "dot"),
    (e[(e.doubleQuote = 34)] = "doubleQuote"),
    (e[(e.equals = 61)] = "equals"),
    (e[(e.exclamation = 33)] = "exclamation"),
    (e[(e.greaterThan = 62)] = "greaterThan"),
    (e[(e.lessThan = 60)] = "lessThan"),
    (e[(e.minus = 45)] = "minus"),
    (e[(e.openBrace = 123)] = "openBrace"),
    (e[(e.openBracket = 91)] = "openBracket"),
    (e[(e.openParen = 40)] = "openParen"),
    (e[(e.percent = 37)] = "percent"),
    (e[(e.plus = 43)] = "plus"),
    (e[(e.question = 63)] = "question"),
    (e[(e.semicolon = 59)] = "semicolon"),
    (e[(e.singleQuote = 39)] = "singleQuote"),
    (e[(e.slash = 47)] = "slash"),
    (e[(e.tilde = 126)] = "tilde"),
    (e[(e.backspace = 8)] = "backspace"),
    (e[(e.formFeed = 12)] = "formFeed"),
    (e[(e.byteOrderMark = 65279)] = "byteOrderMark"),
    (e[(e.tab = 9)] = "tab"),
    (e[(e.verticalTab = 11)] = "verticalTab");
})(Jl || (Jl = {}));
function qs(e, t = [], i = zs.DEFAULT) {
  let s = null,
    r = [];
  const n = [];
  function o(c) {
    Array.isArray(r) ? r.push(c) : s !== null && (r[s] = c);
  }
  return (
    bo(
      e,
      {
        onObjectBegin: () => {
          const c = {};
          o(c), n.push(r), (r = c), (s = null);
        },
        onObjectProperty: (c) => {
          s = c;
        },
        onObjectEnd: () => {
          r = n.pop();
        },
        onArrayBegin: () => {
          const c = [];
          o(c), n.push(r), (r = c), (s = null);
        },
        onArrayEnd: () => {
          r = n.pop();
        },
        onLiteralValue: o,
        onError: (c, l, h) => {
          t.push({ error: c, offset: l, length: h });
        },
      },
      i,
    ),
    r[0]
  );
}
function jp(e, t = [], i = zs.DEFAULT) {
  let s = { type: "array", offset: -1, length: -1, children: [], parent: void 0 };
  function r(c) {
    s.type === "property" && ((s.length = c - s.offset), (s = s.parent));
  }
  function n(c) {
    return s.children.push(c), c;
  }
  bo(
    e,
    {
      onObjectBegin: (c) => {
        s = n({ type: "object", offset: c, length: -1, parent: s, children: [] });
      },
      onObjectProperty: (c, l, h) => {
        (s = n({ type: "property", offset: l, length: -1, parent: s, children: [] })), s.children.push({ type: "string", value: c, offset: l, length: h, parent: s });
      },
      onObjectEnd: (c, l) => {
        (s.length = c + l - s.offset), (s = s.parent), r(c + l);
      },
      onArrayBegin: (c, l) => {
        s = n({ type: "array", offset: c, length: -1, parent: s, children: [] });
      },
      onArrayEnd: (c, l) => {
        (s.length = c + l - s.offset), (s = s.parent), r(c + l);
      },
      onLiteralValue: (c, l, h) => {
        n({ type: Ws(c), offset: l, length: h, parent: s, value: c }), r(l + h);
      },
      onSeparator: (c, l, h) => {
        s.type === "property" && (c === ":" ? (s.colonOffset = l) : c === "," && r(l));
      },
      onError: (c, l, h) => {
        t.push({ error: c, offset: l, length: h });
      },
    },
    i,
  );
  const a = s.children[0];
  return a && delete a.parent, a;
}
function Ql(e, t) {
  if (!e) return;
  let i = e;
  for (const s of t)
    if (typeof s == "string") {
      if (i.type !== "object" || !Array.isArray(i.children)) return;
      let r = !1;
      for (const n of i.children)
        if (Array.isArray(n.children) && n.children[0].value === s) {
          (i = n.children[1]), (r = !0);
          break;
        }
      if (!r) return;
    } else {
      const r = s;
      if (i.type !== "array" || r < 0 || !Array.isArray(i.children) || r >= i.children.length) return;
      i = i.children[r];
    }
  return i;
}
function bo(e, t, i = zs.DEFAULT) {
  const s = Gl(e, !1);
  function r(k) {
    return k ? () => k(s.getTokenOffset(), s.getTokenLength()) : () => !0;
  }
  function n(k) {
    return k ? (Z) => k(Z, s.getTokenOffset(), s.getTokenLength()) : () => !0;
  }
  const o = r(t.onObjectBegin),
    a = n(t.onObjectProperty),
    c = r(t.onObjectEnd),
    l = r(t.onArrayBegin),
    h = r(t.onArrayEnd),
    u = n(t.onLiteralValue),
    f = n(t.onSeparator),
    p = r(t.onComment),
    w = n(t.onError),
    m = i && i.disallowComments,
    y = i && i.allowTrailingComma;
  function v() {
    for (;;) {
      const k = s.scan();
      switch (s.getTokenError()) {
        case 4:
          S(14);
          break;
        case 5:
          S(15);
          break;
        case 3:
          S(13);
          break;
        case 1:
          m || S(11);
          break;
        case 2:
          S(12);
          break;
        case 6:
          S(16);
          break;
      }
      switch (k) {
        case 12:
        case 13:
          m ? S(10) : p();
          break;
        case 16:
          S(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return k;
      }
    }
  }
  function S(k, Z = [], Ft = []) {
    if ((w(k), Z.length + Ft.length > 0)) {
      let z = s.getToken();
      for (; z !== 17; ) {
        if (Z.indexOf(z) !== -1) {
          v();
          break;
        } else if (Ft.indexOf(z) !== -1) break;
        z = v();
      }
    }
  }
  function D(k) {
    const Z = s.getTokenValue();
    return k ? u(Z) : a(Z), v(), !0;
  }
  function x() {
    switch (s.getToken()) {
      case 11: {
        let k = 0;
        try {
          (k = JSON.parse(s.getTokenValue())), typeof k != "number" && (S(2), (k = 0));
        } catch {
          S(2);
        }
        u(k);
        break;
      }
      case 7:
        u(null);
        break;
      case 8:
        u(!0);
        break;
      case 9:
        u(!1);
        break;
      default:
        return !1;
    }
    return v(), !0;
  }
  function L() {
    return s.getToken() !== 10 ? (S(3, [], [2, 5]), !1) : (D(!1), s.getToken() === 6 ? (f(":"), v(), ut() || S(4, [], [2, 5])) : S(5, [], [2, 5]), !0);
  }
  function T() {
    o(), v();
    let k = !1;
    for (; s.getToken() !== 2 && s.getToken() !== 17; ) {
      if (s.getToken() === 5) {
        if ((k || S(4, [], []), f(","), v(), s.getToken() === 2 && y)) break;
      } else k && S(6, [], []);
      L() || S(4, [], [2, 5]), (k = !0);
    }
    return c(), s.getToken() !== 2 ? S(7, [2], []) : v(), !0;
  }
  function H() {
    l(), v();
    let k = !1;
    for (; s.getToken() !== 4 && s.getToken() !== 17; ) {
      if (s.getToken() === 5) {
        if ((k || S(4, [], []), f(","), v(), s.getToken() === 4 && y)) break;
      } else k && S(6, [], []);
      ut() || S(4, [], [4, 5]), (k = !0);
    }
    return h(), s.getToken() !== 4 ? S(8, [4], []) : v(), !0;
  }
  function ut() {
    switch (s.getToken()) {
      case 3:
        return H();
      case 1:
        return T();
      case 10:
        return D(!0);
      default:
        return x();
    }
  }
  return v(), s.getToken() === 17 ? (i.allowEmptyContent ? !0 : (S(4, [], []), !1)) : ut() ? (s.getToken() !== 17 && S(9, [], []), !0) : (S(4, [], []), !1);
}
function Ws(e) {
  switch (typeof e) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (e) {
        if (Array.isArray(e)) return "array";
      } else return "null";
      return "object";
    }
    default:
      return "null";
  }
}
function Vp(e, t, i) {
  let s, r, n, o, a;
  if (t) {
    for (o = t.offset, a = o + t.length, n = o; n > 0 && !Qr(e, n - 1); ) n--;
    let D = a;
    for (; D < e.length && !Qr(e, D); ) D++;
    (r = e.substring(n, D)), (s = Bp(r, i));
  } else (r = e), (s = 0), (n = 0), (o = 0), (a = e.length);
  const c = zp(i, e);
  let l = !1,
    h = 0,
    u;
  i.insertSpaces ? (u = Eo(" ", i.tabSize || 4)) : (u = "	");
  const f = Gl(r, !1);
  let p = !1;
  function w() {
    return c + Eo(u, s + h);
  }
  function m() {
    let D = f.scan();
    for (l = !1; D === 15 || D === 14; ) (l = l || D === 14), (D = f.scan());
    return (p = D === 16 || f.getTokenError() !== 0), D;
  }
  const y = [];
  function v(D, x, L) {
    !p && x < a && L > o && e.substring(x, L) !== D && y.push({ offset: x, length: L - x, content: D });
  }
  let S = m();
  if (S !== 17) {
    const D = f.getTokenOffset() + n,
      x = Eo(u, s);
    v(x, n, D);
  }
  for (; S !== 17; ) {
    let D = f.getTokenOffset() + f.getTokenLength() + n,
      x = m(),
      L = "";
    for (; !l && (x === 12 || x === 13); ) {
      const H = f.getTokenOffset() + n;
      v(" ", D, H), (D = f.getTokenOffset() + f.getTokenLength() + n), (L = x === 12 ? w() : ""), (x = m());
    }
    if (x === 2) S !== 1 && (h--, (L = w()));
    else if (x === 4) S !== 3 && (h--, (L = w()));
    else {
      switch (S) {
        case 3:
        case 1:
          h++, (L = w());
          break;
        case 5:
        case 12:
          L = w();
          break;
        case 13:
          l ? (L = w()) : (L = " ");
          break;
        case 6:
          L = " ";
          break;
        case 10:
          if (x === 6) {
            L = "";
            break;
          }
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          x === 12 || x === 13 ? (L = " ") : x !== 5 && x !== 17 && (p = !0);
          break;
        case 16:
          p = !0;
          break;
      }
      l && (x === 12 || x === 13) && (L = w());
    }
    const T = f.getTokenOffset() + n;
    v(L, D, T), (S = x);
  }
  return y;
}
function Eo(e, t) {
  let i = "";
  for (let s = 0; s < t; s++) i += e;
  return i;
}
function Bp(e, t) {
  let i = 0,
    s = 0;
  const r = t.tabSize || 4;
  for (; i < e.length; ) {
    const n = e.charAt(i);
    if (n === " ") s++;
    else if (n === "	") s += r;
    else break;
    i++;
  }
  return Math.floor(s / r);
}
function zp(e, t) {
  for (let i = 0; i < t.length; i++) {
    const s = t.charAt(i);
    if (s === "\r")
      return i + 1 < t.length &&
        t.charAt(i + 1) ===
          `
`
        ? `\r
`
        : "\r";
    if (
      s ===
      `
`
    )
      return `
`;
  }
  return (
    (e && e.eol) ||
    `
`
  );
}
function Qr(e, t) {
  return (
    `\r
`.indexOf(e.charAt(t)) !== -1
  );
}
function qp(e, t, i, s, r) {
  const n = t.slice(),
    a = jp(e, []);
  let c, l;
  for (; n.length > 0 && ((l = n.pop()), (c = Ql(a, n)), c === void 0 && i !== void 0); ) typeof l == "string" ? (i = { [l]: i }) : (i = [i]);
  if (c)
    if (c.type === "object" && typeof l == "string" && Array.isArray(c.children)) {
      const h = Ql(c, [l]);
      if (h !== void 0)
        if (i === void 0) {
          if (!h.parent) throw new Error("Malformed AST");
          const u = c.children.indexOf(h.parent);
          let f,
            p = h.parent.offset + h.parent.length;
          if (u > 0) {
            const w = c.children[u - 1];
            f = w.offset + w.length;
          } else (f = c.offset + 1), c.children.length > 1 && (p = c.children[1].offset);
          return as(e, { offset: f, length: p - f, content: "" }, s);
        } else return as(e, { offset: h.offset, length: h.length, content: JSON.stringify(i) }, s);
      else {
        if (i === void 0) return [];
        const u = `${JSON.stringify(l)}: ${JSON.stringify(i)}`,
          f = r ? r(c.children.map((w) => w.children[0].value)) : c.children.length;
        let p;
        if (f > 0) {
          const w = c.children[f - 1];
          p = { offset: w.offset + w.length, length: 0, content: "," + u };
        } else c.children.length === 0 ? (p = { offset: c.offset + 1, length: 0, content: u }) : (p = { offset: c.offset + 1, length: 0, content: u + "," });
        return as(e, p, s);
      }
    } else if (c.type === "array" && typeof l == "number" && Array.isArray(c.children))
      if (i !== void 0) {
        const h = `${JSON.stringify(i)}`;
        let u;
        if (c.children.length === 0 || l === 0) u = { offset: c.offset + 1, length: 0, content: c.children.length === 0 ? h : h + "," };
        else {
          const f = l === -1 || l > c.children.length ? c.children.length : l,
            p = c.children[f - 1];
          u = { offset: p.offset + p.length, length: 0, content: "," + h };
        }
        return as(e, u, s);
      } else {
        const h = l,
          u = c.children[h];
        let f;
        if (c.children.length === 1) f = { offset: c.offset + 1, length: c.length - 2, content: "" };
        else if (c.children.length - 1 === h) {
          const p = c.children[h - 1],
            w = p.offset + p.length,
            m = c.offset + c.length;
          f = { offset: w, length: m - 2 - w, content: "" };
        } else f = { offset: u.offset, length: c.children[h + 1].offset - u.offset, content: "" };
        return as(e, f, s);
      }
    else throw new Error(`Can not add ${typeof l != "number" ? "index" : "property"} to parent of type ${c.type}`);
  else return i === void 0 ? [] : as(e, { offset: a ? a.offset : 0, length: a ? a.length : 0, content: JSON.stringify(i) }, s);
}
function as(e, t, i) {
  let s = xo(e, t),
    r = t.offset,
    n = t.offset + t.content.length;
  if (t.length === 0 || t.content.length === 0) {
    for (; r > 0 && !Qr(s, r - 1); ) r--;
    for (; n < s.length && !Qr(s, n); ) n++;
  }
  const o = Vp(s, { offset: r, length: n - r }, i);
  for (let c = o.length - 1; c >= 0; c--) {
    const l = o[c];
    (s = xo(s, l)), (r = Math.min(r, l.offset)), (n = Math.max(n, l.offset + l.length)), (n += l.content.length - l.length);
  }
  const a = e.length - (s.length - n) - r;
  return [{ offset: r, length: a, content: s.substring(r, n) }];
}
function xo(e, t) {
  return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
}
function Wp(e, t) {
  const i = t.slice(0).sort((r, n) => {
    const o = r.offset - n.offset;
    return o === 0 ? r.length - n.length : o;
  });
  let s = e.length;
  for (let r = i.length - 1; r >= 0; r--) {
    const n = i[r];
    if (n.offset + n.length <= s) e = xo(e, n);
    else throw new Error("Overlapping edit");
    s = n.offset;
  }
  return e;
}
function mi(e) {
  if (!e || typeof e != "object" || e instanceof RegExp) return e;
  const t = Array.isArray(e) ? [] : {};
  return (
    Object.entries(e).forEach(([i, s]) => {
      t[i] = s && typeof s == "object" ? mi(s) : s;
    }),
    t
  );
}
function Hp(e) {
  if (!e || typeof e != "object") return e;
  const t = [e];
  for (; t.length > 0; ) {
    const i = t.shift();
    Object.freeze(i);
    for (const s in i)
      if (Xl.call(i, s)) {
        const r = i[s];
        typeof r == "object" && !Object.isFrozen(r) && !Cd(r) && t.push(r);
      }
  }
  return e;
}
var Xl = Object.prototype.hasOwnProperty;
function Gp(e, t) {
  return So(e, t, new Set());
}
function So(e, t, i) {
  if (Xt(e)) return e;
  const s = t(e);
  if (typeof s < "u") return s;
  if (Array.isArray(e)) {
    const r = [];
    for (const n of e) r.push(So(n, t, i));
    return r;
  }
  if (Ct(e)) {
    if (i.has(e)) throw new Error("Cannot clone recursive data-structure");
    i.add(e);
    const r = {};
    for (const n in e) Xl.call(e, n) && (r[n] = So(e[n], t, i));
    return i.delete(e), r;
  }
  return e;
}
function Hs(e, t, i = !0) {
  return Ct(e)
    ? (Ct(t) &&
        Object.keys(t).forEach((s) => {
          s in e ? i && (Ct(e[s]) && Ct(t[s]) ? Hs(e[s], t[s], i) : (e[s] = t[s])) : (e[s] = t[s]);
        }),
      e)
    : t;
}
function ze(e, t) {
  if (e === t) return !0;
  if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
  let i, s;
  if (Array.isArray(e)) {
    if (e.length !== t.length) return !1;
    for (i = 0; i < e.length; i++) if (!ze(e[i], t[i])) return !1;
  } else {
    const r = [];
    for (s in e) r.push(s);
    r.sort();
    const n = [];
    for (s in t) n.push(s);
    if ((n.sort(), !ze(r, n))) return !1;
    for (i = 0; i < r.length; i++) if (!ze(e[r[i]], t[r[i]])) return !1;
  }
  return !0;
}
function Zl(e) {
  const t = new Set();
  return JSON.stringify(e, (i, s) => {
    if (Ct(s) || Array.isArray(s)) {
      if (t.has(s)) return "[Circular]";
      t.add(s);
    }
    return typeof s == "bigint" ? `[BigInt ${s.toString()}]` : s;
  });
}
function Jp(e) {
  let t = !1;
  const i = new Map(),
    s = new Map();
  if (
    (Qp(e, (h) => {
      if (e === h) return !0;
      const u = JSON.stringify(h);
      if (u.length < 30) return !0;
      const f = i.get(u);
      if (!f) {
        const p = { schemas: [h] };
        return i.set(u, p), s.set(h, p), !0;
      }
      return f.schemas.push(h), s.set(h, f), (t = !0), !1;
    }),
    i.clear(),
    !t)
  )
    return JSON.stringify(e);
  let n = "$defs";
  for (; e.hasOwnProperty(n); ) n += "_";
  const o = [];
  function a(h) {
    return JSON.stringify(h, (u, f) => {
      if (f !== h) {
        const p = s.get(f);
        if (p && p.schemas.length > 1) return p.id || ((p.id = `_${o.length}`), o.push(p.schemas[0])), { $ref: `#/${n}/${p.id}` };
      }
      return f;
    });
  }
  const c = a(e),
    l = [];
  for (let h = 0; h < o.length; h++) l.push(`"_${h}":${a(o[h])}`);
  return l.length ? `${c.substring(0, c.length - 1)},"${n}":{${l.join(",")}}}` : c;
}
function cs(e) {
  return typeof e == "object" && e !== null;
}
function Qp(e, t) {
  if (!e || typeof e != "object") return;
  const i = (...c) => {
      for (const l of c) cs(l) && o.push(l);
    },
    s = (...c) => {
      for (const l of c)
        if (cs(l))
          for (const h in l) {
            const u = l[h];
            cs(u) && o.push(u);
          }
    },
    r = (...c) => {
      for (const l of c) if (Array.isArray(l)) for (const h of l) cs(h) && o.push(h);
    },
    n = (c) => {
      if (Array.isArray(c)) for (const l of c) cs(l) && o.push(l);
      else cs(c) && o.push(c);
    },
    o = [e];
  let a = o.pop();
  for (; a; )
    t(a) &&
      (i(a.additionalItems, a.additionalProperties, a.not, a.contains, a.propertyNames, a.if, a.then, a.else, a.unevaluatedItems, a.unevaluatedProperties),
      s(a.definitions, a.$defs, a.properties, a.patternProperties, a.dependencies, a.dependentSchemas),
      r(a.anyOf, a.allOf, a.oneOf, a.prefixItems),
      n(a.items)),
      (a = o.pop());
}
function $o(e, t) {
  if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed");
}
var Xp = class {
    constructor() {
      this.a = new Map();
    }
    add(e, t) {
      $o(zt(e)), $o(Ct(t)), $o(!this.a.has(e), "There is already an extension with this id"), this.a.set(e, t);
    }
    knows(e) {
      return this.a.has(e);
    }
    as(e) {
      return this.a.get(e) || null;
    }
  },
  Ee = new Xp(),
  Yl = { JSONContribution: "base.contributions.json" };
function Zp(e) {
  return e.length > 0 && e.charAt(e.length - 1) === "#" ? e.substring(0, e.length - 1) : e;
}
var Yp = class {
    constructor() {
      (this.b = new O()), (this.onDidChangeSchema = this.b.event), (this.a = {});
    }
    registerSchema(e, t) {
      (this.a[Zp(e)] = t), this.b.fire(e);
    }
    notifySchemaChanged(e) {
      this.b.fire(e);
    }
    getSchemaContributions() {
      return { schemas: this.a };
    }
    getSchemaContent(e) {
      const t = this.a[e];
      return t ? Jp(t) : void 0;
    }
    hasSchemaContent(e) {
      return !!this.a[e];
    }
  },
  Kp = new Yp();
Ee.add(Yl.JSONContribution, Kp);
var Kl;
(function (e) {
  (e.Multiline = "multilineText"), (e.Singleline = "singlelineText");
})(Kl || (Kl = {}));
var Fe = { Configuration: "base.contributions.configuration" },
  th;
(function (e) {
  (e[(e.APPLICATION = 1)] = "APPLICATION"),
    (e[(e.MACHINE = 2)] = "MACHINE"),
    (e[(e.WINDOW = 3)] = "WINDOW"),
    (e[(e.RESOURCE = 4)] = "RESOURCE"),
    (e[(e.LANGUAGE_OVERRIDABLE = 5)] = "LANGUAGE_OVERRIDABLE"),
    (e[(e.MACHINE_OVERRIDABLE = 6)] = "MACHINE_OVERRIDABLE");
})(th || (th = {}));
var Xr = { properties: {}, patternProperties: {} },
  Zr = { properties: {}, patternProperties: {} },
  Yr = { properties: {}, patternProperties: {} },
  Kr = { properties: {}, patternProperties: {} },
  tn = { properties: {}, patternProperties: {} },
  Gs = { properties: {}, patternProperties: {} },
  Mi = "vscode://schemas/settings/resourceLanguage",
  en = Ee.as(Yl.JSONContribution),
  t0 = class {
    constructor() {
      (this.a = []),
        (this.i = new Set()),
        (this.j = new O()),
        (this.onDidSchemaChange = this.j.event),
        (this.k = new O()),
        (this.onDidUpdateConfiguration = this.k.event),
        (this.b = new Map()),
        (this.c = { id: "defaultOverrides", title: d(1696, null), properties: {} }),
        (this.d = [this.c]),
        (this.h = { properties: {}, patternProperties: {}, additionalProperties: !0, allowTrailingCommas: !0, allowComments: !0 }),
        (this.e = {}),
        (this.f = new Map()),
        (this.g = {}),
        en.registerSchema(Mi, this.h),
        this.z();
    }
    registerConfiguration(e, t = !0) {
      this.registerConfigurations([e], t);
    }
    registerConfigurations(e, t = !0) {
      const i = new Set();
      this.r(e, t, i), en.registerSchema(Mi, this.h), this.j.fire(), this.k.fire({ properties: i });
    }
    deregisterConfigurations(e) {
      const t = new Set();
      this.s(e, t), en.registerSchema(Mi, this.h), this.j.fire(), this.k.fire({ properties: t });
    }
    updateConfigurations({ add: e, remove: t }) {
      const i = new Set();
      this.s(t, i), this.r(e, !1, i), en.registerSchema(Mi, this.h), this.j.fire(), this.k.fire({ properties: i });
    }
    registerDefaultConfigurations(e) {
      const t = new Set();
      this.l(e, t), this.j.fire(), this.k.fire({ properties: t, defaultsOverrides: !0 });
    }
    l(e, t) {
      this.a.push(...e);
      const i = [];
      for (const { overrides: s, source: r } of e)
        for (const n in s) {
          t.add(n);
          const o = this.b.get(n) ?? this.b.set(n, { configurationDefaultOverrides: [] }).get(n),
            a = s[n];
          if ((o.configurationDefaultOverrides.push({ value: a, source: r }), ei.test(n))) {
            const c = this.o(n, a, r, o.configurationDefaultOverrideValue);
            if (!c) continue;
            (o.configurationDefaultOverrideValue = c), this.n(n, c, r), i.push(...Js(n));
          } else {
            const c = this.p(n, a, r, o.configurationDefaultOverrideValue);
            if (!c) continue;
            o.configurationDefaultOverrideValue = c;
            const l = this.e[n];
            l && (this.A(n, l), this.w(n, l));
          }
        }
      this.q(i);
    }
    deregisterDefaultConfigurations(e) {
      const t = new Set();
      this.m(e, t), this.j.fire(), this.k.fire({ properties: t, defaultsOverrides: !0 });
    }
    m(e, t) {
      for (const i of e) {
        const s = this.a.indexOf(i);
        s !== -1 && this.a.splice(s, 1);
      }
      for (const { overrides: i, source: s } of e)
        for (const r in i) {
          const n = this.b.get(r);
          if (!n) continue;
          const o = n.configurationDefaultOverrides.findIndex((a) => (s ? a.source?.id === s.id : a.value === i[r]));
          if (o !== -1) {
            if ((n.configurationDefaultOverrides.splice(o, 1), n.configurationDefaultOverrides.length === 0 && this.b.delete(r), ei.test(r))) {
              let a;
              for (const c of n.configurationDefaultOverrides) a = this.o(r, c.value, c.source, a);
              a && !no(a.value) ? ((n.configurationDefaultOverrideValue = a), this.n(r, a, s)) : (this.b.delete(r), delete this.e[r], delete this.c.properties[r]);
            } else {
              let a;
              for (const l of n.configurationDefaultOverrides) a = this.p(r, l.value, l.source, a);
              n.configurationDefaultOverrideValue = a;
              const c = this.e[r];
              c && (this.A(r, c), this.w(r, c));
            }
            t.add(r);
          }
        }
      this.y();
    }
    n(e, t, i) {
      const s = { type: "object", default: t.value, description: d(1697, null, Ep(e)), $ref: Mi, defaultDefaultValue: t.value, source: i, defaultValueSource: i };
      (this.e[e] = s), (this.c.properties[e] = s);
    }
    o(e, t, i, s) {
      const r = s?.value || {},
        n = s?.source ?? new Map();
      if (!(n instanceof Map)) {
        console.error("objectConfigurationSources is not a Map");
        return;
      }
      for (const o of Object.keys(t)) {
        const a = t[o];
        if (Ct(a) && (Ye(r[o]) || Ct(r[o]))) {
          if (((r[o] = { ...(r[o] ?? {}), ...a }), i)) for (const l in a) n.set(`${o}.${l}`, i);
        } else (r[o] = a), i ? n.set(o, i) : n.delete(o);
      }
      return { value: r, source: n };
    }
    p(e, t, i, s) {
      const r = this.e[e],
        n = s?.value ?? r?.defaultDefaultValue;
      let o = i;
      if (Ct(t) && ((r !== void 0 && r.type === "object") || (r === void 0 && (Ye(n) || Ct(n))))) {
        if (((o = s?.source ?? new Map()), !(o instanceof Map))) {
          console.error("defaultValueSource is not a Map");
          return;
        }
        for (const c in t) i && o.set(`${e}.${c}`, i);
        t = { ...(Ct(n) ? n : {}), ...t };
      }
      return { value: t, source: o };
    }
    deltaConfiguration(e) {
      let t = !1;
      const i = new Set();
      e.removedDefaults && (this.m(e.removedDefaults, i), (t = !0)),
        e.addedDefaults && (this.l(e.addedDefaults, i), (t = !0)),
        e.removedConfigurations && this.s(e.removedConfigurations, i),
        e.addedConfigurations && this.r(e.addedConfigurations, !1, i),
        this.j.fire(),
        this.k.fire({ properties: i, defaultsOverrides: t });
    }
    notifyConfigurationSchemaUpdated(...e) {
      this.j.fire();
    }
    registerOverrideIdentifiers(e) {
      this.q(e), this.j.fire();
    }
    q(e) {
      for (const t of e) this.i.add(t);
      this.y();
    }
    r(e, t, i) {
      e.forEach((s) => {
        this.u(s, t, s.extensionInfo, s.restrictedProperties, void 0, i), this.d.push(s), this.v(s);
      });
    }
    s(e, t) {
      const i = (s) => {
        if (s.properties)
          for (const r in s.properties) {
            t.add(r);
            const n = this.e[r];
            n?.policy?.name && this.f.delete(n.policy.name), delete this.e[r], this.x(r, s.properties[r]);
          }
        s.allOf?.forEach((r) => i(r));
      };
      for (const s of e) {
        i(s);
        const r = this.d.indexOf(s);
        r !== -1 && this.d.splice(r, 1);
      }
    }
    u(e, t = !0, i, s, r = 3, n) {
      r = Xt(e.scope) ? r : e.scope;
      const o = e.properties;
      if (o)
        for (const c in o) {
          const l = o[c];
          if (t && s0(c, l)) {
            delete o[c];
            continue;
          }
          if (
            ((l.source = i),
            (l.defaultDefaultValue = o[c].default),
            this.A(c, l),
            ei.test(c) ? (l.scope = void 0) : ((l.scope = Xt(l.scope) ? r : l.scope), (l.restricted = Xt(l.restricted) ? !!s?.includes(c) : l.restricted)),
            o[c].hasOwnProperty("included") && !o[c].included)
          ) {
            (this.g[c] = o[c]), delete o[c];
            continue;
          } else (this.e[c] = o[c]), o[c].policy?.name && this.f.set(o[c].policy.name, c);
          !o[c].deprecationMessage && o[c].markdownDeprecationMessage && (o[c].deprecationMessage = o[c].markdownDeprecationMessage), n.add(c);
        }
      const a = e.allOf;
      if (a) for (const c of a) this.u(c, t, i, s, r, n);
    }
    getConfigurations() {
      return this.d;
    }
    getConfigurationProperties() {
      return this.e;
    }
    getPolicyConfigurations() {
      return this.f;
    }
    getExcludedConfigurationProperties() {
      return this.g;
    }
    getRegisteredDefaultConfigurations() {
      return [...this.a];
    }
    getConfigurationDefaultsOverrides() {
      const e = new Map();
      for (const [t, i] of this.b) i.configurationDefaultOverrideValue && e.set(t, i.configurationDefaultOverrideValue);
      return e;
    }
    v(e) {
      const t = (i) => {
        const s = i.properties;
        if (s) for (const n in s) this.w(n, s[n]);
        i.allOf?.forEach(t);
      };
      t(e);
    }
    w(e, t) {
      switch (((Xr.properties[e] = t), t.scope)) {
        case 1:
          Zr.properties[e] = t;
          break;
        case 2:
          Yr.properties[e] = t;
          break;
        case 6:
          Kr.properties[e] = t;
          break;
        case 3:
          tn.properties[e] = t;
          break;
        case 4:
          Gs.properties[e] = t;
          break;
        case 5:
          (Gs.properties[e] = t), (this.h.properties[e] = t);
          break;
      }
    }
    x(e, t) {
      switch ((delete Xr.properties[e], t.scope)) {
        case 1:
          delete Zr.properties[e];
          break;
        case 2:
          delete Yr.properties[e];
          break;
        case 6:
          delete Kr.properties[e];
          break;
        case 3:
          delete tn.properties[e];
          break;
        case 4:
        case 5:
          delete Gs.properties[e], delete this.h.properties[e];
          break;
      }
    }
    y() {
      for (const e of this.i.values()) {
        const t = `[${e}]`,
          i = { type: "object", description: d(1698, null), errorMessage: d(1699, null), $ref: Mi };
        this.A(t, i), (Xr.properties[t] = i), (Zr.properties[t] = i), (Yr.properties[t] = i), (Kr.properties[t] = i), (tn.properties[t] = i), (Gs.properties[t] = i);
      }
    }
    z() {
      const e = { type: "object", description: d(1700, null), errorMessage: d(1701, null), $ref: Mi };
      (Xr.patternProperties[_i] = e), (Zr.patternProperties[_i] = e), (Yr.patternProperties[_i] = e), (Kr.patternProperties[_i] = e), (tn.patternProperties[_i] = e), (Gs.patternProperties[_i] = e), this.j.fire();
    }
    A(e, t) {
      const i = this.b.get(e)?.configurationDefaultOverrideValue;
      let s, r;
      i && (!t.disallowConfigurationDefault || !i.source) && ((s = i.value), (r = i.source)), Ye(s) && ((s = t.defaultDefaultValue), (r = void 0)), Ye(s) && (s = i0(t.type)), (t.default = s), (t.defaultValueSource = r);
    }
  },
  eh = "\\[([^\\]]+)\\]",
  ih = new RegExp(eh, "g"),
  _i = `^(${eh})+$`,
  ei = new RegExp(_i);
function Js(e) {
  const t = [];
  if (ei.test(e)) {
    let i = ih.exec(e);
    for (; i?.length; ) {
      const s = i[1].trim();
      s && t.push(s), (i = ih.exec(e));
    }
  }
  return li(t);
}
function e0(e) {
  return e.reduce((t, i) => `${t}[${i}]`, "");
}
function i0(e) {
  switch (Array.isArray(e) ? e[0] : e) {
    case "boolean":
      return !1;
    case "integer":
    case "number":
      return 0;
    case "string":
      return "";
    case "array":
      return [];
    case "object":
      return {};
    default:
      return null;
  }
}
var sn = new t0();
Ee.add(Fe.Configuration, sn);
function s0(e, t) {
  return e.trim()
    ? ei.test(e)
      ? d(1703, null, e)
      : sn.getConfigurationProperties()[e] !== void 0
        ? d(1704, null, e)
        : t.policy?.name && sn.getPolicyConfigurations().get(t.policy?.name) !== void 0
          ? d(1705, null, e, t.policy?.name, sn.getPolicyConfigurations().get(t.policy?.name))
          : null
    : d(1702, null);
}
function Qs(e) {
  return Object.isFrozen(e) ? e : Hp(e);
}
var Ot = class Wi {
    static createEmptyModel(t) {
      return new Wi({}, [], [], void 0, t);
    }
    constructor(t, i, s, r, n) {
      (this.b = t), (this.c = i), (this.d = s), (this.raw = r), (this.f = n), (this.a = new Map());
    }
    get rawConfiguration() {
      if (!this.g)
        if (this.raw?.length) {
          const t = this.raw.map((i) => {
            if (i instanceof Wi) return i;
            const s = new sh("", this.f);
            return s.parseRaw(i), s.configurationModel;
          });
          this.g = t.reduce((i, s) => (s === i ? s : i.merge(s)), t[0]);
        } else this.g = this;
      return this.g;
    }
    get contents() {
      return this.b;
    }
    get overrides() {
      return this.d;
    }
    get keys() {
      return this.c;
    }
    isEmpty() {
      return this.c.length === 0 && Object.keys(this.b).length === 0 && this.d.length === 0;
    }
    getValue(t) {
      return t ? qr(this.contents, t) : this.contents;
    }
    inspect(t, i) {
      const s = this;
      return {
        get value() {
          return Qs(s.rawConfiguration.getValue(t));
        },
        get override() {
          return i ? Qs(s.rawConfiguration.getOverrideValue(t, i)) : void 0;
        },
        get merged() {
          return Qs(i ? s.rawConfiguration.override(i).getValue(t) : s.rawConfiguration.getValue(t));
        },
        get overrides() {
          const r = [];
          for (const { contents: n, identifiers: o, keys: a } of s.rawConfiguration.overrides) {
            const c = new Wi(n, a, [], void 0, s.f).getValue(t);
            c !== void 0 && r.push({ identifiers: o, value: c });
          }
          return r.length ? Qs(r) : void 0;
        },
      };
    }
    getOverrideValue(t, i) {
      const s = this.j(i);
      return s ? (t ? qr(s, t) : s) : void 0;
    }
    getKeysForOverrideIdentifier(t) {
      const i = [];
      for (const s of this.overrides) s.identifiers.includes(t) && i.push(...s.keys);
      return li(i);
    }
    getAllOverrideIdentifiers() {
      const t = [];
      for (const i of this.overrides) t.push(...i.identifiers);
      return li(t);
    }
    override(t) {
      let i = this.a.get(t);
      return i || ((i = this.h(t)), this.a.set(t, i)), i;
    }
    merge(...t) {
      const i = mi(this.contents),
        s = mi(this.overrides),
        r = [...this.keys],
        n = this.raw?.length ? [...this.raw] : [this];
      for (const o of t)
        if ((n.push(...(o.raw?.length ? o.raw : [o])), !o.isEmpty())) {
          this.i(i, o.contents);
          for (const a of o.overrides) {
            const [c] = s.filter((l) => Zi(l.identifiers, a.identifiers));
            c ? (this.i(c.contents, a.contents), c.keys.push(...a.keys), (c.keys = li(c.keys))) : s.push(mi(a));
          }
          for (const a of o.keys) r.indexOf(a) === -1 && r.push(a);
        }
      return new Wi(i, r, s, n.every((o) => o instanceof Wi) ? void 0 : n, this.f);
    }
    h(t) {
      const i = this.j(t);
      if (!i || typeof i != "object" || !Object.keys(i).length) return this;
      const s = {};
      for (const r of li([...Object.keys(this.contents), ...Object.keys(i)])) {
        let n = this.contents[r];
        const o = i[r];
        o && (typeof n == "object" && typeof o == "object" ? ((n = mi(n)), this.i(n, o)) : (n = o)), (s[r] = n);
      }
      return new Wi(s, this.keys, this.overrides, void 0, this.f);
    }
    i(t, i) {
      for (const s of Object.keys(i)) {
        if (s in t && Ct(t[s]) && Ct(i[s])) {
          this.i(t[s], i[s]);
          continue;
        }
        t[s] = mi(i[s]);
      }
    }
    j(t) {
      let i = null,
        s = null;
      const r = (n) => {
        n && (s ? this.i(s, n) : (s = mi(n)));
      };
      for (const n of this.overrides) n.identifiers.length === 1 && n.identifiers[0] === t ? (i = n.contents) : n.identifiers.includes(t) && r(n.contents);
      return r(i), s;
    }
    toJSON() {
      return { contents: this.contents, overrides: this.overrides, keys: this.keys };
    }
    addValue(t, i) {
      this.k(t, i, !0);
    }
    setValue(t, i) {
      this.k(t, i, !1);
    }
    removeValue(t) {
      const i = this.keys.indexOf(t);
      i !== -1 &&
        (this.keys.splice(i, 1),
        bp(this.contents, t),
        ei.test(t) &&
          this.overrides.splice(
            this.overrides.findIndex((s) => Zi(s.identifiers, Js(t))),
            1,
          ));
    }
    k(t, i, s) {
      if ((jl(this.contents, t, i, (r) => this.f.error(r)), (s = s || this.keys.indexOf(t) === -1), s && this.keys.push(t), ei.test(t))) {
        const r = Js(t),
          n = { identifiers: r, keys: Object.keys(this.contents[t]), contents: po(this.contents[t], (a) => this.f.error(a)) },
          o = this.overrides.findIndex((a) => Zi(a.identifiers, r));
        o !== -1 ? (this.overrides[o] = n) : this.overrides.push(n);
      }
    }
  },
  sh = class {
    constructor(e, t) {
      (this.f = e), (this.g = t), (this.a = null), (this.b = null), (this.c = []), (this.d = []);
    }
    get configurationModel() {
      return this.b || Ot.createEmptyModel(this.g);
    }
    get restrictedConfigurations() {
      return this.c;
    }
    get errors() {
      return this.d;
    }
    parse(e, t) {
      if (!Xt(e)) {
        const i = this.h(e);
        this.parseRaw(i, t);
      }
    }
    reparse(e) {
      this.a && this.parseRaw(this.a, e);
    }
    parseRaw(e, t) {
      this.a = e;
      const { contents: i, keys: s, overrides: r, restricted: n, hasExcludedProperties: o } = this.i(e, t);
      (this.b = new Ot(i, s, r, o ? [e] : void 0, this.g)), (this.c = n || []);
    }
    h(e) {
      let t = {},
        i = null,
        s = [];
      const r = [],
        n = [];
      function o(c) {
        Array.isArray(s) ? s.push(c) : i !== null && (s[i] = c);
      }
      const a = {
        onObjectBegin: () => {
          const c = {};
          o(c), r.push(s), (s = c), (i = null);
        },
        onObjectProperty: (c) => {
          i = c;
        },
        onObjectEnd: () => {
          s = r.pop();
        },
        onArrayBegin: () => {
          const c = [];
          o(c), r.push(s), (s = c), (i = null);
        },
        onArrayEnd: () => {
          s = r.pop();
        },
        onLiteralValue: o,
        onError: (c, l, h) => {
          n.push({ error: c, offset: l, length: h });
        },
      };
      if (e)
        try {
          bo(e, a), (t = s[0] || {});
        } catch (c) {
          this.g.error(`Error while parsing settings file ${this.f}: ${c}`), (this.d = [c]);
        }
      return t;
    }
    i(e, t) {
      const i = Ee.as(Fe.Configuration).getConfigurationProperties(),
        s = this.j(e, i, !0, t);
      e = s.raw;
      const r = po(e, (a) => this.g.error(`Conflict in settings file ${this.f}: ${a}`)),
        n = Object.keys(e),
        o = this.l(e, (a) => this.g.error(`Conflict in settings file ${this.f}: ${a}`));
      return { contents: r, keys: n, overrides: o, restricted: s.restricted, hasExcludedProperties: s.hasExcludedProperties };
    }
    j(e, t, i, s) {
      let r = !1;
      if (!s?.scopes && !s?.skipRestricted && !s?.exclude?.length) return { raw: e, restricted: [], hasExcludedProperties: r };
      const n = {},
        o = [];
      for (const a in e)
        if (ei.test(a) && i) {
          const c = this.j(e[a], t, !1, s);
          (n[a] = c.raw), (r = r || c.hasExcludedProperties), o.push(...c.restricted);
        } else {
          const c = t[a],
            l = c ? (typeof c.scope < "u" ? c.scope : 3) : void 0;
          c?.restricted && o.push(a), !s.exclude?.includes(a) && (s.include?.includes(a) || ((l === void 0 || s.scopes === void 0 || s.scopes.includes(l)) && !(s.skipRestricted && c?.restricted))) ? (n[a] = e[a]) : (r = !0);
        }
      return { raw: n, restricted: o, hasExcludedProperties: r };
    }
    l(e, t) {
      const i = [];
      for (const s of Object.keys(e))
        if (ei.test(s)) {
          const r = {};
          for (const n in e[s]) r[n] = e[s][n];
          i.push({ identifiers: Js(s), keys: Object.keys(r), contents: po(r, t) });
        }
      return i;
    }
  },
  r0 = class extends G {
    constructor(e, t, i, s, r) {
      super(),
        (this.c = e),
        (this.f = t),
        (this.g = s),
        (this.h = r),
        (this.b = this.B(new O())),
        (this.onDidChange = this.b.event),
        (this.a = new sh(this.c.toString(), r)),
        this.B(this.g.watch(i.dirname(this.c))),
        this.B(this.g.watch(this.c)),
        this.B(
          at.any(
            at.filter(this.g.onDidFilesChange, (n) => n.contains(this.c)),
            at.filter(this.g.onDidRunOperation, (n) => (n.isOperation(0) || n.isOperation(3) || n.isOperation(1) || n.isOperation(4)) && i.isEqual(n.resource, e)),
          )(() => this.b.fire()),
        );
    }
    async loadConfiguration() {
      try {
        const e = await this.g.readFile(this.c);
        return this.a.parse(e.value.toString() || "{}", this.f), this.a.configurationModel;
      } catch {
        return Ot.createEmptyModel(this.h);
      }
    }
    reparse(e) {
      return e && (this.f = e), this.a.reparse(this.f), this.a.configurationModel;
    }
    getRestrictedSettings() {
      return this.a.restrictedConfigurations;
    }
  },
  n0 = class {
    constructor(e, t, i, s, r, n, o, a, c, l, h, u, f) {
      (this.a = e), (this.b = t), (this.c = i), (this.overrideIdentifiers = s), (this.d = r), (this.f = n), (this.g = o), (this.h = a), (this.i = c), (this.j = l), (this.k = h), (this.l = u), (this.m = f);
    }
    get value() {
      return Qs(this.c);
    }
    n(e) {
      return e?.value !== void 0 || e?.override !== void 0 || e?.overrides !== void 0 ? e : void 0;
    }
    get q() {
      return this.p || (this.p = this.d.inspect(this.a, this.b.overrideIdentifier)), this.p;
    }
    get defaultValue() {
      return this.q.merged;
    }
    get default() {
      return this.n(this.q);
    }
    get s() {
      return this.r === void 0 && (this.r = this.f ? this.f.inspect(this.a) : null), this.r;
    }
    get policyValue() {
      return this.s?.merged;
    }
    get policy() {
      return this.s?.value !== void 0 ? { value: this.s.value } : void 0;
    }
    get u() {
      return this.t === void 0 && (this.t = this.g ? this.g.inspect(this.a) : null), this.t;
    }
    get applicationValue() {
      return this.u?.merged;
    }
    get application() {
      return this.n(this.u);
    }
    get w() {
      return this.v || (this.v = this.h.inspect(this.a, this.b.overrideIdentifier)), this.v;
    }
    get userValue() {
      return this.w.merged;
    }
    get user() {
      return this.n(this.w);
    }
    get y() {
      return this.x || (this.x = this.i.inspect(this.a, this.b.overrideIdentifier)), this.x;
    }
    get userLocalValue() {
      return this.y.merged;
    }
    get userLocal() {
      return this.n(this.y);
    }
    get A() {
      return this.z || (this.z = this.j.inspect(this.a, this.b.overrideIdentifier)), this.z;
    }
    get userRemoteValue() {
      return this.A.merged;
    }
    get userRemote() {
      return this.n(this.A);
    }
    get D() {
      return this.B === void 0 && (this.B = this.k ? this.k.inspect(this.a, this.b.overrideIdentifier) : null), this.B;
    }
    get workspaceValue() {
      return this.D?.merged;
    }
    get workspace() {
      return this.n(this.D);
    }
    get F() {
      return this.E === void 0 && (this.E = this.l ? this.l.inspect(this.a, this.b.overrideIdentifier) : null), this.E;
    }
    get workspaceFolderValue() {
      return this.F?.merged;
    }
    get workspaceFolder() {
      return this.n(this.F);
    }
    get H() {
      return this.G === void 0 && (this.G = this.m.inspect(this.a, this.b.overrideIdentifier)), this.G;
    }
    get memoryValue() {
      return this.H.merged;
    }
    get memory() {
      return this.n(this.H);
    }
  },
  Io = class qf {
    constructor(t, i, s, r, n, o, a, c, l, h) {
      (this.j = t), (this.l = i), (this.m = s), (this.n = r), (this.p = n), (this.q = o), (this.r = a), (this.s = c), (this.t = l), (this.u = h), (this.h = null), (this.i = new Qt()), (this.v = null);
    }
    getValue(t, i, s) {
      return this.w(t, i, s).getValue(t);
    }
    updateValue(t, i, s = {}) {
      let r;
      s.resource ? ((r = this.t.get(s.resource)), r || ((r = Ot.createEmptyModel(this.u)), this.t.set(s.resource, r))) : (r = this.s), i === void 0 ? r.removeValue(t) : r.setValue(t, i), s.resource || (this.h = null);
    }
    inspect(t, i, s) {
      const r = this.w(t, i, s),
        n = this.A(i.resource, s),
        o = i.resource ? this.t.get(i.resource) || this.s : this.s,
        a = new Set();
      for (const c of r.overrides) for (const l of c.identifiers) r.getOverrideValue(t, l) !== void 0 && a.add(l);
      return new n0(
        t,
        i,
        r.getValue(t),
        a.size ? [...a] : void 0,
        this.j,
        this.l.isEmpty() ? void 0 : this.l,
        this.applicationConfiguration.isEmpty() ? void 0 : this.applicationConfiguration,
        this.userConfiguration,
        this.localUserConfiguration,
        this.remoteUserConfiguration,
        s ? this.q : void 0,
        n || void 0,
        o,
      );
    }
    keys(t) {
      const i = this.A(void 0, t);
      return { default: this.j.keys.slice(0), user: this.userConfiguration.keys.slice(0), workspace: this.q.keys.slice(0), workspaceFolder: i ? i.keys.slice(0) : [] };
    }
    updateDefaultConfiguration(t) {
      (this.j = t), (this.h = null), this.i.clear();
    }
    updatePolicyConfiguration(t) {
      this.l = t;
    }
    updateApplicationConfiguration(t) {
      (this.m = t), (this.h = null), this.i.clear();
    }
    updateLocalUserConfiguration(t) {
      (this.n = t), (this.v = null), (this.h = null), this.i.clear();
    }
    updateRemoteUserConfiguration(t) {
      (this.p = t), (this.v = null), (this.h = null), this.i.clear();
    }
    updateWorkspaceConfiguration(t) {
      (this.q = t), (this.h = null), this.i.clear();
    }
    updateFolderConfiguration(t, i) {
      this.r.set(t, i), this.i.delete(t);
    }
    deleteFolderConfiguration(t) {
      this.folderConfigurations.delete(t), this.i.delete(t);
    }
    compareAndUpdateDefaultConfiguration(t, i) {
      const s = [];
      if (!i) {
        const { added: r, updated: n, removed: o } = wi(this.j, t);
        i = [...r, ...n, ...o];
      }
      for (const r of i)
        for (const n of Js(r)) {
          const o = this.j.getKeysForOverrideIdentifier(n),
            a = t.getKeysForOverrideIdentifier(n),
            c = [...a.filter((l) => o.indexOf(l) === -1), ...o.filter((l) => a.indexOf(l) === -1), ...o.filter((l) => !ze(this.j.override(n).getValue(l), t.override(n).getValue(l)))];
          s.push([n, c]);
        }
      return this.updateDefaultConfiguration(t), { keys: i, overrides: s };
    }
    compareAndUpdatePolicyConfiguration(t) {
      const { added: i, updated: s, removed: r } = wi(this.l, t),
        n = [...i, ...s, ...r];
      return n.length && this.updatePolicyConfiguration(t), { keys: n, overrides: [] };
    }
    compareAndUpdateApplicationConfiguration(t) {
      const { added: i, updated: s, removed: r, overrides: n } = wi(this.applicationConfiguration, t),
        o = [...i, ...s, ...r];
      return o.length && this.updateApplicationConfiguration(t), { keys: o, overrides: n };
    }
    compareAndUpdateLocalUserConfiguration(t) {
      const { added: i, updated: s, removed: r, overrides: n } = wi(this.localUserConfiguration, t),
        o = [...i, ...s, ...r];
      return o.length && this.updateLocalUserConfiguration(t), { keys: o, overrides: n };
    }
    compareAndUpdateRemoteUserConfiguration(t) {
      const { added: i, updated: s, removed: r, overrides: n } = wi(this.remoteUserConfiguration, t),
        o = [...i, ...s, ...r];
      return o.length && this.updateRemoteUserConfiguration(t), { keys: o, overrides: n };
    }
    compareAndUpdateWorkspaceConfiguration(t) {
      const { added: i, updated: s, removed: r, overrides: n } = wi(this.workspaceConfiguration, t),
        o = [...i, ...s, ...r];
      return o.length && this.updateWorkspaceConfiguration(t), { keys: o, overrides: n };
    }
    compareAndUpdateFolderConfiguration(t, i) {
      const s = this.folderConfigurations.get(t),
        { added: r, updated: n, removed: o, overrides: a } = wi(s, i),
        c = [...r, ...n, ...o];
      return (c.length || !s) && this.updateFolderConfiguration(t, i), { keys: c, overrides: a };
    }
    compareAndDeleteFolderConfiguration(t) {
      const i = this.folderConfigurations.get(t);
      if (!i) throw new Error("Unknown folder");
      this.deleteFolderConfiguration(t);
      const { added: s, updated: r, removed: n, overrides: o } = wi(i, void 0);
      return { keys: [...s, ...r, ...n], overrides: o };
    }
    get defaults() {
      return this.j;
    }
    get applicationConfiguration() {
      return this.m;
    }
    get userConfiguration() {
      return this.v || (this.v = this.p.isEmpty() ? this.n : this.n.merge(this.p)), this.v;
    }
    get localUserConfiguration() {
      return this.n;
    }
    get remoteUserConfiguration() {
      return this.p;
    }
    get workspaceConfiguration() {
      return this.q;
    }
    get folderConfigurations() {
      return this.r;
    }
    w(t, i, s) {
      let r = this.x(i, s);
      return i.overrideIdentifier && (r = r.override(i.overrideIdentifier)), !this.l.isEmpty() && this.l.getValue(t) !== void 0 && (r = r.merge(this.l)), r;
    }
    x({ resource: t }, i) {
      let s = this.y();
      if (i && t) {
        const r = i.getFolder(t);
        r && (s = this.z(r.uri) || s);
        const n = this.t.get(t);
        n && (s = s.merge(n));
      }
      return s;
    }
    y() {
      return this.h || (this.h = this.j.merge(this.applicationConfiguration, this.userConfiguration, this.q, this.s)), this.h;
    }
    z(t) {
      let i = this.i.get(t);
      if (!i) {
        const s = this.y(),
          r = this.r.get(t);
        r ? ((i = s.merge(r)), this.i.set(t, i)) : (i = s);
      }
      return i;
    }
    A(t, i) {
      if (i && t) {
        const s = i.getFolder(t);
        if (s) return this.r.get(s.uri);
      }
    }
    toData() {
      return {
        defaults: { contents: this.j.contents, overrides: this.j.overrides, keys: this.j.keys },
        policy: { contents: this.l.contents, overrides: this.l.overrides, keys: this.l.keys },
        application: { contents: this.applicationConfiguration.contents, overrides: this.applicationConfiguration.overrides, keys: this.applicationConfiguration.keys },
        user: { contents: this.userConfiguration.contents, overrides: this.userConfiguration.overrides, keys: this.userConfiguration.keys },
        workspace: { contents: this.q.contents, overrides: this.q.overrides, keys: this.q.keys },
        folders: [...this.r.keys()].reduce((t, i) => {
          const { contents: s, overrides: r, keys: n } = this.r.get(i);
          return t.push([i, { contents: s, overrides: r, keys: n }]), t;
        }, []),
      };
    }
    allKeys() {
      const t = new Set();
      return this.j.keys.forEach((i) => t.add(i)), this.userConfiguration.keys.forEach((i) => t.add(i)), this.q.keys.forEach((i) => t.add(i)), this.r.forEach((i) => i.keys.forEach((s) => t.add(s))), [...t.values()];
    }
    B() {
      const t = new Set();
      return (
        this.j.getAllOverrideIdentifiers().forEach((i) => t.add(i)),
        this.userConfiguration.getAllOverrideIdentifiers().forEach((i) => t.add(i)),
        this.q.getAllOverrideIdentifiers().forEach((i) => t.add(i)),
        this.r.forEach((i) => i.getAllOverrideIdentifiers().forEach((s) => t.add(s))),
        [...t.values()]
      );
    }
    D(t) {
      const i = new Set();
      return (
        this.j.getKeysForOverrideIdentifier(t).forEach((s) => i.add(s)),
        this.userConfiguration.getKeysForOverrideIdentifier(t).forEach((s) => i.add(s)),
        this.q.getKeysForOverrideIdentifier(t).forEach((s) => i.add(s)),
        this.r.forEach((s) => s.getKeysForOverrideIdentifier(t).forEach((r) => i.add(r))),
        [...i.values()]
      );
    }
    static parse(t, i) {
      const s = this.E(t.defaults, i),
        r = this.E(t.policy, i),
        n = this.E(t.application, i),
        o = this.E(t.user, i),
        a = this.E(t.workspace, i),
        c = t.folders.reduce((l, h) => (l.set(I.revive(h[0]), this.E(h[1], i)), l), new Qt());
      return new qf(s, r, n, o, Ot.createEmptyModel(i), a, c, Ot.createEmptyModel(i), new Qt(), i);
    }
    static E(t, i) {
      return new Ot(t.contents, t.keys, t.overrides, void 0, i);
    }
  },
  o0 = class {
    constructor(e, t, i, s, r) {
      (this.change = e),
        (this.f = t),
        (this.g = i),
        (this.h = s),
        (this.i = r),
        (this.a = `
`),
        (this.b = this.a.charCodeAt(0)),
        (this.c = 46),
        (this.affectedKeys = new Set()),
        (this.j = void 0);
      for (const n of e.keys) this.affectedKeys.add(n);
      for (const [, n] of e.overrides) for (const o of n) this.affectedKeys.add(o);
      this.d = this.a;
      for (const n of this.affectedKeys) this.d += n + this.a;
    }
    get previousConfiguration() {
      return !this.j && this.f && (this.j = Io.parse(this.f.data, this.i)), this.j;
    }
    affectsConfiguration(e, t) {
      const i = this.a + e,
        s = this.d.indexOf(i);
      if (s < 0) return !1;
      const r = s + i.length;
      if (r >= this.d.length) return !1;
      const n = this.d.charCodeAt(r);
      if (n !== this.b && n !== this.c) return !1;
      if (t) {
        const o = this.previousConfiguration ? this.previousConfiguration.getValue(e, t, this.f?.workspace) : void 0,
          a = this.g.getValue(e, t, this.h);
        return !ze(o, a);
      }
      return !0;
    }
  };
function wi(e, t) {
  const { added: i, removed: s, updated: r } = rh(t?.rawConfiguration, e?.rawConfiguration),
    n = [],
    o = e?.getAllOverrideIdentifiers() || [],
    a = t?.getAllOverrideIdentifiers() || [];
  if (t) {
    const c = a.filter((l) => !o.includes(l));
    for (const l of c) n.push([l, t.getKeysForOverrideIdentifier(l)]);
  }
  if (e) {
    const c = o.filter((l) => !a.includes(l));
    for (const l of c) n.push([l, e.getKeysForOverrideIdentifier(l)]);
  }
  if (t && e) {
    for (const c of o)
      if (a.includes(c)) {
        const l = rh({ contents: e.getOverrideValue(void 0, c) || {}, keys: e.getKeysForOverrideIdentifier(c) }, { contents: t.getOverrideValue(void 0, c) || {}, keys: t.getKeysForOverrideIdentifier(c) });
        n.push([c, [...l.added, ...l.removed, ...l.updated]]);
      }
  }
  return { added: i, removed: s, updated: r, overrides: n };
}
function rh(e, t) {
  const i = e ? (t ? e.keys.filter((n) => t.keys.indexOf(n) === -1) : [...e.keys]) : [],
    s = t ? (e ? t.keys.filter((n) => e.keys.indexOf(n) === -1) : [...t.keys]) : [],
    r = [];
  if (e && t) {
    for (const n of t.keys)
      if (e.keys.indexOf(n) !== -1) {
        const o = qr(t.contents, n),
          a = qr(e.contents, n);
        ze(o, a) || r.push(n);
      }
  }
  return { added: i, removed: s, updated: r };
}
function ls(e) {
  return Po(e, 0);
}
function Po(e, t) {
  switch (typeof e) {
    case "object":
      return e === null ? ii(349, t) : Array.isArray(e) ? c0(e, t) : l0(e, t);
    case "string":
      return nh(e, t);
    case "boolean":
      return a0(e, t);
    case "number":
      return ii(e, t);
    case "undefined":
      return ii(937, t);
    default:
      return ii(617, t);
  }
}
function ii(e, t) {
  return ((t << 5) - t + e) | 0;
}
function a0(e, t) {
  return ii(e ? 433 : 863, t);
}
function nh(e, t) {
  t = ii(149417, t);
  for (let i = 0, s = e.length; i < s; i++) t = ii(e.charCodeAt(i), t);
  return t;
}
function c0(e, t) {
  return (t = ii(104579, t)), e.reduce((i, s) => Po(s, i), t);
}
function l0(e, t) {
  return (
    (t = ii(181387, t)),
    Object.keys(e)
      .sort()
      .reduce((i, s) => ((i = nh(s, i)), Po(e[s], i)), t)
  );
}
var oh;
(function (e) {
  (e[(e.BLOCK_SIZE = 64)] = "BLOCK_SIZE"), (e[(e.UNICODE_REPLACEMENT = 65533)] = "UNICODE_REPLACEMENT");
})(oh || (oh = {}));
function ko(e, t, i = 32) {
  const s = i - t,
    r = ~((1 << s) - 1);
  return ((e << t) | ((r & e) >>> s)) >>> 0;
}
function Xs(e, t = 32) {
  return e instanceof ArrayBuffer
    ? Array.from(new Uint8Array(e))
        .map((i) => i.toString(16).padStart(2, "0"))
        .join("")
    : (e >>> 0).toString(16).padStart(t / 4, "0");
}
var W7 = class Wf {
    static {
      this.g = new DataView(new ArrayBuffer(320));
    }
    constructor() {
      (this.h = 1732584193),
        (this.l = 4023233417),
        (this.m = 2562383102),
        (this.n = 271733878),
        (this.o = 3285377520),
        (this.p = new Uint8Array(67)),
        (this.q = new DataView(this.p.buffer)),
        (this.r = 0),
        (this.t = 0),
        (this.u = 0),
        (this.v = !1);
    }
    update(t) {
      const i = t.length;
      if (i === 0) return;
      const s = this.p;
      let r = this.r,
        n = this.u,
        o,
        a;
      for (n !== 0 ? ((o = n), (a = -1), (n = 0)) : ((o = t.charCodeAt(0)), (a = 0)); ; ) {
        let c = o;
        if (Ld(o))
          if (a + 1 < i) {
            const l = t.charCodeAt(a + 1);
            ll(l) ? (a++, (c = Od(o, l))) : (c = 65533);
          } else {
            n = o;
            break;
          }
        else ll(o) && (c = 65533);
        if (((r = this.w(s, r, c)), a++, a < i)) o = t.charCodeAt(a);
        else break;
      }
      (this.r = r), (this.u = n);
    }
    w(t, i, s) {
      return (
        s < 128
          ? (t[i++] = s)
          : s < 2048
            ? ((t[i++] = 192 | ((s & 1984) >>> 6)), (t[i++] = 128 | ((s & 63) >>> 0)))
            : s < 65536
              ? ((t[i++] = 224 | ((s & 61440) >>> 12)), (t[i++] = 128 | ((s & 4032) >>> 6)), (t[i++] = 128 | ((s & 63) >>> 0)))
              : ((t[i++] = 240 | ((s & 1835008) >>> 18)), (t[i++] = 128 | ((s & 258048) >>> 12)), (t[i++] = 128 | ((s & 4032) >>> 6)), (t[i++] = 128 | ((s & 63) >>> 0))),
        i >= 64 && (this.y(), (i -= 64), (this.t += 64), (t[0] = t[64]), (t[1] = t[65]), (t[2] = t[66])),
        i
      );
    }
    digest() {
      return this.v || ((this.v = !0), this.u && ((this.u = 0), (this.r = this.w(this.p, this.r, 65533))), (this.t += this.r), this.x()), Xs(this.h) + Xs(this.l) + Xs(this.m) + Xs(this.n) + Xs(this.o);
    }
    x() {
      (this.p[this.r++] = 128), this.p.subarray(this.r).fill(0), this.r > 56 && (this.y(), this.p.fill(0));
      const t = 8 * this.t;
      this.q.setUint32(56, Math.floor(t / 4294967296), !1), this.q.setUint32(60, t % 4294967296, !1), this.y();
    }
    y() {
      const t = Wf.g,
        i = this.q;
      for (let u = 0; u < 64; u += 4) t.setUint32(u, i.getUint32(u, !1), !1);
      for (let u = 64; u < 320; u += 4) t.setUint32(u, ko(t.getUint32(u - 12, !1) ^ t.getUint32(u - 32, !1) ^ t.getUint32(u - 56, !1) ^ t.getUint32(u - 64, !1), 1), !1);
      let s = this.h,
        r = this.l,
        n = this.m,
        o = this.n,
        a = this.o,
        c,
        l,
        h;
      for (let u = 0; u < 80; u++)
        u < 20 ? ((c = (r & n) | (~r & o)), (l = 1518500249)) : u < 40 ? ((c = r ^ n ^ o), (l = 1859775393)) : u < 60 ? ((c = (r & n) | (r & o) | (n & o)), (l = 2400959708)) : ((c = r ^ n ^ o), (l = 3395469782)),
          (h = (ko(s, 5) + c + a + l + t.getUint32(u * 4, !1)) & 4294967295),
          (a = o),
          (o = n),
          (n = ko(r, 30)),
          (r = s),
          (s = h);
      (this.h = (this.h + s) & 4294967295), (this.l = (this.l + r) & 4294967295), (this.m = (this.m + n) & 4294967295), (this.n = (this.n + o) & 4294967295), (this.o = (this.o + a) & 4294967295);
    }
  },
  ah;
(function (e) {
  (e[(e.LParen = 0)] = "LParen"),
    (e[(e.RParen = 1)] = "RParen"),
    (e[(e.Neg = 2)] = "Neg"),
    (e[(e.Eq = 3)] = "Eq"),
    (e[(e.NotEq = 4)] = "NotEq"),
    (e[(e.Lt = 5)] = "Lt"),
    (e[(e.LtEq = 6)] = "LtEq"),
    (e[(e.Gt = 7)] = "Gt"),
    (e[(e.GtEq = 8)] = "GtEq"),
    (e[(e.RegexOp = 9)] = "RegexOp"),
    (e[(e.RegexStr = 10)] = "RegexStr"),
    (e[(e.True = 11)] = "True"),
    (e[(e.False = 12)] = "False"),
    (e[(e.In = 13)] = "In"),
    (e[(e.Not = 14)] = "Not"),
    (e[(e.And = 15)] = "And"),
    (e[(e.Or = 16)] = "Or"),
    (e[(e.Str = 17)] = "Str"),
    (e[(e.QuotedStr = 18)] = "QuotedStr"),
    (e[(e.Error = 19)] = "Error"),
    (e[(e.EOF = 20)] = "EOF");
})(ah || (ah = {}));
function Ao(...e) {
  switch (e.length) {
    case 1:
      return d(1729, null, e[0]);
    case 2:
      return d(1730, null, e[0], e[1]);
    case 3:
      return d(1731, null, e[0], e[1], e[2]);
    default:
      return;
  }
}
var h0 = d(1732, null),
  u0 = d(1733, null),
  Zs = class cc {
    constructor() {
      (this.c = ""), (this.d = 0), (this.e = 0), (this.f = []), (this.g = []), (this.m = /[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy);
    }
    static getLexeme(t) {
      switch (t.type) {
        case 0:
          return "(";
        case 1:
          return ")";
        case 2:
          return "!";
        case 3:
          return t.isTripleEq ? "===" : "==";
        case 4:
          return t.isTripleEq ? "!==" : "!=";
        case 5:
          return "<";
        case 6:
          return "<=";
        case 7:
          return ">=";
        case 8:
          return ">=";
        case 9:
          return "=~";
        case 10:
          return t.lexeme;
        case 11:
          return "true";
        case 12:
          return "false";
        case 13:
          return "in";
        case 14:
          return "not";
        case 15:
          return "&&";
        case 16:
          return "||";
        case 17:
          return t.lexeme;
        case 18:
          return t.lexeme;
        case 19:
          return t.lexeme;
        case 20:
          return "EOF";
        default:
          throw Ec(`unhandled token type: ${JSON.stringify(t)}; have you forgotten to add a case?`);
      }
    }
    static {
      this.a = new Set(["i", "g", "s", "m", "y", "u"].map((t) => t.charCodeAt(0)));
    }
    static {
      this.b = new Map([
        ["not", 14],
        ["in", 13],
        ["false", 12],
        ["true", 11],
      ]);
    }
    get errors() {
      return this.g;
    }
    reset(t) {
      return (this.c = t), (this.d = 0), (this.e = 0), (this.f = []), (this.g = []), this;
    }
    scan() {
      for (; !this.r(); )
        switch (((this.d = this.e), this.i())) {
          case 40:
            this.k(0);
            break;
          case 41:
            this.k(1);
            break;
          case 33:
            if (this.h(61)) {
              const i = this.h(61);
              this.f.push({ type: 4, offset: this.d, isTripleEq: i });
            } else this.k(2);
            break;
          case 39:
            this.o();
            break;
          case 47:
            this.q();
            break;
          case 61:
            if (this.h(61)) {
              const i = this.h(61);
              this.f.push({ type: 3, offset: this.d, isTripleEq: i });
            } else this.h(126) ? this.k(9) : this.l(Ao("==", "=~"));
            break;
          case 60:
            this.k(this.h(61) ? 6 : 5);
            break;
          case 62:
            this.k(this.h(61) ? 8 : 7);
            break;
          case 38:
            this.h(38) ? this.k(15) : this.l(Ao("&&"));
            break;
          case 124:
            this.h(124) ? this.k(16) : this.l(Ao("||"));
            break;
          case 32:
          case 13:
          case 9:
          case 10:
          case 160:
            break;
          default:
            this.n();
        }
      return (this.d = this.e), this.k(20), Array.from(this.f);
    }
    h(t) {
      return this.r() || this.c.charCodeAt(this.e) !== t ? !1 : (this.e++, !0);
    }
    i() {
      return this.c.charCodeAt(this.e++);
    }
    j() {
      return this.r() ? 0 : this.c.charCodeAt(this.e);
    }
    k(t) {
      this.f.push({ type: t, offset: this.d });
    }
    l(t) {
      const i = this.d,
        s = this.c.substring(this.d, this.e),
        r = { type: 19, offset: this.d, lexeme: s };
      this.g.push({ offset: i, lexeme: s, additionalInfo: t }), this.f.push(r);
    }
    n() {
      this.m.lastIndex = this.d;
      const t = this.m.exec(this.c);
      if (t) {
        this.e = this.d + t[0].length;
        const i = this.c.substring(this.d, this.e),
          s = cc.b.get(i);
        s ? this.k(s) : this.f.push({ type: 17, lexeme: i, offset: this.d });
      }
    }
    o() {
      for (; this.j() !== 39 && !this.r(); ) this.i();
      if (this.r()) {
        this.l(h0);
        return;
      }
      this.i(), this.f.push({ type: 18, lexeme: this.c.substring(this.d + 1, this.e - 1), offset: this.d + 1 });
    }
    q() {
      let t = this.e,
        i = !1,
        s = !1;
      for (;;) {
        if (t >= this.c.length) {
          (this.e = t), this.l(u0);
          return;
        }
        const n = this.c.charCodeAt(t);
        if (i) i = !1;
        else if (n === 47 && !s) {
          t++;
          break;
        } else n === 91 ? (s = !0) : n === 92 ? (i = !0) : n === 93 && (s = !1);
        t++;
      }
      for (; t < this.c.length && cc.a.has(this.c.charCodeAt(t)); ) t++;
      this.e = t;
      const r = this.c.substring(this.d, this.e);
      this.f.push({ type: 10, lexeme: r, offset: this.d });
    }
    r() {
      return this.e >= this.c.length;
    }
  },
  Mt = new Map();
Mt.set("false", !1),
  Mt.set("true", !0),
  Mt.set("isMac", Ze),
  Mt.set("isLinux", se),
  Mt.set("isWindows", Rt),
  Mt.set("isWeb", fe),
  Mt.set("isMacNative", Ze && !fe),
  Mt.set("isEdge", md),
  Mt.set("isFirefox", pd),
  Mt.set("isChrome", tl),
  Mt.set("isSafari", gd);
var f0 = Object.prototype.hasOwnProperty,
  ch;
(function (e) {
  (e[(e.False = 0)] = "False"),
    (e[(e.True = 1)] = "True"),
    (e[(e.Defined = 2)] = "Defined"),
    (e[(e.Not = 3)] = "Not"),
    (e[(e.Equals = 4)] = "Equals"),
    (e[(e.NotEquals = 5)] = "NotEquals"),
    (e[(e.And = 6)] = "And"),
    (e[(e.Regex = 7)] = "Regex"),
    (e[(e.NotRegex = 8)] = "NotRegex"),
    (e[(e.Or = 9)] = "Or"),
    (e[(e.In = 10)] = "In"),
    (e[(e.NotIn = 11)] = "NotIn"),
    (e[(e.Greater = 12)] = "Greater"),
    (e[(e.GreaterEquals = 13)] = "GreaterEquals"),
    (e[(e.Smaller = 14)] = "Smaller"),
    (e[(e.SmallerEquals = 15)] = "SmallerEquals");
})(ch || (ch = {}));
var d0 = { regexParsingWithErrorRecovery: !0 },
  p0 = d(1707, null),
  g0 = d(1708, null),
  m0 = d(1709, null),
  lh = d(1710, null),
  w0 = d(1711, null),
  v0 = d(1712, null),
  y0 = d(1713, null),
  b0 = d(1714, null),
  E0 = class wr {
    static {
      this.c = new Error();
    }
    get lexingErrors() {
      return this.d.errors;
    }
    get parsingErrors() {
      return this.h;
    }
    constructor(t = d0) {
      (this.k = t), (this.d = new Zs()), (this.f = []), (this.g = 0), (this.h = []), (this.v = /g|y/g);
    }
    parse(t) {
      if (t === "") {
        this.h.push({ message: p0, offset: 0, lexeme: "", additionalInfo: g0 });
        return;
      }
      (this.f = this.d.reset(t).scan()), (this.g = 0), (this.h = []);
      try {
        const i = this.l();
        if (!this.E()) {
          const s = this.D(),
            r = s.type === 17 ? v0 : void 0;
          throw (this.h.push({ message: w0, offset: s.offset, lexeme: Zs.getLexeme(s), additionalInfo: r }), wr.c);
        }
        return i;
      } catch (i) {
        if (i !== wr.c) throw i;
        return;
      }
    }
    l() {
      return this.m();
    }
    m() {
      const t = [this.o()];
      for (; this.y(16); ) {
        const i = this.o();
        t.push(i);
      }
      return t.length === 1 ? t[0] : Zt.or(...t);
    }
    o() {
      const t = [this.s()];
      for (; this.y(15); ) {
        const i = this.s();
        t.push(i);
      }
      return t.length === 1 ? t[0] : Zt.and(...t);
    }
    s() {
      if (this.y(2)) {
        const t = this.D();
        switch (t.type) {
          case 11:
            return this.z(), re.INSTANCE;
          case 12:
            return this.z(), we.INSTANCE;
          case 0: {
            this.z();
            const i = this.l();
            return this.A(1, lh), i?.negate();
          }
          case 17:
            return this.z(), tr.create(t.lexeme);
          default:
            throw this.B("KEY | true | false | '(' expression ')'", t);
        }
      }
      return this.t();
    }
    t() {
      const t = this.D();
      switch (t.type) {
        case 11:
          return this.z(), Zt.true();
        case 12:
          return this.z(), Zt.false();
        case 0: {
          this.z();
          const i = this.l();
          return this.A(1, lh), i;
        }
        case 17: {
          const i = t.lexeme;
          if ((this.z(), this.y(9))) {
            const r = this.D();
            if (!this.k.regexParsingWithErrorRecovery) {
              if ((this.z(), r.type !== 10)) throw this.B("REGEX", r);
              const n = r.lexeme,
                o = n.lastIndexOf("/"),
                a = o === n.length - 1 ? void 0 : this.w(n.substring(o + 1));
              let c;
              try {
                c = new RegExp(n.substring(1, o), a);
              } catch {
                throw this.B("REGEX", r);
              }
              return Fo.create(i, c);
            }
            switch (r.type) {
              case 10:
              case 19: {
                const n = [r.lexeme];
                this.z();
                let o = this.D(),
                  a = 0;
                for (let f = 0; f < r.lexeme.length; f++) r.lexeme.charCodeAt(f) === 40 ? a++ : r.lexeme.charCodeAt(f) === 41 && a--;
                for (; !this.E() && o.type !== 15 && o.type !== 16; ) {
                  switch (o.type) {
                    case 0:
                      a++;
                      break;
                    case 1:
                      a--;
                      break;
                    case 10:
                    case 18:
                      for (let f = 0; f < o.lexeme.length; f++) o.lexeme.charCodeAt(f) === 40 ? a++ : r.lexeme.charCodeAt(f) === 41 && a--;
                  }
                  if (a < 0) break;
                  n.push(Zs.getLexeme(o)), this.z(), (o = this.D());
                }
                const c = n.join(""),
                  l = c.lastIndexOf("/"),
                  h = l === c.length - 1 ? void 0 : this.w(c.substring(l + 1));
                let u;
                try {
                  u = new RegExp(c.substring(1, l), h);
                } catch {
                  throw this.B("REGEX", r);
                }
                return Zt.regex(i, u);
              }
              case 18: {
                const n = r.lexeme;
                this.z();
                let o = null;
                if (!Dd(n)) {
                  const a = n.indexOf("/"),
                    c = n.lastIndexOf("/");
                  if (a !== c && a >= 0) {
                    const l = n.slice(a + 1, c),
                      h = n[c + 1] === "i" ? "i" : "";
                    try {
                      o = new RegExp(l, h);
                    } catch {
                      throw this.B("REGEX", r);
                    }
                  }
                }
                if (o === null) throw this.B("REGEX", r);
                return Fo.create(i, o);
              }
              default:
                throw this.B("REGEX", this.D());
            }
          }
          if (this.y(14)) {
            this.A(13, m0);
            const r = this.u();
            return Zt.notIn(i, r);
          }
          switch (this.D().type) {
            case 3: {
              this.z();
              const r = this.u();
              if (this.x().type === 18) return Zt.equals(i, r);
              switch (r) {
                case "true":
                  return Zt.has(i);
                case "false":
                  return Zt.not(i);
                default:
                  return Zt.equals(i, r);
              }
            }
            case 4: {
              this.z();
              const r = this.u();
              if (this.x().type === 18) return Zt.notEquals(i, r);
              switch (r) {
                case "true":
                  return Zt.not(i);
                case "false":
                  return Zt.has(i);
                default:
                  return Zt.notEquals(i, r);
              }
            }
            case 5:
              return this.z(), No.create(i, this.u());
            case 6:
              return this.z(), Co.create(i, this.u());
            case 7:
              return this.z(), Lo.create(i, this.u());
            case 8:
              return this.z(), Oo.create(i, this.u());
            case 13:
              return this.z(), Zt.in(i, this.u());
            default:
              return Zt.has(i);
          }
        }
        case 20:
          throw (this.h.push({ message: y0, offset: t.offset, lexeme: "", additionalInfo: b0 }), wr.c);
        default:
          throw this.B(
            `true | false | KEY 
	| KEY '=~' REGEX 
	| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value`,
            this.D(),
          );
      }
    }
    u() {
      const t = this.D();
      switch (t.type) {
        case 17:
        case 18:
          return this.z(), t.lexeme;
        case 11:
          return this.z(), "true";
        case 12:
          return this.z(), "false";
        case 13:
          return this.z(), "in";
        default:
          return "";
      }
    }
    w(t) {
      return t.replaceAll(this.v, "");
    }
    x() {
      return this.f[this.g - 1];
    }
    y(t) {
      return this.C(t) ? (this.z(), !0) : !1;
    }
    z() {
      return this.E() || this.g++, this.x();
    }
    A(t, i) {
      if (this.C(t)) return this.z();
      throw this.B(i, this.D());
    }
    B(t, i, s) {
      const r = d(1715, null, t, Zs.getLexeme(i)),
        n = i.offset,
        o = Zs.getLexeme(i);
      return this.h.push({ message: r, offset: n, lexeme: o, additionalInfo: s }), wr.c;
    }
    C(t) {
      return this.D().type === t;
    }
    D() {
      return this.f[this.g];
    }
    E() {
      return this.D().type === 20;
    }
  },
  Zt = class {
    static false() {
      return re.INSTANCE;
    }
    static true() {
      return we.INSTANCE;
    }
    static has(e) {
      return Ks.create(e);
    }
    static equals(e, t) {
      return Do.create(e, t);
    }
    static notEquals(e, t) {
      return Ro.create(e, t);
    }
    static regex(e, t) {
      return Fo.create(e, t);
    }
    static in(e, t) {
      return hh.create(e, t);
    }
    static notIn(e, t) {
      return uh.create(e, t);
    }
    static not(e) {
      return tr.create(e);
    }
    static and(...e) {
      return dh.create(e, null, !0);
    }
    static or(...e) {
      return To.create(e, null, !0);
    }
    static greater(e, t) {
      return Lo.create(e, t);
    }
    static greaterEquals(e, t) {
      return Oo.create(e, t);
    }
    static smaller(e, t) {
      return No.create(e, t);
    }
    static smallerEquals(e, t) {
      return Co.create(e, t);
    }
    static {
      this.c = new E0({ regexParsingWithErrorRecovery: !1 });
    }
    static deserialize(e) {
      return e == null ? void 0 : this.c.parse(e);
    }
  };
function Ys(e, t) {
  return e.cmp(t);
}
var re = class Hf {
    static {
      this.INSTANCE = new Hf();
    }
    constructor() {
      this.type = 0;
    }
    cmp(t) {
      return this.type - t.type;
    }
    equals(t) {
      return t.type === this.type;
    }
    substituteConstants() {
      return this;
    }
    evaluate(t) {
      return !1;
    }
    serialize() {
      return "false";
    }
    keys() {
      return [];
    }
    map(t) {
      return this;
    }
    negate() {
      return we.INSTANCE;
    }
  },
  we = class Gf {
    static {
      this.INSTANCE = new Gf();
    }
    constructor() {
      this.type = 1;
    }
    cmp(t) {
      return this.type - t.type;
    }
    equals(t) {
      return t.type === this.type;
    }
    substituteConstants() {
      return this;
    }
    evaluate(t) {
      return !0;
    }
    serialize() {
      return "true";
    }
    keys() {
      return [];
    }
    map(t) {
      return this;
    }
    negate() {
      return re.INSTANCE;
    }
  },
  Ks = class Jf {
    static create(t, i = null) {
      const s = Mt.get(t);
      return typeof s == "boolean" ? (s ? we.INSTANCE : re.INSTANCE) : new Jf(t, i);
    }
    constructor(t, i) {
      (this.key = t), (this.c = i), (this.type = 2);
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : ph(this.key, t.key);
    }
    equals(t) {
      return t.type === this.type ? this.key === t.key : !1;
    }
    substituteConstants() {
      const t = Mt.get(this.key);
      return typeof t == "boolean" ? (t ? we.INSTANCE : re.INSTANCE) : this;
    }
    evaluate(t) {
      return !!t.getValue(this.key);
    }
    serialize() {
      return this.key;
    }
    keys() {
      return [this.key];
    }
    map(t) {
      return t.mapDefined(this.key);
    }
    negate() {
      return this.c || (this.c = tr.create(this.key, this)), this.c;
    }
  },
  Do = class Qf {
    static create(t, i, s = null) {
      if (typeof i == "boolean") return i ? Ks.create(t, s) : tr.create(t, s);
      const r = Mt.get(t);
      return typeof r == "boolean" ? (i === (r ? "true" : "false") ? we.INSTANCE : re.INSTANCE) : new Qf(t, i, s);
    }
    constructor(t, i, s) {
      (this.c = t), (this.d = i), (this.f = s), (this.type = 4);
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : Ui(this.c, this.d, t.c, t.d);
    }
    equals(t) {
      return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
    }
    substituteConstants() {
      const t = Mt.get(this.c);
      if (typeof t == "boolean") {
        const i = t ? "true" : "false";
        return this.d === i ? we.INSTANCE : re.INSTANCE;
      }
      return this;
    }
    evaluate(t) {
      return t.getValue(this.c) == this.d;
    }
    serialize() {
      return `${this.c} == '${this.d}'`;
    }
    keys() {
      return [this.c];
    }
    map(t) {
      return t.mapEquals(this.c, this.d);
    }
    negate() {
      return this.f || (this.f = Ro.create(this.c, this.d, this)), this.f;
    }
  },
  hh = class Xf {
    static create(t, i) {
      return new Xf(t, i);
    }
    constructor(t, i) {
      (this.d = t), (this.f = i), (this.type = 10), (this.c = null);
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : Ui(this.d, this.f, t.d, t.f);
    }
    equals(t) {
      return t.type === this.type ? this.d === t.d && this.f === t.f : !1;
    }
    substituteConstants() {
      return this;
    }
    evaluate(t) {
      const i = t.getValue(this.f),
        s = t.getValue(this.d);
      return Array.isArray(i) ? i.includes(s) : typeof s == "string" && typeof i == "object" && i !== null ? f0.call(i, s) : !1;
    }
    serialize() {
      return `${this.d} in '${this.f}'`;
    }
    keys() {
      return [this.d, this.f];
    }
    map(t) {
      return t.mapIn(this.d, this.f);
    }
    negate() {
      return this.c || (this.c = uh.create(this.d, this.f)), this.c;
    }
  },
  uh = class Zf {
    static create(t, i) {
      return new Zf(t, i);
    }
    constructor(t, i) {
      (this.d = t), (this.f = i), (this.type = 11), (this.c = hh.create(t, i));
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : this.c.cmp(t.c);
    }
    equals(t) {
      return t.type === this.type ? this.c.equals(t.c) : !1;
    }
    substituteConstants() {
      return this;
    }
    evaluate(t) {
      return !this.c.evaluate(t);
    }
    serialize() {
      return `${this.d} not in '${this.f}'`;
    }
    keys() {
      return this.c.keys();
    }
    map(t) {
      return t.mapNotIn(this.d, this.f);
    }
    negate() {
      return this.c;
    }
  },
  Ro = class Yf {
    static create(t, i, s = null) {
      if (typeof i == "boolean") return i ? tr.create(t, s) : Ks.create(t, s);
      const r = Mt.get(t);
      return typeof r == "boolean" ? (i === (r ? "true" : "false") ? re.INSTANCE : we.INSTANCE) : new Yf(t, i, s);
    }
    constructor(t, i, s) {
      (this.c = t), (this.d = i), (this.f = s), (this.type = 5);
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : Ui(this.c, this.d, t.c, t.d);
    }
    equals(t) {
      return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
    }
    substituteConstants() {
      const t = Mt.get(this.c);
      if (typeof t == "boolean") {
        const i = t ? "true" : "false";
        return this.d === i ? re.INSTANCE : we.INSTANCE;
      }
      return this;
    }
    evaluate(t) {
      return t.getValue(this.c) != this.d;
    }
    serialize() {
      return `${this.c} != '${this.d}'`;
    }
    keys() {
      return [this.c];
    }
    map(t) {
      return t.mapNotEquals(this.c, this.d);
    }
    negate() {
      return this.f || (this.f = Do.create(this.c, this.d, this)), this.f;
    }
  },
  tr = class Kf {
    static create(t, i = null) {
      const s = Mt.get(t);
      return typeof s == "boolean" ? (s ? re.INSTANCE : we.INSTANCE) : new Kf(t, i);
    }
    constructor(t, i) {
      (this.c = t), (this.d = i), (this.type = 3);
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : ph(this.c, t.c);
    }
    equals(t) {
      return t.type === this.type ? this.c === t.c : !1;
    }
    substituteConstants() {
      const t = Mt.get(this.c);
      return typeof t == "boolean" ? (t ? re.INSTANCE : we.INSTANCE) : this;
    }
    evaluate(t) {
      return !t.getValue(this.c);
    }
    serialize() {
      return `!${this.c}`;
    }
    keys() {
      return [this.c];
    }
    map(t) {
      return t.mapNot(this.c);
    }
    negate() {
      return this.d || (this.d = Ks.create(this.c, this)), this.d;
    }
  };
function rn(e, t) {
  if (typeof e == "string") {
    const i = parseFloat(e);
    isNaN(i) || (e = i);
  }
  return typeof e == "string" || typeof e == "number" ? t(e) : re.INSTANCE;
}
var Lo = class t1 {
    static create(t, i, s = null) {
      return rn(i, (r) => new t1(t, r, s));
    }
    constructor(t, i, s) {
      (this.c = t), (this.d = i), (this.f = s), (this.type = 12);
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : Ui(this.c, this.d, t.c, t.d);
    }
    equals(t) {
      return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
    }
    substituteConstants() {
      return this;
    }
    evaluate(t) {
      return typeof this.d == "string" ? !1 : parseFloat(t.getValue(this.c)) > this.d;
    }
    serialize() {
      return `${this.c} > ${this.d}`;
    }
    keys() {
      return [this.c];
    }
    map(t) {
      return t.mapGreater(this.c, this.d);
    }
    negate() {
      return this.f || (this.f = Co.create(this.c, this.d, this)), this.f;
    }
  },
  Oo = class e1 {
    static create(t, i, s = null) {
      return rn(i, (r) => new e1(t, r, s));
    }
    constructor(t, i, s) {
      (this.c = t), (this.d = i), (this.f = s), (this.type = 13);
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : Ui(this.c, this.d, t.c, t.d);
    }
    equals(t) {
      return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
    }
    substituteConstants() {
      return this;
    }
    evaluate(t) {
      return typeof this.d == "string" ? !1 : parseFloat(t.getValue(this.c)) >= this.d;
    }
    serialize() {
      return `${this.c} >= ${this.d}`;
    }
    keys() {
      return [this.c];
    }
    map(t) {
      return t.mapGreaterEquals(this.c, this.d);
    }
    negate() {
      return this.f || (this.f = No.create(this.c, this.d, this)), this.f;
    }
  },
  No = class i1 {
    static create(t, i, s = null) {
      return rn(i, (r) => new i1(t, r, s));
    }
    constructor(t, i, s) {
      (this.c = t), (this.d = i), (this.f = s), (this.type = 14);
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : Ui(this.c, this.d, t.c, t.d);
    }
    equals(t) {
      return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
    }
    substituteConstants() {
      return this;
    }
    evaluate(t) {
      return typeof this.d == "string" ? !1 : parseFloat(t.getValue(this.c)) < this.d;
    }
    serialize() {
      return `${this.c} < ${this.d}`;
    }
    keys() {
      return [this.c];
    }
    map(t) {
      return t.mapSmaller(this.c, this.d);
    }
    negate() {
      return this.f || (this.f = Oo.create(this.c, this.d, this)), this.f;
    }
  },
  Co = class s1 {
    static create(t, i, s = null) {
      return rn(i, (r) => new s1(t, r, s));
    }
    constructor(t, i, s) {
      (this.c = t), (this.d = i), (this.f = s), (this.type = 15);
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : Ui(this.c, this.d, t.c, t.d);
    }
    equals(t) {
      return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
    }
    substituteConstants() {
      return this;
    }
    evaluate(t) {
      return typeof this.d == "string" ? !1 : parseFloat(t.getValue(this.c)) <= this.d;
    }
    serialize() {
      return `${this.c} <= ${this.d}`;
    }
    keys() {
      return [this.c];
    }
    map(t) {
      return t.mapSmallerEquals(this.c, this.d);
    }
    negate() {
      return this.f || (this.f = Lo.create(this.c, this.d, this)), this.f;
    }
  },
  Fo = class r1 {
    static create(t, i) {
      return new r1(t, i);
    }
    constructor(t, i) {
      (this.d = t), (this.f = i), (this.type = 7), (this.c = null);
    }
    cmp(t) {
      if (t.type !== this.type) return this.type - t.type;
      if (this.d < t.d) return -1;
      if (this.d > t.d) return 1;
      const i = this.f ? this.f.source : "",
        s = t.f ? t.f.source : "";
      return i < s ? -1 : i > s ? 1 : 0;
    }
    equals(t) {
      if (t.type === this.type) {
        const i = this.f ? this.f.source : "",
          s = t.f ? t.f.source : "";
        return this.d === t.d && i === s;
      }
      return !1;
    }
    substituteConstants() {
      return this;
    }
    evaluate(t) {
      const i = t.getValue(this.d);
      return this.f ? this.f.test(i) : !1;
    }
    serialize() {
      const t = this.f ? `/${this.f.source}/${this.f.flags}` : "/invalid/";
      return `${this.d} =~ ${t}`;
    }
    keys() {
      return [this.d];
    }
    map(t) {
      return t.mapRegex(this.d, this.f);
    }
    negate() {
      return this.c || (this.c = x0.create(this)), this.c;
    }
  },
  x0 = class lc {
    static create(t) {
      return new lc(t);
    }
    constructor(t) {
      (this.c = t), (this.type = 8);
    }
    cmp(t) {
      return t.type !== this.type ? this.type - t.type : this.c.cmp(t.c);
    }
    equals(t) {
      return t.type === this.type ? this.c.equals(t.c) : !1;
    }
    substituteConstants() {
      return this;
    }
    evaluate(t) {
      return !this.c.evaluate(t);
    }
    serialize() {
      return `!(${this.c.serialize()})`;
    }
    keys() {
      return this.c.keys();
    }
    map(t) {
      return new lc(this.c.map(t));
    }
    negate() {
      return this.c;
    }
  };
function fh(e) {
  let t = null;
  for (let i = 0, s = e.length; i < s; i++) {
    const r = e[i].substituteConstants();
    if (e[i] !== r && t === null) {
      t = [];
      for (let n = 0; n < i; n++) t[n] = e[n];
    }
    t !== null && (t[i] = r);
  }
  return t === null ? e : t;
}
var dh = class Is {
    static create(t, i, s) {
      return Is.d(t, i, s);
    }
    constructor(t, i) {
      (this.expr = t), (this.c = i), (this.type = 6);
    }
    cmp(t) {
      if (t.type !== this.type) return this.type - t.type;
      if (this.expr.length < t.expr.length) return -1;
      if (this.expr.length > t.expr.length) return 1;
      for (let i = 0, s = this.expr.length; i < s; i++) {
        const r = Ys(this.expr[i], t.expr[i]);
        if (r !== 0) return r;
      }
      return 0;
    }
    equals(t) {
      if (t.type === this.type) {
        if (this.expr.length !== t.expr.length) return !1;
        for (let i = 0, s = this.expr.length; i < s; i++) if (!this.expr[i].equals(t.expr[i])) return !1;
        return !0;
      }
      return !1;
    }
    substituteConstants() {
      const t = fh(this.expr);
      return t === this.expr ? this : Is.create(t, this.c, !1);
    }
    evaluate(t) {
      for (let i = 0, s = this.expr.length; i < s; i++) if (!this.expr[i].evaluate(t)) return !1;
      return !0;
    }
    static d(t, i, s) {
      const r = [];
      let n = !1;
      for (const o of t)
        if (o) {
          if (o.type === 1) {
            n = !0;
            continue;
          }
          if (o.type === 0) return re.INSTANCE;
          if (o.type === 6) {
            r.push(...o.expr);
            continue;
          }
          r.push(o);
        }
      if (r.length === 0 && n) return we.INSTANCE;
      if (r.length !== 0) {
        if (r.length === 1) return r[0];
        r.sort(Ys);
        for (let o = 1; o < r.length; o++) r[o - 1].equals(r[o]) && (r.splice(o, 1), o--);
        if (r.length === 1) return r[0];
        for (; r.length > 1; ) {
          const o = r[r.length - 1];
          if (o.type !== 9) break;
          r.pop();
          const a = r.pop(),
            c = r.length === 0,
            l = To.create(
              o.expr.map((h) => Is.create([h, a], null, s)),
              null,
              c,
            );
          l && (r.push(l), r.sort(Ys));
        }
        if (r.length === 1) return r[0];
        if (s) {
          for (let o = 0; o < r.length; o++) for (let a = o + 1; a < r.length; a++) if (r[o].negate().equals(r[a])) return re.INSTANCE;
          if (r.length === 1) return r[0];
        }
        return new Is(r, i);
      }
    }
    serialize() {
      return this.expr.map((t) => t.serialize()).join(" && ");
    }
    keys() {
      const t = [];
      for (const i of this.expr) t.push(...i.keys());
      return t;
    }
    map(t) {
      return new Is(
        this.expr.map((i) => i.map(t)),
        null,
      );
    }
    negate() {
      if (!this.c) {
        const t = [];
        for (const i of this.expr) t.push(i.negate());
        this.c = To.create(t, this, !0);
      }
      return this.c;
    }
  },
  To = class Hi {
    static create(t, i, s) {
      return Hi.d(t, i, s);
    }
    constructor(t, i) {
      (this.expr = t), (this.c = i), (this.type = 9);
    }
    cmp(t) {
      if (t.type !== this.type) return this.type - t.type;
      if (this.expr.length < t.expr.length) return -1;
      if (this.expr.length > t.expr.length) return 1;
      for (let i = 0, s = this.expr.length; i < s; i++) {
        const r = Ys(this.expr[i], t.expr[i]);
        if (r !== 0) return r;
      }
      return 0;
    }
    equals(t) {
      if (t.type === this.type) {
        if (this.expr.length !== t.expr.length) return !1;
        for (let i = 0, s = this.expr.length; i < s; i++) if (!this.expr[i].equals(t.expr[i])) return !1;
        return !0;
      }
      return !1;
    }
    substituteConstants() {
      const t = fh(this.expr);
      return t === this.expr ? this : Hi.create(t, this.c, !1);
    }
    evaluate(t) {
      for (let i = 0, s = this.expr.length; i < s; i++) if (this.expr[i].evaluate(t)) return !0;
      return !1;
    }
    static d(t, i, s) {
      let r = [],
        n = !1;
      if (t) {
        for (let o = 0, a = t.length; o < a; o++) {
          const c = t[o];
          if (c) {
            if (c.type === 0) {
              n = !0;
              continue;
            }
            if (c.type === 1) return we.INSTANCE;
            if (c.type === 9) {
              r = r.concat(c.expr);
              continue;
            }
            r.push(c);
          }
        }
        if (r.length === 0 && n) return re.INSTANCE;
        r.sort(Ys);
      }
      if (r.length !== 0) {
        if (r.length === 1) return r[0];
        for (let o = 1; o < r.length; o++) r[o - 1].equals(r[o]) && (r.splice(o, 1), o--);
        if (r.length === 1) return r[0];
        if (s) {
          for (let o = 0; o < r.length; o++) for (let a = o + 1; a < r.length; a++) if (r[o].negate().equals(r[a])) return we.INSTANCE;
          if (r.length === 1) return r[0];
        }
        return new Hi(r, i);
      }
    }
    serialize() {
      return this.expr.map((t) => t.serialize()).join(" || ");
    }
    keys() {
      const t = [];
      for (const i of this.expr) t.push(...i.keys());
      return t;
    }
    map(t) {
      return new Hi(
        this.expr.map((i) => i.map(t)),
        null,
      );
    }
    negate() {
      if (!this.c) {
        const t = [];
        for (const i of this.expr) t.push(i.negate());
        for (; t.length > 1; ) {
          const i = t.shift(),
            s = t.shift(),
            r = [];
          for (const n of gh(i)) for (const o of gh(s)) r.push(dh.create([n, o], null, !1));
          t.unshift(Hi.create(r, null, !1));
        }
        this.c = Hi.create(t, this, !0);
      }
      return this.c;
    }
  },
  S0 = class Tn extends Ks {
    static {
      this.d = [];
    }
    static all() {
      return Tn.d.values();
    }
    constructor(t, i, s) {
      super(t, null), (this.f = i), typeof s == "object" ? Tn.d.push({ ...s, key: t }) : s !== !0 && Tn.d.push({ key: t, description: s, type: i != null ? typeof i : void 0 });
    }
    bindTo(t) {
      return t.createKey(this.key, this.f);
    }
    getValue(t) {
      return t.getContextKeyValue(this.key);
    }
    toNegated() {
      return this.negate();
    }
    isEqualTo(t) {
      return Do.create(this.key, t);
    }
    notEqualsTo(t) {
      return Ro.create(this.key, t);
    }
  },
  H7 = ct("contextKeyService");
function ph(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Ui(e, t, i, s) {
  return e < i ? -1 : e > i ? 1 : t < s ? -1 : t > s ? 1 : 0;
}
function gh(e) {
  return e.type === 9 ? e.expr : [e];
}
var ht = ct("logService"),
  $0 = ct("loggerService"),
  C;
(function (e) {
  (e[(e.Off = 0)] = "Off"), (e[(e.Trace = 1)] = "Trace"), (e[(e.Debug = 2)] = "Debug"), (e[(e.Info = 3)] = "Info"), (e[(e.Warning = 4)] = "Warning"), (e[(e.Error = 5)] = "Error");
})(C || (C = {}));
var Mo = C.Info;
function hs(e, t = !1) {
  let i = "";
  for (let s = 0; s < e.length; s++) {
    let r = e[s];
    if ((r instanceof Error && (r = gi(r, t)), typeof r == "object"))
      try {
        r = JSON.stringify(r);
      } catch {}
    i += (s > 0 ? " " : "") + r;
  }
  return i;
}
var _o = class extends G {
    constructor() {
      super(...arguments), (this.b = Mo), (this.c = this.B(new O())), (this.onDidChangeLogLevel = this.c.event);
    }
    setLevel(e) {
      this.b !== e && ((this.b = e), this.c.fire(this.b));
    }
    getLevel() {
      return this.b;
    }
    f(e) {
      return this.b !== C.Off && this.b <= e;
    }
  },
  I0 = class extends _o {
    constructor(e) {
      super(), (this.h = e);
    }
    f(e) {
      return this.h || super.f(e);
    }
    trace(e, ...t) {
      this.f(C.Trace) && this.g(C.Trace, hs([e, ...t], !0));
    }
    debug(e, ...t) {
      this.f(C.Debug) && this.g(C.Debug, hs([e, ...t]));
    }
    info(e, ...t) {
      this.f(C.Info) && this.g(C.Info, hs([e, ...t]));
    }
    warn(e, ...t) {
      this.f(C.Warning) && this.g(C.Warning, hs([e, ...t]));
    }
    error(e, ...t) {
      if (this.f(C.Error))
        if (e instanceof Error) {
          const i = Array.prototype.slice.call(arguments);
          (i[0] = e.stack), this.g(C.Error, hs(i));
        } else this.g(C.Error, hs([e, ...t]));
    }
    flush() {}
  },
  us = class extends _o {
    constructor(e = Mo, t = !0) {
      super(), (this.g = t), this.setLevel(e);
    }
    trace(e, ...t) {
      this.f(C.Trace) && (this.g ? console.log("%cTRACE", "color: #888", e, ...t) : console.log(e, ...t));
    }
    debug(e, ...t) {
      this.f(C.Debug) && (this.g ? console.log("%cDEBUG", "background: #eee; color: #888", e, ...t) : console.log(e, ...t));
    }
    info(e, ...t) {
      this.f(C.Info) && (this.g ? console.log("%c INFO", "color: #33f", e, ...t) : console.log(e, ...t));
    }
    warn(e, ...t) {
      this.f(C.Warning) && (this.g ? console.log("%c WARN", "color: #993", e, ...t) : console.log(e, ...t));
    }
    error(e, ...t) {
      this.f(C.Error) && (this.g ? console.log("%c  ERR", "color: #f33", e, ...t) : console.error(e, ...t));
    }
    flush() {}
  },
  P0 = class extends _o {
    constructor(e) {
      super(), (this.g = e), e.length && this.setLevel(e[0].getLevel());
    }
    setLevel(e) {
      for (const t of this.g) t.setLevel(e);
      super.setLevel(e);
    }
    trace(e, ...t) {
      for (const i of this.g) i.trace(e, ...t);
    }
    debug(e, ...t) {
      for (const i of this.g) i.debug(e, ...t);
    }
    info(e, ...t) {
      for (const i of this.g) i.info(e, ...t);
    }
    warn(e, ...t) {
      for (const i of this.g) i.warn(e, ...t);
    }
    error(e, ...t) {
      for (const i of this.g) i.error(e, ...t);
    }
    flush() {
      for (const e of this.g) e.flush();
    }
    dispose() {
      for (const e of this.g) e.dispose();
      super.dispose();
    }
  },
  k0 = class extends G {
    constructor(e, t, i) {
      if (
        (super(),
        (this.h = e),
        (this.j = t),
        (this.b = new Qt()),
        (this.c = this.B(new O())),
        (this.onDidChangeLoggers = this.c.event),
        (this.f = this.B(new O())),
        (this.onDidChangeLogLevel = this.f.event),
        (this.g = this.B(new O())),
        (this.onDidChangeVisibility = this.g.event),
        i)
      )
        for (const s of i) this.b.set(s.resource, { logger: void 0, info: s });
    }
    m(e) {
      return zt(e) ? [...this.b.values()].find((t) => t.info.id === e) : this.b.get(e);
    }
    getLogger(e) {
      return this.m(e)?.logger;
    }
    createLogger(e, t) {
      const i = this.n(e),
        s = zt(e) ? e : (t?.id ?? ls(i.toString()).toString(16));
      let r = this.b.get(i)?.logger;
      const n = t?.logLevel === "always" ? C.Trace : t?.logLevel;
      r || (r = this.s(i, n ?? this.getLogLevel(i) ?? this.h, { ...t, id: s }));
      const o = { logger: r, info: { resource: i, id: s, logLevel: n, name: t?.name, hidden: t?.hidden, extensionId: t?.extensionId, when: t?.when } };
      return this.registerLogger(o.info), this.b.set(i, o), r;
    }
    n(e) {
      return zt(e) ? V(this.j, `${e}.log`) : e;
    }
    setLogLevel(e, t) {
      if (I.isUri(e)) {
        const i = e,
          s = t,
          r = this.b.get(i);
        r && s !== r.info.logLevel && ((r.info.logLevel = s === this.h ? void 0 : s), r.logger?.setLevel(s), this.b.set(r.info.resource, r), this.f.fire([i, s]));
      } else {
        this.h = e;
        for (const [i, s] of this.b.entries()) this.b.get(i)?.info.logLevel === void 0 && s.logger?.setLevel(this.h);
        this.f.fire(this.h);
      }
    }
    setVisibility(e, t) {
      const i = this.m(e);
      i && t !== !i.info.hidden && ((i.info.hidden = !t), this.b.set(i.info.resource, i), this.g.fire([i.info.resource, t]));
    }
    getLogLevel(e) {
      let t;
      return e && (t = this.b.get(e)?.info.logLevel), t ?? this.h;
    }
    registerLogger(e) {
      const t = this.b.get(e.resource);
      t ? t.info.hidden !== e.hidden && this.setVisibility(e.resource, !e.hidden) : (this.b.set(e.resource, { info: e, logger: void 0 }), this.c.fire({ added: [e], removed: [] }));
    }
    deregisterLogger(e) {
      const t = this.b.get(e);
      t && (t.logger && t.logger.dispose(), this.b.delete(e), this.c.fire({ added: [], removed: [t.info] }));
    }
    *getRegisteredLoggers() {
      for (const e of this.b.values()) yield e.info;
    }
    getRegisteredLogger(e) {
      return this.b.get(e)?.info;
    }
    dispose() {
      this.b.forEach((e) => e.logger?.dispose()), this.b.clear(), super.dispose();
    }
  },
  A0 = class {
    constructor() {
      this.onDidChangeLogLevel = new O().event;
    }
    setLevel(e) {}
    getLevel() {
      return C.Info;
    }
    trace(e, ...t) {}
    debug(e, ...t) {}
    info(e, ...t) {}
    warn(e, ...t) {}
    error(e, ...t) {}
    critical(e, ...t) {}
    dispose() {}
    flush() {}
  },
  D0 = class extends A0 {};
function R0(e) {
  if (e.verbose) return C.Trace;
  if (typeof e.logLevel == "string") {
    const t = O0(e.logLevel.toLowerCase());
    if (t !== void 0) return t;
  }
  return Mo;
}
function L0(e) {
  switch (e) {
    case C.Trace:
      return "trace";
    case C.Debug:
      return "debug";
    case C.Info:
      return "info";
    case C.Warning:
      return "warn";
    case C.Error:
      return "error";
    case C.Off:
      return "off";
  }
}
function O0(e) {
  switch (e) {
    case "trace":
      return C.Trace;
    case "debug":
      return C.Debug;
    case "info":
      return C.Info;
    case "warn":
      return C.Warning;
    case "error":
      return C.Error;
    case "critical":
      return C.Error;
    case "off":
      return C.Off;
  }
}
var G7 = new S0("logLevel", L0(C.Info)),
  mh = ct("policy"),
  wh = class extends G {
    constructor() {
      super(...arguments), (this.f = {}), (this.g = new Map()), (this.h = this.B(new O())), (this.onDidChange = this.h.event);
    }
    async updatePolicyDefinitions(e) {
      const t = Object.keys(this.f).length;
      return (this.f = { ...e, ...this.f }), t !== Object.keys(this.f).length && (await this.j(e)), Di.reduce(this.g.entries(), (i, [s, r]) => ({ ...i, [s]: r }), {});
    }
    getPolicyValue(e) {
      return this.g.get(e);
    }
    serialize() {
      return Di.reduce(Object.entries(this.f), (e, [t, i]) => ({ ...e, [t]: { definition: i, value: this.g.get(t) } }), {});
    }
  },
  vh = class {
    constructor() {
      this.onDidChange = at.None;
    }
    async updatePolicyDefinitions() {
      return {};
    }
    getPolicyValue() {}
    serialize() {}
  },
  N0 = class extends G {
    get configurationModel() {
      return this.b;
    }
    constructor(e) {
      super(), (this.c = e), (this.a = this.B(new O())), (this.onDidChangeConfiguration = this.a.event), (this.b = Ot.createEmptyModel(this.c));
    }
    async initialize() {
      return this.h(), this.B(Ee.as(Fe.Configuration).onDidUpdateConfiguration(({ properties: e, defaultsOverrides: t }) => this.f(Array.from(e), t))), this.configurationModel;
    }
    reload() {
      return this.h(), this.configurationModel;
    }
    f(e, t) {
      this.j(e, Ee.as(Fe.Configuration).getConfigurationProperties()), this.a.fire({ defaults: this.configurationModel, properties: e });
    }
    g() {
      return {};
    }
    h() {
      this.b = Ot.createEmptyModel(this.c);
      const e = Ee.as(Fe.Configuration).getConfigurationProperties();
      this.j(Object.keys(e), e);
    }
    j(e, t) {
      const i = this.g();
      for (const s of e) {
        const r = i[s],
          n = t[s];
        r !== void 0 ? this.b.setValue(s, r) : n ? this.b.setValue(s, n.default) : this.b.removeValue(s);
      }
    }
  },
  C0 = class {
    constructor() {
      (this.onDidChangeConfiguration = at.None), (this.configurationModel = Ot.createEmptyModel(new D0()));
    }
    async initialize() {
      return this.configurationModel;
    }
  },
  Uo = class extends G {
    get configurationModel() {
      return this.b;
    }
    constructor(t, i, s) {
      super(), (this.c = t), (this.f = i), (this.g = s), (this.a = this.B(new O())), (this.onDidChangeConfiguration = this.a.event), (this.b = Ot.createEmptyModel(this.g));
    }
    async initialize() {
      return (
        this.g.trace("PolicyConfiguration#initialize"),
        this.m(await this.h(this.c.configurationModel.keys), !1),
        this.B(this.f.onDidChange((t) => this.j(t))),
        this.B(this.c.onDidChangeConfiguration(async ({ properties: t }) => this.m(await this.h(t), !0))),
        this.b
      );
    }
    async h(t) {
      this.g.trace("PolicyConfiguration#updatePolicyDefinitions", t);
      const i = {},
        s = [],
        r = Ee.as(Fe.Configuration).getConfigurationProperties();
      for (const n of t) {
        const o = r[n];
        if (!o) {
          s.push(n);
          continue;
        }
        if (o.policy) {
          if (o.type !== "string" && o.type !== "number") {
            this.g.warn(`Policy ${o.policy.name} has unsupported type ${o.type}`);
            continue;
          }
          s.push(n), (i[o.policy.name] = { type: o.type });
        }
      }
      return no(i) || (await this.f.updatePolicyDefinitions(i)), s;
    }
    j(t) {
      this.g.trace("PolicyConfiguration#onDidChangePolicies", t);
      const i = Ee.as(Fe.Configuration).getPolicyConfigurations(),
        s = Yi(t.map((r) => i.get(r)));
      this.m(s, !0);
    }
    m(t, i) {
      this.g.trace("PolicyConfiguration#update", t);
      const s = Ee.as(Fe.Configuration).getConfigurationProperties(),
        r = [],
        n = this.b.isEmpty();
      for (const o of t) {
        const a = s[o]?.policy?.name;
        if (a) {
          const c = this.f.getPolicyValue(a);
          (n ? c !== void 0 : !ze(this.b.getValue(o), c)) && r.push([o, c]);
        } else this.b.getValue(o) !== void 0 && r.push([o, void 0]);
      }
      if (r.length) {
        this.g.trace("PolicyConfiguration#changed", r);
        const o = this.b;
        this.b = Ot.createEmptyModel(this.g);
        for (const a of o.keys) this.b.setValue(a, o.getValue(a));
        for (const [a, c] of r) c === void 0 ? this.b.removeValue(a) : this.b.setValue(a, c);
        i && this.a.fire(this.b);
      }
    }
  };
Uo = __decorate([__param(1, mh), __param(2, ht)], Uo);
var F0 = class extends G {
    constructor(e, t, i, s) {
      super(),
        (this.m = e),
        (this.n = s),
        (this.h = this.B(new O())),
        (this.onDidChangeConfiguration = this.h.event),
        (this.b = this.B(new N0(s))),
        (this.c = i instanceof vh ? new C0() : this.B(new Uo(this.b, i, s))),
        (this.f = this.B(new r0(this.m, {}, co, t, s))),
        (this.a = new Io(this.b.configurationModel, this.c.configurationModel, Ot.createEmptyModel(s), Ot.createEmptyModel(s), Ot.createEmptyModel(s), Ot.createEmptyModel(s), new Qt(), Ot.createEmptyModel(s), new Qt(), s)),
        (this.j = new T0(e, t, this)),
        (this.g = this.B(new Vr(() => this.reloadConfiguration(), 50))),
        this.B(this.b.onDidChangeConfiguration(({ defaults: r, properties: n }) => this.s(r, n))),
        this.B(this.c.onDidChangeConfiguration((r) => this.t(r))),
        this.B(this.f.onDidChange(() => this.g.schedule()));
    }
    async initialize() {
      const [e, t, i] = await Promise.all([this.b.initialize(), this.c.initialize(), this.f.loadConfiguration()]);
      this.a = new Io(e, t, Ot.createEmptyModel(this.n), i, Ot.createEmptyModel(this.n), Ot.createEmptyModel(this.n), new Qt(), Ot.createEmptyModel(this.n), new Qt(), this.n);
    }
    getConfigurationData() {
      return this.a.toData();
    }
    getValue(e, t) {
      const i = typeof e == "string" ? e : void 0;
      switch (i) {
        case "window.titleBarStyle":
          return "custom";
      }
      const s = fo(e) ? e : fo(t) ? t : {};
      return this.a.getValue(i, s, void 0);
    }
    async updateValue(e, t, i, s, r) {
      const n = yp(i) ? i : fo(i) ? { resource: i.resource, overrideIdentifiers: i.overrideIdentifier ? [i.overrideIdentifier] : void 0 } : void 0,
        o = n ? s : i;
      if (o !== void 0 && o !== 3 && o !== 2) throw new Error(`Unable to write ${e} to target ${o}.`);
      n?.overrideIdentifiers && ((n.overrideIdentifiers = li(n.overrideIdentifiers)), (n.overrideIdentifiers = n.overrideIdentifiers.length ? n.overrideIdentifiers : void 0));
      const a = this.inspect(e, { resource: n?.resource, overrideIdentifier: n?.overrideIdentifiers ? n.overrideIdentifiers[0] : void 0 });
      if (a.policyValue !== void 0) throw new Error(`Unable to write ${e} because it is configured in system policy.`);
      if ((ze(t, a.defaultValue) && (t = void 0), n?.overrideIdentifiers?.length && n.overrideIdentifiers.length > 1)) {
        const l = n.overrideIdentifiers.sort(),
          h = this.a.localUserConfiguration.overrides.find((u) => Zi([...u.identifiers].sort(), l));
        h && (n.overrideIdentifiers = h.identifiers);
      }
      const c = n?.overrideIdentifiers?.length ? [e0(n.overrideIdentifiers), e] : [e];
      await this.j.write(c, t), await this.reloadConfiguration();
    }
    inspect(e, t = {}) {
      return this.a.inspect(e, t, void 0);
    }
    keys() {
      return this.a.keys(void 0);
    }
    async reloadConfiguration() {
      const e = await this.f.loadConfiguration();
      this.r(e);
    }
    r(e) {
      const t = this.a.toData(),
        i = this.a.compareAndUpdateLocalUserConfiguration(e);
      this.u(i, t, 2);
    }
    s(e, t) {
      const i = this.a.toData(),
        s = this.a.compareAndUpdateDefaultConfiguration(e, t);
      this.u(s, i, 7);
    }
    t(e) {
      const t = this.a.toData(),
        i = this.a.compareAndUpdatePolicyConfiguration(e);
      this.u(i, t, 7);
    }
    u(e, t, i) {
      const s = new o0(e, { data: t }, this.a, void 0, this.n);
      (s.source = i), this.h.fire(s);
    }
  },
  T0 = class {
    constructor(e, t, i) {
      (this.b = e), (this.c = t), (this.d = i), (this.a = new Bs());
    }
    write(e, t) {
      return this.a.queue(() => this.e(e, t));
    }
    async e(e, t) {
      let i;
      try {
        i = (await this.c.readFile(this.b)).value.toString();
      } catch (n) {
        if (n.fileOperationResult === 1) i = "{}";
        else throw n;
      }
      const s = [];
      if ((qs(i, s, { allowTrailingComma: !0, allowEmptyContent: !0 }), s.length > 0)) throw new Error("Unable to write into the settings file. Please open the file to correct errors/warnings in the file and try again.");
      const r = this.f(i, e, t);
      (i = Wp(i, r)), await this.c.writeFile(this.b, B.fromString(i));
    }
    f(e, t, i) {
      const { tabSize: s, insertSpaces: r, eol: n } = this.h;
      if (!t.length) {
        const o = JSON.stringify(i, null, r ? " ".repeat(s) : "	");
        return [{ content: o, length: o.length, offset: 0 }];
      }
      return qp(e, t, i, { tabSize: s, insertSpaces: r, eol: n });
    }
    get h() {
      if (!this.g) {
        let e =
          Yn === 3 || Yn === 2
            ? `
`
            : `\r
`;
        const t = this.d.getValue("files.eol", { overrideIdentifier: "jsonc" });
        t && typeof t == "string" && t !== "auto" && (e = t),
          (this.g = { eol: e, insertSpaces: !!this.d.getValue("editor.insertSpaces", { overrideIdentifier: "jsonc" }), tabSize: this.d.getValue("editor.tabSize", { overrideIdentifier: "jsonc" }) });
      }
      return this.g;
    }
  },
  yh = ct("downloadService"),
  M0 = class {
    constructor() {
      (this.b = ""), (this.c = 0);
    }
    reset(e) {
      return (this.b = e), (this.c = 0), this;
    }
    next() {
      return (this.c += 1), this;
    }
    hasNext() {
      return this.c < this.b.length - 1;
    }
    cmp(e) {
      const t = e.charCodeAt(0),
        i = this.b.charCodeAt(this.c);
      return t - i;
    }
    value() {
      return this.b[this.c];
    }
  },
  _0 = class {
    constructor(e = !0) {
      this.e = e;
    }
    reset(e) {
      return (this.b = e), (this.c = 0), (this.d = 0), this.next();
    }
    hasNext() {
      return this.d < this.b.length;
    }
    next() {
      this.c = this.d;
      let e = !0;
      for (; this.d < this.b.length; this.d++)
        if (this.b.charCodeAt(this.d) === 46)
          if (e) this.c++;
          else break;
        else e = !1;
      return this;
    }
    cmp(e) {
      return this.e ? so(e, this.b, 0, e.length, this.c, this.d) : _s(e, this.b, 0, e.length, this.c, this.d);
    }
    value() {
      return this.b.substring(this.c, this.d);
    }
  },
  bh = class {
    constructor(e = !0, t = !0) {
      (this.f = e), (this.g = t);
    }
    reset(e) {
      (this.d = 0), (this.e = 0), (this.b = e), (this.c = e.length);
      for (let t = e.length - 1; t >= 0; t--, this.c--) {
        const i = this.b.charCodeAt(t);
        if (!(i === 47 || (this.f && i === 92))) break;
      }
      return this.next();
    }
    hasNext() {
      return this.e < this.c;
    }
    next() {
      this.d = this.e;
      let e = !0;
      for (; this.e < this.c; this.e++) {
        const t = this.b.charCodeAt(this.e);
        if (t === 47 || (this.f && t === 92))
          if (e) this.d++;
          else break;
        else e = !1;
      }
      return this;
    }
    cmp(e) {
      return this.g ? so(e, this.b, 0, e.length, this.d, this.e) : _s(e, this.b, 0, e.length, this.d, this.e);
    }
    value() {
      return this.b.substring(this.d, this.e);
    }
  },
  Eh;
(function (e) {
  (e[(e.Scheme = 1)] = "Scheme"), (e[(e.Authority = 2)] = "Authority"), (e[(e.Path = 3)] = "Path"), (e[(e.Query = 4)] = "Query"), (e[(e.Fragment = 5)] = "Fragment");
})(Eh || (Eh = {}));
var U0 = class {
    constructor(e, t) {
      (this.f = e), (this.g = t), (this.d = []), (this.e = 0);
    }
    reset(e) {
      return (
        (this.c = e),
        (this.d = []),
        this.c.scheme && this.d.push(1),
        this.c.authority && this.d.push(2),
        this.c.path && ((this.b = new bh(!1, !this.f(e))), this.b.reset(e.path), this.b.value() && this.d.push(3)),
        this.g(e) || (this.c.query && this.d.push(4), this.c.fragment && this.d.push(5)),
        (this.e = 0),
        this
      );
    }
    next() {
      return this.d[this.e] === 3 && this.b.hasNext() ? this.b.next() : (this.e += 1), this;
    }
    hasNext() {
      return (this.d[this.e] === 3 && this.b.hasNext()) || this.e < this.d.length - 1;
    }
    cmp(e) {
      if (this.d[this.e] === 1) return ro(e, this.c.scheme);
      if (this.d[this.e] === 2) return ro(e, this.c.authority);
      if (this.d[this.e] === 3) return this.b.cmp(e);
      if (this.d[this.e] === 4) return io(e, this.c.query);
      if (this.d[this.e] === 5) return io(e, this.c.fragment);
      throw new Error();
    }
    value() {
      if (this.d[this.e] === 1) return this.c.scheme;
      if (this.d[this.e] === 2) return this.c.authority;
      if (this.d[this.e] === 3) return this.b.value();
      if (this.d[this.e] === 4) return this.c.query;
      if (this.d[this.e] === 5) return this.c.fragment;
      throw new Error();
    }
  },
  nn = class {
    constructor() {
      this.height = 1;
    }
    isEmpty() {
      return !this.left && !this.mid && !this.right && !this.value;
    }
    rotateLeft() {
      const e = this.right;
      return (this.right = e.left), (e.left = this), this.updateHeight(), e.updateHeight(), e;
    }
    rotateRight() {
      const e = this.left;
      return (this.left = e.right), (e.right = this), this.updateHeight(), e.updateHeight(), e;
    }
    updateHeight() {
      this.height = 1 + Math.max(this.heightLeft, this.heightRight);
    }
    balanceFactor() {
      return this.heightRight - this.heightLeft;
    }
    get heightLeft() {
      return this.left?.height ?? 0;
    }
    get heightRight() {
      return this.right?.height ?? 0;
    }
  },
  xh;
(function (e) {
  (e[(e.Left = -1)] = "Left"), (e[(e.Mid = 0)] = "Mid"), (e[(e.Right = 1)] = "Right");
})(xh || (xh = {}));
var fs = class vr {
    static forUris(t = () => !1, i = () => !1) {
      return new vr(new U0(t, i));
    }
    static forPaths(t = !1) {
      return new vr(new bh(void 0, !t));
    }
    static forStrings() {
      return new vr(new M0());
    }
    static forConfigKeys() {
      return new vr(new _0());
    }
    constructor(t) {
      this.b = t;
    }
    clear() {
      this.c = void 0;
    }
    fill(t, i) {
      if (i) {
        const s = i.slice(0);
        Ic(s);
        for (const r of s) this.set(r, t);
      } else {
        const s = t.slice(0);
        Ic(s);
        for (const r of s) this.set(r[0], r[1]);
      }
    }
    set(t, i) {
      const s = this.b.reset(t);
      let r;
      this.c || ((this.c = new nn()), (this.c.segment = s.value()));
      const n = [];
      for (r = this.c; ; ) {
        const a = s.cmp(r.segment);
        if (a > 0) r.left || ((r.left = new nn()), (r.left.segment = s.value())), n.push([-1, r]), (r = r.left);
        else if (a < 0) r.right || ((r.right = new nn()), (r.right.segment = s.value())), n.push([1, r]), (r = r.right);
        else if (s.hasNext()) s.next(), r.mid || ((r.mid = new nn()), (r.mid.segment = s.value())), n.push([0, r]), (r = r.mid);
        else break;
      }
      const o = r.value;
      (r.value = i), (r.key = t);
      for (let a = n.length - 1; a >= 0; a--) {
        const c = n[a][1];
        c.updateHeight();
        const l = c.balanceFactor();
        if (l < -1 || l > 1) {
          const h = n[a][0],
            u = n[a + 1][0];
          if (h === 1 && u === 1) n[a][1] = c.rotateLeft();
          else if (h === -1 && u === -1) n[a][1] = c.rotateRight();
          else if (h === 1 && u === -1) (c.right = n[a + 1][1] = n[a + 1][1].rotateRight()), (n[a][1] = c.rotateLeft());
          else if (h === -1 && u === 1) (c.left = n[a + 1][1] = n[a + 1][1].rotateLeft()), (n[a][1] = c.rotateRight());
          else throw new Error();
          if (a > 0)
            switch (n[a - 1][0]) {
              case -1:
                n[a - 1][1].left = n[a][1];
                break;
              case 1:
                n[a - 1][1].right = n[a][1];
                break;
              case 0:
                n[a - 1][1].mid = n[a][1];
                break;
            }
          else this.c = n[0][1];
        }
      }
      return o;
    }
    get(t) {
      return this.d(t)?.value;
    }
    d(t) {
      const i = this.b.reset(t);
      let s = this.c;
      for (; s; ) {
        const r = i.cmp(s.segment);
        if (r > 0) s = s.left;
        else if (r < 0) s = s.right;
        else if (i.hasNext()) i.next(), (s = s.mid);
        else break;
      }
      return s;
    }
    has(t) {
      const i = this.d(t);
      return !(i?.value === void 0 && i?.mid === void 0);
    }
    delete(t) {
      return this.e(t, !1);
    }
    deleteSuperstr(t) {
      return this.e(t, !0);
    }
    e(t, i) {
      const s = this.b.reset(t),
        r = [];
      let n = this.c;
      for (; n; ) {
        const o = s.cmp(n.segment);
        if (o > 0) r.push([-1, n]), (n = n.left);
        else if (o < 0) r.push([1, n]), (n = n.right);
        else if (s.hasNext()) s.next(), r.push([0, n]), (n = n.mid);
        else break;
      }
      if (n) {
        if ((i ? ((n.left = void 0), (n.mid = void 0), (n.right = void 0), (n.height = 1)) : ((n.key = void 0), (n.value = void 0)), !n.mid && !n.value))
          if (n.left && n.right) {
            const o = this.f(n.right);
            if (o.key) {
              const { key: a, value: c, segment: l } = o;
              this.e(o.key, !1), (n.key = a), (n.value = c), (n.segment = l);
            }
          } else {
            const o = n.left ?? n.right;
            if (r.length > 0) {
              const [a, c] = r[r.length - 1];
              switch (a) {
                case -1:
                  c.left = o;
                  break;
                case 0:
                  c.mid = o;
                  break;
                case 1:
                  c.right = o;
                  break;
              }
            } else this.c = o;
          }
        for (let o = r.length - 1; o >= 0; o--) {
          const a = r[o][1];
          a.updateHeight();
          const c = a.balanceFactor();
          if ((c > 1 ? (a.right.balanceFactor() >= 0 || (a.right = a.right.rotateRight()), (r[o][1] = a.rotateLeft())) : c < -1 && (a.left.balanceFactor() <= 0 || (a.left = a.left.rotateLeft()), (r[o][1] = a.rotateRight())), o > 0))
            switch (r[o - 1][0]) {
              case -1:
                r[o - 1][1].left = r[o][1];
                break;
              case 1:
                r[o - 1][1].right = r[o][1];
                break;
              case 0:
                r[o - 1][1].mid = r[o][1];
                break;
            }
          else this.c = r[0][1];
        }
      }
    }
    f(t) {
      for (; t.left; ) t = t.left;
      return t;
    }
    findSubstr(t) {
      const i = this.b.reset(t);
      let s = this.c,
        r;
      for (; s; ) {
        const n = i.cmp(s.segment);
        if (n > 0) s = s.left;
        else if (n < 0) s = s.right;
        else if (i.hasNext()) i.next(), (r = s.value || r), (s = s.mid);
        else break;
      }
      return (s && s.value) || r;
    }
    findSuperstr(t) {
      return this.g(t, !1);
    }
    g(t, i) {
      const s = this.b.reset(t);
      let r = this.c;
      for (; r; ) {
        const n = s.cmp(r.segment);
        if (n > 0) r = r.left;
        else if (n < 0) r = r.right;
        else if (s.hasNext()) s.next(), (r = r.mid);
        else return r.mid ? this.h(r.mid) : i ? r.value : void 0;
      }
    }
    hasElementOrSubtree(t) {
      return this.g(t, !0) !== void 0;
    }
    forEach(t) {
      for (const [i, s] of this) t(s, i);
    }
    *[Symbol.iterator]() {
      yield* this.h(this.c);
    }
    h(t) {
      const i = [];
      return this.j(t, i), i[Symbol.iterator]();
    }
    j(t, i) {
      t && (t.left && this.j(t.left, i), t.value && i.push([t.key, t.value]), t.mid && this.j(t.mid, i), t.right && this.j(t.right, i));
    }
    _isBalanced() {
      const t = (i) => {
        if (!i) return !0;
        const s = i.balanceFactor();
        return s < -1 || s > 1 ? !1 : t(i.left) && t(i.right);
      };
      return t(this.c);
    }
  },
  $t = ct("fileService"),
  Q7 = ct("remoteFileService");
function er(e) {
  return e.create === !0;
}
var ve;
(function (e) {
  (e[(e.Unknown = 0)] = "Unknown"), (e[(e.File = 1)] = "File"), (e[(e.Directory = 2)] = "Directory"), (e[(e.SymbolicLink = 64)] = "SymbolicLink");
})(ve || (ve = {}));
var ds;
(function (e) {
  (e[(e.Readonly = 1)] = "Readonly"), (e[(e.Locked = 2)] = "Locked");
})(ds || (ds = {}));
var Sh;
(function (e) {
  (e[(e.UPDATED = 2)] = "UPDATED"), (e[(e.ADDED = 4)] = "ADDED"), (e[(e.DELETED = 8)] = "DELETED");
})(Sh || (Sh = {}));
var $h;
(function (e) {
  (e[(e.None = 0)] = "None"),
    (e[(e.FileReadWrite = 2)] = "FileReadWrite"),
    (e[(e.FileOpenReadWriteClose = 4)] = "FileOpenReadWriteClose"),
    (e[(e.FileReadStream = 16)] = "FileReadStream"),
    (e[(e.FileFolderCopy = 8)] = "FileFolderCopy"),
    (e[(e.PathCaseSensitive = 1024)] = "PathCaseSensitive"),
    (e[(e.Readonly = 2048)] = "Readonly"),
    (e[(e.Trash = 4096)] = "Trash"),
    (e[(e.FileWriteUnlock = 8192)] = "FileWriteUnlock"),
    (e[(e.FileAtomicRead = 16384)] = "FileAtomicRead"),
    (e[(e.FileAtomicWrite = 32768)] = "FileAtomicWrite"),
    (e[(e.FileAtomicDelete = 65536)] = "FileAtomicDelete"),
    (e[(e.FileClone = 131072)] = "FileClone");
})($h || ($h = {}));
function Pe(e) {
  return !!(e.capabilities & 2);
}
function jo(e) {
  return !!(e.capabilities & 8);
}
function Ih(e) {
  return !!(e.capabilities & 131072);
}
function vi(e) {
  return !!(e.capabilities & 4);
}
function Vo(e) {
  return !!(e.capabilities & 16);
}
function Bo(e) {
  return Pe(e) ? !!(e.capabilities & 16384) : !1;
}
function Ph(e) {
  return Pe(e) ? !!(e.capabilities & 32768) : !1;
}
function j0(e) {
  return !!(e.capabilities & 65536);
}
var U;
(function (e) {
  (e.FileExists = "EntryExists"),
    (e.FileNotFound = "EntryNotFound"),
    (e.FileNotADirectory = "EntryNotADirectory"),
    (e.FileIsADirectory = "EntryIsADirectory"),
    (e.FileExceedsStorageQuota = "EntryExceedsStorageQuota"),
    (e.FileTooLarge = "EntryTooLarge"),
    (e.FileWriteLocked = "EntryWriteLocked"),
    (e.NoPermissions = "NoPermissions"),
    (e.Unavailable = "Unavailable"),
    (e.Unknown = "Unknown");
})(U || (U = {}));
var zo = class n1 extends Error {
  static create(t, i) {
    const s = new n1(t.toString(), i);
    return V0(s, i), s;
  }
  constructor(t, i) {
    super(t), (this.code = i);
  }
};
function si(e, t) {
  return zo.create(e, t);
}
function ji(e) {
  return e || si(d(1907, null), U.Unknown);
}
function V0(e, t) {
  return (e.name = t ? `${t} (FileSystemError)` : "FileSystemError"), e;
}
function on(e) {
  if (!e) return U.Unknown;
  if (e instanceof zo) return e.code;
  const t = /^(.+) \(FileSystemError\)$/.exec(e.name);
  if (!t) return U.Unknown;
  switch (t[1]) {
    case U.FileExists:
      return U.FileExists;
    case U.FileIsADirectory:
      return U.FileIsADirectory;
    case U.FileNotADirectory:
      return U.FileNotADirectory;
    case U.FileNotFound:
      return U.FileNotFound;
    case U.FileTooLarge:
      return U.FileTooLarge;
    case U.FileWriteLocked:
      return U.FileWriteLocked;
    case U.NoPermissions:
      return U.NoPermissions;
    case U.Unavailable:
      return U.Unavailable;
  }
  return U.Unknown;
}
function Yt(e) {
  if (e instanceof ne) return e.fileOperationResult;
  switch (on(e)) {
    case U.FileNotFound:
      return 1;
    case U.FileIsADirectory:
      return 0;
    case U.FileNotADirectory:
      return 9;
    case U.FileWriteLocked:
      return 5;
    case U.NoPermissions:
      return 6;
    case U.FileExists:
      return 4;
    case U.FileTooLarge:
      return 7;
    default:
      return 10;
  }
}
var kh;
(function (e) {
  (e[(e.CREATE = 0)] = "CREATE"), (e[(e.DELETE = 1)] = "DELETE"), (e[(e.MOVE = 2)] = "MOVE"), (e[(e.COPY = 3)] = "COPY"), (e[(e.WRITE = 4)] = "WRITE");
})(kh || (kh = {}));
var ps = class {
    constructor(e, t, i) {
      (this.resource = e), (this.operation = t), (this.target = i);
    }
    isOperation(e) {
      return this.operation === e;
    }
  },
  Ah;
(function (e) {
  (e[(e.UPDATED = 0)] = "UPDATED"), (e[(e.ADDED = 1)] = "ADDED"), (e[(e.DELETED = 2)] = "DELETED");
})(Ah || (Ah = {}));
var B0 = class Mn {
  static {
    this.a = null;
  }
  constructor(t, i) {
    (this.c = i),
      (this.b = void 0),
      (this.d = new ss(() => {
        const s = fs.forUris(() => this.c);
        return s.fill(this.rawAdded.map((r) => [r, !0])), s;
      })),
      (this.f = new ss(() => {
        const s = fs.forUris(() => this.c);
        return s.fill(this.rawUpdated.map((r) => [r, !0])), s;
      })),
      (this.g = new ss(() => {
        const s = fs.forUris(() => this.c);
        return s.fill(this.rawDeleted.map((r) => [r, !0])), s;
      })),
      (this.rawAdded = []),
      (this.rawUpdated = []),
      (this.rawDeleted = []);
    for (const s of t) {
      switch (s.type) {
        case 1:
          this.rawAdded.push(s.resource);
          break;
        case 0:
          this.rawUpdated.push(s.resource);
          break;
        case 2:
          this.rawDeleted.push(s.resource);
          break;
      }
      this.b !== Mn.a && (typeof s.cId == "number" ? (this.b === void 0 ? (this.b = s.cId) : this.b !== s.cId && (this.b = Mn.a)) : this.b !== void 0 && (this.b = Mn.a));
    }
  }
  contains(t, ...i) {
    return this.h(t, { includeChildren: !1 }, ...i);
  }
  affects(t, ...i) {
    return this.h(t, { includeChildren: !0 }, ...i);
  }
  h(t, i, ...s) {
    if (!t) return !1;
    const r = s.length > 0;
    return !!(
      ((!r || s.includes(1)) && (this.d.value.get(t) || (i.includeChildren && this.d.value.findSuperstr(t)))) ||
      ((!r || s.includes(0)) && (this.f.value.get(t) || (i.includeChildren && this.f.value.findSuperstr(t)))) ||
      ((!r || s.includes(2)) && (this.g.value.findSubstr(t) || (i.includeChildren && this.g.value.findSuperstr(t))))
    );
  }
  gotAdded() {
    return this.rawAdded.length > 0;
  }
  gotDeleted() {
    return this.rawDeleted.length > 0;
  }
  gotUpdated() {
    return this.rawUpdated.length > 0;
  }
  correlates(t) {
    return this.b === t;
  }
  hasCorrelation() {
    return typeof this.b == "number";
  }
};
function z0(e, t, i) {
  return !e || !t || e === t || t.length > e.length ? !1 : (t.charAt(t.length - 1) !== ge && (t += ge), i ? cl(e, t) : e.indexOf(t) === 0);
}
var ne = class extends Error {
    constructor(e, t, i) {
      super(e), (this.fileOperationResult = t), (this.options = i);
    }
  },
  qo = class extends ne {
    constructor(e, t, i, s) {
      super(e, t, s), (this.fileOperationResult = t), (this.size = i);
    }
  },
  Wo = class extends ne {
    constructor(e, t, i) {
      super(e, 2, i), (this.stat = t);
    }
  },
  Dh;
(function (e) {
  (e[(e.FILE_IS_DIRECTORY = 0)] = "FILE_IS_DIRECTORY"),
    (e[(e.FILE_NOT_FOUND = 1)] = "FILE_NOT_FOUND"),
    (e[(e.FILE_NOT_MODIFIED_SINCE = 2)] = "FILE_NOT_MODIFIED_SINCE"),
    (e[(e.FILE_MODIFIED_SINCE = 3)] = "FILE_MODIFIED_SINCE"),
    (e[(e.FILE_MOVE_CONFLICT = 4)] = "FILE_MOVE_CONFLICT"),
    (e[(e.FILE_WRITE_LOCKED = 5)] = "FILE_WRITE_LOCKED"),
    (e[(e.FILE_PERMISSION_DENIED = 6)] = "FILE_PERMISSION_DENIED"),
    (e[(e.FILE_TOO_LARGE = 7)] = "FILE_TOO_LARGE"),
    (e[(e.FILE_INVALID_PATH = 8)] = "FILE_INVALID_PATH"),
    (e[(e.FILE_NOT_DIRECTORY = 9)] = "FILE_NOT_DIRECTORY"),
    (e[(e.FILE_OTHER_ERROR = 10)] = "FILE_OTHER_ERROR");
})(Dh || (Dh = {}));
var Rh;
(function (e) {
  (e[(e.FILE = 0)] = "FILE"), (e[(e.FOLDER = 1)] = "FOLDER"), (e[(e.ROOT_FOLDER = 2)] = "ROOT_FOLDER");
})(Rh || (Rh = {}));
var Ho = "";
function Lh(e) {
  if (!(typeof e.size != "number" || typeof e.mtime != "number")) return e.mtime.toString(29) + e.size.toString(31);
}
var q0 = class ae {
    static {
      this.KB = 1024;
    }
    static {
      this.MB = ae.KB * ae.KB;
    }
    static {
      this.GB = ae.MB * ae.KB;
    }
    static {
      this.TB = ae.GB * ae.KB;
    }
    static formatSize(t) {
      return (
        fl(t) || (t = 0),
        t < ae.KB
          ? d(1908, null, t.toFixed(0))
          : t < ae.MB
            ? d(1909, null, (t / ae.KB).toFixed(2))
            : t < ae.GB
              ? d(1910, null, (t / ae.MB).toFixed(2))
              : t < ae.TB
                ? d(1911, null, (t / ae.GB).toFixed(2))
                : d(1912, null, (t / ae.TB).toFixed(2))
      );
    }
  },
  ir = ct("requestService"),
  W0 = class {
    constructor(e) {
      this.b = e;
    }
    toJSON() {
      if (!this.a) {
        const e = Object.create(null);
        for (const t in this.b) t.toLowerCase() === "authorization" || t.toLowerCase() === "proxy-authorization" ? (e[t] = "*****") : (e[t] = this.b[t]);
        this.a = e;
      }
      return this.a;
    }
  },
  H0 = class extends G {
    constructor(e) {
      super(), (this.b = e), (this.a = 0);
    }
    async c(e, t) {
      const i = `[network] #${++this.a}: ${e.url}`;
      this.b.trace(`${i} - begin`, e.type, new W0(e.headers ?? {}));
      try {
        const s = await t();
        return this.b.trace(`${i} - end`, e.type, s.res.statusCode, s.res.headers), s;
      } catch (s) {
        throw (this.b.error(`${i} - error`, e.type, st(s)), s);
      }
    }
  };
function Go(e) {
  return (e.res.statusCode && e.res.statusCode >= 200 && e.res.statusCode < 300) || e.res.statusCode === 1223;
}
function Oh(e) {
  return e.res.statusCode === 204;
}
async function G0(e) {
  return Oh(e) ? null : (await Ti(e.stream)).toString();
}
async function gs(e) {
  if (!Go(e)) throw new Error("Server returned " + e.res.statusCode);
  return G0(e);
}
async function Jo(e) {
  if (!Go(e)) throw new Error("Server returned " + e.res.statusCode);
  if (Oh(e)) return null;
  const i = (await Ti(e.stream)).toString();
  try {
    return JSON.parse(i);
  } catch (s) {
    throw (
      ((s.message +=
        `:
` + i),
      s)
    );
  }
}
var Qo;
function J0(e) {
  const t = Ee.as(Fe.Configuration),
    i = Qo;
  (Qo = {
    id: "http",
    order: 15,
    title: d(2118, null),
    type: "object",
    scope: e,
    properties: {
      "http.proxy": { type: "string", pattern: "^(https?|socks|socks4a?|socks5h?)://([^:]*(:[^@]*)?@)?([^:]+|\\[[:0-9a-fA-F]+\\])(:\\d+)?/?$|^$", markdownDescription: d(2119, null), restricted: !0 },
      "http.proxyStrictSSL": { type: "boolean", default: !0, description: d(2120, null), restricted: !0 },
      "http.proxyKerberosServicePrincipal": { type: "string", markdownDescription: d(2121, null), restricted: !0 },
      "http.noProxy": { type: "array", items: { type: "string" }, markdownDescription: d(2122, null), restricted: !0 },
      "http.proxyAuthorization": { type: ["null", "string"], default: null, markdownDescription: d(2123, null), restricted: !0 },
      "http.proxySupport": { type: "string", enum: ["off", "on", "fallback", "override"], enumDescriptions: [d(2124, null), d(2125, null), d(2126, null), d(2127, null)], default: "override", description: d(2128, null), restricted: !0 },
      "http.systemCertificates": { type: "boolean", default: !0, description: d(2129, null), restricted: !0 },
      "http.experimental.systemCertificatesV2": { type: "boolean", tags: ["experimental"], default: !1, description: d(2130, null), restricted: !0 },
      "http.electronFetch": { type: "boolean", default: !1, description: d(2131, null), restricted: !0 },
    },
  }),
    t.updateConfigurations({ add: [Qo], remove: i ? [i] : [] });
}
J0(1);
var Xo = class {
  constructor(t, i) {
    (this.a = t), (this.b = i);
  }
  async download(t, i, s = lt.None) {
    if (t.scheme === K.file || t.scheme === K.vscodeRemote) {
      await this.b.copy(t, i);
      return;
    }
    const r = { type: "GET", url: t.toString(!0) },
      n = await this.a.request(r, s);
    if (n.res.statusCode === 200) await this.b.writeFile(i, n.stream);
    else {
      const o = await gs(n);
      throw new Error(`Expected 200, got back ${n.res.statusCode} instead.

${o}`);
    }
  }
};
Xo = __decorate([__param(0, ir), __param(1, $t)], Xo);
var ri = ct("environmentService"),
  ke = ri;
import { homedir as Q0, tmpdir as X0 } from "os";
var Z0 = 60,
  Y0 = Z0 * 60,
  Zo = Y0 * 24,
  Y7 = Zo * 7,
  K7 = Zo * 30,
  t2 = Zo * 365;
function Nh(e) {
  return (
    e.getFullYear() +
    "-" +
    String(e.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(e.getDate()).padStart(2, "0") +
    "T" +
    String(e.getHours()).padStart(2, "0") +
    ":" +
    String(e.getMinutes()).padStart(2, "0") +
    ":" +
    String(e.getSeconds()).padStart(2, "0") +
    "." +
    (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
    "Z"
  );
}
function tt(e, t, i) {
  let s = null,
    r = null;
  if ((typeof i.value == "function" ? ((s = "value"), (r = i.value), r.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof i.get == "function" && ((s = "get"), (r = i.get)), !r))
    throw new Error("not supported");
  const n = `$memoize$${t}`;
  i[s] = function (...o) {
    return this.hasOwnProperty(n) || Object.defineProperty(this, n, { configurable: !1, enumerable: !1, writable: !1, value: r.apply(this, o) }), this[n];
  };
}
var Ch = /^([^.]+\..+)[:=](.+)$/,
  et = class {
    get enableMultiContainer() {
      return wt.ICUBE_MULTI_CONTAINER?.toLowerCase() === "true";
    }
    get enableExtMultiContainer() {
      return wt.ICUBE_EXT_MULTI_CONTAINER?.toLowerCase() !== "false";
    }
    get safeExtensionIds() {
      const e = this.c.safeExtensionIds ?? [],
        t = wt.ICUBE_SAFE_EXTENSIONS?.split(",") ?? [];
      return [...new Set([...e, ...t])];
    }
    get appRoot() {
      return Be(js.asFileUri("").fsPath);
    }
    get userHome() {
      return I.file(this.b.homeDir);
    }
    get userDataPath() {
      return this.b.userDataDir;
    }
    get appSettingsHome() {
      return I.file(_(this.userDataPath, "User"));
    }
    get tmpDir() {
      return I.file(this.b.tmpDir);
    }
    get cacheHome() {
      return I.file(this.userDataPath);
    }
    get stateResource() {
      return V(this.appSettingsHome, "globalStorage", "storage.json");
    }
    get userRoamingDataHome() {
      return this.appSettingsHome.with({ scheme: K.vscodeUserData });
    }
    get userDataSyncHome() {
      return V(this.appSettingsHome, "sync");
    }
    get logsHome() {
      if (!this.args.logsPath) {
        const e = Nh(new Date()).replace(/-|:|\.\d+Z$/g, "");
        this.args.logsPath = _(this.userDataPath, "logs", e);
      }
      return I.file(this.args.logsPath);
    }
    get extensionHostLogsHome() {
      if (!this.args.extHostLogsPath) {
        const e = wt.ICUBE_CUSTOM_EXTENSION_HOST_LOGS_HOME;
        if (e) {
          const t = Nh(new Date()).replace(/-|:|\.\d+Z$/g, "");
          this.args.extHostLogsPath = _(e, "logs", t);
        }
      }
      return this.args.extHostLogsPath ? I.file(this.args.extHostLogsPath) : void 0;
    }
    get sync() {
      return this.args.sync;
    }
    get machineSettingsResource() {
      return V(I.file(_(this.userDataPath, "Machine")), "settings.json");
    }
    get workspaceStorageHome() {
      return V(this.appSettingsHome, "workspaceStorage");
    }
    get localHistoryHome() {
      return V(this.appSettingsHome, "History");
    }
    get keyboardLayoutResource() {
      return V(this.userRoamingDataHome, "keyboardLayout.json");
    }
    get argvResource() {
      const e = wt.VSCODE_PORTABLE;
      return e ? I.file(_(e, "argv.json")) : V(this.userHome, this.c.dataFolderName, "argv.json");
    }
    get isExtensionDevelopment() {
      return !!this.args.extensionDevelopmentPath;
    }
    get untitledWorkspacesHome() {
      return I.file(_(this.userDataPath, "Workspaces"));
    }
    get builtinExtensionsPath() {
      const e = this.args["builtin-extensions-dir"];
      return e ? Oi(e) : Li(_(js.asFileUri("").fsPath, "..", "extensions"));
    }
    get extensionsDownloadLocation() {
      const e = this.args["extensions-download-dir"];
      return e ? I.file(Oi(e)) : I.file(_(this.userDataPath, "CachedExtensionVSIXs"));
    }
    get extensionsPath() {
      const e = this.args["extensions-dir"];
      if (e) return Oi(e);
      const t = wt.VSCODE_EXTENSIONS;
      if (t) return t;
      const i = wt.VSCODE_PORTABLE;
      return i ? _(i, "extensions") : V(this.userHome, this.c.dataFolderName, "extensions").fsPath;
    }
    get extensionDevelopmentLocationURI() {
      const e = this.args.extensionDevelopmentPath;
      if (Array.isArray(e)) return e.map((t) => (/^[^:/?#]+?:\/\//.test(t) ? I.parse(t) : I.file(Li(t))));
    }
    get extensionDevelopmentKind() {
      return this.args.extensionDevelopmentKind?.map((e) => (e === "ui" || e === "workspace" || e === "web" ? e : "workspace"));
    }
    get extensionTestsLocationURI() {
      const e = this.args.extensionTestsPath;
      if (e) return /^[^:/?#]+?:\/\//.test(e) ? I.parse(e) : I.file(Li(e));
    }
    get disableExtensions() {
      if (this.args["disable-extensions"]) return !0;
      const e = this.args["disable-extension"];
      if (e) {
        if (typeof e == "string") return [e];
        if (Array.isArray(e) && e.length > 0) return e;
      }
      return !1;
    }
    get debugExtensionHost() {
      return K0(this.args, this.isBuilt);
    }
    get debugRenderer() {
      return !!this.args.debugRenderer;
    }
    get isBuilt() {
      return !wt.VSCODE_DEV;
    }
    get verbose() {
      return !!this.args.verbose;
    }
    get logLevel() {
      return this.args.log?.find((e) => !Ch.test(e));
    }
    get extensionLogLevel() {
      const e = [];
      for (const t of this.args.log || []) {
        const i = Ch.exec(t);
        i && i[1] && i[2] && e.push([i[1], i[2]]);
      }
      return e.length ? e : void 0;
    }
    get serviceMachineIdResource() {
      return V(I.file(this.userDataPath), "machineid");
    }
    get crashReporterId() {
      return this.args["crash-reporter-id"];
    }
    get crashReporterDirectory() {
      return this.args["crash-reporter-directory"];
    }
    get disableTelemetry() {
      return !!this.args["disable-telemetry"];
    }
    get disableWorkspaceTrust() {
      return !!this.args["disable-workspace-trust"];
    }
    get useInMemorySecretStorage() {
      return !!this.args["use-inmemory-secretstorage"];
    }
    get policyFile() {
      if (this.args["__enable-file-policy"]) {
        const e = wt.VSCODE_PORTABLE;
        return e ? I.file(_(e, "policy.json")) : V(this.userHome, this.c.dataFolderName, "policy.json");
      }
    }
    get continueOn() {
      return this.args.continueOn;
    }
    set continueOn(e) {
      this.args.continueOn = e;
    }
    get args() {
      return this.a;
    }
    constructor(e, t, i) {
      (this.a = e), (this.b = t), (this.c = i), (this.editSessionId = this.args.editSessionId);
    }
  };
__decorate([tt], et.prototype, "enableMultiContainer", null),
  __decorate([tt], et.prototype, "enableExtMultiContainer", null),
  __decorate([tt], et.prototype, "safeExtensionIds", null),
  __decorate([tt], et.prototype, "appRoot", null),
  __decorate([tt], et.prototype, "userHome", null),
  __decorate([tt], et.prototype, "userDataPath", null),
  __decorate([tt], et.prototype, "appSettingsHome", null),
  __decorate([tt], et.prototype, "tmpDir", null),
  __decorate([tt], et.prototype, "cacheHome", null),
  __decorate([tt], et.prototype, "stateResource", null),
  __decorate([tt], et.prototype, "userRoamingDataHome", null),
  __decorate([tt], et.prototype, "userDataSyncHome", null),
  __decorate([tt], et.prototype, "sync", null),
  __decorate([tt], et.prototype, "machineSettingsResource", null),
  __decorate([tt], et.prototype, "workspaceStorageHome", null),
  __decorate([tt], et.prototype, "localHistoryHome", null),
  __decorate([tt], et.prototype, "keyboardLayoutResource", null),
  __decorate([tt], et.prototype, "argvResource", null),
  __decorate([tt], et.prototype, "isExtensionDevelopment", null),
  __decorate([tt], et.prototype, "untitledWorkspacesHome", null),
  __decorate([tt], et.prototype, "builtinExtensionsPath", null),
  __decorate([tt], et.prototype, "extensionsPath", null),
  __decorate([tt], et.prototype, "extensionDevelopmentLocationURI", null),
  __decorate([tt], et.prototype, "extensionDevelopmentKind", null),
  __decorate([tt], et.prototype, "extensionTestsLocationURI", null),
  __decorate([tt], et.prototype, "debugExtensionHost", null),
  __decorate([tt], et.prototype, "logLevel", null),
  __decorate([tt], et.prototype, "extensionLogLevel", null),
  __decorate([tt], et.prototype, "serviceMachineIdResource", null),
  __decorate([tt], et.prototype, "disableTelemetry", null),
  __decorate([tt], et.prototype, "disableWorkspaceTrust", null),
  __decorate([tt], et.prototype, "useInMemorySecretStorage", null),
  __decorate([tt], et.prototype, "policyFile", null);
function K0(e, t) {
  return tg(e["inspect-extensions"], e["inspect-brk-extensions"], 5870, t, e.debugId, e.extensionEnvironment);
}
function tg(e, t, i, s, r, n) {
  const a = Number(t || e) || (s ? null : i),
    c = a ? !!t : !1;
  let l;
  if (n)
    try {
      l = JSON.parse(n);
    } catch {}
  return { port: a, break: c, debugId: r, env: l };
}
import * as Fh from "os";
import * as yi from "path";
var eg = process.env.VSCODE_CWD || process.cwd();
function ig(e, t) {
  const i = sg(e, t),
    s = [i];
  return yi.isAbsolute(i) || s.unshift(eg), yi.resolve(...s);
}
function sg(e, t) {
  const i = process.env.VSCODE_PORTABLE;
  if (i) return yi.join(i, "user-data");
  let s = process.env.VSCODE_APPDATA;
  if (s) return yi.join(s, t);
  const r = e["user-data-dir"];
  if (r) return r;
  switch (process.platform) {
    case "win32":
      if (((s = process.env.APPDATA), !s)) {
        const n = process.env.USERPROFILE;
        if (typeof n != "string") throw new Error("Windows: Unexpected undefined %USERPROFILE% environment variable");
        s = yi.join(n, "AppData", "Roaming");
      }
      break;
    case "darwin":
      s = yi.join(Fh.homedir(), "Library", "Application Support");
      break;
    case "linux":
      s = process.env.XDG_CONFIG_HOME || yi.join(Fh.homedir(), ".config");
      break;
    default:
      throw new Error("Platform not supported");
  }
  return yi.join(s, t);
}
var rg = class extends et {
    constructor(e, t) {
      super(e, { homeDir: Q0(), tmpDir: X0(), userDataDir: ig(e, t.nameShort) }, t);
    }
  },
  Yo = "Offline";
function ng(e) {
  return e instanceof og ? !0 : e instanceof Error && e.name === Yo && e.message === Yo;
}
var og = class extends Error {
    constructor() {
      super(Yo), (this.name = this.message);
    }
  },
  ag = "^([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$",
  cg = new RegExp(ag),
  lg = "__web_extension",
  Th = "extensionInstallSource",
  hg = "dependecyOrPackExtensionInstall",
  ug = "clientTargetPlatform",
  Mh;
(function (e) {
  (e.COMMAND = "command"), (e.SETTINGS_SYNC = "settingsSync");
})(Mh || (Mh = {}));
function fg(e) {
  switch (e) {
    case "win32-x64":
      return "Windows 64 bit";
    case "win32-arm64":
      return "Windows ARM";
    case "linux-x64":
      return "Linux 64 bit";
    case "linux-arm64":
      return "Linux ARM 64";
    case "linux-armhf":
      return "Linux ARM";
    case "alpine-x64":
      return "Alpine Linux 64 bit";
    case "alpine-arm64":
      return "Alpine ARM 64";
    case "darwin-x64":
      return "Mac";
    case "darwin-arm64":
      return "Mac Silicon";
    case "web":
      return "Web";
    case "universal":
      return "universal";
    case "unknown":
      return "unknown";
    case "undefined":
      return "undefined";
  }
}
function dg(e) {
  switch (e) {
    case "win32-x64":
      return "win32-x64";
    case "win32-arm64":
      return "win32-arm64";
    case "linux-x64":
      return "linux-x64";
    case "linux-arm64":
      return "linux-arm64";
    case "linux-armhf":
      return "linux-armhf";
    case "alpine-x64":
      return "alpine-x64";
    case "alpine-arm64":
      return "alpine-arm64";
    case "darwin-x64":
      return "darwin-x64";
    case "darwin-arm64":
      return "darwin-arm64";
    case "web":
      return "web";
    case "universal":
      return "universal";
    default:
      return "unknown";
  }
}
function _h(e, t) {
  switch (e) {
    case 3:
      return t === "x64" ? "win32-x64" : t === "arm64" ? "win32-arm64" : "unknown";
    case 2:
      return t === "x64" ? "linux-x64" : t === "arm64" ? "linux-arm64" : t === "arm" ? "linux-armhf" : "unknown";
    case "alpine":
      return t === "x64" ? "alpine-x64" : t === "arm64" ? "alpine-arm64" : "unknown";
    case 1:
      return t === "x64" ? "darwin-x64" : t === "arm64" ? "darwin-arm64" : "unknown";
    case 0:
      return "web";
  }
}
function sr(e, t) {
  return t === "web" && !e.includes("web");
}
function Ko(e, t, i) {
  return sr(t, i) ? !1 : e === "undefined" || e === "universal" ? !0 : e === "unknown" ? !1 : e === i;
}
function pg(e) {
  return e && typeof e == "object" && typeof e.id == "string" && (!e.uuid || typeof e.uuid == "string");
}
var Uh;
(function (e) {
  (e[(e.NoneOrRelevance = 0)] = "NoneOrRelevance"),
    (e[(e.LastUpdatedDate = 1)] = "LastUpdatedDate"),
    (e[(e.Title = 2)] = "Title"),
    (e[(e.PublisherName = 3)] = "PublisherName"),
    (e[(e.InstallCount = 4)] = "InstallCount"),
    (e[(e.PublishedDate = 10)] = "PublishedDate"),
    (e[(e.AverageRating = 6)] = "AverageRating"),
    (e[(e.WeightedRating = 12)] = "WeightedRating");
})(Uh || (Uh = {}));
var jh;
(function (e) {
  (e[(e.Default = 0)] = "Default"), (e[(e.Ascending = 1)] = "Ascending"), (e[(e.Descending = 2)] = "Descending");
})(jh || (jh = {}));
var Vh;
(function (e) {
  (e.Install = "install"), (e.Uninstall = "uninstall");
})(Vh || (Vh = {}));
var Bh;
(function (e) {
  (e[(e.None = 1)] = "None"), (e[(e.Install = 2)] = "Install"), (e[(e.Update = 3)] = "Update"), (e[(e.Migrate = 4)] = "Migrate");
})(Bh || (Bh = {}));
var bi = ct("extensionGalleryService"),
  zh;
(function (e) {
  (e.Timeout = "Timeout"), (e.Cancelled = "Cancelled"), (e.Failed = "Failed"), (e.DownloadFailedWriting = "DownloadFailedWriting"), (e.Offline = "Offline");
})(zh || (zh = {}));
var an = class extends Error {
    constructor(e, t) {
      super(e), (this.code = t), (this.name = t);
    }
  },
  qh;
(function (e) {
  (e.Unsupported = "Unsupported"),
    (e.Deprecated = "Deprecated"),
    (e.Malicious = "Malicious"),
    (e.Incompatible = "Incompatible"),
    (e.IncompatibleApi = "IncompatibleApi"),
    (e.IncompatibleTargetPlatform = "IncompatibleTargetPlatform"),
    (e.ReleaseVersionNotFound = "ReleaseVersionNotFound"),
    (e.Invalid = "Invalid"),
    (e.Download = "Download"),
    (e.DownloadSignature = "DownloadSignature"),
    (e.DownloadFailedWriting = "DownloadFailedWriting"),
    (e.UpdateMetadata = "UpdateMetadata"),
    (e.Extract = "Extract"),
    (e.Scanning = "Scanning"),
    (e.ScanningExtension = "ScanningExtension"),
    (e.ReadUninstalled = "ReadUninstalled"),
    (e.UnsetUninstalled = "UnsetUninstalled"),
    (e.Delete = "Delete"),
    (e.Rename = "Rename"),
    (e.IntializeDefaultProfile = "IntializeDefaultProfile"),
    (e.AddToProfile = "AddToProfile"),
    (e.InstalledExtensionNotFound = "InstalledExtensionNotFound"),
    (e.PostInstall = "PostInstall"),
    (e.CorruptZip = "CorruptZip"),
    (e.IncompleteZip = "IncompleteZip"),
    (e.PackageNotSigned = "PackageNotSigned"),
    (e.SignatureVerificationInternal = "SignatureVerificationInternal"),
    (e.SignatureVerificationFailed = "SignatureVerificationFailed"),
    (e.NotAllowed = "NotAllowed"),
    (e.Gallery = "Gallery"),
    (e.Cancelled = "Cancelled"),
    (e.Unknown = "Unknown"),
    (e.Internal = "Internal");
})(qh || (qh = {}));
var qt;
(function (e) {
  (e.Success = "Success"),
    (e.RequiredArgumentMissing = "RequiredArgumentMissing"),
    (e.InvalidArgument = "InvalidArgument"),
    (e.PackageIsUnreadable = "PackageIsUnreadable"),
    (e.UnhandledException = "UnhandledException"),
    (e.SignatureManifestIsMissing = "SignatureManifestIsMissing"),
    (e.SignatureManifestIsUnreadable = "SignatureManifestIsUnreadable"),
    (e.SignatureIsMissing = "SignatureIsMissing"),
    (e.SignatureIsUnreadable = "SignatureIsUnreadable"),
    (e.CertificateIsUnreadable = "CertificateIsUnreadable"),
    (e.SignatureArchiveIsUnreadable = "SignatureArchiveIsUnreadable"),
    (e.FileAlreadyExists = "FileAlreadyExists"),
    (e.SignatureArchiveIsInvalidZip = "SignatureArchiveIsInvalidZip"),
    (e.SignatureArchiveHasSameSignatureFile = "SignatureArchiveHasSameSignatureFile"),
    (e.PackageIntegrityCheckFailed = "PackageIntegrityCheckFailed"),
    (e.SignatureIsInvalid = "SignatureIsInvalid"),
    (e.SignatureManifestIsInvalid = "SignatureManifestIsInvalid"),
    (e.SignatureIntegrityCheckFailed = "SignatureIntegrityCheckFailed"),
    (e.EntryIsMissing = "EntryIsMissing"),
    (e.EntryIsTampered = "EntryIsTampered"),
    (e.Untrusted = "Untrusted"),
    (e.CertificateRevoked = "CertificateRevoked"),
    (e.SignatureIsNotValid = "SignatureIsNotValid"),
    (e.UnknownError = "UnknownError"),
    (e.PackageIsInvalidZip = "PackageIsInvalidZip"),
    (e.SignatureArchiveHasTooManyEntries = "SignatureArchiveHasTooManyEntries");
})(qt || (qt = {}));
var vt = class extends Error {
    constructor(e, t) {
      super(e), (this.code = t), (this.name = t);
    }
  },
  ta = ct("extensionManagementService"),
  e2 = ct("IGlobalExtensionEnablementService"),
  i2 = ct("IExtensionTipsService"),
  s2 = Vc(1816, "Extensions"),
  r2 = Vc(1817, "Preferences"),
  Wh = "extensions.user.cache",
  gg = "extensions.builtin.cache",
  Hh = "undefined_publisher",
  mg = [
    "AI",
    "Azure",
    "Chat",
    "Data Science",
    "Debuggers",
    "Extension Packs",
    "Education",
    "Formatters",
    "Keymaps",
    "Language Packs",
    "Linters",
    "Machine Learning",
    "Notebooks",
    "Programming Languages",
    "SCM Providers",
    "Snippets",
    "Testing",
    "Themes",
    "Visualization",
    "Other",
  ],
  Gh;
(function (e) {
  (e[(e.System = 0)] = "System"), (e[(e.User = 1)] = "User");
})(Gh || (Gh = {}));
var Jh;
(function (e) {
  (e.WIN32_X64 = "win32-x64"),
    (e.WIN32_ARM64 = "win32-arm64"),
    (e.LINUX_X64 = "linux-x64"),
    (e.LINUX_ARM64 = "linux-arm64"),
    (e.LINUX_ARMHF = "linux-armhf"),
    (e.ALPINE_X64 = "alpine-x64"),
    (e.ALPINE_ARM64 = "alpine-arm64"),
    (e.DARWIN_X64 = "darwin-x64"),
    (e.DARWIN_ARM64 = "darwin-arm64"),
    (e.WEB = "web"),
    (e.UNIVERSAL = "universal"),
    (e.UNKNOWN = "unknown"),
    (e.UNDEFINED = "undefined");
})(Jh || (Jh = {}));
var ms = class {
    constructor(e) {
      (this.value = e), (this._lower = e.toLowerCase());
    }
    static equals(e, t) {
      if (typeof e > "u" || e === null) return typeof t > "u" || t === null;
      if (typeof t > "u" || t === null) return !1;
      if (typeof e == "string" || typeof t == "string") {
        const i = typeof e == "string" ? e : e.value,
          s = typeof t == "string" ? t : t.value;
        return Ni(i, s);
      }
      return e._lower === t._lower;
    }
    static toKey(e) {
      return typeof e == "string" ? e.toLowerCase() : e._lower;
    }
  },
  wg = class {
    constructor() {
      this.c = new Map();
    }
    clear() {
      this.c.clear();
    }
    delete(e) {
      this.c.delete(ms.toKey(e));
    }
    get(e) {
      return this.c.get(ms.toKey(e));
    }
    has(e) {
      return this.c.has(ms.toKey(e));
    }
    set(e, t) {
      this.c.set(ms.toKey(e), t);
    }
    values() {
      return this.c.values();
    }
    forEach(e) {
      this.c.forEach(e);
    }
    [Symbol.iterator]() {
      return this.c[Symbol.iterator]();
    }
  };
function Qh(e) {
  return vg(e);
}
function vg(e) {
  return e.contributes && e.contributes.localizations ? e.contributes.localizations.length > 0 : !1;
}
function yg(e) {
  return e.map((t) => {
    const [i, s] = t.split("@");
    return { proposalName: i, version: s ? parseInt(s) : void 0 };
  });
}
function bg(e) {
  return e.map((t) => t.split("@")[0]);
}
var n2 = ct("IBuiltinExtensionsScannerService"),
  Eg = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function xg(e) {
  return Eg.test(e);
}
var Kt = (function () {
  if (typeof crypto == "object" && typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
  let e;
  typeof crypto == "object" && typeof crypto.getRandomValues == "function"
    ? (e = crypto.getRandomValues.bind(crypto))
    : (e = function (s) {
        for (let r = 0; r < s.length; r++) s[r] = Math.floor(Math.random() * 256);
        return s;
      });
  const t = new Uint8Array(16),
    i = [];
  for (let s = 0; s < 256; s++) i.push(s.toString(16).padStart(2, "0"));
  return function () {
    e(t), (t[6] = (t[6] & 15) | 64), (t[8] = (t[8] & 63) | 128);
    let r = 0,
      n = "";
    return (
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      (n += "-"),
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      (n += "-"),
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      (n += "-"),
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      (n += "-"),
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      (n += i[t[r++]]),
      n
    );
  };
})();
function Sg(e) {
  if (Ts === 2 && /^penguin(\.|$)/i.test(e)) return "chromebook";
}
function $g(e, t, i, s, r, n, o, a, c, l, h, u, f, p, w, m, y) {
  const v = Object.create(null);
  (v["common.machineId"] = n),
    (v["common.sqmId"] = o),
    (v["common.devDeviceId"] = a),
    (v["common.deviceId"] = y || "0"),
    (v.sessionID = Kt() + Date.now()),
    (v.commitHash = s),
    (v.version = r),
    (v["common.platformVersion"] = (e || "").replace(/^(\d+)(\.\d+)?(\.\d+)?(.*)/, "$1$2$3")),
    (v["common.platform"] = Qc(Ts)),
    (v["common.nodePlatform"] = to),
    (v["common.nodeArch"] = i),
    (v["common.product"] = l || "desktop"),
    (v.memory = u),
    (v.cpu = f),
    (v.memoryUsagePercentage = p),
    (v.cpuPercentage = w),
    (v["native.buildVersion"] = h),
    (v.buildVersion = h),
    (v.quality = m),
    (v.platform = Qc(Ts)),
    (v.nodePlatform = to),
    c && (v["common.msftInternal"] = c);
  let S = 0;
  const D = Date.now();
  Object.defineProperties(v, { timestamp: { get: () => new Date(), enumerable: !0 }, "common.timesincesessionstart": { get: () => Date.now() - D, enumerable: !0 }, "common.sequence": { get: () => S++, enumerable: !0 } }),
    cd && (v["common.snap"] = "true");
  const x = Sg(t);
  return x && (v["common.platformDetail"] = x), v;
}
function Ig(e) {
  const t = wt.USERDNSDOMAIN;
  if (!t) return !1;
  const i = t.toLowerCase();
  return e.some((s) => i === s);
}
var Ae = ct("telemetryService"),
  o2 = ct("customEndpointTelemetryService"),
  Pg = "telemetry.machineId",
  kg = "telemetry.sqmId",
  Ag = "telemetry.devDeviceId",
  Xh = "telemetry",
  cn = "telemetry.telemetryLevel",
  Zh = "telemetry.enableCrashReporter",
  ea = "telemetry.enableTelemetry",
  Yh;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"), (e[(e.CRASH = 1)] = "CRASH"), (e[(e.ERROR = 2)] = "ERROR"), (e[(e.USAGE = 3)] = "USAGE");
})(Yh || (Yh = {}));
var Kh;
(function (e) {
  (e.OFF = "off"), (e.CRASH = "crash"), (e.ERROR = "error"), (e.ON = "all");
})(Kh || (Kh = {}));
var ia = class {
    constructor(e) {
      (this.value = e), (this.isTrustedTelemetryValue = !0);
    }
  },
  Dg = class {
    constructor() {
      (this.telemetryLevel = 0),
        (this.sessionId = "someValue.sessionId"),
        (this.machineId = "someValue.machineId"),
        (this.sqmId = "someValue.sqmId"),
        (this.devDeviceId = "someValue.devDeviceId"),
        (this.firstSessionDate = "someValue.firstSessionDate"),
        (this.sendErrorTelemetry = !1);
    }
    publicLog() {}
    publicLog2() {}
    publicLogError() {}
    publicLogError2() {}
    setExperimentProperty() {}
  },
  Rg = new Dg();
function tu(e, t) {
  return !t.isBuilt && !t.disableTelemetry ? !0 : !(t.disableTelemetry || !e.enableTelemetry);
}
function eu(e) {
  const t = e.getValue(cn),
    i = e.getValue(Zh);
  if (e.getValue(ea) === !1 || i === !1) return 0;
  switch (t ?? "all") {
    case "all":
      return 3;
    case "error":
      return 2;
    case "crash":
      return 1;
    case "off":
      return 0;
  }
}
function Lg(e) {
  const t = {},
    i = {},
    s = {};
  iu(e, s);
  for (let r in s) {
    r = r.length > 150 ? r.substr(r.length - 149) : r;
    const n = s[r];
    typeof n == "number"
      ? (i[r] = n)
      : typeof n == "boolean"
        ? (i[r] = n ? 1 : 0)
        : typeof n == "string"
          ? (n.length > 8192 && console.warn(`Telemetry property: ${r} has been trimmed to 8192, the original length is ${n.length}`), (t[r] = n.substring(0, 8191)))
          : typeof n < "u" && n !== null && (t[r] = n);
  }
  return { properties: t, measurements: i };
}
function iu(e, t, i = 0, s) {
  if (e)
    for (const r of Object.getOwnPropertyNames(e)) {
      const n = e[r],
        o = s ? s + r : r;
      Array.isArray(n) ? (t[o] = Zl(n)) : n instanceof Date ? (t[o] = n.toISOString()) : Ct(n) ? (i < 2 ? iu(n, t, i + 1, o + ".") : (t[o] = Zl(n))) : (t[o] = n);
    }
}
function Og(e, t) {
  const i = e.msftInternalDomains || [],
    s = t.getValue("telemetry.internalTesting");
  return Ig(i) || s;
}
function Ng(e) {
  return [e.appRoot, e.extensionsPath, e.userHome.fsPath, e.tmpDir.fsPath, e.userDataPath];
}
function Cg(e, t) {
  if (!e || (!e.includes("/") && !e.includes("\\"))) return e;
  let i = e;
  const s = [];
  for (const a of t)
    for (;;) {
      const c = a.exec(e);
      if (!c) break;
      s.push([c.index, a.lastIndex]);
    }
  const r = /^[\\\/]?(node_modules|node_modules\.asar)[\\\/]/,
    n = /(file:\/\/)?([a-zA-Z]:(\\\\|\\|\/)|(\\\\|\\|\/))?([\w-\._]+(\\\\|\\|\/))+[\w-\._]*/g;
  let o = 0;
  for (i = ""; ; ) {
    const a = n.exec(e);
    if (!a) break;
    const c = s.some(([l, h]) => a.index < h && l < n.lastIndex);
    !r.test(a[0]) && !c && ((i += e.substring(o, a.index) + "<REDACTED: user-file-path>"), (o = n.lastIndex));
  }
  return o < e.length && (i += e.substr(o)), i;
}
function Fg(e) {
  if (!e) return e;
  const t = [
    { label: "Google API Key", regex: /AIza[A-Za-z0-9_\\\-]{35}/ },
    { label: "Slack Token", regex: /xox[pbar]\-[A-Za-z0-9]/ },
    { label: "GitHub Token", regex: /(gh[psuro]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})/ },
    { label: "Generic Secret", regex: /(key|token|sig|secret|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/i },
    {
      label: "CLI Credentials",
      regex:
        /((login|psexec|(certutil|psexec)\.exe).{1,50}(\s-u(ser(name)?)?\s+.{3,100})?\s-(admin|user|vm|root)?p(ass(word)?)?\s+["']?[^$\-\/\s]|(^|[\s\r\n\\])net(\.exe)?.{1,5}(user\s+|share\s+\/user:| user -? secrets ? set) \s + [^ $\s \/])/,
    },
    { label: "Microsoft Entra ID", regex: /eyJ(?:0eXAiOiJKV1Qi|hbGci|[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.)/ },
    { label: "Email", regex: /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+/ },
  ];
  for (const i of t) if (i.regex.test(e)) return `<REDACTED: ${i.label}>`;
  return e;
}
function Tg(e, t) {
  return Gp(e, (i) => {
    if (i instanceof ia || Object.hasOwnProperty.call(i, "isTrustedTelemetryValue")) return i.value;
    if (typeof i == "string") {
      let s = i.replaceAll("%20", " ");
      s = Cg(s, t);
      for (const r of t) s = s.replace(r, "");
      return (s = Fg(s)), s;
    }
  });
}
function J(e, t) {
  return e.uuid && t.uuid ? (e.uuid === t.uuid ? !0 : e.id === t.id) : e.id === t.id ? !0 : ro(e.id, t.id) === 0;
}
var Mg = /^([^.]+\..+)-(\d+\.\d+\.\d+)(-(.+))?$/,
  oe = class _n {
    static create(t) {
      const i = t.manifest ? t.manifest.version : t.version,
        s = t.manifest ? t.targetPlatform : t.properties.targetPlatform;
      return new _n(t.identifier, i, s);
    }
    static parse(t) {
      const i = Mg.exec(t);
      return i && i[1] && i[2] ? new _n({ id: i[1] }, i[2], i[4] || void 0) : null;
    }
    constructor(t, i, s = "undefined") {
      (this.identifier = t), (this.version = i), (this.targetPlatform = s), (this.id = t.id);
    }
    toString() {
      return `${this.id}-${this.version}${this.targetPlatform !== "undefined" ? `-${this.targetPlatform}` : ""}`;
    }
    equals(t) {
      return t instanceof _n ? J(this, t) && this.version === t.version && this.targetPlatform === t.targetPlatform : !1;
    }
  },
  _g = /^([^.]+\..+)@((prerelease)|(\d+\.\d+\.\d+(-.*)?))$/;
function sa(e) {
  const t = _g.exec(e);
  return t && t[1] ? [ln(t[1]), t[2]] : [ln(e), void 0];
}
function su(e, t) {
  return `${e}.${t}`;
}
function ln(e) {
  return e.toLowerCase();
}
function ni(e, t) {
  return ln(su(e ?? Hh, t));
}
function ru(e, t) {
  const i = [],
    s = (r) => {
      for (const n of i) if (n.some((o) => J(t(o), t(r)))) return n;
      return null;
    };
  for (const r of e) {
    const n = s(r);
    n ? n.push(r) : i.push([r]);
  }
  return i;
}
function Ug(e) {
  return {
    id: e.identifier.id,
    name: e.manifest.name,
    galleryId: null,
    publisherId: e.publisherId,
    publisherName: e.manifest.publisher,
    publisherDisplayName: e.publisherDisplayName,
    dependencies: e.manifest.extensionDependencies && e.manifest.extensionDependencies.length > 0,
  };
}
function ra(e) {
  return {
    id: new ia(e.identifier.id),
    name: new ia(e.name),
    version: e.version,
    galleryId: e.identifier.uuid,
    publisherId: e.publisherId,
    publisherName: e.publisher,
    publisherDisplayName: e.publisherDisplayName,
    isPreReleaseVersion: e.properties.isPreReleaseVersion,
    dependencies: !!(e.properties.dependencies && e.properties.dependencies.length > 0),
    isSigned: e.isSigned,
    ...e.telemetryData,
  };
}
var a2 = new ms("pprice.better-merge");
async function jg(e, t) {
  if (!se) return !1;
  let i;
  try {
    i = (await e.readFile(I.file("/etc/os-release"))).value.toString();
  } catch {
    try {
      i = (await e.readFile(I.file("/usr/lib/os-release"))).value.toString();
    } catch (r) {
      t.debug("Error while getting the os-release file.", st(r));
    }
  }
  return !!i && (i.match(/^ID=([^\u001b\r\n]*)/m) || [])[1] === "alpine";
}
async function nu(e, t) {
  const i = await jg(e, t),
    s = _h(i ? "alpine" : Ts, el);
  return t.debug("ComputeTargetPlatform:", s), s;
}
var rr;
(function (e) {
  (e[(e.Ignore = 0)] = "Ignore"), (e[(e.Info = 1)] = "Info"), (e[(e.Warning = 2)] = "Warning"), (e[(e.Error = 3)] = "Error");
})(rr || (rr = {})),
  (function (e) {
    const t = "error",
      i = "warning",
      s = "warn",
      r = "info",
      n = "ignore";
    function o(c) {
      return c ? (Ni(t, c) ? e.Error : Ni(i, c) || Ni(s, c) ? e.Warning : Ni(r, c) ? e.Info : e.Ignore) : e.Ignore;
    }
    e.fromValue = o;
    function a(c) {
      switch (c) {
        case e.Error:
          return t;
        case e.Warning:
          return i;
        case e.Info:
          return r;
        default:
          return n;
      }
    }
    e.toString = a;
  })(rr || (rr = {}));
var Wt = rr,
  hn = {},
  Q = { exports: hn };
(function (e, t) {
  if (typeof hn == "object" && typeof Q == "object") Q.exports = t();
  else if (typeof define == "function" && define.amd) define([], t);
  else {
    var i = t();
    for (var s in i) (typeof hn == "object" ? hn : e)[s] = i[s];
  }
})(typeof self < "u" ? self : void 0, function () {
  return (function (e) {
    var t = {};
    function i(s) {
      if (t[s]) return t[s].exports;
      var r = (t[s] = { i: s, l: !1, exports: {} });
      return e[s].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    return (
      (i.m = e),
      (i.c = t),
      (i.d = function (s, r, n) {
        i.o(s, r) || Object.defineProperty(s, r, { enumerable: !0, get: n });
      }),
      (i.r = function (s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }),
      (i.t = function (s, r) {
        if ((1 & r && (s = i(s)), 8 & r || (4 & r && typeof s == "object" && s && s.__esModule))) return s;
        var n = Object.create(null);
        if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: s }), 2 & r && typeof s != "string"))
          for (var o in s)
            i.d(
              n,
              o,
              function (a) {
                return s[a];
              }.bind(null, o),
            );
        return n;
      }),
      (i.n = function (s) {
        var r =
          s && s.__esModule
            ? function () {
                return s.default;
              }
            : function () {
                return s;
              };
        return i.d(r, "a", r), r;
      }),
      (i.o = function (s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }),
      (i.p = ""),
      i((i.s = 0))
    );
  })([
    function (e, t, i) {
      (function (s) {
        var r;
        (t = e.exports = nt),
          (r =
            typeof s == "object" && s.env && s.env.NODE_DEBUG && /\bsemver\b/i.test(s.env.NODE_DEBUG)
              ? function () {
                  var g = Array.prototype.slice.call(arguments, 0);
                  g.unshift("SEMVER"), console.log.apply(console, g);
                }
              : function () {}),
          (t.SEMVER_SPEC_VERSION = "2.0.0");
        var n = 256,
          o = Number.MAX_SAFE_INTEGER || 9007199254740991,
          a = (t.re = []),
          c = (t.src = []),
          l = 0,
          h = l++;
        c[h] = "0|[1-9]\\d*";
        var u = l++;
        c[u] = "[0-9]+";
        var f = l++;
        c[f] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
        var p = l++;
        c[p] = "(" + c[h] + ")\\.(" + c[h] + ")\\.(" + c[h] + ")";
        var w = l++;
        c[w] = "(" + c[u] + ")\\.(" + c[u] + ")\\.(" + c[u] + ")";
        var m = l++;
        c[m] = "(?:" + c[h] + "|" + c[f] + ")";
        var y = l++;
        c[y] = "(?:" + c[u] + "|" + c[f] + ")";
        var v = l++;
        c[v] = "(?:-(" + c[m] + "(?:\\." + c[m] + ")*))";
        var S = l++;
        c[S] = "(?:-?(" + c[y] + "(?:\\." + c[y] + ")*))";
        var D = l++;
        c[D] = "[0-9A-Za-z-]+";
        var x = l++;
        c[x] = "(?:\\+(" + c[D] + "(?:\\." + c[D] + ")*))";
        var L = l++,
          T = "v?" + c[p] + c[v] + "?" + c[x] + "?";
        c[L] = "^" + T + "$";
        var H = "[v=\\s]*" + c[w] + c[S] + "?" + c[x] + "?",
          ut = l++;
        c[ut] = "^" + H + "$";
        var k = l++;
        c[k] = "((?:<|>)?=?)";
        var Z = l++;
        c[Z] = c[u] + "|x|X|\\*";
        var Ft = l++;
        c[Ft] = c[h] + "|x|X|\\*";
        var z = l++;
        c[z] = "[v=\\s]*(" + c[Ft] + ")(?:\\.(" + c[Ft] + ")(?:\\.(" + c[Ft] + ")(?:" + c[v] + ")?" + c[x] + "?)?)?";
        var ce = l++;
        c[ce] = "[v=\\s]*(" + c[Z] + ")(?:\\.(" + c[Z] + ")(?:\\.(" + c[Z] + ")(?:" + c[S] + ")?" + c[x] + "?)?)?";
        var P = l++;
        c[P] = "^" + c[k] + "\\s*" + c[z] + "$";
        var $ = l++;
        c[$] = "^" + c[k] + "\\s*" + c[ce] + "$";
        var R = l++;
        c[R] = "(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
        var A = l++;
        c[A] = "(?:~>?)";
        var F = l++;
        (c[F] = "(\\s*)" + c[A] + "\\s+"), (a[F] = new RegExp(c[F], "g"));
        var q = l++;
        c[q] = "^" + c[A] + c[z] + "$";
        var it = l++;
        c[it] = "^" + c[A] + c[ce] + "$";
        var bt = l++;
        c[bt] = "(?:\\^)";
        var Pt = l++;
        (c[Pt] = "(\\s*)" + c[bt] + "\\s+"), (a[Pt] = new RegExp(c[Pt], "g"));
        var He = l++;
        c[He] = "^" + c[bt] + c[z] + "$";
        var Pi = l++;
        c[Pi] = "^" + c[bt] + c[ce] + "$";
        var Ge = l++;
        c[Ge] = "^" + c[k] + "\\s*(" + H + ")$|^$";
        var Gi = l++;
        c[Gi] = "^" + c[k] + "\\s*(" + T + ")$|^$";
        var Ue = l++;
        (c[Ue] = "(\\s*)" + c[k] + "\\s*(" + H + "|" + c[z] + ")"), (a[Ue] = new RegExp(c[Ue], "g"));
        var br = l++;
        c[br] = "^\\s*(" + c[z] + ")\\s+-\\s+(" + c[z] + ")\\s*$";
        var Er = l++;
        c[Er] = "^\\s*(" + c[ce] + ")\\s+-\\s+(" + c[ce] + ")\\s*$";
        var fc = l++;
        c[fc] = "(<|>)?=?\\s*\\*";
        for (var ki = 0; ki < 35; ki++) r(ki, c[ki]), a[ki] || (a[ki] = new RegExp(c[ki]));
        function Ai(g, b) {
          if (g instanceof nt) return g;
          if (typeof g != "string" || g.length > n || !(b ? a[ut] : a[L]).test(g)) return null;
          try {
            return new nt(g, b);
          } catch {
            return null;
          }
        }
        function nt(g, b) {
          if (g instanceof nt) {
            if (g.loose === b) return g;
            g = g.version;
          } else if (typeof g != "string") throw new TypeError("Invalid Version: " + g);
          if (g.length > n) throw new TypeError("version is longer than " + n + " characters");
          if (!(this instanceof nt)) return new nt(g, b);
          r("SemVer", g, b), (this.loose = b);
          var E = g.trim().match(b ? a[ut] : a[L]);
          if (!E) throw new TypeError("Invalid Version: " + g);
          if (((this.raw = g), (this.major = +E[1]), (this.minor = +E[2]), (this.patch = +E[3]), this.major > o || this.major < 0)) throw new TypeError("Invalid major version");
          if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
          if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
          E[4]
            ? (this.prerelease = E[4].split(".").map(function (N) {
                if (/^[0-9]+$/.test(N)) {
                  var M = +N;
                  if (M >= 0 && M < o) return M;
                }
                return N;
              }))
            : (this.prerelease = []),
            (this.build = E[5] ? E[5].split(".") : []),
            this.format();
        }
        (t.parse = Ai),
          (t.valid = function (g, b) {
            var E = Ai(g, b);
            return E ? E.version : null;
          }),
          (t.clean = function (g, b) {
            var E = Ai(g.trim().replace(/^[=v]+/, ""), b);
            return E ? E.version : null;
          }),
          (t.SemVer = nt),
          (nt.prototype.format = function () {
            return (this.version = this.major + "." + this.minor + "." + this.patch), this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
          }),
          (nt.prototype.toString = function () {
            return this.version;
          }),
          (nt.prototype.compare = function (g) {
            return r("SemVer.compare", this.version, this.loose, g), g instanceof nt || (g = new nt(g, this.loose)), this.compareMain(g) || this.comparePre(g);
          }),
          (nt.prototype.compareMain = function (g) {
            return g instanceof nt || (g = new nt(g, this.loose)), Ji(this.major, g.major) || Ji(this.minor, g.minor) || Ji(this.patch, g.patch);
          }),
          (nt.prototype.comparePre = function (g) {
            if ((g instanceof nt || (g = new nt(g, this.loose)), this.prerelease.length && !g.prerelease.length)) return -1;
            if (!this.prerelease.length && g.prerelease.length) return 1;
            if (!this.prerelease.length && !g.prerelease.length) return 0;
            var b = 0;
            do {
              var E = this.prerelease[b],
                N = g.prerelease[b];
              if ((r("prerelease compare", b, E, N), E === void 0 && N === void 0)) return 0;
              if (N === void 0) return 1;
              if (E === void 0) return -1;
              if (E !== N) return Ji(E, N);
            } while (++b);
          }),
          (nt.prototype.inc = function (g, b) {
            switch (g) {
              case "premajor":
                (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc("pre", b);
                break;
              case "preminor":
                (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", b);
                break;
              case "prepatch":
                (this.prerelease.length = 0), this.inc("patch", b), this.inc("pre", b);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", b), this.inc("pre", b);
                break;
              case "major":
                (this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0) || this.major++, (this.minor = 0), (this.patch = 0), (this.prerelease = []);
                break;
              case "minor":
                (this.patch === 0 && this.prerelease.length !== 0) || this.minor++, (this.patch = 0), (this.prerelease = []);
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, (this.prerelease = []);
                break;
              case "pre":
                if (this.prerelease.length === 0) this.prerelease = [0];
                else {
                  for (var E = this.prerelease.length; --E >= 0; ) typeof this.prerelease[E] == "number" && (this.prerelease[E]++, (E = -2));
                  E === -1 && this.prerelease.push(0);
                }
                b && (this.prerelease[0] === b ? isNaN(this.prerelease[1]) && (this.prerelease = [b, 0]) : (this.prerelease = [b, 0]));
                break;
              default:
                throw new Error("invalid increment argument: " + g);
            }
            return this.format(), (this.raw = this.version), this;
          }),
          (t.inc = function (g, b, E, N) {
            typeof E == "string" && ((N = E), (E = void 0));
            try {
              return new nt(g, E).inc(b, N).version;
            } catch {
              return null;
            }
          }),
          (t.diff = function (g, b) {
            if (jn(g, b)) return null;
            var E = Ai(g),
              N = Ai(b);
            if (E.prerelease.length || N.prerelease.length) {
              for (var M in E) if ((M === "major" || M === "minor" || M === "patch") && E[M] !== N[M]) return "pre" + M;
              return "prerelease";
            }
            for (var M in E) if ((M === "major" || M === "minor" || M === "patch") && E[M] !== N[M]) return M;
          }),
          (t.compareIdentifiers = Ji);
        var dc = /^[0-9]+$/;
        function Ji(g, b) {
          var E = dc.test(g),
            N = dc.test(b);
          return E && N && ((g = +g), (b = +b)), E && !N ? -1 : N && !E ? 1 : g < b ? -1 : g > b ? 1 : 0;
        }
        function Je(g, b, E) {
          return new nt(g, E).compare(new nt(b, E));
        }
        function xr(g, b, E) {
          return Je(g, b, E) > 0;
        }
        function Sr(g, b, E) {
          return Je(g, b, E) < 0;
        }
        function jn(g, b, E) {
          return Je(g, b, E) === 0;
        }
        function pc(g, b, E) {
          return Je(g, b, E) !== 0;
        }
        function Vn(g, b, E) {
          return Je(g, b, E) >= 0;
        }
        function Bn(g, b, E) {
          return Je(g, b, E) <= 0;
        }
        function $r(g, b, E, N) {
          var M;
          switch (b) {
            case "===":
              typeof g == "object" && (g = g.version), typeof E == "object" && (E = E.version), (M = g === E);
              break;
            case "!==":
              typeof g == "object" && (g = g.version), typeof E == "object" && (E = E.version), (M = g !== E);
              break;
            case "":
            case "=":
            case "==":
              M = jn(g, E, N);
              break;
            case "!=":
              M = pc(g, E, N);
              break;
            case ">":
              M = xr(g, E, N);
              break;
            case ">=":
              M = Vn(g, E, N);
              break;
            case "<":
              M = Sr(g, E, N);
              break;
            case "<=":
              M = Bn(g, E, N);
              break;
            default:
              throw new TypeError("Invalid operator: " + b);
          }
          return M;
        }
        function Se(g, b) {
          if (g instanceof Se) {
            if (g.loose === b) return g;
            g = g.value;
          }
          if (!(this instanceof Se)) return new Se(g, b);
          r("comparator", g, b), (this.loose = b), this.parse(g), this.semver === ks ? (this.value = "") : (this.value = this.operator + this.semver.version), r("comp", this);
        }
        (t.rcompareIdentifiers = function (g, b) {
          return Ji(b, g);
        }),
          (t.major = function (g, b) {
            return new nt(g, b).major;
          }),
          (t.minor = function (g, b) {
            return new nt(g, b).minor;
          }),
          (t.patch = function (g, b) {
            return new nt(g, b).patch;
          }),
          (t.compare = Je),
          (t.compareLoose = function (g, b) {
            return Je(g, b, !0);
          }),
          (t.rcompare = function (g, b, E) {
            return Je(b, g, E);
          }),
          (t.sort = function (g, b) {
            return g.sort(function (E, N) {
              return t.compare(E, N, b);
            });
          }),
          (t.rsort = function (g, b) {
            return g.sort(function (E, N) {
              return t.rcompare(E, N, b);
            });
          }),
          (t.gt = xr),
          (t.lt = Sr),
          (t.eq = jn),
          (t.neq = pc),
          (t.gte = Vn),
          (t.lte = Bn),
          (t.cmp = $r),
          (t.Comparator = Se);
        var ks = {};
        function xt(g, b) {
          if (g instanceof xt) return g.loose === b ? g : new xt(g.raw, b);
          if (g instanceof Se) return new xt(g.value, b);
          if (!(this instanceof xt)) return new xt(g, b);
          if (
            ((this.loose = b),
            (this.raw = g),
            (this.set = g
              .split(/\s*\|\|\s*/)
              .map(function (E) {
                return this.parseRange(E.trim());
              }, this)
              .filter(function (E) {
                return E.length;
              })),
            !this.set.length)
          )
            throw new TypeError("Invalid SemVer Range: " + g);
          this.format();
        }
        function ie(g) {
          return !g || g.toLowerCase() === "x" || g === "*";
        }
        function h1(g, b, E, N, M, _t, ot, le, kt, Jt, je, At, Vt) {
          return (
            (b = ie(E) ? "" : ie(N) ? ">=" + E + ".0.0" : ie(M) ? ">=" + E + "." + N + ".0" : ">=" + b) +
            " " +
            (le = ie(kt) ? "" : ie(Jt) ? "<" + (+kt + 1) + ".0.0" : ie(je) ? "<" + kt + "." + (+Jt + 1) + ".0" : At ? "<=" + kt + "." + Jt + "." + je + "-" + At : "<=" + le)
          ).trim();
        }
        function u1(g, b) {
          for (var E = 0; E < g.length; E++) if (!g[E].test(b)) return !1;
          if (b.prerelease.length) {
            for (E = 0; E < g.length; E++)
              if ((r(g[E].semver), g[E].semver !== ks && g[E].semver.prerelease.length > 0)) {
                var N = g[E].semver;
                if (N.major === b.major && N.minor === b.minor && N.patch === b.patch) return !0;
              }
            return !1;
          }
          return !0;
        }
        function Ir(g, b, E) {
          try {
            b = new xt(b, E);
          } catch {
            return !1;
          }
          return b.test(g);
        }
        function zn(g, b, E, N) {
          var M, _t, ot, le, kt;
          switch (((g = new nt(g, N)), (b = new xt(b, N)), E)) {
            case ">":
              (M = xr), (_t = Bn), (ot = Sr), (le = ">"), (kt = ">=");
              break;
            case "<":
              (M = Sr), (_t = Vn), (ot = xr), (le = "<"), (kt = "<=");
              break;
            default:
              throw new TypeError('Must provide a hilo val of "<" or ">"');
          }
          if (Ir(g, b, N)) return !1;
          for (var Jt = 0; Jt < b.set.length; ++Jt) {
            var je = b.set[Jt],
              At = null,
              Vt = null;
            if (
              (je.forEach(function (he) {
                he.semver === ks && (he = new Se(">=0.0.0")), (At = At || he), (Vt = Vt || he), M(he.semver, At.semver, N) ? (At = he) : ot(he.semver, Vt.semver, N) && (Vt = he);
              }),
              At.operator === le || At.operator === kt || ((!Vt.operator || Vt.operator === le) && _t(g, Vt.semver)) || (Vt.operator === kt && ot(g, Vt.semver)))
            )
              return !1;
          }
          return !0;
        }
        (Se.prototype.parse = function (g) {
          var b = this.loose ? a[Ge] : a[Gi],
            E = g.match(b);
          if (!E) throw new TypeError("Invalid comparator: " + g);
          (this.operator = E[1]), this.operator === "=" && (this.operator = ""), E[2] ? (this.semver = new nt(E[2], this.loose)) : (this.semver = ks);
        }),
          (Se.prototype.toString = function () {
            return this.value;
          }),
          (Se.prototype.test = function (g) {
            return r("Comparator.test", g, this.loose), this.semver === ks || (typeof g == "string" && (g = new nt(g, this.loose)), $r(g, this.operator, this.semver, this.loose));
          }),
          (Se.prototype.intersects = function (g, b) {
            if (!(g instanceof Se)) throw new TypeError("a Comparator is required");
            var E;
            if (this.operator === "") return (E = new xt(g.value, b)), Ir(this.value, E, b);
            if (g.operator === "") return (E = new xt(this.value, b)), Ir(g.semver, E, b);
            var N = !((this.operator !== ">=" && this.operator !== ">") || (g.operator !== ">=" && g.operator !== ">")),
              M = !((this.operator !== "<=" && this.operator !== "<") || (g.operator !== "<=" && g.operator !== "<")),
              _t = this.semver.version === g.semver.version,
              ot = !((this.operator !== ">=" && this.operator !== "<=") || (g.operator !== ">=" && g.operator !== "<=")),
              le = $r(this.semver, "<", g.semver, b) && (this.operator === ">=" || this.operator === ">") && (g.operator === "<=" || g.operator === "<"),
              kt = $r(this.semver, ">", g.semver, b) && (this.operator === "<=" || this.operator === "<") && (g.operator === ">=" || g.operator === ">");
            return N || M || (_t && ot) || le || kt;
          }),
          (t.Range = xt),
          (xt.prototype.format = function () {
            return (
              (this.range = this.set
                .map(function (g) {
                  return g.join(" ").trim();
                })
                .join("||")
                .trim()),
              this.range
            );
          }),
          (xt.prototype.toString = function () {
            return this.range;
          }),
          (xt.prototype.parseRange = function (g) {
            var b = this.loose;
            (g = g.trim()), r("range", g, b);
            var E = b ? a[Er] : a[br];
            (g = g.replace(E, h1)), r("hyphen replace", g), (g = g.replace(a[Ue], "$1$2$3")), r("comparator trim", g, a[Ue]), (g = (g = (g = g.replace(a[F], "$1~")).replace(a[Pt], "$1^")).split(/\s+/).join(" "));
            var N = b ? a[Ge] : a[Gi],
              M = g
                .split(" ")
                .map(function (_t) {
                  return (function (ot, le) {
                    return (
                      r("comp", ot),
                      (ot = (function (kt, Jt) {
                        return kt
                          .trim()
                          .split(/\s+/)
                          .map(function (je) {
                            return (function (At, Vt) {
                              r("caret", At, Vt);
                              var he = Vt ? a[Pi] : a[He];
                              return At.replace(he, function (Re, j, X, gt, yt) {
                                var Bt;
                                return (
                                  r("caret", At, Re, j, X, gt, yt),
                                  ie(j)
                                    ? (Bt = "")
                                    : ie(X)
                                      ? (Bt = ">=" + j + ".0.0 <" + (+j + 1) + ".0.0")
                                      : ie(gt)
                                        ? (Bt = j === "0" ? ">=" + j + "." + X + ".0 <" + j + "." + (+X + 1) + ".0" : ">=" + j + "." + X + ".0 <" + (+j + 1) + ".0.0")
                                        : yt
                                          ? (r("replaceCaret pr", yt),
                                            yt.charAt(0) !== "-" && (yt = "-" + yt),
                                            (Bt =
                                              j === "0"
                                                ? X === "0"
                                                  ? ">=" + j + "." + X + "." + gt + yt + " <" + j + "." + X + "." + (+gt + 1)
                                                  : ">=" + j + "." + X + "." + gt + yt + " <" + j + "." + (+X + 1) + ".0"
                                                : ">=" + j + "." + X + "." + gt + yt + " <" + (+j + 1) + ".0.0"))
                                          : (r("no pr"),
                                            (Bt =
                                              j === "0"
                                                ? X === "0"
                                                  ? ">=" + j + "." + X + "." + gt + " <" + j + "." + X + "." + (+gt + 1)
                                                  : ">=" + j + "." + X + "." + gt + " <" + j + "." + (+X + 1) + ".0"
                                                : ">=" + j + "." + X + "." + gt + " <" + (+j + 1) + ".0.0")),
                                  r("caret return", Bt),
                                  Bt
                                );
                              });
                            })(je, Jt);
                          })
                          .join(" ");
                      })(ot, le)),
                      r("caret", ot),
                      (ot = (function (kt, Jt) {
                        return kt
                          .trim()
                          .split(/\s+/)
                          .map(function (je) {
                            return (function (At, Vt) {
                              var he = Vt ? a[it] : a[q];
                              return At.replace(he, function (Re, j, X, gt, yt) {
                                var Bt;
                                return (
                                  r("tilde", At, Re, j, X, gt, yt),
                                  ie(j)
                                    ? (Bt = "")
                                    : ie(X)
                                      ? (Bt = ">=" + j + ".0.0 <" + (+j + 1) + ".0.0")
                                      : ie(gt)
                                        ? (Bt = ">=" + j + "." + X + ".0 <" + j + "." + (+X + 1) + ".0")
                                        : yt
                                          ? (r("replaceTilde pr", yt), yt.charAt(0) !== "-" && (yt = "-" + yt), (Bt = ">=" + j + "." + X + "." + gt + yt + " <" + j + "." + (+X + 1) + ".0"))
                                          : (Bt = ">=" + j + "." + X + "." + gt + " <" + j + "." + (+X + 1) + ".0"),
                                  r("tilde return", Bt),
                                  Bt
                                );
                              });
                            })(je, Jt);
                          })
                          .join(" ");
                      })(ot, le)),
                      r("tildes", ot),
                      (ot = (function (kt, Jt) {
                        return (
                          r("replaceXRanges", kt, Jt),
                          kt
                            .split(/\s+/)
                            .map(function (je) {
                              return (function (At, Vt) {
                                At = At.trim();
                                var he = Vt ? a[$] : a[P];
                                return At.replace(he, function (Re, j, X, gt, yt, Bt) {
                                  r("xRange", At, Re, j, X, gt, yt, Bt);
                                  var gc = ie(X),
                                    As = gc || ie(gt),
                                    Ds = As || ie(yt);
                                  return (
                                    j === "=" && Ds && (j = ""),
                                    gc
                                      ? (Re = j === ">" || j === "<" ? "<0.0.0" : "*")
                                      : j && Ds
                                        ? (As && (gt = 0),
                                          Ds && (yt = 0),
                                          j === ">" ? ((j = ">="), As ? ((X = +X + 1), (gt = 0), (yt = 0)) : Ds && ((gt = +gt + 1), (yt = 0))) : j === "<=" && ((j = "<"), As ? (X = +X + 1) : (gt = +gt + 1)),
                                          (Re = j + X + "." + gt + "." + yt))
                                        : As
                                          ? (Re = ">=" + X + ".0.0 <" + (+X + 1) + ".0.0")
                                          : Ds && (Re = ">=" + X + "." + gt + ".0 <" + X + "." + (+gt + 1) + ".0"),
                                    r("xRange return", Re),
                                    Re
                                  );
                                });
                              })(je, Jt);
                            })
                            .join(" ")
                        );
                      })(ot, le)),
                      r("xrange", ot),
                      (ot = (function (kt, Jt) {
                        return r("replaceStars", kt, Jt), kt.trim().replace(a[fc], "");
                      })(ot, le)),
                      r("stars", ot),
                      ot
                    );
                  })(_t, b);
                })
                .join(" ")
                .split(/\s+/);
            return (
              this.loose &&
                (M = M.filter(function (_t) {
                  return !!_t.match(N);
                })),
              (M = M.map(function (_t) {
                return new Se(_t, b);
              }))
            );
          }),
          (xt.prototype.intersects = function (g, b) {
            if (!(g instanceof xt)) throw new TypeError("a Range is required");
            return this.set.some(function (E) {
              return E.every(function (N) {
                return g.set.some(function (M) {
                  return M.every(function (_t) {
                    return N.intersects(_t, b);
                  });
                });
              });
            });
          }),
          (t.toComparators = function (g, b) {
            return new xt(g, b).set.map(function (E) {
              return E.map(function (N) {
                return N.value;
              })
                .join(" ")
                .trim()
                .split(" ");
            });
          }),
          (xt.prototype.test = function (g) {
            if (!g) return !1;
            typeof g == "string" && (g = new nt(g, this.loose));
            for (var b = 0; b < this.set.length; b++) if (u1(this.set[b], g)) return !0;
            return !1;
          }),
          (t.satisfies = Ir),
          (t.maxSatisfying = function (g, b, E) {
            var N = null,
              M = null;
            try {
              var _t = new xt(b, E);
            } catch {
              return null;
            }
            return (
              g.forEach(function (ot) {
                _t.test(ot) && ((N && M.compare(ot) !== -1) || (M = new nt((N = ot), E)));
              }),
              N
            );
          }),
          (t.minSatisfying = function (g, b, E) {
            var N = null,
              M = null;
            try {
              var _t = new xt(b, E);
            } catch {
              return null;
            }
            return (
              g.forEach(function (ot) {
                _t.test(ot) && ((N && M.compare(ot) !== 1) || (M = new nt((N = ot), E)));
              }),
              N
            );
          }),
          (t.validRange = function (g, b) {
            try {
              return new xt(g, b).range || "*";
            } catch {
              return null;
            }
          }),
          (t.ltr = function (g, b, E) {
            return zn(g, b, "<", E);
          }),
          (t.gtr = function (g, b, E) {
            return zn(g, b, ">", E);
          }),
          (t.outside = zn),
          (t.prerelease = function (g, b) {
            var E = Ai(g, b);
            return E && E.prerelease.length ? E.prerelease : null;
          }),
          (t.intersects = function (g, b, E) {
            return (g = new xt(g, E)), (b = new xt(b, E)), g.intersects(b);
          }),
          (t.coerce = function (g) {
            if (g instanceof nt) return g;
            if (typeof g != "string") return null;
            var b = g.match(a[R]);
            return b == null ? null : Ai((b[1] || "0") + "." + (b[2] || "0") + "." + (b[3] || "0"));
          });
      }).call(this, i(1));
    },
    function (e, t) {
      var i,
        s,
        r = (e.exports = {});
      function n() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(y) {
        if (i === setTimeout) return setTimeout(y, 0);
        if ((i === n || !i) && setTimeout) return (i = setTimeout), setTimeout(y, 0);
        try {
          return i(y, 0);
        } catch {
          try {
            return i.call(null, y, 0);
          } catch {
            return i.call(this, y, 0);
          }
        }
      }
      (function () {
        try {
          i = typeof setTimeout == "function" ? setTimeout : n;
        } catch {
          i = n;
        }
        try {
          s = typeof clearTimeout == "function" ? clearTimeout : o;
        } catch {
          s = o;
        }
      })();
      var c,
        l = [],
        h = !1,
        u = -1;
      function f() {
        h && c && ((h = !1), c.length ? (l = c.concat(l)) : (u = -1), l.length && p());
      }
      function p() {
        if (!h) {
          var y = a(f);
          h = !0;
          for (var v = l.length; v; ) {
            for (c = l, l = []; ++u < v; ) c && c[u].run();
            (u = -1), (v = l.length);
          }
          (c = null),
            (h = !1),
            (function (S) {
              if (s === clearTimeout) return clearTimeout(S);
              if ((s === o || !s) && clearTimeout) return (s = clearTimeout), clearTimeout(S);
              try {
                s(S);
              } catch {
                try {
                  return s.call(null, S);
                } catch {
                  return s.call(this, S);
                }
              }
            })(y);
        }
      }
      function w(y, v) {
        (this.fun = y), (this.array = v);
      }
      function m() {}
      (r.nextTick = function (y) {
        var v = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var S = 1; S < arguments.length; S++) v[S - 1] = arguments[S];
        l.push(new w(y, v)), l.length !== 1 || h || a(p);
      }),
        (w.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = m),
        (r.addListener = m),
        (r.once = m),
        (r.off = m),
        (r.removeListener = m),
        (r.removeAllListeners = m),
        (r.emit = m),
        (r.prependListener = m),
        (r.prependOnceListener = m),
        (r.listeners = function (y) {
          return [];
        }),
        (r.binding = function (y) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (y) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
  ]);
});
var c2 = Q.exports.SEMVER_SPEC_VERSION,
  l2 = Q.exports.parse,
  Vg = Q.exports.valid,
  h2 = Q.exports.coerce,
  u2 = Q.exports.clean,
  f2 = Q.exports.inc,
  d2 = Q.exports.major,
  p2 = Q.exports.minor,
  g2 = Q.exports.patch,
  m2 = Q.exports.prerelease,
  na = Q.exports.gt,
  w2 = Q.exports.gte,
  v2 = Q.exports.lt,
  y2 = Q.exports.lte,
  Bg = Q.exports.eq,
  b2 = Q.exports.neq,
  E2 = Q.exports.cmp,
  x2 = Q.exports.compare,
  ou = Q.exports.rcompare,
  S2 = Q.exports.compareIdentifiers,
  $2 = Q.exports.rcompareIdentifiers,
  I2 = Q.exports.compareBuild,
  P2 = Q.exports.sort,
  k2 = Q.exports.rsort,
  A2 = Q.exports.diff,
  D2 = Q.exports.validRange,
  R2 = Q.exports.satisfies,
  L2 = Q.exports.maxSatisfying,
  O2 = Q.exports.minSatisfying,
  N2 = Q.exports.minVersion,
  C2 = Q.exports.gtr,
  F2 = Q.exports.ltr,
  T2 = Q.exports.outside,
  M2 = Q.exports.intersects,
  _2 = Q.exports.SemVer,
  U2 = Q.exports.Comparator,
  j2 = Q.exports.Range,
  zg = {
    activeComment: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.activeComment.d.ts" },
    aiRelatedInformation: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.aiRelatedInformation.d.ts" },
    aiTextSearchProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.aiTextSearchProvider.d.ts" },
    aiTextSearchProviderNew: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.aiTextSearchProviderNew.d.ts" },
    attributableCoverage: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.attributableCoverage.d.ts" },
    authLearnMore: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.authLearnMore.d.ts" },
    authSession: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.authSession.d.ts" },
    canonicalUriProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.canonicalUriProvider.d.ts" },
    chatParticipantAdditions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatParticipantAdditions.d.ts" },
    chatParticipantPrivate: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatParticipantPrivate.d.ts", version: 2 },
    chatProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatProvider.d.ts" },
    chatReferenceBinaryData: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatReferenceBinaryData.d.ts" },
    chatTab: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatTab.d.ts" },
    chatVariableResolver: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatVariableResolver.d.ts" },
    codeActionAI: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.codeActionAI.d.ts" },
    codeActionRanges: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.codeActionRanges.d.ts" },
    codiconDecoration: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.codiconDecoration.d.ts" },
    commentReactor: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentReactor.d.ts" },
    commentReveal: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentReveal.d.ts" },
    commentThreadApplicability: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentThreadApplicability.d.ts" },
    commentingRangeHint: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentingRangeHint.d.ts" },
    commentsDraftState: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentsDraftState.d.ts" },
    contribAccessibilityHelpContent: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribAccessibilityHelpContent.d.ts" },
    contribCommentEditorActionsMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribCommentEditorActionsMenu.d.ts" },
    contribCommentPeekContext: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribCommentPeekContext.d.ts" },
    contribCommentThreadAdditionalMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribCommentThreadAdditionalMenu.d.ts" },
    contribCommentsViewThreadMenus: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribCommentsViewThreadMenus.d.ts" },
    contribDebugCreateConfiguration: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribDebugCreateConfiguration.d.ts" },
    contribDiffEditorGutterToolBarMenus: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribDiffEditorGutterToolBarMenus.d.ts" },
    contribEditSessions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribEditSessions.d.ts" },
    contribEditorContentMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribEditorContentMenu.d.ts" },
    contribIssueReporter: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribIssueReporter.d.ts" },
    contribLabelFormatterWorkspaceTooltip: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribLabelFormatterWorkspaceTooltip.d.ts" },
    contribMenuBarHome: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribMenuBarHome.d.ts" },
    contribMergeEditorMenus: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribMergeEditorMenus.d.ts" },
    contribMultiDiffEditorMenus: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribMultiDiffEditorMenus.d.ts" },
    contribNotebookStaticPreloads: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribNotebookStaticPreloads.d.ts" },
    contribRemoteHelp: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribRemoteHelp.d.ts" },
    contribShareMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribShareMenu.d.ts" },
    contribSourceControlHistoryItemMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribSourceControlHistoryItemMenu.d.ts" },
    contribSourceControlHistoryTitleMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribSourceControlHistoryTitleMenu.d.ts" },
    contribSourceControlInputBoxMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribSourceControlInputBoxMenu.d.ts" },
    contribSourceControlTitleMenu: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribSourceControlTitleMenu.d.ts" },
    contribStatusBarItems: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribStatusBarItems.d.ts" },
    contribViewContainerTitle: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribViewContainerTitle.d.ts" },
    contribViewsRemote: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribViewsRemote.d.ts" },
    contribViewsWelcome: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribViewsWelcome.d.ts" },
    createFileSystemWatcher: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.createFileSystemWatcher.d.ts" },
    customEditorMove: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.customEditorMove.d.ts" },
    debugVisualization: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.debugVisualization.d.ts" },
    defaultChatParticipant: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.defaultChatParticipant.d.ts", version: 2 },
    diffCommand: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.diffCommand.d.ts" },
    diffContentOptions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.diffContentOptions.d.ts" },
    documentFiltersExclusive: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.documentFiltersExclusive.d.ts" },
    documentPaste: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.documentPaste.d.ts" },
    editSessionIdentityProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.editSessionIdentityProvider.d.ts" },
    editorHoverVerbosityLevel: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.editorHoverVerbosityLevel.d.ts" },
    editorInsets: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.editorInsets.d.ts" },
    embeddings: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.embeddings.d.ts" },
    extensionRuntime: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.extensionRuntime.d.ts" },
    extensionsAny: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.extensionsAny.d.ts" },
    externalUriOpener: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.externalUriOpener.d.ts" },
    fileComments: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.fileComments.d.ts" },
    fileSearchProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.fileSearchProvider.d.ts" },
    fileSearchProviderNew: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.fileSearchProviderNew.d.ts" },
    findFiles2: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.findFiles2.d.ts" },
    findFiles2New: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.findFiles2New.d.ts" },
    findTextInFiles: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.findTextInFiles.d.ts" },
    findTextInFilesNew: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.findTextInFilesNew.d.ts" },
    fsChunks: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.fsChunks.d.ts" },
    icube: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.icube.d.ts" },
    icubeAuthenticationProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.icubeAuthenticationProvider.d.ts" },
    icubeChat: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.icubeChat.d.ts" },
    icubeChatAgents2: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.icubeChatAgents2.d.ts" },
    icubeChatAgents2Additions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.icubeChatAgents2Additions.d.ts" },
    icubeFolderSearchProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.icubeFolderSearchProvider.d.ts" },
    icubeInteractive: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.icubeInteractive.d.ts" },
    icubeInteractive2: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.icubeInteractive2.d.ts" },
    icubeUser: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.icubeUser.d.ts" },
    idToken: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.idToken.d.ts" },
    inlineCompletionsAdditions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.inlineCompletionsAdditions.d.ts" },
    inlineEdit: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.inlineEdit.d.ts" },
    interactive: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.interactive.d.ts" },
    interactiveUserActions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.interactiveUserActions.d.ts" },
    interactiveWindow: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.interactiveWindow.d.ts" },
    ipc: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.ipc.d.ts" },
    languageModelSystem: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageModelSystem.d.ts" },
    languageStatusText: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageStatusText.d.ts" },
    lmTools: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.lmTools.d.ts", version: 15 },
    mappedEditsProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.mappedEditsProvider.d.ts" },
    multiDocumentHighlightProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.multiDocumentHighlightProvider.d.ts" },
    newSymbolNamesProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.newSymbolNamesProvider.d.ts" },
    notebookCellExecution: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookCellExecution.d.ts" },
    notebookCellExecutionState: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookCellExecutionState.d.ts" },
    notebookControllerAffinityHidden: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookControllerAffinityHidden.d.ts" },
    notebookDeprecated: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookDeprecated.d.ts" },
    notebookExecution: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookExecution.d.ts" },
    notebookKernelSource: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookKernelSource.d.ts" },
    notebookLiveShare: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookLiveShare.d.ts" },
    notebookMessaging: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookMessaging.d.ts" },
    notebookMime: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookMime.d.ts" },
    notebookReplDocument: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookReplDocument.d.ts" },
    notebookVariableProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookVariableProvider.d.ts" },
    portsAttributes: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.portsAttributes.d.ts" },
    profileContentHandlers: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.profileContentHandlers.d.ts" },
    quickDiffProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.quickDiffProvider.d.ts" },
    quickInputButtonLocation: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.quickInputButtonLocation.d.ts" },
    quickPickItemTooltip: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.quickPickItemTooltip.d.ts" },
    quickPickSortByLabel: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.quickPickSortByLabel.d.ts" },
    resolvers: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.resolvers.d.ts" },
    scmActionButton: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmActionButton.d.ts" },
    scmHistoryProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmHistoryProvider.d.ts" },
    scmMultiDiffEditor: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmMultiDiffEditor.d.ts" },
    scmSelectedProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmSelectedProvider.d.ts" },
    scmTextDocument: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmTextDocument.d.ts" },
    scmValidation: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmValidation.d.ts" },
    shareProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.shareProvider.d.ts" },
    showLocal: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.showLocal.d.ts" },
    speech: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.speech.d.ts" },
    tabInputMultiDiff: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.tabInputMultiDiff.d.ts" },
    tabInputTextMerge: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.tabInputTextMerge.d.ts" },
    taskPresentationGroup: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.taskPresentationGroup.d.ts" },
    telemetry: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.telemetry.d.ts" },
    terminalDataWriteEvent: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalDataWriteEvent.d.ts" },
    terminalDimensions: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalDimensions.d.ts" },
    terminalExecuteCommandEvent: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalExecuteCommandEvent.d.ts" },
    terminalQuickFixProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalQuickFixProvider.d.ts" },
    terminalSelection: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.terminalSelection.d.ts" },
    testObserver: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.testObserver.d.ts" },
    testRelatedCode: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.testRelatedCode.d.ts" },
    textSearchCompleteNew: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.textSearchCompleteNew.d.ts" },
    textSearchProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.textSearchProvider.d.ts" },
    textSearchProviderNew: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.textSearchProviderNew.d.ts" },
    timeline: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.timeline.d.ts" },
    tokenInformation: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.tokenInformation.d.ts" },
    treeViewActiveItem: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.treeViewActiveItem.d.ts" },
    treeViewMarkdownMessage: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.treeViewMarkdownMessage.d.ts" },
    treeViewReveal: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.treeViewReveal.d.ts" },
    tunnelFactory: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.tunnelFactory.d.ts" },
    tunnels: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.tunnels.d.ts" },
    webviewInitialState: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.webviewInitialState.d.ts" },
    workspaceTrust: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.workspaceTrust.d.ts" },
  },
  qg = Object.freeze(zg),
  au = /^(\^|>=)?((\d+)|x)\.((\d+)|x)\.((\d+)|x)(\-.*)?$/,
  Wg = /^-(\d{4})(\d{2})(\d{2})$/;
function Hg(e) {
  return (e = e.trim()), e === "*" || au.test(e);
}
function oa(e) {
  if (!Hg(e)) return null;
  if (((e = e.trim()), e === "*")) return { hasCaret: !1, hasGreaterEquals: !1, majorBase: 0, majorMustEqual: !1, minorBase: 0, minorMustEqual: !1, patchBase: 0, patchMustEqual: !1, preRelease: null };
  const t = e.match(au);
  return t
    ? {
        hasCaret: t[1] === "^",
        hasGreaterEquals: t[1] === ">=",
        majorBase: t[2] === "x" ? 0 : parseInt(t[2], 10),
        majorMustEqual: t[2] !== "x",
        minorBase: t[4] === "x" ? 0 : parseInt(t[4], 10),
        minorMustEqual: t[4] !== "x",
        patchBase: t[6] === "x" ? 0 : parseInt(t[6], 10),
        patchMustEqual: t[6] !== "x",
        preRelease: t[8] || null,
      }
    : null;
}
function aa(e) {
  if (!e) return null;
  const t = e.majorBase,
    i = e.majorMustEqual,
    s = e.minorBase;
  let r = e.minorMustEqual;
  const n = e.patchBase;
  let o = e.patchMustEqual;
  e.hasCaret && (t === 0 || (r = !1), (o = !1));
  let a = 0;
  if (e.preRelease) {
    const c = Wg.exec(e.preRelease);
    if (c) {
      const [, l, h, u] = c;
      a = Date.UTC(Number(l), Number(h) - 1, Number(u));
    }
  }
  return { majorBase: t, majorMustEqual: i, minorBase: s, minorMustEqual: r, patchBase: n, patchMustEqual: o, isMinimum: e.hasGreaterEquals, notBefore: a };
}
function Gg(e, t, i) {
  let s;
  typeof e == "string" ? (s = aa(oa(e))) : (s = e);
  let r;
  t instanceof Date ? (r = t.getTime()) : typeof t == "string" && (r = new Date(t).getTime());
  let n;
  if ((typeof i == "string" ? (n = aa(oa(i))) : (n = i), !s || !n)) return !1;
  const o = s.majorBase,
    a = s.minorBase,
    c = s.patchBase;
  let l = n.majorBase,
    h = n.minorBase,
    u = n.patchBase;
  const f = n.notBefore;
  let p = n.majorMustEqual,
    w = n.minorMustEqual,
    m = n.patchMustEqual;
  return n.isMinimum
    ? o > l
      ? !0
      : o < l
        ? !1
        : a > h
          ? !0
          : a < h || (r && r < f)
            ? !1
            : c >= u
    : (o === 1 && l === 0 && (!p || !w || !m) && ((l = 1), (h = 0), (u = 0), (p = !0), (w = !1), (m = !1)), o < l ? !1 : o > l ? !p : a < h ? !1 : a > h ? !w : c < u ? !1 : c > u ? !m : !(r && r < f));
}
function Jg(e, t, i, s, r, n) {
  const o = [];
  if (typeof s.publisher < "u" && typeof s.publisher != "string") return o.push([Wt.Error, d(1873, null)]), o;
  if (typeof s.name != "string") return o.push([Wt.Error, d(1874, null, "name")]), o;
  if (typeof s.version != "string") return o.push([Wt.Error, d(1875, null, "version")]), o;
  if (!s.engines) return o.push([Wt.Error, d(1876, null, "engines")]), o;
  if (typeof s.engines.vscode != "string") return o.push([Wt.Error, d(1877, null, "engines.vscode")]), o;
  if (typeof s.extensionDependencies < "u" && !lu(s.extensionDependencies)) return o.push([Wt.Error, d(1878, null, "extensionDependencies")]), o;
  if (typeof s.activationEvents < "u") {
    if (!lu(s.activationEvents)) return o.push([Wt.Error, d(1879, null, "activationEvents")]), o;
    if (typeof s.main > "u" && typeof s.browser > "u") return o.push([Wt.Error, d(1880, null, "activationEvents", "main", "browser")]), o;
  }
  if ((typeof s.extensionKind < "u" && typeof s.main > "u" && o.push([Wt.Warning, d(1881, null, "extensionKind")]), typeof s.main < "u")) {
    if (typeof s.main != "string") return o.push([Wt.Error, d(1882, null, "main")]), o;
    {
      const l = V(i, s.main);
      Il(l, i) || o.push([Wt.Warning, d(1883, null, l.path, i.path)]);
    }
  }
  if (typeof s.browser < "u") {
    if (typeof s.browser != "string") return o.push([Wt.Error, d(1884, null, "browser")]), o;
    {
      const l = V(i, s.browser);
      Il(l, i) || o.push([Wt.Warning, d(1885, null, l.path, i.path)]);
    }
  }
  if (!Vg(s.version)) return o.push([Wt.Error, d(1886, null)]), o;
  const a = [];
  if (!Qg(e, t, s, r, a)) for (const l of a) o.push([Wt.Error, l]);
  if (n && s.enabledApiProposals?.length) {
    const l = [];
    if (!ca([...s.enabledApiProposals], l)) for (const h of l) o.push([Wt.Error, h]);
  }
  return o;
}
function Qg(e, t, i, s, r) {
  return s || (typeof i.main > "u" && typeof i.browser > "u") ? !0 : cu(e, t, i.engines.vscode, r);
}
function un(e, t, i) {
  return e === "*" || cu(t, i, e);
}
function ca(e, t) {
  if (e.length === 0) return !0;
  const i = Array.isArray(t) ? t : void 0,
    s = (i ? void 0 : t) ?? qg,
    r = [],
    n = yg(e);
  for (const { proposalName: o, version: a } of n) {
    const c = s[o];
    c && a && c.version !== a && r.push(o);
  }
  return r.length
    ? (i &&
        (r.length === 1
          ? i.push(d(1887, null, r[0]))
          : i.push(
              d(
                1888,
                null,
                r
                  .slice(0, r.length - 1)
                  .map((o) => `'${o}'`)
                  .join(", "),
                r[r.length - 1],
              ),
            )),
      !1)
    : !0;
}
function cu(e, t, i, s = []) {
  const r = aa(oa(i));
  if (!r) return s.push(d(1889, null, i)), !1;
  if (r.majorBase === 0) {
    if (!r.majorMustEqual || !r.minorMustEqual) return s.push(d(1890, null, i)), !1;
  } else if (!r.majorMustEqual) return s.push(d(1891, null, i)), !1;
  return Gg(e, t, r) ? !0 : (s.push(d(1892, null, e, i)), !1);
}
function lu(e) {
  if (!Array.isArray(e)) return !1;
  for (let t = 0, i = e.length; t < i; t++) if (typeof e[t] != "string") return !1;
  return !0;
}
var Te = ct("productService");
async function Xg(e, t, i) {
  let s = (i && i.get("storage.serviceMachineId", -1)) || null;
  if (s) return s;
  try {
    const n = (await t.readFile(e.serviceMachineIdResource)).value.toString();
    s = xg(n) ? n : null;
  } catch {
    s = null;
  }
  if (!s) {
    s = Kt();
    try {
      await t.writeFile(e.serviceMachineIdResource, B.fromString(s));
    } catch {}
  }
  return i?.store("storage.serviceMachineId", s, -1, 1), s;
}
async function Zg(e, t, i, s, r, n, o) {
  const a = { "X-Market-Client-Id": `VSCode ${e}`, "User-Agent": `VSCode ${e} (${t.nameShort})` };
  if (tu(t, i) && eu(s) === 3) {
    const c = await Xg(i, r, n);
    (a["X-Market-User-Id"] = c), (a["VSCode-SessionId"] = o.machineId || c);
  }
  return a;
}
function la(e) {
  const t = [];
  typeof e == "number" && t.push("code/timeOrigin", e);
  function i(r, n) {
    t.push(r, n?.startTime ?? Date.now());
  }
  function s() {
    const r = [];
    for (let n = 0; n < t.length; n += 2) r.push({ name: t[n], startTime: t[n + 1] });
    return r;
  }
  return { mark: i, getMarks: s };
}
function Yg() {
  if (typeof performance == "object" && typeof performance.mark == "function" && !performance.nodeTiming)
    return typeof performance.timeOrigin != "number" && !performance.timing
      ? la()
      : {
          mark(e, t) {
            performance.mark(e, t);
          },
          getMarks() {
            let e = performance.timeOrigin;
            typeof e != "number" && (e = performance.timing.navigationStart || performance.timing.redirectStart || performance.timing.fetchStart);
            const t = [{ name: "code/timeOrigin", startTime: Math.round(e) }];
            for (const i of performance.getEntriesByType("mark")) t.push({ name: i.name, startTime: Math.round(e + i.startTime) });
            return t;
          },
        };
  if (typeof process == "object") {
    const e = performance?.timeOrigin;
    return la(e);
  } else return console.trace("perf-util loaded in UNKNOWN environment"), la();
}
function Kg(e) {
  return e.MonacoPerformanceMarks || (e.MonacoPerformanceMarks = Yg()), e.MonacoPerformanceMarks;
}
var hu = Kg(globalThis),
  ha = hu.mark,
  V2 = hu.getMarks;
function t4(e) {
  return JSON.stringify(e, i4);
}
function e4(e) {
  let t = JSON.parse(e);
  return (t = ws(t)), t;
}
function i4(e, t) {
  return t instanceof RegExp ? { $mid: 2, source: t.source, flags: t.flags } : t;
}
function ws(e, t = 0) {
  if (!e || t > 200) return e;
  if (typeof e == "object") {
    switch (e.$mid) {
      case 1:
        return I.revive(e);
      case 2:
        return new RegExp(e.source, e.flags);
      case 17:
        return new Date(e.source);
    }
    if (e instanceof B || e instanceof Uint8Array) return e;
    if (Array.isArray(e)) for (let i = 0; i < e.length; ++i) e[i] = ws(e[i], t + 1);
    else for (const i in e) Object.hasOwnProperty.call(e, i) && (e[i] = ws(e[i], t + 1));
  }
  return e;
}
var nr;
(function (e) {
  (e[(e.STORAGE_DOES_NOT_EXIST = 0)] = "STORAGE_DOES_NOT_EXIST"), (e[(e.STORAGE_IN_MEMORY = 1)] = "STORAGE_IN_MEMORY");
})(nr || (nr = {}));
var Me;
(function (e) {
  (e[(e.None = 0)] = "None"), (e[(e.Initialized = 1)] = "Initialized"), (e[(e.Closed = 2)] = "Closed");
})(Me || (Me = {}));
var s4 = ["workbench.auxiliaryBar.size", "workbench.sideBar.size", "workbench.panel.size"],
  B2 = class o1 extends G {
    static {
      this.a = 100;
    }
    constructor(t, i = Object.create(null)) {
      super(),
        (this.r = t),
        (this.s = i),
        (this.b = this.B(new Xn())),
        (this.onDidChangeStorage = this.b.event),
        (this.c = Me.None),
        (this.f = new Map()),
        (this.g = this.B(new Ci(o1.a))),
        (this.h = new Set()),
        (this.j = new Map()),
        (this.m = void 0),
        (this.n = []),
        this.t();
    }
    t() {
      this.B(this.r.onDidChangeItemsExternal((t) => this.u(t)));
    }
    u(t) {
      this.b.pause();
      try {
        t.changed?.forEach((i, s) => this.w(s, i)), t.deleted?.forEach((i) => this.w(i, void 0));
      } finally {
        this.b.resume();
      }
    }
    w(t, i) {
      if (this.c === Me.Closed) return;
      let s = !1;
      Xt(i) ? (s = this.f.delete(t)) : this.f.get(t) !== i && (this.f.set(t, i), (s = !0)), s && this.b.fire({ key: t, external: !0 });
    }
    get items() {
      return this.f;
    }
    get size() {
      return this.f.size;
    }
    async init() {
      this.c === Me.None && ((this.c = Me.Initialized), this.s.hint !== nr.STORAGE_DOES_NOT_EXIST && (this.f = await this.r.getItems()));
    }
    get(t, i) {
      const s = this.f.get(t);
      return Xt(s) ? i : s;
    }
    getBoolean(t, i) {
      const s = this.get(t);
      return Xt(s) ? i : s === "true";
    }
    getNumber(t, i) {
      const s = this.get(t);
      return Xt(s) ? i : parseInt(s, 10);
    }
    getObject(t, i) {
      const s = this.get(t);
      return Xt(s) ? i : e4(s);
    }
    async set(t, i, s = !1) {
      if (this.c === Me.Closed) return;
      if (Xt(i)) return this.delete(t, s);
      const r = Ct(i) || Array.isArray(i) ? t4(i) : String(i);
      if (this.f.get(t) !== r) return this.f.set(t, r), this.j.set(t, r), this.h.delete(t), this.b.fire({ key: t, external: s }), s4.includes(t) ? this.C() : this.D();
    }
    async delete(t, i = !1) {
      if (!(this.c === Me.Closed || !this.f.delete(t))) return this.h.has(t) || this.h.add(t), this.j.delete(t), this.b.fire({ key: t, external: i }), this.D();
    }
    async optimize() {
      if (this.c !== Me.Closed) return await this.flush(0), this.r.optimize();
    }
    async close() {
      return this.m || (this.m = this.y()), this.m;
    }
    async y() {
      this.c = Me.Closed;
      try {
        await this.D(0);
      } catch {}
      await this.r.close(() => this.f);
    }
    get z() {
      return this.j.size > 0 || this.h.size > 0;
    }
    async C() {
      if (!this.z) return;
      const t = { insert: this.j, delete: this.h };
      return (
        (this.h = new Set()),
        (this.j = new Map()),
        this.r.updateItems(t).finally(() => {
          if (!this.z) for (; this.n.length; ) this.n.pop()?.();
        })
      );
    }
    async flush(t) {
      if (!(this.c === Me.Closed || this.m)) return this.D(t);
    }
    async D(t) {
      return this.s.hint === nr.STORAGE_IN_MEMORY ? this.C() : this.g.trigger(() => this.C(), t);
    }
    async whenFlushed() {
      if (this.z) return new Promise((t) => this.n.push(t));
    }
    isInMemory() {
      return this.s.hint === nr.STORAGE_IN_MEMORY;
    }
  },
  z2 = ct("contextService");
function r4(e) {
  const t = e;
  return typeof t?.id == "string" && I.isUri(t.uri);
}
function n4(e) {
  const t = e;
  return typeof t?.id == "string" && I.isUri(t.configPath);
}
var uu;
(function (e) {
  (e[(e.EMPTY = 1)] = "EMPTY"), (e[(e.FOLDER = 2)] = "FOLDER"), (e[(e.WORKSPACE = 3)] = "WORKSPACE");
})(uu || (uu = {}));
var fu = "code-workspace",
  q2 = `.${fu}`,
  W2 = [{ name: d(2793, null), extensions: [fu] }],
  Ht = ct("IUriIdentityService"),
  du;
(function (e) {
  (e.Settings = "settings"), (e.Keybindings = "keybindings"), (e.Snippets = "snippets"), (e.Tasks = "tasks"), (e.Extensions = "extensions"), (e.GlobalState = "globalState");
})(du || (du = {}));
function o4(e) {
  const t = e;
  return !!(
    t &&
    typeof t == "object" &&
    typeof t.id == "string" &&
    typeof t.isDefault == "boolean" &&
    typeof t.name == "string" &&
    I.isUri(t.location) &&
    I.isUri(t.globalStorageHome) &&
    I.isUri(t.settingsResource) &&
    I.isUri(t.keybindingsResource) &&
    I.isUri(t.tasksResource) &&
    I.isUri(t.snippetsHome) &&
    I.isUri(t.extensionsResource)
  );
}
var _e = ct("IUserDataProfilesService");
function fn(e, t, i, s, r, n) {
  return {
    id: e,
    name: t,
    location: i,
    isDefault: !1,
    icon: r?.icon,
    globalStorageHome: n && r?.useDefaultFlags?.globalState ? n.globalStorageHome : V(i, "globalStorage"),
    settingsResource: n && r?.useDefaultFlags?.settings ? n.settingsResource : V(i, "settings.json"),
    keybindingsResource: n && r?.useDefaultFlags?.keybindings ? n.keybindingsResource : V(i, "keybindings.json"),
    tasksResource: n && r?.useDefaultFlags?.tasks ? n.tasksResource : V(i, "tasks.json"),
    snippetsHome: n && r?.useDefaultFlags?.snippets ? n.snippetsHome : V(i, "snippets"),
    extensionsResource: n && r?.useDefaultFlags?.extensions ? n.extensionsResource : V(i, "extensions.json"),
    cacheHome: V(s, e),
    useDefaultFlags: r?.useDefaultFlags,
    isTransient: r?.transient,
    workspaces: r?.workspaces,
  };
}
var ua = class extends G {
  static {
    this.b = "userDataProfiles";
  }
  static {
    this.c = "profileAssociations";
  }
  get defaultProfile() {
    return this.profiles[0];
  }
  get profiles() {
    return [...this.C.profiles, ...this.r.profiles];
  }
  constructor(t, i, s, r) {
    super(),
      (this.s = t),
      (this.t = i),
      (this.u = s),
      (this.y = r),
      (this.g = this.B(new O())),
      (this.onDidChangeProfiles = this.g.event),
      (this.h = this.B(new O())),
      (this.onWillCreateProfile = this.h.event),
      (this.j = this.B(new O())),
      (this.onWillRemoveProfile = this.j.event),
      (this.m = this.B(new O())),
      (this.onDidResetWorkspaces = this.m.event),
      (this.n = new Map()),
      (this.r = { profiles: [], emptyWindows: new Map() }),
      (this.profilesHome = V(this.s.userRoamingDataHome, "profiles")),
      (this.f = V(this.s.cacheHome, "CachedProfilesData"));
  }
  init() {
    this.z = void 0;
  }
  get C() {
    if (!this.z) {
      const t = this.D(),
        i = [t];
      try {
        for (const r of this.N()) {
          if (!r.name || !zt(r.name) || !r.location) {
            this.y.warn("Skipping the invalid stored profile", r.location || r.name);
            continue;
          }
          i.push(fn(ns(r.location), r.name, r.location, this.f, { icon: r.icon, useDefaultFlags: r.useDefaultFlags }, t));
        }
      } catch (r) {
        this.y.error(r);
      }
      const s = new Map();
      if (i.length)
        try {
          const r = this.P();
          if (r.workspaces)
            for (const [n, o] of Object.entries(r.workspaces)) {
              const a = I.parse(n),
                c = i.find((l) => l.id === o);
              if (c) {
                const l = c.workspaces ? c.workspaces.slice(0) : [];
                l.push(a), (c.workspaces = l);
              }
            }
          if (r.emptyWindows)
            for (const [n, o] of Object.entries(r.emptyWindows)) {
              const a = i.find((c) => c.id === o);
              a && s.set(n, a);
            }
        } catch (r) {
          this.y.error(r);
        }
      this.z = { profiles: i, emptyWindows: s };
    }
    return this.z;
  }
  D() {
    const t = fn("__default__profile__", d(2746, null), this.s.userRoamingDataHome, this.f);
    return { ...t, extensionsResource: this.R() ?? t.extensionsResource, isDefault: !0 };
  }
  async createTransientProfile(t) {
    const i = "Temp",
      s = new RegExp(`${Ms(i)}\\s(\\d+)`);
    let r = 0;
    for (const o of this.profiles) {
      const a = s.exec(o.name),
        c = a ? parseInt(a[1]) : 0;
      r = c > r ? c : r;
    }
    const n = `${i} ${r + 1}`;
    return this.createProfile(ls(Kt()).toString(16), n, { transient: !0 }, t);
  }
  async createNamedProfile(t, i, s) {
    return this.createProfile(ls(Kt()).toString(16), t, i, s);
  }
  async createProfile(t, i, s, r) {
    return await this.F(t, i, s, r);
  }
  async F(t, i, s, r) {
    if (!zt(i) || !i) throw new Error("Name of the profile is mandatory and must be of type `string`");
    let n = this.n.get(i);
    return (
      n ||
        ((n = (async () => {
          try {
            if (this.profiles.find((h) => h.id === t || (!h.isTransient && !s?.transient && h.name === i))) throw new Error(`Profile with ${i} name already exists`);
            const a = r ? this.G(r) : void 0;
            I.isUri(a) && (s = { ...s, workspaces: [a] });
            const c = fn(t, i, V(this.profilesHome, t), this.f, s, this.defaultProfile);
            await this.t.createFolder(c.location);
            const l = [];
            return (
              this.h.fire({
                profile: c,
                join(h) {
                  l.push(h);
                },
              }),
              await me.settled(l),
              a && !I.isUri(a) && this.L(a, c, !!c.isTransient),
              this.I([c], [], []),
              c
            );
          } finally {
            this.n.delete(i);
          }
        })()),
        this.n.set(i, n)),
      n
    );
  }
  async updateProfile(t, i) {
    const s = [];
    for (const n of this.profiles) {
      let o;
      if (t.id === n.id)
        n.isDefault
          ? i.workspaces && ((o = n), (o.workspaces = i.workspaces))
          : (o = fn(
              n.id,
              i.name ?? n.name,
              n.location,
              this.f,
              { icon: i.icon === null ? void 0 : (i.icon ?? n.icon), transient: i.transient ?? n.isTransient, useDefaultFlags: i.useDefaultFlags ?? n.useDefaultFlags, workspaces: i.workspaces ?? n.workspaces },
              this.defaultProfile,
            ));
      else if (i.workspaces) {
        const a = n.workspaces?.filter((c) => !i.workspaces?.some((l) => this.u.extUri.isEqual(c, l)));
        n.workspaces?.length !== a?.length && ((o = n), (o.workspaces = a));
      }
      o && s.push(o);
    }
    if (!s.length) throw t.isDefault ? new Error("Cannot update default profile") : new Error(`Profile '${t.name}' does not exist`);
    this.I([], [], s);
    const r = this.profiles.find((n) => n.id === t.id);
    if (!r) throw new Error(`Profile '${t.name}' was not updated`);
    return r;
  }
  async removeProfile(t) {
    if (t.isDefault) throw new Error("Cannot remove default profile");
    const i = this.profiles.find((r) => r.id === t.id);
    if (!i) throw new Error(`Profile '${t.name}' does not exist`);
    const s = [];
    this.j.fire({
      profile: i,
      join(r) {
        s.push(r);
      },
    });
    try {
      await Promise.allSettled(s);
    } catch (r) {
      this.y.error(r);
    }
    this.I([], [i], []);
    try {
      await this.t.del(i.cacheHome, { recursive: !0 });
    } catch (r) {
      Yt(r) !== 1 && this.y.error(r);
    }
  }
  async setProfileForWorkspace(t, i) {
    const s = this.profiles.find((n) => n.id === i.id);
    if (!s) throw new Error(`Profile '${i.name}' does not exist`);
    const r = this.G(t);
    if (I.isUri(r)) {
      const n = s.workspaces ? [...s.workspaces] : [];
      n.some((o) => this.u.extUri.isEqual(o, r)) || (n.push(r), await this.updateProfile(s, { workspaces: n }));
    } else this.L(r, s, !1), this.M(this.profiles);
  }
  unsetWorkspace(t, i = !1) {
    const s = this.G(t);
    if (I.isUri(s)) {
      const r = this.getProfileForWorkspace(t);
      r && this.updateProfile(r, { workspaces: r.workspaces?.filter((n) => !this.u.extUri.isEqual(n, s)) });
    } else this.L(s, void 0, i), this.M(this.profiles);
  }
  async resetWorkspaces() {
    this.r.emptyWindows.clear(), this.C.emptyWindows.clear();
    for (const t of this.profiles) t.workspaces = void 0;
    this.I([], [], this.profiles), this.m.fire();
  }
  async cleanUp() {
    if (await this.t.exists(this.profilesHome)) {
      const t = await this.t.resolve(this.profilesHome);
      await Promise.all((t.children || []).filter((i) => i.isDirectory && this.profiles.every((s) => !this.u.extUri.isEqual(s.location, i.resource))).map((i) => this.t.del(i.resource, { recursive: !0 })));
    }
  }
  async cleanUpTransientProfiles() {
    const t = this.r.profiles.filter((i) => !this.H(i));
    await Promise.allSettled(t.map((i) => this.removeProfile(i)));
  }
  getProfileForWorkspace(t) {
    const i = this.G(t);
    return I.isUri(i) ? this.profiles.find((s) => s.workspaces?.some((r) => this.u.extUri.isEqual(r, i))) : (this.C.emptyWindows.get(i) ?? this.r.emptyWindows.get(i));
  }
  G(t) {
    return r4(t) ? t.uri : n4(t) ? t.configPath : t.id;
  }
  H(t) {
    return !!(t.workspaces?.length || [...this.C.emptyWindows.values()].some((i) => this.u.extUri.isEqual(i.location, t.location)) || [...this.r.emptyWindows.values()].some((i) => this.u.extUri.isEqual(i.location, t.location)));
  }
  I(t, i, s) {
    const r = [...this.profiles, ...t],
      n = this.r.profiles;
    this.r.profiles = [];
    const o = [];
    for (let a of r) {
      if (i.some((c) => a.id === c.id)) {
        for (const c of [...this.C.emptyWindows.keys()]) a.id === this.C.emptyWindows.get(c)?.id && this.C.emptyWindows.delete(c);
        continue;
      }
      if (!a.isDefault) {
        a = s.find((l) => a.id === l.id) ?? a;
        const c = n.find((l) => a.id === l.id);
        if (a.isTransient) this.r.profiles.push(a);
        else if (c) {
          for (const [l, h] of this.r.emptyWindows.entries())
            if (a.id === h.id) {
              this.r.emptyWindows.delete(l), this.C.emptyWindows.set(l, a);
              break;
            }
        }
      }
      a.workspaces?.length === 0 && (a.workspaces = void 0), o.push(a);
    }
    this.M(o), this.J(t, i, s);
  }
  J(t, i, s) {
    this.g.fire({ added: t, removed: i, updated: s, all: this.profiles });
  }
  L(t, i, s) {
    (s = i?.isTransient ? !0 : s), s ? (i ? this.r.emptyWindows.set(t, i) : this.r.emptyWindows.delete(t)) : (this.r.emptyWindows.delete(t), i ? this.C.emptyWindows.set(t, i) : this.C.emptyWindows.delete(t));
  }
  M(t) {
    const i = [],
      s = {},
      r = {};
    for (const n of t) if (!n.isTransient && (n.isDefault || i.push({ location: n.location, name: n.name, icon: n.icon, useDefaultFlags: n.useDefaultFlags }), n.workspaces)) for (const o of n.workspaces) s[o.toString()] = n.id;
    for (const [n, o] of this.C.emptyWindows.entries()) r[n.toString()] = o.id;
    this.Q({ workspaces: s, emptyWindows: r }), this.O(i), (this.z = void 0);
  }
  N() {
    return [];
  }
  O(t) {
    throw new Error("not implemented");
  }
  P() {
    return {};
  }
  Q(t) {
    throw new Error("not implemented");
  }
  R() {}
};
ua = __decorate([__param(0, ri), __param(1, $t), __param(2, Ht), __param(3, ht)], ua);
var a4 = "__$__isNewStorageMarker",
  dn = "__$__targetStorageMarker",
  c4 = ct("storageService"),
  vs;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"), (e[(e.SHUTDOWN = 1)] = "SHUTDOWN");
})(vs || (vs = {}));
var pu;
(function (e) {
  (e[(e.APPLICATION = -1)] = "APPLICATION"), (e[(e.PROFILE = 0)] = "PROFILE"), (e[(e.WORKSPACE = 1)] = "WORKSPACE"), (e[(e.ICUBE_PROFILE = 2)] = "ICUBE_PROFILE");
})(pu || (pu = {}));
var gu;
(function (e) {
  (e[(e.USER = 0)] = "USER"), (e[(e.MACHINE = 1)] = "MACHINE");
})(gu || (gu = {}));
function l4(e) {
  const t = e.get(dn);
  if (t)
    try {
      return JSON.parse(t);
    } catch {}
  return Object.create(null);
}
var G2 = class a1 extends G {
  static {
    this.a = 60 * 1e3;
  }
  constructor(t = { flushInterval: a1.a }) {
    super(),
      (this.m = t),
      (this.b = this.B(new Xn())),
      (this.c = this.B(new Xn())),
      (this.onDidChangeTarget = this.c.event),
      (this.f = this.B(new O())),
      (this.onWillSaveState = this.f.event),
      (this.h = this.B(new Vr(() => this.n(), this.m.flushInterval))),
      (this.j = this.B(new kr())),
      (this.C = void 0),
      (this.F = void 0),
      (this.H = void 0),
      (this.J = void 0);
  }
  onDidChangeValue(t, i, s) {
    return at.filter(this.b.event, (r) => r.scope === t && (i === void 0 || r.key === i), s);
  }
  n() {
    this.j.value = Cl(() => {
      this.r() && this.flush(), this.h.schedule();
    });
  }
  r() {
    return !0;
  }
  t() {
    $e([this.j, this.h]);
  }
  initialize() {
    return (
      this.g ||
        (this.g = (async () => {
          ha("code/willInitStorage");
          try {
            await this.Q();
          } finally {
            ha("code/didInitStorage");
          }
          this.h.schedule();
        })()),
      this.g
    );
  }
  u(t, i) {
    const { key: s, external: r } = i;
    if (s === dn) {
      switch (t) {
        case -1:
          this.H = void 0;
          break;
        case 0:
          this.F = void 0;
          break;
        case 1:
          this.C = void 0;
          break;
        case 2:
          this.J = void 0;
          break;
      }
      this.c.fire({ scope: t });
    } else this.b.fire({ scope: t, key: s, target: this.M(t)[s], external: r });
  }
  w(t) {
    this.f.fire({ reason: t });
  }
  get(t, i, s) {
    return this.R(i)?.get(t, s);
  }
  getBoolean(t, i, s) {
    return this.R(i)?.getBoolean(t, s);
  }
  getNumber(t, i, s) {
    return this.R(i)?.getNumber(t, s);
  }
  getObject(t, i, s) {
    return this.R(i)?.getObject(t, s);
  }
  storeAll(t, i) {
    this.y(() => {
      for (const s of t) this.store(s.key, s.value, s.scope, s.target, i);
    });
  }
  store(t, i, s, r, n = !1) {
    if (Xt(i)) {
      this.remove(t, s, n);
      return;
    }
    this.y(() => {
      this.z(t, s, r), this.R(s)?.set(t, i, n);
    });
  }
  remove(t, i, s = !1) {
    this.y(() => {
      this.z(t, i, void 0), this.R(i)?.delete(t, s);
    });
  }
  y(t) {
    this.b.pause(), this.c.pause();
    try {
      t();
    } finally {
      this.b.resume(), this.c.resume();
    }
  }
  keys(t, i) {
    const s = [],
      r = this.M(t);
    for (const n of Object.keys(r)) r[n] === i && s.push(n);
    return s;
  }
  z(t, i, s, r = !1) {
    const n = this.M(i);
    typeof s == "number" ? n[t] !== s && ((n[t] = s), this.R(i)?.set(dn, JSON.stringify(n), r)) : typeof n[t] == "number" && (delete n[t], this.R(i)?.set(dn, JSON.stringify(n), r));
  }
  get D() {
    return this.C || (this.C = this.N(1)), this.C;
  }
  get G() {
    return this.F || (this.F = this.N(0)), this.F;
  }
  get I() {
    return this.H || (this.H = this.N(-1)), this.H;
  }
  get L() {
    return this.J || (this.J = this.N(2)), this.J;
  }
  M(t) {
    switch (t) {
      case -1:
        return this.I;
      case 0:
        return this.G;
      case 2:
        return this.L;
      default:
        return this.D;
    }
  }
  N(t) {
    const i = this.R(t);
    return i ? l4(i) : Object.create(null);
  }
  isNew(t) {
    return this.getBoolean(a4, t) === !0;
  }
  async flush(t = vs.NONE) {
    this.f.fire({ reason: t });
    const i = this.R(-1),
      s = this.R(0),
      r = this.R(1);
    switch (t) {
      case vs.NONE:
        await me.settled([i?.whenFlushed() ?? Promise.resolve(), s?.whenFlushed() ?? Promise.resolve(), r?.whenFlushed() ?? Promise.resolve()]);
        break;
      case vs.SHUTDOWN:
        await me.settled([i?.flush(0) ?? Promise.resolve(), s?.flush(0) ?? Promise.resolve(), r?.flush(0) ?? Promise.resolve()]);
        break;
    }
  }
  async log() {
    const t = this.R(-1)?.items ?? new Map(),
      i = this.R(0)?.items ?? new Map(),
      s = this.R(1)?.items ?? new Map();
    return h4(t, i, s, this.S(-1) ?? "", this.S(0) ?? "", this.S(1) ?? "");
  }
  async optimize(t) {
    return await this.flush(), this.R(t)?.optimize();
  }
  async switch(t, i) {
    return this.w(vs.NONE), o4(t) ? this.U(t, i) : this.W(t, i);
  }
  O(t, i) {
    return !(t.id === i.id || (mu(i) && mu(t)));
  }
  P(t, i, s) {
    this.y(() => {
      const r = new Set();
      for (const [n, o] of t) r.add(n), i.get(n) !== o && this.u(s, { key: n, external: !0 });
      for (const [n] of i.items) r.has(n) || this.u(s, { key: n, external: !0 });
    });
  }
};
function mu(e) {
  return e.isDefault || !!e.useDefaultFlags?.globalState;
}
async function h4(e, t, i, s, r, n) {
  const o = (m) => {
      try {
        return JSON.parse(m);
      } catch {
        return m;
      }
    },
    a = new Map(),
    c = new Map();
  e.forEach((m, y) => {
    a.set(y, m), c.set(y, o(m));
  });
  const l = new Map(),
    h = new Map();
  t.forEach((m, y) => {
    l.set(y, m), h.set(y, o(m));
  });
  const u = new Map(),
    f = new Map();
  i.forEach((m, y) => {
    u.set(y, m), f.set(y, o(m));
  }),
    console.group(s !== r ? `Storage: Application (path: ${s})` : `Storage: Application & Profile (path: ${s}, default profile)`);
  const p = [];
  if (
    (a.forEach((m, y) => {
      p.push({ key: y, value: m });
    }),
    console.table(p),
    console.groupEnd(),
    console.log(c),
    s !== r)
  ) {
    console.group(`Storage: Profile (path: ${r}, profile specific)`);
    const m = [];
    l.forEach((y, v) => {
      m.push({ key: v, value: y });
    }),
      console.table(m),
      console.groupEnd(),
      console.log(h);
  }
  console.group(`Storage: Workspace (path: ${n})`);
  const w = [];
  u.forEach((m, y) => {
    w.push({ key: y, value: m });
  }),
    console.table(w),
    console.groupEnd(),
    console.log(f);
}
var J2 = ct("remoteStorageService"),
  wu = fe ? "web" : _h(Ts, el),
  or = "X-Market-Search-Activity-Id",
  dt;
(function (e) {
  (e[(e.None = 0)] = "None"),
    (e[(e.IncludeVersions = 1)] = "IncludeVersions"),
    (e[(e.IncludeFiles = 2)] = "IncludeFiles"),
    (e[(e.IncludeCategoryAndTags = 4)] = "IncludeCategoryAndTags"),
    (e[(e.IncludeSharedAccounts = 8)] = "IncludeSharedAccounts"),
    (e[(e.IncludeVersionProperties = 16)] = "IncludeVersionProperties"),
    (e[(e.ExcludeNonValidated = 32)] = "ExcludeNonValidated"),
    (e[(e.IncludeInstallationTargets = 64)] = "IncludeInstallationTargets"),
    (e[(e.IncludeAssetUri = 128)] = "IncludeAssetUri"),
    (e[(e.IncludeStatistics = 256)] = "IncludeStatistics"),
    (e[(e.IncludeLatestVersionOnly = 512)] = "IncludeLatestVersionOnly"),
    (e[(e.Unpublished = 4096)] = "Unpublished"),
    (e[(e.IncludeNameConflictInfo = 32768)] = "IncludeNameConflictInfo");
})(dt || (dt = {}));
function u4(...e) {
  return String(e.reduce((t, i) => t | i, 0));
}
var jt;
(function (e) {
  (e[(e.Tag = 1)] = "Tag"),
    (e[(e.ExtensionId = 4)] = "ExtensionId"),
    (e[(e.Category = 5)] = "Category"),
    (e[(e.ExtensionName = 7)] = "ExtensionName"),
    (e[(e.Target = 8)] = "Target"),
    (e[(e.Featured = 9)] = "Featured"),
    (e[(e.SearchText = 10)] = "SearchText"),
    (e[(e.ExcludeWithFlags = 12)] = "ExcludeWithFlags");
})(jt || (jt = {}));
var Gt = {
    Icon: "Microsoft.VisualStudio.Services.Icons.Default",
    Details: "Microsoft.VisualStudio.Services.Content.Details",
    Changelog: "Microsoft.VisualStudio.Services.Content.Changelog",
    Manifest: "Microsoft.VisualStudio.Code.Manifest",
    VSIX: "Microsoft.VisualStudio.Services.VSIXPackage",
    License: "Microsoft.VisualStudio.Services.Content.License",
    Repository: "Microsoft.VisualStudio.Services.Links.Source",
    Signature: "Microsoft.VisualStudio.Services.VsixSignature",
  },
  oi = {
    Dependency: "Microsoft.VisualStudio.Code.ExtensionDependencies",
    ExtensionPack: "Microsoft.VisualStudio.Code.ExtensionPack",
    Engine: "Microsoft.VisualStudio.Code.Engine",
    PreRelease: "Microsoft.VisualStudio.Code.PreRelease",
    EnabledApiProposals: "Microsoft.VisualStudio.Code.EnabledApiProposals",
    LocalizedLanguages: "Microsoft.VisualStudio.Code.LocalizedLanguages",
    WebExtension: "Microsoft.VisualStudio.Code.WebExtension",
    SponsorLink: "Microsoft.VisualStudio.Code.SponsorLink",
    SupportLink: "Microsoft.VisualStudio.Services.Links.Support",
    ExecutesCode: "Microsoft.VisualStudio.Code.ExecutesCode",
  },
  f4 = 10,
  d4 = { pageNumber: 1, pageSize: f4, sortBy: 0, sortOrder: 0, flags: dt.None, criteria: [], assetTypes: [] },
  ar = class Ii {
    constructor(t = d4) {
      this.d = t;
    }
    get pageNumber() {
      return this.d.pageNumber;
    }
    get pageSize() {
      return this.d.pageSize;
    }
    get sortBy() {
      return this.d.sortBy;
    }
    get sortOrder() {
      return this.d.sortOrder;
    }
    get flags() {
      return this.d.flags;
    }
    get criteria() {
      return this.d.criteria;
    }
    withPage(t, i = this.d.pageSize) {
      return new Ii({ ...this.d, pageNumber: t, pageSize: i });
    }
    withFilter(t, ...i) {
      const s = [...this.d.criteria, ...(i.length ? i.map((r) => ({ filterType: t, value: r })) : [{ filterType: t }])];
      return new Ii({ ...this.d, criteria: s });
    }
    withSortBy(t) {
      return new Ii({ ...this.d, sortBy: t });
    }
    withSortOrder(t) {
      return new Ii({ ...this.d, sortOrder: t });
    }
    withFlags(...t) {
      return new Ii({ ...this.d, flags: t.reduce((i, s) => i | s, 0) });
    }
    withAssetTypes(...t) {
      return new Ii({ ...this.d, assetTypes: t });
    }
    withSource(t) {
      return new Ii({ ...this.d, source: t });
    }
    get raw() {
      const { criteria: t, pageNumber: i, pageSize: s, sortBy: r, sortOrder: n, flags: o, assetTypes: a } = this.d;
      return { filters: [{ criteria: t, pageNumber: i, pageSize: s, sortBy: r, sortOrder: n }], assetTypes: a, flags: o };
    }
    get searchText() {
      const t = this.d.criteria.filter((i) => i.filterType === jt.SearchText)[0];
      return t && t.value ? t.value : "";
    }
    get telemetryData() {
      return {
        filterTypes: this.d.criteria.map((t) => String(t.filterType)),
        flags: this.d.flags,
        sortBy: String(this.sortBy),
        sortOrder: String(this.sortOrder),
        pageNumber: String(this.pageNumber),
        source: this.d.source,
        searchTextLength: this.searchText.length,
      };
    }
  };
function fa(e, t) {
  const i = (e || []).filter((s) => s.statisticName === t)[0];
  return i ? i.value : 0;
}
function p4(e) {
  const t = "Microsoft.VisualStudio.Code.Translation.";
  return e.files
    .filter((s) => s.assetType.indexOf(t) === 0)
    .reduce((s, r) => {
      const n = ai(e, r.assetType);
      return n && s.push([r.assetType.substring(t.length), n]), s;
    }, []);
}
function g4(e) {
  if (e.properties) {
    const t = e.properties.filter((r) => r.key === Gt.Repository),
      i = new RegExp("((git|ssh|http(s)?)|(git@[\\w.]+))(:(//)?)([\\w.@:/\\-~]+)(.git)(/)?"),
      s = t.filter((r) => i.test(r.value))[0];
    return s ? { uri: s.value, fallbackUri: s.value } : null;
  }
  return ai(e, Gt.Repository);
}
function m4(e) {
  return {
    uri: `${e.fallbackAssetUri}/${Gt.VSIX}?redirect=true${e.targetPlatform ? `&targetPlatform=${e.targetPlatform}` : ""}`,
    fallbackUri: `${e.fallbackAssetUri}/${Gt.VSIX}${e.targetPlatform ? `?targetPlatform=${e.targetPlatform}` : ""}`,
  };
}
function ai(e, t) {
  return e.files.filter((s) => s.assetType === t)[0]
    ? { uri: `${e.assetUri}/${t}${e.targetPlatform ? `?targetPlatform=${e.targetPlatform}` : ""}`, fallbackUri: `${e.fallbackAssetUri}/${t}${e.targetPlatform ? `?targetPlatform=${e.targetPlatform}` : ""}` }
    : null;
}
function vu(e, t) {
  const i = e.properties ? e.properties.filter((r) => r.key === t) : [],
    s = i.length > 0 && i[0].value;
  return s ? s.split(",").map((r) => ln(r)) : [];
}
function yu(e) {
  const t = e.properties ? e.properties.filter((i) => i.key === oi.Engine) : [];
  return (t.length > 0 && t[0].value) || "";
}
function pn(e) {
  const t = e.properties ? e.properties.filter((i) => i.key === oi.PreRelease) : [];
  return t.length > 0 && t[0].value === "true";
}
function w4(e) {
  const t = e.properties ? e.properties.filter((i) => i.key === oi.ExecutesCode) : [];
  return t.length > 0 ? t[0].value === "true" : void 0;
}
function da(e) {
  const t = e.properties ? e.properties.filter((s) => s.key === oi.EnabledApiProposals) : [],
    i = (t.length > 0 && t[0].value) || "";
  return i ? i.split(",") : [];
}
function v4(e) {
  const t = e.properties ? e.properties.filter((s) => s.key === oi.LocalizedLanguages) : [],
    i = (t.length > 0 && t[0].value) || "";
  return i ? i.split(",") : [];
}
function y4(e) {
  return e.properties?.find((t) => t.key === oi.SponsorLink)?.value;
}
function b4(e) {
  return e.properties?.find((t) => t.key === oi.SupportLink)?.value;
}
function E4(e) {
  return e.indexOf("preview") !== -1;
}
function gn(e) {
  return e.targetPlatform ? dg(e.targetPlatform) : "undefined";
}
function pa(e) {
  const t = li(e.versions.map(gn)),
    i = !!e.tags?.includes(lg),
    s = t.indexOf("web");
  return i ? s === -1 && t.push("web") : s !== -1 && t.splice(s, 1), t;
}
function bu(e, t) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (s.version === e[i - 1]?.version) {
      let r = i;
      if (gn(s) === t) for (; r > 0 && e[r - 1].version === s.version; ) r--;
      r !== i && (e.splice(i, 1), e.splice(r, 0, s));
    }
  }
  return e;
}
function Eu(e, t, i) {
  e.telemetryData = { index: t, querySource: i, queryActivityId: e.queryContext?.[or] };
}
function xu(e, t, i, s) {
  const r = e.versions[0],
    n = {
      manifest: ai(t, Gt.Manifest),
      readme: ai(t, Gt.Details),
      changelog: ai(t, Gt.Changelog),
      license: ai(t, Gt.License),
      repository: g4(t),
      download: m4(t),
      icon: ai(t, Gt.Icon),
      signature: ai(t, Gt.Signature),
      coreTranslations: p4(t),
    };
  return {
    type: "gallery",
    identifier: { id: ni(e.publisher.publisherName, e.extensionName), uuid: e.extensionId },
    name: e.extensionName,
    version: t.version,
    displayName: e.displayName,
    publisherId: e.publisher.publisherId,
    publisher: e.publisher.publisherName,
    publisherDisplayName: e.publisher.displayName,
    publisherDomain: e.publisher.domain ? { link: e.publisher.domain, verified: !!e.publisher.isDomainVerified } : void 0,
    publisherSponsorLink: y4(r),
    description: e.shortDescription ?? "",
    installCount: fa(e.statistics, "install"),
    rating: fa(e.statistics, "averagerating"),
    ratingCount: fa(e.statistics, "ratingcount"),
    categories: e.categories || [],
    tags: e.tags || [],
    releaseDate: Date.parse(e.releaseDate),
    lastUpdated: Date.parse(e.lastUpdated),
    allTargetPlatforms: i,
    assets: n,
    properties: { dependencies: vu(t, oi.Dependency), extensionPack: vu(t, oi.ExtensionPack), engine: yu(t), enabledApiProposals: da(t), localizedLanguages: v4(t), targetPlatform: gn(t), isPreReleaseVersion: pn(t), executesCode: w4(t) },
    hasPreReleaseVersion: pn(r),
    hasReleaseVersion: !0,
    preview: E4(e.flags),
    isSigned: !!n.signature,
    queryContext: s,
    supportLink: b4(r),
  };
}
var mn = class {
  get g() {
    if (fe) {
      const i = this.x.extensionsGallery;
      return i?.servicePPEUrl && this.y.getValue("_extensionsGallery.enablePPE") ? i.servicePPEUrl : i?.serviceUrl;
    }
    return !this.d || this.d.account.scope !== "bytedance" ? this.x.iCubeApp?.desktopOuterExtensionGallery?.serviceUrl : this.x.iCubeApp?.desktopInnerExtensionsGallery?.serviceUrl;
  }
  get h() {
    if (fe) {
      const i = this.x.extensionsGallery;
      return i?.servicePPEUrl && this.y.getValue("_extensionsGallery.enablePPE") ? void 0 : i?.searchUrl;
    }
    return !this.d || this.d.account.scope !== "bytedance" ? this.x.iCubeApp?.desktopOuterExtensionGallery?.searchUrl : this.x.iCubeApp?.desktopInnerExtensionsGallery?.searchUrl;
  }
  get j() {
    return fe ? this.x.extensionsGallery?.controlUrl : !this.d || this.d.account.scope !== "bytedance" ? this.x.iCubeApp?.desktopOuterExtensionGallery?.controlUrl : this.x.iCubeApp?.desktopInnerExtensionsGallery?.controlUrl;
  }
  constructor(t, i, s, r, n, o, a, c) {
    (this.n = i),
      (this.o = s),
      (this.q = r),
      (this.u = n),
      (this.w = o),
      (this.x = a),
      (this.y = c),
      (this.d = null),
      (this.l = a.extensionsEnabledWithApiProposalVersion?.map((l) => l.toLowerCase()) ?? []),
      (this.k = Zg(a.version, a, this.q, this.y, this.w, t, this.u));
  }
  z(t = "") {
    return `${this.g}${t}`;
  }
  updateUserInfo(t = null) {
    this.d = t;
  }
  isEnabled() {
    return !!this.g;
  }
  async getExtensions(t, i, s) {
    const r = lt.isCancellationToken(i) ? {} : i,
      n = lt.isCancellationToken(i) ? i : s,
      o = await this.A(t, r, n),
      a = o.map((l) => l.identifier.uuid),
      c = [];
    for (const l of t) l.uuid && !a.includes(l.uuid) && c.push({ ...l, uuid: void 0 });
    if (c.length) {
      this.u.publicLog2("galleryService:additionalQueryByName", { count: c.length });
      const l = await this.A(c, r, n);
      o.push(...l);
    }
    return o;
  }
  async A(t, i, s) {
    const r = [],
      n = [],
      o = [],
      a = [];
    let c = !0;
    for (const u of t) {
      u.uuid ? n.push(u.uuid) : r.push(u.id);
      const f = !!(u.version || u.preRelease);
      o.push({ id: u.id, uuid: u.uuid, includePreRelease: f }), u.version && a.push({ id: u.id, uuid: u.uuid, version: u.version }), (c = c && !!u.hasPreRelease && !f);
    }
    if (!n.length && !r.length) return [];
    let l = new ar().withPage(1, t.length);
    n.length && (l = l.withFilter(jt.ExtensionId, ...n)), r.length && (l = l.withFilter(jt.ExtensionName, ...r)), (i.queryAllVersions || c) && (l = l.withFlags(l.flags, dt.IncludeVersions)), i.source && (l = l.withSource(i.source));
    const { extensions: h } = await this.D(l, { targetPlatform: i.targetPlatform ?? wu, includePreRelease: o, versions: a, compatible: !!i.compatible, productVersion: i.productVersion ?? { version: this.x.version, date: this.x.date } }, s);
    return i.source && h.forEach((u, f) => Eu(u, f, i.source)), h;
  }
  async getCompatibleExtension(t, i, s, r = { version: this.x.version, date: this.x.date }) {
    if (sr(t.allTargetPlatforms, s)) return null;
    if (await this.isExtensionCompatible(t, i, s)) return t;
    const n = new ar().withFlags(dt.IncludeVersions).withPage(1, 1).withFilter(jt.ExtensionId, t.identifier.uuid),
      { extensions: o } = await this.D(n, { targetPlatform: s, compatible: !0, includePreRelease: i, productVersion: r }, lt.None);
    return o[0] || null;
  }
  async isExtensionCompatible(t, i, s, r = { version: this.x.version, date: this.x.date }) {
    if (!Ko(t.properties.targetPlatform, t.allTargetPlatforms, s) || (!i && t.properties.isPreReleaseVersion)) return !1;
    let n = t.properties.engine;
    if (!n) {
      const o = await this.getManifest(t, lt.None);
      if (!o) throw new Error("Manifest was not found");
      n = o.engines.vscode;
    }
    return !(!un(n, r.version, r.date) || !this.B(t.identifier, t.properties.enabledApiProposals));
  }
  B(t, i) {
    return !i || !this.l.includes(t.id.toLowerCase()) ? !0 : ca(i);
  }
  async C(t, i, s, r, n, o, a = { version: this.x.version, date: this.x.date }) {
    if (!Ko(gn(i), n, o) || (s !== "any" && pn(i) !== (s === "prerelease"))) return !1;
    if (r)
      try {
        const c = await this.I(t, i);
        if (!un(c, a.version, a.date)) return !1;
      } catch (c) {
        return this.o.error(`Error while getting the engine for the version ${i.version}.`, st(c)), !1;
      }
    return !0;
  }
  async query(t, i) {
    let s = t.text || "";
    const r = t.pageSize ?? 50;
    let n = new ar().withPage(1, r);
    s
      ? ((s = s.replace(/\bcategory:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g, (h, u, f) => ((n = n.withFilter(jt.Category, f || u)), ""))),
        (s = s.replace(/\btag:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g, (h, u, f) => ((n = n.withFilter(jt.Tag, f || u)), ""))),
        (s = s.replace(/\bfeatured(\s+|\b|$)/g, () => ((n = n.withFilter(jt.Featured)), ""))),
        (s = s.trim()),
        s && ((s = s.length < 200 ? s : s.substring(0, 200)), (n = n.withFilter(jt.SearchText, s))),
        (n = n.withSortBy(0)))
      : t.ids
        ? (n = n.withFilter(jt.ExtensionId, ...t.ids))
        : t.names
          ? (n = n.withFilter(jt.ExtensionName, ...t.names))
          : (n = n.withSortBy(4)),
      typeof t.sortBy == "number" && (n = n.withSortBy(t.sortBy)),
      typeof t.sortOrder == "number" && (n = n.withSortOrder(t.sortOrder)),
      t.source && (n = n.withSource(t.source));
    const o = async (h, u) => {
        const { extensions: f, total: p } = await this.D(h, { targetPlatform: wu, compatible: !1, includePreRelease: !!t.includePreRelease, productVersion: t.productVersion ?? { version: this.x.version, date: this.x.date } }, u);
        return f.forEach((w, m) => Eu(w, (h.pageNumber - 1) * h.pageSize + m, t.source)), { extensions: f, total: p };
      },
      { extensions: a, total: c } = await o(n, i),
      l = async (h, u) => {
        if (u.isCancellationRequested) throw new Tt();
        const { extensions: f } = await o(n.withPage(h + 1), u);
        return f;
      };
    return { firstPage: a, total: c, pageSize: n.pageSize, getPage: l };
  }
  async D(t, i, s) {
    const r = t.flags;
    t.flags & dt.IncludeLatestVersionOnly && t.flags & dt.IncludeVersions && (t = t.withFlags(t.flags & ~dt.IncludeVersions, dt.IncludeLatestVersionOnly)),
      !(t.flags & dt.IncludeLatestVersionOnly) && !(t.flags & dt.IncludeVersions) && (t = t.withFlags(t.flags, dt.IncludeLatestVersionOnly)),
      i.versions?.length && (t = t.withFlags(t.flags & ~dt.IncludeLatestVersionOnly, dt.IncludeVersions)),
      (t = t.withFlags(t.flags, dt.IncludeAssetUri, dt.IncludeCategoryAndTags, dt.IncludeFiles, dt.IncludeStatistics, dt.IncludeVersionProperties));
    const { galleryExtensions: n, total: o, context: a } = await this.F(t, s);
    if (!(t.flags & dt.IncludeLatestVersionOnly)) {
      const u = [];
      for (const f of n) {
        const p = await this.E(f, i, a);
        p && u.push(p);
      }
      return { extensions: u, total: o };
    }
    const l = [],
      h = new Map();
    for (let u = 0; u < n.length; u++) {
      const f = n[u],
        p = { id: ni(f.publisher.publisherName, f.extensionName), uuid: f.extensionId },
        w = di(i.includePreRelease) ? i.includePreRelease : !!i.includePreRelease.find((y) => J(y, p))?.includePreRelease;
      if (i.compatible && sr(pa(f), i.targetPlatform)) continue;
      const m = await this.E(f, i, a);
      !m || (m.properties.isPreReleaseVersion && (!w || !m.hasReleaseVersion)) || (!m.properties.isPreReleaseVersion && m.properties.targetPlatform !== i.targetPlatform && m.hasPreReleaseVersion) ? h.set(f.extensionId, u) : l.push([u, m]);
    }
    if (h.size) {
      const u = new Ar(),
        f = new ar()
          .withFlags(r & ~dt.IncludeLatestVersionOnly, dt.IncludeVersions)
          .withPage(1, h.size)
          .withFilter(jt.ExtensionId, ...h.keys()),
        { extensions: p } = await this.D(f, i, s);
      this.u.publicLog2("galleryService:additionalQuery", { duration: u.elapsed(), count: h.size });
      for (const w of p) {
        const m = h.get(w.identifier.uuid);
        l.push([m, w]);
      }
    }
    return { extensions: l.sort((u, f) => u[0] - f[0]).map(([, u]) => u), total: o };
  }
  async E(t, i, s) {
    const r = { id: ni(t.publisher.publisherName, t.extensionName), uuid: t.extensionId },
      n = i.versions?.find((l) => J(l, r))?.version,
      o = di(i.includePreRelease) ? i.includePreRelease : !!i.includePreRelease.find((l) => J(l, r))?.includePreRelease,
      a = pa(t),
      c = bu(t.versions, i.targetPlatform);
    if (i.compatible && sr(a, i.targetPlatform)) return null;
    for (let l = 0; l < c.length; l++) {
      const h = c[l];
      if (!(n && h.version !== n)) {
        if (await this.C(r.id, h, o ? "any" : "release", i.compatible, a, i.targetPlatform, i.productVersion)) {
          if (i.compatible && !this.B(r, da(h))) continue;
          return xu(t, h, a, s);
        }
        if (n && h.version === n) return null;
      }
    }
    return n || i.compatible ? null : xu(t, t.versions[0], a);
  }
  async F(t, i) {
    if (!this.isEnabled()) throw new Error("No extension gallery service configured.");
    t = t.withFlags(t.flags, dt.ExcludeNonValidated).withFilter(jt.Target, "Microsoft.VisualStudio.Code").withFilter(jt.ExcludeWithFlags, u4(dt.Unpublished));
    const s = await this.k,
      r = JSON.stringify(t.raw),
      n = { ...s, "Content-Type": "application/json", Accept: "application/json;api-version=3.0-preview.1", "Accept-Encoding": "gzip", "Content-Length": String(r.length) },
      o = new Ar();
    let a,
      c,
      l = 0;
    try {
      if (
        ((a = await this.n.request({ type: "POST", url: this.h && t.criteria.some((u) => u.filterType === jt.SearchText) ? this.h : this.z("/extensionquery"), data: r, headers: n }, i)),
        a.res.statusCode && a.res.statusCode >= 400 && a.res.statusCode < 500)
      )
        return { galleryExtensions: [], total: l };
      const h = await Jo(a);
      if (h) {
        const u = h.results[0],
          f = u.extensions,
          p = u.resultMetadata && u.resultMetadata.filter((w) => w.metadataType === "ResultCount")[0];
        return (l = (p && p.metadataItems.filter((w) => w.name === "TotalCount")[0].count) || 0), { galleryExtensions: f, total: l, context: a.res.headers.activityid ? { [or]: a.res.headers.activityid } : {} };
      }
      return { galleryExtensions: [], total: l };
    } catch (h) {
      if (Qi(h)) throw ((c = "Cancelled"), h);
      {
        const u = st(h);
        throw ((c = ng(h) ? "Offline" : u.startsWith("XHR timeout") ? "Timeout" : "Failed"), new an(u, c));
      }
    } finally {
      this.u.publicLog2("galleryService:query", {
        ...t.telemetryData,
        requestBodySize: String(r.length),
        duration: o.elapsed(),
        success: !!a && Go(a),
        responseBodySize: a?.res.headers["Content-Length"],
        statusCode: a ? String(a.res.statusCode) : void 0,
        errorCode: c,
        count: String(l),
      });
    }
  }
  async reportStatistic(t, i, s, r) {
    if (!this.isEnabled()) return;
    const n = fe ? this.z(`/itemName/${t}.${i}/version/${s}/statType/${r === "install" ? "1" : "3"}/vscodewebextension`) : this.z(`/publishers/${t}/extensions/${i}/${s}/stats?statType=${r}`),
      o = fe ? "api-version=6.1-preview.1" : "*/*;api-version=4.0-preview.1",
      c = { ...(await this.k), Accept: o };
    try {
      await this.n.request({ type: "POST", url: n, headers: c }, lt.None);
    } catch {}
  }
  async download(t, i, s) {
    this.o.trace("ExtensionGalleryService#download", t.identifier.id);
    const r = ra(t),
      n = new Date().getTime(),
      o = s === 2 ? "install" : s === 3 ? "update" : "",
      a = o
        ? { uri: `${t.assets.download.uri}${I.parse(t.assets.download.uri).query ? "&" : "?"}${o}=true`, fallbackUri: `${t.assets.download.fallbackUri}${I.parse(t.assets.download.fallbackUri).query ? "&" : "?"}${o}=true` }
        : t.assets.download,
      c = t.queryContext?.[or] ? { [or]: t.queryContext[or] } : void 0,
      l = await this.H(t.identifier.id, a, Gt.VSIX, c ? { headers: c } : void 0);
    try {
      await this.w.writeFile(i, l.stream);
    } catch (h) {
      try {
        await this.w.del(i);
      } catch (u) {
        this.o.warn(`Error while deleting the file ${i.toString()}`, st(u));
      }
      throw new an(st(h), "DownloadFailedWriting");
    }
    this.u.publicLog("galleryService:downloadVSIX", { ...r, duration: new Date().getTime() - n });
  }
  async downloadSignatureArchive(t, i) {
    if (!t.assets.signature) throw new Error("No signature asset found");
    this.o.trace("ExtensionGalleryService#downloadSignatureArchive", t.identifier.id);
    const s = await this.H(t.identifier.id, t.assets.signature, Gt.Signature);
    try {
      await this.w.writeFile(i, s.stream);
    } catch (r) {
      try {
        await this.w.del(i);
      } catch (n) {
        this.o.warn(`Error while deleting the file ${i.toString()}`, st(n));
      }
      throw new an(st(r), "DownloadFailedWriting");
    }
  }
  async getReadme(t, i) {
    if (t.assets.readme) {
      const s = await this.H(t.identifier.id, t.assets.readme, Gt.Details, {}, i);
      return (await gs(s)) || "";
    }
    return "";
  }
  async getManifest(t, i) {
    if (t.assets.manifest) {
      const s = await this.H(t.identifier.id, t.assets.manifest, Gt.Manifest, {}, i),
        r = await gs(s);
      return r ? JSON.parse(r) : null;
    }
    return null;
  }
  async G(t, i, s) {
    const r = ai(i, Gt.Manifest);
    if (!r) throw new Error("Manifest was not found");
    const n = { "Accept-Encoding": "gzip" },
      o = await this.H(t, r, Gt.Manifest, { headers: n });
    return await Jo(o);
  }
  async getCoreTranslation(t, i) {
    const s = t.assets.coreTranslations.filter((r) => r[0] === i.toUpperCase())[0];
    if (s) {
      const r = await this.H(t.identifier.id, s[1], s[0]),
        n = await gs(r);
      return n ? JSON.parse(n) : null;
    }
    return null;
  }
  async getChangelog(t, i) {
    if (t.assets.changelog) {
      const s = await this.H(t.identifier.id, t.assets.changelog, Gt.Changelog, {}, i);
      return (await gs(s)) || "";
    }
    return "";
  }
  async getAllCompatibleVersions(t, i, s) {
    let r = new ar().withFlags(dt.IncludeVersions, dt.IncludeCategoryAndTags, dt.IncludeFiles, dt.IncludeVersionProperties).withPage(1, 1);
    t.uuid ? (r = r.withFilter(jt.ExtensionId, t.uuid)) : (r = r.withFilter(jt.ExtensionName, t.id));
    const { galleryExtensions: n } = await this.F(r, lt.None);
    if (!n.length) return [];
    const o = pa(n[0]);
    if (sr(o, s)) return [];
    const a = [];
    await Promise.all(
      n[0].versions.map(async (h) => {
        try {
          (await this.C(t.id, h, i ? "any" : "release", !0, o, s)) && this.B(t, da(h)) && a.push(h);
        } catch {}
      }),
    );
    const c = [],
      l = new Set();
    for (const h of bu(a, s)) l.has(h.version) || (l.add(h.version), c.push({ version: h.version, date: h.lastUpdated, isPreReleaseVersion: pn(h) }));
    return c;
  }
  async H(t, i, s, r = {}, n = lt.None) {
    const o = await this.k,
      a = { type: "GET" },
      c = { ...o, ...(r.headers || {}) };
    r = { ...r, ...a, headers: c };
    const l = i.uri,
      h = i.fallbackUri,
      u = { ...r, url: l };
    try {
      const f = await this.n.request(u, n);
      if (f.res.statusCode === 200) return f;
      const p = await gs(f);
      throw new Error(`Expected 200, got back ${f.res.statusCode} instead.

${p}`);
    } catch (f) {
      if (Qi(f)) throw f;
      const p = st(f);
      this.u.publicLog2("galleryService:cdnFallback", { extension: t, assetType: s, message: p });
      const w = { ...r, url: h };
      return this.n.request(w, n);
    }
  }
  async I(t, i) {
    let s = yu(i);
    if (!s) {
      this.u.publicLog2("galleryService:engineFallback", { extension: t, version: i.version });
      const r = await this.G(t, i, lt.None);
      if (!r) throw new Error("Manifest was not found");
      s = r.engines.vscode;
    }
    return s;
  }
  async getExtensionsControlManifest() {
    if (!this.isEnabled()) throw new Error("No extension gallery service configured.");
    if (!this.j) return { malicious: [], deprecated: {}, search: [] };
    const t = await this.n.request({ type: "GET", url: this.j }, lt.None);
    if (t.res.statusCode !== 200) throw new Error("Could not get extensions report.");
    const i = await Jo(t),
      s = [],
      r = {},
      n = [],
      o = [];
    if (i) {
      for (const a of i.malicious) s.push({ id: a });
      if (i.migrateToPreRelease)
        for (const [a, c] of Object.entries(i.migrateToPreRelease))
          (!c.engine || un(c.engine, this.x.version, this.x.date)) && (r[a.toLowerCase()] = { disallowInstall: !0, extension: { id: c.id, displayName: c.displayName, autoMigrate: { storage: !!c.migrateStorage }, preRelease: !0 } });
      if (i.deprecated) for (const [a, c] of Object.entries(i.deprecated)) c && (r[a.toLowerCase()] = di(c) ? {} : c);
      if (i.search) for (const a of i.search) n.push(a);
      if (Array.isArray(i.extensionsEnabledWithPreRelease)) for (const a of i.extensionsEnabledWithPreRelease) o.push(a.toLowerCase());
    }
    return { malicious: s, deprecated: r, search: n, extensionsEnabledWithPreRelease: o };
  }
};
mn = __decorate([__param(1, ir), __param(2, ht), __param(3, ri), __param(4, Ae), __param(5, $t), __param(6, Te), __param(7, Fi)], mn);
var Su = class extends mn {
  constructor(t, i, s, r, n, o, a, c) {
    super(t, i, s, r, n, o, a, c);
  }
};
Su = __decorate([__param(0, c4), __param(1, ir), __param(2, ht), __param(3, ri), __param(4, Ae), __param(5, $t), __param(6, Te), __param(7, Fi)], Su);
var ga = class extends mn {
  constructor(t, i, s, r, n, o, a) {
    super(void 0, t, i, s, r, n, o, a);
  }
};
ga = __decorate([__param(0, ir), __param(1, ht), __param(2, ri), __param(3, Ae), __param(4, $t), __param(5, Te), __param(6, Fi)], ga);
var $u = ct("IExtensionSignatureVerificationService"),
  ma = class {
    constructor(t, i) {
      (this.b = t), (this.c = i);
    }
    d() {
      return this.a || (this.a = this.f()), this.a;
    }
    async f() {
      return import("@vscode/vsce-sign");
    }
    async verify(t, i, s, r, n) {
      let o;
      try {
        o = await this.d();
      } catch (h) {
        this.b.error("Could not load vsce-sign module", st(h)), this.b.info(`Extension signature verification is not done: ${t}`);
        return;
      }
      const a = new Date().getTime();
      let c;
      try {
        this.b.trace(`Verifying extension signature for ${t}...`), (c = await o.verify(s, r, this.b.getLevel() === C.Trace));
      } catch (h) {
        c = { code: qt.UnknownError, didExecute: !1, output: st(h) };
      }
      const l = new Date().getTime() - a;
      return (
        this.b.info(`Extension signature verification result for ${t}: ${c.code}. Executed: ${c.didExecute}. Duration: ${l}ms.`),
        this.b.trace(`Extension signature verification output for ${t}:
${c.output}`),
        this.c.publicLog2("extensionsignature:verification", { extensionId: t, extensionVersion: i, code: c.code, internalCode: c.internalCode, duration: l, didExecute: c.didExecute, clientTargetPlatform: n }),
        { code: c.code }
      );
    }
  };
ma = __decorate([__param(0, ht), __param(1, Ae)], ma);
var x4 = ct("IICubeExtensionProtectedCheckService"),
  S4 = (e) => d(1818, null, e),
  Iu = d(1819, null, "ms-dotnettools.csharp"),
  Vi = class {
    constructor(t, i, s, r) {
      (this.a = t), (this.b = i), (this.d = s), (this.f = r);
    }
    get g() {}
    async listExtensions(t, i, s) {
      let r = await this.d.getInstalled(1, s);
      const n = mg.map((a) => a.toLowerCase());
      if (i && i !== "") {
        if (n.indexOf(i.toLowerCase()) < 0) {
          this.a.info("Invalid category please enter a valid category. To list valid categories run --category without a category specified");
          return;
        }
        r = r.filter((a) => (a.manifest.categories ? a.manifest.categories.map((l) => l.toLowerCase()).indexOf(i.toLowerCase()) > -1 : !1));
      } else if (i === "") {
        this.a.info("Possible Categories: "),
          n.forEach((a) => {
            this.a.info(a);
          });
        return;
      }
      this.g && this.a.info(d(1820, null, this.g)), (r = r.sort((a, c) => a.identifier.id.localeCompare(c.identifier.id)));
      let o;
      for (const a of r) o !== a.identifier.id && ((o = a.identifier.id), this.a.info(t ? `${o}@${a.manifest.version}` : o));
    }
    async installExtensions(t, i, s, r) {
      const n = [];
      try {
        t.length && this.a.info(this.g ? d(1821, null, this.g) : d(1822, null));
        const o = [],
          a = [],
          c = (h, u, f) => {
            a.push({ id: h, version: u !== "prerelease" ? u : void 0, installOptions: { ...s, isBuiltin: f, installPreReleaseVersion: u === "prerelease" || s.installPreReleaseVersion } });
          };
        for (const h of t)
          if (h instanceof I) o.push({ vsix: h, installOptions: s });
          else {
            const [u, f] = sa(h);
            c(u, f, !1);
          }
        for (const h of i)
          if (h instanceof I) o.push({ vsix: h, installOptions: { ...s, isBuiltin: !0, donotIncludePackAndDependencies: !0 } });
          else {
            const [u, f] = sa(h);
            c(u, f, !0);
          }
        const l = await this.d.getInstalled(void 0, s.profileLocation);
        if (
          (o.length &&
            (await Promise.all(
              o.map(async ({ vsix: h, installOptions: u }) => {
                try {
                  await this.j(h, u, r, l);
                } catch (f) {
                  this.a.error(f), n.push(h.toString());
                }
              }),
            )),
          a.length)
        ) {
          const h = await this.h(a, l, r);
          n.push(...h);
        }
      } catch (o) {
        throw (this.a.error(d(1823, null, st(o))), o);
      }
      if (n.length) throw new Error(d(1824, null, n.join(", ")));
    }
    async updateExtensions(t) {
      const i = await this.d.getInstalled(1, t),
        s = [];
      for (const a of i) a.identifier.uuid && s.push({ ...a.identifier, preRelease: a.preRelease });
      this.a.trace(d(1825, null, s.length));
      const r = await this.f.getExtensions(s, { compatible: !0 }, lt.None),
        n = [];
      for (const a of r)
        for (const c of i)
          J(c.identifier, a.identifier) && na(a.version, c.manifest.version) && n.push({ extension: a, options: { operation: 3, installPreReleaseVersion: c.preRelease, profileLocation: t, isApplicationScoped: c.isApplicationScoped } });
      if (!n.length) {
        this.a.info(d(1826, null));
        return;
      }
      this.a.info(d(1827, null, n.map((a) => a.extension.identifier.id).join(", ")));
      const o = await this.d.installGalleryExtensions(n);
      for (const a of o) a.error ? this.a.error(d(1828, null, a.identifier.id, st(a.error))) : this.a.info(d(1829, null, a.identifier.id, a.local?.manifest.version));
    }
    async h(t, i, s) {
      if (
        ((t = t.filter(({ id: a, version: c }) => {
          const l = i.find((h) => J(h.identifier, { id: a }));
          if (l) {
            if (!s && (!c || (c === "prerelease" && l.preRelease))) return this.a.info(d(1830, null, a, l.manifest.version, a)), !1;
            if (c && l.manifest.version === c) return this.a.info(d(1831, null, `${a}@${c}`)), !1;
          }
          return !0;
        })),
        !t.length)
      )
        return [];
      const r = [],
        n = [],
        o = await this.k(t);
      if (
        (await Promise.all(
          t.map(async ({ id: a, version: c, installOptions: l }) => {
            const h = o.get(a.toLowerCase());
            if (!h) {
              this.a.error(`${S4(c ? `${a}@${c}` : a)}
${Iu}`),
                r.push(a);
              return;
            }
            try {
              const f = await this.f.getManifest(h, lt.None);
              if (f && !this.l(f)) return;
            } catch (f) {
              this.a.error(f.message || f.stack || f), r.push(a);
              return;
            }
            const u = i.find((f) => J(f.identifier, h.identifier));
            if (u) {
              if (h.version === u.manifest.version) {
                this.a.info(d(1832, null, c ? `${a}@${c}` : a));
                return;
              }
              this.a.info(d(1833, null, a, h.version));
            }
            l.isBuiltin ? this.a.info(c ? d(1834, null, a, c) : d(1835, null, a)) : this.a.info(c ? d(1836, null, a, c) : d(1837, null, a)),
              n.push({ extension: h, options: { ...l, installGivenVersion: !!c, isApplicationScoped: l.isApplicationScoped || u?.isApplicationScoped } });
          }),
        ),
        n.length)
      ) {
        const a = await this.d.installGalleryExtensions(n);
        for (const c of a) c.error ? (this.a.error(d(1838, null, c.identifier.id, st(c.error))), r.push(c.identifier.id)) : this.a.info(d(1839, null, c.identifier.id, c.local?.manifest.version));
      }
      return r;
    }
    async j(t, i, s, r) {
      const n = await this.d.getManifest(t);
      if (!n) throw new Error("Invalid vsix");
      if (await this.m(n, s, i.profileLocation, r))
        try {
          return await this.d.install(t, { ...i, installGivenVersion: !0 }), this.a.info(d(1840, null, ns(t))), n;
        } catch (a) {
          if (Qi(a)) this.a.info(d(1841, null, ns(t)));
          else throw a;
        }
      return null;
    }
    async k(t) {
      const i = new Map(),
        s = t.some((o) => o.installOptions.installPreReleaseVersion),
        r = await this.d.getTargetPlatform(),
        n = [];
      for (const o of t) cg.test(o.id) && n.push({ ...o, preRelease: s });
      if (n.length) {
        const o = await this.f.getExtensions(n, { targetPlatform: r }, lt.None);
        for (const a of o) i.set(a.identifier.id.toLowerCase(), a);
      }
      return i;
    }
    l(t) {
      return !0;
    }
    async m(t, i, s, r) {
      if (!i) {
        const n = { id: ni(t.publisher, t.name) },
          o = r.find((a) => J(n, a.identifier) && na(a.manifest.version, t.version));
        if (o) return this.a.info(d(1842, null, o.identifier.id, o.manifest.version, t.version)), !1;
      }
      return this.l(t);
    }
    async uninstallExtensions(t, i, s) {
      const r = async (o) => {
          if (o instanceof I) {
            const a = await this.d.getManifest(o);
            return su(a.publisher, a.name);
          }
          return o;
        },
        n = [];
      for (const o of t) {
        const a = await r(o),
          l = (await this.d.getInstalled(void 0, s)).filter((h) => J(h.identifier, { id: a }));
        if (!l.length)
          throw new Error(`${this.n(a)}
${Iu}`);
        if (l.some((h) => h.type === 0)) {
          this.a.info(d(1843, null, a));
          return;
        }
        if (l.some((h) => this.b.isProtectedExtension(h.identifier.id))) {
          this.a.info(d(1844, null, a));
          return;
        }
        if (!i && l.some((h) => h.isBuiltin)) {
          this.a.info(d(1845, null, a));
          return;
        }
        this.a.info(d(1846, null, a));
        for (const h of l) await this.d.uninstall(h, { profileLocation: s }), n.push(h);
        this.g ? this.a.info(d(1847, null, a, this.g)) : this.a.info(d(1848, null, a));
      }
    }
    async locateExtension(t) {
      const i = await this.d.getInstalled();
      t.forEach((s) => {
        i.forEach((r) => {
          if (r.identifier.id === s && r.location.scheme === K.file) {
            this.a.info(r.location.fsPath);
            return;
          }
        });
      });
    }
    n(t) {
      return this.g ? d(1849, null, t, this.g) : d(1850, null, t);
    }
  };
Vi = __decorate([__param(1, x4), __param(2, ta), __param(3, bi)], Vi);
var Pu;
(function (e) {
  (e.ERROR_PROFILE_NOT_FOUND = "ERROR_PROFILE_NOT_FOUND"), (e.ERROR_INVALID_CONTENT = "ERROR_INVALID_CONTENT");
})(Pu || (Pu = {}));
var wn = class extends Error {
    constructor(e, t) {
      super(e), (this.code = t);
    }
  },
  Ei = ct("IExtensionsProfileScannerService"),
  wa = class extends G {
    constructor(t, i, s, r, n, o) {
      super(),
        (this.j = t),
        (this.m = i),
        (this.n = s),
        (this.r = r),
        (this.s = n),
        (this.t = o),
        (this.b = this.B(new O())),
        (this.onAddExtensions = this.b.event),
        (this.c = this.B(new O())),
        (this.onDidAddExtensions = this.c.event),
        (this.f = this.B(new O())),
        (this.onRemoveExtensions = this.f.event),
        (this.g = this.B(new O())),
        (this.onDidRemoveExtensions = this.g.event),
        (this.h = new Qt());
    }
    scanProfileExtensions(t, i) {
      return this.u(t, void 0, i);
    }
    async addExtensionsToProfile(t, i, s) {
      const r = [],
        n = [];
      try {
        return (
          await this.u(i, (o) => {
            const a = [];
            if (s) a.push(...o);
            else for (const c of o) t.some(([l]) => J(l.identifier, c.identifier) && l.manifest.version !== c.version) ? r.push(c) : a.push(c);
            for (const [c, l] of t) {
              const h = a.findIndex((f) => J(f.identifier, c.identifier) && f.version === c.manifest.version),
                u = { identifier: c.identifier, version: c.manifest.version, location: c.location, metadata: l };
              h === -1 ? (n.push(u), a.push(u)) : a.splice(h, 1, u);
            }
            return n.length && this.b.fire({ extensions: n, profileLocation: i }), r.length && this.f.fire({ extensions: r, profileLocation: i }), a;
          }),
          n.length && this.c.fire({ extensions: n, profileLocation: i }),
          r.length && this.g.fire({ extensions: r, profileLocation: i }),
          n
        );
      } catch (o) {
        throw (n.length && this.c.fire({ extensions: n, error: o, profileLocation: i }), r.length && this.g.fire({ extensions: r, error: o, profileLocation: i }), o);
      }
    }
    async updateMetadata(t, i) {
      const s = [];
      return (
        await this.u(i, (r) => {
          const n = [];
          for (const o of r) {
            const a = t.find(([c]) => J(c.identifier, o.identifier) && c.manifest.version === o.version);
            a && ((o.metadata = { ...o.metadata, ...a[1] }), s.push(o)), n.push(o);
          }
          return n;
        }),
        s
      );
    }
    async removeExtensionFromProfile(t, i) {
      const s = [];
      try {
        await this.u(i, (r) => {
          const n = [];
          for (const o of r) J(o.identifier, t.identifier) ? s.push(o) : n.push(o);
          return s.length && this.f.fire({ extensions: s, profileLocation: i }), n;
        }),
          s.length && this.g.fire({ extensions: s, profileLocation: i });
      } catch (r) {
        throw (s.length && this.g.fire({ extensions: s, error: r, profileLocation: i }), r);
      }
    }
    async u(t, i, s) {
      return this.F(t).queue(async () => {
        let r = [],
          n;
        try {
          const o = await this.m.readFile(t);
          n = JSON.parse(o.value.toString().trim() || "[]");
        } catch (o) {
          if (Yt(o) !== 1) throw o;
          if ((this.r.extUri.isEqual(t, this.n.defaultProfile.extensionsResource) && (n = await this.D()), !n && s?.bailOutWhenFileNotFound)) throw new wn(st(o), "ERROR_PROFILE_NOT_FOUND");
        }
        if (n) {
          Array.isArray(n) || this.w(t);
          let o = !1;
          for (const a of n) {
            ku(a) || this.w(t);
            let c;
            if (zt(a.relativeLocation) && a.relativeLocation) c = this.z(a.relativeLocation);
            else if (zt(a.location)) {
              this.t.warn(`Extensions profile: Ignoring extension with invalid location: ${a.location}`);
              continue;
            } else {
              c = I.revive(a.location);
              const l = this.y(c);
              l && ((o = !0), (a.relativeLocation = l));
            }
            Ye(a.metadata?.hasPreReleaseVersion) && a.metadata?.preRelease && ((o = !0), (a.metadata.hasPreReleaseVersion = !0)), r.push({ identifier: a.identifier, location: c, version: a.version, metadata: a.metadata });
          }
          o && (await this.m.writeFile(t, B.fromString(JSON.stringify(n))));
        }
        if (i) {
          r = i(r);
          const o = r.map((a) => ({ identifier: a.identifier, version: a.version, location: a.location.toJSON(), relativeLocation: this.y(a.location), metadata: a.metadata }));
          await this.m.writeFile(t, B.fromString(JSON.stringify(o)));
        }
        return r;
      });
    }
    w(t) {
      const i = new wn(`Invalid extensions content in ${t.toString()}`, "ERROR_INVALID_CONTENT");
      throw (this.s.publicLogError2("extensionsProfileScanningError", { code: i.code }), i);
    }
    y(t) {
      return this.r.extUri.isEqual(this.r.extUri.dirname(t), this.j) ? this.r.extUri.basename(t) : void 0;
    }
    z(t) {
      return this.r.extUri.joinPath(this.j, t);
    }
    async D() {
      return (
        this.C ||
          (this.C = (async () => {
            const t = this.r.extUri.joinPath(this.n.defaultProfile.location, "extensions.json"),
              i = this.r.extUri.joinPath(this.j, ".init-default-profile-extensions");
            let s;
            try {
              s = (await this.m.readFile(t)).value.toString();
            } catch (n) {
              if (Yt(n) === 1) return;
              throw n;
            }
            this.t.info("Migrating extensions from old default profile location", t.toString());
            let r;
            try {
              const n = JSON.parse(s);
              Array.isArray(n) && n.every((o) => ku(o)) ? (r = n) : this.t.warn("Skipping migrating from old default profile locaiton: Found invalid data", n);
            } catch (n) {
              this.t.error(n);
            }
            if (r)
              try {
                await this.m.createFile(this.n.defaultProfile.extensionsResource, B.fromString(JSON.stringify(r)), { overwrite: !1 }),
                  this.t.info("Migrated extensions from old default profile location to new location", t.toString(), this.n.defaultProfile.extensionsResource.toString());
              } catch (n) {
                if (Yt(n) === 3) this.t.info("Migration from old default profile location to new location is done by another window", t.toString(), this.n.defaultProfile.extensionsResource.toString());
                else throw n;
              }
            try {
              await this.m.del(t);
            } catch (n) {
              Yt(n) !== 1 && this.t.error(n);
            }
            try {
              await this.m.del(i);
            } catch (n) {
              Yt(n) !== 1 && this.t.error(n);
            }
            return r;
          })()),
        this.C
      );
    }
    F(t) {
      let i = this.h.get(t);
      return i || ((i = new Bs()), this.h.set(t, i)), i;
    }
  };
wa = __decorate([__param(1, $t), __param(2, _e), __param(3, Ht), __param(4, Ae), __param(5, ht)], wa);
function ku(e) {
  return Ct(e) && pg(e.identifier) && ($4(e.location) || (zt(e.location) && e.location)) && (Ye(e.relativeLocation) || zt(e.relativeLocation)) && e.version && zt(e.version);
}
function $4(e) {
  return e ? zt(e.path) && zt(e.scheme) : !1;
}
function va(e) {
  switch (e) {
    case 1:
      return d(118, null);
    case 2:
      return d(119, null);
    case 3:
      return d(120, null);
    case 4:
      return d(121, null);
    case 5:
      return d(122, null);
    case 6:
      return d(123, null);
    case 7:
      return d(124, null);
    case 8:
      return d(125, null);
    case 9:
      return d(126, null);
    default:
      return "";
  }
}
function I4(e, t, i, s) {
  try {
    P4(e, t, i, s);
  } catch (r) {
    e.error(r?.message ?? r);
  }
  return t;
}
function P4(e, t, i, s) {
  const r = (n, o, a) => {
    const c = n[o];
    if (zt(c)) {
      const l = c,
        h = l.length;
      if (h > 1 && l[0] === "%" && l[h - 1] === "%") {
        const u = l.substr(1, h - 2);
        let f = i[u];
        f === void 0 && s && (f = s[u]);
        const p = typeof f == "string" ? f : f?.message,
          w = s?.[u],
          m = typeof w == "string" ? w : w?.message;
        if (!p) {
          m || e.warn(`[${t.name}]: ${d(1851, null, u)}`);
          return;
        }
        if (a && (o === "title" || o === "category") && m && m !== p) {
          const y = { value: p, original: m };
          n[o] = y;
        } else n[o] = p;
      }
    } else if (Ct(c)) for (const l in c) c.hasOwnProperty(l) && (l === "commands" ? r(c, l, !0) : r(c, l, a));
    else if (Array.isArray(c)) for (let l = 0; l < c.length; l++) r(c, l, a);
  };
  for (const n in t) t.hasOwnProperty(n) && r(t, n);
}
var ya;
(function (e) {
  function t(i, s) {
    if (i === s) return !0;
    const r = Object.keys(i),
      n = new Set();
    for (const o of Object.keys(s)) n.add(o);
    if (r.length !== n.size) return !1;
    for (const o of r) {
      if (i[o] !== s[o]) return !1;
      n.delete(o);
    }
    return n.size === 0;
  }
  e.equals = t;
})(ya || (ya = {}));
var vn = ct("IExtensionsScannerService"),
  ba = class extends G {
    constructor(t, i, s, r, n, o, a, c, l, h, u, f) {
      super(),
        (this.systemExtensionsLocation = t),
        (this.userExtensionsLocation = i),
        (this.r = s),
        (this.s = r),
        (this.t = n),
        (this.u = o),
        (this.w = a),
        (this.y = c),
        (this.z = l),
        (this.C = h),
        (this.D = u),
        (this.F = f),
        (this.g = this.B(new O())),
        (this.onDidChangeCache = this.g.event),
        (this.h = V(this.userExtensionsLocation, ".obsolete")),
        (this.j = this.B(this.F.createInstance(bn, this.s, this.h))),
        (this.m = this.B(this.F.createInstance(bn, this.s, this.h))),
        (this.n = this.B(this.F.createInstance(yn, this.h))),
        (this.H = void 0),
        this.B(this.j.onDidChangeCache(() => this.g.fire(0))),
        this.B(this.m.onDidChangeCache(() => this.g.fire(1)));
    }
    getTargetPlatform() {
      return this.G || (this.G = nu(this.w, this.y)), this.G;
    }
    async scanAllExtensions(t, i, s) {
      const [r, n] = await Promise.all([this.scanSystemExtensions(t), this.scanUserExtensions(i)]),
        o = s ? await this.scanExtensionsUnderDevelopment(t, [...r, ...n]) : [];
      return this.L(r, n, o, await this.getTargetPlatform(), !0);
    }
    async scanSystemExtensions(t) {
      const i = [];
      i.push(this.M(!!t.useCache, t.language, t.filterExtensionIds)), i.push(this.N(t.language, !!t.checkControlFile));
      const [s, r] = await Promise.all(i);
      return this.J([...s, ...r], 0, t, !1);
    }
    async scanUserExtensions(t) {
      const i = t.profileLocation ?? this.userExtensionsLocation;
      this.y.trace("Started scanning user extensions", i);
      const s = this.D.extUri.isEqual(t.profileLocation, this.t.defaultProfile.extensionsResource) ? { bailOutWhenFileNotFound: !0 } : void 0,
        r = await this.P(i, !!t.profileLocation, 1, !t.includeUninstalled, t.language, !0, s, t.productVersion ?? this.R(), t.filterExtensionIds),
        n = t.useCache && !r.devMode && r.excludeObsolete ? this.m : this.n;
      let o;
      try {
        o = await n.scanExtensions(r);
      } catch (a) {
        if (a instanceof wn && a.code === "ERROR_PROFILE_NOT_FOUND") await this.I(), (o = await n.scanExtensions(r));
        else throw a;
      }
      return (o = await this.J(o, 1, t, !0)), this.y.trace("Scanned user extensions:", o.length), o;
    }
    async scanExtensionsUnderDevelopment(t, i) {
      if (this.z.isExtensionDevelopment && this.z.extensionDevelopmentLocationURI) {
        const s = (
          await Promise.all(
            this.z.extensionDevelopmentLocationURI
              .filter((r) => r.scheme === K.file)
              .map(async (r) => {
                const n = await this.P(r, !1, 1, !0, t.language, !1, void 0, t.productVersion ?? this.R(), t.filterExtensionIds);
                return (await this.n.scanOneOrMultipleExtensions(n)).map((a) => ((a.type = i.find((c) => J(c.identifier, a.identifier))?.type ?? a.type), this.n.validate(a, n)));
              }),
          )
        ).flat();
        return this.J(s, "development", t, !0);
      }
      return [];
    }
    async scanExistingExtension(t, i, s) {
      const r = await this.P(t, !1, i, !0, s.language, !0, void 0, s.productVersion ?? this.R(), s.filterExtensionIds),
        n = await this.n.scanExtension(r);
      return !n || (!s.includeInvalid && !n.isValid) ? null : n;
    }
    async scanOneOrMultipleExtensions(t, i, s) {
      const r = await this.P(t, !1, i, !0, s.language, !0, void 0, s.productVersion ?? this.R(), s.filterExtensionIds),
        n = await this.n.scanOneOrMultipleExtensions(r);
      return this.J(n, i, s, !0);
    }
    async scanMultipleExtensions(t, i, s) {
      const r = [];
      return (
        await Promise.all(
          t.map(async (n) => {
            const o = await this.scanOneOrMultipleExtensions(n, i, s);
            r.push(...o);
          }),
        ),
        this.J(r, i, s, !0)
      );
    }
    async scanMetadata(t) {
      const i = V(t, "package.json"),
        s = (await this.w.readFile(i)).value.toString();
      return JSON.parse(s).__metadata;
    }
    async updateMetadata(t, i) {
      const s = V(t, "package.json"),
        r = (await this.w.readFile(s)).value.toString(),
        n = JSON.parse(r);
      i.isMachineScoped === !1 && delete i.isMachineScoped, i.isBuiltin === !1 && delete i.isBuiltin, (n.__metadata = { ...n.__metadata, ...i }), await this.w.writeFile(V(t, "package.json"), B.fromString(JSON.stringify(n, null, "	")));
    }
    async initializeDefaultProfileExtensions() {
      try {
        await this.u.scanProfileExtensions(this.t.defaultProfile.extensionsResource, { bailOutWhenFileNotFound: !0 });
      } catch (t) {
        if (t instanceof wn && t.code === "ERROR_PROFILE_NOT_FOUND") await this.I();
        else throw t;
      }
    }
    async I() {
      return (
        this.H ||
          (this.H = (async () => {
            try {
              this.y.info("Started initializing default profile extensions in extensions installation folder.", this.userExtensionsLocation.toString());
              const t = await this.scanUserExtensions({ includeInvalid: !0 });
              if (t.length)
                await this.u.addExtensionsToProfile(
                  t.map((i) => [i, i.metadata]),
                  this.t.defaultProfile.extensionsResource,
                );
              else
                try {
                  await this.w.createFile(this.t.defaultProfile.extensionsResource, B.fromString(JSON.stringify([])));
                } catch (i) {
                  Yt(i) !== 1 && this.y.warn("Failed to create default profile extensions manifest in extensions installation folder.", this.userExtensionsLocation.toString(), st(i));
                }
              this.y.info("Completed initializing default profile extensions in extensions installation folder.", this.userExtensionsLocation.toString());
            } catch (t) {
              this.y.error(t);
            } finally {
              this.H = void 0;
            }
          })()),
        this.H
      );
    }
    async J(t, i, s, r) {
      return (
        s.includeAllVersions || (t = this.L(i === 0 ? t : void 0, i === 1 ? t : void 0, i === "development" ? t : void 0, await this.getTargetPlatform(), r)),
        s.includeInvalid || (t = t.filter((n) => n.isValid)),
        t.sort((n, o) => {
          const a = Ie(n.location.fsPath),
            c = Ie(o.location.fsPath);
          return a < c ? -1 : a > c ? 1 : 0;
        })
      );
    }
    L(t, i, s, r, n) {
      const o = (c, l, h) => {
          if (c.isValid && !l.isValid) return !1;
          if (c.isValid === l.isValid) {
            if (n && na(c.manifest.version, l.manifest.version)) return this.y.debug(`Skipping extension ${l.location.path} with lower version ${l.manifest.version} in favour of ${c.location.path} with version ${c.manifest.version}`), !1;
            if (Bg(c.manifest.version, l.manifest.version)) {
              if (c.type === 0) return this.y.debug(`Skipping extension ${l.location.path} in favour of system extension ${c.location.path} with same version`), !1;
              if (c.targetPlatform === r) return this.y.debug(`Skipping extension ${l.location.path} from different target platform ${l.targetPlatform}`), !1;
            }
          }
          return h ? this.y.warn(`Overwriting user extension ${c.location.path} with ${l.location.path}.`) : this.y.debug(`Overwriting user extension ${c.location.path} with ${l.location.path}.`), !0;
        },
        a = new wg();
      return (
        t?.forEach((c) => {
          const l = a.get(c.identifier.id);
          (!l || o(l, c, !1)) && a.set(c.identifier.id, c);
        }),
        i?.forEach((c) => {
          const l = a.get(c.identifier.id);
          if (!l && t && c.type === 0) {
            this.y.debug(`Skipping obsolete system extension ${c.location.path}.`);
            return;
          }
          (!l || o(l, c, !1)) && a.set(c.identifier.id, c);
        }),
        s?.forEach((c) => {
          const l = a.get(c.identifier.id);
          (!l || o(l, c, !0)) && a.set(c.identifier.id, c), a.set(c.identifier.id, c);
        }),
        [...a.values()]
      );
    }
    async M(t, i, s) {
      this.y.trace("Started scanning system extensions");
      const r = await this.P(this.systemExtensionsLocation, !1, 0, !0, i, !0, void 0, this.R(), s),
        o = await (t && !r.devMode ? this.j : this.n).scanExtensions(r);
      return this.y.trace("Scanned system extensions:", o.length), o;
    }
    async N(t, i) {
      const s = this.z.isBuilt ? [] : this.C.builtInExtensions;
      if (!s?.length) return [];
      this.y.trace("Started scanning dev system extensions");
      const r = i ? await this.O() : {},
        n = [],
        o = I.file(Li(_(js.asFileUri("").fsPath, "..", ".build", "builtInExtensions")));
      for (const c of s) {
        const l = r[c.name] || "marketplace";
        switch (l) {
          case "disabled":
            break;
          case "marketplace":
            n.push(V(o, c.name));
            break;
          default:
            n.push(I.file(l));
            break;
        }
      }
      const a = await Promise.all(n.map(async (c) => this.n.scanExtension(await this.P(c, !1, 0, !0, t, !0, void 0, this.R()))));
      return this.y.trace("Scanned dev system extensions:", a.length), Yi(a);
    }
    async O() {
      try {
        const t = await this.w.readFile(this.r);
        return JSON.parse(t.value.toString());
      } catch {
        return {};
      }
    }
    async P(t, i, s, r, n, o, a, c, l) {
      const h = await this.f(n ?? Oe),
        u = await this.Q(t),
        f = i && !this.D.extUri.isEqual(t, this.t.defaultProfile.extensionsResource) ? this.t.defaultProfile.extensionsResource : void 0,
        p = f ? await this.Q(f) : void 0;
      return new cr(t, u, f, p, i, a, s, r, o, c.version, c.date, this.C.commit, !this.z.isBuilt, n, h, l);
    }
    async Q(t) {
      try {
        const i = await this.w.stat(t);
        if (typeof i.mtime == "number") return i.mtime;
      } catch {}
    }
    R() {
      return { version: this.C.version, date: this.C.date };
    }
  };
ba = __decorate([__param(4, _e), __param(5, Ei), __param(6, $t), __param(7, ht), __param(8, ri), __param(9, Te), __param(10, Ht), __param(11, zr)], ba);
var cr = class {
    constructor(e, t, i, s, r, n, o, a, c, l, h, u, f, p, w, m) {
      (this.location = e),
        (this.mtime = t),
        (this.applicationExtensionslocation = i),
        (this.applicationExtensionslocationMtime = s),
        (this.profile = r),
        (this.profileScanOptions = n),
        (this.type = o),
        (this.excludeObsolete = a),
        (this.validate = c),
        (this.productVersion = l),
        (this.productDate = h),
        (this.productCommit = u),
        (this.devMode = f),
        (this.language = p),
        (this.translations = w),
        (this.filterExtensionIds = m);
    }
    static createNlsConfiguration(e) {
      return { language: e.language, pseudo: e.language === "pseudo", devMode: e.devMode, translations: e.translations };
    }
    static equals(e, t) {
      return (
        $l(e.location, t.location) &&
        e.mtime === t.mtime &&
        $l(e.applicationExtensionslocation, t.applicationExtensionslocation) &&
        e.applicationExtensionslocationMtime === t.applicationExtensionslocationMtime &&
        e.profile === t.profile &&
        ze(e.profileScanOptions, t.profileScanOptions) &&
        e.type === t.type &&
        e.excludeObsolete === t.excludeObsolete &&
        e.validate === t.validate &&
        e.productVersion === t.productVersion &&
        e.productDate === t.productDate &&
        e.productCommit === t.productCommit &&
        e.devMode === t.devMode &&
        e.language === t.language &&
        ya.equals(e.translations, t.translations)
      );
    }
  },
  yn = class extends G {
    constructor(t, i, s, r, n, o, a) {
      super(), (this.g = t), (this.h = i), (this.j = s), (this.m = r), (this.n = o), (this.r = a), (this.f = n.extensionsEnabledWithApiProposalVersion?.map((c) => c.toLowerCase()) ?? []);
    }
    async scanExtensions(t) {
      let i = t.profile ? await this.t(t) : await this.s(t);
      t.filterExtensionIds && t.filterExtensionIds.length > 0 && (i = i.filter((r) => !(t.filterExtensionIds || []).includes(r.identifier.id)));
      let s = {};
      if (t.excludeObsolete && t.type === 1)
        try {
          const r = (await this.m.readFile(this.g)).value.toString();
          s = JSON.parse(r);
        } catch {}
      return no(s) ? i : i.filter((r) => !s[oe.create(r).toString()]);
    }
    async s(t) {
      const i = await this.m.resolve(t.location);
      if (!i.children?.length) return [];
      const s = await Promise.all(
        i.children.map(async (r) => {
          if (!r.isDirectory || (t.type === 1 && ns(r.resource).indexOf(".") === 0)) return null;
          const n = new cr(
            r.resource,
            t.mtime,
            t.applicationExtensionslocation,
            t.applicationExtensionslocationMtime,
            t.profile,
            t.profileScanOptions,
            t.type,
            t.excludeObsolete,
            t.validate,
            t.productVersion,
            t.productDate,
            t.productCommit,
            t.devMode,
            t.language,
            t.translations,
          );
          return this.scanExtension(n);
        }),
      );
      return Yi(s).sort((r, n) => (r.location.path < n.location.path ? -1 : 1));
    }
    async t(t) {
      let i = await this.u(t.location, () => !0, t);
      if (t.applicationExtensionslocation && !this.j.extUri.isEqual(t.location, t.applicationExtensionslocation)) {
        i = i.filter((r) => !r.metadata?.isApplicationScoped);
        const s = await this.u(t.applicationExtensionslocation, (r) => !!r.metadata?.isBuiltin || !!r.metadata?.isApplicationScoped, t);
        i.push(...s);
      }
      return i;
    }
    async u(t, i, s) {
      const r = await this.h.scanProfileExtensions(t, s.profileScanOptions);
      if (!r.length) return [];
      const n = await Promise.all(
        r.map(async (o) => {
          if (i(o)) {
            const a = new cr(
              o.location,
              s.mtime,
              s.applicationExtensionslocation,
              s.applicationExtensionslocationMtime,
              s.profile,
              s.profileScanOptions,
              s.type,
              s.excludeObsolete,
              s.validate,
              s.productVersion,
              s.productDate,
              s.productCommit,
              s.devMode,
              s.language,
              s.translations,
            );
            return this.scanExtension(a, o.metadata);
          }
          return null;
        }),
      );
      return Yi(n);
    }
    async scanOneOrMultipleExtensions(t) {
      try {
        if (await this.m.exists(V(t.location, "package.json"))) {
          const i = await this.scanExtension(t);
          return i ? [i] : [];
        } else return await this.scanExtensions(t);
      } catch (i) {
        return this.r.error(`Error scanning extensions at ${t.location.path}:`, st(i)), [];
      }
    }
    async scanExtension(t, i) {
      try {
        let s = await this.w(t.location);
        if (s) {
          s.publisher || (s.publisher = Hh), (i = i ?? s.__metadata), delete s.__metadata;
          const r = ni(s.publisher, s.name),
            n = i?.id ? { id: r, uuid: i.id } : { id: r },
            o = i?.isSystem ? 0 : t.type,
            a = o === 0 || !!i?.isBuiltin;
          s = await this.y(t.location, s, cr.createNlsConfiguration(t));
          let c = { type: o, identifier: n, manifest: s, location: t.location, isBuiltin: a, targetPlatform: i?.targetPlatform ?? "undefined", publisherDisplayName: i?.publisherDisplayName, metadata: i, isValid: !0, validations: [] };
          return (
            t.validate && (c = this.validate(c, t)),
            s.enabledApiProposals && (!this.n.isBuilt || this.f.includes(r.toLowerCase())) && ((s.originalEnabledApiProposals = s.enabledApiProposals), (s.enabledApiProposals = bg([...s.enabledApiProposals]))),
            c
          );
        }
      } catch (s) {
        t.type !== 0 && this.r.error(s);
      }
      return null;
    }
    validate(t, i) {
      let s = !0;
      const r = this.n.isBuilt && this.f.includes(t.identifier.id.toLowerCase()),
        n = Jg(i.productVersion, i.productDate, i.location, t.manifest, t.isBuiltin, r);
      for (const [o, a] of n) o === Wt.Error && ((s = !1), this.r.error(this.F(i.location, a)));
      return (t.isValid = s), (t.validations = n), t;
    }
    async w(t) {
      const i = V(t, "package.json");
      let s;
      try {
        s = (await this.m.readFile(i)).value.toString();
      } catch (n) {
        return Yt(n) !== 1 && this.r.error(this.F(t, d(1852, null, i.path, n.message))), null;
      }
      let r;
      try {
        r = JSON.parse(s);
      } catch {
        const o = [];
        qs(s, o);
        for (const a of o) this.r.error(this.F(t, d(1853, null, i.path, a.offset, a.length, va(a.error))));
        return null;
      }
      return Ws(r) !== "object" ? (this.r.error(this.F(t, d(1854, null, i.path))), null) : r;
    }
    async y(t, i, s) {
      const r = await this.z(t, i, s);
      if (r)
        try {
          const n = [],
            o = await this.C(r.default, n);
          if (n.length > 0)
            return (
              n.forEach((c) => {
                this.r.error(this.F(t, d(1855, null, r.default?.path, va(c.error))));
              }),
              i
            );
          if (Ws(r) !== "object") return this.r.error(this.F(t, d(1856, null, r.default?.path))), i;
          const a = r.values || Object.create(null);
          return I4(this.r, i, a, o);
        } catch {}
      return i;
    }
    async z(t, i, s) {
      const r = V(t, "package.nls.json"),
        n = (l, h) => {
          h.forEach((u) => {
            this.r.error(this.F(t, d(1857, null, l?.path, va(u.error))));
          });
        },
        o = (l) => {
          this.r.error(this.F(t, d(1858, null, l?.path)));
        },
        a = `${i.publisher}.${i.name}`,
        c = s.translations[a];
      if (c)
        try {
          const l = I.file(c),
            h = (await this.m.readFile(l)).value.toString(),
            u = [],
            f = qs(h, u);
          return u.length > 0 ? (n(l, u), { values: void 0, default: r }) : Ws(f) !== "object" ? (o(l), { values: void 0, default: r }) : { values: f.contents ? f.contents.package : void 0, default: r };
        } catch {
          return { values: void 0, default: r };
        }
      else {
        if (!(await this.m.exists(r))) return;
        let h;
        try {
          h = await this.D(t, s);
        } catch {
          return;
        }
        if (!h.localized) return { values: void 0, default: h.original };
        try {
          const u = (await this.m.readFile(h.localized)).value.toString(),
            f = [],
            p = qs(u, f);
          return f.length > 0 ? (n(h.localized, f), { values: void 0, default: h.original }) : Ws(p) !== "object" ? (o(h.localized), { values: void 0, default: h.original }) : { values: p, default: h.original };
        } catch {
          return { values: void 0, default: h.original };
        }
      }
    }
    async C(t, i) {
      if (t)
        try {
          const s = (await this.m.readFile(t)).value.toString();
          return qs(s, i);
        } catch {}
    }
    D(t, i) {
      return new Promise((s, r) => {
        const n = (o) => {
          const a = V(t, `package.nls.${o}.json`);
          this.m.exists(a).then((c) => {
            c && s({ localized: a, original: V(t, "package.nls.json") });
            const l = o.lastIndexOf("-");
            l === -1 ? s({ localized: V(t, "package.nls.json"), original: null }) : ((o = o.substring(0, l)), n(o));
          });
        };
        if (i.devMode || i.pseudo || !i.language) return s({ localized: V(t, "package.nls.json"), original: null });
        n(i.language);
      });
    }
    F(t, i) {
      return `[${t.path}]: ${i}`;
    }
  };
yn = __decorate([__param(1, Ei), __param(2, Ht), __param(3, $t), __param(4, Te), __param(5, ri), __param(6, ht)], yn);
var bn = class extends yn {
  constructor(t, i, s, r, n, o, a, c, l) {
    super(i, r, n, o, a, c, l), (this.J = t), (this.L = s), (this.H = this.B(new Ci(3e3))), (this.I = this.B(new O())), (this.onDidChangeCache = this.I.event);
  }
  async scanExtensions(t) {
    const i = this.P(t),
      s = await this.M(i);
    if (((this.G = t), s && s.input && cr.equals(s.input, this.G)))
      return this.r.debug("Using cached extensions scan result", t.type === 0 ? "system" : "user", t.location.toString()), this.H.trigger(() => this.O()), s.result.map((n) => ((n.location = I.revive(n.location)), n));
    const r = await super.scanExtensions(t);
    return await this.N(i, { input: t, result: r }), r;
  }
  async M(t) {
    try {
      const i = await this.m.readFile(t),
        s = JSON.parse(i.value.toString());
      return { result: s.result, input: ws(s.input) };
    } catch (i) {
      this.r.debug("Error while reading the extension cache file:", t.path, st(i));
    }
    return null;
  }
  async N(t, i) {
    try {
      await this.m.writeFile(t, B.fromString(JSON.stringify(i)));
    } catch (s) {
      this.r.debug("Error while writing the extension cache file:", t.path, st(s));
    }
  }
  async O() {
    if (!this.G) return;
    const t = this.P(this.G),
      i = await this.M(t);
    if (!i) return;
    const s = i.result,
      r = JSON.parse(JSON.stringify(await super.scanExtensions(this.G)));
    if (!ze(r, s))
      try {
        this.r.info("Invalidating Cache", s, r), await this.m.del(t), this.I.fire();
      } catch (n) {
        this.r.error(n);
      }
  }
  P(t) {
    const i = this.Q(t);
    return this.j.extUri.joinPath(i.cacheHome, t.type === 0 ? gg : Wh);
  }
  Q(t) {
    return t.type === 0
      ? this.L.defaultProfile
      : t.profile
        ? this.j.extUri.isEqual(t.location, this.J.extensionsResource)
          ? this.J
          : (this.L.profiles.find((i) => this.j.extUri.isEqual(t.location, i.extensionsResource)) ?? this.J)
        : this.L.defaultProfile;
  }
};
bn = __decorate([__param(2, _e), __param(3, Ei), __param(4, Ht), __param(5, $t), __param(6, Te), __param(7, ri), __param(8, ht)], bn);
var k4 = class extends ba {
  constructor(e, t, i, s, r, n, o, a, c, l, h, u) {
    super(e, t, V(i, ".vscode-oss-dev", "extensions", "control.json"), s, r, n, o, a, c, l, h, u),
      (this.S = (async () => {
        if (Zc)
          try {
            const f = await this.w.readFile(I.file(Zc));
            return JSON.parse(f.value.toString());
          } catch {}
        return Object.create(null);
      })());
  }
  f(e) {
    return this.S;
  }
};
import * as A4 from "fs";
import * as ft from "fs";
import { tmpdir as D4 } from "os";
import { promisify as En } from "util";
var R4 = new Gn(1e4);
function Ea(e) {
  return O4(e, "NFC", R4);
}
var o9 = new Gn(1e4),
  L4 = /[^\u0000-\u0080]/;
function O4(e, t, i) {
  if (!e) return e;
  const s = i.get(e);
  if (s) return s;
  let r;
  return L4.test(e) ? (r = e.normalize(t)) : (r = e), i.set(e, r), r;
}
var ys;
(function (e) {
  (e[(e.UNLINK = 0)] = "UNLINK"), (e[(e.MOVE = 1)] = "MOVE");
})(ys || (ys = {}));
async function Au(e, t = ys.UNLINK, i) {
  if (_d(e)) throw new Error("rimraf - will refuse to recursively delete root");
  return t === ys.UNLINK ? xa(e) : N4(e, i);
}
async function N4(e, t = Bd(D4())) {
  try {
    try {
      await ft.promises.rename(e, t);
    } catch (i) {
      return i.code === "ENOENT" ? void 0 : xa(e);
    }
    xa(t).catch((i) => {});
  } catch (i) {
    if (i.code !== "ENOENT") throw i;
  }
}
async function xa(e) {
  return ft.promises.rm(e, { recursive: !0, force: !0, maxRetries: 3 });
}
async function xn(e, t) {
  return F4(await (t ? C4(e) : ft.promises.readdir(e)));
}
async function C4(e) {
  try {
    return await ft.promises.readdir(e, { withFileTypes: !0 });
  } catch (s) {
    console.warn("[node.js fs] readdir with filetypes failed with error: ", s);
  }
  const t = [],
    i = await xn(e);
  for (const s of i) {
    let r = !1,
      n = !1,
      o = !1;
    try {
      const a = await ft.promises.lstat(_(e, s));
      (r = a.isFile()), (n = a.isDirectory()), (o = a.isSymbolicLink());
    } catch (a) {
      console.warn("[node.js fs] unexpected error from lstat after readdir: ", a);
    }
    t.push({ name: s, isFile: () => r, isDirectory: () => n, isSymbolicLink: () => o });
  }
  return t;
}
function F4(e) {
  return e.map((t) => (typeof t == "string" ? (Ze ? Ea(t) : t) : ((t.name = Ze ? Ea(t.name) : t.name), t)));
}
async function T4(e) {
  const t = await xn(e),
    i = [];
  for (const s of t) (await ye.existsDirectory(_(e, s))) && i.push(s);
  return i;
}
var ye;
(function (e) {
  async function t(r) {
    let n;
    try {
      if (((n = await ft.promises.lstat(r)), !n.isSymbolicLink())) return { stat: n };
    } catch {}
    try {
      return { stat: await ft.promises.stat(r), symbolicLink: n?.isSymbolicLink() ? { dangling: !1 } : void 0 };
    } catch (o) {
      if (o.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: !0 } };
      if (Rt && o.code === "EACCES")
        try {
          return { stat: await ft.promises.stat(await ft.promises.readlink(r)), symbolicLink: { dangling: !1 } };
        } catch (a) {
          if (a.code === "ENOENT" && n) return { stat: n, symbolicLink: { dangling: !0 } };
          throw a;
        }
      throw o;
    }
  }
  e.stat = t;
  async function i(r) {
    try {
      const { stat: n, symbolicLink: o } = await e.stat(r);
      return n.isFile() && o?.dangling !== !0;
    } catch {}
    return !1;
  }
  e.existsFile = i;
  async function s(r) {
    try {
      const { stat: n, symbolicLink: o } = await e.stat(r);
      return n.isDirectory() && o?.dangling !== !0;
    } catch {}
    return !1;
  }
  e.existsDirectory = s;
})(ye || (ye = {}));
var M4 = new Nl();
function _4(e, t, i) {
  return M4.queueFor(
    I.file(e),
    () => {
      const s = V4(i);
      return new Promise((r, n) => j4(e, t, s, (o) => (o ? n(o) : r())));
    },
    co,
  );
}
var Du = !0;
function U4(e) {
  Du = e;
}
function j4(e, t, i, s) {
  if (!Du) return ft.writeFile(e, t, { mode: i.mode, flag: i.flag }, s);
  ft.open(e, i.flag, i.mode, (r, n) => {
    if (r) return s(r);
    ft.writeFile(n, t, (o) => {
      if (o) return ft.close(n, () => s(o));
      ft.fdatasync(n, (a) => (a && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", a), U4(!1)), ft.close(n, (c) => s(c))));
    });
  });
}
function V4(e) {
  return e ? { mode: typeof e.mode == "number" ? e.mode : 438, flag: typeof e.flag == "string" ? e.flag : "w" } : { mode: 438, flag: "w" };
}
async function B4(e, t, i = 6e4) {
  if (e !== t)
    try {
      Rt && typeof i == "number" ? await Ru(e, t, Date.now(), i) : await ft.promises.rename(e, t);
    } catch (s) {
      if ((e.toLowerCase() !== t.toLowerCase() && s.code === "EXDEV") || e.endsWith(".")) await Lu(e, t, { preserveSymlinks: !1 }), await Au(e, ys.MOVE);
      else throw s;
    }
}
async function Ru(e, t, i, s, r = 0) {
  try {
    return await ft.promises.rename(e, t);
  } catch (n) {
    if (n.code !== "EACCES" && n.code !== "EPERM" && n.code !== "EBUSY") throw n;
    if (Date.now() - i >= s) throw (console.error(`[node.js fs] rename failed after ${r} retries with error: ${n}`), n);
    if (r === 0) {
      let o = !1;
      try {
        const { stat: a } = await ye.stat(t);
        a.isFile() || (o = !0);
      } catch {}
      if (o) throw n;
    }
    return await Vs(Math.min(100, r * 10)), Ru(e, t, i, s, r + 1);
  }
}
async function Lu(e, t, i) {
  return Nu(e, t, { root: { source: e, target: t }, options: i, handledSourcePaths: new Set() });
}
var Ou = 511;
async function Nu(e, t, i) {
  if (i.handledSourcePaths.has(e)) return;
  i.handledSourcePaths.add(e);
  const { stat: s, symbolicLink: r } = await ye.stat(e);
  if (r) {
    if (i.options.preserveSymlinks)
      try {
        return await W4(e, t, i);
      } catch {}
    if (r.dangling) return;
  }
  return s.isDirectory() ? z4(e, t, s.mode & Ou, i) : q4(e, t, s.mode & Ou);
}
async function z4(e, t, i, s) {
  await ft.promises.mkdir(t, { recursive: !0, mode: i });
  const r = await xn(e);
  for (const n of r) await Nu(_(e, n), _(t, n), s);
}
async function q4(e, t, i) {
  await ft.promises.copyFile(e, t), await ft.promises.chmod(t, i);
}
async function W4(e, t, i) {
  let s = await ft.promises.readlink(e);
  Us(s, i.root.source, !se) && (s = _(i.root.target, s.substr(i.root.source.length + 1))), await ft.promises.symlink(s, t);
}
var pt = new (class {
  get read() {
    return (e, t, i, s, r) =>
      new Promise((n, o) => {
        ft.read(e, t, i, s, r, (a, c, l) => (a ? o(a) : n({ bytesRead: c, buffer: l })));
      });
  }
  get write() {
    return (e, t, i, s, r) =>
      new Promise((n, o) => {
        ft.write(e, t, i, s, r, (a, c, l) => (a ? o(a) : n({ bytesWritten: c, buffer: l })));
      });
  }
  get fdatasync() {
    return En(ft.fdatasync);
  }
  get open() {
    return En(ft.open);
  }
  get close() {
    return En(ft.close);
  }
  get realpath() {
    return En(ft.realpath);
  }
  async exists(e) {
    try {
      return await ft.promises.access(e), !0;
    } catch {
      return !1;
    }
  }
  get readdir() {
    return xn;
  }
  get readDirsInDir() {
    return T4;
  }
  get writeFile() {
    return _4;
  }
  get rm() {
    return Au;
  }
  get rename() {
    return B4;
  }
  get copy() {
    return Lu;
  }
})();
import { createWriteStream as Cu, promises as Fu } from "fs";
var Tu = "end of central directory record signature not found",
  H4 = new RegExp(Tu),
  Sn = class extends Error {
    constructor(e, t) {
      let i = t.message;
      switch (e) {
        case "CorruptZip":
          i = `Corrupt ZIP: ${i}`;
          break;
      }
      super(i), (this.type = e), (this.cause = t);
    }
  };
function G4(e) {
  const t = e.externalFileAttributes >> 16 || 33188;
  return [448, 56, 7].map((i) => t & i).reduce((i, s) => i + s, t & 61440);
}
function Mu(e) {
  if (e instanceof Sn) return e;
  let t;
  return H4.test(e.message) && (t = "CorruptZip"), new Sn(t, e);
}
function J4(e, t, i, s, r, n) {
  const o = Be(t),
    a = _(s, o);
  if (!a.startsWith(s)) return Promise.reject(new Error(d(147, null, t)));
  const c = _(s, t);
  let l;
  return (
    n.onCancellationRequested(() => {
      l?.destroy();
    }),
    Promise.resolve(Fu.mkdir(a, { recursive: !0 })).then(
      () =>
        new Promise((h, u) => {
          if (!n.isCancellationRequested)
            try {
              (l = Cu(c, { mode: i })), l.once("close", () => h()), l.once("error", u), e.once("error", u), e.pipe(l);
            } catch (f) {
              u(f);
            }
        }),
    )
  );
}
function Q4(e, t, i, s) {
  let r = ti(() => Promise.resolve()),
    n = 0;
  const o = s.onCancellationRequested(() => {
    r.cancel(), e.close();
  });
  return new Promise((a, c) => {
    const l = new hp(),
      h = (u) => {
        u.isCancellationRequested || (n++, e.readEntry());
      };
    e.once("error", c),
      e.once("close", () =>
        r.then(() => {
          s.isCancellationRequested || e.entryCount === n ? a() : c(new Sn("Incomplete", new Error(d(148, null, n, e.entryCount))));
        }, c),
      ),
      e.readEntry(),
      e.on("entry", (u) => {
        if (s.isCancellationRequested) return;
        if (!i.sourcePathRegex.test(u.fileName)) {
          h(s);
          return;
        }
        const f = u.fileName.replace(i.sourcePathRegex, "");
        if (/\/$/.test(f)) {
          const m = _(t, f);
          r = ti((y) =>
            Fu.mkdir(m, { recursive: !0 })
              .then(() => h(y))
              .then(void 0, c),
          );
          return;
        }
        const p = Uu(e, u),
          w = G4(u);
        r = ti((m) => l.queue(() => p.then((y) => J4(y, f, w, t, i, m).then(() => h(m)))).then(null, c));
      });
  }).finally(() => o.dispose());
}
async function _u(e, t = !1) {
  const { open: i } = await import("yauzl");
  return new Promise((s, r) => {
    i(e, t ? { lazyEntries: !0 } : void 0, (n, o) => {
      n ? r(Mu(n)) : s(dl(o));
    });
  });
}
function Uu(e, t) {
  return new Promise((i, s) => {
    e.openReadStream(t, (r, n) => {
      r ? s(Mu(r)) : i(dl(n));
    });
  });
}
async function X4(e, t) {
  const { ZipFile: i } = await import("yazl");
  return new Promise((s, r) => {
    const n = new i();
    t.forEach((a) => {
      a.contents ? n.addBuffer(typeof a.contents == "string" ? Buffer.from(a.contents, "utf8") : a.contents, a.path) : a.localPath && n.addFile(a.localPath, a.path);
    }),
      n.end();
    const o = Cu(e);
    n.outputStream.pipe(o), n.outputStream.once("error", r), o.once("error", r), o.once("finish", () => s(e));
  });
}
function Z4(e, t, i = {}, s) {
  const r = new RegExp(i.sourcePath ? `^${i.sourcePath}` : "");
  let n = _u(e, !0);
  return i.overwrite && (n = n.then((o) => pt.rm(t).then(() => o))), n.then((o) => Q4(o, t, { sourcePathRegex: r }, s));
}
function Y4(e, t) {
  return _u(e).then(
    (i) =>
      new Promise((s, r) => {
        i.on("entry", (n) => {
          n.fileName === t &&
            Uu(i, n).then(
              (o) => s(o),
              (o) => r(o),
            );
        }),
          i.once("close", () => r(new Error(d(149, null, t))));
      }),
  );
}
function ju(e, t) {
  return Y4(e, t).then(
    (i) =>
      new Promise((s, r) => {
        const n = [];
        i.once("error", r), i.on("data", (o) => n.push(o)), i.on("end", () => s(Buffer.concat(n)));
      }),
  );
}
var Sa = class extends G {
  get onInstallExtension() {
    return this.n.event;
  }
  get onDidInstallExtensions() {
    return this.s.event;
  }
  get onUninstallExtension() {
    return this.t.event;
  }
  get onDidUninstallExtension() {
    return this.u.event;
  }
  get onDidUpdateExtensionMetadata() {
    return this.w.event;
  }
  constructor(t, i, s, r, n, o) {
    super(),
      (this.z = t),
      (this.C = i),
      (this.D = s),
      (this.F = r),
      (this.G = n),
      (this.H = o),
      (this.h = 0),
      (this.j = new Map()),
      (this.m = new Map()),
      (this.n = this.B(new O())),
      (this.s = this.B(new O())),
      (this.t = this.B(new O())),
      (this.u = this.B(new O())),
      (this.w = this.B(new O())),
      (this.y = []),
      this.B(
        Dt(() => {
          this.j.forEach(({ task: a }) => a.cancel()), this.m.forEach((a) => a.cancel()), this.j.clear(), this.m.clear();
        }),
      );
  }
  async canInstall(t) {
    const i = await this.getTargetPlatform();
    return t.allTargetPlatforms.some((s) => Ko(s, t.allTargetPlatforms, i));
  }
  async installFromGallery(t, i = {}) {
    try {
      const r = (await this.installGalleryExtensions([{ extension: t, options: i }])).find(({ identifier: n }) => J(n, t.identifier));
      if (r?.local) return r?.local;
      throw r?.error ? r.error : new vt(`Unknown error while installing extension ${t.identifier.id}`, "Unknown");
    } catch (s) {
      throw It(s);
    }
  }
  async installGalleryExtensions(t) {
    if (!this.z.isEnabled()) throw new vt(d(1803, null), "NotAllowed");
    const i = [],
      s = [];
    return (
      await Promise.allSettled(
        t.map(async ({ extension: r, options: n }) => {
          try {
            const o = await this.O(r, !!n?.installGivenVersion, !!n?.installPreReleaseVersion, n.productVersion ?? { version: this.G.version, date: this.G.date });
            s.push({ ...o, options: n });
          } catch (o) {
            i.push({ identifier: r.identifier, operation: 2, source: r, error: o, profileLocation: n.profileLocation ?? this.X() });
          }
        }),
      ),
      s.length && i.push(...(await this.I(s))),
      i
    );
  }
  async uninstall(t, i) {
    return this.F.trace("ExtensionManagementService#uninstall", t.identifier.id), this.uninstallExtensions([{ extension: t, options: i }]);
  }
  async toggleAppliationScope(t, i) {
    if (Qh(t.manifest) || t.isBuiltin) return t;
    if (t.isApplicationScoped) {
      let s = await this.updateMetadata(t, { isApplicationScoped: !1 }, this.H.defaultProfile.extensionsResource);
      this.D.extUri.isEqual(i, this.H.defaultProfile.extensionsResource) || (s = await this.$(t, this.H.defaultProfile.extensionsResource, i));
      for (const r of this.H.profiles) {
        const n = (await this.getInstalled(1, r.extensionsResource)).find((o) => J(o.identifier, t.identifier));
        n ? this.w.fire({ local: n, profileLocation: r.extensionsResource }) : this.u.fire({ identifier: t.identifier, profileLocation: r.extensionsResource });
      }
      return s;
    } else {
      const s = this.D.extUri.isEqual(i, this.H.defaultProfile.extensionsResource)
        ? await this.updateMetadata(t, { isApplicationScoped: !0 }, this.H.defaultProfile.extensionsResource)
        : await this.$(t, i, this.H.defaultProfile.extensionsResource, { isApplicationScoped: !0 });
      return this.s.fire([{ identifier: s.identifier, operation: 2, local: s, profileLocation: this.H.defaultProfile.extensionsResource, applicationScoped: !0 }]), s;
    }
  }
  getExtensionsControlManifest() {
    const t = new Date().getTime();
    return (!this.g || t - this.h > 1e3 * 60 * 5) && ((this.g = this.W()), (this.h = t)), this.g;
  }
  registerParticipant(t) {
    this.y.push(t);
  }
  async resetPinnedStateForAllUserExtensions(t) {
    try {
      await this.M(
        this.H.profiles.map(async (i) => {
          const s = await this.getInstalled(1, i.extensionsResource);
          await this.M(
            s.map(async (r) => {
              r.pinned !== t && (await this.updateMetadata(r, { pinned: t }, i.extensionsResource));
            }),
          );
        }),
      );
    } catch (i) {
      throw (this.F.error("Error while resetting pinned state for all user extensions", st(i)), i);
    }
  }
  async I(t) {
    const i = new Map(),
      s = new Map(),
      r = [],
      n = (a, c) => `${oe.create(a).toString()}-${c.toString()}`,
      o = (a, c, l, h) => {
        if (!I.isUri(c)) {
          if (s.has(`${c.identifier.id.toLowerCase()}-${l.profileLocation.toString()}`)) return;
          const p = this.j.get(n(c, l.profileLocation));
          if (p) {
            if (h && this.L(h, p.task)) {
              const w = p.task.identifier;
              this.F.info("Waiting for already requested installing extension", w.id, h.identifier.id, l.profileLocation.toString()),
                p.waitingTasks.push(h),
                r.push(
                  at.toPromise(at.filter(this.onDidInstallExtensions, (m) => m.some((y) => J(y.identifier, w)))).then((m) => {
                    if ((this.F.info("Finished waiting for already requested installing extension", w.id, h.identifier.id, l.profileLocation.toString()), !m.find((v) => J(v.identifier, w))?.local))
                      throw new Error(`Extension ${w.id} is not installed`);
                  }),
                );
            }
            return;
          }
        }
        const u = this.Y(a, c, l),
          f = `${ni(a.publisher, a.name)}-${l.profileLocation.toString()}`;
        s.set(f, { task: u, root: h }),
          this.n.fire({ identifier: u.identifier, source: c, profileLocation: l.profileLocation }),
          this.F.info("Installing extension:", u.identifier.id, l),
          I.isUri(c) || this.j.set(n(c, l.profileLocation), { task: u, waitingTasks: [] });
      };
    try {
      for (const { manifest: c, extension: l, options: h } of t) {
        const u = h.isApplicationScoped || h.isBuiltin || Qh(c),
          f = {
            ...h,
            installOnlyNewlyAddedFromExtensionPack: h.installOnlyNewlyAddedFromExtensionPack ?? !I.isUri(l),
            isApplicationScoped: u,
            profileLocation: u ? this.H.defaultProfile.extensionsResource : (h.profileLocation ?? this.X()),
            productVersion: h.productVersion ?? { version: this.G.version, date: this.G.date },
          },
          p = I.isUri(l) ? void 0 : this.j.get(n(l, f.profileLocation));
        p ? (this.F.info("Extension is already requested to install", p.task.identifier.id, f.profileLocation.toString()), r.push(p.task.waitUntilTaskIsFinished())) : o(c, l, f, void 0);
      }
      await Promise.all(
        [...s.values()].map(async ({ task: c }) => {
          if (c.options.donotIncludePackAndDependencies) this.F.info("Installing the extension without checking dependencies and pack", c.identifier.id);
          else
            try {
              const l = await this.N(c.identifier, c.manifest, !!c.options.installOnlyNewlyAddedFromExtensionPack, !!c.options.installPreReleaseVersion, c.options.profileLocation, c.options.productVersion),
                h = await this.getInstalled(void 0, c.options.profileLocation, c.options.productVersion),
                u = { ...c.options, context: { ...c.options.context, [hg]: !0 } };
              for (const { gallery: f, manifest: p } of li(l, ({ gallery: w }) => w.identifier.id)) h.some(({ identifier: w }) => J(w, f.identifier)) || o(p, f, u, c);
            } catch (l) {
              if (I.isUri(c.source))
                Sc(c.manifest.extensionDependencies) && this.F.warn("Cannot install dependencies of extension:", c.identifier.id, l.message),
                  Sc(c.manifest.extensionPack) && this.F.warn("Cannot install packed extensions of extension:", c.identifier.id, l.message);
              else throw (this.F.error("Error while preparing to install dependencies and extension packs of the extension:", c.identifier.id), l);
            }
        }),
      );
      const a = await this.J([...s.values()].map(({ task: c }) => c));
      for (const [c, l] of a) o(l.manifest, l.source, { ...l.options, profileLocation: c }, void 0);
      return (
        await this.M(
          [...s.entries()].map(async ([c, { task: l }]) => {
            const h = new Date().getTime();
            let u;
            try {
              (u = await l.run()),
                await this.M(
                  this.y.map((f) => f.postInstall(u, l.source, l.options, lt.None)),
                  "PostInstall",
                );
            } catch (f) {
              const p = It(f);
              throw (
                (I.isUri(l.source) || $a(this.C, l.operation === 3 ? "extensionGallery:update" : "extensionGallery:install", { extensionData: ra(l.source), error: p, source: l.options.context?.[Th] }),
                i.set(c, { error: p, identifier: l.identifier, operation: l.operation, source: l.source, context: l.options.context, profileLocation: l.options.profileLocation, applicationScoped: l.options.isApplicationScoped }),
                this.F.error("Error while installing the extension", l.identifier.id, st(p), l.options.profileLocation.toString()),
                p)
              );
            }
            if (!I.isUri(l.source)) {
              const f = l.operation === 3,
                p = f ? void 0 : (new Date().getTime() - l.source.lastUpdated) / 1e3;
              if (
                ($a(this.C, f ? "extensionGallery:update" : "extensionGallery:install", {
                  extensionData: ra(l.source),
                  verificationStatus: l.verificationStatus,
                  duration: new Date().getTime() - h,
                  durationSinceUpdate: p,
                  source: l.options.context?.[Th],
                }),
                fe && l.operation !== 3)
              )
                try {
                  await this.z.reportStatistic(u.manifest.publisher, u.manifest.name, u.manifest.version, "install");
                } catch {}
            }
            i.set(c, { local: u, identifier: l.identifier, operation: l.operation, source: l.source, context: l.options.context, profileLocation: l.options.profileLocation, applicationScoped: u.isApplicationScoped });
          }),
        ),
        r.length && (await this.M(r)),
        [...i.values()]
      );
    } catch (a) {
      const c = (u, f, p) => {
          const w = [];
          u.manifest.extensionDependencies?.length && w.push(...u.manifest.extensionDependencies), u.manifest.extensionPack?.length && w.push(...u.manifest.extensionPack);
          for (const m of w) {
            if (p.includes(m.toLowerCase())) continue;
            p.push(m.toLowerCase());
            const y = i.get(`${m.toLowerCase()}-${f.toString()}`);
            y?.local && (p = c(y.local, f, p));
          }
          return p;
        },
        l = (u) => ({ identifier: u.identifier, operation: 2, source: u.source, context: u.options.context, profileLocation: u.options.profileLocation, error: a }),
        h = [];
      for (const [u, { task: f, root: p }] of s) {
        const w = i.get(u);
        w
          ? w.local && p && !i.get(`${p.identifier.id.toLowerCase()}-${f.options.profileLocation.toString()}`)?.local && (h.push(this.Z(w.local, { versionOnly: !0, profileLocation: f.options.profileLocation })), i.set(u, l(f)))
          : (f.cancel(), i.set(u, l(f)));
      }
      for (const [u, { task: f }] of s) {
        const p = i.get(u);
        if (!p?.local || f.options.donotIncludePackAndDependencies) continue;
        c(p.local, f.options.profileLocation, [p.local.identifier.id.toLowerCase()])
          .slice(1)
          .some((m) => s.has(`${m.toLowerCase()}-${f.options.profileLocation.toString()}`) && !i.get(`${m.toLowerCase()}-${f.options.profileLocation.toString()}`)?.local) &&
          (h.push(this.Z(p.local, { versionOnly: !0, profileLocation: f.options.profileLocation })), i.set(u, l(f)));
      }
      throw (
        (h.length &&
          (await Promise.allSettled(
            h.map(async (u) => {
              try {
                await u.run(), this.F.info("Rollback: Uninstalled extension", u.extension.identifier.id);
              } catch (f) {
                this.F.warn("Rollback: Error while uninstalling extension", u.extension.identifier.id, st(f));
              }
            }),
          )),
        a)
      );
    } finally {
      for (const { task: a } of s.values()) a.source && !I.isUri(a.source) && this.j.delete(n(a.source, a.options.profileLocation));
      if (i.size) {
        const a = [...i.values()];
        for (const c of a) c.local && this.F.info("Extension installed successfully:", c.identifier.id, c.profileLocation.toString());
        this.s.fire(a);
      }
    }
  }
  async J(t) {
    const i = [],
      s = new Qt();
    for (const r of t)
      if (!(r.operation !== 3 || r.options.isApplicationScoped || r.options.pinned || r.options.installGivenVersion || I.isUri(r.source)))
        for (const n of this.H.profiles) {
          if (this.D.extUri.isEqual(n.extensionsResource, r.options.profileLocation)) continue;
          let o = s.get(n.extensionsResource);
          o || ((o = await this.getInstalled(1, n.extensionsResource)), s.set(n.extensionsResource, o));
          const a = o.find((c) => J(c.identifier, r.identifier));
          a && !a.pinned && i.push([n.extensionsResource, r]);
        }
    return i;
  }
  L(t, i) {
    for (const [, { task: s, waitingTasks: r }] of this.j.entries()) if ((s === t && (r.includes(i) || r.some((n) => this.L(n, i)))) || (s === i && r[0] && !this.L(t, r[0]))) return !1;
    return !0;
  }
  async M(t, i) {
    const s = [],
      r = [],
      n = await Promise.allSettled(t);
    for (const a of n) a.status === "fulfilled" ? s.push(a.value) : r.push(It(a.reason, i));
    if (!r.length) return s;
    if (r.length === 1) throw r[0];
    let o = new vt("", "Unknown");
    for (const a of r) o = new vt(o.message ? `${o.message}, ${a.message}` : a.message, a.code !== "Unknown" && a.code !== "Internal" ? a.code : o.code);
    throw o;
  }
  async N(t, i, s, r, n, o) {
    if (!this.z.isEnabled()) return [];
    const a = await this.getInstalled(void 0, n, o),
      c = [],
      l = [],
      h = async (u, f) => {
        c.push(u);
        const p = f.extensionDependencies || [],
          w = [...p];
        if (f.extensionPack) {
          const m = s ? a.find((y) => J(y.identifier, u)) : void 0;
          for (const y of f.extensionPack) (m && m.manifest.extensionPack && m.manifest.extensionPack.some((v) => J({ id: v }, { id: y }))) || (w.every((v) => !J({ id: v }, { id: y })) && w.push(y));
        }
        if (w.length) {
          const m = w.filter((y) => c.every((v) => !J(v, { id: y })));
          if (m.length) {
            const y = await this.z.getExtensions(
              m.map((v) => ({ id: v, preRelease: r })),
              lt.None,
            );
            for (const v of y) {
              if (c.find((x) => J(x, v.identifier))) continue;
              const S = p.some((x) => J({ id: x }, v.identifier));
              let D;
              try {
                D = await this.O(v, !1, r, o);
              } catch (x) {
                if (S) throw x;
                this.F.info("Skipping the packed extension as it cannot be installed", v.identifier.id, st(x));
                continue;
              }
              l.push({ gallery: D.extension, manifest: D.manifest }), await h(D.extension.identifier, D.manifest);
            }
          }
        }
      };
    return await h(t, i), l;
  }
  async O(t, i, s, r) {
    let n;
    const o = await this.getExtensionsControlManifest();
    if (o.malicious.some((l) => J(t.identifier, l))) throw new vt(d(1804, null, t.identifier.id), "Malicious");
    const a = o.deprecated[t.identifier.id.toLowerCase()];
    if (a?.extension?.autoMigrate) {
      if (
        (this.F.info(`The '${t.identifier.id}' extension is deprecated, fetching the compatible '${a.extension.id}' extension instead.`),
        (n = (await this.z.getExtensions([{ id: a.extension.id, preRelease: a.extension.preRelease }], { targetPlatform: await this.getTargetPlatform(), compatible: !0, productVersion: r }, lt.None))[0]),
        !n)
      )
        throw new vt(d(1805, null, t.identifier.id, a.extension.id), "Deprecated");
    } else {
      if (!(await this.canInstall(t))) {
        const l = await this.getTargetPlatform();
        throw new vt(d(1806, null, t.identifier.id, this.G.nameLong, fg(l)), "IncompatibleTargetPlatform");
      }
      if (((n = await this.P(t, i, s, r)), !n)) {
        const l = [];
        throw ca(t.properties.enabledApiProposals ?? [], l)
          ? !s && t.properties.isPreReleaseVersion && (await this.z.getExtensions([t.identifier], lt.None))[0]
            ? new vt(d(1808, null, t.displayName ?? t.identifier.id), "ReleaseVersionNotFound")
            : new vt(d(1809, null, t.identifier.id, this.G.nameLong, this.G.version), "Incompatible")
          : new vt(d(1807, null, t.displayName ?? t.identifier.id, l[0]), "IncompatibleApi");
      }
    }
    this.F.info("Getting Manifest...", n.identifier.id);
    const c = await this.z.getManifest(n, lt.None);
    if (c === null) throw new vt(`Missing manifest for extension ${n.identifier.id}`, "Invalid");
    if (c.version !== n.version) throw new vt(`Cannot install '${n.identifier.id}' extension because of version mismatch in Marketplace`, "Invalid");
    return { extension: n, manifest: c };
  }
  async P(t, i, s, r) {
    const n = await this.getTargetPlatform();
    let o = null;
    return (
      !i && t.hasPreReleaseVersion && t.properties.isPreReleaseVersion !== s && (o = (await this.z.getExtensions([{ ...t.identifier, preRelease: s }], { targetPlatform: n, compatible: !0, productVersion: r }, lt.None))[0] || null),
      !o && (await this.z.isExtensionCompatible(t, s, n, r)) && (o = t),
      o || (i ? (o = (await this.z.getExtensions([{ ...t.identifier, version: t.version }], { targetPlatform: n, compatible: !0, productVersion: r }, lt.None))[0] || null) : (o = await this.z.getCompatibleExtension(t, s, n, r))),
      o
    );
  }
  async uninstallExtensions(t) {
    const i = (l, h) => `${l.identifier.id.toLowerCase()}${h.versionOnly ? `-${l.manifest.version}` : ""}@${h.profileLocation.toString()}`,
      s = (l, h) => {
        const u = this.Z(l, h);
        return (
          this.m.set(i(u.extension, h), u),
          this.F.info("Uninstalling extension from the profile:", `${l.identifier.id}@${l.manifest.version}`, h.profileLocation.toString()),
          this.t.fire({ identifier: l.identifier, profileLocation: h.profileLocation, applicationScoped: l.isApplicationScoped }),
          u
        );
      },
      r = (l, h, u) => {
        u
          ? this.F.error("Failed to uninstall extension from the profile:", `${l.identifier.id}@${l.manifest.version}`, h.profileLocation.toString(), u.message)
          : this.F.info("Successfully uninstalled extension from the profile", `${l.identifier.id}@${l.manifest.version}`, h.profileLocation.toString()),
          $a(this.C, "extensionGallery:uninstall", { extensionData: Ug(l), error: u }),
          this.u.fire({ identifier: l.identifier, error: u?.code, profileLocation: h.profileLocation, applicationScoped: l.isApplicationScoped });
      },
      n = [],
      o = [],
      a = [],
      c = new Qt();
    for (const { extension: l, options: h } of t) {
      const u = { ...h, profileLocation: l.isApplicationScoped ? this.H.defaultProfile.extensionsResource : (h?.profileLocation ?? this.X()) },
        f = this.m.get(i(l, u));
      f ? (this.F.info("Extensions is already requested to uninstall", l.identifier.id), a.push(f.waitUntilTaskIsFinished())) : n.push(s(l, u));
    }
    try {
      for (const l of n.slice(0)) {
        let h = c.get(l.options.profileLocation);
        if ((h || c.set(l.options.profileLocation, (h = await this.getInstalled(1, l.options.profileLocation))), l.options.donotIncludePack))
          this.F.info("Uninstalling the extension without including packed extension", `${l.extension.identifier.id}@${l.extension.manifest.version}`);
        else {
          const u = this.S(l.extension, h);
          for (const f of u) this.m.has(i(f, l.options)) ? this.F.info("Extensions is already requested to uninstall", f.identifier.id) : n.push(s(f, l.options));
        }
        l.options.donotCheckDependents
          ? this.F.info("Uninstalling the extension without checking dependents", `${l.extension.identifier.id}@${l.extension.manifest.version}`)
          : this.Q(
              n.map((u) => u.extension),
              h,
              l.extension,
            );
      }
      await this.M(
        n.map(async (l) => {
          try {
            if ((await l.run(), await this.M(this.y.map((h) => h.postUninstall(l.extension, l.options, lt.None))), l.extension.identifier.uuid))
              try {
                await this.z.reportStatistic(l.extension.manifest.publisher, l.extension.manifest.name, l.extension.manifest.version, "uninstall");
              } catch {}
          } catch (h) {
            const u = It(h);
            throw (r(l.extension, l.options, u), u);
          } finally {
            o.push(l);
          }
        }),
      ),
        a.length && (await this.M(a));
      for (const l of n) r(l.extension, l.options);
    } catch (l) {
      const h = It(l);
      for (const u of n) {
        try {
          u.cancel();
        } catch {}
        o.includes(u) || r(u.extension, u.options, h);
      }
      throw h;
    } finally {
      for (const l of n) this.m.delete(i(l.extension, l.options)) || this.F.warn("Uninstallation task is not found in the cache", l.extension.identifier.id);
    }
  }
  Q(t, i, s) {
    for (const r of t) {
      const n = this.U(r, i);
      if (n.length) {
        const o = n.filter((a) => !t.some((c) => J(c.identifier, a.identifier)));
        if (o.length) throw new Error(this.R(r, o, s));
      }
    }
  }
  R(t, i, s) {
    return s === t
      ? i.length === 1
        ? d(1810, null, s.manifest.displayName || s.manifest.name, i[0].manifest.displayName || i[0].manifest.name)
        : i.length === 2
          ? d(1811, null, s.manifest.displayName || s.manifest.name, i[0].manifest.displayName || i[0].manifest.name, i[1].manifest.displayName || i[1].manifest.name)
          : d(1812, null, s.manifest.displayName || s.manifest.name, i[0].manifest.displayName || i[0].manifest.name, i[1].manifest.displayName || i[1].manifest.name)
      : i.length === 1
        ? d(1813, null, s.manifest.displayName || s.manifest.name, t.manifest.displayName || t.manifest.name, i[0].manifest.displayName || i[0].manifest.name)
        : i.length === 2
          ? d(1814, null, s.manifest.displayName || s.manifest.name, t.manifest.displayName || t.manifest.name, i[0].manifest.displayName || i[0].manifest.name, i[1].manifest.displayName || i[1].manifest.name)
          : d(1815, null, s.manifest.displayName || s.manifest.name, t.manifest.displayName || t.manifest.name, i[0].manifest.displayName || i[0].manifest.name, i[1].manifest.displayName || i[1].manifest.name);
  }
  S(t, i, s = []) {
    if (s.indexOf(t) !== -1) return [];
    s.push(t);
    const r = t.manifest.extensionPack ? t.manifest.extensionPack : [];
    if (r.length) {
      const n = i.filter((a) => !a.isBuiltin && r.some((c) => J({ id: c }, a.identifier))),
        o = [];
      for (const a of n) o.push(...this.S(a, i, s));
      return [...n, ...o];
    }
    return [];
  }
  U(t, i) {
    return i.filter((s) => s.manifest.extensionDependencies && s.manifest.extensionDependencies.some((r) => J({ id: r }, t.identifier)));
  }
  async W() {
    try {
      return this.F.trace("ExtensionManagementService.updateControlCache"), await this.z.getExtensionsControlManifest();
    } catch (t) {
      return this.F.trace("ExtensionManagementService.refreshControlCache - failed to get extension control manifest", st(t)), { malicious: [], deprecated: {}, search: [] };
    }
  }
};
Sa = __decorate([__param(0, bi), __param(1, Ae), __param(2, Ht), __param(3, ht), __param(4, Te), __param(5, _e)], Sa);
function It(e, t) {
  if (e instanceof vt) return e;
  let i;
  return e instanceof an ? (i = new vt(e.message, e.code === "DownloadFailedWriting" ? "DownloadFailedWriting" : "Gallery")) : (i = new vt(e.message, Qi(e) ? "Cancelled" : (t ?? "Internal"))), (i.stack = e.stack), i;
}
function $a(e, t, { extensionData: i, verificationStatus: s, duration: r, error: n, source: o, durationSinceUpdate: a }) {
  e.publicLog(t, { ...i, source: o, duration: r, durationSinceUpdate: a, success: !n, errorcode: n?.code, verificationStatus: s === qt.Success ? "Verified" : (s ?? "Unverified") });
}
var Vu = class {
  constructor() {
    this.d = new Ll();
  }
  async waitUntilTaskIsFinished() {
    return await this.d.wait(), this.g;
  }
  run() {
    return this.g || (this.g = ti((e) => this.h(e))), this.d.open(), this.g;
  }
  cancel() {
    this.g ||
      ((this.g = ti(
        (e) =>
          new Promise((t, i) => {
            const s = e.onCancellationRequested(() => {
              s.dispose(), i(new Tt());
            });
          }),
      )),
      this.d.open()),
      this.g.cancel();
  }
};
function Ia(e) {
  let t = "Extract";
  return e instanceof Sn && (e.type === "CorruptZip" ? (t = "CorruptZip") : e.type === "Incomplete" && (t = "IncompleteZip")), It(e, t);
}
async function Pa(e) {
  let t;
  try {
    t = await ju(e, "extension/package.json");
  } catch (i) {
    throw Ia(i);
  }
  try {
    return JSON.parse(t.toString("utf8"));
  } catch {
    throw new vt(d(1872, null), "Invalid");
  }
}
var ka,
  Aa = class extends G {
    static {
      ka = this;
    }
    static {
      this.c = ".sigzip";
    }
    constructor(t, i, s, r, n, o) {
      super(), (this.h = i), (this.j = s), (this.m = r), (this.n = n), (this.r = o), (this.extensionsDownloadDir = t.extensionsDownloadLocation), (this.f = 20), (this.g = this.C());
    }
    async download(t, i, s, r) {
      await this.g;
      const n = await this.t(t, i);
      if (!s || !t.isSigned) return { location: n, verificationStatus: void 0 };
      let o;
      try {
        o = await this.u(t);
        const a = (await this.m.verify(t.identifier.id, t.version, n.fsPath, o.fsPath, r))?.code;
        if (a === qt.PackageIsInvalidZip || a === qt.SignatureArchiveIsInvalidZip) {
          try {
            await this.delete(n);
          } catch (c) {
            this.r.error(c);
          }
          throw new vt(Tu, "CorruptZip");
        }
        return { location: n, verificationStatus: a };
      } catch (a) {
        try {
          await this.delete(n);
        } catch (c) {
          this.r.error(c);
        }
        throw a;
      } finally {
        if (o)
          try {
            await this.delete(o);
          } catch (a) {
            this.r.error(a);
          }
      }
    }
    async t(t, i) {
      try {
        const s = V(this.extensionsDownloadDir, this.D(t)),
          r = await this.y(
            t,
            "vsix",
            async () => {
              await this.w(t, s, (n) => this.j.download(t, n, i));
              try {
                await this.z(s.fsPath, "extension/package.json");
              } catch (n) {
                try {
                  await this.h.del(s);
                } catch (o) {
                  this.r.warn(`Error while deleting: ${s.path}`, st(o));
                }
                throw n;
              }
            },
            2,
          );
        return r > 1 && this.n.publicLog2("extensiongallery:downloadvsix:retry", { extensionId: t.identifier.id, attempts: r }), s;
      } catch (s) {
        throw It(s, "Download");
      }
    }
    async u(t) {
      try {
        const i = V(this.extensionsDownloadDir, `.${Kt()}`),
          s = await this.y(
            t,
            "sigzip",
            async () => {
              await this.j.downloadSignatureArchive(t, i);
              try {
                await this.z(i.fsPath, ".signature.p7s");
              } catch (r) {
                try {
                  await this.h.del(i);
                } catch (n) {
                  this.r.warn(`Error while deleting: ${i.path}`, st(n));
                }
                throw r;
              }
            },
            2,
          );
        return s > 1 && this.n.publicLog2("extensiongallery:downloadsigzip:retry", { extensionId: t.identifier.id, attempts: s }), i;
      } catch (i) {
        throw It(i, "DownloadSignature");
      }
    }
    async w(t, i, s) {
      if (await this.h.exists(i)) return;
      if (i.scheme !== K.file) {
        await s(i);
        return;
      }
      const r = V(this.extensionsDownloadDir, `.${Kt()}`);
      try {
        await s(r);
      } catch (n) {
        try {
          await this.h.del(r);
        } catch {}
        throw n;
      }
      try {
        await pt.rename(r.fsPath, i.fsPath, 2 * 60 * 1e3);
      } catch (n) {
        try {
          await this.h.del(r);
        } catch {}
        let o = !1;
        try {
          o = await this.h.exists(i);
        } catch {}
        if (o) this.r.info("Rename failed because the file was downloaded by another source. So ignoring renaming.", t.identifier.id, i.path);
        else throw (this.r.info(`Rename failed because of ${st(n)}. Deleted the file from downloaded location`, r.path), n);
      }
    }
    async y(t, i, s, r) {
      let n = 1;
      for (;;)
        try {
          return await s(), n;
        } catch (o) {
          if (n++ > r) throw o;
          this.r.warn(`Failed downloading ${i}. ${st(o)}. Retry again...`, t.identifier.id);
        }
    }
    async z(t, i) {
      try {
        await ju(t, i);
      } catch (s) {
        throw Ia(s);
      }
    }
    async delete(t) {
      await this.g, await this.h.del(t);
    }
    async C() {
      try {
        if (!(await this.h.exists(this.extensionsDownloadDir))) {
          this.r.trace("Extension VSIX downloads cache dir does not exist");
          return;
        }
        const t = await this.h.resolve(this.extensionsDownloadDir, { resolveMetadata: !0 });
        if (t.children) {
          const i = [],
            s = [],
            r = [];
          for (const a of t.children)
            if (a.name.endsWith(ka.c)) r.push(a.resource);
            else {
              const c = oe.parse(a.name);
              c && s.push([c, a]);
            }
          const n = ru(s, ([a]) => a),
            o = [];
          for (const a of n) a.sort((c, l) => ou(c[0].version, l[0].version)), i.push(...a.slice(1).map((c) => c[1].resource)), o.push(a[0][1]);
          o.sort((a, c) => a.mtime - c.mtime), i.push(...o.slice(0, Math.max(0, o.length - this.f)).map((a) => a.resource)), i.push(...r), await me.settled(i.map((a) => (this.r.trace("Deleting from cache", a.path), this.h.del(a))));
        }
      } catch (t) {
        this.r.error(t);
      }
    }
    D(t) {
      return this.f ? oe.create(t).toString().toLowerCase() : Kt();
    }
  };
Aa = ka = __decorate([__param(0, ke), __param(1, $t), __param(2, bi), __param(3, $u), __param(4, Ae), __param(5, ht)], Aa);
import { fork as K4 } from "child_process";
var Da = class extends G {
  constructor(t, i) {
    super(), (this.b = t), (this.f = i), (this.a = new Ol(5));
  }
  async postUninstall(t) {
    const i = this.g(t, "uninstall");
    i &&
      (this.f.info(t.identifier.id, t.manifest.version, "Running post uninstall script"),
      await this.a.queue(async () => {
        try {
          await this.h(i.script, "uninstall", i.args, !0, t), this.f.info("Finished running post uninstall script", t.identifier.id, t.manifest.version);
        } catch (s) {
          this.f.error("Failed to run post uninstall script", t.identifier.id, t.manifest.version), this.f.error(s);
        }
      }));
    try {
      await pt.rm(this.m(t));
    } catch (s) {
      this.f.error("Error while removing extension storage path", t.identifier.id), this.f.error(s);
    }
  }
  g(t, i) {
    const s = `vscode:${i}`;
    if (t.location.scheme === K.file && t.manifest && t.manifest.scripts && typeof t.manifest.scripts[s] == "string") {
      const r = t.manifest.scripts[s].split(" ");
      return r.length < 2 || r[0] !== "node" || !r[1] ? (this.f.warn(t.identifier.id, t.manifest.version, `${s} should be a node script`), null) : { script: _(t.location.fsPath, r[1]), args: r.slice(2) || [] };
    }
    return null;
  }
  h(t, i, s, r, n) {
    return new Promise((o, a) => {
      const c = this.j(t, i, s, n);
      let l;
      const h = (u) => {
        l && (clearTimeout(l), (l = null)), u ? a(u) : o(void 0);
      };
      c.on("error", (u) => {
        h(gi(u) || "Unknown");
      }),
        c.on("exit", (u, f) => {
          h(u ? `post-${i} process exited with code ${u}` : void 0);
        }),
        r &&
          (l = setTimeout(() => {
            (l = null), c.kill(), a("timed out");
          }, 5e3));
    });
  }
  j(t, i, s, r) {
    const n = { silent: !0, execArgv: void 0 },
      o = K4(t, [`--type=extension-post-${i}`, ...s], n);
    o.stdout.setEncoding("utf8"), o.stderr.setEncoding("utf8");
    const a = at.fromNodeEventEmitter(o.stdout, "data"),
      c = at.fromNodeEventEmitter(o.stderr, "data");
    this.B(a((u) => this.f.info(r.identifier.id, r.manifest.version, `post-${i}`, u))), this.B(c((u) => this.f.error(r.identifier.id, r.manifest.version, `post-${i}`, u)));
    const l = at.any(
      at.map(a, (u) => ({ data: `%c${u}`, format: [""] }), this.q),
      at.map(c, (u) => ({ data: `%c${u}`, format: ["color: red"] }), this.q),
    );
    return (
      at.debounce(
        l,
        (u, f) => (u ? { data: u.data + f.data, format: [...u.format, ...f.format] } : { data: f.data, format: f.format }),
        100,
        void 0,
        void 0,
        void 0,
        this.q,
      )((u) => {
        console.group(r.identifier.id), console.log(u.data, ...u.format), console.groupEnd();
      }),
      o
    );
  }
  m(t) {
    return _(this.b.defaultProfile.globalStorageHome.fsPath, t.identifier.id.toLowerCase());
  }
};
Da = __decorate([__param(0, _e), __param(1, ht)], Da);
var t5 = class extends G {
    constructor(e, t, i, s, r) {
      super(), (this.a = e), (this.b = t), (this.c = i), (this.f = r), this.B(s.onDidInstallExtensions((n) => this.g(n))), this.B(s.onDidUninstallExtension((n) => this.h(n)));
    }
    g(e) {
      for (const t of e) t.local && this.invalidate(t.profileLocation);
    }
    h(e) {
      e.error || this.invalidate(e.profileLocation);
    }
    async invalidate(e) {
      if (e) for (const t of this.a.profiles) this.c.extUri.isEqual(t.extensionsResource, e) && (await this.j(t));
      else await this.j(this.a.defaultProfile);
    }
    async j(e) {
      try {
        await this.b.del(this.c.extUri.joinPath(e.cacheHome, Wh));
      } catch (t) {
        Yt(t) !== 1 && this.f.error(t);
      }
    }
  },
  e5 = class extends G {
    constructor(e, t, i, s, r, n, o) {
      super(),
        (this.f = e),
        (this.g = t),
        (this.h = i),
        (this.j = s),
        (this.m = r),
        (this.n = n),
        (this.r = o),
        (this.a = this.B(new O())),
        (this.onDidChangeExtensionsByAnotherSource = this.a.event),
        (this.b = new Map()),
        (this.c = this.B(new Jn())),
        this.s().then(null, (a) => o.error("Error while initializing Extensions Watcher", st(a)));
    }
    async s() {
      await this.g.initializeDefaultProfileExtensions(), await this.u(this.h.profiles), this.t(), await this.H();
    }
    t() {
      this.B(this.h.onDidChangeProfiles((e) => this.u(e.added))),
        this.B(this.j.onAddExtensions((e) => this.w(e))),
        this.B(this.j.onDidAddExtensions((e) => this.y(e))),
        this.B(this.j.onRemoveExtensions((e) => this.z(e))),
        this.B(this.j.onDidRemoveExtensions((e) => this.C(e))),
        this.B(this.n.onDidFilesChange((e) => this.D(e)));
    }
    async u(e) {
      try {
        e.length && (await Promise.all(e.map((t) => (this.c.set(t.id, Rc(this.n.watch(this.m.extUri.dirname(t.extensionsResource)), this.n.watch(t.extensionsResource))), this.G(t.extensionsResource)))));
      } catch (t) {
        throw (this.r.error(t), t);
      }
    }
    async w(e) {
      for (const t of e.extensions) this.I(this.L(t.identifier, t.version), e.profileLocation);
    }
    async y(e) {
      for (const t of e.extensions) {
        const i = this.L(t.identifier, t.version);
        e.error ? this.J(i, e.profileLocation) : this.I(i, e.profileLocation);
      }
    }
    async z(e) {
      for (const t of e.extensions) this.J(this.L(t.identifier, t.version), e.profileLocation);
    }
    async C(e) {
      const t = [],
        i = [];
      for (const s of e.extensions) {
        const r = this.L(s.identifier, s.version);
        e.error
          ? this.I(r, e.profileLocation)
          : (this.J(r, e.profileLocation),
            this.b.has(r) ||
              (this.r.debug("Extension is removed from all profiles", s.identifier.id, s.version),
              i.push(
                this.f.scanInstalledExtensionAtLocation(s.location).then(
                  (n) => {
                    n ? t.push(n) : this.r.info("Extension not found at the location", s.location.toString());
                  },
                  (n) => this.r.error(n),
                ),
              )));
      }
      try {
        await Promise.all(i), t.length && (await this.H(t));
      } catch (s) {
        this.r.error(s);
      }
    }
    D(e) {
      for (const t of this.h.profiles) e.contains(t.extensionsResource, 0, 1) && this.F(t.extensionsResource);
    }
    async F(e) {
      const t = [],
        i = [],
        s = await this.j.scanProfileExtensions(e),
        r = new Set(),
        n = new Set();
      for (const [o, a] of this.b) a.has(e) && n.add(o);
      for (const o of s) {
        const a = this.L(o.identifier, o.version);
        r.add(a), n.has(a) || (t.push(o.identifier), this.I(a, e));
      }
      for (const o of n)
        if (!r.has(o)) {
          const a = this.M(o);
          a && (i.push(a.identifier), this.J(o, e));
        }
      (t.length || i.length) && this.a.fire({ added: t.length ? { extensions: t, profileLocation: e } : void 0, removed: i.length ? { extensions: i, profileLocation: e } : void 0 });
    }
    async G(e) {
      const t = await this.j.scanProfileExtensions(e);
      for (const i of t) this.I(this.L(i.identifier, i.version), e);
    }
    async H(e) {
      e || (e = (await this.f.scanAllUserInstalledExtensions()).filter((i) => !this.b.has(this.L(i.identifier, i.manifest.version)))), e.length && (await this.f.markAsUninstalled(...e));
    }
    I(e, t) {
      let i = this.b.get(e);
      i || this.b.set(e, (i = new Hn((s) => this.m.extUri.getComparisonKey(s)))), i.add(t);
    }
    J(e, t) {
      const i = this.b.get(e);
      i && i.delete(t), i?.size || this.b.delete(e);
    }
    L(e, t) {
      return `${ms.toKey(e.id)}@${t}`;
    }
    M(e) {
      const [t, i] = sa(e);
      return i ? { identifier: { id: t }, version: i } : void 0;
    }
  },
  i5 = ta,
  Bu = ".vsctmp",
  Ra = class extends Sa {
    constructor(t, i, s, r, n, o, a, c, l, h, u, f, p) {
      super(t, i, f, s, u, p), (this.eb = r), (this.fb = n), (this.gb = o), (this.hb = a), (this.ib = c), (this.jb = l), (this.kb = h), (this.db = new Map()), (this.wb = new Hn());
      const w = this.B(c.createInstance(Da));
      (this.ab = this.B(c.createInstance(La, (y) => w.postUninstall(y)))), (this.bb = this.B(new t5(p, l, f, this, this.F))), (this.cb = this.B(c.createInstance(Aa)));
      const m = this.B(new e5(this, this.fb, p, o, f, l, s));
      this.B(m.onDidChangeExtensionsByAnotherSource((y) => this.vb(y))), this.xb();
    }
    getTargetPlatform() {
      return this.lb || (this.lb = nu(this.jb, this.F)), this.lb;
    }
    async zip(t) {
      this.F.trace("ExtensionManagementService#zip", t.identifier.id);
      const i = await this.ub(t),
        s = await X4(V(this.cb.extensionsDownloadDir, Kt()).fsPath, i);
      return I.file(s);
    }
    async getManifest(t) {
      const { location: i, cleanup: s } = await this.nb(t),
        r = Oi(i.fsPath);
      try {
        return await Pa(r);
      } finally {
        await s();
      }
    }
    getInstalled(t, i = this.H.defaultProfile.extensionsResource, s = { version: this.G.version, date: this.G.date }) {
      return this.ab.scanExtensions(t ?? null, i, s);
    }
    scanAllUserInstalledExtensions() {
      return this.ab.scanAllUserExtensions(!1);
    }
    scanInstalledExtensionAtLocation(t) {
      return this.ab.scanUserExtensionAtLocation(t);
    }
    async install(t, i = {}) {
      this.F.trace("ExtensionManagementService#install", t.toString());
      const { location: s, cleanup: r } = await this.nb(t);
      try {
        const n = await Pa(Oi(s.fsPath)),
          o = ni(n.publisher, n.name);
        if (n.engines && n.engines.vscode && !un(n.engines.vscode, this.G.version, this.G.date)) throw new Error(d(1859, null, o, this.G.version));
        const c = (await this.I([{ manifest: n, extension: s, options: i }])).find(({ identifier: l }) => J(l, { id: o }));
        if (c?.local) return c.local;
        throw c?.error ? c.error : It(new Error(`Unknown error while installing extension ${o}`));
      } finally {
        await r();
      }
    }
    async installFromLocation(t, i) {
      this.F.trace("ExtensionManagementService#installFromLocation", t.toString());
      const s = await this.ab.scanUserExtensionAtLocation(t);
      if (!s || !s.manifest.name || !s.manifest.version) throw new Error(`Cannot find a valid extension from the location ${t.toString()}`);
      return await this.zb([[s, { source: "resource" }]], i), this.F.info("Successfully installed extension", s.identifier.id, i.toString()), s;
    }
    async installExtensionsFromProfile(t, i, s) {
      this.F.trace("ExtensionManagementService#installExtensionsFromProfile", t, i.toString(), s.toString());
      const r = (await this.getInstalled(1, i)).filter((n) => t.some((o) => J(o, n.identifier)));
      if (r.length) {
        const n = await Promise.all(r.map((o) => this.ab.scanMetadata(o, i)));
        await this.zb(
          r.map((o, a) => [o, n[a]]),
          s,
        ),
          this.F.info(
            "Successfully installed extensions",
            r.map((o) => o.identifier.id),
            s.toString(),
          );
      }
      return r;
    }
    async updateMetadata(t, i, s) {
      return (
        this.F.trace("ExtensionManagementService#updateMetadata", t.identifier.id),
        i.isPreReleaseVersion && ((i.preRelease = !0), (i.hasPreReleaseVersion = !0)),
        i.isMachineScoped === !1 && (i.isMachineScoped = void 0),
        i.isBuiltin === !1 && (i.isBuiltin = void 0),
        i.pinned === !1 && (i.pinned = void 0),
        (t = await this.ab.updateMetadata(t, i, s)),
        this.bb.invalidate(s),
        this.w.fire({ local: t, profileLocation: s }),
        t
      );
    }
    async reinstallFromGallery(t) {
      if ((this.F.trace("ExtensionManagementService#reinstallFromGallery", t.identifier.id), !this.z.isEnabled())) throw new Error(d(1860, null));
      const i = await this.getTargetPlatform(),
        [s] = await this.z.getExtensions([{ ...t.identifier, preRelease: t.preRelease }], { targetPlatform: i, compatible: !0 }, lt.None);
      if (!s) throw new Error(d(1861, null));
      await this.ab.setUninstalled(t);
      try {
        await this.ab.removeUninstalledExtension(t);
      } catch (r) {
        throw new Error(d(1862, null, gi(r)));
      }
      return this.installFromGallery(s);
    }
    $(t, i, s, r) {
      return this.ab.copyExtension(t, i, s, r);
    }
    copyExtensions(t, i) {
      return this.ab.copyExtensions(t, i, { version: this.G.version, date: this.G.date });
    }
    markAsUninstalled(...t) {
      return this.ab.setUninstalled(...t);
    }
    async cleanUp() {
      this.F.trace("ExtensionManagementService#cleanUp");
      try {
        await this.ab.cleanUp();
      } catch (t) {
        this.F.error(t);
      }
    }
    async download(t, i, s) {
      const { location: r } = await this.sb(t, i, !s);
      return r;
    }
    async nb(t) {
      if (t.scheme === K.file) return { location: t, async cleanup() {} };
      this.F.trace("Downloading extension from", t.toString());
      const i = V(this.cb.extensionsDownloadDir, Kt());
      return (
        await this.hb.download(t, i),
        this.F.info("Downloaded extension to", i.toString()),
        {
          location: i,
          cleanup: async () => {
            try {
              await this.jb.del(i);
            } catch (r) {
              this.F.error(r);
            }
          },
        }
      );
    }
    X() {
      return this.H.defaultProfile.extensionsResource;
    }
    Y(t, i, s) {
      const r = i instanceof I ? new oe({ id: ni(t.publisher, t.name) }, t.version) : oe.create(i);
      return this.ib.createInstance(
        Oa,
        r,
        t,
        i,
        s,
        (n, o) => {
          if (i instanceof I) return this.tb(r, i, s, o);
          let a = this.db.get(r.toString());
          return a || (this.db.set(r.toString(), (a = this.rb(r, i, n, s, o))), a.finally(() => this.db.delete(r.toString()))), a;
        },
        this.ab,
      );
    }
    Z(t, i) {
      return new s5(t, i, this.gb);
    }
    async rb(t, i, s, r, n) {
      const { verificationStatus: o, location: a } = await this.sb(i, s, !r.donotVerifySignature, r.context?.[ug]);
      try {
        if (n.isCancellationRequested) throw new Tt();
        const c = await Pa(a.fsPath);
        if (!new oe(i.identifier, i.version).equals(new oe({ id: ni(c.publisher, c.name) }, c.version))) throw new vt(d(1863, null, i.identifier.id), "Invalid");
        return {
          local: await this.ab.extractUserExtension(
            t,
            a.fsPath,
            {
              id: i.identifier.uuid,
              publisherId: i.publisherId,
              publisherDisplayName: i.publisherDisplayName,
              targetPlatform: i.properties.targetPlatform,
              isApplicationScoped: r.isApplicationScoped,
              isMachineScoped: r.isMachineScoped,
              isBuiltin: r.isBuiltin,
              isPreReleaseVersion: i.properties.isPreReleaseVersion,
              hasPreReleaseVersion: i.properties.isPreReleaseVersion,
              installedTimestamp: Date.now(),
              pinned: r.installGivenVersion ? !0 : !!r.pinned,
              preRelease: di(r.preRelease) ? r.preRelease : r.installPreReleaseVersion || i.properties.isPreReleaseVersion,
              source: "gallery",
            },
            !1,
            n,
          ),
          verificationStatus: o,
        };
      } catch (c) {
        try {
          await this.cb.delete(a);
        } catch (l) {
          this.F.warn("Error while deleting the downloaded file", a.toString(), st(l));
        }
        throw It(c);
      }
    }
    async sb(t, i, s, r) {
      if (s) {
        const a = this.kb.getValue("extensions.verifySignature");
        s = di(a) ? a : !0;
      }
      s = !1;
      const { location: n, verificationStatus: o } = await this.cb.download(t, i, s, r);
      if (o !== qt.Success && s && this.eb.isBuilt && !se) {
        if (!t.isSigned) throw new vt(d(1864, null), "PackageNotSigned");
        if (!o) throw new vt(d(1865, null), "SignatureVerificationInternal");
        switch (o) {
          case qt.PackageIntegrityCheckFailed:
          case qt.SignatureIsInvalid:
          case qt.SignatureManifestIsInvalid:
          case qt.SignatureIntegrityCheckFailed:
          case qt.EntryIsMissing:
          case qt.EntryIsTampered:
          case qt.Untrusted:
          case qt.CertificateRevoked:
          case qt.SignatureIsNotValid:
          case qt.SignatureArchiveHasTooManyEntries:
            throw new vt(d(1866, null, o), "SignatureVerificationFailed");
        }
        throw new vt(d(1867, null, o), "SignatureVerificationInternal");
      }
      return { location: n, verificationStatus: o };
    }
    async tb(t, i, s, r) {
      return {
        local: await this.ab.extractUserExtension(
          t,
          Oi(i.fsPath),
          { isApplicationScoped: s.isApplicationScoped, isMachineScoped: s.isMachineScoped, isBuiltin: s.isBuiltin, installedTimestamp: Date.now(), pinned: s.installGivenVersion ? !0 : !!s.pinned, source: "vsix" },
          s.keepExisting ?? !0,
          r,
        ),
      };
    }
    async ub(t) {
      const i = async (r) => {
        let n = await pt.readdir(r);
        n = n.map((c) => _(r, c));
        const o = await Promise.all(n.map((c) => A4.promises.stat(c)));
        let a = Promise.resolve([]);
        return (
          o.forEach((c, l) => {
            const h = n[l];
            c.isFile() && (a = a.then((u) => [...u, h])), c.isDirectory() && (a = a.then((u) => i(h).then((f) => [...u, ...f])));
          }),
          a
        );
      };
      return (await i(t.location.fsPath)).map((r) => ({ path: `extension/${rl(t.location.fsPath, r)}`, localPath: r }));
    }
    async vb({ added: t, removed: i }) {
      if (i) {
        const s = t && this.D.extUri.isEqual(i.profileLocation, t.profileLocation) ? i.extensions.filter((r) => t.extensions.every((n) => !J(n, r))) : i.extensions;
        for (const r of s) this.F.info("Extensions removed from another source", r.id, i.profileLocation.toString()), this.u.fire({ identifier: r, profileLocation: i.profileLocation });
      }
      if (t) {
        const r = (await this.getInstalled(1, t.profileLocation)).filter((n) => t.extensions.some((o) => J(o, n.identifier)));
        this.s.fire(r.map((n) => (this.F.info("Extensions added from another source", n.identifier.id, t.profileLocation.toString()), { identifier: n.identifier, local: n, profileLocation: t.profileLocation, operation: 1 })));
      }
    }
    async xb() {
      this.B(this.ab.onExtract((i) => this.wb.add(i)));
      const t = await this.jb.resolve(this.fb.userExtensionsLocation);
      for (const i of t.children ?? []) i.isDirectory && this.wb.add(i.resource);
      this.B(this.jb.watch(this.fb.userExtensionsLocation)), this.B(this.jb.onDidFilesChange((i) => this.yb(i)));
    }
    async yb(t) {
      if (!t.affects(this.fb.userExtensionsLocation, 1)) return;
      const i = [];
      for (const s of t.rawAdded) {
        if (
          this.wb.has(s) ||
          !this.D.extUri.isEqual(this.D.extUri.dirname(s), this.fb.userExtensionsLocation) ||
          this.D.extUri.isEqual(s, this.D.extUri.joinPath(this.fb.userExtensionsLocation, ".obsolete")) ||
          this.D.extUri.basename(s).startsWith(".") ||
          !(await this.jb.stat(s)).isDirectory
        )
          continue;
        const r = await this.ab.scanUserExtensionAtLocation(s);
        r && r.installedTimestamp === void 0 && (this.wb.add(s), i.push(r));
      }
      i.length &&
        (await this.zb(
          i.map((s) => [s, void 0]),
          this.H.defaultProfile.extensionsResource,
        ),
        this.F.info(
          "Added extensions to default profile from external source",
          i.map((s) => s.identifier.id),
        ));
    }
    async zb(t, i) {
      const s = t.map((r) => r[0]);
      await this.Ab(s), await this.gb.addExtensionsToProfile(t, i), this.s.fire(s.map((r) => ({ local: r, identifier: r.identifier, operation: 1, profileLocation: i })));
    }
    async Ab(t) {
      const i = await this.ab.getUninstalledExtensions();
      for (const s of t) {
        const r = oe.create(s);
        i[r.toString()] && (this.F.trace("Removing the extension from uninstalled list:", r.id), await this.ab.setInstalled(r), this.F.info("Removed the extension from uninstalled list:", r.id));
      }
    }
  };
Ra = __decorate([__param(0, bi), __param(1, Ae), __param(2, ht), __param(3, ke), __param(4, vn), __param(5, Ei), __param(6, yh), __param(7, zr), __param(8, $t), __param(9, Fi), __param(10, Te), __param(11, Ht), __param(12, _e)], Ra);
var La = class extends G {
  constructor(t, i, s, r, n, o, a) {
    super(),
      (this.n = t),
      (this.s = i),
      (this.t = s),
      (this.u = r),
      (this.w = n),
      (this.y = o),
      (this.z = a),
      (this.h = this.B(new O())),
      (this.onExtract = this.h.event),
      (this.j = new Qt()),
      (this.m = new Qt()),
      (this.c = V(this.t.userExtensionsLocation, ".obsolete")),
      (this.g = new Bs());
  }
  async cleanUp() {
    await this.J(), await this.I();
  }
  async scanExtensions(t, i, s) {
    try {
      const r = { includeInvalid: !0, profileLocation: i, productVersion: s };
      let n = [];
      if (t === null || t === 0) {
        let o = this.j.get(i);
        o || ((o = this.t.scanAllExtensions({ includeInvalid: !0, useCache: !0, language: Oe }, r, !1).finally(() => this.j.delete(i))), this.j.set(i, o)), n.push(...(await o));
      } else if (t === 1) {
        let o = this.m.get(i);
        o || ((o = this.t.scanUserExtensions(r).finally(() => this.m.delete(i))), this.m.set(i, o)), n.push(...(await o));
      }
      return (n = t !== null ? n.filter((o) => o.type === t) : n), await Promise.all(n.map((o) => this.H(o)));
    } catch (r) {
      throw It(r, "Scanning");
    }
  }
  async scanAllUserExtensions(t) {
    try {
      const i = await this.t.scanUserExtensions({ includeAllVersions: !t, includeInvalid: !0 });
      return await Promise.all(i.map((s) => this.H(s)));
    } catch (i) {
      throw It(i, "Scanning");
    }
  }
  async scanUserExtensionAtLocation(t) {
    try {
      const i = await this.t.scanExistingExtension(t, 1, { includeInvalid: !0 });
      if (i) return await this.H(i);
    } catch (i) {
      this.z.error(i);
    }
    return null;
  }
  async extractUserExtension(t, i, s, r, n) {
    const o = t.toString(),
      a = I.file(_(this.t.userExtensionsLocation.fsPath, `.${Kt()}`)),
      c = I.file(_(this.t.userExtensionsLocation.fsPath, o));
    if (await this.s.exists(c)) {
      if (!r)
        try {
          return await this.scanLocalExtension(c, 1);
        } catch (l) {
          this.z.warn(`Error while scanning the existing extension at ${c.path}. Deleting the existing extension and extracting it.`, st(l));
        }
      try {
        await this.D(t.id, c, "removeExisting");
      } catch {
        throw new vt(d(1868, null, c.fsPath, t.id), "Delete");
      }
    }
    try {
      if (n.isCancellationRequested) throw new Tt();
      try {
        this.z.trace(`Started extracting the extension from ${i} to ${c.fsPath}`), await Z4(i, a.fsPath, { sourcePath: "extension", overwrite: !0 }, n), this.z.info(`Extracted extension to ${c}:`, t.id);
      } catch (l) {
        throw Ia(l);
      }
      try {
        await this.t.updateMetadata(a, s);
      } catch (l) {
        throw (this.y.publicLog2("extension:extract", { extensionId: t.id, code: `${Yt(l)}` }), It(l, "UpdateMetadata"));
      }
      if (n.isCancellationRequested) throw new Tt();
      try {
        this.z.trace(`Started renaming the extension from ${a.fsPath} to ${c.fsPath}`), await this.G(a.fsPath, c.fsPath), this.z.info("Renamed to", c.fsPath);
      } catch (l) {
        if (l.code === "ENOTEMPTY") {
          this.z.info("Rename failed because extension was installed by another source. So ignoring renaming.", t.id);
          try {
            await this.s.del(a, { recursive: !0 });
          } catch {}
        } else throw (this.z.info(`Rename failed because of ${st(l)}. Deleted from extracted location`, a), l);
      }
      this.h.fire(c);
    } catch (l) {
      try {
        await this.s.del(a, { recursive: !0 });
      } catch {}
      throw l;
    }
    return this.scanLocalExtension(c, 1);
  }
  async scanMetadata(t, i) {
    return i ? (await this.C(t, i))?.metadata : this.t.scanMetadata(t.location);
  }
  async C(t, i) {
    return (await this.u.scanProfileExtensions(i)).find((r) => J(r.identifier, t.identifier));
  }
  async updateMetadata(t, i, s) {
    try {
      s ? await this.u.updateMetadata([[t, i]], s) : await this.t.updateMetadata(t.location, i);
    } catch (r) {
      throw (this.y.publicLog2("extension:extract", { extensionId: t.identifier.id, code: `${Yt(r)}`, isProfile: !!s }), It(r, "UpdateMetadata"));
    }
    return this.scanLocalExtension(t.location, t.type, s);
  }
  async getUninstalledExtensions() {
    try {
      return await this.F();
    } catch (t) {
      throw It(t, "ReadUninstalled");
    }
  }
  async setUninstalled(...t) {
    const i = t.map((s) => oe.create(s));
    await this.F((s) =>
      i.forEach((r) => {
        (s[r.toString()] = !0), this.z.info("Marked extension as uninstalled", r.toString());
      }),
    );
  }
  async setInstalled(t) {
    try {
      await this.F((i) => delete i[t.toString()]);
    } catch (i) {
      throw It(i, "UnsetUninstalled");
    }
  }
  async removeExtension(t, i) {
    if (this.w.extUri.isEqualOrParent(t.location, this.t.userExtensionsLocation)) return this.D(t.identifier.id, t.location, i);
  }
  async removeUninstalledExtension(t) {
    await this.removeExtension(t, "uninstalled"), await this.F((i) => delete i[oe.create(t).toString()]);
  }
  async copyExtension(t, i, s, r) {
    const n = await this.C(t, i),
      o = await this.C(t, s);
    if (((r = { ...n?.metadata, ...r }), o))
      if (this.w.extUri.isEqual(o.location, t.location)) await this.u.updateMetadata([[t, { ...o.metadata, ...r }]], s);
      else {
        const a = await this.scanLocalExtension(o.location, t.type, s);
        await this.u.removeExtensionFromProfile(a, s), await this.u.addExtensionsToProfile([[t, { ...o.metadata, ...r }]], s);
      }
    else await this.u.addExtensionsToProfile([[t, r]], s);
    return this.scanLocalExtension(t.location, t.type, s);
  }
  async copyExtensions(t, i, s) {
    const r = await this.scanExtensions(1, t, s),
      n = await Promise.all(r.filter((o) => !o.isApplicationScoped).map(async (o) => [o, await this.scanMetadata(o, t)]));
    await this.u.addExtensionsToProfile(n, i);
  }
  async D(t, i, s) {
    this.z.trace(`Deleting ${s} extension from disk`, t, i.fsPath);
    const r = this.w.extUri.joinPath(this.w.extUri.dirname(i), `${this.w.extUri.basename(i)}.${ls(Kt()).toString(16)}${Bu}`);
    await this.G(i.fsPath, r.fsPath), await this.s.del(r, { recursive: !0 }), this.z.info(`Deleted ${s} extension from disk`, t, i.fsPath);
  }
  F(t) {
    return this.g.queue(async () => {
      let i;
      try {
        i = (await this.s.readFile(this.c, "utf8")).value.toString();
      } catch (r) {
        if (Yt(r) !== 1) throw r;
      }
      let s = {};
      if (i)
        try {
          s = JSON.parse(i);
        } catch {}
      return t && (t(s), Object.keys(s).length ? await this.s.writeFile(this.c, B.fromString(JSON.stringify(s))) : await this.s.del(this.c)), s;
    });
  }
  async G(t, i) {
    try {
      await pt.rename(t, i, 2 * 60 * 1e3);
    } catch (s) {
      throw It(s, "Rename");
    }
  }
  async scanLocalExtension(t, i, s) {
    try {
      if (s) {
        const n = (await this.t.scanUserExtensions({ profileLocation: s })).find((o) => this.w.extUri.isEqual(o.location, t));
        if (n) return await this.H(n);
      } else {
        const r = await this.t.scanExistingExtension(t, i, { includeInvalid: !0 });
        if (r) return await this.H(r);
      }
      throw new vt(d(1869, null, t.path), "ScanningExtension");
    } catch (r) {
      throw It(r, "ScanningExtension");
    }
  }
  async H(t) {
    const i = await this.s.resolve(t.location);
    let s, r;
    return (
      i.children && ((s = i.children.find(({ name: n }) => /^readme(\.txt|\.md|)$/i.test(n))?.resource), (r = i.children.find(({ name: n }) => /^changelog(\.txt|\.md|)$/i.test(n))?.resource)),
      {
        identifier: t.identifier,
        type: t.type,
        isBuiltin: t.isBuiltin || !!t.metadata?.isBuiltin,
        location: t.location,
        manifest: t.manifest,
        targetPlatform: t.targetPlatform,
        validations: t.validations,
        isValid: t.isValid,
        readmeUrl: s,
        changelogUrl: r,
        publisherDisplayName: t.metadata?.publisherDisplayName,
        publisherId: t.metadata?.publisherId || null,
        isApplicationScoped: !!t.metadata?.isApplicationScoped,
        isMachineScoped: !!t.metadata?.isMachineScoped,
        isPreReleaseVersion: !!t.metadata?.isPreReleaseVersion,
        hasPreReleaseVersion: !!t.metadata?.hasPreReleaseVersion,
        preRelease: !!t.metadata?.preRelease,
        installedTimestamp: t.metadata?.installedTimestamp,
        updated: !!t.metadata?.updated,
        pinned: !!t.metadata?.pinned,
        isWorkspaceScoped: !1,
        source: t.metadata?.source ?? (t.identifier.uuid ? "gallery" : "vsix"),
      }
    );
  }
  async I() {
    const t = await this.getUninstalledExtensions();
    if (Object.keys(t).length === 0) {
      this.z.debug("No uninstalled extensions found.");
      return;
    }
    this.z.debug("Removing uninstalled extensions:", Object.keys(t));
    const i = await this.t.scanUserExtensions({ includeAllVersions: !0, includeUninstalled: !0, includeInvalid: !0 }),
      s = new Set();
    for (const n of i) t[oe.create(n).toString()] || s.add(n.identifier.id.toLowerCase());
    try {
      const n = ru(i, (o) => o.identifier);
      await me.settled(
        n.map(async (o) => {
          const a = o.sort((c, l) => ou(c.manifest.version, l.manifest.version))[0];
          s.has(a.identifier.id.toLowerCase()) || (await this.n(await this.H(a)));
        }),
      );
    } catch (n) {
      this.z.error(n);
    }
    const r = i.filter((n) => n.metadata && t[oe.create(n).toString()]);
    await Promise.allSettled(r.map((n) => this.removeUninstalledExtension(n)));
  }
  async J() {
    this.z.trace("ExtensionManagementService#removeTempDeleteFolders");
    let t;
    try {
      t = await this.s.resolve(this.t.userExtensionsLocation);
    } catch (i) {
      Yt(i) !== 1 && this.z.error(i);
      return;
    }
    if (t?.children)
      try {
        await Promise.allSettled(
          t.children.map(async (i) => {
            if (!(!i.isDirectory || !i.name.endsWith(Bu))) {
              this.z.trace("Deleting the temporarily deleted folder", i.resource.toString());
              try {
                await this.s.del(i.resource, { recursive: !0 }), this.z.trace("Deleted the temporarily deleted folder", i.resource.toString());
              } catch (s) {
                Yt(s) !== 1 && this.z.error(s);
              }
            }
          }),
        );
      } catch {}
  }
};
La = __decorate([__param(1, $t), __param(2, vn), __param(3, Ei), __param(4, Ht), __param(5, Ae), __param(6, ht)], La);
var Oa = class extends Vu {
  get operation() {
    return this.options.operation ?? this.j;
  }
  get verificationStatus() {
    return this.k;
  }
  constructor(t, i, s, r, n, o, a, c, l, h, u, f) {
    super(),
      (this.l = t),
      (this.manifest = i),
      (this.source = s),
      (this.options = r),
      (this.m = n),
      (this.n = o),
      (this.o = a),
      (this.p = c),
      (this.q = l),
      (this.s = h),
      (this.t = u),
      (this.u = f),
      (this.j = 2),
      (this.identifier = this.l.identifier);
  }
  async h(t) {
    const s = (await this.n.scanExtensions(1, this.options.profileLocation, this.options.productVersion)).find((a) => J(a.identifier, this.identifier));
    s && (this.j = 3);
    const r = {
      isApplicationScoped: this.options.isApplicationScoped || s?.isApplicationScoped,
      isMachineScoped: this.options.isMachineScoped || s?.isMachineScoped,
      isBuiltin: this.options.isBuiltin || s?.isBuiltin,
      isSystem: s?.type === 0 ? !0 : void 0,
      installedTimestamp: Date.now(),
      pinned: this.options.installGivenVersion ? !0 : (this.options.pinned ?? s?.pinned),
      source: this.source instanceof I ? "vsix" : "gallery",
    };
    let n;
    if (this.source instanceof I) {
      if (s && this.l.equals(new oe(s.identifier, s.manifest.version)))
        try {
          await this.n.removeExtension(s, "existing");
        } catch {
          throw new Error(d(1870, null, this.manifest.displayName || this.manifest.name));
        }
      const a = await this.w(this.l);
      if (a)
        try {
          await this.n.removeExtension(a, "existing");
        } catch {
          throw new Error(d(1871, null, this.manifest.displayName || this.manifest.name));
        }
    } else {
      if (
        ((r.id = this.source.identifier.uuid),
        (r.publisherId = this.source.publisherId),
        (r.publisherDisplayName = this.source.publisherDisplayName),
        (r.targetPlatform = this.source.properties.targetPlatform),
        (r.updated = !!s),
        (r.isPreReleaseVersion = this.source.properties.isPreReleaseVersion),
        (r.hasPreReleaseVersion = s?.hasPreReleaseVersion || this.source.properties.isPreReleaseVersion),
        (r.preRelease = di(this.options.preRelease) ? this.options.preRelease : this.options.installPreReleaseVersion || this.source.properties.isPreReleaseVersion || s?.preRelease),
        s && s.type !== 0 && s.manifest.version === this.source.version)
      )
        return this.n.updateMetadata(s, r, this.options.profileLocation);
      n = await this.w(this.l);
    }
    if (t.isCancellationRequested) throw It(new Tt());
    if (!n) {
      const a = await this.m(this.operation, t);
      (n = a.local), (this.k = a.verificationStatus);
    }
    if (this.o.extUri.isEqual(this.q.defaultProfile.extensionsResource, this.options.profileLocation))
      try {
        await this.s.initializeDefaultProfileExtensions();
      } catch (a) {
        throw It(a, "IntializeDefaultProfile");
      }
    if (t.isCancellationRequested) throw It(new Tt());
    try {
      await this.t.addExtensionsToProfile([[n, r]], this.options.profileLocation, !n.isValid);
    } catch (a) {
      throw It(a, "AddToProfile");
    }
    const o = await this.n.scanLocalExtension(n.location, 1, this.options.profileLocation);
    if (!o) throw new vt("Cannot find the installed extension", "InstalledExtensionNotFound");
    return this.source instanceof I && this.x(n, t), o;
  }
  async w(t) {
    return (await this.n.getUninstalledExtensions())[t.toString()]
      ? (this.u.trace("Removing the extension from uninstalled list:", t.id),
        await this.n.setInstalled(t),
        this.u.info("Removed the extension from uninstalled list:", t.id),
        (await this.n.scanAllUserExtensions(!0)).find((r) => oe.create(r).equals(t)))
      : void 0;
  }
  async x(t, i) {
    try {
      let [s] = await this.p.getExtensions([{ id: t.identifier.id, version: t.manifest.version }], i);
      if ((s || ([s] = await this.p.getExtensions([{ id: t.identifier.id }], i)), s)) {
        const r = {
          id: s.identifier.uuid,
          publisherDisplayName: s.publisherDisplayName,
          publisherId: s.publisherId,
          isPreReleaseVersion: s.properties.isPreReleaseVersion,
          hasPreReleaseVersion: t.hasPreReleaseVersion || s.properties.isPreReleaseVersion,
          preRelease: s.properties.isPreReleaseVersion || this.options.installPreReleaseVersion,
        };
        await this.n.updateMetadata(t, r, this.options.profileLocation);
      }
    } catch {}
  }
};
Oa = __decorate([__param(6, Ht), __param(7, bi), __param(8, _e), __param(9, vn), __param(10, Ei), __param(11, ht)], Oa);
var s5 = class extends Vu {
    constructor(e, t, i) {
      super(), (this.extension = e), (this.options = t), (this.j = i);
    }
    async h(e) {
      await this.j.removeExtensionFromProfile(this.extension, this.options.profileLocation);
    }
  },
  Na = class extends k4 {
    constructor(t, i, s, r, n, o, a, c) {
      super(I.file(n.builtinExtensionsPath), I.file(n.extensionsPath), n.userHome, t.defaultProfile, t, i, s, r, n, o, a, c);
    }
  };
Na = __decorate([__param(0, _e), __param(1, Ei), __param(2, $t), __param(3, ht), __param(4, ke), __param(5, Te), __param(6, Ht), __param(7, zr)], Na);
async function zu(e, t, i, s, r, n) {
  let o;
  try {
    await r5(e, t, i, s, r, n);
  } catch (a) {
    o = a;
  } finally {
    o && r.errorTransformer && (o = r.errorTransformer(o)), typeof o < "u" && i.error(o), i.end();
  }
}
async function r5(e, t, i, s, r, n) {
  Ca(n);
  const o = await e.open(t, { create: !1 });
  try {
    Ca(n);
    let a = 0,
      c = 0,
      l = r && typeof r.length == "number" ? r.length : void 0,
      h = B.alloc(Math.min(r.bufferSize, typeof l == "number" ? l : r.bufferSize)),
      u = r && typeof r.position == "number" ? r.position : 0,
      f = 0;
    do
      (c = await e.read(o, u, h.buffer, f, h.byteLength - f)),
        (u += c),
        (f += c),
        (a += c),
        typeof l == "number" && (l -= c),
        f === h.byteLength && (await i.write(s(h)), (h = B.alloc(Math.min(r.bufferSize, typeof l == "number" ? l : r.bufferSize))), (f = 0));
    while (c > 0 && (typeof l != "number" || l > 0) && Ca(n) && n5(a, r));
    if (f > 0) {
      let p = f;
      typeof l == "number" && (p = Math.min(f, l)), i.write(s(h.slice(0, p)));
    }
  } catch (a) {
    throw ji(a);
  } finally {
    await e.close(o);
  }
}
function Ca(e) {
  if (e.isCancellationRequested) throw bc();
  return !0;
}
function n5(e, t) {
  if (typeof t?.limits?.size == "number" && e > t.limits.size) throw si(d(1940, null), U.FileTooLarge);
  return !0;
}
var Fa,
  Ta = class extends G {
    static {
      Fa = this;
    }
    set telemetryService(t) {
      (this.b = t),
        this.c.forEach(([i, s]) => {
          t.publicLog2(i, s);
        }),
        (this.c = []);
    }
    f(t, i) {
      this.b ? this.b.publicLog2(t, i) : this.c.push([t, i]);
    }
    constructor(t) {
      super(),
        (this.g = t),
        (this.a = 256 * 1024),
        (this.c = []),
        (this.h = this.B(new O())),
        (this.onDidChangeFileSystemProviderRegistrations = this.h.event),
        (this.j = this.B(new O())),
        (this.onWillActivateFileSystemProvider = this.j.event),
        (this.m = this.B(new O())),
        (this.onDidChangeFileSystemProviderCapabilities = this.m.event),
        (this.n = new Map()),
        (this.u = this.B(new O())),
        (this.onDidRunOperation = this.u.event),
        (this.$ = this.B(new O())),
        (this.ab = this.B(new O())),
        (this.onDidFilesChange = this.ab.event),
        (this.bb = this.B(new O())),
        (this.onDidWatchError = this.bb.event),
        (this.cb = new Map()),
        (this.fb = this.B(new Nl()));
    }
    registerProvider(t, i) {
      if (this.n.has(t)) throw new Error(`A filesystem provider for the scheme '${t}' is already registered.`);
      ha(`code/registerFilesystem/${t}`);
      const s = new ue();
      return (
        this.n.set(t, i),
        this.h.fire({ added: !0, scheme: t, provider: i }),
        s.add(
          i.onDidChangeFile((r) => {
            const n = new B0(r, !this.X(i));
            this.$.fire(n), n.hasCorrelation() || this.ab.fire(n);
          }),
        ),
        typeof i.onDidWatchError == "function" && s.add(i.onDidWatchError((r) => this.bb.fire(new Error(r)))),
        s.add(i.onDidChangeCapabilities(() => this.m.fire({ provider: i, scheme: t }))),
        Dt(() => {
          this.h.fire({ added: !1, scheme: t, provider: i }), this.n.delete(t), $e(s);
        })
      );
    }
    getProvider(t) {
      return this.n.get(t);
    }
    async activateProvider(t) {
      const i = [];
      if (
        (this.j.fire({
          scheme: t,
          join(r) {
            i.push(r);
          },
        }),
        this.n.has(t))
      )
        return;
      const s = new Ar();
      this.f("fileServiceActivateProvider:start", { time: Date.now(), scheme: t }),
        await me.settled(i),
        this.f("fileServiceActivateProvider:end", { scheme: t, elapsed: s.elapsed() }),
        this.g.info(`Activate provider for scheme ${t} took ${s.elapsed()}ms.`);
    }
    async canHandleResource(t) {
      return await this.activateProvider(t.scheme), this.hasProvider(t);
    }
    hasProvider(t) {
      return this.n.has(t.scheme);
    }
    hasCapability(t, i) {
      const s = this.n.get(t.scheme);
      return !!(s && s.capabilities & i);
    }
    listCapabilities() {
      return Di.map(this.n, ([t, i]) => ({ scheme: t, capabilities: i.capabilities }));
    }
    async r(t) {
      if (!ap(t)) throw new ne(d(1913, null, this.vb(t)), 8);
      await this.activateProvider(t.scheme);
      const i = this.n.get(t.scheme);
      if (!i) {
        const s = new Xi();
        throw ((s.message = d(1914, null, t.toString())), s);
      }
      return i;
    }
    async s(t) {
      const i = await this.r(t);
      if (vi(i) || Pe(i) || Vo(i)) return i;
      throw new Error(`Filesystem provider for scheme '${t.scheme}' neither has FileReadWrite, FileReadStream nor FileOpenReadWriteClose capability which is needed for the read operation.`);
    }
    async t(t) {
      const i = await this.r(t);
      if (vi(i) || Pe(i)) return i;
      throw new Error(`Filesystem provider for scheme '${t.scheme}' neither has FileReadWrite nor FileOpenReadWriteClose capability which is needed for the write operation.`);
    }
    async resolve(t, i) {
      try {
        return await this.w(t, i);
      } catch (s) {
        throw on(s) === U.FileNotFound ? new ne(d(1915, null, this.vb(t)), 1) : ji(s);
      }
    }
    async w(t, i) {
      const s = await this.r(t),
        r = this.X(s),
        n = i?.resolveTo,
        o = i?.resolveSingleChildDescendants,
        a = i?.resolveMetadata,
        c = i?.cachedStat ?? (await s.stat(t));
      let l;
      return this.z(
        s,
        t,
        c,
        void 0,
        !!a,
        (h, u) => (l || ((l = fs.forUris(() => !r)), l.set(t, !0), n && l.fill(!0, n)), l.get(h.resource) || l.findSuperstr(h.resource.with({ query: null, fragment: null })) ? !0 : h.isDirectory && o ? u === 1 : !1),
      );
    }
    async z(t, i, s, r, n, o) {
      const { providerExtUri: a } = this.W(t),
        c = {
          resource: i,
          name: a.basename(i),
          isFile: (s.type & ve.File) !== 0,
          isDirectory: (s.type & ve.Directory) !== 0,
          isSymbolicLink: (s.type & ve.SymbolicLink) !== 0,
          mtime: s.mtime,
          ctime: s.ctime,
          size: s.size,
          readonly: !!((s.permissions ?? 0) & ds.Readonly) || !!(t.capabilities & 2048),
          locked: !!((s.permissions ?? 0) & ds.Locked),
          etag: Lh({ mtime: s.mtime, size: s.size }),
          children: void 0,
        };
      if (c.isDirectory && o(c, r)) {
        try {
          const l = await t.readdir(i),
            h = await me.settled(
              l.map(async ([u, f]) => {
                try {
                  const p = a.joinPath(i, u),
                    w = n ? await t.stat(p) : { type: f };
                  return await this.z(t, p, w, l.length, n, o);
                } catch (p) {
                  return this.g.trace(p), null;
                }
              }),
            );
          c.children = Yi(h);
        } catch (l) {
          this.g.trace(l), (c.children = []);
        }
        return c;
      }
      return c;
    }
    async resolveAll(t) {
      return me.settled(
        t.map(async (i) => {
          try {
            return { stat: await this.w(i.resource, i.options), success: !0 };
          } catch (s) {
            return this.g.trace(s), { stat: void 0, success: !1 };
          }
        }),
      );
    }
    async stat(t) {
      const i = await this.r(t),
        s = await i.stat(t);
      return this.z(i, t, s, void 0, !0, () => !1);
    }
    async exists(t) {
      const i = await this.r(t);
      try {
        return !!(await i.stat(t));
      } catch {
        return !1;
      }
    }
    async canCreateFile(t, i) {
      try {
        await this.C(t, i);
      } catch (s) {
        return s;
      }
      return !0;
    }
    async C(t, i) {
      if (!i?.overwrite && (await this.exists(t))) throw new ne(d(1916, null, this.vb(t)), 3, i);
    }
    async createFile(t, i = B.fromString(""), s) {
      await this.C(t, s);
      const r = await this.writeFile(t, i);
      return this.u.fire(new ps(t, 0, r)), r;
    }
    async writeFile(t, i, s) {
      const r = this.tb(await this.t(t), t),
        { providerExtUri: n } = this.W(r);
      let o = s;
      if (Ph(r) && !o?.atomic) {
        const a = r.enforceAtomicWriteFile?.(t);
        a && (o = { ...s, atomic: a });
      }
      try {
        (await this.D(r, t, o)) || (await this.Y(r, n.dirname(t)));
        let c;
        if (Pe(r) && !(i instanceof B))
          if (Wr(i)) {
            const l = await Ip(i, 3);
            l.ended ? (c = B.concat(l.buffer)) : (c = l);
          } else c = $p(i, (l) => B.concat(l), 3);
        else c = i;
        !vi(r) || (Pe(r) && c instanceof B) || (Pe(r) && Ph(r) && o?.atomic) ? await this.kb(r, t, o, c) : await this.gb(r, t, o, c instanceof B ? Tp(c) : c), this.u.fire(new ps(t, 4));
      } catch (a) {
        throw new ne(d(1917, null, this.vb(t), ji(a).toString()), Yt(a), o);
      }
      return this.resolve(t, { resolveMetadata: !0 });
    }
    async D(t, i, s) {
      const r = !!s?.unlock;
      if (r && !(t.capabilities & 8192)) throw new Error(d(1918, null, this.vb(i)));
      if (!!s?.atomic) {
        if (!(t.capabilities & 32768)) throw new Error(d(1919, null, this.vb(i)));
        if (!(t.capabilities & 2)) throw new Error(d(1920, null, this.vb(i)));
        if (r) throw new Error(d(1921, null, this.vb(i)));
      }
      let o;
      try {
        o = await t.stat(i);
      } catch {
        return;
      }
      if (o.type & ve.Directory) throw new ne(d(1922, null, this.vb(i)), 0, s);
      if ((this.ub(i, o), typeof s?.mtime == "number" && typeof s.etag == "string" && s.etag !== Ho && typeof o.mtime == "number" && typeof o.size == "number" && s.mtime < o.mtime && s.etag !== Lh({ mtime: s.mtime, size: o.size })))
        throw new ne(d(1923, null), 3, s);
      return o;
    }
    async readFile(t, i, s) {
      const r = await this.s(t);
      return i?.atomic ? this.F(r, t, i, s) : this.G(r, t, i, s);
    }
    async F(t, i, s, r) {
      return new Promise((n, o) => {
        this.fb.queueFor(
          i,
          async () => {
            try {
              const a = await this.G(t, i, s, r);
              n(a);
            } catch (a) {
              o(a);
            }
          },
          this.W(t).providerExtUri,
        );
      });
    }
    async G(t, i, s, r) {
      const n = await this.H(t, i, { ...s, preferUnbuffered: !0 }, r);
      return { ...n, value: await Ti(n.value) };
    }
    async readFileStream(t, i, s) {
      const r = await this.s(t);
      return this.H(r, t, i, s);
    }
    async H(t, i, s, r) {
      const n = new ts(r);
      let o = s;
      Bo(t) && t.enforceAtomicReadFile?.(i) && (o = { ...s, atomic: !0 });
      const a = this.N(i, o).then(
        (l) => l,
        (l) => {
          throw (n.dispose(!0), l);
        },
      );
      let c;
      try {
        return (
          typeof o?.etag == "string" && o.etag !== Ho && (await a),
          (o?.atomic && Bo(t)) || !(vi(t) || Vo(t)) || (Pe(t) && o?.preferUnbuffered) ? (c = this.M(t, i, o)) : Vo(t) ? (c = this.J(t, i, n.token, o)) : (c = this.L(t, i, n.token, o)),
          c.on("end", () => n.dispose()),
          c.on("error", () => n.dispose()),
          { ...(await a), value: c }
        );
      } catch (l) {
        throw (c && (await Bl(c)), this.I(l, i, o));
      }
    }
    I(t, i, s) {
      const r = d(1924, null, this.vb(i), ji(t).toString());
      return t instanceof Wo ? new Wo(r, t.stat, s) : t instanceof qo ? new qo(r, t.fileOperationResult, t.size, t.options) : new ne(r, Yt(t), s);
    }
    J(t, i, s, r = Object.create(null)) {
      const n = t.readFileStream(i, r, s);
      return zl(n, { data: (o) => (o instanceof B ? o : B.wrap(o)), error: (o) => this.I(o, i, r) }, (o) => B.concat(o));
    }
    L(t, i, s, r = Object.create(null)) {
      const n = Up();
      return zu(t, i, n, (o) => o, { ...r, bufferSize: this.a, errorTransformer: (o) => this.I(o, i, r) }, s), n;
    }
    M(t, i, s) {
      const r = Hr((n) => B.concat(n));
      return (
        (async () => {
          try {
            let n;
            s?.atomic && Bo(t) ? (n = await t.readFile(i, { atomic: !0 })) : (n = await t.readFile(i)),
              typeof s?.position == "number" && (n = n.slice(s.position)),
              typeof s?.length == "number" && (n = n.slice(0, s.length)),
              this.O(i, n.byteLength, s),
              r.end(B.wrap(n));
          } catch (n) {
            r.error(n), r.end();
          }
        })(),
        r
      );
    }
    async N(t, i) {
      const s = await this.resolve(t, { resolveMetadata: !0 });
      if (s.isDirectory) throw new ne(d(1925, null, this.vb(t)), 0, i);
      if (typeof i?.etag == "string" && i.etag !== Ho && i.etag === s.etag) throw new Wo(d(1926, null), s, i);
      return this.O(t, s.size, i), s;
    }
    O(t, i, s) {
      if (typeof s?.limits?.size == "number" && i > s.limits.size) throw new qo(d(1927, null, this.vb(t)), 7, i, s);
    }
    async canMove(t, i, s) {
      return this.P(t, i, "move", s);
    }
    async canCopy(t, i, s) {
      return this.P(t, i, "copy", s);
    }
    async P(t, i, s, r) {
      if (t.toString() !== i.toString())
        try {
          const n = s === "move" ? this.tb(await this.t(t), t) : await this.s(t),
            o = this.tb(await this.t(i), i);
          await this.U(n, t, o, i, s, r);
        } catch (n) {
          return n;
        }
      return !0;
    }
    async move(t, i, s) {
      const r = this.tb(await this.t(t), t),
        n = this.tb(await this.t(i), i),
        o = await this.Q(r, t, n, i, "move", !!s),
        a = await this.resolve(i, { resolveMetadata: !0 });
      return this.u.fire(new ps(t, o === "move" ? 2 : 3, a)), a;
    }
    async copy(t, i, s) {
      const r = await this.s(t),
        n = this.tb(await this.t(i), i),
        o = await this.Q(r, t, n, i, "copy", !!s),
        a = await this.resolve(i, { resolveMetadata: !0 });
      return this.u.fire(new ps(t, o === "copy" ? 3 : 2, a)), a;
    }
    async Q(t, i, s, r, n, o) {
      if (i.toString() === r.toString()) return n;
      const { exists: a, isSameResourceWithDifferentPathCase: c } = await this.U(t, i, s, r, n, o);
      if ((a && !c && o && (await this.del(r, { recursive: !0 })), await this.Y(s, this.W(s).providerExtUri.dirname(r)), n === "copy")) {
        if (t === s && jo(t)) await t.copy(i, r, { overwrite: o });
        else {
          const l = await this.resolve(i);
          l.isDirectory ? await this.S(t, l, s, r) : await this.R(t, i, s, r);
        }
        return n;
      } else return t === s ? (await t.rename(i, r, { overwrite: o }), n) : (await this.Q(t, i, s, r, "copy", o), await this.del(i, { recursive: !0 }), "copy");
    }
    async R(t, i, s, r) {
      if (vi(t) && vi(s)) return this.mb(t, i, s, r);
      if (vi(t) && Pe(s)) return this.sb(t, i, s, r);
      if (Pe(t) && vi(s)) return this.qb(t, i, s, r);
      if (Pe(t) && Pe(s)) return this.ob(t, i, s, r);
    }
    async S(t, i, s, r) {
      await s.mkdir(r),
        Array.isArray(i.children) &&
          (await me.settled(
            i.children.map(async (n) => {
              const o = this.W(s).providerExtUri.joinPath(r, n.name);
              return n.isDirectory ? this.S(t, await this.resolve(n.resource), s, o) : this.R(t, n.resource, s, o);
            }),
          ));
    }
    async U(t, i, s, r, n, o) {
      let a = !1;
      if (t === s) {
        const { providerExtUri: l, isPathCaseSensitive: h } = this.W(t);
        if ((h || (a = l.isEqual(i, r)), a && n === "copy")) throw new Error(d(1928, null, this.vb(i), this.vb(r)));
        if (!a && l.isEqualOrParent(r, i)) throw new Error(d(1929, null, this.vb(i), this.vb(r)));
      }
      const c = await this.exists(r);
      if (c && !a) {
        if (!o) throw new ne(d(1930, null, this.vb(i), this.vb(r)), 4);
        if (t === s) {
          const { providerExtUri: l } = this.W(t);
          if (l.isEqualOrParent(i, r)) throw new Error(d(1931, null, this.vb(i), this.vb(r)));
        }
      }
      return { exists: c, isSameResourceWithDifferentPathCase: a };
    }
    W(t) {
      const i = this.X(t);
      return { providerExtUri: i ? Y : rp, isPathCaseSensitive: i };
    }
    X(t) {
      return !!(t.capabilities & 1024);
    }
    async createFolder(t) {
      const i = this.tb(await this.r(t), t);
      await this.Y(i, t);
      const s = await this.resolve(t, { resolveMetadata: !0 });
      return this.u.fire(new ps(t, 0, s)), s;
    }
    async Y(t, i) {
      const s = [],
        { providerExtUri: r } = this.W(t);
      for (; !r.isEqual(i, r.dirname(i)); )
        try {
          if (!((await t.stat(i)).type & ve.Directory)) throw new Error(d(1932, null, this.vb(i)));
          break;
        } catch (n) {
          if (on(n) !== U.FileNotFound) throw n;
          s.push(r.basename(i)), (i = r.dirname(i));
        }
      for (let n = s.length - 1; n >= 0; n--) {
        i = r.joinPath(i, s[n]);
        try {
          await t.mkdir(i);
        } catch (o) {
          if (on(o) !== U.FileExists) throw o;
        }
      }
    }
    async canDelete(t, i) {
      try {
        await this.Z(t, i);
      } catch (s) {
        return s;
      }
      return !0;
    }
    async Z(t, i) {
      const s = this.tb(await this.r(t), t),
        r = !!i?.useTrash;
      if (r && !(s.capabilities & 4096)) throw new Error(d(1933, null, this.vb(t)));
      const n = i?.atomic;
      if (n && !(s.capabilities & 65536)) throw new Error(d(1934, null, this.vb(t)));
      if (r && n) throw new Error(d(1935, null, this.vb(t)));
      let o;
      try {
        o = await s.stat(t);
      } catch {}
      if (o) this.ub(t, o);
      else throw new ne(d(1936, null, this.vb(t)), 1);
      if (!!!i?.recursive) {
        const c = await this.resolve(t);
        if (c.isDirectory && Array.isArray(c.children) && c.children.length > 0) throw new Error(d(1937, null, this.vb(t)));
      }
      return s;
    }
    async del(t, i) {
      const s = await this.Z(t, i);
      let r = i;
      if (j0(s) && !r?.atomic) {
        const c = s.enforceAtomicDelete?.(t);
        c && (r = { ...i, atomic: c });
      }
      const n = !!r?.useTrash,
        o = !!r?.recursive,
        a = r?.atomic ?? !1;
      await s.delete(t, { recursive: o, useTrash: n, atomic: a }), this.u.fire(new ps(t, 1));
    }
    async cloneFile(t, i) {
      const s = await this.r(t),
        r = this.tb(await this.t(i), i);
      if (!(s === r && this.W(s).providerExtUri.isEqual(t, i)))
        return s === r && Ih(s)
          ? s.cloneFile(t, i)
          : (await this.Y(r, this.W(r).providerExtUri.dirname(i)),
            s === r && jo(s) ? this.fb.queueFor(t, () => s.copy(t, i, { overwrite: !0 }), this.W(s).providerExtUri) : this.fb.queueFor(t, () => this.R(s, t, r, i), this.W(s).providerExtUri));
    }
    static {
      this.db = 0;
    }
    createWatcher(t, i) {
      return this.watch(t, { ...i, correlationId: Fa.db++ });
    }
    watch(t, i = { recursive: !1, excludes: [] }) {
      const s = new ue();
      let r = !1,
        n = () => {
          r = !0;
        };
      s.add(Dt(() => n())),
        (async () => {
          try {
            const a = await this.eb(t, i);
            r ? $e(a) : (n = () => $e(a));
          } catch (a) {
            this.g.error(a);
          }
        })();
      const o = i.correlationId;
      if (typeof o == "number") {
        const a = s.add(new O());
        return (
          s.add(
            this.$.event((l) => {
              l.correlates(o) && a.fire(l);
            }),
          ),
          { onDidChange: a.event, dispose: () => s.dispose() }
        );
      }
      return s;
    }
    async eb(t, i) {
      const s = await this.r(t),
        r = ls([this.W(s).providerExtUri.getComparisonKey(t), i]);
      let n = this.cb.get(r);
      return (
        n || ((n = { count: 0, disposable: s.watch(t, i) }), this.cb.set(r, n)),
        (n.count += 1),
        Dt(() => {
          n && (n.count--, n.count === 0 && ($e(n.disposable), this.cb.delete(r)));
        })
      );
    }
    dispose() {
      super.dispose();
      for (const [, t] of this.cb) $e(t.disposable);
      this.cb.clear();
    }
    async gb(t, i, s, r) {
      return this.fb.queueFor(
        i,
        async () => {
          const n = await t.open(i, { create: !0, unlock: s?.unlock ?? !1 });
          try {
            Wr(r) || go(r) ? await this.hb(t, n, r) : await this.ib(t, n, r);
          } catch (o) {
            throw ji(o);
          } finally {
            await t.close(n);
          }
        },
        this.W(t).providerExtUri,
      );
    }
    async hb(t, i, s) {
      let r = 0,
        n;
      if (go(s)) {
        if (s.buffer.length > 0) {
          const o = B.concat(s.buffer);
          await this.jb(t, i, o, o.byteLength, r, 0), (r += o.byteLength);
        }
        if (s.ended) return;
        n = s.stream;
      } else n = s;
      return new Promise((o, a) => {
        mo(n, {
          onData: async (c) => {
            n.pause();
            try {
              await this.jb(t, i, c, c.byteLength, r, 0);
            } catch (l) {
              return a(l);
            }
            (r += c.byteLength), setTimeout(() => n.resume());
          },
          onError: (c) => a(c),
          onEnd: () => o(),
        });
      });
    }
    async ib(t, i, s) {
      let r = 0,
        n;
      for (; (n = s.read()) !== null; ) await this.jb(t, i, n, n.byteLength, r, 0), (r += n.byteLength);
    }
    async jb(t, i, s, r, n, o) {
      let a = 0;
      for (; a < r; ) {
        const c = await t.write(i, n + a, s.buffer, o + a, r - a);
        a += c;
      }
    }
    async kb(t, i, s, r) {
      return this.fb.queueFor(i, () => this.lb(t, i, s, r), this.W(t).providerExtUri);
    }
    async lb(t, i, s, r) {
      let n;
      r instanceof B ? (n = r) : Wr(r) ? (n = await Ti(r)) : go(r) ? (n = await Mp(r)) : (n = Fp(r)), await t.writeFile(i, n.buffer, { create: !0, overwrite: !0, unlock: s?.unlock ?? !1, atomic: s?.atomic ?? !1 });
    }
    async mb(t, i, s, r) {
      return this.fb.queueFor(r, () => this.nb(t, i, s, r), this.W(s).providerExtUri);
    }
    async nb(t, i, s, r) {
      let n, o;
      try {
        (n = await t.open(i, { create: !1 })), (o = await s.open(r, { create: !0, unlock: !1 }));
        const a = B.alloc(this.a);
        let c = 0,
          l = 0,
          h = 0;
        do (h = await t.read(n, c, a.buffer, l, a.byteLength - l)), await this.jb(s, o, a, h, c, l), (c += h), (l += h), l === a.byteLength && (l = 0);
        while (h > 0);
      } catch (a) {
        throw ji(a);
      } finally {
        await me.settled([typeof n == "number" ? t.close(n) : Promise.resolve(), typeof o == "number" ? s.close(o) : Promise.resolve()]);
      }
    }
    async ob(t, i, s, r) {
      return this.fb.queueFor(r, () => this.pb(t, i, s, r), this.W(s).providerExtUri);
    }
    async pb(t, i, s, r) {
      return s.writeFile(r, await t.readFile(i), { create: !0, overwrite: !0, unlock: !1, atomic: !1 });
    }
    async qb(t, i, s, r) {
      return this.fb.queueFor(r, () => this.rb(t, i, s, r), this.W(s).providerExtUri);
    }
    async rb(t, i, s, r) {
      const n = await s.open(r, { create: !0, unlock: !1 });
      try {
        const o = await t.readFile(i);
        await this.jb(s, n, B.wrap(o), o.byteLength, 0, 0);
      } catch (o) {
        throw ji(o);
      } finally {
        await s.close(n);
      }
    }
    async sb(t, i, s, r) {
      const n = await Ti(this.L(t, i, lt.None));
      await this.kb(s, r, void 0, n);
    }
    tb(t, i) {
      if (t.capabilities & 2048) throw new ne(d(1938, null, this.vb(i)), 6);
      return t;
    }
    ub(t, i) {
      if ((i.permissions ?? 0) & ds.Readonly) throw new ne(d(1939, null, this.vb(t)), 6);
    }
    vb(t) {
      return t.scheme === K.file ? t.fsPath : t.toString(!0);
    }
  };
Ta = Fa = __decorate([__param(0, ht)], Ta);
import { promises as xi } from "fs";
var lr = "**",
  qu = "/",
  $n = "[/\\\\]",
  In = "[^/\\\\]",
  o5 = /\//g;
function Wu(e, t) {
  switch (e) {
    case 0:
      return "";
    case 1:
      return `${In}*?`;
    default:
      return `(?:${$n}|${In}+${$n}${t ? `|${$n}${In}+` : ""})*?`;
  }
}
function Hu(e, t) {
  if (!e) return [];
  const i = [];
  let s = !1,
    r = !1,
    n = "";
  for (const o of e) {
    switch (o) {
      case t:
        if (!s && !r) {
          i.push(n), (n = "");
          continue;
        }
        break;
      case "{":
        s = !0;
        break;
      case "}":
        s = !1;
        break;
      case "[":
        r = !0;
        break;
      case "]":
        r = !1;
        break;
    }
    n += o;
  }
  return n && i.push(n), i;
}
function Gu(e) {
  if (!e) return "";
  let t = "";
  const i = Hu(e, qu);
  if (i.every((s) => s === lr)) t = ".*";
  else {
    let s = !1;
    i.forEach((r, n) => {
      if (r === lr) {
        if (s) return;
        t += Wu(2, n === i.length - 1);
      } else {
        let o = !1,
          a = "",
          c = !1,
          l = "";
        for (const h of r) {
          if (h !== "}" && o) {
            a += h;
            continue;
          }
          if (c && (h !== "]" || !l)) {
            let u;
            h === "-" ? (u = h) : (h === "^" || h === "!") && !l ? (u = "^") : h === qu ? (u = "") : (u = Ms(h)), (l += u);
            continue;
          }
          switch (h) {
            case "{":
              o = !0;
              continue;
            case "[":
              c = !0;
              continue;
            case "}": {
              const f = `(?:${Hu(a, ",")
                .map((p) => Gu(p))
                .join("|")})`;
              (t += f), (o = !1), (a = "");
              break;
            }
            case "]": {
              (t += "[" + l + "]"), (c = !1), (l = "");
              break;
            }
            case "?":
              t += In;
              continue;
            case "*":
              t += Wu(1);
              continue;
            default:
              t += Ms(h);
          }
        }
        n < i.length - 1 && (i[n + 1] !== lr || n + 2 < i.length) && (t += $n);
      }
      s = r === lr;
    });
  }
  return t;
}
var a5 = /^\*\*\/\*\.[\w\.-]+$/,
  c5 = /^\*\*\/([\w\.-]+)\/?$/,
  l5 = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/,
  h5 = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/,
  u5 = /^\*\*((\/[\w\.-]+)+)\/?$/,
  f5 = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/,
  Ju = new Gn(1e4),
  Qu = function () {
    return !1;
  },
  qe = function () {
    return null;
  };
function Ma(e, t) {
  if (!e) return qe;
  let i;
  typeof e != "string" ? (i = e.pattern) : (i = e), (i = i.trim());
  const s = `${i}_${!!t.trimForExclusions}`;
  let r = Ju.get(s);
  if (r) return Xu(r, e);
  let n;
  return (
    a5.test(i)
      ? (r = d5(i.substr(4), i))
      : (n = c5.exec(_a(i, t)))
        ? (r = p5(n[1], i))
        : (t.trimForExclusions ? h5 : l5).test(i)
          ? (r = g5(i, t))
          : (n = u5.exec(_a(i, t)))
            ? (r = Zu(n[1].substr(1), i, !0))
            : (n = f5.exec(_a(i, t)))
              ? (r = Zu(n[1], i, !1))
              : (r = m5(i)),
    Ju.set(s, r),
    Xu(r, e)
  );
}
function Xu(e, t) {
  if (typeof t == "string") return e;
  const i = function (s, r) {
    return Us(s, t.base, !se) ? e(Rd(s.substr(t.base.length), ge), r) : null;
  };
  return (i.allBasenames = e.allBasenames), (i.allPaths = e.allPaths), (i.basenames = e.basenames), (i.patterns = e.patterns), i;
}
function _a(e, t) {
  return t.trimForExclusions && e.endsWith("/**") ? e.substr(0, e.length - 2) : e;
}
function d5(e, t) {
  return function (i, s) {
    return typeof i == "string" && i.endsWith(e) ? t : null;
  };
}
function p5(e, t) {
  const i = `/${e}`,
    s = `\\${e}`,
    r = function (o, a) {
      return typeof o != "string" ? null : a ? (a === e ? t : null) : o === e || o.endsWith(i) || o.endsWith(s) ? t : null;
    },
    n = [e];
  return (r.basenames = n), (r.patterns = [t]), (r.allBasenames = n), r;
}
function g5(e, t) {
  const i = Yu(
      e
        .slice(1, -1)
        .split(",")
        .map((a) => Ma(a, t))
        .filter((a) => a !== qe),
      e,
    ),
    s = i.length;
  if (!s) return qe;
  if (s === 1) return i[0];
  const r = function (a, c) {
      for (let l = 0, h = i.length; l < h; l++) if (i[l](a, c)) return e;
      return null;
    },
    n = i.find((a) => !!a.allBasenames);
  n && (r.allBasenames = n.allBasenames);
  const o = i.reduce((a, c) => (c.allPaths ? a.concat(c.allPaths) : a), []);
  return o.length && (r.allPaths = o), r;
}
function Zu(e, t, i) {
  const s = ge === rt.sep,
    r = s ? e : e.replace(o5, ge),
    n = ge + r,
    o = rt.sep + e;
  let a;
  return (
    i
      ? (a = function (c, l) {
          return typeof c == "string" && (c === r || c.endsWith(n) || (!s && (c === e || c.endsWith(o)))) ? t : null;
        })
      : (a = function (c, l) {
          return typeof c == "string" && (c === r || (!s && c === e)) ? t : null;
        }),
    (a.allPaths = [(i ? "*/" : "./") + e]),
    a
  );
}
function m5(e) {
  try {
    const t = new RegExp(`^${Gu(e)}$`);
    return function (i) {
      return (t.lastIndex = 0), typeof i == "string" && t.test(i) ? e : null;
    };
  } catch {
    return qe;
  }
}
function w5(e, t = {}) {
  if (!e) return Qu;
  if (typeof e == "string" || v5(e)) {
    const i = Ma(e, t);
    if (i === qe) return Qu;
    const s = function (r, n) {
      return !!i(r, n);
    };
    return i.allBasenames && (s.allBasenames = i.allBasenames), i.allPaths && (s.allPaths = i.allPaths), s;
  }
  return y5(e, t);
}
function v5(e) {
  const t = e;
  return t ? typeof t.base == "string" && typeof t.pattern == "string" : !1;
}
function y5(e, t) {
  const i = Yu(
      Object.getOwnPropertyNames(e)
        .map((a) => b5(a, e[a], t))
        .filter((a) => a !== qe),
    ),
    s = i.length;
  if (!s) return qe;
  if (!i.some((a) => !!a.requiresSiblings)) {
    if (s === 1) return i[0];
    const a = function (h, u) {
        let f;
        for (let p = 0, w = i.length; p < w; p++) {
          const m = i[p](h, u);
          if (typeof m == "string") return m;
          lo(m) && (f || (f = []), f.push(m));
        }
        return f
          ? (async () => {
              for (const p of f) {
                const w = await p;
                if (typeof w == "string") return w;
              }
              return null;
            })()
          : null;
      },
      c = i.find((h) => !!h.allBasenames);
    c && (a.allBasenames = c.allBasenames);
    const l = i.reduce((h, u) => (u.allPaths ? h.concat(u.allPaths) : h), []);
    return l.length && (a.allPaths = l), a;
  }
  const r = function (a, c, l) {
      let h, u;
      for (let f = 0, p = i.length; f < p; f++) {
        const w = i[f];
        w.requiresSiblings && l && (c || (c = Ie(a)), h || (h = c.substr(0, c.length - Id(a).length)));
        const m = w(a, c, h, l);
        if (typeof m == "string") return m;
        lo(m) && (u || (u = []), u.push(m));
      }
      return u
        ? (async () => {
            for (const f of u) {
              const p = await f;
              if (typeof p == "string") return p;
            }
            return null;
          })()
        : null;
    },
    n = i.find((a) => !!a.allBasenames);
  n && (r.allBasenames = n.allBasenames);
  const o = i.reduce((a, c) => (c.allPaths ? a.concat(c.allPaths) : a), []);
  return o.length && (r.allPaths = o), r;
}
function b5(e, t, i) {
  if (t === !1) return qe;
  const s = Ma(e, i);
  if (s === qe) return qe;
  if (typeof t == "boolean") return s;
  if (t) {
    const r = t.when;
    if (typeof r == "string") {
      const n = (o, a, c, l) => {
        if (!l || !s(o, a)) return null;
        const h = r.replace("$(basename)", () => c),
          u = l(h);
        return lo(u) ? u.then((f) => (f ? e : null)) : u ? e : null;
      };
      return (n.requiresSiblings = !0), n;
    }
  }
  return s;
}
function Yu(e, t) {
  const i = e.filter((a) => !!a.basenames);
  if (i.length < 2) return e;
  const s = i.reduce((a, c) => {
    const l = c.basenames;
    return l ? a.concat(l) : a;
  }, []);
  let r;
  if (t) {
    r = [];
    for (let a = 0, c = s.length; a < c; a++) r.push(t);
  } else
    r = i.reduce((a, c) => {
      const l = c.patterns;
      return l ? a.concat(l) : a;
    }, []);
  const n = function (a, c) {
    if (typeof a != "string") return null;
    if (!c) {
      let h;
      for (h = a.length; h > 0; h--) {
        const u = a.charCodeAt(h - 1);
        if (u === 47 || u === 92) break;
      }
      c = a.substr(h);
    }
    const l = s.indexOf(c);
    return l !== -1 ? r[l] : null;
  };
  (n.basenames = s), (n.patterns = r), (n.allBasenames = s);
  const o = e.filter((a) => !a.basenames);
  return o.push(n), o;
}
function Ku(e, t) {
  return Zi(e, t, (i, s) => (typeof i == "string" && typeof s == "string" ? i === s : typeof i != "string" && typeof s != "string" ? i.base === s.base && i.pattern === s.pattern : !1));
}
function tf(e) {
  return typeof e.correlationId == "number";
}
function E5(e) {
  return e.recursive === !0;
}
var ef = class c1 extends G {
    static {
      this.a = 5;
    }
    constructor(t, i, s, r) {
      super(), (this.h = t), (this.j = i), (this.m = s), (this.n = r), (this.c = this.B(new kr())), (this.f = void 0), (this.g = 0);
    }
    s() {
      const t = new ue();
      (this.c.value = t), (this.b = this.r(t)), this.b.setVerboseLogging(this.m), t.add(this.b.onDidChangeFile((i) => this.h(i))), t.add(this.b.onDidLogMessage((i) => this.j(i))), t.add(this.b.onDidError((i) => this.t(i.error, i.request)));
    }
    t(t, i) {
      this.u(t, i) ? (this.g < c1.a && this.f ? (this.y(`restarting watcher after unexpected error: ${t}`), this.w(this.f)) : this.y(`gave up attempting to restart watcher after unexpected error: ${t}`)) : this.y(t);
    }
    u(t, i) {
      return !(!this.n.restartOnError || i || t.indexOf("No space left on device") !== -1 || t.indexOf("EMFILE") !== -1);
    }
    w(t) {
      this.g++, this.s(), this.watch(t);
    }
    async watch(t) {
      (this.f = t), await this.b?.watch(t);
    }
    async setVerboseLogging(t) {
      (this.m = t), await this.b?.setVerboseLogging(t);
    }
    y(t) {
      this.j({ type: "error", message: `[File Watcher (${this.n.type})] ${t}` });
    }
    z(t) {
      this.j({ type: "trace", message: `[File Watcher (${this.n.type})] ${t}` });
    }
    dispose() {
      return (this.b = void 0), super.dispose();
    }
  },
  x5 = class extends ef {
    constructor(e, t, i) {
      super(e, t, i, { type: "node.js", restartOnError: !1 });
    }
  },
  S5 = class extends ef {
    constructor(e, t, i) {
      super(e, t, i, { type: "universal", restartOnError: !0 });
    }
  };
function sf(e) {
  return e.map((t) => ({ type: t.type, resource: I.revive(t.resource), cId: t.cId }));
}
function $5(e) {
  const t = new P5();
  for (const i of e) t.processEvent(i);
  return t.coalesce();
}
function I5(e, t) {
  return typeof t == "string" && !t.startsWith(lr) && !Mr(t) ? { base: e, pattern: t } : t;
}
function rf(e, t) {
  const i = [];
  for (const s of t) i.push(w5(I5(e, s)));
  return i;
}
var P5 = class {
  constructor() {
    (this.a = new Set()), (this.b = new Map());
  }
  c(e) {
    return se ? e.resource.fsPath : e.resource.fsPath.toLowerCase();
  }
  processEvent(e) {
    const t = this.b.get(this.c(e));
    let i = !1;
    if (t) {
      const s = t.type,
        r = e.type;
      t.resource.fsPath !== e.resource.fsPath && (e.type === 2 || e.type === 1) ? (i = !0) : s === 1 && r === 2 ? (this.b.delete(this.c(e)), this.a.delete(t)) : s === 2 && r === 1 ? (t.type = 0) : (s === 1 && r === 0) || (t.type = r);
    } else i = !0;
    i && (this.a.add(e), this.b.set(this.c(e), e));
  }
  coalesce() {
    const e = [],
      t = [];
    return Array.from(this.a)
      .filter((i) => (i.type !== 2 ? (e.push(i), !1) : !0))
      .sort((i, s) => i.resource.fsPath.length - s.resource.fsPath.length)
      .filter((i) => (t.some((s) => z0(i.resource.fsPath, s, !se)) ? !1 : (t.push(i.resource.fsPath), !0)))
      .concat(e);
  }
};
function k5(e, t) {
  if (typeof t == "number")
    switch (e.type) {
      case 1:
        return (t & 4) === 0;
      case 2:
        return (t & 8) === 0;
      case 0:
        return (t & 2) === 0;
    }
  return !1;
}
function A5(e) {
  if (typeof e == "number") {
    const t = [];
    return e & 4 && t.push("Added"), e & 8 && t.push("Deleted"), e & 2 && t.push("Updated"), t.length === 0 ? "<all>" : `[${t.join(", ")}]`;
  }
  return "<none>";
}
var D5 = class extends G {
    constructor(e, t) {
      super(),
        (this.a = e),
        (this.b = t),
        (this.c = this.B(new O())),
        (this.onDidChangeFile = this.c.event),
        (this.g = this.B(new O())),
        (this.onDidWatchError = this.g.event),
        (this.j = []),
        (this.m = this.B(new Ci(0))),
        (this.y = []),
        (this.z = this.B(new Ci(0)));
    }
    watch(e, t) {
      return t.recursive || this.b?.watcher?.forceUniversal ? this.n(e, t) : this.C(e, t);
    }
    n(e, t) {
      const i = this.r(e, t),
        s = $c(this.j, i);
      return (
        this.s(),
        Dt(() => {
          s(), this.s();
        })
      );
    }
    r(e, t) {
      const i = { path: this.L(e), excludes: t.excludes, includes: t.includes, recursive: t.recursive, filter: t.filter, correlationId: t.correlationId };
      if (E5(i)) {
        const s = this.b?.watcher?.recursive?.usePolling;
        s === !0 ? (i.pollingInterval = this.b?.watcher?.recursive?.pollingInterval ?? 5e3) : Array.isArray(s) && s.includes(i.path) && (i.pollingInterval = this.b?.watcher?.recursive?.pollingInterval ?? 5e3);
      }
      return i;
    }
    s() {
      this.m.trigger(() => this.t()).catch((e) => Le(e));
    }
    t() {
      return (
        this.h ||
          ((this.h = this.B(
            this.u(
              (e) => this.c.fire(sf(e)),
              (e) => this.H(e),
              this.a.getLevel() === C.Trace,
            ),
          )),
          this.B(
            this.a.onDidChangeLogLevel(() => {
              this.h?.setVerboseLogging(this.a.getLevel() === C.Trace);
            }),
          )),
        this.h.watch(this.j)
      );
    }
    C(e, t) {
      const i = { path: this.L(e), excludes: t.excludes, includes: t.includes, recursive: !1, filter: t.filter, correlationId: t.correlationId },
        s = $c(this.y, i);
      return (
        this.D(),
        Dt(() => {
          s(), this.D();
        })
      );
    }
    D() {
      this.z.trigger(() => this.F()).catch((e) => Le(e));
    }
    F() {
      return (
        this.w ||
          ((this.w = this.B(
            this.G(
              (e) => this.c.fire(sf(e)),
              (e) => this.H(e),
              this.a.getLevel() === C.Trace,
            ),
          )),
          this.B(
            this.a.onDidChangeLogLevel(() => {
              this.w?.setVerboseLogging(this.a.getLevel() === C.Trace);
            }),
          )),
        this.w.watch(this.y)
      );
    }
    H(e) {
      e.type === "error" && this.g.fire(e.message), this.I(e);
    }
    I(e) {
      this.a[e.type](e.message);
    }
    J(e) {
      return Li(e.fsPath);
    }
    L(e) {
      const t = this.J(e);
      return Md(t);
    }
  },
  nf;
(function (e) {
  (e[(e.Promise = 100)] = "Promise"), (e[(e.PromiseCancel = 101)] = "PromiseCancel"), (e[(e.EventListen = 102)] = "EventListen"), (e[(e.EventDispose = 103)] = "EventDispose");
})(nf || (nf = {}));
function of(e) {
  switch (e) {
    case 100:
      return "req";
    case 101:
      return "cancel";
    case 102:
      return "subscribe";
    case 103:
      return "unsubscribe";
  }
}
var af;
(function (e) {
  (e[(e.Initialize = 200)] = "Initialize"), (e[(e.PromiseSuccess = 201)] = "PromiseSuccess"), (e[(e.PromiseError = 202)] = "PromiseError"), (e[(e.PromiseErrorObj = 203)] = "PromiseErrorObj"), (e[(e.EventFire = 204)] = "EventFire");
})(af || (af = {}));
function cf(e) {
  switch (e) {
    case 200:
      return "init";
    case 201:
      return "reply:";
    case 202:
    case 203:
      return "replyErr:";
    case 204:
      return "event:";
  }
}
var Bi;
(function (e) {
  (e[(e.Uninitialized = 0)] = "Uninitialized"), (e[(e.Idle = 1)] = "Idle");
})(Bi || (Bi = {}));
function bs(e) {
  let t = 0;
  for (let i = 0; ; i += 7) {
    const s = e.read(1);
    if (((t |= (s.buffer[0] & 127) << i), !(s.buffer[0] & 128))) return t;
  }
}
var R5 = Si(0);
function Es(e, t) {
  if (t === 0) {
    e.write(R5);
    return;
  }
  let i = 0;
  for (let r = t; r !== 0; r = r >>> 7) i++;
  const s = B.alloc(i);
  for (let r = 0; t !== 0; r++) (s.buffer[r] = t & 127), (t = t >>> 7), t > 0 && (s.buffer[r] |= 128);
  e.write(s);
}
var L5 = class {
    constructor(e) {
      (this.b = e), (this.a = 0);
    }
    read(e) {
      const t = this.b.slice(this.a, this.a + e);
      return (this.a += t.byteLength), t;
    }
  },
  O5 = class {
    constructor() {
      this.a = [];
    }
    get buffer() {
      return B.concat(this.a);
    }
    write(e) {
      this.a.push(e);
    }
  },
  te;
(function (e) {
  (e[(e.Undefined = 0)] = "Undefined"), (e[(e.String = 1)] = "String"), (e[(e.Buffer = 2)] = "Buffer"), (e[(e.VSBuffer = 3)] = "VSBuffer"), (e[(e.Array = 4)] = "Array"), (e[(e.Object = 5)] = "Object"), (e[(e.Int = 6)] = "Int");
})(te || (te = {}));
function Si(e) {
  const t = B.alloc(1);
  return t.writeUInt8(e, 0), t;
}
var zi = { Undefined: Si(te.Undefined), String: Si(te.String), Buffer: Si(te.Buffer), VSBuffer: Si(te.VSBuffer), Array: Si(te.Array), Object: Si(te.Object), Uint: Si(te.Int) },
  N5 = typeof Buffer < "u";
function Ua(e, t) {
  if (typeof t > "u") e.write(zi.Undefined);
  else if (typeof t == "string") {
    const i = B.fromString(t);
    e.write(zi.String), Es(e, i.byteLength), e.write(i);
  } else if (N5 && Buffer.isBuffer(t)) {
    const i = B.wrap(t);
    e.write(zi.Buffer), Es(e, i.byteLength), e.write(i);
  } else if (t instanceof B) e.write(zi.VSBuffer), Es(e, t.byteLength), e.write(t);
  else if (Array.isArray(t)) {
    e.write(zi.Array), Es(e, t.length);
    for (const i of t) Ua(e, i);
  } else if (typeof t == "number" && (t | 0) === t) e.write(zi.Uint), Es(e, t);
  else {
    const i = B.fromString(JSON.stringify(t));
    e.write(zi.Object), Es(e, i.byteLength), e.write(i);
  }
}
function ja(e) {
  switch (e.read(1).readUInt8(0)) {
    case te.Undefined:
      return;
    case te.String:
      return e.read(bs(e)).toString();
    case te.Buffer:
      return e.read(bs(e)).buffer;
    case te.VSBuffer:
      return e.read(bs(e));
    case te.Array: {
      const i = bs(e),
        s = [];
      for (let r = 0; r < i; r++) s.push(ja(e));
      return s;
    }
    case te.Object:
      return JSON.parse(e.read(bs(e)).toString());
    case te.Int:
      return bs(e);
  }
}
var lf;
(function (e) {
  (e[(e.LocalSide = 0)] = "LocalSide"), (e[(e.OtherSide = 1)] = "OtherSide");
})(lf || (lf = {}));
var hf = class {
  constructor(e, t = null) {
    (this.l = e), (this.a = !1), (this.b = Bi.Uninitialized), (this.d = new Set()), (this.f = new Map()), (this.g = 0), (this.k = new O()), (this.onDidInitialize = this.k.event), (this.h = this.l.onMessage((i) => this.s(i))), (this.j = t);
  }
  getChannel(e) {
    const t = this;
    return {
      call(i, s, r) {
        return t.a ? Promise.reject(new Tt()) : t.m(e, i, s, r);
      },
      listen(i, s) {
        return t.a ? at.None : t.o(e, i, s);
      },
    };
  }
  m(e, t, i, s = lt.None) {
    const r = this.g++,
      o = { id: r, type: 100, channelName: e, name: t, arg: i };
    if (s.isCancellationRequested) return Promise.reject(new Tt());
    let a, c;
    return new Promise((h, u) => {
      if (s.isCancellationRequested) return u(new Tt());
      const f = () => {
        const m = (y) => {
          switch (y.type) {
            case 201:
              this.f.delete(r), h(y.data);
              break;
            case 202: {
              this.f.delete(r);
              const v = new Error(y.data.message);
              (v.stack = Array.isArray(y.data.stack)
                ? y.data.stack.join(`
`)
                : y.data.stack),
                (v.name = y.data.name),
                u(v);
              break;
            }
            case 203:
              this.f.delete(r), u(y.data);
              break;
          }
        };
        this.f.set(r, m), this.p(o);
      };
      let p = null;
      this.b === Bi.Idle
        ? f()
        : ((p = ti((m) => this.u())),
          p.then(() => {
            (p = null), f();
          }));
      const w = () => {
        p ? (p.cancel(), (p = null)) : this.p({ id: r, type: 101 }), u(new Tt());
      };
      (a = s.onCancellationRequested(w)),
        (c = {
          dispose: xc(() => {
            w(), a.dispose();
          }),
        }),
        this.d.add(c);
    }).finally(() => {
      a.dispose(), this.d.delete(c);
    });
  }
  o(e, t, i) {
    const s = this.g++,
      n = { id: s, type: 102, channelName: e, name: t, arg: i };
    let o = null;
    const a = new O({
        onWillAddFirstListener: () => {
          const l = () => {
            this.d.add(a), this.p(n);
          };
          this.b === Bi.Idle
            ? l()
            : ((o = ti((h) => this.u())),
              o.then(() => {
                (o = null), l();
              }));
        },
        onDidRemoveLastListener: () => {
          o ? (o.cancel(), (o = null)) : (this.d.delete(a), this.p({ id: s, type: 103 }));
        },
      }),
      c = (l) => a.fire(l.data);
    return this.f.set(s, c), a.event;
  }
  p(e) {
    switch (e.type) {
      case 100:
      case 102: {
        const t = this.q([e.type, e.id, e.channelName, e.name], e.arg);
        this.j?.logOutgoing(t, e.id, 0, `${of(e.type)}: ${e.channelName}.${e.name}`, e.arg);
        return;
      }
      case 101:
      case 103: {
        const t = this.q([e.type, e.id]);
        this.j?.logOutgoing(t, e.id, 0, of(e.type));
        return;
      }
    }
  }
  q(e, t = void 0) {
    const i = new O5();
    return Ua(i, e), Ua(i, t), this.r(i.buffer);
  }
  r(e) {
    try {
      return this.l.send(e), e.byteLength;
    } catch {
      return 0;
    }
  }
  s(e) {
    const t = new L5(e),
      i = ja(t),
      s = ja(t),
      r = i[0];
    switch (r) {
      case 200:
        return this.j?.logIncoming(e.byteLength, 0, 0, cf(r)), this.t({ type: i[0] });
      case 201:
      case 202:
      case 204:
      case 203:
        return this.j?.logIncoming(e.byteLength, i[1], 0, cf(r), s), this.t({ type: i[0], id: i[1], data: s });
    }
  }
  t(e) {
    if (e.type === 200) {
      (this.b = Bi.Idle), this.k.fire();
      return;
    }
    this.f.get(e.id)?.(e);
  }
  get onDidInitializePromise() {
    return at.toPromise(this.onDidInitialize);
  }
  u() {
    return this.b === Bi.Idle ? Promise.resolve() : this.onDidInitializePromise;
  }
  dispose() {
    (this.a = !0), this.h && (this.h.dispose(), (this.h = null)), $e(this.d.values()), this.d.clear();
  }
};
__decorate([tt], hf.prototype, "onDidInitializePromise", null);
function C5(e) {
  let t = !1;
  return {
    call(i, s, r) {
      return t
        ? e.call(i, s, r)
        : Vs(0)
            .then(() => (t = !0))
            .then(() => e.call(i, s, r));
    },
    listen(i, s) {
      if (t) return e.listen(i, s);
      const r = new K1();
      return (
        Vs(0)
          .then(() => (t = !0))
          .then(() => (r.input = e.listen(i, s))),
        r.event
      );
    },
  };
}
var Va;
(function (e) {
  function t(n, o, a) {
    const c = n,
      l = a && a.disableMarshalling,
      h = new Map();
    for (const u in c) s(u) && h.set(u, at.buffer(c[u], !0, void 0, o));
    return new (class {
      listen(u, f, p) {
        const w = h.get(f);
        if (w) return w;
        const m = c[f];
        if (typeof m == "function") {
          if (r(f)) return m.call(c, p);
          if (s(f)) return h.set(f, at.buffer(c[f], !0, void 0, o)), h.get(f);
        }
        throw new Xi(`Event not found: ${f}`);
      }
      call(u, f, p) {
        const w = c[f];
        if (typeof w == "function") {
          if (!l && Array.isArray(p)) for (let y = 0; y < p.length; y++) p[y] = ws(p[y]);
          let m = w.apply(c, p);
          return m instanceof Promise || (m = Promise.resolve(m)), m;
        }
        throw new Xi(`Method not found: ${f}`);
      }
    })();
  }
  e.fromService = t;
  function i(n, o) {
    const a = o && o.disableMarshalling;
    return new Proxy(
      {},
      {
        get(c, l) {
          if (typeof l == "string")
            return o?.properties?.has(l)
              ? o.properties.get(l)
              : r(l)
                ? function (h) {
                    return n.listen(l, h);
                  }
                : s(l)
                  ? n.listen(l)
                  : async function (...h) {
                      let u;
                      o && !Xt(o.context) ? (u = [o.context, ...h]) : (u = h);
                      const f = await n.call(l, u);
                      return a ? f : ws(f);
                    };
          throw new Xi(`Property not found: ${String(l)}`);
        },
      },
    );
  }
  e.toService = i;
  function s(n) {
    return n[0] === "o" && n[1] === "n" && al(n.charCodeAt(2));
  }
  function r(n) {
    return /^onDynamic/.test(n) && al(n.charCodeAt(9));
  }
})(Va || (Va = {}));
import { fork as F5 } from "child_process";
function T5(e) {
  const t = e;
  return t && typeof t.type == "string" && typeof t.severity == "string";
}
function M5(e) {
  const t = [];
  let i;
  try {
    const s = JSON.parse(e.arguments),
      r = s[s.length - 1];
    r && r.__$stack && (s.pop(), (i = r.__$stack)), t.push(...s);
  } catch {
    t.push("Unable to log remote console arguments", e.arguments);
  }
  return { args: t, stack: i };
}
function _5(e) {
  if (!e) return e;
  const t = e.indexOf(`
`);
  return t === -1 ? e : e.substring(0, t);
}
function U5(e, t) {
  const { args: i, stack: s } = M5(e),
    r = typeof i[0] == "string" && i.length === 1;
  let n = _5(s);
  n && (n = `(${n.trim()})`);
  let o = [];
  if (
    (typeof i[0] == "string" ? (n && r ? (o = [`%c[${t}] %c${i[0]} %c${n}`, xs("blue"), xs(""), xs("grey")]) : (o = [`%c[${t}] %c${i[0]}`, xs("blue"), xs(""), ...i.slice(1)])) : (o = [`%c[${t}]%`, xs("blue"), ...i]),
    n && !r && o.push(n),
    typeof console[e.severity] != "function")
  )
    throw new Error("Unknown console method");
  V5(o) || console[e.severity].apply(console, o);
}
function xs(e) {
  return `color: ${e}`;
}
var j5 = ["/opt/tiger/consul_deploy"];
function V5(e) {
  try {
    return !!e.filter((i) => j5.some((s) => i.includes(s)));
  } catch {
    return !1;
  }
}
import { promises as uf } from "fs";
var ff;
(function (e) {
  (e[(e.stdout = 0)] = "stdout"), (e[(e.stderr = 1)] = "stderr");
})(ff || (ff = {}));
var df;
(function (e) {
  (e[(e.Success = 0)] = "Success"), (e[(e.Unknown = 1)] = "Unknown"), (e[(e.AccessDenied = 2)] = "AccessDenied"), (e[(e.ProcessNotFound = 3)] = "ProcessNotFound");
})(df || (df = {}));
function B5(e) {
  e && (delete e.DEBUG, se && delete e.LD_PRELOAD);
}
function z5(e = wt) {
  return e.comspec || "cmd.exe";
}
function q5(e) {
  let t = [],
    i = !1;
  const s = function (r) {
    if (i) {
      t.push(r);
      return;
    }
    (!e.send(r, (o) => {
      if ((o && console.error(o), (i = !1), t.length > 0)) {
        const a = t.slice(0);
        (t = []), a.forEach((c) => s(c));
      }
    }) ||
      Rt) &&
      (i = !0);
  };
  return { send: s };
}
var pf;
(function (e) {
  async function t(i, s, r) {
    if (Mr(i)) return i;
    if ((s === void 0 && (s = is()), Be(i) !== "." || (r === void 0 && zt(wt.PATH) && (r = wt.PATH.split(Pd)), r === void 0 || r.length === 0))) return _(s, i);
    async function o(a) {
      if (await pt.exists(a)) {
        let c;
        try {
          c = await uf.stat(a);
        } catch (l) {
          l.message.startsWith("EACCES") && (c = await uf.lstat(a));
        }
        return c ? !c.isDirectory() : !1;
      }
      return !1;
    }
    for (const a of r) {
      let c;
      if ((Mr(a) ? (c = _(a, i)) : (c = _(s, a, i)), await o(c))) return c;
      let l = c + ".com";
      if ((await o(l)) || ((l = c + ".exe"), await o(l))) return l;
    }
    return _(s, i);
  }
  e.findExecutable = t;
})(pf || (pf = {}));
var W5 = class {
    constructor(e, t) {
      (this.i = e), (this.j = t), (this.c = new Set()), (this.g = new Map()), (this.h = new O()), (this.onDidProcessExit = this.h.event);
      const i = t && t.timeout ? t.timeout : 6e4;
      (this.b = new Rl(i)), (this.d = null), (this.f = null);
    }
    getChannel(e) {
      const t = this;
      return {
        call(i, s, r) {
          return t.k(e, i, s, r);
        },
        listen(i, s) {
          return t.l(e, i, s);
        },
      };
    }
    k(e, t, i, s = lt.None) {
      if (!this.b) return Promise.reject(new Error("disposed"));
      if (s.isCancellationRequested) return Promise.reject(bc());
      this.b.cancel();
      const r = this.n(e),
        n = ti((c) => r.call(t, i, c)),
        o = s.onCancellationRequested(() => n.cancel()),
        a = Dt(() => n.cancel());
      return (
        this.c.add(a),
        n.finally(() => {
          o.dispose(), this.c.delete(a), this.c.size === 0 && this.b && this.b.trigger(() => this.o());
        }),
        n
      );
    }
    l(e, t, i) {
      if (!this.b) return at.None;
      this.b.cancel();
      let s;
      const r = new O({
        onWillAddFirstListener: () => {
          (s = this.n(e).listen(t, i)(r.fire, r)), this.c.add(s);
        },
        onDidRemoveLastListener: () => {
          this.c.delete(s), s.dispose(), this.c.size === 0 && this.b && this.b.trigger(() => this.o());
        },
      });
      return r.event;
    }
    get m() {
      if (!this.f) {
        const e = this.j && this.j.args ? this.j.args : [],
          t = Object.create(null);
        (t.env = { ...mi(process.env), VSCODE_PARENT_PID: String(process.pid) }),
          this.j && this.j.env && (t.env = { ...t.env, ...this.j.env }),
          this.j && this.j.freshExecArgv && (t.execArgv = []),
          this.j && typeof this.j.debug == "number" && (t.execArgv = ["--nolazy", "--inspect=" + this.j.debug]),
          this.j && typeof this.j.debugBrk == "number" && (t.execArgv = ["--nolazy", "--inspect-brk=" + this.j.debugBrk]),
          t.execArgv === void 0 && (t.execArgv = process.execArgv.filter((h) => !/^--inspect(-brk)?=/.test(h)).filter((h) => !h.startsWith("--vscode-"))),
          B5(t.env),
          (this.d = F5(this.i, e, t));
        const i = new O(),
          r = at.fromNodeEventEmitter(
            this.d,
            "message",
            (h) => h,
          )((h) => {
            if (T5(h)) {
              U5(h, `IPC Library: ${this.j.serverName}`);
              return;
            }
            i.fire(B.wrap(Buffer.from(h, "base64")));
          }),
          n = this.j.useQueue ? q5(this.d) : this.d,
          o = (h) => this.d && this.d.connected && n.send(h.buffer.toString("base64")),
          a = i.event,
          c = { send: o, onMessage: a };
        this.f = new hf(c);
        const l = () => this.o();
        process.once("exit", l),
          this.d.on("error", (h) => console.warn('IPC "' + this.j.serverName + '" errored with ' + h)),
          this.d.on("exit", (h, u) => {
            process.removeListener("exit", l),
              r.dispose(),
              this.c.forEach((f) => $e(f)),
              this.c.clear(),
              h !== 0 && u !== "SIGTERM" && console.warn('IPC "' + this.j.serverName + '" crashed with exit code ' + h + " and signal " + u),
              this.b?.cancel(),
              this.o(),
              this.h.fire({ code: h, signal: u });
          });
      }
      return this.f;
    }
    n(e) {
      let t = this.g.get(e);
      return t || ((t = this.m.getChannel(e)), this.g.set(e, t)), t;
    }
    o() {
      this.f && (this.d && (this.d.kill(), (this.d = null)), (this.f = null), this.g.clear());
    }
    dispose() {
      this.h.dispose(), this.b?.cancel(), (this.b = void 0), this.o(), this.c.clear();
    }
  },
  H5 = class extends S5 {
    constructor(e, t, i) {
      super(e, t, i), this.s();
    }
    r(e) {
      const t = e.add(
        new W5(js.asFileUri("bootstrap-fork").fsPath, {
          serverName: "File Watcher",
          args: ["--type=fileWatcher"],
          env: { VSCODE_ESM_ENTRYPOINT: "vs/platform/files/node/watcher/watcherMain", VSCODE_PIPE_LOGGING: "true", VSCODE_VERBOSE_LOGGING: "true" },
        }),
      );
      return e.add(t.onDidProcessExit(({ code: i, signal: s }) => this.t(`terminated by itself with code ${i}, signal: ${s} (ETERM)`))), Va.toService(C5(t.getChannel("watcher")));
    }
  };
import { watchFile as G5, unwatchFile as J5 } from "fs";
var Q5 = class extends G {
  constructor() {
    super(),
      (this.a = this.B(new O())),
      (this.onDidChangeFile = this.a.event),
      (this.b = this.B(new O())),
      (this.onDidLogMessage = this.b.event),
      (this.c = this.B(new O())),
      (this.f = this.c.event),
      (this.g = new Map()),
      (this.h = new Map()),
      (this.j = this.B(new Jn())),
      (this.m = new Set()),
      (this.n = this.B(new Ci(this.y()))),
      (this.r = 5007),
      (this.s = new ho()),
      (this.R = !1),
      this.B(this.f((e) => this.z({ id: this.u(e), correlationId: this.t(e) ? e.correlationId : void 0, path: e.path })));
  }
  t(e) {
    return tf(e);
  }
  u(e) {
    return this.t(e) ? e.correlationId : ls(e);
  }
  async watch(e) {
    this.s.isSettled || this.s.complete(), (this.s = new ho());
    try {
      this.g.clear(), this.h.clear();
      for (const t of e) this.t(t) ? this.g.set(t.correlationId, t) : this.h.set(this.u(t), t);
      for (const [t] of this.j) !this.h.has(t) && !this.g.has(t) && (this.j.deleteAndDispose(t), this.m.delete(t));
      return await this.w(!1);
    } finally {
      this.s.complete();
    }
  }
  w(e) {
    const t = [];
    for (const [i, s] of [...this.h, ...this.g]) this.j.has(i) || t.push(s);
    return this.n.trigger(() => this.N(t), e ? this.y() : 0).catch((i) => Le(i));
  }
  y() {
    return 800;
  }
  isSuspended(e) {
    const t = this.u(e);
    return this.m.has(t) ? "polling" : this.j.has(t);
  }
  async z(e) {
    if (this.j.has(e.id)) return;
    const t = new ue();
    this.j.set(e.id, t), await this.s.p, !t.isDisposed && (this.D(e, t), this.w(!0));
  }
  C(e) {
    this.j.deleteAndDispose(e.id), this.m.delete(e.id), this.w(!1);
  }
  D(e, t) {
    this.F(e, t) ? (this.P(`reusing an existing recursive watcher to monitor ${e.path}`), this.m.delete(e.id)) : (this.G(e, t), this.m.add(e.id));
  }
  F(e, t) {
    const i = this.O?.subscribe(e.path, (s, r) => {
      t.isDisposed || (s ? this.D(e, t) : r?.type === 1 && this.H(e));
    });
    return i ? (t.add(i), !0) : !1;
  }
  G(e, t) {
    let i = !1;
    const s = (r, n) => {
      if (t.isDisposed) return;
      const o = this.I(r),
        a = this.I(n),
        c = i;
      (i = o), !o && (a || c) && this.H(e);
    };
    this.P(`starting fs.watchFile() on ${e.path} (correlationId: ${e.correlationId})`);
    try {
      G5(e.path, { persistent: !1, interval: this.r }, s);
    } catch (r) {
      this.Q(`fs.watchFile() failed with error ${r} on path ${e.path} (correlationId: ${e.correlationId})`);
    }
    t.add(
      Dt(() => {
        this.P(`stopping fs.watchFile() on ${e.path} (correlationId: ${e.correlationId})`);
        try {
          J5(e.path, s);
        } catch (r) {
          this.Q(`fs.unwatchFile() failed with error ${r} on path ${e.path} (correlationId: ${e.correlationId})`);
        }
      }),
    );
  }
  H(e) {
    this.P(`detected ${e.path} exists again, resuming watcher (correlationId: ${e.correlationId})`);
    const t = { resource: I.file(e.path), type: 1, cId: e.correlationId };
    this.a.fire([t]), this.J(t, e), this.C(e);
  }
  I(e) {
    return e.ctimeMs === 0 && e.ino === 0;
  }
  async stop() {
    this.j.clearAndDisposeAll(), this.m.clear();
  }
  J(e, t) {
    if (this.R) {
      const i = ` >> normalized ${e.type === 1 ? "[ADDED]" : e.type === 2 ? "[DELETED]" : "[CHANGED]"} ${e.resource.fsPath}`;
      this.L(i, t);
    }
  }
  L(e, t) {
    this.R && this.P(`${e}${typeof t.correlationId == "number" ? ` <${t.correlationId}> ` : ""}`);
  }
  M(e) {
    return `${e.path} (excludes: ${e.excludes.length > 0 ? e.excludes : "<none>"}, includes: ${e.includes && e.includes.length > 0 ? JSON.stringify(e.includes) : "<all>"}, filter: ${A5(e.filter)}, correlationId: ${typeof e.correlationId == "number" ? e.correlationId : "<none>"})`;
  }
  async setVerboseLogging(e) {
    this.R = e;
  }
};
import { watch as X5, promises as Z5 } from "fs";
import "fs";
async function Ba(e, t) {
  if (se) return e;
  const i = Be(e);
  if (e === i) return e;
  const s = (Ie(e) || e).toLowerCase();
  try {
    if (t?.isCancellationRequested) return null;
    const n = (await pt.readdir(i)).filter((o) => o.toLowerCase() === s);
    if (n.length === 1) {
      const o = await Ba(i, t);
      if (o) return _(o, n[0]);
    } else if (n.length > 1) {
      const o = n.indexOf(s);
      if (o >= 0) {
        const a = await Ba(i, t);
        if (a) return _(a, n[o]);
      }
    }
  } catch {}
  return null;
}
var Y5 = class Un extends G {
    static {
      this.a = 100;
    }
    static {
      this.b = 75;
    }
    get isReusingRecursiveWatcher() {
      return this.n;
    }
    get failed() {
      return this.r;
    }
    constructor(t, i, s, r, n, o) {
      super(),
        (this.s = t),
        (this.t = i),
        (this.u = s),
        (this.w = r),
        (this.y = n),
        (this.z = o),
        (this.c = this.B(new pp({ maxWorkChunkSize: 100, throttleDelay: 200, maxBufferedWork: 1e4 }, (a) => this.u(a)))),
        (this.f = this.B(new dp((a) => this.M(a), Un.b))),
        (this.g = rf(this.s.path, this.s.excludes)),
        (this.h = this.s.includes ? rf(this.s.path, this.s.includes) : void 0),
        (this.j = tf(this.s) ? this.s.filter : void 0),
        (this.m = new ts()),
        (this.ready = this.C()),
        (this.n = !1),
        (this.r = !1);
    }
    async C() {
      try {
        const t = await this.F(this.s);
        if (this.m.token.isCancellationRequested) return;
        const i = await Z5.stat(t);
        if (this.m.token.isCancellationRequested) return;
        this.B(await this.G(t, i.isDirectory()));
      } catch (t) {
        t.code !== "ENOENT" ? this.O(t) : this.Q(`ignoring a path for watching who's stat info failed to resolve: ${this.s.path} (error: ${t})`), this.D();
      }
    }
    D() {
      (this.r = !0), this.w?.();
    }
    async F(t) {
      let i = t.path;
      try {
        (i = await pt.realpath(t.path)),
          t.path === i && (i = (await Ba(t.path, this.m.token)) ?? t.path),
          t.path !== i && this.Q(`correcting a path to watch that seems to be a symbolic link or wrong casing (original: ${t.path}, real: ${i})`);
      } catch {}
      return i;
    }
    async G(t, i) {
      const s = new ue();
      return this.H(t, i, s) ? (this.Q(`reusing an existing recursive watcher for ${this.s.path}`), (this.n = !0)) : ((this.n = !1), await this.I(t, i, s)), s;
    }
    H(t, i, s) {
      if (i) return !1;
      const r = I.file(this.s.path),
        n = this.t?.subscribe(this.s.path, async (o, a) => {
          if (!s.isDisposed)
            if (o) {
              const c = await this.G(t, i);
              s.isDisposed ? c.dispose() : s.add(c);
            } else a && (typeof a.cId == "number" || typeof this.s.correlationId == "number") && this.L({ resource: r, type: a.type, cId: this.s.correlationId }, !0);
        });
      return n ? (s.add(n), !0) : !1;
    }
    async I(t, i, s) {
      if (Ze && Us(t, "/Volumes/", !0)) {
        this.O(`Refusing to watch ${t} for changes using fs.watch() for possibly being a network share where watching is unreliable and unstable.`);
        return;
      }
      const r = new ts(this.m.token);
      s.add(Dt(() => r.dispose(!0)));
      const n = new ue();
      s.add(n);
      try {
        const o = I.file(this.s.path),
          a = Ie(t),
          c = X5(t);
        n.add(
          Dt(() => {
            c.removeAllListeners(), c.close();
          }),
        ),
          this.Q(`Started watching: '${t}'`);
        const l = new Set();
        if (i)
          try {
            for (const u of await pt.readdir(t)) l.add(u);
          } catch (u) {
            this.O(u);
          }
        if (r.token.isCancellationRequested) return;
        const h = new Map();
        n.add(
          Dt(() => {
            for (const [, u] of h) u.dispose();
            h.clear();
          }),
        ),
          c.on("error", (u, f) => {
            r.token.isCancellationRequested || (this.O(`Failed to watch ${t} for changes using fs.watch() (${u}, ${f})`), this.D());
          }),
          c.on("change", (u, f) => {
            if (r.token.isCancellationRequested) return;
            this.z && this.R(`[raw] ["${u}"] ${f}`);
            let p = "";
            if ((f && ((p = f.toString()), Ze && (p = Ea(p))), !(!p || (u !== "change" && u !== "rename"))))
              if (i)
                if (u === "rename") {
                  h.get(p)?.dispose();
                  const w = setTimeout(async () => {
                    if ((h.delete(p), p === a && !(await pt.exists(t)))) {
                      this.J(o);
                      return;
                    }
                    if (r.token.isCancellationRequested) return;
                    const m = await this.N(_(t, p));
                    if (r.token.isCancellationRequested) return;
                    let y;
                    m ? (l.has(p) ? (y = 0) : ((y = 1), l.add(p))) : (l.delete(p), (y = 2)), this.L({ resource: V(o, p), type: y, cId: this.s.correlationId });
                  }, Un.a);
                  h.set(
                    p,
                    Dt(() => clearTimeout(w)),
                  );
                } else {
                  let w;
                  l.has(p) ? (w = 0) : ((w = 1), l.add(p)), this.L({ resource: V(o, p), type: w, cId: this.s.correlationId });
                }
              else if (u === "rename" || p !== a) {
                const w = setTimeout(async () => {
                  const m = await pt.exists(t);
                  r.token.isCancellationRequested || (m ? (this.L({ resource: o, type: 0, cId: this.s.correlationId }, !0), n.add(await this.G(t, !1))) : this.J(o));
                }, Un.a);
                n.clear(), n.add(Dt(() => clearTimeout(w)));
              } else this.L({ resource: o, type: 0, cId: this.s.correlationId }, !0);
          });
      } catch (o) {
        r.token.isCancellationRequested || this.O(`Failed to watch ${t} for changes using fs.watch() (${o.toString()})`), this.D();
      }
    }
    J(t) {
      this.P("Watcher shutdown because watched path got deleted"), this.L({ resource: t, type: 2, cId: this.s.correlationId }, !0), this.f.flush(), this.D();
    }
    L(t, i = !1) {
      this.m.token.isCancellationRequested ||
        (this.z && this.R(`${t.type === 1 ? "[ADDED]" : t.type === 2 ? "[DELETED]" : "[CHANGED]"} ${t.resource.fsPath}`),
        !i && this.g.some((s) => s(t.resource.fsPath))
          ? this.z && this.R(` >> ignored (excluded) ${t.resource.fsPath}`)
          : !i && this.h && this.h.length > 0 && !this.h.some((s) => s(t.resource.fsPath))
            ? this.z && this.R(` >> ignored (not included) ${t.resource.fsPath}`)
            : this.f.work(t));
    }
    M(t) {
      const i = $5(t),
        s = [];
      for (const n of i) {
        if (k5(n, this.j)) {
          this.z && this.R(` >> ignored (filtered) ${n.resource.fsPath}`);
          continue;
        }
        s.push(n);
      }
      if (s.length === 0) return;
      if (this.z) for (const n of s) this.R(` >> normalized ${n.type === 1 ? "[ADDED]" : n.type === 2 ? "[DELETED]" : "[CHANGED]"} ${n.resource.fsPath}`);
      this.c.work(s)
        ? this.c.pending > 0 &&
          this.Q(
            `started throttling events due to large amount of file change events at once (pending: ${this.c.pending}, most recent change: ${s[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`,
          )
        : this.P(
            `started ignoring events due to too many file change events at once (incoming: ${s.length}, most recent change: ${s[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`,
          );
    }
    async N(t) {
      if (se) return pt.exists(t);
      try {
        const i = Ie(t);
        return (await pt.readdir(Be(t))).some((r) => r === i);
      } catch (i) {
        return this.Q(i), !1;
      }
    }
    setVerboseLogging(t) {
      this.z = t;
    }
    O(t) {
      this.m.token.isCancellationRequested || this.y?.({ type: "error", message: `[File Watcher (node.js)] ${t}` });
    }
    P(t) {
      this.m.token.isCancellationRequested || this.y?.({ type: "warn", message: `[File Watcher (node.js)] ${t}` });
    }
    Q(t) {
      !this.m.token.isCancellationRequested && this.z && this.y?.({ type: "trace", message: `[File Watcher (node.js)] ${t}` });
    }
    R(t) {
      !this.m.token.isCancellationRequested && this.z && this.Q(`${t}${typeof this.s.correlationId == "number" ? ` <${this.s.correlationId}> ` : ""}`);
    }
    dispose() {
      this.m.dispose(!0), super.dispose();
    }
  },
  K5 = class extends Q5 {
    constructor(e) {
      super(), (this.O = e), (this.onDidError = at.None), (this.watchers = new Set());
    }
    async N(e) {
      e = this.Z(e);
      const t = [],
        i = new Set(Array.from(this.watchers));
      for (const s of e) {
        const r = this.W(s);
        r && Ku(r.request.excludes, s.excludes) && Ku(r.request.includes, s.includes) ? i.delete(r) : t.push(s);
      }
      t.length && this.P(`Request to start watching: ${t.map((s) => this.M(s)).join(",")}`),
        i.size &&
          this.P(
            `Request to stop watching: ${Array.from(i)
              .map((s) => this.M(s.request))
              .join(",")}`,
          );
      for (const s of i) this.Y(s);
      for (const s of t) this.X(s);
    }
    W(e) {
      for (const t of this.watchers)
        if (typeof e.correlationId == "number" || typeof t.request.correlationId == "number") {
          if (t.request.correlationId === e.correlationId) return t;
        } else if (oo(t.request.path, e.path, !se)) return t;
    }
    X(e) {
      const t = new Y5(
          e,
          this.O,
          (s) => this.a.fire(s),
          () => this.c.fire(e),
          (s) => this.b.fire(s),
          this.R,
        ),
        i = { request: e, instance: t };
      this.watchers.add(i);
    }
    async stop() {
      await super.stop();
      for (const e of this.watchers) this.Y(e);
    }
    Y(e) {
      this.P("stopping file watcher", e), this.watchers.delete(e), e.instance.dispose();
    }
    Z(e) {
      const t = new Map();
      for (const i of e) {
        const s = se ? i.path : i.path.toLowerCase();
        let r = t.get(i.correlationId);
        r || ((r = new Map()), t.set(i.correlationId, r)), r.has(s) && this.P(`ignoring a request for watching who's path is already watched: ${this.M(i)}`), r.set(s, i);
      }
      return Array.from(t.values())
        .map((i) => Array.from(i.values()))
        .flat();
    }
    async setVerboseLogging(e) {
      super.setVerboseLogging(e);
      for (const t of this.watchers) t.instance.setVerboseLogging(e);
    }
    P(e, t) {
      this.R && this.b.fire({ type: "trace", message: this.bb(e, t) });
    }
    Q(e) {
      this.b.fire({ type: "warn", message: this.bb(e) });
    }
    bb(e, t) {
      return t ? `[File Watcher (node.js)] ${e} (${this.M(t.request)})` : `[File Watcher (node.js)] ${e}`;
    }
  },
  tm = class extends x5 {
    constructor(e, t, i) {
      super(e, t, i), this.s();
    }
    r(e) {
      return e.add(new K5(void 0));
    }
  },
  em = class yr extends D5 {
    static {
      this.M = !1;
    }
    constructor(t, i) {
      super(t, i), (this.onDidChangeCapabilities = at.None), (this.Q = new Qt((s) => co.getComparisonKey(s))), (this.Y = new Map()), (this.Z = new Map()), (this.$ = new Map());
    }
    get capabilities() {
      return this.N || ((this.N = 253982), se && (this.N |= 1024)), this.N;
    }
    async stat(t) {
      try {
        const { stat: i, symbolicLink: s } = await ye.stat(this.J(t));
        return { type: this.P(i, s), ctime: i.birthtime.getTime(), mtime: i.mtime.getTime(), size: i.size, permissions: i.mode & 128 ? void 0 : ds.Locked };
      } catch (i) {
        throw this.ib(i);
      }
    }
    async O(t) {
      try {
        return await this.stat(t);
      } catch {
        return;
      }
    }
    async readdir(t) {
      try {
        const i = await pt.readdir(this.J(t), { withFileTypes: !0 }),
          s = [];
        return (
          await Promise.all(
            i.map(async (r) => {
              try {
                let n;
                r.isSymbolicLink() ? (n = (await this.stat(V(t, r.name))).type) : (n = this.P(r)), s.push([r.name, n]);
              } catch (n) {
                this.a.trace(n);
              }
            }),
          ),
          s
        );
      } catch (i) {
        throw this.ib(i);
      }
    }
    P(t, i) {
      let s;
      return i?.dangling ? (s = ve.Unknown) : t.isFile() ? (s = ve.File) : t.isDirectory() ? (s = ve.Directory) : (s = ve.Unknown), i && (s |= ve.SymbolicLink), s;
    }
    async R(t) {
      const i = this.J(t);
      this.S(`[Disk FileSystemProvider]: createResourceLock() - request to acquire resource lock (${i})`);
      let s;
      for (; (s = this.Q.get(t)); ) this.S(`[Disk FileSystemProvider]: createResourceLock() - waiting for resource lock to be released (${i})`), await s.wait();
      const r = new Ll();
      return (
        this.Q.set(t, r),
        this.S(`[Disk FileSystemProvider]: createResourceLock() - new resource lock created (${i})`),
        Dt(() => {
          this.S(`[Disk FileSystemProvider]: createResourceLock() - resource lock dispose() (${i})`),
            this.Q.get(t) === r && (this.S(`[Disk FileSystemProvider]: createResourceLock() - resource lock removed from resource-lock map (${i})`), this.Q.delete(t)),
            this.S(`[Disk FileSystemProvider]: createResourceLock() - resource lock barrier open() (${i})`),
            r.open();
        })
      );
    }
    async readFile(t, i) {
      let s;
      try {
        i?.atomic && (this.S(`[Disk FileSystemProvider]: atomic read operation started (${this.J(t)})`), (s = await this.R(t)));
        const r = this.J(t);
        return await xi.readFile(r);
      } catch (r) {
        throw this.ib(r);
      } finally {
        s?.dispose();
      }
    }
    S(t) {
      yr.M && this.a.trace(t);
    }
    readFileStream(t, i, s) {
      const r = Hr((n) => B.concat(n.map((o) => B.wrap(o))).buffer);
      return zu(this, t, r, (n) => n.buffer, { ...i, bufferSize: 256 * 1024 }, s), r;
    }
    async writeFile(t, i, s) {
      return s?.atomic !== !1 && s?.atomic?.postfix && (await this.U(t)) ? this.W(t, V(np(t), `${ns(t)}${s.atomic.postfix}`), i, s) : this.X(t, i, s);
    }
    async U(t) {
      try {
        const i = this.J(t),
          { symbolicLink: s } = await ye.stat(i);
        if (s) return !1;
      } catch {}
      return !0;
    }
    async W(t, i, s, r) {
      const n = new ue();
      try {
        n.add(await this.R(t)), n.add(await this.R(i)), await this.X(i, s, r, !0);
        try {
          await this.rename(i, t, { overwrite: !0 });
        } catch (o) {
          try {
            await this.delete(i, { recursive: !1, useTrash: !1, atomic: !1 });
          } catch {}
          throw o;
        }
      } finally {
        n.dispose();
      }
    }
    async X(t, i, s, r) {
      let n;
      try {
        const o = this.J(t);
        if (!s.create || !s.overwrite) {
          if (await pt.exists(o)) {
            if (!s.overwrite) throw si(d(1943, null), U.FileExists);
          } else if (!s.create) throw si(d(1944, null), U.FileNotFound);
        }
        (n = await this.open(t, { create: !0, unlock: s.unlock }, r)), await this.write(n, 0, i, 0, i.byteLength);
      } catch (o) {
        throw await this.jb(t, o);
      } finally {
        typeof n == "number" && (await this.close(n));
      }
    }
    static {
      this.ab = !0;
    }
    static configureFlushOnWrite(t) {
      yr.ab = t;
    }
    async open(t, i, s) {
      const r = this.J(t);
      let n;
      er(i) && !s && (n = await this.R(t));
      let o;
      try {
        if (er(i) && i.unlock)
          try {
            const { stat: c } = await ye.stat(r);
            c.mode & 128 || (await xi.chmod(r, c.mode | 128));
          } catch (c) {
            c.code !== "ENOENT" && this.a.trace(c);
          }
        let a;
        if (er(i)) {
          if (Rt)
            try {
              await xi.truncate(r, 0), (a = "r+");
            } catch (c) {
              c.code !== "ENOENT" && this.a.trace(c);
            }
          a || (a = "w");
        } else a = "r";
        o = await pt.open(r, a);
      } catch (a) {
        throw (n?.dispose(), er(i) ? await this.jb(t, a) : this.ib(a));
      }
      if ((this.Y.set(o, 0), er(i) && this.$.set(o, t), n)) {
        const a = this.Z.get(o);
        this.S(`[Disk FileSystemProvider]: open() - storing lock for handle ${o} (${r})`),
          this.Z.set(o, n),
          a && (this.S(`[Disk FileSystemProvider]: open() - disposing a previous lock that was still stored on same handle ${o} (${r})`), a.dispose());
      }
      return o;
    }
    async close(t) {
      const i = this.Z.get(t);
      try {
        if ((this.Y.delete(t), this.$.delete(t) && yr.ab))
          try {
            await pt.fdatasync(t);
          } catch (s) {
            yr.configureFlushOnWrite(!1), this.a.error(s);
          }
        return await pt.close(t);
      } catch (s) {
        throw this.ib(s);
      } finally {
        i &&
          (this.Z.get(t) === i && (this.S(`[Disk FileSystemProvider]: close() - resource lock removed from handle-lock map ${t}`), this.Z.delete(t)),
          this.S(`[Disk FileSystemProvider]: close() - disposing lock for handle ${t}`),
          i.dispose());
      }
    }
    async read(t, i, s, r, n) {
      const o = this.bb(t, i);
      let a = null;
      try {
        a = (await pt.read(t, s, r, n, o)).bytesRead;
      } catch (c) {
        throw this.ib(c);
      } finally {
        this.cb(t, o, a);
      }
      return a;
    }
    bb(t, i) {
      return i === this.Y.get(t) ? null : i;
    }
    cb(t, i, s) {
      const r = this.Y.get(t);
      typeof r == "number" && (typeof i == "number" || (typeof s == "number" ? this.Y.set(t, r + s) : this.Y.delete(t)));
    }
    async write(t, i, s, r, n) {
      return wp(() => this.db(t, i, s, r, n), 100, 3);
    }
    async db(t, i, s, r, n) {
      const o = this.bb(t, i);
      let a = null;
      try {
        a = (await pt.write(t, s, r, n, o)).bytesWritten;
      } catch (c) {
        throw await this.jb(this.$.get(t), c);
      } finally {
        this.cb(t, o, a);
      }
      return a;
    }
    async mkdir(t) {
      try {
        await xi.mkdir(this.J(t));
      } catch (i) {
        throw this.ib(i);
      }
    }
    async delete(t, i) {
      try {
        const s = this.J(t);
        if (i.recursive) {
          let r;
          i?.atomic !== !1 && i.atomic.postfix && (r = _(Be(s), `${Ie(s)}${i.atomic.postfix}`)), await pt.rm(s, ys.MOVE, r);
        } else
          try {
            await xi.unlink(s);
          } catch (r) {
            if (r.code === "EPERM" || r.code === "EISDIR") {
              let n = !1;
              try {
                const { stat: o, symbolicLink: a } = await ye.stat(s);
                n = o.isDirectory() && !a;
              } catch {}
              if (n) await xi.rmdir(s);
              else throw r;
            } else throw r;
          }
      } catch (s) {
        throw this.ib(s);
      }
    }
    async rename(t, i, s) {
      const r = this.J(t),
        n = this.J(i);
      if (r !== n)
        try {
          await this.eb(t, i, "move", s.overwrite), await pt.rename(r, n);
        } catch (o) {
          throw ((o.code === "EINVAL" || o.code === "EBUSY" || o.code === "ENAMETOOLONG") && (o = new Error(d(1945, null, Ie(r), Ie(Be(n)), o.toString()))), this.ib(o));
        }
    }
    async copy(t, i, s) {
      const r = this.J(t),
        n = this.J(i);
      if (r !== n)
        try {
          await this.eb(t, i, "copy", s.overwrite), await pt.copy(r, n, { preserveSymlinks: !0 });
        } catch (o) {
          throw ((o.code === "EINVAL" || o.code === "EBUSY" || o.code === "ENAMETOOLONG") && (o = new Error(d(1946, null, Ie(r), Ie(Be(n)), o.toString()))), this.ib(o));
        }
    }
    async eb(t, i, s, r) {
      const n = this.J(t),
        o = this.J(i);
      let a = !1;
      if ((!!(this.capabilities & 1024) || (a = oo(n, o, !0)), a)) {
        if (s === "copy") throw si(d(1947, null), U.FileExists);
        if (s === "move") return;
      }
      const l = await this.O(t);
      if (!l) throw si(d(1948, null), U.FileNotFound);
      const h = await this.O(i);
      if (h) {
        if (!r) throw si(d(1949, null), U.FileExists);
        (l.type & ve.File && h.type & ve.File) || (await this.delete(i, { recursive: !0, useTrash: !1, atomic: !1 }));
      }
    }
    async cloneFile(t, i) {
      return this.fb(t, i, !1);
    }
    async fb(t, i, s) {
      const r = this.J(t),
        n = this.J(i),
        o = !!(this.capabilities & 1024);
      if (oo(r, n, !o)) return;
      const a = new ue();
      try {
        a.add(await this.R(t)), a.add(await this.R(i)), s && (await xi.mkdir(Be(n), { recursive: !0 })), await xi.copyFile(r, n);
      } catch (c) {
        if (c.code === "ENOENT" && !s) return this.fb(t, i, !0);
        throw this.ib(c);
      } finally {
        a.dispose();
      }
    }
    u(t, i, s) {
      return new H5(
        (r) => t(r),
        (r) => i(r),
        s,
      );
    }
    G(t, i, s) {
      return new tm(
        (r) => t(r),
        (r) => i(r),
        s,
      );
    }
    ib(t) {
      if (t instanceof zo) return t;
      let i = t,
        s;
      switch (t.code) {
        case "ENOENT":
          s = U.FileNotFound;
          break;
        case "EISDIR":
          s = U.FileIsADirectory;
          break;
        case "ENOTDIR":
          s = U.FileNotADirectory;
          break;
        case "EEXIST":
          s = U.FileExists;
          break;
        case "EPERM":
        case "EACCES":
          s = U.NoPermissions;
          break;
        case "ERR_UNC_HOST_NOT_ALLOWED":
          (i = `${t.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.`), (s = U.Unknown);
          break;
        default:
          s = U.Unknown;
      }
      return si(i, s);
    }
    async jb(t, i) {
      let s = this.ib(i);
      if (t && s.code === U.NoPermissions)
        try {
          const { stat: r } = await ye.stat(this.J(t));
          r.mode & 128 || (s = si(i, U.FileWriteLocked));
        } catch (r) {
          this.a.trace(r);
        }
      return s;
    }
  },
  ee = class {
    constructor(e, t = [], i = !1) {
      (this.ctor = e), (this.staticArguments = t), (this.supportsDelayedInstantiation = i);
    }
  },
  im = class {
    constructor(e, t) {
      (this.key = e), (this.data = t), (this.incoming = new Map()), (this.outgoing = new Map());
    }
  },
  gf = class {
    constructor(e) {
      (this.b = e), (this.a = new Map());
    }
    roots() {
      const e = [];
      for (const t of this.a.values()) t.outgoing.size === 0 && e.push(t);
      return e;
    }
    insertEdge(e, t) {
      const i = this.lookupOrInsertNode(e),
        s = this.lookupOrInsertNode(t);
      i.outgoing.set(s.key, s), s.incoming.set(i.key, i);
    }
    removeNode(e) {
      const t = this.b(e);
      this.a.delete(t);
      for (const i of this.a.values()) i.outgoing.delete(t), i.incoming.delete(t);
    }
    lookupOrInsertNode(e) {
      const t = this.b(e);
      let i = this.a.get(t);
      return i || ((i = new im(t, e)), this.a.set(t, i)), i;
    }
    lookup(e) {
      return this.a.get(this.b(e));
    }
    isEmpty() {
      return this.a.size === 0;
    }
    toString() {
      const e = [];
      for (const [t, i] of this.a)
        e.push(`${t}
	(-> incoming)[${[...i.incoming.keys()].join(", ")}]
	(outgoing ->)[${[...i.outgoing.keys()].join(",")}]
`);
      return e.join(`
`);
    }
    findCycleSlow() {
      for (const [e, t] of this.a) {
        const i = new Set([e]),
          s = this.c(t, i);
        if (s) return s;
      }
    }
    c(e, t) {
      for (const [i, s] of e.outgoing) {
        if (t.has(i)) return [...t, i].join(" -> ");
        t.add(i);
        const r = this.c(s, t);
        if (r) return r;
        t.delete(i);
      }
    }
  },
  mf = class {
    constructor(...e) {
      this.a = new Map();
      for (const [t, i] of e) this.set(t, i);
    }
    set(e, t) {
      const i = this.a.get(e);
      return this.a.set(e, t), i;
    }
    has(e) {
      return this.a.has(e);
    }
    get(e) {
      return this.a.get(e);
    }
  },
  sm = !1,
  wf = class extends Error {
    constructor(e) {
      super("cyclic dependency between services"),
        (this.message =
          e.findCycleSlow() ??
          `UNABLE to detect cycle, dumping graph: 
${e.toString()}`);
    }
  },
  rm = class hc {
    constructor(t = new mf(), i = !1, s, r = sm) {
      (this.i = t), (this.j = i), (this.k = s), (this.l = r), (this.f = !1), (this.g = new Set()), (this.h = new Set()), (this.t = new Set()), this.i.set(zr, this), (this._globalGraph = r ? (s?._globalGraph ?? new gf((n) => n)) : void 0);
    }
    dispose() {
      if (!this.f) {
        (this.f = !0), $e(this.h), this.h.clear();
        for (const t of this.g) V1(t) && t.dispose();
        this.g.clear();
      }
    }
    m() {
      if (this.f) throw new Error("InstantiationService has been disposed");
    }
    createChild(t, i) {
      this.m();
      const s = this,
        r = new (class extends hc {
          dispose() {
            s.h.delete(r), super.dispose();
          }
        })(t, this.j, this, this.l);
      return this.h.add(r), i?.add(r), r;
    }
    invokeFunction(t, ...i) {
      this.m();
      const s = za.traceInvocation(this.l, t);
      let r = !1;
      try {
        return t(
          {
            get: (o) => {
              if (r) throw Ec("service accessor is only valid during the invocation of its target method");
              const a = this.s(o, s);
              if (!a) throw new Error(`[invokeFunction] unknown service '${o}'`);
              return a;
            },
          },
          ...i,
        );
      } finally {
        (r = !0), s.stop();
      }
    }
    createInstance(t, ...i) {
      this.m();
      let s, r;
      return t instanceof ee ? ((s = za.traceCreation(this.l, t.ctor)), (r = this.o(t.ctor, t.staticArguments.concat(i), s))) : ((s = za.traceCreation(this.l, t)), (r = this.o(t, i, s))), s.stop(), r;
    }
    o(t, i = [], s) {
      const r = Ce.getServiceDependencies(t).sort((a, c) => a.index - c.index),
        n = [];
      for (const a of r) {
        const c = this.s(a.id, s);
        c || this.y(`[createInstance] ${t.name} depends on UNKNOWN service ${a.id}.`, !1), n.push(c);
      }
      const o = r.length > 0 ? r[0].index : i.length;
      if (i.length !== o) {
        console.trace(`[createInstance] First service dependency of ${t.name} at position ${o + 1} conflicts with ${i.length} static arguments`);
        const a = o - i.length;
        a > 0 ? (i = i.concat(new Array(a))) : (i = i.slice(0, o));
      }
      return Reflect.construct(t, i.concat(n));
    }
    q(t, i) {
      if (this.i.get(t) instanceof ee) this.i.set(t, i);
      else if (this.k) this.k.q(t, i);
      else throw new Error("illegalState - setting UNKNOWN service instance");
    }
    r(t) {
      const i = this.i.get(t);
      return !i && this.k ? this.k.r(t) : i;
    }
    s(t, i) {
      this._globalGraph && this.c && this._globalGraph.insertEdge(this.c, String(t));
      const s = this.r(t);
      return s instanceof ee ? this.u(t, s, i.branch(t, !0)) : (i.branch(t, !1), s);
    }
    u(t, i, s) {
      if (this.t.has(t)) throw new Error(`illegal state - RECURSIVELY instantiating service '${t}'`);
      this.t.add(t);
      try {
        return this.v(t, i, s);
      } finally {
        this.t.delete(t);
      }
    }
    v(t, i, s) {
      const r = new gf((c) => c.id.toString());
      let n = 0;
      const o = [{ id: t, desc: i, _trace: s }],
        a = new Set();
      for (; o.length; ) {
        const c = o.pop();
        if (!a.has(String(c.id))) {
          if ((a.add(String(c.id)), r.lookupOrInsertNode(c), n++ > 1e3)) throw new wf(r);
          for (const l of Ce.getServiceDependencies(c.desc.ctor)) {
            const h = this.r(l.id);
            if ((h || this.y(`[createInstance] ${t} depends on ${l.id} which is NOT registered.`, !0), this._globalGraph?.insertEdge(String(c.id), String(l.id)), h instanceof ee)) {
              const u = { id: l.id, desc: h, _trace: c._trace.branch(l.id, !0) };
              r.insertEdge(c, u), o.push(u);
            }
          }
        }
      }
      for (;;) {
        const c = r.roots();
        if (c.length === 0) {
          if (!r.isEmpty()) throw new wf(r);
          break;
        }
        for (const { data: l } of c) {
          if (this.r(l.id) instanceof ee) {
            const u = this.w(l.id, l.desc.ctor, l.desc.staticArguments, l.desc.supportsDelayedInstantiation, l._trace);
            this.q(l.id, u);
          }
          r.removeNode(l);
        }
      }
      return this.r(t);
    }
    w(t, i, s = [], r, n) {
      if (this.i.get(t) instanceof ee) return this.x(t, i, s, r, n, this.g);
      if (this.k) return this.k.w(t, i, s, r, n);
      throw new Error(`illegalState - creating UNKNOWN service instance ${i.name}`);
    }
    x(t, i, s = [], r, n, o) {
      if (r) {
        const a = new hc(void 0, this.j, this, this.l);
        a.c = String(t);
        const c = new Map(),
          l = new mp(() => {
            const h = a.o(i, s, n);
            for (const [u, f] of c) {
              const p = h[u];
              if (typeof p == "function") for (const w of f) w.disposable = p.apply(h, w.listener);
            }
            return c.clear(), o.add(h), h;
          });
        return new Proxy(Object.create(null), {
          get(h, u) {
            if (!l.isInitialized && typeof u == "string" && (u.startsWith("onDid") || u.startsWith("onWill"))) {
              let w = c.get(u);
              return (
                w || ((w = new Lc()), c.set(u, w)),
                (y, v, S) => {
                  if (l.isInitialized) return l.value[u](y, v, S);
                  {
                    const D = { listener: [y, v, S], disposable: void 0 },
                      x = w.push(D);
                    return Dt(() => {
                      x(), D.disposable?.dispose();
                    });
                  }
                }
              );
            }
            if (u in h) return h[u];
            const f = l.value;
            let p = f[u];
            return typeof p != "function" || ((p = p.bind(f)), (h[u] = p)), p;
          },
          set(h, u, f) {
            return (l.value[u] = f), !0;
          },
          getPrototypeOf(h) {
            return i.prototype;
          },
        });
      } else {
        const a = this.o(i, s, n);
        return o.add(a), a;
      }
    }
    y(t, i) {
      if ((i && console.warn(t), this.j)) throw new Error(t);
    }
  },
  vf;
(function (e) {
  (e[(e.None = 0)] = "None"), (e[(e.Creation = 1)] = "Creation"), (e[(e.Invocation = 2)] = "Invocation"), (e[(e.Branch = 3)] = "Branch");
})(vf || (vf = {}));
var za = class We {
  static {
    this.all = new Set();
  }
  static {
    this.c = new (class extends We {
      constructor() {
        super(0, null);
      }
      stop() {}
      branch() {
        return this;
      }
    })();
  }
  static traceInvocation(t, i) {
    return t
      ? new We(
          2,
          i.name ||
            new Error().stack
              .split(
                `
`,
              )
              .slice(3, 4).join(`
`),
        )
      : We.c;
  }
  static traceCreation(t, i) {
    return t ? new We(1, i.name) : We.c;
  }
  static {
    this.f = 0;
  }
  constructor(t, i) {
    (this.type = t), (this.name = i), (this.g = Date.now()), (this.h = []);
  }
  branch(t, i) {
    const s = new We(3, t.toString());
    return this.h.push([t, i, s]), s;
  }
  stop() {
    const t = Date.now() - this.g;
    We.f += t;
    let i = !1;
    function s(n, o) {
      const a = [],
        c = new Array(n + 1).join("	");
      for (const [l, h, u] of o.h)
        if (h && u) {
          (i = !0), a.push(`${c}CREATES -> ${l}`);
          const f = s(n + 1, u);
          f && a.push(f);
        } else a.push(`${c}uses -> ${l}`);
      return a.join(`
`);
    }
    const r = [`${this.type === 1 ? "CREATE" : "CALL"} ${this.name}`, `${s(1, this)}`, `DONE, took ${t.toFixed(2)}ms (grand total ${We.f.toFixed(2)}ms)`];
    (t > 2 || i) &&
      We.all.add(
        r.join(`
`),
      );
  }
};
function nm(e) {
  return e.tags.find((t) => t.startsWith("lp-"))?.split("lp-")[1];
}
var om = ct("languagePackService"),
  qa = class extends G {
    constructor(t) {
      super(), (this.c = t);
    }
    async getAvailableLanguages() {
      const t = new ts();
      setTimeout(() => t.cancel(), 1e3);
      let i;
      try {
        i = await this.c.query({ text: 'category:"language packs"', pageSize: 20 }, t.token);
      } catch {
        return [];
      }
      const r = i.firstPage
        .filter((n) => n.properties.localizedLanguages?.length && n.tags.some((o) => o.startsWith("lp-")))
        .map((n) => {
          const o = n.properties.localizedLanguages?.[0],
            a = nm(n);
          return { ...this.f(a, o, n), extensionId: n.identifier.id, galleryExtension: n };
        });
      return r.push(this.f("en", "English")), r;
    }
    f(t, i, s) {
      const r = i ?? t;
      let n;
      if ((r !== t && (n = `(${t})`), t.toLowerCase() === Oe.toLowerCase() && ((n ??= ""), (n += d(1993, null))), s?.installCount)) {
        n ??= "";
        const o = s.installCount;
        let a;
        o > 1e6 ? (a = `${Math.floor(o / 1e5) / 10}M`) : o > 1e3 ? (a = `${Math.floor(o / 1e3)}K`) : (a = String(o)), (n += ` $(cloud-download) ${a}`);
      }
      return { id: t, label: r, description: n };
    }
  };
qa = __decorate([__param(0, bi)], qa);
import * as am from "fs";
import { createHash as cm } from "crypto";
var Wa = class extends qa {
  constructor(t, i, s, r) {
    super(s), (this.h = t), (this.j = r), (this.g = this.B(new Ha(i, r))), this.h.registerParticipant({ postInstall: async (n) => this.m(n), postUninstall: async (n) => this.n(n) });
  }
  async getBuiltInExtensionTranslationsUri(t, i) {
    const r = (await this.g.getLanguagePacks())[i];
    if (!r) {
      this.j.warn(`No language pack found for ${i}`);
      return;
    }
    const n = r.translations[t];
    return n ? I.file(n) : void 0;
  }
  async getInstalledLanguages() {
    const t = await this.g.getLanguagePacks(),
      i = Object.keys(t).map((s) => {
        const r = t[s];
        return { ...this.f(s, r.label), extensionId: r.extensions[0].extensionIdentifier.id };
      });
    return i.push(this.f("en", "English")), i.sort((s, r) => s.label.localeCompare(r.label)), i;
  }
  async m(t) {
    t && t.manifest && t.manifest.contributes && t.manifest.contributes.localizations && t.manifest.contributes.localizations.length && (this.j.info("Adding language packs from the extension", t.identifier.id), await this.update());
  }
  async n(t) {
    const i = await this.g.getLanguagePacks();
    Object.keys(i).some((s) => i[s] && i[s].extensions.some((r) => J(r.extensionIdentifier, t.identifier))) && (this.j.info("Removing language packs from the extension", t.identifier.id), await this.update());
  }
  async update() {
    const [t, i] = await Promise.all([this.g.getLanguagePacks(), this.h.getInstalled()]),
      s = await this.g.update(i);
    return !Zi(Object.keys(t), Object.keys(s));
  }
};
Wa = __decorate([__param(0, ta), __param(1, ke), __param(2, bi), __param(3, ht)], Wa);
var Ha = class extends G {
  constructor(t, i) {
    super(), (this.j = i), (this.c = {}), (this.f = _(t.userDataPath, "languagepacks.json")), (this.g = new Bs());
  }
  getLanguagePacks() {
    return this.g.size || !this.h ? this.s().then(() => this.c) : Promise.resolve(this.c);
  }
  update(t) {
    return this.s((i) => {
      Object.keys(i).forEach((s) => delete i[s]), this.m(i, ...t);
    }).then(() => this.c);
  }
  m(t, ...i) {
    for (const s of i) s && s.manifest && s.manifest.contributes && s.manifest.contributes.localizations && s.manifest.contributes.localizations.length && this.n(t, s);
    Object.keys(t).forEach((s) => this.r(t[s]));
  }
  n(t, i) {
    const s = i.identifier,
      r = i.manifest.contributes && i.manifest.contributes.localizations ? i.manifest.contributes.localizations : [];
    for (const n of r)
      if (i.location.scheme === K.file && lm(n)) {
        let o = t[n.languageId];
        o || ((o = { hash: "", extensions: [], translations: {}, label: n.localizedLanguageName ?? n.languageName }), (t[n.languageId] = o));
        const a = o.extensions.filter((c) => J(c.extensionIdentifier, s))[0];
        a ? (a.version = i.manifest.version) : o.extensions.push({ extensionIdentifier: s, version: i.manifest.version });
        for (const c of n.translations) o.translations[c.id] = _(i.location.fsPath, c.path);
      }
  }
  r(t) {
    if (t) {
      const i = cm("md5");
      for (const s of t.extensions) i.update(s.extensionIdentifier.uuid || s.extensionIdentifier.id).update(s.version);
      t.hash = i.digest("hex");
    }
  }
  s(t = () => null) {
    return this.g.queue(() => {
      let i = null;
      return am.promises
        .readFile(this.f, "utf8")
        .then(void 0, (s) => (s.code === "ENOENT" ? Promise.resolve("{}") : Promise.reject(s)))
        .then((s) => {
          try {
            return JSON.parse(s);
          } catch {
            return {};
          }
        })
        .then((s) => ((i = t(s)), s))
        .then((s) => {
          for (const n of Object.keys(s)) s[n] || delete s[n];
          (this.c = s), (this.h = !0);
          const r = JSON.stringify(this.c);
          return this.j.debug("Writing language packs", r), pt.writeFile(this.f, r);
        })
        .then(
          () => i,
          (s) => this.j.error(s),
        );
    });
  }
};
Ha = __decorate([__param(0, ke), __param(1, ht)], Ha);
function lm(e) {
  if (typeof e.languageId != "string" || !Array.isArray(e.translations) || e.translations.length === 0) return !1;
  for (const t of e.translations) if (typeof t.id != "string" || typeof t.path != "string") return !1;
  return !((e.languageName && typeof e.languageName != "string") || (e.localizedLanguageName && typeof e.localizedLanguageName != "string"));
}
function hm(e, t) {
  const i = [];
  for (const s of new Set(Di.concat(e.keys(), t.keys()))) e.get(s) !== t.get(s) && i.push(s);
  return i;
}
var Ga = class extends wh {
  constructor(t, i, s) {
    super(), (this.m = t), (this.n = i), (this.s = s), (this.c = this.B(new Ci(500)));
    const r = at.filter(i.onDidFilesChange, (n) => n.affects(t));
    this.B(i.watch(t)), this.B(r(() => this.c.trigger(() => this.w())));
  }
  async j() {
    await this.w();
  }
  async u() {
    const t = new Map();
    try {
      const i = await this.n.readFile(this.m),
        s = JSON.parse(i.value.toString());
      if (!Ct(s)) throw new Error("Policy file isn't a JSON object");
      for (const r of Object.keys(s)) this.f[r] && t.set(r, s[r]);
    } catch (i) {
      i.fileOperationResult !== 1 && this.s.error("[FilePolicyService] Failed to read policies", i);
    }
    return t;
  }
  async w() {
    const t = await this.u(),
      i = hm(this.g, t);
    (this.g = t), i.length > 0 && this.h.fire(i);
  }
};
Ga = __decorate([__param(1, $t), __param(2, ht)], Ga);
var Ja = class extends wh {
  constructor(t, i) {
    super(), (this.m = t), (this.n = i), (this.a = new Dl()), (this.b = this.B(new kr()));
  }
  async j(t) {
    this.m.trace(`NativePolicyService#_updatePolicyDefinitions - Found ${Object.keys(t).length} policy definitions`);
    const { createWatcher: i } = await import("@vscode/policy-watcher");
    await this.a.queue(
      () =>
        new Promise((s, r) => {
          try {
            this.b.value = i(this.n, t, (n) => {
              this.t(n), s();
            });
          } catch (n) {
            this.m.error("NativePolicyService#_updatePolicyDefinitions - Error creating watcher:", n), r(n);
          }
        }),
    );
  }
  t(t) {
    this.m.trace(`NativePolicyService#_onDidPolicyChange - Updated policy values: ${JSON.stringify(t)}`);
    for (const i in t) {
      const s = t[i];
      s === void 0 ? this.g.delete(i) : this.g.set(i, s);
    }
    this.h.fire(Object.keys(t));
  }
};
Ja = __decorate([__param(0, ht)], Ja);
var Nt,
  Qa = globalThis.vscode;
if (typeof Qa < "u" && typeof Qa.context < "u") {
  const e = Qa.context.configuration();
  if (e) Nt = e.product;
  else throw new Error("Sandbox: unable to resolve product configuration from preload script.");
} else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
  if (
    ((Nt = globalThis._VSCODE_PRODUCT_JSON),
    wt.VSCODE_DEV &&
      Object.assign(Nt, {
        nameShort: `${Nt.nameShort} - Local`,
        nameLong: `${Nt.nameLong} - Local`,
        dataFolderName: `${Nt.dataFolderName}-local`,
        serverDataFolderName: Nt.serverDataFolderName ? `${Nt.serverDataFolderName}-local` : void 0,
      }),
    !Nt.version)
  ) {
    const e = globalThis._VSCODE_PACKAGE_JSON;
    Object.assign(Nt, { version: e.version });
  }
  wt.ICUBE_EXTENSIONS_GALLERY && Object.assign(Nt, { extensionsGallery: JSON.parse(wt.ICUBE_EXTENSIONS_GALLERY) });
} else
  (Nt = {}),
    Object.keys(Nt).length === 0 &&
      Object.assign(Nt, {
        version: "1.95.0-dev",
        nameShort: "Code - OSS Dev",
        nameLong: "Code - OSS Dev",
        applicationName: "code-oss",
        dataFolderName: ".vscode-oss",
        urlProtocol: "code-oss",
        reportIssueUrl: "https://github.com/microsoft/vscode/issues/new",
        licenseName: "MIT",
        licenseUrl: "https://github.com/microsoft/vscode/blob/main/LICENSE.txt",
        serverLicenseUrl: "https://github.com/microsoft/vscode/blob/main/LICENSE.txt",
      });
if (wt.IDE_ENVIRONMENT_ID) {
  const t = {
    id: wt.IDE_ENVIRONMENT_ID || "",
    owner: wt.IDE_OWNER || "",
    ideLang: wt.IDE_LANG || "",
    ideTemplate: wt.IDE_TEMPLATE || "",
    isBOE: (wt.CLOUDIDE_APISERVER_BASE_URL || "").includes("-boe."),
    apiServerBaseUrl: wt.IDE_APISERVER_BASE_URL || "",
    isBuilt: !wt.VSCODE_DEV,
    workspacePath: wt.CLOUDIDE_WORKSPACEPATH || "",
  };
  Object.assign(Nt, { devSpaceInfo: t });
}
Nt.iCubeApp || Object.assign(Nt, { iCubeApp: {} }), Object.assign(Nt.iCubeApp, { envInfo: { ...Nt.iCubeApp?.envInfo, sessionID: Kt() } }), Object.assign(Nt, { _onDidChangeConfig: new O() });
var $i = Nt;
import { parse as yf } from "url";
import { spawn as um } from "child_process";
import { userInfo as fm } from "os";
import * as dm from "os";
var bf = /^\d+$/,
  pm = /^Microsoft.PowerShell_.*/,
  gm = /^Microsoft.PowerShellPreview_.*/,
  Ef;
(function (e) {
  (e[(e.x64 = 0)] = "x64"), (e[(e.x86 = 1)] = "x86"), (e[(e.ARM = 2)] = "ARM");
})(Ef || (Ef = {}));
var hr;
switch (process.arch) {
  case "ia32":
    hr = 1;
    break;
  case "arm":
  case "arm64":
    hr = 2;
    break;
  default:
    hr = 0;
    break;
}
var Ss;
process.env.PROCESSOR_ARCHITEW6432 ? (Ss = process.env.PROCESSOR_ARCHITEW6432 === "ARM64" ? 2 : 0) : process.env.PROCESSOR_ARCHITECTURE === "ARM64" ? (Ss = 2) : process.env.PROCESSOR_ARCHITECTURE === "X86" ? (Ss = 1) : (Ss = 0);
var Pn = class {
  constructor(e, t, i) {
    (this.exePath = e), (this.displayName = t), (this.a = i);
  }
  async exists() {
    return this.a === void 0 && (this.a = await ye.existsFile(this.exePath)), this.a;
  }
};
function mm({ useAlternateBitness: e = !1 } = {}) {
  return e ? (hr === 0 ? process.env["ProgramFiles(x86)"] || null : (Ss === 0 && process.env.ProgramW6432) || null) : process.env.ProgramFiles || null;
}
async function kn({ useAlternateBitness: e = !1, findPreview: t = !1 } = {}) {
  const i = mm({ useAlternateBitness: e });
  if (!i) return null;
  const s = _(i, "PowerShell");
  if (!(await ye.existsDirectory(s))) return null;
  let r = -1,
    n = null;
  for (const c of await pt.readdir(s)) {
    let l = -1;
    if (t) {
      const u = c.indexOf("-");
      if (u < 0) continue;
      const f = c.substring(0, u);
      if (!bf.test(f) || c.substring(u + 1) !== "preview") continue;
      l = parseInt(f, 10);
    } else {
      if (!bf.test(c)) continue;
      l = parseInt(c, 10);
    }
    if (l <= r) continue;
    const h = _(s, c, "pwsh.exe");
    (await ye.existsFile(h)) && ((n = h), (r = l));
  }
  if (!n) return null;
  const o = i.includes("x86") ? " (x86)" : "",
    a = t ? " Preview" : "";
  return new Pn(n, `PowerShell${a}${o}`, !0);
}
async function xf({ findPreview: e } = {}) {
  if (!process.env.LOCALAPPDATA) return null;
  const t = _(process.env.LOCALAPPDATA, "Microsoft", "WindowsApps");
  if (!(await ye.existsDirectory(t))) return null;
  const { pwshMsixDirRegex: i, pwshMsixName: s } = e ? { pwshMsixDirRegex: gm, pwshMsixName: "PowerShell Preview (Store)" } : { pwshMsixDirRegex: pm, pwshMsixName: "PowerShell (Store)" };
  for (const r of await pt.readdir(t))
    if (i.test(r)) {
      const n = _(t, r, "pwsh.exe");
      return new Pn(n, s);
    }
  return null;
}
function wm() {
  const e = _(dm.homedir(), ".dotnet", "tools", "pwsh.exe");
  return new Pn(e, ".NET Core PowerShell Global Tool");
}
function vm() {
  const e = _(process.env.windir, hr === 1 && Ss !== 1 ? "SysNative" : "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
  return new Pn(e, "Windows PowerShell", !0);
}
async function* ym() {
  let e = await kn();
  e && (yield e),
    (e = await kn({ useAlternateBitness: !0 })),
    e && (yield e),
    (e = await xf()),
    e && (yield e),
    (e = wm()),
    e && (yield e),
    (e = await kn({ findPreview: !0 })),
    e && (yield e),
    (e = await xf({ findPreview: !0 })),
    e && (yield e),
    (e = await kn({ useAlternateBitness: !0, findPreview: !0 })),
    e && (yield e),
    (e = vm()),
    e && (yield e);
}
async function* bm() {
  for await (const e of ym()) (await e.exists()) && (yield e);
}
async function Em() {
  for await (const e of bm()) return e;
  return null;
}
async function xm(e, t) {
  return e === 1 ? (Rt ? $m() : z5(t)) : Sm(e, t);
}
var Xa = null;
function Sm(e, t) {
  if ((se && e === 2) || (Ze && e === 3)) return "/bin/bash";
  if (!Xa) {
    let i;
    if (Rt) i = "/bin/bash";
    else {
      if (((i = t.SHELL), !i))
        try {
          i = fm().shell;
        } catch {}
      i || (i = "sh"), i === "/bin/false" && (i = "/bin/bash");
    }
    Xa = i;
  }
  return Xa;
}
var Za = null;
async function $m() {
  return Za || (Za = (await Em()).exePath), Za;
}
import "assert";
var C9 = b1(E1(), 1),
  F9 = { o: d(1749, null), e: d(1750, null), t: d(1751, null) },
  T9 = {
    tunnel: {
      type: "subcommand",
      description: "Make the current machine accessible from vscode.dev or other machines through a secure tunnel",
      options: {
        "cli-data-dir": { type: "string", args: "dir", description: d(1752, null) },
        "disable-telemetry": { type: "boolean" },
        "telemetry-level": { type: "string" },
        user: { type: "subcommand", options: { login: { type: "subcommand", options: { provider: { type: "string" }, "access-token": { type: "string" } } } } },
      },
    },
    "serve-web": {
      type: "subcommand",
      description: "Run a server that displays the editor UI in browsers.",
      options: { "cli-data-dir": { type: "string", args: "dir", description: d(1753, null) }, "disable-telemetry": { type: "boolean" }, "telemetry-level": { type: "string" } },
    },
    diff: { type: "boolean", cat: "o", alias: "d", args: ["file", "file"], description: d(1754, null) },
    merge: { type: "boolean", cat: "o", alias: "m", args: ["path1", "path2", "base", "result"], description: d(1755, null) },
    add: { type: "boolean", cat: "o", alias: "a", args: "folder", description: d(1756, null) },
    goto: { type: "boolean", cat: "o", alias: "g", args: "file:line[:character]", description: d(1757, null) },
    "new-window": { type: "boolean", cat: "o", alias: "n", description: d(1758, null) },
    "reuse-window": { type: "boolean", cat: "o", alias: "r", description: d(1759, null) },
    wait: { type: "boolean", cat: "o", alias: "w", description: d(1760, null) },
    waitMarkerFilePath: { type: "string" },
    locale: { type: "string", cat: "o", args: "locale", description: d(1761, null) },
    "user-data-dir": { type: "string", cat: "o", args: "dir", description: d(1762, null) },
    profile: { type: "string", cat: "o", args: "profileName", description: d(1763, null) },
    help: { type: "boolean", cat: "o", alias: "h", description: d(1764, null) },
    "extensions-dir": { type: "string", deprecates: ["extensionHomePath"], cat: "e", args: "dir", description: d(1765, null) },
    "extensions-download-dir": { type: "string" },
    "builtin-extensions-dir": { type: "string" },
    "list-extensions": { type: "boolean", cat: "e", description: d(1766, null) },
    "show-versions": { type: "boolean", cat: "e", description: d(1767, null) },
    category: { type: "string", allowEmptyValue: !0, cat: "e", description: d(1768, null), args: "category" },
    "install-extension": { type: "string[]", cat: "e", args: "ext-id | path", description: d(1769, null) },
    "pre-release": { type: "boolean", cat: "e", description: d(1770, null) },
    "uninstall-extension": { type: "string[]", cat: "e", args: "ext-id", description: d(1771, null) },
    "update-extensions": { type: "boolean", cat: "e", description: d(1772, null) },
    "enable-proposed-api": { type: "string[]", allowEmptyValue: !0, cat: "e", args: "ext-id", description: d(1773, null) },
    version: { type: "boolean", cat: "t", alias: "v", description: d(1774, null) },
    verbose: { type: "boolean", cat: "t", global: !0, description: d(1775, null) },
    log: { type: "string[]", cat: "t", args: "level", global: !0, description: d(1776, null) },
    status: { type: "boolean", alias: "s", cat: "t", description: d(1777, null) },
    "prof-startup": { type: "boolean", cat: "t", description: d(1778, null) },
    "prof-append-timers": { type: "string" },
    "prof-duration-markers": { type: "string[]" },
    "prof-duration-markers-file": { type: "string" },
    "no-cached-data": { type: "boolean" },
    "prof-startup-prefix": { type: "string" },
    "prof-v8-extensions": { type: "boolean" },
    "disable-extensions": { type: "boolean", deprecates: ["disableExtensions"], cat: "t", description: d(1779, null) },
    "disable-extension": { type: "string[]", cat: "t", args: "ext-id", description: d(1780, null) },
    sync: { type: "string", cat: "t", description: d(1781, null), args: ["on | off"] },
    "inspect-extensions": { type: "string", allowEmptyValue: !0, deprecates: ["debugPluginHost"], args: "port", cat: "t", description: d(1782, null) },
    "inspect-brk-extensions": { type: "string", allowEmptyValue: !0, deprecates: ["debugBrkPluginHost"], args: "port", cat: "t", description: d(1783, null) },
    "disable-lcd-text": { type: "boolean", cat: "t", description: d(1784, null) },
    "disable-gpu": { type: "boolean", cat: "t", description: d(1785, null) },
    "disable-chromium-sandbox": { type: "boolean", cat: "t", description: d(1786, null) },
    sandbox: { type: "boolean" },
    telemetry: { type: "boolean", cat: "t", description: d(1787, null) },
    remote: { type: "string", allowEmptyValue: !0 },
    "folder-uri": { type: "string[]", cat: "o", args: "uri" },
    "file-uri": { type: "string[]", cat: "o", args: "uri" },
    "locate-extension": { type: "string[]" },
    extensionDevelopmentPath: { type: "string[]" },
    extensionDevelopmentKind: { type: "string[]" },
    extensionTestsPath: { type: "string" },
    extensionEnvironment: { type: "string" },
    debugId: { type: "string" },
    debugRenderer: { type: "boolean" },
    "inspect-ptyhost": { type: "string", allowEmptyValue: !0 },
    "inspect-brk-ptyhost": { type: "string", allowEmptyValue: !0 },
    "inspect-search": { type: "string", deprecates: ["debugSearch"], allowEmptyValue: !0 },
    "inspect-brk-search": { type: "string", deprecates: ["debugBrkSearch"], allowEmptyValue: !0 },
    "inspect-sharedprocess": { type: "string", allowEmptyValue: !0 },
    "inspect-brk-sharedprocess": { type: "string", allowEmptyValue: !0 },
    "export-default-configuration": { type: "string" },
    "install-source": { type: "string" },
    "enable-smoke-test-driver": { type: "boolean" },
    logExtensionHostCommunication: { type: "boolean" },
    "skip-release-notes": { type: "boolean" },
    "skip-welcome": { type: "boolean" },
    "disable-telemetry": { type: "boolean" },
    "disable-updates": { type: "boolean" },
    "use-inmemory-secretstorage": { type: "boolean", deprecates: ["disable-keytar"] },
    "password-store": { type: "string" },
    "disable-workspace-trust": { type: "boolean" },
    "disable-crash-reporter": { type: "boolean" },
    "crash-reporter-directory": { type: "string" },
    "crash-reporter-id": { type: "string" },
    "skip-add-to-recently-opened": { type: "boolean" },
    "open-url": { type: "boolean" },
    "file-write": { type: "boolean" },
    "file-chmod": { type: "boolean" },
    "install-builtin-extension": { type: "string[]" },
    force: { type: "boolean" },
    "do-not-sync": { type: "boolean" },
    trace: { type: "boolean" },
    "trace-category-filter": { type: "string" },
    "trace-options": { type: "string" },
    "preserve-env": { type: "boolean" },
    "force-user-env": { type: "boolean" },
    "force-disable-user-env": { type: "boolean" },
    "open-devtools": { type: "boolean" },
    "disable-gpu-sandbox": { type: "boolean" },
    logsPath: { type: "string" },
    extHostLogsPath: { type: "string" },
    "__enable-file-policy": { type: "boolean" },
    editSessionId: { type: "string" },
    continueOn: { type: "string" },
    "locate-shell-integration-path": { type: "string", args: ["bash", "pwsh", "zsh", "fish"] },
    "enable-coi": { type: "boolean" },
    "no-proxy-server": { type: "boolean" },
    "no-sandbox": { type: "boolean", alias: "sandbox" },
    "proxy-server": { type: "string" },
    "proxy-bypass-list": { type: "string" },
    "proxy-pac-url": { type: "string" },
    "js-flags": { type: "string" },
    inspect: { type: "string", allowEmptyValue: !0 },
    "inspect-brk": { type: "string", allowEmptyValue: !0 },
    nolazy: { type: "boolean" },
    "force-device-scale-factor": { type: "string" },
    "force-renderer-accessibility": { type: "boolean" },
    "ignore-certificate-errors": { type: "boolean" },
    "allow-insecure-localhost": { type: "boolean" },
    "log-net-log": { type: "string" },
    vmodule: { type: "string" },
    _urls: { type: "string[]" },
    "disable-dev-shm-usage": { type: "boolean" },
    "profile-temp": { type: "boolean" },
    "ozone-platform": { type: "string" },
    "enable-tracing": { type: "string" },
    "trace-startup-format": { type: "string" },
    "trace-startup-file": { type: "string" },
    "trace-startup-duration": { type: "string" },
    _: { type: "string[]" },
  };
function Sf(e) {
  return e.VSCODE_CLI === "1";
}
function Im(e, t, i) {
  return Math.min(Math.max(e, t), i);
}
var Ya = void 0;
async function Pm(e, t, i, s) {
  return i["force-disable-user-env"]
    ? (t.trace("resolveShellEnv(): skipped (--force-disable-user-env)"), {})
    : Rt
      ? (t.trace("resolveShellEnv(): skipped (Windows)"), {})
      : Sf(s) && !i["force-user-env"]
        ? (t.trace("resolveShellEnv(): skipped (VSCODE_CLI is set)"), {})
        : (Sf(s) ? t.trace("resolveShellEnv(): running (--force-user-env)") : t.trace("resolveShellEnv(): running (macOS/Linux)"),
          Ya ||
            (Ya = me.withAsyncBody(async (r, n) => {
              const o = new ts();
              let a = 3e4;
              const c = e.getValue("application.shellEnvironmentResolutionTimeout");
              typeof c == "number" && (a = Im(c, 1, 120) * 1e3);
              const l = setTimeout(() => {
                o.dispose(!0), n(new Error(d(2155, null)));
              }, a);
              try {
                r(await km(t, o.token));
              } catch (h) {
                !Qi(h) && !o.token.isCancellationRequested ? n(new Error(d(2156, null, gi(h)))) : r({});
              } finally {
                clearTimeout(l), o.dispose();
              }
            })),
          Ya);
}
async function km(e, t) {
  const i = process.env.ELECTRON_RUN_AS_NODE;
  e.trace("getUnixShellEnvironment#runAsNode", i);
  const s = process.env.ELECTRON_NO_ATTACH_CONSOLE;
  e.trace("getUnixShellEnvironment#noAttach", s);
  const r = Kt().replace(/-/g, "").substr(0, 12),
    n = new RegExp(r + "({.*})" + r),
    o = { ...process.env, ELECTRON_RUN_AS_NODE: "1", ELECTRON_NO_ATTACH_CONSOLE: "1", VSCODE_RESOLVING_ENVIRONMENT: "1" };
  e.trace("getUnixShellEnvironment#env", o);
  const a = await xm(Yn, o);
  return (
    e.trace("getUnixShellEnvironment#shell", a),
    new Promise((c, l) => {
      if (t.isCancellationRequested) return l(new Tt());
      const h = Ie(a);
      let u, f;
      const p = "";
      /^pwsh(-preview)?$/.test(h)
        ? ((u = `& '${process.execPath}' ${p} -p '''${r}'' + JSON.stringify(process.env) + ''${r}'''`), (f = ["-Login", "-Command"]))
        : h === "nu"
          ? ((u = `^'${process.execPath}' ${p} -p '"${r}" + JSON.stringify(process.env) + "${r}"'`), (f = ["-i", "-l", "-c"]))
          : h === "xonsh"
            ? ((u = `import os, json; print("${r}", json.dumps(dict(os.environ)), "${r}")`), (f = ["-i", "-l", "-c"]))
            : ((u = `'${process.execPath}' ${p} -p '"${r}" + JSON.stringify(process.env) + "${r}"'`), h === "tcsh" || h === "csh" ? (f = ["-ic"]) : (f = ["-i", "-l", "-c"])),
        e.trace("getUnixShellEnvironment#spawn", JSON.stringify(f), u);
      const w = um(a, [...f, u], { detached: !0, stdio: ["ignore", "pipe", "pipe"], env: o });
      t.onCancellationRequested(() => (w.kill(), l(new Tt()))),
        w.on("error", (v) => {
          e.error("getUnixShellEnvironment#errorChildProcess", gi(v)), l(v);
        });
      const m = [];
      w.stdout.on("data", (v) => m.push(v));
      const y = [];
      w.stderr.on("data", (v) => y.push(v)),
        w.on("close", (v, S) => {
          const D = Buffer.concat(m).toString("utf8");
          e.trace("getUnixShellEnvironment#raw", D);
          const x = Buffer.concat(y).toString("utf8");
          if ((x.trim() && e.trace("getUnixShellEnvironment#stderr", x), v || S)) return l(new Error(d(2157, null, v, S)));
          const L = n.exec(D),
            T = L ? L[1] : "{}";
          try {
            const H = JSON.parse(T);
            i ? (H.ELECTRON_RUN_AS_NODE = i) : delete H.ELECTRON_RUN_AS_NODE,
              s ? (H.ELECTRON_NO_ATTACH_CONSOLE = s) : delete H.ELECTRON_NO_ATTACH_CONSOLE,
              delete H.VSCODE_RESOLVING_ENVIRONMENT,
              delete H.XDG_RUNTIME_DIR,
              e.trace("getUnixShellEnvironment#result", H),
              c(H);
          } catch (H) {
            e.error("getUnixShellEnvironment#errorCaught", gi(H)), l(H);
          }
        });
    })
  );
}
import { parse as $f } from "url";
function Am(e, t) {
  return e.protocol === "http:" ? t.HTTP_PROXY || t.http_proxy || null : (e.protocol === "https:" && (t.HTTPS_PROXY || t.https_proxy || t.HTTP_PROXY || t.http_proxy)) || null;
}
async function Dm(e, t, i = {}) {
  const s = $f(e),
    r = i.proxyUrl || Am(s, t);
  if (!r) return null;
  const n = $f(r);
  if (!/^https?:$/.test(n.protocol || "")) return null;
  const o = { host: n.hostname || "", port: (n.port ? +n.port : 0) || (n.protocol === "https" ? 443 : 80), auth: n.auth, rejectUnauthorized: di(i.strictSSL) ? i.strictSSL : !0 };
  if (s.protocol === "http:") {
    const { default: a } = await import("http-proxy-agent");
    return new a.HttpProxyAgent(r, o);
  } else {
    const { default: a } = await import("https-proxy-agent");
    return new a.HttpsProxyAgent(r, o);
  }
}
import { createGunzip as Rm } from "zlib";
var Ka = class extends H0 {
  constructor(t, i, s) {
    super(s),
      (this.m = t),
      (this.n = i),
      this.r(),
      this.B(
        t.onDidChangeConfiguration((r) => {
          r.affectsConfiguration("http") && this.r();
        }),
      );
  }
  r() {
    const t = this.m.getValue("http");
    (this.f = t?.proxy), (this.g = !!t?.proxyStrictSSL), (this.h = t?.proxyAuthorization);
  }
  async request(t, i) {
    const { f: s, g: r } = this;
    let n;
    try {
      n = await Pm(this.m, this.b, this.n.args, process.env);
    } catch (c) {
      this.j || ((this.j = !0), this.b.error("resolving shell environment failed", st(c)));
    }
    const o = { ...process.env, ...n },
      a = t.agent ? t.agent : await Dm(t.url || "", o, { proxyUrl: s, strictSSL: r });
    return (t.agent = a), (t.strictSSL = r), this.h && (t.headers = { ...(t.headers || {}), "Proxy-Authorization": this.h }), this.c(t, () => If(t, i));
  }
  async resolveProxy(t) {}
  async lookupAuthorization(t) {}
  async lookupKerberosAuthorization(t) {
    try {
      const i = await import("kerberos"),
        s = new URL(t),
        r = this.m.getValue("http.proxyKerberosServicePrincipal") || (process.platform === "win32" ? `HTTP/${s.hostname}` : `HTTP@${s.hostname}`);
      return this.b.debug("RequestService#lookupKerberosAuthorization Kerberos authentication lookup", `proxyURL:${s}`, `spn:${r}`), "Negotiate " + (await (await i.initializeClient(r)).step(""));
    } catch (i) {
      this.b.debug("RequestService#lookupKerberosAuthorization Kerberos authentication failed", i);
      return;
    }
  }
  async loadCertificates() {
    return (await import("@vscode/proxy-agent")).loadSystemCertificates({ log: this.b });
  }
};
Ka = __decorate([__param(0, Fi), __param(1, ke), __param(2, ht)], Ka);
async function Lm(e) {
  return (yf(e.url).protocol === "https:" ? await import("https") : await import("http")).request;
}
async function If(e, t) {
  return me.withAsyncBody(async (i, s) => {
    const r = yf(e.url),
      n = e.getRawRequest ? e.getRawRequest(e) : await Lm(e),
      o = {
        hostname: r.hostname,
        port: r.port ? parseInt(r.port) : r.protocol === "https:" ? 443 : 80,
        protocol: r.protocol,
        path: r.path,
        method: e.type || "GET",
        headers: e.headers,
        agent: e.agent,
        rejectUnauthorized: di(e.strictSSL) ? e.strictSSL : !0,
      };
    e.user && e.password && (o.auth = e.user + ":" + e.password);
    const a = n(o, (c) => {
      const l = fl(e.followRedirects) ? e.followRedirects : 3;
      if (c.statusCode && c.statusCode >= 300 && c.statusCode < 400 && l > 0 && c.headers.location) If({ ...e, url: c.headers.location, followRedirects: l - 1 }, t).then(i, s);
      else {
        let h = c;
        !e.isChromiumNetwork && c.headers["content-encoding"] === "gzip" && (h = c.pipe(Rm())), i({ res: c, stream: _p(h) });
      }
    });
    a.on("error", s),
      e.timeout && a.setTimeout(e.timeout),
      e.isChromiumNetwork && a.removeHeader("Content-Length"),
      e.data && typeof e.data == "string" && a.write(e.data),
      a.end(),
      t.onCancellationRequested(() => {
        a.abort(), s(new Tt());
      });
  });
}
var Pf;
(function (e) {
  (e[(e.IMMEDIATE = 0)] = "IMMEDIATE"), (e[(e.DELAYED = 1)] = "DELAYED");
})(Pf || (Pf = {}));
var Om = class extends G {
    constructor(e, t, i, s) {
      super(), (this.h = e), (this.j = t), (this.m = i), (this.n = s), (this.a = Object.create(null)), (this.b = ""), (this.c = this.B(new Ci(this.j === 0 ? 0 : 100))), (this.f = void 0), (this.g = void 0);
    }
    init() {
      return this.f || (this.f = this.r()), this.f;
    }
    async r() {
      try {
        (this.b = (await this.n.readFile(this.h)).value.toString()), (this.a = JSON.parse(this.b));
      } catch (e) {
        e.fileOperationResult !== 1 && this.m.error(e);
      }
    }
    getItem(e, t) {
      const i = this.a[e];
      return Xt(i) ? t : i;
    }
    setItem(e, t) {
      this.setItems([{ key: e, data: t }]);
    }
    setItems(e) {
      let t = !1;
      for (const { key: i, data: s } of e) this.a[i] !== s && (Xt(s) ? Ye(this.a[i]) || ((this.a[i] = void 0), (t = !0)) : ((this.a[i] = s), (t = !0)));
      t && this.s();
    }
    removeItem(e) {
      Ye(this.a[e]) || ((this.a[e] = void 0), this.s());
    }
    async s() {
      if (!this.g) return this.c.trigger(() => this.t());
    }
    async t() {
      if (!this.f) return;
      await this.f;
      const e = JSON.stringify(this.a, null, 4);
      if (e !== this.b)
        try {
          await this.n.writeFile(this.h, B.fromString(e), { atomic: { postfix: ".vsctmp" } }), (this.b = e);
        } catch (t) {
          this.m.error(t);
        }
    }
    async close() {
      return this.g || (this.g = this.c.trigger(() => this.t(), 0)), this.g;
    }
  },
  An = class extends G {
    constructor(t, i, s, r) {
      super(), (this.a = this.B(new Om(i.stateResource, t, s, r)));
    }
    async init() {
      await this.a.init();
    }
    getItem(t, i) {
      return this.a.getItem(t, i);
    }
  };
An = __decorate([__param(1, ri), __param(2, ht), __param(3, $t)], An);
var Nm = class extends An {
    setItem(e, t) {
      this.a.setItem(e, t);
    }
    setItems(e) {
      this.a.setItems(e);
    }
    removeItem(e) {
      this.a.removeItem(e);
    }
    close() {
      return this.a.close();
    }
  },
  tc = class {
    static {
      this.IDLE_START_EVENT_NAME = "UserIdleStart";
    }
    static {
      this.IDLE_STOP_EVENT_NAME = "UserIdleStop";
    }
    constructor(t, i, s) {
      (this.k = i),
        (this.l = s),
        (this.d = {}),
        (this.i = new ue()),
        (this.j = []),
        (this.b = t.appenders),
        (this.c = t.commonProperties ?? Object.create(null)),
        (this.sessionId = this.c.sessionID),
        (this.machineId = this.c["common.machineId"]),
        (this.sqmId = this.c["common.sqmId"]),
        (this.devDeviceId = this.c["common.devDeviceId"]),
        (this.firstSessionDate = this.c["common.firstSessionDate"]),
        (this.msftInternal = this.c["common.msftInternal"]),
        (this.f = t.piiPaths || []),
        (this.g = 3),
        (this.h = !!t.sendErrorTelemetry),
        (this.j = [/(vscode-)?file:\/\/\/.*?\/resources\/app\//gi]);
      for (const r of this.f) this.j.push(new RegExp(Ms(r), "gi")), r.indexOf("\\") >= 0 && this.j.push(new RegExp(Ms(r.replace(/\\/g, "/")), "gi"));
      this.m(),
        this.i.add(
          this.k.onDidChangeConfiguration((r) => {
            (r.affectsConfiguration(cn) || r.affectsConfiguration(ea) || r.affectsConfiguration(Zh)) && this.m();
          }),
        );
    }
    setExperimentProperty(t, i) {
      this.d[t] = i;
    }
    m() {
      let t = eu(this.k);
      const i = this.l.enabledTelemetryLevels;
      if (i) {
        this.h = this.sendErrorTelemetry ? i.error : !1;
        const s = i.usage ? 3 : i.error ? 2 : 0;
        t = Math.min(t, s);
      }
      this.g = t;
    }
    get sendErrorTelemetry() {
      return this.h;
    }
    get telemetryLevel() {
      return this.g;
    }
    dispose() {
      this.i.dispose();
    }
    n(t, i, s) {
      this.g < i || ((s = Hs(s, this.d)), (s = Tg(s, this.j)), (s = Hs(s, this.c)), (s = Hs(s, { build_version: this.l.tronBuildVersion })), this.b.forEach((r) => r.log(t, s)));
    }
    publicLog(t, i) {
      this.n(t, 3, i);
    }
    publicLog2(t, i) {
      this.publicLog(t, i);
    }
    publicLogError(t, i) {
      this.h && this.n(t, 2, i);
    }
    publicLogError2(t, i) {
      this.publicLogError(t, i);
    }
  };
tc = __decorate([__param(1, Fi), __param(2, Te)], tc);
function Cm() {
  const e = d(2159, null, $i.nameLong),
    t = $i.privacyStatementUrl ? d(2161, null, "https://aka.ms/vscode-telemetry", $i.privacyStatementUrl) : d(2160, null, "https://aka.ms/vscode-telemetry"),
    i = fe ? "" : d(2162, null),
    s = d(2163, null),
    r = d(2164, null),
    n = d(2165, null),
    o = d(2166, null),
    a = `
|       | ${s} | ${r} | ${n} |
|:------|:---------------------:|:---------------:|:--------------:|
| all   |            \u2713          |        \u2713        |        \u2713       |
| error |            \u2713          |        \u2713        |        -       |
| crash |            \u2713          |        -        |        -       |
| off   |            -          |        -        |        -       |
`,
    c = d(2167, null);
  return `
${e} ${t} ${i}

&nbsp;

${o}
${a}

&nbsp;

${c}
`;
}
Ee.as(Fe.Configuration).registerConfiguration({
  id: Xh,
  order: 1,
  type: "object",
  title: d(2168, null),
  properties: {
    [cn]: {
      type: "string",
      enum: ["all", "error", "crash", "off"],
      enumDescriptions: [d(2169, null), d(2170, null), d(2171, null), d(2172, null)],
      markdownDescription: Cm(),
      default: "all",
      restricted: !0,
      scope: 1,
      tags: ["usesOnlineServices", "telemetry"],
    },
  },
}),
  Ee.as(Fe.Configuration).registerConfiguration({
    id: Xh,
    order: 110,
    type: "object",
    title: d(2173, null),
    properties: {
      [ea]: {
        type: "boolean",
        markdownDescription: $i.privacyStatementUrl ? d(2175, null, $i.nameLong, $i.privacyStatementUrl) : d(2174, null, $i.nameLong),
        default: !0,
        restricted: !0,
        markdownDeprecationMessage: d(2176, null, `\`#${cn}#\``),
        scope: 1,
        tags: ["usesOnlineServices", "telemetry"],
      },
    },
  });
import * as Fm from "https";
var Tm = !1,
  Mm = class {
    constructor(e, t, i) {
      (this.id = e), (this.dependencies = t), (this.callback = i);
    }
  },
  qi;
(function (e) {
  (e[(e.Uninitialized = 1)] = "Uninitialized"), (e[(e.InitializedInternal = 2)] = "InitializedInternal"), (e[(e.InitializedExternal = 3)] = "InitializedExternal");
})(qi || (qi = {}));
var _m = class l1 {
    static {
      this.INSTANCE = new l1();
    }
    constructor() {
      (this.a = typeof self == "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope"), (this.b = typeof document == "object"), (this.c = []), (this.d = qi.Uninitialized);
    }
    g() {
      if (this.d === qi.Uninitialized) {
        if (globalThis.define) {
          this.d = qi.InitializedExternal;
          return;
        }
      } else return;
      (this.d = qi.InitializedInternal),
        (globalThis.define = (t, i, s) => {
          typeof t != "string" && ((s = i), (i = t), (t = null)), (typeof i != "object" || !Array.isArray(i)) && ((s = i), (i = null)), this.c.push(new Mm(t, i, s));
        }),
        (globalThis.define.amd = !0),
        this.b
          ? (this.f =
              globalThis._VSCODE_WEB_PACKAGE_TTP ??
              window.trustedTypes?.createPolicy("amdLoader", {
                createScriptURL(t) {
                  if (t.startsWith(window.location.origin) || t.startsWith(`${K.vscodeFileResource}://${xl}`)) return t;
                  throw new Error(`[trusted_script_src] Invalid script url: ${t}`);
                },
              }))
          : this.a &&
            (this.f =
              globalThis._VSCODE_WEB_PACKAGE_TTP ??
              globalThis.trustedTypes?.createPolicy("amdLoader", {
                createScriptURL(t) {
                  return t;
                },
              }));
    }
    async load(t) {
      if ((this.g(), this.d === qi.InitializedExternal))
        return new Promise((o) => {
          const a = Kt();
          globalThis.define(a, [t], function (c) {
            o(c);
          });
        });
      const i = await (this.a ? this.i(t) : this.b ? this.h(t) : this.j(t));
      if (!i) {
        console.warn(`Did not receive a define call from script ${t}`);
        return;
      }
      const s = {},
        r = [],
        n = [];
      if (Array.isArray(i.dependencies)) for (const o of i.dependencies) o === "exports" ? r.push(s) : n.push(o);
      if (n.length > 0) throw new Error(`Cannot resolve dependencies for script ${t}. The dependencies are: ${n.join(", ")}`);
      return typeof i.callback == "function" ? (i.callback(...r) ?? s) : i.callback;
    }
    h(t) {
      return new Promise((i, s) => {
        const r = document.createElement("script");
        r.setAttribute("async", "async"), r.setAttribute("type", "text/javascript");
        const n = () => {
            r.removeEventListener("load", o), r.removeEventListener("error", a);
          },
          o = (c) => {
            n(), i(this.c.pop());
          },
          a = (c) => {
            n(), s(c);
          };
        r.addEventListener("load", o), r.addEventListener("error", a), this.f && (t = this.f.createScriptURL(t)), r.setAttribute("src", t), window.document.getElementsByTagName("head")[0].appendChild(r);
      });
    }
    async i(t) {
      return this.f && (t = this.f.createScriptURL(t)), await import(t), this.c.pop();
    }
    async j(t) {
      try {
        const i = (await import("fs")).default,
          s = (await import("vm")).default,
          r = (await import("module")).default,
          n = I.parse(t).fsPath,
          o = i.readFileSync(n).toString(),
          a = r.wrap(o.replace(/^#!.*/, ""));
        return new s.Script(a).runInThisContext().apply(), this.c.pop();
      } catch (i) {
        throw i;
      }
    }
  },
  ec = new Map();
async function kf(e, t, i) {
  i === void 0 && (i = !!(globalThis._VSCODE_PRODUCT_JSON ?? globalThis.vscode?.context?.configuration()?.product)?.commit);
  const s = t ? `${e}/${t}` : e;
  if (ec.has(s)) return ec.get(s);
  let r;
  if (/^\w[\w\d+.-]*:\/\//.test(s)) r = s;
  else {
    const c = `${Tm && i && !fe ? ip : ep}/${s}`;
    r = js.asBrowserUri(c).toString(!0);
  }
  const n = _m.INSTANCE.load(r);
  return ec.set(s, n), n;
}
var Af = "https://mobile.events.data.microsoft.com/OneCollector/1.0",
  Um = "https://mobile.events.data.microsoft.com/ping";
async function jm(e, t, i) {
  const s = fe ? await kf("@microsoft/1ds-core-js", "bundle/ms.core.min.js") : await import("@microsoft/1ds-core-js"),
    r = fe ? await kf("@microsoft/1ds-post-js", "bundle/ms.post.min.js") : await import("@microsoft/1ds-post-js"),
    n = new s.AppInsightsCore(),
    o = new r.PostChannel(),
    a = { instrumentationKey: e, endpointUrl: Af, loggingLevelTelemetry: 0, loggingLevelConsole: 0, disableCookiesUsage: !0, disableDbgExt: !0, disableInstrumentationKeyValidation: !0, channels: [[o]] };
  if (i) {
    a.extensionConfig = {};
    const c = { alwaysUseXhrOverride: !0, ignoreMc1Ms0CookieProcessing: !0, httpXHROverride: i };
    a.extensionConfig[o.identifier] = c;
  }
  return (
    n.initialize(a, []),
    n.addTelemetryInitializer((c) => {
      (c.ext = c.ext ?? {}), (c.ext.web = c.ext.web ?? {}), (c.ext.web.consentDetails = '{"GPC_DataSharingOptIn":false}'), t && ((c.ext.utc = c.ext.utc ?? {}), (c.ext.utc.flags = 8462029));
    }),
    n
  );
}
var Vm = class {
  constructor(e, t, i, s, r) {
    (this.e = e), (this.f = t), (this.g = i), (this.h = r), (this.c = Af), (this.d = Um), this.g || (this.g = {}), typeof s == "function" ? (this.a = s()) : (this.a = s), (this.b = null);
  }
  i(e) {
    if (this.a) {
      if (typeof this.a != "string") {
        e(this.a);
        return;
      }
      this.b || (this.b = jm(this.a, this.e, this.h)),
        this.b.then(
          (t) => {
            e(t);
          },
          (t) => {
            Le(t), console.error(t);
          },
        );
    }
  }
  log(e, t) {
    if (!this.a) return;
    (t = Hs(t, this.g)), (t = Lg(t));
    const i = this.f + "/" + e;
    try {
      this.i((s) => {
        (s.pluginVersionString = t?.properties.version ?? "Unknown"), s.track({ name: i, baseData: { name: i, properties: t?.properties, measurements: t?.measurements } });
      });
    } catch {}
  }
  flush() {
    return this.a
      ? new Promise((e) => {
          this.i((t) => {
            t.unload(!0, () => {
              (this.a = void 0), e(void 0);
            });
          });
        })
      : Promise.resolve(void 0);
  }
};
async function Bm(e, t) {
  const i = await t.request(e, lt.None),
    s = (await Ti(i.stream)).toString(),
    r = i.res.statusCode ?? 200;
  return { headers: i.res.headers, statusCode: r, responseData: s };
}
async function zm(e) {
  const t = { method: e.type, headers: e.headers };
  return new Promise((s, r) => {
    const n = Fm.request(e.url ?? "", t, (o) => {
      o.on("data", function (a) {
        s({ headers: o.headers, statusCode: o.statusCode ?? 200, responseData: a.toString() });
      }),
        o.on("error", function (a) {
          r(a);
        });
    });
    n.write(e.data, (o) => {
      o && r(o);
    }),
      n.end();
  });
}
async function qm(e, t, i) {
  const s = typeof t.data == "string" ? t.data : new TextDecoder().decode(t.data),
    r = { type: "POST", headers: { ...t.headers, "Content-Type": "application/json", "Content-Length": Buffer.byteLength(t.data).toString() }, url: t.urlString, data: s };
  try {
    const n = e ? await Bm(r, e) : await zm(r);
    i(n.statusCode, n.headers, n.responseData);
  } catch {
    i(0, {});
  }
}
var Wm = class extends Vm {
  constructor(e, t, i, s, r) {
    const n = {
      sendPOST: (o, a) => {
        qm(e, o, a);
      },
    };
    super(t, i, s, r, n);
  }
};
import * as Dn from "fs";
async function Hm(e, t) {
  const i = Object.create(null),
    s = (n, o) => {
      const a = JSON.parse(n);
      i[o] = a;
    };
  if (t) {
    const n = [],
      o = await pt.readdir(t);
    for (const c of o)
      try {
        (await Dn.promises.stat(_(t, c))).isDirectory() && n.push(c);
      } catch {}
    const a = [];
    for (const c of n) (await pt.readdir(_(t, c))).filter((h) => h === "telemetry.json").length === 1 && a.push(c);
    for (const c of a) {
      const l = (await Dn.promises.readFile(_(t, c, "telemetry.json"))).toString();
      s(l, c);
    }
  }
  let r = (await Dn.promises.readFile(_(e, "telemetry-core.json"))).toString();
  return s(r, "vscode-core"), (r = (await Dn.promises.readFile(_(e, "telemetry-extensions.json"))).toString()), s(r, "vscode-extensions"), JSON.stringify(i, null, 4);
}
var Gm = [],
  Df;
(function (e) {
  (e[(e.Eager = 0)] = "Eager"), (e[(e.Delayed = 1)] = "Delayed");
})(Df || (Df = {}));
function Jm(e, t, i) {
  t instanceof ee || (t = new ee(t, [], !!i)), Gm.push([e, t]);
}
var Rf,
  ic = class {
    constructor(e, t, i) {
      (this.level = e), (this.key = t), (this.value = i), (this.forward = []);
    }
  },
  ur = void 0,
  Qm = class Ps {
    constructor(t, i = 2 ** 16) {
      (this.comparator = t), (this[Rf] = "SkipList"), (this.d = 0), (this.f = 0), (this.c = Math.max(1, Math.log2(i) | 0)), (this.e = new ic(this.c, ur, ur));
    }
    get size() {
      return this.f;
    }
    clear() {
      (this.e = new ic(this.c, ur, ur)), (this.f = 0);
    }
    has(t) {
      return !!Ps.g(this, t, this.comparator);
    }
    get(t) {
      return Ps.g(this, t, this.comparator)?.value;
    }
    set(t, i) {
      return Ps.h(this, t, i, this.comparator) && (this.f += 1), this;
    }
    delete(t) {
      const i = Ps.k(this, t, this.comparator);
      return i && (this.f -= 1), i;
    }
    forEach(t, i) {
      let s = this.e.forward[0];
      for (; s; ) t.call(i, s.value, s.key, this), (s = s.forward[0]);
    }
    [((Rf = Symbol.toStringTag), Symbol.iterator)]() {
      return this.entries();
    }
    *entries() {
      let t = this.e.forward[0];
      for (; t; ) yield [t.key, t.value], (t = t.forward[0]);
    }
    *keys() {
      let t = this.e.forward[0];
      for (; t; ) yield t.key, (t = t.forward[0]);
    }
    *values() {
      let t = this.e.forward[0];
      for (; t; ) yield t.value, (t = t.forward[0]);
    }
    toString() {
      let t = "[SkipList]:",
        i = this.e.forward[0];
      for (; i; ) (t += `node(${i.key}, ${i.value}, lvl:${i.level})`), (i = i.forward[0]);
      return t;
    }
    static g(t, i, s) {
      let r = t.e;
      for (let n = t.d - 1; n >= 0; n--) for (; r.forward[n] && s(r.forward[n].key, i) < 0; ) r = r.forward[n];
      if (((r = r.forward[0]), r && s(r.key, i) === 0)) return r;
    }
    static h(t, i, s, r) {
      const n = [];
      let o = t.e;
      for (let a = t.d - 1; a >= 0; a--) {
        for (; o.forward[a] && r(o.forward[a].key, i) < 0; ) o = o.forward[a];
        n[a] = o;
      }
      if (((o = o.forward[0]), o && r(o.key, i) === 0)) return (o.value = s), !1;
      {
        const a = Ps.j(t);
        if (a > t.d) {
          for (let c = t.d; c < a; c++) n[c] = t.e;
          t.d = a;
        }
        o = new ic(a, i, s);
        for (let c = 0; c < a; c++) (o.forward[c] = n[c].forward[c]), (n[c].forward[c] = o);
        return !0;
      }
    }
    static j(t, i = 0.5) {
      let s = 1;
      for (; Math.random() < i && s < t.c; ) s += 1;
      return s;
    }
    static k(t, i, s) {
      const r = [];
      let n = t.e;
      for (let o = t.d - 1; o >= 0; o--) {
        for (; n.forward[o] && s(n.forward[o].key, i) < 0; ) n = n.forward[o];
        r[o] = n;
      }
      if (((n = n.forward[0]), !n || s(n.key, i) !== 0)) return !1;
      for (let o = 0; o < t.d && r[o].forward[o] === n; o++) r[o].forward[o] = n.forward[o];
      for (; t.d > 0 && t.e.forward[t.d - 1] === ur; ) t.d -= 1;
      return !0;
    }
  },
  Lf = class uc {
    static {
      this._clock = 0;
    }
    constructor(t) {
      (this.uri = t), (this.time = uc._clock++);
    }
    touch() {
      return (this.time = uc._clock++), this;
    }
  },
  fr = class {
    constructor(t) {
      (this.g = t), (this.c = new ue()), (this.f = 2 ** 16);
      const i = new Map(),
        s = (r) => {
          let n = i.get(r.scheme);
          return n === void 0 && ((n = t.hasProvider(r) && !this.g.hasCapability(r, 1024)), i.set(r.scheme, n)), n;
        };
      this.c.add(
        at.any(
          t.onDidChangeFileSystemProviderRegistrations,
          t.onDidChangeFileSystemProviderCapabilities,
        )((r) => {
          i.delete(r.scheme);
        }),
      ),
        (this.extUri = new jr(s)),
        (this.d = new Qm((r, n) => this.extUri.compare(r, n, !0), this.f));
    }
    dispose() {
      this.c.dispose(), this.d.clear();
    }
    asCanonicalUri(t) {
      this.g.hasProvider(t) && (t = op(t));
      const i = this.d.get(t);
      return i ? i.touch().uri.with({ fragment: t.fragment }) : (this.d.set(t, new Lf(t)), this.h(), t);
    }
    h() {
      if (this.d.size < this.f) return;
      const t = [...this.d.entries()].sort((s, r) => (s[1].time < r[1].time ? 1 : s[1].time > r[1].time ? -1 : 0));
      (Lf._clock = 0), this.d.clear();
      const i = this.f * 0.5;
      for (let s = 0; s < i; s++) this.d.set(t[s][0], t[s][1].touch());
    }
  };
(fr = __decorate([__param(0, $t)], fr)), Jm(Ht, fr, 1);
var Xm = ct("stateReadService"),
  Zm = ct("stateService"),
  Rn,
  $s,
  Ln = (Rn = class extends ua {
    constructor(t, i, s, r, n) {
      super(s, r, i, n), (this.a = t), (this.S = s);
    }
    N() {
      return this.a.getItem(Rn.b, []).map((i) => ({ ...i, location: zt(i.location) ? this.u.extUri.joinPath(this.profilesHome, i.location) : I.revive(i.location) }));
    }
    P() {
      return this.a.getItem(Rn.c, {});
    }
    R() {
      return this.u.extUri.joinPath(I.file(this.S.extensionsPath).with({ scheme: this.profilesHome.scheme }), "extensions.json");
    }
  });
Ln = Rn = __decorate([__param(0, Xm), __param(1, Ht), __param(2, ke), __param(3, $t), __param(4, ht)], Ln);
var sc = ($s = class extends Ln {
  constructor(t, i, s, r, n) {
    super(t, i, s, r, n), (this.Y = t);
  }
  O(t) {
    t.length
      ? this.Y.setItem(
          $s.b,
          t.map((i) => ({ ...i, location: this.u.extUri.basename(i.location) })),
        )
      : this.Y.removeItem($s.b);
  }
  Q(t) {
    t.emptyWindows || t.workspaces ? this.Y.setItem($s.c, t) : this.Y.removeItem($s.c);
  }
});
sc = $s = __decorate([__param(0, Zm), __param(1, Ht), __param(2, ke), __param(3, $t), __param(4, ht)], sc);
var Of = class extends sc {
  constructor(t, i, s, r) {
    super(new Nm(0, i, r, s), t, i, s, r);
  }
  async init() {
    return await this.Y.init(), super.init();
  }
};
Of = __decorate([__param(0, Ht), __param(1, ke), __param(2, $t), __param(3, ht)], Of);
import { networkInterfaces as Ym } from "os";
import * as Nf from "os";
var Km = new Set(["00:00:00:00:00:00", "ff:ff:ff:ff:ff:ff", "ac:de:48:00:11:22"]);
function Cf(e) {
  const t = e.replace(/\-/g, ":").toLowerCase();
  return !Km.has(t);
}
function t7() {
  const e = Nf.networkInterfaces();
  for (const t in e) {
    const i = e[t];
    if (i) {
      for (const { mac: s } of i) if (Cf(s)) return s;
    }
  }
  throw new Error("Unable to retrieve mac address (unexpected format)");
}
var e7 = { darwin: ["en0", "en1", "llw0"], linux: ["wlan0", "eth0"], win32: ["Wi-Fi", "WLAN", "Ethernet"] };
function i7() {
  const e = Nf.networkInterfaces();
  let t;
  const i = e7[process.platform] || [];
  for (const s of i) {
    const r = e[s];
    if (r) {
      for (const { mac: n, internal: o } of r)
        if (Cf(n) && !o) {
          t = n;
          break;
        }
    }
    if (t) break;
  }
  return t || t7();
}
var s7 = i7,
  G9 = new (class {
    c(e) {
      return (
        this.a ||
          ((this.a = fs.forStrings()),
          this.a.set("00-50-56", !0),
          this.a.set("00-0C-29", !0),
          this.a.set("00-05-69", !0),
          this.a.set("00-03-FF", !0),
          this.a.set("00-1C-42", !0),
          this.a.set("00-16-3E", !0),
          this.a.set("08-00-27", !0),
          this.a.set("00:50:56", !0),
          this.a.set("00:0C:29", !0),
          this.a.set("00:05:69", !0),
          this.a.set("00:03:FF", !0),
          this.a.set("00:1C:42", !0),
          this.a.set("00:16:3E", !0),
          this.a.set("08:00:27", !0)),
        !!this.a.findSubstr(e)
      );
    }
    value() {
      if (this.b === void 0) {
        let e = 0,
          t = 0;
        const i = Ym();
        for (const s in i) {
          const r = i[s];
          if (r) for (const { mac: n, internal: o } of r) o || ((t += 1), this.c(n.toUpperCase()) && (e += 1));
        }
        this.b = t > 0 ? e / t : 0;
      }
      return this.b;
    }
  })(),
  rc;
async function r7(e) {
  return rc || (rc = (async () => (await n7(e)) || Kt())()), rc;
}
async function n7(e) {
  try {
    const t = await import("crypto"),
      i = s7();
    return t.createHash("sha256").update(i, "utf8").digest("hex");
  } catch (t) {
    e(t);
    return;
  }
}
var o7 = "Software\\Microsoft\\SQMClient";
async function a7(e) {
  if (Rt) {
    const t = await import("@vscode/windows-registry");
    try {
      return t.GetStringRegKey("HKEY_LOCAL_MACHINE", o7, "MachineId") || "";
    } catch (i) {
      return e(i), "";
    }
  }
  return "";
}
async function c7(e) {
  try {
    return await (await import("@vscode/deviceid")).getDeviceId();
  } catch (t) {
    return e(t), "";
  }
}
async function l7(e, t) {
  let i = e.getItem(Pg);
  return (typeof i != "string" || (Ze && i === "6c9d2bc8f91b89624add29c0abeae7fb42bf539fa1cdb2e3e57cd668fa9bcead")) && (i = await r7(t.error.bind(t))), i;
}
async function h7(e, t) {
  let i = e.getItem(kg);
  return typeof i != "string" && (i = await a7(t.error.bind(t))), i;
}
async function u7(e, t) {
  let i = e.getItem(Ag);
  return typeof i != "string" && (i = await c7(t.error.bind(t))), i;
}
var nc = class extends wa {
  constructor(t, i, s, r, n, o) {
    super(I.file(t.extensionsPath), i, s, r, n, o);
  }
};
nc = __decorate([__param(0, ke), __param(1, $t), __param(2, _e), __param(3, Ht), __param(4, Ae), __param(5, ht)], nc);
var f7 = class extends G {
    constructor(e, t = []) {
      super(), (this.a = new P0([e, ...t])), this.B(e.onDidChangeLogLevel((i) => this.setLevel(i)));
    }
    get onDidChangeLogLevel() {
      return this.a.onDidChangeLogLevel;
    }
    setLevel(e) {
      this.a.setLevel(e);
    }
    getLevel() {
      return this.a.getLevel();
    }
    trace(e, ...t) {
      this.a.trace(e, ...t);
    }
    debug(e, ...t) {
      this.a.debug(e, ...t);
    }
    info(e, ...t) {
      this.a.info(e, ...t);
    }
    warn(e, ...t) {
      this.a.warn(e, ...t);
    }
    error(e, ...t) {
      this.a.error(e, ...t);
    }
    flush() {
      this.a.flush();
    }
  },
  ci;
(function (e) {
  (e[(e.Trace = 0)] = "Trace"), (e[(e.Debug = 1)] = "Debug"), (e[(e.Info = 2)] = "Info"), (e[(e.Warning = 3)] = "Warning"), (e[(e.Error = 4)] = "Error"), (e[(e.Critical = 5)] = "Critical"), (e[(e.Off = 6)] = "Off");
})(ci || (ci = {}));
async function d7(e, t, i, s, r) {
  try {
    const n = await import("@vscode/spdlog");
    n.setFlushOn(ci.Trace);
    const o = await n.createAsyncRotatingLogger(e, t, i, s);
    return r ? o.clearFormatters() : o.setPattern("%Y-%m-%dT%H:%M:%S.%e%z [%l] %v"), o;
  } catch (n) {
    console.error(n);
  }
  return null;
}
function Ff(e, t, i) {
  switch (t) {
    case C.Trace:
      e.trace(i);
      break;
    case C.Debug:
      e.debug(i);
      break;
    case C.Info:
      e.info(i);
      break;
    case C.Warning:
      e.warn(i);
      break;
    case C.Error:
      e.error(i);
      break;
    case C.Off:
      break;
    default:
      throw new Error(`Invalid log level ${t}`);
  }
}
function Tf(e, t) {
  switch (t) {
    case C.Trace:
      e.setLevel(ci.Trace);
      break;
    case C.Debug:
      e.setLevel(ci.Debug);
      break;
    case C.Info:
      e.setLevel(ci.Info);
      break;
    case C.Warning:
      e.setLevel(ci.Warning);
      break;
    case C.Error:
      e.setLevel(ci.Error);
      break;
    case C.Off:
      e.setLevel(ci.Off);
      break;
    default:
      throw new Error(`Invalid log level ${t}`);
  }
}
var p7 = class extends I0 {
    constructor(e, t, i, s, r) {
      super(),
        (this.m = []),
        this.setLevel(r),
        (this.n = this.s(e, t, i, s)),
        this.B(
          this.onDidChangeLogLevel((n) => {
            this.r && Tf(this.r, n);
          }),
        );
    }
    async s(e, t, i, s) {
      const r = i ? 6 : 1,
        n = (30 / r) * q0.MB,
        o = await d7(e, t, n, r, s);
      if (o) {
        (this.r = o), Tf(this.r, this.getLevel());
        for (const { level: a, message: c } of this.m) Ff(this.r, a, c);
        this.m = [];
      }
    }
    g(e, t) {
      this.r ? Ff(this.r, e, t) : this.getLevel() <= e && this.m.push({ level: e, message: t });
    }
    flush() {
      this.q.isDisposed || (this.r ? this.r.flush() : this.n.then(() => this.flush()));
    }
    dispose() {
      this.r ? this.u() : this.n.then(() => this.u()), super.dispose();
    }
    u() {
      this.r && (this.r.drop(), (this.r = void 0));
    }
  },
  g7 = class extends k0 {
    s(e, t, i) {
      return new p7(Kt(), e.fsPath, !i?.donotRotate, !!i?.donotUseFormatters, t);
    }
  },
  m7 = class extends G {
    constructor(e, t, i, s, r, n) {
      super(),
        (this.f = e),
        (this.g = t),
        (this.h = i),
        (this.j = s),
        (this.m = r),
        (this.n = n),
        (this.capabilities = this.g.capabilities),
        (this.onDidChangeCapabilities = this.g.onDidChangeCapabilities),
        (this.a = this.B(new O())),
        (this.onDidChangeFile = this.a.event),
        (this.b = fs.forUris(() => !(this.capabilities & 1024))),
        (this.c = new Hn((o) => this.m.extUri.getComparisonKey(this.t(o)))),
        this.r(),
        this.B(s.onDidChangeProfiles(() => this.r())),
        this.B(this.g.onDidChangeFile((o) => this.s(o)));
    }
    r() {
      this.c.clear();
      for (const e of this.j.profiles) this.c.add(e.settingsResource), this.c.add(e.keybindingsResource), this.c.add(e.tasksResource), this.c.add(e.extensionsResource);
    }
    open(e, t) {
      return this.g.open(this.t(e), t);
    }
    close(e) {
      return this.g.close(e);
    }
    read(e, t, i, s, r) {
      return this.g.read(e, t, i, s, r);
    }
    write(e, t, i, s, r) {
      return this.g.write(e, t, i, s, r);
    }
    watch(e, t) {
      this.b.set(e, e);
      const i = this.g.watch(this.t(e), t);
      return Dt(() => {
        this.b.delete(e), i.dispose();
      });
    }
    stat(e) {
      return this.g.stat(this.t(e));
    }
    mkdir(e) {
      return this.g.mkdir(this.t(e));
    }
    rename(e, t, i) {
      return this.g.rename(this.t(e), this.t(t), i);
    }
    readFile(e, t) {
      return this.g.readFile(this.t(e), t);
    }
    readFileStream(e, t, i) {
      return this.g.readFileStream(this.t(e), t, i);
    }
    readdir(e) {
      return this.g.readdir(this.t(e));
    }
    enforceAtomicReadFile(e) {
      return this.c.has(e);
    }
    writeFile(e, t, i) {
      return this.g.writeFile(this.t(e), t, i);
    }
    enforceAtomicWriteFile(e) {
      return this.c.has(e) ? { postfix: ".vsctmp" } : !1;
    }
    delete(e, t) {
      return this.g.delete(this.t(e), t);
    }
    copy(e, t, i) {
      if (jo(this.g)) return this.g.copy(this.t(e), this.t(t), i);
      throw new Error("copy not supported");
    }
    cloneFile(e, t) {
      if (Ih(this.g)) return this.g.cloneFile(this.t(e), this.t(t));
      throw new Error("clone not supported");
    }
    s(e) {
      const t = [];
      for (const i of e) {
        if (i.resource.scheme !== this.f) continue;
        const s = this.u(i.resource);
        this.b.findSubstr(s) && t.push({ resource: s, type: i.type, cId: i.cId });
      }
      t.length && (this.n.debug("User data changed"), this.a.fire(t));
    }
    t(e) {
      return e.with({ scheme: this.f });
    }
    u(e) {
      return e.with({ scheme: this.h });
    }
  };
function w7() {
  return process.uncHostAllowlist;
}
function Mf(e) {
  if (process.platform !== "win32") return;
  const t = w7();
  if (t)
    if (typeof e == "string") t.add(e.toLowerCase());
    else for (const i of v7(e)) Mf(i);
}
function v7(e) {
  const t = new Set();
  if (Array.isArray(e)) for (const i of e) typeof i == "string" && t.add(i);
  return Array.from(t);
}
function y7(e) {
  if (typeof e != "string") return;
  const t = ["\\\\.\\UNC\\", "\\\\?\\UNC\\", "\\\\"];
  let i;
  for (const s of t) {
    if (e.indexOf(s) !== 0) continue;
    const n = e.indexOf("\\", s.length);
    if (n === -1) continue;
    const o = e.substring(s.length, n);
    if (o) {
      i = o;
      break;
    }
  }
  return i;
}
var b7 = class extends G {
  constructor(e) {
    super(), (this.b = e), this.c();
  }
  c() {
    process.once("exit", () => this.dispose());
  }
  async run() {
    const [e, t] = await this.f();
    return e.invokeFunction(async (i) => {
      const s = i.get(ht),
        r = i.get($t),
        n = i.get(ke),
        o = i.get(_e);
      s.info("CLI main", this.b),
        this.h(s),
        await this.j(n, r, o, e),
        await Promise.all(
          t.map((a) => {
            lp(a.flush(), 1e3);
          }),
        );
    });
  }
  async f() {
    const e = new mf(),
      t = { _serviceBrand: void 0, ...$i };
    e.set(Te, t);
    const i = new rg(this.b, t);
    e.set(ke, i), await Promise.all([this.g(i.appSettingsHome.with({ scheme: K.file }).fsPath), this.g(i.extensionsPath)].map((x) => (x ? x1.promises.mkdir(x, { recursive: !0 }) : void 0)));
    const s = new g7(R0(i), i.logsHome);
    e.set($0, s);
    const r = this.B(s.createLogger("cli", { name: d(177, null) })),
      n = [];
    s.getLogLevel() === C.Trace && n.push(new us(s.getLogLevel()));
    const o = this.B(new f7(r, n));
    e.set(ht, o);
    const a = this.B(new Ta(o));
    e.set($t, a);
    const c = this.B(new em(o));
    a.registerProvider(K.file, c);
    const l = new fr(a);
    e.set(Ht, l);
    const h = new An(1, i, o, a),
      u = new Ln(h, l, i, a, o);
    e.set(_e, u), a.registerProvider(K.vscodeUserData, new m7(K.file, c, K.vscodeUserData, u, l, o));
    const f = Rt && t.win32RegValueName ? this.B(new Ja(o, t.win32RegValueName)) : i.policyFile ? this.B(new Ga(i.policyFile, a, o)) : new vh();
    e.set(mh, f);
    const p = this.B(new F0(u.defaultProfile.settingsResource, a, f, o));
    e.set(Fi, p), await Promise.all([h.init(), p.initialize()]);
    let w;
    try {
      w = await l7(h, o);
    } catch (x) {
      x.code !== "ENOENT" && o.error(x);
    }
    const m = await h7(h, o),
      y = await u7(h, o);
    u.init(), e.set(Ht, new fr(a));
    const v = new Ka(p, i, o);
    e.set(ir, v),
      e.set(yh, new ee(Xo, void 0, !0)),
      e.set(Ei, new ee(nc, void 0, !0)),
      e.set(vn, new ee(Na, void 0, !0)),
      e.set($u, new ee(ma, void 0, !0)),
      e.set(i5, new ee(Ra, void 0, !0)),
      e.set(bi, new ee(ga, void 0, !0)),
      e.set(om, new ee(Wa, void 0, !1));
    const S = [],
      D = Og(t, p);
    if (tu(t, i)) {
      t.aiConfig && t.aiConfig.ariaKey && S.push(new Wm(v, D, "monacoworkbench", null, t.aiConfig.ariaKey));
      const x = { appenders: S, sendErrorTelemetry: !1, commonProperties: $g($1(), S1(), process.arch, t.commit, t.version, w, m, y, D), piiPaths: Ng(i) };
      e.set(Ae, new ee(tc, [x], !1));
    } else e.set(Ae, Rg);
    return [new rm(e), S];
  }
  g(e) {
    if (Rt) {
      const t = y7(e);
      t && Mf(t);
    }
    return e;
  }
  h(e) {
    k1((t) => {
      const i = gi(t, !0);
      i && e.error(`[uncaught exception in CLI]: ${i}`);
    }),
      process.on("uncaughtException", (t) => {
        A1(t) || Le(t);
      }),
      process.on("unhandledRejection", (t) => Le(t));
  }
  async j(e, t, i, s) {
    let r;
    if (e.args.profile && ((r = i.profiles.find((o) => o.name === e.args.profile)), !r)) throw new Error(`Profile '${e.args.profile}' not found.`);
    const n = (r ?? i.defaultProfile).extensionsResource;
    if (this.b["list-extensions"]) return s.createInstance(Vi, new us(C.Info, !1)).listExtensions(!!this.b["show-versions"], this.b.category, n);
    if (this.b["install-extension"] || this.b["install-builtin-extension"]) {
      const o = { isMachineScoped: !!this.b["do-not-sync"], installPreReleaseVersion: !!this.b["pre-release"], profileLocation: n };
      return s.createInstance(Vi, new us(C.Info, !1)).installExtensions(this.m(this.b["install-extension"] || []), this.m(this.b["install-builtin-extension"] || []), o, !!this.b.force);
    } else {
      if (this.b["uninstall-extension"]) return s.createInstance(Vi, new us(C.Info, !1)).uninstallExtensions(this.m(this.b["uninstall-extension"]), !!this.b.force, n);
      if (this.b["update-extensions"]) return s.createInstance(Vi, new us(C.Info, !1)).updateExtensions(n);
      if (this.b["locate-extension"]) return s.createInstance(Vi, new us(C.Info, !1)).locateExtension(this.b["locate-extension"]);
      this.b.telemetry && console.log(await Hm(e.appRoot, e.extensionsPath));
    }
  }
  m(e) {
    return e.map((t) => (/\.vsix$/i.test(t) ? I.file(Mr(t) ? t : _(is(), t)) : t));
  }
};
async function main(e) {
  const t = new b7(e);
  try {
    await t.run();
  } finally {
    t.dispose();
  }
}
export { main as main };
