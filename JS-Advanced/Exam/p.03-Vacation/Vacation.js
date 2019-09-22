class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = +budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget >= this.budget) {
            if (this.kids[grade] !== undefined && this.kids[grade].indexOf(`${name}-${budget}`) > -1) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            } else {
                if (this.kids[grade] === undefined) {
                    this.kids[grade] = [];
                }

                this.kids[grade].push(`${name}-${budget}`);

                return grade;
            }
        } else {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
    }

    removeChild(name, grade) {
        if (this.kids[grade] !== undefined && this.kids[grade].find(kid => kid.startsWith(name)) !== undefined) {
            let neededIndex = this.kids[grade].map((kid, index) => {
                if (kid.startsWith(name)) {
                    return index;
                }
            })[0];
            this.kids[grade].splice(neededIndex, 1);
            return grade;
        }
        return `We couldn't find ${name} in ${grade} grade.`
    }

    toString() {
        let orderedKids = {};
        let unordered = this.kids;
        let totalCount = 0;

        Object.keys(unordered).sort().forEach(function (key) {
            orderedKids[key] = unordered[key];
            totalCount += unordered[key].length;
        });

        if (totalCount === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let result = `${this.organizer} will take ${totalCount} children on trip to ${this.destination}\n`;

        for (let key in orderedKids) {
            result = result + `Grade: ${key}\n`;

            orderedKids[key].forEach((kid, index) => {
                result = result + `${index + 1}. ${kid}\n`
            })
        }

        return result;
    }

    numberOfAllChildren() {
        let count = 0;
        let allKids = this.kids;
        Object.keys(allKids).forEach(function (key) {
            allKids[key].forEach(kid => count++);
        });

        return count;
    }
}

let result = new Vacation("Organizer", "Vacation", 2000);
result.registerChild("test", 5, 5000);
result.registerChild("test", 4, 4000);
console.log(result.numberOfAllChildren());
console.log(result.toString());;