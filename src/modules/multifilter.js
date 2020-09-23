const min = require('./min.js');
const max = require('./max.js');

class Match {
    constructor(find, operator) {
        this.find = find;
        this.operator = operator || null;
    }

    check(value) {
        let returnValue = false;

        if (Array.isArray(this.find)) {
            if (
                this.find.indexOf(value) < 0 &&
                (this.operator == true ||
                    this.operator == '!=' ||
                    this.operator == '<>')
            ) {
                returnValue = true;
            } else if (this.find.indexOf(value) >= 0 && !this.operator) {
                returnValue = true;
            } else if (value > max(this.find) && this.operator == '>') {
                returnValue = true;
            } else if (value >= max(this.find) && this.operator == '>=') {
                returnValue = true;
            } else if (value < min(this.find) && this.operator == '<') {
                returnValue = true;
            } else if (value <= min(this.find) && this.operator == '<=') {
                returnValue = true;
            }
        } else if (
            value != this.find &&
            (this.operator == true || this.operator == '!=' || this.operator == '<>')
        ) {
            returnValue = true;
        } else if (value == this.find && !this.operator) {
            returnValue = true;
        } else if (value > this.find && this.operator == '>') {
            returnValue = true;
        } else if (value >= this.find && this.operator == '>=') {
            returnValue = true;
        } else if (value < this.find && this.operator == '<') {
            returnValue = true;
        } else if (value <= this.find && this.operator == '<=') {
            returnValue = true;
        }

        return returnValue;
    }

    static create(original, key, find, operator) {
        const matcher = new Match(find, operator);

        return original.filter((item) => {
            let values = item[key];
    
            if (!values) {
                return false;
            }
    
            values = values.toString().split(',');
    
            return values.some(matcher.check.bind(matcher));
        });
    }
}

module.exports = function multifilter(original, key, find, operator) {
    return Match.create(original, key, find, operator);
};
