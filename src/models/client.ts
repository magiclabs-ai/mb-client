import {DesignRequest, DesignRequestProps} from './design-request'
import {apiHost, webSocketHost} from '@/config'
import {createBook} from '@/utils/engine-api/books'

export class MagicBookClient {
  apiKey: string
  apiHost: string
  webSocketHost: string

  public constructor(apiKey: string, customApiHost=apiHost, customWebSocketHost=webSocketHost) {
    this.apiKey = apiKey
    this.apiHost = customApiHost
    this.webSocketHost = customWebSocketHost
  }

  async createDesignRequest(designRequestProps?: DesignRequestProps)
  : Promise<DesignRequest> {
    const book = await createBook(this)
    return new DesignRequest(book.id, this, designRequestProps)
  }
}
