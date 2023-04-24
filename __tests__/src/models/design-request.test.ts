import {DesignRequestEvent, DesignRequestProps} from '@/models/design-request'
import {Image} from '@/models/design-request/image'
import {MagicBookClient} from '@/index'
import {describe, expect, test, vi} from 'vitest'
import {designOptions} from '@/data/design-options'
import {faker} from '@faker-js/faker'
import {galleonJSON} from '@/data/galleon'

describe('Design Request', async () => {
  const client = new MagicBookClient('123')
  const designRequestProps: DesignRequestProps = {
    occasion: 'birthday',
    style: '2020-what-a-year-sfly',
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
  test('fakeProgress', async () => {
    vi.useFakeTimers()
    await designRequest.submit({
      imageDensity: 'high',
      embellishmentLevel: 'lots',
      textStickerLevel: 'none'
    })
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent')
    vi.runAllTimers()
    const newCall = dispatchEventSpy.mock.calls[0][0] as DesignRequestEvent
    const designingCall = dispatchEventSpy.mock.calls[1][0] as DesignRequestEvent
    const completedCall = dispatchEventSpy.mock.calls[2][0] as DesignRequestEvent
    expect(newCall.type).toBe('Magicbook.designRequestUpdated')
    expect(newCall['detail']['state']).toBe('new')
    expect(designingCall.type).toBe('Magicbook.designRequestUpdated')
    expect(designingCall['detail']['state']).toBe('designing')
    expect(completedCall.type).toBe('Magicbook.designRequestUpdated')
    expect(completedCall['detail']['state']).toBe('completed')
  })
})
