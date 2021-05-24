// via: https://jsfiddle.net/dX9Y3/

export function getElementMousePosition({ element, clientX, clientY }) {
  const { left, top } = element.getBoundingClientRect();
  return {
    x: clientX - left,
		y: clientY - top
  }
}

export function isPositionInsideArea(position, area) {
  return position.x > area.x
    && position.x < area.x + area.width
    && position.y < area.y + area.heigth
    && position.y > area.y;
}