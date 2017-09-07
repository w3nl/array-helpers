var assert = require('assert');
var Converter = require('../js/helpers.core.js');
var a = ['John', 'Peter', 'Luke'];
var b = ['Peter', 'Luke', 'Paul'];
var c = ['Luke', 'Paul', 'John'];

describe('Intersect', function() {
    describe('One side', function() {
        it('Should return the intersect, in this example should it be Peter and Luke.', function() {
            assert.equal(['Peter', 'Luke'].toString(), a.intersect(b).toString());
        });
    });

    describe('Average both sides', function() {
        it('Should return the intersect of more than 2 arrays, in this example should it be Luke.', function() {
            assert.equal(['Luke'].toString(), a.intersect([b, c], true));
        });
    });
});
