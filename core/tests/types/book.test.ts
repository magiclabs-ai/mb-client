import {Book} from '../../types/book'
import {bookFactory} from '../factories/book.factory'
import {describe, expect, test} from 'vitest'

describe('Book', () => {
  test('create book without id', async () => {
    const book = new Book({
      title: 'My Book',
      design_request: {
        occasion: 'birthday',
        style: '',
        book_size: '10x10',
        cover_type: 'hc',
        page_type: 'dl',
        image_density: 'high',
        image_filtering_level: 'best',
        embellishment_level: 'none',
        text_sticker_level: 'none'
      }
    })
    expect(book.id).toBeDefined()
  })

  test('book to BookProps', async () => {
    const book = bookFactory()
    expect(book).toStrictEqual(new Book(book.toBookProps()))
  })

  test('book to BookProps with undefined timeout', async () => {
    const book = bookFactory()
    book.timeout = undefined
    expect(book).toStrictEqual(new Book(book.toBookProps()))
    expect(book.timeout).toBeUndefined()
  })
})
