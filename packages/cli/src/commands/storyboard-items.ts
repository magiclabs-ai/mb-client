import {Option, program} from 'commander'
import {actionSetup, handleAPIResponse, validateArgs} from '../utils/toolbox'
import {formatReturnJSON} from '../../../../core/utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

export const storyboardItems = program.command('storyboard-items')

storyboardItems.command('get')
  .addOption(new Option('--book-id <bookId>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    const {isValid} = await validateArgs(async () => {
      if (!args.bookId) {
        const response = await prompts({
          type: 'text',
          name: 'bookId',
          message: 'Enter the Book id:'
        })
        args.bookId = response.bookId
      }
    })
    isValid && await handleAPIResponse(async () => {
      const res = await engineAPI.storyboardItems.retrieve(args.bookId)
      log(chalk.bold('🎚️ - Storyboard items retrieved!'))
      return formatReturnJSON(res)
    })
  })

