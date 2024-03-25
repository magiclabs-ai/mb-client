import {Canvas} from '@core/models/galleon.model'
import {faker} from '@faker-js/faker'

export function canvasFactory(): Canvas {
  return {
    backgroundId: faker.string.uuid(),
    assets: []
  }
}
