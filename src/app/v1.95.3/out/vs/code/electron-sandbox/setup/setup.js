(function () {
  const vscode = window.vscode,
    process = vscode.process;

  async function load(t, e) {
    const o = await f();
    e?.beforeImport?.(o);
    const { enableDeveloperKeybindings: s, removeDeveloperKeybindingsAfterLoad: a, developerDeveloperKeybindingsDisposable: c, forceDisableShowDevtoolsOnError: i } = p(o, e);
    v(o);
    const n = new URL(`${b(o.appRoot, { isWindows: process.platform === "win32", scheme: "vscode-file", fallbackAuthority: "vscode-app" })}/out/`);
    (globalThis._VSCODE_FILE_ROOT = n.toString()), y(o, n);
    try {
      const r = await import(new URL(`${t}.js`, n).href);
      return c && a && c(), { result: r, configuration: o };
    } catch (r) {
      throw (g(r, s && !i), r);
    }
  }
  async function f() {
    const t = setTimeout(() => {
      console.error("[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...");
    }, 1e4);
    performance.mark("code/willWaitForWindowConfig");
    const e = await vscode.context.resolveConfiguration();
    return performance.mark("code/didWaitForWindowConfig"), clearTimeout(t), e;
  }
  function p(t, e) {
    const {
        forceEnableDeveloperKeybindings: o,
        disallowReloadKeybinding: s,
        removeDeveloperKeybindingsAfterLoad: a,
        forceDisableShowDevtoolsOnError: c,
      } = typeof e?.configureDeveloperSettings == "function"
        ? e.configureDeveloperSettings(t)
        : { forceEnableDeveloperKeybindings: !1, disallowReloadKeybinding: !1, removeDeveloperKeybindingsAfterLoad: !1, forceDisableShowDevtoolsOnError: !1 },
      n = !!(!!process.env.VSCODE_DEV || o);
    let r;
    return n && (r = w(s)), { enableDeveloperKeybindings: n, removeDeveloperKeybindingsAfterLoad: a, developerDeveloperKeybindingsDisposable: r, forceDisableShowDevtoolsOnError: c };
  }
  function w(t) {
    const e = vscode.ipcRenderer,
      o = function (n) {
        return [n.ctrlKey ? "ctrl-" : "", n.metaKey ? "meta-" : "", n.altKey ? "alt-" : "", n.shiftKey ? "shift-" : "", n.keyCode].join("");
      },
      s = process.platform === "darwin" ? "meta-alt-73" : "ctrl-shift-73",
      a = "123",
      c = process.platform === "darwin" ? "meta-82" : "ctrl-82";
    let i = function (n) {
      const r = o(n);
      r === s || r === a ? e.send("vscode:toggleDevTools") : r === c && !t && e.send("vscode:reloadWindow");
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
    let s;
    return e.isWindows && o.startsWith("//") ? (s = encodeURI(`${e.scheme || "file"}:${o}`)) : (s = encodeURI(`${e.scheme || "file"}://${e.fallbackAuthority || ""}${o}`)), s.replace(/#/g, "%23");
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
      const s = { imports: {} };
      for (const n of t.cssModules) {
        const r = new URL(n, e).href;
        let m = r;
        t.cssModulesUpdateIpc && (m += `?t=${Date.now()}`);
        const D = `globalThis._VSCODE_CSS_LOAD('${m}');
`,
          h = new Blob([D], { type: "application/javascript" });
        s.imports[r] = URL.createObjectURL(h);
      }
      const a = window.trustedTypes?.createPolicy("vscode-bootstrapImportMap", {
          createScript(n) {
            return n;
          },
        }),
        c = JSON.stringify(s, void 0, 2),
        i = document.createElement("script");
      (i.type = "importmap"), i.setAttribute("nonce", "0c6a828f1297"), (i.textContent = a?.createScript(c) ?? c), document.head.appendChild(i), performance.mark("code/didAddCssLoader");
    }
  }

  globalThis.MonacoBootstrapWindow = { load };
})();

(async function () {
  performance.mark("code/setup/didStartRenderer");
  const MonacoBootstrapWindow = window.MonacoBootstrapWindow;
  const { result, configuration } = await MonacoBootstrapWindow.load("vs/code/electron-sandbox/setup/setupMain", {
    configureDeveloperSettings: function (f) {
      return {
        forceDisableShowDevtoolsOnError: true,
        forceEnableDeveloperKeybindings: true,
        removeDeveloperKeybindingsAfterLoad: true,
      };
    },
    beforeImport: function (f) {
      Object.defineProperty(window, "vscodeWindowId", { get: () => f.windowId });
      window.requestIdleCallback(
        () => {
          const canvasElement = document.createElement("canvas");
          canvasElement.getContext("2d")?.clearRect(0, 0, canvasElement.width, canvasElement.height);
          canvasElement.remove();
        },
        { timeout: 50 },
      );
      performance.mark("code/setup/willLoadSetupMain");
    },
  });
  performance.mark("code/setup/didLoadSetupMain");
  result.startup(configuration);
})();
