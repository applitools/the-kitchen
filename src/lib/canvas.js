/**
 * drawImages
 * @via https://github.com/colbyfayock/wwdc-memoji/blob/master/src/lib/canvas.js
 */

export function drawImages({ context, images = [] }) {
  if ( !Array.isArray(images) ) {
    throw new Error(`Failed to draw images: Invalid images type`);
  }

  images.forEach((img = {}) => {
    const { image, x, y, width, height } = img;
    context.drawImage(image, x, y, width, height)
  });
}