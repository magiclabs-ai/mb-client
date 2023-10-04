import {EngineAPI} from '@/core/models/engine-api'
import {describe, expect, test} from 'vitest'
import {eventFactory} from '../../factories/event.factory'
import {fetchMocker} from '../../mocks/fetch'

describe('Engine API Design Options Endpoints', () => {
  const engineAPI = new EngineAPI('https://api.magicbook.mock', '123')

  test('createBookEvent', async () => {
    const fakeEvent = eventFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeEvent))
    const event = await engineAPI.events.createBookEvent('bookId', 'book.viewed')
    expect(event).toStrictEqual(fakeEvent)
  })
  
  test('createBookEvent with context', async () => {
    const fakeEvent = eventFactory({context: {foo: 'bar'}})
    fetchMocker.mockResponse(JSON.stringify(fakeEvent))
    const event = await engineAPI.events.createBookEvent('bookId', 'book.viewed', fakeEvent.context)
    expect(event).toStrictEqual(fakeEvent)
  })
})
