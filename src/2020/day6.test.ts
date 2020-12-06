import {
  countAnswersIntersection,
  countAnswersUnion,
  inputToGroups,
  intersection,
} from './day6'
import * as fs from 'fs'

test('count answers', () => {
  expect(countAnswersUnion(['abcx', 'abcy', 'abcz'])).toBe(6)
})

test('count answers intersection', () => {
  expect(countAnswersIntersection(['abcx', 'abcy', 'abcz'])).toBe(3)
})

const exampleInput = 'abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb'
const input = fs.readFileSync('src/2020/day6.txt', 'utf8')

test('input to groups', () => {
  expect(inputToGroups(exampleInput)).toEqual([
    ['abc'],
    ['a', 'b', 'c'],
    ['ab', 'ac'],
    ['a', 'a', 'a', 'a'],
    ['b'],
  ])
})

test('solve example', () => {
  expect(
    inputToGroups(exampleInput)
      .map(countAnswersUnion)
      .reduce((sum, a) => sum + a),
  ).toEqual(11)
})

test('solve a', () => {
  expect(
    inputToGroups(input)
      .map(countAnswersUnion)
      .reduce((sum, a) => sum + a),
  ).toEqual(6443)
})

test('intersection', () => {
  expect(intersection([new Set([1, 2, 3])])).toEqual(new Set([1, 2, 3]))
  expect(intersection([new Set([1, 2, 3]), new Set([1, 2, 4])])).toEqual(
    new Set([1, 2]),
  )
  expect(
    intersection([new Set([1, 2, 3]), new Set([1, 2, 4]), new Set([1, 3, 4])]),
  ).toEqual(new Set([1]))
})

test('solve example intersection', () => {
  expect(
    inputToGroups(exampleInput)
      .map(countAnswersIntersection)
      .reduce((sum, a) => sum + a),
  ).toEqual(6)
})

test('solve b', () => {
  expect(
    inputToGroups(input)
      .map(countAnswersIntersection)
      .reduce((sum, a) => sum + a),
  ).toEqual(3232)
})
