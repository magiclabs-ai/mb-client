import {MagicBookClient} from '@/index'
import {addImageInBook} from '../../../../src/utils/engine-api/images'
import {axiosPost} from '../../../mocks/axios'
import {describe, expect, test, vi} from 'vitest'
import {imageServerFactory} from '../../../factories/image.factory'

vi.unmock('@/utils/engine-api/images')
describe('Image APIs', () => {
  const client = new MagicBookClient('123')
  test('addImageInBook function', async () => {
    const image = imageServerFactory()
    axiosPost.mockResolvedValue({data: image})
    const res = await addImageInBook(client, 'bookId', image)
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(image))
  })
})

