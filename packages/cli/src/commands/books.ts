import {Option, program} from 'commander'
import {actionSetup, handleAPIResponse, validateArgs} from '../utils/toolbox'
import {bookPropsSchema} from '@/core/types/book'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

export const books = program.command('books')

books.command('create')
  .action(async () => {
    const {engineAPI, config} = await actionSetup()
    await handleAPIResponse(async () => {
      const res = await engineAPI.books.create({book: {user_id: config.userId}})
      log(chalk.bold('📕 - Book created!'))
      return formatReturnJSON(res)
    })
  })

books.command('retrieve')
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
      const res = await engineAPI.books.retrieve({bookId: args.bookId})
      log(chalk.bold('✅ - Book retrieved!'))
      return formatReturnJSON(res)
    })
  })

books.command('update')
  .addOption(new Option('--book-id <bookId>'))
  .addOption(new Option('--book <book>'))
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
      if (args.book) {
        args.book = bookPropsSchema.parse(JSON.parse(args.book))
      } else {
        const response = await prompts({
          type: 'text',
          name: 'book',
          message: 'Enter the book object:'
        })
        bookPropsSchema.parse(JSON.parse(response.book))
        args.book = response.book
      }
    })
    isValid && await handleAPIResponse(async () => {
      args.payload = args.book
      delete args.book 
      const res = await engineAPI.books.update(args)
      log(chalk.yellow.bold('📕 - Book updated!'))
      return formatReturnJSON(res)
    })
  })

books.command('design')
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
      const res = await engineAPI.books.design(args)
      log(chalk.yellow.bold('⚙️ - Book in design!'))
      return formatReturnJSON(res)
    })
  })

books.command('cancel')
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
      const res = await engineAPI.books.cancel(args)
      log(chalk.yellow.bold('📕 - Book canceled!'))
      return formatReturnJSON(res)
    })
  })

books.command('delete')
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
      const res = await engineAPI.books.delete(args)
      log(chalk.red.bold('🗑️ - Book deleted!'))
      return formatReturnJSON(res)
    })
  })

books.command('galleon')
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
      const res = await engineAPI.books.retrieveGalleon(args)
      log(chalk.bold('✅ - Galleon retrieved!'))
      return formatReturnJSON(res)
    })
  })
