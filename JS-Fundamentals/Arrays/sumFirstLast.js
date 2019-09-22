function sumFirstLast(input) {
    console.log(input.reduce((acc, currentValue, currentIndex) => {
        return currentIndex === 0 || currentIndex === input.length - 1 ? acc + +currentValue : acc;
    }, 0));
}

sumFirstLast(['20']);
sumFirstLast(['5', '10']);
