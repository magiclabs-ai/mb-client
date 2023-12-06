import {describe, expect, test} from 'vitest'
import {fetchMocker} from '../../mocks/fetch'
import {paginationFactory} from '../../factories/pagination.factory'
import { fontFactory } from '../../factories/font.factory'
import { fontSchema } from '@/core/types/font'
import { engineAPI } from '../../shared'


describe('Engine API Fonts Endpoints', () => {

  test('list', async () => {
    const fakeFonts = await paginationFactory({factory: fontFactory, schema: fontSchema})
    fetchMocker.mockResponse(JSON.stringify(fakeFonts))
    const res = await engineAPI.fonts.list()
    expect(res).toStrictEqual(fakeFonts)
  })

})
