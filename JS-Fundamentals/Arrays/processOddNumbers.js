function processOddNums(inputArr) {
    let result = inputArr
        .filter((value, index) => {
            return index % 2 === 1;
        })
        .map(value => {
            return value * 2;
        })
        .reverse();

    console.log(result.join(" "));
}

processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3]);