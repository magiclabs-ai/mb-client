import {Style, StyleBase, styleBaseSchema, styleSchema} from '@/core/types/style'
import {StyleFont} from '@/client/src'
import {faker} from '@faker-js/faker'

export type StyleBaseFactoryProps = {
  active?: boolean
  name?: string
  slug?: string
}

export function styleBaseFactory(props?: StyleBaseFactoryProps): StyleBase {
  faker.seed()
  const name = faker.lorem.words(3)
  return styleBaseSchema.parse({
    active: props?.active || false,
    name: props?.name || name,
    slug: props?.slug || faker.helpers.slugify(name)
  })
}

export type StyleFactoryProps = StyleBaseFactoryProps & {
  position?: number
  layoutConstraints?: Record<string, unknown>
  colors?: Record<string, unknown>,
  fonts: Array<StyleFont>
  compatibleBackground: Array<unknown>
}

export function styleFactory(props?: StyleFactoryProps): Style {
  faker.seed()
  const name = faker.lorem.words(3)
  return styleSchema.parse({
    active: props?.active || false,
    name: props?.name || name,
    slug: props?.slug || faker.helpers.slugify(name),
    position: props?.position || 1,
    layoutConstraints: props?.layoutConstraints || {},
    colors: props?.colors || {},
    compatibleBackground: props?.compatibleBackground || [],
    fonts: props?.fonts || []
  })
}
