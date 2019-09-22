function isOddOrEven(string) {
    if (typeof(string) !== "string") {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

let assert = require("chai").assert;

describe('isOddOrEven', function () {
    it('should return undefined with a num input', function () {
        assert.equal(isOddOrEven(23), undefined, "Function did not return correct result");
    });
    it('should return undefined with object input', function () {
        assert.equal(isOddOrEven({}), undefined, "Function did not return correct result");
    });
    it('should return even when even length', function () {
        assert.equal("even", isOddOrEven("1234"), "Function did not return even result");
    });
    it('should return odd when odd length', function () {
        assert.equal("odd", isOddOrEven("123"), "Function did not return odd result");
    });
    it('should return correct values with multiple inputs', function () {
        assert.equal("odd", isOddOrEven("cat"), "Function did not return odd result");
        assert.equal("odd", isOddOrEven("alabala"), "Function did not return odd result");
        assert.equal("even", isOddOrEven("is it even"), "Function did not return odd result");
    });
});