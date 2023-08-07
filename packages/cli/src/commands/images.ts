import {Option, program} from 'commander'
import {engineAPI} from '..'
import {handleAPIResponse} from '../utils/toolbox'
import {imageServerSchema} from '@/core/models/design-request/image'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

const images = program.command('images')

images.command('list')
  .addOption(new Option('--bookId <bookId>', 'Id of the book to which the image belongs'))
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
      const res = await engineAPI.images.list(args.bookId)
      return res
    })
  })

images.command('create')
  .addOption(new Option('--bookId <bookId>', 'Id of the book to which the image belongs'))
  .addOption(new Option('--image <image>', 'image object'))
  .action(async (args) => {
    if (!args.bookId) {
      const response = await prompts({
        type: 'text',
        name: 'bookId',
        message: 'Enter the Book id:'
      })
      args.bookId = response.bookId
    }
    if (args.body) {
      imageServerSchema.parse(JSON.parse(args.body))
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.images.addToBook(args.bookId, args.body)
      log(chalk.bold(`🎆 - Image added to book ${args.bookId}!`))
      return res
    })
  })

images.command('get')
  .addOption(new Option('--bookId <bookId>', 'Id of the book to which the image belongs'))
  .addOption(new Option('--imageId <imageId>', 'Id of the image'))
  .action(async (args) => {
    if (!args.bookId) {
      const response = await prompts({
        type: 'text',
        name: 'bookId',
        message: 'Enter the Book id:'
      })
      args.bookId = response.bookId
    }
    if (!args.imageId) {
      const response = await prompts({
        type: 'text',
        name: 'imageId',
        message: 'Enter the image id:'
      })
      args.imageId = response.imageId
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.images.retrieve(args.imageId, args.bookId)
      log(chalk.bold('🎇 - Image Retrieved!'))
      return res
    })
  })

images.command('update')
  .addOption(new Option('--bookId <bookId>', 'Id of the book to which the image belongs'))
  .addOption(new Option('--imageId <imageId>', 'Id of the image'))
  .addOption(new Option('--image <image>', 'Image object'))
  .action(async (args) => {
    if (!args.bookId) {
      const response = await prompts({
        type: 'text',
        name: 'bookId',
        message: 'Enter the Book id:'
      })
      args.bookId = response.bookId
    }
    if (!args.imageId) {
      const response = await prompts({
        type: 'text',
        name: 'imageId',
        message: 'Enter the image id:'
      })
      args.imageId = response.imageId
    }
    if (args.body) {
      imageServerSchema.parse(JSON.parse(args.body))
    } else {
      const response = await prompts({
        type: 'text',
        name: 'image',
        message: 'Enter the image object:',
        validate: value => imageServerSchema.parse(JSON.parse(value)) ? true : 'Please enter a image object'
      })
      args.image = response.image
    }
    await handleAPIResponse(async () => {
      const res = await engineAPI.images.update(args.imageId, args.bookId, args.image)
      log(chalk.yellow.bold('🎇 - Image Updated!'))
      return res
    })
  })

images.command('delete')
  .addOption(new Option('--bookId <bookId>', 'Id of the book to which the image belongs'))
  .addOption(new Option('--imageId <imageId>', 'Id of the image'))
  .action(async (args) => {
    if (!args.bookId) {
      const response = await prompts({
        type: 'text',
        name: 'bookId',
        message: 'Enter the Book id:'
      })
      args.bookId = response.bookId
    }
    if (!args.imageId) {
      const response = await prompts({
        type: 'text',
        name: 'imageId',
        message: 'Enter the image id:'
      })
      args.imageId = response.imageId
    }
    await handleAPIResponse(async () => {
      await engineAPI.images.delete(args.imageId, args.bookId)
      log(chalk.bold('🗑️ - Image Deleted!'))
    })
  })
