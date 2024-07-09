import {Event} from '@/core/types/event'
import {faker} from '@faker-js/faker'

export type EventFactoryProps = {
  name?: string
  context?: Record<string, unknown>
  createdAt?: string
  bookId?: string
}

export function eventFactory(props?: EventFactoryProps): Event {
  return {
    name: props?.name || faker.string.uuid(),
    context: props?.context || {},
    createdAt: props?.createdAt || faker.date.past().toISOString(),
    bookId: props?.bookId || faker.string.uuid()
  }
}
