class Sorter {
    constructor() {
        this.elements = [];
    }

    add(element) {
        this.elements.push(element);
    }

    at(index) {
        return this.elements[index];
    }

    get length() {
        return this.elements.length;
    }

    toArray() {
        return this.elements;
    }

    sort(indices) {
        let sortedElement = indices
            .map(index => this.elements[index])
            .sort(this.comparator);

        if (this.isDecrease(indices)) {
            sortedElement.reverse();
        }

        sortedElement.forEach(
            (element, index) => (this.elements[indices[index]] = element)
        );
    }

    isDecrease(indices) {
        const firstIndex = indices[0];
        const lastIndex = indices[indices.length - 1];

        if (firstIndex > lastIndex) return true;
        return false;
    }

    comparator(a, b) {
        return a - b;
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }

    clearComparator() {
        this.savedComparator = null;
    }
}

module.exports = Sorter;