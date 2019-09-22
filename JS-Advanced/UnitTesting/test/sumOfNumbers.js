function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

let assert = require("chai").assert;

describe("sum tests", function () {
    it('should take input array', function () {
        let inputArr = [1, 2, 3];
        assert.isNumber(sum(inputArr));
    });
    it('should return correct positive sum', function () {
        let inputArr = [1, 2, 3];
        assert.equal(sum(inputArr), 6, "positive sum is not correct")
    });
    it('should return correct negative sum', function () {
        let inputArr = [-1, -2, -3];
        assert.equal(sum(inputArr), -6, "negative sum is not correct")
    });
});