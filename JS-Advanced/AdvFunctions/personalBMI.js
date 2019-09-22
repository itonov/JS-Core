function personalBMI() {
    let [name, age, weight, height] = arguments;

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / Math.pow((height/ 100), 2)),
        status: (function () {
            const currentBmi = weight / Math.pow((height/ 100), 2);
            if (currentBmi < 18.5) {
                return "underweight";
            } else if (currentBmi < 25) {
                return "normal";
            } else if (currentBmi < 30) {
                return "overweight";
            } else {
                return "obese";
            }
        })()
    };

    if (person.status === "obese") {
        person.recommendation = "admission required";
    }

    return person;
}

console.log(personalBMI("Peter", 9, 57, 137));

