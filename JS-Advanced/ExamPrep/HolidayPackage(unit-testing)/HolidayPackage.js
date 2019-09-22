class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

let assert = require("chai").assert;

describe('HolidayPackage(unit-testing) class tests', function () {
    it('should be instantiated with two string params', function () {
        assert.isObject(new HolidayPackage("test", "test"), "Unable to instantiate object with two string params");
    });
    it('should set the value of insurance included', function () {
        let holidayObj = new HolidayPackage("test", "test");
        holidayObj.insuranceIncluded = true;

        assert.isTrue(holidayObj.insuranceIncluded, "Unable to set insurance included to true");
    });
    it('should get the default value of insurance included', function () {
        assert.isFalse(new HolidayPackage("test", "test").insuranceIncluded, "Incorrect default insurance included");
    });
    it('should throw error in case of string insurance being set', function () {
        let holidayObj = new HolidayPackage("test", "test");
        let result = () => holidayObj.insuranceIncluded = "test";
        assert.throws(result, Error);
    });
    it('should throw error in case of number insurance being set', function () {
        let holidayObj = new HolidayPackage("test", "test");
        let result = () => holidayObj.insuranceIncluded = 123;
        assert.throws(result, Error);
    });
    it('should return message in case of no vacationers', function () {
        assert.equal(new HolidayPackage("test", "test").showVacationers(),
            "No vacationers are added yet",
            "Did not return proper no vacationers message");
    });
    it('should return vacationers', function () {
        let holidayPackage = new HolidayPackage("test", "test");
        holidayPackage.addVacationer("Ivan Ivanov");
        holidayPackage.addVacationer("Dimitar Dimitrov");
        assert.equal(holidayPackage.showVacationers(),
            "Vacationers:\nIvan Ivanov\nDimitar Dimitrov",
            "Incorrect vacationers names");
    });
    it('should add vacationer', function () {
        let holidayPackage = new HolidayPackage("test", "test");
        holidayPackage.addVacationer("Ivan Ivanov");
        assert.equal(holidayPackage.vacationers.length, 1, "Does not add vacationer");
    });
    it('should should throw error in case of invalid vacationer name', function () {
        let holidayPackage = new HolidayPackage("test", "test");
        const test = () => holidayPackage.addVacationer("test");
        assert.throws(test, Error);
    });
    it('should should throw error in case of invalid vacationer name', function () {
        let holidayPackage = new HolidayPackage("test", "test");
        const test = () => holidayPackage.addVacationer("test test test");
        assert.throws(test, Error);
    });
    it('should should throw error in case of non-string vacationer name', function () {
        let holidayPackage = new HolidayPackage("test", "test");
        const test = () => holidayPackage.addVacationer(123);
        assert.throws(test, Error);
    });
    it('should should throw error in case of space vacationer name', function () {
        let holidayPackage = new HolidayPackage("test", "test");
        const test = () => holidayPackage.addVacationer(" ");
        assert.throws(test, Error);
    });
    it('should calculate the total price', function () {
        let holidayObj = new HolidayPackage("Berlin", "Summer");
        holidayObj.addVacationer("Ivan Ivanov");
        assert.isString(holidayObj.generateHolidayPackage());
    });
    it('should calculate the total price', function () {
        let holidayObj = new HolidayPackage("Berlin", "Summer");
        holidayObj.addVacationer("Ivan Ivanov");
        assert.equal(holidayObj.generateHolidayPackage(),
            `Holiday Package Generated\nDestination: Berlin\nVacationers:\nIvan Ivanov\nPrice: 600`);
    });
    it('should when calculating the total price, return error in case of no vacationers', function () {
        let holidayObj = new HolidayPackage("Berlin", "Summer");
        let result = () => holidayObj.generateHolidayPackage();
        assert.throws(result, Error);
    });
});