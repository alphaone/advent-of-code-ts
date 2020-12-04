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
