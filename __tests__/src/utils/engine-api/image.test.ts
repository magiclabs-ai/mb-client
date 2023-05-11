import {addImageInBook} from '../../../../src/utils/engine-api/images'
import {axiosPost} from '../../../mocks/setup'
import {describe, expect, test, vi} from 'vitest'
import {imageServerFactory} from '../../../factories/image.factory'

vi.unmock('@/utils/engine-api/images')
describe('Image APIs', () => {
  test('addImageInBook function', async () => {
    const image = imageServerFactory()
    axiosPost.mockResolvedValue({data: image})
    const res = await addImageInBook('bookId', image)
    expect(res).toBe(image)
  })
})

