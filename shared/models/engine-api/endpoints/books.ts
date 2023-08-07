import {Book, BookPropsSchema} from '../../book'
import {EngineAPI} from '..'
import {bindThisToFunctions, handleAsyncFunction} from '@/shared/utils/toolbox'
import {bookCreationRequestSchema} from '../../galleon'

export class BooksEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
    bindThisToFunctions(this)
  }

  create(book?: Book) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: '/v1/books',
        options: {
          method: 'POST',
          body: JSON.stringify(book)
        }
      })
      BookPropsSchema.safeParse(res)
      return new Book(res)
    })
  }

  retrieve(bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({path: `/v1/books/${bookId}`})
      BookPropsSchema.safeParse(res)
      return new Book(res)
    })
  }

  update(bookId: string, book: Partial<Book>) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}`,
        options: {
          method: 'PUT',
          body: JSON.stringify(book)
        }
      })
      BookPropsSchema.safeParse(res)
      return new Book(res)
    })
  }

  cancel(bookId: string) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}/cancel`,
        options: {method: 'PUT'}
      })
    })
  }

  delete(bookId: string) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}`,
        options: {method: 'DELETE'}
      })
      return {}
    })
  }
  
  retrieveGalleon(bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}/format/galleon`
      })
      return bookCreationRequestSchema.parse(res)
    })
  }

}
