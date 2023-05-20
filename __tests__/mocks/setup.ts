import {Mock, vi} from 'vitest'
import {createBook, retrieveBook, retrieveGalleon, updateBook} from '../../src/utils/engine-api/books'
import {getDesignOptions} from '../../src/utils/engine-api/design-options'
import axios from 'axios'

vi.mock('axios')
export const axiosGet = axios.get as Mock
export const axiosDelete = axios.delete as Mock
export const axiosPost = axios.post as Mock
export const axiosPut = axios.put as Mock

vi.mock('@/utils/engine-api/books', async () => ({
  createBook: vi.fn(),
  retrieveBook: vi.fn(),
  updateBook: vi.fn(),
  retrieveGalleon: vi.fn()
}))

export const mockCreateBook = createBook as Mock
export const mockRetrieveBook = retrieveBook as Mock
export const mockUpdateBook = updateBook as Mock
export const mockRetrieveGalleon = retrieveGalleon as Mock

vi.mock('@/utils/engine-api/design-options', async () => ({
  getDesignOptions: vi.fn()
}))

export const mockGetDesignOptions = getDesignOptions as Mock

export class WebSocketMock {

  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-unused-vars
  constructor(url: string|URL){}

  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-unused-vars, @typescript-eslint/no-unused-vars
  onmessage(event: MessageEvent<any>) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  close() {}
}

vi.stubGlobal('WebSocket', WebSocketMock)
