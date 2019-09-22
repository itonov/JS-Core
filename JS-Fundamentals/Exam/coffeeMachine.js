function coffeeMachine(inputArr) {
    let coffeeCaffeinePrice = 0.8;
    let coffeeDecafPrice = 0.9;
    let teaPrice = 0.8;
    let totalIncome = 0;

    for (let i = 0; i < inputArr.length; i++) {
        let lineTokens = inputArr[i].split(/,\s+/gm);
        let insertedCoins = +lineTokens[0];
        let selectedDrink = lineTokens[1];

        let currentPrice = 0;
        switch (selectedDrink) {
            case "coffee":
                let coffeeType = lineTokens[2];

                switch (coffeeType) {
                    case "caffeine":
                        currentPrice += coffeeCaffeinePrice;

                        if (lineTokens[3] === 'milk') {
                            currentPrice += +(currentPrice * 0.1).toFixed(1);
                            if (+lineTokens[4] > 0) {
                                currentPrice += 0.1;
                            }
                        } else if (+lineTokens[3] > 0) {
                            currentPrice += 0.1;
                        }
                        break;
                    case "decaf":
                        currentPrice += coffeeDecafPrice;

                        if (lineTokens[3] === 'milk') {
                            currentPrice += +(currentPrice * 0.1).toFixed(1);
                            if (+lineTokens[4] > 0) {
                                currentPrice += 0.1;
                            }
                        } else if (+lineTokens[3] > 0) {
                            currentPrice += 0.1;
                        }
                        break;
                    default:
                        break;
                }
                break;
            case "tea":
                currentPrice += teaPrice;

                if (lineTokens[2] === 'milk') {
                    currentPrice += +(currentPrice * 0.1).toFixed(1);
                    if (+lineTokens[3] > 0) {
                        currentPrice += 0.1;
                    }
                } else if (+lineTokens[2] > 0) {
                    currentPrice += 0.1;
                }
                break;
            default:
                break;
        }

        if (insertedCoins >= currentPrice) {
            totalIncome += +currentPrice;
            console.log(`You ordered ${selectedDrink}. Price: ${currentPrice.toFixed(2)}$ Change: ${(insertedCoins - currentPrice).toFixed(2)}$`);
        } else {
            console.log(`Not enough money for ${selectedDrink}. Need ${(currentPrice - insertedCoins).toFixed(2)}$ more.`)
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}

coffeeMachine(['1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']);