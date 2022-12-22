import { intersection } from 'lodash'

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function priority(elem: string): number {
  return alphabet.indexOf(elem) + 1
}

export function findDuplicate(rucksack: string): string {
  const [left, right] = splitInHalf(rucksack).map((side) => side.split(''))

  return intersection(left, right)[0]!
}

export function splitInHalf(rucksack: string): [string, string] {
  const middle = rucksack.length / 2
  return [rucksack.slice(0, middle), rucksack.slice(middle)]
}

export function findBadge(group: string[]): string {
  return intersection(...group.map((side) => side.split('')))[0]!
}
