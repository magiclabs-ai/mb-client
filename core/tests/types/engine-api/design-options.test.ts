import {describe, expect, test} from 'vitest'
import {designOptionsFactory, designOptionsServerFactory} from '../../factories/design-options.factory'
import {designOptionsSchema} from '@/client/src'
import {engineAPI} from '../../shared'
import {fetchMocker} from '../../mocks/fetch'
import {snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'

describe('Engine API Design Options Endpoints', () => {
  test('retrieve', async () => {
    const fakeDesignOptions = designOptionsServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeDesignOptions))
    const designOptions = await engineAPI.designOptions.retrieve({
      bookSize: '10x10',
      imageCount: 20,
      imageFilteringLevel: 'best'
    })
    expect(designOptions).toStrictEqual(snakeCaseObjectKeysToCamelCase(fakeDesignOptions))
  })

  test('design options factory', async () => {
    const factory = designOptionsFactory()
    expect(designOptionsSchema.parse(factory)).toBeTruthy()
  })
})
