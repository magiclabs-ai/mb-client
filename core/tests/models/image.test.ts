import {Book} from '../../models/book'
import {bookFactory} from '../factories/book.factory'
import {describe, expect, test} from 'vitest'
import {imageServerFactory} from '../factories/image.factory'
import {imageServerToImage} from '@/client/src'

describe('Image', () => {
  test('imageServerToImage', async () => {
    const image = imageServerFactory()
    expect(imageServerToImage(image)).toStrictEqual({
      handle: image.handle,
      url: image.url,
      width: image.width,
      height: image.height,
      rotation: image.orientation,
      captureTime: image.taken_at,
      cameraMake: image.camera_make,
      cameraModel: image.camera,
      filename: image.filename
    })
  })
})
