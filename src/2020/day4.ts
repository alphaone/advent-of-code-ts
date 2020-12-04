export type Passport = {
  ecl?: string
  pid?: string
  eyr?: string
  hcl?: string
  byr?: string
  iyr?: string
  cid?: string
  hgt?: string
}

export function parsePassport(input: string): Passport | undefined {
  const match = input.matchAll(/(\w{3}):([\w\d#]+)/g)
  if (!match) return undefined

  let res: Passport = {}
  for (const m of Array.from(match)) {
    const [_, key, value]: string[] = m
    if (key && value) {
      ;(res as any)[key] = value
    }
  }
  return res
}

export function validPassport(passport: Passport): boolean {
  const neededKeys = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt']
  const keys = Object.keys(passport)
  return neededKeys.every((k) => keys.includes(k))
}

export function validPassportB(passport: Passport): boolean {
  return (
    validByr(passport) &&
    validIyr(passport) &&
    validEyr(passport) &&
    validPid(passport) &&
    validEcl(passport) &&
    validHcl(passport) &&
    validHgt(passport)
  )
}

export function validByr(passport: Passport): boolean {
  if (!passport.byr) return false
  const byr = parseInt(passport.byr)
  return byr >= 1920 && byr <= 2002
}

export function validIyr(passport: Passport): boolean {
  if (!passport.iyr) return false
  const iyr = parseInt(passport.iyr)
  return iyr >= 2010 && iyr <= 2020
}

export function validEyr(passport: Passport): boolean {
  if (!passport.eyr) return false
  const eyr = parseInt(passport.eyr)
  return eyr >= 2020 && eyr <= 2030
}

export function validPid(passport: Passport): boolean {
  if (!passport.pid) return false
  return !!passport.pid.match(/^\d{9}$/)
}

export function validEcl(passport: Passport): boolean {
  if (!passport.ecl) return false
  return !!passport.ecl.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)
}

export function validHcl(passport: Passport): boolean {
  if (!passport.hcl) return false
  return !!passport.hcl.match(/^#([0-9a-f]){6}$/)
}

export function validHgt(passport: Passport): boolean {
  if (!passport.hgt) return false
  if (!!passport.hgt.match(/cm$/)) {
    const hgt = parseInt(passport.hgt)
    return hgt >= 150 && hgt <= 193
  }
  if (!!passport.hgt.match(/in$/)) {
    const hgt = parseInt(passport.hgt)
    return hgt >= 59 && hgt <= 76
  }
  return false
}
