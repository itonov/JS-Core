let processList = (function () {
    let list = [];

    return function (inputArr) {
        for (let i = 0; i < inputArr.length; i++) {
            const commandTokens = inputArr[i].split(" ");

            switch (commandTokens[0]) {
                case "add":
                    list.push(commandTokens[1]);
                    break;
                case "remove":
                    list = list.filter(str => str !== commandTokens[1]);
                    break;
                case "print":
                    console.log(list.join(","));
                    break;
                default:
                    break;
            }
        }
    }
})();

// processList(["add hello", "add again", "remove hello", "add again", "print"]);
processList(["add pesho", "add gosho", "add pesho", "remove pesho", "print"]);