import {defineConfig} from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, 'src')}
    ]
  },
  test: {
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
