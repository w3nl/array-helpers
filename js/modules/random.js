export function random(originalArray) {
    const minimum = 0;
    const maximum = originalArray.length;
    const random = Math.floor(Math.random() * (maximum - minimum)) + minimum;

    return originalArray[random];
}
