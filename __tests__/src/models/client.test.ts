import {MagicBookClient} from '../../../src/index'
import {describe, test} from 'vitest'

describe('Client', () => {
  test('createDesignRequest', () => {
    const client = new MagicBookClient('123')
    client.createDesignRequest({
      pages: 50,
      occasion: 'Birthday',
      style: 'Cartoon',
      bookFormat: 'Hardcover',
      coverType: 'Matte',
      pageType: 'Glossy'
    })
  })
})
