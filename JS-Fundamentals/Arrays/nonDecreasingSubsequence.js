function nonDecreeasingSubsequence(inputArr) {
    inputArr.forEach((value, index) => {
        if (index === 0 || inputArr[index - 1] <= value) {
            console.log(value);
        }
    });
}

nonDecreeasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);