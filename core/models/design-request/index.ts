import {Book, BookDesignRequestProps} from '../book'
import {EventContext} from '../event'
import {
  Format,
  bookSizes,
  canSubmitDesignRequest,
  cancelledEventDetail,
  coverTypes,
  embellishmentLevels,
  imageDensities,
  imageFilteringLevels,
  occasions,
  pageTypes,
  states,
  statesToCloseWS,
  statesToReport,
  styles,
  textStickerLevels,
  timeoutEventDetail
} from '@/core/data/design-request'
import {Images} from './image'
import {MagicBookClient} from '../client'
import {camelCaseObjectKeysToSnakeCase, cleanJSON, snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {designOptionsSchema} from './design-options'
import {isDesignRequestSubmitted} from '../../data/design-request'

export type Occasion = (typeof occasions)[number]
export type Style = keyof typeof styles
export type BookSize = (typeof bookSizes)[number]
export type CoverType = (typeof coverTypes)[number]
export type PageType = (typeof pageTypes)[number]
export type ImageDensity = (typeof imageDensities)[number]
export type ImageFilteringLevel = (typeof imageFilteringLevels)[number]
export type EmbellishmentLevel = (typeof embellishmentLevels)[number]
export type TextStickerLevel = (typeof textStickerLevels)[number]
export const DesignRequestOptions = {
  occasion: occasions,
  style: Object.keys(styles).map((key) => parseInt(key)),
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
  subtitle?: string
  state?: State
  occasion?: Occasion
  style?: Style
  sku?: string
  bookSize?: BookSize
  coverType?: CoverType
  pageType?: PageType
  imageDensity?: ImageDensity
  imageFilteringLevel?: ImageFilteringLevel
  embellishmentLevel?: EmbellishmentLevel
  textStickerLevel?: TextStickerLevel
  userId: string
}
export type State = (typeof states)[number]
export type DesignRequestEventDetail = {
  state: string
  slug: State
  progress: number
  message: string
}
export type DesignRequestEvent = CustomEvent<DesignRequestEventDetail>

export class DesignRequest {
  state: State
  title: string
  subtitle?: string
  occasion: Occasion
  style: Style
  sku?: string
  bookSize: BookSize
  coverType: CoverType
  pageType: PageType
  imageDensity: ImageDensity
  imageFilteringLevel: ImageFilteringLevel
  embellishmentLevel: EmbellishmentLevel
  textStickerLevel: TextStickerLevel
  images: Images
  private webSocket?: WebSocket
  userId?: string
  guid?: string
  timeout?: number

  constructor(
    // eslint-disable-next-line no-unused-vars
    readonly parentId: string,
    // eslint-disable-next-line no-unused-vars
    private readonly client: MagicBookClient,
    designRequestProps?: DesignRequestProps
  ) {
    this.state = designRequestProps?.state || states[0]
    this.title = designRequestProps?.title || ''
    this.subtitle = designRequestProps?.subtitle
    this.occasion = designRequestProps?.occasion || occasions[0]
    this.style = designRequestProps?.style || (parseInt(Object.keys(styles)[0]) as Style)
    this.sku = designRequestProps?.sku
    this.bookSize = designRequestProps?.bookSize || bookSizes[0]
    this.coverType = designRequestProps?.coverType || coverTypes[0]
    this.pageType = designRequestProps?.pageType || pageTypes[0]
    this.imageDensity = designRequestProps?.imageDensity || imageDensities[0]
    this.imageFilteringLevel = designRequestProps?.imageFilteringLevel || imageFilteringLevels[0]
    this.embellishmentLevel = designRequestProps?.embellishmentLevel || embellishmentLevels[0]
    this.textStickerLevel = designRequestProps?.textStickerLevel || textStickerLevels[0]
    this.images = new Images(this.client, this.parentId, this.state)
    this.userId = designRequestProps?.userId
  }

  private updateDesignRequest(designRequestProps: Partial<DesignRequestProps>) {
    Object.assign(this, designRequestProps)
    if (designRequestProps.state) {
      this.images.designRequestState = designRequestProps.state
    }
  }

  async getOptions(imageCount?: number) {
    const options = designOptionsSchema.parse(
      snakeCaseObjectKeysToCamelCase(
        await this.client.engineAPI.designOptions.retrieve(
          this.bookSize,
          imageCount || this.images.length,
          this.imageFilteringLevel
        )
      )
    )
    return options
  }

  async getAlternateLayouts(pageNumber: number) {
    if (this.state === 'ready') {
      return await this.client.engineAPI.spreads.layouts(this.parentId, pageNumber)
    } else {
      throw new Error('Design request not ready')
    }
  }

  async submit(submitDesignRequestProps?: Partial<DesignRequestProps>) {
    if (!canSubmitDesignRequest(this.state)) {
      throw new Error('You need to wait for the current design request to be ready before submitting a new one')
    } else {
      submitDesignRequestProps && this.updateDesignRequest(submitDesignRequestProps)
      this.webSocket = new WebSocket(`${this.client.webSocketHost}/?book_id=${this.parentId}`)
      console.log('✅✅✅✅')
      await this.client.engineAPI.books.update(this.parentId, this.toBook())
      this.updateDesignRequest((await this.client.engineAPI.books.design(this.parentId)).toDesignRequestProps())
      this.getProgress()
      return this
    }
  }

  async setGuid(guid: string) {
    if (!isDesignRequestSubmitted(this.state)) {
      throw new Error('Design request not submitted')
    } else {
      this.guid = guid
      this.updateDesignRequest(
        (await this.client.engineAPI.books.update(this.parentId, this.toBook())).toDesignRequestProps()
      )
      return this.guid
    }
  }

  async cancel() {
    if (this.state === 'cancelled') {
      throw new Error('Design request already cancelled')
    } else if (this.state === 'ready') {
      throw new Error('Design request already finished')
    } else if (!isDesignRequestSubmitted(this.state)) {
      throw new Error('Design request not submitted')
    } else {
      this.updateDesignRequest({
        ...(await this.client.engineAPI.books.cancel(this.parentId)).toDesignRequestProps(),
        state: 'cancelled'
      })
      await this.eventHandler(cancelledEventDetail)
      return this
    }
  }

  async getJSON(format: Format) {
    if (this.state === 'ready') {
      return await this.client.engineAPI.books.format(this.parentId, format)
    } else {
      throw new Error('Design request not ready')
    }
  }

  async logEvent(name: string, data?: EventContext) {
    return await this.client.engineAPI.events.createBookEvent(this.parentId, name, data)
  }

  private async eventHandler(detail: DesignRequestEventDetail, type = 'MagicBook.designRequestUpdated') {
    const customEvent = new CustomEvent<DesignRequestEventDetail>(type, {detail})
    if (statesToCloseWS.includes(detail.slug)) {
      this.webSocket?.close()
      if (statesToReport.includes(detail.slug)) {
        await this.client.engineAPI.books.report(this.parentId, {
          error: detail.slug === 'error' ? 'design' : 'timeout',
          step: this.state
        })
      }
    }
    this.updateDesignRequest({state: detail.slug})
    window.dispatchEvent(customEvent)
  }

  private timeoutHandler() {
    if (this.timeout) {
      return setTimeout(async () => {
        await this.eventHandler(timeoutEventDetail)
      }, this.timeout)
    } else {
      throw new Error('Design request timeout not set')
    }
  }

  private async getProgress() {
    if (this.webSocket) {
      let timeout: ReturnType<typeof setTimeout>
      this.webSocket.onmessage = async (event) => {
        const detail = JSON.parse(event.data) as DesignRequestEventDetail
        if (this.state !== detail.slug || detail.slug === 'submitted') {
          timeout && clearTimeout(timeout)
          timeout = this.timeoutHandler()
          await this.eventHandler(detail)
        }
      }
      this.webSocket.onclose = () => clearTimeout(timeout)
    }
  }

  private toBook() {
    const designRequest = {
      ...this,
      images: this.images['images']
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as Record<string, any>
    delete designRequest.client
    delete designRequest.webSocket
    const styleSlug = styles[this.style].slug
    console.log('styleSlug 💣', styleSlug)
    const bookDesignRequest = camelCaseObjectKeysToSnakeCase(cleanJSON(designRequest)) as BookDesignRequestProps
    bookDesignRequest.style = styleSlug
    return new Book({
      id: designRequest.parentId,
      guid: designRequest.guid,
      title: designRequest.title,
      subtitle: designRequest.subtitle,
      design_request: bookDesignRequest,
      sku: designRequest.sku,
      state: designRequest.state,
      user_id: designRequest.userId
    })
  }
}
