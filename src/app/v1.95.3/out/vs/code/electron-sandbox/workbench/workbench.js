(function () {
  const vscode = window.vscode,
    process = vscode.process;
  async function load(r, t) {
    const o = await v();
    t?.beforeImport?.(o);
    const { enableDeveloperKeybindings: i, removeDeveloperKeybindingsAfterLoad: c, developerDeveloperKeybindingsDisposable: d, forceDisableShowDevtoolsOnError: a } = w(o, t);
    l(o);
    const e = new URL(`${h(o.appRoot, { isWindows: process.platform === "win32", scheme: "vscode-file", fallbackAuthority: "vscode-app" })}/out/`);
    (globalThis._VSCODE_FILE_ROOT = e.toString()), y(o, e);
    try {
      const n = await import(new URL(`${r}.js`, e).href);
      return d && c && d(), { result: n, configuration: o };
    } catch (n) {
      throw (p(n, i && !a), n);
    }
  }
  async function v() {
    const r = setTimeout(() => {
      console.error("[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...");
    }, 1e4);
    performance.mark("code/willWaitForWindowConfig");
    const t = await vscode.context.resolveConfiguration();
    return performance.mark("code/didWaitForWindowConfig"), clearTimeout(r), t;
  }
  function w(r, t) {
    const {
        forceEnableDeveloperKeybindings: o,
        disallowReloadKeybinding: i,
        removeDeveloperKeybindingsAfterLoad: c,
        forceDisableShowDevtoolsOnError: d,
      } = typeof t?.configureDeveloperSettings == "function"
        ? t.configureDeveloperSettings(r)
        : { forceEnableDeveloperKeybindings: !1, disallowReloadKeybinding: !1, removeDeveloperKeybindingsAfterLoad: !1, forceDisableShowDevtoolsOnError: !1 },
      e = !!(!!process.env.VSCODE_DEV || o);
    let n;
    return e && (n = s(i)), { enableDeveloperKeybindings: e, removeDeveloperKeybindingsAfterLoad: c, developerDeveloperKeybindingsDisposable: n, forceDisableShowDevtoolsOnError: d };
  }
  function s(r) {
    const t = vscode.ipcRenderer,
      o = function (e) {
        return [e.ctrlKey ? "ctrl-" : "", e.metaKey ? "meta-" : "", e.altKey ? "alt-" : "", e.shiftKey ? "shift-" : "", e.keyCode].join("");
      },
      i = process.platform === "darwin" ? "meta-alt-73" : "ctrl-shift-73",
      c = "123",
      d = process.platform === "darwin" ? "meta-82" : "ctrl-82";
    let a = function (e) {
      const n = o(e);
      n === i || n === c ? t.send("vscode:toggleDevTools") : n === d && !r && t.send("vscode:reloadWindow");
    };
    return (
      window.addEventListener("keydown", a),
      function () {
        a && (window.removeEventListener("keydown", a), (a = void 0));
      }
    );
  }
  function l(r) {
    (globalThis._VSCODE_NLS_MESSAGES = r.nls.messages), (globalThis._VSCODE_NLS_LANGUAGE = r.nls.language);
    let t = r.nls.language || "en";
    t === "zh-tw" ? (t = "zh-Hant") : t === "zh-cn" && (t = "zh-Hans"), window.document.documentElement.setAttribute("lang", t);
  }
  function p(r, t) {
    t && vscode.ipcRenderer.send("vscode:openDevTools"), console.error(`[uncaught exception]: ${r}`), r && typeof r != "string" && r.stack && console.error(r.stack);
  }
  function h(r, t) {
    let o = r.replace(/\\/g, "/");
    o.length > 0 && o.charAt(0) !== "/" && (o = `/${o}`);
    let i;
    return t.isWindows && o.startsWith("//") ? (i = encodeURI(`${t.scheme || "file"}:${o}`)) : (i = encodeURI(`${t.scheme || "file"}://${t.fallbackAuthority || ""}${o}`)), i.replace(/#/g, "%23");
  }
  function y(r, t) {
    if (Array.isArray(r.cssModules) && r.cssModules.length > 0) {
      performance.mark("code/willAddCssLoader");
      const o = document.createElement("style");
      (o.type = "text/css"),
        (o.media = "screen"),
        (o.id = "vscode-css-loading"),
        document.head.appendChild(o),
        (globalThis._VSCODE_CSS_LOAD = function (e) {
          o.textContent += `@import url(${e});
`;
        });
      const i = { imports: {} };
      for (const e of r.cssModules) {
        const n = new URL(e, t).href;
        let b = n;
        r.cssModulesUpdateIpc && (b += `?t=${Date.now()}`);
        const g = `globalThis._VSCODE_CSS_LOAD('${b}');
`,
          B = new Blob([g], { type: "application/javascript" });
        i.imports[n] = URL.createObjectURL(B);
      }
      const c = window.trustedTypes?.createPolicy("vscode-bootstrapImportMap", {
          createScript(e) {
            return e;
          },
        }),
        d = JSON.stringify(i, void 0, 2),
        a = document.createElement("script");
      (a.type = "importmap"), a.setAttribute("nonce", "0c6a828f1297"), (a.textContent = c?.createScript(d) ?? d), document.head.appendChild(a), performance.mark("code/didAddCssLoader");
    }
  }

  globalThis.MonacoBootstrapWindow = { load: load };
})();

(async function () {
  performance.mark("code/didStartRenderer");
  const u = window.MonacoBootstrapWindow,
    vscode = window.vscode;
  function f(s) {
    performance.mark("code/willShowPartsSplash");
    let l = s.partsSplash;
    l &&
      (s.autoDetectHighContrast && s.colorScheme.highContrast
        ? ((s.colorScheme.dark && l.baseTheme !== "hc-black") || (!s.colorScheme.dark && l.baseTheme !== "hc-light")) && (l = void 0)
        : s.autoDetectColorScheme && ((s.colorScheme.dark && l.baseTheme !== "vs-dark") || (!s.colorScheme.dark && l.baseTheme !== "vs")) && (l = void 0)),
      l && s.extensionDevelopmentPath && (l.layoutInfo = void 0);
    let p, h, y;
    l
      ? ((p = l.baseTheme), (h = l.colorInfo.editorBackground), (y = l.colorInfo.foreground))
      : s.autoDetectHighContrast && s.colorScheme.highContrast
        ? s.colorScheme.dark
          ? ((p = "hc-black"), (h = "#000000"), (y = "#FFFFFF"))
          : ((p = "hc-light"), (h = "#FFFFFF"), (y = "#000000"))
        : s.autoDetectColorScheme && (s.colorScheme.dark ? ((p = "vs-dark"), (h = "#1E1E1E"), (y = "#CCCCCC")) : ((p = "vs"), (h = "#FFFFFF"), (y = "#000000")));
    const r = document.createElement("style");
    if (
      ((r.className = "initialShellColors"),
      window.document.head.appendChild(r),
      (r.textContent = `body {	background-color: ${h}; color: ${y}; margin: 0; padding: 0; }`),
      typeof l?.zoomLevel == "number" && typeof vscode?.webFrame?.setZoomLevel == "function" && vscode.webFrame.setZoomLevel(l.zoomLevel),
      l?.layoutInfo)
    ) {
      const { layoutInfo: t, colorInfo: o } = l,
        i = document.createElement("div");
      (i.id = "monaco-parts-splash"),
        (i.className = p ?? "vs-dark"),
        t.windowBorder &&
          o.windowBorder &&
          ((i.style.position = "relative"),
          (i.style.height = "calc(100vh - 2px)"),
          (i.style.width = "calc(100vw - 2px)"),
          (i.style.border = "1px solid var(--window-border-color)"),
          i.style.setProperty("--window-border-color", o.windowBorder),
          t.windowBorderRadius && (i.style.borderRadius = t.windowBorderRadius)),
        (t.sideBarWidth = Math.min(t.sideBarWidth, window.innerWidth - (t.activityBarWidth + t.editorPartMinWidth)));
      const c = document.createElement("div");
      if (
        ((c.style.position = "absolute"),
        (c.style.width = "100%"),
        (c.style.height = `${t.titleBarHeight}px`),
        (c.style.left = "0"),
        (c.style.top = "0"),
        (c.style.backgroundColor = `${o.titleBarBackground}`),
        (c.style["-webkit-app-region"] = "drag"),
        i.appendChild(c),
        o.titleBarBorder && t.titleBarHeight > 0)
      ) {
        const e = document.createElement("div");
        (e.style.position = "absolute"), (e.style.width = "100%"), (e.style.height = "1px"), (e.style.left = "0"), (e.style.bottom = "0"), (e.style.borderBottom = `1px solid ${o.titleBarBorder}`), c.appendChild(e);
      }
      const d = document.createElement("div");
      if (
        ((d.style.position = "absolute"),
        (d.style.width = `${t.activityBarWidth}px`),
        (d.style.height = `calc(100% - ${t.titleBarHeight + t.statusBarHeight}px)`),
        (d.style.top = `${t.titleBarHeight}px`),
        t.sideBarSide === "left" ? (d.style.left = "0") : (d.style.right = "0"),
        (d.style.backgroundColor = `${o.activityBarBackground}`),
        i.appendChild(d),
        o.activityBarBorder && t.activityBarWidth > 0)
      ) {
        const e = document.createElement("div");
        (e.style.position = "absolute"),
          (e.style.width = "1px"),
          (e.style.height = "100%"),
          (e.style.top = "0"),
          t.sideBarSide === "left" ? ((e.style.right = "0"), (e.style.borderRight = `1px solid ${o.activityBarBorder}`)) : ((e.style.left = "0"), (e.style.borderLeft = `1px solid ${o.activityBarBorder}`)),
          d.appendChild(e);
      }
      if (s.workspace) {
        const e = document.createElement("div");
        if (
          ((e.style.position = "absolute"),
          (e.style.width = `${t.sideBarWidth}px`),
          (e.style.height = `calc(100% - ${t.titleBarHeight + t.statusBarHeight}px)`),
          (e.style.top = `${t.titleBarHeight}px`),
          t.sideBarSide === "left" ? (e.style.left = `${t.activityBarWidth}px`) : (e.style.right = `${t.activityBarWidth}px`),
          (e.style.backgroundColor = `${o.sideBarBackground}`),
          i.appendChild(e),
          o.sideBarBorder && t.sideBarWidth > 0)
        ) {
          const n = document.createElement("div");
          (n.style.position = "absolute"),
            (n.style.width = "1px"),
            (n.style.height = "100%"),
            (n.style.top = "0"),
            (n.style.right = "0"),
            t.sideBarSide === "left" ? (n.style.borderRight = `1px solid ${o.sideBarBorder}`) : ((n.style.left = "0"), (n.style.borderLeft = `1px solid ${o.sideBarBorder}`)),
            e.appendChild(n);
        }
      }
      const a = document.createElement("div");
      if (
        ((a.style.position = "absolute"),
        (a.style.width = "100%"),
        (a.style.height = `${t.statusBarHeight}px`),
        (a.style.bottom = "0"),
        (a.style.left = "0"),
        s.workspace && o.statusBarBackground ? (a.style.backgroundColor = o.statusBarBackground) : !s.workspace && o.statusBarNoFolderBackground && (a.style.backgroundColor = o.statusBarNoFolderBackground),
        i.appendChild(a),
        o.statusBarBorder && t.statusBarHeight > 0)
      ) {
        const e = document.createElement("div");
        (e.style.position = "absolute"), (e.style.width = "100%"), (e.style.height = "1px"), (e.style.top = "0"), (e.style.borderTop = `1px solid ${o.statusBarBorder}`), a.appendChild(e);
      }
      window.document.body.appendChild(i);
    }
    performance.mark("code/didShowPartsSplash");
  }
  const { result, configuration } = await u.load("vs/workbench/workbench.desktop.main", {
    configureDeveloperSettings: function (s) {
      return {
        forceDisableShowDevtoolsOnError: typeof s.extensionTestsPath == "string" || s["enable-smoke-test-driver"] === !0,
        forceEnableDeveloperKeybindings: Array.isArray(s.extensionDevelopmentPath) && s.extensionDevelopmentPath.length > 0,
        removeDeveloperKeybindingsAfterLoad: !0,
      };
    },
    beforeImport: function (s) {
      f(s);
      Object.defineProperty(window, "vscodeWindowId", { get: () => s.windowId });
      window.requestIdleCallback(
        () => {
          const l = document.createElement("canvas");
          l.getContext("2d")?.clearRect(0, 0, l.width, l.height);
          l.remove();
        },
        { timeout: 50 },
      );
      performance.mark("code/willLoadWorkbenchMain");
    },
  });
  performance.mark("code/didLoadWorkbenchMain");
  result.main(configuration);
})();
