import { Arr } from '../src/helpers';

const exampleArray = new Arr([1, 2, 3]);

describe('Random', () => {
    it('Check if the random value is an item from the array.', () => {
        const { random } = exampleArray;

        expect(true).toEqual(exampleArray.includes(random));
    });
});
