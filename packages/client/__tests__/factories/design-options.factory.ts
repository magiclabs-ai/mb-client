import {DesignOptions} from '@/models/design-request/design-options'
import {faker} from '@faker-js/faker'

export type ImageDensityOptionServer = {
  max_page_count: number
  min_page_count: number
  max_image_count: number
  avg_image_count: number
  min_image_count: number
}

export type ImageDensityOptionsServer = {
  high: ImageDensityOptionServer
  medium: ImageDensityOptionServer
  low: ImageDensityOptionServer
}

export type DesignOptionsServer = {
  densities: ImageDensityOptionsServer
}

export function designOptionsServerFactory(): DesignOptionsServer {
  const max = 100
  return {
    densities: {
      high: {
        max_page_count: faker.number.int({max}),
        min_page_count: faker.number.int({max}),
        max_image_count: faker.number.int({max}),
        avg_image_count: faker.number.int({max}),
        min_image_count: faker.number.int({max})
      },
      medium: {
        max_page_count: faker.number.int({max}),
        min_page_count: faker.number.int({max}),
        max_image_count: faker.number.int({max}),
        avg_image_count: faker.number.int({max}),
        min_image_count: faker.number.int({max})
      },
      low: {
        max_page_count: faker.number.int({max}),
        min_page_count: faker.number.int({max}),
        max_image_count: faker.number.int({max}),
        avg_image_count: faker.number.int({max}),
        min_image_count: faker.number.int({max})
      }
    }
  }
}

export function designOptionsFactory(): DesignOptions {
  const max = 100
  return {
    densities: {
      high: {
        maxPageCount: faker.number.int({max}),
        minPageCount: faker.number.int({max}),
        maxImageCount: faker.number.int({max}),
        avgImageCount: faker.number.int({max}),
        minImageCount: faker.number.int({max})
      },
      medium: {
        maxPageCount: faker.number.int({max}),
        minPageCount: faker.number.int({max}),
        maxImageCount: faker.number.int({max}),
        avgImageCount: faker.number.int({max}),
        minImageCount: faker.number.int({max})
      },
      low: {
        maxPageCount: faker.number.int({max}),
        minPageCount: faker.number.int({max}),
        maxImageCount: faker.number.int({max}),
        avgImageCount: faker.number.int({max}),
        minImageCount: faker.number.int({max})
      }
    }
  }
}
