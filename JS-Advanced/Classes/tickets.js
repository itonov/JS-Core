function makeSortedTickets(ticketsArr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let resultTickets = [];

    ticketsArr.forEach(line => {
        let ticketParts = line.split("|");
        let destinationName = ticketParts[0];
        let price = ticketParts[1];
        let status = ticketParts[2];

        let newTicket = new Ticket(destinationName, price, status);

        resultTickets.push(newTicket);
    });

    resultTickets.sort((a, b) => {
        switch (sortingCriteria) {
            case "destination":
                return a.destination.localeCompare(b.destination);
            case "price":
                return a.price - b.price;
            case "status":
                return a.status.localeCompare(b.status);
        }
    });

    return resultTickets;
}