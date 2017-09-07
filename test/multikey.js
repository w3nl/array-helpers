var assert = require('assert');
var Converter = require('../js/helpers.core.js');
var exampleArray = [
    {
        id:   0,
        name: 'John',
        age:  93,
        city: 'Patmos'
    },
    {
        id:   1,
        name: 'Peter',
        age:  62,
        city: 'Rome'
    },
    {
        id:   2,
        name: 'Luke',
        age:  84,
        city: 'Boeotia'
    },
    {
        id:   2,
        name: 'Paul',
        age:  62,
        city: 'Rome'
    }
];

var expect = {
    test1: JSON.stringify([
        'John',
        'Peter',
        'Luke',
        'Paul'
    ]),
    test2: JSON.stringify([
        {
            name: 'John',
            age:  93
        },
        {
            name: 'Peter',
            age:  62
        },
        {
            name: 'Luke',
            age:  84
        },
        {
            name: 'Paul',
            age:  62
        }
    ])
};

describe('Multikey', function() {
    describe('Test 1 (single)', function() {
        it('Should return the max, in this example should it be 3.', function() {
            assert.equal(expect.test1, JSON.stringify(exampleArray.multikey('name')));
        });
    });

    describe('Test 2 (multiple)', function() {
        it('Should return the max, in this example should it be 3.', function() {
            assert.equal(expect.test2, JSON.stringify(exampleArray.multikey(['name', 'age'])));
        });
    });
});
