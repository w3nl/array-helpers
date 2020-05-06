module.exports = function multisort(original, key, direction) {
    let moveDirection = 1;

    if (direction === 'desc') {
        moveDirection = -1;
    }

    return original.sort((a, b) => {
        let nameA = a[key];
        let nameB = b[key];

        if (typeof nameA === 'string') {
            nameA = nameA.toUpperCase();
        }

        if (typeof nameB === 'string') {
            nameB = nameB.toUpperCase();
        }

        if (nameA < nameB) {
            return -1 * moveDirection;
        }

        if (nameA > nameB) {
            return 1 * moveDirection;
        }

        return 0;
    });
};
