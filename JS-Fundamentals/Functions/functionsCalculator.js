function functionsCalculator(firstNum, secondNum, operator) {
    function divide(firstNum, secondNum) {
        return firstNum / secondNum;
    }

    function add(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    function multiply(firstNum, secondNum) {
        return firstNum * secondNum;
    }

    function subtract(firstNum, secondNum) {
        return firstNum - secondNum;
    }

    switch (operator) {
        case "/":
            return divide(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
    }
}

console.log(functionsCalculator(2, 4, "+"));
console.log(functionsCalculator(3, 3, "/"));
console.log(functionsCalculator(18, -1, "*"));