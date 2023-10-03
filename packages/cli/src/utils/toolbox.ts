import {Config, configSchema} from '../models/config'
import {EngineAPI} from '@/core/models/engine-api'
import {type PackageJson} from 'type-fest'
import {cleanJSON} from '@/core/utils/toolbox'
import {fileURLToPath} from 'url'
import {promises as fs} from 'fs'
import {log} from 'console'
import chalk from 'chalk'
import path from 'path'


export const basePath = path.join(fileURLToPath(import.meta.url),
/* istanbul ignore next */
  import.meta.url.includes('index.mjs') ? '..' : '../../..')
export const configPath = path.join(basePath, '.config.json')

export async function getConfig() {
  try {
    return JSON.parse(await fs.readFile(configPath, 'utf-8')) as Config
  } catch (error) {
    log(chalk.red.bold('❌ - No config file found. Please run the config command: mb-cli config'))
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

export async function getPackageInfo() {
  const packageJsonPath = path.join(basePath, 'package.json')
  return JSON.parse(await fs.readFile(packageJsonPath, 'utf-8')) as PackageJson
}
