function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    let reversed = arr.slice(0).reverse();
    return (JSON.stringify(arr) == JSON.stringify(reversed));
}

let assert = require("chai").assert;

describe('isSymmetric tests', function () {
    it('should take input arr', function () {
        let inputArr = [];
        assert.isBoolean(isSymmetric(inputArr));
    });
    it('should return false if input is string', function () {
        assert.equal(isSymmetric(" "), false, "doesn't return false if input is string");
    });
    it('should return false if input is number', function () {
        assert.equal(isSymmetric(52), false, "doesn't return false if input is number");
    });
    it('should return false if input is boolean', function () {
        assert.equal(isSymmetric(true), false, "doesn't return false if input is boolean");
    });
    it('should return true if arr is symmetric', function () {
        let inputArr = [1, 2, 2, 1];
        assert.equal(isSymmetric(inputArr), true, "doesn't return true when it should");
    });
    it('should return false if the arr is not symmetric', function () {
        let inputArr = [1, 2, 1, 2];
        assert.equal(isSymmetric(inputArr), false, "doesn't return false when it should");
    });
});