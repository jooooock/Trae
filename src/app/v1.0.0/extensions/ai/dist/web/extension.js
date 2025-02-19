(() => {
  var e = {
    165: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.createErrorClass = void 0, t.createErrorClass = function(e) {
        return class extends Error {
          constructor(e) {
            super(), Object.defineProperty(this, "message", { get: "function" == typeof e ? e : () => e });
          }

          get message() {
            return "To be override.";
          }

          get name() {
            return e;
          }
        };
      };
    },
    585: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.INJECT_HANDLER_ARGS = t.INJECT_HANDLER_PROPS = t.CLASS_TAG = t.EXECUTION_CONTEXT_KEY = t.CLASS_CONSTRUCTOR_ARGS = t.CLASS_PROPERTY = t.CLASS_CONSTRUCTOR = void 0, t.CLASS_CONSTRUCTOR = Symbol.for("injection:constructor"), t.CLASS_PROPERTY = Symbol.for("injection:property"), t.CLASS_CONSTRUCTOR_ARGS = Symbol.for("injection:constructor_args"), t.EXECUTION_CONTEXT_KEY = "ctx", t.CLASS_TAG = Symbol.for("injection:class_tag"), t.INJECT_HANDLER_PROPS = Symbol.for("injection:handler_props"), t.INJECT_HANDLER_ARGS = Symbol.for("injection:handler_args");
    },
    318: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(585), o = n(612), i = n(565), a = n(711), s = n(186);
      t.default = class {
        constructor(e) {
          this.name = e, this.registry = new Map, this.tags = new Map, this.handlerMap = new Map;
        }

        get(e, t = {}) {
          const n = this.getDefinition(e);
          if (!n) {
            if (t.noThrow) return t.defaultValue;
            throw new a.NotFoundError(e);
          }
          return this.getValue(n);
        }

        set(e) {
          var t;
          if (e.id && !(0, i.isUndefined)(e.value)) {
            const n = {
              id: e.id,
              value: e.value,
              scope: null !== (t = e.scope) && void 0 !== t ? t : o.ScopeEnum.SINGLETON,
              type: e.type,
            };
            return this.registry.set(n.id, n), n.type && (0, i.isClass)(n.type) && n.id !== n.type && this.registry.set(n.type, n), this;
          }
          const { type: n, id: a, scope: s, scopeEscape: c } = this.getDefinedMetaData(e),
            u = Object.assign(Object.assign({}, e), { id: a, type: n, scope: s, scopeEscape: c });
          if (n) {
            const e = (0, i.getMetadata)(r.CLASS_CONSTRUCTOR_ARGS, n),
              t = (0, i.recursiveGetMetadata)(r.CLASS_PROPERTY, n), o = (0, i.getMetadata)(r.INJECT_HANDLER_ARGS, n),
              a = (0, i.recursiveGetMetadata)(r.INJECT_HANDLER_PROPS, n);
            u.constructorArgs = (null != e ? e : []).concat(null != o ? o : []), u.properties = (null != t ? t : []).concat(null != a ? a : []), u.id !== n && this.registry.set(n, u), this.handleTag(n);
          }
          return this.registry.set(u.id, u), u.eager && u.scope !== o.ScopeEnum.TRANSIENT && this.get(u.id), this;
        }

        getDefinition(e) {
          return this.registry.get(e);
        }

        getInjectableByTag(e) {
          const t = this.tags.get(e);
          return t ? [...t] : [];
        }

        getByTag(e) {
          return this.getInjectableByTag(e).map((e => this.get(e)));
        }

        registerHandler(e, t) {
          this.handlerMap.set(e, t);
        }

        getHandler(e) {
          return this.handlerMap.get(e);
        }

        hasValue(e) {
          const { id: t } = this.getDefinedMetaData(e), n = this.getDefinition(t);
          return !!n && !(0, i.isUndefined)(n.value);
        }

        getValueByMetadata(e) {
          return e.handler ? this.resolveHandler(e.handler, e.id) : this.get(e.id, {
            noThrow: e.noThrow,
            defaultValue: e.defaultValue,
          });
        }

        getValue(e) {
          if (!(0, i.isUndefined)(e.value)) return e.value;
          let t;
          if (e.factory && (t = e.factory(e.id, this)), !t && e.type) {
            const n = e.type;
            t = new n(...this.resolveParams(n, e)), this.resolveProps(t, e);
          }
          return e.scope === o.ScopeEnum.SINGLETON && (e.value = t), t;
        }

        getDefinedMetaData(e) {
          var t, n, s, c;
          let { type: u, id: l, scope: d = o.ScopeEnum.SINGLETON, factory: f, scopeEscape: p } = e;
          if (u || l && (0, i.isClass)(l) && (u = l), !u && !f) throw new a.NoTypeError(`injectable ${null == l ? void 0 : l.toString()}`);
          if (f && !(0, i.isFunction)(f)) throw new a.InjectionError("factory option must be function");
          if (u) {
            const e = (0, i.getMetadata)(r.CLASS_CONSTRUCTOR, u) || {};
            l = null !== (n = null !== (t = e.id) && void 0 !== t ? t : l) && void 0 !== n ? n : u, d = null !== (s = e.scope) && void 0 !== s ? s : d, p = null !== (c = e.scopeEscape) && void 0 !== c ? c : p;
          }
          if (!l && f) throw new a.NoIdentifierError("injectable with factory option");
          return { type: u, id: l, scope: d, scopeEscape: p };
        }

        resolveParams(e, t) {
          var n;
          let { constructorArgs: r = [] } = t;
          const o = [];
          return r && r.length || (r = (null !== (n = (0, i.getParamMetadata)(e)) && void 0 !== n ? n : []).map(((e, t) => ({
            id: e,
            index: t,
          })))), r.forEach((e => {
            (0, i.isPrimitiveFunction)(e.id) || (e.handler || this.checkScope(t, e.id, e.index), o[e.index] = this.getValueByMetadata(e));
          })), o;
        }

        resolveProps(e, t) {
          const { properties: n = [] } = t;
          n.forEach((n => {
            if (n.handler || this.checkScope(t, n.id, n.propertyName), n.lazy) return (0, s.createLazyProperty)(e, n, this);
            e[n.propertyName] = this.getValueByMetadata(n);
          }));
        }

        handleTag(e) {
          let t = Reflect.getOwnMetadata(r.CLASS_TAG, e);
          t && (Array.isArray(t) || (t = [t]), t.forEach((t => {
            this.tags.has(t) || this.tags.set(t, new Set), this.tags.get(t).add(e);
          })));
        }

        resolveHandler(e, t) {
          const n = this.getHandler(e);
          if (!n) throw new a.NoHandlerError(e.toString());
          return t ? n(t, this) : n(this);
        }

        checkScope(e, t, n) {
          const { scope: r } = e;
          if (r === o.ScopeEnum.EXECUTION || r === o.ScopeEnum.TRANSIENT) return;
          const i = this.getDefinition(t);
          if ((null == i ? void 0 : i.scope) === o.ScopeEnum.EXECUTION && !i.scopeEscape) throw new a.ScopeEscapeError(e.type, n, r, i.scope);
        }
      };
    },
    383: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.InjectHandler = void 0;
      const r = n(585), o = n(565);
      t.InjectHandler = function(e, t) {
        return function(n, i, a) {
          if ((0, o.isObject)(n) && (n = n.constructor), !(0, o.isUndefined)(a)) {
            const i = (0, o.getMetadata)(r.INJECT_HANDLER_ARGS, n) || [];
            return i.push({ handler: e, id: t, index: a }), void (0, o.setMetadata)(r.INJECT_HANDLER_ARGS, i, n);
          }
          const s = (0, o.getMetadata)(r.INJECT_HANDLER_PROPS, n) || [];
          s.push({ handler: e, id: t, propertyName: i }), (0, o.setMetadata)(r.INJECT_HANDLER_PROPS, s, n);
        };
      };
    },
    726: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.Inject = void 0;
      const r = n(565), o = n(585), i = n(711);
      t.Inject = function(e) {
        const t = (0, r.isObject)(e) ? e : { id: e };
        return (e, n, a) => {
          (0, r.isObject)(e) && (e = e.constructor);
          let s = t.id;
          if (!s && n && (s = (0, r.getDesignTypeMetadata)(e.prototype, n)), !s && (0, r.isNumber)(a)) {
            const t = (0, r.getParamMetadata)(e);
            s = null == t ? void 0 : t[a];
          }
          if (!s || (0, r.isPrimitiveFunction)(s)) throw new i.CannotInjectValueError(e, null != n ? n : a);
          if (!(0, r.isUndefined)(a)) {
            if (t.lazy) throw new i.LazyInjectConstructorError(e.name);
            const n = (0, r.getMetadata)(o.CLASS_CONSTRUCTOR_ARGS, e) || [];
            return n.push(Object.assign(Object.assign({}, t), {
              id: s,
              index: a,
            })), void (0, r.setMetadata)(o.CLASS_CONSTRUCTOR_ARGS, n, e);
          }
          const c = (0, r.getMetadata)(o.CLASS_PROPERTY, e) || [];
          c.push(Object.assign(Object.assign({}, t), {
            id: s,
            propertyName: n,
          })), (0, r.setMetadata)(o.CLASS_PROPERTY, c, e);
        };
      };
    },
    902: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.Injectable = void 0;
      const r = n(565), o = n(585);
      t.Injectable = function(e) {
        return t => {
          const n = Object.assign({ id: t, lazy: !1 }, e);
          if ((0, r.setMetadata)(o.CLASS_CONSTRUCTOR, n, t), n.lazy) {
            const e = (0, r.recursiveGetMetadata)(o.CLASS_PROPERTY, t),
              n = (0, r.recursiveGetMetadata)(o.INJECT_HANDLER_PROPS, t);
            (null != e ? e : []).concat(null != n ? n : []).forEach((e => e.lazy = !0));
          }
        };
      };
    },
    711: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.ScopeEscapeError = t.LazyInjectConstructorError = t.InjectionError = t.NoIdentifierError = t.NoHandlerError = t.NotFoundError = t.NoTypeError = t.CannotInjectValueError = void 0;
      const r = n(165);

      class o extends ((0, r.createErrorClass)("CannotInjectValueError")) {
        constructor(e, t) {
          super((() => {
            let n = `'${e.name}.${String(t)}'`;
            return "number" == typeof t && (n = `'${e.name}' constructor argument at index '${t}'`), `[@artus/injection] Cannot inject value into ${n}, maybe inject identifier is undefined or type is primitive type`;
          }));
        }
      }

      t.CannotInjectValueError = o;

      class i extends ((0, r.createErrorClass)("NoTypeError")) {
        constructor(e) {
          super(`[@artus/injection] type is required: ${e}`);
        }
      }

      t.NoTypeError = i;

      class a extends ((0, r.createErrorClass)("NotFoundError")) {
        constructor(e) {
          const t = "function" == typeof e ? e.name : (null != e ? e : "Unknown").toString();
          super((() => `[@artus/injection] with "${t}" identifier was not found in the container. `));
        }
      }

      t.NotFoundError = a;

      class s extends ((0, r.createErrorClass)("NoHandlerError")) {
        constructor(e) {
          super((() => `[@artus/injection] "${e}" handler was not found in the container.`));
        }
      }

      t.NoHandlerError = s;

      class c extends ((0, r.createErrorClass)("NoIdentifierError")) {
        constructor(e) {
          super(`[@artus/injection] id is required: ${e}`);
        }
      }

      t.NoIdentifierError = c;

      class u extends ((0, r.createErrorClass)("InjectionError")) {
        constructor(e) {
          super(`[@artus/injection] ${e}`);
        }
      }

      t.InjectionError = u;

      class l extends ((0, r.createErrorClass)("LazyInjectConstructor")) {
        constructor(e) {
          super(`[@artus/injection] cannot inject '${e}' constructor argument by lazy`);
        }
      }

      t.LazyInjectConstructorError = l;

      class d extends ((0, r.createErrorClass)("ScopeEscapeError")) {
        constructor(e, t, n, r) {
          super((() => {
            let o = `property '${String(t)}'`;
            return "number" == typeof t && (o = `constructor argument at index '${t}'`), `[@artus/injection] '${e.name}' with '${n}' scope cannot be injected ${o} with '${r}' scope`;
          }));
        }
      }

      t.ScopeEscapeError = d;
    },
    323: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(866), o = n(585), i = r.__importDefault(n(318)), a = n(612), s = n(711), c = n(565);

      class u extends i.default {
        constructor(e, t) {
          super("execution"), this.parent = t, this.ctx = e, this.set({ id: o.EXECUTION_CONTEXT_KEY, value: e });
        }

        get(e, t = {}) {
          var n;
          const r = null !== (n = this.getDefinition(e)) && void 0 !== n ? n : this.parent.getDefinition(e);
          if (!r) {
            if (t.noThrow) return t.defaultValue;
            throw new s.NotFoundError(e);
          }
          const o = this.getValue(r);
          return r.scope === a.ScopeEnum.EXECUTION && this.setValue(r, o), o;
        }

        getCtx() {
          return this.ctx;
        }

        getHandler(e) {
          var t;
          return null !== (t = this.handlerMap.get(e)) && void 0 !== t ? t : this.parent.getHandler(e);
        }

        setValue(e, t) {
          (0, c.isUndefined)(e.value) && (e.type && e.id !== e.type && this.set(Object.assign(Object.assign({}, e), {
            id: e.type,
            value: t,
          })), this.set(Object.assign(Object.assign({}, e), { id: e.id, value: t })));
        }
      }

      t.default = u;
    },
    597: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.ExecutionContainer = t.Container = void 0;
      const r = n(866), o = r.__importDefault(n(318));
      t.Container = o.default;
      const i = r.__importDefault(n(323));
      t.ExecutionContainer = i.default, r.__exportStar(n(612), t), r.__exportStar(n(726), t), r.__exportStar(n(902), t), r.__exportStar(n(383), t), r.__exportStar(n(585), t), r.__exportStar(n(565), t);
    },
    186: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.createLazyProperty = void 0, t.createLazyProperty = function(e, t, n) {
        let r, o = !1;
        Object.defineProperty(e, t.propertyName, {
          get: () => (o || (r = n.getValueByMetadata(t), o = !0), r),
          enumerable: !1,
          configurable: !0,
        });
      };
    },
    612: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.ScopeEnum = void 0, function(e) {
        e.SINGLETON = "singleton", e.EXECUTION = "execution", e.TRANSIENT = "transient";
      }(t.ScopeEnum || (t.ScopeEnum = {}));
    },
    565: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.isPrimitiveFunction = t.isFunction = t.isObject = t.isUndefined = t.isNumber = t.isClass = t.isInjectable = t.addTag = t.getDesignTypeMetadata = t.getParamMetadata = t.recursiveGetMetadata = t.setMetadata = t.getMetadata = void 0;
      const r = n(585), o = Object.getPrototypeOf(Function);

      function i(e, t, n) {
        return n ? Reflect.getOwnMetadata(e, t, n) : Reflect.getOwnMetadata(e, t);
      }

      t.getMetadata = i, t.setMetadata = function(e, t, n, r) {
        r ? Reflect.defineMetadata(e, t, n, r) : Reflect.defineMetadata(e, t, n);
      }, t.recursiveGetMetadata = function(e, t, n) {
        let r = [];
        const a = i(e, t, n);
        a && (r = r.concat(a));
        let s = Object.getPrototypeOf(t);
        for (; null !== s && s !== o;) {
          const t = i(e, s, n);
          t && (r = r.concat(t)), s = Object.getPrototypeOf(s);
        }
        return r;
      }, t.getParamMetadata = function(e) {
        return Reflect.getMetadata("design:paramtypes", e);
      }, t.getDesignTypeMetadata = function(e, t) {
        return Reflect.getMetadata("design:type", e, t);
      }, t.addTag = function(e, t) {
        let n = Reflect.getOwnMetadata(r.CLASS_TAG, t);
        n || (n = [], Reflect.defineMetadata(r.CLASS_TAG, n, t)), n.push(e);
      }, t.isInjectable = function(e) {
        return Reflect.hasOwnMetadata(r.CLASS_CONSTRUCTOR, e);
      }, t.isClass = function(e) {
        if ("function" != typeof e) return !1;
        const t = Function.prototype.toString.call(e);
        return "class" === t.substring(0, 5) || Boolean(~t.indexOf("classCallCheck(")) || Boolean(~t.indexOf("TypeError(\"Cannot call a class as a function\")"));
      }, t.isNumber = function(e) {
        return "number" == typeof e;
      }, t.isUndefined = function(e) {
        return void 0 === e;
      }, t.isObject = function(e) {
        return "object" == typeof e;
      }, t.isFunction = function(e) {
        return "function" == typeof e;
      }, t.isPrimitiveFunction = function(e) {
        return ["String", "Boolean", "Number", "Object"].includes(e.name);
      };
    },
    5: (e, t, n) => {
      var r = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, a = /^0o[0-7]+$/i, s = parseInt,
        c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        u = "object" == typeof self && self && self.Object === Object && self, l = c || u || Function("return this")(),
        d = Object.prototype.toString, f = Math.max, p = Math.min, g = function() {
          return l.Date.now();
        };

      function h(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }

      function m(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
          return "symbol" == typeof e || function(e) {
            return !!e && "object" == typeof e;
          }(e) && "[object Symbol]" == d.call(e);
        }(e)) return NaN;
        if (h(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = h(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(r, "");
        var n = i.test(e);
        return n || a.test(e) ? s(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e;
      }

      e.exports = function(e, t, n) {
        var r, o, i, a, s, c, u = 0, l = !1, d = !1, _ = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var n = r, i = o;
          return r = o = void 0, u = t, a = e.apply(i, n);
        }

        function v(e) {
          var n = e - c;
          return void 0 === c || n >= t || n < 0 || d && e - u >= i;
        }

        function b() {
          var e = g();
          if (v(e)) return w(e);
          s = setTimeout(b, function(e) {
            var n = t - (e - c);
            return d ? p(n, i - (e - u)) : n;
          }(e));
        }

        function w(e) {
          return s = void 0, _ && r ? y(e) : (r = o = void 0, a);
        }

        function C() {
          var e = g(), n = v(e);
          if (r = arguments, o = this, c = e, n) {
            if (void 0 === s) return function(e) {
              return u = e, s = setTimeout(b, t), l ? y(e) : a;
            }(c);
            if (d) return s = setTimeout(b, t), y(c);
          }
          return void 0 === s && (s = setTimeout(b, t)), a;
        }

        return t = m(t) || 0, h(n) && (l = !!n.leading, i = (d = "maxWait" in n) ? f(m(n.maxWait) || 0, t) : i, _ = "trailing" in n ? !!n.trailing : _), C.cancel = function() {
          void 0 !== s && clearTimeout(s), u = 0, r = c = o = s = void 0;
        }, C.flush = function() {
          return void 0 === s ? a : w(g());
        }, C;
      };
    },
    370: e => {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined");
      }

      function i() {
        throw new Error("clearTimeout has not been defined");
      }

      function a(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (n) {
          try {
            return t.call(null, e, 0);
          } catch (n) {
            return t.call(this, e, 0);
          }
        }
      }

      !function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          t = o;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
          n = i;
        }
      }();
      var s, c = [], u = !1, l = -1;

      function d() {
        u && s && (u = !1, s.length ? c = s.concat(c) : l = -1, c.length && f());
      }

      function f() {
        if (!u) {
          var e = a(d);
          u = !0;
          for (var t = c.length; t;) {
            for (s = c, c = []; ++l < t;) s && s[l].run();
            l = -1, t = c.length;
          }
          s = null, u = !1, function(e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
            try {
              return n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          }(e);
        }
      }

      function p(e, t) {
        this.fun = e, this.array = t;
      }

      function g() {
      }

      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new p(e, t)), 1 !== c.length || u || a(f);
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener = g, r.listeners = function(e) {
        return [];
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported");
      }, r.cwd = function() {
        return "/";
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported");
      }, r.umask = function() {
        return 0;
      };
    },
    936: (e, t, n) => {
      var r, o = n(370);
      !function(e) {
        !function() {
          var t = "object" == typeof n.g ? n.g : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(),
            r = i(e);

          function i(e, t) {
            return function(n, r) {
              "function" != typeof e[n] && Object.defineProperty(e, n, {
                configurable: !0,
                writable: !0,
                value: r,
              }), t && t(n, r);
            };
          }

          void 0 === t.Reflect ? t.Reflect = e : r = i(t.Reflect, r), function(e) {
            var t = Object.prototype.hasOwnProperty, n = "function" == typeof Symbol,
              r = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
              i = n && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
              a = "function" == typeof Object.create, s = { __proto__: [] } instanceof Array, c = !a && !s, u = {
                create: a ? function() {
                  return oe(Object.create(null));
                } : s ? function() {
                  return oe({ __proto__: null });
                } : function() {
                  return oe({});
                }, has: c ? function(e, n) {
                  return t.call(e, n);
                } : function(e, t) {
                  return t in e;
                }, get: c ? function(e, n) {
                  return t.call(e, n) ? e[n] : void 0;
                } : function(e, t) {
                  return e[t];
                },
              }, l = Object.getPrototypeOf(Function),
              d = "object" == typeof o && o.env && "true" === o.env.REFLECT_METADATA_USE_MAP_POLYFILL,
              f = d || "function" != typeof Map || "function" != typeof Map.prototype.entries ? te() : Map,
              p = d || "function" != typeof Set || "function" != typeof Set.prototype.entries ? ne() : Set,
              g = new (d || "function" != typeof WeakMap ? re() : WeakMap);

            function h(e, t, n, r) {
              if (k(n)) {
                if (!V(e)) throw new TypeError;
                if (!z(t)) throw new TypeError;
                return j(e, t);
              }
              if (!V(e)) throw new TypeError;
              if (!B(t)) throw new TypeError;
              if (!B(r) && !k(r) && !N(r)) throw new TypeError;
              return N(r) && (r = void 0), S(e, t, n = H(n), r);
            }

            function m(e, t) {
              function n(n, r) {
                if (!B(n)) throw new TypeError;
                if (!k(r) && !J(r)) throw new TypeError;
                I(e, t, n, r);
              }

              return n;
            }

            function _(e, t, n, r) {
              if (!B(n)) throw new TypeError;
              return k(r) || (r = H(r)), I(e, t, n, r);
            }

            function y(e, t, n) {
              if (!B(t)) throw new TypeError;
              return k(n) || (n = H(n)), P(e, t, n);
            }

            function v(e, t, n) {
              if (!B(t)) throw new TypeError;
              return k(n) || (n = H(n)), E(e, t, n);
            }

            function b(e, t, n) {
              if (!B(t)) throw new TypeError;
              return k(n) || (n = H(n)), R(e, t, n);
            }

            function w(e, t, n) {
              if (!B(t)) throw new TypeError;
              return k(n) || (n = H(n)), M(e, t, n);
            }

            function C(e, t) {
              if (!B(e)) throw new TypeError;
              return k(t) || (t = H(t)), L(e, t);
            }

            function x(e, t) {
              if (!B(e)) throw new TypeError;
              return k(t) || (t = H(t)), A(e, t);
            }

            function O(e, t, n) {
              if (!B(t)) throw new TypeError;
              k(n) || (n = H(n));
              var r = T(t, n, !1);
              if (k(r)) return !1;
              if (!r.delete(e)) return !1;
              if (r.size > 0) return !0;
              var o = g.get(t);
              return o.delete(n), o.size > 0 || g.delete(t), !0;
            }

            function j(e, t) {
              for (var n = e.length - 1; n >= 0; --n) {
                var r = (0, e[n])(t);
                if (!k(r) && !N(r)) {
                  if (!z(r)) throw new TypeError;
                  t = r;
                }
              }
              return t;
            }

            function S(e, t, n, r) {
              for (var o = e.length - 1; o >= 0; --o) {
                var i = (0, e[o])(t, n, r);
                if (!k(i) && !N(i)) {
                  if (!B(i)) throw new TypeError;
                  r = i;
                }
              }
              return r;
            }

            function T(e, t, n) {
              var r = g.get(e);
              if (k(r)) {
                if (!n) return;
                r = new f, g.set(e, r);
              }
              var o = r.get(t);
              if (k(o)) {
                if (!n) return;
                o = new f, r.set(t, o);
              }
              return o;
            }

            function P(e, t, n) {
              if (E(e, t, n)) return !0;
              var r = ee(t);
              return !N(r) && P(e, r, n);
            }

            function E(e, t, n) {
              var r = T(t, n, !1);
              return !k(r) && $(r.has(e));
            }

            function R(e, t, n) {
              if (E(e, t, n)) return M(e, t, n);
              var r = ee(t);
              return N(r) ? void 0 : R(e, r, n);
            }

            function M(e, t, n) {
              var r = T(t, n, !1);
              if (!k(r)) return r.get(e);
            }

            function I(e, t, n, r) {
              T(n, r, !0).set(e, t);
            }

            function L(e, t) {
              var n = A(e, t), r = ee(e);
              if (null === r) return n;
              var o = L(r, t);
              if (o.length <= 0) return n;
              if (n.length <= 0) return o;
              for (var i = new p, a = [], s = 0, c = n; s < c.length; s++) {
                var u = c[s];
                i.has(u) || (i.add(u), a.push(u));
              }
              for (var l = 0, d = o; l < d.length; l++) {
                u = d[l];
                i.has(u) || (i.add(u), a.push(u));
              }
              return a;
            }

            function A(e, t) {
              var n = [], r = T(e, t, !1);
              if (k(r)) return n;
              for (var o = Y(r.keys()), i = 0; ;) {
                var a = Q(o);
                if (!a) return n.length = i, n;
                var s = X(a);
                try {
                  n[i] = s;
                } catch (e) {
                  try {
                    Z(o);
                  } finally {
                    throw e;
                  }
                }
                i++;
              }
            }

            function D(e) {
              if (null === e) return 1;
              switch (typeof e) {
                case"undefined":
                  return 0;
                case"boolean":
                  return 2;
                case"string":
                  return 3;
                case"symbol":
                  return 4;
                case"number":
                  return 5;
                case"object":
                  return null === e ? 1 : 6;
                default:
                  return 6;
              }
            }

            function k(e) {
              return void 0 === e;
            }

            function N(e) {
              return null === e;
            }

            function F(e) {
              return "symbol" == typeof e;
            }

            function B(e) {
              return "object" == typeof e ? null !== e : "function" == typeof e;
            }

            function W(e, t) {
              switch (D(e)) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  return e;
              }
              var n = 3 === t ? "string" : 5 === t ? "number" : "default", o = K(e, r);
              if (void 0 !== o) {
                var i = o.call(e, n);
                if (B(i)) throw new TypeError;
                return i;
              }
              return G(e, "default" === n ? "number" : n);
            }

            function G(e, t) {
              if ("string" === t) {
                var n = e.toString;
                if (q(n)) if (!B(o = n.call(e))) return o;
                if (q(r = e.valueOf)) if (!B(o = r.call(e))) return o;
              } else {
                var r;
                if (q(r = e.valueOf)) if (!B(o = r.call(e))) return o;
                var o, i = e.toString;
                if (q(i)) if (!B(o = i.call(e))) return o;
              }
              throw new TypeError;
            }

            function $(e) {
              return !!e;
            }

            function U(e) {
              return "" + e;
            }

            function H(e) {
              var t = W(e, 3);
              return F(t) ? t : U(t);
            }

            function V(e) {
              return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : "[object Array]" === Object.prototype.toString.call(e);
            }

            function q(e) {
              return "function" == typeof e;
            }

            function z(e) {
              return "function" == typeof e;
            }

            function J(e) {
              switch (D(e)) {
                case 3:
                case 4:
                  return !0;
                default:
                  return !1;
              }
            }

            function K(e, t) {
              var n = e[t];
              if (null != n) {
                if (!q(n)) throw new TypeError;
                return n;
              }
            }

            function Y(e) {
              var t = K(e, i);
              if (!q(t)) throw new TypeError;
              var n = t.call(e);
              if (!B(n)) throw new TypeError;
              return n;
            }

            function X(e) {
              return e.value;
            }

            function Q(e) {
              var t = e.next();
              return !t.done && t;
            }

            function Z(e) {
              var t = e.return;
              t && t.call(e);
            }

            function ee(e) {
              var t = Object.getPrototypeOf(e);
              if ("function" != typeof e || e === l) return t;
              if (t !== l) return t;
              var n = e.prototype, r = n && Object.getPrototypeOf(n);
              if (null == r || r === Object.prototype) return t;
              var o = r.constructor;
              return "function" != typeof o || o === e ? t : o;
            }

            function te() {
              var e = {}, t = [], n = function() {
                function e(e, t, n) {
                  this._index = 0, this._keys = e, this._values = t, this._selector = n;
                }

                return e.prototype["@@iterator"] = function() {
                  return this;
                }, e.prototype[i] = function() {
                  return this;
                }, e.prototype.next = function() {
                  var e = this._index;
                  if (e >= 0 && e < this._keys.length) {
                    var n = this._selector(this._keys[e], this._values[e]);
                    return e + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, {
                      value: n,
                      done: !1,
                    };
                  }
                  return { value: void 0, done: !0 };
                }, e.prototype.throw = function(e) {
                  throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), e;
                }, e.prototype.return = function(e) {
                  return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), {
                    value: e,
                    done: !0,
                  };
                }, e;
              }();
              return function() {
                function t() {
                  this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
                }

                return Object.defineProperty(t.prototype, "size", {
                  get: function() {
                    return this._keys.length;
                  }, enumerable: !0, configurable: !0,
                }), t.prototype.has = function(e) {
                  return this._find(e, !1) >= 0;
                }, t.prototype.get = function(e) {
                  var t = this._find(e, !1);
                  return t >= 0 ? this._values[t] : void 0;
                }, t.prototype.set = function(e, t) {
                  var n = this._find(e, !0);
                  return this._values[n] = t, this;
                }, t.prototype.delete = function(t) {
                  var n = this._find(t, !1);
                  if (n >= 0) {
                    for (var r = this._keys.length, o = n + 1; o < r; o++) this._keys[o - 1] = this._keys[o], this._values[o - 1] = this._values[o];
                    return this._keys.length--, this._values.length--, t === this._cacheKey && (this._cacheKey = e, this._cacheIndex = -2), !0;
                  }
                  return !1;
                }, t.prototype.clear = function() {
                  this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
                }, t.prototype.keys = function() {
                  return new n(this._keys, this._values, r);
                }, t.prototype.values = function() {
                  return new n(this._keys, this._values, o);
                }, t.prototype.entries = function() {
                  return new n(this._keys, this._values, a);
                }, t.prototype["@@iterator"] = function() {
                  return this.entries();
                }, t.prototype[i] = function() {
                  return this.entries();
                }, t.prototype._find = function(e, t) {
                  return this._cacheKey !== e && (this._cacheIndex = this._keys.indexOf(this._cacheKey = e)), this._cacheIndex < 0 && t && (this._cacheIndex = this._keys.length, this._keys.push(e), this._values.push(void 0)), this._cacheIndex;
                }, t;
              }();

              function r(e, t) {
                return e;
              }

              function o(e, t) {
                return t;
              }

              function a(e, t) {
                return [e, t];
              }
            }

            function ne() {
              return function() {
                function e() {
                  this._map = new f;
                }

                return Object.defineProperty(e.prototype, "size", {
                  get: function() {
                    return this._map.size;
                  }, enumerable: !0, configurable: !0,
                }), e.prototype.has = function(e) {
                  return this._map.has(e);
                }, e.prototype.add = function(e) {
                  return this._map.set(e, e), this;
                }, e.prototype.delete = function(e) {
                  return this._map.delete(e);
                }, e.prototype.clear = function() {
                  this._map.clear();
                }, e.prototype.keys = function() {
                  return this._map.keys();
                }, e.prototype.values = function() {
                  return this._map.values();
                }, e.prototype.entries = function() {
                  return this._map.entries();
                }, e.prototype["@@iterator"] = function() {
                  return this.keys();
                }, e.prototype[i] = function() {
                  return this.keys();
                }, e;
              }();
            }

            function re() {
              var e = 16, n = u.create(), r = o();
              return function() {
                function e() {
                  this._key = o();
                }

                return e.prototype.has = function(e) {
                  var t = i(e, !1);
                  return void 0 !== t && u.has(t, this._key);
                }, e.prototype.get = function(e) {
                  var t = i(e, !1);
                  return void 0 !== t ? u.get(t, this._key) : void 0;
                }, e.prototype.set = function(e, t) {
                  return i(e, !0)[this._key] = t, this;
                }, e.prototype.delete = function(e) {
                  var t = i(e, !1);
                  return void 0 !== t && delete t[this._key];
                }, e.prototype.clear = function() {
                  this._key = o();
                }, e;
              }();

              function o() {
                var e;
                do {
                  e = "@@WeakMap@@" + c();
                } while (u.has(n, e));
                return n[e] = !0, e;
              }

              function i(e, n) {
                if (!t.call(e, r)) {
                  if (!n) return;
                  Object.defineProperty(e, r, { value: u.create() });
                }
                return e[r];
              }

              function a(e, t) {
                for (var n = 0; n < t; ++n) e[n] = 255 * Math.random() | 0;
                return e;
              }

              function s(e) {
                return "function" == typeof Uint8Array ? "undefined" != typeof crypto ? crypto.getRandomValues(new Uint8Array(e)) : "undefined" != typeof msCrypto ? msCrypto.getRandomValues(new Uint8Array(e)) : a(new Uint8Array(e), e) : a(new Array(e), e);
              }

              function c() {
                var t = s(e);
                t[6] = 79 & t[6] | 64, t[8] = 191 & t[8] | 128;
                for (var n = "", r = 0; r < e; ++r) {
                  var o = t[r];
                  4 !== r && 6 !== r && 8 !== r || (n += "-"), o < 16 && (n += "0"), n += o.toString(16).toLowerCase();
                }
                return n;
              }
            }

            function oe(e) {
              return e.__ = void 0, delete e.__, e;
            }

            e("decorate", h), e("metadata", m), e("defineMetadata", _), e("hasMetadata", y), e("hasOwnMetadata", v), e("getMetadata", b), e("getOwnMetadata", w), e("getMetadataKeys", C), e("getOwnMetadataKeys", x), e("deleteMetadata", O);
          }(r);
        }();
      }(r || (r = {}));
    },
    333: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }, s = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      }), c = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }, u = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : { default: e };
      };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const l = s(n(398)), d = n(764), f = u(n(788)), p = n(968), g = n(98);
      let h = class extends d.CommonCommand {
        async getDefinitions(e) {
          const { uri: t, start_index: n } = e, r = l.Uri.parse(t);
          try {
            const e = (await l.workspace.openTextDocument(r)).positionAt(n), t = new l.Position(e.line, e.character),
              o = await this.commands.executeCommand("vscode.executeDefinitionProvider", r, t);
            return (0, p.convertLocation)(o);
          } catch (e) {
            return this.logger.error("getDefinitions error", e), [];
          }
        }

        async getBatchDefinitions(e) {
          const { uri: t, start_indexes: n } = e,
            r = await Promise.all(n.map((e => this.getDefinitions({ uri: t, start_index: e })))), o = {};
          return r.forEach(((e, t) => {
            e.length > 0 && (o[`${n[t]}`] = e);
          })), o;
        }
      };
      a([(0, g.Command)(f.default.codeNavigation.getDefinitions), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], h.prototype, "getDefinitions", null), a([(0, g.Command)(f.default.codeNavigation.getBatchDefinitions), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], h.prototype, "getBatchDefinitions", null), h = a([(0, g.CommandHandler)()], h), t.default = h;
    },
    764: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }, s = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      }), c = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      };
      Object.defineProperty(t, "__esModule", { value: !0 }), t.CommonCommand = void 0;
      const u = s(n(398)), l = n(28), d = n(815), f = n(597), p = n(421);
      let g = class {
        get inlineSelectionContext() {
          return new p.InlineSelectionContext;
        }

        get previousDocument() {
        }

        get window() {
          return u.window;
        }

        get commands() {
          return u.commands;
        }

        get workspace() {
          return u.workspace;
        }
      };
      t.CommonCommand = g, a([(0, l.Inject)(), c("design:type", d.Logger)], g.prototype, "logger", void 0), t.CommonCommand = g = a([(0, l.Injectable)({ scope: f.ScopeEnum.SINGLETON })], g);
    },
    725: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }, s = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      }), c = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }, u = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : { default: e };
      };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const l = s(n(398)), d = n(98), f = u(n(788)), p = n(968);
      let g = class {
        async getDiagnostics({ whole_range: e, message: t }) {
          const n = l.window.activeTextEditor?.document.uri;
          if (!n) return { range: e, diagnostics: [] };
          let r = l.languages.getDiagnostics(n).filter((t => !!t.range.intersection(p.RangeConverter.toVS(e))));
          if (t) {
            const e = r.filter((e => t.includes(e.message)));
            r = e.length > 0 ? e : r;
          }
          const o = r.map((e => ({
            range: p.RangeConverter.toProtocol(e.range),
            message: e.message,
            severity: e.severity,
            source: e.source || "",
            related_information: e.relatedInformation?.map((e => ({
              location: p.LocationConverter.toProtocol(e.location),
              message: e.message,
            }))) ?? [],
          }))), i = r.length > 0 ? function(e) {
            const t = e.map((e => e.range)).reduce(((e, t) => e.union(t)));
            return p.RangeConverter.toProtocol(t);
          }(r) : e;
          return { range: i, diagnostics: o };
        }
      };
      a([(0, d.Command)(f.default.diagnostic.getDiagnostics), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], g.prototype, "getDiagnostics", null), g = a([(0, d.CommandHandler)()], g), t.default = g;
    },
    925: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }, s = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      }), c = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }, u = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : { default: e };
      };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const l = s(n(398)), d = n(98), f = u(n(788)), p = n(968), g = n(904), h = n(622), m = n(815);
      let _ = class {
        async getFixSelectionContext(e) {
          let { uri: t, include_markers: n, range: r, range_of_interest: o, char_limit: i } = e;
          const a = await (0, h.openTextDocument)(t),
            s = { range: p.RangeConverter.toVS(r), rangeOfInterest: p.RangeConverter.toVS(o) };
          m.logger.info("selection", s);
          const c = this.generateFixContext(a, s, i).contextInfo, u = this.generateFixContextPrompts(c), d = {
              above_code: c.above.generatePrompt(n).join("\n"),
              below_code: c.below.generatePrompt(n).join("\n"),
              selected_code: c.range.generatePrompt(n).join("\n"),
              language: a.languageId,
              current_filename: a.fileName,
            }, f = {
              uri: a.uri.fsPath,
              version: a.version,
              ranges: [c.range.toRange(), c.above.toRange(), c.below.toRange()].filter((e => !!e)).map(p.RangeConverter.toProtocol),
            }, g = new l.Selection(c.range.firstLineIndex, 0, c.range.lastLineIndex + 1, 0),
            _ = p.SelectionConverter.toProtocol(g, a);
          return {
            user_messages: u,
            raw_content: d,
            used_context: f,
            metadata: {
              expanded_range: r,
              context_info: {
                language: c.language,
                above: {
                  char_limit: c.above.tracker.charLimit,
                  language: c.above.language,
                  unique_str: c.above.uniqueStr,
                  lines: c.above.lines,
                  first_line_index: c.above.firstLineIndex,
                  last_line_index: c.above.lastLineIndex,
                  is_complete: c.above.isComplete,
                },
                range: {
                  char_limit: c.range.tracker.charLimit,
                  language: c.range.language,
                  unique_str: c.range.uniqueStr,
                  lines: c.range.lines,
                  first_line_index: c.range.firstLineIndex,
                  last_line_index: c.range.lastLineIndex,
                  is_complete: c.range.isComplete,
                },
                below: {
                  char_limit: c.below.tracker.charLimit,
                  language: c.below.language,
                  unique_str: c.below.uniqueStr,
                  lines: c.below.lines,
                  first_line_index: c.below.firstLineIndex,
                  last_line_index: c.below.lastLineIndex,
                  is_complete: c.below.isComplete,
                },
                outline_above: c.outlineAbove,
                outline_below: c.outlineBelow,
                selection: _,
              },
            },
          };
        }

        generateFixContext(e, t, n) {
          const r = new g.CodeContextTracker(n), o = (0, h.getLanguageLineCommentToken)(e.languageId),
            i = new g.CodeContextRegion(r, e, o, "ed8c6549bwf9"), a = new g.CodeContextRegion(r, e, o, "abpxx6d04wxr"),
            s = new g.CodeContextRegion(r, e, o, "be15d9bcejpp"), c = () => (a.trim(), i.trim(), s.trim(), {
              contextInfo: {
                language: o,
                above: a,
                range: i,
                below: s,
                outlineAbove: "",
                outlineBelow: "",
              }, tracker: r,
            });
          if (!this.isContextInRange(i, t)) return c();
          const u = {
            aboveLineIndex: t.rangeOfInterest.start.line - 1,
            belowLineIndex: t.rangeOfInterest.end.line + 1,
            minimumLineIndex: 0,
            maximumLineIndex: e.lineCount - 1,
          };
          return (0, g.checkRegionCompleteness)(u, a, s), c();
        }

        generateFixContextPrompts(e) {
          const t = [];
          if (e.above.hasContent) {
            const n = [];
            n.push("I have the following code above the selection:"), n.push(...e.above.generatePrompt(!0)), t.push(n.join("\n"));
          }
          if (e.below.hasContent) {
            const n = [];
            n.push("I have the following code below the selection:"), n.push(...e.below.generatePrompt(!0)), t.push(n.join("\n"));
          }
          if (e.range.hasContent) {
            const n = [];
            n.push("I have the following code in the selection:"), n.push(...e.range.generatePrompt(!0)), t.push(n.join("\n"));
          } else t.push("There is no code in the selection.");
          return t.push([`Only change the code inside of the selection, delimited by markers '${e.range.startMarker}' and '${e.range.endMarker}'.`].join("\n")), t;
        }

        isContextInRange(e, t) {
          const n = t.range, r = t.rangeOfInterest, o = Math.floor((n.start.line + n.end.line) / 2),
            i = Math.max(o - r.start.line, r.end.line - o);
          e.appendLine(o);
          for (let t = 1; t <= i; t++) {
            const n = o - t, i = o + t;
            if (n >= r.start.line && !e.prependLine(n) || i <= r.end.line && !e.appendLine(i)) return !1;
          }
          return !0;
        }
      };
      a([(0, d.Command)(f.default.fix.getFixSelectionContext), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], _.prototype, "getFixSelectionContext", null), _ = a([(0, d.CommandHandler)()], _), t.default = _;
    },
    538: function(e, t, n) {
      "use strict";
      var r = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }, o = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }, i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : { default: e };
      };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = n(98), s = n(28), c = n(815), u = n(305), l = i(n(788));
      let d = class {
        constructor() {
        }

        async getEditorSelectionTracking() {
          const e = {
            is_select_code: this._editorSelectionTrackingService.hasSelection,
            last_select_time: this._editorSelectionTrackingService.lastTrackingTime || 0,
          };
          return this._logger.info("getEditorSelectionTracking", e), this._editorSelectionTrackingService.reset(), e;
        }
      };
      r([(0, s.Inject)(), o("design:type", c.Logger)], d.prototype, "_logger", void 0), r([(0, s.Inject)(), o("design:type", u.EditorSelectionTrackingService)], d.prototype, "_editorSelectionTrackingService", void 0), r([(0, a.Command)(l.default.selection.getEditorSelectionTracking), o("design:type", Function), o("design:paramtypes", []), o("design:returntype", Promise)], d.prototype, "getEditorSelectionTracking", null), d = r([(0, a.CommandHandler)(), o("design:paramtypes", [])], d), t.default = d;
    },
    18: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }, s = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      }), c = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }, u = this && this.__param || function(e, t) {
        return function(n, r) {
          t(n, r, e);
        };
      }, l = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : { default: e };
      };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const d = s(n(398)), f = n(98), p = n(28), g = l(n(788)), h = n(355), m = n(815);
      let _ = class {
        constructor(e) {
          this.logger = e;
        }

        async getTerminalLastCommand() {
          const e = this.activeTerminalService.terminalLastCommand;
          return { command_line: e?.commandLine || "", cwd: e?.cwd?.toString() || "", output: e?.output || "" };
        }

        async getTerminalSelection() {
          const e = d.window.activeTerminal;
          return e?.selection ?? "";
        }
      };
      a([(0, p.Inject)(), c("design:type", h.ActiveTerminalService)], _.prototype, "activeTerminalService", void 0), a([(0, f.Command)(g.default.terminal.getTerminalLastCommand), c("design:type", Function), c("design:paramtypes", []), c("design:returntype", Promise)], _.prototype, "getTerminalLastCommand", null), a([(0, f.Command)(g.default.terminal.getTerminalSelection), c("design:type", Function), c("design:paramtypes", []), c("design:returntype", Promise)], _.prototype, "getTerminalSelection", null), _ = a([(0, f.CommandHandler)(), u(0, (0, p.Inject)()), c("design:paramtypes", [m.Logger])], _), t.default = _;
    },
    309: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }, s = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      }), c = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }, u = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : { default: e };
      };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const l = s(n(398)), d = n(98), f = u(n(788)), p = n(622), g = n(655), h = n(968), m = n(421);
      let _ = class {
        getActiveFileName() {
          return l.window.activeTextEditor?.document.fileName;
        }

        get inlineSelectionContext() {
          return new m.InlineSelectionContext;
        }

        async getDocumentByUri({ uri: e }) {
          const t = await (0, p.openTextDocument)(e);
          return {
            uri: t.uri.fsPath,
            file_name: t.fileName,
            language_id: t.languageId,
            text: t.getText(),
            version: t.version,
            scheme: t.uri.scheme,
            is_dirty: t.isDirty,
          };
        }

        async getTextByRange({ uri: e, range: t }) {
          return (await (0, p.openTextDocument)(e)).getText(h.RangeConverter.toVS(t));
        }

        async getDocumentOffsetRange(e) {
          const t = await (0, p.openTextDocument)(e.uri), n = new l.Position(e.start.line, e.start.character),
            r = new l.Position(e.end.line, e.end.character);
          return { start_index: t.offsetAt(n), end_index: t.offsetAt(r) };
        }

        async getDocumentAndOffsetRange(e) {
          return { range: await this.getDocumentOffsetRange(e), document: await this.getDocumentByUri({ uri: e.uri }) };
        }

        async getBatchDocumentAndOffsetRange(e) {
          return await Promise.all(e.map((e => this.getDocumentAndOffsetRange(e))));
        }

        async getDocumentPostionAt(e) {
          const t = (await (0, p.openTextDocument)(e.uri)).positionAt(e.index);
          return h.PositionConverter.toProtocol(t);
        }

        _getAllWorkspaceFolders() {
          return l.workspace.workspaceFolders?.map((e => e.uri.fsPath)) ?? [];
        }

        getWorkspaceFolder(e) {
          return this._getAllWorkspaceFolders().find((t => e.startsWith(t)));
        }

        getWorkspaceFolders() {
          return this._getAllWorkspaceFolders();
        }

        getActiveTextEditor() {
          try {
            const e = l.window.activeTextEditor;
            return (0, p.convertEditorToDocument)(e);
          } catch (e) {
            throw Error(e);
          }
        }

        async getMetadataContext(e) {
          const { include_markers: t, node_to_document: n, selection: r } = e, o = l.window.activeTextEditor?.document,
            i = new l.Position(n.range.start.line, n.range.start.character),
            a = new l.Position(n.range.end.line, n.range.end.character), s = new l.Range(i, a);
          n.range = s;
          const { metadata: c, serverContext: u } = (0, p.getMetadataContext)(n, o, r), d = [], f = c.contextInfo.range,
            m = c.contextInfo, _ = [];
          let y;
          f.hasContent && (y = f.generatePrompt(t), _.push(...y), d.push(_.join("\n")));
          const v = y?.join("\n"), b = (0, g.getExists)([f.toRange()]).map(h.RangeConverter.toProtocol),
            w = new l.Selection(f.firstLineIndex, 0, f.lastLineIndex + 1, 0), C = h.SelectionConverter.toProtocol(w, o);
          return {
            selected_code: v || "",
            user_messages: d,
            server_context: u,
            ranges: b,
            metadata: {
              expanded_range: h.RangeConverter.toProtocol(s),
              context_info: {
                language: m.language,
                above: {
                  char_limit: m.above.tracker.charLimit,
                  language: m.above.language,
                  unique_str: m.above.uniqueStr,
                  lines: m.above.lines,
                  first_line_index: m.above.firstLineIndex,
                  last_line_index: m.above.lastLineIndex,
                  is_complete: m.above.isComplete,
                },
                range: {
                  char_limit: m.range.tracker.charLimit,
                  language: m.range.language,
                  unique_str: m.range.uniqueStr,
                  lines: m.range.lines,
                  first_line_index: m.range.firstLineIndex,
                  last_line_index: m.range.lastLineIndex,
                  is_complete: m.range.isComplete,
                },
                below: {
                  char_limit: m.below.tracker.charLimit,
                  language: m.below.language,
                  unique_str: m.below.uniqueStr,
                  lines: m.below.lines,
                  first_line_index: m.below.firstLineIndex,
                  last_line_index: m.below.lastLineIndex,
                  is_complete: m.below.isComplete,
                },
                outline_above: m.outlineAbove,
                outline_below: m.outlineBelow,
                selection: C,
              },
            },
          };
        }

        async getWholeRange({ function_positions: e }) {
          const t = l.window.activeTextEditor, n = t?.document;
          if (!n) return {};
          const { range: r, selectFunctions: o } = (0, g.expandRangeToFunctions)(n, e, t.selection);
          return { selected_functions: o, range: h.RangeConverter.toProtocol(n.validateRange(r)) };
        }

        async getInlineChatContext({
                                     function_positions: e,
                                     function_bodies: t,
                                     whole_range: n,
                                     char_limit: r = 1e3,
                                     include_markers: o,
                                   }) {
          const i = l.window.activeTextEditor, a = i?.document;
          if (!a) return {};
          const { range: s } = (0, g.expandRangeToFunctions)(a, e, i.selection),
            c = (0, g.getAppropriateRange)(h.RangeConverter.toVS(n), s),
            u = this.inlineSelectionContext.generateCurrentSelectionContext({
              textDocument: a,
              selection: i.selection,
              expandedRange: c,
              rangeExpandedToFunction: s,
              functionBodies: t,
              charLimit: r,
            }), d = this.inlineSelectionContext.generateSelectionContextPrompts(a, u), f = {
              uri: a.uri.fsPath,
              version: a.version,
              ranges: (0, g.getExists)([u.range.toRange(), u.above.toRange(), u.below.toRange()]).map(h.RangeConverter.toProtocol),
            }, p = {
              above_code: u.above.generatePrompt(o).join("\n"),
              outline_above_code: this.inlineSelectionContext.formatOutlineContent(u.outlineAbove, a, !o).join("\n"),
              below_code: u.below.generatePrompt(o).join("\n"),
              outline_below_code: this.inlineSelectionContext.formatOutlineContent(u.outlineBelow, a, !o).join("\n"),
              selected_code: u.range.generatePrompt(o).join("\n"),
              language: a.languageId,
              current_filename: a.fileName,
            }, m = new l.Selection(u.range.firstLineIndex, 0, u.range.lastLineIndex + 1, 0),
            _ = h.SelectionConverter.toProtocol(m, a);
          return {
            user_messages: d,
            used_context: f,
            metadata: {
              expanded_range: h.RangeConverter.toProtocol(c),
              context_info: {
                language: u.language,
                above: {
                  char_limit: u.above.tracker.charLimit,
                  language: u.above.language,
                  unique_str: u.above.uniqueStr,
                  lines: u.above.lines,
                  first_line_index: u.above.firstLineIndex,
                  last_line_index: u.above.lastLineIndex,
                  is_complete: u.above.isComplete,
                },
                range: {
                  char_limit: u.range.tracker.charLimit,
                  language: u.range.language,
                  unique_str: u.range.uniqueStr,
                  lines: u.range.lines,
                  first_line_index: u.range.firstLineIndex,
                  last_line_index: u.range.lastLineIndex,
                  is_complete: u.range.isComplete,
                },
                below: {
                  char_limit: u.below.tracker.charLimit,
                  language: u.below.language,
                  unique_str: u.below.uniqueStr,
                  lines: u.below.lines,
                  first_line_index: u.below.firstLineIndex,
                  last_line_index: u.below.lastLineIndex,
                  is_complete: u.below.isComplete,
                },
                outline_above: u.outlineAbove,
                outline_below: u.outlineBelow,
                selection: _,
              },
            },
            raw_contents: p,
          };
        }

        async expandRangeToEncompassingFunction({ function_positions: e, use_whole_range: t = !0 }) {
          const n = l.window.activeTextEditor, r = n?.document;
          if (!r) return;
          let o = n.selection;
          o.isEmpty && t && (o = n.visibleRanges[0]);
          const { range: i, selectFunctions: a, contentLength: s } = (0, g.expandRangeToFunctions)(r, e, o);
          return {
            content_length: s || 0,
            select_functions: (0, g.filterInnerFunctions)(a).map((e => ({
              ...e,
              range: h.RangeConverter.toProtocol(r.validateRange(e.range)),
            }))),
            range: h.RangeConverter.toProtocol(r.validateRange(i)),
          };
        }
      };
      a([(0, d.Command)(f.default.workspace.getActiveFileName), c("design:type", Function), c("design:paramtypes", []), c("design:returntype", Object)], _.prototype, "getActiveFileName", null), a([(0, d.Command)(f.default.workspace.getDocumentByUri), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], _.prototype, "getDocumentByUri", null), a([(0, d.Command)(f.default.workspace.getTextByRange), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], _.prototype, "getTextByRange", null), a([(0, d.Command)(f.default.workspace.getDocumentOffsetRange), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], _.prototype, "getDocumentOffsetRange", null), a([(0, d.Command)(f.default.workspace.getDocumentAndOffsetRange), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], _.prototype, "getDocumentAndOffsetRange", null), a([(0, d.Command)(f.default.workspace.getBatchDocumentAndOffsetRange), c("design:type", Function), c("design:paramtypes", [Array]), c("design:returntype", Promise)], _.prototype, "getBatchDocumentAndOffsetRange", null), a([(0, d.Command)(f.default.workspace.getDocumentPostionAt), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], _.prototype, "getDocumentPostionAt", null), a([(0, d.Command)(f.default.workspace.getWorkspaceFolder), c("design:type", Function), c("design:paramtypes", [String]), c("design:returntype", void 0)], _.prototype, "getWorkspaceFolder", null), a([(0, d.Command)(f.default.workspace.getWorkspaceFolders), c("design:type", Function), c("design:paramtypes", []), c("design:returntype", void 0)], _.prototype, "getWorkspaceFolders", null), a([(0, d.Command)(f.default.workspace.getActiveTextEditor), c("design:type", Function), c("design:paramtypes", []), c("design:returntype", Object)], _.prototype, "getActiveTextEditor", null), a([(0, d.Command)(f.default.workspace.getMetadataContext), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], _.prototype, "getMetadataContext", null), a([(0, d.Command)(f.default.workspace.getWholeRange), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], _.prototype, "getWholeRange", null), a([(0, d.Command)(f.default.chat.getInlineChatContext), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], _.prototype, "getInlineChatContext", null), a([(0, d.Command)(f.default.workspace.expandRangeToFunctions), c("design:type", Function), c("design:paramtypes", [Object]), c("design:returntype", Promise)], _.prototype, "expandRangeToEncompassingFunction", null), _ = a([(0, d.CommandHandler)()], _), t.default = _;
    },
    788: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = {
        workspace: {
          getActiveFileName: "icube.ai.native.getActiveFileName",
          getActiveTextEditor: "icube.ai.native.workspace.getActiveTextEditor",
          getDocument: "icube.ai.native.workspace.getDocument",
          getWorkspaceFolder: "icube.ai.native.workspace.getWorkspaceFolder",
          getWorkspaceFolders: "icube.ai.native.workspace.getWorkspaceFolders",
          getWorkspaceLabels: "icube.ai.native.workspace.getWorkspaceLabels",
          getDocumentOffsetRange: "icube.ai.native.workspace.getDocumentOffsetRange",
          getDocumentAndOffsetRange: "icube.ai.native.workspace.getDocumentAndOffsetRange",
          getBatchDocumentAndOffsetRange: "icube.ai.native.workspace.getBatchDocumentAndOffsetRange",
          getDocumentPostionAt: "icube.ai.native.workspace.getDocumentPostionAt",
          getMetadataContext: "icube.ai.native.workspace.getMetadataContext",
          getWholeRange: "icube.ai.native.workspace.getWholeRange",
          getDocumentByUri: "icube.ai.native.workspace.getDocumentByUri",
          getTextByRange: "icube.ai.native.workspace.getTextByRange",
          expandRangeToFunctions: "icube.ai.native.workspace.expandRangeToFunctions",
        },
        chat: { getInlineChatContext: "icube.ai.native.chat.getInlineChatContext" },
        diagnostic: { getDiagnostics: "icube.ai.native.diagnostic.getDiagnostics" },
        fix: { getFixSelectionContext: "icube.ai.native.fix.getFixSelectionContext" },
        codeNavigation: {
          getDefinitions: "icube.ai.native.codeNavigation.getDefinitions",
          getBatchDefinitions: "icube.ai.native.codeNavigation.getBatchDefinitions",
        },
        terminal: {
          getTerminalLastCommand: "icube.ai.native.terminal.getTerminalLastCommand",
          getTerminalSelection: "icube.ai.native.terminal.getTerminalSelection",
        },
        selection: { getEditorSelectionTracking: "icube.ai.native.selection.getEditorSelectionTracking" },
      };
    },
    825: (e, t) => {
      "use strict";

      function n(e, t) {
        return Object.fromEntries(e.map((e => [e, t])));
      }

      Object.defineProperty(t, "__esModule", { value: !0 }), t.FUNC_DECL = t.LanguageMarkers = void 0, t.assignSameArrayToDifferentLanguages = n, t.LanguageMarkers = {
        abap: { start: "\"", end: "" },
        bat: { start: "REM", end: "" },
        bibtex: { start: "%", end: "" },
        blade: { start: "#", end: "" },
        c: { start: "//", end: "" },
        clojure: { start: ";", end: "" },
        coffeescript: { start: "//", end: "" },
        cpp: { start: "//", end: "" },
        csharp: { start: "//", end: "" },
        css: { start: "/*", end: "*/" },
        dart: { start: "//", end: "" },
        dockerfile: { start: "#", end: "" },
        elixir: { start: "#", end: "" },
        erb: { start: "<%#", end: "%>" },
        erlang: { start: "%", end: "" },
        fsharp: { start: "//", end: "" },
        go: { start: "//", end: "" },
        groovy: { start: "//", end: "" },
        haml: { start: "-#", end: "" },
        handlebars: { start: "{{!", end: "}}" },
        haskell: { start: "--", end: "" },
        html: { start: "\x3c!--", end: "--\x3e" },
        ini: { start: ";", end: "" },
        java: { start: "//", end: "" },
        javascript: { start: "//", end: "" },
        javascriptreact: { start: "//", end: "" },
        jsonc: { start: "//", end: "" },
        jsx: { start: "//", end: "" },
        julia: { start: "#", end: "" },
        kotlin: { start: "//", end: "" },
        latex: { start: "%", end: "" },
        less: { start: "//", end: "" },
        lua: { start: "--", end: "" },
        makefile: { start: "#", end: "" },
        markdown: { start: "[]: #", end: "" },
        "objective-c": { start: "//", end: "" },
        "objective-cpp": { start: "//", end: "" },
        perl: { start: "#", end: "" },
        php: { start: "//", end: "" },
        powershell: { start: "#", end: "" },
        pug: { start: "//", end: "" },
        python: { start: "#", end: "" },
        ql: { start: "//", end: "" },
        r: { start: "#", end: "" },
        razor: { start: "\x3c!--", end: "--\x3e" },
        ruby: { start: "#", end: "" },
        rust: { start: "//", end: "" },
        sass: { start: "//", end: "" },
        scala: { start: "//", end: "" },
        scss: { start: "//", end: "" },
        shellscript: { start: "#", end: "" },
        slim: { start: "/", end: "" },
        solidity: { start: "//", end: "" },
        sql: { start: "--", end: "" },
        stylus: { start: "//", end: "" },
        svelte: { start: "\x3c!--", end: "--\x3e" },
        swift: { start: "//", end: "" },
        terraform: { start: "#", end: "" },
        tex: { start: "%", end: "" },
        typescript: { start: "//", end: "" },
        typescriptreact: { start: "//", end: "" },
        vb: { start: "'", end: "" },
        verilog: { start: "//", end: "" },
        "vue-html": { start: "\x3c!--", end: "--\x3e" },
        vue: { start: "//", end: "" },
        xml: { start: "\x3c!--", end: "--\x3e" },
        xsl: { start: "\x3c!--", end: "--\x3e" },
        yaml: { start: "#", end: "" },
      }, t.FUNC_DECL = {
        ...n(["typescript", "tsx", "typescriptreact"], ["function_declaration", "generator_function_declaration", "method_definition", "arrow_function"]),
        javascript: ["function_declaration", "generator_function_declaration", "method_definition", "arrow_function"],
        java: ["constructor_declaration", "method_declaration"],
        cpp: ["function_definition", "namespace_definition", "function_declarator"],
        csharp: ["constructor_declaration", "destructor_declaration", "method_declaration"],
        python: ["function_definition"],
        go: ["function_declaration", "method_declaration"],
        ruby: ["method"],
        rust: ["function_item"],
      };
    },
    98: function(e, t, n) {
      "use strict";
      var r = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : { default: e };
      };
      Object.defineProperty(t, "__esModule", { value: !0 }), t.setupCommands = t.CommandHandler = t.COMMAND_HANDLER_TAG = t.COMMAND_HANDLER_META_TAG = t.COMMAND_NAME_META_TAG = void 0, t.Command = function(e) {
        return (n, r, o) => {
          Reflect.defineMetadata(t.COMMAND_NAME_META_TAG, e, o.value);
        };
      };
      const o = r(n(398)), i = n(597), a = n(888), s = n(815), c = n(410);
      t.COMMAND_NAME_META_TAG = Symbol.for("COMMAND_NAME_META_TAG"), t.COMMAND_HANDLER_META_TAG = Symbol.for("COMMAND_HANDLER_META_TAG"), t.COMMAND_HANDLER_TAG = "COMMAND_HANDLER_TAG";
      t.CommandHandler = () => e => {
        const n = [], r = e.prototype, o = Object.getOwnPropertyNames(r);
        for (let e = 0; e < o.length; e++) {
          const i = o[e], a = Reflect.getOwnPropertyDescriptor(r, i);
          if (a && a.value) {
            const { value: e } = a, r = Reflect.getOwnMetadata(t.COMMAND_NAME_META_TAG, e);
            r && n.push({ commandID: r, propertyKey: i });
          }
        }
        Reflect.defineMetadata(t.COMMAND_HANDLER_META_TAG, n, e), (0, i.addTag)(t.COMMAND_HANDLER_TAG, e), (0, i.Injectable)({ scope: i.ScopeEnum.SINGLETON })(e), a.container.set({ type: e });
      };
      t.setupCommands = e => {
        const n = a.container.get(s.Logger), r = a.container.getInjectableByTag(t.COMMAND_HANDLER_TAG);
        for (let i = 0; i < r.length; i++) {
          const s = r[i], u = Reflect.getOwnMetadata(t.COMMAND_HANDLER_META_TAG, s);
          for (let t = 0; t < u.length; t++) {
            const r = a.container.get(s), { commandID: i, propertyKey: l } = u[t];
            e.subscriptions.push(o.default.commands.registerCommand(i, (async (...e) => {
              let t;
              const a = {
                name: c.SlardarEventName.CommandExecute,
                status: c.SlardarEventStatus.Success,
                costTime: Date.now(),
                executionType: "extension",
                command: i,
              };
              try {
                return t = await r[l](...e), t;
              } catch (e) {
                n.error(`command ${i} error: `, e.message, e.stack), a.status = c.SlardarEventStatus.Failed, a.errorMsg = e.message;
              } finally {
                n.info(`commandID ${i}, args = ${JSON.stringify(e)}, res = ${JSON.stringify(t || {})}, costTime = ${Date.now() - a.costTime}`), a.costTime = Date.now() - a.costTime, o.default.commands.executeCommand("icube.event.aiSlardarReport", a);
              }
            })));
          }
        }
      };
    },
    888: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.Test = t.METADATA_PARAM_DECORATORS = t.container = t.contextID = void 0, t.setupContainer = function(e) {
        t.container.set({ id: t.contextID, value: e, scope: r.ScopeEnum.SINGLETON });
      };
      const r = n(597);
      t.contextID = Symbol("extensionContext"), t.container = new r.Container("default"), t.METADATA_PARAM_DECORATORS = "metadata_param_decorators";
      t.Test = class {
      };
    },
    28: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.Inject = void 0, t.Injectable = function(e = {}) {
        return t => {
          (0, r.Injectable)({ ...e })(t), o.container.set({ type: t });
        };
      };
      const r = n(597), o = n(888);
      var i = n(597);
      Object.defineProperty(t, "Inject", {
        enumerable: !0, get: function() {
          return i.Inject;
        },
      });
    },
    815: function(e, t, n) {
      "use strict";
      var r = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      };
      Object.defineProperty(t, "__esModule", { value: !0 }), t.Logger = t.logger = void 0;
      const o = n(398), i = n(28), a = n(597);
      t.logger = o.window.createOutputChannel("AI Assistant", { log: !0 });
      let s = class {
        constructor() {
          this.logger = t.logger;
        }

        info(e, ...t) {
          return this.logger.info(e, ...t);
        }

        error(e, ...t) {
          return this.logger.info(e, ...t);
        }
      };
      t.Logger = s, t.Logger = s = r([(0, i.Injectable)({ scope: a.ScopeEnum.SINGLETON })], s);
    },
    528: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      });
      Object.defineProperty(t, "__esModule", { value: !0 }), t.activate = async function(e) {
        const t = {
          name: f.SlardarEventName.AIExtensionActive,
          status: f.SlardarEventStatus.Success,
          costTime: Date.now(),
        };
        try {
          (0, c.setupContainer)(e), (0, u.setupCommands)(e);
          c.container.get(l.CKGService).init();
          c.container.get(d.EditorSelectionTrackingService).activate();
        } catch (e) {
          t.status = f.SlardarEventStatus.Failed, t.errorMsg = e.message;
        } finally {
          t.costTime = Date.now() - t.costTime, s.commands.executeCommand("icube.event.aiSlardarReport", t);
        }
      }, t.deactivate = function() {
        c.container.get(l.CKGService).stopCkgServer();
        c.container.get(d.EditorSelectionTrackingService).deactivate();
      };
      const s = a(n(398));
      n(936);
      const c = n(888), u = n(98);
      n(764), n(309), n(333), n(725), n(925), n(18), n(538), n(421), n(355);
      const l = n(850), d = n(305), f = n(410);
    },
    355: function(e, t, n) {
      "use strict";
      var r = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }, o = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : { default: e };
      };
      Object.defineProperty(t, "__esModule", { value: !0 }), t.ActiveTerminalService = void 0;
      const i = o(n(398)), a = n(28), s = n(597), c = new Map, u = new Map;

      function l(e, t, n) {
        e.length === n && e.shift(), e.push(t);
      }

      function d() {
        const e = i.default.window.activeTerminal;
        if (void 0 === e) return "";
        {
          const t = u.get(e);
          return t ? t.join("\n") : "";
        }
      }

      i.default.window.onDidWriteTerminalData((e => {
        const t = u.get(e.terminal);
        t ? l(t, e.data, 200) : u.set(e.terminal, [e.data]);
      })), i.default.window.onDidExecuteTerminalCommand((e => {
        const t = c.get(e.terminal);
        if (void 0 !== e.exitCode && 0 !== e.exitCode) {
          const t = 1024;
          let n = e.output ?? "unknown";
          n.length > t && (n = n.substring(0, 500) + " <...> " + n.substring(n.length - 500));
        }
        t ? e.commandLine && l(t, e, 40) : c.set(e.terminal, [e]);
      })), i.default.window.onDidCloseTerminal((e => {
        c.delete(e), u.delete(e);
      }));
      var f = "";
      let p = class {
        get terminalBuffer() {
          return function() {
            const e = i.default.window.activeTerminal;
            if (!e) return "";
            const t = c.get(e);
            if (t) return t.map((e => `${e.commandLine}\n${e.output}`)).join("\n");
            return d();
          }();
        }

        get terminalRawData() {
          return d();
        }

        get terminalLastCommand() {
          return function() {
            const e = i.default.window.activeTerminal;
            if (e) {
              const t = c.get(e);
              if (t) return t[t.length - 1];
            }
          }();
        }

        get terminalSelection() {
          return function() {
            const e = i.default.window.activeTerminal;
            return e?.selection ?? "";
          }();
        }

        get terminalShellType() {
          return function() {
            let e = i.default.window.activeTerminal;
            if (e && "shellPath" in e.creationOptions) {
              let t = e.creationOptions.shellPath;
              if (t) {
                let e, n = new URL(t).pathname.split("/").pop();
                if ("bash.exe" === n) e = "Git Bash"; else {
                  let t = n?.replace(/\..+/, "");
                  switch (t) {
                    case"pwsh":
                    case"":
                      break;
                    default:
                      e = t;
                  }
                }
                if (e) return f = e, e;
              }
            }
            return f || i.default.env.shell;
          }();
        }
      };
      t.ActiveTerminalService = p, t.ActiveTerminalService = p = r([(0, a.Injectable)({ scope: s.ScopeEnum.SINGLETON })], p);
    },
    850: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }, s = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      }), c = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }, u = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : { default: e };
      };
      Object.defineProperty(t, "__esModule", { value: !0 }), t.CKGService = void 0;
      const l = s(n(398)), d = n(28), f = n(815), p = n(597), g = u(n(5)), h = n(980);
      let m = class {
        async init() {
          this.registerDocumentEvent();
        }

        async stopCkgServer() {
          await this.callRpc({ method: "stop", data: JSON.stringify({}) });
        }

        registerDocumentEvent() {
          const e = l.workspace.createFileSystemWatcher("**/*");
          e.onDidChange((0, g.default)((e => this.handleDocumentEvent("document_change", e)), 1500)), e.onDidCreate((0, g.default)((e => this.handleDocumentEvent("document_create", e))), 1500), e.onDidDelete((0, g.default)((e => this.handleDocumentEvent("document_delete", e))), 1500), l.workspace.onDidOpenTextDocument((0, g.default)((e => this.handleDocumentEvent("document_select", e.uri)), 1500));
        }

        async handleDocumentEvent(e, t) {
          const n = await (0, h.getUserAccount)(), r = this.getPath(t);
          r && await this.callRpc({
            method: "document_action",
            data: JSON.stringify({ method: e, file_paths: [r], user_id: n.username }),
          });
        }

        async callRpc({ method: e, data: t }) {
          const n = l.extensions.getExtension("trae.icube-manager")?.exports.sessionId,
            r = await (l.extensions.getExtension("trae.icube-manager")?.exports.rpcClient), o = await r.callWebSocket({
              module_port: "ai/0",
              name: "ckg",
              req: JSON.stringify({
                service: "ckg",
                method: e,
                connect_session_id: n,
                user_info: await (0, h.getUserInfoWithToken)(),
                data: t,
              }),
            });
          return new Promise((async (e, t) => {
            try {
              o.onmessage = n => {
                const r = this.safeJSONParse(n.data);
                0 === r?.code ? e(r) : (this.logger.error("Call RPC onmessage error", r), t(r));
              }, o.onerror = e => {
                this.logger.error("Call RPC onerror", e), t(e);
              };
            } catch (e) {
              this.logger.error("Call RPC error", e), t(e);
            }
          })).finally((() => {
            setTimeout((() => {
              1 === o?.readyState && o.close(0, "client finished");
            }));
          }));
        }

        getPath(e) {
          return "string" == typeof e ? e : "vscode-remote" === e.scheme || "file" === e.scheme ? e.fsPath || e.path : void 0;
        }

        safeJSONParse(e) {
          try {
            return JSON.parse(e);
          } catch (e) {
            return;
          }
        }
      };
      t.CKGService = m, a([(0, d.Inject)(), c("design:type", f.Logger)], m.prototype, "logger", void 0), t.CKGService = m = a([(0, d.Injectable)({ scope: p.ScopeEnum.SINGLETON })], m);
    },
    305: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__decorate || function(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }, s = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      });
      Object.defineProperty(t, "__esModule", { value: !0 }), t.EditorSelectionTrackingService = void 0;
      const c = s(n(398)), u = n(28), l = n(597);
      let d = class {
        constructor() {
          this._hasSelection = !1;
        }

        get hasSelection() {
          return this._hasSelection;
        }

        get selectedText() {
          return this._selectedText;
        }

        get lastTrackingTime() {
          return this._lastedTrackingTIme;
        }

        track(e) {
          this._hasSelection = !e.isSelectionEmpty, this._selectedText = e.selectedText, this._lastedTrackingTIme = Date.now();
        }

        reset() {
          this._hasSelection = !1, this._selectedText = void 0, this._lastedTrackingTIme = void 0;
        }

        activate() {
          c.window.onDidChangeTextEditorSelection((e => {
            const t = e.textEditor.document.languageId;
            if (t && (-1 != t.toLowerCase().indexOf("log") || -1 != t.toLowerCase().indexOf("plaintext") || -1 != t.toLowerCase().indexOf("output"))) return;
            if (e.textEditor != c.window.activeTextEditor) return;
            this.currentTrackingTextEditor = e.textEditor;
            const n = e.selections.length <= 0 || e.selections[0].isEmpty,
              r = e.selections.length <= 0 ? void 0 : e.textEditor.document.getText(e.selections[0]);
            this.track({ isSelectionEmpty: n, selectedText: r });
          })), c.window.onDidChangeVisibleTextEditors((e => {
            this.currentTrackingTextEditor && (e.some((e => e === this.currentTrackingTextEditor)) || (this.currentTrackingTextEditor = void 0, this.track({
              isSelectionEmpty: !0,
              selectedText: void 0,
            })));
          }));
        }

        deactivate() {
          this.currentTrackingTextEditor = void 0;
        }
      };
      t.EditorSelectionTrackingService = d, t.EditorSelectionTrackingService = d = a([(0, u.Injectable)({ scope: l.ScopeEnum.SINGLETON })], d);
    },
    421: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      });
      Object.defineProperty(t, "__esModule", { value: !0 }), t.InlineSelectionContext = void 0;
      const s = a(n(398)), c = n(904), u = n(968), l = n(622), d = n(41);
      t.InlineSelectionContext = class {
        generateCurrentSelectionContext(e) {
          const { textDocument: t, selection: n, charLimit: r } = e, o = new c.CodeContextTracker(r),
            i = new s.Range(0, 0, t.lineCount, 0),
            a = new s.Range(u.PositionConverter.toVS(n.start), u.PositionConverter.toVS(n.end)),
            d = (0, l.getLanguageLineCommentToken)(t.languageId), f = this.getContextInfo({
              document: t,
              selection: a,
              expandedRange: a,
              targetRange: i,
              language: d,
              tracker: o,
            });
          return {
            language: f.language,
            above: f.above,
            range: f.range,
            below: f.below,
            outlineAbove: "",
            outlineBelow: "",
          };
        }

        generateSelectionContext(e) {
          const {
              textDocument: t,
              selection: n,
              expandedRange: r,
              rangeExpandedToFunction: o,
              functionBodies: i,
              charLimit: a,
            } = e, d = new c.CodeContextTracker(a), f = new s.Range(0, 0, t.lineCount, 0),
            p = new s.Range(u.PositionConverter.toVS(n.start), u.PositionConverter.toVS(n.end)),
            g = (0, l.getLanguageLineCommentToken)(t.languageId), h = this.getContextInfo({
              document: t,
              selection: p,
              expandedRange: r,
              targetRange: f,
              language: g,
              tracker: d,
            });
          if (!h.above.hasContent || h.above.isComplete) return {
            language: h.language,
            above: h.above,
            range: h.range,
            below: h.below,
            outlineAbove: "",
            outlineBelow: "",
          };
          const m = new c.CodeContextTracker(a),
            _ = new s.Range(o.start.line, 0, o.end.line, t.lineAt(o.end.line).range.end.character),
            y = this.getContextInfo({
              document: t,
              selection: p,
              expandedRange: r,
              targetRange: _,
              language: g,
              tracker: m,
            });
          let v = "", b = "";
          if (y.above.isComplete && y.below.isComplete) {
            const e = this.computeRawOutline({ document: t, functionBodies: i, rangeExpandedToFunctionWholeLines: _ }),
              n = this.extractOutline(e, m);
            v = n.outlineAbove, b = n.outlineBelow;
          }
          return {
            language: y.language,
            above: y.above,
            range: y.range,
            below: y.below,
            outlineAbove: v,
            outlineBelow: b,
          };
        }

        generateSelectionContextPrompts(e, t) {
          const n = (0, l.getLanguageLineCommentToken)(e.languageId), r = "\n", o = [],
            i = t.above.hasContent || t.below.hasContent || t.outlineAbove.length > 0 || t.outlineBelow.length > 0;
          if (t.outlineAbove.length > 0) {
            const n = [];
            n.push("I have the following code above:"), n.push(...this.formatOutlineContent(t.outlineAbove, e)), n.push("```"), o.push(n.join(r));
          }
          if (t.above.hasContent) {
            const e = [];
            e.push("I have the following code above the selection:"), e.push(...t.above.generatePrompt(i)), o.push(e.join(r));
          }
          if (t.below.hasContent) {
            const e = [];
            e.push("I have the following code below the selection:"), e.push(...t.below.generatePrompt(i)), o.push(e.join(r));
          }
          if (t.outlineBelow.length > 0) {
            const n = [];
            n.push("I have the following code below:"), n.push(...this.formatOutlineContent(t.outlineBelow, e)), o.push(n.join(r));
          }
          {
            const i = [];
            t.range.hasContent ? (i.push("I have the following code in the selection:"), i.push(...t.range.generatePrompt(!0))) : (i.push("I am working with the following code:"), i.push("```" + e.languageId), i.push(d.LanguageCommentMark.forDocument(n, e)), i.push("```")), o.push(i.join(r));
          }
          return o;
        }

        getContextInfo({ document: e, selection: t, expandedRange: n, targetRange: r, language: o, tracker: i }) {
          const a = new c.CodeContextRegion(i, e, o, "ed8c6549bwf9"),
            s = new c.CodeContextRegion(i, e, o, "abpxx6d04wxr"), u = new c.CodeContextRegion(i, e, o, "be15d9bcejpp"),
            l = () => (s.trim(), a.trim(t), u.trim(), {
              language: o,
              above: s,
              range: a,
              below: u,
              outlineAbove: "",
              outlineBelow: "",
            });
          for (let e = n.end.line; e >= n.start.line; e--) if (!a.prependLine(e)) return l();
          const d = {
            aboveLineIndex: n.start.line - 1,
            belowLineIndex: n.end.line + 1,
            minimumLineIndex: Math.max(0, r.start.line),
            maximumLineIndex: Math.min(e.lineCount - 1, r.end.line),
          };
          return this.checkRegionCompleteness(d, s, u), l();
        }

        checkRegionCompleteness(e, t, n) {
          let r = e.aboveLineIndex, o = !0, i = e.belowLineIndex, a = !0;
          for (let s = 0; s < 100 && (o || a); s++) !o || a && s % 4 == 3 ? i <= e.maximumLineIndex && n.appendLine(i) ? i++ : a = !1 : r >= e.minimumLineIndex && t.prependLine(r) ? r-- : o = !1;
          t.isComplete = r < e.minimumLineIndex, n.isComplete = i > e.maximumLineIndex;
        }

        computeRawOutline({ document: e, functionBodies: t, rangeExpandedToFunctionWholeLines: n }) {
          let r = "";
          "typescript" === e.languageId && (r = ";");
          const o = t.filter((t => {
            const r = new s.Range(e.positionAt(t.start_index), e.positionAt(t.end_index));
            return r.end.line < n.start.line ? n.start.line - r.start.line > 50 : !(r.start.line > n.end.line) || r.end.line - n.end.line > 50;
          })), i = { startOffset: e.offsetAt(n.start), endOffset: e.offsetAt(n.end) }, {
            outlineAbove: a,
            outlineBelow: c,
          } = this.removeBodiesOutsideRange(e.getText(), o, i, r);
          return { outlineAboveRange: a, outlineBelowRange: c };
        }

        extractOutline(e, t) {
          const n = /\r\n|\r|\n/g, r = "" === e.outlineAboveRange ? [] : e.outlineAboveRange.split(n),
            o = "" === e.outlineBelowRange ? [] : e.outlineBelowRange.split(n), i = [], a = [],
            s = e => !!t.lineWouldFit(e) && (t.addLine(e), i.unshift(e), !0);
          let c = r.length - 1, u = !0, l = 0, d = !0;
          for (let e = 0; e < 100 && (u || d); e++) !u || d && e % 4 == 3 ? l < o.length && (f = o[l], t.lineWouldFit(f) && (t.addLine(f), a.push(f), 1)) ? l++ : d = !1 : c >= 0 && s(r[c]) ? c-- : u = !1;
          var f;
          return { outlineAbove: i.join("\n"), outlineBelow: a.join("\n") };
        }

        formatOutlineContent(e, t, n = !1) {
          if (e.length <= 0) return [];
          if (!n) {
            const n = (0, l.getLanguageLineCommentToken)(t.languageId);
            return ["```" + t.languageId, d.LanguageCommentMark.forDocument(n, t), e, "```"];
          }
          return ["```" + t.languageId, e, "```"];
        }

        removeBodiesOutsideRange(e, t, n, r) {
          let o = 0, i = "", a = n.endOffset, s = "";
          for (const c of t) c.end_index < n.startOffset ? (i += e.substring(o, c.start_index), i += r, o = c.end_index) : c.start_index > n.endOffset && (s += e.substring(a, c.start_index), s += r, a = c.end_index);
          return i += e.substring(o, n.startOffset), s += e.substring(a, e.length), { outlineAbove: i, outlineBelow: s };
        }
      };
    },
    410: (e, t) => {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", { value: !0 }), t.SlardarEventName = t.SlardarEventStatus = void 0, function(e) {
        e.Success = "Success", e.Failed = "Failed", e.None = "None";
      }(n || (t.SlardarEventStatus = n = {})), function(e) {
        e.AIExtensionActive = "icube_ai_extension_active", e.CommandExecute = "icube_ai_command_execute";
      }(r || (t.SlardarEventName = r = {}));
    },
    591: (e, t) => {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", { value: !0 }), t.AppProviderCompany = t.AppRegion = void 0, function(e) {
        e.CN = "CN", e.SG = "SG", e.US = "US", e.BOE = "BOE", e.BOEI18N = "BOEI18N";
      }(n || (t.AppRegion = n = {})), function(e) {
        e.BYTEDANCE = "bytedance", e.MARSCODE = "marscode";
      }(r || (t.AppProviderCompany = r = {}));
    },
    904: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.CodeContextRegion = t.CodeContextTracker = void 0, t.checkRegionCompleteness = function(e, t, n) {
        let r = e.aboveLineIndex, o = !0, i = e.belowLineIndex, a = !0;
        for (let s = 0; s < 100 && (o || a); s++) !o || a && s % 4 == 3 ? i <= e.maximumLineIndex && n.appendLine(i) ? i++ : a = !1 : r >= e.minimumLineIndex && t.prependLine(r) ? r-- : o = !1;
        t.isComplete = r < e.minimumLineIndex, n.isComplete = i > e.maximumLineIndex;
      };
      const r = n(398);
      t.CodeContextTracker = class {
        constructor(e) {
          this.charLimit = e, this.totalCharCount = 0;
        }

        get totalChars() {
          return this.totalCharCount;
        }

        addLine(e) {
          this.totalCharCount += e.length + 1;
        }

        lineWouldFit(e) {
          return this.totalCharCount + e.length + 1 < this.charLimit;
        }
      };

      class o {
        constructor(e, t, n, r) {
          this.tracker = e, this.document = t, this.language = n, this.uniqueStr = r, this.lines = [], this.firstLineIndex = this.document.lineCount, this.lastLineIndex = -1, this.isComplete = !1, this.nonTrimWhitespaceCharCount = 0, this._startMarker = `${this.language.comment_style} BEGIN: ${this.uniqueStr}`, this._endMarker = `${this.language.comment_style} END: ${this.uniqueStr}`, this._allStartMarkers = [`${this.language.comment_style}BEGIN: ${this.uniqueStr}`, `${this.language.comment_style}BEGIN:${this.uniqueStr}`, `${this.language.comment_style} BEGIN: ${this.uniqueStr}`], this._allEndMarkers = [`${this.language.comment_style}END: ${this.uniqueStr}`, `${this.language.comment_style}END:${this.uniqueStr}`, `${this.language.comment_style} END: ${this.uniqueStr}`];
        }

        get startMarker() {
          return this._startMarker;
        }

        get allStartMakers() {
          return this._allStartMarkers;
        }

        matchStartMarker(e) {
          return this._allStartMarkers.some((t => e.trimStart().startsWith(t)));
        }

        matchEndMarker(e) {
          return this._allEndMarkers.some((t => e.trimStart().startsWith(t)));
        }

        get endMarker() {
          return this._endMarker;
        }

        get allEndMakers() {
          return this._allEndMarkers;
        }

        get lineCount() {
          return this.lines.length;
        }

        get isVerySmallOrEmpty() {
          return this.nonTrimWhitespaceCharCount < 10;
        }

        get hasContent() {
          return 0 !== this.lines.length && 0 !== this.nonTrimWhitespaceCharCount && this.lines.length > 0;
        }

        clone() {
          const e = new o(this.tracker, this.document, this.language, this.uniqueStr);
          return e._startMarker = this.startMarker, e._endMarker = this.endMarker, e.lines.push(...this.lines), e.firstLineIndex = this.firstLineIndex, e.lastLineIndex = this.lastLineIndex, e.nonTrimWhitespaceCharCount = this.nonTrimWhitespaceCharCount, e;
        }

        clear() {
          this.lines.length = 0, this.firstLineIndex = this.document.lineCount, this.lastLineIndex = -1, this.nonTrimWhitespaceCharCount = 0;
        }

        generatePrompt(e) {
          if (!this.hasContent) return [];
          const t = [];
          return t.push("```" + this.language.language_id), e && (t.push(`${this.language.comment_style} FILEPATH: ${this.document.fileName}`), t.push(`${this.startMarker}`)), t.push(...this.lines), e && t.push(`${this.endMarker}`), t.push("```"), t;
        }

        prependLine(e) {
          try {
            const t = this.document.lineAt(e).text;
            return !!this.tracker.lineWouldFit(t) && (this.firstLineIndex = Math.min(this.firstLineIndex, e), this.lastLineIndex = Math.max(this.lastLineIndex, e), this.lines.unshift(t), this.tracker.addLine(t), this.nonTrimWhitespaceCharCount += t.trim().length, !0);
          } catch (e) {
            return !1;
          }
        }

        appendLine(e) {
          const t = this.document.lineAt(e).text;
          return !!this.tracker.lineWouldFit(t) && (this.firstLineIndex = Math.min(this.firstLineIndex, e), this.lastLineIndex = Math.max(this.lastLineIndex, e), this.lines.push(t), this.tracker.addLine(t), this.nonTrimWhitespaceCharCount += t.trim().length, !0);
        }

        trim(e) {
          const t = e ? Math.min(this.lastLineIndex, e.start.line) : this.lastLineIndex;
          for (; this.firstLineIndex < t && this.lines.length > 0 && 0 === this.lines[0].trim().length;) this.firstLineIndex++, this.lines.shift();
          const n = e ? Math.max(this.firstLineIndex, e.end.line) : this.firstLineIndex;
          for (; n < this.lastLineIndex && this.lines.length > 0 && 0 === this.lines[this.lines.length - 1].trim().length;) this.lastLineIndex--, this.lines.pop();
        }

        removeFirstNLines(e) {
          if (e >= this.lineCount) {
            const e = this.lines.slice(0), t = this.nonTrimWhitespaceCharCount;
            return this.clear(), { lines: e, nonTrimWhitespaceCharCount: t };
          }
          const t = this.lines.splice(0, e);
          let n = 0;
          for (const e of t) n += e.trim().length;
          return this.firstLineIndex += e, this.nonTrimWhitespaceCharCount -= n, {
            lines: t,
            nonTrimWhitespaceCharCount: n,
          };
        }

        removeLastNLines(e) {
          if (e >= this.lineCount) {
            const e = this.lines.slice(0), t = this.nonTrimWhitespaceCharCount;
            return this.clear(), { lines: e, nonTrimWhitespaceCharCount: t };
          }
          const t = this.lines.splice(this.lines.length - e, e);
          let n = 0;
          for (const e of t) n += e.trim().length;
          return this.lastLineIndex -= e, this.nonTrimWhitespaceCharCount -= n, {
            lines: t,
            nonTrimWhitespaceCharCount: n,
          };
        }

        takeFromAbove(e, t) {
          const { lines: n, nonTrimWhitespaceCharCount: r } = e.removeLastNLines(t);
          this.lines.unshift(...n), this.firstLineIndex -= n.length, this.nonTrimWhitespaceCharCount += r;
        }

        takeFromBelow(e, t) {
          const { lines: n, nonTrimWhitespaceCharCount: r } = e.removeFirstNLines(t);
          this.lines.push(...n), this.lastLineIndex += n.length, this.nonTrimWhitespaceCharCount += r;
        }

        mergeFromAbove(e) {
          e.hasContent && (this.lines.unshift(...e.lines), this.firstLineIndex = e.firstLineIndex, this.nonTrimWhitespaceCharCount += e.nonTrimWhitespaceCharCount, e.clear());
        }

        mergeFromBelow(e) {
          e.hasContent && (this.lines.push(...e.lines), this.lastLineIndex = e.lastLineIndex, this.nonTrimWhitespaceCharCount += e.nonTrimWhitespaceCharCount, e.clear());
        }

        toRange() {
          try {
            const e = -1 === this.lastLineIndex ? this.document.lineCount - 1 : this.lastLineIndex,
              t = new r.Range(this.firstLineIndex, 0, e, this.document.lineAt(e).text.length);
            return this.document.validateRange(t) === t ? t : void 0;
          } catch {
            return;
          }
        }

        toString() {
          return `{${this.firstLineIndex} -> ${this.lastLineIndex}}`;
        }
      }

      t.CodeContextRegion = o;
    },
    622: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      });
      Object.defineProperty(t, "__esModule", { value: !0 }), t.convertEditorToDocument = function(e) {
        if (!e) return;
        const { options: t, document: n, selection: r, visibleRanges: o } = e,
          i = { insert_spaces: t.insertSpaces ?? !1, tab_size: t.tabSize || 2 }, a = p(n.languageId), c = {
            uri: n.uri.fsPath,
            language_id: n.languageId,
            file_name: n.fileName,
            text: n.getText(),
            version: n.version,
            scheme: n.uri.scheme,
            is_dirty: n.isDirty,
          }, u = o.map((e => ({
            start: { line: e.start.line, character: e.start.character },
            end: { line: e.end.line, character: e.end.character },
            is_empty: !1,
            is_single_line: !1,
            text: "",
          })));
        let l = 0, d = 0, g = 0, h = 0;
        if (r.isEmpty) if (1 === o.length) l = o[0].start.line, d = o[0].start.character, g = o[0].end.line, h = o[0].end.character; else if (o.length > 1) {
          const e = o[0].union(o[o.length - 1]);
          l = e.start.line, d = e.start.character, g = e.end.line, h = e.end.character;
        } else l = r.start.line, d = r.start.character, g = r.end.line, h = r.end.character; else l = r.start.line, g = r.end.line;
        const m = new s.Selection(new s.Position(l, d), new s.Position(g, h)), _ = {
          start: { line: m.start.line, character: m.start.character },
          end: { line: m.end.line, character: m.end.character },
          active: { line: m.active.line, character: m.active.character },
          anchor: { line: m.anchor.line, character: m.anchor.character },
          is_empty: m.isEmpty,
          is_single_line: m.isSingleLine,
          text: n.getText(m),
        };
        let y = {
          start: { line: r.start.line, character: r.start.character },
          end: { line: r.end.line, character: r.end.character },
          is_single_line: r.isSingleLine,
          is_empty: r.isEmpty,
        };
        return {
          document: c,
          file_indent_info: i,
          language: a,
          whole_range: y,
          selection: _,
          expanded_range: y,
          function_range: y,
          file_name: n.fileName,
          visible_ranges: u,
          is_empty_line: f(e),
        };
      }, t.isSelectionEmptyLine = f, t.getLanguageLineCommentToken = p, t.getMetadataContext = function(e, t, n) {
        let r, o = !1, i = "the selection";
        l.logger.info("nodeToDocument===", e, e && !!e.identifier), e && !!e.identifier && (o = !0, i = e.identifier);
        const a = t.languageId;
        switch (a) {
          case"typescript":
          case"typescriptreact":
            r = o ? "a TSDoc comment" : "TSDoc comment";
            break;
          case"javascript":
          case"javascriptreact":
            r = o ? "a JSDoc comment" : "JSDoc comment";
            break;
          case"python":
            r = "docstring";
            break;
          default:
            r = "documentation comment";
        }
        e?.isMultiFunction && (i = "the all selected functions");
        const s = p(a), c = g({ document: t, languageCommentToken: s, selectedNode: e, selection: n });
        return { metadata: { contextInfo: c }, serverContext: { doc_type: r, identifier: i, is_line_comment: !o } };
      }, t.generateDocContext = g, t.openTextDocument = async function(e) {
        const t = s.workspace.textDocuments.find((t => t.uri.fsPath === e));
        if (t) return t;
        return await s.workspace.openTextDocument(d.UriConverter.toVS(e));
      };
      const s = a(n(398)), c = n(825), u = n(904), l = n(815), d = n(655);

      function f(e) {
        const t = e.selection;
        if (t.isEmpty) {
          const t = e.selection.active;
          return e.document.lineAt(t.line).isEmptyOrWhitespace;
        }
        let n = !0;
        for (let r = t.start.line; r <= t.end.line; r++) {
          if (!e.document.lineAt(r).isEmptyOrWhitespace) {
            n = !1;
            break;
          }
        }
        return n;
      }

      function p(e) {
        const t = c.LanguageMarkers[e];
        return t ? t.end ? { language_id: e, comment_style: "//" } : {
          language_id: e,
          comment_style: t.start,
        } : { language_id: e, comment_style: "//" };
      }

      function g({ document: e, languageCommentToken: t, selectedNode: n, selection: r }) {
        const { range: o } = n, i = new u.CodeContextTracker(1e3), a = new u.CodeContextRegion(i, e, t, "ed8c6549bwf9"),
          s = new u.CodeContextRegion(new u.CodeContextTracker(0), e, t, "abpxx6d04wxr"),
          c = new u.CodeContextRegion(new u.CodeContextTracker(0), e, t, "be15d9bcejpp");
        let l = o.start.line, d = o.end.line;
        for (; l <= d;) {
          let e = l === d && 0 === o.end.character, t = a.appendLine(l);
          if (e || !t) break;
          l++;
        }
        return a.trim(r), { language: t, above: s, range: a, below: c, outlineAbove: "", outlineBelow: "" };
      }
    },
    655: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.UriConverter = void 0, t.getExists = function(e) {
        return e.filter((e => !!e));
      }, t.expandRangeToFunctions = function(e, t, n) {
        const a = i(e, t, n.start), s = i(e, t, n.end);
        let c = e.offsetAt(n.start), u = e.offsetAt(n.end);
        a && (c = Math.min(c, a.start_index), u = Math.max(u, a.end_index));
        s && (c = Math.min(c, s.start_index), u = Math.max(u, s.end_index));
        const l = t.filter((e => e.start_index >= c && e.end_index <= u)).map((t => ({
          ...t,
          range: new r.Range(e.positionAt(t.start_index), e.positionAt(t.end_index)),
        })));
        return o.logger.info("selectFunctions length", l.length), {
          range: new r.Range(e.positionAt(c), e.positionAt(u)),
          contentLength: u - c,
          selectFunctions: l,
        };
      }, t.getFunctionAtOffset = i, t.filterInnerFunctions = function(e) {
        if (e.length <= 1) return e;
        const t = e.sort(((e, t) => e.start_index - t.start_index));
        let n = 0;
        for (; n < t.length - 1;) {
          const e = t[n], r = t[n + 1];
          e.end_index >= r.start_index ? t.splice(n + 1, 1) : n++;
        }
        return t;
      }, t.getAppropriateRange = function(e, t) {
        const n = Math.abs(e.start.line - t.start.line), r = Math.abs(e.end.line - t.end.line);
        return n + r > 30 ? e : t;
      };
      const r = n(398), o = n(815);

      function i(e, t, n) {
        const r = e.offsetAt(n);
        let o = null;
        for (const e of t) if (!(e.end_index < r)) {
          if (e.start_index > r) break;
          o = e;
        }
        return o;
      }

      t.UriConverter = { toVS: e => r.Uri.file(e) };
    },
    41: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.LanguageCommentMark = void 0;
      t.LanguageCommentMark = class {
        static forDocument(e, t) {
          return this.forUri(e, t.uri);
        }

        static forUri(e, t) {
          return `${this.forLanguage(e)}: ${t.path}`;
        }

        static forLanguage(e) {
          return `${e.comment_style} FILEPATH`;
        }

        static forLanguageV2(e) {
          return `${e.comment_style}FILEPATH`;
        }

        static testLine(e, t) {
          const n = this.forLanguage(e), r = this.forLanguageV2(e), o = t.trimStart();
          return o.startsWith(n) || o.startsWith(r);
        }
      };
    },
    968: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      });
      Object.defineProperty(t, "__esModule", { value: !0 }), t.SelectionConverter = t.PositionConverter = t.RangeConverter = t.LocationConverter = void 0, t.convertLocation = function(e) {
        return e.map((e => function(e) {
          const t = e;
          return t && t.uri instanceof s.Uri && t.range instanceof s.Range;
        }(e) ? {
          uri: e.uri.fsPath,
          range: {
            start: { line: e.range.start.line, character: e.range.start.character },
            end: { line: e.range.end.line, character: e.range.end.character },
            is_single_line: e.range.isSingleLine,
            is_empty: e.range.isEmpty,
          },
        } : {
          uri: e.targetUri.fsPath,
          range: {
            start: { line: e.targetRange.start.line, character: e.targetRange.start.character },
            end: { line: e.targetRange.end.line, character: e.targetRange.end.character },
            is_single_line: e.targetRange.isSingleLine,
            is_empty: e.targetRange.isEmpty,
          },
        }));
      };
      const s = a(n(398));
      t.LocationConverter = {
        toProtocol: e => ({
          uri: e.uri.fsPath || e.uri.path || "",
          range: {
            start: { line: e.range.start.line, character: e.range.start.character },
            end: { line: e.range.end.line, character: e.range.end.character },
            is_single_line: e.range.isSingleLine,
            is_empty: e.range.isEmpty,
          },
        }),
      }, t.RangeConverter = {
        toProtocol: e => ({
          start: t.PositionConverter.toProtocol(e.start),
          end: t.PositionConverter.toProtocol(e.end),
          is_single_line: e.isSingleLine,
          is_empty: e.isEmpty,
        }), toVS: e => new s.Range(t.PositionConverter.toVS(e.start), t.PositionConverter.toVS(e.end)),
      }, t.PositionConverter = {
        toProtocol: e => ({ line: e.line || 0, character: e.character || 0 }),
        toVS: e => new s.Position(e.line, e.character),
      }, t.SelectionConverter = {
        toProtocol: (e, n) => ({
          active: t.PositionConverter.toProtocol(e.active),
          anchor: t.PositionConverter.toProtocol(e.anchor),
          is_empty: e.isEmpty,
          is_single_line: e.isSingleLine,
          text: n.getText(e),
          start: t.PositionConverter.toProtocol(e.start),
          end: t.PositionConverter.toProtocol(e.end),
        }), toVS: e => new s.Selection(t.PositionConverter.toVS(e.active), t.PositionConverter.toVS(e.anchor)),
      };
    },
    980: function(e, t, n) {
      "use strict";
      var r, o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }), a = this && this.__importStar || (r = function(e) {
        return r = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, r(e);
      }, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
        return i(t, e), t;
      });
      Object.defineProperty(t, "__esModule", { value: !0 }), t.getUserAccount = async function() {
        let e = {
          iss: "",
          exp: 0,
          iat: 0,
          username: "",
          type: "",
          region: "",
          trusted: !0,
          uuid: "",
          site: "",
          scope: "",
          sequence: "",
          organization: "",
          work_country: "",
          avatar_url: "",
          email: "",
          employee_id: 0,
          uniqueId: "",
        };
        try {
          const t = await s.commands.executeCommand("icube.cloudide.getUser");
          t && (e = t);
        } catch {
        }
        let t = e?.username || "";
        t?.includes("__") && (t = e.username.replace(/__+.*/g, ""));
        return e;
      }, t.getUserInfo = u, t.getJWT = l, t.getRegion = d, t.getUserInfoWithToken = async function() {
        const [e, t, n] = await Promise.all([u(), l(), d()]);
        return {
          name: e?.account.username || "",
          token: t,
          region: n,
          is_internal: e?.account.scope === c.AppProviderCompany.BYTEDANCE,
          user_id: e?.userId || "",
        };
      };
      const s = a(n(398)), c = n(591);

      async function u() {
        return await s.commands.executeCommand("icube.common.getUserInfo");
      }

      async function l() {
        try {
          return await s.commands.executeCommand("icube.cloudide.getByteCloudToken") || "";
        } catch {
          return "";
        }
      }

      async function d() {
        try {
          const e = await s.commands.executeCommand("icube.common.getAiRegion");
          return e?.toLowerCase() || "";
        } catch {
          return "";
        }
      }
    },
    398: e => {
      "use strict";
      e.exports = require("vscode");
    },
    866: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        __addDisposableResource: () => D,
        __assign: () => i,
        __asyncDelegator: () => j,
        __asyncGenerator: () => O,
        __asyncValues: () => S,
        __await: () => x,
        __awaiter: () => g,
        __classPrivateFieldGet: () => I,
        __classPrivateFieldIn: () => A,
        __classPrivateFieldSet: () => L,
        __createBinding: () => m,
        __decorate: () => s,
        __disposeResources: () => N,
        __esDecorate: () => u,
        __exportStar: () => _,
        __extends: () => o,
        __generator: () => h,
        __importDefault: () => M,
        __importStar: () => R,
        __makeTemplateObject: () => T,
        __metadata: () => p,
        __param: () => c,
        __propKey: () => d,
        __read: () => v,
        __rest: () => a,
        __rewriteRelativeImportExtension: () => F,
        __runInitializers: () => l,
        __setFunctionName: () => f,
        __spread: () => b,
        __spreadArray: () => C,
        __spreadArrays: () => w,
        __values: () => y,
        default: () => B,
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
          e.__proto__ = t;
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }, r(e, t);
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e;
        }

        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n);
      }

      var i = function() {
        return i = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }, i.apply(this, arguments);
      };

      function a(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        }
        return n;
      }

      function s(e, t, n, r) {
        var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }

      function c(e, t) {
        return function(n, r) {
          t(n, r, e);
        };
      }

      function u(e, t, n, r, o, i) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e;
        }

        for (var s, c = r.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, d = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
          var g = {};
          for (var h in r) g[h] = "access" === h ? {} : r[h];
          for (var h in r.access) g.access[h] = r.access[h];
          g.addInitializer = function(e) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            i.push(a(e || null));
          };
          var m = (0, n[p])("accessor" === c ? { get: d.get, set: d.set } : d[u], g);
          if ("accessor" === c) {
            if (void 0 === m) continue;
            if (null === m || "object" != typeof m) throw new TypeError("Object expected");
            (s = a(m.get)) && (d.get = s), (s = a(m.set)) && (d.set = s), (s = a(m.init)) && o.unshift(s);
          } else (s = a(m)) && ("field" === c ? o.unshift(s) : d[u] = s);
        }
        l && Object.defineProperty(l, r.name, d), f = !0;
      }

      function l(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0;
      }

      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }

      function f(e, t, n) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: n ? "".concat(n, " ", t) : t,
        });
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }

      function g(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }

          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }

          function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t);
            }))).then(a, s);
          }

          c((r = r.apply(e, t || [])).next());
        }));
      }

      function h(e, t) {
        var n, r, o, i = {
          label: 0, sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
          }, trys: [], ops: [],
        }, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this;
        }), a;

        function s(s) {
          return function(c) {
            return function(s) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, s[0] && (i = 0)), i;) try {
                if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;
                switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                  case 0:
                  case 1:
                    o = s;
                    break;
                  case 4:
                    return i.label++, { value: s[1], done: !1 };
                  case 5:
                    i.label++, r = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue;
                    }
                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                      i.label = s[1];
                      break;
                    }
                    if (6 === s[0] && i.label < o[1]) {
                      i.label = o[1], o = s;
                      break;
                    }
                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(s);
                      break;
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }
                s = t.call(e, i);
              } catch (e) {
                s = [6, e], r = 0;
              } finally {
                n = o = 0;
              }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            }([s, c]);
          };
        }
      }

      var m = Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function() {
            return t[n];
          },
        }), Object.defineProperty(e, r, o);
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      };

      function _(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || m(t, e, n);
      }

      function y(e) {
        var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
          },
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function v(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e), a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }

      function b() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
        return e;
      }

      function w() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e), o = 0;
        for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
        return r;
      }

      function C(e, t, n) {
        if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t));
      }

      function x(e) {
        return this instanceof x ? (this.v = e, this) : new x(e);
      }

      function O(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, o = n.apply(e, t || []), i = [];
        return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u);
          };
        })), r[Symbol.asyncIterator] = function() {
          return this;
        }, r;

        function a(e, t) {
          o[e] && (r[e] = function(t) {
            return new Promise((function(n, r) {
              i.push([e, t, n, r]) > 1 || s(e, t);
            }));
          }, t && (r[e] = t(r[e])));
        }

        function s(e, t) {
          try {
            (n = o[e](t)).value instanceof x ? Promise.resolve(n.value.v).then(c, u) : l(i[0][2], n);
          } catch (e) {
            l(i[0][3], e);
          }
          var n;
        }

        function c(e) {
          s("next", e);
        }

        function u(e) {
          s("throw", e);
        }

        function l(e, t) {
          e(t), i.shift(), i.length && s(i[0][0], i[0][1]);
        }
      }

      function j(e) {
        var t, n;
        return t = {}, r("next"), r("throw", (function(e) {
          throw e;
        })), r("return"), t[Symbol.iterator] = function() {
          return this;
        }, t;

        function r(r, o) {
          t[r] = e[r] ? function(t) {
            return (n = !n) ? { value: x(e[r](t)), done: !1 } : o ? o(t) : t;
          } : o;
        }
      }

      function S(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = y(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
          return this;
        }, t);

        function r(n) {
          t[n] = e[n] && function(t) {
            return new Promise((function(r, o) {
              (function(e, t, n, r) {
                Promise.resolve(r).then((function(t) {
                  e({ value: t, done: n });
                }), t);
              })(r, o, (t = e[n](t)).done, t.value);
            }));
          };
        }
      }

      function T(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
      }

      var P = Object.create ? function(e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      } : function(e, t) {
        e.default = t;
      }, E = function(e) {
        return E = Object.getOwnPropertyNames || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
          return t;
        }, E(e);
      };

      function R(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = E(e), r = 0; r < n.length; r++) "default" !== n[r] && m(t, e, n[r]);
        return P(t, e), t;
      }

      function M(e) {
        return e && e.__esModule ? e : { default: e };
      }

      function I(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }

      function L(e, t, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n;
      }

      function A(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }

      function D(e, t, n) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var r, o;
          if (n) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = t[Symbol.dispose], n && (o = r);
          }
          if ("function" != typeof r) throw new TypeError("Object not disposable.");
          o && (r = function() {
            try {
              o.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          }), e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
      }

      var k = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
        var r = new Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
      };

      function N(e) {
        function t(t) {
          e.error = e.hasError ? new k(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
        }

        var n, r = 0;
        return function o() {
          for (; n = e.stack.pop();) try {
            if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(o);
            if (n.dispose) {
              var i = n.dispose.call(n.value);
              if (n.async) return r |= 2, Promise.resolve(i).then(o, (function(e) {
                return t(e), o();
              }));
            } else r |= 1;
          } catch (e) {
            t(e);
          }
          if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        }();
      }

      function F(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, n, r, o, i) {
          return n ? t ? ".jsx" : ".js" : !r || o && i ? r + o + "." + i.toLowerCase() + "js" : e;
        })) : e;
      }

      const B = {
        __extends: o,
        __assign: i,
        __rest: a,
        __decorate: s,
        __param: c,
        __esDecorate: u,
        __runInitializers: l,
        __propKey: d,
        __setFunctionName: f,
        __metadata: p,
        __awaiter: g,
        __generator: h,
        __createBinding: m,
        __exportStar: _,
        __values: y,
        __read: v,
        __spread: b,
        __spreadArrays: w,
        __spreadArray: C,
        __await: x,
        __asyncGenerator: O,
        __asyncDelegator: j,
        __asyncValues: S,
        __makeTemplateObject: T,
        __importStar: R,
        __importDefault: M,
        __classPrivateFieldGet: I,
        __classPrivateFieldSet: L,
        __classPrivateFieldIn: A,
        __addDisposableResource: D,
        __disposeResources: N,
        __rewriteRelativeImportExtension: F,
      };
    },
  }, t = {};

  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = t[r] = { exports: {} };
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }

  n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }
  n.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  }();
  n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
  n.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  };
  var r = n(528), o = exports;
  for (var i in r) o[i] = r[i];
  r.__esModule && Object.defineProperty(o, "__esModule", { value: !0 });
})();
