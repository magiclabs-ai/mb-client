import {
  Image,
  MagicBookClient
} from '@magiclabs.ai/magicbook-client'
import {program} from 'commander'
import {faker} from '@faker-js/faker'

const book = program.command('book')
book.command('new')
  .action(async () => {
    const client = new MagicBookClient('862d2288-8dcb-451a-80c4-7cc66795d24e')
    // console.log(client)
    const designRequest = await client.createDesignRequest({
      occasion: 'default',
      style: 5144,
      bookSize: '10x10',
      coverType: 'hc',
      pageType: 'sp'
    })    
    designRequest.title = 'My Book'
    console.log('designRequest:', designRequest)
    const imagesLength = 25
    await Promise.all(Array.from(Array(imagesLength).keys()).map(async () => {
      const width = 1000
      const height = faker.number.int({min: 200, max: 500})
      const image: Image = {
        handle: faker.string.uuid(),
        url: faker.image.url({width, height}),
        width,
        height,
        rotation: 0,
        captureTime: faker.date.past().toISOString(),
        cameraMake: '',
        cameraModel: 'Sony A7R IV',
        filename: faker.system.commonFileName('jpg')
      }
      await designRequest.images.add(image)
      console.log('designRequest.images.add:', image)
    }))
    console.log('designRequest.images.length:', designRequest.images.length)
    console.log('designRequest.getOptions:', await designRequest.getOptions())
    console.log('designRequest.submit:', await designRequest.submit({
      imageDensity: 'high',
      embellishmentLevel: 'few',
      textStickerLevel: 'none'
    }))
    console.log('designRequest.setGuid:', await designRequest.setGuid(faker.string.uuid()))
  })
  
book.command('get')
book.command('update')
book.command('delete')
book.command('galleon')
