import {APIHandler, get, post, put} from './axios'
import {Book, BookProps} from '@/models/book'
import {BookCreationRequest} from '@/models/galleon'
import {apiHost} from '../../config'

export async function createBook(payload?: Book) {
  return APIHandler(async () => 
    new Book((await post({url: `${apiHost}/api/v1/books`, payload})).data as BookProps)
  )
}

export async function retrieveBook(bookId: string) {
  return APIHandler(async () => 
    new Book((await get({url: `${apiHost}/api/v1/books/${bookId}`})).data as BookProps)
  )
}

export async function updateBook(payload: Book) {
  return APIHandler(async () => 
    new Book((await put({url: `${apiHost}/api/v1/books/${payload.id}`, payload})).data as BookProps)
  )
}

export async function retrieveGalleon(bookId: string) {
  return APIHandler(async () => 
    (await get({url: `${apiHost}/api/v1/books/${bookId}/format/galleon`})).data as BookCreationRequest
  )
}
