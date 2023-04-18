import {DesignRequestProps} from '@/models/design-request'
import {MagicBookClient} from '@/index'
import {describe, expect, test} from 'vitest'

describe('Client', () => {
  test('createDesignRequest', async () => {
    const client = new MagicBookClient('123')
    const designRequestProps: DesignRequestProps = {
      title: 'My Book',
      occasion: 'baby',
      style: '2020-what-a-year-sfly',
      bookSize: '10x10',
      coverType: 'hc',
      pageType: 'dl'
    }
    const designRequest = await client.createDesignRequest(designRequestProps)
    Object.keys(designRequestProps).forEach((k) => {
      const key = k as keyof DesignRequestProps
      expect(designRequest[key]).toBe(designRequestProps[key])
    })
  })
})
