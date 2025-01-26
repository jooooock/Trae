#!/bin/bash

if [ "$MARSCODE_DEV_MODE" ]; then
  echo "$(pwd)/usr"
  if [ "$MARSCODE_DEV_AI_COMPLETION_MANUAL" ]; then
    sleep 9999999
  else
    if [ ! -d "$(pwd)/usr" ]; then
      source $(pwd)/scripts/prepare_usr.sh
    fi
    export AI_NATIVE_ENV=desktop
    export RUST_LOG=info
    export CLOUDIDE_TENANT_NAME=cn
    export PATH="$(pwd)/usr/bin:$PATH"
    # export PORT0=9997
    cargo run -- --port ${PORT0}
  fi
else
  if [ "$ICUBE_PRODUCT_TYPE" = "desktop" ]; then
    export AI_NATIVE_ENV=desktop
  elif [ "$CLOUDIDE_TENANT_NAME" = "bytedance" ]; then
    export AI_NATIVE_ENV=cloudide
  elif [ "$CLOUDIDE_PROJECT_SCENE" = "practice" ]; then
    export AI_NATIVE_ENV=practice
  elif [ "$CLOUDIDE_PROVIDER_REGION" = "cn" ]; then
    export AI_NATIVE_ENV=marscode_boe
  elif [ "$CLOUDIDE_PROVIDER_REGION" = "us" ]; then
    export AI_NATIVE_ENV=marscode_boei18n
  elif [ "$CLOUDIDE_PROVIDER_REGION" = "sg" ]; then
    export AI_NATIVE_ENV=marscode_boei18n
  else
    export AI_NATIVE_ENV=marscode_boe
  fi

  if [ "$ICUBE_ELECTRON_PATH" ]; then
    echo "desktop build type, not install Node.js, use Electron instead"
    export ELECTRON_RUN_AS_NODE=true
    exec ./ai-completion --port ${PORT0}
  else
    export PATH="$(pwd)/usr/bin:$PATH"
    echo $PATH
    exec ./ai-completion --port ${PORT0}
  fi
fi
