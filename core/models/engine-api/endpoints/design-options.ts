import {BookSize, ImageFilteringLevel} from '../../design-request'
import {EngineAPI} from '..'
import {bindThisToFunctions, handleAsyncFunction} from '@/core/utils/toolbox'
import {designOptionsServerSchema} from '../../design-request/design-options'

export class DesignOptionsEndpoints {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly engineAPI: EngineAPI) {
    bindThisToFunctions(this)
  }

  retrieve(bookSize: BookSize, imageCount: number, imageFilteringLevel: ImageFilteringLevel, sku?: string) {
    return handleAsyncFunction(async () => {
      const res = await this.engineAPI.fetcher.call({
        // eslint-disable-next-line max-len
        path: `/v1/designoptions/booksize/${bookSize}/imagecount/${imageCount}/imagefilteringlevel/${imageFilteringLevel}${sku ? `?sku=${sku}` : ''}`
      })
      return designOptionsServerSchema.parse(res)
    })
  }
}
