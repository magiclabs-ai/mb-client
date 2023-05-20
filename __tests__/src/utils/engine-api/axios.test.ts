import {APIHandler, get, post, put, remove} from '../../../../src/utils/engine-api/axios'
import {axiosDelete, axiosGet, axiosPost, axiosPut} from '../../../mocks/axios'
import {describe, expect, test, vi} from 'vitest'
import {faker} from '@faker-js/faker'

describe('Axios', () => {
  test('get function', async () => {
    const data = faker.lorem.sentence()
    axiosGet.mockResolvedValue({data})
    const res = await get({url: faker.internet.url(), options: {method: 'GET'}})
    expect(res.data).toBe(data)
  })
  test('get error function', async () => {
    const errorMessage = faker.lorem.sentence()
    try {
      const asyncMock = vi.fn().mockRejectedValue(new Error(errorMessage))
      await APIHandler(async () => asyncMock())
    } catch (error: any) {
      expect(error.message).toBe(errorMessage)
    }
  })
  test('remove function', async () => {
    axiosDelete.mockResolvedValue({data: 'deleted'})
    const res = await remove({url: faker.internet.url()})
    expect(res.data).toBe('deleted')
  })
  test('post function', async () => {
    axiosPost.mockResolvedValue({data: {status: 'created'}})
    const res = await post({url: faker.internet.url()})
    expect(res.data.status).toBe('created')
  })
  test('put function', async () => {
    axiosPut.mockResolvedValue({data: {status: 'updated'}})
    const res = await put({url: faker.internet.url()})
    expect(res.data.status).toBe('updated')
  })
})
