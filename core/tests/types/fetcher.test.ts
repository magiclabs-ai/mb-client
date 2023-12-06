import {Fetcher, baseOptions} from '@/core/types/fetcher'
import {describe, expect, test} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'

describe('Fetcher', () => {
  const fetcher = new Fetcher('https://api.fake-server.com')
  test('init without options', async () => {
    expect(fetcher.options).toBe(baseOptions)
  })
  test('call with qs', async () => {
    await fetcher.call({path:'/books', qs: 'test=1'})
  })
  test.fails('fail call', async () => {
    fetchMocker.mockReject(() => Promise.reject('Something went wrong. Please try again.'))
    const res = await fetcher.call({path:'/books'})
    expect(res).toThrowError('Something went wrong. Please try again.')
  })
  test.fails('fail call when status code is > 300 with detailed message', async () => {
    fetchMocker.mockResponse(() => Promise.resolve(
      {
        status: 400,
        statusText: 'Error 400',
        body: JSON.stringify({
          detail: 'Detail error'
        })
      }
    ))
    const res = await fetcher.call({path:'/books'})
    expect(res).toThrowError('400 Detail error')
  })
  test.fails('fail call when status code is > 300 with statusText', async () => {
    fetchMocker.mockResponse(() => Promise.resolve(
      {
        status: 400,
        statusText: 'Error 400'
      }
    ))
    const res = await fetcher.call({path:'/books'})
    expect(res).toThrowError('400 Detail error')
  })
  test.fails('fail call when status code is > 300', async () => {
    fetchMocker.mockResponse(undefined as unknown as string, {status: 400, statusText: 'Error 400'})
    const res = await fetcher.call({path:'/books'})
    expect(res).toThrowError('Error 400')
  })
})
