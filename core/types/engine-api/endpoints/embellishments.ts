import {
  EngineAPI,
  baseEndpointProps,
  baseUpdateEndpointProps,
  paginatedResponseSchema,
  paginatedResponseServerSchema
} from '..'
import {cleanJSON, serverOrClientSchema} from '@/core/utils/toolbox'
import {
  embellishmentListSchemas,
  embellishmentListServerSchemas,
  embellishmentSchemas,
  embellishmentServerSchemas,
  embellishmentUpdateServerSchemas
} from '../../embellishment'
import {handleAsyncFunction} from '@/core/utils/toolbox'
import {z} from 'zod'

type EmbellishmentListForStyleProps = baseEndpointProps & {
  styleSlug: string
}

type EmbellishmentForStyleProps = EmbellishmentListForStyleProps & {
  embellishmentSlug: string
}

type UpdatembellishmentProps<T> = baseUpdateEndpointProps<T> & EmbellishmentForStyleProps 

const embellishmentPaginatedServerSchema = paginatedResponseServerSchema(embellishmentListServerSchemas)
const embellishmentPaginatedSchema = paginatedResponseSchema(embellishmentListSchemas)

type EmbellishmentListReturnType<T extends baseEndpointProps> = T['returnServerSchemas'] extends true
  ? z.infer<typeof embellishmentPaginatedServerSchema>
  : z.infer<typeof embellishmentPaginatedSchema>

type EmbellishmentReturnType<T extends baseEndpointProps> = T['returnServerSchemas'] extends true
  ? z.infer<typeof embellishmentServerSchemas>
  : z.infer<typeof embellishmentSchemas>

export class EmbellishmentsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  lis223t<T extends EmbellishmentListForStyleProps>(props: T): Promise<EmbellishmentListReturnType<T>> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/embellishments/style/${props.styleSlug}${props?.qs ? `?${props.qs}` : ''}`
      })) as Record<string, unknown>
      return serverOrClientSchema(
        res,
        embellishmentPaginatedSchema,
        embellishmentPaginatedServerSchema,
        this.engineAPI.returnServerSchemas || props?.returnServerSchemas
      ) as EmbellishmentReturnType<T>
    })
  }

  retrieve<T extends EmbellishmentForStyleProps>(props: T): Promise<EmbellishmentReturnType<T>> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/embellishments/${props.embellishmentSlug}/style/${props.styleSlug}${props?.qs ? `?${props.qs}` : ''}`
      })) as Record<string, unknown>
      return serverOrClientSchema(
        res,
        embellishmentSchemas,
        embellishmentServerSchemas,
        props?.returnServerSchemas
      ) as EmbellishmentReturnType<T>
    })
  }

  update<T extends UpdatembellishmentProps<z.infer<typeof embellishmentUpdateServerSchemas>>>(props: T):
   Promise<EmbellishmentReturnType<T>> {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call<Promise <Record<string, unknown>>>({
        path: `/v1/embellishments/${props.embellishmentSlug}/style/${props.styleSlug}`,
        options: {
          method: 'PUT',
          body: cleanJSON(props.payload)
        }
      })) as Record<string, unknown>
      return serverOrClientSchema(
        res,
        embellishmentSchemas,
        embellishmentServerSchemas,
        props?.returnServerSchemas
      ) as EmbellishmentReturnType<T>
    })
  }

}
