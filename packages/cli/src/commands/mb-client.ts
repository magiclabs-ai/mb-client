import {DesignRequestOptions} from '@/core/models/design-request'

import {Image, ImageServer, imageServerToImage} from '@/core/models/design-request/image'
import {MagicBookClient} from '@/core/models/client'
import {Option, program} from 'commander'
import {actionSetup, msToSeconds} from '../utils/toolbox'
import {camelCaseToKebabCase, camelCaseToWords} from '@/core/utils/toolbox'
import {fileURLToPath} from 'url'
import {log} from 'console'
import chalk from 'chalk'
import cliProgress from 'cli-progress'
import fs from 'fs'
import os from 'os'
import path, {dirname} from 'path'
import prompts from 'prompts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const options = [...Object.entries(DesignRequestOptions) as Array<[string, Array<string | number | boolean>]>]

export const mbClient = program.command('mb-client')
const newDesignRequest = mbClient.command('design-request').command('new')

newDesignRequest.addOption(new Option('--title <title>'))

const imageSetRelativePath = './data/image-sets/'
const imageSets = fs
  .readdirSync(path.join(__dirname, imageSetRelativePath))
  .filter((file) => file.endsWith('.json'))
  .map((file) => file.replace('.json', ''))
imageSets.push('custom')
newDesignRequest.addOption(new Option('--image-set <imageSet>'))
options.push(['imageSet', imageSets])
Object.keys(DesignRequestOptions).forEach((key) => {
  newDesignRequest.addOption(new Option(`--${camelCaseToKebabCase(key)} <${key}>`))
})

function retrieveImageSet(imageSet: string) {
  const imageSetPath = path.join(__dirname, imageSetRelativePath, `${imageSet}.json`)
  const relativePath = path.join(os.homedir(), imageSet.replace('~', '.'))
  let file
  if (fs.existsSync(imageSetPath)) {
    file = fs.readFileSync(imageSetPath, 'utf8')
  } else if (fs.existsSync(imageSet)) {
    file = fs.readFileSync(imageSet, 'utf8')
  } else if (fs.existsSync(relativePath)) {
    file = fs.readFileSync(relativePath, 'utf8')
  }  else {
    throw new Error(`Image set ${imageSet} not found`)
  }
  file = JSON.parse(file)  
  const images = file[Object.keys(file)[0]].map((image: ImageServer) => {
    return imageServerToImage(image)
  })
  return images
}

newDesignRequest.action(async (args) => {
  const {config} = await actionSetup()
  for (const [key, opts] of options) {
    if (!args[key]) {
      const response = await prompts({
        type: 'autocomplete',
        name: key,
        message: `Pick the ${camelCaseToWords(key)}:`,
        choices: opts.map((option) => ({title: option.toString(), value: option})),
        initial: opts[0]
      })
      if (response[key] == 'custom') {
        const customResponse = await prompts({
          type: 'text',
          name: key,
          message: `Enter the custom ${camelCaseToWords(key)}:`
        })
        response[key] = customResponse[key]
      }
      args[key] = response[key]
    }
  }
  args.userId = config.userId

  const images = retrieveImageSet(args.imageSet)

  const client = new MagicBookClient(config.apiKey, config.apiHost, config.wsHost)
  log(chalk.bold('💿 - Init client'))

  const designRequest = await client.createDesignRequest(args)
  log(chalk.bold('🎨 - Design request created'))

  const imageUploadBar = new cliProgress.SingleBar({
    format: 'Uploaded images | {bar} | {percentage}% || {value}/{total} Images'
  }, cliProgress.Presets.shades_classic)
  imageUploadBar.start(images.length, 0)
  await Promise.all(images.map(async (image: Image) => {
    await designRequest.images.add(image)
    imageUploadBar.increment()
  }))
  imageUploadBar.stop()
  log(chalk.bold('🌠 - Images added'))
  // eslint-disable-next-line prefer-const
  let startAt: Date
  const creationProgressBar = new cliProgress.SingleBar({
    format: '{title} | {bar} | {percentage}%'
  }, cliProgress.Presets.shades_classic)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  eventEmitter.on('event', (e: DesignRequestEvent) => {
    creationProgressBar.update(e.detail.progress, {
      title: e.detail.message
    })
    if (e.detail.progress === 100) {
      const endAt = new Date()
      const duration = msToSeconds(endAt.getTime() - startAt.getTime())
      const isSlow = duration > 30
      creationProgressBar.stop()
      log(chalk.bold[isSlow ? 'yellow' : 'green'](
        `${isSlow ? '🚜 ' : '🏎️ '} - Design request completed in ${duration}s`
      ))
      log(chalk.bold(`📋 - mb-web-demo preview: https://mb-web-demo-dev.vercel.app/book/${designRequest.parentId}`))
    }
  })
  log(chalk.bold('🚀 - Submitting design request'))
  startAt = new Date()
  designRequest.submit()
  creationProgressBar.start(100, 0, {title: 'Submitting design request'})
})
