export default function last(originalArray) {
    if (!Array.isArray(originalArray) || originalArray.length < 1) {
        return null;
    }

    return originalArray[originalArray.length - 1];
}
