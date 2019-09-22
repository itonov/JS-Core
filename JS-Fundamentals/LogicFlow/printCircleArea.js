function printCircleArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    console.log(area);
    console.log(Math.round((area + 0.00001) * 100) / 100)
}

printCircleArea(5);