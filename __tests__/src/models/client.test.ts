import {InitDesignRequest, MagicBookClient} from '../../../src/index'
import {describe, expect, test} from 'vitest'

describe('Client', () => {
  test('createDesignRequest', async () => {
    const client = new MagicBookClient('123')
    const initDesignRequest: InitDesignRequest = {
      images: 50,
      title: 'My Book',
      occasion: 'Birthday',
      style: 'Cartoon',
      bookFormat: 'Hardcover',
      coverType: 'Matte',
      pageType: 'Glossy'
    }
    const designRequest = await client.createDesignRequest(initDesignRequest)
    Object.keys(initDesignRequest).forEach((key) => {
      expect(designRequest[key]).toBe(initDesignRequest[key])
    })
  })
})
