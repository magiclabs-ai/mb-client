import '../../../src/commands/books'
import {bookFactory} from '@/core/tests/factories/book.factory'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {galleonFactory} from '@/core/tests/factories/galleon.factory'
import {mockProcessExit} from 'vitest-mock-process'
import {program} from 'commander'

mockProcessExit()
vi.mock('prompts', async () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => Promise.resolve({
      bookId: 'ABC',
      book: JSON.stringify(bookFactory()),
      isValid: typeof props.validate === 'function' ? props.validate(bookFactory()) : true
    })
  }
})
describe('Books', () => {
  const logSpy = vi.spyOn(console, 'log')
  test('create book', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await program.parseAsync(['books', 'create'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(formatReturnJSON(book))
  })

  test('get book without args', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await program.parseAsync(['books', 'get'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(formatReturnJSON(book))
  })

  test('get book', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await program.parseAsync(['books', 'get', '--book-id', book.id], {from: 'user'})
    expect(logSpy.mock.calls[2][0]).toStrictEqual(formatReturnJSON(book))
  })

  test('update book without args', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await program.parseAsync(['books', 'update'], {from: 'user'})
    expect(logSpy.mock.calls[3][0]).toStrictEqual(formatReturnJSON(book))
  })

  test('update book', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await program.parseAsync(['books', 'update', '--book-id', book.id, '--book', JSON.stringify(book)], {from: 'user'})
    expect(logSpy.mock.calls[4][0]).toStrictEqual(formatReturnJSON(book))
  })

  test('cancel book without args', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await program.parseAsync(['books', 'cancel'], {from: 'user'})
    expect(logSpy.mock.calls[5][0]).toStrictEqual(formatReturnJSON(book))
  })

  test('cancel book', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await program.parseAsync(['books', 'cancel', '--book-id', book.id], {from: 'user'})
    expect(logSpy.mock.calls[6][0]).toStrictEqual(formatReturnJSON(book))
  })

  test('delete book without args', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await program.parseAsync(['books', 'delete'], {from: 'user'})
  })

  test('delete book', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await program.parseAsync(['books', 'delete', '--book-id', book.id], {from: 'user'})
  })

  test('retrieve book galleon without args', async () => {
    const galleon = galleonFactory()
    fetchMocker.mockResponse(JSON.stringify(galleon))
    await program.parseAsync(['books', 'galleon'], {from: 'user'})
    expect(logSpy.mock.calls[7][0]).toStrictEqual(formatReturnJSON(galleon))
  })

  test('retrieve book galleon', async () => {
    const galleon = galleonFactory()
    fetchMocker.mockResponse(JSON.stringify(galleon))
    await program.parseAsync(['books', 'galleon', '--book-id', 'book.id'], {from: 'user'})
    expect(logSpy.mock.calls[8][0]).toStrictEqual(formatReturnJSON(galleon))
  })
})
