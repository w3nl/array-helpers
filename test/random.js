import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const exampleArray = new Arr([1, 2, 3])

test('Random', async (t) => {
  await t.test('Check if the random value is an item from the array.', () => {
    const { random } = exampleArray

    assert.strictEqual(exampleArray.includes(random), true)
  })
})
