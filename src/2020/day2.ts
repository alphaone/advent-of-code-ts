export type Rule = {
  char: string
  min: number
  max: number
}

export function parseLine(_line: string): [string, Rule] | undefined {
  const match = _line.match(/(\d+)-(\d+)\s(\w):\s(\w+)/)
  if (!match) return undefined

  const [_, min, max, char, password] = match

  return [
    password ?? '',
    {
      char: char ?? '',
      min: parseInt(min ?? '0'),
      max: parseInt(max ?? '0'),
    },
  ]
}

export function isValid(password: string, rule: Rule) {
  const charOfRule = (char: string) => char === rule.char
  const charCount = password.split('').filter(charOfRule).length
  return charCount >= rule.min && charCount <= rule.max
}

export function isValidB(password: string, rule: Rule) {
  const chars = password.split('')
  const charIsOnPos1 = chars[rule.min - 1] === rule.char
  const charIsOnPos2 = chars[rule.max - 1] === rule.char
  return charIsOnPos1 != charIsOnPos2
}
