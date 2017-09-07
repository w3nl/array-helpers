var assert = require('assert');
var Converter = require('../js/helpers.core.js');
var exampleArray = [1, 2, 3];

describe('Average', function() {
    it('Should return the average, in this example should it be 2.', function() {
        assert.equal(2, exampleArray.average());
    });
});
