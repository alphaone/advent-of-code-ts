import { fullyContained, overlaps, parse } from './day4'
import { readInput } from '../utils'

const input = readInput('src/2022/day4.txt')

it('solves part 1', async () => {
  expect(input.map(parse).filter(fullyContained).length).toEqual(515)
})
it('solves part 2', async () => {
  expect(input.map(parse).filter(overlaps).length).toEqual(883)
})

it('parses line', async () => {
  expect(parse('2-4,6-8')).toEqual({ first: [2, 3, 4], second: [6, 7, 8] })
})

it('checks if fully contains', async () => {
  expect(fullyContained({ first: [2, 3, 4], second: [6, 7, 8] })).toEqual(false)
  expect(
    fullyContained({ first: [2, 3, 4, 5, 6, 7, 8], second: [3, 4, 5, 6, 7] }),
  ).toEqual(true)
  expect(fullyContained({ first: [6], second: [4, 5, 6] })).toEqual(true)
})
