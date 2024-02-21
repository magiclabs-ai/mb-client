import {BaseEndpointProps, BaseUpdateEndpointProps, EngineAPI} from '..'
import {Style, styleBaseSchema, styleSchema} from '../../style'
import {cleanJSON, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
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

  async list<T extends ListStylesProps>(props?: T): Promise<StyleListReturnType> {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: '/v1/styles',
      qs: props?.qs
    })
    return stylePaginatedSchema.parse(snakeCaseObjectKeysToCamelCase(res))
  }

  async retrieve<T extends RetrieveStyleProps>({styleSlug, qs}: T): Promise<StyleReturnType> {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/styles/${styleSlug}`,
      qs
    })
    return styleSchema.parse(snakeCaseObjectKeysToCamelCase(res))
  }

  async update<T extends UpdateStyleProps>({styleSlug, payload, qs}: T): Promise<StyleReturnType> {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/styles/${styleSlug}`,
      qs,
      options: {
        method: 'PUT',
        body: cleanJSON(payload)
      }
    })
    return styleSchema.parse(snakeCaseObjectKeysToCamelCase(res))
  }
}
