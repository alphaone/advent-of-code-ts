export function seatId(input: string): number {
  const inputAsBinaryString = input
    .replace(/F/g, '0')
    .replace(/B/g, '1')
    .replace(/L/g, '0')
    .replace(/R/g, '1')
  return parseInt(inputAsBinaryString, 2)
}

export function range(start: number, end = 0) {
  return [...Array(end - start).keys()].map((i) => i + start)
}
