import {EngineAPI, baseEndpointProps} from '..'
import {Spread, spreadSchema, spreadServerSchema} from '../../spread'
import {cleanJSON, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {handleAsyncFunction} from '@/core/utils/toolbox'
import {z} from 'zod'

type listProps = baseEndpointProps & {
  bookId: string
}

type createProps = baseEndpointProps & {
  bookId: string
  spread: Spread
}

type retrieveProps = baseEndpointProps & {
  bookId: string
  spreadId: string
}

type updateProps = baseEndpointProps & {
  bookId: string
  spreadId: string
  spread: Spread
}

export class SpreadsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  list({bookId, returnServerSchemas}: listProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/spreads/book/${bookId}`
      })
      if (res) {
        return returnServerSchemas
          ? z.array(spreadServerSchema).parse(res)
          : z.array(spreadSchema).parse(snakeCaseObjectKeysToCamelCase(res))
      }
      return res
    })
  }
  
  create({bookId, spread, returnServerSchemas}: createProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/spreads/book/${bookId}`,
        options: {
          method: 'POST',
          body: cleanJSON(spread)
        }
      })
      if (res) {
        return returnServerSchemas
          ? z.array(spreadServerSchema).parse(res)
          : z.array(spreadSchema).parse(snakeCaseObjectKeysToCamelCase(res))
      }
      return res
    })
  }

  retrieve({bookId, spreadId, returnServerSchemas}: retrieveProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/spreads/${spreadId}/book/${bookId}`
      })
      if (res) {
        return returnServerSchemas
          ? z.array(spreadServerSchema).parse(res)
          : z.array(spreadSchema).parse(snakeCaseObjectKeysToCamelCase(res))
      }
      return res
    })
  }

  update({bookId, spreadId, spread, returnServerSchemas}: updateProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/spreads/${spreadId}/book/${bookId}`,
        options: {
          method: 'PUT',
          body: cleanJSON(spread)
        }
      })
      if (res) {
        return returnServerSchemas
          ? z.array(spreadServerSchema).parse(res)
          : z.array(spreadSchema).parse(snakeCaseObjectKeysToCamelCase(res))
      }
      return res
    })
  }

  delete(spreadId: string, bookId: string) {
    return handleAsyncFunction(async () => {
      await this.engineAPI.fetcher.call({
        path: `/v1/spreads/${spreadId}/book/${bookId}`,
        options: {
          method: 'DELETE'
        }
      })
    })
  }
}
