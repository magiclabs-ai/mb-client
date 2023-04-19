import {Book, BookDesignRequest} from '../models/book'
import {
  BookSizes,
  CoverTypes,
  EmbellishmentLevels,
  ImageDensities,
  ImageFilterings,
  Occasions,
  PageTypes,
  States,
  Styles,
  TextStickerLevels
} from '../data/design-request'
import {State} from '../models/design-request'
import {faker} from '@faker-js/faker'

export type BookFactoryProps = {
  id?: string
  state?: State
  title?: string
  design_request?: BookDesignRequest
}

export function bookFactory(props?: BookFactoryProps) {
  return new Book({
    id: props?.id || faker.datatype.uuid(),
    state: props?.state || faker.helpers.arrayElement(States),
    title: props?.title || faker.lorem.words(3),
    design_request: {
      occasion: props?.design_request?.occasion || faker.helpers.arrayElement(Occasions),
      style: props?.design_request?.style || faker.helpers.arrayElement(Styles),
      book_size: props?.design_request?.book_size || faker.helpers.arrayElement(BookSizes),
      cover_type: props?.design_request?.cover_type || faker.helpers.arrayElement(CoverTypes),
      page_type: props?.design_request?.page_type || faker.helpers.arrayElement(PageTypes),
      image_density: props?.design_request?.image_density || faker.helpers.arrayElement(ImageDensities),
      image_filtering: props?.design_request?.image_filtering || faker.helpers.arrayElement(ImageFilterings),
      embellishment_level: props?.design_request?.embellishment_level 
      || faker.helpers.arrayElement(EmbellishmentLevels),
      text_sticker_level: props?.design_request?.text_sticker_level || faker.helpers.arrayElement(TextStickerLevels)
    }
  })
}
