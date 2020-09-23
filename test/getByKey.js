import { Arr } from '../src/helpers';

const getTestCases = [
    {
        description: 'Key is missing, no defaultValue provided',
        arr: {},
        key: 'pizza',
        expectedValue: undefined,
    },
    {
        description: 'Key is missing, a defaultValue is provided',
        arr: {},
        key: 'pizza',
        defaultValue: 'margherita',
        expectedValue: 'margherita',
    },
    {
        description: 'Nested key',
        arr: {
            turtles: ['Donatello', 'Michelangelo', 'Raphael', 'Leonardo'],
            food: ['Pizza'],
            mice: ['Splinter'],
        },
        key: 'turtles.0',
        expectedValue: 'Donatello',
    },
];

describe.each(getTestCases)(
    'Test Arr.Get',
    ({ description, arr, key, defaultValue, expectedValue }) => {
        it(description, () => {
            const a = new Arr(arr);
            expect(a.getByKey(key, defaultValue)).toEqual(expectedValue);
        });
    }
);
