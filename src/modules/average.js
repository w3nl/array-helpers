import summ from './summ';

export default function average(originalArray) {
    if (!Array.isArray(originalArray) || originalArray.length < 1) {
        return null;
    }

    return summ(originalArray) / originalArray.length;
}
