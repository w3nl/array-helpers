var assert = require('assert');
var Converter = require('../js/helpers.core.js');
var exampleArray = [1, 2, 3];

describe('Min', function() {
    it('Should return the min, in this example should it be 1.', function() {
        assert.equal(1, exampleArray.min());
    });

    it('Test an empty array', function() {
        assert.equal(null, [].min());
    });
});
