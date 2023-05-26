import {APIHandler, post} from './axios'
import {ImageServer, imageServerSchema} from '../../models/design-request/image'
import {apiHost} from '../../config'

export async function addImageInBook(apiKey: string, bookId: string, payload: ImageServer) {
  return APIHandler(async () => {
    const res = (await post({url: `${apiHost}/api/v1/images/book/${bookId}`, apiKey, payload})).data
    imageServerSchema.parse(res)
    return res as ImageServer
  })
}
