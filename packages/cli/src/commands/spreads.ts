import {Option, program} from 'commander'
import {SpreadServerSchema} from '@/shared/models/spread'
import {engineAPI} from '..'
import {handleAPIResponse} from '../utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

const spreads = program.command('spreads')

spreads.command('list')
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
      const res = await engineAPI.spreads.retrieve(args.spreadId, args.bookId)
      return res
    })
  })

spreads.command('create')
  .addOption(new Option('--bookId <bookId>'))
  .addOption(new Option('--spread <spread>'))
  .action(async (args) => {
    if (!args.bookId) {
      const response = await prompts({
        type: 'text',
        name: 'bookId',
        message: 'Enter the Book id:'
      })
      args.bookId = response.bookId
    }
    if (args.spread) {
      SpreadServerSchema.parse(JSON.parse(args.spread))
    } else {
      const response = await prompts({
        type: 'text',
        name: 'spread',
        message: 'Enter the spread object:',
        validate: value => SpreadServerSchema.parse(JSON.parse(value)) ? true : 'Please enter a spread object'
      })
      args.spread = response.spread
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.spreads.create(args.bookId, args.spread)
      log(chalk.bold('🌠 - Spread created!'))
      return res
    })
  })

spreads.command('get')
  .addOption(new Option('--spreadId <spreadId>'))
  .addOption(new Option('--bookId <bookId>'))
  .action(async (args) => {
    if (!args.spreadId) {
      const response = await prompts({
        type: 'text',
        name: 'spreadId',
        message: 'Enter the Spread id:'
      })
      args.spreadId = response.spreadId
    }
    if (!args.bookId) {
      const response = await prompts({
        type: 'text',
        name: 'bookId',
        message: 'Enter the Book id:'
      })
      args.bookId = response.bookId
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.spreads.retrieve(args.spreadId, args.bookId)
      log(chalk.bold('🌠 - Spread retrieved!'))
      return res
    })
  })

spreads.command('update')
  .addOption(new Option('--spreadId <spreadId>'))
  .addOption(new Option('--bookId <bookId>'))
  .addOption(new Option('--spread <spread>'))
  .action(async (args) => {
    if (!args.spreadId) {
      const response = await prompts({
        type: 'text',
        name: 'spreadId',
        message: 'Enter the Spread id:'
      })
      args.spreadId = response.spreadId
    }
    if (!args.bookId) {
      const response = await prompts({
        type: 'text',
        name: 'bookId',
        message: 'Enter the Book id:'
      })
      args.bookId = response.bookId
    }
    if (args.spread) {
      SpreadServerSchema.parse(JSON.parse(args.spread))
    } else {
      const response = await prompts({
        type: 'text',
        name: 'spread',
        message: 'Enter the spread object:',
        validate: value => SpreadServerSchema.parse(JSON.parse(value)) ? true : 'Please enter a spread object'
      })
      args.spread = response.spread
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.spreads.retrieve(args.spreadId, args.bookId)
      log(chalk.yellow.bold('🌠 - Spread updated!'))
      return res
    })
  })

spreads.command('delete')
  .addOption(new Option('--spreadId <spreadId>'))
  .addOption(new Option('--bookId <bookId>'))
  .action(async (args) => {
    if (!args.spreadId) {
      const response = await prompts({
        type: 'text',
        name: 'spreadId',
        message: 'Enter the Spread id:'
      })
      args.spreadId = response.spreadId
    }
    if (!args.bookId) {
      const response = await prompts({
        type: 'text',
        name: 'bookId',
        message: 'Enter the Book id:'
      })
      args.bookId = response.bookId
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.spreads.delete(args.spreadId, args.bookId)
      log(chalk.bold('❌ - Spread deleted!'))
      return res
    })
  })

