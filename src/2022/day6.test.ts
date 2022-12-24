import { findStartOfMessage, findStartOfPacket } from './day6'
import fs from 'fs'

const input = fs.readFileSync('src/2022/day6.txt', 'utf8')

it('solves part 1', async () => {
  expect(findStartOfPacket(input)).toEqual(1042)
})

it('solves part 2', async () => {
  expect(findStartOfMessage(input)).toEqual(2980)
})

it('finds start of packet', async () => {
  expect(findStartOfPacket('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toEqual(7)
  expect(findStartOfPacket('bvwbjplbgvbhsrlpgdmjqwftvncz')).toEqual(5)
  expect(findStartOfPacket('nppdvjthqldpwncqszvftbrmjlhg')).toEqual(6)
  expect(findStartOfPacket('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toEqual(10)
  expect(findStartOfPacket('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toEqual(11)
})

it('finds start of message', async () => {
  expect(findStartOfMessage('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toEqual(19)
  expect(findStartOfMessage('bvwbjplbgvbhsrlpgdmjqwftvncz')).toEqual(23)
  expect(findStartOfMessage('nppdvjthqldpwncqszvftbrmjlhg')).toEqual(23)
  expect(findStartOfMessage('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toEqual(29)
  expect(findStartOfMessage('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toEqual(26)
})
