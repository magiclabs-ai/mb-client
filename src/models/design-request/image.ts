export type DesignRequestImage = {
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

export class DesignRequestImages {
  private images: Array<DesignRequestImage>

  constructor() {
    this.images = []
  }

  async add(image: DesignRequestImage): Promise<DesignRequestImage> {
    this.images.push(image)
    return new Promise<DesignRequestImage>((resolve) => {
      resolve(image)
    })
  }
}
