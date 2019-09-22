function cooking(inputArray) {
    let number = +inputArray[0];

    for (let i = 1; i < inputArray.length; i++) {
        let action = inputArray[i];

        switch (action) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number++;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number -= number * 0.2;
                break;
        }
        console.log(number);
    }
}

cooking([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);