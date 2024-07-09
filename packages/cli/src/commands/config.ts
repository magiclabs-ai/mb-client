import {Option, program} from 'commander'
import {isURL} from '@/core/utils/toolbox'
import chalk from 'chalk'
import prompts from 'prompts'
const log = console.log
import {configPath} from '../utils/toolbox'
import {defaultApiHost, defaultWebSocketHost} from '@/core/config'
import {promises as fs} from 'fs'

export const config = program
  .command('config')
  .addOption(new Option('--api-host <apiHost>').default(defaultApiHost))
  .addOption(new Option('--ws-host <wsHost>').default(defaultWebSocketHost))
  .addOption(new Option('--api-key <apiKey>'))
  .addOption(new Option('--user-id <userId>'))
  .action(async (args) => {
    const config = {
      apiHost: args.apiHost,
      wsHost: args.wsHost,
      apiKey: args.apiKey,
      userId: args.userId,
      env: args.apiHost.split('.')[1]
    }
    if (!isURL(config.apiHost)) {
      const response = await prompts({
        type: 'text',
        name: 'apiHost',
        message: 'Please enter a valid URL for API host:',
        validate: (value) => (isURL(value) ? true : 'Please enter a valid URL')
      })
      config.apiHost = response.apiHost
    }
    if (!config.apiKey) {
      const response = await prompts({
        type: 'text',
        name: 'apiKey',
        message: 'Enter the API key:'
      })
      config.apiKey = response.apiKey
    }
    if (!config.userId) {
      const response = await prompts({
        type: 'text',
        name: 'userId',
        message: 'Enter your user id:'
      })
      config.userId = response.userId
    }
    if (!isURL(config.wsHost)) {
      const response = await prompts({
        type: 'text',
        name: 'wsHost',
        message: 'Please enter a valid URL for WS host:',
        validate: (value) => (isURL(value) ? true : 'Please enter a valid URL')
      })
      config.wsHost = response.wsHost
    }
    await fs.writeFile(configPath, JSON.stringify(config))
    log(chalk.green('✅ - Config saved!'))
  })
