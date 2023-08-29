import {Config, configSchema} from '../models/config'
import {EngineAPI} from '@/core/models/engine-api'
import {Image, ImageServer, imageServerSchema, imageServerToImage} from '@/core/models/design-request/image'
import {type PackageJson} from 'type-fest'
import {cleanJSON} from '@/core/utils/toolbox'
import {fileURLToPath} from 'url'
import {log} from 'console'
import chalk from 'chalk'
import fs from 'fs'
import os from 'os'
import path from 'path'


export const basePath = path.join(fileURLToPath(import.meta.url),
/* istanbul ignore next */
  import.meta.url.includes('index.mjs') ? '..' : '../../..'
)
export const configPath = path.join(basePath, '.config.json')

export function getConfig() {
  try {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8')) as Config
  } catch (error) {
    log(chalk.red.bold('❌ - No config file found. Please run the config command: mb config'))
  }
}

export function msToSeconds(ms: number) {
  return Math.floor(ms / 1000)
}

export async function handleAPIResponse<T>(fn: () => Promise<T>) {
  try {
    const res = await fn()
    if (res) {
      console.log(cleanJSON(res))
    }
  } catch (error) {
    console.log(`❌ - ${error}`)
  }
}

export async function validateArgs(fn: () => void | Promise<void>) {
  try {
    await fn()
    return {isValid: true}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    log(chalk.red.bold(error.message))
    return {isValid: false}
  }
}

export async function actionSetup() {
  const config = await getConfig()
  if (config && configSchema.safeParse(config).success) {
    return {
      engineAPI: new EngineAPI(config.apiHost, config.apiKey),
      config
    }
  } else {
    log(chalk.red.bold('❌ - Please run the config command: mb-cli config'))
    process.exit(1)
  }
}

export function getPackageInfo() {
  const packageJsonPath = path.join(basePath, 'package.json')
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8')) as PackageJson
}

export const imageSetsPath = './data/image-sets/'

export function listImageSets() {
  const imageSets = fs
    .readdirSync(path.join(basePath, imageSetsPath))
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace('.json', ''))
  imageSets.push('custom')
  return imageSets
}

export function retrieveImageSet(imageSet: string) {
  const imageSetPath = path.join(basePath, imageSetsPath, `${imageSet}.json`)
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
  const images = file[Object.keys(file)[0]]?.map((image: ImageServer|Image) => {
    if (imageServerSchema.safeParse(image).success) {
      return imageServerToImage(image as ImageServer)
    } else {
      return image
    }
  })
  return images
}
