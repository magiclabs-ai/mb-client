import {Option, program} from 'commander'
import {actionSetup, handleAPIResponse, validateArgs} from '../utils/toolbox'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

export const events = program.command('events')

events
  .command('list')
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
    isValid &&
      (await handleAPIResponse(async () => {
        const res = await engineAPI.events.listBookEvents(args)
        return formatReturnJSON(res)
      }))
  })

events
  .command('create')
  .addOption(new Option('--book-id <bookId>'))
  .addOption(new Option('--name <name>'))
  .addOption(new Option('--context <context>'))
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
      if (!args.name) {
        const response = await prompts({
          type: 'text',
          name: 'name',
          message: 'Enter the event name:'
        })
        args.name = response.name
      }
    })
    isValid &&
      (await handleAPIResponse(async () => {
        const res = await engineAPI.events.createBookEvent(args)
        log(chalk.bold(`✉️ - Event created to book ${args.bookId}!`))
        return formatReturnJSON(res)
      }))
  })

events
  .command('delete')
  .addOption(new Option('--book-id <bookId>'))
  .addOption(new Option('--name <name>'))
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
      if (!args.name) {
        const response = await prompts({
          type: 'text',
          name: 'name',
          message: 'Enter the event name:'
        })
        args.name = response.name
      }
    })
    isValid &&
      (await handleAPIResponse(async () => {
        await engineAPI.events.deleteBookEvent(args)
        log(chalk.bold('🗑️ - Event deleted!'))
      }))
  })
