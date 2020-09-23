const min = require('./min.js');
const max = require('./max.js');

module.exports = function multifilter(original, key, find, operator) {
    return original.filter((item) => {
        let values = item[key];
        let returnValue = false;

        if (!values) {
            return returnValue;
        }

        values = values.toString().split(',');

        values.forEach((value) => {
            if (Array.isArray(find)) {
                if (
                    find.indexOf(value) < 0 &&
                    (operator == true || operator == '!=' || operator == '<>')
                ) {
                    returnValue = true;
                } else if (find.indexOf(value) >= 0 && !operator) {
                    returnValue = true;
                } else if (value > max(find) && operator == '>') {
                    returnValue = true;
                } else if (value >= max(find) && operator == '>=') {
                    returnValue = true;
                } else if (value < min(find) && operator == '<') {
                    returnValue = true;
                } else if (value <= min(find) && operator == '<=') {
                    returnValue = true;
                }
            } else if (
                value != find &&
                (operator == true || operator == '!=' || operator == '<>')
            ) {
                returnValue = true;
            } else if (value == find && !operator) {
                returnValue = true;
            } else if (value > find && operator == '>') {
                returnValue = true;
            } else if (value >= find && operator == '>=') {
                returnValue = true;
            } else if (value < find && operator == '<') {
                returnValue = true;
            } else if (value <= find && operator == '<=') {
                returnValue = true;
            }
        });

        return returnValue;
    });
};
