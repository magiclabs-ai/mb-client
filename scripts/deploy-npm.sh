#!/bin/bash
env_dev=false
while [[ $# -gt 0 ]]; do
  key="$1"
  case $key in
    --dev)
      env_dev=true
      shift
      ;;
    *)
      exit 1
      ;;
  esac
done

npm run build
cd ./dist

if [ $env_dev = true ]; then
  sed -i 's/\("version": "\)\([^"]*\)\(".*\)/\1\2-dev\3/' ./package.json
  npm publish --tag dev
else
  npm publish
fi

