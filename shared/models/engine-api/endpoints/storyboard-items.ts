import {EngineAPI} from '..'
import {StoryboardItemServerSchema} from '../../storyboard-item'
import {bindThisToFunctions, handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/shared/utils/toolbox'
import {z} from 'zod'

export class StoryboardItemsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
    bindThisToFunctions(this)
  }

  retrieve(
    bookId: string
  ) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/storyboarditems/book/${bookId}`
      })
      const storyboardItems = snakeCaseObjectKeysToCamelCase(res)
      return z.array(StoryboardItemServerSchema).parse(storyboardItems)
    })
  }

}
