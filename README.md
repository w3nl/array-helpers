# Array Helpers

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-stats] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Array helpers, so you can get very fast your data from the array.

here an example array.

```
var exampleArray = [
    {
        id: 0,
        name: 'John',
        age: 93,
        city: 'Patmos',
    },
    {
        id: 1,
        name: 'Peter',
        age: 62,
        city: 'Rome',
    },
    {
        id: 2,
        name: 'Luke',
        age: 84,
        city: 'Boeotia'
    },
    {
        id: 2,
        name: 'Paul',
        age: 62,
        city: 'Rome'
    },
];
```

## multisort

Sort an array with objects by the key of the object.

By default it is asc, and you can set desc as an optional value to the 2nd parameter.

```
exampleArray.multisort('age', 'desc');

[
    {
        id: 0,
        name: 'John',
        age: 93,
        city: 'Patmos',
    },
    {
        id: 2,
        name: 'Luke',
        age: 84,
        city: 'Boeotia'
    },
    {
        id: 1,
        name: 'Peter',
        age: 62,
        city: 'Rome',
    },
    {
        id: 2,
        name: 'Paul',
        age: 62,
        city: 'Rome'
    },
]
```

## multifilter

Filters the array for a given key and value.

If the 3th parameter is true, excluding a given key and value.

```
exampleArray.multifilter('age', '62');

[
    {
        id: 1,
        name: 'Peter',
        age: 62,
        city: 'Rome',
    },
    {
        id: 2,
        name: 'Paul',
        age: 62,
        city: 'Rome'
    },
]


exampleArray.multifilter('age', '62', '!=');

[
    {
        id: 0,
        name: 'John',
        age: 93,
        city: 'Patmos',
    },
    {
        id: 2,
        name: 'Luke',
        age: 84,
        city: 'Boeotia'
    },
]


exampleArray.multifilter('age', '62', '>');

[
    {
        id: 0,
        name: 'John',
        age: 93,
        city: 'Patmos',
    },
    {
        id: 2,
        name: 'Luke',
        age: 84,
        city: 'Boeotia'
    },
]


exampleArray.multifilter('age', '84', '<=');

[
    {
        id: 2,
        name: 'Luke',
        age: 84,
        city: 'Boeotia'
    },
    {
        id: 1,
        name: 'Peter',
        age: 62,
        city: 'Rome',
    },
    {
        id: 2,
        name: 'Paul',
        age: 62,
        city: 'Rome'
    },
]


exampleArray.multifilter('name', ['John', 'Peter']);

[
    {
        id: 0,
        name: 'John',
        age: 93,
        city: 'Patmos',
    },
    {
        id: 1,
        name: 'Peter',
        age: 62,
        city: 'Rome',
    },
]
```

## multikey

Plucks the given keys from the array.

```
exampleArray.multikey(['name', 'age']);

[
    {
        name: 'John',
        age: 93
    },
    {
        name: 'Peter',
        age: 62
    },
    {
        name: 'Luke',
        age: 84
    },
    {
        name: 'Paul',
        age: 62
    },
]
```

## intersect

Computes the intersection of arrays.
Returns an array containing the values that are present in all the arrays.

If the 2nd parameter is true, the 1st parameter can contain multiple arrays.

```
var a = ['John', 'Peter', 'Luke'];
var b = ['Peter', 'Luke', 'Paul'];
var c = ['Luke', 'Paul', 'John'];

a.intersect(b);

['Peter', 'Luke']


a.intersect([b, c], true);

['Luke']
```

## diff

Computes the difference of arrays.
Compares the array values, and return all values from array a that arent present in array b.

If the 2nd parameter is true, it return all values that are not present in any of the arrays.

```

var a = ['John', 'Peter', 'Luke'];
var b = ['Peter', 'Luke', 'Paul'];

a.diff(b);

['John']

a.diff(b, true);

['John', 'Paul']
```


## unique

Removes duplicate values from an array.
Takes the array and returns a new array without duplicate values.

```
var a = ['John', 'Peter', 'Luke', 'Peter', 'Luke', 'Paul'];

a.unique();

['John', 'Peter', 'Luke', 'Paul']
```

## pushIfNotExists

Only push the value to the array if the value doesnt exists in the array.

Returns the new length property of the object upon which the method was called.

```
var a = [];

a.pushIfNotExists('John');

['John']

a.pushIfNotExists('Peter');

['John', 'Peter']

a.pushIfNotExists('John');

['John', 'Peter']
```

## max

The largest of the given numbers. If at least one of the arguments cannot be converted to a number, NaN is returned.

```
var exampleArray = [1,2,3];

exampleArray.max();

3
```

## min

The smallest of the given numbers. If at least one of the arguments cannot be converted to a number, NaN is returned.

```
var exampleArray = [1,2,3];

exampleArray.min();

1
```

## random

Get a random value of an array.

```
var exampleArray = [1,2,3];

exampleArray.random();

e.g. 2
```

## summ

The summ of all values.

```
var exampleArray = [1,2,3];

exampleArray.summ();

6
```

## average

Get the average of all values.

```
var exampleArray = [1,2,3];

exampleArray.average();

2
```


## Test the package.

```
npm test
```

This will run all the tests in the test folder with mocha.

If you only want to check the eslint rules, just run.

```
npm run lint
```

## node.js

To include array-helpers in Node, first install with npm.

```
npm install array-helpers
```

Use the package in your node files.

```
require('array-helpers');
```

Than you can use all array helpers from this package in your node files.

An example is included `example/node.js`


[downloads-image]: https://img.shields.io/npm/dm/array-helpers.svg
[npm-url]: https://www.npmjs.com/package/array-helpers
[npm-image]: https://img.shields.io/npm/v/array-helpers.svg
[npm-stats]: https://npm-stat.com/charts.html?package=array-helpers
[travis-url]: https://travis-ci.org/w3nl/array-helpers
[travis-image]: https://img.shields.io/travis/w3nl/array-helpers/master.svg
[coveralls-url]: https://coveralls.io/r/w3nl/array-helpers
[coveralls-image]: https://img.shields.io/coveralls/w3nl/array-helpers/master.svg
