import { pairs, findPair, productOfPairWithSum } from './day1'
import { readNumberInput } from '../utils'

test('solve puzzle a', () => {
  const input = readNumberInput('src/2020/day1.txt')
  expect(productOfPairWithSum(2020, input)).toEqual(436404)
})

test('find product of pair with sum 2020', () => {
  expect(productOfPairWithSum(2020, [1721, 979, 366, 299, 675, 1456])).toEqual(
    514579,
  )
})

test('find pair with sum of 2020', () => {
  expect(findPair(2020, [1721, 979, 366, 299, 675, 1456])).toEqual([1721, 299])
})

describe('pairs', () => {
  test('empty', () => {
    expect(pairs([])).toEqual([])
  })

  test('only one thing', () => {
    expect(pairs([1])).toEqual([])
  })

  test('simple pair', () => {
    expect(pairs([1, 2])).toEqual([[1, 2]])
  })

  test('get all pairs', () => {
    expect(pairs([1, 2, 3])).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ])
  })
})
