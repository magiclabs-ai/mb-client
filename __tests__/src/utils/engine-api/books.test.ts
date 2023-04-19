import {Book} from '../../../../src/models/book'
import {axiosGet, axiosPost, axiosPut} from '../../../mocks/setup'
import {bookFactory} from '../../../factories/book.factory'
import {createBook, retrieveBook, updateBook} from '../../../../src/utils/engine-api/books'
import {describe, test, vi} from 'vitest'

vi.unmock('@/utils/engine-api/books')
describe('Book APIs', () => {
  test('createBook function', () => {
    axiosPost.mockResolvedValue({data: bookFactory()})
    createBook()
  })
  test('retrieveBook function', () => {
    axiosGet.mockResolvedValue({data: bookFactory()})
    retrieveBook('bookId')
  })
  test('updateBook function', () => {
    axiosPut.mockResolvedValue({data: bookFactory()})
    updateBook({} as Book)
  })
})

