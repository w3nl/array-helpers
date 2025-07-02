import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const a = new Arr()

const expectedResults = {
  test1: ['John', 'Peter'],
  test2: ['John', 'Peter', 'Luke', 'Paul']
}

test('Push if not exists', async (t) => {
  await t.test('Should be return 2 item in the array.', () => {
    a.pushMultiple(['John', 'Peter'])
    assert.deepEqual(a, expectedResults.test1)
  })

  await t.test('Should be return 4 item in the array.', () => {
    a.pushMultiple(['Luke', 'Paul'])
    assert.deepEqual(a, expectedResults.test2)
  })
})
