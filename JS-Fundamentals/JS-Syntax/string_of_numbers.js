function concatNums(numbersString) {
    let result = "";
    for (let i = 1; i <= +numbersString; i++) {
        result += i;
    }

    console.log(result);
}

concatNums('11');


