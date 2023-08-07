import {MagicBookClient} from '@/index'
import {describe, expect, test, vi} from 'vitest'
import {designOptionsFactory} from '../../../../../../core/factories/design-options.factory'
import {fetchMocker} from '../../../../../../core/mocks/fetch'
import {getDesignOptions} from '@/utils/engine-api/design-options'
import {snakeCaseObjectKeysToCamelCase} from '@/utils/toolbox'

vi.unmock('@/utils/engine-api/design-options')
describe('Design Options APIs', () => {
  const client = new MagicBookClient('123')
  test('getDesignOptions function', async () => {
    const designOptions = designOptionsFactory()
    fetchMocker.mockResponse(JSON.stringify(designOptions))
    const res = await getDesignOptions(client, '8x8', 200, 'best')
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(snakeCaseObjectKeysToCamelCase(designOptions)))
  })
})

