import {Option, program} from 'commander'
import {isURL} from '@/core/utils/toolbox'
import chalk from 'chalk'
import prompts from 'prompts'
const log = console.log
import {configPath} from '../utils/toolbox'
import {promises as fs} from 'fs'

program.command('config')
  .addOption(new Option('--apiHost <apiHost>'))
  .addOption(new Option('--wsHost <wsHost>'))
  .addOption(new Option('--apiKey <apiKey>'))
  .action(async (args) => {
    const config  = {
      apiHost: args.apiHost,
      wsHost: args.wsHost,
      apiKey: args.apiKey
    }
  
    if (!config.apiHost) {
      const response = await prompts({
        type: 'text',
        name: 'apiHost',
        message: 'Enter the API host:',
        validate: value => isURL(value) ? true : 'Please enter a valid URL'
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

    if (!config.wsHost) {
      config.wsHost = config.apiHost.replace('https://api', 'wss://socket')
    }
    await fs.writeFile(configPath, JSON.stringify(config))
    log(chalk.green('✅ - Config saved!'))
  })
