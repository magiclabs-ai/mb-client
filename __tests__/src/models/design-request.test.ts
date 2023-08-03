import {DesignRequest, DesignRequestEvent, DesignRequestProps} from '../../../src/models/design-request'
import {Image, ImageServer, Images} from '../../../src/models/design-request/image'
import {MagicBookClient} from '../../../src'
import {WebSocketMock} from '../../mocks/websocket'
import {axiosPost} from '../../mocks/axios'
import {beforeEach, describe, expect, test, vi} from 'vitest'
import {bookFactory} from '../../factories/book.factory'
import {
  bookSizes,
  coverTypes,
  embellishmentLevels,
  imageDensities,
  imageFilteringLevels,
  occasions,
  pageTypes,
  styles,
  textStickerLevels
} from '../../../src/data/design-request'
import {designOptionsServerFactory} from '../../factories/design-options.factory'
import {faker} from '@faker-js/faker'
import {galleonFactory} from '../../factories/galleon.factory'
import {mockCreateBook, mockRetrieveBook, mockRetrieveGalleon, mockUpdateBook} from '../../mocks/books'
import {mockGetDesignOptions} from '../../mocks/design-options'
import {snakeCaseObjectKeysToCamelCase} from '@/utils/toolbox'

describe('Design Request', async () => {
  let designRequest: DesignRequest
  const webSocketHost = 'wss://api.magicbook.mock'
  const client = new MagicBookClient('123', 'https://api.magicbook.mock', webSocketHost)

  beforeEach(async () => {
    const designRequestProps: DesignRequestProps = {
      occasion: 'birthday',
      style: 5274,
      bookSize: '10x10',
      coverType: 'hc',
      pageType: 'dl',
      title: 'My Book'
    }
    mockCreateBook.mockResolvedValue(bookFactory())
    designRequest = await client.createDesignRequest(designRequestProps)
  })

  test('Design Request default values', async () => {
    const parentId = faker.string.uuid()
    expect(JSON.stringify(new DesignRequest(parentId, client))).toStrictEqual(JSON.stringify({
      client,
      parentId,
      title: '',
      occasion: occasions[0],
      style: parseInt(Object.keys(styles)[0]),
      bookSize: bookSizes[0],
      coverType: coverTypes[0],
      pageType: pageTypes[0],
      imageDensity: imageDensities[0],
      imageFilteringLevel: imageFilteringLevels[0],
      embellishmentLevel: embellishmentLevels[0],
      textStickerLevel: textStickerLevels[0],
      images: new Images(client, parentId)
    }))
  })
  test('addImage', async () => {
    const image: Image = {
      handle: 'imageId',
      url: 'imageURL',
      width: 1000,
      height: 500,
      rotation: 0,
      captureTime: '2021-01-01T00:00:00.000Z',
      cameraMake: 'cameraMake', 
      cameraModel: 'cameraModel',
      filename: 'filename'
    }
    axiosPost.mockResolvedValue({data: new ImageServer(image)})
    expect(await designRequest.images.add(image)).toStrictEqual(1)
  })
  test('getJSON', async () => {
    const galleon = galleonFactory({title: designRequest.title})
    mockRetrieveGalleon.mockResolvedValue(galleon)
    const designRequestJSON = await designRequest.getJSON()
    expect(designRequestJSON.title).toStrictEqual(designRequest.title)
  })
  test('getOptions', async () => {
    const designOptions = designOptionsServerFactory()
    mockGetDesignOptions.mockResolvedValue(designOptions)
    const designRequestOptions = await designRequest.getOptions(faker.number.int({min: 20, max: 200}))
    // OR
    await designRequest.getOptions()
    expect(designRequestOptions).toStrictEqual(snakeCaseObjectKeysToCamelCase(designOptions))
  })
  test('submitDesignRequest', async () => {
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent')
    const ws = vi.spyOn(window, 'WebSocket').mockImplementation((value) => (new WebSocketMock(value) as WebSocket))
    const wsClose = vi.spyOn(WebSocketMock.prototype, 'close')
    mockUpdateBook.mockResolvedValue(bookFactory())
    const submitDesignRequest = await designRequest.submit({
      imageDensity: 'high',
      embellishmentLevel: 'few',
      textStickerLevel: 'few'
    })
    expect(ws).toHaveBeenCalledWith(`${webSocketHost}/?book_id=${designRequest.parentId}`)
    expect(submitDesignRequest).toStrictEqual(designRequest)
    const submittedDetail =  {
      state: 'submitted',
      slug: 'submitted',
      progress: 0,
      message: 'Reviewing design preferences'
    }
    ws.mock.results[0].value.onmessage({data: JSON.stringify(submittedDetail)})
    expect(dispatchEventSpy.mock.calls.length).toStrictEqual(1)
    expect(ws).toHaveBeenCalledWith(`${webSocketHost}/?book_id=${designRequest.parentId}`)
    expect(submitDesignRequest).toStrictEqual(designRequest)
    ws.mock.results[0].value.onmessage({data: JSON.stringify(submittedDetail)})
    expect(dispatchEventSpy.mock.calls.length).toStrictEqual(1)
    const embellishingDetail = {
      state: 'embellishing',
      slug: 'embellishing',
      progress: 50,
      message: 'Placing embellishments'
    }
    ws.mock.results[0].value.onmessage({data: JSON.stringify(embellishingDetail)})
    const embellishingEvent = dispatchEventSpy.mock.calls[1][0] as DesignRequestEvent
    expect(embellishingEvent.type).toStrictEqual('MagicBook.designRequestUpdated')
    expect(embellishingEvent['detail']).toStrictEqual(embellishingDetail)
    expect(dispatchEventSpy.mock.calls.length).toStrictEqual(2)
    expect(wsClose).not.toHaveBeenCalled()
    const readyDetail = {
      state: 'ready',
      slug: 'ready',
      progress: 100,
      message: 'Design is ready'
    }
    ws.mock.results[0].value.onmessage({data: JSON.stringify(readyDetail)})
    expect(wsClose).toHaveBeenCalled()
    const readyEvent = dispatchEventSpy.mock.calls[2][0] as DesignRequestEvent
    expect(readyEvent.type).toStrictEqual('MagicBook.designRequestUpdated')
    expect(readyEvent['detail']).toStrictEqual(readyDetail)
    expect(dispatchEventSpy.mock.calls.length).toStrictEqual(3)
  })
  test.fails('submitDesignRequest with error', async () => {
    vi.useFakeTimers()
    mockRetrieveBook.mockResolvedValue(bookFactory({state: 'submitted'}))
    const submitDesignRequest = await designRequest.submit({
      imageDensity: 'high',
      embellishmentLevel: 'few',
      textStickerLevel: 'few'
    })
    expect(submitDesignRequest).toStrictEqual(designRequest)
    vi.advanceTimersToNextTimer()
    expect(submitDesignRequest).toThrowError('Something went wrong. Please try again.')
  })
  test('setGuid', async () => {
    mockUpdateBook.mockResolvedValue({data: bookFactory()})
    expect(await designRequest.setGuid(faker.string.uuid())).toStrictEqual(designRequest.guid)
  })
})
