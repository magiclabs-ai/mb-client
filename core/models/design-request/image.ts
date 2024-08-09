import {MagicBookClient} from '../client'
import {State} from '.'
import {canSubmitDesignRequest} from '@/core/data/design-request'
import {z} from 'zod'

export type Image = {
  id?: string
  handle: string
  url: string
  width: number
  height: number
  rotation: number
  captureTime: string
  cameraMake?: string
  cameraModel?: string
  filename: string
  metadata?: Record<string, unknown>
}

export class Images {
  private parentId: string
  list: Array<Image>
  length: number
  designRequestState: State

  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly client: MagicBookClient,
    parentId: string,
    designRequestState: State
  ) {
    this.parentId = parentId
    this.list = []
    this.length = this.list.length
    this.designRequestState = designRequestState
  }

  async add(image: Image): Promise<Image> {
    if (!canSubmitDesignRequest(this.designRequestState)) {
      throw new Error('You need to wait for the current design request to be ready before adding new images.')
    } else {
      // this.list.push(image)
      const serverImage = await this.client.engineAPI.images.addToBook(this.parentId, new ImageServer(image))
      const img = imageServerToImage(serverImage)
      this.list.push(img)
      this.length = this.list.length
      return new Promise<Image>((resolve) => {
        resolve(img)
      })
    }
  }

  async delete(imageId: string): Promise<number> {
    if (!canSubmitDesignRequest(this.designRequestState)) {
      throw new Error('You need to wait for the current design request to be ready before deleting images.')
    } else {
      await this.client.engineAPI.images.delete(imageId, this.parentId)
      this.list.splice(this.list.findIndex((image) => image.handle === imageId), 1)
      this.length = this.list.length
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
  filename: z.string(),
  metadata: z.record(z.unknown()).optional()
})

export class ImageServer {
  id?: string
  handle: string
  url: string
  width: number
  height: number
  orientation: number
  taken_at: string
  camera_make?: string
  camera?: string
  filename: string
  metadata?: Record<string, unknown>

  constructor(image: Image) {
    this.id = image.id
    this.handle = image.handle
    this.url = image.url
    this.width = image.width
    this.height = image.height
    this.orientation = image.rotation
    this.taken_at = image.captureTime
    this.camera_make = image.cameraMake
    this.camera = image.cameraModel
    this.filename = image.filename
    this.metadata = image.metadata
  }
}

export function imageServerToImage(imageServer: ImageServer): Image {
  return {
    id: imageServer.id,
    handle: imageServer.handle,
    url: imageServer.url,
    width: imageServer.width,
    height: imageServer.height,
    rotation: imageServer.orientation,
    captureTime: imageServer.taken_at,
    cameraMake: imageServer.camera_make,
    cameraModel: imageServer.camera,
    filename: imageServer.filename,
    metadata: imageServer.metadata
  }
}
