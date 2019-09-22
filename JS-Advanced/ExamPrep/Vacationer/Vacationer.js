class Vacationer {
    constructor(fullName, creditCardInfo) {
        this.fullName = fullName;
        if (creditCardInfo !== undefined) {
            this.creditCard = this.addCreditCardInfo(creditCardInfo);
        } else {
            this.creditCard = this.addCreditCardInfo([1111, "", 111]);
        }
        this.wishList = [];
        this.generateIDNumber();
    }

    set fullName(namesArr) {
        if (namesArr.length !== 3) {
            throw Error("Name must include first name, middle name and last name")
        }

        let namePattern = /^[A-Z][a-z]+$/gm;

        if (namesArr[0].match(namePattern) === null
            || namesArr[1].match(namePattern) === null
            || namesArr[2].match(namePattern) === null) {
            throw Error("Invalid full name");
        }

        this.fullname = {
            firstName: namesArr[0],
            middleName: namesArr[1],
            lastName: namesArr[2]
        };
    }

    get fullName() {
        return this.fullname;
    }

    generateIDNumber() {
        let result = 231
            * this.fullName.firstName.charCodeAt(0)
            + 139
            * this.fullName.middleName.length;

        let vowels = ["a", "e", "o", "i", "u"];

        if (vowels.findIndex(char =>
            char === this.fullName.lastName
                .charAt(this.fullName.lastName.length - 1)) > -1
        ) {
            result = result + "8";
        } else {
            result = result + "7";
        }

        this.idNumber = result;
    }

    addCreditCardInfo(inputArr) {
        if (inputArr.length < 3) {
            throw Error("Missing credit card information");
        }

        if ((typeof inputArr[0]).localeCompare("number") !== 0
            || (typeof inputArr[2]).localeCompare("number") !== 0) {
            throw Error("Invalid credit card details");
        }

        return {
            cardNumber: +inputArr[0],
            expirationDate: inputArr[1],
            securityNumber: +inputArr[2]
        }
    }

    addDestinationToWishList(destination) {
        this.wishList.forEach(wishDest => {
            if (destination === wishDest) {
                throw Error("Destination already exists in wishlist");
            }
        });

        this.wishList.push(destination);
    }

    getVacationerInfo() {
        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}
ID Number: ${this.idNumber}
Wishlist:
${this.wishList.length === 0 ? "empty" : this.wishList.join(", ")}
Credit Card:
Card Number: ${this.creditCard.cardNumber}
Expiration Date: ${this.creditCard.expirationDate}
Security Number: ${this.creditCard.securityNumber}`
    }
}

let test = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);
test.addDestinationToWishList('Spain');
console.log(test.getVacationerInfo());