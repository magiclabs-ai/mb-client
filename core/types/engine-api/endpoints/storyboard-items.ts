import {EngineAPI, baseEndpointProps} from '..'
import {StoryboardItemSchema, StoryboardItemServerSchema} from '../../storyboard-item'
import {handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {z} from 'zod'

type listProps = baseEndpointProps & {
  bookId: string
}
export class StoryboardItemsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  list({bookId, returnServerSchemas}: listProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/storyboarditems/book/${bookId}`
      })
      if (res) {
        return returnServerSchemas
          ? z.array(StoryboardItemServerSchema).parse(res)
          : z.array(StoryboardItemSchema).parse(snakeCaseObjectKeysToCamelCase(res))
      }
      return res
    })
  }

}
