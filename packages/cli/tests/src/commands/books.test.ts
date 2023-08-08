import '../../../src/index'
import {bookFactory} from '@/core/tests/factories/book.factory'
import {commands} from '../../../src/index'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {galleonFactory} from '@/core/tests/factories/galleon.factory'
import {mockProcessExit} from 'vitest-mock-process'

mockProcessExit()
vi.mock('prompts', async () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => Promise.resolve({
      bookId: 'ABC',
      book: JSON.stringify(bookFactory()),
      isValid: typeof props.validate === 'function' ? props.validate(JSON.stringify(bookFactory())) : true,
      invalid: typeof props.validate === 'function' ? props.validate(JSON.stringify({})) : true
    })
  }
})
describe('Books', () => {
  const logSpy = vi.spyOn(console, 'log')
  test('create book', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await commands.parseAsync(['books', 'create'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(JSON.parse(JSON.stringify(book)))
  })

  test.fails('fail to create a book', async () => {
    const run = await commands.parseAsync(['books', 'create', '--book', '{"hello": "world"}'], {from: 'user'})
    expect(run).rejects.toThrow()
  })

  test('get book without args', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await commands.parseAsync(['books', 'get'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(JSON.parse(JSON.stringify(book)))
  })

  test('get book', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await commands.parseAsync(['books', 'get', '--bookId', book.id], {from: 'user'})
    expect(logSpy.mock.calls[2][0]).toStrictEqual(JSON.parse(JSON.stringify(book)))
  })

  test('update book without args', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await commands.parseAsync(['books', 'update'], {from: 'user'})
    expect(logSpy.mock.calls[3][0]).toStrictEqual(JSON.parse(JSON.stringify(book)))
  })

  test('update book', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await commands.parseAsync(['books', 'update', '--bookId', book.id, '--book', JSON.stringify(book)], {from: 'user'})
    expect(logSpy.mock.calls[4][0]).toStrictEqual(JSON.parse(JSON.stringify(book)))
  })

  test('cancel book without args', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await commands.parseAsync(['books', 'cancel'], {from: 'user'})
    expect(logSpy.mock.calls[5][0]).toStrictEqual(JSON.parse(JSON.stringify(book)))
  })

  test('cancel book', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await commands.parseAsync(['books', 'cancel', '--bookId', book.id], {from: 'user'})
    expect(logSpy.mock.calls[6][0]).toStrictEqual(JSON.parse(JSON.stringify(book)))
  })

  test('delete book without args', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await commands.parseAsync(['books', 'delete'], {from: 'user'})
  })

  test('delete book', async () => {
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    await commands.parseAsync(['books', 'delete', '--bookId', book.id], {from: 'user'})
  })

  test('retrieve book galleon without args', async () => {
    const galleon = galleonFactory()
    fetchMocker.mockResponse(JSON.stringify(galleon))
    await commands.parseAsync(['books', 'galleon'], {from: 'user'})
    expect(logSpy.mock.calls[7][0]).toStrictEqual(JSON.parse(JSON.stringify(galleon)))
  })

  test('retrieve book galleon', async () => {
    const galleon = galleonFactory()
    fetchMocker.mockResponse(JSON.stringify(galleon))
    await commands.parseAsync(['books', 'galleon', '--bookId', 'book.id'], {from: 'user'})
    expect(logSpy.mock.calls[8][0]).toStrictEqual(JSON.parse(JSON.stringify(galleon)))
  })
})
