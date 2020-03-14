/**
 * Sort an array by the given key.
 *
 * @param {object} first
 * @param {object} second
 * @param {string} field
 *
 * @return {boolean}
 */
export function sortArrayOfObjects(first, second, field) {
    const nameFirst = first[field].toUpperCase();
    const nameSecond = second[field].toUpperCase();

    if (nameFirst < nameSecond) {
        return -1;
    }

    if (nameFirst > nameSecond) {
        return 1;
    }

    return 0;
}
