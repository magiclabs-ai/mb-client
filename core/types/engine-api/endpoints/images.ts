import {BaseEndpointProps, BaseUpdateEndpointProps, EngineAPI} from '..'
import {ImageServer, imageServerSchema} from '../../design-request/image'
import {cleanJSON} from '@/core/utils/toolbox'
import {z} from 'zod'

type ListProps = BaseEndpointProps & {
  bookId: string
}

type AddToBookProps = BaseEndpointProps & {
  bookId: string
  image: ImageServer
}

type RetrieveProps = BaseEndpointProps & {
  bookId: string
  imageId: string
}

type UpdateProps = BaseUpdateEndpointProps<Partial<ImageServer>> & {
  bookId: string
  imageId: string
}

type DeleteProps = BaseEndpointProps & {
  bookId: string
  imageId: string
}

export class ImagesEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {}

  async list({bookId, qs}: ListProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/images/book/${bookId}`,
      qs
    })
    return z.array(imageServerSchema).parse(res)
  }

  async addToBook({bookId, image, qs}: AddToBookProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/images/book/${bookId}`,
      options: {
        method: 'POST',
        body: cleanJSON(image)
      },
      qs
    })
    return imageServerSchema.parse(res)
  }

  async retrieve({bookId, imageId, qs}: RetrieveProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/images/${imageId}/book/${bookId}/`,
      qs
    })
    return imageServerSchema.parse(res)
  }

  async update({bookId, imageId, payload, qs}: UpdateProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/images/${imageId}/book/${bookId}/`,
      options: {
        method: 'PUT',
        body: cleanJSON(payload)
      },
      qs
    })
    return imageServerSchema.parse(res)
  }

  async delete({bookId, imageId, qs}: DeleteProps) {
    await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/images/${imageId}/book/${bookId}/`,
      options: {
        method: 'DELETE'
      },
      qs
    })
  }
}
