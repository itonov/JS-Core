function countOccurences(target, searchText) {
    let regex = new RegExp(`(${target})`, 'gm');
    let match;
    let count = 0;

    do {
        match = regex.exec(searchText);

        if (match) {
            count++;
        }
    } while (match);

    console.log(count);
}

countOccurences('the', 'The quick brown fox jumps over the lay dog.');
