import {ZodTypeAny, z} from 'zod'

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
export const embellishmentOrientations = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-right',
  'bottom-left'] as const
export const embellishmentThicknesses = ['thin', 'thick', 'normal'] as const
export const embellishmentStackings = ['front', 'back'] as const

export const embellishmentAnchorsSchema = z.object({
  x0: z.number(),
  x1: z.number(),
  y0: z.number(),
  y1: z.number()
})
export type EmbellishmentAnchors = z.infer<typeof embellishmentAnchorsSchema>

export const embellishmentPhotoCornerAnchorsSchema = z.object({
  x0: z.number(),
  y0: z.number()
})
export type EmbellishmentPhotoCornerAnchors = z.infer<typeof embellishmentPhotoCornerAnchorsSchema>

export const embellishmentBaseSchema = z.object({
  id: z.string(),
  active: z.boolean(),
  url: z.string(),
  name: z.string(),
  pattern: z.string(),
  primaryColor: z.string(),
  margin: z.number(),
  width: z.number(),
  height: z.number(),
  style: z.string()
})
export type EmbellishmentBase = z.infer<typeof embellishmentBaseSchema>

export const embellishmentTextStickerSchema = embellishmentBaseSchema.extend({
  type: z.literal('text-sticker'),
  text: z.string(),
  isSpecific: z.boolean(),
  minSurface: z.number(),
  maxSurface: z.number()
})
export type EmbellishmentTextSticker = z.infer<typeof embellishmentTextStickerSchema>

export const embellishmentTPointSchema = embellishmentBaseSchema.extend({
  type: z.literal('t-point'),
  minSurface: z.number(),
  maxSurface: z.number()
})
export type EmbellishmentTPoint = z.infer<typeof embellishmentTPointSchema>

export const embellishmentGraphicStickerSchema = embellishmentBaseSchema.extend({
  type: z.literal('graphic-sticker'),
  minSurface: z.number(),
  maxSurface: z.number(),
  hFlippable: z.boolean(),
  vFlippable: z.boolean()
})
export type EmbellishmentGraphicSticker = z.infer<typeof embellishmentGraphicStickerSchema>

export const embellishmentStampSchema = embellishmentBaseSchema.extend({
  type: z.literal('stamp'),
  minSurface: z.number(),
  maxSurface: z.number(),
  hFlippable: z.boolean(),
  vFlippable: z.boolean()
})
export type EmbellishmentStamp = z.infer<typeof embellishmentStampSchema>

export const embellishmentTapeSchema = embellishmentBaseSchema.extend({
  type: z.literal('tape'),
  minSurface: z.number(),
  maxSurface: z.number(),
  hFlippable: z.boolean(),
  vFlippable: z.boolean()
})
export type EmbellishmentTape = z.infer<typeof embellishmentTapeSchema>

export const embellishmentPostcardSchema = embellishmentBaseSchema.extend({
  type: z.literal('postcard'),
  minSurface: z.number(),
  maxSurface: z.number(),
  hFlippable: z.boolean(),
  vFlippable: z.boolean()
})
export type EmbellishmentPostcard = z.infer<typeof embellishmentPostcardSchema>

export const embellishmentBandSchema = embellishmentBaseSchema.extend({
  type: z.literal('band'),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  thickness: z.enum(embellishmentThicknesses)
})
export type EmbellishmentBand = z.infer<typeof embellishmentBandSchema>

export const embellishmentStripSchema = embellishmentBaseSchema.extend({
  type: z.literal('strip'),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  thickness: z.enum(embellishmentThicknesses)
})
export type EmbellishmentStrip = z.infer<typeof embellishmentStripSchema>

export const embellishmentPhotoCornerSchema = embellishmentBaseSchema.extend({
  type: z.literal('photo-corner'),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  anchors: embellishmentPhotoCornerAnchorsSchema,
  stacking: z.enum(embellishmentStackings),
  scale: z.number()
})
export type EmbellishmentPhotoCorner = z.infer<typeof embellishmentPhotoCornerSchema>

export const embellishmentPageCornerSchema = embellishmentBaseSchema.extend({
  type: z.literal('page-corner'),
  orientation: z.enum(embellishmentOrientations),
  orientations: z.array(z.enum(embellishmentOrientations)),
  scale: z.number()
})
export type EmbellishmentPageCorner = z.infer<typeof embellishmentPageCornerSchema>

export const embellishmentFrameSchema = embellishmentBaseSchema.extend({
  type: z.literal('frame'),
  rotatable: z.boolean(),
  anchors: embellishmentAnchorsSchema,
  stacking: z.enum(embellishmentStackings)
})
export type EmbellishmentFrame = z.infer<typeof embellishmentFrameSchema>

export const embellishmentBackgroundListSchema = embellishmentBaseSchema.extend({
  type: z.literal('background'),
  rotatable: z.boolean()
})
export type EmbellishmentBackgroundList = z.infer<typeof embellishmentBackgroundListSchema>

export const embellishmentBackgroundSchema = embellishmentBackgroundListSchema.extend({
  colors: z.record(z.unknown()),
  backgrounds: z.record(z.unknown())
})
export type EmbellishmentBackground = z.infer<typeof embellishmentBackgroundSchema>

const embellishmentSchemasArray: Array<z.AnyZodObject> = [
  embellishmentBackgroundSchema,
  embellishmentFrameSchema,
  embellishmentTextStickerSchema,
  embellishmentBandSchema,
  embellishmentStripSchema,
  embellishmentPageCornerSchema,
  embellishmentPhotoCornerSchema,
  embellishmentTPointSchema,
  embellishmentStampSchema,
  embellishmentTapeSchema,
  embellishmentPostcardSchema,
  embellishmentGraphicStickerSchema
]
export const embellishmentSchemas = z.union(
  [...embellishmentSchemasArray] as unknown as readonly [ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]
)
export type Embellishment = z.infer<typeof embellishmentSchemas>

export const embellishmentUpdateSchemas = z.union(
  [
    ...embellishmentSchemasArray.map((schema) => schema.partial().optional())
  ] as unknown as readonly [ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]
)
export type EmbellishmentUpdate = z.infer<typeof embellishmentUpdateSchemas>

const embellishmentListSchemasArray = [...embellishmentSchemasArray]
embellishmentListSchemasArray.shift() // remove background
embellishmentListSchemasArray.push(embellishmentBackgroundListSchema) // add base background

export const embellishmentListSchemas = z.union(
  [...embellishmentListSchemasArray] as unknown as readonly [ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]
)
export type EmbellishmentList = z.infer<typeof embellishmentListSchemas>
