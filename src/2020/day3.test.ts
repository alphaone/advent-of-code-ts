import { treesOnSlope } from './day3'
import { readInput } from '../utils'

const exampleMap = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#',
]

test('solve puzzle a', () => {
  const input = readInput('src/2020/day3.txt')
  expect(treesOnSlope(0, [3, 1], input)).toBe(228)
})

test('count trees on slope in example', () => {
  expect(treesOnSlope(0, [3, 1], exampleMap)).toBe(7)
})
