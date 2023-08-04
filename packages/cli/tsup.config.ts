import {defineConfig} from 'tsup'

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
      import { EventEmitter } from "node:events"
      const eventEmitter = new EventEmitter()
      class Window {
        dispatchEvent(event) {
          eventEmitter.emit('event', event.detail)
        }
      }
      Object.assign(global, {
        WebSocket,
        eventEmitter: eventEmitter,
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

