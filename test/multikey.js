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
    test1: JSON.stringify(['John', 'Peter', 'Luke', 'Paul']),
    test2: JSON.stringify([
        {
            name: 'John',
            age: 93,
        },
        {
            name: 'Peter',
            age: 62,
        },
        {
            name: 'Luke',
            age: 84,
        },
        {
            name: 'Paul',
            age: 62,
        },
    ]),
};

describe('Multikey', () => {
    describe('Test 1 (single)', () => {
        it('Should return the max, in this example should it be 3.', () => {
            expect(expectedResults.test1).toEqual(
                JSON.stringify(exampleArray.multikey('name'))
            );
        });
    });

    describe('Test 2 (multiple)', () => {
        it('Should return the max, in this example should it be 3.', () => {
            expect(expectedResults.test2).toEqual(
                JSON.stringify(exampleArray.multikey(['name', 'age']))
            );
        });
    });
});
