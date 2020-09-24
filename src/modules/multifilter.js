import min from './min';
import max from './max';

class Match {
    constructor(find, operator) {
        this.find = find;
        this.operator = operator || null;
    }

    check(value) {
        if (Array.isArray(this.find)) {
            return this.checkOperators(value, this.find.indexOf(value) < 0);
        }

        return this.checkOperators(value, String(value) !== String(this.find));
    }

    checkOperators(value, find) {
        const maxValue = max(this.find);
        const minValue = min(this.find);
        const hasMax = maxValue !== null;
        const hasMin = minValue !== null;

        const notOperator =
            find && (this.operator === '!=' || this.operator === '<>');
        const noInput = !find && !this.operator;
        const gtOperator =
            ((value > maxValue && hasMax) || value > this.find) &&
            this.operator === '>';
        const gteOperator =
            ((value >= maxValue && hasMax) || value >= this.find) &&
            this.operator === '>=';
        const ltOperator =
            ((value < minValue && hasMin) || value < this.find) &&
            this.operator === '<';
        const lteOperator =
            ((value <= minValue && hasMin) || value <= this.find) &&
            this.operator === '<=';

        return (
            notOperator ||
            noInput ||
            gtOperator ||
            gteOperator ||
            ltOperator ||
            lteOperator
        );
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

export default function multifilter(original, key, find, operator) {
    return Match.create(original, key, find, operator);
}
