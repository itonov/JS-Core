function argumentInfo() {
    let summary = {};

    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i];
        const type = typeof argument;

        console.log(type + ': ' + argument);

        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }

    let result = [];

    Object.keys(summary).forEach(currentType => {
        result.push([currentType, summary[currentType]]);
    });

    result.sort(((a, b) => b[1] - a[1]));
    result.forEach(arr => console.log(arr[0] + " = " + arr[1]));
}

argumentInfo("cat", "cat", 42, function () { console.log("Hello world!"); });