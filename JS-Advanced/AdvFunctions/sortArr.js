function sortArr(inputArr, sortType) {
    switch (sortType) {
        case "asc":
            return inputArr.sort((a, b) => a - b);
        case "desc":
            return inputArr.sort((a, b) => b - a);
        default:
            break;
    }
}

console.log(sortArr([14, 7, 17, 6, 8], "asc"));
console.log(sortArr([14, 7, 17, 6, 8], "desc"));