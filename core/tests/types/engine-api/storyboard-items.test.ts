import {describe, expect, test} from 'vitest'
import {engineAPI} from '../../shared'
import {fetchMocker} from '../../mocks/fetch'
import {storyboardItemFactory} from '../../factories/storyboard-item.factory'

describe('Engine API Storyboard Items Endpoints', () => {

  test('retrieve Server Schemas', async () => {
    const fakeStoryBoardItems = [storyboardItemFactory(), storyboardItemFactory()]
    fetchMocker.mockResponse(JSON.stringify(fakeStoryBoardItems))
    const storyboardItems = await engineAPI.storyboardItems.list({bookId: 'bookId'})
    expect(storyboardItems).toStrictEqual(JSON.parse(JSON.stringify(fakeStoryBoardItems)))
  })
  
  test('retrieve', async () => {
    const fakeStoryBoardItems = [storyboardItemFactory(), storyboardItemFactory()]
    fetchMocker.mockResponse(JSON.stringify(fakeStoryBoardItems))
    const storyboardItems = await engineAPI.storyboardItems.list({bookId: 'bookId'})
    expect(storyboardItems).toStrictEqual(JSON.parse(JSON.stringify(fakeStoryBoardItems)))
  })
})
