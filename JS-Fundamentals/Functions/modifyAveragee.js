function modifyAverage(number) {
    let numberAsString = number.toString();
    function addDigit(number) {
        return number.toString() + "9";
    }

    function averageOfDigits(number) {
        let result = 0;

        for (let i = 0; i < number.length; i++) {
            result += +number[i];
        }

        return result / number.length;
    }

    while (averageOfDigits(numberAsString) <= 5) {
        numberAsString = addDigit(numberAsString);
    }

    console.log(numberAsString);
}

modifyAverage(101);
modifyAverage(5835);