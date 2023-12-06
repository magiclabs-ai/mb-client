import {z} from 'zod'

export const StoryboardItemImageFaceSchema = z.object({
  score: z.number(),
  boundingBox: z.object({
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number()
  }),
  size: z.number(),
  eyesOpenScore: z.number(),
  smileScore: z.number(),
  facingCameraScore: z.number()
})

export const StoryboardItemImageSchema = z.object({
  id: z.string(),
  url: z.string(),
  category: z.string(),
  aestheticScore: z.number(),
  faces: z.array(StoryboardItemImageFaceSchema),
  roi: z.object({
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number()
  }),
  takenAt: z.number(),
  width: z.number(),
  height: z.number()
})

export const StoryboardItemSchema = z.object({
  id: z.string(),
  sequence: z.number(),
  bookId: z.string(),
  similarity: z.number(),
  duplicate: z.boolean(),
  selected: z.boolean(),
  surfaceWeight: z.number(),
  frontCover: z.boolean().optional(),
  backCover: z.boolean().optional(),
  scene: z.number(),
  subscene: z.number(),
  spineBreak: z.boolean().optional(),
  image: StoryboardItemImageSchema
})

export type StoryboardItem = z.infer<typeof StoryboardItemSchema>
