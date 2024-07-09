import {BaseEndpointProps, BaseUpdateEndpointProps, EngineAPI} from '..'
import {camelCaseObjectKeysToSnakeCase, cleanJSON, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {embellishmentListSchemas, embellishmentSchemas, embellishmentUpdateSchemas} from '../../embellishment'
import {paginatedResponseSchema} from '../pagination'
import {z} from 'zod'

export type EmbellishmentListForStyleProps = BaseEndpointProps & {
  styleSlug: string
}

export type EmbellishmentForStyleProps = EmbellishmentListForStyleProps & {
  embellishmentId: string
}

export type EmbellishmentUpdateType = z.infer<typeof embellishmentUpdateSchemas>
export type UpdateEmbellishmentProps<T> = BaseUpdateEndpointProps<Partial<T>> & EmbellishmentForStyleProps
export type BatchUpdateEmbellishmentsProps = BaseUpdateEndpointProps<Array<Partial<EmbellishmentUpdateType>>>

const embellishmentPaginatedSchema = paginatedResponseSchema(embellishmentListSchemas)

export type EmbellishmentListReturnType = z.infer<typeof embellishmentPaginatedSchema>

export type EmbellishmentReturnType = z.infer<typeof embellishmentSchemas>

export class EmbellishmentsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {}

  async list({styleSlug, qs}: EmbellishmentListForStyleProps): Promise<EmbellishmentListReturnType> {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/embellishments/style/${styleSlug}`,
      qs
    })
    return embellishmentPaginatedSchema.parse(snakeCaseObjectKeysToCamelCase(res))
  }

  async retrieve<T extends EmbellishmentForStyleProps>({
    styleSlug,
    embellishmentId,
    qs
  }: T): Promise<EmbellishmentReturnType> {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/embellishments/${embellishmentId}/style/${styleSlug}`,
      qs
    })
    return embellishmentSchemas.parse(snakeCaseObjectKeysToCamelCase(res))
  }

  async update<T extends UpdateEmbellishmentProps<z.infer<typeof embellishmentUpdateSchemas>>>({
    styleSlug,
    embellishmentId,
    payload
  }: T): Promise<EmbellishmentReturnType> {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      path: `/v1/embellishments/${embellishmentId}/style/${styleSlug}`,
      options: {
        method: 'PUT',
        body: cleanJSON(camelCaseObjectKeysToSnakeCase({...payload}))
      }
    })
    return embellishmentSchemas.parse(snakeCaseObjectKeysToCamelCase(res))
  }
}
