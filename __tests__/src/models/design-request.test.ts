import {DesignRequestProps} from '../../../src/models/design-request'
import {Image} from '../../../src/models/image'
import {MagicBookClient} from '../../../src/index'
import {describe, expect, test, vi} from 'vitest'
import {nautilusJSON} from '../../../src/data/nautilus'

describe('Design Request', async () => {
  const client = new MagicBookClient('123')
  const designRequestProps: DesignRequestProps = {
    occasion: 'Birthday',
    style: 'Cartoon',
    bookFormat: 'Hardcover',
    coverType: 'Matte',
    pageType: 'Glossy',
    title: 'My Book'
  }
  const designRequest = await client.createDesignRequest(designRequestProps)

  test('addImage', async () => {
    const image: Image = {
      id: 'imageId',
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
    expect(nautilusJSON).toBe(nautilusJSON)
  })
  test('submitDesignRequest', async () => {
    const submitDesignRequest = await designRequest.submit({
      imageDensity: 'High',
      embellishmentLevel: 'Medium',
      textStickerLevel: 'Low'
    })
    expect(submitDesignRequest).toStrictEqual(designRequest)
  })
  test('fakeProgress', async () => {
    vi.useFakeTimers()
    await designRequest.submit({
      imageDensity: 'High',
      embellishmentLevel: 'Medium',
      textStickerLevel: 'Low'
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
