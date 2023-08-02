#!/bin/bash

flags=''
while getopts ':w' opt; do
  case ${opt} in
    w ) flags+='--watch' ;;
  esac
done

rm -rf ./dist

if [[ -z "${flags}" ]]; then
  node ./scripts/create-tsconfig.js
  pnpm i -P
else
  node ./scripts/create-tsconfig.js --dev
  pnpm i
fi

vite build ${flags}
