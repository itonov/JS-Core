function printArrayWithDelimiter(inputArr) {
    let delimiter = inputArr.pop();

    console.log(inputArr.join(delimiter));
}

printArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
printArrayWithDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);