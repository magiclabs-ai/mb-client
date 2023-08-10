#!/bin/bash

version=$(sed -n 's/.*"version": "\(.*\)".*/\1/p' package.json)
publishCommand="pnpm publish --access public --tag"
packages=("cli" "client")
baseDir=$PWD

if [[ "$1" == "--beta" ]]; then
    version=$version-canary
    publishCommand="$publishCommand beta"
else
    publishCommand="$publishCommand latest"
fi

for item in "${packages[@]}"; do
    echo "Package: $item@$version"
    cd $baseDir/packages/$item
    sed -i "s/\"version\": \".*\"/\"version\": \"$version\"/" package.json
    eval $publishCommand
done
