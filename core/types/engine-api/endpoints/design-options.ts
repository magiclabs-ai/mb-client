import {BookSize, ImageFilteringLevel} from '../../design-request'
import {EngineAPI, BaseEndpointProps} from '..'
import {designOptionsSchema} from '../../design-request/design-options'
import {handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'

type RetrieveProps = BaseEndpointProps & {
  bookSize: BookSize,
  imageCount: number,
  imageFilteringLevel: ImageFilteringLevel
}
export class DesignOptionsEndpoints {
  constructor(private readonly engineAPI: EngineAPI) {
  }

  retrieve(props: RetrieveProps) {
    return handleAsyncFunction(async () => {
      const res = (await this.engineAPI.fetcher.call({
        // eslint-disable-next-line max-len
        path: `/v1/designoptions/booksize/${props.bookSize}/imagecount/${props.imageCount}/imagefilteringlevel/${props.imageFilteringLevel}`,
        qs: props.qs
      })) as Record<string, unknown>
      return designOptionsSchema.parse(snakeCaseObjectKeysToCamelCase(res))
    })
  }

}
