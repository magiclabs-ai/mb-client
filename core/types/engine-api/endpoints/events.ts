import {BaseEndpointProps} from '../index'
import {EngineAPI} from '..'
import {EventContext, eventSchema} from '../../event'
import {cleanJSON, handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {paginatedResponseSchema} from '../pagination'

type ListBookEventsProps = BaseEndpointProps & {
  bookId: string
}

const eventPaginatedSchema = paginatedResponseSchema(eventSchema)

type CreateBookEventProps = BaseEndpointProps & {
  bookId: string
  name: string
  data?: EventContext
}

type DeleteBookEventProps = BaseEndpointProps & {
  bookId: string
  name: string
}

export class EventsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  listBookEvents({bookId, qs}: ListBookEventsProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/events/book/${bookId}`,
        qs
      })
      return eventPaginatedSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  createBookEvent({name, data, bookId, qs}: CreateBookEventProps) {
    return handleAsyncFunction(async () => {
      const body: EventContext = {
        name
      }
      data && (body['context'] = data)
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/events/book/${bookId}`,
        options: {
          method: 'POST',
          body: cleanJSON(body)
        },
        qs
      })
      return eventSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  deleteBookEvent({name, bookId, qs}: DeleteBookEventProps) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/events/book/${bookId}/name/${name}`,
        options: {
          method: 'DELETE'
        },
        qs
      })
    })
  }

}
