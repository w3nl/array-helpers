module.exports = function multikey(original, key) {
    return original.map((value) => {
        const item = {};

        if (typeof key === 'object') {
            key.forEach((itemKey) => {
                item[itemKey] = value[itemKey];
            });

            return item;
        }

        return value[key];
    });
};
