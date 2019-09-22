function treasureLocator(input) {
    let isInTuvalu = function checkIfInTuvalu(x, y) {
        return (x >= 1 && x <= 3) && (y >= 1 && y <= 3);
    };

    let isInTokelau = function checkIfInLokelau(x, y) {
        return ((x >= 8 && x <= 9) && (y >= 8 && y <= 9));
    };

    let isInSamoa = function checkIfInSamoa(x, y) {
        return ((x >= 5 && x <= 7) && (y >= 3 && y <= 6));
    };

    let isInTonga = function checkIfInTonga(x, y) {
        return ((x >= 0 && x <= 2) && (y >= 6 && y <= 8));
    };

    let isInCook = function checkIfInCook(x, y) {
        return ((x >= 4 && x <= 9) && (y >= 7 && y <= 8));
    };

    for (let i = 0; i < input.length; i += 2) {
        let x = input[i];
        let y = input[i + 1];

        if (isInTuvalu(x, y)) {
            console.log('Tuvalu');
        } else if (isInTokelau(x, y)) {
            console.log('Tokelau');
        } else if (isInSamoa(x, y)) {
            console.log('Samoa');
        } else if (isInTonga(x, y)) {
            console.log('Tonga');
        } else if (isInCook(x, y)) {
            console.log('Cook');
        } else {
            console.log('On the bottom of the ocean');
        }
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6, 4]);