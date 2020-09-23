import { Arr } from '../src/helpers';

describe('Average', () => {
    it('Should return the average, in this example should it be 2.', () => {
        expect(new Arr([1, 2, 3]).average).toEqual(2);
    });

    it('Test an empty array', () => {
        expect(new Arr([]).average).toEqual(null);
    });
});
