import {EngineAPI} from '..'
import {SpreadServer, spreadServerSchema} from '../../spread'
import {SurfaceCategoryName} from '@/core/data/design-request'
import {bindThisToFunctions, handleAsyncFunction} from '@/core/utils/toolbox'
import {cleanJSON} from '@/core/utils/toolbox'
import {sflyCanvasSchema, snapCanvasSchema} from '@/core/models/galleon'
import {z} from 'zod'

export class SpreadsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
    bindThisToFunctions(this)
  }

  list(bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/spreads/book/${bookId}`
      })
      return z.array(spreadServerSchema).parse(res)
    })
  }

  create(bookId: string, spread: Partial<SpreadServer>) {
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

  retrieve(spreadId: string, bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/spreads/${spreadId}/book/${bookId}`
      })
      return spreadServerSchema.parse(res)
    })
  }
 
  render(spreadId: string, bookId: string, size = 512) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/spreads/${spreadId}/book/${bookId}/render/${size}`
      })
      return res
    })
  }

  update(spreadId: string, bookId: string, spread: Partial<SpreadServer>) {
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

  delete(spreadId: string, bookId: string) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/spreads/${spreadId}/book/${bookId}`,
        options: {
          method: 'DELETE'
        }
      })
    })
  }

  layouts(bookId: string, page: number, surfaceCategoryName?: SurfaceCategoryName) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: '/v1/spreads/layouts',
        options: {
          method: 'POST',
          body: cleanJSON({
            user_id: bookId,
            page_num: page,
            surfaceCategoryName
          })
        }
      })
      return z.array(surfaceCategoryName ? snapCanvasSchema : sflyCanvasSchema).parse(res)
    })
  }
}
