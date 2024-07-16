import {faker} from '@faker-js/faker'
import type {SflyCanvas, SnapCanvas} from '@core/models/galleon.model'

export function canvasFactory(): SflyCanvas {
  return {
    backgroundId: faker.string.uuid(),
    assets: []
  }
}

export function snapCanvasFactory(): SnapCanvas {
  return {
    surfaceNumber: faker.number.int(),
    surfaceData: {},
    version: '4.0'
  }
}
