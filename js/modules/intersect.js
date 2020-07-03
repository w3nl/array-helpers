module.exports = function intersect(original, array, multi) {
    return original.filter((value) => {
        let found = 0;

        if (multi) {
            array.forEach((arrayValues) => {
                if (arrayValues.indexOf(value) >= 0) {
                    found += 1;
                }
            });

            if (found === array.length) {
                return true;
            }
            return false;
        }

        if (array.indexOf(value) >= 0) {
            return true;
        }

        return false;
    });
};
