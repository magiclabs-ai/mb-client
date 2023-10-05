pnpm run build:dev
mkdir -p ./data/image-sets
cd dist
cp -R ./data/image-sets/ ../data/image-sets
node ./index.mjs config --api-host https://api.dev.magicbook.io:8080 --api-key 1234 --ws-host wss://api.dev.magicbook.io:8080
mv .config.json ../.config.json
