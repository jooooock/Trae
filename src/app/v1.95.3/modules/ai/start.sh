#!/bin/bash
# for dev

if [ "$MARSCODE_DEV_MODE" ]; then
    chmod +x ./binary/ckg_server_darwin_arm64
    if [ "$MARSCODE_DEV_AI_MANUAL" ]; then
        sleep 9999999
    else
        export AI_NATIVE_ENV=desktop
        export RUST_LOG=INFO
        export CLOUDIDE_TENANT_NAME=cn
        export ICUBE_MODULAR_DATA_DIR=$HOME/.icube
        export DB_PATH=$ICUBE_MODULAR_DATA_DIR/ai-chat/database.db
        export FILE_BASE_DIR=$ICUBE_MODULAR_DATA_DIR/ai-chat/snapshot
        export DB_PASSWORD_KEY=1CqAknayQsrfH9Byp2QzynTckHGzRom9

        cargo run
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
    export DB_PATH=$ICUBE_MODULAR_DATA_DIR/ai-chat/database.db
    export FILE_BASE_DIR=$ICUBE_MODULAR_DATA_DIR/ai-chat/snapshot
    export DB_PASSWORD_KEY=1CqAknayQsrfH9Byp2QzynTckHGzRom9
    exec ./ai
fi
