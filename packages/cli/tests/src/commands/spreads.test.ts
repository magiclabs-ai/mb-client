import '../../../src/commands/spreads'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {mockProcessExit} from 'vitest-mock-process'
import {program} from 'commander'
import {spreadServerFactory} from '@/core/tests/factories/spread.factory'

mockProcessExit()
vi.mock('prompts', async () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => Promise.resolve({
      bookId: 'ABC',
      spreadId: 'DEF',
      spread: JSON.stringify(spreadServerFactory()),
      // book: JSON.stringify(bookFactory()),
      isValid: typeof props.validate === 'function' ? props.validate(JSON.stringify(spreadServerFactory())) : true,
      invalid: typeof props.validate === 'function' ? props.validate(JSON.stringify({})) : true
    })
  }
})
describe('Spreads', () => {
  const logSpy = vi.spyOn(console, 'log')

  test('list spreads without args', async () => {
    const spreads = [spreadServerFactory(), spreadServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(spreads))
    await program.parseAsync(['spreads', 'list'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(JSON.parse(JSON.stringify(spreads)))
  })

  test('list spreads', async () => {
    const spreads = [spreadServerFactory(), spreadServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(spreads))
    await program.parseAsync(['spreads', 'list', '--bookId', 'book.id'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(JSON.parse(JSON.stringify(spreads)))
  })

  test('create spread without args', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'create'],
      {from: 'user'})
    expect(logSpy.mock.calls[2][0]).toStrictEqual(JSON.parse(JSON.stringify(spread)))
  })

  test('create spread', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'create', '--bookId', 'book.id', '--spread', JSON.stringify(spread)],
      {from: 'user'})
    expect(logSpy.mock.calls[3][0]).toStrictEqual(JSON.parse(JSON.stringify(spread)))
  })

  test('get spread without args', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'get'], {from: 'user'})
    expect(logSpy.mock.calls[4][0]).toStrictEqual(JSON.parse(JSON.stringify(spread)))
  })

  test('get spread', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'get', '--bookId', 'book.id', '--spreadId', 'spread.id'], {from: 'user'})
    expect(logSpy.mock.calls[5][0]).toStrictEqual(JSON.parse(JSON.stringify(spread)))
  })

  test('update spread without args', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'update'], {from: 'user'})
    expect(logSpy.mock.calls[6][0]).toStrictEqual(JSON.parse(JSON.stringify(spread)))
  })

  test('update spread', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'update', '--bookId', 'book.id', '--spreadId',
      'spread.id', '--spread', JSON.stringify(spread)], {from: 'user'})
    expect(logSpy.mock.calls[7][0]).toStrictEqual(JSON.parse(JSON.stringify(spread)))
  })

  test('delete spread without args', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    await program.parseAsync(['spreads', 'delete'], {from: 'user'})
  })

  test('delete spread', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    await program.parseAsync(['spreads', 'delete', '--bookId', 'book.id', '--spreadId', 'spread.id'], {from: 'user'})
  })
})
