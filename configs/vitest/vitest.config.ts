/// <reference types="vitest" />
import {defineConfig} from 'vite'

export default defineConfig({
  test: {
    setupFiles: [
      '../../core/mocks/fetch.ts',
      '../../core/mocks/books.ts',
      '../../core/mocks/design-options.ts',
      '../../core/mocks/websocket.ts'
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
