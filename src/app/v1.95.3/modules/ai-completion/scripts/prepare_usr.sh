#!/usr/bin/env bash
set -eu

ROOT=$(pwd)
USR_NAME=${USR_NAME:-usr}
if [ "${MARSCODE_DEV_MODE:-}" ]; then
  export AI_COMPLETION_SCRIPT_DIR="$(pwd)/scripts"
else
  export AI_COMPLETION_SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
fi
echo $AI_COMPLETION_SCRIPT_DIR
export USR_ROOT=$ROOT/$USR_NAME

mkdir -p "$USR_ROOT"/lib "$USR_ROOT"/bin "$USR_ROOT"/include "$USR_ROOT"/share "$USR_ROOT"/local

echo "install ai completion server"
source "$AI_COMPLETION_SCRIPT_DIR"/ai_completion.sh
