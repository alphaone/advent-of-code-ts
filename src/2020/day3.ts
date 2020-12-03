export function treesOnSlope(
  position: number,
  [slopeX, slopeY]: [number, number],
  map: string[],
): number {
  const currentLine = map.shift()
  if (!currentLine) return 0

  const tree = currentLine[position] === '#' ? 1 : 0

  const nowPos = (position + slopeX) % currentLine.length
  return tree + treesOnSlope(nowPos, [slopeX, slopeY], map)
}
