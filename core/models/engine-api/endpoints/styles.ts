import {EngineAPI, baseEndpointProps, paginatedResponseSchema, paginatedResponseServerSchema} from '..'
import {handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {styleSchema, styleServerSchema} from '../../style'
import {styleServerFactory} from '@/core/tests/factories/style.factory'

export class StylesEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  list(props?: baseEndpointProps) {
    return handleAsyncFunction(async () => {
      console.log('list', this.engineAPI)
      // const res = await this.engineAPI.fetcher.call({
      //   path: `/v1/embellishments/style/${styleSlug}`
      // })
      const res = {
        count: 10,
        next_cursor: null,
        results: Array.from({length: 10}, styleServerFactory)
      }
      return props?.returnServerSchemas 
        ? paginatedResponseServerSchema(styleServerSchema).parse(res)
        : paginatedResponseSchema(styleSchema).parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }
}
