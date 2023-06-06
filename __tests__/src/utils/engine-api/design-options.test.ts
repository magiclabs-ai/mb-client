import {axiosGet} from '../../../mocks/axios'
import {describe, expect, test, vi} from 'vitest'
import {designOptionsFactory} from '../../../factories/design-options.factory'
import {faker} from '@faker-js/faker'
import {getDesignOptions} from '@/utils/engine-api/design-options'
import {snakeCaseObjectKeysToCamelCase} from '@/utils/toolbox'

vi.unmock('@/utils/engine-api/design-options')
describe('Design Options APIs', () => {
  const apiKey = faker.string.uuid()
  test('getDesignOptions function', async () => {
    const designOptions = designOptionsFactory()
    axiosGet.mockResolvedValue({data: designOptions})
    const res = await getDesignOptions(apiKey, '8x8', 200)
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(snakeCaseObjectKeysToCamelCase(designOptions)))
  })
})

