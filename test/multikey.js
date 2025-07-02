import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const exampleArray = new Arr([
  {
    id: 0,
    name: 'John',
    age: 93,
    city: 'Patmos'
  },
  {
    id: 1,
    name: 'Peter',
    age: 62,
    city: 'Rome'
  },
  {
    id: 2,
    name: 'Luke',
    age: 84,
    city: 'Boeotia'
  },
  {
    id: 2,
    name: 'Paul',
    age: 62,
    city: 'Rome'
  }
])

const expectedResults = {
  test1: ['John', 'Peter', 'Luke', 'Paul'],
  test2: [
    {
      name: 'John',
      age: 93
    },
    {
      name: 'Peter',
      age: 62
    },
    {
      name: 'Luke',
      age: 84
    },
    {
      name: 'Paul',
      age: 62
    }
  ]
}

test('Multikey', async (t) => {
  await t.test(
    'Test 1 (single): Should extract values from the specified key "name".',
    () => {
      assert.deepEqual(
        exampleArray.multikey('name'),
        expectedResults.test1
      )
    }
  )

  await t.test(
    'Test 2 (multiple): Should extract objects with only the specified keys ["name", "age"].',
    () => {
      assert.deepEqual(
        exampleArray.multikey(['name', 'age']),
        expectedResults.test2
      )
    }
  )
})
