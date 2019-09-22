let inputCar = {
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelSize: 14
};

function carFactory(inputCar) {
    let resultCar = Object.create(inputCar);

    resultCar.model = inputCar.model;

    let engine;

    if (inputCar.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        };
    } else if (inputCar.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        }
    } else if (inputCar.power <= 200) {
        engine = {
            power: 200,
            volume: 3500
        }
    }

    let carriage = {
        type: resultCar.carriage,
        color: resultCar.color
    };

    let wheels = (function () {
        let result = [];

        if (inputCar.wheelSize % 2 === 0) {
            const newWheelSize = +inputCar.wheelSize - 1;

            for (let i = 0; i < 4; i++) {
                result.push(newWheelSize);
            }
            return result;
        }

        for (let i = 0; i < 4; i++) {
            result.push(+inputCar.wheelSize);
        }

        return result;
    })();

    resultCar.engine = engine;
    resultCar.carriage = carriage;
    resultCar.wheels = wheels;

    return resultCar;
}

console.log(carFactory(inputCar));