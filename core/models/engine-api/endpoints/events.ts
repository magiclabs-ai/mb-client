import {EngineAPI} from '..'
import {EventContext, eventSchema} from '../../event'
import {bindThisToFunctions, cleanJSON, handleAsyncFunction} from '@/core/utils/toolbox'

export class EventsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
    bindThisToFunctions(this)
  }

  createBookEvent(
    bookId: string,
    name: string,
    data?: EventContext
  ) {
    return handleAsyncFunction(async () => {
      const body: EventContext = {
        name
      }
      data && (body['context'] = data)
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/events/book/${bookId}`,
        options: {
          method: 'POST',
          body: cleanJSON(body)
        }
      })
      return eventSchema.parse(res)
    })
  }

}
