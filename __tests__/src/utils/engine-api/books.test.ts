import {MagicBookClient} from '@/index'
import {axiosGet, axiosPost, axiosPut} from '../../../mocks/axios'
import {bookFactory} from '../../../factories/book.factory'
import {createBook, retrieveBook, retrieveGalleon, updateBook} from '../../../../src/utils/engine-api/books'
import {describe, expect, test, vi} from 'vitest'
import {galleonFactory} from '../../../factories/galleon.factory'

vi.unmock('@/utils/engine-api/books')
describe('Book APIs', () => {
  const client = new MagicBookClient('123')
  const book = bookFactory()
  test('createBook function', async () => {
    axiosPost.mockResolvedValue({data: book})
    const res = await createBook(client)
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(book))
  })
  test('retrieveBook function', async () => {
    axiosGet.mockResolvedValue({data: book})
    const res = await retrieveBook(client, book.id)
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(book))
  })
  test('updateBook function', async () => {
    axiosPut.mockResolvedValue({data: book})
    const res = await updateBook(client, book)
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(book))
  })
  test('retrieveGalleon function', async () => {
    const galleon = galleonFactory({title: book.title})
    axiosGet.mockResolvedValue({data: galleon})
    const res = await retrieveGalleon(client, book.id)
    expect(res).toStrictEqual(galleon)
  })
})

