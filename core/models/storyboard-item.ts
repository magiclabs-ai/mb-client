import {z} from 'zod'

export const StoryboardItemImageFaceServerSchema = z.object({
  score: z.number(),
  bounding_box: z.object({
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number()
  }),
  size: z.number(),
  eyes_open_score: z.number(),
  smile_score: z.number(),
  facing_camera_score: z.number()
})

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

export const StoryboardItemImageServerSchema = z.object({
  id: z.string(),
  url: z.string(),
  category: z.string(),
  aesthetic_score: z.number(),
  faces: z.array(StoryboardItemImageFaceServerSchema),
  roi: z.object({
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number()
  }),
  taken_at: z.string(),
  width: z.number(),
  height: z.number()
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
  takenAt: z.string(),
  width: z.number(),
  height: z.number()
})

export const StoryboardItemServerSchema = z.object({
  id: z.string(),
  sequence: z.number(),
  book_id: z.string(),
  similarity: z.number(),
  duplicate: z.boolean(),
  selected: z.boolean(),
  surface_weight: z.number(),
  front_cover: z.boolean(),
  back_cover: z.boolean(),
  scene: z.number(),
  subscene: z.number(),
  spine_break: z.boolean(),
  image: StoryboardItemImageServerSchema
})
export type StoryboardItemServer = z.infer<typeof StoryboardItemServerSchema>

export const StoryboardItemSchema = z.object({
  id: z.string(),
  sequence: z.number(),
  bookId: z.string(),
  similarity: z.number(),
  duplicate: z.boolean(),
  selected: z.boolean(),
  surfaceWeight: z.number(),
  frontCover: z.boolean(),
  backCover: z.boolean(),
  scene: z.number(),
  subscene: z.number(),
  spineBreak: z.boolean(),
  image: StoryboardItemImageSchema
})

export type StoryboardItem = z.infer<typeof StoryboardItemSchema>
