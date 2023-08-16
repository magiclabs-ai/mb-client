import {Book, BookDesignRequestProps} from '@/core/models/book'
import {
  State,
  Style
} from '@/core/models/design-request'
import {
  bookSizes,
  coverTypes,
  embellishmentLevels,
  imageDensities,
  imageFilteringLevels,
  occasions,
  pageTypes,
  states,
  styles,
  textStickerLevels
} from '@/core/data/design-request'
import {faker} from '@faker-js/faker'

export type BookFactoryProps = {
  id?: string
  state?: State
  title?: string
  guid?: string,
  design_request?: BookDesignRequestProps
}

export function bookFactory(props?: BookFactoryProps) {
  return new Book({
    id: props?.id || faker.string.uuid(),
    state: props?.state || faker.helpers.arrayElement(states),
    title: props?.title || faker.lorem.words(3),
    guid:  props?.guid || faker.string.uuid(),
    design_request: {
      occasion: props?.design_request?.occasion || faker.helpers.arrayElement(occasions),
      style: props?.design_request?.style ||
       styles[parseInt(faker.helpers.arrayElement(Object.keys(styles))) as Style].slug,
      book_size: props?.design_request?.book_size || faker.helpers.arrayElement(bookSizes),
      cover_type: props?.design_request?.cover_type || faker.helpers.arrayElement(coverTypes),
      page_type: props?.design_request?.page_type || faker.helpers.arrayElement(pageTypes),
      image_density: props?.design_request?.image_density || faker.helpers.arrayElement(imageDensities),
      image_filtering_level: props?.design_request?.image_filtering_level 
      || faker.helpers.arrayElement(imageFilteringLevels),
      embellishment_level: props?.design_request?.embellishment_level 
      || faker.helpers.arrayElement(embellishmentLevels),
      text_sticker_level: props?.design_request?.text_sticker_level || faker.helpers.arrayElement(textStickerLevels)
    }
  })
}
