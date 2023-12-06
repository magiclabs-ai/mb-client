import {
  EngineAPI,
  BaseEndpointProps
} from '..'
import {fontSchema} from '../../font'
import {handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {z} from 'zod'
import { paginatedResponseSchema } from '../pagination'

const fontPaginatedSchema = paginatedResponseSchema(fontSchema)

type FontListReturnType = z.infer<typeof fontPaginatedSchema>

export class FontsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  list<T extends BaseEndpointProps>(props?: T): Promise<FontListReturnType> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call({
        path: `/v1/fonts`,
        qs: props?.qs
      })) as Record<string, unknown>
      return fontPaginatedSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }
}
