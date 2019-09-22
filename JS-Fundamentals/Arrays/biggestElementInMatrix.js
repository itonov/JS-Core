function biggestElement(inputMatrix) {
    let result = inputMatrix.reduce((acc, outerValue) => {
        outerValue.forEach(innerValue => {
            if (innerValue > acc) {
                acc = innerValue;
            }
        });

        return acc;
    }, 0);

    console.log(result);
}

biggestElement([[20, 50, 10], [8, 33, 145]]);