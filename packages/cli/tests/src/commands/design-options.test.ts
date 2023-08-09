import '../../../src/commands/design-options'
import {describe, expect, test, vi} from 'vitest'
import {designOptionsServerFactory} from '@/core/tests/factories/design-options.factory'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {mockProcessExit} from 'vitest-mock-process'
import {program} from 'commander'

mockProcessExit()
vi.mock('prompts', async () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => Promise.resolve({
      bookSize: 'ABC',
      imageCount: 20,
      imageFilteringLevel: 'TEST',
      isValid: typeof props.validate === 'function' 
        ? props.validate(10) 
        : true,
      invalid: typeof props.validate === 'function' 
        ? props.validate(0) 
        : true
    })
  }
})
describe('Design Options', () => {
  const logSpy = vi.spyOn(console, 'log')
  test('getDensities without args', async () => {
    const designOptions = designOptionsServerFactory()
    fetchMocker.mockResponse(JSON.stringify(designOptions))
    await program.parseAsync(['designOptions', 'getDensities'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(JSON.parse(JSON.stringify(designOptions)))
  })

  test('getDensities', async () => {
    const designOptions = designOptionsServerFactory()
    fetchMocker.mockResponse(JSON.stringify(designOptions))
    await program.parseAsync(['designOptions', 'getDensities',
      '--bookSize', '10x10', '--imageCount', '20', '--imageFilteringLevel', 'none'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(JSON.parse(JSON.stringify(designOptions)))
  })
})
