import {vi} from 'vitest'

export class WebSocketMock {

  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-unused-vars
  constructor(url: string|URL){}

  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-unused-vars, @typescript-eslint/no-unused-vars
  onmessage(event: MessageEvent<any>) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  close() {}
}

vi.stubGlobal('WebSocket', WebSocketMock)
