module.exports = function diff(currentArray, otherArray, total) {
    const differenceArray = currentArray.filter(
        (value) => otherArray.indexOf(value) < 0
    );
    let differenceArrayB = [];

    if (total) {
        differenceArrayB = otherArray.filter(
            (value) => currentArray.indexOf(value) < 0
        );
    }

    return differenceArray.concat(differenceArrayB);
};
