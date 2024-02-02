import {describe, expect, test} from 'vitest'
import {engineAPI} from '../../shared'
import {fetchMocker} from '../../mocks/fetch'
import {imageServerFactory} from '../../factories/image.factory'

describe('Engine API Images Endpoints', () => {
  test('list', async () => {
    const fakeImageList = [imageServerFactory(), imageServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(fakeImageList))
    const image = await engineAPI.images.list({
      bookId: 'bookId'
    })
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeImageList)))
  })

  test('retrieve', async () => {
    const fakeImage = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeImage))
    const image = await engineAPI.images.retrieve({
      imageId: 'imageId',
      bookId: 'bookId'
    })
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeImage)))
  })

  test('update', async () => {
    const fakeImage = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeImage))
    const image = await engineAPI.images.update({
      imageId: 'imageId',
      bookId: 'bookId',
      payload: fakeImage
    })
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeImage)))
  })

  test('delete', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    const image = await engineAPI.images.delete({
      imageId: 'imageId',
      bookId: 'bookId'
    })
    expect(image).toBeUndefined()
  })

  test('addToBook', async () => {
    const fakeImage = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeImage))
    const image = await engineAPI.images.addToBook({
      bookId: 'bookId',
      image: fakeImage
    })
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeImage)))
  })
})
