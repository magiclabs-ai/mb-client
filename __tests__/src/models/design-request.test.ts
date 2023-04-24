import {
  BookSizes,
  CoverTypes,
  EmbellishmentLevels,
  ImageDensities,
  ImageFilterings,
  Occasions,
  PageTypes,
  Styles,
  TextStickerLevels
} from '../../../src/data/design-request'
import {DesignRequest, DesignRequestEvent, DesignRequestProps} from '../../../src/models/design-request'
import {Image, Images} from '../../../src/models/design-request/image'
import {MagicBookClient} from '../../../src'
import {beforeEach, describe, expect, test, vi} from 'vitest'
import {bookFactory} from '../../factories/book.factory'
import {designOptionsServerFactory} from '../../factories/design-options.factory'
import {faker} from '@faker-js/faker'
import {galleonJSON} from '../../../src/data/galleon'
import {mockCreateBook, mockGetDesignOptions, mockRetrieveBook} from '../../mocks/setup'
import {snakeCaseObjectKeysToCamelCase} from '@/utils/toolbox'


describe('Design Request', async () => {
  let designRequest: DesignRequest

  beforeEach(async () => {
    const client = new MagicBookClient('123')
    const designRequestProps: DesignRequestProps = {
      occasion: 'birthday',
      style: '2020-what-a-year-sfly',
      bookSize: '10x10',
      coverType: 'hc',
      pageType: 'dl',
      title: 'My Book'
    }
    mockCreateBook.mockResolvedValue({data: bookFactory()})
    designRequest = await client.createDesignRequest(designRequestProps)
  })

  test('Design Request default values', async () => {
    const parentId = 'id'
    expect(JSON.stringify(new DesignRequest(parentId))).toStrictEqual(JSON.stringify({
      parentId,
      title: '',
      occasion: Occasions[0],
      style: Styles[0],
      bookSize: BookSizes[0],
      coverType: CoverTypes[0],
      pageType: PageTypes[0],
      imageDensity: ImageDensities[0],
      imageFiltering: ImageFilterings[0],
      embellishmentLevel: EmbellishmentLevels[0],
      textStickerLevel: TextStickerLevels[0],
      images: new Images(parentId)
    }))
  })
  test('addImage', async () => {
    const image: Image = {
      handle: 'imageId',
      url: 'imageURL',
      width: 500,
      height: 500,
      rotation: 0,
      captureTime: '2021-01-01T00:00:00.000Z',
      cameraMake: 'cameraMake', 
      cameraModel: 'cameraModel',
      filename: 'filename'
    }
    expect(await designRequest.images.add(image)).toStrictEqual(1)
  })
  test('getJSON', async () => {
    const nautilus = await designRequest.getJSON()
    expect(nautilus.title).toBe(designRequest.title)
    expect(nautilus).toBe(galleonJSON)
  })
  test('getOptions', async () => {
    const designOptions = designOptionsServerFactory()
    mockGetDesignOptions.mockResolvedValue(designOptions)
    const designRequestOptions = await designRequest.getOptions(faker.datatype.number({min: 20, max: 200}))
    expect(designRequestOptions).toBe(snakeCaseObjectKeysToCamelCase(designOptions))
  })
  test('submitDesignRequest', async () => {
    const submitDesignRequest = await designRequest.submit({
      imageDensity: 'high',
      embellishmentLevel: 'few',
      textStickerLevel: 'few'
    })
    expect(submitDesignRequest).toStrictEqual(designRequest)
  })
  test('Design Request Progression', async () => {
    vi.useFakeTimers()
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent')
    mockRetrieveBook.mockResolvedValue(bookFactory({state: 'new'}))
    await designRequest.submit()
    await vi.advanceTimersToNextTimerAsync()
    await vi.advanceTimersToNextTimerAsync()
    const newCall = dispatchEventSpy.mock.calls[0][0] as DesignRequestEvent
    expect(dispatchEventSpy.mock.calls.length).toBe(1)
    expect(newCall.type).toBe('MagicBook.designRequestUpdated')
    expect(newCall['detail']['state']).toBe('new')
    mockRetrieveBook.mockResolvedValue(bookFactory({state: 'designing'}))
    await vi.advanceTimersToNextTimerAsync()
    const designingCall = dispatchEventSpy.mock.calls[1][0] as DesignRequestEvent
    expect(designingCall.type).toBe('MagicBook.designRequestUpdated')
    expect(designingCall['detail']['state']).toBe('designing')
    mockRetrieveBook.mockResolvedValue(bookFactory({state: 'ready'}))
    await vi.advanceTimersToNextTimerAsync()
    const ReadyCall = dispatchEventSpy.mock.calls[2][0] as DesignRequestEvent
    expect(ReadyCall.type).toBe('MagicBook.designRequestUpdated')
    expect(ReadyCall['detail']['state']).toBe('ready')
    await vi.advanceTimersToNextTimerAsync()
    expect(dispatchEventSpy.mock.calls.length).toBe(3)
  })
})
