import {DesignRequestProps} from '../../../src/models/design-request'
import {Image} from '../../../src/models/image'
import {MagicBookClient} from '../../../src/index'
import {describe, expect, test, vi} from 'vitest'
import {galleonJSON} from '../../../src/data/galleon'

describe('Design Request', async () => {
  const client = new MagicBookClient('123')
  const designRequestProps: DesignRequestProps = {
    occasion: 'birthday',
    style: 'babys-first-sfly',
    bookSize: '10x10',
    coverType: 'hc',
    pageType: 'dl',
    title: 'My Book'
  }
  const designRequest = await client.createDesignRequest(designRequestProps)

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
    expect(await designRequest.images.add(image)).toStrictEqual(image)
  })
  test('getJSON', async () => {
    const nautilus = await designRequest.getJSON()
    expect(nautilus.title).toBe(designRequest.title)
    expect(galleonJSON).toBe(galleonJSON)
  })
  test('submitDesignRequest', async () => {
    const submitDesignRequest = await designRequest.submit({
      imageDensity: 'high',
      embellishmentLevel: 'few',
      textStickerLevel: 'few'
    })
    expect(submitDesignRequest).toStrictEqual(designRequest)
  })
  test('fakeProgress', async () => {
    vi.useFakeTimers()
    await designRequest.submit({
      imageDensity: 'high',
      embellishmentLevel: 'lots',
      textStickerLevel: 'none'
    })
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent')
    vi.runAllTimers()
    expect(dispatchEventSpy.mock.calls[0][0].type).toBe('Magicbook.designRequestUpdated')
    expect(dispatchEventSpy.mock.calls[0][0]['detail']['state']).toBe('new')
    expect(dispatchEventSpy.mock.calls[1][0].type).toBe('Magicbook.designRequestUpdated')
    expect(dispatchEventSpy.mock.calls[1][0]['detail']['state']).toBe('designing')
    expect(dispatchEventSpy.mock.calls[2][0].type).toBe('Magicbook.designRequestUpdated')
    expect(dispatchEventSpy.mock.calls[2][0]['detail']['state']).toBe('completed')
  })
})
