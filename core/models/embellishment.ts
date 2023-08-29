import {z} from 'zod'

export const embellishmentTypes = [
  'background',
  'band',
  'strip',
  'page-corner',
  'photo-corner',
  'frame',
  't-point',
  'luggage-tag',
  'stamp',
  'tape',
  'postcard',
  'top-sticker',
  'bottom-sticker',
  'graphic-sticker',
  'text-sticker'
] as const
export const embellishmentOrientations = ['top', 'bottom', 'left', 'right'] as const
export const embellishmentThicknesses = ['thin', 'thick', 'normal'] as const
export const embellishmentStacking = ['front', 'backof'] as const

export const embellishmentAnchorsSchema = z.object({
  x0: z.number(),
  x1: z.number(),
  y0: z.number(),
  y1: z.number()
})
export type EmbellishmentAnchors = z.infer<typeof embellishmentAnchorsSchema>

export const embellishmentBaseServerSchema = z.object({
  id: z.string(),
  active: z.boolean(),
  // type: z.enum(embellishmentTypes),
  name: z.string(),
  // filename: z.string(),
  pattern: z.string(),
  primary_color: z.string(),
  margin: z.number()
})
export type EmbellishmentBaseServer = z.infer<typeof embellishmentBaseServerSchema>

export const embellishmentBaseSchema = z.object({
  id: z.string(),
  active: z.boolean(),
  // type: z.enum(embellishmentTypes),
  name: z.string(),
  // filename: z.string(),
  pattern: z.string(),
  primaryColor: z.string(),
  margin: z.number()
})
export type EmbellishmentBase = z.infer<typeof embellishmentBaseSchema>

export const embellishmentTextStickerServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('text-sticker'.toUpperCase()),
  text: z.string(),
  is_specific: z.boolean(),
  min_surface: z.number(),
  max_surface: z.number()
})
export type EmbellishmentTextStickerServer = z.infer<typeof embellishmentTextStickerServerSchema>

export const embellishmentTextStickerSchema = embellishmentBaseSchema.extend({
  type: z.literal('text-sticker'.toUpperCase()),
  text: z.string(),
  isSpecific: z.boolean(),
  minSurface: z.number(),
  maxSurface: z.number()
})
export type EmbellishmentTextSticker = z.infer<typeof embellishmentTextStickerSchema>

export const embellishmentTPointServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('t-point'.toUpperCase()),
  min_surface: z.number(),
  max_surface: z.number()
})
export type EmbellishmentTPointServer = z.infer<typeof embellishmentTPointServerSchema>

export const embellishmentTPointSchema = embellishmentBaseSchema.extend({
  type: z.literal('t-point'.toUpperCase()),
  minSurface: z.number(),
  maxSurface: z.number()
})
export type EmbellishmentTPoint = z.infer<typeof embellishmentTPointSchema>

export const embellishmentGraphicStickerServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('graphic-sticker'.toUpperCase()),
  min_surface: z.number(),
  max_surface: z.number(),
  h_flippable: z.boolean(),
  v_flippable: z.boolean()
})
export type EmbellishmentGraphicStickerServer = z.infer<typeof embellishmentGraphicStickerServerSchema>

export const embellishmentGraphicStickerSchema = embellishmentBaseSchema.extend({
  type: z.literal('graphic-sticker'.toUpperCase()),
  minSurface: z.number(),
  maxSurface: z.number(),
  hFlippable: z.boolean(),
  vFlippable: z.boolean()
})
export type EmbellishmentGraphicSticker = z.infer<typeof embellishmentGraphicStickerSchema>

export const embellishmentStampServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('stamp'.toUpperCase()),
  min_surface: z.number(),
  max_surface: z.number(),
  h_flippable: z.boolean(),
  v_flippable: z.boolean()
})
export type EmbellishmentStampServer = z.infer<typeof embellishmentStampServerSchema>

export const embellishmentStampSchema = embellishmentBaseSchema.extend({
  type: z.literal('stamp'.toUpperCase()),
  minSurface: z.number(),
  maxSurface: z.number(),
  hFlippable: z.boolean(),
  vFlippable: z.boolean()
})
export type EmbellishmentStamp = z.infer<typeof embellishmentStampSchema>

export const embellishmentTapeServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('tape'.toUpperCase()),
  min_surface: z.number(),
  max_surface: z.number(),
  h_flippable: z.boolean(),
  v_flippable: z.boolean()
})
export type EmbellishmentTapeServer = z.infer<typeof embellishmentTapeServerSchema>

export const embellishmentTapeSchema = embellishmentBaseSchema.extend({
  type: z.literal('tape'.toUpperCase()),
  minSurface: z.number(),
  maxSurface: z.number(),
  hFlippable: z.boolean(),
  vFlippable: z.boolean()
})
export type EmbellishmentTape = z.infer<typeof embellishmentTapeSchema>

