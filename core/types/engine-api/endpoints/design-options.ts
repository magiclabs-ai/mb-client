import {BaseEndpointProps, EngineAPI} from '..'
import {BookSize, ImageFilteringLevel} from '../../design-request'
import {designOptionsSchema} from '../../design-request/design-options'
import {snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'

type RetrieveProps = BaseEndpointProps & {
  bookSize: BookSize
  imageCount: number
  imageFilteringLevel: ImageFilteringLevel
}
export class DesignOptionsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {}

  async retrieve(props: RetrieveProps) {
    const res = await this.engineAPI.fetcher.call<Record<string, unknown>>({
      // eslint-disable-next-line max-len
      path: `/v1/designoptions/booksize/${props.bookSize}/imagecount/${props.imageCount}/imagefilteringlevel/${props.imageFilteringLevel}`,
      qs: props.qs
    })
    return designOptionsSchema.parse(snakeCaseObjectKeysToCamelCase(res))
  }
}
