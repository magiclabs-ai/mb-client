import {APIHandler, get, post, put} from './axios'
import {Book, BookProps} from '@/models/book'
import {apiHost} from '../../config'

export async function createBook(payload?: Book) {
  return APIHandler(async () => 
    new Book((await post({url: `${apiHost}/api/v1/books`, payload})).data as BookProps)
  )
}

export async function retrieveBook(id: string) {
  return APIHandler(async () => 
    new Book((await get({url: `${apiHost}/api/v1/books/${id}`})).data as BookProps)
  )
}

export async function updateBook(payload: Book) {
  return APIHandler(async () => 
    new Book((await put({url: `${apiHost}/api/v1/books/${payload.id}`, payload})).data as BookProps)
  )
}
