import {APIHandler, get, post, put} from './axios'
import {Book, BookPropsSchema} from '@/models/book'
import {BookCreationRequest, bookCreationRequestSchema} from '@/models/galleon'
import {apiHost} from '../../config'

export async function createBook(payload?: Book) {
  return APIHandler(async () => {
    const res = (await post({url: `${apiHost}/api/v1/books`, payload})).data
    BookPropsSchema.safeParse(res)
    return new Book(res)
  })
}

export async function retrieveBook(bookId: string) {
  return APIHandler(async () => {
    const res = (await get({url: `${apiHost}/api/v1/books/${bookId}`})).data
    BookPropsSchema.safeParse(res)
    return new Book(res)
  }
  )
}

export async function updateBook(payload: Partial<Book>) {
  return APIHandler(async () => {
    const res = (await put({url: `${apiHost}/api/v1/books/${payload.id}`, payload})).data
    BookPropsSchema.safeParse(res)
    return new Book(res)
  })
}

export async function retrieveGalleon(bookId: string) {
  return APIHandler(async () => {
    const res = (await get({url: `${apiHost}/api/v1/books/${bookId}/format/galleon`})).data
    bookCreationRequestSchema.parse(res)
    return res as BookCreationRequest
  })
}
