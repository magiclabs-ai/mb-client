import {describe, test, vi} from 'vitest'
import {download, get, post, put, remove} from '../../../../src/utils/engine-api/axios'

vi.mock('axios')

describe('Axios', () => {
  test('get function', () => {
    get({url: 'test'})
  })
  test('download function', () => {
    download({url: 'test'})
  })
  test('remove function', () => {
    remove({url: 'test'})
  })
  test('post function', () => {
    post({url: 'test'})
  })
  test('put function', () => {
    put({url: 'test'})
  })
})
