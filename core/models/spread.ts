import {z} from 'zod'

export const SpreadServerSchema = z.object({
  id: z.string(),
  book_id: z.string(),
  state: z.string(),
  spread_type: z.string(),
  width: z.number(),
  height: z.number(),
  sequence: z.number(),
  wells: z.array(z.unknown()),
  background: z.unknown(),
  laid_out_at: z.string(),
  embellished_at: z.string(),
  polished_at: z.string(),
  metadata: z.unknown(),
  url: z.string().nullable()
})
export type SpreadServer = z.infer<typeof SpreadServerSchema>

export const SpreadSchema = z.object({
  id: z.string(),
  bookId: z.string(),
  state: z.string(),
  spreadType: z.string(),
  width: z.number(),
  height: z.number(),
  sequence: z.number(),
  wells: z.array(z.unknown()),
  background: z.unknown(),
  laidOutAt: z.string(),
  embellishedAt: z.string(),
  polishedAt: z.string(),
  metadata: z.unknown(),
  url: z.string().nullable()
})
export type Spread = z.infer<typeof SpreadSchema>