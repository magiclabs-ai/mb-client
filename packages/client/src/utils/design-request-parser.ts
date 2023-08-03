import {Book, BookDesignRequestProps} from '@/models/book'
import {DesignRequest} from '..'
import {camelCaseObjectKeysToSnakeCase} from './toolbox'
import {styles} from '@/data/design-request'

export function designRequestToBook(designRequest: DesignRequest) {
  const styleSlug = styles[designRequest.style].slug
  const snakeCasedDesignRequest = 
    camelCaseObjectKeysToSnakeCase(JSON.parse(JSON.stringify(designRequest)) as Record<string, unknown>) as
     BookDesignRequestProps
  snakeCasedDesignRequest.style = styleSlug
  return new Book({
    id: designRequest.parentId,
    guid: designRequest.guid,
    title: designRequest.title,
    design_request: snakeCasedDesignRequest
  })
}
