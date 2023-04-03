import {DesignRequestProps} from '../../../src/models/design-request'
import {MagicBookClient} from '../../../src/index'
import {describe, expect, test} from 'vitest'

describe('Client', () => {
  test('createDesignRequest', async () => {
    const client = new MagicBookClient('123')
    const designRequestProps: DesignRequestProps = {
      title: 'My Book',
      occasion: 'Birthday',
      style: 'Cartoon',
      bookFormat: 'Hardcover',
      coverType: 'Matte',
      pageType: 'Glossy'
    }
    const designRequest = await client.createDesignRequest(designRequestProps)
    Object.keys(designRequestProps).forEach((key) => {
      expect(designRequest[key]).toBe(designRequestProps[key])
    })
  })
})
