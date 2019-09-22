function sortByTwoCriteria(inputArr) {
    inputArr.sort(((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return a.toLowerCase() - b.toLowerCase();
        }
    }));

    console.log(inputArr.join("\n"));
}

sortByTwoCriteria(['alpha', 'beta', 'gamma']);