import {Image} from './image'

export type InitDesignRequest = {
  pages: number
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
  state: 'starting' | 'pending' | 'in progress' | 'completed' | 'failed'
}

export type DesignRequestEvent = CustomEvent<DesignRequestEventDetail>

export default class DesignRequest {
  id: string
  pages: number
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
    this.occasion = initProps.occasion
    this.style = initProps.style
    this.bookFormat = initProps.bookFormat
    this.coverType = initProps.coverType
    this.pageType = initProps.pageType
  }

  async addImage(item: Image) {
    return new Promise((resolve) => {
      resolve(item)
    })
  }

  async submitDesignRequest(submitDesignRequest: SubmitDesignRequest) {
    this.imageDensity = submitDesignRequest.imageDensity
    this.embellishmentLevel = submitDesignRequest.embellishmentLevel
    this.textStickerLevel = submitDesignRequest.textStickerLevel
    // this.startFakeProgress()
    return new Promise((resolve) => {
      resolve(this)
    })
  }

  async getNautilusJSON() {
    return new Promise((resolve) => {
      resolve(`getNautilusJSON for ${this.id}`)
    })
  }

  // startFakeProgress() {
  //   setTimeout(() => {
  //     const event = new CustomEvent<DesignRequestEventDetail>('Magicbook.designRequestUpdated', {
  //       bubbles: true,
  //       detail: {
  //         state: 'starting'
  //       }
  //     })
  //     window.dispatchEvent(event)
  //   }, 2000)
  //   setTimeout(() => {
  //     const event = new CustomEvent<DesignRequestEventDetail>('Magicbook.designRequestUpdated', {
  //       bubbles: true,
  //       detail: {
  //         state: 'in progress'
  //       }
  //     })
  //     window.dispatchEvent(event)
  //   }, 3000)
  //   setTimeout(() => {
  //     const event = new CustomEvent<DesignRequestEventDetail>('Magicbook.designRequestUpdated', {
  //       bubbles: true,
  //       detail: {
  //         state: 'completed'
  //       }
  //     })
  //     window.dispatchEvent(event)
  //   }, 6000)
  // }
}
