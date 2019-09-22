function subSum(inputArr, startIndex, endIndex) {
    if (!Array.isArray(inputArr) || inputArr.find(item => typeof item !== "number")) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }
    
    if (endIndex > inputArr.length) {
        endIndex = inputArr.length;
    }

    return inputArr.slice(startIndex, endIndex + 1).reduce((acc, cur) => {
        return acc += cur;
    }, 0)
}

console.log(subSum([10, 'twenty', 30, 40], 0, 2));