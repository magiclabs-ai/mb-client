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
      userId: faker.string.uuid(),
      isValid: typeof props.validate === 'function' ? props.validate(faker.internet.url()) : true,
      invalid: typeof props.validate === 'function' ? props.validate(JSON.stringify({})) : true
    })
  }
})

describe('Config', () => {
  test('setup without args', async () => {
    await program.parseAsync(['config'], {from: 'user'})
  })

  test('setup with prompts', async () => {
    const fakeConfig = {
      apiHost: 'fake.url',
      wsHost: 'fake.url',
      env: 'fake',
      apiKey: faker.string.uuid()
    }
    await program.parseAsync(['config', '--api-host', fakeConfig.apiHost, '--ws-host', fakeConfig.wsHost, '--api-key',
      fakeConfig.apiKey], {from: 'user'})
  })
  
  test('setup', async () => {
    const fakeConfig = {
      apiHost: 'https://api.fake.magicbook.io',
      wsHost: 'wss://socket.fake.magicbook.io',
      env: 'fake',
      apiKey: faker.string.uuid(),
      userId: faker.string.uuid()
    }
    await program.parseAsync(['config', '--api-host', fakeConfig.apiHost, '--ws-host', fakeConfig.wsHost, '--api-key',
      fakeConfig.apiKey, '--user-id', fakeConfig.userId], {from: 'user'})
    const config = await getConfig()
    expect(config).toStrictEqual(fakeConfig)
  })
})
