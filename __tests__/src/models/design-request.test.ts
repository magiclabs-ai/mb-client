import {Image} from '../../../src/models/image'
import {MagicBookClient} from '../../../src/index'
import {describe, expect, test} from 'vitest'

describe('Design Request', async () => {
  const client = new MagicBookClient('123')
  const InitDesignRequest = {
    pages: 50,
    occasion: 'Birthday',
    style: 'Cartoon',
    bookFormat: 'Hardcover',
    coverType: 'Matte',
    pageType: 'Glossy'
  }
  const designRequest = await client.createDesignRequest(InitDesignRequest)

  test('addImage', async () => {
    const image: Image = {
      batchNumber: 0,
      captureTime: '2021-05-12T18:30:00.000Z',
      filename: 'test.jpg',
      getThumbnailUrlPromise: Promise.resolve(''),
      height: 100,
      item: {},
      largeThumbnailUrl: '',
      largeThumbnailUrlEffects: '',
      smallThumbnailUrl: '',
      smallThumbnailUrlEffects: '',
      title: 'test',
      type: 'image/jpeg',
      uploadTime: '2021-05-12T18:30:00.000Z',
      width: 100,
      xid: '123'
    }
    expect(await designRequest.addImage(image)).toStrictEqual(image)
  })
  test('getNautilusJSON', async () => {
    expect(await designRequest.getNautilusJSON()).toBe(`getNautilusJSON for ${designRequest.id}`)
  })
  test('submitDesignRequest', async () => {
    const submitDesignRequest = await designRequest.submitDesignRequest({
      imageDensity: 'High',
      embellishmentLevel: 'Medium',
      textStickerLevel: 'Low'
    })
    expect(submitDesignRequest).toStrictEqual(designRequest)
  })
})
