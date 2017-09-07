var assert = require('assert');
var Converter = require('../js/helpers.core.js');
var a = [];

var expect = {
    test1: JSON.stringify([
        'John'
    ]),
    test2: JSON.stringify([
        'John',
        'Peter'
    ]),
    test3: JSON.stringify([
        'John',
        'Peter'
    ])
};

describe('Push if not exists', function() {
    describe('Test 1', function() {
        it('Should be return 1 item in the array.', function() {
            a.pushIfNotExists('John');
            assert.equal(expect.test1, JSON.stringify(a));
        });
    });

    describe('Test 2', function() {
        it('Should be return 2 item in the array.', function() {
            a.pushIfNotExists('Peter');
            assert.equal(expect.test2, JSON.stringify(a));
        });
    });

    describe('Test 3', function() {
        it('Should be return 2 item in the array.', function() {
            a.pushIfNotExists('John');
            assert.equal(expect.test3, JSON.stringify(a));
        });
    });
});
