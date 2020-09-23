import { Arr } from '../src/helpers';

const original = new Arr(1, 2, 3);
const mapped = original.map((x) => x * x);

describe('Instance', () => {
    it('Test if the original output from Arr is a instance of Arr', () => {
        expect(original instanceof Arr).toBeTruthy();
    });

    it('Test if the original output from Arr is a instance of Array', () => {
        expect(original instanceof Array).toBeTruthy();
    });

    it('Test if the mappen result is a instance of Arr', () => {
        expect(mapped instanceof Arr).toBeFalsy();
    });

    it('Test if the mappen result is a instance of Array', () => {
        expect(mapped instanceof Array).toBeTruthy();
    });

    it('Test the original result', () => {
        expect(original).toEqual([1, 2, 3]);
    });

    it('Test the mapped result', () => {
        expect(mapped).toEqual([1, 4, 9]);
    });
});
