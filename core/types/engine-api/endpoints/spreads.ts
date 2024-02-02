import {BaseEndpointProps, BaseUpdateEndpointProps, EngineAPI} from '..'
import {SpreadServer, spreadSchema} from '../../spread'
import {cleanJSON, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {handleAsyncFunction} from '@/core/utils/toolbox'
import {z} from 'zod'

type ListProps = BaseEndpointProps & {
  bookId: string
}

type CreateProps = BaseEndpointProps & {
  bookId: string
  spread: Partial<SpreadServer>
}

type RetrieveProps = BaseEndpointProps & {
  bookId: string
  spreadId: string
}

type UpdateProps = BaseUpdateEndpointProps<Partial<SpreadServer>> & {
  bookId: string
  spreadId: string
}

type DeleteProps = BaseEndpointProps & {
  bookId: string
  spreadId: string
}

export class SpreadsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {}

  list({bookId, qs}: ListProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/spreads/book/${bookId}`,
        qs
      })
      return z.array(spreadSchema).parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  create({bookId, spread, qs}: CreateProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/spreads/book/${bookId}`,
        options: {
          method: 'POST',
          body: cleanJSON(spread)
        },
        qs
      })
      return spreadSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  retrieve({bookId, spreadId, qs}: RetrieveProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/spreads/${spreadId}/book/${bookId}`,
        qs
      })
      return spreadSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  update({bookId, spreadId, payload, qs}: UpdateProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/spreads/${spreadId}/book/${bookId}`,
        options: {
          method: 'PUT',
          body: cleanJSON(payload)
        },
        qs
      })
      return spreadSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  delete({bookId, spreadId, qs}: DeleteProps) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/spreads/${spreadId}/book/${bookId}`,
        options: {
          method: 'DELETE'
        },
        qs
      })
    })
  }
}
