import {DesignOptions} from '@/models/design-request/design-options'

export const designOptions: DesignOptions = {
  densities: {
    low: {
      maxPageCount: 40,
      minPageCount: 36,
      maxImageCount: 3,
      avgImageCount: 2,
      minImageCount: 2
    },
    medium: {
      maxPageCount: 36,
      minPageCount: 32,
      maxImageCount: 4,
      avgImageCount: 3,
      minImageCount: 2
    },
    high: {
      maxPageCount: 32,
      minPageCount: 24,
      maxImageCount: 5,
      avgImageCount: 4,
      minImageCount: 3
    }
  }
}
