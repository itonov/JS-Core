function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let assert = require("chai").assert;

describe('rgbToHex tests', function () {
    it('should take three integer numbers as args and return correct hex format', function () {
        assert.equal(rgbToHexColor(2, 5, 6), "#020506", "doesn't return correct hex format");
    });
    it('should return undefined if invalid first arg', function () {
        assert.equal(rgbToHexColor(-2, 5, 6), undefined, "doesn't return false in case of incorrect input");
    });
    it('should return undefined if invalid first arg', function () {
        assert.equal(rgbToHexColor(2222, 5, 6), undefined, "doesn't return false in case of incorrect input");
    });
    it('should return undefined if invalid second arg', function () {
        assert.equal(rgbToHexColor(2, -5, 6), undefined, "doesn't return false in case of incorrect input");
    });
    it('should return undefined if invalid second arg', function () {
        assert.equal(rgbToHexColor(2, 2222, 6), undefined, "doesn't return false in case of incorrect input");
    });
    it('should return undefined if invalid third arg', function () {
        assert.equal(rgbToHexColor(2, 5, -6), undefined, "doesn't return false in case of incorrect input");
    });
    it('should return undefined if invalid third arg', function () {
        assert.equal(rgbToHexColor(2, 5, 22222), undefined, "doesn't return false in case of incorrect input");
    });
    it('should return undefined if invalid type', function () {
        assert.equal(rgbToHexColor({}, 2, 34), undefined, "doesn't return undefined when wrong input type first arg")
    });
    it('should return undefined if invalid type', function () {
        assert.equal(rgbToHexColor(2, {}, 2), undefined, "doesn't return undefined when wrong input type second arg")
    });
    it('should return undefined if invalid type', function () {
        assert.equal(rgbToHexColor(2, 34, {}), undefined, "doesn't return undefined when wrong input type third arg")
    });
});