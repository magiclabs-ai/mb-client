import '../../../src/commands/design-options'
import {describe, expect, test, vi} from 'vitest'
import {designOptionsServerFactory} from '@/core/tests/factories/design-options.factory'
import {fetchMocker} from '@/core/tests/mocks/fetch'
import {formatReturnJSON} from '@/core/utils/toolbox'
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
    await program.parseAsync(['design-options', 'get-densities'], {from: 'user'})
    expect(logSpy.mock.calls[0][0]).toStrictEqual(formatReturnJSON(designOptions))
  })

  test('Get densities', async () => {
    const designOptions = designOptionsServerFactory()
    fetchMocker.mockResponse(JSON.stringify(designOptions))
    await program.parseAsync(['design-options', 'get-densities',
      '--book-size', '10x10', '--image-count', '20', '--image-filtering-level', 'none'], {from: 'user'})
    expect(logSpy.mock.calls[1][0]).toStrictEqual(formatReturnJSON(designOptions))
  })
})
