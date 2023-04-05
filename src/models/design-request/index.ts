import {BookCreationRequest} from '../galleon'
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
} from '@/data/design-request'
import {DesignOptions} from './design-options'
import {Images} from './image'
import {designOptions} from '@/data/design-options'
import {galleonJSON} from '@/data/galleon'

export type Occasion = typeof Occasions[number]
export type Style = typeof Styles[number]
export type BookSize = typeof BookSizes[number]
export type CoverType = typeof CoverTypes[number]
export type PageType = typeof PageTypes[number]
export type ImageDensity = typeof ImageDensities[number]
export type ImageFiltering = typeof ImageFilterings[number]
export type EmbellishmentLevel = typeof EmbellishmentLevels[number]
export type TextStickerLevel = typeof TextStickerLevels[number]

export type DesignRequestProps = {
  title?: string
  occasion?: Occasion
  style?: Style
  bookSize?: BookSize
  coverType?: CoverType
  pageType?: PageType
  imageDensity?: ImageDensity
  imageFiltering?: ImageFiltering
  embellishmentLevel?: EmbellishmentLevel
  textStickerLevel?: TextStickerLevel
}

export type State = typeof States[number]
export type DesignRequestEventDetail = {
  state: State
}
export type DesignRequestEvent = CustomEvent<DesignRequestEventDetail>

export class DesignRequest {
  id: string
  title?: string
  occasion?: Occasion
  style?: Style
  bookSize?: BookSize
  coverType?: CoverType
  pageType?: PageType
  imageDensity?: ImageDensity
  imageFiltering?: ImageFiltering
  embellishmentLevel?: EmbellishmentLevel
  textStickerLevel?: TextStickerLevel
  images: Images
  protected book: Book

  constructor(designRequestProps?: DesignRequestProps) {
    const test = {
      'state': 'new',
      'title': '',
      'design_request': {
        'occasion': '',
        'style': '',
        'book_format': '',
        'cover_type': '',
        'page_type': '',
        'image_density': '',
        'embellishment_level': '',
        'text_sticker_level': ''
      },
      'design_specs': {
        'sbitems': [],
        'image_sorting': 'datetime'
      }
    }
    this.id = '123'
    this.book = new Book(test)
    designRequestProps && Object.assign(this, designRequestProps)
    this.images = new Images()
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  async getOptions(imageCount: number) {
    return new Promise<DesignOptions>((resolve) => {
      resolve(designOptions)
    })
  }

  async submit(submitDesignRequest?: DesignRequestProps) {
    submitDesignRequest && Object.assign(this, submitDesignRequest)
    this.startFakeProgress()
    return new Promise<DesignRequest>((resolve) => {
      camelCaseObjectKeysToSnakeCase(this as Record<string, unknown>)
      resolve(this)
    })
  }

  async getJSON() {
    return new Promise<BookCreationRequest>((resolve) => {
      resolve(galleonJSON)
    })
  }

  startFakeProgress() {
    setTimeout(() => {
      const event = new CustomEvent<DesignRequestEventDetail>('Magicbook.designRequestUpdated', {
        bubbles: true,
        detail: {
          state: 'new'
        }
      })
      window.dispatchEvent(event)
    }, 2000)
    setTimeout(() => {
      const event = new CustomEvent<DesignRequestEventDetail>('Magicbook.designRequestUpdated', {
        bubbles: true,
        detail: {
          state: 'designing'
        }
      })
      window.dispatchEvent(event)
    }, 3000)
    setTimeout(() => {
      const event = new CustomEvent<DesignRequestEventDetail>('Magicbook.designRequestUpdated', {
        bubbles: true,
        detail: {
          state: 'completed'
        }
      })
      window.dispatchEvent(event)
    }, 6000)
  }
}
