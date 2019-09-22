class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide === undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}

let assert = require("chai").assert;

describe('Calculator class tests', function () {
    it('should contain initial property expenses as empty arr', function () {
        let calc = new Calculator();
        assert.isArray(calc.expenses, 'Does not contain initial empty arr expenses');
    });
    it('should add number to expenses', function () {
        let calc = new Calculator();
        calc.add(5);
        assert.equal(calc.expenses[0], 5, 'Does not add number to expenses');
    });
    it('should add floating-point number to expenses', function () {
        let calc = new Calculator();
        calc.add(5.5);
        assert.equal(calc.expenses[0], 5.5, 'Does not add floating-point number to expenses');
    });
    it('should add string to expenses', function () {
        let calc = new Calculator();
        calc.add("test");
        assert.equal(calc.expenses[0], "test", 'Does not add string to expenses');
    });
    it('should add object to expenses', function () {
        let calc = new Calculator();
        let testObj = {};
        calc.add(testObj);
        assert.equal(calc.expenses[0], testObj, 'Does not add object to expenses');
    });
    it('should throw error when trying to divide with no nums', function () {
        let calc = new Calculator();
        calc.add("not a number");
        let result = () => calc.divideNums();
        assert.throws(result, Error, 'There are no numbers in the array!');
    });
    it('should divide only numbers in expenses arr', function () {
        let calc = new Calculator();
        calc.add("not a number");
        calc.add(6);
        calc.add(3);
        calc.add({});
        assert.equal(calc.divideNums(), 2, 'Does not divide correctly');
    });
    it('should divide only numbers in expenses arr', function () {
        let calc = new Calculator();
        calc.add("not a number");
        calc.add(6.6);
        calc.add(3);
        calc.add({});
        assert.equal(Math.round(calc.divideNums() * 100) / 100, 2.2, 'Does not divide correctly');
    });
    it('should return empty arr message when tostring is used', function () {
        let calc = new Calculator();
        assert.equal(calc.toString(), "empty array", "Does not return empty arr message");
    });
    it('should return string with all items', function () {
        let calc = new Calculator();
        calc.add(5);
        calc.add("teest");
        calc.add({});
        calc.add(56);
        calc.add(5.6);
        assert.equal(calc.toString(), "5 -> teest -> [object Object] -> 56 -> 5.6", "Does not return correct toString");
    });
    it('should return empty message when clicked orderBy with no expenses', function () {
        let calc = new Calculator();
        assert.equal(calc.orderBy(), 'empty');
    });
    it('should sort numbers expenses correctly', function () {
        let calc = new Calculator();
        calc.add(3);
        calc.add(4);
        calc.add(1);
        calc.add(2);
        assert.equal(calc.orderBy(), '1, 2, 3, 4');
    });
    it('should sort mixed expenses correctly', function () {
        let calc = new Calculator();
        calc.add(3);
        calc.add("test");
        calc.add("longer string");
        calc.add(2);
        assert.equal(calc.orderBy(), '2, 3, longer string, test');
    });

});