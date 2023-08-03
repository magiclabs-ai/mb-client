import {Book, BookPropsSchema} from '@/models/book'
import {MagicBookClient} from '@/models/client'
import {bookCreationRequestSchema} from '@/models/galleon'
import {handleAsyncFunction} from '../toolbox'

export async function createBook({fetcher}: MagicBookClient, payload?: Book) {
  return handleAsyncFunction(async () => {
    const res = await fetcher.call({
      path: '/v1/books',
      options: {
        method: 'POST',
        body: JSON.stringify(payload)
      }
    })
    BookPropsSchema.safeParse(res)
    return new Book(res)
  })
}

export async function retrieveBook({fetcher}: MagicBookClient, bookId: string) {
  return handleAsyncFunction(async () => {
    const res = await fetcher.call({path: `/v1/books/${bookId}`})
    BookPropsSchema.safeParse(res)
    return new Book(res)
  })
}

export async function updateBook({fetcher}: MagicBookClient, payload: Partial<Book>) {
  return handleAsyncFunction(async () => {
    const res = await fetcher.call({
      path: `/v1/books/${payload.id}`,
      options: {
        method: 'PUT',
        body: JSON.stringify(payload)
      }
    })
    BookPropsSchema.safeParse(res)
    return new Book(res)
  })
}

export async function retrieveGalleon({fetcher}: MagicBookClient, bookId: string) {
  return handleAsyncFunction(async () => {
    const res = await fetcher.call({
      path: `/v1/books/${bookId}/format/galleon`
    })
    return bookCreationRequestSchema.parse(res)
  })
}
