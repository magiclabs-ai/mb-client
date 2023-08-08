import {EngineAPI} from '@/core/models/engine-api'
import {bookFactory} from '../../factories/book.factory'
import {describe, expect, test} from 'vitest'
import {fetchMocker} from '../../mocks/fetch'
import {galleonFactory} from '../../factories/galleon.factory'

describe('Engine API Book Endpoints', () => {
  const engineAPI = new EngineAPI('https://api.magicbook.mock', '123')


  test('create', async () => {
    const fakeBook = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeBook))
    const book = await engineAPI.books.create()
    expect(book).toStrictEqual(fakeBook)
  })
  
  test('retrieve', async () => {
    const fakeBook = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeBook))
    const book = await engineAPI.books.retrieve(fakeBook.id)
    expect(book).toStrictEqual(fakeBook)
  })

  test('update', async () => {
    const fakeBook = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeBook))
    const book = await engineAPI.books.update(fakeBook.id, fakeBook)
    expect(book).toStrictEqual(fakeBook)
  })

  test('cancel', async () => {
    const fakeBook = bookFactory({state: 'cancelled'})
    fetchMocker.mockResponse(JSON.stringify(fakeBook))
    const book = await engineAPI.books.cancel(fakeBook.id)
    expect(book.state).toBe('cancelled')
    expect(book).toStrictEqual(fakeBook)
  })

  test('delete', async () => {
    fetchMocker.mockResponse('')
    const book = await engineAPI.books.delete('123')
    expect(book).toBeUndefined()
  })

  test('retrieveGalleon', async () => {
    const fakeGalleon = galleonFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeGalleon))
    const galleon = await engineAPI.books.retrieveGalleon('123')
    expect(galleon).toStrictEqual(fakeGalleon)
  })
})
