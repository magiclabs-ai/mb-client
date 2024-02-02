import {bookFactory} from '../../factories/book.factory'
import {describe, expect, test} from 'vitest'
import {engineAPI} from '../../shared'
import {fetchMocker} from '../../mocks/fetch'
import {galleonFactory} from '../../factories/galleon.factory'

describe('Engine API Book Endpoints', () => {
  test('create', async () => {
    const fakeBook = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeBook.toBookProps()))
    const book = await engineAPI.books.create({book: fakeBook})
    expect(book).toStrictEqual(fakeBook)
  })

  test('retrieve', async () => {
    const fakeBook = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeBook.toBookProps()))
    const book = await engineAPI.books.retrieve({bookId: fakeBook.id})
    expect(book).toStrictEqual(fakeBook)
  })

  test('update', async () => {
    const fakeBook = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeBook.toBookProps()))
    const book = await engineAPI.books.update({
      bookId: fakeBook.id,
      payload: fakeBook
    })
    expect(book).toStrictEqual(fakeBook)
  })

  test('delete', async () => {
    fetchMocker.mockResponse('')
    const book = await engineAPI.books.delete({
      bookId: '123'
    })
    expect(book).toBeUndefined()
  })

  test('design', async () => {
    const fakeBook = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeBook.toBookProps()))
    const book = await engineAPI.books.design({
      bookId: fakeBook.id
    })
    expect(book).toStrictEqual(fakeBook)
  })

  test('cancel', async () => {
    const fakeBook = bookFactory({state: 'cancelled'})
    fetchMocker.mockResponse(JSON.stringify(fakeBook.toBookProps()))
    const book = await engineAPI.books.cancel({
      bookId: fakeBook.id
    })
    expect(book.state).toBe('cancelled')
    expect(book).toStrictEqual(fakeBook)
  })

  test('retrieveGalleon', async () => {
    const fakeGalleon = galleonFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeGalleon))
    const galleon = await engineAPI.books.retrieveGalleon({
      bookId: '123'
    })
    expect(galleon).toStrictEqual(fakeGalleon)
  })

  test('report', async () => {
    const fakeBook = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeBook.toBookProps()))
    const book = await engineAPI.books.report({
      bookId: fakeBook.id,
      report: {
        error: 'timeout',
        step: 'ingesting'
      }
    })
    expect(book).toStrictEqual(undefined)
  })
})
