import {Book, BookReport, bookPropsSchema} from '../../book'
import {EngineAPI} from '..'
import {bookCreationRequestSchema} from '../../galleon'
import {cleanJSON} from '@/core/utils/toolbox'
import {handleAsyncFunction} from '@/core/utils/toolbox'

export class BooksEndpoints {  
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  create(book: Partial<Book>) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: '/v1/books',
        options: {
          method: 'POST',
          body: cleanJSON(book)
        }
      })
      const bookProps = bookPropsSchema.parse(res)
      return new Book(bookProps)
    })
  }

  retrieve(bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({path: `/v1/books/${bookId}`})
      const bookProps = bookPropsSchema.parse(res)
      return new Book(bookProps)
    })
  }

  update(bookId: string, book: Partial<Book>) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}`,
        options: {
          method: 'PUT',
          body: cleanJSON(book)
        }
      })
      const bookProps = bookPropsSchema.parse(res)
      return new Book(bookProps)
    })
  }

  design(bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}/design`,
        options: {method: 'POST'}
      })
      bookPropsSchema.safeParse(res)
      return new Book(res)
    })
  }

  cancel(bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}/cancel`,
        options: {method: 'POST'}
      })
      const bookProps = bookPropsSchema.parse(res)
      return new Book(bookProps)
    })
  }

  report(bookId: string, report: BookReport) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}/report`,
        options: {
          method: 'POST',
          body: cleanJSON(report)
        }
      })
    })
  }

  delete(bookId: string) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}`,
        options: {method: 'DELETE'}
      })
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
