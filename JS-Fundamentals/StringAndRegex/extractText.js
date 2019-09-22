function extractText(inputStr) {
    let regex = /\(([A-Z]?[a-z]+ ?[a-z]+)\)/gm;
    let match;
    let result = [];

    do {
        match = regex.exec(inputStr);
        if (match) {
            result.push(match[1]);
        }
    } while (match);

    console.log(result.join(", "));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');