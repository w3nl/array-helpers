const multisort = require('./modules/multisort.js');
const multifilter = require('./modules/multifilter.js');
const multikey = require('./modules/multikey.js');
const intersect = require('./modules/intersect.js');
const min = require('./modules/min.js');
const max = require('./modules/max.js');
const diff = require('./modules/diff.js');
const unique = require('./modules/unique.js');
const summ = require('./modules/summ.js');
const average = require('./modules/average.js');
const random = require('./modules/random.js');
const getByKey = require('./modules/getByKey.js');

/**
 * Object helper
 */
class Arr extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * Sort a multiarray.
     *
     * @param {string} key
     * @param {string} direction
     *
     * @return {array}
     */
    multisort(key, direction) {
        return multisort(this[0], key, direction);
    }

    /**
     * Filter a multi array.
     *
     * @param {string}  key
     * @param {string}  find
     * @param {boolean} operator
     *
     * @return {array}
     */
    multifilter(key, find, operator) {
        return multifilter(this[0], key, find, operator);
    }

    /**
     * Only get some keys of a multi array.
     *
     * @param {string} key
     *
     * @return {array}
     */
    multikey(key) {
        return multikey(this[0], key);
    }

    /**
     * Get the intersection of arrays.
     *
     * @param {string}  array
     * @param {boolean} multi
     *
     * @return {array}
     */
    intersect(array, multi) {
        return intersect(this[0], array, multi);
    }

    /**
     * Get the difference of arrays.
     *
     * @param {string}  array
     * @param {boolean} total
     *
     * @return {array}
     */
    diff(array, total) {
        return diff(this[0], array, total);
    }

    /**
     * Get the unique values of an array.
     *
     * @return {array}
     */
    get unique() {
        return unique(this[0]);
    }

    /**
     * Only add the value if the value isnt in the array.
     *
     * @param {string} newValue
     *
     * @return {int}
     */
    pushIfNotExists(newValue) {
        if (this.indexOf(newValue) < 0) {
            this.push(newValue);
        }

        return this.length;
    }

    /**
     * Add multiple values to an array.
     *
     * @param {array} newValues
     *
     * @return {int}
     */
    pushMultiple(newValues) {
        this.push(...newValues);

        return this.length;
    }

    /**
     * Add multiple values to an array.
     * Only add the value if the value isnt in the array.
     *
     * @param {array} newValues
     *
     * @return {int}
     */
    pushMultipleIfNotExists(newValues) {
        const array = this;

        newValues.forEach((value) => {
            array.pushIfNotExists(value);
        });

        return array.length;
    }

    /**
     * The largest of the given numbers.
     * If at least one of the arguments cannot be converted to a number,
     * NaN is returned.
     *
     * @return {int}
     */
    get max() {
        return max(this[0]);
    }

    /**
     * The smallest of the given numbers.
     * If at least one of the arguments cannot be converted to a number,
     * NaN is returned.
     *
     * @return {int}
     */
    get min() {
        return min(this[0]);
    }

    /**
     * Get a random value of an array.
     *
     * @return {string}
     */
    get random() {
        return random(this);
    }

    /**
     * The summ of all values.
     *
     * @return {int}
     */
    get summ() {
        return summ(this[0]);
    }

    /**
     * Get the average of all values.
     *
     * @return {int}
     */
    get average() {
        return average(this[0]);
    }

    /**
     * Javascript implementation of Arr::get
     *
     * @param {string} key
     * @param {object|null} defaultValue
     *
     * @return {object|null}
     */
    getByKey(key, defaultValue) {
        return getByKey(this[0], key, defaultValue);
    }
}

module.exports = {
    Arr,
    multisort,
    multifilter,
    multikey,
    intersect,
    min,
    max,
    diff,
    unique,
    summ,
    average,
    random,
    getByKey,
};
