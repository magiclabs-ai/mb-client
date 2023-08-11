import {
  DesignRequest,
  DesignRequestEvent,
  DesignRequestProps
} from '@/core/models/design-request'
import {Image, ImageServer, Images} from '@/core/models/design-request/image'
import {MagicBookClient} from '@/core/models/client'
import {SpyInstance, beforeEach, describe, expect, test, vi} from 'vitest'
import {WebSocketMock} from '@/core/tests/mocks/websocket'
import {bookFactory} from '@/core/tests/factories/book.factory'
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
} from '@/core/data/design-request'
import {designOptionsServerFactory} from '@/core/tests/factories/design-options.factory'
import {faker} from '@faker-js/faker'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {galleonFactory} from '@/core/tests/factories/galleon.factory'
import {snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'

describe('Design Request', async () => {
  let designRequest: DesignRequest
  let ws: SpyInstance<[url: string | URL, protocols?: string | string[] | undefined], WebSocket>
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
    fetchMocker.mockResponse(JSON.stringify(bookFactory()))
    ws = vi.spyOn(window, 'WebSocket').mockImplementation((value) => (new WebSocketMock(value) as unknown as WebSocket))
    designRequest = await client.createDesignRequest(designRequestProps)
  })

  test('Design Request default values', async () => {
    const parentId = faker.string.uuid()
    const designRequest = new DesignRequest(parentId, client)
    expect(designRequest).toEqual({
      client: client,
      webSocket: new WebSocket(`${webSocketHost}/?book_id=${parentId}`),
      parentId,
      title: '',
      state: 'new',
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
    })
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
    fetchMocker.mockResponse(JSON.stringify(new ImageServer(image)))
    expect(await designRequest.images.add(image)).toStrictEqual(1)
  })

  test('getJSON', async () => {
    const galleon = galleonFactory({title: designRequest.title})
    fetchMocker.mockResponse(JSON.stringify(galleon))
    const designRequestJSON = await designRequest.getJSON()
    expect(designRequestJSON.title).toStrictEqual(designRequest.title)
  })

  test('getOptions', async () => {
    const designOptions = designOptionsServerFactory()
    fetchMocker.mockResponse(JSON.stringify(designOptions))
    const designRequestOptions = await designRequest.getOptions(faker.number.int({min: 20, max: 200}))
    // OR
    await designRequest.getOptions()
    expect(designRequestOptions).toStrictEqual(snakeCaseObjectKeysToCamelCase(designOptions))
  })

  test('submitDesignRequest', async () => {
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent')
    const wsClose = vi.spyOn(WebSocketMock.prototype, 'close')
    fetchMocker.mockResponse(JSON.stringify(bookFactory()))
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

  test('submitDesignRequest with error', async () => {
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent')
    vi.useFakeTimers()
    fetchMocker.mockResponse(JSON.stringify(bookFactory({state: 'submitted'})))
    const submitDesignRequest = await designRequest.submit({
      imageDensity: 'high',
      embellishmentLevel: 'few',
      textStickerLevel: 'few'
    })
    ws.mock.results[0].value.onmessage({data: JSON.stringify({state: 'submitted'})})
    expect(submitDesignRequest).toStrictEqual(designRequest)
    vi.advanceTimersToNextTimer()
    const embellishingEvent = dispatchEventSpy.mock.calls[1][0] as DesignRequestEvent
    expect(embellishingEvent['detail']['state']).toStrictEqual('error')
  })
  
  test('setGuid', async () => {
    fetchMocker.mockResponse(JSON.stringify(bookFactory()))
    expect(await designRequest.setGuid(faker.string.uuid())).toStrictEqual(designRequest.guid)
  })
  test('cancel', async () => {
    fetchMocker.mockResponse(JSON.stringify(bookFactory({state: 'cancelled'})))
    await designRequest.cancel()
    expect(designRequest.state).toStrictEqual('cancelled')
  })
})
