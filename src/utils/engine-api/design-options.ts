import {APIHandler, get} from './axios'
import {BookSize} from '@/models/design-request'
import {DesignOptions} from '@/models/design-request/design-options'
import {apiHost} from '../../config'
import {snakeCaseObjectKeysToCamelCase} from '../toolbox'

export async function getDesignOptions(bookSize: BookSize, imageCount: number) {
  return APIHandler(async () =>{
    const res = await get({url: `${apiHost}/api/v1/designoptions/booksize/${bookSize}/imagecount/${imageCount}`})
    return snakeCaseObjectKeysToCamelCase(res.data) as DesignOptions
  })
}
