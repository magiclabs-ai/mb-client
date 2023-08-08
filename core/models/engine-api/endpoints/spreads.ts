import {EngineAPI} from '..'
import {SpreadServer, SpreadServerSchema} from '../../spread'
import {bindThisToFunctions, handleAsyncFunction} from '@/core/utils/toolbox'
import {z} from 'zod'

export class SpreadsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
    bindThisToFunctions(this)
  }

  list(
    bookId: string
  ) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/spreads/book/${bookId}`
      })
      return z.array(SpreadServerSchema).parse(res)
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
          body: JSON.stringify(spread)
        }
      })
      return SpreadServerSchema.parse(res)
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
      return SpreadServerSchema.parse(res)
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
          body: JSON.stringify(spread)
        }
      })
      return SpreadServerSchema.parse(res)
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
