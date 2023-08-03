/// <reference types="vitest" />
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
import execute from 'rollup-plugin-execute'
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
    },
    rollupOptions: {
      plugins: [
        execute('./scripts/after-build.sh')
      ]
    }
  },
  plugins: [dts()],
  test: {
    setupFiles: [
      '__tests__/mocks/fetch.ts',
      '__tests__/mocks/books.ts',
      '__tests__/mocks/design-options.ts',
      '__tests__/mocks/websocket.ts'
    ],
    environment: 'jsdom',
    coverage: {
      all: true,
      include: ['src/**/*.ts'],
      exclude: ['src/data/design-request.ts'],
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json', 'html']
    }
  }
})
