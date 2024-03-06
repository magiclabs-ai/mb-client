import {Option, program} from 'commander'
import {actionSetup, handleAPIResponse, validateArgs} from '../utils/toolbox'
import {embellishmentUpdateSchemas} from '@/core/types/embellishment'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'
import prompts from 'prompts'

export const embellishments = program.command('embellishments')

embellishments
  .command('list')
  .addOption(new Option('--style-slug <styleSlug>'))
  .addOption(new Option('--qs <qs>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    const {isValid} = await validateArgs(async () => {
      if (!args.styleSlug) {
        const response = await prompts({
          type: 'text',
          name: 'styleSlug',
          message: 'Enter the style slug:'
        })
        args.styleSlug = response.styleSlug
      }
    })
    isValid &&
      (await handleAPIResponse(async () => {
        const res = await engineAPI.embellishments.list(args)
        log(chalk.bold('⭐️ - Embellishments retrieved!'))
        return formatReturnJSON(res)
      }))
  })

embellishments
  .command('retrieve')
  .addOption(new Option('--embellishment-id <embellishmentId>'))
  .addOption(new Option('--style-slug <styleSlug>'))
  .addOption(new Option('--qs <qs>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    const {isValid} = await validateArgs(async () => {
      if (!args.embellishmentId) {
        const response = await prompts({
          type: 'text',
          name: 'embellishmentId',
          message: 'Enter the embellishment Id:'
        })
        args.embellishmentId = response.embellishmentId
      }
      if (!args.styleSlug) {
        const response = await prompts({
          type: 'text',
          name: 'styleSlug',
          message: 'Enter the style slug:'
        })
        args.styleSlug = response.styleSlug
      }
    })
    isValid &&
      (await handleAPIResponse(async () => {
        const res = await engineAPI.embellishments.retrieve(args)
        log(chalk.bold('⭐️ - Embellishments retrieved!'))
        return formatReturnJSON(res)
      }))
  })

embellishments
  .command('update')
  .addOption(new Option('--embellishment-id <embellishmentId>'))
  .addOption(new Option('--style-slug <styleSlug>'))
  .addOption(new Option('--embellishment <embellishment>'))
  .addOption(new Option('--qs <qs>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    const {isValid} = await validateArgs(async () => {
      if (!args.embellishmentId) {
        const response = await prompts({
          type: 'text',
          name: 'embellishmentId',
          message: 'Enter the embellishment id:'
        })
        args.embellishmentId = response.embellishmentId
      }
      if (!args.styleSlug) {
        const response = await prompts({
          type: 'text',
          name: 'styleSlug',
          message: 'Enter the style slug:'
        })
        args.styleSlug = response.styleSlug
      }
      if (args.embellishment) {
        args.embellishment = embellishmentUpdateSchemas.parse(JSON.parse(args.embellishment))
      } else {
        const response = await prompts({
          type: 'text',
          name: 'embellishment',
          message: 'Enter the embellishment object:'
        })
        args.embellishment = embellishmentUpdateSchemas.parse(JSON.parse(response.embellishment))
      }
    })
    isValid &&
      (await handleAPIResponse(async () => {
        args.payload = args.embellishment
        delete args.embellishment
        const res = await engineAPI.embellishments.update(args)
        log(chalk.yellow.bold('⭐️ - Embellishment updated!'))
        return formatReturnJSON(res)
      }))
  })
