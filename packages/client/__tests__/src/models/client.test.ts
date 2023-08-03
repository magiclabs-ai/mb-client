import {DesignRequestProps} from '@/models/design-request'
import {MagicBookClient} from '@/index'
import {bookFactory} from '../../factories/book.factory'
import {describe, expect, test} from 'vitest'
import {mockCreateBook} from '../../mocks/books'

describe('Client', () => {
  test('createDesignRequest', async () => {
    const client = new MagicBookClient('123')
    const designRequestProps: DesignRequestProps = {
      title: 'My Book',
      occasion: 'baby',
      style: 1005,
      bookSize: '10x10',
      coverType: 'hc',
      pageType: 'dl'
    }
    mockCreateBook.mockResolvedValue({data: bookFactory()})
    const designRequest = await client.createDesignRequest(designRequestProps)
    Object.keys(designRequestProps).forEach((k) => {
      const key = k as keyof DesignRequestProps
      expect(designRequest[key]).toStrictEqual(designRequestProps[key])
    })
  })
})
