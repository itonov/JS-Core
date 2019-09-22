let result = function () {
    let rectangles = [];

    for (let i = 0; i < arguments[0].length; i++) {
        const inputRectangle = arguments[0][i];

        rectangles.push({
            width: +inputRectangle[0],
            height: +inputRectangle[1],
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                if (this.area() > other.area()) {
                    return -1;
                } else if (this.area() < other.area()) {
                    return 1;
                } else {
                    if (this.width > other.width) {
                        return -1;
                    } else if (this.width < other.width) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        })
    }

    return rectangles.sort(((a, b) => a.compareTo(b)));
};

// console.log(result([[10, 5], [5, 12]]));
console.log(result([[10,5], [3,20], [5,12]]));