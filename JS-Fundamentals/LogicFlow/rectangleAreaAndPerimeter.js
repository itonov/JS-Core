function calcRectAreaAndPerimeter(firstSide, secondSide) {
    let area = +firstSide * +secondSide;
    let perimeter = 2 * (firstSide + secondSide);

    console.log(area);
    console.log(perimeter);
}

calcRectAreaAndPerimeter(2, 2);