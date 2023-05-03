import {
  BookSize,
  CoverType,
  EmbellishmentLevel,
  ImageDensity,
  ImageFiltering,
  Occasion,
  PageType,
  State,
  TextStickerLevel
} from './design-request'

export type BookDesignRequestProps = {
  occasion: Occasion
  style: string
  book_size: BookSize
  cover_type: CoverType
  page_type: PageType
  image_density: ImageDensity
  image_filtering: ImageFiltering
  embellishment_level: EmbellishmentLevel
  text_sticker_level: TextStickerLevel
}

export class BookDesignRequest {
  occasion: Occasion
  style: string
  book_size: BookSize
  cover_type: CoverType
  page_type: PageType
  image_density: ImageDensity
  image_filtering: ImageFiltering
  embellishment_level: EmbellishmentLevel
  text_sticker_level: TextStickerLevel

  constructor(props: BookDesignRequestProps) {
    this.occasion = props.occasion
    this.style = props.style
    this.book_size = props.book_size
    this.cover_type = props.cover_type
    this.page_type = props.page_type
    this.image_density = props.image_density
    this.image_filtering = props.image_filtering
    this.embellishment_level = props.embellishment_level
    this.text_sticker_level = props.text_sticker_level
  }
}

export type BookProps = {
  id: string
  state: State
  title: string
  design_request: BookDesignRequestProps
}

export class Book {
  id: string
  state: State
  title: string
  design_request: BookDesignRequest

  constructor(props: BookProps) {
    this.id = props.id
    this.state = props.state
    this.title = props.title
    this.design_request = new BookDesignRequest(props.design_request)
  }
}
