import {ImageServer, imageServerSchema} from '../../models/design-request/image'
import {MagicBookClient} from '@/models/client'
import {handleAsyncFunction} from '../toolbox'

export async function addImageInBook({fetcher}: MagicBookClient, bookId: string, payload: ImageServer) {
  return handleAsyncFunction(async () => {
    const res = await fetcher.call({
      path: `/v1/images/book/${bookId}`,
      options: {
        method: 'POST',
        body: JSON.stringify(payload)
      }
    })
    return imageServerSchema.parse(res)
  })
}
