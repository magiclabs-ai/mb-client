import {promises as fs} from 'fs'

export async function getConfig() {
  return JSON.parse(await fs.readFile('.config.json', 'utf-8'))
}
