function filterByAge(minAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge) {
    let firstPerson = {
        name: firstPersonName,
        age: firstPersonAge
    };
    let secondPerson = {
        name: secondPersonName,
        age: secondPersonAge
    };

    if (firstPerson.age >= 12) {
        console.log(firstPerson);
    } else if (secondPerson.age >= 12) {
        console.log(secondPerson);
    }
}

filterByAge(12, "Ivan", 15, "Asen", 9);