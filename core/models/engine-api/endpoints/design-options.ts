import {BookSize, ImageFilteringLevel} from '../../design-request'
import {EngineAPI} from '..'
import {designOptionsServerSchema} from '../../design-request/design-options'
import {handleAsyncFunction} from '@/core/utils/toolbox'

export class DesignOptionsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
  }

  retrieve(
    bookSize: BookSize,
    imageCount: number,
    imageFilteringLevel: ImageFilteringLevel
  ) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        // eslint-disable-next-line max-len
        path: `/v1/designoptions/booksize/${bookSize}/imagecount/${imageCount}/imagefilteringlevel/${imageFilteringLevel}`
      })
      return designOptionsServerSchema.parse(res)
    })
  }

}
