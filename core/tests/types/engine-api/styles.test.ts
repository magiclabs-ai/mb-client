import {describe, expect, test} from 'vitest'
import {fetchMocker} from '../../mocks/fetch'
import {paginationFactory} from '../../factories/pagination.factory'
import { engineAPI } from '../../shared'
import { styleBaseFactory, styleFactory } from '../../factories/style.factory'
import { styleBaseSchema} from '@/core/types/style'


describe('Engine API Styles Endpoints', () => {

  test('list', async () => {
    const fakeStyles = await paginationFactory({factory: styleBaseFactory, schema: styleBaseSchema})
    fetchMocker.mockResponse(JSON.stringify(fakeStyles))
    const res = await engineAPI.styles.list()
    expect(res).toStrictEqual(fakeStyles)
  })
  
  test('retrieve', async () => {
    const fakeStyle = await styleFactory() 
    fetchMocker.mockResponse(JSON.stringify(fakeStyle))
    const res = await engineAPI.styles.retrieve({styleSlug: fakeStyle.slug})
    expect(res).toStrictEqual(fakeStyle)
  })

  test('update', async () => {
    const fakeStyle = await styleFactory() 
    fetchMocker.mockResponse(JSON.stringify(fakeStyle))
    const res = await engineAPI.styles.update({styleSlug: fakeStyle.slug, payload: fakeStyle})
    expect(res).toStrictEqual(fakeStyle)
  })

})
