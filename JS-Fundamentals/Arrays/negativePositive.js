function negativePositiveNums(input) {
    input.forEach(((number, index) => {
        if (+number < 0) {
            input.unshift(input.splice(index, 1)[0]);
        }
    }));
    console.log(input);
}

negativePositiveNums([7, -2, 8, 9]);
negativePositiveNums([3, -2, 0, -1]);