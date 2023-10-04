import {actionSetup, getPackageInfo, retrieveImageSet} from '../../../src/utils/toolbox'
import {configPath, getConfig, handleAPIResponse} from '@/cli/src/utils/toolbox'
import {describe, expect, test} from 'vitest'
import {promises as fs} from 'fs'
import {mockProcessExit} from 'vitest-mock-process'

mockProcessExit()
describe('Toolbox', () => {
  test.fails('handleAPIResponse', async () => {
    const res = await handleAPIResponse(async () => {
      throw new Error('test')
    })
    expect(res).toThrowError('test')
  })
  test('handleAPIResponse', async () => {
    const data = {
      state: 'SUCCESS'
    }
    await handleAPIResponse(async () => new Promise(resolve => resolve(data)))
  })
  test('handleAPIResponse', async () => {
    const config = await getConfig()
    const tempPath = configPath.replace('config', 'config-temp')
    await fs.writeFile(tempPath, JSON.stringify(config))
    await fs.unlink(configPath)
    actionSetup()
    await fs.writeFile(configPath, JSON.stringify(config))
    await fs.unlink(tempPath)
  })
  test('getPackageInfo', async () => {
    expect((await getPackageInfo()).name).toBe('@magiclabs.ai/magicbook-cli')
  })
  test.fails('retrieveImageSet', async () => {
    
    expect(retrieveImageSet('test')).toThrowError('test')

  })
})
