import {faker} from '@faker-js/faker'
import {paginatedResponseSchema} from '@/core/types/engine-api/pagination'
import {z} from 'zod'

type PaginationFactoryProps = {
  count?: number
  schema: z.ZodSchema
  factory: () => Record<string, unknown>
}

export function paginationFactory(props: PaginationFactoryProps) {
  const count = props?.count || 10
  const pagination = {
    nextCursor: faker.string.uuid(),
    previousCursor: faker.string.uuid(),
    count,
    results: Array.from({length: count}, () => props.factory())
  }
  return paginatedResponseSchema(props.schema).parse(pagination)
}
