# ICube Devtool Ports

## 开发

```
pnpm i
pnpm run watch
```

# 作为 NPM 包使用


1. package.json icube-devtool-ports 修改包名为 @byted-icube/devtools-extension-ports
2. rush.json 修改包名为 @byted-icube/devtools-extension-ports
3. 执行 `yarn build:package` 构建
4. 执行 `rush publish --include-all --apply --publish` 发布新版本

## 发布命令
rush change -b origin/master --bulk --bump-type patch --message 'upgrade ports versions'
rush version --bump
rush publish --include-all --apply --publish
