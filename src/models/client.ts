import {DesignRequest, DesignRequestProps} from './design-request'
import {faker} from '@faker-js/faker'

export class MagicBookClient {
  apiKey: string

  public constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async createDesignRequest(designRequestProps?: DesignRequestProps)
  : Promise<DesignRequest> {
    return new Promise((resolve) => {
      resolve(new DesignRequest(faker.datatype.uuid(), designRequestProps))
    })
  }
}
