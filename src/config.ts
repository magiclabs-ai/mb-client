export const defaultApiHost: string = import.meta.env.VITE_API_HOST || ''
export const defaultWebSocketHost: string = import.meta.env.VITE_WEBSOCKET_HOST || ''
export const designRequestTimeout: number = parseInt(import.meta.env.VITE_DESIGN_REQUEST_TIMEOUT) || 300000
