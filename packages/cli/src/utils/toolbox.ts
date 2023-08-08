import {fileURLToPath} from 'url'
import {promises as fs} from 'fs'
import {log} from 'console'
import chalk from 'chalk'
import clipboardy from 'clipboardy'
import path from 'path'

export const configPath = path.resolve(fileURLToPath(import.meta.url), '../../../dist/.config.json')
export async function getConfig() {
  return JSON.parse(await fs.readFile(configPath, 'utf-8'))
}

export function msToSeconds(ms: number) {
  return Math.floor(ms / 1000)
}

export async function handleAPIResponse<T>(fn: () => Promise<T>) {
  try {
    const res = await fn()
    if (res) {
      console.log(cleanJSON(res))
      if ((await getConfig())['copyResToClipboard']) {
        clipboardy.writeSync(JSON.stringify(res))
      }
    }
  } catch (error) {
    console.log(`❌ - ${error}`)
  }
}

export function cleanJSON(obj: unknown) {
  return JSON.parse(JSON.stringify(obj))
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
