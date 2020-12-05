export function parseRow(input: string): number {
  const inputAsBinaryString = input
    .substr(0, 7)
    .replace(/F/g, '0')
    .replace(/B/g, '1')
  return parseInt(inputAsBinaryString, 2)
}

export function parseCol(input: string): number {
  const inputAsBinaryString = input
    .substr(7)
    .replace(/L/g, '0')
    .replace(/R/g, '1')
  return parseInt(inputAsBinaryString, 2)
}

export function seatId(input: string): number {
  return parseRow(input) * 8 + parseCol(input)
}
