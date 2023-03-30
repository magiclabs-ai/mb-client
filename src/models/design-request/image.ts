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
  private images: Array<Image>

  constructor() {
    this.images = []
  }

  async add(image: Image): Promise<Image> {
    this.images.push(image)
    return new Promise<Image>((resolve) => {
      resolve(image)
    })
  }
}
export class ImageServer {
  sfly_id: string
  url: string
  width: number
  height: number
  orientation: number
  capture_time: string
  camera_make?: string
  camera_model?: string
  filename: string

  constructor(image: Image) {
    this.sfly_id = image.handle
    this.url = image.url
    this.width = image.width
    this.height = image.height
    this.orientation = image.rotation
    this.capture_time = image.captureTime
    this.camera_make = image.cameraMake
    this.camera_model = image.cameraModel
    this.filename = image.filename
  }
}
