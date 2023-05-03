import {Book, BookDesignRequestProps} from '@/models/book'
import {DesignRequest} from '..'
import {camelCaseObjectKeysToSnakeCase} from './toolbox'
import {sflyMbStyleMap} from '@/data/design-request'

export function designRequestToBook(designRequest: DesignRequest) {
  const styleSlug = sflyMbStyleMap[designRequest.style]
  const snakeCasedDesignRequest = 
    camelCaseObjectKeysToSnakeCase({...designRequest} as Record<string, unknown>) as BookDesignRequestProps
  snakeCasedDesignRequest.style = styleSlug
  return new Book({
    id: designRequest.parentId,
    state: 'new',
    title: designRequest.title,
    design_request: snakeCasedDesignRequest
  })
}
