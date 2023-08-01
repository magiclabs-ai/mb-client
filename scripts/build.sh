#!/bin/bash

flags=''
while getopts ':w' opt; do
  case ${opt} in
    w ) flags+='--watch' ;;
  esac
done

rm -rf ./dist

if [[ -z "${flags}" ]]; then
  pnpm i -P
else
  pnpm i
fi

vite build ${flags}
