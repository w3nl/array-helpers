var assert = require('assert');
var Converter = require('../js/helpers.core.js');
var exampleArray = [1, 2, 3];

describe('Summ', function() {
    it('Should return the summ of the items, in this example should it be 6.', function() {
        assert.equal(6, exampleArray.summ());
    });
});
