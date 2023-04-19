#!/bin/bash
flags=''
while getopts ':w' opt; do
  case ${opt} in
    w ) flags+='--watch' ;;
  esac
done
rm -rf ./dist
vite build ${flags}
