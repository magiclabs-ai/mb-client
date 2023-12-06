import {Option, program} from 'commander'
import {actionSetup, handleAPIResponse, validateArgs} from '../utils/toolbox'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {log} from 'console'
import {styleSchema} from '@/core/types/style'
import chalk from 'chalk'
import prompts from 'prompts'

export const styles = program.command('styles')

styles.command('list')
  .addOption(new Option('--qs <qs>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    await handleAPIResponse(async () => {
      const res = await engineAPI.styles.list(args)
      log(chalk.bold('🖌️ - Styles retrieved!'))
      return formatReturnJSON(res)
    })
  })

styles.command('retrieve')
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
    isValid && await handleAPIResponse(async () => {
      const res = await engineAPI.styles.retrieve(args)
      log(chalk.bold('🖌️ - Style retrieved!'))
      return formatReturnJSON(res)
    })
  })

styles.command('update')
  .addOption(new Option('--style-slug <styleSlug>'))
  .addOption(new Option('--style <style>'))
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
      if (args.style) {
        args.style = styleSchema.parse(JSON.parse(args.style))
      } else {
        const response = await prompts({
          type: 'text',
          name: 'style',
          message: 'Enter the style object:'
        })
        args.style = styleSchema.parse(JSON.parse(response.style))
      }
    })
    isValid && await handleAPIResponse(async () => {
      args.payload = args.style
      delete args.style
      const res = await engineAPI.styles.update(args)
      log(chalk.yellow.bold('🖌️ - Style updated!'))
      return formatReturnJSON(res)
    })
  })
