import {DesignRequestEvent, Image, MagicBookClient} from '@magiclabs.ai/magicbook-client'

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

window.addEventListener('Magicbook.designRequestUpdated',
  ((designRequestEvent: DesignRequestEvent) => {
    console.log('Magicbook.designRequestUpdated', designRequestEvent.detail)
  }) as EventListener
)

await (async () => {
  const client = new MagicBookClient('YOUR_API_KEY')
  const designRequest = await client.createDesignRequest({
    occasion: 'travel',
    style: '2020-what-a-year-sfly',
    bookSize: '10x10',
    coverType: 'hc',
    pageType: 'sp'
  })
  designRequest.title = 'My Book'
  console.log('designRequest:', designRequest)
  console.log('designRequest.images.add:', await designRequest.images.add(image))
  console.log('designRequest.images.add:', await designRequest.images.add(image))
  console.log('designRequest.images.add:', await designRequest.images.add(image))
  console.log('designRequest.submit:', await designRequest.submit({
    imageDensity: 'high',
    embellishmentLevel: 'few',
    textStickerLevel: 'none'
  }))
  console.log('designRequest.getJSON:', await designRequest.getJSON())
})()
