function realEstateAgency() {
    $("button[name=regOffer]").click(function (event) {
        event.preventDefault();
        event.stopPropagation();

        let $rent = $("input[name=apartmentRent]");
        let $type = $("input[name=apartmentType]");
        let $commission = $("input[name=agencyCommission]");

        let rent = +$rent.val();
        let type = $type.val();
        let commission = +$commission.val();

        $rent.val("");
        $type.val("");
        $commission.val("");

        if (rent > 0 && commission >= 0 && commission <= 100) {
            $("#building").append(`<div class="apartment"><p>Rent: ${rent}</p><p>Type: ${type}</p><p>Commission: ${commission}</p></div>`);
            $("#message").text("Your offer was created successfully.");
        } else {
            $("#message").text("Your offer registration went wrong, try again.");
        }
    });

    $("button[name=findOffer]").click(function (event) {
        event.preventDefault();
        event.stopPropagation();

        let $budget = $("input[name=familyBudget]");
        let $type = $("input[name=familyApartmentType]");
        let $name = $("input[name=familyName]");

        let searchBudget = +$budget.val();
        let searchType = $type.val();
        let name = $name.val();

        $budget.val("");
        $type.val("");
        $name.val("");

        if (searchBudget > 0 && searchType !== "" && name !== "") {
            let foundApartment = false;
            for (let i = 0; i < $(".apartment").length; i++) {
                let $currentApartment = $(".apartment")[i];

                let type = $($($currentApartment).children()[1]).text().split("Type: ")[1];
                let apartmentBudget = $($($currentApartment).children()[0]).text().split("Rent: ")[1];
                let commission = $($($currentApartment).children()[2]).text().split("Commission: ")[1];
                let neededBudget = +apartmentBudget + (+apartmentBudget * (+commission / 100));

                if (type === searchType && searchBudget >= neededBudget) {
                    foundApartment = true;

                    $($currentApartment).empty();
                    $($currentApartment).css("border", "2px solid red");
                    $($currentApartment).append(`<p>${name}</p><p>live here now</p><button>MoveOut</button>`);
                    $($currentApartment).children().last().click(function (event) {
                        event.preventDefault();
                        event.stopPropagation();

                        let familyName = $(this).parent().children().first().text();

                        $("#message").text(`They had found cockroaches in ${familyName}'s apartment`);
                        $(this).parent().remove();
                    });

                    let currentAgencyProfit = +$("#roof").children().first().text().split(" ")[2];
                    currentAgencyProfit = currentAgencyProfit + ((+apartmentBudget * (+commission / 100)) * 2);
                    $("#roof").children().first().text(`Agency profit: ${currentAgencyProfit} lv.`);

                    debugger;
                }
            }

            if (!foundApartment) {
                $("#message").text("We were unable to find you a home, so sorry :(");
            } else {
                $("#message").text("Enjoy your new home! :))")
            }
        }

    });
}