import {BookSize, ImageFilteringLevel} from '../../design-request'
import {EngineAPI, baseEndpointProps} from '..'
import {designOptionsSchema, designOptionsServerSchema} from '../../design-request/design-options'
import {handleAsyncFunction, serverOrClientSchema} from '@/core/utils/toolbox'
import {z} from 'zod'

type RetrieveProps = baseEndpointProps & {
  bookSize: BookSize,
  imageCount: number,
  imageFilteringLevel: ImageFilteringLevel
}

type DesignOptionsReturnType<T extends baseEndpointProps> = T['returnServerSchemas'] extends true
  ? z.infer<typeof designOptionsServerSchema>
  : z.infer<typeof designOptionsSchema>

export class DesignOptionsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  retrieve(props: RetrieveProps) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        // eslint-disable-next-line max-len
        path: `/v1/designoptions/booksize/${props.bookSize}/imagecount/${props.imageCount}/imagefilteringlevel/${props.imageFilteringLevel}`
      }) as Record<string, unknown>
      return serverOrClientSchema(
        res,
        designOptionsSchema,
        designOptionsServerSchema,
        props?.returnServerSchemas
      ) as DesignOptionsReturnType<RetrieveProps>
    })
  }

}
