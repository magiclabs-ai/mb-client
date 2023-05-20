import {axiosGet} from '../../../mocks/axios'
import {describe, expect, test, vi} from 'vitest'
import {designOptionsFactory} from '../../../factories/design-options.factory'
import {getDesignOptions} from '@/utils/engine-api/design-options'
import {snakeCaseObjectKeysToCamelCase} from '@/utils/toolbox'

vi.unmock('@/utils/engine-api/design-options')
describe('Design Options APIs', () => {
  test('getDesignOptions function', async () => {
    const designOptions = designOptionsFactory()
    axiosGet.mockResolvedValue({data: designOptions})
    const res = await getDesignOptions('8x8', 200)
    expect(res).toBe(snakeCaseObjectKeysToCamelCase(designOptions))
  })
})

