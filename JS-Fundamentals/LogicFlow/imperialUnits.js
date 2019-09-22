function convertFromInchesToFeet(inputInches) {
    let feet = Math.floor(inputInches / 12);
    let resultInches = inputInches % 12;
    console.log(feet.toFixed(0) + "'-" + resultInches + "\"");
}

convertFromInchesToFeet(36);
convertFromInchesToFeet(55);
convertFromInchesToFeet(11);