import {Mock, vi} from 'vitest'
import {createBook, retrieveBook, retrieveGalleon, updateBook} from '@/utils/engine-api/books'

vi.mock('@/utils/engine-api/books', async () => ({
  createBook: vi.fn(),
  retrieveBook: vi.fn(),
  updateBook: vi.fn(),
  retrieveGalleon: vi.fn()
}))

export const mockCreateBook = createBook as Mock
export const mockRetrieveBook = retrieveBook as Mock
export const mockUpdateBook = updateBook as Mock
export const mockRetrieveGalleon = retrieveGalleon as Mock
