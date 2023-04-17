import {BookCreationRequest} from './galleon'
import {DesignRequestOccasions} from './occasion'
import {DesignRequestStyles} from './style'
import {Images} from './image'
import {galleonJSON} from '../data/galleon'

export const DesignRequestStates = ['new', 'designing', 'completed', 'canceled', 'error'] as const
export const DesignRequestBookSizes = ['8x8', '10x10', '12x12', '8x11', '11x8', '11x14'] as const
export const DesignRequestBookCoverTypes = ['sc', 'hc', 'pl'] as const
export const DesignRequestBookPageTypes = ['sp', 'sl', 'dl'] as const
export const DesignRequestBookImageDensities = ['low', 'medium', 'high'] as const
export const DesignRequestBookImageFilterings = ['best', 'most', 'all'] as const
export const DesignRequestBookEmbellishmentLevels = ['none', 'few', 'lots'] as const
export const DesignRequestBookTextStickerLevels = ['none', 'few', 'lots'] as const

export type DesignRequestProps = {
  title?: string
  occasion?: typeof DesignRequestOccasions[number]
  style?: typeof DesignRequestStyles[number]
  bookSize?: typeof DesignRequestBookSizes[number]
  coverType?: typeof DesignRequestBookCoverTypes[number]
  pageType?: typeof DesignRequestBookPageTypes[number]
  imageDensity?: typeof DesignRequestBookImageDensities[number]
  imageFiltering?: typeof DesignRequestBookImageFilterings[number]
  embellishmentLevel?: typeof DesignRequestBookEmbellishmentLevels[number]
  textStickerLevel?: typeof DesignRequestBookTextStickerLevels[number]
}

export type DesignRequestEventDetail = {
  state: typeof DesignRequestStates[number]
}

export type DesignRequestEvent = CustomEvent<DesignRequestEventDetail>

export default class DesignRequest {
  id: string
  title?: string
  occasion?: typeof DesignRequestOccasions[number]
  style?: typeof DesignRequestStyles[number]
  bookSize?: typeof DesignRequestBookSizes[number]
  coverType?: typeof DesignRequestBookCoverTypes[number]
  pageType?: typeof DesignRequestBookPageTypes[number]
  imageDensity?: typeof DesignRequestBookImageDensities[number]
  imageFiltering?: typeof DesignRequestBookImageFilterings[number]
  embellishmentLevel?: typeof DesignRequestBookEmbellishmentLevels[number]
  textStickerLevel?: typeof DesignRequestBookTextStickerLevels[number]
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
