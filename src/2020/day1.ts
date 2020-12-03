export type Pair = [number, number]

export function productOfPairWithSum(
  targetSum: number,
  entries: number[],
): number {
  const pair = findPair(targetSum, entries)

  if (!pair) return -1

  const [x, y] = pair
  return x * y
}

export function findPair(
  targetSum: number,
  entries: number[],
): Pair | undefined {
  let pairOfTargetSum = ([x, y]: Pair) => x + y === targetSum
  return pairs(entries).find(pairOfTargetSum)
}

export function pairs(entries: number[]): Pair[] {
  if (entries.length < 2) return []
  const current = entries.shift() as number
  return entries
    .map<Pair>((y) => [current, y])
    .concat(pairs(entries))
}
