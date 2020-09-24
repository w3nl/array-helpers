export default function intersect(original, array, multi) {
    return original.filter((value) => {
        if (multi) {
            const found = array.reduce((accumulator, currentValue) => {
                if (currentValue.indexOf(value) >= 0) {
                    return accumulator + 1;
                }

                return accumulator;
            }, 0);

            return found === array.length;
        }

        return array.indexOf(value) >= 0;
    });
}
