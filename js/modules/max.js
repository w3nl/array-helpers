module.exports = function max(original) {
    if (typeof original !== 'object' || original.length < 1) {
        return null;
    }

    return original.reduce((a, b) => Math.max(a, b));
};
