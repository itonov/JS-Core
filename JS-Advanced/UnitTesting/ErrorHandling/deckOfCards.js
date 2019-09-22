function printDeckOfCards(inputCards) {
    let deck = [];

    inputCards.forEach(inputCard => {
        const face = inputCard.slice(0, inputCard.length - 1);
        const suit = inputCard.slice(inputCard.length - 1);
        deck.push(makeCard(face, suit));
    });

    console.log(deck.join(" "));

    function makeCard(face, suit) {
        const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const suits = ["S", "H", "D", "C"];

        if (faces.indexOf(face) === -1) {
            throw ErrorEvent;
        } else if (suits.indexOf(suit) === -1) {
            throw ErrorEvent;
        }

        return {
            face: face,
            suit: suit,
            toString: function () {
                switch (this.suit) {
                    case "S":
                        return this.face + "\u2660";
                    case "H":
                        return this.face + "\u2665";
                    case "D":
                        return this.face + "\u2666";
                    case "C":
                        return this.face + "\u2663";
                    default:
                        break;
                }
            }
        }
    }
}

printDeckOfCards(["AS", "10D", "KH", "2C"]);