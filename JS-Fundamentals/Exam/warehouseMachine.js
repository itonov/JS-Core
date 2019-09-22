function warehouseMachine(input) {
    let availableBrands = [];

    for (let i = 0; i < input.length; i++) {
        let lineTokens = input[i].split(", ");
        let action = lineTokens.shift();

        let brand;
        let name;
        let expDate;
        let quantity;

        switch (action) {
            case "IN":
                brand = lineTokens[0];
                name = lineTokens[1];
                expDate = lineTokens[2];
                quantity = +lineTokens[3];

                let brandExists = false;
                let coffeeExists = false;

                availableBrands.forEach(currBrand => {
                    if (currBrand.brand === brand) {
                        brandExists = true;
                    }
                    currBrand.coffeeCollection.forEach(innerCoffee => {
                        if (innerCoffee.coffeeName === name) {
                            coffeeExists = true;
                        }
                    });
                });

                if (!brandExists) {
                    availableBrands.push({
                        brand: brand,
                        coffeeCollection: []
                    });
                }

                if (!coffeeExists) {
                    availableBrands.forEach(currBrand => {
                        if (currBrand.brand === brand) {
                            currBrand.coffeeCollection.push({
                                coffeeName: name,
                                quantity: quantity,
                                expDate: expDate
                            });
                        }
                    });
                }

                if (brandExists && coffeeExists) {
                    let currExpDate = '';
                    availableBrands.forEach(currBrand => {
                        if (currBrand.brand === brand) {
                            currBrand.coffeeCollection.forEach(innerCoffee => {
                                if (innerCoffee.coffeeName === name) {
                                    currExpDate = innerCoffee.expDate;
                                }
                            });
                        }
                    });

                    if (expDate.localeCompare(currExpDate) === 0) {
                        availableBrands.forEach(currBrand => {
                            if (currBrand.brand === brand) {
                                currBrand.coffeeCollection.forEach(innerCoffee => {
                                    if (innerCoffee.coffeeName === name) {
                                        innerCoffee.quantity++;
                                    }
                                });
                            }
                        });
                    } else if (expDate.localeCompare(currExpDate) === 1) {
                        availableBrands.forEach(currBrand => {
                            if (currBrand.brand === brand) {
                                let indexToReplace = 0;
                                currBrand.coffeeCollection.forEach((currCoffee, index) => {
                                    if (currCoffee.coffeeName === name) {
                                        indexToReplace = index;
                                    }
                                });
                                currBrand.coffeeCollection.splice(indexToReplace, 1, {
                                    coffeeName: name,
                                    quantity: quantity,
                                    expDate: expDate
                                });
                            }
                        });
                    }
                }
                break;
            case "OUT":
                brand = lineTokens[0];
                name = lineTokens[1];
                expDate = lineTokens[2];
                quantity = lineTokens[3];

                availableBrands.forEach(currBrand => {
                    if (currBrand.brand === brand) {
                        currBrand.coffeeCollection.forEach((currCoffee, coffeeIndex) => {
                            if (currCoffee.coffeeName === name
                                && currCoffee.expDate.localeCompare(expDate) === 1
                                && currCoffee.quantity >= quantity) {
                                currCoffee.quantity -= quantity;
                            }
                        });
                    }
                });
                break;
            case "REPORT":
                console.log('>>>>> REPORT! <<<<<');
                availableBrands.forEach(currBrand => {
                    console.log(`Brand: ${currBrand.brand}:`);

                    currBrand.coffeeCollection.forEach(currCoffee => {
                        console.log(`-> ${currCoffee.coffeeName} -> ${currCoffee.expDate} -> ${currCoffee.quantity}.`);
                    });
                });
                break;
            case "INSPECTION":
                availableBrands
                    .sort((brandA, brandB) => {
                        if (brandA.brand < brandB.brand) {
                            return -1;
                        } else if (brandA.brand > brandB.brand) {
                            return 1;
                        } else {
                            return 0;
                        }
                    })
                    .forEach(currBrand => {
                        currBrand.coffeeCollection
                            .sort((coffeeA, coffeeB) => coffeeB.quantity - coffeeA.quantity);
                    });

                console.log('>>>>> INSPECTION! <<<<<');
                availableBrands.forEach(currBrand => {
                    console.log(`Brand: ${currBrand.brand}:`);

                    currBrand.coffeeCollection.forEach(currCoffee => {
                        console.log(`-> ${currCoffee.coffeeName} -> ${currCoffee.expDate} -> ${currCoffee.quantity}.`);
                    });
                });
                break;
            default:
                break;
        }
    }
}

warehouseMachine(["IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION",
    ]
);