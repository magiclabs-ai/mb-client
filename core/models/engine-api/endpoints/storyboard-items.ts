import {EngineAPI} from '..'
import {StoryboardItemServerSchema} from '../../storyboard-item'
import {bindThisToFunctions, handleAsyncFunction} from '@/core/utils/toolbox'
import {z} from 'zod'

export class StoryboardItemsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
    bindThisToFunctions(this)
  }

  list(
    bookId: string
  ) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/storyboarditems/book/${bookId}`
      })
      return z.array(StoryboardItemServerSchema).parse(res)
    })
  }

}
