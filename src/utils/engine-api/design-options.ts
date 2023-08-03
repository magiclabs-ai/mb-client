import {BookSize, ImageFilteringLevel} from '@/models/design-request'
import {MagicBookClient} from '@/models/client'
import {designOptionsSchema} from '@/models/design-request/design-options'
import {handleAsyncFunction, snakeCaseObjectKeysToCamelCase} from '../toolbox'

export async function getDesignOptions(
  {fetcher}: MagicBookClient,
  bookSize: BookSize,
  imageCount: number,
  imageFilteringLevel: ImageFilteringLevel
) {
  return handleAsyncFunction(async () => {
    const res = await fetcher.call({
      path: `/v1/designoptions/booksize/${bookSize}/imagecount/${imageCount}/imagefilteringlevel/${imageFilteringLevel}`
    })
    const designOptions = snakeCaseObjectKeysToCamelCase(res)
    return designOptionsSchema.parse(designOptions)
  })
}
