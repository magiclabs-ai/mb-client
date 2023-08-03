import {Image, ImageServer} from '@/index'
import {faker} from '@faker-js/faker'

export type ImageFactoryProps = {
  handle?: string
  url?: string
  width?: number
  height?: number
  rotation?: number
  captureTime?: string
  cameraMake?: string
  cameraModel?: string
  filename?: string
}

export function imageFactory(props?: ImageFactoryProps): Image {
  const width = props?.width || faker.number.int({min: 200, max: 500})
  const height = props?.height || faker.number.int({min: 200, max: 500})
  return {
    handle: props?.handle || faker.string.uuid(),
    url: props?.url || faker.image.url({width, height}),
    width,
    height,
    rotation: props?.rotation || 0,
    captureTime: props?.captureTime || faker.date.past().toISOString(),
    cameraMake: props?.cameraMake,
    cameraModel: props?.cameraModel,
    filename: props?.filename || faker.system.commonFileName('.jpg')
  }
}

export function imageServerFactory(props?: ImageFactoryProps) {
  return new ImageServer(imageFactory(props))
}
