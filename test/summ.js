import { Arr } from '../src/helpers';

const exampleArray = new Arr([1, 2, 3]);

describe('Summ', () => {
    it('Should return the summ of the items, in this example should it be 6.', () => {
        expect(6).toEqual(exampleArray.summ);
    });

    it('Test an empty array', () => {
        expect(null).toEqual(new Arr([]).summ);
    });
});
