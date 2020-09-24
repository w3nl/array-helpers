class Diff {
    constructor(currentArray, otherArray, total) {
        this.currentArray = currentArray;
        this.otherArray = otherArray;
        this.total = total;
    }

    get differenceArray() {
        return this.currentArray.filter(
            (value) => this.otherArray.indexOf(value) < 0
        );
    }

    get differenceArrayB() {
        if (!this.total) {
            return [];
        }

        return this.otherArray.filter(
            (value) => this.currentArray.indexOf(value) < 0
        );
    }

    get compare() {
        return this.differenceArray.concat(this.differenceArrayB);
    }

    static create(currentArray, otherArray, total) {
        const differ = new Diff(currentArray, otherArray, total);

        return differ.compare;
    }
}

export default function diff(currentArray, otherArray, total) {
    return Diff.create(currentArray, otherArray, total);
}
