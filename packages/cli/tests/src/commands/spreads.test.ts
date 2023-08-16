import '../../../src/commands/spreads'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {formatReturnJSON} from '@/core/utils/toolbox'
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
      isValid: typeof props.validate === 'function' ? props.validate(JSON.stringify(spreadServerFactory())) : true
    })
  }
})
describe('Spreads', () => {
  const logSpy = vi.spyOn(console, 'log')

  test('list spreads without args', async () => {
    const spreads = [spreadServerFactory(), spreadServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(spreads))
    await program.parseAsync(['spreads', 'list'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(formatReturnJSON(spreads))
  })

  test('list spreads', async () => {
    const spreads = [spreadServerFactory(), spreadServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(spreads))
    await program.parseAsync(['spreads', 'list', '--book-id', 'book.id'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(formatReturnJSON(spreads))
  })

  test('create spread without args', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'create'], {from: 'user'})
    expect(logSpy.mock.calls[2][0]).toStrictEqual('❌ - SyntaxError: Unexpected token u in JSON at position 0')
  })

  test('create spread', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'create', '--book-id', 'book.id', '--spread', JSON.stringify(spread)],
      {from: 'user'})
    expect(logSpy.mock.calls[3][0]).toStrictEqual(formatReturnJSON(spread))
  })

  test('get spread without args', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'get'], {from: 'user'})
    expect(logSpy.mock.calls[4][0]).toStrictEqual(formatReturnJSON(spread))
  })

  test('get spread', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'get', '--book-id', 'book.id', '--spread-id', 'spread.id'], {from: 'user'})
    expect(logSpy.mock.calls[5][0]).toStrictEqual(formatReturnJSON(spread))
  })

  test('update spread without args', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'update'], {from: 'user'})
    expect(logSpy.mock.calls[6][0]).toStrictEqual(formatReturnJSON(spread))
  })

  test('update spread', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'update', '--book-id', 'book.id', '--spread-id',
      'spread.id', '--spread', JSON.stringify(spread)], {from: 'user'})
    expect(logSpy.mock.calls[7][0]).toStrictEqual(formatReturnJSON(spread))
  })

  test('delete spread without args', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    await program.parseAsync(['spreads', 'delete'], {from: 'user'})
  })

  test('delete spread', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    await program.parseAsync(['spreads', 'delete', '--book-id', 'book.id', '--spread-id', 'spread.id'], {from: 'user'})
  })
})
