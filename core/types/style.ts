import {styleFontSchema} from './font'
import {z} from 'zod'


export const styleBaseSchema = z.object({
  active: z.boolean(),
  name: z.string(),
  slug: z.string()
})
export type StyleBase = z.infer<typeof styleBaseSchema>

export const backgroundSchema = z.object({
  url: z.string(),
  compatible: z.boolean()
})
export type Background = z.infer<typeof backgroundSchema>

export const colorSchema = z.object({
  compatible: z.boolean()
})
export type Color = z.infer<typeof colorSchema>

export const compatibleBackgroundSchema = z.object({
  id: z.string(),
  url: z.string(),
  backgrounds: z.record(z.string(), backgroundSchema),
  colors: z.record(z.string(), colorSchema)
})
export type CompatibleBackground = z.infer<typeof compatibleBackgroundSchema>

export const whitespaceSchema = z.object({
  min: z.number(),
  max: z.number()
})

export const layoutConstraintsClasses = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] as const
export const layoutConstraintSchema = z.object({
  whitespace: whitespaceSchema,
  iWhitespace: whitespaceSchema,
  classes: z.array(z.enum(layoutConstraintsClasses))
})

export const layoutConstraintsSchema = z.object({
  lots: layoutConstraintSchema,
  few: layoutConstraintSchema,
  none: layoutConstraintSchema
})

export const styleSchema = styleBaseSchema.extend({
  position: z.number(),
  compatibleBackgrounds: z.array(compatibleBackgroundSchema),
  fonts: z.array(styleFontSchema),
  layoutConstraints: layoutConstraintsSchema,
  colors: z.record(z.string(), z.array(z.string()))
})
export type Style = z.infer<typeof styleSchema>
