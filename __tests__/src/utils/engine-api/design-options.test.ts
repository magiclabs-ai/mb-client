import {MagicBookClient} from '@/index'
import {axiosGet} from '../../../mocks/axios'
import {describe, expect, test, vi} from 'vitest'
import {designOptionsFactory} from '../../../factories/design-options.factory'
import {getDesignOptions} from '@/utils/engine-api/design-options'
import {snakeCaseObjectKeysToCamelCase} from '@/utils/toolbox'

vi.unmock('@/utils/engine-api/design-options')
describe('Design Options APIs', () => {
  const client = new MagicBookClient('123')
  test('getDesignOptions function', async () => {
    const designOptions = designOptionsFactory()
    axiosGet.mockResolvedValue({data: designOptions})
    const res = await getDesignOptions(client, '8x8', 200, 'best')
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(snakeCaseObjectKeysToCamelCase(designOptions)))
  })
})

