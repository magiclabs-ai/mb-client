import {describe, expect, test} from 'vitest'
import {engineAPI} from '../../shared'
import {fetchMocker} from '../../mocks/fetch'
import {snakeCaseObjectKeysToCamelCase} from '@/core/utils/toolbox'
import {spreadServerFactory} from '../../factories/spread.factory'

describe('Engine API Spreads Endpoints', () => {

  test('list', async () => {
    const fakeSpreadList = [spreadServerFactory(), spreadServerFactory()]
    fetchMocker.mockResponse(JSON.stringify(fakeSpreadList))
    const spreads = await engineAPI.spreads.list({bookId: 'bookId'})
    expect(spreads).toEqual(fakeSpreadList.map(spread => snakeCaseObjectKeysToCamelCase(spread)))
  })

  test('create', async () => {
    const fakeSpread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeSpread))
    const spread = await engineAPI.spreads.create({
      bookId: 'bookId',
      spread: fakeSpread
    })
    expect(spread).toEqual(snakeCaseObjectKeysToCamelCase(fakeSpread))
  })

  test('retrieve', async () => {
    const fakeSpread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeSpread))
    const spread = await engineAPI.spreads.retrieve({
      spreadId: 'spreadId',
      bookId: 'bookId'
    })
    expect(spread).toEqual(snakeCaseObjectKeysToCamelCase(fakeSpread))
  })

  test('update', async () => {
    const fakeSpread = spreadServerFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeSpread))
    const spread = await engineAPI.spreads.update({
      spreadId: 'spreadId',
      bookId: 'bookId',
      payload: fakeSpread
    })
    expect(spread).toEqual(snakeCaseObjectKeysToCamelCase(fakeSpread))
  })

  test('delete', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    const spread = await engineAPI.spreads.delete({
      spreadId: 'spreadId',
      bookId: 'bookId'
    })
    expect(spread).toBeUndefined()
  })
})
