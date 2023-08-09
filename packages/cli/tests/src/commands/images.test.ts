import '../../../src/commands/images'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {imageServerFactory} from '@/core/tests/factories/image.factory'
import {mockProcessExit} from 'vitest-mock-process'
import {program} from 'commander'

mockProcessExit()
vi.mock('prompts', async () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => Promise.resolve({
      bookId: 'ABC',
      imageId: 'DEF',
      image: JSON.stringify(imageServerFactory()),
      // book: JSON.stringify(bookFactory()),
      isValid: typeof props.validate === 'function' ? props.validate(JSON.stringify(imageServerFactory())) : true,
      invalid: typeof props.validate === 'function' ? props.validate(JSON.stringify({})) : true
    })
  }
})
describe('Images', () => {
  const logSpy = vi.spyOn(console, 'log')

  test('list images without args', async () => {
    const images = [imageServerFactory(), imageServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(images))
    await program.parseAsync(['images', 'list'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(JSON.parse(JSON.stringify(images)))
  })

  test('list images', async () => {
    const images = [imageServerFactory(), imageServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(images))
    await program.parseAsync(['images', 'list', '--book-id', 'book.id'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(JSON.parse(JSON.stringify(images)))
  })

  test('create image without args', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    await program.parseAsync(['images', 'create'],
      {from: 'user'})
    expect(logSpy.mock.calls[2][0]).toStrictEqual(JSON.parse(JSON.stringify(image)))
  })

  test('create image', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    await program.parseAsync(['images', 'create', '--book-id', 'book.id', '--image', JSON.stringify(image)],
      {from: 'user'})
    expect(logSpy.mock.calls[3][0]).toStrictEqual(JSON.parse(JSON.stringify(image)))
  })

  test('get image without args', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    await program.parseAsync(['images', 'get'], {from: 'user'})
    expect(logSpy.mock.calls[4][0]).toStrictEqual(JSON.parse(JSON.stringify(image)))
  })

  test('get image', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    await program.parseAsync(['images', 'get', '--book-id', 'book.id', '--image-id', 'image.id'], {from: 'user'})
    expect(logSpy.mock.calls[5][0]).toStrictEqual(JSON.parse(JSON.stringify(image)))
  })

  test('update image without args', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    await program.parseAsync(['images', 'update'], {from: 'user'})
    expect(logSpy.mock.calls[6][0]).toStrictEqual(JSON.parse(JSON.stringify(image)))
  })

  test('update image', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    await program.parseAsync(['images', 'update', '--book-id', 'book.id', '--image-id',
      'image.id', '--image', JSON.stringify(image)], {from: 'user'})
    expect(logSpy.mock.calls[7][0]).toStrictEqual(JSON.parse(JSON.stringify(image)))
  })

  test('delete image without args', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    await program.parseAsync(['images', 'delete'], {from: 'user'})
  })

  test('delete image', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    await program.parseAsync(['images', 'delete', '--book-id', 'book.id', '--image-id', 'image.id'], {from: 'user'})
  })
})
