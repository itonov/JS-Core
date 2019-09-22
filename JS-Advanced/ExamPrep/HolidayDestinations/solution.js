function addDestination() {
    let inputFields = $(".inputData");

    let city = inputFields.val();
    inputFields.splice(0, 1);
    let country = inputFields.val();
    let season = $("#seasons").val();
    season = season.substring(0, 1).toUpperCase() + season.split("").splice(1, season.split("").length).join("");

    let $td = $(`<tr><td>${city}, ${country}</td><td>${season}</td></tr>`);
    $("#destinationsList").append($td);

    let $seasonsCount = $(".summary");

    let summerCount = $seasonsCount[0].value;
    let autumnCount = $seasonsCount[1].value;
    let winterCount = $seasonsCount[2].value;
    let springCount = $seasonsCount[3].value;

    switch (season) {
        case "Summer":
            summerCount++;
            break;
        case "Autumn":
            autumnCount++;
            break;
        case "Winter":
            winterCount++;
            break;
        case "Spring":
            springCount++;
            break;
        default:
            break;
    }

    $seasonsCount[0].value = summerCount;
    $seasonsCount[1].value = autumnCount;
    $seasonsCount[2].value = winterCount;
    $seasonsCount[3].value = springCount;
}