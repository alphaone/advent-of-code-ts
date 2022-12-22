import { intersection, range } from 'lodash'

type Assignment = {
  first: number[]
  second: number[]
}

export function parse(line: string): Assignment {
  const [first, second] = line.split(',')
  if (!first || !second) throw new Error('line does not have two elves')
  return { first: expandRange(first), second: expandRange(second) }
}

function expandRange(rangeStr: string): number[] {
  const [start, end] = rangeStr.split('-')
  if (!start || !end) throw new Error('malformed range')

  return range(parseInt(start), parseInt(end) + 1)
}

export function fullyContained({ first, second }: Assignment): boolean {
  const i = intersection(first, second)
  return i.length === first.length || i.length === second.length
}

export function overlaps({ first, second }: Assignment): boolean {
  const i = intersection(first, second)
  return i.length > 0
}
