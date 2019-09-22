function findNumsInString(stringArr) {
    let nums = [];
    let regex = /\d+/g;
    let text = "";

    stringArr.forEach(sentence => {
        text = text.concat(sentence);
    });

    let match = regex.exec(text);

    while (match) {
        nums.push(match[0]);
        match = regex.exec(text);
    }

    console.log(nums.join(" "));
}

findNumsInString(['The300', 'What is that', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);