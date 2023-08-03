import {DesignRequest, DesignRequestProps} from './design-request'
import {EngineAPI} from './engine-api'
import {defaultApiHost, defaultWebSocketHost} from '../config'

export class MagicBookClient {
  apiKey: string
  apiHost: string
  webSocketHost: string
  engineAPI: EngineAPI

  public constructor(apiKey: string, apiHost=defaultApiHost, webSocketHost=defaultWebSocketHost) {
    this.apiKey = apiKey
    this.apiHost = apiHost
    this.webSocketHost = webSocketHost
    this.engineAPI = new EngineAPI(this.apiHost, this.apiKey)
  }

  async createDesignRequest(designRequestProps?: DesignRequestProps)
  : Promise<DesignRequest> {
    const book = await this.engineAPI.createBook()
    return new DesignRequest(book.id, this, designRequestProps)
  }
}
