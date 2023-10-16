import {
  BookSize,
  CoverType,
  EmbellishmentLevel,
  ImageDensity,
  ImageFilteringLevel,
  Occasion,
  PageType,
  State,
  TextStickerLevel
} from './design-request'
import {
  bookSizes,
  coverTypes,
  embellishmentLevels,
  imageDensities,
  imageFilteringLevels,
  occasions,
  pageTypes,
  states,
  textStickerLevels
} from '../data/design-request'
import {getStyleIdBySlug, snakeCaseObjectKeysToCamelCase} from '../utils/toolbox'
import {z} from 'zod'

export type BookReport = {
  error: 'timeout'|'design'
  step: string
}

export type BookDesignRequestProps = {
  occasion: Occasion
  style: string
  book_size: BookSize
  cover_type: CoverType
  page_type: PageType
  image_density: ImageDensity
  image_filtering_level: ImageFilteringLevel
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
  image_filtering_level: ImageFilteringLevel
  embellishment_level: EmbellishmentLevel
  text_sticker_level: TextStickerLevel

  constructor(props: BookDesignRequestProps) {
    this.occasion = props.occasion
    this.style = props.style
    this.book_size = props.book_size
    this.cover_type = props.cover_type
    this.page_type = props.page_type
    this.image_density = props.image_density
    this.image_filtering_level = props.image_filtering_level
    this.embellishment_level = props.embellishment_level
    this.text_sticker_level = props.text_sticker_level
  }
}

export const bookDesignRequestSchema = z.object({
  occasion: z.enum(occasions),
  style: z.string(),
  book_size: z.enum(bookSizes),
  cover_type: z.enum(coverTypes),
  page_type: z.enum(pageTypes),
  image_density: z.enum(imageDensities),
  image_filtering_level: z.enum(imageFilteringLevels),
  embellishment_level: z.enum(embellishmentLevels),
  text_sticker_level: z.enum(textStickerLevels)
})

export const bookPropsSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  design_request: bookDesignRequestSchema,
  state: z.enum(states).optional(),
  guid: z.string().optional(),
  cancelled_at: z.string().optional(),
  mb_client_timeout: z.number().optional(),
  user_id: z.string().optional()
})
export type BookProps = z.infer<typeof bookPropsSchema>

export class Book {
  id: string
  title: string
  subtitle?: string
  design_request: BookDesignRequest
  state?: State
  guid?: string
  cancelled_at?: string
  timeout?: number
  user_id?: string

  constructor(props: BookProps) {
    this.id = props.id || ''
    this.title = props.title
    this.subtitle = props.subtitle
    this.design_request = new BookDesignRequest(props.design_request)
    this.state = props.state
    this.guid = props.guid
    this.cancelled_at = props.cancelled_at
    this.timeout = props.mb_client_timeout ? props.mb_client_timeout * 1000 : undefined // convert to ms
    this.user_id = props.user_id
  }

  toDesignRequestProps() {
    const props = {...this, ...this.design_request} as unknown as Record<string, unknown>
    props.style = getStyleIdBySlug(props.style as string)
    delete props.design_request
    return snakeCaseObjectKeysToCamelCase(props)
  }

  toBookProps(): BookProps {
    return {
      ...this,
      mb_client_timeout: this.timeout ? this.timeout / 1000 : undefined
    }
  }
}
