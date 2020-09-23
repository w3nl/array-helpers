import { Arr } from '../src/helpers';

const exampleArray = new Arr([1, 2, 3]);

describe('Min', () => {
    it('Should return the min, in this example should it be 1.', () => {
        expect(1).toEqual(exampleArray.min);
    });

    it('Test an empty array', () => {
        expect(null).toEqual(new Arr().min);
    });
});
