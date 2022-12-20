export type Pair = [number, number]
export type Triple = [number, number, number]

export function productOfPairWithSum(
  targetSum: number,
  entries: number[],
): number {
  const pair = findPair(targetSum, entries)

  if (!pair) return -1

  const [x, y] = pair
  return x * y
}

export function productOfTripleWithSum(
  targetSum: number,
  entries: number[],
): number {
  const triple = findTriple(targetSum, entries)

  if (!triple) return -1

  const [x, y, z] = triple
  return x * y * z
}

export function findPair(
  targetSum: number,
  entries: number[],
): Pair | undefined {
  const pairOfTargetSum = ([x, y]: Pair) => x + y === targetSum
  return pairs(entries).find(pairOfTargetSum)
}

export function findTriple(
  targetSum: number,
  entries: number[],
): Triple | undefined {
  const tripleOfTargetSum = ([x, y, z]: Triple) => x + y + z === targetSum
  return triples(entries).find(tripleOfTargetSum)
}

export function pairs(entries: number[]): Pair[] {
  if (entries.length < 2) return []
  const current = entries.shift() as number
  return entries.map<Pair>((y) => [current, y]).concat(pairs(entries))
}

export function triples(entries: number[]): Triple[] {
  if (entries.length < 3) return []

  const current = entries.shift() as number
  const pairsWithRest = pairs([...entries])
  return pairsWithRest
    .map<Triple>((p) => [current, ...p])
    .concat(triples(entries))
}
