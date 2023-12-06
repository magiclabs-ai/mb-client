/* eslint-disable no-unused-vars */
import {DesignRequest, DesignRequestProps} from './design-request'
import {EngineAPI} from './engine-api'
import {camelCaseObjectKeysToSnakeCase} from '../utils/toolbox'
import {defaultApiHost, defaultWebSocketHost} from '../config'

export class MagicBookClient {
  engineAPI: EngineAPI

  public constructor(
    private readonly apiKey: string,
    private readonly apiHost=defaultApiHost,
    readonly webSocketHost=defaultWebSocketHost,
  ) {
    this.engineAPI = new EngineAPI(this.apiHost, this.apiKey)
  }

  async createDesignRequest(designRequestProps: DesignRequestProps)
  : Promise<DesignRequest> {
    if (designRequestProps.userId) {
      const book = await this.engineAPI.books.create({book: camelCaseObjectKeysToSnakeCase({...designRequestProps})})
      return new DesignRequest(book.id, this, designRequestProps)
    } else {
      throw new Error('userId is required')
    }
  }
}
