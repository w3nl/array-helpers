import { Arr } from '../src/helpers';

describe('First', () => {
    it('Should return the first, in this example should it be 1.', () => {
        expect(new Arr([1, 2, 3]).first).toEqual(1);
    });

    it('Test an empty array', () => {
        expect(new Arr([]).first).toEqual(null);
    });
});
