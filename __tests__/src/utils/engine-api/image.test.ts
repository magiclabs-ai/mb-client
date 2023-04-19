import {addImageInBook} from '../../../../src/utils/engine-api/images'
import {axiosPost} from '../../../mocks/setup'
import {describe, test, vi} from 'vitest'
import {imageServerFactory} from '../../../factories/image.factory'

vi.unmock('@/utils/engine-api/books')
describe('Image APIs', () => {
  test('addImageInBook function', () => {
    axiosPost.mockResolvedValue({data: imageServerFactory()})
    addImageInBook('bookId', imageServerFactory())
  })
})

