import {Book, BookReport, bookPropsSchema} from '../../book'
import {EngineAPI, BaseEndpointProps, BaseUpdateEndpointProps} from '..'
import {bookCreationRequestSchema} from '../../galleon'
import {cleanJSON} from '@/core/utils/toolbox'
import {handleAsyncFunction} from '@/core/utils/toolbox'

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
  bookId: string,
}

type ReportProps = RetrieveProps &{
  report: BookReport
}

export class BooksEndpoints {  
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  create({book, qs}: CreateProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: '/v1/books',
        options: {
          method: 'POST',
          body: cleanJSON(book)
        },
        qs
      })
      const bookProps = bookPropsSchema.parse(res)
      return new Book(bookProps)
    })
  }

  retrieve({bookId, qs}: RetrieveProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}`,
        qs
      })
      const bookProps = bookPropsSchema.parse(res)
      return new Book(bookProps)
    })
  }

  update({bookId, payload, qs}: UpdateProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}`,
        options: {
          method: 'PUT',
          body: cleanJSON(payload)
        },
        qs
      })
      const bookProps = bookPropsSchema.parse(res)
      return new Book(bookProps)
    })
  }


  delete({bookId, qs}: DeleteProps) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}`,
        options: {method: 'DELETE'},
        qs
      })
    })
  }

  design({bookId, qs}: DesignProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}/design`,
        options: {method: 'POST'},
        qs
      })
      const bookProps = bookPropsSchema.parse(res)
      return new Book(bookProps)
    })
  }

  cancel({bookId, qs}: CancelProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}/cancel`,
        options: {method: 'POST'},
        qs
      })
      const bookProps = bookPropsSchema.parse(res)
      return new Book(bookProps)
    })
  }

  retrieveGalleon({bookId, qs}: RetrieveGalleonProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}/format/galleon`,
        qs
      })
      return bookCreationRequestSchema.parse(res)
    })
  }

  report({bookId, report, qs}: ReportProps) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/books/${bookId}/report`,
        options: {
          method: 'POST',
          body: cleanJSON(report)
        },
        qs
      })
    })
  }

}
