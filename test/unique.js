import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const a = new Arr(['John', 'Peter', 'Luke', 'Peter', 'Luke', 'Paul'])

const expectedResults = ['John', 'Peter', 'Luke', 'Paul']

test('Unique', async (t) => {
  await t.test(
    'Should return the unique items from the array, in this example 4 items.',
    () => {
      assert.deepEqual(a.unique, expectedResults)
    }
  )
})
