import {APIHandler, get} from './axios'
import {BookSize} from '@/models/design-request'
import {MagicBookClient} from '@/models/client'
import {designOptionsSchema} from '@/models/design-request/design-options'
import {snakeCaseObjectKeysToCamelCase} from '../toolbox'

export async function getDesignOptions({apiKey, apiHost}: MagicBookClient, bookSize: BookSize, imageCount: number) {
  return APIHandler(async () => {
    const res = await get(
      {url: `${apiHost}/v1/designoptions/booksize/${bookSize}/imagecount/${imageCount}`, apiKey}
    )
    const designOptions = snakeCaseObjectKeysToCamelCase(res.data)
    return designOptionsSchema.parse(designOptions)
  })
}
