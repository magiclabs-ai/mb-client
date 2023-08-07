import {Mock, vi} from 'vitest'
import {getDesignOptions} from '@/utils/engine-api/design-options'

vi.mock('@/utils/engine-api/design-options', async () => ({
  getDesignOptions: vi.fn()
}))

export const mockGetDesignOptions = getDesignOptions as Mock
