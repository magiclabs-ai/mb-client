import '../../../src/commands/spreads'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {mockProcessExit} from 'vitest-mock-process'
import {program} from 'commander'
import {snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {spreadServerFactory} from '@/core/tests/factories/spread.factory'
import prompts from 'prompts'

mockProcessExit()

describe('Spreads', () => {
  const logSpy = vi.spyOn(console, 'log')

  test('list spreads without args', async () => {
    const spreads = [spreadServerFactory(), spreadServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(spreads))
    prompts.inject(['book.id'])
    await program.parseAsync(['spreads', 'list'], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[0][0])).toStrictEqual(
      spreads.map(spread => snakeCaseObjectKeysToCamelCase(spread))
    )
  })

  test('list spreads', async () => {
    const spreads = [spreadServerFactory(), spreadServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(spreads))
    await program.parseAsync(['spreads', 'list', '--book-id', 'book.id'], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[1][0])).toStrictEqual(
      spreads.map(spread => snakeCaseObjectKeysToCamelCase(spread))
    )
  })

  test('create spread without args', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    prompts.inject(['book.id', JSON.stringify(spread)])
    await program.parseAsync(['spreads', 'create'], {from: 'user'})
    expect(logSpy.mock.calls[2][0]).toEqual('❌ - SyntaxError: "undefined" is not valid JSON')
  })

  test('create spread', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'create', '--book-id', 'book.id', '--spread', JSON.stringify(spread)],
      {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[3][0])).toEqual(snakeCaseObjectKeysToCamelCase(spread))
  })

  test('retrieve spread without args', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    prompts.inject(['book.id', 'spread.id'])
    await program.parseAsync(['spreads', 'retrieve'], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[4][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(spread))
  })

  test('retrieve spread', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync([
      'spreads',
      'retrieve',
      '--book-id',
      'book.id',
      '--spread-id',
      'spread.id'
    ], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[5][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(spread))
  })

  test('update spread without args', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    prompts.inject(['book.id', 'spread.id', JSON.stringify(spread)])
    await program.parseAsync(['spreads', 'update'], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[6][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(spread))
  })

  test('update spread', async () => {
    const spread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(spread))
    await program.parseAsync(['spreads', 'update', '--book-id', 'book.id', '--spread-id',
      'spread.id', '--spread', JSON.stringify(spread)], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[7][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(spread))
  })

  test('delete spread without args', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    prompts.inject(['book.id', 'spread.id'])
    await program.parseAsync(['spreads', 'delete'], {from: 'user'})
  })

  test('delete spread', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    await program.parseAsync(['spreads', 'delete', '--book-id', 'book.id', '--spread-id', 'spread.id'], {from: 'user'})
  })
})
