import {axiosGet} from '../../../mocks/setup'
import {describe, expect, test, vi} from 'vitest'
import {designOptionsFactory} from '../../../factories/design-options.factory'
import {getDesignOptions} from '@/utils/engine-api/design-options'

vi.unmock('@/utils/engine-api/design-options')
describe('Design Options APIs', () => {
  test('getDesignOptions function', async () => {
    const designOptions = designOptionsFactory()
    axiosGet.mockResolvedValue({data: designOptions})
    const res = await getDesignOptions('8x8', 200)
    expect(res.data).toBe(designOptions)
  })
})

