import {z} from 'zod'

export const configSchema = z.object({
  apiHost: z.string(),
  wsHost: z.string(),
  apiKey: z.string(),
  env: z.string()
})
export type Config = z.infer<typeof configSchema>
