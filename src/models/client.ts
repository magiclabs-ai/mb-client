import {DesignRequest, DesignRequestProps} from './design-request'
import {createBook} from '@/utils/engine-api/books'

export class MagicBookClient {
  apiKey: string

  public constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async createDesignRequest(designRequestProps?: DesignRequestProps)
  : Promise<DesignRequest> {
    const book = await createBook()
    return new DesignRequest(book.id, designRequestProps)
  }
}
