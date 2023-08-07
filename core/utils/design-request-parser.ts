
import {DesignRequest} from '../models/design-request'
import {camelCaseObjectKeysToSnakeCase} from './toolbox'
import {styles} from '../data/design-request'
import { Book, BookDesignRequestProps } from '../models/book'

export function designRequestToBook(designRequest: DesignRequest) {
  const dr = {...designRequest}
  // delete dr.client
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
