// vite.config.ts
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
import path, {resolve} from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, 'src')}
    ]
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'magicbook-client',
      fileName: 'magicbook-client'
    }
  },
  plugins: [dts()]
})