export const embellishmentPostcardServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('postcard'.toUpperCase()),
  min_surface: z.number(),
  max_surface: z.number(),
  h_flippable: z.boolean(),
  v_flippable: z.boolean()
})
export type EmbellishmentPostcardServer = z.infer<typeof embellishmentPostcardServerSchema>

export const embellishmentPostcardSchema = embellishmentBaseSchema.extend({
  type: z.literal('postcard'.toUpperCase()),
  minSurface: z.number(),
  maxSurface: z.number(),
  hFlippable: z.boolean(),
  vFlippable: z.boolean()
})
export type EmbellishmentPostcard = z.infer<typeof embellishmentPostcardSchema>

export const embellishmentBandServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('band'.toUpperCase()),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  thickness: z.string()
})
export type EmbellishmentBandServer = z.infer<typeof embellishmentBandServerSchema>

export const embellishmentBandSchema = embellishmentBaseSchema.extend({
  type: z.literal('band'.toUpperCase()),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  thickness: z.enum(embellishmentThicknesses)
})
export type EmbellishmentBand = z.infer<typeof embellishmentBandSchema>

export const embellishmentStripServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('strip'.toUpperCase()),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  thickness: z.enum(embellishmentThicknesses)
})
export type EmbellishmentStripServer = z.infer<typeof embellishmentStripServerSchema>

export const embellishmentStripSchema = embellishmentBaseSchema.extend({
  type: z.literal('strip'.toUpperCase()),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  thickness: z.enum(embellishmentThicknesses)
})
export type EmbellishmentStrip = z.infer<typeof embellishmentStripSchema>

export const embellishmentPhotoCornerServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('photo-corner'.toUpperCase()),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  anchors: embellishmentAnchorsSchema,
  stacking: z.enum(embellishmentStacking),
  scale: z.number()
})
export type EmbellishmentPhotoCornerServer = z.infer<typeof embellishmentPhotoCornerServerSchema>

export const embellishmentPhotoCornerSchema = embellishmentBaseSchema.extend({
  type: z.literal('photo-corner'.toUpperCase()),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  anchors: embellishmentAnchorsSchema,
  stacking: z.enum(embellishmentStacking),
  scale: z.number()
})
export type EmbellishmentPhotoCorner = z.infer<typeof embellishmentPhotoCornerSchema>

export const embellishmentPageCornerServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('page-corner'.toUpperCase()),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  scale: z.number()
})
export type EmbellishmentPageCornerServer = z.infer<typeof embellishmentPageCornerServerSchema>

export const embellishmentPageCornerSchema = embellishmentBaseSchema.extend({
  type: z.literal('page-corner'.toUpperCase()),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  scale: z.number()
})
export type EmbellishmentPageCorner = z.infer<typeof embellishmentPageCornerSchema>

export const embellishmentFrameServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('frame'.toUpperCase()),
  rotatable: z.boolean(),
  anchors: embellishmentAnchorsSchema,
  stacking: z.enum(embellishmentStacking)
})
export type EmbellishmentFrameServer = z.infer<typeof embellishmentFrameServerSchema>

export const embellishmentFrameSchema = embellishmentBaseSchema.extend({
  type: z.literal('frame'.toUpperCase()),
  rotatable: z.boolean(),
  anchors: embellishmentAnchorsSchema,
  stacking: z.enum(embellishmentStacking)
})
export type EmbellishmentFrame = z.infer<typeof embellishmentFrameSchema>

export const embellishmentBackgroundServerSchema = embellishmentBaseServerSchema.extend({
  type: z.literal('background'.toUpperCase()),
  compatible_colors: z.array(z.string()),
  compatibles: z.array(z.string()),
  rotatable: z.boolean()
})
export type EmbellishmentBackgroundServer = z.infer<typeof embellishmentBackgroundServerSchema>

export const embellishmentBackgroundSchema = embellishmentBaseSchema.extend({
  type: z.literal('background'.toUpperCase()),
  compatibleColors: z.array(z.string()),
  compatibles: z.array(z.string()),
  rotatable: z.boolean()
})
export type EmbellishmentBackground = z.infer<typeof embellishmentBackgroundSchema>

export const embellishmentServerSchemas = z.union([
  embellishmentBackgroundServerSchema,
  embellishmentFrameServerSchema,
  embellishmentTextStickerServerSchema,
  embellishmentTextStickerServerSchema,
  embellishmentBandServerSchema,
  embellishmentStripServerSchema,
  embellishmentPageCornerServerSchema,
  embellishmentPhotoCornerServerSchema,
  embellishmentTPointServerSchema,
  embellishmentStampServerSchema,
  embellishmentTapeServerSchema,
  embellishmentPostcardServerSchema,
  embellishmentGraphicStickerServerSchema
])
