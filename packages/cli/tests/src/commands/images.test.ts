import '../../../src/commands/images'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {imageServerFactory} from '@/core/tests/factories/image.factory'
import {mockProcessExit} from 'vitest-mock-process'
import {program} from 'commander'
import prompts from 'prompts'

mockProcessExit()

describe('Images', () => {
  const logSpy = vi.spyOn(console, 'log')

  test('list images without args', async () => {
    const images = [imageServerFactory(), imageServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(images))
    prompts.inject(['book.id'])
    await program.parseAsync(['images', 'list'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(formatReturnJSON(images))
  })

  test('list images', async () => {
    const images = [imageServerFactory(), imageServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(images))
    await program.parseAsync(['images', 'list', '--book-id', '123'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(formatReturnJSON(images))
  })

  test('create image without args', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    prompts.inject(['book.id', JSON.stringify(image)])
    await program.parseAsync(['images', 'create'], {from: 'user'})
    expect(logSpy.mock.calls[2][0]).toStrictEqual(formatReturnJSON(image))
  })

  test('create image', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    await program.parseAsync(['images', 'create', '--book-id', 'book.id', '--image', JSON.stringify(image)], {
      from: 'user'
    })
    expect(logSpy.mock.calls[3][0]).toStrictEqual(formatReturnJSON(image))
  })

  test('create image with wrong payload', async () => {
    const image = {fake: 'object'}
    fetchMocker.mockResponse(JSON.stringify(image))
    await program.parseAsync(['images', 'create', '--book-id', 'book.id', '--image', JSON.stringify(image)], {
      from: 'user'
    })
  })

  test('retrieve image without args', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    prompts.inject(['book.id', 'image.id'])
    await program.parseAsync(['images', 'retrieve'], {from: 'user'})
    expect(logSpy.mock.calls[4][0]).toStrictEqual(formatReturnJSON(image))
  })

  test('retrieve image', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    await program.parseAsync(['images', 'retrieve', '--book-id', 'book.id', '--image-id', 'image.id'], {from: 'user'})
    expect(logSpy.mock.calls[5][0]).toStrictEqual(formatReturnJSON(image))
  })

  test('update image without args', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    prompts.inject(['book.id', 'image.id', JSON.stringify(image)])
    await program.parseAsync(['images', 'update'], {from: 'user'})
    expect(logSpy.mock.calls[6][0]).toStrictEqual(formatReturnJSON(image))
  })

  test('update image', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    await program.parseAsync(
      ['images', 'update', '--book-id', 'book.id', '--image-id', 'image.id', '--image', JSON.stringify(image)],
      {from: 'user'}
    )
    expect(logSpy.mock.calls[7][0]).toStrictEqual(formatReturnJSON(image))
  })

  test('delete image without args', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    prompts.inject(['book.id', 'image.id'])
    await program.parseAsync(['images', 'delete'], {from: 'user'})
  })

  test('delete image', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    await program.parseAsync(['images', 'delete', '--book-id', 'book.id', '--image-id', 'image.id'], {from: 'user'})
  })
})
