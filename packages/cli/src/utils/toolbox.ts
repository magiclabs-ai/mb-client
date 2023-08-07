import {promises as fs} from 'fs'
import clipboardy from 'clipboardy'

export async function getConfig() {
  return JSON.parse(await fs.readFile('.config.json', 'utf-8'))
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
