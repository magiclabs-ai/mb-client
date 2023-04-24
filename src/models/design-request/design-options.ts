export type ImageDensityOption = {
  maxPageCount: number
  minPageCount: number
  maxImageCount: number
  avgImageCount: number
  minImageCount: number
}

export type ImageDensityOptions = {
  high: ImageDensityOption
  medium: ImageDensityOption
  low: ImageDensityOption
}

export type DesignOptions = {
  densities: ImageDensityOptions
}
