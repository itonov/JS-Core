function figureArea(firstWidth, firstHeight, secondWidth, secondHeight) {
    let firstRectangle = {
        height: firstHeight,
        width: firstWidth
    };

    let secondRectangle = {
        height: secondHeight,
        width: secondWidth
    };

    if (firstRectangle.height < secondRectangle.height && firstRectangle.width < secondRectangle.width) {
        let secondArea = secondRectangle.height * secondRectangle.width;

        console.log(secondArea);
    } else if (firstRectangle.height >= secondRectangle.height) {
        firstRectangle.height = firstRectangle.height - secondRectangle.height;

        let firstArea = firstRectangle.width * firstRectangle.height;
        let secondArea = secondRectangle.height * secondRectangle.width;
        let totalArea = firstArea + secondArea;

        console.log(totalArea);
    } else {
        firstRectangle.width = firstRectangle.width - secondRectangle.width;

        let firstArea = firstRectangle.width * firstRectangle.height;
        let secondArea = secondRectangle.height * secondRectangle.width;
        let totalArea = firstArea + secondArea;

        console.log(totalArea);
    }
}

figureArea(1, 1.01, 1, 1);
figureArea(13, 2, 5, 8);
figureArea(1, 1, 2, 2);