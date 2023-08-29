import {Style} from 'util'
import {StyleServer, styleSchema, styleServerSchema} from '@/core/models/style'
import {camelCaseObjectKeysToSnakeCase} from '@/core/utils/toolbox'
import {faker} from '@faker-js/faker'

export type StyleFactoryProps = {
  active?: boolean
  name?: string
  slug?: string
  position?: number
  layoutConstraints?: unknown[]
  colors?: string[]
}

export function styleFactory(props?: StyleFactoryProps): Style {
  faker.seed()
  const name = faker.lorem.words(3)
  return styleSchema.parse({
    active: props?.active || false,
    name: props?.name || name,
    slug: props?.slug || faker.helpers.slugify(name),
    position: props?.position || 1,
    layoutConstraints: props?.layoutConstraints || [],
    colors: props?.colors || []
  })
}

export function styleServerFactory(props?: StyleFactoryProps): StyleServer {
  return styleServerSchema.parse(
    camelCaseObjectKeysToSnakeCase(styleFactory(props))
  )
}
