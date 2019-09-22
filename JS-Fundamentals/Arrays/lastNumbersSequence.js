function lastKNumbers(count, step) {
    let firstElem = 1;

    let result = new Array(+count);
    result[0] = +firstElem;
    result = result.fill(0, 1, +count);

    for (let i = 1; i < result.length; i++) {
        if (i - step <= 0) {
            for (let j = i; j >= 0; j--) {
                result[i] += result[j];
            }
        } else {
            for (let j = 0; j <= step; j++) {
                result[i] += result[i - j];
            }
        }
    }

    console.log(result.join(" "));
}

lastKNumbers(6, 3);
lastKNumbers(8, 2);
