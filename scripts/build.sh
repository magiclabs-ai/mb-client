#!/bin/bash

PACKAGE_DIR="$(pwd)"

SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
cd $SCRIPT_DIR

flags=""
while getopts ":w" opt; do
  case ${opt} in
    w ) flags+="--watch" ;;
  esac
done

rm -rf ./dist

if [[ -z "${flags}" ]]; then
  node ./create-tsconfig.js
  pnpm i -P
else
  node ./create-tsconfig.js --dev
  pnpm i
fi

cd $PACKAGE_DIR
tsc
vite build ${flags}
sed "s/\.\//\.\//g; s/dist\///g" ./package.json > ./dist/package.json
cp ./README.md ./dist/README.md
pnpm i
