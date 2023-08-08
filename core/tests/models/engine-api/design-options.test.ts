import {EngineAPI} from '@/core/models/engine-api'
import {describe, expect, test} from 'vitest'
import {designOptionsFactory} from '../../factories/design-options.factory'
import {fetchMocker} from '../../mocks/fetch'

describe('Engine API Design Options Endpoints', () => {
  const engineAPI = new EngineAPI('https://api.magicbook.mock', '123')

  test('retrieve', async () => {
    const fakeDesignOptions = designOptionsFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeDesignOptions))
    const designOptions = await engineAPI.designOptions.retrieve('10x10', 20, 'best')
    expect(designOptions).toStrictEqual(fakeDesignOptions)
  })
})
