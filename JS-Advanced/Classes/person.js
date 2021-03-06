function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            if (firstName !== null) {
                this.firstName = firstName;
            }

            if (lastName !== null) {
                this.lastName = lastName;
            }

            if (age !== null) {
                this.age = age;
            }

            if (email !== null) {
                this.email = email;
            }
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email:${this.email})`;
        }
    }

    let result = [];

    result.push(new Person("Maria", "Petrova", 22, "mp@yahoo.com"));
    result.push(new Person("SoftUni"));
    result.push(new Person("Stephan", "Nikolov", 25));
    result.push(new Person("Peter", "Kolev", 24, "ptr@gmail.com"));

    return result;
}