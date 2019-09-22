let result = (function vectorMath() {
    return {
        add: function (vec1, vec2) {
            let result = [];

            result[0] = +vec1[0] + +vec2[0];
            result[1] = +vec1[1] + +vec2[1];

            return result;
        },
        multiply: function (vector, multiplier) {
            let result = [];

            result[0] = +vector[0] * +multiplier;
            result[1] = +vector[1] * +multiplier;

            return result;
        },
        length: function (vector) {
            return Math.sqrt((+vector[0] * +vector[0]) + (+vector[1] * +vector[1]));
        },
        dot: function (vec1, vec2) {
            return (+vec1[0] * +vec2[0]) + (+vec1[1] * +vec2[1]);
        },
        cross: function (vec1, vec2) {
            return (+vec1[0] * +vec2[1]) - (+vec1[1] * +vec2[0]);
        }
    }
})();

console.log(result.dot([1, 0], [0, -1]));