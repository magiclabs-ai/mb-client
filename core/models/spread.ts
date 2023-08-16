import {z} from 'zod'

export const spreadServerSchema = z.object({
  id: z.string().optional(),
  book_id: z.string(),
  state: z.string(),
  spread_type: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  sequence: z.number(),
  wells: z.array(z.unknown()),
  background: z.unknown(),
  laid_out_at: z.string().nullable(),
  embellished_at: z.string().nullable(),
  polished_at: z.string().nullable(),
  metadata: z.unknown(),
  url: z.string().nullable().optional()
})
export type SpreadServer = z.infer<typeof spreadServerSchema>

export const spreadSchema = z.object({
  id: z.string().optional(),
  bookId: z.string(),
  state: z.string(),
  spreadType: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  sequence: z.number(),
  wells: z.array(z.unknown()),
  background: z.unknown(),
  laidOutAt: z.string().nullable(),
  embellishedAt: z.string().nullable(),
  polishedAt: z.string().nullable(),
  metadata: z.unknown(),
  url: z.string().nullable().optional()
})
export type Spread = z.infer<typeof spreadSchema>
