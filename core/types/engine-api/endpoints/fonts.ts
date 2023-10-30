import {
  EngineAPI,
  baseEndpointProps,
  paginatedResponseSchema,
  paginatedResponseServerSchema
} from '..'
import {fontListSchema, fontListServerSchema} from '../../font'
import {handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {z} from 'zod'

const fontPaginatedServerSchema = paginatedResponseServerSchema(fontListServerSchema)
const fontPaginatedSchema = paginatedResponseSchema(fontListSchema)

type FontListReturnType<T extends baseEndpointProps> = T['returnServerSchemas'] extends true
  ? z.infer<typeof fontPaginatedServerSchema>
  : z.infer<typeof fontPaginatedSchema>

export class FontsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  list<T extends baseEndpointProps>(props?: T): Promise<FontListReturnType<T>> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/fonts${props?.qs ? `?${props.qs}` : ''}`
      })) as Record<string, unknown>
      return (props?.returnServerSchemas
        ? fontPaginatedServerSchema.parse(res)
        : fontPaginatedSchema.parse(snakeCaseObjectKeysToCamelCase(res))
      ) as FontListReturnType<T>
    })
  }
}
