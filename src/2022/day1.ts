export function sumByElf(input: number[]): number[] {
  const zzz = input.map(nanToUndef)
  const byElf = split(zzz)
  return byElf.map(sumUp)
}

function nanToUndef(x: number): number | undefined {
  return isNaN(x) ? undefined : x
}

function sumUp(arr: number[]): number {
  return arr.reduce((acc, cur) => acc + cur, 0)
}

export function split(arr: (number | undefined)[]): number[][] {
  const pos = arr.indexOf(undefined)
  if (pos === -1) return [arr as number[]]

  const front = arr.slice(0, pos) as number[]
  const rest = arr.slice(pos + 1)
  return [front, ...split(rest)]
}
