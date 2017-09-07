var assert = require('assert');
var Converter = require('../js/helpers.core.js');
var a = ['John', 'Peter', 'Luke', 'Peter', 'Luke', 'Paul'];

var expect = JSON.stringify(['John', 'Peter', 'Luke', 'Paul']);

describe('Unique', function() {
    it('Should return the unique items from the array, in this example 4 items.', function() {
        assert.equal(expect, JSON.stringify(a.unique()));
    });
});
