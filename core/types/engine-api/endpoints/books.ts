import {BaseEndpointProps, BaseUpdateEndpointProps, EngineAPI} from '..'
import {Book, BookProps, BookReport, bookPropsSchema} from '../../book'
import {bookCreationRequestSchema} from '../../galleon'
import {cleanJSON} from '@/core/utils/toolbox'

type CreateProps = BaseEndpointProps & {
  book: Partial<Book>
}

type RetrieveProps = BaseEndpointProps & {
  bookId: string
}

type DeleteProps = RetrieveProps

type DesignProps = RetrieveProps

type CancelProps = RetrieveProps

type RetrieveGalleonProps = RetrieveProps

type UpdateProps = BaseUpdateEndpointProps<Partial<Book>> & {
  bookId: string
}

type ReportProps = RetrieveProps & {
  report: BookReport
}

export class BooksEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {}

  async create({book, qs}: CreateProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: '/v1/books',
      options: {
        method: 'POST',
        body: cleanJSON(book)
      },
      qs
    })
    return new Book(res as BookProps)
  }

  async retrieve({bookId, qs}: RetrieveProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/books/${bookId}`,
      qs
    })
    const bookProps = bookPropsSchema.parse(res)
    return new Book(bookProps)
  }

  async update({bookId, payload, qs}: UpdateProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/books/${bookId}`,
      options: {
        method: 'PUT',
        body: cleanJSON(payload)
      },
      qs
    })
    const bookProps = bookPropsSchema.parse(res)
    return new Book(bookProps)
  }

  async delete({bookId, qs}: DeleteProps) {
    await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/books/${bookId}`,
      options: {method: 'DELETE'},
      qs
    })
  }

  async design({bookId, qs}: DesignProps) {
    console.log(`/v1/books/${bookId}/design`)
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/books/${bookId}/design`,
      options: {method: 'POST'},
      qs
    })
    const bookProps = bookPropsSchema.parse(res)
    return new Book(bookProps)
  }

  async cancel({bookId, qs}: CancelProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/books/${bookId}/cancel`,
      options: {method: 'POST'},
      qs
    })
    const bookProps = bookPropsSchema.parse(res)
    return new Book(bookProps)
  }

  async retrieveGalleon({bookId, qs}: RetrieveGalleonProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/books/${bookId}/format/galleon`,
      qs
    })
    return bookCreationRequestSchema.parse(res)
  }

  async report({bookId, report, qs}: ReportProps) {
    return await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/books/${bookId}/report`,
      options: {
        method: 'POST',
        body: cleanJSON(report)
      },
      qs
    })
  }
}
