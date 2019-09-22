function findWordOccurances(string, word) {
    let regex = new RegExp(`\b${word}\b`, 'gm');
    string = string.toLowerCase();
    let match = regex.exec(string);
    let counter = 0;

    while (match) {
        counter++;
        match = regex.exec(string);
    }

    console.log(counter);
}

findWordOccurances('The waterfall was so high, that the child couldn’t see its peak.', 'the');