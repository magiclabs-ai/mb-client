
import {Book, BookDesignRequestProps} from '../models/book'
import {DesignRequest} from '../models/design-request'
import {camelCaseObjectKeysToSnakeCase} from './toolbox'
import {styles} from '../data/design-request'

export function designRequestToBook(designRequest: DesignRequest) {
  const dr = {...designRequest}
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete dr.client
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete dr.images.client
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete dr.webSocket
  const styleSlug = styles[designRequest.style].slug
  const snakeCasedDesignRequest = 
    camelCaseObjectKeysToSnakeCase(JSON.parse(JSON.stringify(dr)) as Record<string, unknown>) as
     BookDesignRequestProps
  snakeCasedDesignRequest.style = styleSlug
  return new Book({
    id: designRequest.parentId,
    guid: designRequest.guid,
    title: designRequest.title,
    design_request: snakeCasedDesignRequest
  })
}
