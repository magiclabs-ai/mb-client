import {BaseEndpointProps, BaseUpdateEndpointProps, EngineAPI} from '..'
import {SpreadServer, spreadSchema} from '../../spread'
import {cleanJSON, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
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

  async list({bookId, qs}: ListProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/spreads/book/${bookId}`,
      qs
    })
    return z.array(spreadSchema).parse(snakeCaseObjectKeysToCamelCase(res))
  }

  async create({bookId, spread, qs}: CreateProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/spreads/book/${bookId}`,
      options: {
        method: 'POST',
        body: cleanJSON(spread)
      },
      qs
    })
    return spreadSchema.parse(snakeCaseObjectKeysToCamelCase(res))
  }

  async retrieve({bookId, spreadId, qs}: RetrieveProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/spreads/${spreadId}/book/${bookId}`,
      qs
    })
    return spreadSchema.parse(snakeCaseObjectKeysToCamelCase(res))
  }

  async update({bookId, spreadId, payload, qs}: UpdateProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/spreads/${spreadId}/book/${bookId}`,
      options: {
        method: 'PUT',
        body: cleanJSON(payload)
      },
      qs
    })
    return spreadSchema.parse(snakeCaseObjectKeysToCamelCase(res))
  }

  async delete({bookId, spreadId, qs}: DeleteProps) {
    await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/spreads/${spreadId}/book/${bookId}`,
      options: {
        method: 'DELETE'
      },
      qs
    })
  }
}
