import {EngineAPI} from '@/core/models/engine-api'
import {describe, expect, test} from 'vitest'
import {designOptionsFactory, designOptionsServerFactory} from '../../factories/design-options.factory'
import {designOptionsSchema} from '@/client/src'
import {fetchMocker} from '../../mocks/fetch'

describe('Engine API Design Options Endpoints', () => {
  const engineAPI = new EngineAPI('https://api.magicbook.mock', '123')

  test('retrieve', async () => {
    const fakeDesignOptions = designOptionsServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeDesignOptions))
    const designOptions = await engineAPI.designOptions.retrieve('10x10', 20, 'best')
    expect(designOptions).toStrictEqual(fakeDesignOptions)
  })

  test('design options factory', async () => {
    const factory = designOptionsFactory()
    expect(designOptionsSchema.parse(factory)).toBeTruthy()
  })
})
