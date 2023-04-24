export type DensityOptions = {
  maxPageCount: number
  minPageCount: number
  maxImageCount: number
  avgImageCount: number
  minImageCount: number
}

export type DesignOptionsDensities = {
  high: DensityOptions
  medium: DensityOptions
  low: DensityOptions
}

export type DesignOptions = {
  densities: DesignOptionsDensities
}
