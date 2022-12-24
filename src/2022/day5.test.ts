import {
  moveWithCrateMover9000,
  moveWithCrateMover9001,
  parseInstruction,
  shift,
  topRow,
} from './day5'
import { readInput } from '../utils'

const instructions = readInput('src/2022/day5.txt').map(parseInstruction)
const state = [
  ['S', 'P', 'W', 'N', 'J', 'Z'],
  ['T', 'S', 'G'],
  ['H', 'L', 'R', 'Q', 'T'],
  ['D', 'T', 'S', 'V'],
  ['J', 'M', 'B', 'D', 'T', 'Z', 'Q'],
  ['L', 'Z', 'C', 'D', 'J', 'T', 'W', 'N'],
  ['J', 'T', 'G', 'W', 'M', 'P', 'L'],
  ['H', 'Q', 'F', 'B', 'T', 'M', 'G', 'N'],
  ['W', 'Q', 'B', 'P', 'C', 'G', 'D', 'R'],
]

it('solve part 1', async () => {
  expect(topRow(instructions.reduce(moveWithCrateMover9000, state))).toEqual(
    'MQTPGLLDN',
  )
})

it('solve part 2', async () => {
  const res = instructions.reduce(moveWithCrateMover9001, state)
  // [
  //   ['L'],
  //   ['T', 'M'],
  //   ['Z'],
  //   ['P', 'T', 'B', 'P', 'Q', 'D'],
  //   ['S', 'T', 'F', 'Q', 'R'],
  //   ['T', 'M', 'J', 'V', 'M', 'D', 'T', 'L', 'R', 'H', 'S', 'G', 'B', 'N', 'N', 'T', 'Z', 'J', 'D', 'Q', 'C', 'J', 'J', 'W'],
  //   ['T', 'P', 'W', 'W', 'G', 'S'],
  //   ['C', 'B', 'Q', 'G', 'D', 'N', 'H', 'G', 'L', 'W'],
  //   ['Z'],
  // ]
  expect(topRow(res)).toEqual('LTZPSTTCZ') // apparently wrong :\
})

const sampleState = [['N', 'Z'], ['D', 'C', 'M'], ['P']]
const sampleInstructions = [
  'move 1 from 2 to 1',
  'move 3 from 1 to 3',
  'move 2 from 2 to 1',
  'move 1 from 1 to 2',
].map(parseInstruction)

it('can advance the state step by step ', async () => {
  expect(
    sampleInstructions.reduce(moveWithCrateMover9000, sampleState),
  ).toEqual([['C'], ['M'], ['Z', 'N', 'D', 'P']])
})

it('can advance (9001) the state step by step ', async () => {
  expect(
    sampleInstructions.reduce(moveWithCrateMover9001, sampleState),
  ).toEqual([['M'], ['C'], ['D', 'N', 'Z', 'P']])
})

it('gets top crates', async () => {
  expect(topRow([['C'], ['M'], ['Z', 'N', 'D', 'P']])).toEqual('CMZ')
})

describe('shifting array', () => {
  it('shift an amount of elements from an item', async () => {
    const original = [1, 2, 3, 4]
    expect(shift(original, 3)).toEqual([1, 2, 3])
    expect(original).toEqual([4])
  })

  it('works fine with amount too high', async () => {
    const original = [1, 2, 3, 4]
    expect(shift(original, 5)).toEqual([1, 2, 3, 4])
    expect(original).toEqual([])
  })
})
