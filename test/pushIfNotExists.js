import { Arr } from '../js/helpers.core';

const a = new Arr([]);

const expectedResults = {
    test1: ['John'],
    test2: ['John', 'Peter'],
    test3: ['John', 'Peter'],
};

describe('Push if not exists', () => {
    describe('Test 1', () => {
        it('Should be return 1 item in the array.', () => {
            a.pushIfNotExists('John');
            expect(expectedResults.test1).toEqual(a[0]);
        });
    });

    describe('Test 2', () => {
        it('Should be return 2 item in the array.', () => {
            a.pushIfNotExists('Peter');
            expect(expectedResults.test2).toEqual(a[0]);
        });
    });

    describe('Test 3', () => {
        it('Should be return 2 item in the array.', () => {
            a.pushIfNotExists('John');
            expect(expectedResults.test3).toEqual(a[0]);
        });
    });
});
