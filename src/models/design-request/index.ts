import {Images} from './image'
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
} from '@/data/design-request'
import {designRequestTimeout, webSocketHost} from '@/config'
import {designRequestToBook} from '@/utils/design-request-parser'
import {getDesignOptions} from '@/utils/engine-api/design-options'
import {retrieveGalleon, updateBook} from '@/utils/engine-api/books'

export type Occasion = typeof occasions[number]
export type Style = keyof typeof styles
export type BookSize = typeof bookSizes[number]
export type CoverType = typeof coverTypes[number]
export type PageType = typeof pageTypes[number]
export type ImageDensity = typeof imageDensities[number]
export type ImageFilteringLevel = typeof imageFilteringLevels[number]
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
  imageFilteringLevel?: ImageFilteringLevel
  embellishmentLevel?: EmbellishmentLevel
  textStickerLevel?: TextStickerLevel
}

export type State = typeof states[number]
export type DesignRequestEventDetail = {
  state: State
}
export type DesignRequestEvent = CustomEvent<DesignRequestEventDetail>

export class DesignRequest {
  private apiKey: string
  parentId: string
  title: string
  occasion: Occasion
  style: Style
  bookSize: BookSize
  coverType: CoverType
  pageType: PageType
  imageDensity: ImageDensity
  imageFilteringLevel: ImageFilteringLevel
  embellishmentLevel: EmbellishmentLevel
  textStickerLevel: TextStickerLevel
  images: Images
  guid?: string

  constructor(parentId: string, apiKey: string, designRequestProps?: DesignRequestProps) {
    this.apiKey = apiKey
    this.parentId = parentId
    this.title = designRequestProps?.title || ''
    this.occasion = designRequestProps?.occasion || occasions[0]
    this.style = designRequestProps?.style || parseInt(Object.keys(styles)[0]) as Style
    this.bookSize = designRequestProps?.bookSize || bookSizes[0]
    this.coverType = designRequestProps?.coverType || coverTypes[0]
    this.pageType = designRequestProps?.pageType || pageTypes[0]
    this.imageDensity = designRequestProps?.imageDensity || imageDensities[0]
    this.imageFilteringLevel = designRequestProps?.imageFilteringLevel || imageFilteringLevels[0]
    this.embellishmentLevel = designRequestProps?.embellishmentLevel || embellishmentLevels[0]
    this.textStickerLevel = designRequestProps?.textStickerLevel || textStickerLevels[0]
    this.images = new Images(this.parentId, this.apiKey)
  }

  async getOptions(imageCount?: number) {
    return await getDesignOptions(this.apiKey, this.bookSize, imageCount || this.images.length)
  }

  async submit(submitDesignRequestProps?: DesignRequestProps) {
    submitDesignRequestProps && Object.assign(this, submitDesignRequestProps)
    this.getProgress()
    await updateBook(this.apiKey, designRequestToBook(this))
    return this
  }

  async setGuid(guid: string) {
    this.guid = guid
    await updateBook(designRequestToBook(this))
    return this.guid
  }

  async getJSON() {
    return await retrieveGalleon(this.apiKey, this.parentId)
  }

  private async getProgress() {
    let previousState = 'new'
    const webSocket = new WebSocket(`${webSocketHost}/?book_id=${this.parentId}`)
    const timeout = setTimeout(() => {
      webSocket.close()
      throw new Error('Something went wrong. Please try again.')
    }, designRequestTimeout)
    webSocket.onmessage = (event) => {
      const detail = JSON.parse(event.data) as DesignRequestEventDetail
      if (previousState !== detail.state) {
        previousState = detail.state
        const customEvent = new CustomEvent<DesignRequestEventDetail>('MagicBook.designRequestUpdated', {detail})
        window.dispatchEvent(customEvent)
        if (['error', 'ready'].includes(detail.state)) {
          webSocket.close()
          clearTimeout(timeout)
        } 
      }
    }
  }
}
