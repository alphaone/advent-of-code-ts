import {
  parsePassport,
  Passport,
  validByr,
  validEcl,
  validEyr,
  validHcl,
  validHgt,
  validIyr,
  validPassport,
  validPassportB,
  validPid,
} from './day4'
import { readInput } from '../utils'
import * as fs from 'fs'
import exp from 'constants'

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

test('valid byr', () => {
  expect(validByr({ byr: '2003' })).toBeFalsy()
  expect(validByr({ byr: '2002' })).toBeTruthy()
  expect(validByr({ byr: '1920' })).toBeTruthy()
  expect(validByr({ byr: '1919' })).toBeFalsy()
})

test('valid iyr', () => {
  expect(validIyr({ iyr: '2021' })).toBeFalsy()
  expect(validIyr({ iyr: '2020' })).toBeTruthy()
  expect(validIyr({ iyr: '2010' })).toBeTruthy()
  expect(validIyr({ iyr: '2009' })).toBeFalsy()
})

test('valid eyr', () => {
  expect(validEyr({ eyr: '2031' })).toBeFalsy()
  expect(validEyr({ eyr: '2030' })).toBeTruthy()
  expect(validEyr({ eyr: '2020' })).toBeTruthy()
  expect(validEyr({ eyr: '2019' })).toBeFalsy()
})

test('valid pid', () => {
  expect(validPid({ pid: '000111222' })).toBeTruthy()
  expect(validPid({ pid: '12345678' })).toBeFalsy()
  expect(validPid({ pid: '1234567890' })).toBeFalsy()
})

test('valid ecl', () => {
  expect(validEcl({ ecl: 'amb' })).toBeTruthy()
  expect(validEcl({ ecl: 'wrong' })).toBeFalsy()
  expect(validEcl({ ecl: 'hamb' })).toBeFalsy()
})

test('valid hcl', () => {
  expect(validHcl({ hcl: '#00ff00' })).toBeTruthy()
  expect(validHcl({ hcl: '#888' })).toBeFalsy()
  expect(validHcl({ hcl: '00ff00' })).toBeFalsy()
  expect(validHcl({ hcl: '#00ff00ff' })).toBeFalsy()
})

test('valid hgt', () => {
  expect(validHgt({ hgt: '149cm' })).toBeFalsy()
  expect(validHgt({ hgt: '150cm' })).toBeTruthy()
  expect(validHgt({ hgt: '193cm' })).toBeTruthy()
  expect(validHgt({ hgt: '194cm' })).toBeFalsy()
  expect(validHgt({ hgt: '58in' })).toBeFalsy()
  expect(validHgt({ hgt: '59in' })).toBeTruthy()
  expect(validHgt({ hgt: '76in' })).toBeTruthy()
  expect(validHgt({ hgt: '77in' })).toBeFalsy()
})

test('solve a', () => {
  expect(passportsFromInput().filter(validPassportB).length).toEqual(109)
})
