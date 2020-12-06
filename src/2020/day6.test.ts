import { countAnswers, inputToGroups } from './day6'
import * as fs from 'fs'

test('count answers', () => {
  expect(countAnswers(['abcx', 'abcy', 'abcz'])).toBe(6)
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
      .map(countAnswers)
      .reduce((sum, a) => sum + a),
  ).toEqual(11)
})

test('solve a', () => {
  expect(
    inputToGroups(input)
      .map(countAnswers)
      .reduce((sum, a) => sum + a),
  ).toEqual(6443)
})
