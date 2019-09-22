function matchAllWords(inputStr) {
    let regex = /\w+/gm;
    let match;
    let result = [];

    while (match = regex.exec(inputStr)) {

        result.push(match[0]);
    }

    console.log(result.join('|'));
}

matchAllWords('_(Underscores) are also word characters');