const home = (function () {
    const index = function (ctx) {
        let flights;
        if (userModel.isAuthorized()) {
            flights = flightModel.flights(false);
        } else {
            flights = flightModel.flights(true);
        }

        flights.done(function (data) {
            ctx.flights = data;
            ctx.partial("views/home/index.hbs");
        });
    };

    return {
        index
    };
}());