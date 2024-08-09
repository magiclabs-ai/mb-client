import {describe, expect, test} from 'vitest'
import {faker} from '@faker-js/faker'
import {imageServerFactory} from '../factories/image.factory'
import {imageServerToImage} from '@/client/src'

describe('Image', () => {
  test('imageServerToImage', async () => {
    const id = faker.string.uuid()
    const image = imageServerFactory({id})
    expect(imageServerToImage(image)).toStrictEqual({
      id: image.id,
      handle: image.handle,
      url: image.url,
      width: image.width,
      height: image.height,
      rotation: image.orientation,
      captureTime: image.taken_at,
      cameraMake: image.camera_make,
      cameraModel: image.camera,
      filename: image.filename,
      metadata: image.metadata
    })
  })
})
