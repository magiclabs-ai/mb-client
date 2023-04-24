export type ImageDensityOption = {
  maxPageCount: number
  minPageCount: number
  maxImageCount: number
  avgImageCount: number
  minImageCount: number
}

export type ImageDensityOptions = {
  high: DensityOptions
  medium: DensityOptions
  low: DensityOptions
}

export type DesignOptions = {
  densities: ImageDensityOptions
}
