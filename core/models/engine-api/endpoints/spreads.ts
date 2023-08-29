import {EngineAPI} from '..'
import {SpreadServer, spreadServerSchema} from '../../spread'
import {cleanJSON} from '@/core/utils/toolbox'
import {handleAsyncFunction} from '@/core/utils/toolbox'
import {z} from 'zod'

export class SpreadsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  list(
    bookId: string
  ) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/spreads/book/${bookId}`
      })
      return z.array(spreadServerSchema).parse(res)
    })
  }
  
  create(
    bookId: string,
    spread: SpreadServer
  ) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/spreads/book/${bookId}`,
        options: {
          method: 'POST',
          body: cleanJSON(spread)
        }
      })
      return spreadServerSchema.parse(res)
    })
  }

  retrieve(
    spreadId: string,
    bookId: string
  ) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/spreads/${spreadId}/book/${bookId}`
      })
      return spreadServerSchema.parse(res)
    })
  }

  update(
    spreadId: string,
    bookId: string,
    spread: SpreadServer
  ) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/spreads/${spreadId}/book/${bookId}`,
        options: {
          method: 'PUT',
          body: cleanJSON(spread)
        }
      })
      return spreadServerSchema.parse(res)
    })
  }

  delete(
    spreadId: string,
    bookId: string
  ) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/spreads/${spreadId}/book/${bookId}`,
        options: {
          method: 'DELETE'
        }
      })
    })
  }

}
