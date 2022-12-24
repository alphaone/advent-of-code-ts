import { cloneDeep } from 'lodash'

type Instruction = {
  amount: number
  from: number
  to: number
}

type State = string[][]

export function parseInstruction(line: string): Instruction {
  const res = line.match(/move (\d+) from (\d+) to (\d+)/)
  if (!res) throw new Error(`invalid instruction ${line}`)

  const [_, amount, from, to] = res
  return {
    amount: parseInt(amount!),
    from: parseInt(from!) - 1,
    to: parseInt(to!) - 1,
  }
}

export function moveWithCrateMover9000(
  state: State,
  { from, to, amount }: Instruction,
): State {
  const newState = cloneDeep(state)
  const shifted = shift(newState[from]!, amount)
  newState[to] = [...shifted.reverse(), ...newState[to]!]
  return newState
}

export function moveWithCrateMover9001(
  state: State,
  { from, to, amount }: Instruction,
): State {
  const newState = cloneDeep(state)
  const shifted = shift(newState[from]!, amount)
  newState[to] = [...shifted, ...newState[to]!]
  return newState
}

export function topRow(state: State): string {
  return state.map(([f]) => f).join('')
}

export function shift<T>(arr: T[], amount: number): T[] {
  return Array.from({ length: amount })
    .map(() => arr.shift())
    .filter((x): x is T => !!x)
}
