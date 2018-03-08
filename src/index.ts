const VERSION = '0.0.0'

type imageType = 'image/jpeg' | 'image/png'

const ImageType = {
  jpg: 'image/jpeg',
  png: 'image/png',
}

type keepRation = boolean

const KeepRatio = {
  on: true,
  off: false
}

interface options {
  maxWidth?: number
  maxHeight?: number
  type?: imageType
  KeepRatio?: keepRation
  maxSize?: number
}

function create(
  input: HTMLInputElement,
  options: options
): Promise<any[]> {
  const p: any[] = []
  // inputを分割
  const len = input.files.length
  let i = 0
  for (i; i < len; i++) {
    p.push(FileToData(input.files[i]))
  }

  // allに渡す
  return Promise.all(p)
}

function FileToData(file: File): Promise<Blob> {
  const name = file.name
  const type = ImageType.jpg
  const quority = 1

  return getData(file)
    .then((data) => {
      return getBloB(data, type, quority)
    })
}

function getData(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(file)
  })
}

function getBloB(
  data: string,
  type: string = ImageType.jpg,
  quority: number = 1
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = imgToCanvas(img)
      canvas.toBlob(resolve, type, quority)
    }
    img.src = data
  })
}

function imgToCanvas(img: HTMLImageElement): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext("2d")
  const width = 100
  const height = 100
  ctx.drawImage(img, 0, 0, width, height)
  return canvas
}

const ImageFile = {
  version: VERSION,
  create
}

export default ImageFile