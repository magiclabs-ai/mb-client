rm -rf ./dist
tsc
vite build
sed 's/\.\//\.\//g; s/dist\///g' package.json > ./dist/package.json
