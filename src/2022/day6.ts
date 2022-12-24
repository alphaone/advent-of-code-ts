export function findStartOfPacket(input: string): number {
  return windows(4, input.split('')).findIndex(allUnique) + 4
}

export function findStartOfMessage(input: string): number {
  return windows(14, input.split('')).findIndex(allUnique) + 14
}

function windows<T>(length: number, arr: T[], i = 0, out: T[][] = []): T[][] {
  return i > arr.length - length
    ? out
    : windows(length, arr, i + 1, [...out, arr.slice(i, i + length)])
}

function allUnique<T>(arr: T[]): boolean {
  return new Set(arr).size === arr.length
}
