import {BookCreationRequest} from '../galleon'
import {
  DesignRequestBookCoverTypes,
  DesignRequestBookEmbellishmentLevels,
  DesignRequestBookImageDensities,
  DesignRequestBookImageFilterings,
  DesignRequestBookPageTypes,
  DesignRequestBookSizes,
  DesignRequestBookTextStickerLevels,
  DesignRequestOccasions,
  DesignRequestStates,
  DesignRequestStyles
} from '@/data/design-request'
import {DesignRequestImages} from './image'
import {galleonJSON} from '@/data/galleon'

export type DesignRequestOccasion = typeof DesignRequestOccasions[number]
export type DesignRequestStyle = typeof DesignRequestStyles[number]
export type DesignRequestBookSize = typeof DesignRequestBookSizes[number]
export type DesignRequestBookCoverType = typeof DesignRequestBookCoverTypes[number]
export type DesignRequestBookPageType = typeof DesignRequestBookPageTypes[number]
export type DesignRequestBookImageDensity = typeof DesignRequestBookImageDensities[number]
export type DesignRequestBookImageFiltering = typeof DesignRequestBookImageFilterings[number]
export type DesignRequestBookEmbellishmentLevel = typeof DesignRequestBookEmbellishmentLevels[number]
export type DesignRequestBookTextStickerLevel = typeof DesignRequestBookTextStickerLevels[number]
export type DesignRequestProps = {
  title?: string
  occasion?: DesignRequestOccasion
  style?: DesignRequestStyle
  bookSize?: DesignRequestBookSize
  coverType?: DesignRequestBookCoverType
  pageType?: DesignRequestBookPageType
  imageDensity?: DesignRequestBookImageDensity
  imageFiltering?: DesignRequestBookImageFiltering
  embellishmentLevel?: DesignRequestBookEmbellishmentLevel
  textStickerLevel?: DesignRequestBookTextStickerLevel
}

export type DesignRequestState = typeof DesignRequestStates[number]
export type DesignRequestEventDetail = {
  state: typeof DesignRequestStates[number]
}
export type DesignRequestEvent = CustomEvent<DesignRequestEventDetail>

export class DesignRequest {
  id: string
  title?: string
  occasion?: DesignRequestOccasion
  style?: DesignRequestStyle
  bookSize?: DesignRequestBookSize
  coverType?: DesignRequestBookCoverType
  pageType?: DesignRequestBookPageType
  imageDensity?: DesignRequestBookImageDensity
  imageFiltering?: DesignRequestBookImageFiltering
  embellishmentLevel?: DesignRequestBookEmbellishmentLevel
  textStickerLevel?: DesignRequestBookTextStickerLevel
  images: DesignRequestImages

  constructor(id: string, designRequestProps?: DesignRequestProps) {
    this.id = id
    designRequestProps && Object.assign(this, designRequestProps)
    this.images = new DesignRequestImages()
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
