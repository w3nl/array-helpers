import { Arr } from '../src/helpers';

const a = new Arr();

const expectedResults = {
    test1: ['John'],
    test2: ['John', 'Peter'],
    test3: ['John', 'Peter'],
};

describe('Push if not exists', () => {
    describe('Test 1', () => {
        it('Should be return 1 item in the array.', () => {
            a.pushIfNotExists('John');
            expect(a).toEqual(expectedResults.test1);
        });
    });

    describe('Test 2', () => {
        it('Should be return 2 item in the array.', () => {
            a.pushIfNotExists('Peter');
            expect(a).toEqual(expectedResults.test2);
        });
    });

    describe('Test 3', () => {
        it('Should be return 2 item in the array.', () => {
            a.pushIfNotExists('John');
            expect(a).toEqual(expectedResults.test3);
        });
    });
});
