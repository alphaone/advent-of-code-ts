import { parseCol, parseRow, seatId } from './day5'
import { readInput } from '../utils'

test('parse row', () => {
  expect(parseRow('FBFBBFFRLR')).toEqual(44)
  expect(parseRow('BFFFBBFRRR')).toEqual(70)
  expect(parseRow('FFFBBBFRRR')).toEqual(14)
  expect(parseRow('BBFFBBFRLL')).toEqual(102)
})

test('parse column', () => {
  expect(parseCol('FBFBBFFRLR')).toEqual(5)
  expect(parseCol('BFFFBBFRRR')).toEqual(7)
  expect(parseCol('FFFBBBFRRR')).toEqual(7)
  expect(parseCol('BBFFBBFRLL')).toEqual(4)
})

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
