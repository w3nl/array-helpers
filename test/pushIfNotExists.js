import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const a = new Arr()

const expectedResults = {
  test1: ['John'],
  test2: ['John', 'Peter'],
  test3: ['John', 'Peter']
}

test('Push if not exists', async (t) => {
  await t.test('Should be return 1 item in the array.', () => {
    a.pushIfNotExists('John')
    assert.deepEqual(a, expectedResults.test1)
  })

  await t.test('Should be return 2 item in the array.', () => {
    a.pushIfNotExists('Peter')
    assert.deepEqual(a, expectedResults.test2)
  })
  await t.test('Should be return 2 item in the array.', () => {
    a.pushIfNotExists('John')
    assert.deepEqual(a, expectedResults.test3)
  })
})
