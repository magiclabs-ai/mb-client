#!/usr/bin/env node
import {Command} from 'commander'
import {books} from './commands/books'
import {config} from './commands/config'
import {designOptions} from './commands/design-options'
import {getPackageInfo} from './utils/toolbox'
import {images} from './commands/images'
import {mbClient} from './commands/mb-client'
import {spreads} from './commands/spreads'
import {storyboardItems} from './commands/storyboard-items'

(async () => {
  const packageInfo = await getPackageInfo()
  const program = new Command()
    .name('mb-cli')
    .description('MagicBook CLI')
    .version(
      packageInfo.version || '1.0.0',
      '-v, --version',
      'display the version number'
    )
  
  program
    .addCommand(books)
    .addCommand(config)
    .addCommand(designOptions)
    .addCommand(images)
    .addCommand(mbClient)
    .addCommand(spreads)
    .addCommand(storyboardItems)
    .parse()
})()
