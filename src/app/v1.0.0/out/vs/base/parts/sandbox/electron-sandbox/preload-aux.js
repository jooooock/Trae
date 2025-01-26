"use strict";
(function () {
  const { ipcRenderer, webFrame, contextBridge } = require("electron");
  function checkIpcChannel(channel) {
    if (!channel || !channel.startsWith("vscode:")) {
      throw new Error(`Unsupported event IPC channel '${channel}'`);
    }
    return true;
  }

  const vscode = {
    ipcRenderer: {
      send(event, ...args) {
        checkIpcChannel(event) && ipcRenderer.send(event, ...args);
      },
      invoke(event, ...args) {
        checkIpcChannel(event);
        return ipcRenderer.invoke(event, ...args);
      },
    },
    webFrame: {
      setZoomLevel(zoomLevel) {
        typeof zoomLevel == "number" && webFrame.setZoomLevel(zoomLevel);
      },
    },
  };
  try {
    contextBridge.exposeInMainWorld("vscode", vscode);
  } catch (err) {
    console.error(err);
  }
})();
