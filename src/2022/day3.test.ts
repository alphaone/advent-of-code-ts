import { chunk, sum } from 'lodash'
import { findBadge, findDuplicate, priority, splitInHalf } from './day3'
import { readInput } from '../utils'

const input = readInput('src/2022/day3.txt')

it('solves part 1', async () => {
  const priorities = input.map(findDuplicate).map(priority)
  expect(sum(priorities)).toEqual(7568)
})

it('solves part 1', async () => {
  const priorities = chunk(input, 3).map(findBadge).map(priority)
  expect(sum(priorities)).toEqual(2780)
})

it('calculates the priority of a rucksack', async () => {
  expect(priority(findDuplicate('vJrwpWtwJgWrhcsFMMfFFhFp'))).toEqual(16)
  expect(priority(findDuplicate('jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'))).toEqual(
    38,
  )
})

it('find duplicate item', async () => {
  expect(findDuplicate('vJrwpWtwJgWrhcsFMMfFFhFp')).toEqual('p')
  expect(findDuplicate('jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL')).toEqual('L')
})

it('splits a rucksack in half', async () => {
  expect(splitInHalf('vJrwpWtwJgWrhcsFMMfFFhFp')).toEqual([
    'vJrwpWtwJgWr',
    'hcsFMMfFFhFp',
  ])
})

it('finds the only common symbol as `the badge`', async () => {
  expect(
    findBadge([
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg',
    ]),
  ).toEqual('r')
  expect(
    findBadge([
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw',
    ]),
  ).toEqual('Z')
})
