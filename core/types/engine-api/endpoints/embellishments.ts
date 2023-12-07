import {
  BaseEndpointProps,
  BaseUpdateEndpointProps,
  EngineAPI
} from '..'
import {
  camelCaseObjectKeysToSnakeCase,
  cleanJSON,
  handleAsyncFunction,
  snakeCaseObjectKeysToCamelCase
} from '@/core/utils/toolbox'
import {
  embellishmentListSchemas,
  embellishmentSchemas,
  embellishmentUpdateSchemas
} from '../../embellishment'
import {paginatedResponseSchema} from '../pagination'
import {z} from 'zod'

type EmbellishmentListForStyleProps = BaseEndpointProps & {
  styleSlug: string
}

type EmbellishmentForStyleProps = EmbellishmentListForStyleProps & {
  embellishmentId: string
}

type EmbellishmentUpdateType = z.infer<typeof embellishmentUpdateSchemas>
export type UpdateEmbellishmentProps<T> = BaseUpdateEndpointProps<Partial<T>> & EmbellishmentForStyleProps 
export type BatchUpdateEmbellishmentsProps = BaseUpdateEndpointProps<Array<Partial<EmbellishmentUpdateType>>> 

const embellishmentPaginatedSchema = paginatedResponseSchema(embellishmentListSchemas)

type EmbellishmentListReturnType = z.infer<typeof embellishmentPaginatedSchema>

type EmbellishmentReturnType = z.infer<typeof embellishmentSchemas>

export class EmbellishmentsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  list({styleSlug, qs}: EmbellishmentListForStyleProps): Promise<EmbellishmentListReturnType> {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/embellishments/style/${styleSlug}`,
        qs
      })
      return embellishmentPaginatedSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  retrieve<T extends EmbellishmentForStyleProps>
  ({styleSlug, embellishmentId, qs}: T): Promise<EmbellishmentReturnType> {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/embellishments/${embellishmentId}/style/${styleSlug}`,
        qs
      })
      return embellishmentSchemas.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

  update<T extends UpdateEmbellishmentProps<z.infer<typeof embellishmentUpdateSchemas>>>
  ({styleSlug, embellishmentId, payload}: T):
   Promise<EmbellishmentReturnType> {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
        path: `/v1/embellishments/${embellishmentId}/style/${styleSlug}`,
        options: {
          method: 'PUT',
          body: cleanJSON(camelCaseObjectKeysToSnakeCase({...payload}))
        }
      })
      return embellishmentSchemas.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }
}
