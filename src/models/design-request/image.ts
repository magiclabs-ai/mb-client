import {addImageInBook} from '@/utils/engine-api/images'

export type Image = {
  handle: string
  url: string
  width: number
  height: number
  rotation: number
  captureTime: string
  cameraMake?: string
  cameraModel?: string
  filename: string
}

export class Images {
  private parentId: string
  private images: Array<Image>
  length: number

  constructor(parentId: string) {
    this.parentId = parentId
    this.images = []
    this.length = this.images.length
  }

  async add(image: Image): Promise<number> {
    this.images.push(image)
    this.length = this.images.length
    console.log(this.length)
    await addImageInBook(this.parentId, new ImageServer(image))
    return new Promise<number>((resolve) => {
      resolve(this.length)
    })
  }
}
export class ImageServer {
  handle: string
  url: string
  width: number
  height: number
  orientation: number
  taken_at: string
  camera_make?: string
  camera?: string
  filename: string

  constructor(image: Image) {
    this.handle = image.handle
    this.url = image.url
    this.width = image.width
    this.height = image.height
    this.orientation = image.rotation
    this.taken_at = image.captureTime
    this.camera_make = image.cameraMake
    this.camera = image.cameraModel
    this.filename = image.filename
  }
}
