import {DesignRequestEvent, DesignRequestProps} from '@/models/design-request'
import {Image} from '@/models/design-request/image'
import {MagicBookClient} from '@/index'
import {describe, expect, test, vi} from 'vitest'
import {designOptions} from '@/data/design-options'
import {faker} from '@faker-js/faker'
import {galleonJSON} from '@/data/galleon'

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
    const designRequestOptions = await designRequest.getOptions(faker.datatype.number({min: 1, max: 3}))
    expect(designRequestOptions).toBe(designOptions)
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
    await designRequest.submit()
    mockRetrieveBook.mockResolvedValue(bookFactory({state: 'new'}))
    await vi.advanceTimersToNextTimerAsync()
    await vi.advanceTimersToNextTimerAsync()
    const newCall = dispatchEventSpy.mock.calls[0][0] as DesignRequestEvent
    expect(dispatchEventSpy.mock.calls.length).toBe(1)
    expect(newCall.type).toBe('Magicbook.designRequestUpdated')
    expect(newCall['detail']['state']).toBe('new')
    mockRetrieveBook.mockResolvedValue(bookFactory({state: 'designing'}))
    await vi.advanceTimersToNextTimerAsync()
    const designingCall = dispatchEventSpy.mock.calls[1][0] as DesignRequestEvent
    expect(designingCall.type).toBe('Magicbook.designRequestUpdated')
    expect(designingCall['detail']['state']).toBe('designing')
    mockRetrieveBook.mockResolvedValue(bookFactory({state: 'completed'}))
    await vi.advanceTimersToNextTimerAsync()
    const completedCall = dispatchEventSpy.mock.calls[2][0] as DesignRequestEvent
    expect(completedCall.type).toBe('Magicbook.designRequestUpdated')
    expect(completedCall['detail']['state']).toBe('completed')
    await vi.advanceTimersToNextTimerAsync()
    expect(dispatchEventSpy.mock.calls.length).toBe(3)
  })
})
