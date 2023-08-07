/* eslint-disable no-unused-vars */
import {DesignRequest, DesignRequestProps} from './design-request'
import {EngineAPI} from './engine-api'
import {defaultApiHost, defaultWebSocketHost} from '../config'

export class MagicBookClient {
  engineAPI: EngineAPI

  public constructor(
    private readonly apiKey: string,
    private readonly apiHost=defaultApiHost,
    readonly webSocketHost=defaultWebSocketHost
  ) {
    this.engineAPI = new EngineAPI(this.apiHost, this.apiKey)
  }

  async createDesignRequest(designRequestProps?: DesignRequestProps)
  : Promise<DesignRequest> {
    const book = await this.engineAPI.books.create()
    return new DesignRequest(book.id, this, designRequestProps)
  }
}
