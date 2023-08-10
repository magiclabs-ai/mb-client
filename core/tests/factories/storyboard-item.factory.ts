import {
  StoryboardItem,
  StoryboardItemSchema,
  StoryboardItemServer,
  StoryboardItemServerSchema
} from '@/core/models/storyboard-item'
import {camelCaseObjectKeysToSnakeCase} from '@/core/utils/toolbox'
import {faker} from '@faker-js/faker'

export type StoryboardItemFactoryProps = {
  id?: string
  bookId?: string
}

export function storyboardItemFactory(props?: StoryboardItemFactoryProps): StoryboardItem {
  return StoryboardItemSchema.parse({
    id: props?.id || faker.string.uuid(),
    bookId: props?.bookId || faker.string.uuid(),
    sequence: faker.number.int({min: 1, max: 100}),
    similarity: faker.number.int({min: 1, max: 100}),
    duplicate: faker.datatype.boolean(),
    selected: faker.datatype.boolean(),
    surfaceWeight: faker.number.int({min: 1, max: 100}),
    frontCover: faker.datatype.boolean(),
    backCover: faker.datatype.boolean(),
    scene: faker.number.int({min: 1, max: 100}),
    subscene: faker.number.int({min: 1, max: 100}),
    spineBreak: faker.datatype.boolean(),
    image: {
      id: faker.string.uuid(),
      url: faker.internet.url(),
      category: faker.lorem.word(),
      aestheticScore: faker.number.int({min: 1, max: 100}),
      faces: [],
      roi: {
        x: faker.number.int({min: 1, max: 100}),
        y: faker.number.int({min: 1, max: 100}),
        width: faker.number.int({min: 1, max: 100}),
        height: faker.number.int({min: 1, max: 100})
      },
      takenAt: faker.date.past().toISOString(),
      width: faker.number.int({min: 1, max: 100}),
      height: faker.number.int({min: 1, max: 100})
    }
  })
}

export function storyboardItemServerFactory(props?: StoryboardItemFactoryProps): StoryboardItemServer {
  return StoryboardItemServerSchema.parse(
    camelCaseObjectKeysToSnakeCase(storyboardItemFactory(props))
  )
}

