import {Option, program} from 'commander'
import {actionSetup, handleAPIResponse, validateArgs} from '../utils/toolbox'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {log} from 'console'
import {spreadServerSchema} from '@/core/types/spread'
import chalk from 'chalk'
import prompts from 'prompts'

export const spreads = program.command('spreads')

spreads.command('list')
  .addOption(new Option('--book-id <bookId>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    const {isValid} = await validateArgs(async () => {
      if (!args.bookId) {
        const response = await prompts({
          type: 'text',
          name: 'bookId',
          message: 'Enter the book id:'
        })
        args.bookId = response.bookId
      }
    })
    isValid && await handleAPIResponse(async () => {
      const res = await engineAPI.spreads.list(args)
      return formatReturnJSON(res)
    })
  })

spreads.command('create')
  .addOption(new Option('--book-id <bookId>'))
  .addOption(new Option('--spread <spread>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    const {isValid} = await validateArgs(async () => {
      if (!args.bookId) {
        const response = await prompts({
          type: 'text',
          name: 'bookId',
          message: 'Enter the book id:'
        })
        args.bookId = response.bookId
      }
      try {
        spreadServerSchema.parse(JSON.parse(args.spread))
      } catch (e) {
        log(chalk.red.bold('🚨 - You need to specify a spread object using: --spread'))
        process.exit(1)
      }
    })
    isValid && await handleAPIResponse(async () => {
      const res = await engineAPI.spreads.create(args)
      log(chalk.bold('🌠 - Spread created!'))
      return formatReturnJSON(res)
    })
  })

spreads.command('retrieve')
  .addOption(new Option('--spread-id <spreadId>'))
  .addOption(new Option('--book-id <bookId>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    const {isValid} = await validateArgs(async () => {
      if (!args.spreadId) {
        const response = await prompts({
          type: 'text',
          name: 'spreadId',
          message: 'Enter the spread id:'
        })
        args.spreadId = response.spreadId
      }
      if (!args.bookId) {
        const response = await prompts({
          type: 'text',
          name: 'bookId',
          message: 'Enter the book id:'
        })
        args.bookId = response.bookId
      }
    })
    isValid && await handleAPIResponse(async () => {
      const res = await engineAPI.spreads.retrieve(args)
      log(chalk.bold('🌠 - Spread retrieved!'))
      return formatReturnJSON(res)
    })
  })

spreads.command('update')
  .addOption(new Option('--spread-id <spreadId>'))
  .addOption(new Option('--book-id <bookId>'))
  .addOption(new Option('--spread <spread>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    const {isValid} = await validateArgs(async () => {
      if (!args.spreadId) {
        const response = await prompts({
          type: 'text',
          name: 'spreadId',
          message: 'Enter the spread id:'
        })
        args.spreadId = response.spreadId
      }
      if (!args.bookId) {
        const response = await prompts({
          type: 'text',
          name: 'bookId',
          message: 'Enter the book id:'
        })
        args.bookId = response.bookId
      }
      try {
        spreadServerSchema.parse(JSON.parse(args.spread))
      } catch (e) {
        log(chalk.red.bold('🚨 - You need to specify a spread object using: --spread'))
        process.exit(1)
      }
    })
    isValid && await handleAPIResponse(async () => {
      args.payload = args.spread
      delete args.spread
      const res = await engineAPI.spreads.retrieve(args)
      log(chalk.yellow.bold('🌠 - Spread updated!'))
      return formatReturnJSON(res)
    })
  })

spreads.command('delete')
  .addOption(new Option('--spread-id <spreadId>'))
  .addOption(new Option('--book-id <bookId>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    const {isValid} = await validateArgs(async () => {
      if (!args.spreadId) {
        const response = await prompts({
          type: 'text',
          name: 'spreadId',
          message: 'Enter the spread id:'
        })
        args.spreadId = response.spreadId
      }
      if (!args.bookId) {
        const response = await prompts({
          type: 'text',
          name: 'bookId',
          message: 'Enter the book id:'
        })
        args.bookId = response.bookId
      }
    })
    isValid && await handleAPIResponse(async () => {
      const res = await engineAPI.spreads.delete(args)
      log(chalk.bold('🗑️ - Spread deleted!'))
      return formatReturnJSON(res)
    })
  })

