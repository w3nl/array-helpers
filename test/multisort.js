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
        {
            id:   1,
            name: 'Peter',
            age:  62,
            city: 'Rome'
        },
        {
            id:   2,
            name: 'Paul',
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
            id:   0,
            name: 'John',
            age:  93,
            city: 'Patmos'
        }
    ]),
    test2: JSON.stringify([
        {
            id:   0,
            name: 'John',
            age:  93,
            city: 'Patmos'
        },
        {
            id:   2,
            name: 'Luke',
            age:  84,
            city: 'Boeotia'
        },
        {
            id:   1,
            name: 'Peter',
            age:  62,
            city: 'Rome'
        },
        {
            id:   2,
            name: 'Paul',
            age:  62,
            city: 'Rome'
        }
    ])
};

var results = exampleArray.multisort('age', 'desc');

describe('Multisort', function() {
    describe('Test 1 (ASC)', function() {
        it('Should return the array, sorted by age asc.', function() {
            assert.equal(expect.test1, JSON.stringify(exampleArray.multisort('age', 'asc')));
        });
    });

    describe('Test 1 (DESC)', function() {
        it('Should return the array, sorted by age desc.', function() {
            assert.equal(expect.test2, JSON.stringify(exampleArray.multisort('age', 'desc')));
        });
    });
});
