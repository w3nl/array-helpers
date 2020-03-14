import { min } from './min';
import { max } from './max';

export function multifilter(original, key, find, operator) {
    return original.filter(value => {
        if (Array.isArray(find)) {
            if (
                find.indexOf(value[key]) < 0 &&
                (operator === true || operator === '!=' || operator === '<>')
            ) {
                return true;
            }
            if (find.indexOf(value[key]) >= 0 && !operator) {
                return true;
            }
            if (value[key] > max(find) && operator === '>') {
                return true;
            }
            if (value[key] >= max(find) && operator === '>=') {
                return true;
            }
            if (value[key] < min(find) && operator === '<') {
                return true;
            }
            if (value[key] <= min(find) && operator === '<=') {
                return true;
            }

            return false;
        }

        if (
            value[key] !== find &&
            (operator === true || operator === '!=' || operator === '<>')
        ) {
            return true;
        }
        if (value[key] === find && !operator) {
            return true;
        }
        if (value[key] > find && operator === '>') {
            return true;
        }
        if (value[key] >= find && operator === '>=') {
            return true;
        }
        if (value[key] < find && operator === '<') {
            return true;
        }
        if (value[key] <= find && operator === '<=') {
            return true;
        }

        return false;
    });
}
