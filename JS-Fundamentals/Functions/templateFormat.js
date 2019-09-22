function templateFormat(inputArray) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>\n<quiz>`)

    for (let i = 0; i < inputArray.length; i += 2) {
        let question = inputArray[i];
        let answer = inputArray[i + 1];

        console.log(`<question>\n${question}\n</question>\n<answer>\n${answer}\n</answer>`)
    }

    console.log(`</quiz>`)
}

templateFormat(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);