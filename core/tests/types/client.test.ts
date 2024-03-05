import {DesignRequestProps} from '@/core/types/design-request'
import {MagicBookClient} from '@/core/types/client'
import {bookFactory} from '@/core/tests/factories/book.factory'
import {describe, expect, test} from 'vitest'
import {fetchMocker} from '@/core/tests/mocks/fetch'

describe('Client', () => {
  test('createDesignRequest', async () => {
    const client = new MagicBookClient('123')
    const designRequestProps: DesignRequestProps = {
      title: 'My Book',
      occasion: 'baby',
      style: 1005,
      bookSize: '10x10',
      coverType: 'hc',
      pageType: 'dl',
      userId: 'userId'
    }
    fetchMocker.mockResponse(JSON.stringify(bookFactory()))
    const designRequest = await client.createDesignRequest({...designRequestProps})
    Object.keys(designRequestProps).forEach((k) => {
      const key = k as keyof DesignRequestProps
      expect(designRequest[key]).toStrictEqual(designRequestProps[key])
    })
  })
  test.fails('createDesignRequest', async () => {
    const client = new MagicBookClient('123')
    const designRequestProps = {
      title: 'My Book',
      occasion: 'baby',
      style: 1005,
      bookSize: '10x10',
      coverType: 'hc',
      pageType: 'dl'
    } as DesignRequestProps
    fetchMocker.mockResponse(JSON.stringify(bookFactory()))
    const designRequest = await client.createDesignRequest({...designRequestProps})
    expect(designRequest).toThrowError('userId is required')
  })
  test('retrieveDesignRequest', async () => {
    const client = new MagicBookClient('123')
    const book = bookFactory()
    fetchMocker.mockResponse(JSON.stringify(book))
    const designRequest = await client.retrieveDesignRequest(book.id)
    expect(designRequest.parentId).toStrictEqual(book.id)
  })
})
