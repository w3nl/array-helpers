import { Arr } from '../src/helpers';

const exampleArray = new Arr([
    {
        id: 0,
        name: 'John',
        age: 93,
        city: ['Patmos', 'Rome'],
    },
    {
        id: 1,
        name: 'Peter',
        age: 62,
        city: 'Rome',
    },
    {
        id: 2,
        name: 'Luke',
        age: 84,
        city: 'Boeotia',
    },
    {
        id: 2,
        name: 'Paul',
        age: 62,
        city: 'Rome',
    },
]);

const expectedResults = {
    test1: JSON.stringify([
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
        {
            id: 2,
            name: 'Paul',
            age: 62,
            city: 'Rome',
        },
    ]),
    test2: JSON.stringify([
        {
            id: 0,
            name: 'John',
            age: 93,
            city: ['Patmos', 'Rome'],
        },
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
        },
    ]),
    test3: JSON.stringify([
        {
            id: 0,
            name: 'John',
            age: 93,
            city: ['Patmos', 'Rome'],
        },
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
        },
    ]),
    test4: JSON.stringify([
        {
            id: 0,
            name: 'John',
            age: 93,
            city: ['Patmos', 'Rome'],
        },
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
        },
    ]),
    test5: JSON.stringify([
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
        {
            id: 2,
            name: 'Paul',
            age: 62,
            city: 'Rome',
        },
    ]),
    test6: JSON.stringify([
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
        },
        {
            id: 2,
            name: 'Paul',
            age: 62,
            city: 'Rome',
        },
    ]),
    test7: JSON.stringify([
        {
            id: 0,
            name: 'John',
            age: 93,
            city: ['Patmos', 'Rome'],
        },
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
    ]),
    test8: JSON.stringify([
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
        },
        {
            id: 2,
            name: 'Paul',
            age: 62,
            city: 'Rome',
        },
    ]),
    test9: JSON.stringify([
        {
            id: 0,
            name: 'John',
            age: 93,
            city: ['Patmos', 'Rome'],
        },
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
        },
    ]),
    test10: JSON.stringify([
        {
            id: 0,
            name: 'John',
            age: 93,
            city: ['Patmos', 'Rome'],
        },
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
        },
    ]),
    test11: JSON.stringify([
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
        {
            id: 2,
            name: 'Paul',
            age: 62,
            city: 'Rome',
        },
    ]),
    test12: JSON.stringify([
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
        },
        {
            id: 2,
            name: 'Paul',
            age: 62,
            city: 'Rome',
        },
    ]),
    test13: JSON.stringify([
        {
            id: 0,
            name: 'John',
            age: 93,
            city: ['Patmos', 'Rome'],
        },
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
        {
            id: 2,
            name: 'Paul',
            age: 62,
            city: 'Rome',
        },
    ]),
};

describe('Test 1 (==)', () => {
    it('Should return 2 items from the array, where age is 62.', () => {
        expect(expectedResults.test1).toEqual(
            JSON.stringify(exampleArray.multifilter('age', 62))
        );
    });
});

describe('Test 2 (!=)', () => {
    it('Should return 2 items from the array, where age is not 62.', () => {
        expect(expectedResults.test2).toEqual(
            JSON.stringify(exampleArray.multifilter('age', 62, '!='))
        );
    });
});

describe('Test 3 (>)', () => {
    it('Should return 2 items from the array, where age is more than 62.', () => {
        expect(expectedResults.test3).toEqual(
            JSON.stringify(exampleArray.multifilter('age', 62, '>'))
        );
    });
});

describe('Test 4 (>=)', () => {
    it('Should return 3 items from the array, where age is equal or more than 84.', () => {
        expect(expectedResults.test4).toEqual(
            JSON.stringify(exampleArray.multifilter('age', 84, '>='))
        );
    });
});

describe('Test 5 (<)', () => {
    it('Should return 2 items from the array, where age is less than 84.', () => {
        expect(expectedResults.test5).toEqual(
            JSON.stringify(exampleArray.multifilter('age', 84, '<'))
        );
    });
});

describe('Test 6 (<=)', () => {
    it('Should return 3 items from the array, where age is equal or less than 84.', () => {
        expect(expectedResults.test6).toEqual(
            JSON.stringify(exampleArray.multifilter('age', 84, '<='))
        );
    });
});

describe('Test 7 (multiple ==)', () => {
    it('Should return 2 items from the array, where the name is John or Peter.', () => {
        expect(expectedResults.test7).toEqual(
            JSON.stringify(exampleArray.multifilter('name', ['John', 'Peter']))
        );
    });
});

describe('Test 8 (multiple !=)', () => {
    it('Should return 2 items from the array, where the name is not John or Peter.', () => {
        expect(expectedResults.test8).toEqual(
            JSON.stringify(
                exampleArray.multifilter('name', ['John', 'Peter'], '!=')
            )
        );
    });
});

describe('Test 9 (multiple >)', () => {
    it('Should return 2 items from the array, where age is more than 62 and 63.', () => {
        expect(expectedResults.test9).toEqual(
            JSON.stringify(exampleArray.multifilter('age', ['62', '63'], '>'))
        );
    });
});

describe('Test 10 (multiple >=)', () => {
    it('Should return 3 items from the array, where age is equal or more than 62 and 84.', () => {
        expect(expectedResults.test10).toEqual(
            JSON.stringify(exampleArray.multifilter('age', ['62', '84'], '>='))
        );
    });
});

describe('Test 11 (multiple <)', () => {
    it('Should return 2 items from the array, where age is less than 83 and 84.', () => {
        expect(expectedResults.test11).toEqual(
            JSON.stringify(exampleArray.multifilter('age', ['83', '84'], '<'))
        );
    });
});

describe('Test 12 (multiple <=)', () => {
    it('Should return 3 items from the array, where age is equal or less than 84 and 85.', () => {
        expect(expectedResults.test12).toEqual(
            JSON.stringify(exampleArray.multifilter('age', ['84', '85'], '<='))
        );
    });
});

describe('Test 13 (find in multiple values)', () => {
    it('Should return 3 items from the array, where the city contains Rome.', () => {
        expect(expectedResults.test13).toEqual(
            JSON.stringify(exampleArray.multifilter('city', ['Rome']))
        );
    });
});

describe('Test 14', () => {
    it('Should return an empty array if the key doesnt exists', () => {
        expect([]).toEqual(exampleArray.multifilter('example', 'notfound'));
    });
});
