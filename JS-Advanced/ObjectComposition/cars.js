let garrage = (function () {
    let carList = [];

    return function (inputArr) {
        for (let i = 0; i < inputArr.length; i++) {
            const commandTokens = inputArr[i].split(" ");
            const action = commandTokens[0];
            const name = commandTokens[1];

            switch (action) {
                case "create":
                    if (commandTokens.length === 4) {
                        const parentName = commandTokens[3];
                        let newCar = Object.create(carList.find(car => car.name === parentName));
                        newCar.name = name;

                        carList.push(newCar);
                    } else {
                        carList.push({
                            name: name
                        });
                    }
                    break;
                case "set":
                    const key = commandTokens[2];
                    const value = commandTokens[3];

                    carList.forEach(car => {
                        if (car.name === name) {
                            car[key] = value;
                        }
                    });
                    break;
                case "print":
                    const neededCar = carList.find(car => car.name === name);
                    let result = [];
                    for (let key in neededCar) {
                        if (key !== "name") {
                            result.push(key + ":" + neededCar[key]);
                        }
                    }

                    console.log(result.join(", "));
                    break;
                default:
                    break;
            }
        }

        return carList;
    }
})();

garrage(["create c1",
    "create c2 inherit c1",
    "set c1 color red",
    "set c2 model new",
    "print c1",
    "print c2"]);