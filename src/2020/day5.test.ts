import { range, seatId } from './day5'
import { readInput } from '../utils'

test('seat id', () => {
  expect(seatId('BFFFBBFRRR')).toEqual(567)
  expect(seatId('FFFBBBFRRR')).toEqual(119)
  expect(seatId('BBFFBBFRLL')).toEqual(820)
})

test('solve a', () => {
  const lines = readInput('src/2020/day5.txt').slice(0, -1)
  const ids = lines.map((l) => seatId(l))
  expect(Math.max(...ids)).toEqual(858)
})

test('range', () => {
  expect(range(2, 5)).toEqual([2, 3, 4])
})

test('solve b', () => {
  const lines = readInput('src/2020/day5.txt').slice(0, -1)
  const ids = lines.map((l) => seatId(l))
  const allSeats = range(Math.min(...ids), Math.max(...ids) + 1)
  const freeSeats = allSeats.filter((x) => !ids.includes(x))
  expect(freeSeats).toEqual([557])
})
