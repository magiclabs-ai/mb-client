import {MagicBookClient} from '@/index'
import {addImageInBook} from '../../../../src/utils/engine-api/images'
import {describe, expect, test, vi} from 'vitest'
import {fetchMocker} from '../../../mocks/fetch'
import {imageServerFactory} from '../../../factories/image.factory'

vi.unmock('@/utils/engine-api/images')
describe('Image APIs', () => {
  const client = new MagicBookClient('123')
  test('addImageInBook function', async () => {
    const image = imageServerFactory()
    fetchMocker.mockResponse(JSON.stringify(image))
    const res = await addImageInBook(client, 'bookId', image)
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(image))
  })
})

