function capitalizeTheWords(inputString) {
    inputString = inputString.split(" ").map(word => {
        let result = word.toLowerCase().split("");
        result[0] = result[0].toUpperCase();
        return result.join("");
    });

    console.log(inputString.join(" "));
}

capitalizeTheWords('Capitalize these words');