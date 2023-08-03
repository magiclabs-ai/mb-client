export const defaultApiHost: string = import.meta.env.VITE_API_HOST || 'http://localhost:2812'
export const defaultWebSocketHost: string = import.meta.env.VITE_WEBSOCKET_HOST || 'wss://localhost:2812'
export const designRequestTimeout: number = parseInt(import.meta.env.VITE_DESIGN_REQUEST_TIMEOUT) || 30000
