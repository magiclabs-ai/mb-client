import {fontSchema, fontServerSchema} from './font'
import {z} from 'zod'

export const styleServerSchema = z.object({
  active: z.boolean(),
  name: z.string(),
  slug: z.string(),
  compatibility_backgrounds: z.array(z.unknown()),
  fonts: z.array(fontServerSchema),
  layout_constraints: z.record(z.unknown()),
  colors: z.record(z.unknown())
})
export type StyleServer = z.infer<typeof styleServerSchema>

export const styleSchema = z.object({
  active: z.boolean(),
  name: z.string(),
  slug: z.string(),
  compatibilityBackgrounds: z.array(z.unknown()),
  fonts: z.array(fontSchema),
  layoutConstraints: z.record(z.unknown()),
  colors: z.record(z.unknown())
})
export type Style = z.infer<typeof styleSchema>
