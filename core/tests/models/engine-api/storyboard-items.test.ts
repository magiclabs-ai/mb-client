import {EngineAPI} from '@/core/models/engine-api'
import {describe, expect, test} from 'vitest'
import {fetchMocker} from '../../mocks/fetch'
import {storyboardItemServerFactory} from '../../factories/storyboard-item.factory'

describe('Engine API Storyboard Items Endpoints', () => {
  const engineAPI = new EngineAPI('https://api.magicbook.mock', '123')

  test('retrieve', async () => {
    const fakeStoryBoardItems = [storyboardItemServerFactory(), storyboardItemServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(fakeStoryBoardItems))
    const storyboardItems = await engineAPI.storyboardItems.list('bookId')
    expect(storyboardItems).toStrictEqual(JSON.parse(JSON.stringify(fakeStoryBoardItems)))
  })
})
