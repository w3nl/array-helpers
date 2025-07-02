import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

test('Average', async (t) => {
  await t.test(
    'Should return the average, in this example should it be 2.',
    () => {
      assert.strictEqual(new Arr([1, 2, 3]).average, 2)
    }
  )

  await t.test('Test an empty array', () => {
    assert.strictEqual(new Arr([]).average, null)
  })
})
