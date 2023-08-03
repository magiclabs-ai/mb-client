import {DesignRequest, DesignRequestProps} from './design-request'
import {createBook} from '@/utils/engine-api/books'
import {defaultApiHost, defaultWebSocketHost} from '@/config'
import { Fetcher } from './fetcher.model'

export class MagicBookClient {
  apiKey: string
  apiHost: string
  webSocketHost: string
  fetcher: Fetcher

  public constructor(apiKey: string, apiHost=defaultApiHost, webSocketHost=defaultWebSocketHost) {
    this.apiKey = apiKey
    this.apiHost = apiHost
    this.webSocketHost = webSocketHost
    this.fetcher = new Fetcher(this.apiHost, {headers: {'Authorization': `API-Key ${this.apiKey}`}})
  }

  async createDesignRequest(designRequestProps?: DesignRequestProps)
  : Promise<DesignRequest> {
    const book = await createBook(this)
    return new DesignRequest(book.id, this, designRequestProps)
  }
}
