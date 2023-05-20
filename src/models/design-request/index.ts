import {Images} from './image'
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
} from '@/data/design-request'
import {designRequestToBook} from '@/utils/design-request-parser'
import {getDesignOptions} from '@/utils/engine-api/design-options'
import {retrieveGalleon, updateBook} from '@/utils/engine-api/books'
import {webSocketHost} from '@/config'

export type Occasion = typeof occasions[number]
export type Style = keyof typeof styles
export type BookSize = typeof bookSizes[number]
export type CoverType = typeof coverTypes[number]
export type PageType = typeof pageTypes[number]
export type ImageDensity = typeof imageDensities[number]
export type ImageFiltering = typeof imageFilterings[number]
export type EmbellishmentLevel = typeof embellishmentLevels[number]
export type TextStickerLevel = typeof textStickerLevels[number]

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

export type State = typeof states[number]
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
    this.occasion = designRequestProps?.occasion || occasions[0]
    this.style = designRequestProps?.style || parseInt(Object.keys(styles)[0]) as Style
    this.bookSize = designRequestProps?.bookSize || bookSizes[0]
    this.coverType = designRequestProps?.coverType || coverTypes[0]
    this.pageType = designRequestProps?.pageType || pageTypes[0]
    this.imageDensity = designRequestProps?.imageDensity || imageDensities[0]
    this.imageFiltering = designRequestProps?.imageFiltering || imageFilterings[0]
    this.embellishmentLevel = designRequestProps?.embellishmentLevel || embellishmentLevels[0]
    this.textStickerLevel = designRequestProps?.textStickerLevel || textStickerLevels[0]
    this.images = new Images(parentId)
  }

  async getOptions(imageCount?: number) {
    return await getDesignOptions(this.bookSize, imageCount || this.images.length)
  }

  async submit(submitDesignRequestProps?: DesignRequestProps) {
    submitDesignRequestProps && Object.assign(this, submitDesignRequestProps)
    await updateBook(designRequestToBook(this))
    this.getProgress()
    return this
  }

  async getJSON() {
    return await retrieveGalleon(this.parentId)
  }

  private async getProgress() {
    let previousState = 'submitted'
    const webSocket = new WebSocket(`${webSocketHost}/?book_id=${this.parentId}`)
    webSocket.onmessage = (event) => {
      const detail = JSON.parse(event.data) as DesignRequestEventDetail
      if (previousState !== detail.state) {
        previousState = detail.state
        const customEvent = new CustomEvent<DesignRequestEventDetail>('MagicBook.designRequestUpdated', {detail})
        window.dispatchEvent(customEvent)
        if (['error', 'ready'].includes(detail.state)) {
          webSocket.close()
        } 
      }
    }
  }
}
