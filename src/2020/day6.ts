export function countAnswers(group: string[]) {
  const answers = group.flatMap((person) => person.split(''))
  return new Set(answers).size
}

export function inputToGroups(input: string): string[][] {
  return input.split(/\n\n/).map((group) => group.split(/\n/))
}
