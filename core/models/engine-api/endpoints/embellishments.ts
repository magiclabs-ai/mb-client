import {EngineAPI, paginatedResponseSchema} from '..'
import {embellishmentServerSchemas} from '../../embellishment'
import {handleAsyncFunction} from '@/core/utils/toolbox'

export class EmbellishmentsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  listForStyle(
    styleSlug: string
  ) {
    return handleAsyncFunction(async () => {
      console.log('listForStyle', styleSlug, this.engineAPI)
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/embellishments/style/${styleSlug}`
      })  
      return paginatedResponseSchema(embellishmentServerSchemas).parse(res)
    })
  }

}
