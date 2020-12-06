export function countAnswersUnion(group: string[]) {
  const answers = group.flatMap((person) => person.split(''))
  return new Set(answers).size
}

export function intersection([first, second, ...rest]: Set<any>[]): Set<any> {
  if (!first) return new Set<any>()
  if (!second) return first

  const intersectionBetweenFirstAndSecond = new Set(
    [...first].filter((x) => second.has(x)),
  )
  return intersection([intersectionBetweenFirstAndSecond, ...rest])
}

export function countAnswersIntersection(group: string[]) {
  const answers = group.map((person) => new Set(person.split('')))

  return intersection(answers).size
}

export function inputToGroups(input: string): string[][] {
  return input.split(/\n\n/).map((group) => group.trim().split(/\n/))
}
