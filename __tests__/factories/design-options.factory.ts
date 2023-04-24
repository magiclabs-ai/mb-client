import {DesignOptions} from '@/models/design-request/design-options'
import {faker} from '@faker-js/faker'

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
