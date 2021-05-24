/**
 * promiseToLoadImage
 * @via https://github.com/colbyfayock/wwdc-memoji/blob/master/src/lib/images.js
 */

export function promiseToLoadImage({ url }) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = function(data) {
      resolve({
        img: this,
        data
      })
    }

    image.onerror = function(error) {
      reject(error);
    }

    image.src = url;
  })
}