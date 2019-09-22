let fib = (function () {
    let nextNum = 1;
    let currentNum = 0;

    return function () {
        let temp = nextNum;
        nextNum = nextNum + currentNum;
        currentNum = temp;

        return currentNum;
    }

})();

console.log(fib());
console.log(fib());
console.log(fib());