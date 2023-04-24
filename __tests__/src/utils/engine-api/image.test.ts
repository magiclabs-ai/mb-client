import {addImageInBook} from '../../../../src/utils/engine-api/images'
import {axiosPost} from '../../../mocks/setup'
import {describe, expect, test, vi} from 'vitest'
import {imageServerFactory} from '../../../factories/image.factory'

vi.unmock('@/utils/engine-api/images')
describe('Image APIs', () => {
  test('addImageInBook function', async () => {
    const imagesLength = 1
    axiosPost.mockResolvedValue({data: imagesLength})
    const res = await addImageInBook('bookId', imageServerFactory())
    expect(res.data).toBe(imagesLength)
  })
})

