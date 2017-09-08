var assert = require('assert');
var Converter = require('../js/helpers.core.js');
var exampleArray = [1, 2, 3];

describe('Max', function() {
    it('Should return the max, in this example should it be 3.', function() {
        assert.equal(3, exampleArray.max());
    });

    it('Test an empty array', function() {
        assert.equal(null, [].max());
    });
});
