import {APIHandler, get, post, put} from './axios'
import {Book, BookPropsSchema} from '@/models/book'
import {MagicBookClient} from '@/models/client'
import {bookCreationRequestSchema} from '@/models/galleon'

export async function createBook({apiHost, apiKey}: MagicBookClient, payload?: Book) {
  return APIHandler(async () => {
    const res = (await post({url: `${apiHost}/v1/books`, apiKey, payload})).data
    BookPropsSchema.safeParse(res)
    return new Book(res)
  })
}

export async function retrieveBook({apiHost, apiKey}: MagicBookClient, bookId: string) {
  return APIHandler(async () => {
    const res = (await get({url: `${apiHost}/v1/books/${bookId}`, apiKey})).data
    BookPropsSchema.safeParse(res)
    return new Book(res)
  }
  )
}

export async function updateBook({apiHost, apiKey}: MagicBookClient, payload: Partial<Book>) {
  return APIHandler(async () => {
    const res = (await put({url: `${apiHost}/v1/books/${payload.id}`, apiKey, payload})).data
    BookPropsSchema.safeParse(res)
    return new Book(res)
  })
}

export async function retrieveGalleon({apiHost, apiKey}: MagicBookClient, bookId: string) {
  return APIHandler(async () => {
    const res = (await get({url: `${apiHost}/v1/books/${bookId}/format/galleon`, apiKey})).data
    return bookCreationRequestSchema.parse(res)
  })
}
