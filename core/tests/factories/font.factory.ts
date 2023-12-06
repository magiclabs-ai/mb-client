import {Font, fontSchema} from '@/core/types/font'
import {faker} from '@faker-js/faker'


export type FontFactoryProps = {
  slug?: string
  family?: string
}

export function fontFactory(props?: FontFactoryProps): Font {
  return fontSchema.parse({
    slug: props?.slug || faker.lorem.slug(),
    family: props?.family || faker.lorem.word()
  })
}


// export type EmbellishmentFontFactoryProps = FontFactoryProps & {
//   role?: typeof fontRoles[number]
// }

// export function EmbellishmentFontFactory(props?: EmbellishmentFontFactoryProps): EmbellishmentFont {
//   return embellishmentFontSchema.parse({
//     slug: props?.slug || faker.lorem.slug(),
//     family: props?.family || faker.lorem.word(),
//     role: faker.helpers.arrayElement(fontRoles)
//   })
// }

