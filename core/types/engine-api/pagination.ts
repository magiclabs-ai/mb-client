import {ZodSchema, z} from 'zod'

export function paginatedResponseSchema<T extends ZodSchema>(arrayOf: T) {
  return z.object({
    count: z.number(),
    nextCursor: z.string().nullable(),
    previousCursor: z.string().optional(),
    results: z.array(arrayOf)
  })
}

export type PaginatedResponse<T> = {
  count: number
  nextCursor: string | null
  previousCursor?: string
  results: Array<T>
}
