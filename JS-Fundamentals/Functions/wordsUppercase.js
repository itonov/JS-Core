function wordsUppercase(inputString) {
    console.log(inputString.toUpperCase().split(/\W+/).filter(word => word !== "").join(", "));
}

wordsUppercase("Hi, how are you?");