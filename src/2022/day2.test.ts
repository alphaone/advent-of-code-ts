import {
  chooseOutcome,
  parseRound1,
  score,
  totalScorePart1,
  totalScorePart2,
} from './day2'
import { readInput } from '../utils'

it('solve part 1', async () => {
  const input = readInput('src/2022/day2.txt')
  expect(totalScorePart1(input)).toEqual(10718)
})
it('solve part 2', async () => {
  const input = readInput('src/2022/day2.txt')
  expect(totalScorePart2(input)).toEqual(14652)
})

it('total score part 1', async () => {
  const input = ['A Y', 'B X', 'C Z']
  expect(totalScorePart1(input)).toEqual(15)
})

it('total score part 2', async () => {
  const input = ['A Y', 'B X', 'C Z']
  expect(totalScorePart2(input)).toEqual(12)
})

it('parse', async () => {
  expect(parseRound1('A Z')).toEqual({
    opponent: 'A',
    response: 'Z',
  })
})

it('score round', async () => {
  expect(score({ opponent: 'A', response: 'Y' })).toEqual(8)
  expect(score({ opponent: 'B', response: 'X' })).toEqual(1)
  expect(score({ opponent: 'C', response: 'Z' })).toEqual(6)
})

it('choose outcome', async () => {
  expect(chooseOutcome({ opponent: 'A', outcome: 'Y' })).toEqual({
    opponent: 'A',
    response: 'X',
  })
  expect(chooseOutcome({ opponent: 'B', outcome: 'X' })).toEqual({
    opponent: 'B',
    response: 'X',
  })
  expect(chooseOutcome({ opponent: 'C', outcome: 'Z' })).toEqual({
    opponent: 'C',
    response: 'X',
  })
})
