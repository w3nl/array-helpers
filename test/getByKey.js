import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const getTestCases = [
  {
    description: 'Key is missing, no defaultValue provided',
    arr: {},
    key: 'pizza',
    expectedValue: undefined
  },
  {
    description: 'Key is missing, a defaultValue is provided',
    arr: {},
    key: 'pizza',
    defaultValue: 'margherita',
    expectedValue: 'margherita'
  },
  {
    description: 'Nested key',
    arr: {
      turtles: ['Donatello', 'Michelangelo', 'Raphael', 'Leonardo'],
      food: ['Pizza'],
      mice: ['Splinter']
    },
    key: 'turtles.0',
    expectedValue: 'Donatello'
  }
]

test('Test Arr.Get', async (t) => {
  await Promise.all(
    getTestCases.map(
      async ({ description, arr, key, defaultValue, expectedValue }) => {
        await t.test(description, () => {
          const a = new Arr(arr)
          assert.deepEqual(
            a.getByKey(key, defaultValue),
            expectedValue
          )
        })
      }
    )
  )
})
