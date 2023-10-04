import {Event} from '@/core/models/event'
import {faker} from '@faker-js/faker'

export type EventFactoryProps = {
  name?: string
  context?: Record<string, unknown>
}

export function eventFactory(props?: EventFactoryProps): Event {
  return {
    name: props?.name || faker.string.uuid(),
    context: props?.context || {}
  }
}
