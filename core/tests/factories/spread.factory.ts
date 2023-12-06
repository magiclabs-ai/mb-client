import {Spread, SpreadServer, spreadSchema, spreadServerSchema} from '@/core/types/spread'
import {camelCaseObjectKeysToSnakeCase} from '@/core/utils/toolbox'
import {faker} from '@faker-js/faker'

export type SpreadFactoryProps = {
  id?: string
  state?: string
  bookId?: string
}

export function spreadFactory(props?: SpreadFactoryProps): Spread {
  return spreadSchema.parse({
    id: props?.id || faker.string.uuid(),
    bookId: props?.bookId || faker.string.uuid(),
    state: props?.state || faker.lorem.word(),
    spreadType: faker.lorem.word(),
    width: faker.number.int({min: 100, max: 1000}),
    height: faker.number.int({min: 100, max: 1000}),
    sequence: faker.number.int({min: 1, max: 100}),
    wells: [],
    background: {},
    laidOutAt: faker.date.past().toISOString(),
    embellishedAt: faker.date.past().toISOString(),
    polishedAt: faker.date.past().toISOString(),
    metadata: {},
    url: faker.internet.url()
  })
}

export function spreadServerFactory(props?: SpreadFactoryProps): SpreadServer {
  return spreadServerSchema.parse(camelCaseObjectKeysToSnakeCase(spreadFactory(props)))
}

