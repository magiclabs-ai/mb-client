#!/bin/bash

SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
cd $SCRIPT_DIR

rm -rf ./dist

if [[ "$1" == "--watch" ]]; then
  node ../create-tsconfig.js --dev
else
  node ../create-tsconfig.js
fi
