import {actionSetup} from '../../../src/utils/toolbox'
import {configPath, getConfig, handleAPIResponse} from '@/cli/src/utils/toolbox'
import {describe, expect, test} from 'vitest'
import {promises as fs} from 'fs'
import {mockProcessExit} from 'vitest-mock-process'
import clipboardy from 'clipboardy'

mockProcessExit()
describe('Toolbox', () => {
  test.fails('handleAPIResponse', async () => {
    const res = await handleAPIResponse(async () => {
      throw new Error('test')
    })
    expect(res).toThrowError('test')
  })
  test('handleAPIResponse with copyToCB', async () => {
    const config = await getConfig()
    config.copyResToClipboard = true
    await fs.writeFile(configPath, JSON.stringify(config))
    const dataToBeCopied = {
      state: 'SUCCESS'
    }
    await handleAPIResponse(async () => new Promise(resolve => resolve(dataToBeCopied)))
    expect(JSON.parse(clipboardy.readSync())).toStrictEqual(dataToBeCopied)
  })
  test('handleAPIResponse without copyToCB', async () => {
    const config = await getConfig()
    const tempPath = configPath.replace('config', 'config-temp')
    await fs.writeFile(tempPath, JSON.stringify(config))
    await fs.unlink(configPath)
    actionSetup()
    await fs.writeFile(configPath, JSON.stringify(config))
    await fs.unlink(tempPath)
  })
})
