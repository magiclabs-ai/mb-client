import {Book, BookDesignRequestProps} from '@/models/book'
import {DesignRequest} from '..'
import {camelCaseObjectKeysToSnakeCase} from './toolbox'

export function designRequestToBook(designRequest: DesignRequest) {
  const snakeCasedDesignRequest = 
    camelCaseObjectKeysToSnakeCase({...designRequest} as Record<string, unknown>) as BookDesignRequestProps
  return new Book({
    id: designRequest.parentId,
    state: 'new',
    title: designRequest.title,
    design_request: snakeCasedDesignRequest
  })
}
