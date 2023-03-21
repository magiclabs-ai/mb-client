import type {Image} from '../models/image'

export async function BackgroundUploading(bookId: string, data: FileList) {
  const list = await Promise.all((Array.from(data) as unknown as Array<File>).map(image => FileToLowResImage(image)))
  console.log(list)
  // await uploadImages(await createImagesForBook(bookId, list))
}

export async function uploadImages(images) {
  return images
} 

export async function FileToLowResImage(file: File) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve: (value: Image) => void, reject) => {
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = function(e) {
      const img = new Image
      img.src = e.target?.result?.toString() || ''
      img.onload = function() {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const resizeBy = getImageResizingRatio(img)
        console.log(resizeBy)
        canvas.width = img.width / resizeBy
        canvas.height = img.height / resizeBy
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
        console.log(canvas.toDataURL())
        canvas.toBlob((blob) => {
          resolve({
            id: file.name,
            width: img.width,
            height: img.height,
            blob
          })
        })
      }
    }
    fr.onerror = function(e) {
      reject(e)
    }
  })
}

export function getImageResizingRatio(image: HTMLImageElement) {
  let aspectRatio = 1
  const maxLength = 500
  console.log(image.width, image.height)
  if (image.width > maxLength || image.height > maxLength) {
    aspectRatio = (image.width > image.height ? image.width : image.height) / maxLength
  }
  return aspectRatio
}