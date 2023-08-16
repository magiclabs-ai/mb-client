import {DesignRequestEvent, DesignRequestOptions} from '@/core/models/design-request'
import {
  Image,
  MagicBookClient
} from '@/client/src/index'
import {Option, program} from 'commander'
import {actionSetup, msToSeconds} from '../utils/toolbox'
import {camelCaseToKebabCase, camelCaseToWords} from '@/core/utils/toolbox'
import {faker} from '@faker-js/faker'
import {log} from 'console'
import chalk from 'chalk'
import cliProgress from 'cli-progress'
import prompts from 'prompts'

export const mbClient = program.command('mb-client')
const newDesignRequest = mbClient.command('design-request').command('new')

newDesignRequest.addOption(new Option('--title <title>').default('My Book'))
Object.keys(DesignRequestOptions).forEach((key) => {
  newDesignRequest.addOption(new Option(`--${camelCaseToKebabCase(key)} <${key}>`))
})

newDesignRequest.addOption(new Option('--image-count <imageCount>').default(70))
newDesignRequest.action(async (args) => {
  const {config} = await actionSetup()
  for (const [key, options] of Object.entries(DesignRequestOptions)) {
    if (!args[key]) {
      const response = await prompts({
        type: 'autocomplete',
        name: key,
        message: `Pick the ${camelCaseToWords(key)}:`,
        choices: options.map((option) => ({title: option.toString(), value: option})),
        initial: options[0]
      })
      args[key] = response[key]
    } 
  }

  const client = new MagicBookClient(config.apiKey, config.apiHost, config.wsHost)
  log(chalk.bold('💿 - Init client'))

  const designRequest = await client.createDesignRequest(args)
  log(chalk.bold('🎨 - Design request created'))

  const imageUploadBar = new cliProgress.SingleBar({
    format: 'Uploaded images | {bar} | {percentage}% || {value}/{total} Images'
  }, cliProgress.Presets.shades_classic)
  const imagesLength = parseInt(args.imageCount)
  imageUploadBar.start(imagesLength, 0)
  await Promise.all(Array.from(Array(imagesLength).keys()).map(async () => {
    const width = 1000
    const height = faker.number.int({min: 200, max: 500})
    const image: Image = {
      handle: faker.string.uuid(),
      url: faker.image.url({width, height}),
      width,
      height,
      rotation: 0,
      captureTime: faker.date.past().toISOString(),
      cameraMake: '',
      cameraModel: 'Sony A7R IV',
      filename: faker.system.commonFileName('jpg')
    }
    await designRequest.images.add(image)
    imageUploadBar.increment()
  }))
  imageUploadBar.stop()
  log(chalk.bold('🌠 - Images uploaded'))
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
