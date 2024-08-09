import {EngineAPI} from '..'
import {ImageServer, imageServerSchema} from '../../design-request/image'
import {bindThisToFunctions, handleAsyncFunction} from '@/core/utils/toolbox'
import {cleanJSON} from '@/core/utils/toolbox'
import {z} from 'zod'

export class ImagesEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
    bindThisToFunctions(this)
  }

  list(bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/images/book/${bookId}`
      })
      return z.array(imageServerSchema).parse(res)
    })
  }
  
  retrieve(imageId: string, bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/images/${imageId}/book/${bookId}`
      })
      return imageServerSchema.parse(res)
    })
  }
  
  update(imageId: string, bookId: string, image: ImageServer) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/images/${imageId}/book/${bookId}`,
        options: {
          method: 'PUT',
          body: cleanJSON(image)
        }
      })
      return imageServerSchema.parse(res)
    })
  }
  
  delete(imageId: string, bookId: string) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/images/${imageId}/book/${bookId}`,
        options: {
          method: 'DELETE'
        }
      })
    })
  }

  addToBook(bookId: string, image: ImageServer) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/images/book/${bookId}`,
        options: {
          method: 'POST',
          body: cleanJSON(image)
        }
      })
      return imageServerSchema.parse(res)
    })
  }

}
