import {faker} from '@faker-js/faker'
import DesignRequest, {DesignRequestProps} from './design-request'

export default class MagicBookClient {
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
