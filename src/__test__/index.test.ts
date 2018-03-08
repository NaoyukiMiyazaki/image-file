import { imgToCanvas, getBloB, getData } from '../index'

test('imgToCanvas', () => {
  const img = new Image(200, 100)
  const canvas = imgToCanvas(img)
  expect(canvas.width).toBe(200)
  expect(canvas.height).toBe(100)
})

test('getBloB', () => {
  expect(typeof getBloB).toBe('function')
})

test('getData', () => {
  expect(typeof getData).toBe('function')
})
