import {MagicBookClient} from '../client'
import {State} from '.'
import {canResubmitDesignRequest} from '@/core/data/design-request'
import {z} from 'zod'

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
  designRequestState: State

  // eslint-disable-next-line no-unused-vars
  constructor(private readonly client: MagicBookClient, parentId: string, designRequestState: State) {
    this.parentId = parentId
    this.images = []
    this.length = this.images.length
    this.designRequestState = designRequestState
  }

  async add(image: Image): Promise<number> {
    if (!canResubmitDesignRequest(this.designRequestState)) {
      throw new Error('You need to wait for the current design request to be ready before adding new images.')
    } else {
      this.images.push(image)
      this.length = this.images.length
      await this.client.engineAPI.images.addToBook(this.parentId, new ImageServer(image))
      return new Promise<number>((resolve) => {
        resolve(this.length)
      })
    }

  }
}

export const imageServerSchema = z.object({
  id: z.string().optional(),
  handle: z.string(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
  orientation: z.number(),
  taken_at: z.string(),
  camera_make: z.string().optional(),
  camera: z.string().optional(),
  filename: z.string()
})

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
