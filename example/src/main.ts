import {DesignRequestEvent, Image, MagicBookClient} from 'magicbook-client'

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

getData()
window.addEventListener('Magicbook.designRequestUpdated',
  ((designRequestEvent: DesignRequestEvent) => {
    console.log('Magicbook.designRequestUpdated', designRequestEvent.detail)
  }) as EventListener
)

async function getData() {
  const client = new MagicBookClient('YOUR_API_KEY')
  const designRequest = await client.createDesignRequest({
    pages: 10,
    occasion: 'travel',
    style: '1234',
    bookFormat: '8x8',
    coverType: 'HC',
    pageType: 'LF'
  })
  console.log('designRequest:', designRequest)
  console.log('designRequest.addImage:', await designRequest.addImage(image))
  console.log('designRequest.submitDesignRequest:', await designRequest.submitDesignRequest({
    imageDensity: 'high',
    embellishmentLevel: 'few',
    textStickerLevel: 'none'
  }))
  console.log('designRequest.getNautilusJSON:', await designRequest.getNautilusJSON())
}
