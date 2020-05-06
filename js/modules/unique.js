module.exports = function unique(originalArray) {
    return originalArray.filter(
        (value, index, self) => self.indexOf(value) === index
    );
};
