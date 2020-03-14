/**
 * Group an array by the given key
 *
 * @param {array} items
 * @param {any} key
 *
 * @return {object}
 */
export function groupBy(items, key) {
    return items.reduce(
        (result, item) => ({
            ...result,
            [item[key]]: [...(result[item[key]] || []), item]
        }),
        {}
    );
}
