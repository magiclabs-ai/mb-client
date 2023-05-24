import {axiosGet, axiosPost, axiosPut} from '../../../mocks/axios'
import {bookFactory} from '../../../factories/book.factory'
import {createBook, retrieveBook, retrieveGalleon, updateBook} from '../../../../src/utils/engine-api/books'
import {describe, expect, test, vi} from 'vitest'
import {galleonFactory} from '../../../factories/galleon.factory'

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
    const res = await updateBook(book)
    expect(JSON.stringify(res)).toBe(JSON.stringify(book))
  })
  test('retrieveGalleon function', async () => {
    const galleon = galleonFactory({title: book.title})
    axiosGet.mockResolvedValue({data: galleon})
    const res = await retrieveGalleon(book.id)
    expect(JSON.stringify(res)).toBe(JSON.stringify(galleon))
  })
})

