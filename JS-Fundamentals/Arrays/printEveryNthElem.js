function printEveryNthElement(inputArr) {
    let step = +inputArr.pop();

    inputArr.forEach((value, index) => {
        if (index % step === 0 || index === 0) {
            console.log(value);
        }
    })
}

printEveryNthElement(['5', '20', '31', '4', '20', '2']);
printEveryNthElement(['dsa', 'asd', 'test', 'tset', '2']);