import {describe, expect, test} from 'vitest'
import {engineAPI} from '../../shared'
import {fetchMocker} from '../../mocks/fetch'
import {fontFactory} from '../../factories/font.factory'
import {fontSchema} from '@/core/types/font'
import {paginationFactory} from '../../factories/pagination.factory'


describe('Engine API Fonts Endpoints', () => {

  test('list', async () => {
    const fakeFonts = await paginationFactory({factory: fontFactory, schema: fontSchema})
    fetchMocker.mockResponse(JSON.stringify(fakeFonts))
    const res = await engineAPI.fonts.list()
    expect(res).toStrictEqual(fakeFonts)
  })

})
