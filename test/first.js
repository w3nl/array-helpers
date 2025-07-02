import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

test('First', async (t) => {
  await t.test(
    'Should return the first, in this example should it be 1.',
    () => {
      assert.strictEqual(new Arr([1, 2, 3]).first, 1)
    }
  )

  await t.test('Test an empty array', () => {
    assert.strictEqual(new Arr([]).first, null)
  })
})
