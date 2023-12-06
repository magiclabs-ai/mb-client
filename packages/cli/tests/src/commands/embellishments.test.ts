import '../../../src/commands/embellishments'
import {describe, expect, test, vi} from 'vitest'
import {embellishmentTextStickerFactory} from '@/core/tests/factories/embellishment.factory'
import {embellishmentTextStickerSchema} from '@/core/types/embellishment'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {formatReturnJSON, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {mockProcessExit} from 'vitest-mock-process'
import {paginationFactory} from '@/core/tests/factories/pagination.factory'
import {program} from 'commander'
import prompts from 'prompts'

mockProcessExit()

describe('Embellishments Items', () => {
  const logSpy = vi.spyOn(console, 'log')

  test('list embellishments without args', async () => {
    const fakeEmbellishments = paginationFactory({
      factory: embellishmentTextStickerFactory,
      schema: embellishmentTextStickerSchema
    })
    fetchMocker.mockResponse(JSON.stringify(fakeEmbellishments))
    prompts.inject(['style.slug'])
    await program.parseAsync(['embellishments', 'list'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(formatReturnJSON(fakeEmbellishments))
  })

  test('list embellishments', async () => {
    const fakeEmbellishments = paginationFactory({
      factory: embellishmentTextStickerFactory,
      schema: embellishmentTextStickerSchema
    })
    fetchMocker.mockResponse(JSON.stringify(fakeEmbellishments))
    await program.parseAsync(['embellishments', 'list', '--style-slug', 'style.slug'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(formatReturnJSON(fakeEmbellishments))
  })

  test('retrieve embellishment without args', async () => {
    const embellishment = embellishmentTextStickerFactory()
    fetchMocker.mockResponse(JSON.stringify(embellishment))
    prompts.inject(['embellishment.id', 'style.slug'])
    await program.parseAsync(['embellishments', 'retrieve'], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[2][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(embellishment))
  })

  test('retrieve embellishment', async () => {
    const embellishment = embellishmentTextStickerFactory()
    fetchMocker.mockResponse(JSON.stringify(embellishment))
    await program.parseAsync([
      'embellishments',
      'retrieve',
      '--embellishment-id',
      'embellishment.id',
      '--style-slug',
      'style.slug'
    ], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[3][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(embellishment))
  })

  test('update embellishment without args', async () => {
    const embellishment = embellishmentTextStickerFactory()
    fetchMocker.mockResponse(JSON.stringify(embellishment))
    prompts.inject(['embellishment.id', 'style.slug', JSON.stringify(embellishment)])
    await program.parseAsync(['embellishments', 'update'], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[4][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(embellishment))
  })

  test('update embellishment', async () => {
    const embellishment = embellishmentTextStickerFactory()
    fetchMocker.mockResponse(JSON.stringify(embellishment))
    await program.parseAsync([
      'embellishments',
      'update',
      '--embellishment-id',
      'embellishment.id',
      '--style-slug',
      'style.slug',
      '--embellishment',
      JSON.stringify(embellishment)
    ], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[5][0])).toStrictEqual(snakeCaseObjectKeysToCamelCase(embellishment))
  })

})
