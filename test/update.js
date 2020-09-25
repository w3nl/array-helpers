import { Arr } from '../src/helpers';

const exampleArray = new Arr([
    {
        id: 1,
        name: 'first',
    },
    {
        id: 2,
        name: 'second',
    },
]);

describe('Update', () => {
    it('.', () => {
        const results = exampleArray.udate(
            {
                name: 'last',
            },
            ['id']
        );
        const expectedResults = [
            {
                id: 1,
                name: 'first',
            },
            {
                id: 2,
                name: 'last',
            },
        ];
        expect(results).toEqual(expectedResults);
    });
});
