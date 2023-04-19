import {APIHandler, post} from './axios'
import {ImageServer} from '../../models/design-request/image'
import {apiHost} from '../../config'

export async function addImageInBook(bookId: string, payload: ImageServer) {
  return APIHandler(async () =>
    await post({url: `${apiHost}/api/v1/images/book/${bookId}`, payload})
  )
}
