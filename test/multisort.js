import { Arr } from '../src/helpers';

const exampleArray = new Arr([
    {
        id: 0,
        name: 'John',
        age: 93,
        city: 'Patmos',
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
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
        },
        {
            id: 0,
            name: 'John',
            age: 93,
            city: 'Patmos',
        },
    ]),
    test2: JSON.stringify([
        {
            id: 0,
            name: 'John',
            age: 93,
            city: 'Patmos',
        },
        {
            id: 2,
            name: 'Luke',
            age: 84,
            city: 'Boeotia',
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
    test3: JSON.stringify([
        {
            id: 0,
            name: 'John',
            age: 93,
            city: 'Patmos',
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
        {
            id: 1,
            name: 'Peter',
            age: 62,
            city: 'Rome',
        },
    ]),
};

exampleArray.multisort('age', 'desc');

describe('Multisort', () => {
    describe('Test 1 (ASC)', () => {
        it('Should return the array, sorted by age asc.', () => {
            expect(expectedResults.test1).toEqual(
                JSON.stringify(exampleArray.multisort('age', 'asc'))
            );
        });
    });

    describe('Test 1 (DESC)', () => {
        it('Should return the array, sorted by age desc.', () => {
            expect(expectedResults.test2).toEqual(
                JSON.stringify(exampleArray.multisort('age', 'desc'))
            );
        });
    });

    describe('Test 3 (sort text ASC)', () => {
        it('Should return the array, sorted by age asc.', () => {
            expect(expectedResults.test3).toEqual(
                JSON.stringify(exampleArray.multisort('name', 'asc'))
            );
        });
    });
});
