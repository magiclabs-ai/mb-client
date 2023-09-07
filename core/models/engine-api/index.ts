import {BooksEndpoints} from './endpoints/books'
import {DesignOptionsEndpoints} from './endpoints/design-options'
import {EmbellishmentsEndpoints} from './endpoints/embellishments'
import {EventsEndpoints} from './endpoints/events'
import {Fetcher} from '../fetcher'
import {FontsEndpoints} from './endpoints/fonts'
import {ImagesEndpoints} from './endpoints/images'
import {SpreadsEndpoints} from './endpoints/spreads'
import {StoryboardItemsEndpoints} from './endpoints/storyboard-items'
import {StylesEndpoints} from './endpoints/styles'
import {z} from 'zod'

export function paginatedResponseServerSchema(arrayOf: z.ZodSchema) {
  return z.object({
    // next: z.string().nullable(),
    count: z.number().optional(),
    next_cursor: z.string().nullable(),
    previous: z.string().optional(),
    // previous_cursor: z.string().optional(),
    results: z.array(arrayOf)
  })
}
// export type PaginatedResponseServerSchema = z.infer<typeof paginatedResponseServerSchema>

export function paginatedResponseSchema(arrayOf: z.ZodSchema) {
  return z.object({
    // next: z.string().nullable(),
    count: z.number().optional(),
    nextCursor: z.string().nullable(),
    previous: z.string().optional(),
    // previousCursor: z.string().optional(),
    results: z.array(arrayOf)
  })
}

export type baseEndpointProps = {
  returnServerSchemas?: boolean
  qs?: string
}

export type baseUpdateEndpointProps<T> = baseEndpointProps & {
  payload: T
}

export class EngineAPI {
  fetcher: Fetcher

  constructor(baseUrl: string, apiKey: string) {
    const options = {
      headers: {
        'Authorization': `API-Key ${apiKey}`
      }
    }
    this.fetcher = new Fetcher(baseUrl, options)
  }

  readonly books = new BooksEndpoints(this)
  readonly designOptions = new DesignOptionsEndpoints(this)
  readonly events = new EventsEndpoints(this)
  readonly embellishments = new EmbellishmentsEndpoints(this)
  readonly fonts = new FontsEndpoints(this)
  readonly images = new ImagesEndpoints(this)
  readonly spreads = new SpreadsEndpoints(this)
  readonly storyboardItems = new StoryboardItemsEndpoints(this)
  readonly styles = new StylesEndpoints(this)
}
