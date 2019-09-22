function lookupChar(string, index) {
    if (typeof(string) !== "string" || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

let assert = require("chai").assert;

describe('looupChar', function () {
    it('should return undefined with a non-string first param', function () {
        assert.isUndefined(lookupChar(24, 23), "Did not return the current result");
    });
    it('should return undefined with a string second param', function () {
        assert.isUndefined(lookupChar("", ""), "Did not return the current result");
    });
    it('should return undefined with a floating-point second param', function () {
        assert.isUndefined(lookupChar(24, 2.3), "Did not return the current result");
    });
    it('should return incorrect index', function () {
        assert.equal(lookupChar("test", 15), "Incorrect index", "Did not return incorrect index")
    });
    it('should return incorrect index', function () {
        assert.equal(lookupChar("test", -1), "Incorrect index", "Did not return incorrect index")
    });
    it('should return incorrect index when index is equal to str length', function () {
        assert.equal(lookupChar("test", 4), "Incorrect index", "Did not return incorrect index");
    });
    it('should return correct value with correct input', function () {
        assert.equal(lookupChar("pesho", 0), "p", "Did not return the correct result");
    });
    it('should return correct value with correct input', function () {
        assert.equal(lookupChar("stamat", 0), "t", "Did not return the correct result");
    });
});