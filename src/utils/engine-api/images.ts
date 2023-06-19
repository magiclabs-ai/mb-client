import {APIHandler, post} from './axios'
import {ImageServer, imageServerSchema} from '../../models/design-request/image'
import {MagicBookClient} from '@/models/client'

export async function addImageInBook({apiKey, apiHost}: MagicBookClient, bookId: string, payload: ImageServer) {
  return APIHandler(async () => {
    const res = (await post({url: `${apiHost}/v1/images/book/${bookId}`, apiKey, payload})).data
    return imageServerSchema.parse(res)
  })
}
