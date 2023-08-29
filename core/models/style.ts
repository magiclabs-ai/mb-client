import {z} from 'zod'

export const styleServerSchema = z.object({
  active: z.boolean(),
  name: z.string(),
  slug: z.string(),
  position: z.number(),
  layout_constraints: z.array(z.unknown()),
  colors: z.array(z.string())
})
export type StyleServer = z.infer<typeof styleServerSchema>

export const styleSchema = z.object({
  active: z.boolean(),
  name: z.string(),
  slug: z.string(),
  position: z.number(),
  layoutConstraints: z.array(z.unknown()),
  colors: z.array(z.string())
})
export type Style = z.infer<typeof styleSchema>
