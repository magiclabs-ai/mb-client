import {describe, expect, test} from 'vitest'
import { Fetcher, baseOptions } from '@/models/fetcher.model'
import { fetchMocker } from '../../mocks/fetch'

describe('Fetcher', () => {
  const fetcher = new Fetcher('https://api.fake-server.com')
  test('init without options', async () => {
    expect(fetcher.options).toBe(baseOptions)
  })
  test.fails('fail call', async () => {
    fetchMocker.mockReject(() => Promise.reject('Something went wrong. Please try again.'))
    const res = await fetcher.call({path:'/books'})
    expect(res).toThrowError('Something went wrong. Please try again.')
  })
})
