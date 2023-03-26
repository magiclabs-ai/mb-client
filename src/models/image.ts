/* istanbul ignore file */
export type Image = {
  batchNumber: number
  captureTime: string
  filename: string
  getThumbnailUrlPromise: Promise<string>
  height: number
  item: unknown
  largeThumbnailUrl: string
  largeThumbnailUrlEffects: string
  smallThumbnailUrl: string
  smallThumbnailUrlEffects: string
  title: string
  type: string
  uploadTime: string
  width: number
  xid: string
}
