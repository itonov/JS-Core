function squareOfStars(input) {
    let starsCount = input || 5;

    for (let i = 0; i < starsCount; i++) {
        console.log("* ".repeat(starsCount - 1) + "*")
    }
}

squareOfStars(1);
squareOfStars();
squareOfStars(5);