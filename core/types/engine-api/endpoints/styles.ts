import {
  EngineAPI,
  baseEndpointProps,
  baseUpdateEndpointProps,
  paginatedResponseSchema,
  paginatedResponseServerSchema
} from '..'
import {Style, styleSchema, styleServerSchema} from '../../style'
import {cleanJSON, handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {z} from 'zod'

const stylePaginatedServerSchema = paginatedResponseServerSchema(styleServerSchema.partial())
const stylePaginatedSchema = paginatedResponseSchema(styleSchema.partial())

type StyleListReturnType<T extends baseEndpointProps> = T['returnServerSchemas'] extends true
  ? z.infer<typeof stylePaginatedServerSchema>
  : z.infer<typeof stylePaginatedSchema>

type UpdateProps = baseUpdateEndpointProps<Style> & {
  styleSlug: string
}

type RetrieveProps = baseEndpointProps & {
  styleSlug: string
}

type StyleReturnType<T extends baseEndpointProps> = T['returnServerSchemas'] extends true
  ? z.infer<typeof styleServerSchema>
  : z.infer<typeof styleSchema>
  
export class StylesEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  list<T extends baseEndpointProps>(props?: T): Promise<StyleListReturnType<T>> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/styles${props?.qs ? `?${props.qs}` : ''}`
      })) as Record<string, unknown>
      return (props?.returnServerSchemas
        ? stylePaginatedServerSchema.parse(res)
        : stylePaginatedSchema.parse(snakeCaseObjectKeysToCamelCase(res))
      ) as StyleListReturnType<T>
    })
  }

  update<T extends UpdateProps>(props: T): Promise<StyleReturnType<T>> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/styles/${props.styleSlug}${props?.qs ? `?${props.qs}` : ''}`,
        options: {
          method: 'PUT',
          body: cleanJSON(props.payload)
        }
      })) as Record<string, unknown>
      return (props?.returnServerSchemas
        ? styleServerSchema.parse(res)
        : styleSchema.parse(snakeCaseObjectKeysToCamelCase(res))
      ) as StyleReturnType<T>
    })
  }

  retrieve<T extends RetrieveProps>(props: T): Promise<StyleReturnType<T>> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/styles/${props.styleSlug}${props?.qs ? `?${props.qs}` : ''}`
      })) as Record<string, unknown>
      return (props?.returnServerSchemas
        ? styleServerSchema.parse(res)
        : styleSchema.parse(snakeCaseObjectKeysToCamelCase(res))
      ) as StyleReturnType<T>
    })
  }
}
