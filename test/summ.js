import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const exampleArray = new Arr([1, 2, 3])

test('Summ', async (t) => {
  await t.test(
    'Should return the summ of the items, in this example should it be 6.',
    () => {
      assert.strictEqual(exampleArray.summ, 6)
    }
  )

  await t.test('Test an empty array', () => {
    assert.strictEqual(new Arr([]).summ, null)
  })
})
