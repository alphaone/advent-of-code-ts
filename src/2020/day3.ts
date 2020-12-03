export type Slope = [number, number]

export function treesOnSlope(
  position: number,
  [slopeX, slopeY]: Slope,
  map: string[],
): number {
  const currentLine = map.shift()
  if (!currentLine) return 0

  const tree = currentLine[position] === '#' ? 1 : 0

  // move down once more
  if (slopeY === 2) map.shift()

  const nowPos = (position + slopeX) % currentLine.length
  return tree + treesOnSlope(nowPos, [slopeX, slopeY], map)
}
