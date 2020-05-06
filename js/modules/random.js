module.exports = function random(originalArray) {
    const minimum = 0;
    const maximum = originalArray.length;
    const randomIndex =
        Math.floor(Math.random() * (maximum - minimum)) + minimum;

    return originalArray[randomIndex];
};
