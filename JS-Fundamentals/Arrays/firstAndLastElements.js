function firstAndLastElements(input) {
    let elementCount = +input.shift();

    let firstCountElems = input.map(value => {
        return value
    }).slice(0, elementCount).join(" ");

    console.log(firstCountElems);
    console.log(input.reverse().slice(0, elementCount).reverse().join(" "));
}

firstAndLastElements([2, 7, 8, 9]);
firstAndLastElements([3, 6, 7, 8, 9]);