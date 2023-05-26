import {addImageInBook} from '../../../../src/utils/engine-api/images'
import {axiosPost} from '../../../mocks/axios'
import {describe, expect, test, vi} from 'vitest'
import {faker} from '@faker-js/faker'
import {imageServerFactory} from '../../../factories/image.factory'

vi.unmock('@/utils/engine-api/images')
describe('Image APIs', () => {
  test('addImageInBook function', async () => {
    const apiKey = faker.string.uuid()
    const image = imageServerFactory()
    axiosPost.mockResolvedValue({data: image})
    const res = await addImageInBook(apiKey, 'bookId', image)
    expect(res).toBe(image)
  })
})

