import {describe, expect, test} from 'vitest'
import {embellishmentTextStickerFactory} from '../../factories/embellishment.factory'
import {embellishmentTextStickerSchema} from '@/core/types/embellishment'
import {engineAPI} from '../../shared'
import {fetchMocker} from '../../mocks/fetch'
import {paginationFactory} from '../../factories/pagination.factory'

describe('Engine API Embellishments Endpoints', () => {

  test('list', async () => {
    const fakeEmbellishments = paginationFactory({
      factory: embellishmentTextStickerFactory,
      schema: embellishmentTextStickerSchema
    })
    fetchMocker.mockResponse(JSON.stringify(fakeEmbellishments))
    const embellishments = await engineAPI.embellishments.list({styleSlug: 'style-slug'})
    expect(embellishments).toStrictEqual(fakeEmbellishments)
  })

  test('retrieve', async () => {
    const fakeEmbellishment = await embellishmentTextStickerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeEmbellishment))
    const embellishment = await engineAPI.embellishments.retrieve({
      embellishmentId: fakeEmbellishment.id,
      styleSlug: 'style-slug'
    })
    expect(embellishment).toStrictEqual(fakeEmbellishment)
  })
  
  test('update', async () => {
    const fakeEmbellishment = await embellishmentTextStickerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeEmbellishment))
    const embellishment = await engineAPI.embellishments.update({
      embellishmentId: fakeEmbellishment.id,
      styleSlug: 'style-slug',
      payload: fakeEmbellishment
    })
    expect(embellishment).toStrictEqual(fakeEmbellishment)
  })

})
