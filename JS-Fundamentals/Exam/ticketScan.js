function ticketsScan(stringToCheck, checkType) {
    let twoNamesRegex = / [A-Z]{1}[a-z]*-[A-Z]{1}[a-z]*[^.]? /gm;
    let threeNamesRegex = / [A-Z]{1}[a-z]*-[A-Z]{1}\.-[A-Z]{1}[a-z]+ /gm;
    let airportRegex = / [A-Z]{3}\/[A-Z]{3} /gm;
    let flightNumRegex = / [A-Z]{1,3}[0-9]{1,5} /gm;
    let companyRegex = /- [A-Z]{1}[a-z]*\*[A-Z]{1}[a-z]* /gm;

    let passengerName = "";
    let airportStartEnd = [];
    let flightNum = "";
    let company = "";
    let threeNamesMatch = threeNamesRegex.exec(stringToCheck);
    let twoNamesMatch = twoNamesRegex.exec(stringToCheck);
    
    switch (checkType) {
        case "all":
            if (twoNamesMatch) {
                passengerName = twoNamesMatch[0].trim().split("-").join(" ");
            } else if (threeNamesMatch) {
                passengerName = threeNamesMatch[0].trim().split("-").join(" ");
            }

            airportStartEnd = airportRegex.exec(stringToCheck)[0].trim().split("/");
            flightNum = flightNumRegex.exec(stringToCheck)[0].trim();
            company = companyRegex.exec(stringToCheck)[0].trim().split(/[- *]/gm).join(" ").trim();

            console.log(`Mr/Ms, ${passengerName}, your flight number ${flightNum} is from ${airportStartEnd[0]} to ${airportStartEnd[1]}. Have a nice flight with ${company}.`);
            break;
        case "name":
            if (twoNamesMatch) {
                passengerName = twoNamesMatch[0].trim().split("-").join(" ");
            } else if (threeNamesMatch) {
                passengerName = threeNamesMatch[0].trim().split("-").join(" ");;
            }

            if (twoNamesMatch || threeNamesMatch) {
                console.log(`Mr/Ms, ${passengerName}, have a nice flight!`);
            }
            break;
        case "flight":
            airportStartEnd = airportRegex.exec(stringToCheck)[0].trim().split("/");
            flightNum = flightNumRegex.exec(stringToCheck)[0].trim();

            console.log(`Your flight number ${flightNum} is from ${airportStartEnd[0]} to ${airportStartEnd[1]}.`);
            break;
        case "company":
            company = companyRegex.exec(stringToCheck)[0].trim().split(/[- *]/gm).join(" ").trim();

            console.log(`Have a nice flight with ${company}.`);
            break;
    }
}

// ticketsScan('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'name');
ticketsScan(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'name');