import {APIHandler, get, post, put, remove} from '../../../../src/utils/engine-api/axios'
import {axiosDelete, axiosGet, axiosPost, axiosPut} from '../../../mocks/axios'
import {describe, expect, test, vi} from 'vitest'
import {faker} from '@faker-js/faker'

describe('Axios', () => {
  const apiKey = faker.string.uuid()
  const url = faker.internet.url()

  test('get function', async () => {
    const data = faker.lorem.sentence()
    axiosGet.mockResolvedValue({data})
    const res = await get({url, apiKey, options: {method: 'GET'}})
    expect(res.data).toStrictEqual(data)
  })
  test('get error function', async () => {
    const errorMessage = faker.lorem.sentence()
    try {
      const asyncMock = vi.fn().mockRejectedValue(new Error(errorMessage))
      await APIHandler(async () => asyncMock())
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      expect(error.message).toStrictEqual(errorMessage)
    }
  })
  test('remove function', async () => {
    axiosDelete.mockResolvedValue({data: 'deleted'})
    const res = await remove({url, apiKey})
    expect(res.data).toStrictEqual('deleted')
  })
  test('post function', async () => {
    axiosPost.mockResolvedValue({data: {status: 'created'}})
    const res = await post({url, apiKey})
    expect(res.data.status).toStrictEqual('created')
  })
  test('put function', async () => {
    axiosPut.mockResolvedValue({data: {status: 'updated'}})
    const res = await put({url, apiKey})
    expect(res.data.status).toStrictEqual('updated')
  })
})
