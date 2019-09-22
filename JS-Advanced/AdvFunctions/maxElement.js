function maxElement(inputArr) {
    return inputArr
        .map(num => +num)
        .sort((a, b) => b - a)[0];
}

maxElement([10, 20, 5]);