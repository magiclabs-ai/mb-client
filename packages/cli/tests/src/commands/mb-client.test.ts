import '../../../src/commands/mb-client'
import {EventEmitter} from 'stream'
import {ImageServer} from '../../../../client/src'
import {MockParams} from 'vitest-fetch-mock/types'
import {bookFactory} from '@/core/tests/factories/book.factory'
import {describe, test, vi} from 'vitest'
import {faker} from '@faker-js/faker'
import {fetchMocker} from '@/core/tests/mocks/fetch'
// import {images} from '@/core/data/images'
import {mockProcessExit} from 'vitest-mock-process'
import {program} from 'commander'
import niceAndRome from '@/core/data/image-sets/00-nice-and-rome-client.json'

mockProcessExit()
vi.mock('prompts', async () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => Promise.resolve({
      apiHost: faker.internet.url(),
      apiKey: faker.string.uuid(),
      isValid: typeof props.validate === 'function' ? props.validate(faker.internet.url()) : true,
      invalid: typeof props.validate === 'function' ? props.validate(JSON.stringify({})) : true
    })
  }
})
vi.stubGlobal('eventEmitter', new EventEmitter())
describe('mb-client', () => {
  test('new', async () => {
    const book = bookFactory()
    const images = niceAndRome['00-nice-and-rome']
    fetchMocker.mockResponses(
      [JSON.stringify(book), {status: 200}],
      ...images.map((image) => [JSON.stringify(new ImageServer(image)), {status: 200}] as [string, MockParams]),
      [JSON.stringify(book), {status: 200}]
    )
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
  // test('new slow request with all args', async () => {
  //   const book = bookFactory()
  //   const images = niceAndRome['00-nice-and-rome']
  //   fetchMocker.mockResponses(
  //     [JSON.stringify(book), {status: 200}],
  //     ...images.map((image) => [JSON.stringify(new ImageServer(image)), {status: 200}] as [string, MockParams]),
  //     [JSON.stringify(book), {status: 200}]
  //   )
  //   await program.parseAsync(['mb-client', 'design-request', 'new', '--occasion', 'baby',
  //     '--style', '1005', '--book-size', '10x10', '--cover-type', 'sc', '--page-type', 'sp', '--image-density', 'low',
  //     '--image-filtering-level', 'best', '--embellishment-level', 'lots', '--text-sticker-level', 'lots',
  //     '--image-sets', '../../../core/data/image-sets/00-nice-and-rome-client.json']
  //   , {from: 'user'})
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   //@ts-ignore
  //   eventEmitter.emit('event', {
  //     detail: {
  //       state: 'new',
  //       progress: 10,
  //       slug: 'new',
  //       message: 'Creating design request'
  //     }
  //   })
  //   vi.useFakeTimers()
  //   setInterval(()=>{}, 1000 * 40)
  //   vi.advanceTimersToNextTimer()
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   //@ts-ignore
  //   eventEmitter.emit('event', {
  //     detail: {
  //       state: 'ready',
  //       progress: 100,
  //       slug: 'ready',
  //       message: 'Design request ready'
  //     }
  //   })
  // })
})
