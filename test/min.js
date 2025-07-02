import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const exampleArray = new Arr([1, 2, 3])

test('Min', async (t) => {
  await t.test(
    'Should return the min, in this example should it be 1.',
    () => {
      assert.strictEqual(exampleArray.min, 1)
    }
  )

  await t.test('Test an empty array', () => {
    assert.strictEqual(new Arr().min, null)
  })
})
