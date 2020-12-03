import { Slope, treesOnSlope } from './day3'
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
  expect(treesOnSlope(0, [3, 1], [...exampleMap])).toBe(7)
})

test('multiple slopes', () => {
  const res = [
    <Slope>[1, 1],
    <Slope>[3, 1],
    <Slope>[5, 1],
    <Slope>[7, 1],
    <Slope>[1, 2],
  ].map((slope) => {
    return treesOnSlope(0, slope, [...exampleMap])
  })
  expect(res).toEqual([2, 7, 3, 4, 2])
  expect(res.reduce((acc, cur) => acc * cur)).toEqual(336)
})

test('solve puzzle b', () => {
  const input = readInput('src/2020/day3.txt')
  const res = [
    <Slope>[1, 1],
    <Slope>[3, 1],
    <Slope>[5, 1],
    <Slope>[7, 1],
    <Slope>[1, 2],
  ].map((slope) => {
    return treesOnSlope(0, slope, [...input])
  })
  expect(res).toEqual([84, 228, 89, 100, 40])
  expect(res.reduce((acc, cur) => acc * cur)).toEqual(6818112000)
})
