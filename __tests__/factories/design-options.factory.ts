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
        max_page_count: faker.datatype.number({max}),
        min_page_count: faker.datatype.number({max}),
        max_image_count: faker.datatype.number({max}),
        avg_image_count: faker.datatype.number({max}),
        min_image_count: faker.datatype.number({max})
      },
      medium: {
        max_page_count: faker.datatype.number({max}),
        min_page_count: faker.datatype.number({max}),
        max_image_count: faker.datatype.number({max}),
        avg_image_count: faker.datatype.number({max}),
        min_image_count: faker.datatype.number({max})
      },
      low: {
        max_page_count: faker.datatype.number({max}),
        min_page_count: faker.datatype.number({max}),
        max_image_count: faker.datatype.number({max}),
        avg_image_count: faker.datatype.number({max}),
        min_image_count: faker.datatype.number({max})
      }
    }
  }
}

export function designOptionsFactory(): DesignOptions {
  const max = 100
  return {
    densities: {
      high: {
        maxPageCount: faker.datatype.number({max}),
        minPageCount: faker.datatype.number({max}),
        maxImageCount: faker.datatype.number({max}),
        avgImageCount: faker.datatype.number({max}),
        minImageCount: faker.datatype.number({max})
      },
      medium: {
        maxPageCount: faker.datatype.number({max}),
        minPageCount: faker.datatype.number({max}),
        maxImageCount: faker.datatype.number({max}),
        avgImageCount: faker.datatype.number({max}),
        minImageCount: faker.datatype.number({max})
      },
      low: {
        maxPageCount: faker.datatype.number({max}),
        minPageCount: faker.datatype.number({max}),
        maxImageCount: faker.datatype.number({max}),
        avgImageCount: faker.datatype.number({max}),
        minImageCount: faker.datatype.number({max})
      }
    }
  }
}
