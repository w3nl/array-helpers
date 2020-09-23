import { Arr } from '../src/helpers';

const a = new Arr(['John', 'Peter', 'Luke']);
const b = ['Peter', 'Luke', 'Paul'];
const c = ['Luke', 'Paul', 'John'];

describe('Intersect', () => {
    describe('One side', () => {
        it('Should return the intersect, in this example should it be Peter and Luke.', () => {
            expect(['Peter', 'Luke']).toEqual(a.intersect(b));
        });
    });

    describe('Average both sides', () => {
        it('Should return the intersect of more than 2 arrays, in this example should it be Luke.', () => {
            expect(['Luke']).toEqual(a.intersect([b, c], true));
        });
    });
});
