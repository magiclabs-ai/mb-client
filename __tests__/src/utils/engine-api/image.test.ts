import {createImagesForBook, listImagesForBook} from '../../../../src/utils/engine-api/images'
import {describe, test, vi} from 'vitest'

vi.mock('axios')

describe('Axios', () => {
  test('createImagesForBook function', () => {
    createImagesForBook('bookId', [])
  })
  test('listImagesForBook function', () => {
    listImagesForBook('bookId')
  })
})

