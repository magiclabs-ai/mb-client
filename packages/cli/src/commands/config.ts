import {Option, program} from 'commander'
import {isURL} from '@/shared/utils/toolbox'
import chalk from 'chalk'
import prompts from 'prompts'
const log = console.log
import {promises as fs} from 'fs'

program.command('config')
  .addOption(new Option('--apiHost <apiHost>'))
  .addOption(new Option('--wsHost <wsHost>'))
  .addOption(new Option('--apiKey <apiKey>'))
  .addOption(new Option('--copyResToClipboard -c <copyResToClipboard>'))
  .action(async (args) => {
    const config  = {
      apiHost: args.apiHost,
      wsHost: args.wsHost,
      apiKey: args.apiKey,
      copyResToClipboard: args.copyResToClipboard || false
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

    fs.writeFile('.config.json', JSON.stringify(config))
    log(chalk.green('✅ - Config saved!'))
  })
