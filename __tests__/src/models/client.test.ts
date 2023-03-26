import {MagicBookClient} from '../../../src/index'
import {describe, expect, test} from 'vitest'

describe('Client', () => {
  test('createDesignRequest', async () => {
    const client = new MagicBookClient('123')
    const InitDesignRequest = {
      pages: 50,
      occasion: 'Birthday',
      style: 'Cartoon',
      bookFormat: 'Hardcover',
      coverType: 'Matte',
      pageType: 'Glossy'
    }
    const designRequest = await client.createDesignRequest(InitDesignRequest)
    Object.keys(InitDesignRequest).forEach((key) => {
      expect(designRequest[key]).toBe(InitDesignRequest[key])
    })
  })
})
