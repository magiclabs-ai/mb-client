import {vi} from 'vitest'

export class WebSocketMock {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  constructor(url: string|URL){}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line max-len
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  onmessage(event: MessageEvent<any>) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  close() {}
}

vi.stubGlobal('WebSocket', WebSocketMock)
