import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const original = new Arr(1, 2, 3)
const mapped = original.map((x) => x * x)

test('Instance', async (t) => {
  await t.test(
    'Test if the original output from Arr is a instance of Arr',
    () => {
      assert.strictEqual(original instanceof Arr, true)
    }
  )

  await t.test(
    'Test if the original output from Arr is a instance of Array',
    () => {
      assert.strictEqual(Array.isArray(original), true)
    }
  )

  await t.test('Test if the mappen result is a instance of Arr', () => {
    assert.strictEqual(mapped instanceof Arr, false)
  })

  await t.test('Test if the mappen result is a instance of Array', () => {
    assert.strictEqual(Array.isArray(mapped), true)
  })

  await t.test('Test the original result', () => {
    assert.deepEqual(original, [1, 2, 3])
  })

  await t.test('Test the mapped result', () => {
    assert.deepEqual(mapped, [1, 4, 9])
  })
})
