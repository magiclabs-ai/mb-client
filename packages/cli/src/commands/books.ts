import {BookPropsSchema} from '@/core/models/book'
import {Option, program} from 'commander'
import {actionSetup, handleAPIResponse, validateArgs} from '../utils/toolbox'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

export const books = program.command('books')

books.command('create')
  .action(async () => {
    const {engineAPI} = await actionSetup()
    await handleAPIResponse(async () => {
      const res = await engineAPI.books.create()
      log(chalk.bold('📕 - Book created!'))
      return formatReturnJSON(res)
    })
  })

books.command('get')
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
      const res = await engineAPI.books.retrieve(args.bookId)
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
        BookPropsSchema.parse(JSON.parse(args.book))
      } else {
        const response = await prompts({
          type: 'text',
          name: 'book',
          message: 'Enter the book object:',
          validate: value => BookPropsSchema.parse(value) as unknown as boolean
        })
        args.book = response.book
      }
    })
    isValid && await handleAPIResponse(async () => {
      const res = await engineAPI.books.update(args.bookId, args.book)
      log(chalk.yellow.bold('📕 - Book updated!'))
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
      const res = await engineAPI.books.cancel(args.bookId)
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
      const res = await engineAPI.books.delete(args.bookId)
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
      const res = await engineAPI.books.retrieveGalleon(args.bookId)
      log(chalk.bold('✅ - Galleon retrieved!'))
      return formatReturnJSON(res)
    })
  })
