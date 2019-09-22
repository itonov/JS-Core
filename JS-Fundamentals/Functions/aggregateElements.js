function aggregate(elements) {
    let sum = 0;
    let sumOfDividedElem = 0;
    let sumString = "";

    for (let element of elements) {
        sumString += element;
        sum += +element;
        sumOfDividedElem += 1 / +element;
    }
    console.log(sum);
    console.log(sumOfDividedElem);
    console.log(sumString);
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);