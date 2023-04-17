import {DesignRequestImage} from '@/index'
import {addImageInBook, listImagesInBook} from '@/utils/engine-api/images'
import {describe, test, vi} from 'vitest'

vi.mock('axios')

describe('Axios', () => {
  test('addImageInBook function', () => {
    addImageInBook('bookId', {} as DesignRequestImage)
  })
  test('listImagesInBook function', () => {
    listImagesInBook('bookId')
  })
})

