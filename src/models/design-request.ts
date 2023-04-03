import {BookCreationRequest} from './nautilus'
import {Images} from './image'
import {nautilusJSON} from '../data/nautilus'

export type DesignRequestProps = {
  title?: string
  occasion?: string
  style?: string
  bookFormat?: string
  coverType?: string
  pageType?: string
  imageDensity?: string
  embellishmentLevel?: string
  textStickerLevel?: string
}

export type DesignRequestEventDetail = {
  state: 'new' | 'designing' | 'completed' | 'canceled' | 'error'
}

export type DesignRequestEvent = CustomEvent<DesignRequestEventDetail>

export default class DesignRequest {
  id: string
  title?: string
  occasion?: string
  style?: string
  bookFormat?: string
  coverType?: string
  pageType?: string
  imageDensity?: string
  embellishmentLevel?: string
  textStickerLevel?: string
  images: Images

  constructor(id: string, designRequestProps?: DesignRequestProps) {
    this.id = id
    designRequestProps && Object.assign(this, designRequestProps)
    this.images = new Images()
  }

  async submit(submitDesignRequest?: DesignRequestProps) {
    submitDesignRequest && Object.assign(this, submitDesignRequest)
    this.startFakeProgress()
    return new Promise<DesignRequest>((resolve) => {
      resolve(this)
    })
  }

  async getJSON() {
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
