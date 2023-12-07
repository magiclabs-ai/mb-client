import {describe, expect, test} from 'vitest'
import {engineAPI} from '../../shared'
import {eventFactory} from '../../factories/event.factory'
import {eventSchema} from '@/core/types/event'
import {fetchMocker} from '../../mocks/fetch'
import {paginationFactory} from '../../factories/pagination.factory'

describe('Engine API Design Options Endpoints', () => {

  test('listBookEvents', async () => {
    const fakeEvents = paginationFactory({factory: eventFactory, schema: eventSchema})
    fetchMocker.mockResponse(JSON.stringify(fakeEvents))
    const events = await engineAPI.events.listBookEvents({
      bookId: 'bookId'
    })
    expect(events).toStrictEqual(fakeEvents)
  })

  test('createBookEvent', async () => {
    const fakeEvent = eventFactory()
    fetchMocker.mockResponse(JSON.stringify(fakeEvent))
    const event = await engineAPI.events.createBookEvent({
      bookId: '01HF9PDM0JZRQ26TTFKT9D99ZW',
      name: 'book.viewed'
    })
    expect(event).toStrictEqual(fakeEvent)
  })
  
  test('createBookEvent with context', async () => {
    const fakeEvent = eventFactory({context: {foo: 'bar'}})
    fetchMocker.mockResponse(JSON.stringify(fakeEvent))
    const event = await engineAPI.events.createBookEvent({
      bookId: 'bookId',
      name: 'book.viewed',
      data: fakeEvent.context
    })
    expect(event).toStrictEqual(fakeEvent)
  })

  test('deleteBookEvent', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    const res = await engineAPI.events.deleteBookEvent({
      bookId: '01HF9PDM0JZRQ26TTFKT9D99ZW',
      name: 'test'
    })
    expect(res).toStrictEqual(undefined)
  })

})
