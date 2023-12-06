import {z} from 'zod'

export const fontRoles = ['title', 'subtitle', 'caption'] as const

export const fontSchema = z.object({
  slug: z.string(),
  family: z.string(),
})
export type Font = z.infer<typeof fontSchema>

export type FontSchema = z.infer<typeof fontSchema>

export const styleFontSchema = fontSchema.extend({
  role: z.enum(fontRoles)
})
export type StyleFont = z.infer<typeof styleFontSchema>
