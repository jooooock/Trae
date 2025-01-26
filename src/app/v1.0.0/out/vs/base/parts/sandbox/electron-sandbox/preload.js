"use strict";
(function () {
  const { ipcRenderer, webFrame, contextBridge, webUtils } = require("electron");
  if (!process.isMainFrame) {
    const vscode = {
      webUtils: {
        getPathForFile(file) {
          return webUtils.getPathForFile(file);
        },
      },
    };
    if (process.contextIsolated) {
      try {
        contextBridge.exposeInMainWorld("vscode", vscode);
      } catch (err) {
        console.error(err);
      }
    } else {
      window.vscode = vscode;
    }
    return;
  }

  function checkIpcChannel(channel) {
    if (!channel || !channel.startsWith("vscode:")) {
      throw new Error(`Unsupported event IPC channel '${channel}'`);
    }
    return true;
  }
  function getCliArgValue(name) {
    for (const arg of process.argv) {
      if (arg.indexOf(`--${name}=`) === 0) {
        return arg.split("=")[1];
      }
    }
  }

  let configuration;
  const a = (async () => {
      const vscodeWindowConfig = getCliArgValue("vscode-window-config");
      if (!vscodeWindowConfig) {
        throw new Error("Preload: did not find expected vscode-window-config in renderer process arguments list.");
      }
      try {
        checkIpcChannel(vscodeWindowConfig);
        const r = (configuration = await ipcRenderer.invoke(vscodeWindowConfig));
        Object.assign(process.env, r.userEnv);
        webFrame.setZoomLevel(r.zoomLevel ?? 0);
        return r;
      } catch (err) {
        throw new Error(`Preload: unable to fetch vscode-window-config: ${err}`);
      }
    })(),
    shellEnv = (async () => {
      const [e, r] = await Promise.all([(async () => (await a).userEnv)(), ipcRenderer.invoke("vscode:fetchShellEnv")]);
      return { ...process.env, ...r, ...e };
    })(),
    vscode = {
      ipcRenderer: {
        send(e, ...r) {
          checkIpcChannel(e) && ipcRenderer.send(e, ...r);
        },
        invoke(e, ...r) {
          return checkIpcChannel(e), ipcRenderer.invoke(e, ...r);
        },
        on(e, r) {
          return checkIpcChannel(e), ipcRenderer.on(e, r), this;
        },
        once(e, r) {
          return checkIpcChannel(e), ipcRenderer.once(e, r), this;
        },
        removeListener(e, r) {
          return checkIpcChannel(e), ipcRenderer.removeListener(e, r), this;
        },
      },
      ipcMessagePort: {
        acquire(e, r) {
          if (checkIpcChannel(e)) {
            const d = (v, p) => {
              r === p && (ipcRenderer.off(e, d), window.postMessage(r, "*", v.ports));
            };
            ipcRenderer.on(e, d);
          }
        },
      },
      webFrame: {
        setZoomLevel(e) {
          typeof e == "number" && webFrame.setZoomLevel(e);
        },
      },
      webUtils: {
        getPathForFile(e) {
          return webUtils.getPathForFile(e);
        },
      },
      process: {
        get platform() {
          return process.platform;
        },
        get arch() {
          return process.arch;
        },
        get env() {
          return { ...process.env };
        },
        get versions() {
          return process.versions;
        },
        get type() {
          return "renderer";
        },
        get execPath() {
          return process.execPath;
        },
        cwd() {
          return process.env.VSCODE_CWD || process.execPath.substr(0, process.execPath.lastIndexOf(process.platform === "win32" ? "\\" : "/"));
        },
        shellEnv() {
          return shellEnv;
        },
        getProcessMemoryInfo() {
          return process.getProcessMemoryInfo();
        },
        on(event, listener) {
          process.on(event, listener);
        },
      },
      context: {
        configuration() {
          return configuration;
        },
        async resolveConfiguration() {
          const e = await a;
          if (e.cssModulesUpdateIpc) {
            e.cssModules = await ipcRenderer.invoke(e.cssModulesUpdateIpc);
          }
          return e;
        },
      },
    };
  if (process.contextIsolated) {
    try {
      contextBridge.exposeInMainWorld("vscode", vscode);
    } catch (err) {
      console.error(err);
    }
  } else {
    window.vscode = vscode;
  }
})();
