import {BookPropsSchema} from '@/core/models/book'
import {Option, program} from 'commander'
import {engineAPI} from '..'
import {handleAPIResponse} from '../utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

const books = program.command('books')

books.command('create')
  .addOption(new Option('-b, --book <book>', 'book object'))
  .action(async (args) => {
    if (args.book) {
      BookPropsSchema.parse(JSON.parse(args.book))
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.books.create(args.book)
      log(chalk.bold('📕 - Book created!'))
      return res
    })
  })

books.command('get')
  .addOption(new Option('-i, --id <id>', 'book id'))
  .action(async (args) => {
    if (!args.id) {
      const response = await prompts({
        type: 'text',
        name: 'id',
        message: 'Enter the Book id:'
      })
      args.id = response.id
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.books.retrieve(args.id)
      log(chalk.bold('✅ - Book retrieved!'))
      return res
    })
  })

books.command('update')
  .addOption(new Option('-i, --id <id>', 'book id'))
  .addOption(new Option('-b, --body <book>', 'book object'))
  .action(async (args) => {
    if (!args.id) {
      const response = await prompts({
        type: 'text',
        name: 'id',
        message: 'Enter the Book id:'
      })
      args.id = response.id
    }
    if (args.book) {
      BookPropsSchema.parse(JSON.parse(args.book))
    } else {
      const response = await prompts({
        type: 'text',
        name: 'book',
        message: 'Enter the Book object:',
        validate: value => BookPropsSchema.parse(JSON.parse(value)) ? true : 'Please enter a valid Book object'
      })
      args.book = response.book
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.books.update(args.id, args.book)
      log(chalk.yellow.bold('📕 - Book updated!'))
      return res
    })
  })

books.command('cancel')
  .addOption(new Option('-i, --id <id>', 'book id'))
  .action(async (args) => {
    if (!args.id) {
      const response = await prompts({
        type: 'text',
        name: 'id',
        message: 'Enter the Book id:'
      })
      args.id = response.id
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.books.cancel(args.id)
      log(chalk.yellow.bold('📕 - Book canceled!'))
      return res
    })
  })

books.command('delete')
  .addOption(new Option('-i, --id <id>', 'book id'))
  .action(async (args) => {
    if (!args.id) {
      const response = await prompts({
        type: 'text',
        name: 'id',
        message: 'Enter the Book id:'
      })
      args.id = response.id
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.books.delete(args.id)
      log(chalk.red.bold('🗑️ - Book deleted!'))
      return res
    })
  })

books.command('galleon')
  .addOption(new Option('-i, --id <id>', 'book id'))
  .action(async (args) => {
    if (!args.id) {
      const response = await prompts({
        type: 'text',
        name: 'id',
        message: 'Enter the Book id:'
      })
      args.id = response.id
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.books.retrieveGalleon(args.id)
      log(chalk.red.bold('✅ - Galleon retrieved!'))
      return res
    })
  })
