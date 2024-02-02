import {BaseEndpointProps, BaseUpdateEndpointProps, EngineAPI} from '..'
import {Style, styleBaseSchema, styleSchema} from '../../style'
import {cleanJSON, handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {paginatedResponseSchema} from '../pagination'
import {z} from 'zod'

const stylePaginatedSchema = paginatedResponseSchema(styleBaseSchema)

type StyleListReturnType = z.infer<typeof stylePaginatedSchema>

export type ListStylesProps = BaseEndpointProps

export type UpdateStyleProps = BaseUpdateEndpointProps<Partial<Style>> & {
  styleSlug: string
}

export type RetrieveStyleProps = BaseEndpointProps & {
  styleSlug: string
}

export type StyleReturnType = z.infer<typeof styleSchema>

export class StylesEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {}

  list<T extends ListStylesProps>(props?: T): Promise<StyleListReturnType> {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: '/v1/styles',
        qs: props?.qs
      })
      return stylePaginatedSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  retrieve<T extends RetrieveStyleProps>({styleSlug, qs}: T): Promise<StyleReturnType> {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/styles/${styleSlug}`,
        qs
      })
      return styleSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  update<T extends UpdateStyleProps>({styleSlug, payload, qs}: T): Promise<StyleReturnType> {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/styles/${styleSlug}`,
        qs,
        options: {
          method: 'PUT',
          body: cleanJSON(payload)
        }
      })
      return styleSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }
}
