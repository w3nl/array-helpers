var assert = require('assert');
var Converter = require('../js/helpers.core.js');
var a = ['John', 'Peter', 'Luke'];
var b = ['Peter', 'Luke', 'Paul'];

describe('Diff', function() {
    describe('One side', function() {
        it('Should return the difference, in this example should it be John.', function() {
            assert.equal(['John'].toString(), a.diff(b).toString());
        });
    });

    describe('Average both sides', function() {
        it('Should return the difference of both sides, in this example should it be John and Paul.', function() {
            assert.equal(['John', 'Paul'].toString(), a.diff(b, true).toString());
        });
    });
});
