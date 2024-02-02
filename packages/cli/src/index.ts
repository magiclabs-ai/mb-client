#!/usr/bin/env node
import {Command} from 'commander'
import {books} from './commands/books'
import {config} from './commands/config'
import {designOptions} from './commands/design-options'
import {embellishments} from './commands/embellishments'
import {events} from './commands/events'
import {fonts} from './commands/fonts'
import {getPackageInfo} from './utils/toolbox'
import {images} from './commands/images'
import {mbClient} from './commands/mb-client'
import {spreads} from './commands/spreads'
import {storyboardItems} from './commands/storyboard-items'
import {styles} from './commands/styles'
;(async () => {
  const packageInfo = await getPackageInfo()
  const program = new Command()
    .name('mb')
    .description('MagicBook Command Line Interface')
    .version(packageInfo.version || '1.0.0', '-v, --version', 'display the version number')

  program
    .addCommand(books)
    .addCommand(config)
    .addCommand(designOptions)
    .addCommand(images)
    .addCommand(mbClient)
    .addCommand(spreads)
    .addCommand(embellishments)
    .addCommand(storyboardItems)
    .addCommand(fonts)
    .addCommand(styles)
    .addCommand(events)
    .parse()
})()
