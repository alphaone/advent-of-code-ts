import { sum } from 'lodash'

export function totalScorePart1(input: string[]): number {
  return sum(input.map(parseRound1).map(score))
}

export function totalScorePart2(input: string[]): number {
  return sum(input.map(parseRound2).map(chooseOutcome).map(score))
}

type Round = {
  opponent: 'A' | 'B' | 'C'
  response: 'X' | 'Y' | 'Z'
}

type Round2 = {
  opponent: 'A' | 'B' | 'C'
  outcome: 'X' | 'Y' | 'Z'
}

export function parseRound1(line: string): Round {
  const [first, second] = line.split(' ')
  return {
    opponent: first as 'A' | 'B' | 'C',
    response: second as 'X' | 'Y' | 'Z',
  }
}
export function parseRound2(line: string): Round2 {
  const [first, second] = line.split(' ')
  return {
    opponent: first as 'A' | 'B' | 'C',
    outcome: second as 'X' | 'Y' | 'Z',
  }
}

export function score(r: Round): number {
  return responseScore(r.response) + outcomeScore(r)
}

function responseScore(resp: 'X' | 'Y' | 'Z'): number {
  return { X: 1, Y: 2, Z: 3 }[resp]
}
function outcomeScore(r: Round): number {
  return {
    AX: 3,
    AY: 6,
    AZ: 0,
    BX: 0,
    BY: 3,
    BZ: 6,
    CX: 6,
    CY: 0,
    CZ: 3,
  }[`${r.opponent}${r.response}`]
}

export function chooseOutcome(r: Round2): Round {
  const outcomes = {
    AX: 'Z',
    AY: 'X',
    AZ: 'Y',
    BX: 'X',
    BY: 'Y',
    BZ: 'Z',
    CX: 'Y',
    CY: 'Z',
    CZ: 'X',
  } as const

  return {
    opponent: r.opponent,
    response: outcomes[`${r.opponent}${r.outcome}`],
  }
}
