import {Book, BookPropsSchema} from './book'
import {BookSize, ImageFilteringLevel} from './design-request'
import {Fetcher} from './fetcher'
import {ImageServer, imageServerSchema} from './design-request/image'
import {bookCreationRequestSchema} from './galleon'
import {designOptionsSchema} from './design-request/design-options'
import {handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '../utils/toolbox'

export class EngineAPI {
  baseUrl: URL
  apiKey: string
  fetcher: Fetcher

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = new URL(baseUrl)
    this.apiKey = apiKey
    const options = {
      headers: {
        'Authorization': `API-Key ${this.apiKey}`
      }
    }
    this.fetcher = new Fetcher(baseUrl, options)
  }

  // BOOK
  createBook(payload?: Book) {
    return handleAsyncFunction(async () => {
      const res = await this.fetcher.call({
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

  retrieveBook(bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.fetcher.call({path: `/v1/books/${bookId}`})
      BookPropsSchema.safeParse(res)
      return new Book(res)
    })
  }
  
  updateBook(payload: Partial<Book>) {
    return handleAsyncFunction(async () => {
      const res = await this.fetcher.call({
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
  
  retrieveGalleon(bookId: string) {
    return handleAsyncFunction(async () => {
      const res = await this.fetcher.call({
        path: `/v1/books/${bookId}/format/galleon`
      })
      return bookCreationRequestSchema.parse(res)
    })
  }

  // DESIGN OPTIONS
  getDesignOptions(
    bookSize: BookSize,
    imageCount: number,
    imageFilteringLevel: ImageFilteringLevel
  ) {
    return handleAsyncFunction(async () => {
      const res = await this.fetcher.call({
        // eslint-disable-next-line max-len
        path: `/v1/designoptions/booksize/${bookSize}/imagecount/${imageCount}/imagefilteringlevel/${imageFilteringLevel}`
      })
      const designOptions = snakeCaseObjectKeysToCamelCase(res)
      return designOptionsSchema.parse(designOptions)
    })
  }

  // IMAGES
  addImageInBook(bookId: string, payload: ImageServer) {
    return handleAsyncFunction(async () => {
      const res = await this.fetcher.call({
        path: `/v1/images/book/${bookId}`,
        options: {
          method: 'POST',
          body: JSON.stringify(payload)
        }
      })
      return imageServerSchema.parse(res)
    })
  }
  
  
}
