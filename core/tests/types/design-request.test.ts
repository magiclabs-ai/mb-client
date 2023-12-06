import {
  DesignRequest,
  DesignRequestEvent,
  DesignRequestEventDetail,
  DesignRequestProps
} from '@/core/types/design-request'
import {Image, ImageServer, Images} from '@/core/types/design-request/image'
import {MagicBookClient} from '@/core/types/client'
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
  textStickerLevels,
  timeoutEventDetail
} from '@/core/data/design-request'
import {designOptionsServerFactory} from '@/core/tests/factories/design-options.factory'
import {eventFactory} from '../factories/event.factory'
import {faker} from '@faker-js/faker'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {galleonFactory} from '@/core/tests/factories/galleon.factory'
import {snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'

describe('Design Request', async () => {
  let ws: SpyInstance<[url: string | URL, protocols?: string | string[] | undefined], WebSocket>
  const webSocketHost = 'wss://api.magicbook.mock'
  const client = new MagicBookClient('123', 'https://api.magicbook.mock', webSocketHost)

  beforeEach(async () => {
    ws = vi.spyOn(window, 'WebSocket').mockImplementation((value) => (new WebSocketMock(value) as unknown as WebSocket))
  })

  async function createDesignRequest(props?: Partial<DesignRequestProps>) {
    const designRequestProps: DesignRequestProps = {
      occasion: 'birthday',
      style: 5274,
      bookSize: '10x10',
      coverType: 'hc',
      pageType: 'dl',
      title: 'My Book',
      userId: 'userId'
    }
    fetchMocker.mockResponse(JSON.stringify(bookFactory()))
    return await client.createDesignRequest({...designRequestProps, ...props})
  }

  test('Design Request default values', async () => {
    const parentId = faker.string.uuid()
    const designRequest = new DesignRequest(parentId, client)
    expect(designRequest).toEqual({
      client: client,
      webSocket: undefined,
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
      images: new Images(client, parentId, 'new')
    })
  })

  test('addImage', async () => {
    const designRequest = await createDesignRequest()
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

  test.fails('addImage when design request is creating', async () => {
    const designRequest = await createDesignRequest({state: 'layouting'})
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
    expect(await designRequest.images.add(image)).toThrowError(
      'You need to wait for the current design request to be ready before adding new images.'
    )
  })

  test.fails('getJSON while dr is not ready', async () => {
    const designRequest = await createDesignRequest({state: 'new'})
    const designRequestJSON = await designRequest.getJSON()
    expect(designRequestJSON).toThrowError('Design Request is not ready')
  })

  test('getJSON', async () => {
    const designRequest = await createDesignRequest({state: 'ready'})
    const galleon = galleonFactory({title: designRequest.title})
    fetchMocker.mockResponse(JSON.stringify(galleon))
    const designRequestJSON = await designRequest.getJSON()
    expect(designRequestJSON.title).toStrictEqual(designRequest.title)
  })

  test('getOptions', async () => {
    const designRequest = await createDesignRequest()
    const designOptions = designOptionsServerFactory()
    fetchMocker.mockResponse(JSON.stringify(designOptions))
    const designRequestOptions = await designRequest.getOptions(faker.number.int({min: 20, max: 200}))
    // OR
    await designRequest.getOptions()
    expect(designRequestOptions).toStrictEqual(snakeCaseObjectKeysToCamelCase(designOptions))
  })

  test.fails('submitDesignRequest while dr cannot be resubmitted', async () => {
    const designRequest = await createDesignRequest({state: 'submitted'})
    const designRequestJSON = await designRequest.submit()
    expect(designRequestJSON)
      .toThrowError('You need to wait for the current design request to be ready before submitting a new one')
  })

  test('submitDesignRequest', async () => {
    const designRequest = await createDesignRequest({state: 'new'})
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent')
    const wsClose = vi.spyOn(WebSocketMock.prototype, 'close')
    fetchMocker.mockResponses(
      [JSON.stringify(bookFactory().toBookProps()), {status: 200}],
      [JSON.stringify(bookFactory().toBookProps()), {status: 200}]
    )
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
    ws.mock.results[0].value.onmessage({data: JSON.stringify(embellishingDetail)})
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

  async function eventHandlerTester(expectedState: string, eventDetail: DesignRequestEventDetail) {
    const designRequest = await createDesignRequest({state: 'submitted'})
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent')
    await designRequest.eventHandler(eventDetail)
    const event = dispatchEventSpy.mock.calls[0][0] as DesignRequestEvent
    expect(event['detail']['slug']).toStrictEqual(expectedState)
    expect(designRequest.state).toStrictEqual(expectedState)
  }

  test('eventHandler with timeout event', async () => {
    await eventHandlerTester('timeout', timeoutEventDetail)
  })
  
  test('eventHandler with error event', async () => {
    const expectedState = 'error'
    const errorEventDetail = {
      state: expectedState,
      slug: expectedState,
      progress: 0,
      message: 'Design failed'
    }
    await eventHandlerTester(expectedState, errorEventDetail)
  })

  test('timeoutHandler', async () => {
    const designRequest = await createDesignRequest({state: 'submitted'})
    designRequest.timeout = 60000
    const spy = vi.spyOn(designRequest, 'eventHandler')
    vi.useFakeTimers()
    designRequest.timeoutHandler()
    vi.advanceTimersToNextTimer()
    expect(spy).toHaveBeenCalledWith(timeoutEventDetail)
  })

  test.fails('timeoutHandler to throw error', async () => {
    const designRequest = await createDesignRequest({state: 'submitted'})  
    expect(designRequest.timeoutHandler()).toThrowError('Design request timeout not set')
  })
  
  test('setGuid', async () => {
    const designRequest = await createDesignRequest({state: 'ready'})
    fetchMocker.mockResponse(JSON.stringify(bookFactory()))
    expect(await designRequest.setGuid(faker.string.uuid())).toStrictEqual(designRequest.guid)
  })
  
  test.fails('setGuid before dr is submitted', async () => {
    const designRequest = await createDesignRequest({state: 'new'})
    await designRequest.setGuid(faker.string.uuid())
    expect(designRequest).toThrowError('Design request not submitted')
  })

  test('getProgress without ws', async () => {
    const designRequest = await createDesignRequest({state: 'ready'})
    designRequest.webSocket = undefined
    await designRequest.getProgress()
  })

  test('logEvent', async () => {
    const fakeEvent = eventFactory({name: 'book.viewed'})
    const designRequest = await createDesignRequest({state: 'ready'})
    fetchMocker.mockResponse(JSON.stringify(fakeEvent))
    expect(await designRequest.logEvent(fakeEvent.name, fakeEvent.context)).toStrictEqual(fakeEvent)
  })

  test.fails('cancel when dr is already cancelled', async () => {
    const designRequest = await createDesignRequest({state: 'cancelled'})
    await designRequest.cancel()
    expect(designRequest).toThrowError('Design Request is already cancelled')
  })
  
  test.fails('cancel when dr is already ready', async () => {
    const designRequest = await createDesignRequest({state: 'ready'})
    await designRequest.cancel()
    expect(designRequest).toThrowError('Design Request is already ready')
  })
  
  test.fails('cancel when dr is already new', async () => {
    const designRequest = await createDesignRequest({state: 'new'})
    await designRequest.cancel()
    expect(designRequest).toThrowError('Design request not submitted')
  })
 
  test('cancel', async () => {
    const designRequest = await createDesignRequest({state: 'submitted'})
    fetchMocker.mockResponse(JSON.stringify(bookFactory({state: 'cancelled'})))
    await designRequest.cancel()
    expect(designRequest.state).toStrictEqual('cancelled')
  })
})
