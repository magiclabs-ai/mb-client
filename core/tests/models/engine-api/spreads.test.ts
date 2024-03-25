import {EngineAPI} from '@/core/models/engine-api'
import {canvasFactory} from '../../factories/alternate-layout.factory'
import {describe, expect, test} from 'vitest'
import {fetchMocker} from '../../mocks/fetch'
import {spreadServerFactory} from '../../factories/spread.factory'

describe('Engine API Spreads Endpoints', () => {
  const engineAPI = new EngineAPI('https://api.magicbook.mock', '123')

  test('list', async () => {
    const fakeSpreadList = [spreadServerFactory(), spreadServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(fakeSpreadList))
    const spreads = await engineAPI.spreads.list('bookId')
    expect(spreads).toEqual(JSON.parse(JSON.stringify(fakeSpreadList)))
  })

  test('create', async () => {
    const fakeSpread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeSpread))
    const image = await engineAPI.spreads.create('bookId', fakeSpread)
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeSpread)))
  })

  test('retrieve', async () => {
    const fakeSpread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeSpread))
    const image = await engineAPI.spreads.retrieve('spreadId', 'bookId')
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeSpread)))
  })

  test('update', async () => {
    const fakeSpread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeSpread))
    const image = await engineAPI.spreads.update('spreadId', 'bookId', fakeSpread)
    expect(image).toEqual(JSON.parse(JSON.stringify(fakeSpread)))
  })

  test('delete', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    const image = await engineAPI.spreads.delete('spreadId', 'bookId')
    expect(image).toBeUndefined()
  })

  test('layouts', async () => {
    const fakeAlternateLayouts = Array.from({length: 10}, () => canvasFactory())
    fetchMocker.mockResponse(JSON.stringify(fakeAlternateLayouts))
    const alternateLayouts = await engineAPI.spreads.layouts('bookId', 1)
    expect(alternateLayouts).toEqual(fakeAlternateLayouts)
  })
})
