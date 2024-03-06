import {BaseEndpointProps, EngineAPI} from '..'
import {StoryboardItem, StoryboardItemSchema} from '../../storyboard-item'
import {snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {z} from 'zod'

type listProps = BaseEndpointProps & {
  bookId: string
}
export class StoryboardItemsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {}

  async list(props: listProps): Promise<Array<StoryboardItem>> {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/storyboarditems/book/${props.bookId}`
    })
    return z.array(StoryboardItemSchema).parse(snakeCaseObjectKeysToCamelCase(res))
  }
}
