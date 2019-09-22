function censorship(stringToCensor, censoredWordsArr) {
    censoredWordsArr.forEach(word => {
        stringToCensor = stringToCensor.replace(new RegExp(word, 'gm'), '-'.repeat(word.length));
    });


    console.log(stringToCensor);
}

censorship('roses are red, violets are blue', [', violets are', 'red']);