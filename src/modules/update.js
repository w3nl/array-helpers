export default function update(originalArray, newValues, keys) {
    return originalArray.map((item) => {
        const found = newValues.find((newItem) =>
            keys.every((key) => newItem[key] === item[key])
        );

        return found ? { ...item, ...found } : item;
    });
}
