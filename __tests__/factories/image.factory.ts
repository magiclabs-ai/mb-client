import {Image, ImageServer} from '../../src'
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

export function imageFactory(props?: ImageFactoryProps) {
  const width = props?.width || faker.datatype.number({min: 200, max: 500})
  const height = props?.height || faker.datatype.number({min: 200, max: 500})
  return {
    handle: props?.handle || faker.datatype.uuid(),
    url: props?.url || faker.image.imageUrl(width, height),
    width,
    height,
    rotation: props?.rotation || 0,
    captureTime: props?.captureTime || faker.datatype.datetime().toISOString(),
    cameraMake: props?.cameraMake,
    cameraModel: props?.cameraModel,
    filename: props?.filename || faker.system.commonFileName('.jpg')
  } as Image
}

export function imageServerFactory(props?: ImageFactoryProps) {
  return new ImageServer(imageFactory(props))
}
