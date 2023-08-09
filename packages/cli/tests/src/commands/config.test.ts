import '../../../src/commands/config'
import {describe, expect, test, vi} from 'vitest'
import {faker} from '@faker-js/faker'
import {getConfig} from '@/cli/src/utils/toolbox'
import {mockProcessExit} from 'vitest-mock-process'
import {program} from 'commander'

mockProcessExit()
vi.mock('prompts', async () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => Promise.resolve({
      apiHost: 'https://api.magicbook.io',
      wsHost: 'wss://socket.magicbook.io',
      apiKey: faker.string.uuid(),
      isValid: typeof props.validate === 'function' ? props.validate(faker.internet.url()) : true,
      invalid: typeof props.validate === 'function' ? props.validate(JSON.stringify({})) : true
    })
  }
})
describe('Config', () => {
  test('setup without args', async () => {
    await program.parseAsync(['config'], {from: 'user'})
  })

  test('setup', async () => {
    const fakeConfig = {
      apiHost: 'https://fake-api.magicbook.io',
      wsHost: 'wss://fake-socket.magicbook.io',
      apiKey: faker.string.uuid(),
      copyResToClipboard: false
    }
    await program.parseAsync(['config', '--apiHost', fakeConfig.apiHost, '--wsHost', fakeConfig.wsHost, '--apiKey',
      fakeConfig.apiKey, '--copyResToClipboard', JSON.stringify(fakeConfig.copyResToClipboard)], {from: 'user'})
    const config = await getConfig()
    console.log(config)
    expect(config).toStrictEqual(fakeConfig)
  })
})
