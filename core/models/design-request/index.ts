import {Book, BookDesignRequestProps} from '../book'
import {Images} from './image'
import {MagicBookClient} from '../client'
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
  textStickerLevels,
  timeoutMessage
} from '@/core/data/design-request'
import {camelCaseObjectKeysToSnakeCase, cleanJSON, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {designOptionsSchema} from './design-options'
import {designRequestTimeout} from '@/core/config'

export type Occasion = typeof occasions[number]
export type Style = keyof typeof styles
export type BookSize = typeof bookSizes[number]
export type CoverType = typeof coverTypes[number]
export type PageType = typeof pageTypes[number]
export type ImageDensity = typeof imageDensities[number]
export type ImageFilteringLevel = typeof imageFilteringLevels[number]
export type EmbellishmentLevel = typeof embellishmentLevels[number]
export type TextStickerLevel = typeof textStickerLevels[number]
export const DesignRequestOptions = {
  occasion: occasions,
  style: Object.keys(styles).map(key => parseInt(key)),
  bookSize: bookSizes,
  coverType: coverTypes,
  pageType: pageTypes,
  imageDensity: imageDensities,
  imageFilteringLevel: imageFilteringLevels,
  embellishmentLevel: embellishmentLevels,
  textStickerLevel: textStickerLevels
}
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
  slug: string
  progress: number
  message: string
}
export type DesignRequestEvent = CustomEvent<DesignRequestEventDetail>

export class DesignRequest {
  private webSocket: WebSocket
  state: State
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

  // eslint-disable-next-line no-unused-vars
  constructor(parentId: string, private readonly client: MagicBookClient, designRequestProps?: DesignRequestProps) {
    this.parentId = parentId
    this.webSocket = new WebSocket(`${this.client.webSocketHost}/?book_id=${this.parentId}`)
    this.state = states[0]
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
    this.images = new Images(this.client, this.parentId)
  }

  private updateDesignRequest(designRequestProps: DesignRequestProps) {
    Object.assign(this, designRequestProps)
  }

  async getOptions(imageCount?: number) {
    const options = designOptionsSchema.parse(snakeCaseObjectKeysToCamelCase(
      await this.client.engineAPI.designOptions.retrieve(this.bookSize, imageCount || this.images.length,
        this.imageFilteringLevel)
    ))
    return options
  }

  async submit(submitDesignRequestProps?: DesignRequestProps) {
    this.toBook()
    submitDesignRequestProps && Object.assign(this, submitDesignRequestProps)
    this.getProgress()
    this.updateDesignRequest(
      (await this.client.engineAPI.books.update(this.parentId, this.toBook())).toDesignRequestProps()
    )
    return this
  }

  async setGuid(guid: string) {
    this.guid = guid
    this.updateDesignRequest(
      (await this.client.engineAPI.books.update(this.parentId, this.toBook())).toDesignRequestProps()
    )
    return this.guid
  }
 
  async cancel() {
    this.updateDesignRequest(
      (await this.client.engineAPI.books.cancel(this.parentId)).toDesignRequestProps()
    )
    return this
  }

  async getJSON() {
    return await this.client.engineAPI.books.retrieveGalleon(this.parentId)
  }

  private async eventHandler(detail: DesignRequestEventDetail, type='MagicBook.designRequestUpdated') {
    const customEvent = new CustomEvent<DesignRequestEventDetail>(type, {detail})
    window.dispatchEvent(customEvent)
    if (['error', 'ready'].includes(detail.slug)) {
      this.webSocket.close()
    }
  }

  private timeoutHandler() {
    return setTimeout(() => {
      this.eventHandler(timeoutMessage)
    }, designRequestTimeout)
  }

  private async getProgress() {
    let timeout: ReturnType<typeof setTimeout>
    this.webSocket.onmessage = (event) => {
      const detail = JSON.parse(event.data) as DesignRequestEventDetail
      if (this.state !== detail.state) {
        timeout && clearTimeout(timeout)
        timeout = this.timeoutHandler()
        this.eventHandler(detail)
        this.state = detail.state
      }
    }
    this.webSocket.onclose = () => clearTimeout(timeout)
  }

  private toBook() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const designRequest = {...this} as Record<string, any>
    delete designRequest['client']
    delete designRequest['images']['client']
    delete designRequest['webSocket']
    const styleSlug = styles[this.style].slug
    const bookDesignRequest = 
      camelCaseObjectKeysToSnakeCase(cleanJSON(designRequest)) as BookDesignRequestProps
    bookDesignRequest.style = styleSlug
    return new Book({
      id: designRequest.parentId,
      guid: designRequest.guid,
      title: designRequest.title,
      design_request: bookDesignRequest
    })
  }
}
