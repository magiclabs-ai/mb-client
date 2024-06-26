import '../../../src/commands/storyboard-items'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {mockProcessExit} from 'vitest-mock-process'
import {program} from 'commander'
import {storyboardItemServerFactory} from '@/core/tests/factories/storyboard-item.factory'
import prompts from 'prompts'

mockProcessExit()

describe('Storyboard Items', () => {
  const logSpy = vi.spyOn(console, 'log')

  test('get without args', async () => {
    const storyboardItems = [storyboardItemServerFactory(), storyboardItemServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(storyboardItems))
    prompts.inject(['book.id'])
    await program.parseAsync(['storyboard-items', 'list'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(formatReturnJSON(storyboardItems))
  })

  test('get', async () => {
    const storyboardItems = [storyboardItemServerFactory(), storyboardItemServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(storyboardItems))
    await program.parseAsync(['storyboard-items', 'list', '--book-id', 'book.id'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(formatReturnJSON(storyboardItems))
  })
})
