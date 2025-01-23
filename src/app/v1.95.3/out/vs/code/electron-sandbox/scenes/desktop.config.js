const runtimeHidden = (e) => {
  if (e.getWorkbenchState() === 1) return !1;
};
window.__icube_workbench_scene_confiuration = {
  preloadModules: [
    { module: "@byted-icube/ai-modules", path: "dist/index.js" },
    { module: "@byted-icube/webcomponents", path: "dist/index.js" },
    { module: "@ai-local-server/common", path: "dist/index.bundle.js" },
    { module: "@byted-icube/ai-modules-ng", path: "dist/index.js" },
  ],
  modules: ["@byted-icube/ai-modules"],
  contributions: [],
  disabledConfiguration: { views: ["~remote.forwardedPorts"], extensions: [], keybinds: [], menus: {} },
  configuration: {
    "titlePart.project.edit.disabled": !0,
    "debug.toolBarLocation": "docked",
    "workbench.colorTheme": "Dark",
    "editor.accessibilitySupport": "off",
    "workbench.startupEditor": "none",
    "workbench.skip-welcome": !0,
    "editor.fontSize": 13,
    "editor.padding.top": 8,
    "workbench.fontAliasing": "default",
    "editor.lineHeight": 1.73,
    "editor.pasteAs.enabled": !1,
    "workbench.tree.renderIndentGuides": "always",
    "editor.stickyScroll.enabled": !0,
    "markdown.preview.breaks": !0,
    "go.showWelcome": !1,
    "gitlens.showWelcomeOnInstall": !1,
    "terminal.integrated.defaultProfile.osx": null,
    "terminal.integrated.defaultProfile.linux": null,
  },
  sceneConfiguration: {
    "titleBar.hideMenu": !0,
    "titleBar.hideLogo": !0,
    "panel.remotePorts.disabled": !0,
    "workbench.panel.hidden": !0,
    "workbench.auxiliaryBar.activeviewletid": "workbench.panel.icube.chatSidebar",
    "workbench.auxiliaryBar.hidden.runtime": (e) => {
      if (e.getWorkbenchState() === 1) return !1;
    },
    "workbench.sideBar.hidden.runtime": (e) => {
      if (e.getWorkbenchState() === 1) return !0;
    },
    "workbench.panel.hidden.runtime": (e) => {
      if (e.getWorkbenchState() === 1) return !0;
    },
    "workbench.auxiliaryBar.runtime.size": (e, t) => {
      if (e.getWorkbenchState() === 1) return (t.workbenchDimensions.width - t.activityBarWidth) * 0.4;
    },
  },
};
