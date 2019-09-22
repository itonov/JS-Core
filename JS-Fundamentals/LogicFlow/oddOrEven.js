function oddOrEven(numberToCheck) {
    if (numberToCheck < 0) {
        numberToCheck *= -1;
    }

    if (numberToCheck % 2 === 1) {
        console.log("odd");
    } else if (numberToCheck % 2 === 0) {
        console.log("even");
    } else {
        console.log("invalid");
    }
}

oddOrEven(-5);
oddOrEven(8);
oddOrEven(1.5);