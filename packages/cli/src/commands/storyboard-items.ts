import {Option, program} from 'commander'
import {engineAPI} from '..'
import {handleAPIResponse} from '../utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

const storyboardItems = program.command('storyboardItems')

storyboardItems.command('get')
  .addOption(new Option('--bookId <bookId>'))
  .action(async (args) => {
    if (!args.bookId) {
      const response = await prompts({
        type: 'text',
        name: 'bookId',
        message: 'Enter the Book id:'
      })
      args.bookId = response.bookId
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.storyboardItems.retrieve(args.bookId)
      log(chalk.bold('🎚️ - Storyboard items retrieved!'))
      return res
    })
  })

