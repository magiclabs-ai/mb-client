import {z} from 'zod'

export const imageDensityOptionSchema = z.object({
  maxPageCount: z.number(),
  minPageCount: z.number(),
  maxImageCount: z.number(),
  avgImageCount: z.number(),
  minImageCount: z.number()
})
export type ImageDensityOption = z.infer<typeof imageDensityOptionSchema>

export const imageDensityOptionsSchema = z.object({
  high: imageDensityOptionSchema,
  medium: imageDensityOptionSchema,
  low: imageDensityOptionSchema
})
export type ImageDensityOptions = z.infer<typeof imageDensityOptionsSchema>

export const designOptionsSchema = z.object({
  densities: imageDensityOptionsSchema
})
export type DesignOptions = z.infer<typeof designOptionsSchema>
