import { parsePassport, Passport, validPassport } from './day4'
import { readInput } from '../utils'
import * as fs from 'fs'

function passportsFromInput(): Passport[] {
  return fs
    .readFileSync('src/2020/day4.txt', 'utf8')
    .split(/\n\n/)
    .map(parsePassport)
    .filter((l) => !!l) as Passport[]
}

test('parse passport', () => {
  const input =
    'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm'

  expect(parsePassport(input)).toEqual(<Passport>{
    ecl: 'gry',
    pid: '860033327',
    eyr: '2020',
    hcl: '#fffffd',
    byr: '1937',
    iyr: '2017',
    cid: '147',
    hgt: '183cm',
  })
})

test('valid passport', () => {
  expect(
    validPassport({
      ecl: 'gry',
      pid: '860033327',
      eyr: '2020',
      hcl: '#fffffd',
      byr: '1937',
      iyr: '2017',
      hgt: '183cm',
    }),
  ).toBeTruthy()
})

test('invalid passport', () => {
  expect(
    validPassport({
      ecl: 'gry',
      pid: '860033327',
      eyr: '2020',
      hcl: '#fffffd',
      byr: '1937',
      iyr: '2017',
    }),
  ).toBeFalsy()
})

test('solve a', () => {
  expect(passportsFromInput().filter(validPassport).length).toEqual(182)
})
