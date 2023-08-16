import {EngineAPI} from '@/core/models/engine-api'
import {describe, expect, test} from 'vitest'
import {fetchMocker} from '../../mocks/fetch'
import {imageServerFactory} from '../../factories/image.factory'

describe('Engine API Images Endpoints', () => {
  const engineAPI = new EngineAPI('https://api.magicbook.mock', '123')

  test('list', async () => {
    const fakeImageList = [imageServerFactory(), imageServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(fakeImageList))
    const image = await engineAPI.images.list('bookId')
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeImageList)))
  })

  test('retrieve', async () => {
    const fakeImage = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeImage))
    const image = await engineAPI.images.retrieve('imageId', 'bookId')
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeImage)))
  })

  test('update', async () => {
    const fakeImage = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeImage))
    const image = await engineAPI.images.update('imageId', 'bookId', fakeImage)
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeImage)))
  })

  test('delete', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    const image = await engineAPI.images.delete('imageId', 'bookId')
    expect(image).toBeUndefined()
  })

  test('addToBook', async () => {
    const fakeImage = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeImage))
    const image = await engineAPI.images.addToBook('bookId', fakeImage)
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeImage)))
  })

})
