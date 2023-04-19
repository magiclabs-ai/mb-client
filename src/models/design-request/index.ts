import {BookCreationRequest} from '@/models/galleon'
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
import {designRequestRefreshInterval} from '@/config'
import {designRequestToBook} from '@/utils/design-request-parser'
import {galleonJSON} from '@/data/galleon'
import {retrieveBook, updateBook} from '@/utils/engine-api/books'

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
  parentId: string
  title: string
  occasion: Occasion
  style: Style
  bookSize: BookSize
  coverType: CoverType
  pageType: PageType
  imageDensity: ImageDensity
  imageFiltering: ImageFiltering
  embellishmentLevel: EmbellishmentLevel
  textStickerLevel: TextStickerLevel
  images: Images

  constructor(parentId: string, designRequestProps?: DesignRequestProps) {
    this.parentId = parentId
    this.title = designRequestProps?.title || ''
    this.occasion = designRequestProps?.occasion || Occasions[0]
    this.style = designRequestProps?.style || Styles[0]
    this.bookSize = designRequestProps?.bookSize || BookSizes[0]
    this.coverType = designRequestProps?.coverType || CoverTypes[0]
    this.pageType = designRequestProps?.pageType || PageTypes[0]
    this.imageDensity = designRequestProps?.imageDensity || ImageDensities[0]
    this.imageFiltering = designRequestProps?.imageFiltering || ImageFilterings[0]
    this.embellishmentLevel = designRequestProps?.embellishmentLevel || EmbellishmentLevels[0]
    this.textStickerLevel = designRequestProps?.textStickerLevel || TextStickerLevels[0]
    this.images = new Images(parentId)
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

  private async getProgress() {
    let previousState = ''
    const pullState = setInterval(async () => {
      const state = (await retrieveBook(this.parentId)).state
      if (previousState !== state) {
        previousState = state
        const event = new CustomEvent<DesignRequestEventDetail>('MagicBook.designRequestUpdated', {
          detail: {
            state: state
          }
        })
        window.dispatchEvent(event)
        if (['error', 'ready'].includes(state)) {
          clearInterval(pullState)
        } 
      }
    }, designRequestRefreshInterval)
  }
}
