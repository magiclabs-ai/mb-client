import {Option, program} from 'commander'
import {bookSizes, imageFilteringLevels} from '@/core/data/design-request'
import {engineAPI} from '..'
import {handleAPIResponse} from '../utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

const designOptions = program.command('designOptions')

designOptions.command('getDensities')
  .addOption(new Option('--bookSize <bookSize>'))
  .addOption(new Option('--imageCount <imageCount>'))
  .addOption(new Option('--imageFilteringLevel <imageFilteringLevel>'))
  .action(async (args) => {
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
    await handleAPIResponse(async () => {
      const res = await engineAPI.designOptions.retrieve(args.bookSize, args.imageCount, args.imageFilteringLevel)
      log(chalk.bold('🎛️ - Densities retrieved!'))
      return res
    })
  })

