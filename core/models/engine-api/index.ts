import {BooksEndpoints} from './endpoints/books'
import {DesignOptionsEndpoints} from './endpoints/design-options'
import {EventsEndpoints} from './endpoints/events'
import {EmbellishmentsEndpoints} from './endpoints/embellishments'
import {Fetcher} from '../fetcher'
import {ImagesEndpoints} from './endpoints/images'
import {SpreadsEndpoints} from './endpoints/spreads'
import {StoryboardItemsEndpoints} from './endpoints/storyboard-items'
import {z} from 'zod'

export function paginatedResponseSchema(arrayOf: z.ZodSchema) {
  return z.object({
    count: z.number(),
    next_cursor: z.string().nullable(),
    previous_cursor: z.string().optional(),
    results: z.array(arrayOf)
  })
}

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

  readonly books = new BooksEndpoints(this)
  readonly designOptions = new DesignOptionsEndpoints(this)
  readonly events = new EventsEndpoints(this)
  readonly images = new ImagesEndpoints(this)
  readonly storyboardItems = new StoryboardItemsEndpoints(this)
  readonly spreads = new SpreadsEndpoints(this)
  readonly embellishments = new EmbellishmentsEndpoints(this)
}
