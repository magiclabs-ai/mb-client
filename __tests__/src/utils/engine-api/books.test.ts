import {createBook, retrieveBook, updateBook} from '../../../../src/utils/engine-api/books'
import {describe, test, vi} from 'vitest'
import DesignRequest from '../../../../src/models/design-request'

vi.mock('axios')

describe('Axios', () => {
  test('createBook function', () => {
    createBook()
  })
  test('retrieveBook function', () => {
    retrieveBook('bookId')
  })
  test('updateBook function', () => {
    updateBook({} as DesignRequest)
  })
})

