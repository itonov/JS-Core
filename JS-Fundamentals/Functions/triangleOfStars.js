function triangleOfStars(starsCount) {
    for (let i = 1; i <= starsCount; i++) {
        console.log("*".repeat(i));
    }

    for (let i = starsCount - 1; i > 0; i--) {
        console.log("*".repeat(i));
    }
}

triangleOfStars(1);
triangleOfStars(2);
triangleOfStars(5);