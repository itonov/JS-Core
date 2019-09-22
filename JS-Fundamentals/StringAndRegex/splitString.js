function splitStringByDelim(stringToSplit, delimiter) {
    stringToSplit
        .split(delimiter)
        .forEach(value => {
            console.log(value);
        });
}

splitStringByDelim('One-Two-Three-Four-Five', '-');