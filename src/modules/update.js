export default function update(originalArray, newValues, keys) {
    return originalArray.map((value, key) => {
        if (keys.include(key)) {
            return {...value, ...newValues};
        }

        return value;
    });
}
