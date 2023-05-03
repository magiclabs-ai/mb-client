import {Book, BookDesignRequestProps} from '../../src/models/book'
import {State} from '../../src/models/design-request'
import {
  bookSizes,
  coverTypes,
  embellishmentLevels,
  imageDensities,
  imageFilterings,
  occasions,
  pageTypes,
  states,
  styles,
  textStickerLevels
} from '../../src/data/design-request'
import {faker} from '@faker-js/faker'

export type BookFactoryProps = {
  id?: string
  state?: State
  title?: string
  design_request?: BookDesignRequestProps
}

export function bookFactory(props?: BookFactoryProps) {
  return new Book({
    id: props?.id || faker.datatype.uuid(),
    state: props?.state || faker.helpers.arrayElement(states),
    title: props?.title || faker.lorem.words(3),
    design_request: {
      occasion: props?.design_request?.occasion || faker.helpers.arrayElement(occasions),
      style: props?.design_request?.style || styles[parseInt(faker.helpers.arrayElement(Object.keys(styles)))].slug,
      book_size: props?.design_request?.book_size || faker.helpers.arrayElement(bookSizes),
      cover_type: props?.design_request?.cover_type || faker.helpers.arrayElement(coverTypes),
      page_type: props?.design_request?.page_type || faker.helpers.arrayElement(pageTypes),
      image_density: props?.design_request?.image_density || faker.helpers.arrayElement(imageDensities),
      image_filtering: props?.design_request?.image_filtering || faker.helpers.arrayElement(imageFilterings),
      embellishment_level: props?.design_request?.embellishment_level 
      || faker.helpers.arrayElement(embellishmentLevels),
      text_sticker_level: props?.design_request?.text_sticker_level || faker.helpers.arrayElement(textStickerLevels)
    }
  })
}
