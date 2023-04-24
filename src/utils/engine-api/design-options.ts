import {APIHandler, get} from './axios'
import {BookSize} from '@/models/design-request'
import {apiHost} from '../../config'

export async function getDesignOptions(bookSize: BookSize, imageCount: number) {
  return APIHandler(async () =>
    await get({url: `${apiHost}/api/v1/designoptions/booksize/${bookSize}/imagecount/${imageCount}`})
  )
}
