import { isValid, isValidB, parseLine, Rule } from './day2'
import { readInput } from '../utils'

function linesFromInput(): [string, Rule][] {
  return readInput('src/2020/day2.txt')
    .map(parseLine)
    .filter((l) => !!l) as [string, Rule][]
}

test('solve part a', () => {
  const validPwds = linesFromInput().filter(([pwd, rule]) => isValid(pwd, rule))
  expect(validPwds.length).toBe(586)
})

test('parse line', () => {
  expect(parseLine('1-3 a: abcde')).toEqual([
    'abcde',
    <Rule>{
      char: 'a',
      min: 1,
      max: 3,
    },
  ])
})

test('valid?', () => {
  expect(isValid('abcde', { char: 'a', min: 1, max: 3 })).toBeTruthy()
  expect(isValid('cdefg', { char: 'b', min: 1, max: 3 })).toBeFalsy()
  expect(isValid('ccccccccc', { char: 'c', min: 2, max: 9 })).toBeTruthy()
})

test('solve part b', () => {
  const validPwds = linesFromInput().filter(([pwd, rule]) =>
    isValidB(pwd, rule),
  )
  expect(validPwds.length).toBe(352)
})

test('valid b', () => {
  expect(isValidB('abcde', { char: 'a', min: 1, max: 3 })).toBeTruthy()
  expect(isValidB('cdefg', { char: 'b', min: 1, max: 3 })).toBeFalsy()
  expect(isValidB('ccccccccc', { char: 'c', min: 2, max: 9 })).toBeFalsy()
})
