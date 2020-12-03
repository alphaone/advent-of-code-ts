import fs from 'fs'

export function readInput(filename: string): string[] {
  return fs.readFileSync(filename, 'utf8').split(/\n/)
}

export function readNumberInput(filename: string): number[] {
  return readInput(filename).map((l) => parseInt(l))
}
