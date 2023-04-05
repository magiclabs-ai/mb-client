import {apiHost} from '../../config'
import {get, post} from './axios'
import DesignRequest from '../../models/design-request'

export async function createBook(payload?: DesignRequest) {
  try {
    return await post({url: `${apiHost}/api/v1/books`, payload})
  } catch (error) {
    return Promise.reject({title: error})
  }
}

export async function retrieveBook(id: string) {
  return await get({url: `${apiHost}/api/v1/books/${id}`})
}

export async function updateBook(payload: DesignRequest) {
  return await post({url: `${apiHost}/api/v1/books/${payload.id}`, payload})
}
