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

initializer()

window.addEventListener('Magicbook.designRequestUpdated',
  ((designRequestEvent: DesignRequestEvent) => {
    console.log('Magicbook.designRequestUpdated', designRequestEvent.detail)
  }) as EventListener
)

async function initializer() {
  const client = new MagicBookClient('YOUR_API_KEY')
  const designRequest = await client.createDesignRequest({
    title: 'title',
    occasion: 'travel',
    style: '1234',
    bookFormat: '8x8',
    coverType: 'HC',
    pageType: 'LF'
  })
  console.log('designRequest:', designRequest)
  console.log('designRequest.images.add:', await designRequest.images.add(image))
  console.log('designRequest.submit:', await designRequest.submit({
    imageDensity: 'high',
    embellishmentLevel: 'few',
    textStickerLevel: 'none'
  }))
  console.log('designRequest.getJSON:', await designRequest.getJSON())
}
