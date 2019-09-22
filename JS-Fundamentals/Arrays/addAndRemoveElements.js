function addAndRemoveElements(inputArr) {
    let initialNum = 1;
    let result = [];

    inputArr.forEach(value => {
        switch (value) {
            case 'add':
                result.push(initialNum);
                break;
            case 'remove':
                result.pop();
                break;
            default:
                break;
        }

        initialNum++;
    });

    console.log(result.length > 0 ? result.join("\n") : 'Empty');
}

addAndRemoveElements(['add', 'add', 'add', 'add']);