import {APIHandler, get, post, put} from './axios'
import {Book, BookPropsSchema} from '@/models/book'
import {apiHost} from '../../config'
import {bookCreationRequestSchema} from '@/models/galleon'

export async function createBook(apiKey: string, payload?: Book) {
  return APIHandler(async () => {
    const res = (await post({url: `${apiHost}/api/v1/books`, apiKey, payload})).data
    BookPropsSchema.safeParse(res)
    return new Book(res)
  })
}

export async function retrieveBook(apiKey: string, bookId: string) {
  return APIHandler(async () => {
    const res = (await get({url: `${apiHost}/api/v1/books/${bookId}`, apiKey})).data
    BookPropsSchema.safeParse(res)
    return new Book(res)
  }
  )
}

export async function updateBook(apiKey: string, payload: Partial<Book>) {
  return APIHandler(async () => {
    const res = (await put({url: `${apiHost}/api/v1/books/${payload.id}`, apiKey, payload})).data
    BookPropsSchema.safeParse(res)
    return new Book(res)
  })
}

export async function retrieveGalleon(apiKey: string, bookId: string) {
  return APIHandler(async () => {
    const res = (await get({url: `${apiHost}/api/v1/books/${bookId}/format/galleon`, apiKey})).data
    return bookCreationRequestSchema.parse(res)
  })
}
