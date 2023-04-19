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
  return {
    handle: props?.handle || faker.datatype.uuid(),
    url: props?.url || faker.image.imageUrl(),
    width: props?.width || '500',
    height: props?.height || '500',
    rotation: props?.rotation || '0',
    captureTime: props?.captureTime || faker.datatype.datetime(),
    cameraMake: props?.cameraMake,
    cameraModel: props?.cameraModel,
    filename: props?.filename || faker.system.commonFileName('.jpg')
  } as Image
}

export function imageServerFactory(props?: ImageFactoryProps) {
  return new ImageServer(imageFactory(props))
}
