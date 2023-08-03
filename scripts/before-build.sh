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
else
  node ./create-tsconfig.js --dev
fi
