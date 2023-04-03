export type Image = {
  id: string
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
