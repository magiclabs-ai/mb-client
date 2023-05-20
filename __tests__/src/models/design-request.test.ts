import {DesignRequest, DesignRequestEvent, DesignRequestProps} from '../../../src/models/design-request'
import {Image, ImageServer, Images} from '../../../src/models/design-request/image'
import {MagicBookClient} from '../../../src'
import {
  WebSocketMock,
  axiosPost,
  mockCreateBook,
  mockGetDesignOptions,
  mockRetrieveBook,
  mockRetrieveGalleon
} from '../../mocks/setup'
import {beforeEach, describe, expect, test, vi} from 'vitest'
import {bookFactory} from '../../factories/book.factory'
import {
  bookSizes,
  coverTypes,
  embellishmentLevels,
  imageDensities,
  imageFilterings,
  occasions,
  pageTypes,
  styles,
  textStickerLevels
} from '../../../src/data/design-request'
import {designOptionsServerFactory} from '../../factories/design-options.factory'
import {faker} from '@faker-js/faker'
import {galleonFactory} from '../../factories/galleon.factory'
import {snakeCaseObjectKeysToCamelCase} from '@/utils/toolbox'


describe('Design Request', async () => {
  let designRequest: DesignRequest

  beforeEach(async () => {
    const client = new MagicBookClient('123')
    const designRequestProps: DesignRequestProps = {
      occasion: 'birthday',
      style: 5274,
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
      occasion: occasions[0],
      style: parseInt(Object.keys(styles)[0]),
      bookSize: bookSizes[0],
      coverType: coverTypes[0],
      pageType: pageTypes[0],
      imageDensity: imageDensities[0],
      imageFiltering: imageFilterings[0],
      embellishmentLevel: embellishmentLevels[0],
      textStickerLevel: textStickerLevels[0],
      images: new Images(parentId)
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
    expect(designRequestJSON.title).toBe(designRequest.title)
  })
  test('getOptions', async () => {
    const designOptions = designOptionsServerFactory()
    mockGetDesignOptions.mockResolvedValue(designOptions)
    const designRequestOptions = await designRequest.getOptions(faker.datatype.number({min: 20, max: 200}))
    // OR
    await designRequest.getOptions()
    expect(designRequestOptions).toBe(snakeCaseObjectKeysToCamelCase(designOptions))
  })
  test('submitDesignRequest', async () => {
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent')
    const ws = vi.spyOn(window, 'WebSocket').mockImplementation((value) => (new WebSocketMock(value) as WebSocket))
    const wsClose = vi.spyOn(WebSocketMock.prototype, 'close')
    mockRetrieveBook.mockResolvedValue(bookFactory({state: 'new'}))
    const submitDesignRequest = await designRequest.submit({
      imageDensity: 'high',
      embellishmentLevel: 'few',
      textStickerLevel: 'few'
    })
    expect(ws).toHaveBeenCalledWith(`${import.meta.env.VITE_WEBSOCKET_HOST}/?book_id=${designRequest.parentId}`)
    expect(submitDesignRequest).toStrictEqual(designRequest)
    ws.mock.results[0].value.onmessage({data: JSON.stringify({state: 'new'})})
    expect(dispatchEventSpy.mock.calls.length).toBe(0)
    ws.mock.results[0].value.onmessage({data: JSON.stringify({state: 'submitted'})})
    const submittedEvent = dispatchEventSpy.mock.calls[0][0] as DesignRequestEvent
    expect(submittedEvent.type).toBe('MagicBook.designRequestUpdated')
    expect(submittedEvent['detail']['state']).toBe('submitted')
    expect(dispatchEventSpy.mock.calls.length).toBe(1)
    expect(wsClose).not.toHaveBeenCalled()
    ws.mock.results[0].value.onmessage({data: JSON.stringify({state: 'error'})})
    expect(wsClose).toHaveBeenCalled()
    const errorEvent = dispatchEventSpy.mock.calls[1][0] as DesignRequestEvent
    expect(errorEvent.type).toBe('MagicBook.designRequestUpdated')
    expect(errorEvent['detail']['state']).toBe('error')
    expect(dispatchEventSpy.mock.calls.length).toBe(2)
  })
})
