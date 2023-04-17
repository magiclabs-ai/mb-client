export interface BookCreationRequest {
  title: string
  coverSpecId: string
  styleId: number
  userId: string
  magicShopBook: MagicShopBook
  reportingData: ReportingData
}

export interface MagicShopBook {
  pages: Page[]
  photoStrip: PhotoStrip[]
}

export interface Page {
  pageNum: number
  type: string
  canvas: Canvas
}

export interface Canvas {
  backgroundId?: string
  assets: Asset[]
}

export interface Asset {
  type: string
  imageAssignment?: ImageAssignment
  position: Position
  seqNum: number
  z: number
  id?: string
  horizJustification?: string
  vertJustification?: string
  text?: string
  fontId?: string
  fontSize?: number
  fontColor?: string
  frame?: string
}

export interface ImageAssignment {
  photoRefId: number
  finalCrop: number[]
}

export interface Position {
  x: number
  y: number
  width?: number
  height?: number
  rotation: number
}

export interface PhotoStrip {
  url: string
  encryptId: string
  photoRefId: number
  photoMetadata: PhotoMetadata
}

export interface PhotoMetadata {
  id: string
  llx: number
  lly: number
  urx: number
  ury: number
  data: string
  title: string
  width: number
  effect: string
  height: number
  source: string
  rotation: number
  uploadTime: string
}

export interface ReportingData {
  properties: Property[]
}

export interface Property {
  key: string
  value: string | number | boolean | null
}
