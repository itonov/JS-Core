function generateExtensibleObj() {
    let object = {};

    object.extend = function (childObj) {
        for (let key in childObj) {
            if (childObj.hasOwnProperty(key) && typeof childObj[key] === "function") {
                Object.getPrototypeOf(object)[key] = childObj[key];
            } else if (childObj.hasOwnProperty(key)) {
                object[key] = childObj[key];
            }
        }
    };

    return object;
}

let result = generateExtensibleObj();
result.extend({
    name: '',
    setName: function (newValue) {
        this.name = newValue;
    },
    getName: function () {
        return this.name;
    }
});

console.log(result);