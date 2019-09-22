function evenPosition(input) {
    let result = input.filter(((value, index) => {
        if (index % 2 === 0) {
            return value;
        }
    }));
    console.log(result.join(" "));
}

evenPosition(['20', '30', '40']);
evenPosition(['5', '10']);