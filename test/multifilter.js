import test from 'node:test'
import assert from 'node:assert'
import { Arr } from '../src/helpers.js'

const exampleArray = new Arr([
  {
    id: 0,
    name: 'John',
    age: 93,
    city: ['Patmos', 'Rome']
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
  test1: [
    {
      id: 1,
      name: 'Peter',
      age: 62,
      city: 'Rome'
    },
    {
      id: 2,
      name: 'Paul',
      age: 62,
      city: 'Rome'
    }
  ],
  test2: [
    {
      id: 0,
      name: 'John',
      age: 93,
      city: ['Patmos', 'Rome']
    },
    {
      id: 2,
      name: 'Luke',
      age: 84,
      city: 'Boeotia'
    }
  ],
  test3: [
    {
      id: 0,
      name: 'John',
      age: 93,
      city: ['Patmos', 'Rome']
    },
    {
      id: 2,
      name: 'Luke',
      age: 84,
      city: 'Boeotia'
    }
  ],
  test4: [
    {
      id: 0,
      name: 'John',
      age: 93,
      city: ['Patmos', 'Rome']
    },
    {
      id: 2,
      name: 'Luke',
      age: 84,
      city: 'Boeotia'
    }
  ],
  test5: [
    {
      id: 1,
      name: 'Peter',
      age: 62,
      city: 'Rome'
    },
    {
      id: 2,
      name: 'Paul',
      age: 62,
      city: 'Rome'
    }
  ],
  test6: [
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
  ],
  test7: [
    {
      id: 0,
      name: 'John',
      age: 93,
      city: ['Patmos', 'Rome']
    },
    {
      id: 1,
      name: 'Peter',
      age: 62,
      city: 'Rome'
    }
  ],
  test8: [
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
  ],
  test9: [
    {
      id: 0,
      name: 'John',
      age: 93,
      city: ['Patmos', 'Rome']
    },
    {
      id: 2,
      name: 'Luke',
      age: 84,
      city: 'Boeotia'
    }
  ],
  test10: [
    {
      id: 0,
      name: 'John',
      age: 93,
      city: ['Patmos', 'Rome']
    },
    {
      id: 2,
      name: 'Luke',
      age: 84,
      city: 'Boeotia'
    }
  ],
  test11: [
    {
      id: 1,
      name: 'Peter',
      age: 62,
      city: 'Rome'
    },
    {
      id: 2,
      name: 'Paul',
      age: 62,
      city: 'Rome'
    }
  ],
  test12: [
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
  ],
  test13: [
    {
      id: 0,
      name: 'John',
      age: 93,
      city: ['Patmos', 'Rome']
    },
    {
      id: 1,
      name: 'Peter',
      age: 62,
      city: 'Rome'
    },
    {
      id: 2,
      name: 'Paul',
      age: 62,
      city: 'Rome'
    }
  ]
}

test('Test 1 (==)', async (t) => {
  await t.test(
    'Should return 2 items from the array, where age is 62.',
    () => {
      assert.deepEqual(
        exampleArray.multifilter('age', 62),
        expectedResults.test1
      )
    }
  )
})

test('Test 2 (!=)', async (t) => {
  await t.test(
    'Should return 2 items from the array, where age is not 62.',
    () => {
      assert.deepEqual(
        exampleArray.multifilter('age', 62, '!='),
        expectedResults.test2
      )
    }
  )
})

test('Test 3 (>)', async (t) => {
  await t.test(
    'Should return 2 items from the array, where age is more than 62.',
    () => {
      assert.deepEqual(
        exampleArray.multifilter('age', 62, '>'),
        expectedResults.test3
      )
    }
  )
})

test('Test 4 (>=)', async (t) => {
  await t.test(
    'Should return 3 items from the array, where age is equal or more than 84.',
    () => {
      assert.deepEqual(
        expectedResults.test4,
        exampleArray.multifilter('age', 84, '>=')
      )
    }
  )
})

test('Test 5 (<)', async (t) => {
  await t.test(
    'Should return 2 items from the array, where age is less than 84.',
    () => {
      assert.deepEqual(
        expectedResults.test5,
        exampleArray.multifilter('age', 84, '<')
      )
    }
  )
})

test('Test 6 (<=)', async (t) => {
  await t.test(
    'Should return 3 items from the array, where age is equal or less than 84.',
    () => {
      assert.deepEqual(
        expectedResults.test6,
        exampleArray.multifilter('age', 84, '<=')
      )
    }
  )
})

test('Test 7 (multiple ==)', async (t) => {
  await t.test(
    'Should return 2 items from the array, where the name is John or Peter.',
    () => {
      assert.deepEqual(
        exampleArray.multifilter('name', ['John', 'Peter']),
        expectedResults.test7
      )
    }
  )
})

test('Test 8 (multiple !=)', async (t) => {
  await t.test(
    'Should return 2 items from the array, where the name is not John or Peter.',
    () => {
      assert.deepEqual(
        exampleArray.multifilter('name', ['John', 'Peter'], '!='),
        expectedResults.test8
      )
    }
  )
})

test('Test 9 (multiple >)', async (t) => {
  await t.test(
    'Should return 2 items from the array, where age is more than 62 and 63.',
    () => {
      assert.deepEqual(
        exampleArray.multifilter('age', ['62', '63'], '>'),
        expectedResults.test9
      )
    }
  )
})

test('Test 10 (multiple >=)', async (t) => {
  await t.test(
    'Should return 3 items from the array, where age is equal or more than 62 and 84.',
    () => {
      assert.deepEqual(
        expectedResults.test10,
        exampleArray.multifilter('age', ['62', '84'], '>=')
      )
    }
  )
})

test('Test 11 (multiple <)', async (t) => {
  await t.test(
    'Should return 2 items from the array, where age is less than 83 and 84.',
    () => {
      assert.deepEqual(
        expectedResults.test11,
        exampleArray.multifilter('age', ['83', '84'], '<')
      )
    }
  )
})

test('Test 12 (multiple <=)', async (t) => {
  await t.test(
    'Should return 3 items from the array, where age is equal or less than 84 and 85.',
    () => {
      assert.deepEqual(
        expectedResults.test12,
        exampleArray.multifilter('age', ['84', '85'], '<=')
      )
    }
  )
})

test('Test 13 (find in multiple values)', async (t) => {
  await t.test(
    'Should return 3 items from the array, where the city contains Rome.',
    () => {
      assert.deepEqual(
        expectedResults.test13,
        exampleArray.multifilter('city', ['Rome'])
      )
    }
  )
})

test('Test 14', async (t) => {
  await t.test(
    'Should return an empty array if the key doesnt exists',
    () => {
      assert.deepEqual(
        [],
        exampleArray.multifilter('example', 'notfound')
      )
    }
  )
})
