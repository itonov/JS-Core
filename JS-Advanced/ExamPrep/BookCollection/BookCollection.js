class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        if (room === "livingRoom" || room === "bedRoom" || room === "closet") {
            this.room = room;
            this.shelfGenre = shelfGenre;
            this.shelf = [];
            this.shelfCapacity = +shelfCapacity;
        } else {
            throw Error(`Cannot have book shelf in ${room}`);
        }
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelf.length === this.shelfCapacity) {
            this.shelf.splice(0, 1);
        }

        this.shelf
    }
}