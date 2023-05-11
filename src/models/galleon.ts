import {z} from 'zod'

export const imageAssignmentSchema = z.object({
  photoRefId: z.number(),
  finalCrop: z.array(z.number())
})
export type ImageAssignment = z.infer<typeof imageAssignmentSchema>

export const positionSchema = z.object({
  x: z.number(),
  y: z.number(),
  width: z.number().optional(),
  height: z.number().optional(),
  rotation: z.number()
})
export type Position = z.infer<typeof positionSchema>

export const photoMetadataSchema = z.object({
  id: z.string(),
  llx: z.number(),
  lly: z.number(),
  urx: z.number(),
  ury: z.number(),
  data: z.string(),
  title: z.string(),
  width: z.number(),
  effect: z.string(),
  height: z.number(),
  source: z.string(),
  rotation: z.number(),
  uploadTime: z.string()
})
export type PhotoMetadata = z.infer<typeof photoMetadataSchema>

export const propertySchema = z.object({
  key: z.string(),
  value: z.union([z.string(), z.number(), z.boolean()]).nullable()
})
export type Property = z.infer<typeof propertySchema>

export const assetSchema = z.object({
  type: z.string(),
  imageAssignment: imageAssignmentSchema.optional(),
  position: positionSchema,
  seqNum: z.number(),
  z: z.number(),
  id: z.string().optional(),
  horizJustification: z.string().optional(),
  vertJustification: z.string().optional(),
  text: z.string().optional(),
  fontId: z.string().optional(),
  fontSize: z.number().optional(),
  fontColor: z.string().optional(),
  frame: z.string().optional()
})
export type Asset = z.infer<typeof assetSchema>

export const photoStripSchema = z.object({
  url: z.string(),
  encryptId: z.string(),
  photoRefId: z.number(),
  photoMetadata: photoMetadataSchema
})
export type PhotoStrip = z.infer<typeof photoStripSchema>

export const reportingDataSchema = z.object({
  properties: z.array(propertySchema)
})
export type ReportingData = z.infer<typeof reportingDataSchema>

export const canvasSchema = z.object({
  backgroundId: z.string().optional(),
  assets: z.array(assetSchema)
})
export type Canvas = z.infer<typeof canvasSchema>

export const pageSchema = z.object({
  pageNum: z.number(),
  type: z.string(),
  canvas: canvasSchema
})
export type Page = z.infer<typeof pageSchema>

export const magicShopBookSchema = z.object({
  pages: z.array(pageSchema),
  photoStrip: z.array(photoStripSchema)
})
export type MagicShopBook = z.infer<typeof magicShopBookSchema>

export const bookCreationRequestSchema = z.object({
  title: z.string(),
  coverSpecId: z.string(),
  styleId: z.number(),
  userId: z.string(),
  magicShopBook: magicShopBookSchema,
  reportingData: reportingDataSchema
})
export type BookCreationRequest = z.infer<typeof bookCreationRequestSchema>
