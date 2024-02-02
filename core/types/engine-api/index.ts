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

export type BaseEndpointProps = {
  qs?: string
}

export type BaseUpdateEndpointProps<T> = BaseEndpointProps & {
  payload: T
}

export class EngineAPI {
  fetcher: Fetcher

  constructor(baseUrl: string, apiKey: string) {
    const options = {
      headers: {
        Authorization: `API-Key ${apiKey}`
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
