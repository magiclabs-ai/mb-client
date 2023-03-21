import {Image} from '../../models/image'
import {apiHost} from '../../config'
import {get, post} from './axios'

export async function createImagesForBook(bookId: string, payload: Array<Image>) {
  return await post({url: `${apiHost}/api/v1/images/book/${bookId}`, payload})
}

export async function listImagesForBook(bookId: string) {
  return await get({url: `${apiHost}/api/v1/images/book/${bookId}`})
}
