import {Image} from '../../../src/models/image'
import {MagicBookClient} from '../../../src/index'
import {describe, test} from 'vitest'

describe('Design Request', () => {
  test('createDesignRequest', async () => {
    const client = new MagicBookClient('123')
    const designRequest = await client.createDesignRequest({
      pages: 50,
      occasion: 'Birthday',
      style: 'Cartoon',
      bookFormat: 'Hardcover',
      coverType: 'Matte',
      pageType: 'Glossy'
    })
    
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

    await designRequest.addImage(image)
    await designRequest.getNautilusJSON()
    await designRequest.submitDesignRequest({
      imageDensity: 'High',
      embellishmentLevel: 'Medium',
      textStickerLevel: 'Low'
    })
  })
})
