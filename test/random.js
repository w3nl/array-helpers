var assert = require('assert');
var Converter = require('../js/helpers.core.js');
var exampleArray = [1, 2, 3];

describe('Random', function() {
    it('Check if the random value is an item from the array.', function() {
        var random = exampleArray.random();

        assert.notEqual(-1, exampleArray.indexOf(random));
    });
});
