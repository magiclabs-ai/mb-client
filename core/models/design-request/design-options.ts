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

export const imageDensityOptionServerSchema = z.object({
  max_page_count: z.number(),
  min_page_count: z.number(),
  max_image_count: z.number(),
  avg_image_count: z.number(),
  min_image_count: z.number()
})
export type ImageDensityOptionServer = z.infer<typeof imageDensityOptionServerSchema>

export const imageDensityOptionsServerSchema = z.object({
  high: imageDensityOptionServerSchema,
  medium: imageDensityOptionServerSchema,
  low: imageDensityOptionServerSchema
})
export type ImageDensityOptionsServer = z.infer<typeof imageDensityOptionsServerSchema>

export const designOptionsServerSchema = z.object({
  densities: imageDensityOptionsServerSchema
})
export type DesignOptionsServer = z.infer<typeof designOptionsServerSchema>
