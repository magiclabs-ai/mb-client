import {
  EngineAPI,
  BaseEndpointProps,
  BaseUpdateEndpointProps,
} from '..'
import {Style, styleBaseSchema, styleSchema} from '../../style'
import {cleanJSON, handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {z} from 'zod'
import { paginatedResponseSchema } from '../pagination'

const stylePaginatedSchema = paginatedResponseSchema(styleBaseSchema)

type StyleListReturnType = z.infer<typeof stylePaginatedSchema>

type UpdateProps = BaseUpdateEndpointProps<Style> & {
  styleSlug: string
}

type RetrieveProps = BaseEndpointProps & {
  styleSlug: string
}

type StyleReturnType = z.infer<typeof styleSchema>
  
export class StylesEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  list<T extends BaseEndpointProps>(props?: T): Promise<StyleListReturnType | undefined> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call({
        path: `/v1/styles`,
        qs: props?.qs
      })) as Record<string, unknown>
      return stylePaginatedSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  retrieve<T extends RetrieveProps>({styleSlug, qs}: T): Promise<StyleReturnType | undefined> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call({
        path: `/v1/styles/${styleSlug}`,
        qs
      })) as Record<string, unknown>
      return styleSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  update<T extends UpdateProps>({styleSlug, payload, qs}: T): Promise<StyleReturnType | undefined> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call({
        path: `/v1/styles/${styleSlug}`,
        qs,
        options: {
          method: 'PUT',
          body: cleanJSON(payload)
        }
      })) as Record<string, unknown>
      return styleSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

}
