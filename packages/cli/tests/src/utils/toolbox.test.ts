import '../../../src/utils/toolbox'
import {configPath, getConfig, handleAPIResponse} from '@/cli/src/utils/toolbox'
import {describe, expect, test} from 'vitest'
import {promises as fs} from 'fs'
import clipboardy from 'clipboardy'

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
})
