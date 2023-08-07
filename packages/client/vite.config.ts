/// <reference types="vitest" />
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
import path, {resolve} from 'path'

export default defineConfig({
  envDir: '../../',
  resolve: {
    alias: [
      {find: '@/core', replacement: path.resolve(__dirname, '../../core')},
      {find: '@/client', replacement: path.resolve(__dirname, 'src')}
    ]
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'magicbook-client',
      fileName: 'magicbook-client'
    }
  },
  plugins: [dts({entryRoot: 'src'})],
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
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json', 'html']
    }
  }
})
