import {styleFontSchema} from './font'
import {z} from 'zod'

export const styleBaseSchema = z.object({
  active: z.boolean(),
  name: z.string(),
  slug: z.string()
})
export type StyleBase = z.infer<typeof styleBaseSchema>

export const styleSchema = styleBaseSchema.extend({
  position: z.number(),
  compatibleBackground: z.array(z.unknown()),
  fonts: z.array(styleFontSchema),
  layoutConstraints: z.record(z.unknown()),
  colors: z.record(z.unknown())
})
export type Style = z.infer<typeof styleSchema>
