pnpm run build
cd dist
node ./index.mjs config --api-host https://localhost:8080 --api-key 1234 --ws-host wss://localhost:8080
mv .config.json ../.config.json
