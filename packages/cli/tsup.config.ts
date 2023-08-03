import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm'],
  sourcemap: true,
  target: 'esnext',
  outDir: 'dist',
  banner: {
    js: `
      import WebSocket from 'ws'
      class Window {
        dispatchEvent(event) {
          console.log(event)
        }
      }
      Object.assign(global, {
        WebSocket,
        CustomEvent: class CustomEvent {
          type
          detail
          constructor(type, detail) {
            this.type = type
            this.detail = detail
          }
        },
        window: new Window()
      })
    `
  }
})

