function rotateArray(inputArr) {
    let rotationAmount = +inputArr.pop();

    for (let i = 0; i < rotationAmount % 4; i++) {
        inputArr.unshift(inputArr.pop());
    }

    console.log(inputArr.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);