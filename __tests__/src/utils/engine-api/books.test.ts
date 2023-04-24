import {Book} from '../../../../src/models/book'
import {axiosGet, axiosPost, axiosPut} from '../../../mocks/setup'
import {bookFactory} from '../../../factories/book.factory'
import {createBook, retrieveBook, updateBook} from '../../../../src/utils/engine-api/books'
import {describe, expect, test, vi} from 'vitest'

vi.unmock('@/utils/engine-api/books')
describe('Book APIs', () => {
  const book = bookFactory()
  test('createBook function', async () => {
    axiosPost.mockResolvedValue({data: book})
    const res = await createBook()
    expect(JSON.stringify(res)).toBe(JSON.stringify(book))
  })
  test('retrieveBook function', async () => {
    axiosGet.mockResolvedValue({data: book})
    const res = await retrieveBook('bookId')
    expect(JSON.stringify(res)).toBe(JSON.stringify(book))
  })
  test('updateBook function', async () => {
    axiosPut.mockResolvedValue({data: book})
    const res = await updateBook({} as Book)
    expect(JSON.stringify(res)).toBe(JSON.stringify(book))
  })
})

