import '../../../src/commands/fonts'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {fontFactory} from '@/core/tests/factories/font.factory'
import {fontSchema} from '@/core/types/font'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {mockProcessExit} from 'vitest-mock-process'
import {paginationFactory} from '@/core/tests/factories/pagination.factory'
import {program} from 'commander'

mockProcessExit()

describe('Fonts', () => {
  const logSpy = vi.spyOn(console, 'log')

  test('list', async () => {
    const fakeFonts = await paginationFactory({factory: fontFactory, schema: fontSchema})
    fetchMocker.mockResponse(JSON.stringify(fakeFonts))
    await program.parseAsync(['fonts', 'list'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(formatReturnJSON(fakeFonts))
  })
})
