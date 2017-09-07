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
        }, {
            id:   2,
            name: 'Paul',
            age:  62,
            city: 'Rome'
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
        }
    ]),
    test3: JSON.stringify([
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
        }
    ]),
    test4: JSON.stringify([
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
        }
    ]),
    test5: JSON.stringify([
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
    ]),
    test6: JSON.stringify([
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
    ]),
    test7: JSON.stringify([
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
        }
    ])
};

describe('Multifilter', function() {
    describe('Test 1 (==)', function() {
        it('Should return 2 items from the array, where age is 62.', function() {
            assert.equal(expect.test1, JSON.stringify(exampleArray.multifilter('age', '62')));
        });
    });

    describe('Test 2 (!=)', function() {
        it('Should return 2 items from the array, where age is not 62.', function() {
            assert.equal(expect.test2, JSON.stringify(exampleArray.multifilter('age', '62', '!=')));
        });
    });

    describe('Test 3 (>)', function() {
        it('Should return 2 items from the array, where age is more than 62.', function() {
            assert.equal(expect.test3, JSON.stringify(exampleArray.multifilter('age', '62', '>')));
        });
    });

    describe('Test 4 (>=)', function() {
        it('Should return 3 items from the array, where age is equal ormore than 84.', function() {
            assert.equal(expect.test4, JSON.stringify(exampleArray.multifilter('age', '84', '>=')));
        });
    });

    describe('Test 5 (<)', function() {
        it('Should return 2 items from the array, where age is less than 84.', function() {
            assert.equal(expect.test5, JSON.stringify(exampleArray.multifilter('age', '84', '<')));
        });
    });

    describe('Test 6 (<=)', function() {
        it('Should return 3 items from the array, where age is equal or less than 84.', function() {
            assert.equal(expect.test6, JSON.stringify(exampleArray.multifilter('age', '84', '<=')));
        });
    });

    describe('Test 7 (multiple)', function() {
        it('Should return 2 items from the array, where the name is John or Peter.', function() {
            assert.equal(expect.test7, JSON.stringify(exampleArray.multifilter('name', ['John', 'Peter'])));
        });
    });
});
