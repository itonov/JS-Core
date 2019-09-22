function letterOccurances(stringToCheck, neededLetter) {
    let count = 0;

    for (let letter of stringToCheck) {
        if (letter === neededLetter) {
            count++;
        }
    }

    console.log(count);
}

letterOccurances("hello", "l");
letterOccurances("panther", "n");