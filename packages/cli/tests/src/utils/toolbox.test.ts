import {actionSetup, getPackageInfo, retrieveImageSet} from '../../../src/utils/toolbox'
import {configPath, getConfig, handleAPIResponse} from '@/cli/src/utils/toolbox'
import {describe, expect, test} from 'vitest'
import {promises as fs} from 'fs'
import {mockProcessExit} from 'vitest-mock-process'
import os from 'os'
import path from 'path'

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
  test.fails('retrieveImageSet with error', async () => {
    expect(retrieveImageSet('test')).toThrowError('Image set test not found')
  })
  test('retrieveImageSet giving a image set relative path', async () => {
    const relativePath = path.join(
      __dirname.replace(os.homedir(), '~'),
      '../../../data/image-sets/00-nice-and-rome.json'
    )
    const images = retrieveImageSet(relativePath)
    expect(images.length).toBe(20)
  })
  test('retrieveImageSet giving a image set path', async () => {
    const images = retrieveImageSet('./data/image-sets/00-nice-and-rome.json')
    expect(images.length).toBe(20)
  })
  test('retrieveImageSet giving only image set name', async () => {
    const images = retrieveImageSet('00-nice-and-rome')
    expect(images.length).toBe(20)
  })
  test('retrieveImageSet giving only client image set', async () => {
    const images = retrieveImageSet('00-nice-and-rome-client')
    expect(images.length).toBe(20)
  })
})
