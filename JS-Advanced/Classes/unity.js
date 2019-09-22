class Rat {
    constructor(name) {
        this.name = name;
        this.eatedRats = [];
    }

    unite(otherRat) {
        if (otherRat.constructor.name === "Rat") {
            this.eatedRats.push(otherRat);
        }
    }

    getRats() {
        return this.eatedRats;
    }

    toString() {
        let result = this.name + "\n";
        this.eatedRats.forEach(rat => {
            result = result + ("##" + rat.name + "\n");
        });
        return result;
    }
}