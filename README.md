# Trae

## 目的

分析`Trae`程序内部某些功能的具体实现过程。

## 版本

v1.0.0

## 运行(macOS)

```shell
yarn install
yarn dev
```
将以非打包模式启动`Trae`。

## 分析结果

`AI Builder`模块位于`src/app/v1.0.0/node_modules/@byted-icube/ai-modules-agent`

`AI Chat`模块位于`src/app/v1.0.0/node_modules/@byted-icube/ai-modules-ng`

### 1. 设备注册与激活

> 代码位于`src/app/v1.0.0/node_modules/@byted/device-register/dist/index.mjs`，暴露一个`DeviceRegister`类供外部使用。
