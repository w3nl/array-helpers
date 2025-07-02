import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const exampleArray = new Arr([1, 2, 3])

test('Max', async (t) => {
  await t.test(
    'Should return the max, in this example should it be 3.',
    () => {
      assert.strictEqual(exampleArray.max, 3)
    }
  )

  await t.test('Test an empty array', () => {
    assert.strictEqual(new Arr().max, null)
  })
})
