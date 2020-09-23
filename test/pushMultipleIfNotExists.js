import { Arr } from '../src/helpers';

const a = new Arr();

const expectedResults = {
    test1: ['John', 'Peter'],
    test2: ['John', 'Peter', 'Luke', 'Paul'],
    test3: ['John', 'Peter', 'Luke', 'Paul'],
};

describe('Push if not exists', () => {
    describe('Test 1', () => {
        it('Should be return 2 item in the array.', () => {
            a.pushMultipleIfNotExists(['John', 'Peter']);
            expect(expectedResults.test1).toEqual(a);
        });
    });

    describe('Test 2', () => {
        it('Should be return 4 item in the array.', () => {
            a.pushMultipleIfNotExists(['Luke', 'Paul']);
            expect(expectedResults.test2).toEqual(a);
        });
    });

    describe('Test 3', () => {
        it('Should be return 4 item in the array.', () => {
            a.pushMultipleIfNotExists(['John', 'Peter']);
            expect(expectedResults.test3).toEqual(a);
        });
    });
});
