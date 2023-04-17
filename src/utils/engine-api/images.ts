import {DesignRequestImage} from '../../models/design-request/image'
import {apiHost} from '../../config'
import {get, post} from './axios'

export async function addImageInBook(bookId: string, payload: DesignRequestImage) {
  return await post({url: `${apiHost}/api/v1/images/book/${bookId}`, payload})
}

export async function listImagesInBook(bookId: string) {
  return await get({url: `${apiHost}/api/v1/images/book/${bookId}`})
}
