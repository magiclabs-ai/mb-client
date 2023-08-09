cd ../client
pnpm run build
cd ../cli
pnpm link ../client/dist
pnpm run build
cd dist
node ./index.mjs config --apiHost http://localhost:8080 --apiKey 1234 --wsHost wss://localhost:8080
