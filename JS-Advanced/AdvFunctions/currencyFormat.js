const formatter = (function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
});

const dollarFormatter = result(formatter);
console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));

function result(formatter) {
    const separator = ",";
    const symbol = "$";
    const symbolFirst = true;

    return function (value) {
        return formatter(separator, symbol, symbolFirst, value);
    };
}
