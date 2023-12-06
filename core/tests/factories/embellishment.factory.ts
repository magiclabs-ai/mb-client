
import {EmbellishmentTextSticker, embellishmentTextStickerSchema} from '@/core/types/embellishment'
import {faker} from '@faker-js/faker'

export type EmbellishmentTextStickerFactoryProps = {
  id?: string,
  active?: boolean,
  url?: string,
  name?: string,
  pattern?: string,
  primaryColor?: string,
  margin?: number,
  width?: number,
  height?: number,
  style?: string,
  text?: string,
  isSpecific?: boolean,
  minSurface?: number,
  maxSurface?: number
}

export function embellishmentTextStickerFactory
(props?: EmbellishmentTextStickerFactoryProps): EmbellishmentTextSticker {
  return embellishmentTextStickerSchema.parse({
    id: props?.id || faker.string.uuid(),
    active: props?.active || faker.datatype.boolean(),
    url: props?.url || faker.internet.url(),
    name: props?.name || faker.lorem.word(),
    pattern: props?.pattern || faker.lorem.word(),
    primaryColor: props?.primaryColor || faker.internet.color(),
    margin: props?.margin || faker.number.int(),
    width: props?.width || faker.number.int(),
    height: props?.height || faker.number.int(),
    style: props?.style || faker.lorem.word(),
    text: props?.text || faker.lorem.word(),
    type: 'text-sticker',
    isSpecific: props?.isSpecific || faker.datatype.boolean(),
    minSurface: props?.minSurface || faker.number.int(),
    maxSurface: props?.maxSurface || faker.number.int()
  })
}
