import {z} from 'zod'

export const eventContextSchema = z.record(z.string(), z.unknown()).optional()
export type EventContext = z.infer<typeof eventContextSchema>

export const eventSchema = z.object({
  name: z.string(),
  context: eventContextSchema
})
export type Event = z.infer<typeof eventSchema>
