/**
 * Sort a multiarray.
 *
 * @param {string} key
 * @param {string} direction
 *
 * @return {array}
 */
Array.prototype.multisort = function(key, direction) {
    var moveDirection = 1;

    if(direction == 'desc') {
        moveDirection = -1;
    }

    return this.sort(function(a, b) {
        var nameA = a[key];
        var nameB = b[key];

        if (typeof nameA == 'string') {
            nameA = nameA.toUpperCase();
        }

        if (typeof nameB == 'string') {
            nameB = nameB.toUpperCase();
        }

        if (nameA < nameB) {
            return -1 * moveDirection;
        }

        if (nameA > nameB) {
            return 1 * moveDirection;
        }

        return 0;
    });
};

/**
 * Filter a multi array.
 *
 * @param {string}  key
 * @param {string}  find
 * @param {boolean} operator
 *
 * @return {array}
 */
Array.prototype.multifilter = function(key, find, operator) {
    return this.filter(function(value) {
        if (typeof find == 'object') {
            if (find.indexOf(value[key]) < 0 && (operator == true || operator == '!=' || operator == '<>')) {
                return true;
            } else if (find.indexOf(value[key]) >= 0 && !operator) {
                return true;
            } else if (value[key] > find.max() && operator == '>') {
                return true;
            } else if (value[key] >= find.max() && operator == '>=') {
                return true;
            } else if (value[key] < find.min() && operator == '<') {
                return true;
            } else if (value[key] <= find.min() && operator == '<=') {
                return true;
            }

            return false;
        }

        if (value[key] != find && (operator == true || operator == '!=' || operator == '<>')) {
            return true;
        } else if (value[key] == find && !operator) {
            return true;
        } else if (value[key] > find && operator == '>') {
            return true;
        } else if (value[key] >= find && operator == '>=') {
            return true;
        } else if (value[key] < find && operator == '<') {
            return true;
        } else if (value[key] <= find && operator == '<=') {
            return true;
        }
    });
};

/**
 * Only get some keys of a multi array.
 *
 * @param {string} key
 *
 * @return {array}
 */
Array.prototype.multikey = function(key) {
    return this.map(function(value) {
        var item = {};

        if (typeof key == 'object') {
            key.forEach(function(itemKey) {
                item[itemKey] = value[itemKey];
            });

            return item;
        }

        return value[key];
    });
};

/**
 * Get the intersection of arrays.
 *
 * @param {string}  array
 * @param {boolean} multi
 *
 * @return {array}
 */
Array.prototype.intersect = function(array, multi) {
    return this.filter(function(value) {
        var found = 0;

        if (multi) {
            array.forEach(function(arrayValues) {
                if (arrayValues.indexOf(value) >= 0) {
                    found++;
                }
            });

            if (found == array.length) {
                return true;
            } else {
                return false;
            }
        }

        if (array.indexOf(value) >= 0) {
            return true;
        }
    });
};

/**
 * Get the difference of arrays.
 *
 * @param {string}  array
 * @param {boolean} total
 *
 * @return {array}
 */
Array.prototype.diff = function(array, total) {
    var currentArray = this;
    var differenceArray = currentArray.filter(function(value) {
        return array.indexOf(value) < 0;
    });
    var differenceArrayB = [];

    if(total) {
        differenceArrayB = array.filter(function(value) {
            return currentArray.indexOf(value) < 0;
        });
    }

    return differenceArray.concat(differenceArrayB);
};

/**
 * Get the unique values of an array.
 *
 * @return {array}
 */
Array.prototype.unique = function() {
    return this.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};

/**
 * Only add the value if the value isnt in the array.
 *
 * @param {string} newValue
 *
 * @return {int}
 */
Array.prototype.pushIfNotExists = function(newValue) {
    if(this.indexOf(newValue) < 0) {
        this.push(newValue);
    }

    return this.length;
};

/**
 * The largest of the given numbers. If at least one of the arguments cannot be converted to a number, NaN is returned.
 *
 * @return {int}
 */
Array.prototype.max = function() {
    if(typeof this != 'object' || this.length < 1) {
        return;
    }

    return this.reduce(function(a, b) {
        return Math.max(a, b);
    });
};

/**
 * The smallest of the given numbers. If at least one of the arguments cannot be converted to a number, NaN is returned.
 *
 * @return {int}
 */
Array.prototype.min = function() {
    if(typeof this != 'object' || this.length < 1) {
        return;
    }

    return this.reduce(function(a, b) {
        return Math.min(a, b);
    });
};

/**
 * Get a random value of an array.
 *
 * @return {string}
 */
Array.prototype.random = function() {
    var min = 0;
    var max = this.length;
    var random = Math.floor(Math.random() * (max - min)) + min;

    return this[random];
};

/**
 * The summ of all values.
 *
 * @return {int}
 */
Array.prototype.summ = function() {
    if(typeof this != 'object' || this.length < 1) {
        return;
    }

    return this.reduce(function(a, b) {
        return a + b;
    }, 0);
};

/**
 * Get the average of all values.
 *
 * @return {int}
 */
Array.prototype.average = function() {
    if(typeof this != 'object' || this.length < 1) {
        return;
    }

    return (this.summ() / this.length);
};
