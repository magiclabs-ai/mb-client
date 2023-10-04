import '../../../src/commands/mb-client'
import {EventEmitter} from 'stream'
import {ImageServer} from '@/core/models/design-request/image'
import {MockParams} from 'vitest-fetch-mock/types'
import {bookFactory} from '@/core/tests/factories/book.factory'
import {describe, test, vi} from 'vitest'
import {fetchMocker} from '../../../../../core/tests/mocks/fetch'
import {mockProcessExit} from 'vitest-mock-process'
import {program} from 'commander'
import niceAndRome from '@/core/data/image-sets/00-nice-and-rome-client.json'
import prompts from 'prompts'

mockProcessExit()
vi.stubGlobal('eventEmitter', new EventEmitter())

describe('MB Client', () => {
  const images = niceAndRome['00-nice-and-rome']

  test('new with custom path', async () => {
    const book = bookFactory()
    fetchMocker.mockResponses(
      [JSON.stringify(book), {status: 200}],
      ...images.map((image) => [JSON.stringify(new ImageServer(image)), {status: 200}] as [string, MockParams]),
      [JSON.stringify(book), {status: 200}]
    )
    prompts.inject(['baby', '1005', '10x10', 'sc', 'sp', 'low', 'best', 'lots', 'lots', 'custom',
      './data/image-sets/00-nice-and-rome-client.json'])
    await program.parseAsync(['mb-client', 'design-request', 'new'], {from: 'user'})
  })
  test('new slow request with all args', async () => {
    const book = bookFactory()
    fetchMocker.mockResponses(
      [JSON.stringify(book), {status: 200}],
      ...images.map((image) => [JSON.stringify(new ImageServer(image)), {status: 200}] as [string, MockParams]),
      [JSON.stringify(book), {status: 200}]
    )
    await program.parseAsync(['mb-client', 'design-request', 'new', '--occasion', 'baby',
      '--style', '1005', '--book-size', '10x10', '--cover-type', 'sc', '--page-type', 'sp', '--image-density', 'low',
      '--image-filtering-level', 'best', '--embellishment-level', 'lots', '--text-sticker-level', 'lots',
      '--image-set', './data/image-sets/00-nice-and-rome-client.json']
    , {from: 'user'})
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    eventEmitter.emit('event', {
      detail: {
        state: 'new',
        progress: 10,
        slug: 'new',
        message: 'Creating design request'
      }
    })
    vi.useFakeTimers()
    setInterval(()=>{}, 1000 * 40)
    vi.advanceTimersToNextTimer()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    eventEmitter.emit('event', {
      detail: {
        state: 'ready',
        progress: 100,
        slug: 'ready',
        message: 'Design request ready'
      }
    })
  })
  test('new < 30s', async () => {
    const book = bookFactory()
    fetchMocker.mockResponses(
      [JSON.stringify(book), {status: 200}],
      ...images.map((image) => [JSON.stringify(new ImageServer(image)), {status: 200}] as [string, MockParams]),
      [JSON.stringify(book), {status: 200}]
    )
    prompts.inject(['baby', '1005', '10x10', 'sc', 'sp', 'low', 'best', 'lots', 'lots', '00-nice-and-rome-client'])
    await program.parseAsync(['mb-client', 'design-request', 'new'], {from: 'user'})
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    eventEmitter.emit('event', {
      detail: {
        state: 'new',
        progress: 10,
        slug: 'new',
        message: 'Creating design request'
      }
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    eventEmitter.emit('event', {
      detail: {
        state: 'ready',
        progress: 100,
        slug: 'ready',
        message: 'Design request ready'
      }
    })
  })
})
