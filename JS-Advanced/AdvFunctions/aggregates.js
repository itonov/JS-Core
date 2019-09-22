function aggregate(inputArr) {
    console.log(inputArr.reduce((acc, num) => {
        return acc += +num;
    }, 0))
}

aggregate([2, 3, 10, 5]);