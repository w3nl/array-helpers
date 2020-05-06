module.exports = function getByKey(original, key, defaultValue) {
    const keys = key.split('.');

    let reference = original;

    while (keys.length > 0) {
        const referenceKey = keys.shift();

        if (
            reference === null ||
            reference === undefined ||
            !Object.prototype.hasOwnProperty.call(reference, referenceKey)
        ) {
            return defaultValue;
        }
        reference = reference[referenceKey];
    }

    return reference;
};
