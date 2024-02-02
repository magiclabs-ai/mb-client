import '../../../src/commands/events'
import {describe, expect, test, vi} from 'vitest'
import {eventFactory} from '@/core/tests/factories/event.factory'
import {eventSchema} from '@/core/types/event'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {mockProcessExit} from 'vitest-mock-process'
import {paginationFactory} from '@/core/tests/factories/pagination.factory'
import {program} from 'commander'
import prompts from 'prompts'

mockProcessExit()

describe('Events', () => {
  const logSpy = vi.spyOn(console, 'log')

  test('list events without args', async () => {
    const fakeEvents = paginationFactory({factory: eventFactory, schema: eventSchema})
    fetchMocker.mockResponse(JSON.stringify(fakeEvents))
    prompts.inject(['book.id'])
    await program.parseAsync(['events', 'list'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(formatReturnJSON(fakeEvents))
  })

  test('list events', async () => {
    const fakeEvents = paginationFactory({factory: eventFactory, schema: eventSchema})
    fetchMocker.mockResponse(JSON.stringify(fakeEvents))
    await program.parseAsync(['events', 'list', '--book-id', '123'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(formatReturnJSON(fakeEvents))
  })

  test('create event without args', async () => {
    const event = eventFactory()
    fetchMocker.mockResponse(JSON.stringify(event))
    prompts.inject(['book.id', 'event.name', JSON.stringify(event)])
    await program.parseAsync(['events', 'create'], {from: 'user'})
    expect(JSON.parse(logSpy.mock.calls[2][0])).toStrictEqual(event)
  })

  test('create event', async () => {
    const event = eventFactory()
    fetchMocker.mockResponse(JSON.stringify(event))
    await program.parseAsync(
      ['events', 'create', '--book-id', 'book.id', '--name', 'event.name', '--event', JSON.stringify(event)],
      {
        from: 'user'
      }
    )
    expect(JSON.parse(logSpy.mock.calls[3][0])).toStrictEqual(event)
  })

  test('delete event without args', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    prompts.inject(['book.id', 'event.name'])
    await program.parseAsync(['events', 'delete'], {from: 'user'})
  })

  test('delete event', async () => {
    fetchMocker.mockResponse(JSON.stringify({}))
    await program.parseAsync(['events', 'delete', '--book-id', 'book.id', '--event-name', 'event.name'], {from: 'user'})
  })
})
