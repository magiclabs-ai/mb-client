import {DesignRequestEvent, MagicBookClient, imageFactory} from '@magiclabs.ai/magicbook-client'

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
  console.log('designRequest.getOptions:', await designRequest.getOptions(3))
  console.log('designRequest.submit:', await designRequest.submit({
    imageDensity: 'high',
    embellishmentLevel: 'few',
    textStickerLevel: 'none'
  }))
  console.log('designRequest.getJSON:', await designRequest.getJSON())
})()
