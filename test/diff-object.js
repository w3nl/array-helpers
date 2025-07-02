import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const a = new Arr([{ name: 'John' }, { name: 'Peter' }, { name: 'Luke' }])
const b = [{ name: 'Peter' }, { name: 'Luke' }, { name: 'Paul' }]

test('Diff array with objects', async (t) => {
  await t.test(
    'One side: Should return the difference, in this example should it be John.',
    () => {
      assert.deepEqual(a.diff(b), [{ name: 'John' }])
    }
  )

  await t.test(
    'Average both sides: Should return the difference of both sides, in this example should it be John and Paul.',
    () => {
      assert.deepEqual(a.diff(b, true), [
        { name: 'John' },
        { name: 'Paul' }
      ])
    }
  )
})
