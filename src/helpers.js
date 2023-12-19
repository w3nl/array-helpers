import multisort from './modules/multisort.js';
import multifilter from './modules/multifilter.js';
import multikey from './modules/multikey.js';
import intersect from './modules/intersect.js';
import min from './modules/min.js';
import max from './modules/max.js';
import diff from './modules/diff.js';
import unique from './modules/unique.js';
import summ from './modules/summ.js';
import average from './modules/average.js';
import random from './modules/random.js';
import getByKey from './modules/getByKey.js';
import first from './modules/first.js';
import last from './modules/last.js';
import update from './modules/update.js';

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
     * @param {any[]}  array
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
     * @param {any[]}  array
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
     * @return {any[]}
     */
    get unique() {
        return unique(this[0]);
    }

    /**
     * Only add the value if the value isnt in the array.
     *
     * @param {any[]} newValue
     *
     * @return {number}
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
     * @param {any[]} newValues
     *
     * @return {number}
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
     * @return {number}
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
     * @return {number}
     */
    get max() {
        return max(this[0]);
    }

    /**
     * The smallest of the given numbers.
     * If at least one of the arguments cannot be converted to a number,
     * NaN is returned.
     *
     * @return {number}
     */
    get min() {
        return min(this[0]);
    }

    /**
     * Get a random value of an array.
     *
     * @return {any}
     */
    get random() {
        return random(this);
    }

    /**
     * The summ of all values.
     *
     * @return {number}
     */
    get summ() {
        return summ(this[0]);
    }

    /**
     * Get the average of all values.
     *
     * @return {number}
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

    /**
     * Javascript implementation of Arr::first
     *
     * @return {object|null}
     */
    get first() {
        return first(this[0]);
    }

    /**
     * Javascript implementation of Arr::last
     *
     * @return {object|null}
     */
    get last() {
        return last(this[0]);
    }

    /**
     * Update multiple items in an array
     *
     * @param {array} newValues
     * @param {array} keys
     *
     * @return {array}
     */
    update(newValues, keys) {
        return update(this[0], newValues, keys);
    }
}

export {
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
    first,
    last,
    update,
};

export default Arr;
