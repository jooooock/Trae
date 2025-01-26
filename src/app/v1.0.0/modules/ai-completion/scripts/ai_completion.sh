#!/usr/bin/env bash
set -eu

NODE_VERSION=${NODE_VERSION:-18.16.0}
PLATFORM=${PLATFORM:-$(uname | tr '[:upper:]' '[:lower:]')}
PLATFORM=${PLATFORM:-linux}
ARCH=${ARCH:-$(uname -m)}
ARCH=${ARCH:-x64}
CDN_RELEASE_VERSION=${CDN_RELEASE_VERSION:-unknown}

if [[ "$ARCH" == "x86_64" ]] || [[ "$ARCH" == "x64" ]]; then
    ARCH="x64"
elif [[ "$ARCH" == "arm64" ]] || [[ "$ARCH" == "aarch64" ]]; then
    ARCH="arm64"
else
    echo "Unsupported architecture: $ARCH"
    exit 1
fi

install_nodejs() {
  if [[ "$CDN_RELEASE_VERSION" == "desktop" ]]; then
    echo "desktop build type, not install Node.js, use Electron instead"
    return
  fi
  echo "Node.js is not installed, will install version $NODE_VERSION"

  # https://bnpm.bytedance.net/mirrors/node/v18.16.0/node-v18.16.0-darwin-arm64.tar.xz
  NODEJS_URL="https://bnpm.bytedance.net/mirrors/node/v${NODE_VERSION}/node-v${NODE_VERSION}-${PLATFORM}-${ARCH}.tar.gz"
  echo "Downloading Node.js from $NODEJS_URL"

  mkdir -p "${USR_ROOT}"/tmp/nodejs
  curl -L "$NODEJS_URL" -o "${USR_ROOT}"/tmp/nodejs.tar.gz
  tar -zxf "${USR_ROOT}"/tmp/nodejs.tar.gz -C "${USR_ROOT}"/tmp/nodejs --strip-components=1

  cp -a "${USR_ROOT}"/tmp/nodejs/bin/* "$USR_ROOT"/bin
  cp -a "${USR_ROOT}"/tmp/nodejs/lib/* "$USR_ROOT"/lib
  cp -a "${USR_ROOT}"/tmp/nodejs/share/* "$USR_ROOT"/share
  cp -a "${USR_ROOT}"/tmp/nodejs/include/* "$USR_ROOT"/include

  rm -rf "${USR_ROOT}"/tmp

  echo "Node.js installed successfully"
  echo "Node.js version: $("$USR_ROOT"/bin/node --version)"
}

if [[ -f "$USR_ROOT"/bin/node ]]; then
  echo "Node.js is already installed"
  echo "Node.js version: $("$USR_ROOT"/bin/node --version)"
else
  (
    install_nodejs
  )
fi

COMPLETION_SERVER_VERSION="1.1.63"

# if [ "$CLOUDIDE_TENANT_NAME" = "bytedance" ]; then
#   COMPLETION_SERVER_VERSION="1.1.40"
# fi
echo $USR_ROOT
echo "completion server version: $COMPLETION_SERVER_VERSION"
#use server.js in @ai-server/plugin-common to start ai server\

if [[ "$CDN_RELEASE_VERSION" == "desktop" ]]; then
  echo "desktop build type, use npm install"
  npm install -g @ai-server/plugin-common@"$COMPLETION_SERVER_VERSION" --prefix "$USR_ROOT"
else
  echo "not desktop build type, use usr/bin/npm install"
  "$USR_ROOT"/bin/npm install -g @ai-server/plugin-common@"$COMPLETION_SERVER_VERSION" --prefix "$USR_ROOT"
fi
chmod +x "$USR_ROOT"/lib/node_modules/@ai-server/plugin-common/resource/aiserver/server.js
# 删除无用文件
rm -rf "$USR_ROOT"/lib/node_modules/@ai-server/plugin-common/lib
rm -rf "$USR_ROOT"/lib/node_modules/@ai-server/plugin-common/node_modules
rm -rf "$USR_ROOT"/lib/node_modules/@ai-server/plugin-common/resource/images
rm -rf "$USR_ROOT"/lib/node_modules/@ai-server/plugin-common/resource/media
# 创建软链
if [ "${MARSCODE_DEV_MODE:-}" ]; then
  ln -sf "$USR_ROOT"/lib/node_modules/@ai-server/plugin-common/resource/aiserver/server.js "$USR_ROOT"/bin/ide-aiserver
else
  (cd "$USR_ROOT"/bin && ln -sf ../lib/node_modules/@ai-server/plugin-common/resource/aiserver/server.js ./ide-aiserver)
fi
