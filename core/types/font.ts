import {z} from 'zod'

export const fontRoles = ['title', 'subtitle', 'caption'] as const

export const fontListServerSchema = z.object({
  slug: z.string(),
  family: z.string()
})
export type FontListServer = z.infer<typeof fontListServerSchema>

export const fontListSchema = fontListServerSchema
export type FontListSchema = z.infer<typeof fontListSchema>

export const fontServerSchema = fontListSchema.extend({
  role: z.enum(fontRoles)
})
export type FontServer = z.infer<typeof fontServerSchema>

export const fontSchema = fontServerSchema
export type Font = z.infer<typeof fontSchema>
