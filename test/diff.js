import { Arr } from '../src/helpers';

const a = new Arr(['John', 'Peter', 'Luke']);
const b = ['Peter', 'Luke', 'Paul'];

describe('Diff', () => {
    describe('One side', () => {
        it('Should return the difference, in this example should it be John.', () => {
            expect(['John'].toString()).toEqual(a.diff(b).toString());
        });
    });

    describe('Average both sides', () => {
        it('Should return the difference of both sides, in this example should it be John and Paul.', () => {
            expect(['John', 'Paul'].toString()).toEqual(
                a.diff(b, true).toString()
            );
        });
    });
});
