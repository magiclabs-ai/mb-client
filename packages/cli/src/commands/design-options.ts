import {Option, program} from 'commander'
import {actionSetup, handleAPIResponse, validateArgs} from '../utils/toolbox'
import {bookSizes, imageFilteringLevels} from '@/core/data/design-request'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

export const designOptions = program.command('design-options')

designOptions.command('get-densities')
  .addOption(new Option('--book-size <bookSize>'))
  .addOption(new Option('--image-count <imageCount>'))
  .addOption(new Option('--image-filtering-level <imageFilteringLevel>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    const {isValid} = await validateArgs(async () => {
      if (!args.bookSize) {
        const response = await prompts({
          type: 'autocomplete',
          name: 'bookSize',
          message: 'Pick the book size:',
          choices: bookSizes.map((option) => ({title: option.toString(), value: option})),
          initial: bookSizes[0]
        })
        args.bookSize = response.bookSize
      }
      if (!args.imageCount) {
        const response = await prompts({
          type: 'number',
          name: 'imageCount',
          message: 'Enter the image count:',
          validate: value => value > 0 ? true : 'Please enter a valid number'
        })
        args.imageCount = response.imageCount
      }
      if (!args.imageFilteringLevel) {
        const response = await prompts({
          type: 'autocomplete',
          name: 'imageFilteringLevel',
          message: 'Enter the image count:',
          choices: imageFilteringLevels.map((option) => ({title: option.toString(), value: option})),
          initial: imageFilteringLevels[0]
        })
        args.imageFilteringLevel = response.imageFilteringLevel
      }
    })
    isValid && await handleAPIResponse(async () => {
      const res = await engineAPI.designOptions.retrieve(args.bookSize, args.imageCount, args.imageFilteringLevel)
      log(chalk.bold('🎛️ - Densities retrieved!'))
      return formatReturnJSON(res)
    })
  })

