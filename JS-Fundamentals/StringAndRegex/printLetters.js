function printLetters(inputStr) {
    inputStr.split('').forEach((char, index) => {
        console.log(`str[${index}] -> ${char}`);
    });
}

printLetters('Hello, World!');