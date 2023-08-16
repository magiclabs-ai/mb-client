/// <reference types="vitest" />
import {defineConfig} from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {find: '@/core', replacement: path.resolve(__dirname, '../../core')},
      {find: '@/client', replacement: path.resolve(__dirname, '../client')},
      {find: '@/cli', replacement: path.resolve(__dirname, './')}
    ]
  },
  test: {
    setupFiles: [
      '../../core/tests/mocks/fetch.ts'
    ],
    server: {
      deps: {
        inline: ['vitest-mock-process']
      }
    },
    environment: 'jsdom',
    coverage: {
      all: true,
      include: ['src/**/*.ts'],
      exclude: ['src/index.ts'],
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json', 'html']
    }
  }
})
