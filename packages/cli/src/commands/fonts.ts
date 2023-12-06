import {Option, program} from 'commander'
import {actionSetup, handleAPIResponse} from '../utils/toolbox'
import {formatReturnJSON} from '@/core/utils/toolbox'
import {log} from 'console'
import chalk from 'chalk'

export const fonts = program.command('fonts')

fonts.command('list')
  .addOption(new Option('--qs <qs>'))
  .action(async (args) => {
    const {engineAPI} = await actionSetup()
    await handleAPIResponse(async () => {
      const res = await engineAPI.fonts.list(args)
      log(chalk.bold('🎚️ - Fonts retrieved!'))
      return formatReturnJSON(res)
    })
  })
