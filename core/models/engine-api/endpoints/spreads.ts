import {EngineAPI} from '..'
import {SpreadSchema, SpreadServer} from '../../spread'
import {bindThisToFunctions, handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
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
      return z.array(SpreadSchema).parse(res.map((spread: Record<string, unknown>) =>
        snakeCaseObjectKeysToCamelCase(spread)))
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
      return SpreadSchema.parse(snakeCaseObjectKeysToCamelCase(res))
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
      return SpreadSchema.parse(snakeCaseObjectKeysToCamelCase(res))
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
      return SpreadSchema.parse(snakeCaseObjectKeysToCamelCase(res))
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
