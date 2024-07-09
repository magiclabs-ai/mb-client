import '../../../src/commands/styles'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {formatReturnJSON, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {mockProcessExit} from 'vitest-mock-process'
import {paginationFactory} from '@/core/tests/factories/pagination.factory'
import {program} from 'commander'
import {styleBaseFactory, styleFactory} from '@/core/tests/factories/style.factory'
import {styleBaseSchema} from '../../../../client/src'
import prompts from 'prompts'

mockProcessExit()

describe('Styles Items', () => {
  const logSpy = vi.spyOn(console, 'log')

  test('list styles without args', async () => {
    const fakeStyles = paginationFactory({
      factory: styleBaseFactory,
      schema: styleBaseSchema
    })
    fetchMocker.mockResponse(JSON.stringify(fakeStyles))
    await program.parseAsync(['styles', 'list'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(formatReturnJSON(fakeStyles))
  })

  test('retrieve style without args', async () => {
    const fakeStyle = styleFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeStyle))
    prompts.inject(['style.slug'])
    await program.parseAsync(['styles', 'retrieve'], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[1][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(fakeStyle))
  })

  test('retrieve style', async () => {
    const fakeStyle = styleFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeStyle))
    await program.parseAsync(['styles', 'retrieve', '--style-slug', 'style.slug'], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[2][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(fakeStyle))
  })

  test('update style without args', async () => {
    const fakeStyle = styleFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeStyle))
    prompts.inject(['style.slug', JSON.stringify(fakeStyle)])
    await program.parseAsync(['styles', 'update'], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[3][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(fakeStyle))
  })

  test('update style', async () => {
    const fakeStyle = styleFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeStyle))
    await program.parseAsync(['styles', 'update', '--style-slug', 'style.slug', '--style', JSON.stringify(fakeStyle)], {
      from: 'user'
    })
    expect(JSON.parse(logSpy.mock.calls[4][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(fakeStyle))
  })
})
