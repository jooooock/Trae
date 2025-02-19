(function () {
  const vscode = window.vscode,
    process = vscode.process;

  async function load(path, options) {
    const o = await u();
    options?.beforeImport?.(o);
    const { enableDeveloperKeybindings: r, removeDeveloperKeybindingsAfterLoad: l, developerDeveloperKeybindingsDisposable: c, forceDisableShowDevtoolsOnError: i } = w(o, options);
    v(o);
    const n = new URL(`${b(o.appRoot, { isWindows: process.platform === "win32", scheme: "vscode-file", fallbackAuthority: "vscode-app" })}/out/`);
    (globalThis._VSCODE_FILE_ROOT = n.toString()), y(o, n);
    try {
      const s = await import(new URL(`${path}.js`, n).href);
      return c && l && c(), { result: s, configuration: o };
    } catch (s) {
      throw (g(s, r && !i), s);
    }
  }
  async function u() {
    const t = setTimeout(() => {
      console.error("[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...");
    }, 1e4);
    performance.mark("code/willWaitForWindowConfig");
    const e = await vscode.context.resolveConfiguration();
    return performance.mark("code/didWaitForWindowConfig"), clearTimeout(t), e;
  }
  function w(t, e) {
    const {
        forceEnableDeveloperKeybindings: o,
        disallowReloadKeybinding: r,
        removeDeveloperKeybindingsAfterLoad: l,
        forceDisableShowDevtoolsOnError: c,
      } = typeof e?.configureDeveloperSettings == "function"
        ? e.configureDeveloperSettings(t)
        : { forceEnableDeveloperKeybindings: !1, disallowReloadKeybinding: !1, removeDeveloperKeybindingsAfterLoad: !1, forceDisableShowDevtoolsOnError: !1 },
      n = !!(!!process.env.VSCODE_DEV || o);
    let s;
    return n && (s = m(r)), { enableDeveloperKeybindings: n, removeDeveloperKeybindingsAfterLoad: l, developerDeveloperKeybindingsDisposable: s, forceDisableShowDevtoolsOnError: c };
  }
  function m(t) {
    const e = vscode.ipcRenderer,
      o = function (n) {
        return [n.ctrlKey ? "ctrl-" : "", n.metaKey ? "meta-" : "", n.altKey ? "alt-" : "", n.shiftKey ? "shift-" : "", n.keyCode].join("");
      },
      r = process.platform === "darwin" ? "meta-alt-73" : "ctrl-shift-73",
      l = "123",
      c = process.platform === "darwin" ? "meta-82" : "ctrl-82";
    let i = function (n) {
      const s = o(n);
      s === r || s === l ? e.send("vscode:toggleDevTools") : s === c && !t && e.send("vscode:reloadWindow");
    };
    return (
      window.addEventListener("keydown", i),
      function () {
        i && (window.removeEventListener("keydown", i), (i = void 0));
      }
    );
  }
  function v(t) {
    (globalThis._VSCODE_NLS_MESSAGES = t.nls.messages), (globalThis._VSCODE_NLS_LANGUAGE = t.nls.language);
    let e = t.nls.language || "en";
    e === "zh-tw" ? (e = "zh-Hant") : e === "zh-cn" && (e = "zh-Hans"), window.document.documentElement.setAttribute("lang", e);
  }
  function g(t, e) {
    e && vscode.ipcRenderer.send("vscode:openDevTools"), console.error(`[uncaught exception]: ${t}`), t && typeof t != "string" && t.stack && console.error(t.stack);
  }
  function b(t, e) {
    let o = t.replace(/\\/g, "/");
    o.length > 0 && o.charAt(0) !== "/" && (o = `/${o}`);
    let r;
    return e.isWindows && o.startsWith("//") ? (r = encodeURI(`${e.scheme || "file"}:${o}`)) : (r = encodeURI(`${e.scheme || "file"}://${e.fallbackAuthority || ""}${o}`)), r.replace(/#/g, "%23");
  }
  function y(t, e) {
    if (Array.isArray(t.cssModules) && t.cssModules.length > 0) {
      performance.mark("code/willAddCssLoader");
      const o = document.createElement("style");
      (o.type = "text/css"),
        (o.media = "screen"),
        (o.id = "vscode-css-loading"),
        document.head.appendChild(o),
        (globalThis._VSCODE_CSS_LOAD = function (n) {
          o.textContent += `@import url(${n});
`;
        });
      const r = { imports: {} };
      for (const n of t.cssModules) {
        const s = new URL(n, e).href;
        let f = s;
        t.cssModulesUpdateIpc && (f += `?t=${Date.now()}`);
        const D = `globalThis._VSCODE_CSS_LOAD('${f}');
`,
          h = new Blob([D], { type: "application/javascript" });
        r.imports[s] = URL.createObjectURL(h);
      }
      const l = window.trustedTypes?.createPolicy("vscode-bootstrapImportMap", {
          createScript(n) {
            return n;
          },
        }),
        c = JSON.stringify(r, void 0, 2),
        i = document.createElement("script");
      (i.type = "importmap"), i.setAttribute("nonce", "0c6a828f1297"), (i.textContent = l?.createScript(c) ?? c), document.head.appendChild(i), performance.mark("code/didAddCssLoader");
    }
  }

  globalThis.MonacoBootstrapWindow = { load };
})();

(async function () {
  const MonacoBootstrapWindow = window.MonacoBootstrapWindow;
  const { result, configuration } = await MonacoBootstrapWindow.load("vs/code/electron-sandbox/processExplorer/processExplorerMain", {
    configureDeveloperSettings: function () {
      return { forceEnableDeveloperKeybindings: true };
    },
  });
  result.startup(configuration);
})();
