import {Book, BookReport, bookPropsSchema} from '../../book'
import {EngineAPI} from '..'
import {Format} from '@/core/data/design-request'
import {bindThisToFunctions, handleAsyncFunction} from '@/core/utils/toolbox'
import {bookCreationRequestSchema} from '../../galleon'
import {cleanJSON} from '@/core/utils/toolbox'

export class BooksEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
    bindThisToFunctions(this)
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
      bookPropsSchema.safeParse(res)
      return new Book(res)
    })
  }

  retrieve(bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({path: `/v1/books/${bookId}`})
      bookPropsSchema.safeParse(res)
      return new Book(res)
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
      bookPropsSchema.safeParse(res)
      return new Book(res)
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
      bookPropsSchema.safeParse(res)
      return new Book(res)
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

  format(bookId: string, format: Format) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}/format/${format}`
      })
      return bookCreationRequestSchema.parse(res)
    })
  }
}
