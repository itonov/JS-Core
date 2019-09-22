function attachEvents() {
    let locationCodes = [];

    const conditionSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;'
    };

    $("#submit").click(() => {
        $.get("https://judgetests.firebaseio.com/locations.json").then(function (data) {
            locationCodes = data;
        }).then(() => {
            let inputVal = $("#location").val();
            const locationCode = locationCodes.find(location => {
                if (location.name === inputVal) {
                    return location.code;
                }
            }).code;

            if (locationCode === undefined) {
                handleError();
            } else {
                fillForecastInfo(locationCode);
            }

            $("#forecast").removeAttr('style');
        });
    });

    function handleError() {
        $("#forecast").text("Error");
    }

    function fillForecastInfo(code) {
        const currentPromise = $.get(`https://judgetests.firebaseio.com/forecast/today/${code}.json`);
        const threeDayPromise = $.get(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`);

        Promise.all([currentPromise, threeDayPromise])
            .then(function (data) {
                const currentForecastData = data[0];
                const threeDaysForecastData = data[1];

                $("#forecast").empty();
                $("#forecast").append(receiveTemplateHtml(currentForecastData, threeDaysForecastData));
            })
            .catch(handleError);
    }

    function receiveTemplateHtml(todayData, upcomingData) {
        return $(`<div id="current">
<div class="label">Current conditions</div>
<span class="condition symbol">${conditionSymbols[todayData.forecast.condition]}</span>
<span class="condition">
<span class="forecast-data">${todayData.name}</span>
<span class="forecast-data">${todayData.forecast.low}&#176;/${todayData.forecast.high}&#176;</span>
<span class="forecast-data">${todayData.forecast.condition}</span>
</span>
</div>
<div id="upcoming">
<div class="label">Three-day forecast</div>
<span class="upcoming">
<span class="symbol">${conditionSymbols[upcomingData.forecast[0].condition]}</span>
<span class="forecast-data">${upcomingData.forecast[0].low}&#176;/${upcomingData.forecast[0].high}&#176;</span>
<span class="forecast-data">${upcomingData.forecast[0].condition}</span>
</span>
<span class="upcoming">
<span class="symbol">${conditionSymbols[upcomingData.forecast[1].condition]}</span>
<span class="forecast-data">${upcomingData.forecast[1].low}&#176;/${upcomingData.forecast[1].high}&#176;</span>
<span class="forecast-data">${upcomingData.forecast[1].condition}</span>
</span>
<span class="upcoming">
<span class="symbol">${conditionSymbols[upcomingData.forecast[2].condition]}</span>
<span class="forecast-data">${upcomingData.forecast[2].low}&#176;/${upcomingData.forecast[2].high}&#176;</span>
<span class="forecast-data">${upcomingData.forecast[2].condition}</span>
</span>
</div>`);
    }
}