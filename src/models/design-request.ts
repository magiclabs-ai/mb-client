import {BookCreationRequest} from './nautilus'
import {Image} from './image'
import {nautilusJSON} from '../data/nautilus'

export type InitDesignRequest = {
  pages: number
  title: string
  occasion: string
  style: string
  bookFormat: string
  coverType: string
  pageType: string
}

export type SubmitDesignRequest = {
  imageDensity: string
  embellishmentLevel: string
  textStickerLevel: string
}

export type DesignRequestEventDetail = {
  state: 'new' | 'designing' | 'completed' | 'canceled' | 'error'
}

export type DesignRequestEvent = CustomEvent<DesignRequestEventDetail>

export default class DesignRequest {
  id: string
  pages: number
  title: string
  occasion: string
  style: string
  bookFormat: string
  coverType: string
  pageType: string
  imageDensity?: string
  embellishmentLevel?: string
  textStickerLevel?: string

  constructor(id: string, initProps: InitDesignRequest) {
    this.id = id
    this.pages = initProps.pages
    this.title = initProps.title
    this.occasion = initProps.occasion
    this.style = initProps.style
    this.bookFormat = initProps.bookFormat
    this.coverType = initProps.coverType
    this.pageType = initProps.pageType
  }

  async addImage(item: Image) {
    return new Promise<Image>((resolve) => {
      resolve(item)
    })
  }

  async submitDesignRequest(submitDesignRequest: SubmitDesignRequest) {
    this.imageDensity = submitDesignRequest.imageDensity
    this.embellishmentLevel = submitDesignRequest.embellishmentLevel
    this.textStickerLevel = submitDesignRequest.textStickerLevel
    this.startFakeProgress()
    return new Promise<DesignRequest>((resolve) => {
      resolve(this)
    })
  }

  async getNautilusJSON() {
    return new Promise<BookCreationRequest>((resolve) => {
      resolve(nautilusJSON)
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
