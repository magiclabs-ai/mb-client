import {EngineAPI, BaseEndpointProps, BaseUpdateEndpointProps} from '..'
import {ImageServer, imageServerSchema} from '../../design-request/image'
import {cleanJSON} from '@/core/utils/toolbox'
import {handleAsyncFunction} from '@/core/utils/toolbox'
import {z} from 'zod'

type ListProps = BaseEndpointProps & {
  bookId: string
}

type AddToBookProps = BaseEndpointProps & {
  bookId: string,
  image: ImageServer
}

type RetrieveProps = BaseEndpointProps & {
  bookId: string,
  imageId: string
}

type UpdateProps = BaseUpdateEndpointProps<Partial<ImageServer>> & {
  bookId: string,
  imageId: string
}

type DeleteProps = BaseEndpointProps & {
  bookId: string,
  imageId: string
}

export class ImagesEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  list({bookId, qs}: ListProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/images/book/${bookId}`,
        qs
      })
      return z.array(imageServerSchema).parse(res)
    })
  }

  addToBook({bookId, image, qs}: AddToBookProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/images/book/${bookId}`,
        options: {
          method: 'POST',
          body: cleanJSON(image)
        },
        qs
      })
      return imageServerSchema.parse(res)
    })
  }
  
  retrieve({bookId, imageId, qs}: RetrieveProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/images/${imageId}/book/${bookId}/`,
        qs
      })
      return imageServerSchema.parse(res)
    })
  }
  
  update({bookId, imageId, payload, qs}: UpdateProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/images/${imageId}/book/${bookId}/`,
        options: {
          method: 'PUT',
          body: cleanJSON(payload)
        },
        qs
      })
      return imageServerSchema.parse(res)
    })
  }
  
  delete({bookId, imageId, qs}: DeleteProps) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/images/${imageId}/book/${bookId}/`,
        options: {
          method: 'DELETE'
        },
        qs
      })
    })
  }

}
