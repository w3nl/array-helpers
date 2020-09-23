import { Arr } from '../src/helpers';

describe('Last', () => {
    it('Should return the first, in this example should it be 3.', () => {
        expect(new Arr([1, 2, 3]).last).toEqual(3);
    });

    it('Test an empty array', () => {
        expect(new Arr([]).last).toEqual(null);
    });
});
